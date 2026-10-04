// POST /api/sppa — menerima pengajuan SPPA.
// Alur: parse (batas ukuran) → envelope (zod) → anti-bot → validasi per config produk →
// deklarasi → rate limit → verifikasi dokumen → simpan (retry nomor referensi) → notifikasi.
import { after, NextResponse } from "next/server";
import { DECLARATION_VERSION, validateDeclaration } from "@/lib/sppa/declaration";
import { getProduct, SPPA_SCHEMA_VERSION } from "@/lib/sppa/productConfig";
import { generateReferenceNo } from "@/lib/sppa/reference";
import { submissionEnvelope } from "@/lib/sppa/schema";
import { verifyDocuments, type DocRow } from "@/lib/sppa/server/documents";
import { buildAdminMessage, sendWhatsApp } from "@/lib/sppa/server/notify";
import { clientIp, getAdminClient, hashIp } from "@/lib/sppa/server/supabase";
import { extractSummary, missingDocuments, validateSubmission } from "@/lib/sppa/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 300 * 1024;
const MIN_FILL_MS = 8_000; // form sepanjang ini tidak mungkin terisi lebih cepat oleh manusia
const MAX_PER_IP_PER_HOUR = 8;

const fail = (status: number, message: string, extra: Record<string, unknown> = {}) =>
  NextResponse.json({ ok: false, message, ...extra }, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(req: Request) {
  const db = getAdminClient();
  if (!db) return fail(503, "Layanan pengajuan sedang tidak tersedia. Silakan hubungi kami via WhatsApp.");

  const text = await req.text();
  if (text.length > MAX_BODY_BYTES) return fail(413, "Data terlalu besar.");
  let json: unknown;
  try { json = JSON.parse(text); } catch { return fail(400, "Permintaan tidak valid."); }

  const env = submissionEnvelope.safeParse(json);
  if (!env.success) return fail(400, "Permintaan tidak valid.");
  const body = env.data;

  const age = Date.now() - body.startedAt;
  if (age < MIN_FILL_MS || age > 7 * 24 * 3600 * 1000) return fail(400, "Sesi formulir tidak valid. Muat ulang halaman lalu coba lagi.");

  const product = getProduct(body.product);
  if (!product) return fail(400, "Produk tidak dikenal.");

  const result = validateSubmission(product, body.values);
  if (!result.ok) return fail(422, "Masih ada isian yang perlu diperbaiki.", { errors: result.errors });

  const decErr = validateDeclaration(body.declaration.accepted);
  if (decErr) return fail(422, decErr, { errors: { declaration: decErr } });

  // Rate limit berbasis database (tahan terhadap instance serverless yang berbeda-beda).
  const ipHash = hashIp(clientIp(req));
  const since = new Date(Date.now() - 3600_000).toISOString();
  const { count } = await db.from("sppa_submissions").select("id", { count: "exact", head: true }).eq("ip_hash", ipHash).gte("created_at", since);
  if ((count ?? 0) >= MAX_PER_IP_PER_HOUR) return fail(429, "Terlalu banyak pengajuan dari perangkat ini. Silakan coba lagi nanti atau hubungi kami via WhatsApp.");

  // Dokumen: hanya yang lolos verifikasi isi file yang dipakai.
  let docs: DocRow[] = [];
  if (body.uploadSession) {
    const { data } = await db
      .from("sppa_documents")
      .select("id, doc_key, file_name, mime_type, size_bytes, storage_path")
      .eq("upload_session", body.uploadSession)
      .is("submission_id", null);
    const verified = await verifyDocuments(db, (data ?? []) as DocRow[]);
    docs = verified.good;
  }
  const missing = missingDocuments(product, result.values, docs.map((d) => d.doc_key));
  if (missing.length) {
    const msg = `Dokumen wajib belum diunggah: ${missing.map((m) => m.label).join(", ")}.`;
    return fail(422, msg, { errors: { documents: msg } });
  }

  const summary = extractSummary(product, result.values);
  if (!summary.applicantName) return fail(422, "Nama pemohon wajib diisi.");
  const now = new Date();

  // Nomor referensi unik dijamin constraint UNIQUE; ulangi jika bentrok.
  let referenceNo = "";
  let submissionId = "";
  for (let attempt = 0; attempt < 5 && !submissionId; attempt++) {
    const candidate = generateReferenceNo(now);
    const { data, error } = await db
      .from("sppa_submissions")
      .insert({
        reference_no: candidate,
        product: product.id,
        sub_type: summary.subType,
        status: "submitted",
        applicant_name: summary.applicantName,
        applicant_email: summary.applicantEmail,
        applicant_phone: summary.applicantPhone,
        currency: summary.currency,
        sum_insured: summary.sumInsured,
        policy_start: summary.policyStart,
        policy_end: summary.policyEnd,
        answers: result.values,
        schema_version: SPPA_SCHEMA_VERSION,
        declaration: { version: DECLARATION_VERSION, accepted: body.declaration.accepted, at: now.toISOString() },
        ip_hash: ipHash,
      })
      .select("id")
      .single();
    if (!error && data) { submissionId = data.id as string; referenceNo = candidate; }
    else if (error?.code !== "23505") return fail(500, "Pengajuan belum berhasil disimpan. Silakan coba lagi.");
  }
  if (!submissionId) return fail(500, "Pengajuan belum berhasil disimpan. Silakan coba lagi.");

  if (docs.length) await db.from("sppa_documents").update({ submission_id: submissionId }).in("id", docs.map((d) => d.id));
  await db.from("sppa_status_history").insert({ submission_id: submissionId, from_status: null, to_status: "submitted" });

  // Notifikasi setelah respons dikirim; kegagalan tidak memengaruhi pengajuan.
  after(async () => {
    const wa = await sendWhatsApp(
      buildAdminMessage({ referenceNo, productLabel: product.label, applicantName: summary.applicantName, applicantPhone: summary.applicantPhone, submittedAt: now }),
    );
    await db.from("sppa_submissions").update({ notify: { whatsapp: wa.ok ? "sent" : `failed:${wa.error}`, at: new Date().toISOString() } }).eq("id", submissionId);
  });

  return NextResponse.json(
    { ok: true, referenceNo, product: product.label, applicantName: summary.applicantName, submittedAt: now.toISOString(), status: "Menunggu Review" },
    { status: 201, headers: { "Cache-Control": "no-store" } },
  );
}

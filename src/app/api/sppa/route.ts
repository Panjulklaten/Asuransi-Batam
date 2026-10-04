// POST /api/sppa — menerima pengajuan SPPA tanpa database.
// Alur: batas ukuran → envelope (zod) → anti-bot → validasi per config produk → deklarasi →
// rate limit → kirim email lengkap ke admin (wajib berhasil) → WA ringkas (best-effort).
import { after, NextResponse } from "next/server";
import { validateDeclaration } from "@/lib/sppa/declaration";
import { getProduct } from "@/lib/sppa/productConfig";
import { generateReferenceNo } from "@/lib/sppa/reference";
import { submissionEnvelope } from "@/lib/sppa/schema";
import { buildEmail, emailConfigured, sendEmail } from "@/lib/sppa/server/email";
import { buildAdminMessage, buildApplicantMessage, sendWhatsApp } from "@/lib/sppa/server/notify";
import { clientIp, hashIp, rateLimited } from "@/lib/sppa/server/request";
import { extractSummary, requestedDocuments, validateSubmission } from "@/lib/sppa/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 300 * 1024;
const MIN_FILL_MS = 8_000; // form sepanjang ini tidak mungkin terisi lebih cepat oleh manusia
const MAX_PER_IP_PER_HOUR = 8;

const fail = (status: number, message: string, extra: Record<string, unknown> = {}) =>
  NextResponse.json({ ok: false, message, ...extra }, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(req: Request) {
  if (!emailConfigured()) {
    console.error("[sppa] RESEND_API_KEY atau SPPA_NOTIFY_EMAIL belum diisi di env Vercel");
    return fail(503, "Layanan pengajuan sedang tidak tersedia. Silakan hubungi kami via WhatsApp.");
  }

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

  if (rateLimited(hashIp(clientIp(req)), MAX_PER_IP_PER_HOUR, 3600_000)) {
    return fail(429, "Terlalu banyak pengajuan dari perangkat ini. Silakan coba lagi nanti atau hubungi kami via WhatsApp.");
  }

  const summary = extractSummary(product, result.values);
  if (!summary.applicantName) return fail(422, "Nama pemohon wajib diisi.");
  const now = new Date();
  const referenceNo = generateReferenceNo(now);

  // Email lengkap WAJIB terkirim: ini satu-satunya salinan data. Jika gagal, pengguna diberi tahu
  // dan datanya tetap ada di browser (draft), sehingga tidak ada pengajuan yang hilang diam-diam.
  const mail = await sendEmail({ ...buildEmail({ referenceNo, product, values: result.values, submittedAt: now, applicantName: summary.applicantName, applicantEmail: summary.applicantEmail }), replyTo: summary.applicantEmail });
  if (!mail.ok) {
    console.error("[sppa] kirim email gagal", { error: mail.error });
    return fail(502, "Pengajuan belum berhasil dikirim. Silakan coba lagi, atau hubungi kami via WhatsApp.");
  }

  // WA setelah respons dikirim; kegagalan tidak membatalkan pengajuan (email sudah terkirim).
  after(async () => {
    // 1) Konfirmasi ke pemohon: "data diterima, kami akan menghubungi".
    if (summary.applicantPhone) {
      const ok = await sendWhatsApp(buildApplicantMessage({ applicantName: summary.applicantName ?? "", referenceNo, productLabel: product.label }), summary.applicantPhone);
      if (!ok.ok) console.error("[sppa] WA ke pemohon gagal", { error: ok.error });
    }
    // 2) Notifikasi ringkas ke admin (opsional; dilewati jika ADMIN_WA_NUMBER kosong).
    const wa = await sendWhatsApp(
      buildAdminMessage({ referenceNo, productLabel: product.label, applicantName: summary.applicantName, applicantPhone: summary.applicantPhone, submittedAt: now }),
    );
    if (!wa.ok && wa.error !== "not_configured") console.error("[sppa] WA ke admin gagal", { error: wa.error });
  });

  return NextResponse.json(
    {
      ok: true,
      referenceNo,
      product: product.label,
      applicantName: summary.applicantName,
      submittedAt: now.toISOString(),
      status: "Menunggu Review",
      documents: requestedDocuments(product, result.values).map((d) => ({ label: d.label, required: !!d.required })),
    },
    { status: 201, headers: { "Cache-Control": "no-store" } },
  );
}

// POST /api/sppa/upload — meminta signed upload URL ke bucket privat Supabase.
// File TIDAK lewat server ini (menghindari batas body Vercel); isi file diverifikasi saat submit.
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { z } from "zod";
import { checkFileMeta, MAX_FILES_PER_DOCUMENT, sanitizeFileName } from "@/lib/sppa/fileCheck";
import { getProduct } from "@/lib/sppa/productConfig";
import { clientIp, DOCS_BUCKET, getAdminClient, hashIp, logDbError } from "@/lib/sppa/server/supabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const bodySchema = z.object({
  product: z.string().max(40),
  docKey: z.string().regex(/^[A-Za-z0-9]{1,40}$/),
  fileName: z.string().min(1).max(200),
  size: z.number().int().positive(),
  type: z.string().max(100),
  uploadSession: z.string().regex(UUID_RE).optional(),
});

const MAX_DOCS_PER_SESSION = 25;
const MAX_UPLOADS_PER_IP_PER_HOUR = 40;
const fail = (status: number, message: string) => NextResponse.json({ ok: false, message }, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(req: Request) {
  const db = getAdminClient();
  if (!db) return fail(503, "Unggah dokumen sedang tidak tersedia.");

  const text = await req.text();
  if (text.length > 4096) return fail(413, "Permintaan terlalu besar.");
  let json: unknown;
  try { json = JSON.parse(text); } catch { return fail(400, "Permintaan tidak valid."); }
  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) return fail(400, "Permintaan tidak valid.");
  const b = parsed.data;

  const product = getProduct(b.product);
  const spec = product?.documents.find((d) => d.key === b.docKey);
  if (!product || !spec) return fail(400, "Jenis dokumen tidak dikenal.");

  const metaErr = checkFileMeta({ name: b.fileName, size: b.size, type: b.type });
  if (metaErr) return fail(422, metaErr);

  const session = b.uploadSession ?? randomUUID();
  const ipHash = hashIp(clientIp(req));

  const since = new Date(Date.now() - 3600_000).toISOString();
  const { count: ipCount, error: cntErr } = await db.from("sppa_documents").select("id", { count: "exact", head: true }).eq("ip_hash", ipHash).gte("created_at", since);
  if (cntErr) logDbError("rate-limit sppa_documents", cntErr);
  if ((ipCount ?? 0) >= MAX_UPLOADS_PER_IP_PER_HOUR) return fail(429, "Terlalu banyak unggahan. Silakan coba lagi nanti.");

  const { data: existing } = await db.from("sppa_documents").select("doc_key").eq("upload_session", session).is("submission_id", null);
  const rows = existing ?? [];
  if (rows.length >= MAX_DOCS_PER_SESSION) return fail(422, "Jumlah dokumen sudah mencapai batas.");
  const sameKey = rows.filter((r) => r.doc_key === b.docKey).length;
  if (sameKey >= (spec.multiple ? MAX_FILES_PER_DOCUMENT : 1)) {
    return fail(422, spec.multiple ? `Maksimal ${MAX_FILES_PER_DOCUMENT} file untuk dokumen ini.` : "Dokumen ini sudah diunggah. Hapus dulu untuk mengganti.");
  }

  const safeName = sanitizeFileName(b.fileName);
  const ext = safeName.split(".").pop() ?? "bin";
  const path = `${session}/${b.docKey}/${randomUUID()}.${ext}`;

  const { data: signed, error } = await db.storage.from(DOCS_BUCKET).createSignedUploadUrl(path);
  if (error || !signed) { logDbError("createSignedUploadUrl (bucket sppa-documents)", error); return fail(500, "Gagal menyiapkan unggahan. Silakan coba lagi."); }

  const { error: insErr } = await db.from("sppa_documents").insert({
    upload_session: session, doc_key: b.docKey, file_name: safeName, mime_type: b.type, size_bytes: b.size, storage_path: path, ip_hash: ipHash,
  });
  if (insErr) { logDbError("insert sppa_documents", insErr); return fail(500, "Gagal menyiapkan unggahan. Silakan coba lagi."); }

  return NextResponse.json({ ok: true, uploadSession: session, path, signedUrl: signed.signedUrl, token: signed.token }, { headers: { "Cache-Control": "no-store" } });
}

// DELETE /api/sppa/upload — hapus dokumen yang belum di-submit (milik sesi upload yang sama).
const deleteSchema = z.object({ uploadSession: z.string().regex(UUID_RE), path: z.string().min(10).max(300) });

export async function DELETE(req: Request) {
  const db = getAdminClient();
  if (!db) return fail(503, "Layanan sedang tidak tersedia.");
  const parsed = deleteSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return fail(400, "Permintaan tidak valid.");
  const { uploadSession, path } = parsed.data;
  if (!path.startsWith(`${uploadSession}/`)) return fail(400, "Permintaan tidak valid.");

  const { data: row } = await db.from("sppa_documents").select("id").eq("upload_session", uploadSession).eq("storage_path", path).is("submission_id", null).maybeSingle();
  if (!row) return fail(404, "Dokumen tidak ditemukan.");
  await db.storage.from(DOCS_BUCKET).remove([path]);
  await db.from("sppa_documents").delete().eq("id", row.id);
  return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}

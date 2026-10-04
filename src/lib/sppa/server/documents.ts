import { checkFileContent } from "../fileCheck";
import { DOCS_BUCKET } from "./supabase";
import type { SupabaseClient } from "@supabase/supabase-js";

export interface DocRow {
  id: string;
  doc_key: string;
  file_name: string;
  mime_type: string;
  size_bytes: number;
  storage_path: string;
}

/** Baca 16 byte pertama + ukuran asli file dari storage privat (via signed URL jangka pendek). */
async function peek(db: SupabaseClient, path: string): Promise<{ head: Uint8Array; total: number } | null> {
  const { data, error } = await db.storage.from(DOCS_BUCKET).createSignedUrl(path, 60);
  if (error || !data?.signedUrl) return null;
  const res = await fetch(data.signedUrl, { headers: { Range: "bytes=0-15" }, signal: AbortSignal.timeout(8000) });
  if (!(res.status === 200 || res.status === 206)) return null;
  const buf = new Uint8Array(await res.arrayBuffer());
  const range = /\/(\d+)$/.exec(res.headers.get("content-range") ?? "");
  const total = range ? Number(range[1]) : buf.length;
  return { head: buf.slice(0, 16), total };
}

/**
 * Verifikasi dokumen yang sudah diunggah: file ada, ukuran sesuai batas, dan isi (magic bytes)
 * cocok dengan jenis yang diklaim. Dokumen yang gagal dihapus dari storage dan tabel.
 */
export async function verifyDocuments(db: SupabaseClient, rows: DocRow[]): Promise<{ good: DocRow[]; bad: { row: DocRow; reason: string }[] }> {
  const good: DocRow[] = [];
  const bad: { row: DocRow; reason: string }[] = [];
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const info = await peek(db, row.storage_path);
    let reason: string | null = null;
    if (!info) reason = "File belum terunggah dengan benar.";
    else if (info.total > 8 * 1024 * 1024) reason = "Ukuran file melebihi 8 MB.";
    else reason = checkFileContent(info.head, row.mime_type, row.file_name);
    if (reason) {
      bad.push({ row, reason });
      await db.storage.from(DOCS_BUCKET).remove([row.storage_path]);
      await db.from("sppa_documents").delete().eq("id", row.id);
    } else good.push(row);
  }
  return { good, bad };
}

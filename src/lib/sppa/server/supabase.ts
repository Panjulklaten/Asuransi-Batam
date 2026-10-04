// Klien Supabase KHUSUS SERVER (service-role). Jangan impor file ini dari komponen klien.
import { createHash } from "crypto";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export const DOCS_BUCKET = "sppa-documents";

let cached: SupabaseClient | null = null;

/** null jika env belum diisi → API membalas 503 dengan pesan ramah, bukan crash. */
export function getAdminClient(): SupabaseClient | null {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  if (!cached) cached = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
  return cached;
}

export function clientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  return (xff ? xff.split(",")[0] : req.headers.get("x-real-ip") ?? "unknown").trim();
}

/** Hash IP + salt (IP mentah tidak disimpan). */
export function hashIp(ip: string): string {
  return createHash("sha256").update(`${process.env.SPPA_IP_SALT ?? ""}|${ip}`).digest("hex").slice(0, 32);
}

/** Log galat Supabase ke Vercel Logs tanpa data pribadi (hanya konteks, kode, dan pesan galat dari database/storage). */
export function logDbError(where: string, err: { code?: string; message?: string; hint?: string; details?: string; name?: string; statusCode?: string | number } | null | undefined) {
  console.error(`[sppa] ${where} gagal`, { code: err?.code ?? err?.statusCode, name: err?.name, message: err?.message, hint: err?.hint, details: err?.details });
}

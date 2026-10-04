// Utilitas request: IP klien, hash IP (IP mentah tidak disimpan), dan pembatas laju sederhana.
import { createHash } from "crypto";

export function clientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  return (xff ? xff.split(",")[0] : req.headers.get("x-real-ip") ?? "unknown").trim();
}

export function hashIp(ip: string): string {
  return createHash("sha256").update(`${process.env.SPPA_IP_SALT ?? ""}|${ip}`).digest("hex").slice(0, 32);
}

// Pembatas laju in-memory per instance serverless: hanya lapisan tambahan (best-effort).
// Perlindungan utama: honeypot, waktu isi minimum, validasi server, dan Vercel Firewall.
const hits = new Map<string, number[]>();

export function rateLimited(key: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= max) { hits.set(key, recent); return true; }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) hits.forEach((v, k) => { if (!v.some((t) => now - t < windowMs)) hits.delete(k); });
  return false;
}

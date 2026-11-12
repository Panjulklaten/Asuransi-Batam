// Token sesi stateless bertanda tangan HMAC-SHA256 (tanpa dependensi). Murni kripto → mudah diuji.
import { createHash, createHmac, timingSafeEqual } from "node:crypto";

export interface SessionPayload {
  sub: string; // email admin
  iat: number; // detik epoch
  exp: number;
  pv: string; // versi password: mengganti password otomatis mencabut semua sesi lama
}

export const SESSION_TTL_SECONDS = 12 * 60 * 60;

const b64 = (b: Buffer | string) => Buffer.from(b).toString("base64url");
const mac = (data: string, secret: string) => createHmac("sha256", secret).update(data).digest();

export const passwordVersion = (passwordHash: string) => createHash("sha256").update(passwordHash).digest("hex").slice(0, 16);

export function signSession(payload: SessionPayload, secret: string): string {
  const body = b64(JSON.stringify(payload));
  return `${body}.${b64(mac(body, secret))}`;
}

export function verifySession(token: string | undefined | null, secret: string, expectedPv: string, nowSec = Math.floor(Date.now() / 1000)): SessionPayload | null {
  if (!token || !secret || secret.length < 32) return null;
  const [body, sig, extra] = token.split(".");
  if (!body || !sig || extra !== undefined) return null;
  const expected = mac(body, secret);
  const given = Buffer.from(sig, "base64url");
  if (given.length !== expected.length || !timingSafeEqual(given, expected)) return null;
  try {
    const p = JSON.parse(Buffer.from(body, "base64url").toString("utf8")) as SessionPayload;
    if (typeof p.sub !== "string" || typeof p.exp !== "number" || typeof p.iat !== "number" || typeof p.pv !== "string") return null;
    if (p.exp <= nowSec || p.iat > nowSec + 60) return null;
    if (p.pv !== expectedPv) return null;
    return p;
  } catch {
    return null;
  }
}

// Hash & verifikasi password (scrypt bawaan Node; tanpa dependensi). TANPA "server-only" supaya bisa dipakai skrip CLI.
// Format: scrypt:N:r:p:salt:hash (base64url; sengaja tanpa tanda "$" agar tidak diexpand oleh dotenv/Next).
import { randomBytes, scrypt, scryptSync, timingSafeEqual } from "node:crypto";

const N = 16384, R = 8, P = 1, KEYLEN = 32;
const OPTS = { N, r: R, p: P, maxmem: 64 * 1024 * 1024 };

const b64 = (b: Buffer) => b.toString("base64url");

export function hashPassword(password: string): string {
  const salt = randomBytes(16);
  const key = scryptSync(password.normalize("NFKC"), salt, KEYLEN, OPTS);
  return ["scrypt", N, R, P, b64(salt), b64(key)].join(":");
}

export function verifyPassword(password: string, stored: string): Promise<boolean> {
  return new Promise((resolve) => {
    const parts = stored.split(":");
    if (parts.length !== 6 || parts[0] !== "scrypt") return resolve(false);
    const [, n, r, p, saltB64, hashB64] = parts;
    const salt = Buffer.from(saltB64, "base64url");
    const expected = Buffer.from(hashB64, "base64url");
    const params = { N: Number(n), r: Number(r), p: Number(p), maxmem: 64 * 1024 * 1024 };
    if (!salt.length || !expected.length || ![params.N, params.r, params.p].every((v) => Number.isInteger(v) && v > 0)) return resolve(false);
    if (params.N > 1 << 20) return resolve(false); // cegah parameter berbahaya
    try {
      scrypt(password.normalize("NFKC"), salt, expected.length, params, (err, key) => {
        if (err) return resolve(false);
        resolve(key.length === expected.length && timingSafeEqual(key, expected));
      });
    } catch {
      resolve(false); // parameter scrypt tidak valid pada hash yang rusak
    }
  });
}

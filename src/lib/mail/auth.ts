// Autentikasi admin webmail: satu akun dari environment (tidak ada registrasi publik, tidak ada tabel user).
// Password disimpan sebagai hash scrypt; sesi = cookie HttpOnly + SameSite=Strict + Secure (produksi).
import "server-only";
import { createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { mailEnv, missingEnv } from "./config";
import { verifyPassword } from "./password";
import { passwordVersion, SESSION_TTL_SECONDS, signSession, verifySession } from "./session";
import { db } from "./supabase";

const isProd = process.env.NODE_ENV === "production";
// Prefiks __Host- mewajibkan Secure+Path=/ tanpa Domain; hanya dipakai di produksi (HTTPS).
export const SESSION_COOKIE = isProd ? "__Host-mail_session" : "mail_session";

const MAX_FAILED = 8;
const WINDOW_MIN = 15;

const sha = (s: string) => createHash("sha256").update(s).digest();
const safeEq = (a: string, b: string) => timingSafeEqual(sha(a), sha(b));

export async function getSession(): Promise<{ email: string } | null> {
  const hash = mailEnv.adminPasswordHash();
  if (!hash) return null;
  const jar = await cookies();
  const p = verifySession(jar.get(SESSION_COOKIE)?.value, mailEnv.sessionSecret(), passwordVersion(hash));
  if (!p || !safeEq(p.sub, mailEnv.adminEmail())) return null;
  return { email: p.sub };
}

/** Untuk route handler: null = lolos; selain itu kembalikan respons 401 apa adanya. */
export async function requireAdmin(): Promise<NextResponse | null> {
  if ((await getSession()) !== null) return null;
  return NextResponse.json({ ok: false, message: "Silakan login." }, { status: 401, headers: { "Cache-Control": "no-store" } });
}

export function clientIpHash(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  const ip = (xff ? xff.split(",")[0] : req.headers.get("x-real-ip") ?? "unknown").trim();
  return createHash("sha256").update(`${mailEnv.sessionSecret()}|${ip}`).digest("hex").slice(0, 32);
}

export type LoginResult = { ok: true; res: NextResponse } | { ok: false; status: number; message: string };

export async function attemptLogin(req: Request, email: string, password: string): Promise<LoginResult> {
  if (missingEnv("auth").length || missingEnv("db").some((k) => k.startsWith("SUPABASE"))) {
    console.error("[mail] login: konfigurasi belum lengkap", [...missingEnv("auth"), ...missingEnv("db")]);
    return { ok: false, status: 503, message: "Webmail belum dikonfigurasi." };
  }
  const ipHash = clientIpHash(req);
  const since = new Date(Date.now() - WINDOW_MIN * 60_000).toISOString();

  const { count, error } = await db().from("mail_login_attempts").select("id", { count: "exact", head: true }).eq("ip_hash", ipHash).gte("attempted_at", since);
  if (error) {
    console.error("[mail] login: gagal cek throttle", error.message);
    return { ok: false, status: 503, message: "Layanan belum siap. Coba lagi nanti." };
  }
  if ((count ?? 0) >= MAX_FAILED) return { ok: false, status: 429, message: "Terlalu banyak percobaan. Coba lagi dalam beberapa menit." };

  // Selalu jalankan verifikasi hash (waktu konstan terhadap email salah/benar).
  const passOk = await verifyPassword(password, mailEnv.adminPasswordHash());
  const emailOk = safeEq(email.trim().toLowerCase(), mailEnv.adminEmail());
  if (!(passOk && emailOk)) {
    await db().from("mail_login_attempts").insert({ ip_hash: ipHash });
    void db().from("mail_login_attempts").delete().lt("attempted_at", new Date(Date.now() - 24 * 3600_000).toISOString());
    return { ok: false, status: 401, message: "Email atau password salah." };
  }

  const now = Math.floor(Date.now() / 1000);
  const token = signSession(
    { sub: mailEnv.adminEmail(), iat: now, exp: now + SESSION_TTL_SECONDS, pv: passwordVersion(mailEnv.adminPasswordHash()) },
    mailEnv.sessionSecret(),
  );
  const res = NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  res.cookies.set(SESSION_COOKIE, token, { httpOnly: true, secure: isProd, sameSite: "strict", path: "/", maxAge: SESSION_TTL_SECONDS });
  await db().from("mail_login_attempts").delete().eq("ip_hash", ipHash); // sukses → reset hitungan
  return { ok: true, res };
}

export function clearSession(res: NextResponse): NextResponse {
  res.cookies.set(SESSION_COOKIE, "", { httpOnly: true, secure: isProd, sameSite: "strict", path: "/", maxAge: 0 });
  return res;
}

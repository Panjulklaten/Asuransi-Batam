// POST /api/mail/auth/login — satu-satunya jalur masuk webmail (tidak ada registrasi).
import { z } from "zod";
import { attemptLogin } from "@/lib/mail/auth";
import { fail, sameOriginOk } from "@/lib/mail/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const body = z.object({ email: z.string().trim().min(3).max(254), password: z.string().min(1).max(200) });

export async function POST(req: Request) {
  if (!sameOriginOk(req)) return fail(403, "Permintaan ditolak.");
  const text = await req.text();
  if (text.length > 2_000) return fail(413, "Permintaan terlalu besar.");
  let json: unknown;
  try { json = JSON.parse(text); } catch { return fail(400, "Permintaan tidak valid."); }
  const parsed = body.safeParse(json);
  if (!parsed.success) return fail(400, "Email dan password wajib diisi.");
  try {
    const r = await attemptLogin(req, parsed.data.email, parsed.data.password);
    return r.ok ? r.res : fail(r.status, r.message);
  } catch (e) {
    console.error("[mail] login error", e);
    return fail(500, "Terjadi kesalahan. Coba lagi.");
  }
}

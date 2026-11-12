// Helper respons & perlindungan CSRF untuk semua route /api/mail.
import "server-only";
import { NextResponse } from "next/server";

export const noStore = { "Cache-Control": "no-store, max-age=0" } as const;

export const ok = (data: Record<string, unknown> = {}, status = 200) => NextResponse.json({ ok: true, ...data }, { status, headers: noStore });
export const fail = (status: number, message: string, extra: Record<string, unknown> = {}) =>
  NextResponse.json({ ok: false, message, ...extra }, { status, headers: noStore });

/**
 * Perlindungan CSRF lapis kedua (cookie sudah SameSite=Strict): untuk request yang mengubah data,
 * header Origin harus sama dengan host yang diakses. Request tanpa Origin ditolak.
 */
export function sameOriginOk(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return false;
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  try {
    return !!host && new URL(origin).host === host;
  } catch {
    return false;
  }
}

export const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

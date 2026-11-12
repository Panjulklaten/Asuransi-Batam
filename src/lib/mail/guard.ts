// Penjaga untuk semua route /api/mail yang butuh login.
import "server-only";
import type { NextResponse } from "next/server";
import { requireAdmin } from "./auth";
import { fail, sameOriginOk } from "./http";

/** null = boleh lanjut. `mutating` = POST/PATCH/DELETE → wajib same-origin (CSRF). */
export async function guard(req: Request, mutating: boolean): Promise<NextResponse | null> {
  const denied = await requireAdmin();
  if (denied) return denied;
  if (mutating && !sameOriginOk(req)) return fail(403, "Permintaan ditolak.");
  return null;
}

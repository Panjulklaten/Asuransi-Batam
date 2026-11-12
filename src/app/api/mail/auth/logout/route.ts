import { NextResponse } from "next/server";
import { clearSession } from "@/lib/mail/auth";
import { fail, noStore, sameOriginOk } from "@/lib/mail/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  if (!sameOriginOk(req)) return fail(403, "Permintaan ditolak.");
  return clearSession(NextResponse.json({ ok: true }, { headers: noStore }));
}

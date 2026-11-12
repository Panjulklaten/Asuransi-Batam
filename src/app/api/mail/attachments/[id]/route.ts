// GET /api/mail/attachments/[id] — unduh lampiran (wajib login). Mengalihkan ke URL bertanda tangan berumur 60 detik
// dengan Content-Disposition: attachment, sehingga file tidak pernah dirender di origin kita.
import { NextResponse } from "next/server";
import { guard } from "@/lib/mail/guard";
import { fail, noStore, UUID_RE } from "@/lib/mail/http";
import { signedDownloadUrl } from "@/lib/mail/store";
import { db } from "@/lib/mail/supabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const denied = await guard(req, false);
  if (denied) return denied;
  const { id } = await params;
  if (!UUID_RE.test(id)) return fail(400, "ID tidak valid.");
  try {
    const { data } = await db().from("email_attachments").select("filename,storage_path,stored").eq("id", id).maybeSingle();
    if (!data?.stored || !data.storage_path) return fail(404, "Lampiran tidak tersimpan.");
    const url = await signedDownloadUrl(data.storage_path, data.filename);
    if (!url) return fail(502, "Gagal membuat tautan unduhan.");
    return NextResponse.redirect(url, { status: 302, headers: noStore });
  } catch (e) {
    console.error("[mail] attachment", e);
    return fail(500, "Gagal mengunduh lampiran.");
  }
}

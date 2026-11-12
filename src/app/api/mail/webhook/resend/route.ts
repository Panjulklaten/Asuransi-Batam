// POST /api/mail/webhook/resend — penerima webhook Resend `email.received`.
// Tidak memakai sesi; keamanan = verifikasi tanda tangan Svix atas BODY MENTAH + idempotensi svix-id.
import { NextResponse } from "next/server";
import { Webhook } from "svix";
import { mailEnv, missingEnv } from "@/lib/mail/config";
import { processReceivedEmail, type ReceivedEvent } from "@/lib/mail/inbound";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60; // mengunduh lampiran bisa memakan waktu

const json = (body: Record<string, unknown>, status = 200) => NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(req: Request) {
  const missing = missingEnv("inbound");
  if (missing.length) {
    console.error("[mail] webhook: env belum lengkap", missing);
    return json({ ok: false, message: "not_configured" }, 503);
  }

  const payload = await req.text(); // WAJIB mentah: tanda tangan sensitif terhadap perubahan sekecil apa pun
  if (payload.length > 1_000_000) return json({ ok: false, message: "too_large" }, 413);

  const id = req.headers.get("svix-id");
  const timestamp = req.headers.get("svix-timestamp");
  const signature = req.headers.get("svix-signature");
  if (!id || !timestamp || !signature) return json({ ok: false, message: "invalid_webhook" }, 400);

  let event: ReceivedEvent;
  try {
    new Webhook(mailEnv.webhookSecret()).verify(payload, { "svix-id": id, "svix-timestamp": timestamp, "svix-signature": signature });
    event = JSON.parse(payload) as ReceivedEvent;
  } catch {
    return json({ ok: false, message: "invalid_webhook" }, 400);
  }

  try {
    const outcome = await processReceivedEmail(id, event);
    return json({ ok: true, ...outcome });
  } catch (e) {
    // 500 → Resend mengulang pengiriman; pemrosesan idempoten sehingga aman.
    console.error("[mail] webhook gagal diproses", e instanceof Error ? e.message : e);
    return json({ ok: false, message: "processing_failed" }, 500);
  }
}

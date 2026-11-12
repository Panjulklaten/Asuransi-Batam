// Klien REST Resend (tanpa SDK, selaras dengan src/lib/sppa/server/email.ts). Kunci API hanya di server.
// Endpoint mengikuti dokumentasi Resend (diverifikasi 11 Nov 2026):
//   GET  /emails/receiving/{id}                 → isi email masuk (html, text, headers, attachments)
//   GET  /emails/receiving/{id}/attachments     → daftar lampiran + download_url (berlaku 1 jam)
//   POST /emails  (+ Idempotency-Key)           → kirim email
//   GET  /emails/{id}                           → email terkirim, termasuk message_id
import "server-only";
import { mailEnv } from "./config";

const BASE = "https://api.resend.com";
const UA = "asuransibatam-webmail/1.0";

export type ResendResult<T> = { ok: true; data: T } | { ok: false; status: number; error: string };

async function call<T>(path: string, init: { method?: string; body?: unknown; idempotencyKey?: string; timeoutMs?: number } = {}): Promise<ResendResult<T>> {
  const key = mailEnv.resendApiKey();
  if (!key) return { ok: false, status: 0, error: "RESEND_API_KEY belum diisi" };
  try {
    const res = await fetch(`${BASE}${path}`, {
      method: init.method ?? "GET",
      headers: {
        Authorization: `Bearer ${key}`,
        "User-Agent": UA, // tanpa User-Agent Resend dapat menjawab 403 (kode 1010)
        ...(init.body !== undefined ? { "Content-Type": "application/json" } : {}),
        ...(init.idempotencyKey ? { "Idempotency-Key": init.idempotencyKey } : {}),
      },
      body: init.body !== undefined ? JSON.stringify(init.body) : undefined,
      cache: "no-store",
      signal: AbortSignal.timeout(init.timeoutMs ?? 20_000),
    });
    const json = (await res.json().catch(() => null)) as (T & { name?: string; message?: string }) | null;
    if (!res.ok || !json) return { ok: false, status: res.status, error: `${json?.name ?? "error"}: ${json?.message ?? res.statusText}`.slice(0, 300) };
    return { ok: true, data: json as T };
  } catch (e) {
    return { ok: false, status: 0, error: e instanceof Error ? e.message : "network" };
  }
}

export interface ReceivedAttachmentMeta { id: string; filename?: string | null; content_type?: string | null; content_disposition?: string | null; content_id?: string | null; size?: number | null }
export interface ReceivedEmail {
  id: string;
  from: string;
  to: string[];
  cc?: string[];
  bcc?: string[];
  reply_to?: string[];
  subject?: string | null;
  html?: string | null;
  text?: string | null;
  headers?: Record<string, unknown> | null;
  message_id?: string | null;
  created_at: string;
  authentication?: { spf?: string; dkim?: string; dmarc?: string } | null;
  attachments?: ReceivedAttachmentMeta[];
}
export interface ReceivedAttachment extends ReceivedAttachmentMeta { download_url: string; expires_at?: string }

export const getReceivedEmail = (id: string) => call<ReceivedEmail>(`/emails/receiving/${encodeURIComponent(id)}`);
export const listReceivedAttachments = (emailId: string) =>
  call<{ data: ReceivedAttachment[] }>(`/emails/receiving/${encodeURIComponent(emailId)}/attachments`);

export interface SendPayload {
  from: string;
  to: string[];
  cc?: string[];
  bcc?: string[];
  subject: string;
  html: string;
  text: string;
  headers?: Record<string, string>;
  attachments?: { filename: string; content: string }[]; // content = Base64
}
export const sendEmail = (payload: SendPayload, idempotencyKey: string) =>
  call<{ id: string }>("/emails", { method: "POST", body: payload, idempotencyKey, timeoutMs: 30_000 });

export const getSentEmail = (id: string) => call<{ id: string; message_id?: string | null }>(`/emails/${encodeURIComponent(id)}`);

/** Unduh isi lampiran dari download_url bertanda tangan. Hanya HTTPS, bukan host internal. */
export async function downloadFile(url: string, maxBytes: number): Promise<{ ok: true; data: Buffer } | { ok: false; error: string }> {
  let u: URL;
  try { u = new URL(url); } catch { return { ok: false, error: "url_invalid" }; }
  if (u.protocol !== "https:" || /^(localhost|127\.|10\.|192\.168\.|169\.254\.|\[)/i.test(u.hostname) || /^\d+\.\d+\.\d+\.\d+$/.test(u.hostname)) return { ok: false, error: "url_blocked" };
  try {
    const res = await fetch(u, { cache: "no-store", signal: AbortSignal.timeout(45_000) });
    if (!res.ok) return { ok: false, error: `http_${res.status}` };
    const len = Number(res.headers.get("content-length") ?? 0);
    if (len > maxBytes) return { ok: false, error: "too_large" };
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length > maxBytes) return { ok: false, error: "too_large" };
    return { ok: true, data: buf };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "network" };
  }
}

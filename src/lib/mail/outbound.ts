// Pengiriman email + threading keluar (In-Reply-To / References).
import "server-only";
import { db } from "./supabase";
import { type OutFile } from "./attachments";
import { mailEnv, missingEnv } from "./config";
import { safeDisplayName } from "./addresses";
import { getSentEmail, sendEmail } from "./resend";
import { escapeHtml, htmlToText, sanitizeEmailHtml, textToHtml } from "./sanitize";
import { signatureHtml, signatureText } from "./signature";
import { createThread, getAccountId, markThread, must, storeAttachment } from "./store";
import { buildReplyHeaders, makeSnippet, normalizeMessageId, normalizeSubject, replySubject } from "./threading";

type Row = Record<string, unknown>;

export interface SendInput {
  to: string[];
  cc: string[];
  subject: string;
  text: string;
  threadId: string | null;
  replyToMessageId: string | null; // id baris email_messages yang dibalas
  requestId: string; // UUID dari klien → kunci idempotensi
  signature?: boolean; // tambahkan tanda tangan Asuransi Batam di email yang dikirim (tidak disimpan di riwayat thread)
  files: OutFile[];
}
export type SendResult = { ok: true; threadId: string; messageId: string; warning?: string } | { ok: false; status: number; message: string };

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Ambil Message-ID asli yang diberikan Resend untuk email keluar (GET /emails/{id}). */
export async function fetchOutboundMessageId(resendEmailId: string, attempts = 3): Promise<string | null> {
  for (let i = 0; i < attempts; i++) {
    const r = await getSentEmail(resendEmailId);
    const mid = r.ok ? normalizeMessageId(r.data.message_id) : null;
    if (mid) return mid;
    if (i < attempts - 1) await sleep(500 * (i + 1));
  }
  return null;
}

/** Lengkapi message_id pesan keluar yang belum sempat terisi (dipanggil malas-malasan saat dibutuhkan). */
export async function resolveMissingMessageIds(limit = 10): Promise<number> {
  const since = new Date(Date.now() - 7 * 24 * 3600_000).toISOString();
  const rows = must(
    await db().from("email_messages").select("id,resend_email_id").eq("direction", "outbound").is("message_id", null).not("resend_email_id", "is", null).gte("created_at", since).order("created_at", { ascending: false }).limit(limit),
    "pending_ids",
  ) as Row[];
  let n = 0;
  for (const r of rows) {
    const mid = await fetchOutboundMessageId(r.resend_email_id as string, 1);
    if (!mid) continue;
    const up = await db().from("email_messages").update({ message_id: mid }).eq("id", r.id as string);
    if (!up.error) n++;
  }
  return n;
}

function quotedBlock(parent: Row): { html: string; text: string } {
  const when = new Date((parent.received_at ?? parent.sent_at ?? parent.created_at ?? Date.now()) as string);
  const date = new Intl.DateTimeFormat("id-ID", { dateStyle: "full", timeStyle: "short", timeZone: "Asia/Jakarta" }).format(when);
  const who = `${(parent.from_name as string) || (parent.from_email as string)} <${parent.from_email as string}>`;
  const bodyText = ((parent.text_body as string) || (typeof parent.html_body === "string" ? htmlToText(parent.html_body) : "") || "").slice(0, 20_000);
  const bodyHtml = typeof parent.html_body === "string" && parent.html_body
    ? sanitizeEmailHtml((parent.html_body as string).slice(0, 200_000), { allowRemoteImages: false, allowDataImages: false }).html
    : `<div style="white-space:pre-wrap">${escapeHtml(bodyText)}</div>`;
  const header = `Pada ${date} WIB, ${who} menulis:`;
  return {
    html: `<br><div class="gmail_quote"><div>${escapeHtml(header)}</div><blockquote class="gmail_quote" style="margin:0 0 0 .8ex;border-left:1px solid #cccccc;padding-left:1ex">${bodyHtml}</blockquote></div>`,
    text: `\n\n${header}\n${bodyText.split("\n").slice(0, 200).map((l) => `> ${l}`).join("\n")}`,
  };
}

export async function sendMail(input: SendInput): Promise<SendResult> {
  const missing = missingEnv("send");
  if (missing.length) {
    console.error("[mail] kirim: env belum lengkap", missing);
    return { ok: false, status: 503, message: "Pengiriman belum dikonfigurasi (cek environment server)." };
  }
  const accountId = await getAccountId();

  // ── Tentukan induk balasan ────────────────────────────────────────────────
  let thread: Row | null = null;
  let parent: Row | null = null;
  let replyHeaders: { inReplyTo: string; references: string[] } | null = null;

  if (input.threadId) {
    thread = (await db().from("email_threads").select("id,subject,account_id").eq("id", input.threadId).maybeSingle()).data as Row | null;
    if (!thread || thread.account_id !== accountId) return { ok: false, status: 404, message: "Percakapan tidak ditemukan." };

    const msgs = must(
      await db().from("email_messages").select("id,direction,message_id,in_reply_to,references_ids,resend_email_id,from_email,from_name,to_emails,text_body,html_body,received_at,sent_at,created_at,sort_at").eq("thread_id", input.threadId).order("sort_at", { ascending: false }).limit(50),
      "thread_messages",
    ) as Row[];
    parent = input.replyToMessageId ? (msgs.find((m) => m.id === input.replyToMessageId) ?? null) : (msgs[0] ?? null);
    if (input.replyToMessageId && !parent) return { ok: false, status: 400, message: "Pesan yang dibalas tidak ada di percakapan ini." };

    if (parent && !parent.message_id && parent.resend_email_id) {
      const mid = await fetchOutboundMessageId(parent.resend_email_id as string, 2);
      if (mid) { parent.message_id = mid; await db().from("email_messages").update({ message_id: mid }).eq("id", parent.id as string); }
    }
    // Induk tak punya Message-ID → pakai pesan terdekat sebelumnya yang punya, supaya rantai tetap tersambung.
    const anchor = parent?.message_id ? parent : msgs.find((m) => m.message_id) ?? null;
    if (anchor?.message_id) {
      replyHeaders = buildReplyHeaders({ message_id: anchor.message_id as string, in_reply_to: (anchor.in_reply_to as string) ?? null, references_ids: (anchor.references_ids as string[]) ?? [] });
    } else console.warn("[mail] balasan tanpa Message-ID induk; threading di sisi penerima mengandalkan subject", { thread: input.threadId });
  }

  const subject = thread ? replySubject((input.subject.trim() || (thread.subject as string) || "").slice(0, 300)) : input.subject.trim().slice(0, 300);
  const quote = parent ? quotedBlock(parent) : null;
  const sig = input.signature !== false;
  const html = textToHtml(input.text) + (sig ? signatureHtml() : "") + (quote?.html ?? "");
  const text = input.text + (sig ? `\n\n${signatureText()}` : "") + (quote?.text ?? "");

  const from = `${safeDisplayName(mailEnv.fromName()) || "Asuransi Batam"} <${mailEnv.fromAddress()}>`;
  const sent = await sendEmail(
    {
      from, to: input.to, ...(input.cc.length ? { cc: input.cc } : {}), subject, html, text,
      ...(replyHeaders ? { headers: { "In-Reply-To": replyHeaders.inReplyTo, References: replyHeaders.references.join(" ") } } : {}),
      ...(input.files.length ? { attachments: input.files.map((f) => ({ filename: f.filename, content: f.data.toString("base64") })) } : {}),
    },
    `mail-send-${input.requestId}`,
  );
  if (!sent.ok) {
    console.error("[mail] resend send gagal", sent.status, sent.error);
    return { ok: false, status: sent.status === 429 ? 429 : 502, message: `Email gagal dikirim: ${sent.error}` };
  }
  const resendId = sent.data.id;
  const nowIso = new Date().toISOString();

  // ── Simpan (email SUDAH terkirim; kegagalan simpan dilaporkan jujur) ────────
  try {
    const dup = await db().from("email_messages").select("id,thread_id").eq("direction", "outbound").eq("resend_email_id", resendId).maybeSingle();
    if (dup.data) return { ok: true, threadId: (dup.data as Row).thread_id as string, messageId: (dup.data as Row).id as string }; // percobaan ulang requestId yang sama

    const threadId = thread ? (thread.id as string) : await createThread({ subject, normalizedSubject: normalizeSubject(subject), folder: "sent" });
    const ins = await db().from("email_messages").insert({
      thread_id: threadId, account_id: accountId, direction: "outbound", message_id: null, in_reply_to: replyHeaders?.inReplyTo ?? null,
      references_ids: replyHeaders?.references ?? [], resend_email_id: resendId, from_email: mailEnv.fromAddress(), from_name: mailEnv.fromName(),
      to_emails: input.to, cc_emails: input.cc, subject, text_body: input.text, html_body: textToHtml(input.text), snippet: makeSnippet(input.text),
      sent_at: nowIso, read_at: nowIso,
    }).select("id").single();
    const msgRow = must(ins, "insert_outbound") as Row;
    const msgId = msgRow.id as string;

    let warning: string | undefined;
    for (const f of input.files) {
      try {
        const st = await storeAttachment(msgId, f.filename, f.data, f.contentType);
        must(await db().from("email_attachments").insert({ id: st.id, message_id: msgId, filename: f.filename, content_type: f.contentType, size_bytes: f.data.length, content_disposition: "attachment", storage_path: st.path, stored: true }).select("id"), "insert_att");
      } catch (e) {
        console.error("[mail] simpan lampiran keluar gagal", e);
        warning = "Email terkirim, tetapi salinan lampiran gagal disimpan.";
        await db().from("email_attachments").insert({ message_id: msgId, filename: f.filename, content_type: f.contentType, size_bytes: f.data.length, content_disposition: "attachment", stored: false, error: "storage_failed" });
      }
    }

    // Message-ID asli agar balasan pelanggan dapat disambungkan ke thread ini.
    const mid = await fetchOutboundMessageId(resendId, 3);
    if (mid) {
      const up = await db().from("email_messages").update({ message_id: mid }).eq("id", msgId);
      if (up.error) console.error("[mail] set message_id gagal", up.error.message);
    } else {
      console.warn("[mail] Message-ID email keluar belum tersedia; akan dilengkapi otomatis saat dibutuhkan", { resendId });
    }

    if (thread) await markThread(threadId, true);
    return { ok: true, threadId, messageId: msgId, ...(warning ? { warning } : {}) };
  } catch (e) {
    console.error("[mail] email terkirim tetapi gagal disimpan", resendId, e);
    return { ok: false, status: 500, message: "Email sudah terkirim, tetapi gagal disimpan ke riwayat. Jangan kirim ulang; cek log server." };
  }
}

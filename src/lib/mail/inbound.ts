// Pemrosesan email masuk dari webhook Resend `email.received`.
// Webhook HANYA berisi metadata → isi email (html/text/headers) & lampiran diambil lewat Receiving API.
import "server-only";
import { db } from "./supabase";
import { parseAddress, parseAddressList } from "./addresses";
import { MAIL_LIMITS } from "./config";
import { downloadFile, getReceivedEmail, listReceivedAttachments, type ReceivedEmail } from "./resend";
import { htmlToText } from "./sanitize";
import { bumpThreadToInbox, createThread, getAccountId, must, storeAttachment } from "./store";
import { resolveMissingMessageIds } from "./outbound";
import { extractMessageIds, hasReplyPrefix, headerValue, makeSnippet, normalizeMessageId, normalizeSubject, pickThreadByHeaders } from "./threading";

type Row = Record<string, unknown>;

export interface ReceivedEvent {
  type: string;
  created_at?: string;
  data: { email_id: string; message_id?: string; from?: string; subject?: string; created_at?: string; attachments?: unknown[] };
}
export type InboundOutcome = { status: "processed" | "duplicate" | "ignored"; threadId?: string; note?: string };

// Nilai yang aman dipakai di filter PostgREST (tanpa koma/kurung/kutip).
const dbSafe = (id: string) => /^<[^<>\s"(),\\]+>$/.test(id);

async function findThreadByHeaders(mid: string | null, inReplyTo: string | null, refs: string[]): Promise<string | null> {
  const candidates = [...new Set([inReplyTo, ...refs].filter((x): x is string => !!x && dbSafe(x)))];
  const known = new Map<string, string>();
  if (candidates.length) {
    const rows = must(await db().from("email_messages").select("message_id,thread_id").in("message_id", candidates), "match_headers") as Row[];
    for (const r of rows) known.set(r.message_id as string, r.thread_id as string);
  }
  const referrers: string[] = [];
  if (mid && dbSafe(mid)) {
    const a = must(await db().from("email_messages").select("thread_id").eq("in_reply_to", mid).limit(1), "referrers_a") as Row[];
    const b = must(await db().from("email_messages").select("thread_id").filter("references_ids", "cs", `{"${mid}"}`).limit(1), "referrers_b") as Row[];
    for (const r of [...a, ...b]) referrers.push(r.thread_id as string);
  }
  return pickThreadByHeaders(inReplyTo, refs, known, referrers);
}

// Fallback terakhir (BUKAN identitas thread): hanya untuk email yang jelas "balasan" tetapi rantai header-nya tak dikenal.
async function findThreadBySubject(subject: string, fromEmail: string, accountId: string): Promise<string | null> {
  const norm = normalizeSubject(subject);
  if (!norm || /[{},"\\]/.test(fromEmail)) return null;
  const since = new Date(Date.now() - 90 * 24 * 3600_000).toISOString();
  const rows = must(
    await db().from("email_threads").select("id").eq("account_id", accountId).eq("normalized_subject", norm).gte("last_message_at", since).contains("participants", [fromEmail]).order("last_message_at", { ascending: false }).limit(1),
    "match_subject",
  ) as Row[];
  return (rows[0]?.id as string) ?? null;
}

async function logEvent(svixId: string, patch: Row) {
  const up = await db().from("email_webhook_events").update({ ...patch, updated_at: new Date().toISOString() }).eq("svix_id", svixId);
  if (up.error) console.error("[mail] update webhook event gagal", up.error.message);
}

/** Simpan lampiran masuk ke Storage. Dapat dijalankan ulang (idempoten) bila webhook dikirim ulang. */
async function ensureAttachments(emailId: string, messageRowId: string, hasHint: boolean): Promise<void> {
  if (!hasHint) return;
  const list = await listReceivedAttachments(emailId);
  if (!list.ok) throw new Error(`list_attachments: ${list.error}`);
  const existing = must(await db().from("email_attachments").select("id,resend_attachment_id,stored,error").eq("message_id", messageRowId), "existing_atts") as Row[];
  let total = 0, transientFailures = 0;

  for (const a of list.data.data ?? []) {
    const prev = existing.find((e) => e.resend_attachment_id === a.id);
    if (prev?.stored || prev?.error === "too_large" || prev?.error === "budget") continue;
    const filename = a.filename || "lampiran";
    const size = a.size ?? null;

    let rowId = prev?.id as string | undefined;
    if (!rowId) {
      const ins = await db().from("email_attachments").insert({
        message_id: messageRowId, resend_attachment_id: a.id, filename, content_type: a.content_type ?? null, size_bytes: size,
        content_disposition: a.content_disposition ?? null, content_id: a.content_id ?? null, stored: false,
      }).select("id").single();
      if (ins.error) { if (ins.error.code === "23505") continue; throw new Error(`insert_att: ${ins.error.message}`); }
      rowId = (ins.data as Row).id as string;
    }
    const mark = (error: string) => db().from("email_attachments").update({ error }).eq("id", rowId!);

    if (size !== null && size > MAIL_LIMITS.maxInboundFileBytes) { await mark("too_large"); continue; }
    if (total + (size ?? 0) > MAIL_LIMITS.maxInboundTotalBytes) { await mark("budget"); continue; }

    const dl = await downloadFile(a.download_url, MAIL_LIMITS.maxInboundFileBytes);
    if (!dl.ok) { if (dl.error === "too_large") await mark("too_large"); else { await mark(`download:${dl.error}`.slice(0, 100)); transientFailures++; } continue; }
    total += dl.data.length;
    try {
      const st = await storeAttachment(messageRowId, filename, dl.data, a.content_type ?? null);
      must(await db().from("email_attachments").update({ storage_path: st.path, stored: true, error: null, size_bytes: dl.data.length }).eq("id", rowId).select("id"), "att_update");
    } catch (e) {
      console.error("[mail] simpan lampiran masuk gagal", e);
      await mark("storage_failed");
      transientFailures++;
    }
  }
  if (transientFailures) throw new Error(`attachments_failed:${transientFailures}`); // → 500 → Resend mencoba lagi
}

export async function processReceivedEmail(svixId: string, event: ReceivedEvent): Promise<InboundOutcome> {
  if (event.type !== "email.received" || !event.data?.email_id) return { status: "ignored", note: "bukan email.received" };
  const emailId = event.data.email_id;

  // 1) Idempotensi tingkat event (svix-id sama untuk setiap percobaan ulang pengiriman yang sama).
  const ins = await db().from("email_webhook_events").insert({ svix_id: svixId, event_type: event.type, resend_email_id: emailId });
  if (ins.error) {
    if (ins.error.code !== "23505") throw new Error(`event_log: ${ins.error.message}`);
    const prev = (await db().from("email_webhook_events").select("status,attempts").eq("svix_id", svixId).maybeSingle()).data as Row | null;
    if (prev?.status === "processed" || prev?.status === "ignored") return { status: "duplicate", note: "svix-id sudah diproses" };
    await logEvent(svixId, { status: "processing", attempts: ((prev?.attempts as number) ?? 1) + 1 });
  }

  try {
    const outcome = await handle(emailId, event);
    await logEvent(svixId, { status: "processed", note: outcome.note ?? null });
    return outcome;
  } catch (e) {
    await logEvent(svixId, { status: "failed", note: (e instanceof Error ? e.message : String(e)).slice(0, 300) });
    throw e;
  }
}

async function handle(emailId: string, event: ReceivedEvent): Promise<InboundOutcome> {
  const accountId = await getAccountId();

  // 2) Pesan ini sudah ada? (percobaan ulang) → lanjutkan lampiran yang tertinggal saja.
  const same = (await db().from("email_messages").select("id,thread_id").eq("direction", "inbound").eq("resend_email_id", emailId).maybeSingle()).data as Row | null;
  if (same) {
    await ensureAttachments(emailId, same.id as string, true);
    return { status: "duplicate", threadId: same.thread_id as string, note: "resend_email_id sudah ada" };
  }

  // 3) Ambil isi lengkap + header.
  const got = await getReceivedEmail(emailId);
  if (!got.ok) throw new Error(`get_received: ${got.status} ${got.error}`);
  const em: ReceivedEmail = got.data;

  const from = parseAddress(em.from) ?? parseAddress(event.data.from) ?? { email: "unknown@unknown.invalid", name: null };
  const headers = em.headers ?? {};
  const mid = normalizeMessageId(em.message_id ?? event.data.message_id) ?? normalizeMessageId(headerValue(headers, "message-id"));
  const inReplyTo = extractMessageIds(headerValue(headers, "in-reply-to"))[0] ?? null;
  let refs = extractMessageIds(headerValue(headers, "references")).filter((r) => r !== mid);
  if (!refs.length && inReplyTo) refs = [inReplyTo];
  const subject = (em.subject ?? event.data.subject ?? "").slice(0, 998);
  const text = em.text ?? null;
  const html = em.html ?? null;
  const receivedAt = em.created_at ?? event.data.created_at ?? new Date().toISOString();

  // 4) Pesan dengan Message-ID sama sudah ada (mis. dikirim ke dua alias) → jangan buat duplikat.
  if (mid) {
    const dup = (await db().from("email_messages").select("id,thread_id").eq("message_id", mid).maybeSingle()).data as Row | null;
    if (dup) return { status: "duplicate", threadId: dup.thread_id as string, note: "message_id sudah ada" };
  }

  // 5) Tentukan thread: header dulu; subject hanya fallback untuk email yang jelas berupa balasan.
  const looksLikeReply = !!inReplyTo || refs.length > 0 || hasReplyPrefix(subject);
  // Bila yang dibalas (In-Reply-To) belum dikenal, mungkin itu email keluar yang Message-ID-nya belum sempat
  // tersimpan → lengkapi dulu agar pencocokan tepat (bukan sekadar lewat References yang lebih tua).
  if (inReplyTo && dbSafe(inReplyTo)) {
    const known = (await db().from("email_messages").select("id").eq("message_id", inReplyTo).limit(1)).data as Row[] | null;
    if (!known?.length) await resolveMissingMessageIds();
  }
  let threadId = await findThreadByHeaders(mid, inReplyTo, refs);
  let matchedBy: "header" | "subject" | "new" = threadId ? "header" : "new";
  if (!threadId && looksLikeReply) {
    threadId = await findThreadBySubject(subject, from.email, accountId);
    if (threadId) matchedBy = "subject";
  }
  const createdNew = !threadId;
  if (!threadId) threadId = await createThread({ subject, normalizedSubject: normalizeSubject(subject), folder: "inbox" });

  // 6) Simpan pesan (indeks unik menjaga idempotensi bila ada balapan antar webhook).
  const ref = await db().from("email_messages").insert({
    thread_id: threadId, account_id: accountId, direction: "inbound", message_id: mid, in_reply_to: inReplyTo, references_ids: refs,
    resend_email_id: emailId, from_email: from.email, from_name: from.name, to_emails: parseAddressList(em.to ?? []),
    cc_emails: parseAddressList(em.cc ?? []), bcc_emails: parseAddressList(em.bcc ?? []), reply_to_emails: parseAddressList(em.reply_to ?? []),
    subject, text_body: text, html_body: html, snippet: makeSnippet(text ?? (html ? htmlToText(html) : "")),
    authentication: em.authentication ?? null, received_at: receivedAt,
  }).select("id").single();
  if (ref.error) {
    if (createdNew) await db().from("email_threads").delete().eq("id", threadId); // jangan tinggalkan thread kosong
    if (ref.error.code === "23505") return { status: "duplicate", note: "balapan: pesan sama sudah disimpan" };
    throw new Error(`insert_message: ${ref.error.message}`);
  }
  const messageRowId = (ref.data as Row).id as string;
  if (!createdNew) await bumpThreadToInbox(threadId);

  // 7) Lampiran.
  await ensureAttachments(emailId, messageRowId, (em.attachments?.length ?? event.data.attachments?.length ?? 0) > 0);

  return { status: "processed", threadId, note: `thread:${matchedBy}` };
}

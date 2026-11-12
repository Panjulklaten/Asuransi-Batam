// Akses data webmail (Supabase, service role). Semua fungsi dipanggil hanya dari server setelah autentikasi.
import "server-only";
import { randomUUID } from "node:crypto";
import { MAIL_BUCKET, mailEnv, MAIL_LIMITS, type Folder } from "./config";
import { sanitizeEmailHtml } from "./sanitize";
import { db } from "./supabase";
import type { FolderCounts, MessageView, ThreadDetail, ThreadSummary } from "./types";

type Row = Record<string, unknown>;

export function must<T>(res: { data: T; error: { message: string; code?: string } | null }, what: string): NonNullable<T> {
  if (res.error) throw new Error(`${what}: ${res.error.message}`);
  return res.data as NonNullable<T>;
}

// ── Akun ────────────────────────────────────────────────────────────────────
let accountCache: { id: string; address: string; at: number } | null = null;

export async function getAccountId(): Promise<string> {
  const address = mailEnv.fromAddress();
  if (accountCache && accountCache.address === address && Date.now() - accountCache.at < 5 * 60_000) return accountCache.id;
  const sel = await db().from("email_accounts").select("id").eq("address", address).maybeSingle();
  let id = (sel.data as Row | null)?.id as string | undefined;
  if (!id) {
    const ins = await db().from("email_accounts").insert({ address, display_name: mailEnv.fromName() }).select("id").single();
    if (ins.error?.code === "23505") {
      id = must(await db().from("email_accounts").select("id").eq("address", address).single(), "account").id as string;
    } else id = must(ins, "account_insert").id as string;
  }
  accountCache = { id, address, at: Date.now() };
  return id;
}

// ── Thread ──────────────────────────────────────────────────────────────────
const THREAD_COLS = "id,subject,folder,snippet,last_from,last_message_at,message_count,unread_count,has_outbound,has_attachments,participants";

export async function listThreads(opts: { folder: Folder; q?: string; before?: string | null; limit?: number }): Promise<ThreadSummary[]> {
  const res = await db().rpc("mail_list_threads", {
    p_account: await getAccountId(),
    p_folder: opts.folder,
    p_q: opts.q?.trim().slice(0, 100) || null,
    p_before: opts.before || null,
    p_limit: opts.limit ?? 30,
  });
  return must(res, "list_threads") as ThreadSummary[];
}

export async function folderCounts(): Promise<FolderCounts> {
  return must(await db().rpc("mail_folder_counts", { p_account: await getAccountId() }), "counts") as FolderCounts;
}

export async function createThread(input: { subject: string; normalizedSubject: string; folder: Folder }): Promise<string> {
  const row = must(
    await db().from("email_threads").insert({ account_id: await getAccountId(), subject: input.subject.slice(0, 300), normalized_subject: input.normalizedSubject, folder: input.folder }).select("id").single(),
    "create_thread",
  );
  return (row as Row).id as string;
}

export async function setThreadFolder(id: string, folder: Folder): Promise<boolean> {
  const res = await db().from("email_threads").update({ folder, updated_at: new Date().toISOString() }).eq("id", id).select("id");
  return (must(res, "set_folder") as Row[]).length > 0;
}

/** Pesan baru di thread yang diarsipkan/dihapus/“sent” membuatnya muncul lagi di Inbox (perilaku Gmail). */
export async function bumpThreadToInbox(id: string) {
  must(await db().from("email_threads").update({ folder: "inbox" }).eq("id", id).in("folder", ["archive", "trash", "sent"]).select("id"), "bump_inbox");
}

export async function markThread(id: string, read: boolean): Promise<void> {
  if (read) {
    must(await db().from("email_messages").update({ read_at: new Date().toISOString() }).eq("thread_id", id).eq("direction", "inbound").is("read_at", null).select("id"), "mark_read");
    return;
  }
  const last = await db().from("email_messages").select("id").eq("thread_id", id).eq("direction", "inbound").order("sort_at", { ascending: false }).limit(1);
  const target = (must(last, "last_inbound") as Row[])[0]?.id as string | undefined;
  if (target) must(await db().from("email_messages").update({ read_at: null }).eq("id", target).select("id"), "mark_unread");
}

export async function deleteThreadPermanently(id: string): Promise<boolean> {
  const t = await db().from("email_threads").select("id,folder").eq("id", id).maybeSingle();
  const thread = t.data as Row | null;
  if (!thread) return false;
  if (thread.folder !== "trash") throw new Error("not_in_trash");
  const msgs = must(await db().from("email_messages").select("id").eq("thread_id", id), "msgs") as Row[];
  if (msgs.length) {
    const atts = must(await db().from("email_attachments").select("storage_path").in("message_id", msgs.map((m) => m.id as string)).not("storage_path", "is", null), "atts") as Row[];
    const paths = atts.map((a) => a.storage_path as string);
    if (paths.length) {
      const rm = await db().storage.from(MAIL_BUCKET).remove(paths);
      if (rm.error) console.error("[mail] hapus file storage gagal", rm.error.message);
    }
  }
  must(await db().from("email_threads").delete().eq("id", id).select("id"), "delete_thread"); // pesan & lampiran ikut terhapus (cascade)
  return true;
}

// ── Detail thread (HTML disanitasi di sini, sebelum keluar dari server) ─────
export async function getThreadDetail(id: string, opts: { remoteImages?: boolean } = {}): Promise<ThreadDetail | null> {
  const t = await db().from("email_threads").select(THREAD_COLS).eq("id", id).maybeSingle();
  if (!t.data) return null;
  const rows = must(
    await db().from("email_messages").select("id,direction,message_id,from_email,from_name,to_emails,cc_emails,reply_to_emails,subject,text_body,html_body,received_at,sent_at,read_at,authentication,sort_at").eq("thread_id", id).order("sort_at", { ascending: true }),
    "messages",
  ) as Row[];
  const atts = rows.length
    ? (must(await db().from("email_attachments").select("id,message_id,filename,content_type,size_bytes,content_disposition,content_id,stored").in("message_id", rows.map((r) => r.id as string)).order("created_at"), "attachments") as Row[])
    : [];

  let htmlBudget = MAIL_LIMITS.maxHtmlOutBytes;
  const messages: MessageView[] = rows.map((r) => {
    let html: string | null = null, hasRemote = false, omitted = false;
    if (typeof r.html_body === "string" && r.html_body) {
      let s = sanitizeEmailHtml(r.html_body, { allowRemoteImages: !!opts.remoteImages });
      if (s.html.length > htmlBudget) { s = sanitizeEmailHtml(r.html_body, { allowRemoteImages: !!opts.remoteImages, allowDataImages: false }); omitted = s.hadDataImages; }
      if (s.html.length > htmlBudget) { html = null; omitted = true; } else { html = s.html; htmlBudget -= s.html.length; }
      hasRemote = s.hasRemoteImages;
    }
    return {
      id: r.id as string, direction: r.direction as "inbound" | "outbound", message_id: (r.message_id as string) ?? null,
      from_email: r.from_email as string, from_name: (r.from_name as string) ?? null,
      to_emails: (r.to_emails as string[]) ?? [], cc_emails: (r.cc_emails as string[]) ?? [], reply_to_emails: (r.reply_to_emails as string[]) ?? [],
      subject: (r.subject as string) ?? "", text_body: (r.text_body as string) ?? null, html, has_remote_images: hasRemote, images_omitted: omitted,
      received_at: (r.received_at as string) ?? null, sent_at: (r.sent_at as string) ?? null, read_at: (r.read_at as string) ?? null,
      authentication: (r.authentication as MessageView["authentication"]) ?? null,
      attachments: atts.filter((a) => a.message_id === r.id).map((a) => ({
        id: a.id as string, filename: a.filename as string, content_type: (a.content_type as string) ?? null, size_bytes: (a.size_bytes as number) ?? null,
        content_disposition: (a.content_disposition as string) ?? null, content_id: (a.content_id as string) ?? null, stored: !!a.stored,
      })),
    };
  });
  return { thread: t.data as unknown as ThreadSummary, messages };
}

// ── Penyimpanan lampiran ────────────────────────────────────────────────────
const safeName = (n: string) => n.normalize("NFKC").replace(/[\u0000-\u001f\\/:*?"<>|]/g, "_").replace(/\.{2,}/g, ".").replace(/\s+/g, " ").trim().replace(/^\.+/, "_").slice(0, 120) || "file";
export const safeFilename = safeName;

export async function storeAttachment(messageRowId: string, filename: string, data: Buffer, contentType: string | null) {
  const id = randomUUID();
  const path = `${messageRowId}/${id}/${safeName(filename).replace(/[^\w.\- ()]/g, "_")}`;
  const up = await db().storage.from(MAIL_BUCKET).upload(path, data, { contentType: contentType || "application/octet-stream", upsert: false });
  if (up.error) throw new Error(`storage_upload: ${up.error.message}`);
  return { id, path };
}

export async function signedDownloadUrl(path: string, filename: string): Promise<string | null> {
  const r = await db().storage.from(MAIL_BUCKET).createSignedUrl(path, 60, { download: filename });
  return r.data?.signedUrl ?? null;
}

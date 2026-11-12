"use client";
import { useEffect, useState } from "react";
import { Archive, ArrowLeft, ChevronDown, MailOpen, Paperclip, Reply, ReplyAll, RotateCcw, Trash2, Inbox as InboxIcon, ShieldAlert } from "lucide-react";
import type { MessageView, ThreadDetail } from "@/lib/mail/types";
import Composer, { type ComposeTarget } from "./Composer";
import MessageBody from "./MessageBody";
import { formatBytes, formatFullDate, initials } from "./utils";

export type ThreadAction = "archive" | "trash" | "inbox" | "mark_unread" | "delete";

function MessageCard({ m, defaultOpen, onReply, onImages }: { m: MessageView; defaultOpen: boolean; onReply: (m: MessageView, all: boolean) => void; onImages: () => void }) {
  const [open, setOpen] = useState(defaultOpen);
  const name = m.direction === "outbound" ? "Saya" : m.from_name || m.from_email;
  const when = m.received_at ?? m.sent_at;
  const atts = m.attachments.filter((a) => !(a.content_disposition === "inline" && a.content_id));
  const authBad = m.direction === "inbound" && (m.authentication?.dmarc === "fail" || (m.authentication?.spf === "fail" && m.authentication?.dkim === "fail"));

  return (
    <article className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <button onClick={() => setOpen(!open)} className="flex w-full items-start gap-3 p-4 text-left" aria-expanded={open}>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy text-xs font-bold text-gold">{initials(name)}</span>
        <span className="min-w-0 flex-1">
          <span className="flex items-baseline justify-between gap-2">
            <span className="truncate text-sm font-semibold">{name}{m.direction === "inbound" && m.from_name && <span className="ml-1 font-normal text-slate-400">&lt;{m.from_email}&gt;</span>}</span>
            {when && <time className="shrink-0 text-xs text-slate-400" dateTime={when}>{formatFullDate(when)}</time>}
          </span>
          <span className="block truncate text-xs text-slate-500">
            {open ? <>kepada {m.to_emails.join(", ") || "—"}{m.cc_emails.length > 0 && <> · cc {m.cc_emails.join(", ")}</>}</> : (m.text_body ?? "").replace(/\s+/g, " ").slice(0, 120)}
          </span>
        </span>
        <ChevronDown size={16} className={`mt-1 shrink-0 text-slate-400 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-t border-slate-100 px-4 pb-4 pt-3">
          {authBad && (
            <p className="mb-3 flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700"><ShieldAlert size={14} /> Pengirim gagal verifikasi (SPF/DKIM/DMARC). Hati-hati dengan tautan dan lampiran.</p>
          )}
          <MessageBody message={m} onLoadRemoteImages={onImages} />
          {atts.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {atts.map((a) => (
                <li key={a.id}>
                  {a.stored ? (
                    <a href={`/api/mail/attachments/${a.id}`} className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs hover:border-gold hover:bg-amber-50">
                      <Paperclip size={14} className="text-gold" /> <span className="max-w-[16rem] truncate">{a.filename}</span> <span className="text-slate-400">{formatBytes(a.size_bytes)}</span>
                    </a>
                  ) : (
                    <span title="Lampiran tidak tersimpan (terlalu besar atau gagal diunduh)" className="flex items-center gap-2 rounded-lg border border-dashed border-slate-300 px-3 py-2 text-xs text-slate-400"><Paperclip size={14} /> {a.filename} · tidak tersimpan</span>
                  )}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 flex gap-2">
            <button onClick={() => onReply(m, false)} className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium hover:bg-slate-50"><Reply size={14} /> Balas</button>
            {(m.to_emails.length + m.cc_emails.length > 1) && <button onClick={() => onReply(m, true)} className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium hover:bg-slate-50"><ReplyAll size={14} /> Balas semua</button>}
          </div>
        </div>
      )}
    </article>
  );
}

export default function ThreadView({ detail, folder, selfAddress, onBack, onAction, onSent, onLoadImages }: {
  detail: ThreadDetail; folder: string; selfAddress: string; onBack: () => void;
  onAction: (a: ThreadAction) => void; onSent: (threadId: string, warning: string | null) => void; onLoadImages: () => void;
}) {
  const [reply, setReply] = useState<ComposeTarget | null>(null);
  const { thread, messages } = detail;
  useEffect(() => { setReply(null); }, [thread.id]);

  const last = messages[messages.length - 1];
  const btn = "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100";
  const startReply = (m: MessageView, all: boolean) => setReply({ threadId: thread.id, subject: thread.subject, replyTo: m, replyAll: all });

  return (
    <section className="flex h-full min-h-0 flex-col">
      <header className="flex flex-wrap items-center gap-1 border-b border-slate-200 bg-white px-3 py-2">
        <button onClick={onBack} className={`${btn} md:hidden`} aria-label="Kembali"><ArrowLeft size={16} /></button>
        {folder !== "archive" && folder !== "trash" && <button onClick={() => onAction("archive")} className={btn}><Archive size={15} /> Archive</button>}
        {folder === "trash" ? (
          <>
            <button onClick={() => onAction("inbox")} className={btn}><RotateCcw size={15} /> Pulihkan</button>
            <button onClick={() => onAction("delete")} className={`${btn} !text-red-600 hover:!bg-red-50`}><Trash2 size={15} /> Hapus permanen</button>
          </>
        ) : (
          <button onClick={() => onAction("trash")} className={btn}><Trash2 size={15} /> Hapus</button>
        )}
        {folder === "archive" && <button onClick={() => onAction("inbox")} className={btn}><InboxIcon size={15} /> Ke Inbox</button>}
        <button onClick={() => onAction("mark_unread")} className={btn}><MailOpen size={15} /> Tandai belum dibaca</button>
      </header>
      <div className="min-h-0 flex-1 overflow-y-auto bg-slate-50 p-3 sm:p-5">
        <h2 className="mb-4 font-display text-xl font-bold leading-snug sm:text-2xl">{thread.subject || "(tanpa subjek)"}</h2>
        <div className="space-y-3">
          {messages.map((m, i) => (
            <MessageCard key={m.id} m={m} defaultOpen={i === messages.length - 1 || !m.read_at} onReply={startReply} onImages={onLoadImages} />
          ))}
        </div>
        <div className="mt-4">
          {reply ? (
            <Composer key={`${reply.replyTo?.id}-${reply.replyAll}`} variant="inline" target={reply} selfAddress={selfAddress} onClose={() => setReply(null)} onSent={(id, w) => { setReply(null); onSent(id, w); }} />
          ) : (
            <div className="flex gap-2">
              <button onClick={() => startReply(last, false)} className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium hover:border-gold"><Reply size={16} /> Balas</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

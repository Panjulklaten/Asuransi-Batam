"use client";
import { useRef, useState } from "react";
import { Loader2, Paperclip, Send, X } from "lucide-react";
import type { MessageView } from "@/lib/mail/types";
import { signatureHtml } from "@/lib/mail/signature";
import RichEditor from "./RichEditor";
import { api, formatBytes } from "./utils";

const MAX_FILES = 5;
const MAX_TOTAL = 4 * 1024 * 1024;
const ACCEPT = ".pdf,.png,.jpg,.jpeg,.gif,.webp,.txt,.csv,.rtf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.odt,.ods,.zip";

export interface ComposeTarget {
  threadId: string | null;
  subject: string;
  replyTo: MessageView | null;
  replyAll: boolean;
}

function defaultRecipients(t: ComposeTarget, self: string): { to: string; cc: string } {
  const m = t.replyTo;
  if (!m) return { to: "", cc: "" };
  if (m.direction === "outbound") return { to: m.to_emails.join(", "), cc: t.replyAll ? m.cc_emails.join(", ") : "" };
  const to = m.reply_to_emails[0] ?? m.from_email;
  if (!t.replyAll) return { to, cc: "" };
  const others = [...m.to_emails, ...m.cc_emails].filter((a) => a.toLowerCase() !== self.toLowerCase() && a.toLowerCase() !== to.toLowerCase());
  return { to, cc: [...new Set(others)].join(", ") };
}

export default function Composer({ target, selfAddress, onClose, onSent, variant }: { target: ComposeTarget; selfAddress: string; onClose: () => void; onSent: (threadId: string, warning: string | null) => void; variant: "inline" | "modal" }) {
  const init = defaultRecipients(target, selfAddress);
  const [to, setTo] = useState(init.to);
  const [cc, setCc] = useState(init.cc);
  const [showCc, setShowCc] = useState(!!init.cc);
  const [subject, setSubject] = useState(target.subject);
  const editor = useRef<HTMLDivElement | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [signature, setSignature] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const requestId = useRef(crypto.randomUUID()); // dipakai ulang saat coba lagi → Resend tidak mengirim ganda
  const fileInput = useRef<HTMLInputElement>(null);
  const isReply = !!target.threadId;

  function addFiles(list: FileList | null) {
    if (!list) return;
    const next = [...files, ...Array.from(list)];
    const total = next.reduce((n, f) => n + f.size, 0);
    if (next.length > MAX_FILES) return setError(`Maksimal ${MAX_FILES} lampiran.`);
    if (total > MAX_TOTAL) return setError(`Total lampiran maksimal ${MAX_TOTAL / 1048576}MB.`);
    setError("");
    setFiles(next);
    if (fileInput.current) fileInput.current.value = "";
  }

  async function send() {
    if (busy) return;
    setError("");
    if (!to.trim()) return setError("Isi penerima.");
    if (!isReply && !subject.trim()) return setError("Isi subjek.");
    const html = editor.current?.innerHTML ?? "";
    if (!(editor.current?.innerText ?? "").trim()) return setError("Isi email tidak boleh kosong.");
    setBusy(true);
    const fd = new FormData();
    fd.set("to", to); fd.set("cc", cc); fd.set("subject", subject); fd.set("html", html); fd.set("requestId", requestId.current); fd.set("signature", signature ? "1" : "0");
    if (target.threadId) fd.set("threadId", target.threadId);
    if (target.replyTo) fd.set("replyToMessageId", target.replyTo.id);
    files.forEach((f) => fd.append("files", f));
    const r = await api<{ threadId?: string; warning?: string | null }>("/api/mail/send", { method: "POST", body: fd });
    setBusy(false);
    if (!r.ok) return setError(r.data.message ?? "Gagal mengirim.");
    onSent(r.data.threadId ?? target.threadId ?? "", r.data.warning ?? null);
  }

  const field = "w-full bg-transparent py-1.5 text-sm outline-none placeholder:text-slate-400";
  const body = (
    <div className={variant === "modal" ? "flex h-full flex-col" : "rounded-xl border border-slate-200 bg-white shadow-sm"}>
      <div className="flex items-center justify-between rounded-t-xl bg-navy px-4 py-2.5 text-sm font-semibold text-white">
        <span>{isReply ? (target.replyAll ? "Balas semua" : "Balas") : "Email baru"}</span>
        <button onClick={onClose} aria-label="Tutup" className="rounded p-1 hover:bg-white/10"><X size={16} /></button>
      </div>
      <div className="flex-1 overflow-y-auto px-4 pb-2">
        <div className="flex items-center gap-2 border-b border-slate-100">
          <label className="w-12 text-xs text-slate-500" htmlFor="c-to">Kepada</label>
          <input id="c-to" className={field} value={to} onChange={(e) => setTo(e.target.value)} placeholder="nama@contoh.com, ..." />
          {!showCc && <button onClick={() => setShowCc(true)} className="text-xs text-slate-500 hover:text-navy">Cc</button>}
        </div>
        {showCc && (
          <div className="flex items-center gap-2 border-b border-slate-100">
            <label className="w-12 text-xs text-slate-500" htmlFor="c-cc">Cc</label>
            <input id="c-cc" className={field} value={cc} onChange={(e) => setCc(e.target.value)} />
          </div>
        )}
        {!isReply && (
          <div className="flex items-center gap-2 border-b border-slate-100">
            <label className="w-12 text-xs text-slate-500" htmlFor="c-sub">Subjek</label>
            <input id="c-sub" className={field} value={subject} onChange={(e) => setSubject(e.target.value)} maxLength={300} />
          </div>
        )}
        <RichEditor editorRef={editor} minHeight={variant === "modal" ? 220 : 120} />
        <label className="mb-2 flex items-center gap-2 text-xs text-slate-600">
          <input type="checkbox" checked={signature} onChange={(e) => setSignature(e.target.checked)} /> Sertakan tanda tangan
        </label>
        {signature && (
          <div className="mb-2 overflow-x-auto rounded-lg border border-dashed border-slate-200 bg-slate-50 px-3 pb-3" aria-label="Pratinjau tanda tangan">
            {/* HTML statis & tepercaya dari kode kita (bukan input pengguna) */}
            <div dangerouslySetInnerHTML={{ __html: signatureHtml() }} />
          </div>
        )}
        {files.length > 0 && (
          <ul className="mb-2 flex flex-wrap gap-2">
            {files.map((f, i) => (
              <li key={i} className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs">
                <Paperclip size={12} /> {f.name} <span className="text-slate-400">{formatBytes(f.size)}</span>
                <button onClick={() => setFiles(files.filter((_, j) => j !== i))} aria-label={`Hapus ${f.name}`}><X size={12} /></button>
              </li>
            ))}
          </ul>
        )}
        {error && <p role="alert" className="mb-2 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
      </div>
      <div className="flex items-center gap-2 border-t border-slate-100 px-4 py-3">
        <button onClick={send} disabled={busy} className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-navy disabled:opacity-60" style={{ background: "linear-gradient(135deg,#c9a84c,#f0d080)" }}>
          {busy ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />} Kirim
        </button>
        <input ref={fileInput} type="file" multiple accept={ACCEPT} className="hidden" onChange={(e) => addFiles(e.target.files)} />
        <button onClick={() => fileInput.current?.click()} className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100"><Paperclip size={16} /> Lampirkan</button>
        <span className="ml-auto hidden text-xs text-slate-400 sm:block">Maks. {MAX_FILES} file / 4MB</span>
      </div>
    </div>
  );

  if (variant === "inline") return body;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 sm:items-center sm:p-4" role="dialog" aria-modal="true">
      <div className="h-[92vh] w-full overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:h-auto sm:max-h-[90vh] sm:max-w-2xl sm:rounded-2xl">{body}</div>
    </div>
  );
}

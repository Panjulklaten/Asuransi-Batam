"use client";
import { useMemo, useRef, useState } from "react";
import type { MessageView } from "@/lib/mail/types";
import { splitQuoted } from "./utils";

// HTML sudah disanitasi di server. Di sini ditambah lapisan isolasi: iframe sandbox TANPA script,
// plus CSP di dalam dokumen (tanpa script/koneksi/form; gambar hanya data:/https).
const CSP = "default-src 'none'; img-src data: https: http:; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'";

function buildDoc(html: string, hideQuoted: boolean) {
  return `<!doctype html><html><head><meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="${CSP}"><base target="_blank"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
html,body{margin:0;padding:0}body{font:14px/1.55 Arial,Helvetica,sans-serif;color:#0a1628;word-wrap:break-word;overflow-wrap:anywhere}
img{max-width:100%;height:auto}table{max-width:100%}a{color:#1a4fa0}pre{white-space:pre-wrap}
blockquote{margin:8px 0 8px 4px;padding-left:10px;border-left:3px solid #e2e8f0;color:#475569}
${hideQuoted ? "blockquote,.gmail_quote,.yahoo_quoted,.protonmail_quote{display:none!important}" : ""}
</style></head><body>${html}</body></html>`;
}

export default function MessageBody({ message, onLoadRemoteImages }: { message: MessageView; onLoadRemoteImages: () => void }) {
  const [showQuoted, setShowQuoted] = useState(false);
  const [height, setHeight] = useState(60);
  const frame = useRef<HTMLIFrameElement>(null);
  const html = message.html;
  const hasQuote = !!html && /<blockquote|gmail_quote|yahoo_quoted|protonmail_quote/i.test(html);
  const doc = useMemo(() => (html ? buildDoc(html, hasQuote && !showQuoted) : ""), [html, hasQuote, showQuoted]);
  const text = useMemo(() => splitQuoted(message.text_body ?? ""), [message.text_body]);

  function measure() {
    const d = frame.current?.contentDocument;
    if (d) setHeight(Math.max(40, Math.min(d.documentElement.scrollHeight, 20000)));
  }

  return (
    <div>
      {html ? (
        <>
          {(message.has_remote_images || message.images_omitted) && (
            <div className="mb-2 flex flex-wrap items-center gap-2 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">
              {message.has_remote_images && <>Gambar eksternal diblokir demi privasi. <button onClick={onLoadRemoteImages} className="font-semibold underline">Tampilkan gambar</button></>}
              {message.images_omitted && <span>Sebagian gambar tertanam dilewati karena ukurannya besar.</span>}
            </div>
          )}
          <iframe
            ref={frame}
            title={`Isi email dari ${message.from_email}`}
            srcDoc={doc}
            // allow-same-origin TANPA allow-scripts: tidak ada eksekusi script, tetapi tinggi iframe bisa diukur.
            sandbox="allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            referrerPolicy="no-referrer"
            onLoad={() => { measure(); setTimeout(measure, 400); setTimeout(measure, 1500); }}
            style={{ width: "100%", height, border: 0, display: "block" }}
          />
          {hasQuote && (
            <button onClick={() => setShowQuoted((v) => !v)} className="mt-1 rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-200" aria-label="Tampilkan/sembunyikan teks kutipan">⋯</button>
          )}
        </>
      ) : message.text_body ? (
        <div className="text-sm leading-relaxed text-navy">
          <div className="whitespace-pre-wrap break-words">{text.main}</div>
          {text.quoted && (
            <>
              <button onClick={() => setShowQuoted((v) => !v)} className="mt-1 rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-200" aria-label="Tampilkan/sembunyikan teks kutipan">⋯</button>
              {showQuoted && <div className="mt-2 whitespace-pre-wrap break-words border-l-2 border-slate-200 pl-3 text-slate-500">{text.quoted}</div>}
            </>
          )}
        </div>
      ) : (
        <p className="text-sm italic text-slate-400">(email tanpa isi)</p>
      )}
    </div>
  );
}

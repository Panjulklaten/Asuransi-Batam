// Isi email yang ditulis di editor (HTML dari contentEditable) → HTML bersih + teks polos.
// HTML dari browser TIDAK dipercaya: selalu disanitasi ulang di server dengan allowlist yang sama
// seperti email masuk (tanpa script/style/form/iframe/gambar; hanya format dasar, daftar, rata teks, tautan).
import { sanitizeEmailHtml } from "./sanitize";

const ENT: Record<string, string> = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&nbsp;": " " };
const BLOCK = new Set(["p", "div", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "pre", "table"]);

/** HTML (yang SUDAH disanitasi) → teks polos dengan daftar bernomor/bullet, baris baru, dan tautan. */
export function htmlToPlain(html: string): string {
  let out = "";
  const lists: { ordered: boolean; n: number }[] = [];
  const hrefs: (string | null)[] = [];
  const lineStart = () => { if (out && !out.endsWith("\n")) out += "\n"; };

  for (const t of html.split(/(<[^>]+>)/g)) {
    if (!t) continue;
    if (t[0] !== "<") { out += t.replace(/&(amp|lt|gt|quot|#39|nbsp);/g, (m) => ENT[m] ?? m); continue; }
    const m = t.match(/^<\s*(\/)?\s*([a-z0-9]+)/i);
    if (!m) continue;
    const close = !!m[1], tag = m[2].toLowerCase();
    if (tag === "br") out += "\n";
    else if (tag === "ul" || tag === "ol") { lineStart(); if (close) lists.pop(); else lists.push({ ordered: tag === "ol", n: 0 }); }
    else if (tag === "li" && !close) { lineStart(); const l = lists[lists.length - 1]; out += "  ".repeat(Math.max(0, lists.length - 1)) + (l?.ordered ? `${++l.n}. ` : "• "); }
    else if (tag === "li" && close) lineStart();
    else if (tag === "a") {
      if (!close) hrefs.push(t.match(/href="([^"]*)"/i)?.[1]?.replace(/&amp;/g, "&") ?? null);
      else { const h = hrefs.pop(); if (h && /^https?:/i.test(h) && !out.trimEnd().endsWith(h)) out += ` (${h})`; }
    } else if (BLOCK.has(tag)) lineStart();
  }
  return out.replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
}

export interface RichBody { html: string; text: string }

/** Sanitasi isi editor. Mengembalikan null bila tidak ada teks (mis. hanya `<br>`). */
export function prepareRichBody(raw: string): RichBody | null {
  const clean = sanitizeEmailHtml(raw, { allowRemoteImages: false, allowDataImages: false }).html;
  const text = htmlToPlain(clean);
  if (!text) return null;
  const html = `<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5">${clean}</div>`;
  return { html, text };
}

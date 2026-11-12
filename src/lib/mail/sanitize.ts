// Sanitasi HTML email. Lapisan 1 (di sini): allowlist ketat via sanitize-html.
// Lapisan 2 (di UI): iframe sandbox tanpa script + CSP meta. Lapisan 3: header CSP/no-store di respons API.
import sanitizeHtml from "sanitize-html";

const SAFE_SCHEMES = ["http", "https", "mailto", "tel"];

const ALLOWED_TAGS = [
  "a", "abbr", "b", "blockquote", "br", "caption", "center", "cite", "code", "col", "colgroup", "dd", "del", "div", "dl", "dt", "em",
  "font", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "ins", "li", "mark", "ol", "p", "pre", "q", "s", "small", "span",
  "strike", "strong", "sub", "sup", "table", "tbody", "td", "tfoot", "th", "thead", "tr", "u", "ul",
];

// Hanya properti visual yang aman; tidak ada position/behavior/url().
const COLOR = [/^#[0-9a-f]{3,8}$/i, /^rgba?\(\s*[\d.\s,%]+\)$/i, /^[a-z]{3,20}$/i];
const LEN = [/^-?\d{1,4}(\.\d+)?(px|em|rem|%|pt)?$/i, /^(auto|inherit|normal|0)$/i];
const ALLOWED_STYLES = {
  "*": {
    color: COLOR, "background-color": COLOR, "font-size": LEN, "font-weight": [/^(normal|bold|bolder|lighter|[1-9]00)$/i],
    "font-style": [/^(normal|italic|oblique)$/i], "font-family": [/^[\w\s,'"-]{1,120}$/],
    "text-align": [/^(left|right|center|justify)$/i], "text-decoration": [/^(none|underline|line-through)$/i],
    "line-height": LEN, "vertical-align": [/^(top|middle|bottom|baseline)$/i],
    width: LEN, height: LEN, "max-width": LEN, padding: [/^[\d.\s]+(px|em|rem|%|pt)?(\s+[\d.]+(px|em|rem|%|pt)?){0,3}$/i],
    "padding-top": LEN, "padding-right": LEN, "padding-bottom": LEN, "padding-left": LEN,
    margin: [/^[-\d.\s]+(px|em|rem|%|pt|auto)?(\s+[-\d.]+(px|em|rem|%|pt|auto)?){0,3}$/i],
    "margin-top": LEN, "margin-right": LEN, "margin-bottom": LEN, "margin-left": LEN,
    border: [/^[\w\s#.(),%-]{1,60}$/], "border-top": [/^[\w\s#.(),%-]{1,60}$/], "border-bottom": [/^[\w\s#.(),%-]{1,60}$/],
    "border-left": [/^[\w\s#.(),%-]{1,60}$/], "border-right": [/^[\w\s#.(),%-]{1,60}$/], "border-collapse": [/^(collapse|separate)$/i],
    "white-space": [/^(normal|nowrap|pre|pre-wrap|pre-line)$/i], "list-style-type": [/^[a-z-]{3,20}$/i],
  },
};

export interface SanitizeOptions {
  /** Izinkan gambar http(s) eksternal (pelacak/tracking pixel dimatikan secara default). */
  allowRemoteImages?: boolean;
  /** Izinkan gambar data: (inline). */
  allowDataImages?: boolean;
}

export interface SanitizeResult { html: string; hasRemoteImages: boolean; hadDataImages: boolean }

export function sanitizeEmailHtml(input: string, opts: SanitizeOptions = {}): SanitizeResult {
  const { allowRemoteImages = false, allowDataImages = true } = opts;
  let hasRemoteImages = false;
  let hadDataImages = false;

  const html = sanitizeHtml(input, {
    allowedTags: ALLOWED_TAGS,
    allowedAttributes: {
      a: ["href", "title", "name", "target", "rel"],
      img: ["src", "alt", "title", "width", "height", "loading", "referrerpolicy"],
      td: ["colspan", "rowspan", "align", "valign", "width", "height", "bgcolor"],
      th: ["colspan", "rowspan", "align", "valign", "width", "height", "bgcolor"],
      table: ["width", "align", "border", "cellpadding", "cellspacing", "bgcolor"],
      tr: ["align", "valign", "bgcolor"],
      font: ["color", "size", "face"],
      col: ["span", "width"],
      colgroup: ["span", "width"],
      ol: ["start", "type"],
      blockquote: ["type"],
      "*": ["class", "style", "dir", "lang", "align"],
    },
    allowedClasses: { "*": ["gmail_quote", "gmail_attr", "yahoo_quoted", "moz-cite-prefix", "protonmail_quote", "WordSection1"] },
    allowedStyles: ALLOWED_STYLES,
    allowedSchemes: SAFE_SCHEMES,
    allowedSchemesByTag: { img: ["https", "http", "data"] },
    allowProtocolRelative: false,
    disallowedTagsMode: "discard",
    // Buang seluruh isi tag aktif/CSS, bukan hanya tag-nya.
    nonTextTags: ["style", "script", "textarea", "option", "noscript", "title", "head"],
    transformTags: {
      a: (tagName, attribs) => ({
        tagName,
        attribs: { ...attribs, target: "_blank", rel: "noopener noreferrer nofollow ugc" },
      }),
      img: (tagName, attribs): sanitizeHtml.Tag => {
        const src = (attribs.src ?? "").trim();
        const drop = (text = ""): sanitizeHtml.Tag => ({ tagName: "span", attribs: {} as Record<string, string>, text });
        const lower = src.toLowerCase();
        if (/^data:image\/(png|jpe?g|gif|webp);base64,[a-z0-9+/=\s]+$/i.test(src)) {
          hadDataImages = true;
          if (!allowDataImages) return drop();
          return { tagName, attribs: { ...attribs, src, loading: "lazy" } };
        }
        if (lower.startsWith("https://") || lower.startsWith("http://")) {
          hasRemoteImages = true;
          if (!allowRemoteImages) return drop(attribs.alt ? `[gambar: ${attribs.alt.slice(0, 80)}]` : "");
          return { tagName, attribs: { ...attribs, src, referrerpolicy: "no-referrer", loading: "lazy" } };
        }
        return drop(); // cid:, javascript:, data lain, relatif → dibuang
      },
    },
    // Tambahan atribut hasil transform harus lolos allowlist.
    exclusiveFilter: (frame) => frame.tag === "a" && !frame.attribs.href && !frame.attribs.name && !frame.text.trim(),
  });

  return { html, hasRemoteImages, hadDataImages };
}

const ENT: Record<string, string> = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&nbsp;": " " };

/** HTML → teks polos (untuk snippet/fallback). Tidak untuk keamanan. */
export function htmlToText(html: string): string {
  return sanitizeHtml(html, { allowedTags: [], allowedAttributes: {}, nonTextTags: ["style", "script", "head", "title"] })
    .replace(/&(amp|lt|gt|quot|#39|nbsp);/g, (m) => ENT[m] ?? m)
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

/** Teks polos → HTML aman (escape, <br>, URL otomatis jadi tautan). */
export function textToHtml(text: string): string {
  const escaped = escapeHtml(text.replace(/\r\n?/g, "\n"));
  const linked = escaped.replace(/\bhttps?:\/\/[^\s<]+[^\s<.,;:!?)"']/g, (u) => `<a href="${u}">${u}</a>`);
  return `<div style="white-space:pre-wrap;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5">${linked.replace(/\n/g, "<br>")}</div>`;
}

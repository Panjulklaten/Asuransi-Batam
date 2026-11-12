// Parsing alamat email sederhana namun ketat (RFC 5322 penuh tidak diperlukan di sini).

const EMAIL_RE = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]{1,64}@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i;

export const isEmail = (s: string) => s.length <= 254 && EMAIL_RE.test(s);
export const normalizeEmail = (s: string) => s.trim().toLowerCase();

export interface ParsedAddress { email: string; name: string | null }

/** "Nama <a@b.com>", "<a@b.com>", atau "a@b.com" → {email, name}. Mengembalikan null bila tidak valid. */
export function parseAddress(raw: string | null | undefined): ParsedAddress | null {
  if (!raw) return null;
  const s = String(raw).trim();
  const m = s.match(/^(.*?)<\s*([^<>\s]+)\s*>\s*$/);
  const email = normalizeEmail(m ? m[2] : s);
  if (!isEmail(email)) return null;
  const name = m ? m[1].trim().replace(/^"(.*)"$/, "$1").replace(/\\(.)/g, "$1").trim() : "";
  return { email, name: name || null };
}

/** Daftar alamat (array atau string dipisah koma) → alamat unik & valid. */
export function parseAddressList(raw: unknown): string[] {
  const parts: string[] = Array.isArray(raw)
    ? raw.map(String)
    : typeof raw === "string"
      ? splitAddressList(raw)
      : [];
  const out: string[] = [];
  for (const p of parts) {
    const a = parseAddress(p);
    if (a && !out.includes(a.email)) out.push(a.email);
  }
  return out;
}

/** Seperti parseAddressList, tetapi melaporkan entri yang tidak valid (agar tidak ada penerima yang diam-diam terbuang). */
export function parseAddressListStrict(raw: string): { valid: string[]; invalid: string[] } {
  const valid: string[] = [], invalid: string[] = [];
  for (const part of splitAddressList(raw)) {
    const a = /[\r\n]/.test(part.trim()) ? null : parseAddress(part);
    if (!a) invalid.push(part.replace(/[\r\n]+/g, " ").slice(0, 60));
    else if (!valid.includes(a.email)) valid.push(a.email);
  }
  return { valid, invalid };
}

// Memisah pada koma/titik-koma yang berada di luar tanda kutip & kurung sudut.
function splitAddressList(s: string): string[] {
  const out: string[] = [];
  let cur = "", quoted = false, angle = false;
  for (const ch of s) {
    if (ch === '"') quoted = !quoted;
    else if (!quoted && ch === "<") angle = true;
    else if (!quoted && ch === ">") angle = false;
    if ((ch === "," || ch === ";" || ch === "\n") && !quoted && !angle) { out.push(cur); cur = ""; continue; }
    cur += ch;
  }
  if (cur.trim()) out.push(cur);
  return out.map((x) => x.trim()).filter(Boolean);
}

/** Nama tampilan aman untuk header From (tanpa karakter kontrol/kutip yang merusak header). */
export function safeDisplayName(name: string): string {
  return name.replace(/[\r\n"<>\\]/g, " ").replace(/\s+/g, " ").trim().slice(0, 100);
}

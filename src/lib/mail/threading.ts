// Logika threading email murni (tanpa I/O) supaya mudah diuji.
// Identitas thread = rantai Message-ID / In-Reply-To / References. Subject hanya fallback.

const MSGID_RE = /<[^<>\s@]+@[^<>\s]+>/g;

/** Ekstrak semua Message-ID (<id@host>) dari nilai header (string, array, atau campuran spasi/koma). */
export function extractMessageIds(value: unknown): string[] {
  const text = Array.isArray(value) ? value.join(" ") : typeof value === "string" ? value : "";
  const found = text.match(MSGID_RE) ?? [];
  return [...new Set(found.map((s) => s.trim()))];
}

/** Message-ID tunggal; mengembalikan null bila tidak ada. Format tanpa kurung sudut ditambah kurung. */
export function normalizeMessageId(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const ids = extractMessageIds(value);
  if (ids.length) return ids[0];
  const bare = value.trim();
  return /^[^<>\s@]+@[^<>\s]+$/.test(bare) ? `<${bare}>` : null;
}

/** Case-insensitive lookup di objek header (Resend mengembalikan nama header huruf kecil, tapi jangan berasumsi). */
export function headerValue(headers: unknown, name: string): unknown {
  if (!headers || typeof headers !== "object") return undefined;
  const target = name.toLowerCase();
  for (const [k, v] of Object.entries(headers as Record<string, unknown>)) {
    if (k.toLowerCase() === target) return v;
  }
  return undefined;
}

const PREFIX_RE = /^\s*((re|fw|fwd|aw|wg|sv|vs|balas|bls|tr|rv)\s*(\[\d+\])?\s*:\s*)+/i;

/** True bila subject diawali Re:/Fwd:/Balas: dst. */
export const hasReplyPrefix = (subject: string) => /^\s*(re|balas|bls|aw|sv)\s*(\[\d+\])?\s*:/i.test(subject);

/** Subject ternormalisasi untuk FALLBACK pencocokan: tanpa Re:/Fwd:, spasi dirapikan, huruf kecil. */
export function normalizeSubject(subject: string): string {
  return subject.replace(PREFIX_RE, "").replace(/\s+/g, " ").trim().toLowerCase().slice(0, 300);
}

/** Tambahkan "Re: " bila belum ada. */
export function replySubject(subject: string): string {
  const s = subject.trim();
  return hasReplyPrefix(s) ? s : `Re: ${s || "(tanpa subjek)"}`;
}

/**
 * Header balasan menurut RFC 5322 §3.6.4:
 *   In-Reply-To = Message-ID pesan yang dibalas
 *   References  = References induk + Message-ID induk (bila induk tak punya References, pakai In-Reply-To induk)
 * Dipangkas ke ID pertama + (max-1) terakhir agar header tidak membengkak.
 */
export function buildReplyHeaders(parent: { message_id: string; in_reply_to?: string | null; references_ids?: string[] | null }, max = 20) {
  let chain = [...(parent.references_ids ?? [])];
  if (chain.length === 0 && parent.in_reply_to) chain = [parent.in_reply_to];
  chain.push(parent.message_id);
  chain = chain.filter((v, i) => chain.indexOf(v) === i);
  if (chain.length > max) chain = [chain[0], ...chain.slice(chain.length - (max - 1))];
  return { inReplyTo: parent.message_id, references: chain };
}

export interface MsgRef { id: string; thread_id: string; message_id: string | null }

/**
 * Pilih thread dari kecocokan header. Prioritas: In-Reply-To → References dari yang terdekat (paling akhir) →
 * pesan yang sudah ada dan merujuk Message-ID pesan baru ini (kasus datang tidak berurutan).
 */
export function pickThreadByHeaders(
  inReplyTo: string | null,
  references: string[],
  knownByMessageId: Map<string, string>, // message_id → thread_id
  referrers: string[], // thread_id dari pesan lama yang merujuk pesan baru
): string | null {
  if (inReplyTo && knownByMessageId.has(inReplyTo)) return knownByMessageId.get(inReplyTo)!;
  for (let i = references.length - 1; i >= 0; i--) {
    const t = knownByMessageId.get(references[i]);
    if (t) return t;
  }
  return referrers[0] ?? null;
}

/** Snippet ringkas dari teks (tanpa kutipan balasan). */
export function makeSnippet(text: string | null | undefined, max = 160): string {
  if (!text) return "";
  const lines = text.replace(/\r/g, "").split("\n");
  const kept: string[] = [];
  for (const line of lines) {
    if (/^\s*>/.test(line)) continue;
    if (/^(on .+ wrote:|pada .+ menulis:|-{2,}\s*(original message|pesan asli)|from:\s.+<)/i.test(line.trim())) break;
    kept.push(line);
  }
  return kept.join(" ").replace(/\s+/g, " ").trim().slice(0, max);
}

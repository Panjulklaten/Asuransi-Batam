// Helper tampilan webmail (client-safe).
const TZ = "Asia/Jakarta";

export function formatListDate(iso: string, now = new Date()): string {
  const d = new Date(iso);
  const day = (x: Date) => new Intl.DateTimeFormat("en-CA", { timeZone: TZ }).format(x);
  if (day(d) === day(now)) return new Intl.DateTimeFormat("id-ID", { hour: "2-digit", minute: "2-digit", timeZone: TZ }).format(d);
  const sameYear = new Intl.DateTimeFormat("en", { year: "numeric", timeZone: TZ }).format(d) === new Intl.DateTimeFormat("en", { year: "numeric", timeZone: TZ }).format(now);
  return new Intl.DateTimeFormat("id-ID", sameYear ? { day: "numeric", month: "short", timeZone: TZ } : { day: "numeric", month: "short", year: "numeric", timeZone: TZ }).format(d);
}

export const formatFullDate = (iso: string) =>
  new Intl.DateTimeFormat("id-ID", { dateStyle: "full", timeStyle: "short", timeZone: TZ }).format(new Date(iso)) + " WIB";

export function formatBytes(n: number | null): string {
  if (!n) return "";
  if (n < 1024) return `${n} B`;
  if (n < 1048576) return `${Math.round(n / 1024)} KB`;
  return `${(n / 1048576).toFixed(1)} MB`;
}

export const initials = (s: string) => (s.replace(/<.*>/, "").trim().match(/[\p{L}\p{N}]/gu)?.slice(0, 2).join("") || "?").toUpperCase();

/** Pisahkan teks balasan dari kutipan riwayat ("Pada ... menulis:", "On ... wrote:", baris diawali ">"). */
export function splitQuoted(text: string): { main: string; quoted: string } {
  const lines = text.replace(/\r/g, "").split("\n");
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i].trim();
    if (/^(on .+ wrote:|pada .+ menulis:|-{2,}\s*(original message|pesan asli))/i.test(l) || (/^>/.test(l) && i > 0)) {
      return { main: lines.slice(0, i).join("\n").trimEnd(), quoted: lines.slice(i).join("\n") };
    }
  }
  return { main: text, quoted: "" };
}

export async function api<T = Record<string, unknown>>(url: string, init?: RequestInit): Promise<{ ok: boolean; status: number; data: T & { message?: string } }> {
  try {
    const res = await fetch(url, { ...init, cache: "no-store", credentials: "same-origin" });
    const data = (await res.json().catch(() => ({}))) as T & { message?: string };
    return { ok: res.ok, status: res.status, data };
  } catch {
    return { ok: false, status: 0, data: { message: "Tidak dapat terhubung ke server." } as T & { message?: string } };
  }
}

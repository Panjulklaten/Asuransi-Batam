import { SITE } from "@/lib/constants";
import { EVENT } from "./event";
import { LIABILITY } from "./liability";
import { MARINE } from "./marine";
import { PA } from "./pa";
import { SURETY } from "./surety";
import type { Bi, FieldDef, Lang, QuoteCluster, QuoteClusterKey, QuoteState } from "./types";

export type { Bi, FieldDef, Lang, QuoteCluster, QuoteClusterKey, QuoteState, Requirement, Option } from "./types";

/** Nomor WhatsApp admin penerima permintaan penawaran. Ganti di sini bila memakai nomor khusus admin. */
export const QUOTE_WA_NUMBER: string = SITE.phoneWA;

export const QUOTE_CLUSTERS: Record<QuoteClusterKey, QuoteCluster> = {
  surety: SURETY,
  marine: MARINE,
  event: EVENT,
  liability: LIABILITY,
  pa: PA,
};

export const pick = (b: Bi, lang: Lang) => b[lang];

export const typeLabel = (c: QuoteCluster, key: string, lang: Lang) =>
  pick((c.types.find((t) => t.key === key) ?? c.types[c.types.length - 1]).label, lang);

export const isVisible = (f: { showFor?: string[] }, type: string) => !f.showFor || f.showFor.includes(type);

// ─── Format angka ────────────────────────────────────────────
export function formatDigits(digits: string, lang: Lang): string {
  if (!digits) return "";
  return Number(digits).toLocaleString(lang === "id" ? "id-ID" : "en-US");
}

export function compactRupiah(digits: string, lang: Lang): string {
  const n = Number(digits);
  if (!n) return "";
  const loc = lang === "id" ? "id-ID" : "en-US";
  const f = (v: number) => v.toLocaleString(loc, { maximumFractionDigits: 2 });
  if (n >= 1e12) return `≈ Rp ${f(n / 1e12)} ${lang === "id" ? "triliun" : "trillion"}`;
  if (n >= 1e9) return `≈ Rp ${f(n / 1e9)} ${lang === "id" ? "miliar" : "billion"}`;
  if (n >= 1e6) return `≈ Rp ${f(n / 1e6)} ${lang === "id" ? "juta" : "million"}`;
  return "";
}

// ─── Nilai awal form ─────────────────────────────────────────
export function initialValues(c: QuoteCluster): Record<string, string> {
  const v: Record<string, string> = {};
  for (const f of c.fields) {
    if (f.kind === "segmented") v[f.key] = f.default;
    if (f.kind === "period") v[`${f.key}_unit`] = f.defaultUnit ?? "month";
  }
  return v;
}

/** Bidang wajib yang belum terisi (untuk validasi langkah 1). */
export function missingFields(c: QuoteCluster, type: string, values: Record<string, string>): string[] {
  return c.fields
    .filter((f) => isVisible(f, type) && !f.optional)
    .filter((f) => {
      const v = (values[f.key] ?? "").trim();
      if (f.kind === "money" || f.kind === "period" || f.kind === "number") return !Number(v);
      return !v;
    })
    .map((f) => f.key);
}

// ─── Pesan WhatsApp ──────────────────────────────────────────
function formatField(f: FieldDef, values: Record<string, string>, lang: Lang): string {
  const raw = (values[f.key] ?? "").trim();
  if (!raw) return "";
  switch (f.kind) {
    case "money":
      return `Rp ${formatDigits(raw, lang)}`;
    case "period": {
      const unit = values[`${f.key}_unit`] === "day" ? (lang === "id" ? "hari" : "days") : lang === "id" ? "bulan" : "months";
      return `${raw} ${unit}`;
    }
    case "segmented":
    case "select":
      return f.options.find((o) => o.value === raw)?.label[lang] ?? raw;
    case "number":
      return f.suffix ? `${raw} ${f.suffix[lang]}` : raw;
    default:
      return raw;
  }
}

export function buildQuoteMessage(c: QuoteCluster, s: QuoteState, lang: Lang): string {
  const id = lang === "id";
  const date = s.targetDate
    ? new Date(s.targetDate + "T00:00:00").toLocaleDateString(id ? "id-ID" : "en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";
  const flags = c.flags
    .filter((f) => isVisible(f, s.type) && s.flags.includes(f.key))
    .map((f) => `- ${pick(f.label, lang)}`);

  const lines: string[] = [
    pick(c.copy.msgIntro, lang),
    "",
    id ? "*Kebutuhan*" : "*Requirement*",
    `${pick(c.typeLine, lang)}: ${typeLabel(c, s.type, lang)}`,
  ];
  for (const f of c.fields) {
    if (!isVisible(f, s.type)) continue;
    const text = formatField(f, s.values, lang);
    if (text) lines.push(`${pick(f.label, lang)}: ${text}`);
  }
  if (date) lines.push(`${pick(c.copy.dateLabel, lang)}: ${date}`);
  if (s.client.trim()) lines.push(`${pick(c.copy.clientLabel, lang)}: ${s.client.trim()}`);

  lines.push(
    "",
    id ? "*Pemohon*" : "*Applicant*",
    `${id ? "Nama" : "Name"}: ${s.name.trim()}`,
    ...(s.company.trim() ? [`${id ? "Perusahaan" : "Company"}: ${s.company.trim()}`] : []),
    `WhatsApp: ${s.phone.trim()}`,
  );

  if (flags.length || s.note.trim()) {
    lines.push("", id ? "*Bahan analisa awal*" : "*Initial assessment notes*", ...flags);
    if (s.note.trim()) lines.push(`${id ? "Catatan" : "Notes"}: ${s.note.trim()}`);
  }

  lines.push("", pick(c.copy.msgOutro, lang));
  return lines.join("\n");
}

export const quoteWaUrl = (message: string) =>
  `https://wa.me/${QUOTE_WA_NUMBER}?text=${encodeURIComponent(message)}`;

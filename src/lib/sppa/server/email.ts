// Email lengkap ke admin via Resend (REST, tanpa dependensi). Kunci hanya dibaca di server.
import { evaluate } from "../conditions";
import { formatValue } from "../format";
import type { Field, FieldValue, ProductConfig } from "../types";
import { requestedDocuments } from "../validation";

export interface EmailInput {
  referenceNo: string;
  product: ProductConfig;
  values: Record<string, FieldValue>;
  submittedAt: Date;
  applicantName: string;
  applicantEmail: string | null;
}

export const emailConfigured = () => !!(process.env.RESEND_API_KEY && process.env.SPPA_NOTIFY_EMAIL);

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

function sections(p: ProductConfig, v: Record<string, FieldValue>) {
  const cur = v.currency === "other" ? String(v.currencyOther ?? "") : String(v.currency ?? "Rp");
  const blocks: { title: string; fields: Field[] }[] = [
    ...(p.subTypeField ? [{ title: "Jenis Produk", fields: [p.subTypeField] }] : []),
    ...p.steps.filter((s) => s.id !== "documents").map((s) => ({ title: s.title, fields: s.fields })),
  ];
  return blocks
    .map((b) => ({
      title: b.title,
      rows: b.fields
        .filter((f) => v[f.name] !== undefined && v[f.name] !== "" && !(Array.isArray(v[f.name]) && (v[f.name] as unknown[]).length === 0))
        .map((f) => ({ label: f.label, value: formatValue(f, v[f.name], cur) })),
    }))
    .filter((b) => b.rows.length);
}

export function buildEmail(i: EmailInput) {
  const when = new Intl.DateTimeFormat("id-ID", { dateStyle: "long", timeStyle: "short", timeZone: "Asia/Jakarta" }).format(i.submittedAt);
  const secs = sections(i.product, i.values);
  const docs = requestedDocuments(i.product, i.values);
  const subject = oneLine(`SPPA baru ${i.referenceNo} – ${i.product.label} – ${i.applicantName}`).slice(0, 200);

  const text = [
    `SPPA BARU: ${i.referenceNo}`,
    `Produk: ${i.product.label}`,
    `Waktu: ${when} WIB`,
    "",
    ...secs.flatMap((s) => [`== ${s.title} ==`, ...s.rows.map((r) => `${r.label}: ${r.value}`), ""]),
    docs.length ? "Dokumen yang diminta dikirim via WhatsApp:" : "",
    ...docs.map((d) => `- ${d.label}${d.required ? " (wajib)" : ""}`),
  ].join("\n");

  const html = `<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#0a1628">
<h2 style="margin:0 0 4px">SPPA baru: ${esc(i.referenceNo)}</h2>
<p style="margin:0 0 16px;color:#475569">${esc(i.product.label)} · ${esc(when)} WIB</p>
${secs.map((s) => `<h3 style="margin:18px 0 6px;border-bottom:2px solid #c9a84c;padding-bottom:4px">${esc(s.title)}</h3>
<table style="width:100%;border-collapse:collapse;font-size:14px">${s.rows.map((r) => `<tr><td style="padding:5px 8px 5px 0;color:#64748b;vertical-align:top;width:38%">${esc(r.label)}</td><td style="padding:5px 0;white-space:pre-line">${esc(r.value)}</td></tr>`).join("")}</table>`).join("")}
${docs.length ? `<h3 style="margin:18px 0 6px">Dokumen yang diminta via WhatsApp</h3><ul>${docs.map((d) => `<li>${esc(d.label)}${d.required ? " <b>(wajib)</b>" : ""}</li>`).join("")}</ul>` : ""}
</div>`;

  return { subject, text, html };
}

export async function sendEmail(m: { subject: string; text: string; html: string; replyTo?: string | null }): Promise<{ ok: boolean; error?: string }> {
  const key = process.env.RESEND_API_KEY;
  const to = (process.env.SPPA_NOTIFY_EMAIL ?? "").split(",").map((s) => s.trim()).filter(Boolean);
  if (!key || !to.length) return { ok: false, error: "not_configured" };
  const from = process.env.SPPA_EMAIL_FROM || "Asuransi Batam <onboarding@resend.dev>";
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to, subject: m.subject, html: m.html, text: m.text, ...(m.replyTo ? { reply_to: m.replyTo } : {}) }),
      signal: AbortSignal.timeout(10000),
    });
    if (res.ok) return { ok: true };
    const j = (await res.json().catch(() => null)) as { name?: string; message?: string } | null;
    return { ok: false, error: `http_${res.status}:${j?.name ?? ""}:${j?.message ?? ""}`.slice(0, 300) };
  } catch {
    return { ok: false, error: "network" };
  }
}

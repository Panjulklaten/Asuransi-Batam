// Tanda tangan email Asuransi Batam. HTML "email-safe": tabel, style inline, gambar dengan URL absolut
// (diambil dari public/images/email/*, dibuat oleh scripts/mail-signature-assets.mjs). Tanpa SVG/CSS modern
// agar tampil sama di Gmail, Outlook, dan aplikasi email HP. Konten statis & tepercaya (bukan input pengguna).
import { SITE } from "@/lib/constants";

const NAVY = "#0a1628";
const GOLD = "#c9a84c";
const GOLD_DARK = "#a07830";
const MUTED = "#5b6577";

const NAME = "Rio Mardiansyah";
const TITLE = "Praktisi Asuransi Kerugian";
const PHONE_DISPLAY = "+62 813-7333-6728";
const PRODUCTS = "Properti · Kendaraan · Alat Berat · Marine · Liability · Engineering · Surety Bond";

const img = (file: string) => `${SITE.url}/images/email/${file}`;
const linkedin = SITE.agent.sameAs[0];

const icon = (href: string, file: string, alt: string) =>
  `<td style="padding-right:8px"><a href="${href}" target="_blank" style="text-decoration:none"><img src="${img(file)}" width="28" height="28" alt="${alt}" style="display:block;border:0;width:28px;height:28px"></a></td>`;

const link = (href: string, label: string) => `<a href="${href}" target="_blank" style="color:#1a4fa0;text-decoration:none;white-space:nowrap">${label}</a>`;
const row = (label: string, value: string) =>
  `<tr><td style="padding:0 0 3px 0;font-size:13px;line-height:18px;color:${NAVY}"><span style="color:${MUTED}">${label}:</span> ${value}</td></tr>`;

export function signatureHtml(): string {
  return (
    `<table cellpadding="0" cellspacing="0" border="0" role="presentation" style="margin-top:18px;font-family:Arial,Helvetica,sans-serif;color:${NAVY}">` +
    `<tr><td>` +
    `<table cellpadding="0" cellspacing="0" border="0" role="presentation"><tr>` +
    `<td valign="top" style="padding-right:16px"><img src="${img("rio-signature.png")}" width="84" height="84" alt="${NAME}" style="display:block;border:0;width:84px;height:84px;border-radius:50%"></td>` +
    `<td valign="top" style="border-left:3px solid ${GOLD};padding-left:16px">` +
    `<table cellpadding="0" cellspacing="0" border="0" role="presentation">` +
    `<tr><td style="font-size:17px;line-height:22px;font-weight:bold;color:${NAVY}">${NAME}</td></tr>` +
    `<tr><td style="font-size:13px;line-height:18px;color:${GOLD_DARK};padding-bottom:7px">${TITLE} · <strong>${SITE.name}</strong></td></tr>` +
    row("Telp / WA", link(`https://wa.me/${SITE.phoneWA}`, PHONE_DISPLAY)) +
    row("Email", link(`mailto:${SITE.email}`, SITE.email)) +
    row("Website", link(SITE.url, SITE.url.replace("https://", ""))) +
    `<tr><td style="padding-top:7px"><table cellpadding="0" cellspacing="0" border="0" role="presentation"><tr>` +
    icon(linkedin, "icon-linkedin.png", "LinkedIn") +
    icon(`https://wa.me/${SITE.phoneWA}`, "icon-whatsapp.png", "WhatsApp") +
    icon(`mailto:${SITE.email}`, "icon-email.png", "Email") +
    icon(SITE.url, "icon-website.png", "Website") +
    `</tr></table></td></tr>` +
    `</table></td></tr></table>` +
    `</td></tr>` +
    `<tr><td style="padding-top:12px"><table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%"><tr><td style="border-top:1px solid ${GOLD};padding-top:8px;font-size:11px;line-height:16px;color:${MUTED}">` +
    `<strong style="color:${NAVY}">${SITE.name}</strong> — ${SITE.tagline}<br>${PRODUCTS}<br>${SITE.address}` +
    `</td></tr></table></td></tr>` +
    `</table>`
  );
}

export function signatureText(): string {
  return [
    "--",
    `${NAME}`,
    `${TITLE} · ${SITE.name}`,
    `Telp / WA: ${PHONE_DISPLAY} (https://wa.me/${SITE.phoneWA})`,
    `Email: ${SITE.email}`,
    `Website: ${SITE.url}`,
    `LinkedIn: ${linkedin}`,
  ].join("\n");
}

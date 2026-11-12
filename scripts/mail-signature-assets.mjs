// Membuat aset gambar tanda tangan email (foto bulat berbingkai emas + ikon navy/emas) ke public/images/email/.
// Jalankan: node scripts/mail-signature-assets.mjs   (sharp sudah ikut terpasang bersama Next.js)
import sharp from "sharp";
import fs from "node:fs";

const OUT = "public/images/email";
fs.mkdirSync(OUT, { recursive: true });
const NAVY = "#0a1628", GOLD = "#c9a84c", GOLD_LIGHT = "#f0d080";

// 1) Foto: potong persegi di sekitar wajah, topeng lingkaran + bingkai emas. 2x (168px) untuk layar retina.
const S = 168;
const mask = Buffer.from(`<svg width="${S}" height="${S}"><circle cx="${S / 2}" cy="${S / 2}" r="${S / 2 - 3}" fill="#fff"/></svg>`);
const ring = Buffer.from(`<svg width="${S}" height="${S}"><circle cx="${S / 2}" cy="${S / 2}" r="${S / 2 - 3}" fill="none" stroke="${GOLD}" stroke-width="5"/></svg>`);
const face = await sharp("public/images/rio-mardiansyah.jpg").extract({ left: 62, top: 14, width: 316, height: 316 }).resize(S, S).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer();
await sharp(face).composite([{ input: ring }]).png({ compressionLevel: 9 }).toFile(`${OUT}/rio-signature.png`);

// 2) Ikon bulat 56px (tampil 28px). Glyph lucide (ISC) + "in" LinkedIn buatan sendiri.
const stroke = (inner) => `<g fill="none" stroke="${GOLD_LIGHT}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${inner}</g>`;
const glyphs = {
  linkedin: `<g fill="${GOLD_LIGHT}"><circle cx="6.4" cy="5.8" r="2"/><rect x="4.5" y="9.4" width="3.8" height="10.2" rx=".6"/><rect x="10.2" y="9.4" width="3.6" height="10.2" rx=".6"/><path d="M13.8 12.8C14.5 10.8 16 9.1 18.2 9.1c2.9 0 3.9 1.9 3.9 5v5.5h-3.6v-4.9c0-1.3-.4-2.2-1.5-2.2-1.2 0-1.8.9-1.8 2.2v4.9h-3.4z"/></g>`,
  whatsapp: stroke(`<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M9 9.2c.2 3 2.7 5.5 5.8 5.8l1-1.2-2.2-1-.8.7c-1-.4-2-1.4-2.4-2.4l.7-.8-1-2.2z"/>`),
  email: stroke(`<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>`),
  website: stroke(`<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>`),
};
for (const [name, g] of Object.entries(glyphs)) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"><circle cx="28" cy="28" r="27" fill="${NAVY}" stroke="${GOLD}" stroke-width="2"/><g transform="translate(14 14) scale(1.1667)">${g}</g></svg>`;
  await sharp(Buffer.from(svg), { density: 288 }).resize(56, 56).png({ compressionLevel: 9 }).toFile(`${OUT}/icon-${name}.png`);
}
console.log("OK", fs.readdirSync(OUT));

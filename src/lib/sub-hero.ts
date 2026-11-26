// Foto hero otomatis untuk sub-halaman produk.
// Taruh gambar di public/images/produk/sub/<slug>.webp (atau .jpg/.jpeg/.png).
// <slug> = segmen terakhir URL halaman Indonesia, mis. /asuransi-properti/asuransi-hotel-batam -> asuransi-hotel-batam.webp
// Bila file belum ada, fungsi mengembalikan undefined dan hero tampil seperti biasa (tanpa kotak kosong).
import fs from "node:fs";
import path from "node:path";

const EXTS = ["webp", "jpg", "jpeg", "png"] as const;

// Halaman EN memakai gambar yang sama dengan halaman Indonesia.
const EN_TO_ID: Record<string, string> = {
  "travel-insurance": "asuransi-perjalanan",
  "dump-truck-insurance": "asuransi-dumptruck",
  "motorcycle-insurance-batam": "asuransi-motor-batam",
  "car-insurance-batam": "asuransi-mobil-batam",
  "b3-waste-insurance": "asuransi-limbah-b3",
  "crane-insurance": "asuransi-crane",
  "heavy-equipment-insurance": "asuransi-alat-berat",
  "factory-industrial-insurance-batam": "asuransi-pabrik-kawasan-industri-batam",
  "apartment-insurance-batam": "asuransi-apartemen-batam",
  "warehouse-insurance-batam": "asuransi-gudang-batam",
  "shophouse-insurance-batam": "asuransi-ruko-batam",
  "home-insurance-batam": "asuransi-rumah-batam",
  "hotel-insurance-batam": "asuransi-hotel-batam",
};

export function resolveSubHero(
  breadcrumbs: { label: string; href: string }[],
  title: string,
): { src: string; alt: string } | undefined {
  if (breadcrumbs.length < 2) return undefined; // hanya sub-halaman
  const last = breadcrumbs[breadcrumbs.length - 1].href;
  const isEN = last.startsWith("/en");
  const raw = last.split("/").filter(Boolean).pop();
  if (!raw) return undefined;
  const slug = isEN ? EN_TO_ID[raw] ?? raw : raw;
  for (const ext of EXTS) {
    const rel = `/images/produk/sub/${slug}.${ext}`;
    try {
      if (fs.existsSync(path.join(process.cwd(), "public", rel))) {
        return { src: rel, alt: isEN ? `${title} – illustration` : `${title} – ilustrasi perlindungan di Batam` };
      }
    } catch {
      /* abaikan: anggap gambar belum ada */
    }
  }
  return undefined;
}

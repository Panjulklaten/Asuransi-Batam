import fs from "node:fs";
import path from "node:path";

/**
 * Foto produk untuk kartu "Produk Unggulan" di halaman utama.
 *
 * Taruh file di `public/images/produk/<slug>.webp` (juga boleh .jpg/.jpeg/.png/.avif).
 * Jika file belum ada, kartu otomatis tampil tanpa foto (desain lama), jadi foto bisa
 * ditambahkan bertahap tanpa mengubah kode. Dicek saat build (server component).
 */
const EXTENSIONS = ["webp", "jpg", "jpeg", "png", "avif"] as const;
const DIR = path.join(process.cwd(), "public", "images", "produk");

export function getProductImage(slug: string): string | undefined {
  for (const ext of EXTENSIONS) {
    const file = `${slug}.${ext}`;
    if (fs.existsSync(path.join(DIR, file))) return `/images/produk/${file}`;
  }
  return undefined;
}

/**
 * Hanya produk ini yang memakai foto besar di atas kartu. Produk lain yang punya foto
 * memakai foto kecil di samping judul dan deskripsi (kartu kompak), supaya halaman
 * tidak terlalu penuh di HP. Ubah daftar ini untuk memilih produk berfoto besar.
 */
export const FEATURED_PRODUCT_SLUGS: readonly string[] = ["properti", "kendaraan", "machinery"];

export type ProductCardLayout = "photo" | "compact" | "plain";

export function getProductLayout(slug: string, image?: string): ProductCardLayout {
  if (!image) return "plain";
  return FEATURED_PRODUCT_SLUGS.includes(slug) ? "photo" : "compact";
}

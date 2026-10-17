// next.config.ts  ← VERSI FINAL (semua sub-pages sudah selesai)
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { remotePatterns: [] },

  async redirects() {
    return [
      // --- Kombinasi host lama/www + file .html: redirect LANGSUNG (1 hop)
      // ke tujuan final di domain kanonis, supaya tidak numpuk 2 redirect
      // (mis. www.asuransibatam.com/index.html tidak lagi lompat dulu ke
      // asuransibatam.com/index.html sebelum ke "/").
      { source: "/index.html",   has: [{ type: "host", value: "www.asuransibatam.com" }], destination: "https://asuransibatam.com/",             permanent: true },
      { source: "/home.html",    has: [{ type: "host", value: "www.asuransibatam.com" }], destination: "https://asuransibatam.com/",             permanent: true },
      { source: "/about.html",   has: [{ type: "host", value: "www.asuransibatam.com" }], destination: "https://asuransibatam.com/tentang-kami", permanent: true },
      { source: "/contact.html", has: [{ type: "host", value: "www.asuransibatam.com" }], destination: "https://asuransibatam.com/kontak",       permanent: true },
      { source: "/:path*.html",  has: [{ type: "host", value: "www.asuransibatam.com" }], destination: "https://asuransibatam.com/",             permanent: true },

      { source: "/index.html",   has: [{ type: "host", value: "asuransibatam.biz.id" }], destination: "https://asuransibatam.com/", permanent: true },
      { source: "/:path*.html",  has: [{ type: "host", value: "asuransibatam.biz.id" }], destination: "https://asuransibatam.com/", permanent: true },
      { source: "/index.html",   has: [{ type: "host", value: "www.asuransibatam.biz.id" }], destination: "https://asuransibatam.com/", permanent: true },
      { source: "/:path*.html",  has: [{ type: "host", value: "www.asuransibatam.biz.id" }], destination: "https://asuransibatam.com/", permanent: true },

      // Migrasi domain lama (.biz.id) → domain baru (.com) - path selain .html
      // CATATAN: rule ini hanya akan bekerja jika domain asuransibatam.biz.id
      // dan www.asuransibatam.biz.id di-assign ke project Vercel yang SAMA
      // dengan project ini. Jika tidak, redirect harus dikonfigurasi di
      // tempat domain lama itu di-hosting (DNS/hosting provider domain lama).
      { source: "/:path*", has: [{ type: "host", value: "asuransibatam.biz.id" }], destination: "https://asuransibatam.com/:path*", permanent: true },
      { source: "/:path*", has: [{ type: "host", value: "www.asuransibatam.biz.id" }], destination: "https://asuransibatam.com/:path*", permanent: true },

      // www → non-www (domain baru) - path selain .html (sudah ditangani di atas)
      { source: "/:path*", has: [{ type: "host", value: "www.asuransibatam.com" }], destination: "https://asuransibatam.com/:path*", permanent: true },
      
      // Legacy HTML (request yang sudah di host non-www / domain benar)
      { source: "/index.html",   destination: "/",             permanent: true },
      { source: "/home.html",    destination: "/",             permanent: true },
      { source: "/about.html",   destination: "/tentang-kami", permanent: true },
      { source: "/contact.html", destination: "/kontak",       permanent: true },
      { source: "/:path*.html",  destination: "/",             permanent: true },
      
      // Solusi Kanibalisme Konten: Blog → Halaman Induk Layanan
      { source: "/blog/asuransi-mobil-batam", destination: "/asuransi-kendaraan/asuransi-mobil-batam", permanent: true },
      { source: "/blog/cara-klaim-asuransi-mobil", destination: "/blog/cara-klaim-asuransi-mobil-batam", permanent: true },

      // Fix duplicate kalkulator premi (2 URL berbeda, title identik) → konsolidasi ke versi flat
      { source: "/kalkulator-premi/mobil", destination: "/kalkulator-premi-mobil", permanent: true },
      { source: "/kalkulator-premi/motor", destination: "/kalkulator-premi-motor", permanent: true },

      // 3 URL lama/phantom EN (/en/motorcycle-insurance-calculator,
      // /en/blog/how-to-claim-car-insurance, /en/blog/ship-insurance-premium-batam-2026)
      // SENGAJA tidak lagi di-redirect: GSC terus melaporkan "Kesalahan pengalihan"
      // (validasi gagal) meski rule bersih 1-hop. Sekarang dilayani sebagai 410 Gone
      // lewat route handler masing-masing (src/app/en/.../route.ts) — URL hantu tanpa
      // backlink aktif, jadi tidak ada sinyal yang hilang.
      // 4) Halaman lokasi digabung ke halaman kontak (isi peta, jam, area layanan, FAQ
      //    dipindah ke /kontak dan /en/contact) supaya tidak bersaing dengan halaman kontak.
      { source: "/lokasi", destination: "https://asuransibatam.com/kontak", permanent: true },
      { source: "/en/location", destination: "https://asuransibatam.com/en/contact", permanent: true },
    ];
  },
};

export default nextConfig;

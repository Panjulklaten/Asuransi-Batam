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

      // Fix GSC "Tidak ditemukan (404)" — 3 URL lama/phantom yang masih ter-index
      // Google tapi sudah tidak ada di source manapun (bukan link aktif di situs).
      // Dipasang 301 supaya crawl budget & sinyal link lama tidak hilang percuma.
      // NOTE (2026-08-08): GSC lalu melaporkan "Kesalahan pengalihan" untuk ketiga
      // URL ini. Tidak ditemukan loop/chain di source manapun (destination tidak
      // muncul sebagai source rule lain), tapi destination-nya sebelumnya relatif
      // ("/en/...") — kalau Googlebot masih crawl versi lama via host www./biz.id,
      // itu jadi 2-hop (host-normalize dulu, baru path-rule). Diubah ke absolute
      // URL di bawah supaya hasilnya selalu 1-hop langsung, sama seperti pola
      // konsolidasi redirect www/biz.id di atas.
      // 1) Slug lama kalkulator motor EN (urutan kata beda dari nama folder saat ini)
      { source: "/en/motorcycle-insurance-calculator", destination: "https://asuransibatam.com/en/motorcycle-premium-calculator", permanent: true },
      // 2) Slug lama sebelum artikel klaim mobil EN dipecah jadi -batam & -project
      { source: "/en/blog/how-to-claim-car-insurance", destination: "https://asuransibatam.com/en/blog/how-to-claim-car-insurance-batam", permanent: true },
      // 3) Versi EN artikel premi kapal belum pernah dibuat — arahkan ke halaman
      //    marine insurance EN yang paling relevan, bukan ke blog index generik
      { source: "/en/blog/ship-insurance-premium-batam-2026", destination: "https://asuransibatam.com/en/marine-insurance", permanent: true },
    ];
  },
};

export default nextConfig;

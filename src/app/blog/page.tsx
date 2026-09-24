// app/blog/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = generateSEO({
  title: "Blog Edukasi Asuransi – Tips, Panduan & Info Asuransi Batam",
  description: "Artikel edukasi asuransi kerugian. Panduan klaim, perbedaan produk, tips memilih asuransi, dan informasi terkini tentang asuransi di Batam.",
  canonical: "https://asuransibatam.com/blog",
  languages: {
      id: "https://asuransibatam.com/blog",
      en: "https://asuransibatam.com/en/blog",
    },
});

type Article = {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
};

const articles: Article[] = [
  // ── Kendaraan ───────────────────────────────────────────────────────────────
  {
    title: "Cara Klaim Asuransi Mobil Batam yang Benar dan Cepat",
    slug: "cara-klaim-asuransi-mobil-batam",
    date: "30 April 2026",
    category: "Kendaraan",
    excerpt:
      "Panduan lengkap langkah demi langkah cara mengajukan klaim asuransi mobil di Batam, dokumen yang dibutuhkan, dan tips agar klaim disetujui lebih cepat.",
    readTime: "7 menit",
  },
  {
    title: "Perbedaan Asuransi All Risk dan TLO",
    slug: "perbedaan-all-risk-dan-tlo",
    date: "5 Maret 2025",
    category: "Kendaraan",
    excerpt:
      "Apa beda asuransi mobil All Risk dan TLO? Pelajari cakupan, premi, dan mana yang paling sesuai untuk kebutuhan kendaraan Anda.",
    readTime: "5 menit",
  },
  {
    title: "Asuransi Motor Batam 2026: Premi, Tarif OJK & Tips Pilih Polis",
    slug: "asuransi-motor-batam",
    date: "29 Mei 2026",
    category: "Kendaraan",
    excerpt:
      "Panduan lengkap asuransi motor di Batam. Tarif OJK Wilayah 1, perbedaan all risk dan TLO motor, estimasi premi, dan tips memilih polis terbaik.",
    readTime: "7 menit",
  },
  {
    title: "Asuransi Dump Truck Batam untuk Proyek Konstruksi",
    slug: "asuransi-dump-truck-batam-proyek-konstruksi",
    date: "29 Mei 2026",
    category: "Kendaraan",
    excerpt:
      "Panduan lengkap asuransi dump truck di Batam untuk proyek konstruksi dan infrastruktur. Risiko operasional, jenis perlindungan, estimasi premi, dan tips klaim.",
    readTime: "8 menit",
  },
  {
    title: "Mobil Hanyut di Bengkong: Apakah Asuransi Kendaraan Anda Menanggung Kerusakan Akibat Banjir?",
    slug: "banjir-batam-2026-asuransi-kendaraan",
    date: "24 September 2026",
    category: "Kendaraan",
    excerpt:
      "Banjir 22 September 2026 menyeret mobil ke parit di Bengkong Indah. Kenapa All Risk belum tentu otomatis menanggung banjir, bahaya water hammer, dan langkah menyelamatkan kendaraan saat genangan naik.",
    readTime: "10 menit",
  },
  // ── Alat Berat ──────────────────────────────────────────────────────────────
  {
    title: "Asuransi Excavator dan Bulldozer di Batam",
    slug: "asuransi-excavator-dan-bulldozer",
    date: "6 Mei 2026",
    category: "Alat Berat",
    excerpt:
      "Panduan lengkap asuransi excavator dan bulldozer – jenis perlindungan, tarif premi, dan cara memilih polis yang tepat untuk alat berat Anda.",
    readTime: "8 menit",
  },
  {
    title: "Asuransi Alat Berat untuk Proyek Konstruksi",
    slug: "asuransi-alat-berat-proyek-konstruksi",
    date: "6 Mei 2026",
    category: "Alat Berat",
    excerpt:
      "Kenapa alat berat di proyek konstruksi wajib diasuransikan? Cari tahu jenis coverage, risiko yang ditanggung, dan cara klaim yang efisien.",
    readTime: "7 menit",
  },
  {
    title: "Asuransi Alat Berat Pertambangan",
    slug: "asuransi-alat-berat-pertambangan",
    date: "6 Mei 2026",
    category: "Alat Berat",
    excerpt:
      "Asuransi khusus alat berat pertambangan: risiko operasional di medan berat, perlindungan yang tersedia, dan tips memilih polis yang sesuai regulasi.",
    readTime: "8 menit",
  },
  {
    title: "Asuransi Pengiriman Mesin dan Alat Berat",
    slug: "asuransi-pengiriman-mesin-alat-berat",
    date: "8 Mei 2026",
    category: "Alat Berat",
    excerpt:
      "Panduan asuransi pengiriman mesin dan alat berat: risiko transit, jenis perlindungan yang tersedia, dan cara memastikan perlindungan optimal selama pengiriman.",
    readTime: "7 menit",
  },
  // ── Properti ────────────────────────────────────────────────────────────────
  {
    title: "Asuransi Properti Komersial di Batam",
    slug: "asuransi-properti-komersial-batam",
    date: "6 Mei 2026",
    category: "Properti",
    excerpt:
      "Panduan memilih asuransi properti komersial di Batam – ruko, gudang, hotel, dan gedung kantor. Tarif OJK, jenis coverage, dan cara klaim.",
    readTime: "9 menit",
  },
  {
    title: "Cara Klaim Asuransi Kebakaran Rumah",
    slug: "cara-klaim-asuransi-kebakaran-rumah",
    date: "6 Mei 2026",
    category: "Properti",
    excerpt:
      "Langkah-langkah klaim asuransi kebakaran rumah yang benar: dokumen yang diperlukan, tenggat waktu pelaporan, dan tips agar klaim tidak ditolak.",
    readTime: "6 menit",
  },
  {
    title: "Asuransi Gudang Kawasan Industri Muka Kuning & Batam",
    slug: "asuransi-gudang-kawasan-industri-muka-kuning-batam",
    date: "29 Mei 2026",
    category: "Properti",
    excerpt:
      "Panduan asuransi gudang untuk kawasan industri Muka Kuning, Kabil, dan Batam. Risiko gudang logistik, syarat BP Batam, estimasi premi, dan tips klaim.",
    readTime: "8 menit",
  },
  {
    title: "Banjir Batam September 2026: Apakah Asuransi Properti Anda Sudah Menanggung Risiko Ini?",
    slug: "banjir-batam-2026-asuransi-properti",
    date: "24 September 2026",
    category: "Properti",
    excerpt:
      "Hujan dua jam merendam Bengkong dan Batu Aji hingga 1 meter pada 22 September 2026. Kenapa Batam rawan banjir kilat, apa yang benar-benar ditanggung polis properti standar, dan langkah melindungi rumah, ruko, atau gudang Anda.",
    readTime: "11 menit",
  },
  // ── Liability ───────────────────────────────────────────────────────────────
  {
    title: "Asuransi Freight Forwarders Liability (FFL) Batam: Panduan Lengkap",
    slug: "asuransi-freight-forwarders-liability-batam-panduan-lengkap",
    date: "22 September 2026",
    category: "Liability",
    excerpt:
      "Panduan lengkap FFL untuk forwarder, PPJK & EMKL di Batam — perbedaan dengan marine cargo, siapa yang wajib punya, risiko di Batu Ampar, Sekupang & Tanjung Uncang, dan kisaran premi.",
    readTime: "13 menit",
  },
  {
    title: "Cara Klaim Asuransi FFL (Freight Forwarders Liability) di Batam",
    slug: "cara-klaim-asuransi-ffl-freight-forwarder-batam",
    date: "22 September 2026",
    category: "Liability",
    excerpt:
      "Panduan step-by-step mengajukan klaim FFL — dokumen yang dibutuhkan, timeline, penyebab klaim ditolak, dan tips mempercepat proses.",
    readTime: "10 menit",
  },
  {
    title: "Peta Risiko Logistik & Pergudangan Batam: Batu Ampar, Sekupang, Tanjung Uncang",
    slug: "kawasan-logistik-pergudangan-batam-batu-ampar-sekupang-tanjung-uncang",
    date: "22 September 2026",
    category: "Liability",
    excerpt:
      "Karakteristik risiko logistik dan pergudangan di tiga simpul utama Batam serta proteksi asuransi yang relevan untuk forwarder dan operator gudang.",
    readTime: "12 menit",
  },
  {
    title: "Employers Liability & Product Liability di Batam",
    slug: "employers-liability-product-liability-batam",
    date: "2 Juli 2026",
    category: "Liability",
    excerpt:
      "Dua jenis liability yang sering terlewat perusahaan di Batam: Employers Liability (tuntutan karyawan di luar BPJS TK) dan Product Liability (tuntutan atas produk yang diproduksi/didistribusikan).",
    readTime: "10 menit",
  },
  {
    title: "Cara Klaim Asuransi Public Liability di Batam",
    slug: "cara-klaim-asuransi-public-liability-batam",
    date: "2 Juli 2026",
    category: "Liability",
    excerpt:
      "Prosedur klaim Public Liability di Batam — dokumen yang dibutuhkan, tahapan proses, simulasi kasus subkontraktor galangan kapal, hotel, dan mall, serta kesalahan umum yang membuat klaim tertunda.",
    readTime: "9 menit",
  },
  {
    title: "Asuransi Public Liability di Batam: Panduan Lengkap",
    slug: "asuransi-public-liability-batam-panduan-lengkap",
    date: "2 Juli 2026",
    category: "Liability",
    excerpt:
      "Panduan lengkap Public Liability Insurance untuk subkontraktor galangan kapal, hotel, dan bisnis publik di Batam — siapa yang wajib punya, Additional Insured, Certificate of Insurance (COI), dan proses klaim.",
    readTime: "10 menit",
  },
  {
    title: "Pentingnya Asuransi Limbah B3 bagi Industri",
    slug: "pentingnya-asuransi-limbah-b3",
    date: "20 Februari 2025",
    category: "Liability",
    excerpt:
      "Mengapa perusahaan yang mengelola limbah B3 wajib memiliki asuransi? Pelajari risiko hukum, regulasi OJK, dan perlindungan yang tersedia.",
    readTime: "7 menit",
  },
  {
    title: "Cara Klaim Asuransi Limbah B3 Kawasan Industri Batam",
    slug: "klaim-asuransi-limbah-b3-kawasan-industri-batam",
    date: "29 Mei 2026",
    category: "Liability",
    excerpt:
      "Panduan lengkap prosedur klaim asuransi limbah B3 untuk pabrik di kawasan industri Batam. Regulasi KLHK, dokumen yang dibutuhkan, dan contoh kasus di Kabil dan Muka Kuning.",
    readTime: "8 menit",
  },
  // ── Engineering ─────────────────────────────────────────────────────────────
  {
    title: "Asuransi Proyek Konstruksi di Batam",
    slug: "asuransi-proyek-konstruksi-batam",
    date: "7 Mei 2026",
    category: "Engineering",
    excerpt:
      "Semua yang perlu Anda ketahui tentang asuransi proyek konstruksi di Batam – polis CAR/EAR, cakupan perlindungan, dan cara melindungi investasi dari awal hingga selesai.",
    readTime: "8 menit",
  },
  {
    title: "Perbedaan Asuransi CAR dan EAR",
    slug: "perbedaan-car-dan-ear",
    date: "7 Mei 2026",
    category: "Engineering",
    excerpt:
      "Apa yang membedakan Contractor's All Risk (CAR) dan Erection All Risk (EAR)? Pelajari polis mana yang berlaku untuk jenis proyek Anda dan apa saja yang dicakup.",
    readTime: "6 menit",
  },
  {
    title: "Asuransi Erection All Risk (EAR) Batam",
    slug: "asuransi-erection-all-risk-batam",
    date: "29 Mei 2026",
    category: "Engineering",
    excerpt:
      "Panduan lengkap asuransi Erection All Risk (EAR) di Batam untuk instalasi mesin pabrik, proyek energi, dan pemasangan equipment industri. Cakupan, premi, dan proses klaim.",
    readTime: "8 menit",
  },
  {
    title: "Cara Klaim Asuransi Contractor All Risk (CAR)",
    slug: "cara-klaim-asuransi-car",
    date: "7 Mei 2026",
    category: "Engineering",
    excerpt:
      "Panduan langkah demi langkah mengajukan klaim Contractor All Risk (CAR) di Indonesia. Dari pelaporan awal hingga pencairan ganti rugi, termasuk dokumen yang wajib disiapkan.",
    readTime: "7 menit",
  },
  // ── Marine ──────────────────────────────────────────────────────────────────
  {
    title: "Cara Klaim Asuransi Marine Cargo",
    slug: "cara-klaim-asuransi-marine-cargo",
    date: "7 Mei 2026",
    category: "Marine",
    excerpt:
      "Panduan lengkap klaim asuransi pengiriman laut (marine cargo) – dokumen survey kerusakan, prosedur pelaporan, dan cara mempercepat pembayaran klaim.",
    readTime: "7 menit",
  },
  {
    title: "Perbedaan Marine Hull vs Marine Cargo",
    slug: "perbedaan-marine-hull-vs-cargo",
    date: "7 Mei 2026",
    category: "Marine",
    excerpt:
      "Apa bedanya asuransi Marine Hull dan Marine Cargo? Pelajari cakupan, siapa yang perlu membelinya, dan bagaimana keduanya bekerja bersama.",
    readTime: "6 menit",
  },
  {
    title: "Asuransi Pengiriman Batam–Singapore",
    slug: "asuransi-pengiriman-batam-singapore",
    date: "7 Mei 2026",
    category: "Marine",
    excerpt:
      "Panduan asuransi kargo untuk jalur pengiriman Batam–Singapore: regulasi ekspor-impor, risiko utama, dan cara mendapatkan polis yang tepat.",
    readTime: "8 menit",
  },
  {
    title: "Asuransi Pengiriman Batam–Jakarta",
    slug: "asuransi-pengiriman-batam-jakarta",
    date: "8 Mei 2026",
    category: "Marine",
    excerpt:
      "Panduan asuransi kargo untuk jalur pengiriman Batam–Jakarta: risiko selama transit laut, jenis perlindungan, dan tips memilih polis yang sesuai kebutuhan bisnis.",
    readTime: "7 menit",
  },
  {
    title: "Premi Asuransi Marine Cargo di Batam",
    slug: "premi-asuransi-marine-cargo-batam",
    date: "8 Mei 2026",
    category: "Marine",
    excerpt:
      "Panduan lengkap tarif premi asuransi marine cargo di Batam: faktor penentu premi, cara menghitung biaya perlindungan, dan tips mendapatkan premi kompetitif.",
    readTime: "7 menit",
  },
  {
    title: "Asuransi Cargo Ekspor Batam",
    slug: "asuransi-cargo-ekspor-batam",
    date: "8 Mei 2026",
    category: "Marine",
    excerpt:
      "Panduan asuransi cargo ekspor dari Batam: persyaratan regulasi, jenis perlindungan untuk pengiriman internasional, dan cara memastikan kargo ekspor Anda terlindungi.",
    readTime: "8 menit",
  },
  {
    title: "Builder's Risk untuk Galangan Kapal di Batam",
    slug: "builders-risk-untuk-galangan-kapal",
    date: "7 Mei 2026",
    category: "Marine",
    excerpt:
      "Asuransi Builder's Risk khusus galangan kapal: perlindungan selama masa pembangunan, risiko yang ditanggung, dan syarat polis di industri perkapalan Batam.",
    readTime: "8 menit",
  },
  {
    title: "Jenis-Jenis Asuransi Kapal untuk Pemilik Armada",
    slug: "jenis-jenis-asuransi-kapal-armada",
    date: "1 Juli 2025",
    category: "Marine",
    excerpt:
      "Panduan lengkap jenis asuransi kapal untuk pemilik armada di Batam: Marine Hull, P&I, Cargo, hingga War Risk. Studi kasus tongkang dari praktisi berpengalaman.",
    readTime: "8 menit",
  },
  {
    title: "Berapa Premi Asuransi Builder's Risk Kapal di Batam?",
    slug: "berapa-premi-asuransi-builders-risk-kapal-batam",
    date: "7 Mei 2026",
    category: "Marine",
    excerpt:
      "Simulasi dan studi kasus perhitungan premi Builder's Risk Insurance kapal di Batam. Faktor penentu rate dan contoh klaim nyata di galangan.",
    readTime: "7 menit",
  },
  {
    title: "Cara Mendapatkan Asuransi Builders Risk di Batam",
    slug: "cara-mendapatkan-asuransi-builders-risk-batam",
    date: "23 Juni 2026",
    category: "Marine",
    excerpt:
      "Panduan lengkap memilih asuransi builders risk untuk proyek konstruksi & galangan kapal di Batam: studi kasus klaim nyata, kesalahan umum, dan langkah memilih sum insured yang tepat.",
    readTime: "8 menit",
  },
  {
    title: "Premi Asuransi Kapal di Batam 2026",
    slug: "premi-asuransi-kapal-batam-2026",
    date: "15 Januari 2026",
    category: "Marine",
    excerpt:
      "Panduan lengkap premi asuransi kapal di Batam 2026: kisaran tarif Marine Hull, P&I, faktor penentu premi, dan tips menekan biaya dari praktisi asuransi berpengalaman.",
    readTime: "7 menit",
  },
  // ── Surety Bond ─────────────────────────────────────────────────────────────
  {
    title: "Biaya dan Premi Surety Bond di Batam",
    slug: "biaya-premi-surety-bond-batam",
    date: "2 Juli 2026",
    category: "Surety Bond",
    excerpt:
      "Berapa biaya surety bond di Batam? Cara perhitungan premi bid bond, performance bond, advance payment bond, dan maintenance bond, serta faktor yang membuat tarif lebih murah atau lebih mahal.",
    readTime: "9 menit",
  },
  {
    title: "Cara Mendapatkan Surety Bond untuk Tender Proyek di Batam",
    slug: "cara-mendapatkan-surety-bond-tender-proyek-batam",
    date: "2 Juli 2026",
    category: "Surety Bond",
    excerpt:
      "Panduan lengkap kontraktor di Batam untuk mendapatkan surety bond — bid bond, performance bond, advance payment bond, maintenance bond, dokumen yang dibutuhkan, dan tahapan prosesnya.",
    readTime: "11 menit",
  },
  {
    title: "Perbedaan Bid Bond dan Performance Bond",
    slug: "perbedaan-bid-bond-performance-bond",
    date: "29 Mei 2026",
    category: "Surety Bond",
    excerpt:
      "Apa perbedaan bid bond dan performance bond? Panduan lengkap untuk kontraktor di Batam — kapan masing-masing wajib dipakai, nilai jaminan, dan konsekuensi jika klaim terjadi.",
    readTime: "6 menit",
  },
  {
    title: "Panduan OB 23: Cara Mengurus Impor Sementara untuk Pameran & Proyek di Batam",
    slug: "panduan-ob23-impor-sementara-batam",
    date: "5 Juli 2026",
    category: "Surety Bond",
    excerpt:
      "Panduan lengkap OB 23 (impor sementara) di Batam: kapan dipakai, dokumen yang dibutuhkan, proses pengajuan, kesalahan umum yang bikin denda, dan estimasi biaya custom bond.",
    readTime: "9 menit",
  },
  {
    title: "OB 23 vs KITE: Mana yang Tepat untuk Bisnis Impor-Ekspor Anda di Batam?",
    slug: "ob23-vs-kite-batam",
    date: "5 Juli 2026",
    category: "Surety Bond",
    excerpt:
      "Bingung pilih OB 23 atau KITE untuk fasilitas kepabeanan di Batam? Ini perbedaan mendasar, contoh kasus nyata, dan cara menentukan mana yang sesuai kebutuhan bisnis Anda.",
    readTime: "8 menit",
  },
  {
    title: "Custom Bond untuk Galangan Kapal Batam: Panduan Lengkap Impor Peralatan Proyek",
    slug: "custom-bond-galangan-kapal-batam",
    date: "5 Juli 2026",
    category: "Surety Bond",
    excerpt:
      "Galangan kapal di Tanjung Uncang, Kabil, dan Sekupang butuh strategi kepabeanan yang tepat untuk peralatan dan unit asing. Ini cara kerja custom bond untuk industri shipyard Batam.",
    readTime: "8 menit",
  },
  {
    title: "Checklist Dokumen Custom Bond yang Paling Sering Ditolak Bea Cukai",
    slug: "checklist-dokumen-custom-bond-ditolak",
    date: "5 Juli 2026",
    category: "Surety Bond",
    excerpt:
      "5 dokumen custom bond yang paling sering bikin pengajuan ditolak atau tertunda di Batam — lengkap dengan contoh kesalahan umum dan cara memperbaikinya sebelum diajukan.",
    readTime: "7 menit",
  },
  // ── Personal Accident ───────────────────────────────────────────────────────
  {
    title: "Asuransi Kecelakaan Diri (PA) untuk Pekerja Industri Batam",
    slug: "asuransi-kecelakaan-diri-pekerja-industri-batam",
    date: "2 Juli 2026",
    category: "Personal Accident",
    excerpt:
      "Panduan lengkap Asuransi Kecelakaan Diri (PA) untuk pekerja galangan kapal dan manufaktur di Batam — celah BPJS Ketenagakerjaan, skema PA Individu vs Grup, dan cara klaim yang benar.",
    readTime: "10 menit",
  },
  {
    title: "Asuransi PA untuk Pekerja Asing ke Singapura dari Batam",
    slug: "asuransi-pa-pekerja-asing-ke-singapura-dari-batam",
    date: "22 September 2026",
    category: "Personal Accident",
    excerpt:
      "Panduan asuransi PA untuk teknisi dan staf asing yang bepergian dari Batam ke Singapura — aturan ICA untuk turis bebas visa, ketentuan MOM untuk Work Pass, dan syarat visa negara seperti India.",
    readTime: "11 menit",
  },
  // ── Asuransi Event ───────────────────────────────────────────────────────────
  {
    title: "Asuransi Konser Musik Batam: Liability, Pembatalan & Non-Appearance",
    slug: "asuransi-konser-musik-batam",
    date: "17 September 2026",
    category: "Asuransi Event",
    excerpt:
      "Panduan lengkap asuransi konser musik untuk promotor, event organizer, dan venue di Batam — liability penonton, risiko pembatalan acara, non-appearance artis, dan studi kasus nyata.",
    readTime: "10 menit",
  },
  {
    title: "Asuransi Event Motor Cross Batam & Kepri: Jaminan Pembalap & Penonton",
    slug: "asuransi-motorcross-batam",
    date: "17 September 2026",
    category: "Asuransi Event",
    excerpt:
      "Panduan lengkap asuransi event motor cross dan grasstrack di Batam serta Kepulauan Riau — jaminan personal accident pembalap, public liability penonton, dan risiko cuaca.",
    readTime: "9 menit",
  },
  {
    title: "Asuransi Hole in One Batam: Syarat, Ketentuan & Cara Kerja Lengkap",
    slug: "asuransi-hole-in-one-golf-batam",
    date: "17 September 2026",
    category: "Asuransi Event",
    excerpt:
      "Panduan lengkap asuransi hole in one untuk turnamen golf di Batam — syarat peserta, jarak minimum hole, risiko sendiri, dan cara kerja klaim hadiah hole in one.",
    readTime: "9 menit",
  },
];

const categoryColors: Record<string, string> = {
  Kendaraan: "bg-blue-100 text-blue-800",
  "Alat Berat": "bg-yellow-100 text-yellow-800",
  Properti: "bg-green-100 text-green-800",
  Liability: "bg-orange-100 text-orange-800",
  Engineering: "bg-purple-100 text-purple-800",
  Marine: "bg-cyan-100 text-cyan-800",
  "Surety Bond": "bg-rose-100 text-rose-800",
  "Personal Accident": "bg-indigo-100 text-indigo-800",
  "Asuransi Event": "bg-fuchsia-100 text-fuchsia-800",
};

const categories = ["Kendaraan", "Alat Berat", "Properti", "Liability", "Engineering", "Marine", "Surety Bond", "Personal Accident", "Asuransi Event"];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-2">
            Blog & Edukasi
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Artikel Edukasi Asuransi
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Panduan, tips, dan informasi terpercaya tentang asuransi kerugian untuk melindungi
            aset Anda di Batam.
          </p>
        </div>
      </section>

      {/* ── Articles by category ── */}
      <section className="section-padding bg-[#faf8f3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {categories.map((cat) => {
            const catArticles = articles.filter((a) => a.category === cat);
            if (!catArticles.length) return null;
            return (
              <div key={cat}>
                {/* Category heading */}
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      categoryColors[cat] ?? "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {cat}
                  </span>
                  <div className="flex-1 h-px bg-[#e2e8f0]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catArticles.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/blog/${a.slug}`}
                      className="group bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden hover:shadow-xl transition-all card-hover"
                    >
                      <div className="h-3 bg-gradient-to-r from-[#0a1628] to-[#1a4fa0]" />
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span
                            className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                              categoryColors[a.category] ?? "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {a.category}
                          </span>
                          <span className="text-[#475569] text-xs">{a.readTime} baca</span>
                        </div>
                        <h2 className="font-display font-bold text-base text-[#0a1628] mb-2 group-hover:text-[#1a4fa0] transition-colors leading-tight">
                          {a.title}
                        </h2>
                        <p className="text-[#475569] text-sm leading-relaxed mb-4">{a.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-[#475569] text-xs">{a.date}</span>
                          <span className="text-[#1a4fa0] text-sm font-semibold group-hover:text-[#c9a84c] transition-colors">
                            Baca →
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

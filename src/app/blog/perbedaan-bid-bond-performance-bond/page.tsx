import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import { FileText, CheckCircle, AlertCircle, ArrowRight, Clock, Shield } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = generateSEO({
  title: "Bid Bond vs Performance Bond: Perbedaan, Fungsi & Kapan Dipakai | Asuransi Batam",
  description: "Apa perbedaan bid bond dan performance bond? Panduan lengkap untuk kontraktor di Batam — kapan masing-masing wajib dipakai, nilai jaminan, masa berlaku, dan konsekuensi jika klaim terjadi.",
  keywords: [
    "bid bond vs performance bond",
    "perbedaan bid bond performance bond",
    "surety bond batam",
    "jaminan penawaran batam",
    "jaminan pelaksanaan batam",
    "asuransi surety bond batam",
  ],
  canonical: "https://asuransibatam.com/blog/perbedaan-bid-bond-performance-bond",
  languages: {
      id: "https://asuransibatam.com/blog/perbedaan-bid-bond-performance-bond",
      en: "https://asuransibatam.com/en/difference-between-bid-bond-and-performance-bond",
    },
});

// ── SCHEMA ──────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Bid Bond vs Performance Bond: Perbedaan, Fungsi, dan Kapan Masing-Masing Dipakai",
  description:
    "Panduan lengkap perbedaan bid bond dan performance bond untuk kontraktor proyek pemerintah di Batam.",
  datePublished: "2026-05-29",
  dateModified: "2026-05-29",
  author: {
    "@type": "Organization",
    name: "Tim Asuransi Batam",
    url: "https://asuransibatam.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Asuransi Batam – Rio",
    url: "https://asuransibatam.com",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah bid bond bisa digunakan sebagai pengganti performance bond?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak. Keduanya adalah produk terpisah dengan fungsi berbeda. Bid bond otomatis tidak lagi relevan begitu kontrak ditandatangani — dan justru saat itulah performance bond harus sudah ada.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa lama waktu untuk menyerahkan performance bond setelah dinyatakan sebagai pemenang?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Berdasarkan Perpres 16/2018, pemenang tender umumnya diberi waktu 14 hari kalender sejak diterbitkannya SPPBJ untuk menandatangani kontrak, dan performance bond harus diserahkan bersamaan atau sebelum penandatanganan.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah bid bond otomatis dikembalikan jika perusahaan tidak menang tender?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kewajiban surety berakhir begitu tender selesai dan kontraktor tidak dinyatakan sebagai pemenang. Tidak ada biaya tambahan.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana jika ada keterlambatan proyek karena force majeure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kondisi force majeure yang diakui dalam kontrak umumnya tidak memicu klaim performance bond. Namun hal ini harus didokumentasikan dengan baik dan dikomunikasikan kepada pemilik proyek secara tertulis.",
      },
    },
    {
      "@type": "Question",
      name: "Bisakah satu perusahaan asuransi menerbitkan semua jenis surety bond untuk satu proyek?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, dan ini bahkan disarankan untuk memudahkan koordinasi dan memastikan konsistensi dokumen.",
      },
    },
  ],
};

// ── DATA ─────────────────────────────────────────────────────────────────────

const comparisonRows = [
  { aspect: "Fase proyek", bidBond: "Sebelum kontrak — saat proses tender", perfBond: "Setelah kontrak ditandatangani" },
  { aspect: "Fungsi utama", bidBond: "Menjamin keseriusan penawaran", perfBond: "Menjamin penyelesaian pekerjaan" },
  { aspect: "Nilai jaminan", bidBond: "1–3% dari nilai penawaran", perfBond: "5% dari nilai kontrak" },
  { aspect: "Masa berlaku", bidBond: "Selama proses tender", perfBond: "Selama masa pelaksanaan proyek" },
  { aspect: "Diterbitkan saat", bidBond: "Sebelum memasukkan dokumen penawaran", perfBond: "Sebelum penandatanganan kontrak" },
  { aspect: "Dikembalikan saat", bidBond: "Tender selesai (bagi yang kalah)", perfBond: "PHO / serah terima pertama" },
  { aspect: "Pemicu klaim", bidBond: "Pemenang mundur / tolak tanda tangan", perfBond: "Wanprestasi dalam pelaksanaan" },
  { aspect: "Dampak klaim", bidBond: "Relatif terbatas (nilai kecil)", perfBond: "Signifikan (nilai lebih besar)" },
  { aspect: "Dasar regulasi", bidBond: "Perpres 16/2018", perfBond: "Perpres 16/2018" },
];

const costRows = [
  { type: "Bid Bond (2%)", nilai: "Rp 100 juta", biaya: "Rp 500 ribu – Rp 1 juta" },
  { type: "Performance Bond (5%)", nilai: "Rp 250 juta", biaya: "Rp 2 juta – Rp 5 juta" },
  { type: "Advance Payment Bond (20%)", nilai: "Rp 200 juta", biaya: "Rp 1,5 juta – Rp 3 juta" },
  { type: "Maintenance Bond (5%)", nilai: "Rp 250 juta", biaya: "Rp 1 juta – Rp 2,5 juta" },
];

const projectContexts = [
  {
    title: "BP Batam",
    desc: "Proyek infrastruktur kawasan — jalan, utilitas, pelabuhan Batu Ampar — selalu mensyaratkan bid bond dan performance bond sesuai Perpres 16/2018. Nilai proyek biasanya di atas Rp 1 miliar sehingga kedua jaminan wajib ada.",
    icon: "🏗️",
  },
  {
    title: "Pemkot Batam",
    desc: "Proyek gedung sekolah, puskesmas, drainase di Bengkong, Sekupang, dan Batam Centre umumnya juga mensyaratkan keduanya, dengan nilai yang lebih bervariasi.",
    icon: "🏛️",
  },
  {
    title: "Kawasan Industri Swasta",
    desc: "Proyek di Muka Kuning, Batamindo, dan Nongsa yang dikelola swasta umumnya mengikuti standar yang sama dengan pengadaan pemerintah — karena banyak tenant pabrik adalah perusahaan multinasional.",
    icon: "🏭",
  },
  {
    title: "Proyek Energi",
    desc: "PLN Batam dan pemasok energi di kawasan industri sering mensyaratkan performance bond dengan nilai lebih besar dari standar, mengingat risiko keterlambatan operasional yang berdampak pada produksi tenant.",
    icon: "⚡",
  },
];

const tips = [
  {
    title: "Siapkan dokumen perusahaan jauh-jauh hari",
    desc: "Akta terbaru, NPWP, NIB, IUJK, dan SBU harus selalu dalam kondisi valid dan siap digunakan. Banyak kontraktor kehilangan kesempatan karena SBU yang sudah kadaluarsa baru diketahui saat proses tender.",
  },
  {
    title: "Hitung waktu penerbitan ke dalam jadwal tender",
    desc: "Untuk nilai standar, bid bond bisa terbit dalam 1–2 hari kerja. Jangan baru mengurus satu hari sebelum batas pemasukan dokumen.",
  },
  {
    title: "Jangan campur adukkan nilai penawaran dan nilai kontrak",
    desc: "Bid bond dihitung dari nilai penawaran (yang bisa berbeda dari nilai kontrak final setelah negosiasi). Performance bond dihitung dari nilai kontrak yang sudah disepakati.",
  },
  {
    title: "Pahami klausul klaim dalam sertifikat Anda",
    desc: "Baca dengan seksama kondisi apa yang memungkinkan obligee mengajukan klaim. Tidak semua keterlambatan atau perubahan scope otomatis memicu klaim performance bond.",
  },
];

const faqs = [
  {
    q: "Apakah bid bond bisa digunakan sebagai pengganti performance bond?",
    a: "Tidak. Keduanya adalah produk terpisah dengan fungsi berbeda. Bid bond otomatis tidak lagi relevan begitu kontrak ditandatangani — dan justru saat itulah performance bond harus sudah ada. Mencoba menggunakan bid bond sebagai jaminan pelaksanaan akan ditolak oleh panitia pengadaan.",
  },
  {
    q: "Berapa lama waktu untuk menyerahkan performance bond setelah dinyatakan sebagai pemenang?",
    a: "Berdasarkan Perpres 16/2018, pemenang tender umumnya diberi waktu 14 hari kalender sejak diterbitkannya SPPBJ untuk menandatangani kontrak — dan performance bond harus diserahkan bersamaan atau sebelum penandatanganan. Proses penerbitan surety bond kami normalnya 1–3 hari kerja, jadi siapkan dokumen segera setelah pengumuman pemenang.",
  },
  {
    q: "Apakah bid bond otomatis dikembalikan jika perusahaan tidak menang tender?",
    a: "Bid bond tidak 'dikembalikan' dalam artian fisik untuk semua format — tergantung mekanisme yang dipakai. Yang pasti: kewajiban surety berakhir begitu tender selesai dan kontraktor tidak dinyatakan sebagai pemenang. Tidak ada biaya tambahan.",
  },
  {
    q: "Bagaimana jika ada keterlambatan proyek yang bukan karena kesalahan kontraktor (force majeure)?",
    a: "Kondisi force majeure yang diakui dalam kontrak umumnya tidak memicu klaim performance bond. Namun hal ini harus didokumentasikan dengan baik dan dikomunikasikan kepada pemilik proyek secara tertulis. Konsultasikan dengan tim kami jika menghadapi situasi ini.",
  },
  {
    q: "Bisakah satu perusahaan asuransi menerbitkan semua jenis surety bond untuk satu proyek?",
    a: "Ya, dan ini bahkan disarankan — untuk memudahkan koordinasi dan memastikan konsistensi dokumen. Tim Asuransi Batam dapat menerbitkan bid bond, performance bond, advance payment bond, dan maintenance bond dalam satu proses terpadu.",
  },
];

// ── TIMELINE STEPS ────────────────────────────────────────────────────────────

const timelineSteps = [
  { label: "Pengumuman Tender", highlight: false, bond: null },
  { label: "Siapkan & Serahkan Bid Bond", highlight: true, bond: "bid" },
  { label: "Pemasukan Dokumen Penawaran", highlight: false, bond: null },
  { label: "Evaluasi Panitia Pengadaan", highlight: false, bond: null },
  { label: "Pengumuman Pemenang", highlight: false, bond: null },
  { label: "Siapkan Performance Bond (maks. 14 hari)", highlight: true, bond: "perf" },
  { label: "Penandatanganan Kontrak", highlight: false, bond: null },
  { label: "Siapkan Advance Payment Bond (jika ada uang muka)", highlight: true, bond: "adv" },
  { label: "Pelaksanaan Pekerjaan", highlight: false, bond: null },
  { label: "PHO — Serah Terima Pertama", highlight: false, bond: null },
  { label: "Siapkan Maintenance Bond", highlight: true, bond: "maint" },
  { label: "Masa Pemeliharaan 12–24 Bulan", highlight: false, bond: null },
  { label: "FHO — Serah Terima Akhir", highlight: false, bond: null },
];

const bondColors: Record<string, string> = {
  bid: "bg-gold text-navy",
  perf: "bg-blue-600 text-white",
  adv: "bg-navy-mid text-gold",
  maint: "bg-navy text-cream",
};

// ── PAGE ─────────────────────────────────────────────────────────────────────

export default function PerbedaanBidBondPerformanceBondPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0] overflow-hidden pt-24 pb-16">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#c9a84c]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-56 h-56 bg-[#1a4fa0]/40 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-white/80 transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white/80 transition-colors">Blog</Link>
            <span>/</span>
            <Link href="/asuransi-surety-bond" className="hover:text-[#c9a84c] transition-colors">Surety Bond</Link>
            <span>/</span>
            <span className="text-white/70">Bid Bond vs Performance Bond</span>
          </nav>

          {/* Category badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a84c]/20 border border-[#c9a84c]/30 rounded-full text-[#c9a84c] text-sm font-semibold mb-6">
            <FileText className="w-4 h-4" />
            Surety Bond
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
            Bid Bond vs Performance Bond:<br />
            <span className="text-gradient-gold">Perbedaan, Fungsi,</span> dan Kapan Masing-Masing Dipakai
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-3xl">
            Panduan lengkap untuk kontraktor di Batam — kapan masing-masing wajib dipakai, nilai jaminan, masa berlaku, dan konsekuensi jika klaim terjadi.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 29 Mei 2026</span>
            <span>•</span>
            <span>Tim Asuransi Batam</span>
            <span>•</span>
            <span>±10 menit baca</span>
          </div>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────────── */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Skenario intro */}
        <div className="bg-[#faf8f3] border-l-4 border-[#c9a84c] rounded-r-2xl p-6 mb-12">
          <p className="text-[#0a1628] leading-relaxed">
            PT Arya Konstruksi, kontraktor menengah yang berbasis di <strong>Batu Ampar</strong>, baru saja memenangkan
            tender pembangunan gedung fasilitas di kawasan industri <strong>Kabil</strong> senilai Rp 8,5 miliar.
            Di meja direkturnya tersedia dua dokumen dari perusahaan asuransi: satu sertifikat bid bond yang sudah
            dipakai saat memasukkan penawaran, dan satu permintaan untuk segera menerbitkan performance bond sebelum
            kontrak ditandatangani.
          </p>
          <p className="text-[#0a1628] mt-4 leading-relaxed">
            <em>"Bukankah bid bond sudah cukup?"</em> tanya sang direktur kepada timnya.
          </p>
          <p className="text-[#475569] mt-4 text-sm leading-relaxed">
            Jawabannya: <strong className="text-[#0a1628]">tidak.</strong> Inilah kesalahpahaman yang paling sering
            menjebak kontraktor pemula di Batam. Artikel ini membedah perbedaan keduanya secara tuntas.
          </p>
        </div>

        {/* ── SECTION 1: Apa itu surety bond ── */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-5">
            Apa Itu Surety Bond dan Mengapa Ada Lebih dari Satu Jenis?
          </h2>
          <p className="text-[#475569] leading-relaxed mb-5">
            Surety bond bukan satu produk tunggal — melainkan keluarga produk penjaminan yang masing-masing
            dirancang untuk mengamankan <strong className="text-[#0a1628]">fase dan kewajiban tertentu</strong> dalam
            siklus proyek konstruksi atau pengadaan.
          </p>
          <p className="text-[#475569] leading-relaxed mb-6">
            Dalam pengadaan pemerintah yang diatur oleh Perpres 16/2018, dikenal minimal empat jenis surety bond:
          </p>

          {/* Four bond types */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { num: "01", title: "Bid Bond", sub: "Jaminan saat penawaran", href: "/asuransi-surety-bond/bid-bond" },
              { num: "02", title: "Performance Bond", sub: "Jaminan saat pelaksanaan", href: "/asuransi-surety-bond/performance-bond" },
              { num: "03", title: "Advance Payment Bond", sub: "Jaminan uang muka", href: "/asuransi-surety-bond/advance-payment-bond" },
              { num: "04", title: "Maintenance Bond", sub: "Jaminan masa pemeliharaan", href: "/asuransi-surety-bond/maintenance-bond" },
            ].map((item) => (
              <Link key={item.num} href={item.href}
                className="group flex items-center gap-4 p-4 rounded-xl border-2 border-[#e2e8f0] hover:border-[#c9a84c]/60 hover:shadow-lg transition-all bg-white card-hover">
                <div className="w-10 h-10 rounded-lg gradient-navy flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-xs text-[#c9a84c]">{item.num}</span>
                </div>
                <div>
                  <div className="font-display font-bold text-[#0a1628] group-hover:text-[#1a4fa0] transition-colors text-sm">
                    {item.title}
                  </div>
                  <div className="text-[#475569] text-xs">{item.sub}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#c9a84c] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>

          <p className="text-[#475569] leading-relaxed">
            Bid bond dan performance bond adalah dua yang paling sering membingungkan kontraktor karena keduanya
            diterbitkan dalam siklus yang berdekatan — sebelum dan sesaat setelah kontrak ditandatangani.
          </p>
        </section>

        {/* ── SECTION 2: Bid Bond ── */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="font-display font-bold text-[#0a1628] text-sm">BB</span>
            </div>
            <h2 className="font-display font-bold text-3xl text-[#0a1628]">
              Bid Bond: Jaminan Niat dan Kemampuan Saat Penawaran
            </h2>
          </div>

          <p className="text-[#475569] leading-relaxed mb-6">
            <strong className="text-[#0a1628]">Bid bond</strong> (atau <em>jaminan penawaran</em>) adalah sertifikat
            surety bond yang diterbitkan untuk menjamin bahwa kontraktor yang mengikuti proses tender serius
            dalam mengajukan penawaran, mampu memenuhi persyaratan kontrak, dan tidak akan mundur setelah
            dinyatakan sebagai pemenang.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            {[
              { label: "Nilai Jaminan", val: "1–3%", sub: "dari nilai penawaran" },
              { label: "Masa Berlaku", val: "+30 hari", sub: "setelah masa tender berakhir" },
              { label: "Diterbitkan", val: "Sebelum", sub: "pemasukan dokumen penawaran" },
            ].map((s) => (
              <div key={s.label} className="bg-[#faf8f3] rounded-2xl p-5 text-center border border-[#e2e8f0]">
                <div className="text-[#475569] text-xs uppercase tracking-widest mb-2">{s.label}</div>
                <div className="font-display font-bold text-2xl text-[#c9a84c] mb-1">{s.val}</div>
                <div className="text-[#475569] text-xs">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6 mb-5">
            <h3 className="font-display font-bold text-[#0a1628] mb-3">Contoh Ilustrasi</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-[#faf8f3] rounded-xl p-3">
                <div className="text-[#475569] text-xs mb-1">Nilai penawaran</div>
                <div className="font-bold text-[#0a1628]">Rp 8,5 miliar</div>
              </div>
              <div className="bg-[#faf8f3] rounded-xl p-3">
                <div className="text-[#475569] text-xs mb-1">Bid bond 2%</div>
                <div className="font-bold text-[#c9a84c]">Rp 170 juta</div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-900 text-sm mb-1">Pemicu Klaim Bid Bond</p>
                <p className="text-amber-800 text-sm leading-relaxed">
                  Klaim terjadi jika pemenang tender <strong>menolak menandatangani kontrak</strong> atau
                  <strong> tidak dapat menyerahkan performance bond</strong> dalam batas waktu yang ditentukan.
                  Reputasi kontraktor di sistem LPJK juga berpotensi terpengaruh.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: Performance Bond ── */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#1a4fa0] rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="font-display font-bold text-white text-sm">PB</span>
            </div>
            <h2 className="font-display font-bold text-3xl text-[#0a1628]">
              Performance Bond: Jaminan Bahwa Proyek Diselesaikan Sesuai Kontrak
            </h2>
          </div>

          <p className="text-[#475569] leading-relaxed mb-6">
            <strong className="text-[#0a1628]">Performance bond</strong> (atau <em>jaminan pelaksanaan</em>) diterbitkan
            <strong className="text-[#0a1628]"> setelah kontraktor ditetapkan sebagai pemenang</strong> dan siap
            menandatangani kontrak. Fungsinya: menjamin bahwa kontraktor akan menyelesaikan pekerjaan sesuai
            spesifikasi teknis, jadwal penyelesaian, dan standar kualitas yang dipersyaratkan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            {[
              { label: "Nilai Jaminan", val: "5%", sub: "dari nilai kontrak" },
              { label: "Masa Berlaku", val: "s/d PHO", sub: "serah terima pertama" },
              { label: "Diterbitkan", val: "Sebelum", sub: "penandatanganan kontrak" },
            ].map((s) => (
              <div key={s.label} className="bg-[#0a1628] rounded-2xl p-5 text-center">
                <div className="text-white/50 text-xs uppercase tracking-widest mb-2">{s.label}</div>
                <div className="font-display font-bold text-2xl text-[#c9a84c] mb-1">{s.val}</div>
                <div className="text-white/60 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6 mb-5">
            <h3 className="font-display font-bold text-[#0a1628] mb-3">Contoh Ilustrasi (lanjutan skenario)</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-[#faf8f3] rounded-xl p-3">
                <div className="text-[#475569] text-xs mb-1">Nilai kontrak</div>
                <div className="font-bold text-[#0a1628]">Rp 8,5 miliar</div>
              </div>
              <div className="bg-[#faf8f3] rounded-xl p-3">
                <div className="text-[#475569] text-xs mb-1">Performance bond 5%</div>
                <div className="font-bold text-[#1a4fa0]">Rp 425 juta</div>
              </div>
            </div>
            <p className="text-[#475569] text-xs mt-3 leading-relaxed">
              Nilai performance bond <strong className="text-[#0a1628]">jauh lebih besar</strong> dari bid bond — karena
              kegagalan di tahap pelaksanaan menimbulkan kerugian yang jauh lebih signifikan bagi pemilik proyek.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-blue-900 text-sm mb-1">Pemicu Klaim Performance Bond</p>
                <ul className="text-blue-800 text-sm leading-relaxed space-y-1">
                  <li>• Menghentikan pekerjaan sebelum selesai tanpa alasan yang sah</li>
                  <li>• Tidak mampu memenuhi spesifikasi teknis setelah diberikan kesempatan perbaikan</li>
                  <li>• Dinyatakan pailit dan tidak dapat melanjutkan proyek</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: Tabel perbandingan ── */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-6">
            Perbandingan Langsung: Bid Bond vs Performance Bond
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0] shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="gradient-navy">
                  <th className="text-left px-5 py-4 text-white/70 font-semibold w-1/3">Aspek</th>
                  <th className="text-left px-5 py-4 text-[#c9a84c] font-display font-bold">Bid Bond</th>
                  <th className="text-left px-5 py-4 text-blue-300 font-display font-bold">Performance Bond</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.aspect} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                    <td className="px-5 py-3.5 font-semibold text-[#0a1628]">{row.aspect}</td>
                    <td className="px-5 py-3.5 text-[#475569]">{row.bidBond}</td>
                    <td className="px-5 py-3.5 text-[#475569]">{row.perfBond}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── SECTION 5: Timeline ── */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-3">
            Alur Kronologis dalam Satu Siklus Proyek di Batam
          </h2>
          <p className="text-[#475569] leading-relaxed mb-8">
            Bid bond <strong className="text-[#0a1628]">mendahului</strong> performance bond dan tidak pernah berlaku
            bersamaan dalam fase yang sama. Pahami alurnya untuk mempersiapkan dokumen lebih awal.
          </p>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-[#e2e8f0]" />

            <div className="space-y-3">
              {timelineSteps.map((step, i) => (
                <div key={i} className="relative flex items-start gap-4 pl-14">
                  {/* Dot */}
                  <div className={`absolute left-3 w-4 h-4 rounded-full border-2 flex-shrink-0 mt-0.5 ${
                    step.highlight
                      ? "border-[#c9a84c] bg-[#c9a84c]"
                      : "border-[#cbd5e1] bg-white"
                  }`} />

                  <div className={`flex-1 rounded-xl px-4 py-3 ${
                    step.highlight
                      ? step.bond ? `${bondColors[step.bond]} shadow-sm` : "bg-[#c9a84c] text-navy"
                      : "bg-[#faf8f3] text-[#475569]"
                  }`}>
                    <span className={`text-sm font-${step.highlight ? "bold font-display" : "medium"}`}>
                      {step.highlight && "→ "}{step.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 6: Konteks Batam ── */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-3">
            Proyek di Batam yang Rutin Memerlukan Keduanya
          </h2>
          <p className="text-[#475569] leading-relaxed mb-8">
            Di ekosistem proyek Batam, berbagai instansi dan badan memiliki ritme tender yang berbeda namun
            semuanya mensyaratkan bid bond dan performance bond.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projectContexts.map((ctx) => (
              <div key={ctx.title} className="bg-white rounded-2xl border-2 border-[#e2e8f0] p-6 hover:border-[#c9a84c]/50 hover:shadow-lg transition-all card-hover">
                <div className="text-3xl mb-3">{ctx.icon}</div>
                <h3 className="font-display font-bold text-[#0a1628] mb-2">{ctx.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{ctx.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 7: Estimasi Biaya ── */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-3">
            Estimasi Biaya: Satu Siklus Proyek Rp 5 Miliar
          </h2>
          <p className="text-[#475569] leading-relaxed mb-6">
            Sebagai ilustrasi umum, berikut gambaran total biaya surety bond untuk satu proyek fiktif di Batam.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0] shadow-sm mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#faf8f3] border-b border-[#e2e8f0]">
                  <th className="text-left px-5 py-3.5 font-display font-bold text-[#0a1628]">Jenis</th>
                  <th className="text-left px-5 py-3.5 font-display font-bold text-[#0a1628]">Nilai Jaminan</th>
                  <th className="text-left px-5 py-3.5 font-display font-bold text-[#0a1628]">Estimasi Biaya</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                    <td className="px-5 py-3 text-[#0a1628] font-medium">{row.type}</td>
                    <td className="px-5 py-3 text-[#475569]">{row.nilai}</td>
                    <td className="px-5 py-3 text-[#475569]">{row.biaya}</td>
                  </tr>
                ))}
                <tr className="bg-[#0a1628]">
                  <td className="px-5 py-3 text-[#c9a84c] font-display font-bold">Total estimasi</td>
                  <td className="px-5 py-3 text-white/50">—</td>
                  <td className="px-5 py-3 text-[#c9a84c] font-bold">Rp 5 juta – Rp 11,5 juta</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#faf8f3] border border-[#e2e8f0] rounded-xl p-4 text-sm text-[#475569] leading-relaxed">
            <strong className="text-[#0a1628]">Catatan:</strong> Angka di atas adalah ilustrasi umum berdasarkan kondisi pasar.
            Total biaya surety bond kurang dari <strong className="text-[#0a1628]">0,3%</strong> dari nilai proyek Rp 5 miliar —
            investasi kecil dibanding risiko gagal lolos tender. Biaya aktual bergantung pada profil perusahaan, rekam
            jejak proyek, dan kebijakan masing-masing penerbit surety bond.{" "}
            <Link href="/asuransi-surety-bond" className="text-[#1a4fa0] font-semibold hover:underline">
              Hubungi kami untuk penawaran akurat →
            </Link>
          </div>
        </section>

        {/* ── SECTION 8: Tips ── */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-6">
            Tips Praktis untuk Kontraktor Batam
          </h2>
          <div className="space-y-4">
            {tips.map((tip, i) => (
              <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:shadow-md transition-shadow">
                <div className="w-9 h-9 gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-[#0a1628]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#0a1628] mb-1">{tip.title}</h3>
                  <p className="text-[#475569] text-sm leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 9: FAQ ── */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <p className="text-[#8a6d1f] font-semibold uppercase tracking-widest text-sm mb-2">FAQ</p>
            <h2 className="font-display font-bold text-3xl text-[#0a1628]">Pertanyaan yang Sering Diajukan</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-display font-semibold text-[#0a1628] hover:text-[#1a4fa0] transition-colors list-none">
                  {faq.q}
                  <span className="ml-4 text-[#c9a84c] text-xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 text-[#475569] text-sm leading-relaxed border-t border-[#e2e8f0] pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── Internal link block ── */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-xl text-[#0a1628] mb-5">
            Pelajari Lebih Lanjut tentang Surety Bond
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Asuransi Surety Bond Batam", href: "/asuransi-surety-bond", desc: "Panduan lengkap semua jenis surety bond dan prosedur pengajuannya" },
              { title: "Halaman Utama Surety Bond", href: "/asuransi-surety-bond", desc: "Seluruh layanan penjaminan proyek kami di Batam" },
              { title: "Bid Bond", href: "/asuransi-surety-bond/bid-bond", desc: "Detail produk jaminan penawaran" },
              { title: "Performance Bond", href: "/asuransi-surety-bond/performance-bond", desc: "Detail produk jaminan pelaksanaan proyek" },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="group flex items-start gap-3 p-4 bg-[#faf8f3] rounded-xl border border-[#e2e8f0] hover:border-[#c9a84c]/50 hover:shadow-md transition-all">
                <Shield className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#0a1628] group-hover:text-[#1a4fa0] transition-colors text-sm">{link.title}</div>
                  <div className="text-[#475569] text-xs mt-0.5">{link.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <div className="border-t border-[#e2e8f0] pt-8">
          <p className="text-[#94a3b8] text-xs leading-relaxed italic">
            Artikel ini disusun berdasarkan Perpres 16/2018 tentang Pengadaan Barang/Jasa Pemerintah,
            regulasi OJK terkait perusahaan asuransi penjamin, dan pengalaman praktis mendampingi kontraktor di Batam.
            Kondisi spesifik setiap proyek dapat berbeda — konsultasikan kebutuhan Anda dengan tim kami sebelum mengambil keputusan.
          </p>
        </div>
      </article>

      
      {/* Related Links */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Halaman Terkait</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Produk &amp; Layanan</p>
              <ul className="space-y-2">
                <li><a href="/asuransi-surety-bond/bid-bond" className="text-sm text-blue-700 hover:underline font-medium">→ Bid Bond Batam</a></li>
                <li><a href="/asuransi-surety-bond/performance-bond" className="text-sm text-blue-700 hover:underline font-medium">→ Performance Bond Batam</a></li>
                <li><a href="/asuransi-surety-bond/advance-payment-bond" className="text-sm text-blue-700 hover:underline font-medium">→ Advance Payment Bond Batam</a></li>
                <li><a href="/asuransi-surety-bond/maintenance-bond" className="text-sm text-blue-700 hover:underline font-medium">→ Maintenance Bond Batam</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait</p>
              <ul className="space-y-2">
                <li><a href="/blog/asuransi-proyek-konstruksi-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Proyek Konstruksi Batam</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CTASection cluster="surety" />
    </>
  );
}

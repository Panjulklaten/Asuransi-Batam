// app/blog/jenis-jenis-asuransi-kapal-armada/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { generateSEO, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import {
  Ship,
  Anchor,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  FileText,
  HelpCircle,
  TrendingUp,
  Wrench,
  Globe,
  LifeBuoy,
} from "lucide-react";

/* ─────────────────────────────────────────────
   METADATA & SEO
───────────────────────────────────────────── */
export const metadata: Metadata = generateSEO({
  title:
    "Jenis-Jenis Asuransi Kapal yang Wajib Diketahui Pemilik Armada di Batam",
  description:
    "Panduan lengkap jenis asuransi kapal untuk pemilik armada di Batam: Marine Hull, P&I, Cargo, hingga War Risk. Studi kasus tongkang Nongsa Batam dari praktisi berpengalaman 8+ tahun.",
  canonical: "/blog/jenis-jenis-asuransi-kapal-armada",
  // Catatan: versi EN belum dibuat. Jangan tambahkan `languages.en` di sini
  // sampai halaman /en/blog/types-of-ship-insurance-fleet-owners benar-benar ada,
  // karena hreflang yang nunjuk ke halaman 404 membuat Google mengabaikan
  // seluruh sinyal hreflang di halaman ini.
});

/* ─────────────────────────────────────────────
   SCHEMA DATA
───────────────────────────────────────────── */
const breadcrumbSchema = schemaBreadcrumb([
  { name: "Beranda", url: "https://asuransibatam.com/" },
  { name: "Blog", url: "https://asuransibatam.com/blog" },
  {
    name: "Jenis-Jenis Asuransi Kapal",
    url: "https://asuransibatam.com/blog/jenis-jenis-asuransi-kapal-armada",
  },
]);

const faqData = [
  {
    q: "Apa perbedaan Marine Hull dan Marine Cargo Insurance?",
    a: "Marine Hull Insurance melindungi fisik kapal itu sendiri — lambung, mesin, peralatan navigasi — dari risiko kerusakan atau kehilangan. Sementara Marine Cargo Insurance melindungi muatan atau barang yang diangkut di dalam kapal. Pemilik armada idealnya memiliki keduanya agar perlindungan bersifat menyeluruh.",
  },
  {
    q: "Apakah kapal tongkang wajib diasuransikan di Batam?",
    a: "Secara regulasi, kapal komersial termasuk tongkang yang beroperasi di perairan Indonesia wajib memiliki asuransi P&I (Protection & Indemnity) minimal untuk menanggung kewajiban kepada pihak ketiga. Selain itu, perbankan dan lembaga pembiayaan umumnya mensyaratkan Marine Hull Insurance sebagai jaminan kredit.",
  },
  {
    q: "Berapa kisaran premi asuransi kapal di Batam?",
    a: "Premi Marine Hull Insurance umumnya berkisar 0,5% – 1,5% dari nilai kapal per tahun, tergantung usia kapal, jenis operasi, rute pelayaran, dan rekam jejak klaim. Untuk tongkang dengan nilai Rp 10 miliar, premi bisa berkisar Rp 50–150 juta per tahun. Konsultasikan kebutuhan spesifik armada Anda untuk mendapatkan penawaran yang kompetitif.",
  },
  {
    q: "Apa itu P&I Insurance dan apakah pemilik kapal di Batam membutuhkannya?",
    a: "P&I (Protection & Indemnity) Insurance adalah asuransi tanggung gugat pihak ketiga untuk pemilik kapal, mencakup kewajiban atas kecelakaan awak, kerusakan pelabuhan, pencemaran lingkungan, dan tabrakan. Di Batam yang memiliki lalu lintas pelayaran internasional tinggi, P&I sangat direkomendasikan — bahkan wajib bagi kapal yang memasuki terminal internasional.",
  },
  {
    q: "Apakah asuransi kapal menanggung risiko pembajakan di perairan Batam?",
    a: "Risiko pembajakan dan perampasan (piracy) umumnya termasuk dalam klausul War Risk atau War, Strikes, Riots and Civil Commotions (WSRCC) yang merupakan polis terpisah. Perairan Batam dan Selat Malaka masuk dalam kategori area risiko tinggi, sehingga War Risk sangat direkomendasikan untuk armada yang beroperasi di jalur ini.",
  },
  {
    q: "Bagaimana cara klaim asuransi kapal jika terjadi kecelakaan di Batam?",
    a: "Segera laporkan insiden ke perusahaan asuransi dalam 24–48 jam setelah kejadian. Dokumentasikan kerusakan dengan foto dan video, buat laporan Berita Acara Kecelakaan, hubungi Syahbandar setempat untuk membuat laporan resmi, dan koordinasikan dengan surveyor asuransi. Sebagai praktisi, saya siap mendampingi proses klaim dari awal hingga selesai.",
  },
];

const faqSchema = schemaFAQ(faqData);

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Jenis-Jenis Asuransi Kapal yang Wajib Diketahui Pemilik Armada di Batam",
  description:
    "Panduan lengkap jenis asuransi kapal untuk pemilik armada di Batam dari praktisi berpengalaman 8+ tahun.",
  image:
    "https://asuransibatam.com/images/potoartikel/tongkangnongsa.webp",
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
  author: {
    "@type": "Person",
    name: "Rio Mardiansyah",
    jobTitle: "Praktisi Asuransi",
    url: "https://asuransibatam.com/tentang-kami",
  },
  publisher: {
    "@type": "Organization",
    name: "Asuransi Batam",
    url: "https://asuransibatam.com",
  },
};

/* ─────────────────────────────────────────────
   COMPONENT DATA
───────────────────────────────────────────── */
const insuranceTypes = [
  {
    icon: Ship,
    title: "Marine Hull Insurance",
    subtitle: "Perlindungan Fisik Kapal",
    color: "blue",
    coverage: [
      "Lambung (hull) dan struktur kapal",
      "Mesin induk dan mesin bantu",
      "Peralatan navigasi & komunikasi",
      "Kerusakan akibat tabrakan, kandas, kebakaran",
      "Total Loss & Constructive Total Loss",
    ],
    description:
      "Marine Hull Insurance adalah fondasi perlindungan bagi setiap pemilik kapal. Polis ini melindungi nilai aset fisik kapal dari berbagai risiko pelayaran. Di Batam, dengan ribuan kapal beroperasi di Selat Singapura dan Selat Malaka setiap harinya, risiko tabrakan dan kandas sangat nyata.",
    internalLink: "/asuransi-marine/marine-hull",
    internalLabel: "Pelajari Marine Hull Insurance →",
    badge: "Paling Umum",
  },
  {
    icon: Globe,
    title: "Protection & Indemnity (P&I)",
    subtitle: "Tanggung Jawab Pihak Ketiga",
    color: "gold",
    coverage: [
      "Cedera atau kematian awak kapal",
      "Kerusakan pelabuhan, dermaga, dan infrastruktur",
      "Tanggung jawab pencemaran lingkungan laut",
      "Biaya pengangkatan kerangka kapal (wreck removal)",
      "Kewajiban tabrakan (collision liability)",
    ],
    description:
      "P&I Insurance melindungi pemilik kapal dari tuntutan hukum pihak ketiga. Di kawasan Batam — Bintan yang berbatasan langsung dengan perairan internasional, standar P&I dari P&I Clubs internasional sering menjadi syarat masuk ke terminal-terminal besar.",
    badge: "Wajib Internasional",
  },
  {
    icon: Anchor,
    title: "Marine Cargo Insurance",
    subtitle: "Perlindungan Muatan",
    color: "teal",
    coverage: [
      "Kerusakan atau kehilangan muatan selama pelayaran",
      "Risiko bongkar muat di pelabuhan",
      "General Average contribution",
      "Muatan B/L (Bill of Lading) dan non-B/L",
      "Pengiriman domestik antar pulau",
    ],
    description:
      "Untuk pemilik kapal yang juga bertindak sebagai carrier, Marine Cargo Insurance melindungi nilai muatan yang diangkut. Batam sebagai kawasan FTZ (Free Trade Zone) memiliki volume kargo tinggi, termasuk spare part industri, barang elektronik, dan komoditas ekspor-impor.",
    badge: "Untuk Carrier",
  },
  {
    icon: AlertTriangle,
    title: "War Risk & WSRCC",
    subtitle: "Risiko Perang & Kerusuhan",
    color: "red",
    coverage: [
      "Pembajakan (piracy) di laut lepas",
      "Aksi terorisme terhadap kapal",
      "Penyitaan oleh pemerintah asing",
      "Konflik bersenjata di zona pelayaran",
      "Strikes, riots, civil commotions",
    ],
    description:
      "Klausul standar Marine Hull tidak mencakup risiko perang dan pembajakan. Sebagai polis add-on, War Risk & WSRCC sangat relevan bagi armada yang melewati Selat Malaka — salah satu jalur pelayaran tersibuk sekaligus rawan insiden maritim di dunia.",
    badge: "Add-on Penting",
  },
  {
    icon: Wrench,
    title: "Machinery Breakdown Insurance",
    subtitle: "Kerusakan Mesin",
    color: "purple",
    coverage: [
      "Kerusakan mesin mendadak (sudden & accidental)",
      "Biaya perbaikan di dok",
      "Loss of Hire selama perbaikan",
      "Kerusakan akibat human error operator",
      "Failure mesin tanpa external cause",
    ],
    description:
      "Tidak semua kerusakan mesin tercakup di Marine Hull — kerusakan akibat keausan mekanis normal biasanya dikecualikan. Machinery Breakdown Insurance mengisi celah ini, sangat penting untuk kapal tua atau kapal dengan jadwal operasi intensif.",
    badge: "Pelengkap Hull",
  },
  {
    icon: LifeBuoy,
    title: "Loss of Hire Insurance",
    subtitle: "Kehilangan Pendapatan",
    color: "orange",
    coverage: [
      "Kompensasi pendapatan sewa selama perbaikan",
      "Biaya operasional tetap saat kapal off-hire",
      "Beroperasi bersamaan dengan Marine Hull",
      "Periode waiting deductible fleksibel",
      "Cocok untuk kapal charter jangka panjang",
    ],
    description:
      "Ketika kapal mengalami kerusakan dan harus masuk dok, pendapatan pemilik terhenti sementara biaya operasional terus berjalan. Loss of Hire Insurance memberikan kompensasi harian selama periode off-hire, sangat krusial bagi pemilik armada di Batam yang mengandalkan pendapatan charter.",
    badge: "Proteksi Pendapatan",
  },
];

const colorMap: Record<string, { bg: string; border: string; icon: string; badge: string }> = {
  blue:   { bg: "bg-blue-50",   border: "border-blue-200",   icon: "text-[#1a4fa0]",  badge: "bg-[#1a4fa0]/10 text-[#1a4fa0] border-[#1a4fa0]/20" },
  gold:   { bg: "bg-amber-50",  border: "border-amber-200",  icon: "text-[#c9a84c]",  badge: "bg-[#c9a84c]/10 text-[#c9a84c] border-[#c9a84c]/30" },
  teal:   { bg: "bg-teal-50",   border: "border-teal-200",   icon: "text-teal-600",   badge: "bg-teal-50 text-teal-700 border-teal-200" },
  red:    { bg: "bg-red-50",    border: "border-red-200",    icon: "text-red-600",    badge: "bg-red-50 text-red-700 border-red-200" },
  purple: { bg: "bg-purple-50", border: "border-purple-200", icon: "text-purple-600", badge: "bg-purple-50 text-purple-700 border-purple-200" },
  orange: { bg: "bg-orange-50", border: "border-orange-200", icon: "text-orange-600", badge: "bg-orange-50 text-orange-700 border-orange-200" },
};

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function ArticleJenisAsuransiKapal() {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [articleSchema, faqSchema, breadcrumbSchema],
  };

  return (
    <ArticleLayout
      cluster="marine"
      title="Jenis-Jenis Asuransi Kapal yang Wajib Diketahui Pemilik Armada di Batam"
      description="Panduan menyeluruh dari praktisi berpengalaman: mulai Marine Hull, P&I, hingga War Risk — lengkap dengan studi kasus nyata tongkang di kawasan Nongsa, Batam."
      date="1 Juli 2025"
      category="Asuransi Marine"
      readTime="12 menit"
      breadcrumbs={[{ label: "Jenis-Jenis Asuransi Kapal", href: "/blog/jenis-jenis-asuransi-kapal-armada" }]}
      schema={combinedSchema}
    >

      {/* ── INTRO ── */}
      <p>
        Batam bukan sekadar kota industri biasa. Dengan posisinya di bibir Selat
        Singapura — salah satu jalur pelayaran tersibuk di dunia — kota ini
        menjadi rumah bagi ratusan perusahaan pelayaran, pemilik tongkang, dan
        operator kapal yang beroperasi setiap harinya. Dari galangan kapal di
        Tanjung Uncang hingga dermaga-dermaga di Nongsa, aktivitas maritim
        Batam tidak pernah berhenti.
      </p>
      <p>
        Namun di balik kesibukan itu, banyak pemilik armada yang masih
        menganggap asuransi kapal sebagai formalitas belaka — sekadar memenuhi
        syarat kredit atau dokumen pelabuhan. Padahal, satu insiden tunggal —
        kandas di perairan dangkal, tabrakan dengan kapal lain, atau kebakaran
        di atas kapal — bisa menghapus investasi senilai puluhan miliar rupiah
        dalam hitungan jam.
      </p>
      <p>
        Sebagai praktisi asuransi kerugian yang telah lebih dari 8 tahun
        mendampingi pemilik kapal dan perusahaan pelayaran di Batam dan
        sekitarnya, saya sering menemukan satu pertanyaan yang sama:{" "}
        <strong>
          &ldquo;Sebenarnya asuransi kapal apa saja yang perlu saya miliki?&rdquo;
        </strong>
      </p>
      <p>
        Artikel ini adalah jawaban lengkapnya. Saya akan menguraikan setiap
        jenis asuransi kapal, apa yang dilindungi, apa yang tidak, dan bagaimana
        memilih kombinasi yang tepat sesuai jenis operasi armada Anda di Batam.
      </p>

      {/* ── FOTO SURVEI ── */}
      <div className="not-prose my-10 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
        <div className="relative w-full aspect-[16/9]">
          <Image
            src="/images/potoartikel/tongkangnongsa.webp"
            alt="Survei tongkang di kawasan Nongsa Batam oleh Rio Mardiansyah, praktisi asuransi marine"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <div className="bg-gray-50 px-5 py-3 border-t border-gray-200 flex items-start gap-3">
          <FileText className="w-4 h-4 text-[#c9a84c] mt-0.5 flex-shrink-0" />
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong className="text-gray-800">Dokumentasi survei lapangan</strong> — 
            Rio Mardiansyah melakukan survei kondisi tongkang di kawasan perairan Nongsa, Batam. 
            Survei lapangan adalah langkah kritis untuk menentukan nilai pertanggungan yang akurat 
            dan memastikan tidak ada eksklusi tersembunyi dalam polis.
          </p>
        </div>
      </div>

      {/* ── MENGAPA BATAM BUTUH PERLINDUNGAN EKSTRA ── */}
      <h2>Mengapa Pemilik Kapal di Batam Butuh Perlindungan Lebih Komprehensif?</h2>
      <p>
        Karakteristik perairan Batam menjadikan risiko pelayaran di sini
        berbeda dari kota-kota lain di Indonesia. Ada beberapa faktor yang perlu
        dipahami setiap pemilik armada:
      </p>

      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        {[
          {
            icon: TrendingUp,
            title: "Volume Lalu Lintas Tinggi",
            desc: "Selat Singapura dilintasi lebih dari 90.000 kapal per tahun. Kepadatan ini meningkatkan risiko tabrakan dan near-miss secara signifikan.",
          },
          {
            icon: Anchor,
            title: "Perairan Dangkal & Kompleks",
            desc: "Perairan sekitar Batam memiliki banyak gosong pasir, terutama di jalur menuju Nongsa dan Sekupang — risiko kandas yang nyata bagi tongkang.",
          },
          {
            icon: Globe,
            title: "Yurisdiksi Ganda",
            desc: "Kapal yang beroperasi antara Batam–Singapura dapat tunduk pada hukum maritim dua negara. P&I dengan klausul internasional menjadi kebutuhan.",
          },
          {
            icon: AlertTriangle,
            title: "Cuaca Ekstrem & Monsun",
            desc: "Musim monsun di Kepulauan Riau membawa gelombang tinggi dan angin kencang yang dapat merusak kapal berukuran kecil hingga menengah.",
          },
        ].map((item) => (
          <div key={item.title} className="flex gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#1a4fa0]/10 flex items-center justify-center">
              <item.icon className="w-5 h-5 text-[#1a4fa0]" />
            </div>
            <div>
              <h4 className="font-semibold text-[#0a1628] text-sm mb-1">{item.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── 6 JENIS ASURANSI ── */}
      <h2>6 Jenis Asuransi Kapal yang Wajib Diketahui Pemilik Armada</h2>
      <p>
        Berikut adalah penjabaran menyeluruh setiap jenis asuransi kapal,
        disertai analisis relevansinya bagi pemilik armada di Batam.
      </p>

      <div className="not-prose space-y-8 my-8">
        {insuranceTypes.map((type, index) => {
          const colors = colorMap[type.color];
          const Icon = type.icon;
          return (
            <div
              key={type.title}
              className={`rounded-2xl border ${colors.border} overflow-hidden`}
            >
              {/* Header */}
              <div className={`${colors.bg} px-6 py-5 flex items-start gap-4`}>
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${colors.badge}`}>
                      {type.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#0a1628] leading-tight">
                    {type.title}
                  </h3>
                  <p className={`text-sm font-medium ${colors.icon} mt-0.5`}>{type.subtitle}</p>
                </div>
              </div>

              {/* Body */}
              <div className="px-6 py-5 bg-white">
                <p className="text-gray-700 text-sm leading-relaxed mb-5">
                  {type.description}
                </p>

                {/* Coverage list */}
                <div className="mb-5">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Yang Dilindungi
                  </p>
                  <ul className="space-y-2">
                    {type.coverage.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Internal link if available */}
                {type.internalLink && (
                  <Link
                    href={type.internalLink}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a4fa0] hover:text-[#c9a84c] transition-colors"
                  >
                    {type.internalLabel}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── STUDI KASUS ── */}
      <h2>Studi Kasus Nyata: Tongkang Kandas di Perairan Nongsa, Batam</h2>
      <p>
        Izinkan saya berbagi kasus nyata yang pernah saya tangani — dengan
        detail yang telah disamarkan untuk menjaga kerahasiaan klien.
      </p>

      <div className="not-prose my-8 rounded-2xl border-l-4 border-[#c9a84c] bg-amber-50 px-6 py-6">
        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck className="w-5 h-5 text-[#c9a84c]" />
          <span className="text-sm font-bold text-[#c9a84c] uppercase tracking-wider">
            Studi Kasus — Dianonimkan
          </span>
        </div>
        <h4 className="font-display font-bold text-[#0a1628] text-lg mb-3">
          Tongkang Batu Bara Kandas di Perairan Nongsa
        </h4>
        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
          <p>
            <strong>Situasi:</strong> Klien saya adalah perusahaan pelayaran lokal Batam yang
            mengoperasikan 3 unit tongkang batu bara berukuran 7.500 DWT dengan rute
            Kalimantan–Batam. Pada pertengahan 2023, satu unit tongkang mengalami
            kandas di perairan dangkal dekat Nongsa akibat kesalahan perhitungan
            pasang surut.
          </p>
          <p>
            <strong>Kerugian yang terjadi:</strong> Kerusakan lambung bawah air, kerusakan
            propeller dan shaft, biaya salvage dan refloating, serta kerugian muatan
            batu bara yang tumpah. Total estimasi kerugian mendekati{" "}
            <strong>Rp 4,2 miliar</strong>.
          </p>
          <p>
            <strong>Perlindungan yang dimiliki:</strong> Untungnya, klien memiliki Marine
            Hull Insurance dengan nilai pertanggungan Rp 18 miliar (nilai kapal).
            Mereka juga memiliki P&I Insurance yang menanggung biaya pembersihan
            tumpahan muatan — hal yang tidak tercakup oleh Hull Insurance.
          </p>
          <p>
            <strong>Hasil:</strong> Klaim berhasil diselesaikan dalam 47 hari kerja.
            Penanggung menanggung Rp 3,85 miliar setelah deductible. Kapal
            kembali beroperasi dalam 2 bulan. Jika tidak ada asuransi, perusahaan
            ini kemungkinan besar harus menjual aset untuk menutup kerugian.
          </p>
        </div>
      </div>

      <p>
        Kasus ini mengajarkan satu hal yang sering saya tekankan kepada klien:{" "}
        <strong>
          bukan soal apakah kapal Anda akan mengalami insiden, tapi kapan.
        </strong>{" "}
        Dengan lebih dari 8 tahun karir di industri pelayaran, saya belum
        pernah bertemu pemilik kapal yang tidak pernah mengalami satu pun
        insiden berarti dalam seumur hidup operasinya.
      </p>

      {/* ── MATRIKS REKOMENDASI ── */}
      <h2>Panduan Memilih: Jenis Asuransi Sesuai Tipe Operasi Armada</h2>
      <p>
        Tidak semua pemilik kapal membutuhkan semua jenis polis sekaligus.
        Berikut panduan praktis berdasarkan tipe operasi:
      </p>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
        <table className="w-full text-sm min-w-[640px]">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">Tipe Operasi</th>
              <th className="text-center px-4 py-4 font-semibold">Hull</th>
              <th className="text-center px-4 py-4 font-semibold">P&I</th>
              <th className="text-center px-4 py-4 font-semibold">Cargo</th>
              <th className="text-center px-4 py-4 font-semibold">War Risk</th>
              <th className="text-center px-4 py-4 font-semibold rounded-tr-2xl">Loss of Hire</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { type: "Tongkang (Batam–Kalimantan)", hull: true, pi: true, cargo: false, war: false, loh: true },
              { type: "Kapal Ferry Antarpulau", hull: true, pi: true, cargo: false, war: false, loh: true },
              { type: "Kapal Kargo FTZ Batam", hull: true, pi: true, cargo: true, war: false, loh: false },
              { type: "Kapal Tunda (Tugboat)", hull: true, pi: true, cargo: false, war: false, loh: false },
              { type: "Kapal Ekspor–Impor Internasional", hull: true, pi: true, cargo: true, war: true, loh: true },
              { type: "Yacht / Kapal Wisata", hull: true, pi: true, cargo: false, war: false, loh: false },
            ].map((row, i) => (
              <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-5 py-3.5 font-medium text-[#0a1628]">{row.type}</td>
                {[row.hull, row.pi, row.cargo, row.war, row.loh].map((val, j) => (
                  <td key={j} className="text-center px-4 py-3.5">
                    {val
                      ? <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                      : <span className="text-gray-300 text-lg">—</span>
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── EKSKLUSI PENTING ── */}
      <h2>Apa yang Tidak Ditanggung? Eksklusi Kritis yang Sering Terlewat</h2>
      <p>
        Sebagai praktisi, saya sering menerima telepon dari pemilik kapal yang
        kecewa karena klaim ditolak. Setelah saya telusuri, hampir selalu ada
        satu penyebab yang sama:{" "}
        <strong>mereka tidak membaca klausul eksklusi polis dengan teliti.</strong>
      </p>
      <p>
        Berikut eksklusi yang paling sering menjadi sumber masalah:
      </p>

      <div className="not-prose space-y-3 my-6">
        {[
          {
            title: "Keausan Normal & Perawatan Rutin",
            desc: "Korosi, keausan lambung akibat usia, dan biaya pemeliharaan berkala tidak ditanggung asuransi. Ini murni tanggung jawab pemilik sebagai maintenance kapal.",
          },
          {
            title: "Kelebihan Muatan (Overloading)",
            desc: "Jika kapal kandas atau tenggelam akibat memuat melebihi kapasitas, klaim bisa ditolak seluruhnya. Pastikan selalu mematuhi batas DWT yang tertera.",
          },
          {
            title: "Operasi di Luar Area yang Disepakati",
            desc: "Polis Marine Hull biasanya menetapkan area navigasi. Kapal yang beroperasi di luar area tersebut tanpa endorsement bisa kehilangan haknya atas klaim.",
          },
          {
            title: "Kelalaian Bersifat Gross Negligence",
            desc: "Insiden akibat ketidaklayakan kapal yang diketahui oleh pemilik (misalnya berlayar meski kondisi mesin diketahui rusak) bisa menjadi dasar penolakan klaim.",
          },
          {
            title: "Perang & Pembajakan (tanpa War Risk)",
            desc: "Standar Hull Insurance tidak menanggung risiko perang dan piracy. Untuk armada yang melewati Selat Malaka, War Risk add-on bukan pilihan, tapi keharusan.",
          },
        ].map((item) => (
          <div key={item.title} className="flex gap-4 p-4 bg-red-50 rounded-xl border border-red-100">
            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#0a1628] text-sm mb-1">{item.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── TIPS POLIS ── */}
      <h2>Tips Memilih Polis Asuransi Kapal yang Tepat di Batam</h2>
      <p>
        Dari lebih dari satu dekade mendampingi pemilik armada di Batam, inilah
        daftar tips praktis yang selalu saya berikan kepada setiap klien baru:
      </p>

      <ol>
        <li>
          <strong>Lakukan survei kondisi kapal sebelum penutupan polis.</strong>{" "}
          Surveyor independen akan menentukan nilai wajar kapal (insured value)
          dan kondisinya. Ini melindungi Anda dari under-insurance maupun
          over-insurance.
        </li>
        <li>
          <strong>Pahami perbedaan ITC Hulls dan Institute Yacht Clauses.</strong>{" "}
          Klausa Institute Time Clauses (ITC) Hulls adalah standar internasional
          yang lebih komprehensif dibanding klausa lokal. Pastikan polis Anda
          menggunakan ITC atau setara.
        </li>
        <li>
          <strong>Jangan pilih deductible terlalu tinggi demi premi murah.</strong>{" "}
          Deductible (risiko sendiri) yang terlalu besar akan membuat klaim
          kecil tidak ekonomis untuk diajukan. Temukan keseimbangan yang tepat.
        </li>
        <li>
          <strong>Perbarui nilai pertanggungan setiap tahun.</strong> Nilai kapal
          berubah seiring kondisi pasar dan depresiasi. Nilai pertanggungan yang
          sudah usang bisa berujung pada under-insurance saat klaim.
        </li>
        <li>
          <strong>
            Gunakan konsultan asuransi independen, bukan hanya agen asuransi.
          </strong>{" "}
          Agen bekerja untuk perusahaan asuransi; konsultan bekerja untuk Anda.
          Konsultan dapat membantu membandingkan polis, menegosiasikan syarat,
          dan mendampingi proses klaim.
        </li>
      </ol>

      {/* ── INTERNAL LINK BLOCK ── */}
      <div className="not-prose my-10 p-6 rounded-2xl bg-gradient-to-br from-[#0a1628] to-[#1a4fa0] text-white">
        <div className="flex items-center gap-2 mb-4">
          <Ship className="w-5 h-5 text-[#c9a84c]" />
          <span className="text-sm font-bold text-[#c9a84c] uppercase tracking-wider">
            Layanan Asuransi Marine
          </span>
        </div>
        <h3 className="font-display font-bold text-xl mb-3">
          Siap Melindungi Armada Anda di Batam?
        </h3>
        <p className="text-white/70 text-sm leading-relaxed mb-5">
          Saya dan tim siap membantu Anda merancang struktur perlindungan asuransi
          marine yang optimal — mulai dari survei nilai kapal, pemilihan polis,
          hingga pendampingan klaim.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/asuransi-marine/marine-hull"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#c9a84c] hover:bg-[#b8973b] text-white text-sm font-semibold rounded-xl transition-colors"
          >
            <Ship className="w-4 h-4" />
            Marine Hull Insurance
          </Link>
          <Link
            href="/asuransi-marine"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-xl transition-colors border border-white/20"
          >
            <Anchor className="w-4 h-4" />
            Semua Produk Marine
          </Link>
        </div>
      </div>

      {/* ── PENUTUP ── */}
      <h2>Kesimpulan: Proteksi Armada Bukan Biaya, Tapi Investasi</h2>
      <p>
        Setiap jenis asuransi kapal memiliki peran spesifik dalam ekosistem
        perlindungan armada Anda. Marine Hull melindungi nilai aset fisik kapal,
        P&I menanggung kewajiban hukum kepada pihak ketiga, Cargo melindungi
        nilai muatan, dan War Risk membentengi dari risiko ekstrem yang tidak
        terduga.
      </p>
      <p>
        Di Batam — dengan karakteristik perairan yang kompleks, volume lalu
        lintas pelayaran yang tinggi, dan posisi strategis di jalur perdagangan
        internasional — memiliki proteksi asuransi yang tepat bukan sekadar
        kewajiban regulasi. Ini adalah keputusan bisnis yang cerdas.
      </p>
      <p>
        Jika Anda masih ragu tentang jenis polis mana yang paling sesuai untuk
        operasi armada Anda, jangan tunda untuk berkonsultasi. Sebuah diskusi
        singkat bisa menghindarkan Anda dari kerugian yang jauh lebih besar di
        masa depan.
      </p>

      {/* ── FAQ ── */}
      <h2 id="faq">
        <HelpCircle className="inline-block w-6 h-6 text-[#c9a84c] mr-2 -mt-1" />
        Pertanyaan yang Sering Diajukan
      </h2>
      <div className="not-prose mt-6">
        <FAQAccordion faqs={faqData} />
      </div>

    
      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Halaman Terkait</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Produk &amp; Layanan</p>
            <ul className="space-y-2">
              <li><a href="/asuransi-marine/marine-hull" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Hull Insurance Batam</a></li>
              <li><a href="/asuransi-marine/builders-risk" className="text-sm text-blue-700 hover:underline font-medium">→ Builders Risk Galangan Kapal Batam</a></li>
              <li><a href="/asuransi-marine" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Marine Batam</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait</p>
            <ul className="space-y-2">
              <li><a href="/blog/perbedaan-marine-hull-vs-cargo" className="text-sm text-blue-700 hover:underline font-medium">→ Perbedaan Marine Hull vs Cargo</a></li>
              <li><a href="/blog/premi-asuransi-kapal-batam-2026" className="text-sm text-blue-700 hover:underline font-medium">→ Premi Asuransi Kapal Batam 2026</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}

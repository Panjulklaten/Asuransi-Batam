import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle,
  Clock,
  Shield,
  ArrowRight,
  FileText,
  Phone,
} from "lucide-react";
import QuoteCard from "@/components/quote/QuoteCard";

export const metadata: Metadata = generateSEO({
  title: "Klaim Asuransi Limbah B3 di Kawasan Industri Batam: Prosedur, Regulasi & Contoh Kasus",
  description: "Panduan lengkap prosedur klaim asuransi limbah B3 untuk pabrik di kawasan industri Batam. Regulasi KLHK, dokumen yang dibutuhkan, contoh kasus di Kabil dan Muka Kuning, estimasi premi.",
  keywords: [
    "klaim asuransi limbah B3 Batam",
    "liability limbah kawasan industri",
    "asuransi limbah B3 Batam",
    "asuransi pencemaran lingkungan Batam",
    "asuransi liability B3 Kabil",
    "asuransi tanggung jawab lingkungan Batam",
  ],
  canonical: "https://asuransibatam.com/blog/klaim-asuransi-limbah-b3-kawasan-industri-batam",
  languages: {
      id: "https://asuransibatam.com/blog/klaim-asuransi-limbah-b3-kawasan-industri-batam",
    },
});

// ── SCHEMA ───────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Klaim Asuransi Limbah B3 di Kawasan Industri Batam: Prosedur, Regulasi & Contoh Kasus",
  description:
    "Panduan lengkap prosedur klaim asuransi limbah B3 untuk pabrik di kawasan industri Batam.",
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
      name: "Apakah asuransi limbah B3 wajib bagi semua pabrik di Batam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Secara hukum, pemegang izin pengelolaan limbah B3 berdasarkan PP 22/2021 wajib memiliki jaminan finansial atas risiko pencemaran. Dalam praktiknya, kawasan industri seperti Batamindo dan BP Batam mensyaratkan bukti asuransi lingkungan sebagai salah satu syarat operasional tenant.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah asuransi public liability sudah mencakup pencemaran limbah B3?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Umumnya tidak. Polis public liability standar mengecualikan polusi dan pencemaran lingkungan. Untuk risiko limbah B3, diperlukan polis Liability B3 atau Environmental Impairment Liability (EIL) yang terpisah.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa lama proses klaim asuransi limbah B3 biasanya berlangsung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Proses klaim limbah B3 lebih kompleks dari klaim asuransi biasa karena melibatkan investigasi lingkungan, verifikasi KLHK, dan potensi proses hukum. Estimasi: 3–12 bulan tergantung skala insiden dan kompleksitas klaim.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah polis menanggung biaya pembersihan lahan yang terkontaminasi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, polis Liability B3 yang komprehensif umumnya mencakup biaya remediasi lahan (clean-up cost), termasuk penggalian tanah terkontaminasi, pengolahan air tanah, dan pemulihan ekosistem — sesuai standar yang ditetapkan KLHK.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana jika insiden pencemaran baru terdeteksi beberapa tahun setelah polis berakhir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ini disebut 'long-tail claim' dan merupakan salah satu kompleksitas utama asuransi lingkungan. Beberapa polis menggunakan basis 'claims-made' (klaim harus diajukan saat polis masih aktif), sementara yang lain menggunakan 'occurrence basis'. Konsultasikan struktur polis dengan tim kami untuk memastikan perlindungan jangka panjang.",
      },
    },
  ],
};

// ── DATA ─────────────────────────────────────────────────────────────────────

const claimSteps = [
  {
    step: "01",
    title: "Amankan area insiden",
    desc: "Hentikan sumber kebocoran jika memungkinkan. Pasang batas area terkontaminasi. Jangan membersihkan area sebelum investigasi — ini bisa merusak bukti dan mempersulit klaim.",
    urgent: true,
  },
  {
    step: "02",
    title: "Laporkan ke KLHK / DLHK dalam 24 jam",
    desc: "PP 22/2021 mewajibkan pelaporan insiden B3 kepada Dinas Lingkungan Hidup dan Kehutanan dalam waktu 1×24 jam. Keterlambatan pelaporan dapat berimplikasi hukum dan mempersulit proses klaim asuransi.",
    urgent: true,
  },
  {
    step: "03",
    title: "Hubungi perusahaan asuransi segera",
    desc: "Laporkan insiden kepada penanggung sebelum membuat pernyataan apapun kepada pihak ketiga atau media. Tim asuransi akan memandu respons Anda sejak awal.",
    urgent: true,
  },
  {
    step: "04",
    title: "Dokumentasikan secara lengkap",
    desc: "Foto dan video area insiden dengan timestamp. Catat waktu kejadian, kondisi cuaca, volume estimasi limbah, dan jalur aliran. Kumpulkan laporan internal, log operasional, dan manifest limbah B3 terkait.",
    urgent: false,
  },
  {
    step: "05",
    title: "Lakukan sampling lingkungan",
    desc: "Ambil sampel tanah, air tanah, dan air permukaan oleh laboratorium terakreditasi. Hasil sampling menjadi dasar penentuan skala kontaminasi dan biaya remediasi — dokumen kunci dalam proses klaim.",
    urgent: false,
  },
  {
    step: "06",
    title: "Serahkan dokumen klaim lengkap",
    desc: "Perusahaan asuransi akan mengirimkan adjuster untuk investigasi. Siapkan semua dokumen perizinan B3, manifest, laporan insiden, hasil sampling, dan komunikasi dengan otoritas lingkungan.",
    urgent: false,
  },
  {
    step: "07",
    title: "Proses negosiasi dan pembayaran",
    desc: "Adjuster akan menilai besaran kerugian dan biaya remediasi. Perusahaan asuransi bernegosiasi dengan pihak ketiga yang terdampak. Pembayaran dilakukan sesuai limit dan ketentuan polis.",
    urgent: false,
  },
];

const coverageItems = [
  {
    covered: true,
    label: "Biaya remediasi lahan terkontaminasi",
    desc: "Penggalian, pengangkutan, dan pengolahan tanah terkontaminasi sesuai standar KLHK",
  },
  {
    covered: true,
    label: "Pemulihan air tanah",
    desc: "Biaya pump-and-treat atau teknologi remediasi lainnya untuk air tanah yang tercemar",
  },
  {
    covered: true,
    label: "Ganti rugi pihak ketiga",
    desc: "Kompensasi kepada pemilik lahan, properti, atau bisnis yang terdampak pencemaran",
  },
  {
    covered: true,
    label: "Biaya hukum dan pertahanan",
    desc: "Biaya pengacara, proses persidangan, dan biaya ahli lingkungan sebagai saksi",
  },
  {
    covered: true,
    label: "Denda administratif tertentu",
    desc: "Denda dari otoritas lingkungan yang dapat diasuransikan berdasarkan hukum yang berlaku",
  },
  {
    covered: false,
    label: "Tindakan pencemaran yang disengaja",
    desc: "Pembuangan limbah ilegal yang dilakukan secara sadar dan sengaja",
  },
  {
    covered: false,
    label: "Denda pidana",
    desc: "Sanksi pidana yang dijatuhkan pengadilan tidak dapat diasuransikan berdasarkan hukum",
  },
  {
    covered: false,
    label: "Kontaminasi yang sudah ada sebelum polis",
    desc: "Pencemaran yang terjadi atau diketahui sebelum tanggal efektif polis",
  },
];

const regulasiItems = [
  {
    kode: "PP 22/2021",
    nama: "Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup",
    relevansi: "Mewajibkan jaminan finansial bagi pengelola limbah B3; mengatur kewajiban pelaporan insiden dalam 24 jam",
  },
  {
    kode: "UU 32/2009",
    nama: "Perlindungan dan Pengelolaan Lingkungan Hidup",
    relevansi: "Dasar hukum tanggung jawab mutlak (strict liability) atas pencemaran lingkungan — tertanggung bertanggung jawab bahkan tanpa unsur kesengajaan",
  },
  {
    kode: "PermenLHK P.56/2015",
    nama: "Tata Cara & Persyaratan Teknis Pengelolaan Limbah B3",
    relevansi: "Standar teknis pengelolaan, penyimpanan, dan pengangkutan limbah B3 yang menjadi acuan investigasi klaim",
  },
  {
    kode: "Peraturan BP Batam",
    nama: "Ketentuan Operasional Kawasan Industri Batam",
    relevansi: "Tenant kawasan industri BP Batam wajib memiliki bukti pengelolaan limbah B3 yang sesuai standar sebagai syarat perpanjangan izin operasional",
  },
];

const kasusNyata = [
  {
    lokasi: "Kawasan Industri Kabil",
    insiden: "Tangki penyimpanan limbah pelarut organik mengalami kebocoran akibat korosi. Limbah meresap ke tanah dan mencemari sumur air tanah pabrik tetangga.",
    dampak: "Biaya remediasi tanah Rp 3,2 miliar + kompensasi gangguan operasional tetangga Rp 800 juta + biaya konsultan lingkungan Rp 450 juta",
    hasil: "Pabrik dengan polis Liability B3 dilindungi penuh. Tanpa polis, biaya ditanggung sendiri.",
    color: "border-amber-400",
    bg: "bg-amber-50",
  },
  {
    lokasi: "Kawasan Muka Kuning",
    insiden: "Limbah cair industri pengolahan logam tumpah saat proses transfer dan mengalir melalui saluran drainase kawasan menuju badan air di luar pabrik.",
    dampak: "Tuntutan dari pengelola kawasan Rp 1,5 miliar + biaya pembersihan drainase Rp 600 juta + sanksi administratif DLHK Kota Batam",
    hasil: "Klaim diproses. Perusahaan asuransi menangani negosiasi dengan pengelola kawasan dan koordinasi dengan DLHK.",
    color: "border-blue-400",
    bg: "bg-blue-50",
  },
  {
    lokasi: "Kawasan Batu Ampar",
    insiden: "Kebakaran di gudang penyimpanan bahan kimia menghasilkan asap beracun yang berdampak pada pemukiman di sekitar kawasan. Warga mengklaim gangguan kesehatan.",
    dampak: "Klaim dari 47 warga terdampak: biaya medis + kompensasi Rp 2,8 miliar + biaya pemantauan udara oleh konsultan",
    hasil: "Polis mencakup dampak kepada pihak ketiga. Perusahaan asuransi memfasilitasi mediasi dan pembayaran kompensasi.",
    color: "border-red-400",
    bg: "bg-red-50",
  },
];

const premiEstimasi = [
  { jenis: "Pabrik elektronik skala menengah", limit: "Rp 10 M", premi: "Rp 25–50 juta/tahun" },
  { jenis: "Fasilitas pengolahan logam", limit: "Rp 20 M", premi: "Rp 50–100 juta/tahun" },
  { jenis: "Gudang bahan kimia", limit: "Rp 15 M", premi: "Rp 35–75 juta/tahun" },
  { jenis: "Pabrik galvanis / coating", limit: "Rp 25 M", premi: "Rp 60–120 juta/tahun" },
  { jenis: "Fasilitas pengolahan limbah B3", limit: "Rp 50 M", premi: "Rp 100–200 juta/tahun" },
];

const faqs = [
  {
    q: "Apakah asuransi limbah B3 wajib bagi semua pabrik di Batam?",
    a: "Secara hukum, pemegang izin pengelolaan limbah B3 berdasarkan PP 22/2021 wajib memiliki jaminan finansial atas risiko pencemaran. Dalam praktiknya, kawasan industri seperti Batamindo dan BP Batam mensyaratkan bukti asuransi lingkungan sebagai salah satu syarat operasional tenant.",
  },
  {
    q: "Apakah asuransi public liability sudah mencakup pencemaran limbah B3?",
    a: "Umumnya tidak. Polis public liability standar mengecualikan polusi dan pencemaran lingkungan. Untuk risiko limbah B3, diperlukan polis Liability B3 atau Environmental Impairment Liability (EIL) yang terpisah.",
  },
  {
    q: "Berapa lama proses klaim asuransi limbah B3 biasanya berlangsung?",
    a: "Proses klaim limbah B3 lebih kompleks dari klaim asuransi biasa karena melibatkan investigasi lingkungan, verifikasi KLHK, dan potensi proses hukum. Estimasi: 3–12 bulan tergantung skala insiden dan kompleksitas klaim.",
  },
  {
    q: "Apakah polis menanggung biaya pembersihan lahan yang terkontaminasi?",
    a: "Ya, polis Liability B3 yang komprehensif umumnya mencakup biaya remediasi lahan (clean-up cost), termasuk penggalian tanah terkontaminasi, pengolahan air tanah, dan pemulihan ekosistem — sesuai standar yang ditetapkan KLHK.",
  },
  {
    q: "Bagaimana jika insiden pencemaran baru terdeteksi beberapa tahun setelah polis berakhir?",
    a: "Ini disebut 'long-tail claim' dan merupakan salah satu kompleksitas utama asuransi lingkungan. Beberapa polis menggunakan basis 'claims-made' (klaim harus diajukan saat polis masih aktif), sementara yang lain menggunakan 'occurrence basis'. Konsultasikan struktur polis dengan tim kami untuk memastikan perlindungan jangka panjang.",
  },
];

// ── PAGE ─────────────────────────────────────────────────────────────────────

export default function KlaimLimbahB3Page() {
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
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8 flex-wrap">
            <Link href="/" className="hover:text-white/80 transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white/80 transition-colors">Blog</Link>
            <span>/</span>
            <Link href="/asuransi-liability" className="hover:text-[#c9a84c] transition-colors">Liability</Link>
            <span>/</span>
            <span className="text-white/70">Klaim Limbah B3 Kawasan Industri</span>
          </nav>

          {/* Category badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a84c]/20 border border-[#c9a84c]/30 rounded-full text-[#c9a84c] text-sm font-semibold mb-6">
            <AlertTriangle className="w-4 h-4" />
            Liability
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
            Klaim Asuransi Limbah B3<br />
            di <span className="text-gradient-gold">Kawasan Industri Batam:</span><br />
            Prosedur, Regulasi & Kasus Nyata
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-3xl">
            Panduan lengkap langkah klaim, regulasi KLHK yang berlaku, contoh insiden di Kabil dan Muka Kuning,
            serta cara memastikan polis Anda benar-benar melindungi bisnis.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 29 Mei 2026</span>
            <span>•</span>
            <span>Tim Asuransi Batam</span>
            <span>•</span>
            <span>±12 menit baca</span>
          </div>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────────── */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Intro skenario */}
        <div className="bg-[#faf8f3] border-l-4 border-red-500 rounded-r-2xl p-6 mb-12">
          <p className="text-[#0a1628] leading-relaxed">
            Pukul 02.30 dini hari, operator shift malam di sebuah pabrik pengolahan logam di
            kawasan industri <strong>Kabil</strong> mencium bau menyengat dari area tangki penyimpanan.
            Setelah diperiksa: retakan pada dinding tangki telah menyebabkan kebocoran limbah pelarut organik
            selama beberapa jam. Cairan berwarna kehitaman sudah merembes ke tanah dan mulai mengalir
            menuju drainase kawasan.
          </p>
          <p className="text-[#0a1628] mt-4 leading-relaxed">
            Dalam 72 jam berikutnya, pabrik tersebut menghadapi: investigasi Dinas Lingkungan Hidup Kota Batam,
            tuntutan ganti rugi dari tiga pabrik tetangga, dan permintaan biaya remediasi dari pengelola kawasan.
            Total eksposur finansial: lebih dari <strong>Rp 4,5 miliar</strong>.
          </p>
          <p className="text-[#475569] mt-4 text-sm leading-relaxed">
            Pabrik tersebut memiliki polis Liability B3. Yang membedakan hasilnya secara drastis
            dibanding pabrik tanpa polis.
          </p>
        </div>

        {/* ── SECTION 1: Mengapa B3 butuh polis terpisah ── */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-5">
            Mengapa Limbah B3 Butuh Polis Terpisah — Bukan Sekadar Public Liability
          </h2>
          <p className="text-[#475569] leading-relaxed mb-5">
            Banyak pengusaha pabrik di Batam berasumsi bahwa{" "}
            <Link href="/asuransi-liability/public-liability" className="text-[#1a4fa0] font-semibold hover:underline">
              asuransi public liability
            </Link>{" "}
            mereka sudah cukup untuk mengcover insiden pencemaran. Asumsi ini keliru dan berbahaya.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-900 text-sm mb-2">Pengecualian Standar di Polis Public Liability</p>
                <p className="text-red-800 text-sm leading-relaxed">
                  Hampir semua polis public liability standar secara eksplisit <strong>mengecualikan</strong>{" "}
                  risiko polusi, kontaminasi, dan pencemaran lingkungan — termasuk kebocoran limbah B3.
                  Klaim yang muncul dari insiden B3 akan ditolak jika hanya mengandalkan polis public liability.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0] shadow-sm mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="gradient-navy">
                  <th className="text-left px-5 py-4 text-white/70 font-semibold">Aspek</th>
                  <th className="text-left px-5 py-4 text-[#c9a84c] font-display font-bold">Public Liability</th>
                  <th className="text-left px-5 py-4 text-blue-300 font-display font-bold">Liability B3 / EIL</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Cedera pihak ketiga (non-polusi)", "✅ Tercakup", "✅ Tercakup"],
                  ["Kerusakan properti (non-polusi)", "✅ Tercakup", "✅ Tercakup"],
                  ["Pencemaran limbah B3", "❌ Dikecualikan", "✅ Tercakup"],
                  ["Biaya remediasi lahan", "❌ Dikecualikan", "✅ Tercakup"],
                  ["Pemulihan air tanah", "❌ Dikecualikan", "✅ Tercakup"],
                  ["Sanksi administratif lingkungan", "❌ Dikecualikan", "✅ Sebagian tercakup"],
                  ["Biaya konsultan lingkungan", "❌ Dikecualikan", "✅ Tercakup"],
                ].map(([aspek, pub, b3], i) => (
                  <tr key={aspek} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                    <td className="px-5 py-3.5 font-medium text-[#0a1628]">{aspek}</td>
                    <td className="px-5 py-3.5 text-[#475569]">{pub}</td>
                    <td className="px-5 py-3.5 text-[#475569]">{b3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[#475569] leading-relaxed">
            Untuk bisnis di kawasan industri Batam yang menghasilkan, menyimpan, atau mengangkut limbah B3,
            kombinasi kedua polis diperlukan. Konsultasikan kebutuhan spesifik bisnis Anda dengan{" "}
            <Link href="/asuransi-liability" className="text-[#1a4fa0] font-semibold hover:underline">
              tim liability kami
            </Link>.
          </p>
        </section>

        {/* ── SECTION 2: Regulasi ── */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-5">
            Regulasi yang Mengikat Pengelola Limbah B3 di Batam
          </h2>
          <p className="text-[#475569] leading-relaxed mb-6">
            Batam sebagai kawasan FTZ dan KEK tetap tunduk pada regulasi lingkungan nasional.
            Berikut regulasi utama yang relevan bagi pengelola limbah B3 di kawasan industri Batam:
          </p>

          <div className="space-y-4">
            {regulasiItems.map((reg) => (
              <div key={reg.kode} className="bg-white rounded-2xl border border-[#e2e8f0] p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 px-3 py-1.5 gradient-navy rounded-lg">
                    <span className="font-display font-bold text-[#c9a84c] text-xs whitespace-nowrap">{reg.kode}</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-[#0a1628] text-sm mb-1">{reg.nama}</p>
                    <p className="text-[#475569] text-sm leading-relaxed">{reg.relevansi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-[#faf8f3] border border-[#e2e8f0] rounded-2xl p-5">
            <p className="text-[#475569] text-sm leading-relaxed">
              <strong className="text-[#0a1628]">Penting:</strong> UU 32/2009 menerapkan prinsip{" "}
              <em>strict liability</em> untuk pencemaran limbah B3 — artinya perusahaan dapat
              dimintai pertanggungjawaban <strong className="text-[#0a1628]">meskipun tidak ada unsur kelalaian</strong>.
              Ini berbeda dengan most liability insurance biasa dan menjadi alasan utama mengapa
              polis khusus B3 diperlukan.
            </p>
          </div>
        </section>

        {/* ── SECTION 3: Coverage ── */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-6">
            Apa yang Ditanggung dan Tidak Ditanggung Polis Liability B3
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coverageItems.map((item) => (
              <div
                key={item.label}
                className={`rounded-2xl p-5 border ${
                  item.covered
                    ? "bg-green-50 border-green-200"
                    : "bg-red-50 border-red-200"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${
                    item.covered ? "bg-green-500" : "bg-red-500"
                  }`}>
                    <span className="text-white text-xs font-bold">{item.covered ? "✓" : "✗"}</span>
                  </div>
                  <div>
                    <p className={`font-display font-bold text-sm mb-1 ${
                      item.covered ? "text-green-900" : "text-red-900"
                    }`}>
                      {item.label}
                    </p>
                    <p className={`text-xs leading-relaxed ${
                      item.covered ? "text-green-800" : "text-red-800"
                    }`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 4: 7 Langkah Klaim ── */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-3">
            7 Langkah Prosedur Klaim Asuransi Limbah B3
          </h2>
          <p className="text-[#475569] leading-relaxed mb-8">
            Tindakan yang diambil dalam 24–72 jam pertama setelah insiden sangat menentukan kelancaran
            proses klaim. Berikut prosedur yang harus diikuti:
          </p>

          <div className="space-y-5">
            {claimSteps.map((s) => (
              <div
                key={s.step}
                className={`relative flex gap-5 p-5 rounded-2xl border-2 ${
                  s.urgent
                    ? "border-red-300 bg-red-50"
                    : "border-[#e2e8f0] bg-white"
                }`}
              >
                {s.urgent && (
                  <div className="absolute -top-2.5 left-5">
                    <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded-full">
                      SEGERA
                    </span>
                  </div>
                )}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 font-display font-black text-sm ${
                  s.urgent ? "bg-red-500 text-white" : "gradient-navy text-[#c9a84c]"
                }`}>
                  {s.step}
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#0a1628] mb-1">{s.title}</h3>
                  <p className="text-[#475569] text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-[#0a1628] rounded-2xl p-5 flex items-start gap-4">
            <Phone className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-display font-bold text-white text-sm mb-1">
                Jangan tunggu — hubungi kami segera saat insiden terjadi
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                Tim kami siap memandu langkah respons yang benar sejak menit pertama, termasuk
                koordinasi dengan DLHK dan perusahaan asuransi.{" "}
                <a
                  href="https://wa.me/6281373336728?text=Darurat%20-%20Insiden%20limbah%20B3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c9a84c] font-semibold hover:underline"
                >
                  WhatsApp 0813-7333-6728 →
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: Kasus Nyata ── */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-3">
            Contoh Kasus: Insiden B3 di Kawasan Industri Batam
          </h2>
          <p className="text-[#475569] leading-relaxed mb-8">
            Berikut tiga skenario insiden yang menggambarkan skala risiko dan pentingnya polis Liability B3
            bagi industri di Batam. Nama perusahaan dan detail spesifik disamarkan.
          </p>

          <div className="space-y-6">
            {kasusNyata.map((kasus, i) => (
              <div key={i} className={`rounded-2xl border-2 ${kasus.color} ${kasus.bg} p-6`}>
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-4 h-4 text-[#0a1628]" />
                  <span className="font-display font-bold text-[#0a1628] text-sm">
                    Kasus {i + 1} — {kasus.lokasi}
                  </span>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-[#0a1628]">Insiden: </span>
                    <span className="text-[#475569]">{kasus.insiden}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#0a1628]">Eksposur finansial: </span>
                    <span className="text-[#475569]">{kasus.dampak}</span>
                  </div>
                  <div className="bg-white/70 rounded-xl p-3">
                    <span className="font-semibold text-[#0a1628]">Hasil: </span>
                    <span className="text-[#475569]">{kasus.hasil}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 6: Estimasi premi ── */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-3">
            Estimasi Premi Liability B3 untuk Industri di Batam
          </h2>
          <p className="text-[#475569] leading-relaxed mb-6">
            Premi polis Liability B3 dipengaruhi oleh jenis dan volume limbah yang dihasilkan,
            rekam jejak insiden, sistem pengelolaan yang ada, lokasi, dan limit pertanggungan.
            Berikut gambaran umum ilustratif:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0] shadow-sm mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#faf8f3] border-b border-[#e2e8f0]">
                  <th className="text-left px-5 py-3.5 font-display font-bold text-[#0a1628]">Jenis Fasilitas</th>
                  <th className="text-left px-5 py-3.5 font-display font-bold text-[#0a1628]">Limit</th>
                  <th className="text-left px-5 py-3.5 font-display font-bold text-[#0a1628]">Estimasi Premi</th>
                </tr>
              </thead>
              <tbody>
                {premiEstimasi.map((row, i) => (
                  <tr key={row.jenis} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                    <td className="px-5 py-3 text-[#0a1628] font-medium">{row.jenis}</td>
                    <td className="px-5 py-3 text-[#475569]">{row.limit}</td>
                    <td className="px-5 py-3 text-[#475569]">{row.premi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[#94a3b8] text-xs leading-relaxed">
            * Angka di atas adalah ilustrasi umum. Premi aktual ditentukan setelah underwriting berdasarkan
            profil risiko spesifik fasilitas Anda.{" "}
            <Link href="/asuransi-liability/asuransi-limbah-b3" className="text-[#1a4fa0] font-semibold hover:underline">
              Hubungi kami untuk penawaran yang akurat →
            </Link>
          </p>
        </section>

        {/* ── SECTION 7: FAQ ── */}
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

        {/* ── Internal links ── */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-xl text-[#0a1628] mb-5">
            Pelajari Lebih Lanjut tentang Asuransi Liability
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Halaman Utama Asuransi Liability",
                href: "/asuransi-liability",
                desc: "Semua produk perlindungan tanggung jawab hukum untuk bisnis di Batam",
              },
              {
                title: "Asuransi Limbah B3",
                href: "/asuransi-liability/asuransi-limbah-b3",
                desc: "Detail produk polis Environmental Impairment Liability",
              },
              {
                title: "Public Liability",
                href: "/asuransi-liability/public-liability",
                desc: "Detail produk asuransi tanggung jawab publik",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-start gap-3 p-4 bg-[#faf8f3] rounded-xl border border-[#e2e8f0] hover:border-[#c9a84c]/50 hover:shadow-md transition-all"
              >
                <Shield className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#0a1628] group-hover:text-[#1a4fa0] transition-colors text-sm">
                    {link.title}
                  </div>
                  <div className="text-[#475569] text-xs mt-0.5">{link.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <div className="border-t border-[#e2e8f0] pt-8">
          <p className="text-[#94a3b8] text-xs leading-relaxed italic">
            Artikel ini disusun berdasarkan PP 22/2021, UU 32/2009 tentang Perlindungan dan Pengelolaan
            Lingkungan Hidup, PermenLHK P.56/2015, serta pengalaman praktis mendampingi klien industri
            di Batam. Kasus yang disebutkan adalah skenario ilustratif. Untuk analisis risiko dan penawaran
            polis yang spesifik untuk fasilitas Anda, konsultasikan langsung dengan tim kami.
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
                <li><a href="/asuransi-liability/asuransi-limbah-b3" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Limbah B3 Batam</a></li>
                <li><a href="/asuransi-liability/public-liability" className="text-sm text-blue-700 hover:underline font-medium">→ Public Liability Insurance Batam</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait</p>
              <ul className="space-y-2">
                <li><a href="/blog/pentingnya-asuransi-limbah-b3" className="text-sm text-blue-700 hover:underline font-medium">→ Pentingnya Asuransi Limbah B3</a></li>
                <li><a href="/blog/asuransi-gudang-kawasan-industri-muka-kuning-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Gudang Kawasan Industri Batam</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <QuoteCard cluster="liability" lang="id" />
    </>
  );
}

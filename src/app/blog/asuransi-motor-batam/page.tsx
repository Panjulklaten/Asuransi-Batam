import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import { Shield, Clock, CheckCircle, AlertCircle, ArrowRight, Calculator } from "lucide-react";
import QuoteCard from "@/components/quote/QuoteCard";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Motor Batam 2026: Premi, Tarif OJK Wilayah 1 & Tips Pilih All Risk vs TLO",
  description: "Panduan lengkap asuransi motor di Batam. Tarif OJK Wilayah 1, perbedaan all risk dan TLO motor, estimasi premi, proses klaim, dan tips memilih polis terbaik sesuai jenis motor Anda.",
  keywords: [
    "asuransi motor Batam",
    "premi asuransi motor Batam 2026",
    "asuransi motor all risk Batam",
    "asuransi TLO motor Batam",
    "tarif OJK asuransi motor",
    "asuransi kendaraan Batam",
  ],
  canonical: "https://asuransibatam.com/blog/asuransi-motor-batam",
  languages: { id: "https://asuransibatam.com/blog/asuransi-motor-batam" },
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asuransi Motor Batam 2026: Premi, Tarif OJK Wilayah 1 & Tips Pilih All Risk vs TLO",
  datePublished: "2026-05-29",
  dateModified: "2026-05-29",
  author: { "@type": "Organization", name: "Tim Asuransi Batam", url: "https://asuransibatam.com" },
  publisher: { "@type": "Organization", name: "Asuransi Batam – Rio", url: "https://asuransibatam.com" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah asuransi motor wajib di Batam?",
      acceptedAnswer: { "@type": "Answer", text: "Asuransi motor tidak wajib secara hukum di luar asuransi dasar kendaraan (SWDKLLJ yang sudah termasuk dalam STNK). Namun mengingat tingkat risiko pencurian dan kecelakaan di Batam, sangat disarankan memiliki perlindungan tambahan, terutama untuk motor dengan harga di atas Rp 20 juta." },
    },
    {
      "@type": "Question",
      name: "Apa perbedaan all risk dan TLO untuk motor?",
      acceptedAnswer: { "@type": "Answer", text: "All risk menanggung semua risiko kerusakan — dari goresan kecil hingga kerusakan total dan kehilangan. TLO (Total Loss Only) hanya menanggung jika motor hilang atau rusak lebih dari 75% nilai motor. Premi all risk lebih mahal tetapi perlindungannya jauh lebih komprehensif." },
    },
    {
      "@type": "Question",
      name: "Berapa kisaran premi asuransi motor all risk di Batam?",
      acceptedAnswer: { "@type": "Answer", text: "Berdasarkan tarif OJK untuk Wilayah 1 (termasuk Kepulauan Riau/Batam), premi all risk motor berkisar antara 1,76%–2,59% dari harga motor per tahun, tergantung kategori harga. Motor seharga Rp 25 juta misalnya akan membayar sekitar Rp 440 ribu–650 ribu per tahun." },
    },
    {
      "@type": "Question",
      name: "Apakah klaim bisa diproses jika motor hilang dicuri di parkiran?",
      acceptedAnswer: { "@type": "Answer", text: "Ya, untuk polis all risk atau TLO yang mencakup risiko pencurian. Syaratnya: membuat laporan polisi dalam 24–72 jam setelah kejadian, menyerahkan kunci dan STNK asli, serta menunggu proses investigasi (biasanya 14–30 hari kerja untuk klaim kehilangan)." },
    },
    {
      "@type": "Question",
      name: "Motor modifikasi apakah bisa diasuransikan?",
      acceptedAnswer: { "@type": "Answer", text: "Bisa, namun perlu deklarasi saat pengajuan polis. Nilai pertanggungan harus disesuaikan dengan nilai motor termasuk modifikasi. Beberapa modifikasi yang meningkatkan risiko (knalpot racing, modifikasi mesin) dapat mempengaruhi premi atau klausul polis." },
    },
  ],
};

const tarifOJK = [
  { kategori: "Kategori 1 (s/d Rp 15 juta)", allRisk: "1,76% – 2,59%", tlo: "0,47% – 0,56%" },
  { kategori: "Kategori 2 (Rp 15–30 juta)", allRisk: "1,76% – 2,59%", tlo: "0,47% – 0,56%" },
  { kategori: "Kategori 3 (di atas Rp 30 juta)", allRisk: "1,76% – 2,59%", tlo: "0,47% – 0,56%" },
];

const ilustrasiPremi = [
  { motor: "Honda Beat / Vario (Rp 20 juta)", allRisk: "Rp 352 – 518 ribu/thn", tlo: "Rp 94 – 112 ribu/thn" },
  { motor: "Honda PCX / Yamaha NMAX (Rp 35 juta)", allRisk: "Rp 616 – 906 ribu/thn", tlo: "Rp 164 – 196 ribu/thn" },
  { motor: "Honda ADV / CB500 (Rp 70 juta)", allRisk: "Rp 1,23 – 1,81 juta/thn", tlo: "Rp 329 – 392 ribu/thn" },
  { motor: "Kawasaki Ninja ZX-25R (Rp 100 juta)", allRisk: "Rp 1,76 – 2,59 juta/thn", tlo: "Rp 470 – 560 ribu/thn" },
];

const risikoKhususBatam = [
  { icon: "🏍️", title: "Tingkat pencurian motor", desc: "Batam sebagai kota dengan mobilitas tinggi memiliki risiko pencurian kendaraan yang perlu diantisipasi, terutama di area parkiran mal Nagoya Hill, Lucky Plaza, dan kawasan niaga padat lainnya." },
  { icon: "🌧️", title: "Risiko cuaca dan banjir", desc: "Curah hujan tinggi di Batam meningkatkan risiko kerusakan akibat banjir dan jalan licin. Beberapa kawasan seperti Bengkong dan Batam Centre rawan genangan." },
  { icon: "🚢", title: "Pengiriman motor antar pulau", desc: "Motor yang dikirim via ferry Batam–Kepri atau untuk keperluan kerja di pulau-pulau sekitar perlu perlindungan tambahan selama proses pengiriman." },
  { icon: "🏗️", title: "Medan jalan kawasan industri", desc: "Pengguna motor yang bekerja di kawasan industri Muka Kuning, Kabil, atau Batamindo menghadapi risiko jalan rusak dan truk besar yang meningkatkan risiko kecelakaan." },
];

const claimDocs = [
  "Formulir klaim yang diisi lengkap",
  "Fotokopi KTP, SIM, dan STNK",
  "Polis asuransi asli",
  "Foto kerusakan motor (untuk klaim kerusakan)",
  "Laporan polisi (untuk klaim pencurian atau kecelakaan dengan pihak ketiga)",
  "Surat keterangan dari bengkel resmi (untuk klaim kerusakan)",
  "Kunci dan STNK asli (untuk klaim kehilangan)",
];

const faqs = [
  { q: "Apakah asuransi motor wajib di Batam?", a: "Asuransi motor tidak wajib secara hukum di luar SWDKLLJ yang sudah termasuk dalam STNK. Namun mengingat tingkat risiko pencurian dan kecelakaan di Batam, sangat disarankan memiliki perlindungan tambahan, terutama untuk motor dengan harga di atas Rp 20 juta." },
  { q: "Apa perbedaan all risk dan TLO untuk motor?", a: "All risk menanggung semua risiko kerusakan — dari goresan kecil hingga kerusakan total dan kehilangan. TLO (Total Loss Only) hanya menanggung jika motor hilang atau rusak lebih dari 75% nilai motor. Premi all risk lebih mahal tetapi perlindungannya jauh lebih komprehensif." },
  { q: "Berapa kisaran premi asuransi motor all risk di Batam?", a: "Berdasarkan tarif OJK untuk Wilayah 1 (termasuk Kepulauan Riau/Batam), premi all risk motor berkisar antara 1,76%–2,59% dari harga motor per tahun. Motor seharga Rp 25 juta akan membayar sekitar Rp 440–650 ribu per tahun." },
  { q: "Apakah klaim bisa diproses jika motor hilang dicuri di parkiran?", a: "Ya, untuk polis all risk atau TLO yang mencakup risiko pencurian. Syaratnya: laporan polisi dalam 24–72 jam, menyerahkan kunci dan STNK asli, serta menunggu proses investigasi (biasanya 14–30 hari kerja untuk klaim kehilangan)." },
  { q: "Motor modifikasi apakah bisa diasuransikan?", a: "Bisa, namun perlu deklarasi saat pengajuan polis. Nilai pertanggungan harus disesuaikan dengan nilai motor termasuk modifikasi. Beberapa modifikasi yang meningkatkan risiko dapat mempengaruhi premi atau klausul polis." },
];

const breadcrumbListSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://asuransibatam.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://asuransibatam.com/blog" },
    { "@type": "ListItem", position: 3, name: "Kendaraan", item: "https://asuransibatam.com/asuransi-kendaraan" },
    { "@type": "ListItem", position: 4, name: "Asuransi Motor Batam", item: "https://asuransibatam.com/blog/asuransi-motor-batam" },
  ],
};

export default function AsuransiMotorBatamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0] overflow-hidden pt-24 pb-16">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#c9a84c]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-56 h-56 bg-[#1a4fa0]/40 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white/80 transition-colors">Blog</Link>
            <span>/</span>
            <Link href="/asuransi-kendaraan" className="hover:text-[#c9a84c] transition-colors">Kendaraan</Link>
            <span>/</span>
            <span className="text-white/70">Asuransi Motor Batam</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a84c]/20 border border-[#c9a84c]/30 rounded-full text-[#c9a84c] text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            Asuransi Kendaraan
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
            Asuransi Motor Batam 2026:<br />
            <span className="text-gradient-gold">Premi, Tarif OJK</span><br />
            & Tips Pilih All Risk vs TLO
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-3xl">
            Panduan lengkap memilih asuransi motor di Batam — tarif resmi OJK Wilayah 1, perbandingan all risk dan TLO, estimasi premi motor populer, dan proses klaim.
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

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Intro skenario */}
        <div className="bg-[#faf8f3] border-l-4 border-[#c9a84c] rounded-r-2xl p-6 mb-12">
          <p className="text-[#0a1628] leading-relaxed">
            Seorang karyawan pabrik di kawasan <strong>Muka Kuning</strong> memarkir motornya di depan warung
            saat istirahat siang. Ketika kembali 45 menit kemudian, motor Honda PCX-nya sudah raib. Laporan polisi
            dibuat, tapi karena tidak punya asuransi, ia harus menanggung sendiri kerugian Rp 32 juta.
          </p>
          <p className="text-[#475569] mt-3 text-sm leading-relaxed">
            Jika ia memiliki polis TLO seharga sekitar <strong>Rp 150 ribu per tahun</strong>, motor tersebut
            akan diganti penuh oleh perusahaan asuransi. Selisih antara terlindungi dan tidak hanyalah
            keputusan kecil yang sering diabaikan.
          </p>
        </div>

        {/* Section 1: Mengapa motor di Batam perlu diasuransikan */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-5">
            Risiko Khusus Motor di Batam yang Perlu Diantisipasi
          </h2>
          <p className="text-[#475569] leading-relaxed mb-8">
            Batam memiliki karakteristik risiko yang berbeda dari kota-kota besar di Jawa. Beberapa faktor
            ini meningkatkan relevansi asuransi motor bagi pengguna di Batam:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {risikoKhususBatam.map((r) => (
              <div key={r.title} className="bg-white rounded-2xl border-2 border-[#e2e8f0] p-5 hover:border-[#c9a84c]/50 hover:shadow-lg transition-all card-hover">
                <div className="text-3xl mb-3">{r.icon}</div>
                <h3 className="font-display font-bold text-[#0a1628] mb-2 text-sm">{r.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: All Risk vs TLO */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-5">
            All Risk vs TLO Motor: Mana yang Tepat untuk Anda?
          </h2>
          <p className="text-[#475569] leading-relaxed mb-6">
            Ini adalah pertanyaan yang paling sering ditanyakan. Jawabannya bergantung pada nilai motor,
            usia motor, dan pola penggunaan harian Anda. Lihat perbandingan lengkapnya:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0] shadow-sm mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="gradient-navy">
                  <th className="text-left px-5 py-4 text-white/70 font-semibold">Aspek</th>
                  <th className="text-left px-5 py-4 text-[#c9a84c] font-display font-bold">All Risk</th>
                  <th className="text-left px-5 py-4 text-blue-300 font-display font-bold">TLO</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Kerusakan ringan / lecet", "✅ Ditanggung", "❌ Tidak ditanggung"],
                  ["Kerusakan berat (>75% nilai motor)", "✅ Ditanggung", "✅ Ditanggung"],
                  ["Kehilangan / pencurian", "✅ Ditanggung", "✅ Ditanggung"],
                  ["Kerusakan akibat banjir", "✅ Ditanggung (dengan endorsemen)", "❌ Tidak ditanggung"],
                  ["Tanggung jawab pihak ketiga", "✅ Bisa ditambahkan", "✅ Bisa ditambahkan"],
                  ["Range premi (Wil. 1)", "1,76% – 2,59%/tahun", "0,47% – 0,56%/tahun"],
                  ["Cocok untuk motor", "Motor baru / motor mahal", "Motor tua / cicilan hampir lunas"],
                ].map(([aspek, allRisk, tlo], i) => (
                  <tr key={aspek} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                    <td className="px-5 py-3.5 font-medium text-[#0a1628]">{aspek}</td>
                    <td className="px-5 py-3.5 text-[#475569]">{allRisk}</td>
                    <td className="px-5 py-3.5 text-[#475569]">{tlo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-2xl p-5">
              <h3 className="font-display font-bold text-[#0a1628] mb-2">Pilih All Risk jika:</h3>
              <ul className="space-y-2 text-sm text-[#475569]">
                {["Motor baru atau harga di atas Rp 25 juta", "Motor masih dalam cicilan leasing", "Sering parkir di area publik ramai", "Menggunakan motor untuk aktivitas harian intensif"].map(t => (
                  <li key={t} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#c9a84c] flex-shrink-0 mt-0.5" />{t}</li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
              <h3 className="font-display font-bold text-[#0a1628] mb-2">Pilih TLO jika:</h3>
              <ul className="space-y-2 text-sm text-[#475569]">
                {["Motor berusia lebih dari 5 tahun", "Motor hanya dipakai untuk rute tetap", "Ingin premi serendah mungkin", "Motor disimpan di garasi tertutup malam hari"].map(t => (
                  <li key={t} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Tarif OJK & Estimasi Premi */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-3">
            Tarif OJK Wilayah 1 & Estimasi Premi Motor di Batam
          </h2>
          <p className="text-[#475569] leading-relaxed mb-2">
            Batam termasuk dalam <strong className="text-[#0a1628]">Wilayah 1</strong> berdasarkan pembagian
            tarif OJK untuk asuransi kendaraan bermotor. Tarif ini ditetapkan OJK sebagai batas bawah dan batas
            atas yang harus dipatuhi seluruh perusahaan asuransi di Indonesia.
          </p>
          <p className="text-[#475569] text-sm mb-6 leading-relaxed">
            Wilayah 1 mencakup: Sumatera dan seluruh kepulauannya, termasuk Kepulauan Riau (Batam, Tanjung Pinang, Bintan).
          </p>

          <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0] shadow-sm mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#faf8f3] border-b border-[#e2e8f0]">
                  <th className="text-left px-5 py-3.5 font-display font-bold text-[#0a1628]">Kategori Harga Motor</th>
                  <th className="text-left px-5 py-3.5 font-display font-bold text-[#0a1628]">All Risk</th>
                  <th className="text-left px-5 py-3.5 font-display font-bold text-[#0a1628]">TLO</th>
                </tr>
              </thead>
              <tbody>
                {tarifOJK.map((row, i) => (
                  <tr key={row.kategori} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                    <td className="px-5 py-3 font-medium text-[#0a1628]">{row.kategori}</td>
                    <td className="px-5 py-3 text-[#475569]">{row.allRisk}</td>
                    <td className="px-5 py-3 text-[#475569]">{row.tlo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-display font-bold text-xl text-[#0a1628] mb-4">
            Ilustrasi Premi Motor Populer di Batam
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0] shadow-sm mb-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="gradient-navy">
                  <th className="text-left px-5 py-4 text-white/70 font-semibold">Tipe Motor</th>
                  <th className="text-left px-5 py-4 text-[#c9a84c] font-display font-bold">All Risk/Tahun</th>
                  <th className="text-left px-5 py-4 text-blue-300 font-display font-bold">TLO/Tahun</th>
                </tr>
              </thead>
              <tbody>
                {ilustrasiPremi.map((row, i) => (
                  <tr key={row.motor} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                    <td className="px-5 py-3 font-medium text-[#0a1628]">{row.motor}</td>
                    <td className="px-5 py-3 text-[#475569]">{row.allRisk}</td>
                    <td className="px-5 py-3 text-[#475569]">{row.tlo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#faf8f3] border border-[#e2e8f0] rounded-xl p-4 flex items-start gap-3">
            <Calculator className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[#475569] leading-relaxed">
              Angka di atas adalah <strong className="text-[#0a1628]">estimasi ilustrasi</strong> berdasarkan tarif OJK.
              Premi final dapat bervariasi tergantung perusahaan asuransi, profil pengemudi, dan add-on yang dipilih.{" "}
              <Link href="/kalkulator-premi-motor" className="text-[#1a4fa0] font-semibold hover:underline">
                Hitung premi motor Anda secara online →
              </Link>
            </p>
          </div>
        </section>

        {/* Section 4: Proses klaim */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-5">
            Proses Klaim Asuransi Motor di Batam
          </h2>
          <p className="text-[#475569] leading-relaxed mb-6">
            Proses klaim yang benar dimulai dari langkah pertama setelah insiden terjadi. Berikut yang perlu disiapkan:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {claimDocs.map((doc, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#e2e8f0]">
                <CheckCircle className="w-4 h-4 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[#475569]">{doc}</span>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-900 text-sm mb-1">Jangan lakukan ini setelah insiden</p>
                <ul className="text-amber-800 text-sm space-y-1">
                  <li>• Jangan memperbaiki motor sebelum disurvei adjuster (kecuali perbaikan darurat demi keselamatan)</li>
                  <li>• Jangan mengakui kesalahan kepada pihak ketiga tanpa koordinasi dengan asuransi</li>
                  <li>• Jangan terlambat melapor — batas waktu pelaporan biasanya 3×24 jam setelah kejadian</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
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
                <div className="px-5 pb-5 text-[#475569] text-sm leading-relaxed border-t border-[#e2e8f0] pt-4">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-xl text-[#0a1628] mb-5">Artikel & Halaman Terkait</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Kalkulator Premi Motor", href: "/kalkulator-premi-motor", desc: "Hitung estimasi premi motor Anda secara online" },
              { title: "Kalkulator Premi Mobil", href: "/kalkulator-premi-mobil", desc: "Estimasi premi kendaraan roda empat" },
              { title: "Perbedaan All Risk dan TLO", href: "/blog/perbedaan-all-risk-dan-tlo", desc: "Panduan lengkap memilih jenis polis kendaraan" },
              { title: "Asuransi Mobil Batam", href: "/asuransi-kendaraan/asuransi-mobil-batam", desc: "Perlindungan kendaraan roda empat di Batam" },
              { title: "Asuransi Dump Truck", href: "/asuransi-kendaraan/asuransi-dumptruck", desc: "Asuransi kendaraan niaga untuk proyek konstruksi" },
              { title: "Semua Produk Kendaraan", href: "/asuransi-kendaraan", desc: "Pillar page asuransi kendaraan Batam" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="group flex items-start gap-3 p-4 bg-[#faf8f3] rounded-xl border border-[#e2e8f0] hover:border-[#c9a84c]/50 hover:shadow-md transition-all">
                <Shield className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#0a1628] group-hover:text-[#1a4fa0] transition-colors text-sm">{link.title}</div>
                  <div className="text-[#475569] text-xs mt-0.5">{link.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="border-t border-[#e2e8f0] pt-8">
          <p className="text-[#94a3b8] text-xs leading-relaxed italic">
            Tarif premi dalam artikel ini mengacu pada ketentuan OJK untuk kendaraan bermotor Wilayah 1.
            Estimasi yang tercantum bersifat ilustrasi umum — premi aktual ditentukan oleh perusahaan asuransi
            berdasarkan profil risiko spesifik. Untuk penawaran akurat, konsultasikan langsung dengan tim kami.
          </p>
        </div>
      </article>

      <QuoteCard cluster="vehicle" />
    </>
  );
}

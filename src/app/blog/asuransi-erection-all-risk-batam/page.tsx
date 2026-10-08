import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import { Shield, Clock, CheckCircle, ArrowRight, AlertCircle } from "lucide-react";
import QuoteCard from "@/components/quote/QuoteCard";

 export const metadata: Metadata = generateSEO({
  title: "Panduan Memilih Asuransi EAR untuk Proyek Energi & Instalasi Mesin di Batam",
  description: "Bagaimana cara memilih asuransi Erection All Risk yang tepat untuk instalasi mesin pabrik dan proyek energi di Batam? Bandingkan EAR vs CAR, pahami cakupan testing & commissioning, dan tips menekan premi.",
  keywords: [
    "panduan memilih asuransi EAR Batam",
    "cara memilih erection all risk",
    "EAR vs CAR proyek energi",
    "asuransi pemasangan mesin Batam",
    "asuransi proyek energi Batam",
    "tips premi EAR Batam",
  ],
  canonical: "https://asuransibatam.com/blog/asuransi-erection-all-risk-batam",
  languages: {
      id: "https://asuransibatam.com/blog/asuransi-erection-all-risk-batam",
      // Belum ada versi EN artikel EAR ini — jangan isi field "en" sampai
      // artikel padanannya benar-benar dibuat (sebelumnya salah tertaut ke
      // excavator-and-bulldozer-insurance-batam, topik berbeda).
    },
});


const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asuransi Erection All Risk (EAR) Batam: Panduan untuk Instalasi Mesin & Proyek Energi",
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
      name: "Apa perbedaan utama antara EAR dan CAR?",
      acceptedAnswer: { "@type": "Answer", text: "CAR (Contractor's All Risk) dirancang untuk proyek konstruksi sipil — gedung, jembatan, jalan, bendungan. EAR (Erection All Risk) dirancang untuk pekerjaan pemasangan atau ereksi peralatan mekanis, listrik, dan elektronik — mesin pabrik, turbin, panel listrik, pipa industri. Keduanya adalah asuransi engineering, namun objek pertanggungan dan risiko yang dicakup berbeda." },
    },
    {
      "@type": "Question",
      name: "Apakah EAR mencakup kerusakan selama pengujian (testing & commissioning)?",
      acceptedAnswer: { "@type": "Answer", text: "Ya. Salah satu keunggulan polis EAR adalah cakupan selama periode testing & commissioning — fase paling kritis setelah pemasangan selesai. Kerusakan yang terjadi saat mesin pertama kali dijalankan dan diuji biasanya masih tercakup dalam polis EAR, dengan durasi yang disepakati (biasanya 30–90 hari setelah selesai instalasi)." },
    },
    {
      "@type": "Question",
      name: "Siapa yang membeli polis EAR — pemilik proyek atau kontraktor instalasi?",
      acceptedAnswer: { "@type": "Answer", text: "Bisa keduanya, tergantung struktur kontrak. Dalam banyak kasus, polis EAR dibeli atas nama gabungan (principal/employer + kontraktor instalasi + subkontraktor) dalam satu polis yang sering disebut 'project policy'. Ini lebih efisien dari sisi premi dan menghindari tumpang tindih klaim." },
    },
    {
      "@type": "Question",
      name: "Apakah EAR mencakup kerusakan pada mesin yang sudah terpasang sebelum proyek dimulai?",
      acceptedAnswer: { "@type": "Answer", text: "Tidak. EAR hanya menanggung peralatan dan mesin yang menjadi objek pekerjaan instalasi dalam proyek yang diasuransikan. Mesin existing yang sudah beroperasi sebelumnya perlu polis Machinery Breakdown yang terpisah." },
    },
    {
      "@type": "Question",
      name: "Berapa lama proses penerbitan polis EAR?",
      acceptedAnswer: { "@type": "Answer", text: "Untuk proyek dengan nilai kontrak di bawah Rp 50 miliar, polis EAR umumnya dapat diterbitkan dalam 3–5 hari kerja setelah dokumen lengkap. Proyek dengan nilai lebih besar memerlukan underwriting lebih mendalam dan bisa memakan waktu 7–14 hari." },
    },
  ],
};

const perbedaanEARCAR = [
  { aspek: "Objek utama", ear: "Mesin, peralatan mekanikal & elektrikal", car: "Struktur sipil — beton, baja, pondasi" },
  { aspek: "Jenis proyek", ear: "Instalasi turbin, boiler, panel listrik, pipa industri", car: "Gedung, jembatan, jalan, bendungan" },
  { aspek: "Risiko khas", ear: "Kesalahan pemasangan, short circuit, uji coba gagal", car: "Keruntuhan struktur, longsor, banjir proyek" },
  { aspek: "Testing & commissioning", ear: "✅ Tercakup (dengan endorsemen)", car: "❌ Umumnya tidak tercakup" },
  { aspek: "Machinery breakdown", ear: "✅ Bisa dikombinasikan", car: "❌ Tidak relevan" },
  { aspek: "Proyek campuran (sipil + mekanikal)", ear: "Perlu kombinasi EAR + CAR", car: "Perlu kombinasi CAR + EAR" },
];

const proyekBatam = [
  { icon: "⚡", title: "Instalasi Pembangkit & Gardu Listrik", desc: "PLN Batam dan Independent Power Producers (IPP) di Batam secara rutin melakukan proyek instalasi generator, trafo, dan panel distribusi di kawasan Sekupang dan Batam Centre. Semua tahap instalasi hingga commissioning tercakup dalam EAR.", kawasan: "Sekupang, Batam Centre" },
  { icon: "🏭", title: "Pemasangan Mesin Pabrik", desc: "Ekspansi pabrik di kawasan Muka Kuning, Kabil, dan Batamindo seringkali melibatkan impor mesin produksi dari Singapura, Jepang, atau Korea yang perlu dipasang oleh teknisi spesialis. Proses unboxing, alignment, dan commissioning semuanya berisiko.", kawasan: "Muka Kuning, Kabil, Batamindo" },
  { icon: "🚢", title: "Instalasi Peralatan Galangan Kapal", desc: "Galangan kapal di Batu Ampar secara reguler memasang crane, dry dock equipment, dan sistem propulsi kapal. EAR memberikan perlindungan menyeluruh dari pemasangan hingga uji operasi.", kawasan: "Batu Ampar" },
  { icon: "🔧", title: "Sistem Pipa Industri (Piping)", desc: "Proyek pemasangan sistem perpipaan untuk gas, kimia, atau steam di kawasan industri Batam memerlukan EAR yang mencakup risiko kebocoran, pressure test, dan kerusakan akibat kesalahan teknis selama instalasi.", kawasan: "Kabil, Nongsa" },
];

const coverageItems = [
  { covered: true, label: "Kerusakan fisik selama instalasi", desc: "Akibat kecelakaan, jatuh, tabrakan, atau kejadian tiba-tiba selama proses pemasangan" },
  { covered: true, label: "Bencana alam", desc: "Banjir, angin topan, petir, dan bencana alam lain yang merusak peralatan yang sedang dipasang" },
  { covered: true, label: "Kesalahan instalasi (error in erection)", desc: "Kerusakan akibat kesalahan teknis dalam proses pemasangan — dengan batasan tertentu" },
  { covered: true, label: "Testing & commissioning", desc: "Kerusakan selama fase uji coba pertama, dalam periode yang disepakati setelah instalasi selesai" },
  { covered: true, label: "Third Party Liability (TPL)", desc: "Tuntutan dari pihak ketiga atas cedera atau kerusakan properti akibat aktivitas instalasi" },
  { covered: false, label: "Keausan normal & perawatan rutin", desc: "Kerusakan bertahap akibat pemakaian biasa bukan objek EAR" },
  { covered: false, label: "Kerusakan desain (faulty design)", desc: "Biaya perbaikan akibat kesalahan desain engineering — perlu polis Professional Indemnity terpisah" },
  { covered: false, label: "Peralatan existing sebelum proyek", desc: "Mesin yang sudah beroperasi sebelum proyek instalasi dimulai tidak tercakup" },
];

const premiIlustrasi = [
  { proyek: "Instalasi mesin pabrik Rp 5 miliar", ear: "Rp 15–35 juta", durasi: "6 bulan" },
  { proyek: "Pemasangan panel listrik Rp 2 miliar", ear: "Rp 6–14 juta", durasi: "3 bulan" },
  { proyek: "Instalasi turbin pembangkit Rp 50 miliar", ear: "Rp 150–350 juta", durasi: "18 bulan" },
  { proyek: "Sistem piping industri Rp 10 miliar", ear: "Rp 30–70 juta", durasi: "12 bulan" },
];

const faqs = [
  { q: "Apa perbedaan utama antara EAR dan CAR?", a: "CAR dirancang untuk proyek konstruksi sipil — gedung, jembatan, jalan. EAR dirancang untuk pekerjaan pemasangan atau ereksi peralatan mekanis, listrik, dan elektronik — mesin pabrik, turbin, panel listrik, pipa industri. Keduanya adalah asuransi engineering, namun objek pertanggungan berbeda." },
  { q: "Apakah EAR mencakup kerusakan selama testing & commissioning?", a: "Ya. Salah satu keunggulan polis EAR adalah cakupan selama periode testing & commissioning — fase paling kritis setelah pemasangan selesai. Kerusakan saat mesin pertama kali dijalankan dan diuji biasanya masih tercakup, dengan durasi yang disepakati (biasanya 30–90 hari)." },
  { q: "Siapa yang membeli polis EAR — pemilik proyek atau kontraktor instalasi?", a: "Bisa keduanya, tergantung struktur kontrak. Dalam banyak kasus, polis EAR dibeli atas nama gabungan (employer + kontraktor + subkontraktor) dalam satu 'project policy'. Ini lebih efisien dari sisi premi dan menghindari tumpang tindih klaim." },
  { q: "Apakah EAR mencakup mesin yang sudah terpasang sebelum proyek dimulai?", a: "Tidak. EAR hanya menanggung peralatan yang menjadi objek pekerjaan instalasi dalam proyek yang diasuransikan. Mesin existing yang sudah beroperasi perlu polis Machinery Breakdown yang terpisah." },
  { q: "Berapa lama proses penerbitan polis EAR?", a: "Untuk proyek di bawah Rp 50 miliar, polis EAR umumnya dapat diterbitkan dalam 3–5 hari kerja setelah dokumen lengkap. Proyek lebih besar memerlukan underwriting lebih mendalam dan bisa memakan 7–14 hari." },
];

const breadcrumbListSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://asuransibatam.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://asuransibatam.com/blog" },
    { "@type": "ListItem", position: 3, name: "Engineering", item: "https://asuransibatam.com/asuransi-engineering" },
    { "@type": "ListItem", position: 4, name: "Erection All Risk Batam", item: "https://asuransibatam.com/blog/asuransi-erection-all-risk-batam" },
  ],
};

export default function AsuransiErectionAllRiskBatamPage() {
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
            <Link href="/asuransi-engineering" className="hover:text-[#c9a84c] transition-colors">Engineering</Link>
            <span>/</span>
            <span className="text-white/70">Erection All Risk Batam</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a84c]/20 border border-[#c9a84c]/30 rounded-full text-[#c9a84c] text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            Asuransi Engineering
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
            Asuransi Erection All Risk<br />
            <span className="text-gradient-gold">(EAR) di Batam:</span><br />
            Instalasi Mesin & Proyek Energi
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-3xl">
            Panduan lengkap EAR untuk pabrik dan proyek energi di Batam — perbedaan dengan CAR,
            cakupan testing & commissioning, estimasi premi, dan proyek yang wajib menggunakannya.
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

        {/* Intro */}
        <div className="bg-[#faf8f3] border-l-4 border-[#c9a84c] rounded-r-2xl p-6 mb-12">
          <p className="text-[#0a1628] leading-relaxed">
            Sebuah pabrik elektronik di kawasan <strong>Muka Kuning</strong> mengimpor mesin produksi
            terbaru senilai Rp 12 miliar dari Jepang. Proses instalasi melibatkan tim teknisi selama 3 bulan.
            Pada hari ke-61, saat proses alignment mesin terakhir, sebuah kesalahan prosedur menyebabkan
            kerusakan pada sistem gear yang baru terpasang. Biaya perbaikan: <strong>Rp 1,8 miliar</strong>.
          </p>
          <p className="text-[#475569] mt-3 text-sm leading-relaxed">
            Polis EAR yang mereka miliki menanggung penuh insiden ini, termasuk biaya mendatangkan kembali
            teknisi dari Jepang. Tanpa EAR, seluruh biaya jatuh ke tangan pemilik pabrik.
          </p>
        </div>

        {/* Section 1: EAR vs CAR */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-3">
            EAR vs CAR: Apa Bedanya dan Kapan Masing-Masing Dipakai?
          </h2>
          <p className="text-[#475569] leading-relaxed mb-6">
            Ini adalah sumber kebingungan paling umum di industri engineering insurance. Keduanya termasuk
            asuransi engineering, namun peruntukannya berbeda secara fundamental. Lihat juga artikel kami
            tentang{" "}
            <Link href="/blog/perbedaan-car-dan-ear" className="text-[#1a4fa0] font-semibold hover:underline">
              perbedaan lengkap CAR dan EAR
            </Link>.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0] shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="gradient-navy">
                  <th className="text-left px-5 py-4 text-white/70 font-semibold">Aspek</th>
                  <th className="text-left px-5 py-4 text-[#c9a84c] font-display font-bold">EAR</th>
                  <th className="text-left px-5 py-4 text-blue-300 font-display font-bold">CAR</th>
                </tr>
              </thead>
              <tbody>
                {perbedaanEARCAR.map((row, i) => (
                  <tr key={row.aspek} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                    <td className="px-5 py-3.5 font-medium text-[#0a1628]">{row.aspek}</td>
                    <td className="px-5 py-3.5 text-[#475569]">{row.ear}</td>
                    <td className="px-5 py-3.5 text-[#475569]">{row.car}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Proyek di Batam */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-3">
            Proyek di Batam yang Wajib Menggunakan EAR
          </h2>
          <p className="text-[#475569] leading-relaxed mb-8">
            Dengan ekosistem industri yang padat dan proyek energi yang terus berkembang, Batam adalah
            salah satu kota dengan permintaan EAR tertinggi di Sumatera.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {proyekBatam.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl border-2 border-[#e2e8f0] p-5 hover:border-[#c9a84c]/50 hover:shadow-lg transition-all card-hover">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-display font-bold text-[#0a1628] mb-2 text-sm">{p.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed mb-3">{p.desc}</p>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#faf8f3] rounded-full text-xs text-[#1a4fa0] font-semibold border border-[#e2e8f0]">
                  📍 {p.kawasan}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Coverage */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-6">
            Cakupan Perlindungan Polis EAR
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coverageItems.map((item) => (
              <div key={item.label} className={`rounded-2xl p-5 border ${item.covered ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${item.covered ? "bg-green-500" : "bg-red-500"}`}>
                    <span className="text-white text-xs font-bold">{item.covered ? "✓" : "✗"}</span>
                  </div>
                  <div>
                    <p className={`font-display font-bold text-sm mb-1 ${item.covered ? "text-green-900" : "text-red-900"}`}>{item.label}</p>
                    <p className={`text-xs leading-relaxed ${item.covered ? "text-green-800" : "text-red-800"}`}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Premi */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-5">
            Estimasi Premi EAR untuk Proyek di Batam
          </h2>
          <p className="text-[#475569] leading-relaxed mb-6">
            Premi EAR dihitung berdasarkan nilai kontrak instalasi, jenis peralatan, durasi proyek,
            dan perluasan yang dipilih (testing & commissioning, TPL, dll.).
          </p>
          <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0] shadow-sm mb-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="gradient-navy">
                  <th className="text-left px-5 py-4 text-white/70 font-semibold">Jenis Proyek</th>
                  <th className="text-left px-5 py-4 text-[#c9a84c] font-display font-bold">Estimasi Premi EAR</th>
                  <th className="text-left px-5 py-4 text-blue-300 font-display font-bold">Durasi Tipikal</th>
                </tr>
              </thead>
              <tbody>
                {premiIlustrasi.map((row, i) => (
                  <tr key={row.proyek} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                    <td className="px-5 py-3 font-medium text-[#0a1628]">{row.proyek}</td>
                    <td className="px-5 py-3 text-[#475569]">{row.ear}</td>
                    <td className="px-5 py-3 text-[#475569]">{row.durasi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[#94a3b8] text-xs">* Ilustrasi umum. Premi aktual ditentukan setelah underwriting oleh perusahaan asuransi.</p>
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
              { title: "Erection All Risk (Sub-page)", href: "/asuransi-engineering/erection-all-risk", desc: "Halaman produk EAR Asuransi Batam" },
              { title: "Contractor's All Risk (CAR)", href: "/asuransi-engineering/contractor-all-risk", desc: "Asuransi untuk proyek konstruksi sipil" },
              { title: "Perbedaan CAR dan EAR", href: "/blog/perbedaan-car-dan-ear", desc: "Panduan memilih antara CAR dan EAR" },
              { title: "Asuransi Proyek Konstruksi Batam", href: "/blog/asuransi-proyek-konstruksi-batam", desc: "Overview asuransi engineering untuk proyek di Batam" },
              { title: "Asuransi Engineering", href: "/asuransi-engineering", desc: "Semua produk engineering insurance di Batam" },
              { title: "Asuransi Alat Berat", href: "/asuransi-machinery/asuransi-alat-berat", desc: "Perlindungan mesin dan alat berat pasca instalasi" },
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
            Artikel ini disusun berdasarkan praktik pasar asuransi engineering Indonesia dan pengalaman mendampingi
            proyek industri di Batam. Cakupan dan premi aktual dapat berbeda tergantung underwriter dan kondisi proyek.
            Untuk analisis risiko dan penawaran polis yang spesifik, konsultasikan langsung dengan tim kami.
          </p>
        </div>
      </article>
      <QuoteCard cluster="engineering" lang="id" />
    </>
  );
}

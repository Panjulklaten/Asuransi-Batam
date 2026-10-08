import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import { Shield, Clock, CheckCircle, AlertCircle } from "lucide-react";
import QuoteCard from "@/components/quote/QuoteCard";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Gudang Kawasan Industri Muka Kuning & Batam: Panduan Lengkap 2026",
  description: "Panduan asuransi gudang untuk kawasan industri Muka Kuning, Kabil, dan Batam. Risiko khusus gudang logistik dan pabrik, jenis perlindungan, syarat BP Batam, estimasi premi, dan tips klaim.",
  keywords: [
    "asuransi gudang Muka Kuning",
    "asuransi properti kawasan industri Batam",
    "asuransi gudang Batam",
    "asuransi gudang logistik Batam",
    "asuransi pabrik Batam",
    "asuransi properti komersial Batam",
  ],
  canonical: "https://asuransibatam.com/blog/asuransi-gudang-kawasan-industri-muka-kuning-batam",
  languages: { id: "https://asuransibatam.com/blog/asuransi-gudang-kawasan-industri-muka-kuning-batam" },
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asuransi Gudang Kawasan Industri Muka Kuning & Batam: Panduan Lengkap 2026",
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
      name: "Apakah asuransi gudang diwajibkan oleh BP Batam?",
      acceptedAnswer: { "@type": "Answer", text: "BP Batam tidak secara eksplisit mewajibkan asuransi properti dalam regulasi umumnya, namun banyak perjanjian sewa lahan kawasan industri (HGB atau HPL dari BP Batam) menyertakan klausul kewajiban asuransi properti. Selain itu, bank atau lembaga pembiayaan yang memberikan kredit untuk pembangunan gudang hampir selalu mensyaratkan asuransi kebakaran sebagai agunan." },
    },
    {
      "@type": "Question",
      name: "Apa perbedaan asuransi gudang dan asuransi cargo/marine?",
      acceptedAnswer: { "@type": "Answer", text: "Asuransi gudang (properti) melindungi struktur bangunan gudang dan isinya saat berada di dalam gudang. Asuransi marine cargo melindungi barang selama proses pengiriman. Untuk bisnis logistik di Batam yang menangani barang ekspor-impor, kedua polis ini biasanya diperlukan bersamaan — cargo insurance untuk barang dalam transit, properti untuk barang di gudang." },
    },
    {
      "@type": "Question",
      name: "Apakah stok barang di dalam gudang otomatis tercakup dalam polis properti?",
      acceptedAnswer: { "@type": "Answer", text: "Tidak otomatis. Polis properti standar untuk bangunan gudang mencakup struktur fisik gedung. Untuk melindungi stok barang di dalamnya, diperlukan perluasan 'isi bangunan' atau polis terpisah untuk konten/inventori. Deklarasikan nilai stok secara akurat agar tidak terjadi underinsurance saat klaim." },
    },
    {
      "@type": "Question",
      name: "Bagaimana jika gudang menyimpan barang berbahaya (kategori B3)?",
      acceptedAnswer: { "@type": "Answer", text: "Gudang yang menyimpan bahan kimia berbahaya, mudah terbakar, atau limbah B3 masuk kategori risiko tinggi. Premi asuransi propertinya lebih tinggi dan biasanya memerlukan survei fisik oleh underwriter sebelum polis diterbitkan. Selain itu, diperlukan polis Liability B3 terpisah untuk risiko pencemaran." },
    },
    {
      "@type": "Question",
      name: "Apakah kerusakan gudang akibat bencana banjir tercakup?",
      acceptedAnswer: { "@type": "Answer", text: "Banjir tidak selalu otomatis tercakup dalam polis kebakaran standar (PSAKI). Diperlukan endorsemen perluasan FLEXAS (Fire, Lightning, Explosion, Aircraft impact, Smoke) + bencana alam untuk menanggung banjir. Untuk gudang di kawasan industri Batam yang beberapa areanya rawan genangan, endorsemen ini sangat disarankan." },
    },
  ],
};

const risikoKhusus = [
  { icon: "🔥", title: "Risiko kebakaran industri", desc: "Gudang di kawasan industri menyimpan bahan baku, produk jadi, atau bahan kemasan yang sangat mudah terbakar. Satu insiden kebakaran bisa merembet ke unit gudang lain dalam satu kawasan — seperti yang pernah terjadi di Muka Kuning." },
  { icon: "🌊", title: "Banjir dan genangan", desc: "Beberapa titik di kawasan industri Batam — termasuk bagian tertentu Muka Kuning dan Bengkong — rentan terhadap genangan air hujan intensitas tinggi yang bisa merusak stok di lantai gudang." },
  { icon: "🚚", title: "Kerusakan akibat aktivitas bongkar muat", desc: "Operasional forklift, truk kontainer, dan aktivitas bongkar muat yang intens meningkatkan risiko kerusakan struktural pada pintu gudang, lantai, dan dinding — terutama di gudang logistik yang beroperasi 24 jam." },
  { icon: "⚡", title: "Kerusakan instalasi listrik", desc: "Gudang industri dengan kebutuhan daya besar (mesin pendingin, kompressor, pencahayaan) memiliki risiko korsleting dan kerusakan instalasi yang lebih tinggi dari properti komersial biasa." },
  { icon: "🏗️", title: "Kerusakan akibat proyek sekitar", desc: "Dengan aktivitas konstruksi yang masif di Batam, gudang di dekat proyek pembangunan berisiko mengalami kerusakan akibat getaran, jatuhnya material, atau kesalahan operasional alat berat." },
  { icon: "📦", title: "Risiko konten dan stok", desc: "Nilai stok di dalam gudang — bahan baku elektronik, komponen mesin, produk ekspor — seringkali jauh melebihi nilai bangunan gudang itu sendiri. Tanpa perlindungan konten, kerugian bisa sangat besar." },
];

const jenisProteksi = [
  { produk: "PSAKI (Polis Standar Asuransi Kebakaran Indonesia)", cakupan: "Kebakaran, sambaran petir, ledakan, kejatuhan pesawat, asap", wajib: true },
  { produk: "FLEXAS + Perluasan Bencana Alam", cakupan: "Ditambah: banjir, angin topan, gempa bumi, tanah longsor", wajib: false },
  { produk: "Perluasan Isi Bangunan / Konten", cakupan: "Stok barang, mesin, peralatan operasional di dalam gudang", wajib: false },
  { produk: "Business Interruption (BI)", cakupan: "Kerugian pendapatan selama masa perbaikan setelah klaim", wajib: false },
  { produk: "Liability B3 (jika menyimpan B3)", cakupan: "Pencemaran lingkungan dari bahan berbahaya di gudang", wajib: false },
  { produk: "Public Liability", cakupan: "Tuntutan pihak ketiga akibat operasional gudang", wajib: false },
];

const kawasanIndustri = [
  { nama: "Muka Kuning", karakteristik: "Kawasan industri terbesar di Batam. Dominasi pabrik elektronik dan manufaktur. Gudang bahan baku dan produk jadi dengan perputaran tinggi. Beberapa area rentan genangan." },
  { nama: "Kabil", karakteristik: "Kawasan industri berat — galangan kapal, pengolahan logam. Gudang cenderung menyimpan material B3. Risiko lebih tinggi → premi lebih tinggi, namun perlindungan mutlak diperlukan." },
  { nama: "Batamindo (Mukakuning)", karakteristik: "Kawasan industrial estate yang sudah mapan dengan standar keamanan tinggi. Tenant mayoritas perusahaan multinasional yang mewajibkan asuransi properti sebagai syarat operasional." },
  { nama: "Sekupang & Batu Ampar", karakteristik: "Kawasan gudang logistik dekat pelabuhan. Volume perputaran barang sangat tinggi (ekspor-impor). Risiko operasional bongkar muat dan kebakaran dominan." },
  { nama: "Bengkong & Batam Centre", karakteristik: "Campuran gudang komersial dan ruko. Risiko kebakaran dari aktivitas sekitar. Beberapa titik rawan banjir dari drainase kota yang kurang memadai." },
];

const premiIlustrasi = [
  { gudang: "Gudang logistik 1.000 m² (nilai bangunan Rp 3 M)", premi: "Rp 6–12 juta/thn", catatan: "PSAKI + bencana alam" },
  { gudang: "Gudang pabrik 3.000 m² (nilai Rp 10 M)", premi: "Rp 20–40 juta/thn", catatan: "PSAKI + konten + BI" },
  { gudang: "Gudang cold storage (nilai Rp 8 M)", premi: "Rp 24–48 juta/thn", catatan: "Risiko lebih tinggi (listrik intensif)" },
  { gudang: "Gudang bahan kimia (nilai Rp 5 M)", premi: "Rp 25–60 juta/thn", catatan: "Risiko tinggi, survei wajib" },
];

const faqs = [
  { q: "Apakah asuransi gudang diwajibkan oleh BP Batam?", a: "BP Batam tidak secara eksplisit mewajibkan dalam regulasi umumnya, namun banyak perjanjian sewa lahan kawasan industri menyertakan klausul kewajiban asuransi properti. Bank atau lembaga pembiayaan yang memberikan kredit untuk pembangunan gudang hampir selalu mensyaratkan asuransi kebakaran sebagai agunan." },
  { q: "Apa perbedaan asuransi gudang dan asuransi cargo/marine?", a: "Asuransi gudang (properti) melindungi struktur bangunan dan isinya saat berada di dalam gudang. Asuransi marine cargo melindungi barang selama pengiriman. Untuk bisnis logistik di Batam yang menangani barang ekspor-impor, kedua polis biasanya diperlukan bersamaan." },
  { q: "Apakah stok barang di dalam gudang otomatis tercakup dalam polis properti?", a: "Tidak otomatis. Polis properti standar mencakup struktur fisik gedung. Untuk melindungi stok barang, diperlukan perluasan 'isi bangunan' atau polis terpisah. Deklarasikan nilai stok secara akurat agar tidak terjadi underinsurance saat klaim." },
  { q: "Bagaimana jika gudang menyimpan barang berbahaya (kategori B3)?", a: "Gudang yang menyimpan bahan kimia berbahaya, mudah terbakar, atau limbah B3 masuk kategori risiko tinggi. Premi lebih tinggi dan biasanya memerlukan survei fisik oleh underwriter. Selain itu, diperlukan polis Liability B3 terpisah untuk risiko pencemaran." },
  { q: "Apakah kerusakan gudang akibat banjir tercakup?", a: "Banjir tidak otomatis tercakup dalam polis kebakaran standar (PSAKI). Diperlukan endorsemen perluasan FLEXAS + bencana alam. Untuk gudang di kawasan industri Batam yang beberapa areanya rawan genangan, endorsemen ini sangat disarankan." },
];

const breadcrumbListSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://asuransibatam.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://asuransibatam.com/blog" },
    { "@type": "ListItem", position: 3, name: "Properti", item: "https://asuransibatam.com/asuransi-properti" },
    { "@type": "ListItem", position: 4, name: "Asuransi Gudang Muka Kuning", item: "https://asuransibatam.com/blog/asuransi-gudang-kawasan-industri-muka-kuning-batam" },
  ],
};

export default function AsuransiGudangMukaKuningBatamPage() {
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
            <Link href="/asuransi-properti" className="hover:text-[#c9a84c] transition-colors">Properti</Link>
            <span>/</span>
            <span className="text-white/70">Asuransi Gudang Muka Kuning</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a84c]/20 border border-[#c9a84c]/30 rounded-full text-[#c9a84c] text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            Asuransi Properti
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
            Asuransi Gudang Kawasan Industri<br />
            <span className="text-gradient-gold">Muka Kuning & Batam:</span><br />
            Panduan Lengkap 2026
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-3xl">
            Risiko spesifik gudang industri di Batam, jenis perlindungan yang dibutuhkan, estimasi premi
            per kawasan, dan tips memastikan klaim Anda tidak ditolak.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 29 Mei 2026</span>
            <span>•</span>
            <span>Tim Asuransi Batam</span>
            <span>•</span>
            <span>±11 menit baca</span>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Intro */}
        <div className="bg-[#faf8f3] border-l-4 border-[#c9a84c] rounded-r-2xl p-6 mb-12">
          <p className="text-[#0a1628] leading-relaxed">
            Sebuah gudang logistik di kawasan <strong>Muka Kuning</strong> terbakar pada dini hari akibat
            korsleting pada panel listrik. Dalam waktu dua jam, struktur bangunan dan stok produk elektronik
            senilai lebih dari <strong>Rp 15 miliar</strong> ludes. Penyelidikan menunjukkan gudang tersebut
            hanya memiliki polis kebakaran standar tanpa perluasan konten — artinya hanya bangunannya
            yang diganti, sementara stok Rp 12 miliar tidak ditanggung.
          </p>
          <p className="text-[#475569] mt-3 text-sm leading-relaxed">
            Ini adalah kesalahan paling umum dalam asuransi gudang: hanya melindungi bangunan, lupa
            melindungi isi gudang yang nilainya bisa jauh lebih besar.
          </p>
        </div>

        {/* Section 1: Risiko */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-5">
            Risiko Khusus Gudang di Kawasan Industri Batam
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {risikoKhusus.map((r) => (
              <div key={r.title} className="bg-white rounded-2xl border-2 border-[#e2e8f0] p-5 hover:border-[#c9a84c]/50 hover:shadow-lg transition-all card-hover">
                <div className="text-3xl mb-3">{r.icon}</div>
                <h3 className="font-display font-bold text-[#0a1628] mb-2 text-sm">{r.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Profil per kawasan */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-5">
            Profil Risiko per Kawasan Industri di Batam
          </h2>
          <p className="text-[#475569] leading-relaxed mb-6">
            Setiap kawasan industri di Batam memiliki karakteristik risiko yang berbeda.
            Memahami profil kawasan membantu menentukan jenis endorsemen yang diperlukan:
          </p>
          <div className="space-y-4">
            {kawasanIndustri.map((k) => (
              <div key={k.nama} className="bg-white rounded-2xl border border-[#e2e8f0] p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <span className="inline-flex px-3 py-1.5 gradient-navy rounded-lg font-display font-bold text-[#c9a84c] text-xs whitespace-nowrap flex-shrink-0">
                    📍 {k.nama}
                  </span>
                  <p className="text-[#475569] text-sm leading-relaxed">{k.karakteristik}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Jenis proteksi */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-5">
            Jenis Perlindungan yang Dibutuhkan Gudang Industri
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0] shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="gradient-navy">
                  <th className="text-left px-5 py-4 text-white/70 font-semibold">Produk</th>
                  <th className="text-left px-5 py-4 text-[#c9a84c] font-display font-bold">Cakupan</th>
                  <th className="text-center px-5 py-4 text-blue-300 font-display font-bold">Status</th>
                </tr>
              </thead>
              <tbody>
                {jenisProteksi.map((row, i) => (
                  <tr key={row.produk} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                    <td className="px-5 py-3.5 font-medium text-[#0a1628] text-xs">{row.produk}</td>
                    <td className="px-5 py-3.5 text-[#475569] text-xs">{row.cakupan}</td>
                    <td className="px-5 py-3.5 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${row.wajib ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"}`}>
                        {row.wajib ? "Dasar" : "Disarankan"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Premi */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-5">
            Estimasi Premi Asuransi Gudang di Batam
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0] shadow-sm mb-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="gradient-navy">
                  <th className="text-left px-5 py-4 text-white/70 font-semibold">Jenis Gudang</th>
                  <th className="text-left px-5 py-4 text-[#c9a84c] font-display font-bold">Estimasi Premi/Thn</th>
                  <th className="text-left px-5 py-4 text-blue-300 font-display font-bold">Cakupan Tipikal</th>
                </tr>
              </thead>
              <tbody>
                {premiIlustrasi.map((row, i) => (
                  <tr key={row.gudang} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                    <td className="px-5 py-3 font-medium text-[#0a1628] text-xs">{row.gudang}</td>
                    <td className="px-5 py-3 text-[#475569]">{row.premi}</td>
                    <td className="px-5 py-3 text-[#475569] text-xs">{row.catatan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-900 text-sm mb-1">Hindari Underinsurance</p>
                <p className="text-amber-800 text-sm leading-relaxed">
                  Kesalahan paling umum: mendeklarasikan nilai bangunan terlalu rendah untuk menghemat premi.
                  Jika terjadi klaim dan nilai pertanggungan lebih rendah dari nilai sebenarnya, asuransi
                  hanya membayar secara proporsional (prinsip <em>average clause</em>). Deklarasikan nilai
                  bangunan dan konten secara akurat.
                </p>
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
              { title: "Asuransi Gudang Batam (Sub-page)", href: "/asuransi-properti/asuransi-gudang-batam", desc: "Halaman produk asuransi gudang dan properti komersial" },
              { title: "Asuransi Properti Komersial Batam", href: "/blog/asuransi-properti-komersial-batam", desc: "Panduan lengkap properti komersial di Batam" },
              { title: "Asuransi Pabrik Kawasan Industri", href: "/asuransi-properti/asuransi-pabrik-kawasan-industri-batam", desc: "Perlindungan untuk fasilitas pabrik di Batam" },
              { title: "Asuransi Properti", href: "/asuransi-properti", desc: "Semua produk asuransi properti — pillar page" },
              { title: "Asuransi Limbah B3", href: "/asuransi-liability/asuransi-limbah-b3", desc: "Untuk gudang yang menyimpan bahan kimia berbahaya" },
              { title: "Cara Klaim Asuransi Kebakaran", href: "/blog/cara-klaim-asuransi-kebakaran-rumah", desc: "Panduan prosedur klaim kebakaran properti" },
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
            Artikel ini disusun berdasarkan Polis Standar Asuransi Kebakaran Indonesia (PSAKI), ketentuan OJK
            tentang asuransi properti, dan pengalaman praktis melayani klien industri di kawasan Batam.
            Estimasi premi bersifat ilustrasi umum. Untuk penilaian risiko dan penawaran akurat berdasarkan
            kondisi spesifik gudang Anda, konsultasikan langsung dengan tim kami.
          </p>
        </div>
      </article>
      <QuoteCard cluster="property" />
    </>
  );
}

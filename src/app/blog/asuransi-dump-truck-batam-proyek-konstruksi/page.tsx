import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import { Shield, Clock, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import QuoteCard from "@/components/quote/QuoteCard";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Dump Truck Batam untuk Proyek Konstruksi: Premi, Risiko & Proses Klaim",
  description: "Panduan lengkap asuransi dump truck di Batam untuk proyek konstruksi dan infrastruktur. Risiko khusus operasional dump truck, jenis perlindungan, estimasi premi, dan tips klaim.",
  keywords: [
    "asuransi dump truck Batam",
    "asuransi dump truck proyek konstruksi",
    "asuransi kendaraan niaga Batam",
    "premi asuransi dump truck",
    "asuransi truk Batam",
    "asuransi alat berat kendaraan Batam",
  ],
  canonical: "https://asuransibatam.com/blog/asuransi-dump-truck-batam-proyek-konstruksi",
  languages: { id: "https://asuransibatam.com/blog/asuransi-dump-truck-batam-proyek-konstruksi" },
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asuransi Dump Truck Batam untuk Proyek Konstruksi: Premi, Risiko & Proses Klaim",
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
      name: "Apakah asuransi dump truck termasuk kategori kendaraan komersial atau alat berat?",
      acceptedAnswer: { "@type": "Answer", text: "Dump truck dikategorikan sebagai kendaraan bermotor komersial (bukan alat berat) dalam konteks asuransi kendaraan standar. Polis yang digunakan adalah asuransi kendaraan bermotor dengan perluasan untuk penggunaan komersial berat. Berbeda dengan excavator atau bulldozer yang masuk kategori Heavy Equipment dan diasuransikan dengan polis Machinery Breakdown / CAR." },
    },
    {
      "@type": "Question",
      name: "Apakah kerusakan akibat muatan berlebih (overloading) ditanggung asuransi?",
      acceptedAnswer: { "@type": "Answer", text: "Umumnya tidak. Kerusakan yang timbul akibat penggunaan melebihi kapasitas yang diizinkan merupakan pelanggaran spesifikasi kendaraan dan menjadi dasar penolakan klaim. Pastikan operasional dump truck selalu sesuai kapasitas yang tercantum dalam STNK." },
    },
    {
      "@type": "Question",
      name: "Berapa estimasi premi asuransi dump truck all risk di Batam?",
      acceptedAnswer: { "@type": "Answer", text: "Dump truck masuk kategori kendaraan komersial dengan tarif OJK yang berbeda dari kendaraan pribadi. Estimasi premi berkisar antara 2,5%–3,5% dari harga kendaraan per tahun untuk all risk, tergantung tahun kendaraan, jenis penggunaan, dan rekam klaim. Untuk dump truck seharga Rp 800 juta, premi all risk bisa berkisar Rp 20–28 juta per tahun." },
    },
    {
      "@type": "Question",
      name: "Apakah satu polis bisa menanggung lebih dari satu unit dump truck?",
      acceptedAnswer: { "@type": "Answer", text: "Ya. Polis armada (fleet policy) memungkinkan satu polis menanggung beberapa unit sekaligus dengan premi gabungan yang seringkali lebih kompetitif dibanding polis per unit. Sangat direkomendasikan untuk kontraktor dengan 3 unit dump truck atau lebih." },
    },
    {
      "@type": "Question",
      name: "Apakah dump truck yang digunakan untuk proyek pemerintah perlu asuransi khusus?",
      acceptedAnswer: { "@type": "Answer", text: "Proyek pemerintah seringkali mensyaratkan bukti asuransi kendaraan aktif dalam dokumen tender. Selain asuransi kendaraan, kontraktor juga perlu mempersiapkan surety bond (jaminan pelaksanaan) dan asuransi public liability untuk kegiatan proyek secara keseluruhan." },
    },
  ],
};

const risikoOperasional = [
  { icon: "⚠️", title: "Jalan proyek dan medan berat", desc: "Rute menuju proyek di kawasan Nongsa, Kabil, dan pengembangan Batam utara seringkali melalui jalan tanah, berbatu, atau tanjakan curam yang meningkatkan risiko kerusakan suspensi, ban, dan sasis." },
  { icon: "🔄", title: "Intensitas operasional tinggi", desc: "Dump truck proyek beroperasi rata-rata 10–14 jam per hari, jauh di atas kendaraan pribadi. Intensitas ini mempercepat keausan komponen dan meningkatkan probabilitas kerusakan mekanis." },
  { icon: "💥", title: "Risiko tertabrak atau menabrak", desc: "Di kawasan proyek yang padat, risiko tabrakan antar kendaraan berat — excavator, wheel loader, forklift — cukup tinggi. Kerusakan dalam kecelakaan seperti ini bisa mencapai ratusan juta rupiah." },
  { icon: "🌊", title: "Muatan dan kerusakan pihak ketiga", desc: "Material yang tercecer dari bak dump truck atau kecelakaan di jalan umum bisa menyebabkan kerusakan kendaraan lain atau cedera pejalan kaki — risiko yang memerlukan perlindungan public liability sekaligus." },
];

const coverageItems = [
  { covered: true, label: "Kerusakan akibat kecelakaan lalu lintas", desc: "Tabrakan, terbalik, atau kejadian tidak terduga di jalan umum maupun area proyek" },
  { covered: true, label: "Kehilangan akibat pencurian", desc: "Termasuk pencurian seluruh unit atau komponen vital (aki, ban, mesin)" },
  { covered: true, label: "Kerusakan akibat bencana alam", desc: "Banjir, angin topan, dan bencana alam lain yang tercakup dalam polis atau endorsemen" },
  { covered: true, label: "Tanggung jawab pihak ketiga (TPL)", desc: "Ganti rugi kepada pihak lain yang dirugikan akibat operasional dump truck Anda" },
  { covered: true, label: "Perluasan area proyek", desc: "Polis dapat diperluas untuk menanggung kerusakan saat dump truck beroperasi di dalam area proyek (tidak hanya di jalan umum)" },
  { covered: false, label: "Overloading / muatan berlebih", desc: "Kerusakan akibat penggunaan melebihi kapasitas yang diizinkan" },
  { covered: false, label: "Keausan normal (wear & tear)", desc: "Kerusakan akibat pemakaian normal yang bukan merupakan kejadian tiba-tiba" },
  { covered: false, label: "Pengemudi tanpa SIM yang valid", desc: "Klaim ditolak jika pengemudi tidak memiliki SIM B2 yang masih berlaku saat kejadian" },
];

const premiEstimasi = [
  { unit: "Dump truck 8 ton (Rp 400 juta)", allRisk: "Rp 10–14 juta/thn", tlo: "Rp 2,4–3,2 juta/thn" },
  { unit: "Dump truck 10 ton (Rp 600 juta)", allRisk: "Rp 15–21 juta/thn", tlo: "Rp 3,6–4,8 juta/thn" },
  { unit: "Dump truck 20 ton (Rp 900 juta)", allRisk: "Rp 22–31 juta/thn", tlo: "Rp 5,4–7,2 juta/thn" },
  { unit: "Dump truck Hino 500 (Rp 700 juta)", allRisk: "Rp 17–24 juta/thn", tlo: "Rp 4,2–5,6 juta/thn" },
];

const faqs = [
  { q: "Apakah asuransi dump truck termasuk kategori kendaraan komersial atau alat berat?", a: "Dump truck dikategorikan sebagai kendaraan bermotor komersial dalam konteks asuransi kendaraan standar. Polis yang digunakan adalah asuransi kendaraan bermotor dengan perluasan untuk penggunaan komersial berat. Berbeda dengan excavator atau bulldozer yang masuk kategori alat berat dengan polis Machinery Breakdown / CAR." },
  { q: "Apakah kerusakan akibat muatan berlebih (overloading) ditanggung asuransi?", a: "Umumnya tidak. Kerusakan yang timbul akibat penggunaan melebihi kapasitas yang diizinkan merupakan pelanggaran spesifikasi dan menjadi dasar penolakan klaim. Pastikan operasional dump truck selalu sesuai kapasitas yang tercantum dalam STNK." },
  { q: "Berapa estimasi premi asuransi dump truck all risk di Batam?", a: "Dump truck masuk kategori kendaraan komersial dengan tarif yang berbeda dari kendaraan pribadi. Estimasi premi berkisar antara 2,5%–3,5% dari harga kendaraan per tahun untuk all risk. Untuk dump truck seharga Rp 800 juta, premi all risk bisa berkisar Rp 20–28 juta per tahun." },
  { q: "Apakah satu polis bisa menanggung lebih dari satu unit dump truck?", a: "Ya. Polis armada (fleet policy) memungkinkan satu polis menanggung beberapa unit dengan premi gabungan yang seringkali lebih kompetitif. Sangat direkomendasikan untuk kontraktor dengan 3 unit dump truck atau lebih." },
  { q: "Apakah dump truck yang digunakan untuk proyek pemerintah perlu asuransi khusus?", a: "Proyek pemerintah seringkali mensyaratkan bukti asuransi kendaraan aktif dalam dokumen tender. Selain asuransi kendaraan, kontraktor juga perlu mempersiapkan surety bond dan asuransi public liability untuk kegiatan proyek secara keseluruhan." },
];

const breadcrumbListSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://asuransibatam.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://asuransibatam.com/blog" },
    { "@type": "ListItem", position: 3, name: "Kendaraan", item: "https://asuransibatam.com/asuransi-kendaraan" },
    { "@type": "ListItem", position: 4, name: "Asuransi Dump Truck Batam", item: "https://asuransibatam.com/blog/asuransi-dump-truck-batam-proyek-konstruksi" },
  ],
};

export default function AsuransiDumpTruckBatamPage() {
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
            <span className="text-white/70">Asuransi Dump Truck Batam</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a84c]/20 border border-[#c9a84c]/30 rounded-full text-[#c9a84c] text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            Asuransi Kendaraan
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
            Asuransi Dump Truck Batam<br />
            untuk <span className="text-gradient-gold">Proyek Konstruksi:</span><br />
            Premi, Risiko & Klaim
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-3xl">
            Panduan lengkap perlindungan dump truck untuk kontraktor di Batam — risiko operasional khusus,
            jenis polis, estimasi premi, dan cara klaim yang benar.
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
            Sebuah kontraktor di Batam kehilangan dua unit dump truck sekaligus dalam satu kejadian:
            unit pertama terbalik di jalan tanah menuju proyek pembangunan jalan di kawasan <strong>Nongsa</strong>,
            unit kedua rusak parah setelah tertabrak excavator di area galian. Total kerugian: lebih dari
            <strong> Rp 1,4 miliar</strong>.
          </p>
          <p className="text-[#475569] mt-3 text-sm leading-relaxed">
            Kontraktor yang memiliki polis all risk armada menanggung premi gabungan sekitar{" "}
            <strong>Rp 35 juta per tahun</strong> untuk dua unit tersebut. Polis menanggung penuh kedua insiden.
            Kontraktor yang tidak memiliki polis harus menanggung sendiri — dan dalam banyak kasus, kondisi ini
            berujung pada berhentinya proyek.
          </p>
        </div>

        {/* Section 1: Risiko */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-5">
            Risiko Operasional Khusus Dump Truck di Batam
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {risikoOperasional.map((r) => (
              <div key={r.title} className="bg-white rounded-2xl border-2 border-[#e2e8f0] p-5 hover:border-[#c9a84c]/50 hover:shadow-lg transition-all card-hover">
                <div className="text-3xl mb-3">{r.icon}</div>
                <h3 className="font-display font-bold text-[#0a1628] mb-2 text-sm">{r.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Coverage */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-6">
            Cakupan Perlindungan: Yang Ditanggung dan Tidak
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

        {/* Section 3: Premi */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-5">
            Estimasi Premi Dump Truck di Batam
          </h2>
          <p className="text-[#475569] leading-relaxed mb-6">
            Dump truck masuk dalam kategori kendaraan komersial berat. Premi ditentukan berdasarkan
            harga kendaraan, tahun pembuatan, jenis penggunaan, dan rekam jejak klaim. Berikut ilustrasi umum:
          </p>
          <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0] shadow-sm mb-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="gradient-navy">
                  <th className="text-left px-5 py-4 text-white/70 font-semibold">Unit</th>
                  <th className="text-left px-5 py-4 text-[#c9a84c] font-display font-bold">All Risk/Tahun</th>
                  <th className="text-left px-5 py-4 text-blue-300 font-display font-bold">TLO/Tahun</th>
                </tr>
              </thead>
              <tbody>
                {premiEstimasi.map((row, i) => (
                  <tr key={row.unit} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                    <td className="px-5 py-3 font-medium text-[#0a1628]">{row.unit}</td>
                    <td className="px-5 py-3 text-[#475569]">{row.allRisk}</td>
                    <td className="px-5 py-3 text-[#475569]">{row.tlo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#0a1628] rounded-2xl p-5">
            <p className="text-white/80 text-sm leading-relaxed">
              <span className="text-[#c9a84c] font-bold">Tips armada:</span> Kontraktor dengan 3+ unit dump truck sangat
              disarankan menggunakan <strong className="text-white">fleet policy</strong> (polis armada). Premi gabungan
              biasanya lebih efisien dan administrasi klaim lebih terpusat. Hubungi kami untuk simulasi polis armada.
            </p>
          </div>
        </section>

        {/* Section 4: Koneksi dengan surety bond */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-5">
            Asuransi Dump Truck + Surety Bond: Paket Lengkap untuk Tender Proyek
          </h2>
          <p className="text-[#475569] leading-relaxed mb-6">
            Untuk kontraktor yang mengikuti tender proyek pemerintah di Batam, asuransi dump truck saja
            belum cukup. Panitia pengadaan umumnya mensyaratkan dokumen lengkap berikut:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { item: "Asuransi kendaraan aktif", desc: "Untuk semua unit dump truck yang akan dioperasikan di proyek", href: "/asuransi-kendaraan/asuransi-dumptruck" },
              { item: "Performance Bond", desc: "Jaminan bahwa pekerjaan akan diselesaikan sesuai kontrak", href: "/asuransi-surety-bond/performance-bond" },
              { item: "Public Liability", desc: "Perlindungan dari tuntutan pihak ketiga akibat operasional di lapangan", href: "/asuransi-liability/public-liability" },
            ].map((d) => (
              <Link key={d.href} href={d.href} className="group flex items-start gap-4 p-4 bg-white rounded-xl border border-[#e2e8f0] hover:border-[#c9a84c]/50 hover:shadow-md transition-all">
                <CheckCircle className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-display font-bold text-[#0a1628] group-hover:text-[#1a4fa0] transition-colors text-sm">{d.item}</div>
                  <div className="text-[#475569] text-xs">{d.desc}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#c9a84c] ml-auto opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5" />
              </Link>
            ))}
          </div>
          <p className="text-[#475569] text-sm leading-relaxed">
            Tim Asuransi Batam dapat membantu menyiapkan semua dokumen ini dalam satu proses terpadu —
            sehingga Anda bisa fokus pada persiapan teknis tender.
          </p>
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
              { title: "Asuransi Dump Truck", href: "/asuransi-kendaraan/asuransi-dumptruck", desc: "Halaman produk asuransi dump truck di Batam" },
              { title: "Asuransi Kendaraan Batam", href: "/asuransi-kendaraan", desc: "Semua produk asuransi kendaraan — pillar page" },
              { title: "Asuransi Motor Batam", href: "/blog/asuransi-motor-batam", desc: "Panduan asuransi kendaraan roda dua di Batam" },
              { title: "Performance Bond untuk Kontraktor", href: "/asuransi-surety-bond/performance-bond", desc: "Jaminan pelaksanaan untuk tender proyek pemerintah/swasta" },
              { title: "Asuransi Alat Berat", href: "/asuransi-machinery/asuransi-alat-berat", desc: "Untuk excavator, bulldozer, dan alat berat lain" },
              { title: "Public Liability", href: "/asuransi-liability/public-liability", desc: "Perlindungan tanggung jawab terhadap pihak ketiga" },
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
            Estimasi premi dalam artikel ini bersifat ilustrasi umum berdasarkan kondisi pasar dan profil risiko tipikal.
            Premi aktual ditentukan oleh underwriter berdasarkan profil spesifik unit dan perusahaan Anda.
            Konsultasikan kebutuhan armada Anda dengan tim kami untuk penawaran yang akurat.
          </p>
        </div>
      </article>
      <QuoteCard cluster="vehicle" />
    </>
  );
}

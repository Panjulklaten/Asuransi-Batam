// app/blog/cara-klaim-asuransi-car/page.tsx
import type { Metadata } from "next";
import QuoteButton from "@/components/quote/QuoteButton";
import { generateSEO } from "@/lib/seo";
import {
  ListChecks,
  ClipboardList,
  XCircle,
  Lightbulb,
  Clock,
  CheckCircle2,
  MessageCircleMore,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Cara Klaim Asuransi CAR saat Proyek Mengalami Kerusakan – Panduan Lengkap",
  description: "Panduan langkah demi langkah mengajukan klaim Contractor All Risk (CAR) di Indonesia. Dari pelaporan awal hingga pencairan ganti rugi — termasuk dokumen yang wajib disiapkan.",
  canonical: "https://asuransibatam.com/blog/cara-klaim-asuransi-car",
  languages: {
      id: "https://asuransibatam.com/blog/cara-klaim-asuransi-car",
      en: "https://asuransibatam.com/en/blog/how-to-claim-car-insurance-project",
    },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cara Klaim Asuransi CAR saat Proyek Mengalami Kerusakan",
  description:
    "Panduan langkah demi langkah mengajukan klaim Contractor All Risk (CAR) — dari pelaporan insiden hingga pencairan ganti rugi.",
  datePublished: "2026-05-07",
  dateModified: "2026-05-07",
  author: {
    "@type": "Person",
    name: "Rio",
    telephone: "+6281373336728",
  },
  publisher: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam – Rio",
    url: "https://asuransibatam.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://asuransibatam.com/blog/cara-klaim-asuransi-car",
  },
  inLanguage: "id-ID",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: "https://asuransibatam.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://asuransibatam.com/blog" },
      { "@type": "ListItem", position: 3, name: "Cara Klaim Asuransi CAR", item: "https://asuransibatam.com/blog/cara-klaim-asuransi-car" },
    ],
  },
  "HowTo": {
    "@type": "HowTo",
    name: "Cara Mengajukan Klaim Asuransi CAR",
    step: [
      { "@type": "HowToStep", position: 1, name: "Amankan lokasi dan dokumentasikan kerusakan" },
      { "@type": "HowToStep", position: 2, name: "Laporkan kepada penanggung dalam 3×24 jam" },
      { "@type": "HowToStep", position: 3, name: "Siapkan dokumen klaim" },
      { "@type": "HowToStep", position: 4, name: "Survei dan loss adjuster" },
      { "@type": "HowToStep", position: 5, name: "Negosiasi dan persetujuan ganti rugi" },
      { "@type": "HowToStep", position: 6, name: "Pencairan pembayaran" },
    ],
  },
};

const claimSteps = [
  {
    number: "01",
    title: "Amankan Lokasi & Dokumentasikan Kerusakan",
    body: "Segera setelah kejadian, prioritas pertama adalah keselamatan. Pastikan area berbahaya sudah dipasangi barrier. Setelah itu, dokumentasikan kerusakan secara menyeluruh: foto dari berbagai sudut, video walkthrough lokasi, dan catat tanggal serta waktu kejadian. Jangan memindahkan atau memperbaiki apapun sebelum mendapat izin dari penanggung — tindakan sepihak ini dapat melemahkan klaim Anda.",
  },
  {
    number: "02",
    title: "Laporkan Kepada Penanggung dalam 3×24 Jam",
    body: "Hampir semua polis CAR mensyaratkan pelaporan awal dalam 3×24 jam setelah kejadian (72 jam). Laporan awal bisa dilakukan via telepon atau WhatsApp, diikuti laporan tertulis. Jika Anda membeli melalui agen atau broker, hubungi mereka terlebih dahulu — mereka akan membantu koordinasi dengan penanggung. Keterlambatan melapor tanpa alasan yang dapat diterima bisa menjadi dasar penolakan klaim.",
  },
  {
    number: "03",
    title: "Siapkan Dokumen Klaim yang Lengkap",
    body: "Kelengkapan dokumen adalah faktor terbesar yang menentukan kecepatan proses klaim. Dokumen yang umumnya diminta: polis asli, RAB atau bill of quantity proyek, kontrak konstruksi, laporan insiden dari site manager atau pengawas, laporan polisi (untuk kasus pencurian atau sabotase), as-built drawing jika tersedia, serta estimasi biaya perbaikan dari kontraktor atau quantity surveyor independen.",
  },
  {
    number: "04",
    title: "Proses Survei oleh Loss Adjuster",
    body: "Untuk klaim dengan nilai signifikan, penanggung akan menunjuk loss adjuster — konsultan independen yang bertugas menilai dan memverifikasi kerugian. Loss adjuster akan mengunjungi lokasi proyek, memeriksa dokumentasi, mewawancarai pihak terkait, dan menyusun laporan rekomendasi kepada penanggung. Bersikaplah kooperatif dan transparan — sembunyikan fakta apapun berisiko membuat klaim batal.",
  },
  {
    number: "05",
    title: "Negosiasi Nilai Ganti Rugi",
    body: "Setelah laporan loss adjuster selesai, penanggung akan menyampaikan penawaran ganti rugi. Jika Anda tidak setuju dengan nilai yang ditawarkan, Anda berhak mengajukan keberatan secara tertulis disertai bukti pendukung. Dalam hal ini, broker Anda memiliki peran penting sebagai advokator di sisi Anda. Jika tidak ada kesepakatan, mekanisme penyelesaian sengketa dalam polis (arbitrase atau pengadilan) dapat ditempuh.",
  },
  {
    number: "06",
    title: "Pencairan Pembayaran",
    body: "Setelah nilai ganti rugi disetujui, Anda akan diminta menandatangani discharge voucher (surat pelunasan). Pastikan Anda membaca dengan cermat sebelum menandatangani, karena dokumen ini biasanya mengakhiri hak klaim untuk kejadian tersebut. Pembayaran umumnya dilakukan dalam 14–30 hari kerja setelah discharge voucher diterima oleh penanggung.",
  },
];

const docsChecklist = [
  { doc: "Salinan polis CAR yang berlaku", critical: true },
  { doc: "Laporan kronologis kejadian dari site manager", critical: true },
  { doc: "Foto & video kerusakan (timestamped)", critical: true },
  { doc: "Estimasi biaya perbaikan dari kontraktor", critical: true },
  { doc: "Kontrak konstruksi & RAB/BOQ", critical: true },
  { doc: "Laporan polisi (untuk kasus kriminal)", critical: false },
  { doc: "As-built drawing yang relevan", critical: false },
  { doc: "Log buku harian proyek (site diary)", critical: false },
  { doc: "Dokumen cuaca (untuk klaim bencana alam)", critical: false },
  { doc: "Surat keterangan dari pengawas proyek (MK)", critical: false },
];

export default function BlogCaraKlaimCARPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex gap-2">
            <li><a href="/" className="hover:underline">Beranda</a></li>
            <li>/</li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Cara Klaim Asuransi CAR</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <p className="text-sm font-semibold text-[#c9a84c] uppercase tracking-widest mb-3">
            Asuransi Engineering
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Cara Klaim Asuransi CAR saat Proyek Mengalami Kerusakan: Panduan Langkah demi Langkah
          </h1>
          <p className="text-gray-500 text-sm">
            Ditulis oleh <span className="font-medium text-gray-700">Rio</span> &middot; 7 Mei 2026 &middot; 9 menit baca
          </p>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Musibah di lokasi proyek bisa datang kapan saja — kebakaran gudang material, longsoran tanah saat penggalian, atau crane ambruk menimpa struktur yang sudah berdiri. Saat itu terjadi, kecepatan dan ketepatan bertindak sangat menentukan berhasil tidaknya proses klaim Contractor All Risk (CAR) Anda.
          </p>
        </header>

        <section className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-10">

          {/* Intro */}
          <p>
            Banyak kontraktor yang sudah memiliki polis CAR, tetapi tidak tahu prosedur klaim yang benar saat musibah benar-benar terjadi. Akibatnya, klaim terlambat dilaporkan, dokumen tidak lengkap, atau tindakan perbaikan dilakukan sebelum survei — dan ujungnya klaim ditolak atau nilainya jauh di bawah ekspektasi.
          </p>
          <p>
            Artikel ini memandu Anda langkah demi langkah: dari momen pertama setelah kejadian hingga uang ganti rugi masuk ke rekening.
          </p>

          {/* Step-by-step */}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
              <ListChecks className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
            </span>
            6 Langkah Mengajukan Klaim CAR
          </h2>

          <div className="space-y-6">
            {claimSteps.map((step) => (
              <div key={step.number} className="flex gap-5 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0a1628] text-[#c9a84c] font-display font-bold text-lg rounded-xl flex items-center justify-center">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dokumen Checklist */}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
              <ClipboardList className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
            </span>
            Checklist Dokumen Klaim CAR
          </h2>
          <p>
            Berikut daftar dokumen yang perlu disiapkan. Tandai mana yang wajib (🔴) dan mana yang situasional (⚪):
          </p>

          <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#0a1628] text-white font-semibold">
                <tr>
                  <th className="px-5 py-3 text-left">Dokumen</th>
                  <th className="px-5 py-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {docsChecklist.map((item) => (
                  <tr key={item.doc} className="bg-white hover:bg-[#faf8f3] transition">
                    <td className="px-5 py-3 text-gray-700">{item.doc}</td>
                    <td className="px-5 py-3 text-center">
                      <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${item.critical ? "bg-[#fdf3f2] text-[#b3261e]" : "bg-[#faf8f3] text-[#94a3b8]"}`}>
                        {item.critical ? "Wajib" : "Situasional"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Hal yang Membuat Klaim Ditolak */}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
              <XCircle className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
            </span>
            Hal-Hal yang Paling Sering Membuat Klaim CAR Ditolak
          </h2>
          <p>
            Memahami alasan penolakan klaim sama pentingnya dengan mengetahui prosedurnya. Berikut penyebab yang paling sering ditemui:
          </p>

          <div className="space-y-4">
            {[
              {
                title: "Terlambat melapor",
                desc: "Batas 3×24 jam bukan sekedar formalitas. Keterlambatan tanpa justifikasi yang sah dapat dijadikan dasar penolakan oleh penanggung, karena dianggap ada unsur yang tidak transparan.",
              },
              {
                title: "Merusak barang bukti sebelum survei",
                desc: "Memindahkan puing, mulai membersihkan area, atau melakukan perbaikan sementara sebelum loss adjuster datang dapat menghilangkan bukti fisik yang dibutuhkan untuk menilai kerugian.",
              },
              {
                title: "Nilai pertanggungan lebih rendah dari nilai kontrak",
                desc: "Jika sum insured lebih kecil dari nilai proyek sesungguhnya, prinsip average akan mengurangi ganti rugi Anda secara proporsional. Misalnya, jika nilai kontrak Rp 10 miliar tapi diasuransikan Rp 6 miliar, maka saat klaim Rp 1 miliar, Anda hanya akan mendapat Rp 600 juta.",
              },
              {
                title: "Polis sudah kedaluwarsa",
                desc: "Proyek yang melebihi jadwal tanpa perpanjangan polis berarti tidak ada pertanggungan. Ini sering terjadi pada proyek yang mundur akibat cuaca, sengketa, atau keterlambatan material.",
              },
              {
                title: "Risiko yang dikecualikan",
                desc: "Setiap polis memiliki klausula pengecualian. Kerusakan akibat desain yang cacat (faulty design), kesalahan workmanship yang sudah diketahui, atau perang adalah contoh umum risiko yang dikecualikan dan tidak bisa diklaim.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-red-400 pl-5 py-1">
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="text-gray-600 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Tips Mempercepat Klaim */}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
              <Lightbulb className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
            </span>
            Tips Mempercepat Proses Klaim
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Simpan semua komunikasi secara tertulis.</strong> Konfirmasi setiap percakapan telepon via WhatsApp atau email. Ini menciptakan jejak yang jelas jika timbul perselisihan di kemudian hari.
            </li>
            <li>
              <strong>Tunjuk satu PIC klaim di internal tim.</strong> Kebingungan siapa yang bertanggung jawab membuat dokumen lambat terkumpul. Tunjuk satu orang yang bertugas mengkoordinasikan semua kebutuhan klaim.
            </li>
            <li>
              <strong>Siapkan estimasi perbaikan dari dua kontraktor berbeda.</strong> Ini memberi posisi tawar yang lebih kuat saat negosiasi nilai ganti rugi dengan penanggung.
            </li>
            <li>
              <strong>Gunakan broker yang aktif.</strong> Broker yang berpengalaman tidak hanya membantu saat pembelian polis, tetapi juga aktif mendampingi klaim — termasuk berkomunikasi langsung dengan loss adjuster dan penanggung atas nama Anda.
            </li>
          </ul>

          {/* Berapa Lama Proses Klaim */}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
              <Clock className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
            </span>
            Berapa Lama Proses Klaim CAR?
          </h2>
          <p>
            Tidak ada jawaban baku, karena sangat bergantung pada kompleksitas kerusakan dan kelengkapan dokumen yang Anda berikan. Sebagai gambaran umum:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Klaim kecil (di bawah Rp 100 juta) dengan dokumen lengkap: <strong>2–4 minggu</strong></li>
            <li>Klaim menengah dengan survei lapangan: <strong>4–8 minggu</strong></li>
            <li>Klaim besar atau kompleks yang melibatkan loss adjuster eksternal: <strong>2–6 bulan</strong></li>
          </ul>
          <p>
            Kunci mempercepat proses ada di tangan Anda: semakin lengkap dan rapi dokumen yang diberikan sejak awal, semakin cepat penanggung dapat memproses dan memutuskan klaim.
          </p>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
              <CheckCircle2 className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
            </span>
            Kesimpulan
          </h2>
          <p>
            Klaim CAR yang berhasil bukan keberuntungan — itu hasil dari persiapan yang baik dan tindakan yang tepat di momen kritis. Laporkan sesegera mungkin, dokumentasikan segalanya, dan jangan mengambil tindakan apapun di lokasi sebelum ada izin dari penanggung.
          </p>
          <p>
            Jika Anda belum yakin dengan prosedur klaim dalam polis CAR yang Anda miliki saat ini, hubungi agen atau broker Anda sekarang — sebelum musibah terjadi, bukan sesudahnya.
          </p>

        </section>

        {/* CTA */}
        <div className="mt-12 bg-[#0a1628] rounded-2xl p-8 text-center not-prose">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 mb-3">
            <MessageCircleMore className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
          </span>
          <h3 className="text-xl font-bold text-white mb-2">Butuh Bantuan Klaim atau Konsultasi CAR?</h3>
          <p className="text-white/70 mb-5">
            Rio siap membantu — dari pemilihan polis hingga pendampingan proses klaim.
          </p>
          <QuoteButton cluster="engineering" lang="id" variant="gold" className="!rounded-xl !px-8 !py-3" />
          <p className="text-sm text-white/40 mt-3">0813-7333-6728 &middot; Rio, Agen Asuransi Batam</p>
        </div>

        {/* Internal Links */}
        <div className="mt-10 border-t pt-8">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Artikel Terkait</p>
          <ul className="space-y-2">
            <li>
              <a href="/blog/perbedaan-car-dan-ear" className="text-[#1a4fa0] hover:text-[#c9a84c] transition-colors font-medium">
                → Perbedaan CAR dan EAR: Mana yang Tepat untuk Proyek Anda?
              </a>
            </li>
            <li>
              <a href="/asuransi-engineering/contractor-all-risk" className="text-[#1a4fa0] hover:text-[#c9a84c] transition-colors font-medium">
                → Contractor All Risk (CAR) – Cakupan & Manfaat Lengkap
              </a>
            </li>
            <li>
              <a href="/asuransi-engineering" className="text-[#1a4fa0] hover:text-[#c9a84c] transition-colors font-medium">
                → Asuransi Engineering Batam – Semua Produk
              </a>
            </li>
          </ul>
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
                <li><a href="/asuransi-engineering/erection-all-risk" className="text-sm text-blue-700 hover:underline font-medium">→ Erection All Risk Batam</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait</p>
              <ul className="space-y-2">
                <li><a href="/blog/asuransi-erection-all-risk-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Erection All Risk Batam</a></li>
                <li><a href="/blog/asuransi-proyek-konstruksi-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Proyek Konstruksi Batam</a></li>
                <li><a href="/blog/perbedaan-bid-bond-performance-bond" className="text-sm text-blue-700 hover:underline font-medium">→ Perbedaan Bid Bond & Performance Bond</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import { ClipboardCheck, FileWarning, Clock, ShieldAlert } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = generateSEO({
  title: "Checklist Dokumen Custom Bond yang Paling Sering Ditolak Bea Cukai",
  description: "5 dokumen custom bond yang paling sering bikin pengajuan ditolak atau tertunda di Batam — lengkap dengan contoh kesalahan umum dan cara memperbaikinya sebelum diajukan.",
  keywords: [
    "dokumen custom bond ditolak",
    "checklist custom bond",
    "syarat custom bond batam",
    "spgr notaris",
    "skep bea cukai",
  ],
  canonical: "https://asuransibatam.com/blog/checklist-dokumen-custom-bond-ditolak",
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Checklist Dokumen Custom Bond yang Paling Sering Ditolak Bea Cukai",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  author: { "@type": "Organization", name: "Tim Asuransi Batam", url: "https://asuransibatam.com" },
  publisher: { "@type": "Organization", name: "Asuransi Batam – Rio", url: "https://asuransibatam.com" },
};

const breadcrumbListSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://asuransibatam.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://asuransibatam.com/blog" },
    { "@type": "ListItem", position: 3, name: "Surety Bond", item: "https://asuransibatam.com/asuransi-surety-bond" },
    { "@type": "ListItem", position: 4, name: "Checklist Dokumen Custom Bond", item: "https://asuransibatam.com/blog/checklist-dokumen-custom-bond-ditolak" },
  ],
};

const dokumen = [
  {
    nama: "SKEP (Surat Keputusan) Fasilitas Bea Cukai",
    kenapa: "Perusahaan mengajukan custom bond sebelum SKEP resmi terbit dari Bea Cukai, hanya berbekal draft atau surat pengajuan yang belum disetujui.",
    benar: "Tunggu SKEP terbit resmi terlebih dahulu, baru ajukan penerbitan custom bond dengan melampirkan salinan SKEP yang sudah ditandatangani pejabat berwenang.",
  },
  {
    nama: "SPGR (Surat Perjanjian Ganti Rugi)",
    kenapa: "SPGR ditandatangani tapi tidak dilegalisir notaris, atau memakai template lama yang klausulnya tidak sesuai dengan nilai jaminan terbaru.",
    benar: "Selalu gunakan template SPGR terbaru dari perusahaan asuransi, dan pastikan legalisir notaris selesai sebelum sertifikat custom bond diminta diterbitkan.",
  },
  {
    nama: "Laporan Keuangan",
    kenapa: "Untuk nilai jaminan besar, perusahaan hanya melampirkan laporan keuangan internal yang belum diaudit, sehingga underwriter tidak bisa memverifikasi kondisi keuangan riil.",
    benar: "Siapkan laporan keuangan 2 tahun terakhir yang sudah diaudit akuntan publik untuk pengajuan nilai jaminan besar. Untuk nilai kecil, laporan keuangan internal masih bisa dipertimbangkan.",
  },
  {
    nama: "Rekening Koran Perusahaan",
    kenapa: "Perusahaan yang baru berdiri kurang dari 1 tahun hanya melampirkan 1 bulan rekening koran, padahal umumnya dibutuhkan riwayat transaksi yang lebih panjang untuk menilai arus kas.",
    benar: "Lampirkan rekening koran 3 bulan terakhir secara berturut-turut, dan siapkan penjelasan tertulis bila ada transaksi besar yang tidak biasa.",
  },
  {
    nama: "Nilai Jaminan yang Diajukan",
    kenapa: "Nilai jaminan yang diajukan dihitung berdasarkan estimasi kasar, bukan dari perhitungan resmi potensi Bea Masuk dan PPN yang tertera di SKEP Bea Cukai.",
    benar: "Hitung nilai jaminan berdasarkan angka resmi yang tercantum di SKEP atau dokumen penetapan Bea Cukai, bukan perkiraan sendiri dari nilai barang.",
  },
];

const faqs = [
  { q: "Apakah dokumen yang ditolak bisa diperbaiki dan diajukan ulang tanpa mulai dari awal?", a: "Bisa. Sebagian besar penolakan Bea Cukai bersifat administratif — begitu dokumen yang kurang dilengkapi atau diperbaiki, pengajuan bisa dilanjutkan tanpa mengulang seluruh proses dari nol. Yang perlu diperhatikan adalah apakah revisi tersebut mengubah nilai jaminan, karena bisa mempengaruhi sertifikat custom bond yang sudah diterbitkan." },
  { q: "Berapa lama biasanya proses perbaikan dokumen yang ditolak?", a: "Tergantung jenis dokumennya. Perbaikan administratif kecil seperti kelengkapan tanda tangan bisa selesai dalam 1-2 hari kerja. Namun jika membutuhkan legalisir notaris ulang atau audit laporan keuangan tambahan, prosesnya bisa memakan waktu 1-2 minggu." },
  { q: "Siapa yang sebaiknya mengecek kelengkapan dokumen sebelum diajukan ke Bea Cukai?", a: "Idealnya konsultan asuransi atau broker surety bond yang berpengalaman menangani custom bond, karena mereka terbiasa dengan pola penolakan yang sering terjadi dan bisa mengecek dokumen sebelum diajukan resmi — menghemat waktu dibanding trial and error sendiri." },
];

export default function ChecklistDokumenCustomBondPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />

      {/* HERO — tema ungu/violet */}
      <section className="relative bg-gradient-to-br from-[#1e1033] via-[#2d1854] to-[#5b2a9e] overflow-hidden pt-24 pb-16">
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500/15 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white/80 transition-colors">Blog</Link>
            <span>/</span>
            <Link href="/asuransi-surety-bond" className="hover:text-violet-300 transition-colors">Surety Bond</Link>
            <span>/</span>
            <span className="text-white/70">Checklist Dokumen Custom Bond</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/20 border border-violet-400/30 rounded-full text-violet-300 text-sm font-semibold mb-6">
            <ClipboardCheck className="w-4 h-4" />
            Checklist Praktis
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
            5 Dokumen Custom Bond<br />yang Paling Sering Ditolak
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-3xl">
            Sebagian besar penolakan Bea Cukai sebenarnya bisa dihindari. Ini daftar lengkapnya —
            lengkap dengan kesalahan yang sering terjadi dan cara memperbaikinya.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 5 Juli 2026</span>
            <span>•</span>
            <span>Tim Asuransi Batam</span>
            <span>•</span>
            <span>±7 menit baca</span>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <p className="text-[#374151] leading-relaxed mb-10 text-lg">
          Dari pengalaman mendampingi puluhan pengajuan custom bond di Batam, penolakan hampir
          selalu berasal dari lima titik yang sama. Kabar baiknya — semua bisa dicegah kalau Anda
          tahu di mana biasanya kesalahan terjadi. Berikut daftarnya, satu per satu.
        </p>

        {/* Checklist per dokumen */}
        <div className="space-y-6 mb-14">
          {dokumen.map((d, i) => (
            <div key={d.nama} className="rounded-2xl border border-[#e2e8f0] overflow-hidden shadow-sm">
              <div className="bg-[#0a1628] px-6 py-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-500 text-white font-display font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <h3 className="font-display font-bold text-white text-lg">{d.nama}</h3>
              </div>
              <div className="grid sm:grid-cols-2">
                <div className="p-5 bg-red-50 border-r border-[#e2e8f0]">
                  <div className="flex items-center gap-2 mb-2">
                    <FileWarning className="w-4 h-4 text-red-600" />
                    <p className="text-xs font-bold text-red-700 uppercase tracking-wide">Kenapa Sering Ditolak</p>
                  </div>
                  <p className="text-sm text-red-900 leading-relaxed">{d.kenapa}</p>
                </div>
                <div className="p-5 bg-emerald-50">
                  <div className="flex items-center gap-2 mb-2">
                    <ClipboardCheck className="w-4 h-4 text-emerald-600" />
                    <p className="text-xs font-bold text-emerald-700 uppercase tracking-wide">Cara yang Benar</p>
                  </div>
                  <p className="text-sm text-emerald-900 leading-relaxed">{d.benar}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Warning box */}
        <div className="mb-14 bg-violet-50 border-2 border-violet-200 rounded-2xl p-6 flex gap-4">
          <ShieldAlert className="w-8 h-8 text-violet-600 shrink-0" />
          <div>
            <p className="font-display font-bold text-violet-950 mb-1">Satu Kesalahan Bisa Menunda Proyek Berminggu-minggu</p>
            <p className="text-violet-900 text-sm leading-relaxed">
              Penolakan dokumen bukan cuma soal administrasi — untuk proyek dengan tenggat ketat
              (misalnya jadwal ekspor atau mobilisasi alat proyek), penundaan beberapa hari saja
              bisa berdampak pada denda keterlambatan dari pihak lain di luar Bea Cukai. Cek ulang
              kelengkapan dokumen jauh sebelum tenggat, bukan mepet di hari-H.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <p className="text-violet-600 font-semibold uppercase tracking-widest text-sm mb-2">FAQ</p>
            <h2 className="font-display font-bold text-3xl text-[#0a1628]">Pertanyaan yang Sering Diajukan</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-display font-semibold text-[#0a1628] hover:text-violet-700 transition-colors list-none">
                  {faq.q}
                  <span className="ml-4 text-violet-500 text-xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 text-[#475569] text-sm leading-relaxed border-t border-[#e2e8f0] pt-4">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* Related links */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-xl text-[#0a1628] mb-5">Artikel & Halaman Terkait</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Custom Bond Batam", href: "/asuransi-surety-bond/custom-bond", desc: "Halaman produk lengkap: OB 23, KITE, Kawasan Berikat, dan PPJK" },
              { title: "Panduan OB 23 Batam", href: "/blog/panduan-ob23-impor-sementara-batam", desc: "Cara mengurus impor sementara untuk pameran dan proyek" },
              { title: "OB 23 vs KITE", href: "/blog/ob23-vs-kite-batam", desc: "Cara menentukan fasilitas yang tepat untuk bisnis Anda" },
              { title: "Custom Bond untuk Galangan Kapal", href: "/blog/custom-bond-galangan-kapal-batam", desc: "Kombinasi Kawasan Berikat dan OB 23 di industri shipyard" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="group flex items-start gap-3 p-4 bg-violet-50 rounded-xl border border-violet-100 hover:border-violet-300 hover:shadow-md transition-all">
                <ClipboardCheck className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#0a1628] group-hover:text-violet-700 transition-colors text-sm">{link.title}</div>
                  <div className="text-[#475569] text-xs mt-0.5">{link.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="border-t border-[#e2e8f0] pt-8">
          <p className="text-[#94a3b8] text-xs leading-relaxed italic">
            Artikel ini disusun berdasarkan praktik pasar penjaminan kepabeanan di Indonesia dan
            pengalaman mendampingi pengajuan custom bond di Batam. Persyaratan dokumen dapat
            berbeda tergantung jenis fasilitas dan kebijakan underwriter. Untuk kebutuhan spesifik,
            konsultasikan langsung dengan tim kami.
          </p>
        </div>
      </article>
      <CTASection cluster="surety" />
    </>
  );
}

import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import { GitCompareArrows, Clock, Compass, ShieldCheck } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = generateSEO({
  title: "OB 23 vs KITE: Mana yang Tepat untuk Bisnis Impor-Ekspor Anda di Batam?",
  description: "Bingung pilih OB 23 atau KITE untuk fasilitas kepabeanan di Batam? Ini perbedaan mendasar, contoh kasus nyata, dan cara menentukan mana yang sesuai kebutuhan bisnis Anda.",
  keywords: [
    "ob 23 vs kite",
    "perbedaan ob 23 dan kite",
    "kite batam",
    "impor sementara vs kite",
    "fasilitas kepabeanan batam",
  ],
  canonical: "https://asuransibatam.com/blog/ob23-vs-kite-batam",
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "OB 23 vs KITE: Mana yang Tepat untuk Bisnis Impor-Ekspor Anda di Batam?",
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
    { "@type": "ListItem", position: 4, name: "OB 23 vs KITE", item: "https://asuransibatam.com/blog/ob23-vs-kite-batam" },
  ],
};

const faqs = [
  { q: "Apakah satu perusahaan bisa punya OB 23 dan KITE sekaligus?", a: "Bisa. Sebuah pabrik di Batam bisa saja memiliki fasilitas KITE untuk bahan baku produksi rutin, sekaligus mengajukan OB 23 terpisah ketika suatu saat perlu mendatangkan mesin uji coba atau alat perbaikan yang sifatnya sementara. Keduanya adalah fasilitas yang berdiri sendiri dengan custom bond masing-masing." },
  { q: "Kalau salah pilih antara OB 23 dan KITE, apa risikonya?", a: "Bea Cukai bisa menolak pengajuan sejak awal karena jenis fasilitas tidak sesuai dengan sifat barang dan tujuan penggunaannya. Jika terlanjur salah dan ketahuan saat audit, perusahaan berisiko dikenakan Bea Masuk penuh ditambah denda administrasi, bukan sekadar diminta memperbaiki dokumen." },
  { q: "Apakah nilai jaminan KITE selalu lebih besar dari OB 23?", a: "Tidak selalu — tergantung volume dan nilai bahan baku vs barang impor sementara. Namun karena KITE sifatnya berulang (siklus produksi terus-menerus), nilai jaminan biasanya dihitung berdasarkan proyeksi kebutuhan impor dalam periode tertentu, sehingga totalnya sering lebih besar dibanding OB 23 yang bersifat sekali pakai per kegiatan." },
  { q: "Berapa lama proses mendapatkan izin KITE dibanding OB 23?", a: "KITE umumnya membutuhkan proses lebih panjang karena melibatkan verifikasi kapasitas produksi dan audit kepatuhan berkala oleh Bea Cukai, bisa memakan waktu beberapa minggu hingga bulan untuk pengajuan pertama kali. OB 23 relatif lebih cepat karena sifatnya kasus per kasus dan durasinya lebih pendek." },
];

export default function OB23VsKitePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0] overflow-hidden pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white/80 transition-colors">Blog</Link>
            <span>/</span>
            <Link href="/asuransi-surety-bond" className="hover:text-[#c9a84c] transition-colors">Surety Bond</Link>
            <span>/</span>
            <span className="text-white/70">OB 23 vs KITE</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a84c]/20 border border-[#c9a84c]/30 rounded-full text-[#c9a84c] text-sm font-semibold mb-6">
            <GitCompareArrows className="w-4 h-4" />
            Perbandingan Fasilitas Kepabeanan
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
            OB 23 vs KITE:<br />Mana yang Tepat untuk Bisnis Anda?
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-3xl">
            Dua fasilitas ini sering tertukar padahal punya tujuan yang sangat berbeda. Salah
            pilih bisa berujung penolakan Bea Cukai atau denda di kemudian hari.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 5 Juli 2026</span>
            <span>•</span>
            <span>Tim Asuransi Batam</span>
            <span>•</span>
            <span>±8 menit baca</span>
          </div>
        </div>
      </section>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Intro */}
        <p className="text-[#374151] leading-relaxed mb-10 text-lg">
          Pertanyaan ini muncul hampir setiap minggu dari klien kami di Batam: barang saya mau
          diimpor, tapi harus pakai OB 23 atau KITE? Jawabannya sebenarnya sederhana begitu Anda
          tahu satu pertanyaan kunci: <strong>apakah bentuk barangnya akan berubah atau tidak</strong>{" "}
          setelah masuk ke Indonesia. Mari kita bedah satu per satu.
        </p>

        {/* Pertanyaan kunci */}
        <div className="mb-14 bg-[#faf8f3] border-2 border-[#c9a84c]/30 rounded-2xl p-6 md:p-8 text-center">
          <Compass className="w-8 h-8 text-[#c9a84c] mx-auto mb-3" />
          <p className="font-display font-bold text-xl text-[#0a1628] mb-2">Satu Pertanyaan Penentu</p>
          <p className="text-[#374151] max-w-xl mx-auto">
            Apakah barang yang diimpor akan <strong>diolah/berubah bentuk</strong> menjadi produk
            lain, atau <strong>dikembalikan utuh</strong> ke negara asal setelah dipakai?
          </p>
        </div>

        {/* Split comparison */}
        <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-[#e2e8f0] shadow-sm mb-14">
          <div className="bg-blue-50 p-7 border-b-4 md:border-b-0 md:border-r-4 border-blue-400">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500">
                <ShieldCheck className="w-5 h-5 text-white" />
              </span>
              <h2 className="font-display font-bold text-xl text-blue-950">OB 23 (Impor Sementara)</h2>
            </div>
            <p className="text-blue-900 text-sm leading-relaxed mb-4">
              Untuk barang yang <strong>tetap utuh</strong>, dipakai sementara, lalu diekspor
              kembali dalam bentuk yang sama.
            </p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>• Barang tidak diproses/diolah</li>
              <li>• Sifat penggunaan: sekali kegiatan/proyek</li>
              <li>• Wajib diekspor kembali dalam jangka waktu tertentu</li>
              <li>• Proses pengajuan relatif cepat</li>
              <li>• Contoh: alat pameran, alat berat proyek, unit demo</li>
            </ul>
          </div>
          <div className="bg-green-50 p-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-green-600">
                <ShieldCheck className="w-5 h-5 text-white" />
              </span>
              <h2 className="font-display font-bold text-xl text-green-950">KITE</h2>
            </div>
            <p className="text-green-900 text-sm leading-relaxed mb-4">
              Untuk bahan baku yang <strong>diolah menjadi barang jadi</strong>, dan hasil
              olahannya yang diekspor.
            </p>
            <ul className="space-y-2 text-sm text-green-900">
              <li>• Bahan baku diproses menjadi produk baru</li>
              <li>• Sifat penggunaan: berulang, siklus produksi</li>
              <li>• Yang diekspor adalah hasil olahan, bukan bahan mentah</li>
              <li>• Perlu verifikasi kapasitas produksi & audit berkala</li>
              <li>• Contoh: benang jadi garmen, komponen elektronik jadi PCB</li>
            </ul>
          </div>
        </div>

        {/* Case study side by side */}
        <div className="mb-14">
          <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-6 text-center">Contoh Kasus Nyata di Batam</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-blue-100 rounded-2xl p-6">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">Kasus OB 23</p>
              <p className="text-[#374151] text-sm leading-relaxed">
                Perusahaan elektronik dari Jepang membawa mesin uji kualitas produk (testing
                jig) senilai Rp 800 juta ke pabriknya di Batam untuk digunakan selama 3 bulan.
                Mesin tersebut tidak diolah — hanya dipakai untuk menguji sampel produk. Setelah
                masa uji selesai, mesin dikembalikan utuh ke Jepang. Fasilitas yang tepat: OB 23.
              </p>
            </div>
            <div className="bg-white border-2 border-green-100 rounded-2xl p-6">
              <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2">Kasus KITE</p>
              <p className="text-[#374151] text-sm leading-relaxed">
                Pabrik garmen di kawasan industri Batam mengimpor kain dan benang dari India
                setiap bulan, mengolahnya menjadi pakaian jadi, lalu mengekspor hasil produksinya
                ke Eropa. Karena bahan bakunya berubah bentuk dan prosesnya berulang setiap bulan,
                fasilitas yang tepat adalah KITE, bukan OB 23.
              </p>
            </div>
          </div>
        </div>

        {/* Tabel ringkasan */}
        <div className="mb-14">
          <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-6 text-center">Ringkasan Perbedaan</h2>
          <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0] shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0a1628] text-white">
                  <th className="text-left p-4 font-semibold">Aspek</th>
                  <th className="text-left p-4 font-semibold text-blue-300">OB 23</th>
                  <th className="text-left p-4 font-semibold text-green-300">KITE</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Bentuk barang", "Tetap sama saat diekspor kembali", "Berubah menjadi produk jadi"],
                  ["Sifat penggunaan", "Sekali kegiatan/proyek", "Berulang, siklus produksi rutin"],
                  ["Lama proses pengajuan", "Relatif cepat (hitungan hari)", "Lebih lama (verifikasi kapasitas produksi)"],
                  ["Audit Bea Cukai", "Umumnya sekali di akhir masa berlaku", "Berkala, mengikuti siklus produksi"],
                  ["Cocok untuk", "Pameran, proyek, tenaga ahli, sample uji", "Manufaktur garmen, elektronik, furnitur ekspor"],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                    <td className="p-4 font-medium text-[#0a1628]">{row[0]}</td>
                    <td className="p-4 text-blue-800">{row[1]}</td>
                    <td className="p-4 text-green-800">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

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

        {/* Related links */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-xl text-[#0a1628] mb-5">Artikel & Halaman Terkait</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Custom Bond Batam", href: "/asuransi-surety-bond/custom-bond", desc: "Halaman produk lengkap: OB 23, KITE, Kawasan Berikat, dan PPJK" },
              { title: "Panduan OB 23 Batam", href: "/blog/panduan-ob23-impor-sementara-batam", desc: "Cara mengurus impor sementara untuk pameran dan proyek" },
              { title: "Custom Bond untuk Galangan Kapal", href: "/blog/custom-bond-galangan-kapal-batam", desc: "Kombinasi Kawasan Berikat dan OB 23 di industri shipyard" },
              { title: "Asuransi Surety Bond Batam", href: "/asuransi-surety-bond", desc: "Semua jenis jaminan proyek dan kepabeanan di Batam" },
              { title: "Asuransi Freight Forwarders Liability (FFL) Batam", href: "/blog/asuransi-freight-forwarders-liability-batam-panduan-lengkap", desc: "Proteksi PPJK dari kesalahan dokumen OB23/KITE yang merugikan klien" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="group flex items-start gap-3 p-4 bg-[#faf8f3] rounded-xl border border-[#e2e8f0] hover:border-[#c9a84c]/50 hover:shadow-md transition-all">
                <GitCompareArrows className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" />
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
            Artikel ini disusun berdasarkan praktik pasar penjaminan kepabeanan di Indonesia dan
            pengalaman mendampingi perusahaan di Batam. Ketentuan teknis dapat berubah mengikuti
            regulasi Bea Cukai terbaru. Untuk kebutuhan spesifik, konsultasikan langsung dengan tim kami.
          </p>
        </div>
      </article>
      <CTASection />
    </>
  );
}

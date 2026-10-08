// app/blog/cara-klaim-asuransi-marine-cargo/page.tsx
import type { Metadata } from "next";
import QuoteButton from "@/components/quote/QuoteButton";
import { generateSEO } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";
import { Search, ListChecks, AlertTriangle, MessageCircleMore } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Cara Klaim Asuransi Marine Cargo",
  description:
    "Panduan step-by-step mengajukan klaim asuransi marine cargo: dokumen wajib, batas waktu lapor, dan kesalahan umum yang membuat klaim ditolak. Konsultasi Rio 0813-7333-6728.",
  canonical: "https://asuransibatam.com/blog/cara-klaim-asuransi-marine-cargo",
  languages: {
    id: "https://asuransibatam.com/blog/cara-klaim-asuransi-marine-cargo",
    en: "https://asuransibatam.com/en/blog/how-to-claim-marine-cargo-insurance",
  },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cara Klaim Asuransi Marine Cargo yang Benar – Panduan Lengkap",
  description: "Panduan step-by-step mengajukan klaim asuransi marine cargo: dokumen wajib, batas waktu lapor, dan kesalahan umum yang membuat klaim ditolak.",
  datePublished: "2026-05-07",
  dateModified: "2026-05-07",
  author: { "@type": "Person", name: "Rio", jobTitle: "Praktisi Asuransi", telephone: "+6281373336728" },
  publisher: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", url: "https://asuransibatam.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://asuransibatam.com/blog/cara-klaim-asuransi-marine-cargo" },
};

export default function CaraKlaimMarineCargoPage() {
  return (
    <ArticleLayout
      cluster="marine"
      title="Cara Klaim Asuransi Marine Cargo yang Benar – Panduan Lengkap"
      description="Dokumen wajib, batas waktu pelaporan, dan langkah-langkah yang benar agar klaim marine cargo Anda tidak ditolak."
      date="7 Mei 2026"
      readTime="8 menit"
      category="Marine"
      breadcrumbs={[{ label: "Cara Klaim Marine Cargo", href: "/blog/cara-klaim-asuransi-marine-cargo" }]}
      schema={schema}
    >
      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-3">
        Memahami Akar Masalah
      </p>
      <h2 className="flex items-center gap-3">
        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
          <Search className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
        </span>
        Mengapa Proses Klaim Marine Cargo Sering Gagal?
      </h2>
      <p>
        Banyak importir dan eksportir di Batam baru menyadari celah polis mereka justru saat kargo tiba dalam kondisi rusak atau hilang. Bukan karena perusahaan asuransi tidak mau membayar — melainkan karena langkah pertama setelah insiden sering dilakukan keliru.
      </p>
      <p>
        Klaim marine cargo punya keunikan dibanding asuransi lain: barang sudah berpindah tangan antar moda transportasi, dokumentasi melibatkan banyak pihak (shipper, carrier, forwarder, bea cukai), dan batas waktu pelaporan sangat ketat.
      </p>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] whitespace-nowrap">
          Langkah Demi Langkah
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="flex items-center justify-center gap-3 text-center">
        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
          <ListChecks className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
        </span>
        5 Langkah Mengajukan Klaim Marine Cargo
      </h2>

      <div className="not-prose mt-10 mb-4">
        {/* Langkah 1 */}
        <div className="flex gap-5">
          <div className="flex flex-col items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0a1628] font-display text-base font-bold text-[#c9a84c]">
              01
            </span>
            <span className="mt-1 w-px flex-1 bg-[#e2e8f0]" style={{ minHeight: "2.5rem" }} />
          </div>
          <div className="pb-9 prose-p:my-3">
            <h3 className="mt-1.5 mb-3">Segera Buat Catatan Kerusakan di Lokasi</h3>
            <p>
              Begitu kargo tiba dan ditemukan kondisi tidak sesuai — entah basah, penyok, kurang jumlah, atau hilang sebagian — hal pertama yang harus dilakukan adalah <strong>membuat notasi kerusakan (damage notation) pada dokumen penerimaan</strong>.
            </p>
            <p>
              Jangan tanda tangani Delivery Order atau Surat Jalan dalam kondisi bersih jika barang memang bermasalah. Tulis secara eksplisit: <em>&quot;Received with damage – dents on 3 cartons&quot;</em> atau <em>&quot;Short landed – 2 boxes missing&quot;</em>. Notasi ini menjadi bukti bahwa kerusakan sudah ada sebelum barang masuk gudang Anda.
            </p>
            <p>
              <strong>Yang sering terjadi:</strong> Petugas gudang menandatangani dokumen tanpa memeriksa fisik barang karena terburu-buru. Ini membuat klaim sangat sulit dibuktikan karena tidak ada catatan resmi pada titik serah terima.
            </p>
          </div>
        </div>

        {/* Langkah 2 */}
        <div className="flex gap-5">
          <div className="flex flex-col items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0a1628] font-display text-base font-bold text-[#c9a84c]">
              02
            </span>
            <span className="mt-1 w-px flex-1 bg-[#e2e8f0]" style={{ minHeight: "2.5rem" }} />
          </div>
          <div className="pb-9 prose-p:my-3">
            <h3 className="mt-1.5 mb-3">Laporkan ke Perusahaan Asuransi Dalam 3×24 Jam</h3>
            <p>
              Sebagian besar polis marine cargo mensyaratkan <strong>laporan awal (first notice of loss)</strong> dalam 3 hari kalender sejak barang diterima atau sejak kerusakan diketahui. Beberapa polis bahkan mensyaratkan 24 jam.
            </p>
            <p>Laporan awal tidak harus lengkap — cukup informasikan nomor polis, nomor bill of lading, deskripsi singkat kerusakan, dan estimasi nilai kerugian sementara. Jangan tunggu semua dokumen terkumpul baru lapor.</p>
          </div>
        </div>

        {/* Langkah 3 */}
        <div className="flex gap-5">
          <div className="flex flex-col items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0a1628] font-display text-base font-bold text-[#c9a84c]">
              03
            </span>
            <span className="mt-1 w-px flex-1 bg-[#e2e8f0]" style={{ minHeight: "2.5rem" }} />
          </div>
          <div className="pb-9 prose-p:my-3 min-w-0">
            <h3 className="mt-1.5 mb-3">Kumpulkan Dokumen Klaim Lengkap</h3>
            <p>Dokumen standar yang diminta surveyor dan perusahaan asuransi:</p>
            <div className="not-prose my-5 overflow-hidden rounded-2xl border border-[#e2e8f0] shadow-[0_8px_24px_-8px_rgba(10,22,40,0.12)]">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#0a1628] text-white">
                    <th className="text-left px-5 py-4 font-display tracking-wide">Dokumen</th>
                    <th className="text-left px-5 py-4 font-display tracking-wide">Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Polis asuransi / cover note", "Bukti pertanggungan aktif"],
                    ["Bill of Lading / Airway Bill", "Bukti pengiriman resmi"],
                    ["Commercial Invoice", "Nilai barang yang diasuransikan"],
                    ["Packing List", "Detail isi kargo per koli"],
                    ["Certificate of Insurance", "Bukti kepesertaan kargo dalam polis"],
                    ["Delivery Order / Surat Jalan", "Dokumen penerimaan dari carrier – harus ada notasi kerusakan"],
                    ["Foto kerusakan", "Diambil sebelum barang dipindahkan"],
                  ].map(([doc, ket], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                      <td className="px-5 py-4 font-semibold text-[#0a1628] border-b border-[#e2e8f0]">{doc}</td>
                      <td className="px-5 py-4 text-[#475569] leading-relaxed border-b border-[#e2e8f0]">{ket}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>Dokumen tambahan tergantung jenis klaim: laporan surveyor independen untuk kargo basah/rusak, laporan short landing dari pelabuhan untuk kargo kurang, atau dokumen sengketa impor untuk kargo tertahan bea cukai.</p>
          </div>
        </div>

        {/* Langkah 4 */}
        <div className="flex gap-5">
          <div className="flex flex-col items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0a1628] font-display text-base font-bold text-[#c9a84c]">
              04
            </span>
            <span className="mt-1 w-px flex-1 bg-[#e2e8f0]" style={{ minHeight: "2.5rem" }} />
          </div>
          <div className="pb-9 prose-p:my-3">
            <h3 className="mt-1.5 mb-3">Proses Survei oleh Loss Adjuster</h3>
            <p>
              Setelah laporan diterima, perusahaan asuransi akan menunjuk <strong>surveyor / loss adjuster independen</strong> untuk menilai kerugian secara objektif. Jangan pindahkan atau buang barang rusak sebelum survei selesai. Pisahkan koli yang rusak dari yang baik agar mudah dihitung, dan siapkan informasi rute pengiriman lengkap.
            </p>
            <p>Hasil survei dituangkan dalam <strong>Survey Report</strong> yang menjadi dasar perhitungan ganti rugi.</p>
          </div>
        </div>

        {/* Langkah 5 */}
        <div className="flex gap-5">
          <div className="flex flex-col items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0a1628] font-display text-base font-bold text-[#c9a84c]">
              05
            </span>
          </div>
          <div className="prose-p:my-3">
            <h3 className="mt-1.5 mb-3">Perhitungan dan Pembayaran Klaim</h3>
            <p>Jumlah ganti rugi dipengaruhi oleh metode penilaian di polis: <strong>Agreed Value</strong> (nilai disepakati di polis), <strong>Market Value</strong> (nilai pasar saat kerugian), atau <strong>Invoice Value + persentase</strong> (biasanya +10% untuk biaya lain).</p>
            <p>
              Perhatikan juga <strong>deductible (risiko sendiri)</strong> — hampir semua polis marine cargo punya deductible. Ketahui besarannya sebelum mengajukan klaim yang nilainya mungkin di bawah threshold tersebut.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] whitespace-nowrap">
          Hindari & Persiapkan
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="flex items-center justify-center gap-3 text-center">
        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
          <AlertTriangle className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
        </span>
        Kesalahan Umum vs Tips Sebelum Kargo Dikirim
      </h2>

      <div className="not-prose mt-8 mb-10 grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-[#e2e8f0] bg-[#faf8f3] p-6">
          <p className="font-display font-bold text-[#0a1628] mb-4 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0a1628]/10 text-[#0a1628] text-xs">
              ✕
            </span>
            Kesalahan Umum yang Membuat Klaim Ditolak
          </p>
          <ul className="space-y-3 text-sm text-[#475569] leading-relaxed">
            <li className="flex gap-2"><span className="text-[#94a3b8]">—</span>Tidak ada notasi kerusakan di dokumen penerimaan</li>
            <li className="flex gap-2"><span className="text-[#94a3b8]">—</span>Terlambat lapor — melewati batas waktu first notice of loss</li>
            <li className="flex gap-2"><span className="text-[#94a3b8]">—</span>Barang sudah diproses sebelum survei (kargo basah langsung dikeringkan atau dijual)</li>
            <li className="flex gap-2"><span className="text-[#94a3b8]">—</span>Polis tidak menutup rute atau moda pengiriman yang digunakan</li>
            <li className="flex gap-2"><span className="text-[#94a3b8]">—</span>Kemasan tidak sesuai standar — pengecualian umum di hampir semua polis</li>
            <li className="flex gap-2"><span className="text-[#94a3b8]">—</span>Under-insurance — nilai yang diasuransikan lebih rendah dari nilai aktual, ganti rugi dipotong proporsional</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6">
          <p className="font-display font-bold text-[#0a1628] mb-4 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0a1628] text-[#c9a84c] text-xs">
              ✓
            </span>
            Tips Sebelum Kargo Dikirim
          </p>
          <ul className="space-y-3 text-sm text-[#475569] leading-relaxed">
            <li className="flex gap-2"><span className="text-[#c9a84c]">—</span>Foto dan video kondisi barang sebelum stuffing ke kontainer</li>
            <li className="flex gap-2"><span className="text-[#c9a84c]">—</span>Pastikan polis aktif sebelum barang berangkat — jangan kirim tanpa cover</li>
            <li className="flex gap-2"><span className="text-[#c9a84c]">—</span>Pilih klausa yang tepat: ICC (A) all-risk lebih luas dari ICC (B) dan ICC (C)</li>
            <li className="flex gap-2"><span className="text-[#c9a84c]">—</span>Simpan semua dokumen pengiriman dalam satu folder per shipment</li>
            <li className="flex gap-2"><span className="text-[#c9a84c]">—</span>Cantumkan nilai yang benar — under-insurance akan merugikan saat klaim</li>
          </ul>
        </div>
      </div>

      <div className="mt-4 p-7 sm:p-8 bg-[#0a1628] rounded-2xl text-white not-prose relative overflow-hidden">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#c9a84c]/10" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-3">
          Konsultasi Gratis
        </p>
        <h3 className="flex items-center gap-2.5 font-display font-bold text-xl text-white mb-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 shrink-0">
            <MessageCircleMore className="w-[16px] h-[16px] text-[#c9a84c]" strokeWidth={2} />
          </span>
          Butuh Bantuan Klaim atau Konsultasi Polis Marine?
        </h3>
        <p className="text-white/70 text-sm mb-6 leading-relaxed max-w-2xl">
          Proses klaim marine cargo bisa rumit, terutama jika melibatkan beberapa moda transportasi atau transit di beberapa pelabuhan. Sebagai praktisi berbasis di Batam dengan pengalaman di jalur Batam–Singapura–Jakarta, saya siap membantu dari awal hingga klaim cair.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <QuoteButton cluster="marine" lang="id" variant="gold" className="!rounded-xl !px-6 !py-3 !text-sm" />
          <Link href="/asuransi-marine/marine-cargo"
            className="px-5 py-3 border border-white/30 text-white font-semibold rounded-xl text-sm text-center hover:bg-white/10 transition-colors">
            Lihat Produk Marine Cargo
          </Link>
        </div>
      </div>

      <div className="mt-6 p-6 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0] not-prose">
        <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[#0a1628] mb-4">Artikel Terkait</p>
        <div className="flex flex-col gap-3">
          <Link href="/blog/perbedaan-marine-hull-vs-cargo" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Perbedaan Marine Hull dan Marine Cargo</Link>
          <Link href="/blog/asuransi-pengiriman-batam-singapore" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Asuransi Pengiriman Batam–Singapura</Link>
          <Link href="/asuransi-marine/marine-cargo" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Produk Asuransi Marine Cargo Batam</Link>
        </div>
      </div>
    
      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Halaman Terkait</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Produk &amp; Layanan</p>
            <ul className="space-y-2">
              <li><a href="/asuransi-marine/marine-cargo" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Cargo Insurance Batam</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait</p>
            <ul className="space-y-2">
              <li><a href="/blog/premi-asuransi-marine-cargo-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Cara Hitung Premi Marine Cargo Batam</a></li>
              <li><a href="/blog/asuransi-cargo-ekspor-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Cargo Ekspor dari Batam</a></li>
              <li><a href="/blog/asuransi-pengiriman-mesin-alat-berat" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Pengiriman Mesin & Alat Berat</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}

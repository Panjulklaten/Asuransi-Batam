// app/asuransi-surety-bond/custom-bond/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";
import {
  Plane,
  Factory,
  Warehouse,
  ClipboardCheck,
  Scale,
  Ship,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Custom Bond Batam – Jaminan Kepabeanan Impor Ekspor & OB 23",
  description: "Custom bond (customs bond) di Batam untuk fasilitas kepabeanan: OB 23/impor sementara, KITE, Kawasan Berikat, dan PPJK. Tanpa agunan tunai penuh, proses 3-7 hari kerja. Konsultasi gratis dengan Rio.",
  keywords: [
    "custom bond batam",
    "customs bond batam",
    "ob 23 batam",
    "jaminan kepabeanan batam",
    "impor sementara batam",
    "asuransi bea cukai batam",
    "kite batam",
    "jaminan bea cukai batam",
    "ppjk batam",
  ],
  canonical: "https://asuransibatam.com/asuransi-surety-bond/custom-bond",
  languages: {
    id: "https://asuransibatam.com/asuransi-surety-bond/custom-bond",
    en: "https://asuransibatam.com/en/surety-bond-insurance/custom-bond",
  },
});

const benefits = [
  {
    icon: "✈️",
    title: "OB 23 – Impor Sementara",
    desc: "Jaminan pembebasan Bea Masuk dan penangguhan PPN untuk barang impor yang akan diekspor kembali — pameran, seminar, peralatan tenaga ahli, hingga keperluan proyek.",
  },
  {
    icon: "🏭",
    title: "KITE (Kemudahan Impor Tujuan Ekspor)",
    desc: "Jaminan atas pembebasan/pengembalian Bea Masuk dan PPN untuk bahan baku impor yang diolah menjadi komoditi ekspor — benang, kulit, garmen, dan sejenisnya.",
  },
  {
    icon: "🏗️",
    title: "Kawasan Berikat (Kaber/EPTE)",
    desc: "Jaminan bagi perusahaan di Kawasan Berikat Batam yang mengeluarkan barang untuk direparasi, disortir, atau diproses subkontrak di luar kawasan sebelum dikembalikan.",
  },
  {
    icon: "📋",
    title: "PPJK (Pengurusan Jasa Kepabeanan)",
    desc: "Jaminan wajib bagi Pengusaha Pengurusan Jasa Kepabeanan untuk mendapatkan Nomor Pokok PPJK dari Kantor Pelayanan Bea Cukai setempat.",
  },
  {
    icon: "⚖️",
    title: "SPKPBM / Notul (Banding Bea Masuk)",
    desc: "Jaminan sebagai syarat pengajuan keberatan atas Surat Pemberitahuan Kekurangan Pembayaran Bea Masuk yang diterbitkan Bea Cukai.",
  },
  {
    icon: "🚢",
    title: "Vooruitslag & Angkut Lanjut",
    desc: "Jaminan pengeluaran barang lebih dahulu dari pelabuhan/KPBC dengan penangguhan Bea Masuk, Cukai, dan Pajak — termasuk pengangkutan lanjutan antar kantor pabean.",
  },
];

const faqs = [
  {
    q: "Apa itu Custom Bond dan siapa saja pihak yang terlibat?",
    a: "Custom bond adalah jaminan tiga pihak antara Surety (perusahaan asuransi penerbit jaminan), Principal (importir/eksportir/PPJK), dan Obligee (Direktorat Jenderal Bea dan Cukai). Jika Principal gagal memenuhi kewajiban kepabeanan, Surety yang membayar ganti rugi kepada Bea Cukai, bukan Principal yang harus menyetor tunai di muka.",
  },
  {
    q: "Apa bedanya Custom Bond dengan OB 23?",
    a: "Custom Bond adalah nama umum untuk seluruh jenis jaminan kepabeanan yang diterbitkan perusahaan asuransi. OB 23 (Ordonansi Bea Pasal 23) hanyalah salah satu jenis fasilitas di dalamnya, khusus untuk impor sementara — barang yang masuk untuk keperluan tertentu (pameran, proyek, tenaga ahli) dan wajib diekspor kembali dalam jangka waktu tertentu.",
  },
  {
    q: "Apakah Custom Bond bisa menggantikan Bank Garansi sepenuhnya?",
    a: "Bisa, dan itu justru keunggulan utamanya. Undang-Undang Kepabeanan mengakui jaminan perusahaan asuransi (Custom Bond) setara dengan Bank Garansi dan jaminan tunai untuk keperluan Bea Cukai. Bedanya, Custom Bond umumnya tidak memerlukan setoran agunan 100% seperti bank garansi, sehingga likuiditas perusahaan tetap terjaga.",
  },
  {
    q: "Berapa lama masa berlaku Custom Bond?",
    a: "Masa berlaku mengikuti jangka waktu fasilitas kepabeanan yang diberikan Bea Cukai (misalnya masa impor sementara), ditambah buffer waktu tertentu untuk proses administrasi. Jika fasilitas diperpanjang, Custom Bond juga harus diperpanjang bersamaan agar tidak ada celah jaminan.",
  },
  {
    q: "Dokumen apa saja yang paling sering ditolak Bea Cukai saat pengajuan?",
    a: "Yang paling sering menjadi kendala adalah SKEP (Surat Keputusan) fasilitas Bea Cukai yang belum terbit, laporan keuangan yang belum diaudit untuk nilai jaminan besar, dan Surat Perjanjian Ganti Rugi (SPGR) yang belum dilegalisir notaris. Pastikan ketiga dokumen ini disiapkan lebih awal agar proses tidak tertunda.",
  },
  {
    q: "Apa yang terjadi jika perusahaan gagal ekspor kembali barang impor sementara (OB 23)?",
    a: "Bea Cukai akan menagih Bea Masuk dan PPN yang sempat dibebaskan kepada Principal. Jika Principal tidak membayar, Bea Cukai mencairkan Custom Bond kepada perusahaan asuransi penjamin sebesar nilai jaminan. Selanjutnya, Surety akan melakukan penagihan (recovery) kepada Principal sesuai Surat Perjanjian Ganti Rugi yang telah ditandatangani.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Bond Batam",
  description:
    "Layanan penerbitan custom bond (customs bond) di Batam untuk fasilitas kepabeanan: OB 23/impor sementara, KITE, Kawasan Berikat, PPJK, dan banding SPKPBM.",
  provider: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam – Rio",
    telephone: "+6281373336728",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Batam",
      addressRegion: "Kepulauan Riau",
      addressCountry: "ID",
    },
  },
  areaServed: { "@type": "City", name: "Batam" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Jenis Fasilitas Custom Bond",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "OB 23 / Impor Sementara" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "KITE" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kawasan Berikat (Kaber)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "PPJK" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function CustomBondPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ProductPageLayout
        cluster="surety"
        title="Custom Bond Batam"
        subtitle="Jaminan Kepabeanan untuk Impor & Ekspor"
        description="Sebagai kota dengan status Kawasan Perdagangan Bebas (FTZ), aktivitas impor-ekspor di Batam sangat intensif — dan hampir semua fasilitas kepabeanan mensyaratkan jaminan. Custom bond memungkinkan perusahaan Anda mendapatkan fasilitas OB 23, KITE, atau Kawasan Berikat tanpa harus mengunci dana tunai sebagai agunan seperti pada bank garansi."
        benefits={benefits}
        faqs={faqs}
        breadcrumbs={[
          { label: "Surety Bond", href: "/asuransi-surety-bond" },
          { label: "Custom Bond", href: "/asuransi-surety-bond/custom-bond" },
        ]}
        schema={schema}
      >
        {/* ── Apa Itu Custom Bond ── */}
        <div className="mb-16 max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-[#0a1628] mb-4 text-center">
            Apa Itu Custom Bond?
          </h2>
          <p className="text-[#374151] leading-relaxed mb-4">
            <strong>Custom bond</strong> (customs bond) adalah jenis penjaminan yang diterbitkan
            oleh perusahaan asuransi umum berlisensi OJK untuk kepentingan pihak Terjamin
            (<em>Principal</em>) — biasanya importir, eksportir, atau PPJK — kepada Direktorat
            Jenderal Bea dan Cukai (<em>Obligee</em>) selaku penerima jaminan. Dasar hukumnya
            adalah UU No. 10 Tahun 1995 jo. UU No. 17 Tahun 2006 tentang Kepabeanan, serta PMK
            No. 259/PMK.04/2010 tentang Jaminan Dalam Rangka Kepabeanan.
          </p>
          <p className="text-[#374151] leading-relaxed">
            Jika Principal gagal memenuhi kewajiban sesuai fasilitas kepabeanan yang diperoleh —
            misalnya tidak mengekspor kembali barang impor sementara tepat waktu — Bea Cukai
            dapat langsung mencairkan custom bond tanpa harus menagih Principal terlebih dahulu.
            Perusahaan asuransi (<em>Surety</em>) yang membayar ganti rugi tersebut, lalu
            melakukan penagihan kembali kepada Principal berdasarkan Surat Perjanjian Ganti Rugi
            (SPGR) yang telah disepakati di awal.
          </p>

          {/* Contoh kasus */}
          <div className="mt-8 bg-white border-l-4 border-[#c9a84c] rounded-r-2xl p-6 shadow-sm">
            <p className="font-display font-bold text-[#0a1628] mb-2 text-sm uppercase tracking-wide">
              Contoh Kasus
            </p>
            <p className="text-[#374151] leading-relaxed text-sm">
              Sebuah perusahaan penyelenggara pameran industri di Batam mendatangkan peralatan
              display senilai <strong>Rp 2 miliar</strong> dari Singapura untuk pameran selama 2
              minggu. Karena barang akan dibawa kembali keluar negeri, perusahaan mengajukan
              fasilitas <strong>OB 23 (Impor Sementara)</strong> agar tidak perlu membayar Bea
              Masuk penuh di muka. Bea Cukai mensyaratkan jaminan sebesar potensi Bea Masuk dan
              PPN yang dibebaskan. Alih-alih menyetor tunai atau memblokir plafon kredit bank,
              perusahaan menerbitkan custom bond senilai kewajiban tersebut — dana operasional
              tetap cair untuk kebutuhan pameran lainnya.
            </p>
            <p className="text-[#475569] mt-3 text-xs leading-relaxed">
              Setelah barang diekspor kembali sesuai jadwal dan dibuktikan dengan dokumen PEB
              (Pemberitahuan Ekspor Barang), custom bond dinyatakan selesai dan tidak ada
              pencairan yang terjadi.
            </p>
          </div>
        </div>

        {/* ── Custom Bond vs Bank Garansi ── */}
        <div className="mb-16 max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">
            Custom Bond vs Bank Garansi
          </h2>
          <p className="text-center text-[#475569] mb-8 max-w-2xl mx-auto">
            Keduanya diakui sah oleh Bea Cukai — tapi dampaknya ke keuangan perusahaan sangat berbeda.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-[#c9a84c]/40 bg-[#faf8f3] p-6">
              <h3 className="font-display font-bold text-[#0a1628] mb-3 flex items-center gap-2">
                <span className="text-xl">✅</span> Custom Bond (Asuransi)
              </h3>
              <ul className="space-y-2 text-sm text-[#374151]">
                <li>• Umumnya tanpa setoran agunan tunai 100%</li>
                <li>• Tidak membebani plafon kredit/pagu pinjaman di bank</li>
                <li>• Premi jauh lebih ringan dibanding bunga bank atas agunan</li>
                <li>• Proses penerbitan relatif cepat, 3–7 hari kerja</li>
                <li>• Diterima di seluruh Kantor Pelayanan Bea Cukai di Indonesia</li>
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-[#e2e8f0] bg-white p-6">
              <h3 className="font-display font-bold text-[#0a1628] mb-3 flex items-center gap-2">
                <span className="text-xl">🏦</span> Bank Garansi
              </h3>
              <ul className="space-y-2 text-sm text-[#475569]">
                <li>• Umumnya mensyaratkan agunan tunai/deposito hingga 100%</li>
                <li>• Mengunci plafon kredit perusahaan di bank terkait</li>
                <li>• Dana tertahan sepanjang masa berlaku jaminan</li>
                <li>• Proses relatif lebih lama karena analisa kredit perbankan</li>
                <li>• Perlu dikelola terpisah dari fasilitas pinjaman modal kerja</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Persyaratan Dokumen ── */}
        <div className="mb-16 max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">
            Persyaratan Dokumen Pengajuan Custom Bond
          </h2>
          <p className="text-center text-[#475569] mb-8">
            Siapkan dokumen berikut agar proses penerbitan tidak tertunda.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: ClipboardCheck, text: "Surat Permohonan Penerbitan Custom Bond" },
              { icon: Factory, text: "Company profile & legalitas perusahaan (akta, NIB, NPWP)" },
              { icon: Scale, text: "Laporan keuangan 2 tahun terakhir, idealnya sudah diaudit" },
              { icon: Warehouse, text: "Copy rekening koran 3 bulan terakhir (khusus perusahaan baru berdiri)" },
              { icon: Ship, text: "SKEP (Surat Keputusan) fasilitas dari Bea Cukai" },
              { icon: Plane, text: "Surat Perjanjian Ganti Rugi (SPGR) yang dilegalisir notaris" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-[#f0f7ff] border border-[#dbeafe]"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#1a4fa0] shrink-0">
                  <item.icon className="w-4 h-4 text-white" strokeWidth={2} />
                </span>
                <span className="text-sm text-[#0a1628] leading-relaxed pt-1">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Proses Penerbitan ── */}
        <div className="mb-16 max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-8 text-center">
            Proses Penerbitan Custom Bond
          </h2>
          <ol className="space-y-5">
            {[
              { title: "Ajukan permohonan fasilitas ke Bea Cukai", desc: "Principal mengajukan permohonan fasilitas impor/ekspor (OB 23, KITE, dll) kepada Ditjen Bea dan Cukai." },
              { title: "Terima SKEP fasilitas", desc: "Bea Cukai menerbitkan Surat Keputusan pemberian fasilitas beserta nilai jaminan yang dipersyaratkan." },
              { title: "Ajukan penerbitan Custom Bond", desc: "Principal mengajukan ke perusahaan asuransi dengan melampirkan SKEP dan dokumen pendukung lainnya." },
              { title: "Sertifikat Custom Bond terbit", desc: "Surety menerbitkan sertifikat jaminan dan menandatangani Surat Perjanjian Ganti Rugi bersama Principal." },
              { title: "Serahkan ke Bea Cukai", desc: "Sertifikat Custom Bond diserahkan ke Kantor Pabean untuk memperoleh Bukti Penerimaan Jaminan (BPJ), dan barang dapat diproses lebih lanjut." },
            ].map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0a1628] text-[#c9a84c] font-display font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <div className="pt-1">
                  <p className="font-semibold text-[#0a1628] text-[15px]">{step.title}</p>
                  <p className="text-sm text-[#475569] mt-1">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* ── Estimasi Premi ── */}
        <div className="mb-16 max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">
            Estimasi Premi Custom Bond
          </h2>
          <p className="text-center text-[#475569] mb-8 max-w-2xl mx-auto">
            Premi dihitung dari persentase nilai jaminan (bukan nilai barang), tergantung jenis
            fasilitas, tenor, dan profil risiko perusahaan.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0] shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0a1628] text-white">
                  <th className="text-left p-4 font-semibold">Nilai Jaminan</th>
                  <th className="text-left p-4 font-semibold">Jenis Fasilitas</th>
                  <th className="text-left p-4 font-semibold">Estimasi Premi/Tahun</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e2e8f0]">
                  <td className="p-4 text-[#0a1628] font-medium">Rp 100 juta</td>
                  <td className="p-4 text-[#475569]">OB 23 (Impor Sementara)</td>
                  <td className="p-4 text-[#1a4fa0] font-semibold">Rp 800 rb – 2 jt</td>
                </tr>
                <tr className="border-b border-[#e2e8f0] bg-[#f8faff]">
                  <td className="p-4 text-[#0a1628] font-medium">Rp 500 juta</td>
                  <td className="p-4 text-[#475569]">KITE / Kawasan Berikat</td>
                  <td className="p-4 text-[#1a4fa0] font-semibold">Rp 4 – 9 jt</td>
                </tr>
                <tr className="border-b border-[#e2e8f0]">
                  <td className="p-4 text-[#0a1628] font-medium">Rp 1 miliar</td>
                  <td className="p-4 text-[#475569]">KITE / Kawasan Berikat</td>
                  <td className="p-4 text-[#1a4fa0] font-semibold">Rp 8 – 18 jt</td>
                </tr>
                <tr>
                  <td className="p-4 text-[#0a1628] font-medium">Rp 150 juta (min. Tj. Priok)</td>
                  <td className="p-4 text-[#475569]">PPJK</td>
                  <td className="p-4 text-[#1a4fa0] font-semibold">Rp 1,2 – 2,7 jt</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#475569] mt-3 text-center">
            * Estimasi ilustrasi umum berdasarkan rate pasar (kisaran 0,8%–1,8% dari nilai jaminan
            per tahun). Premi aktual ditentukan underwriter berdasarkan jenis fasilitas, tenor,
            dan profil risiko perusahaan Anda — hubungi kami untuk penawaran resmi.
          </p>
        </div>

        {/* ── Related Links ── */}
        <div>
          <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">
            Jenis Jaminan Lain yang Sering Dibutuhkan Bersamaan
          </h2>
          <p className="text-center text-[#475569] mb-8 max-w-2xl mx-auto">
            Pelaku impor-ekspor di Batam sering membutuhkan lebih dari satu jenis jaminan sekaligus.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/blog/panduan-ob23-impor-sementara-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
              <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Panduan OB 23</h3>
              <p className="text-[#475569] text-sm">Cara mengurus impor sementara untuk pameran dan proyek, lengkap dengan kesalahan umum yang harus dihindari.</p>
            </Link>
            <Link href="/blog/ob23-vs-kite-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
              <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">OB 23 vs KITE</h3>
              <p className="text-[#475569] text-sm">Cara menentukan fasilitas kepabeanan yang tepat untuk bisnis impor-ekspor Anda.</p>
            </Link>
            <Link href="/blog/custom-bond-galangan-kapal-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
              <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Custom Bond Galangan Kapal</h3>
              <p className="text-[#475569] text-sm">Kombinasi Kawasan Berikat dan OB 23 yang umum dipakai industri shipyard Batam.</p>
            </Link>
            <Link href="/blog/checklist-dokumen-custom-bond-ditolak" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
              <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Checklist Dokumen Sering Ditolak</h3>
              <p className="text-[#475569] text-sm">5 dokumen yang paling sering bikin pengajuan custom bond tertunda di Bea Cukai.</p>
            </Link>
            <Link href="/asuransi-surety-bond/bid-bond" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
              <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Bid Bond</h3>
              <p className="text-[#475569] text-sm">Jaminan penawaran untuk tender pengadaan barang/jasa pemerintah dan swasta.</p>
            </Link>
            <Link href="/asuransi-marine/marine-cargo" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
              <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Marine Cargo</h3>
              <p className="text-[#475569] text-sm">Lindungi nilai barang impor/ekspor Anda dari risiko kerusakan atau kehilangan selama pengiriman.</p>
            </Link>
          </div>
        </div>
      </ProductPageLayout>
    </>
  );
}

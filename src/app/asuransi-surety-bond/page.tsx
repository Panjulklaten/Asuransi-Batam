// app/asuransi-surety-bond/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";
import { tone } from "@/components/card-tones";
import { ArrowRight, Banknote, ClipboardList, Container, FileCheck2, Gavel, Hammer, Handshake, HardHat, Ship, Wrench, Zap } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Surety Bond Batam – Jaminan Proyek & Kontrak",
  description: "Surety Bond di Batam untuk perusahaan konstruksi, kontraktor, dan pengadaan. Bid bond, performance bond, advance payment bond, dan maintenance bond. Proses cepat, premi kompetitif. Konsultasi gratis dengan Rio.",
  keywords: [
    "surety bond batam",
    "jaminan penawaran batam",
    "performance bond batam",
    "jaminan pelaksanaan batam",
    "jaminan uang muka batam",
    "surety bond konstruksi batam",
    "asuransi surety bond batam",
    "custom bond batam",
    "ob 23 batam",
  ],
  canonical: "https://asuransibatam.com/asuransi-surety-bond",
  languages: {
      id: "https://asuransibatam.com/asuransi-surety-bond",
      en: "https://asuransibatam.com/en/surety-bond-insurance",
    },
});

const benefits = [
  {
    icon: "📋", Icon: ClipboardList,
    title: "Bid Bond (Jaminan Penawaran)",
    desc: "Jaminan bahwa pemenang tender akan menandatangani kontrak dan menyerahkan jaminan pelaksanaan sesuai syarat lelang.",
    href: "/asuransi-surety-bond/bid-bond",
  },
  {
    icon: "🏗️", Icon: HardHat,
    title: "Performance Bond (Jaminan Pelaksanaan)",
    desc: "Jaminan bahwa kontraktor akan menyelesaikan proyek sesuai kontrak, spesifikasi teknis, dan jadwal yang disepakati.",
    href: "/asuransi-surety-bond/performance-bond",
  },
  {
    icon: "💵", Icon: Banknote,
    title: "Advance Payment Bond (Jaminan Uang Muka)",
    desc: "Jaminan pengembalian uang muka apabila kontraktor gagal melaksanakan pekerjaan setelah menerima pembayaran awal.",
    href: "/asuransi-surety-bond/advance-payment-bond",
  },
  {
    icon: "🔧", Icon: Wrench,
    title: "Maintenance Bond (Jaminan Pemeliharaan)",
    desc: "Jaminan perbaikan cacat tersembunyi atau kerusakan yang timbul dalam masa pemeliharaan setelah proyek selesai.",
    href: "/asuransi-surety-bond/maintenance-bond",
  },
  {
    icon: "🚢", Icon: Ship,
    title: "Custom Bond (Jaminan Kepabeanan)",
    desc: "Jaminan untuk fasilitas Bea Cukai — OB 23/impor sementara, KITE, Kawasan Berikat, dan PPJK — tanpa perlu agunan tunai penuh.",
    href: "/asuransi-surety-bond/custom-bond",
  },
  {
    icon: "⚡", Icon: Zap,
    title: "Proses Cepat & Mudah",
    desc: "Penerbitan surety bond dalam 1–3 hari kerja. Dokumen minimal, tidak memerlukan agunan untuk nilai tertentu.",
  },
  {
    icon: "🤝", Icon: Handshake,
    title: "Didukung Penanggung Terkemuka",
    desc: "Bekerja sama dengan perusahaan asuransi surety berlisensi OJK. Jaminan diakui pemerintah, BUMN, dan swasta.",
  },
];

const faqs = [
  {
    q: "Apa perbedaan Surety Bond dengan Bank Garansi?",
    a: "Surety bond diterbitkan oleh perusahaan asuransi dan umumnya tidak memerlukan agunan/setoran tunai seperti bank garansi. Premi lebih ringan dan proses penerbitan lebih cepat, cocok untuk kontraktor dan perusahaan yang ingin menjaga likuiditas.",
  },
  {
    q: "Berapa nilai surety bond yang bisa diterbitkan di Batam?",
    a: "Nilai surety bond bervariasi sesuai kebutuhan proyek, mulai dari ratusan juta hingga puluhan miliar rupiah. Besaran premi dihitung berdasarkan nilai kontrak, jenis bond, dan profil perusahaan pemohon.",
  },
  {
    q: "Dokumen apa saja yang dibutuhkan untuk pengajuan surety bond?",
    a: "Umumnya dibutuhkan: akta pendirian perusahaan, SIUP/NIB, laporan keuangan 2 tahun terakhir, dokumen tender/kontrak, dan data direktur. Untuk proyek pemerintah, biasanya juga diperlukan surat undangan tender.",
  },
  {
    q: "Apakah surety bond bisa digunakan untuk proyek pemerintah dan swasta?",
    a: "Ya. Surety bond dari perusahaan asuransi berlisensi OJK diterima untuk pengadaan pemerintah (Perpres 16/2018), BUMN, maupun proyek swasta di Batam dan seluruh Indonesia.",
  },
  {
    q: "Berapa lama proses penerbitan surety bond?",
    a: "Proses standar membutuhkan 1–3 hari kerja setelah dokumen lengkap. Untuk kebutuhan mendesak, tersedia layanan express dengan penerbitan dalam 1 hari kerja.",
  },
];

const policyComparison = [
  { feature: "Bid Bond / Jaminan Penawaran", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Performance Bond / Jaminan Pelaksanaan", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Advance Payment Bond / Jaminan Uang Muka", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Maintenance Bond / Jaminan Pemeliharaan", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Tanpa Agunan / Jaminan Setoran", basic: "Syarat tertentu", standard: "✅", comprehensive: "✅" },
  { feature: "Proses Express (1 hari kerja)", basic: "❌", standard: "Opsional", comprehensive: "✅" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Surety Bond Batam",
  description:
    "Layanan penerbitan surety bond di Batam: bid bond, performance bond, advance payment bond, dan maintenance bond untuk proyek konstruksi dan pengadaan.",
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
    name: "Jenis Surety Bond",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bid Bond" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Performance Bond" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Advance Payment Bond" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Maintenance Bond" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Bond" } },
    ],
  },
};

export default function SuretyBondPage() {
  return (
    <ProductPageLayout
      cluster="surety" rich
      heroImage={{ src: "/images/produk/surety-bond.webp", alt: "Sertifikat bond, ilustrasi asuransi surety bond untuk tender dan proyek di Batam", badge: "Jaminan tender dan kontrak untuk proyek di Batam", shape: "square" }}
      title="Asuransi Surety Bond Batam"
      subtitle="Jaminan Proyek & Kontrak Terpercaya"
      description="Kontraktor dan perusahaan di Batam membutuhkan surety bond yang cepat terbit, diakui pemerintah dan swasta, tanpa menguras likuiditas. Kami menyediakan bid bond, performance bond, advance payment bond, dan maintenance bond dengan proses mudah dan premi kompetitif."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Surety Bond", href: "/asuransi-surety-bond" },
      ]}
      schema={schema}
    >
      <div className="mb-6 md:mb-8">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Jenis Surety Bond yang Kami Terbitkan</h2><div aria-hidden="true" className="mx-auto mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-[#c9a84c] to-[#f0d080]" />
        <p className="text-center text-[#475569] mb-4 text-sm md:text-base max-w-2xl mx-auto">Pilih jenis jaminan sesuai tahapan proyek konstruksi atau pengadaan Anda di Batam.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <Link href="/asuransi-surety-bond/bid-bond" className={`group flex items-start gap-3 rounded-xl border p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md ${tone(0).card}`}><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ${tone(0).tile}`}><Gavel size={20} strokeWidth={2} aria-hidden="true" /></span><div className="min-w-0 flex-1"><h3 className="font-display font-bold text-[15px] leading-tight text-[#0a1628] group-hover:text-[#1a4fa0] mb-1 transition-colors">Bid Bond</h3>
            <p className="text-[#475569] text-[13px] leading-snug">Jaminan penawaran untuk mengikuti proses tender proyek pemerintah dan swasta.</p><span className={`mt-2 inline-flex items-center gap-1 text-xs font-semibold ${tone(0).text}`}>Lihat detail<ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></div></Link>
          <Link href="/asuransi-surety-bond/performance-bond" className={`group flex items-start gap-3 rounded-xl border p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md ${tone(1).card}`}><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ${tone(1).tile}`}><FileCheck2 size={20} strokeWidth={2} aria-hidden="true" /></span><div className="min-w-0 flex-1"><h3 className="font-display font-bold text-[15px] leading-tight text-[#0a1628] group-hover:text-[#1a4fa0] mb-1 transition-colors">Performance Bond</h3>
            <p className="text-[#475569] text-[13px] leading-snug">Jaminan pelaksanaan bahwa kontraktor menyelesaikan proyek sesuai kontrak dan jadwal.</p><span className={`mt-2 inline-flex items-center gap-1 text-xs font-semibold ${tone(1).text}`}>Lihat detail<ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></div></Link>
          <Link href="/asuransi-surety-bond/advance-payment-bond" className={`group flex items-start gap-3 rounded-xl border p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md ${tone(2).card}`}><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ${tone(2).tile}`}><Banknote size={20} strokeWidth={2} aria-hidden="true" /></span><div className="min-w-0 flex-1"><h3 className="font-display font-bold text-[15px] leading-tight text-[#0a1628] group-hover:text-[#1a4fa0] mb-1 transition-colors">Advance Payment Bond</h3>
            <p className="text-[#475569] text-[13px] leading-snug">Jaminan pengembalian uang muka jika kontraktor gagal memulai atau melanjutkan pekerjaan.</p><span className={`mt-2 inline-flex items-center gap-1 text-xs font-semibold ${tone(2).text}`}>Lihat detail<ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></div></Link>
          <Link href="/asuransi-surety-bond/maintenance-bond" className={`group flex items-start gap-3 rounded-xl border p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md ${tone(3).card}`}><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ${tone(3).tile}`}><Wrench size={20} strokeWidth={2} aria-hidden="true" /></span><div className="min-w-0 flex-1"><h3 className="font-display font-bold text-[15px] leading-tight text-[#0a1628] group-hover:text-[#1a4fa0] mb-1 transition-colors">Maintenance Bond</h3>
            <p className="text-[#475569] text-[13px] leading-snug">Jaminan pemeliharaan selama masa garansi setelah proyek konstruksi selesai dikerjakan.</p><span className={`mt-2 inline-flex items-center gap-1 text-xs font-semibold ${tone(3).text}`}>Lihat detail<ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></div></Link>
          <Link href="/asuransi-surety-bond/custom-bond" className={`group flex items-start gap-3 rounded-xl border p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md ${tone(4).card}`}><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ${tone(4).tile}`}><Container size={20} strokeWidth={2} aria-hidden="true" /></span><div className="min-w-0 flex-1"><h3 className="font-display font-bold text-[15px] leading-tight text-[#0a1628] group-hover:text-[#1a4fa0] mb-1 transition-colors">Custom Bond</h3>
            <p className="text-[#475569] text-[13px] leading-snug">Jaminan kepabeanan untuk fasilitas OB 23/impor sementara, KITE, dan Kawasan Berikat.</p><span className={`mt-2 inline-flex items-center gap-1 text-xs font-semibold ${tone(4).text}`}>Lihat detail<ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></div></Link>
        </div>
      </div>
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Sering Dipadukan Dengan</h2><div aria-hidden="true" className="mx-auto mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-[#c9a84c] to-[#f0d080]" />
        <p className="text-center text-[#475569] mb-4 text-sm md:text-base max-w-2xl mx-auto">Kontraktor proyek biasanya membutuhkan jaminan ini sekaligus dengan polis berikut.</p>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/asuransi-engineering/contractor-all-risk" className={`group flex items-start gap-3 rounded-xl border p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md ${tone(0).card}`}><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ${tone(0).tile}`}><HardHat size={20} strokeWidth={2} aria-hidden="true" /></span><div className="min-w-0 flex-1"><h3 className="font-display font-bold text-[15px] leading-tight text-[#0a1628] mb-1">Contractor All Risk (CAR)</h3>
            <p className="text-[#475569] text-[13px] leading-snug">Lindungi aset fisik proyek dari risiko kerusakan selama konstruksi.</p></div></Link>
          <Link href="/asuransi-marine/builders-risk" className={`group flex items-start gap-3 rounded-xl border p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md ${tone(1).card}`}><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ${tone(1).tile}`}><Hammer size={20} strokeWidth={2} aria-hidden="true" /></span><div className="min-w-0 flex-1"><h3 className="font-display font-bold text-[15px] leading-tight text-[#0a1628] mb-1">Builder&apos;s Risk (Galangan Kapal)</h3>
            <p className="text-[#475569] text-[13px] leading-snug">Untuk kontrak pembangunan kapal di galangan, sering perlu performance bond.</p></div></Link>
          <Link href="/blog/perbedaan-bid-bond-performance-bond" className={`group flex items-start gap-3 rounded-xl border p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md ${tone(2).card}`}><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ${tone(2).tile}`}><FileCheck2 size={20} strokeWidth={2} aria-hidden="true" /></span><div className="min-w-0 flex-1"><h3 className="font-display font-bold text-[15px] leading-tight text-[#0a1628] mb-1">Perbedaan Bid Bond & Performance Bond</h3>
            <p className="text-[#475569] text-[13px] leading-snug">Pahami kapan masing-masing jenis jaminan dibutuhkan.</p></div></Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

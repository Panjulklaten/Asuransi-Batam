// app/asuransi-marine/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";
import { tone } from "@/components/card-tones";
import { Anchor, ArrowRight, FileCheck2, Hammer, HardHat, Package, Search, ShieldCheck, Ship, Users, Waves } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Marine Batam – Hull, Cargo, Builder's Risk & P&I",
  description: "Asuransi marine di Batam mencakup Marine Hull, Marine Cargo, Builder's Risk, dan P&I. Perlindungan kapal, muatan, pembangunan kapal, dan tanggung jawab pemilik kapal.",
  canonical: "https://asuransibatam.com/asuransi-marine",
  languages: {
      id: "https://asuransibatam.com/asuransi-marine",
      en: "https://asuransibatam.com/en/marine-insurance",
    },
});

const benefits = [
  {
    icon: "🚢", Icon: Ship,
    title: "Marine Hull Insurance",
    desc: "Perlindungan menyeluruh untuk lambung kapal, mesin penggerak, dan perlengkapan navigasi dari risiko tabrakan, kandas, tenggelam, dan kebakaran.",
    href: "/asuransi-marine/marine-hull",
  },
  {
    icon: "📦", Icon: Package,
    title: "Marine Cargo Insurance",
    desc: "Perlindungan barang kiriman selama proses pengiriman laut dari pelabuhan asal hingga tujuan akhir, termasuk bongkar muat.",
    href: "/asuransi-marine/marine-cargo",
  },
  {
    icon: "🏗️", Icon: HardHat,
    title: "Builder's Risk (DSU)",
    desc: "Perlindungan selama proses pembangunan dan perbaikan kapal di galangan, dari tahap keel laying hingga sea trial.",
    href: "/asuransi-marine/builders-risk",
  },
  {
    icon: "⚓", Icon: Anchor,
    title: "Protection & Indemnity (P&I)",
    desc: "Perlindungan tanggung jawab hukum pemilik kapal kepada pihak ketiga, termasuk kru, penumpang, dan pencemaran lingkungan.",
    href: "/asuransi-marine/protection-and-indemnity",
  },
  {
    icon: "🌊", Icon: Waves,
    title: "War & Strikes Risk",
    desc: "Perlindungan tambahan terhadap risiko perang, pembajakan, dan mogok buruh yang dapat berdampak pada operasional kapal.",
  },
  {
    icon: "🔍", Icon: Search,
    title: "Total Loss & Salvage",
    desc: "Kompensasi kerugian total kapal dan biaya penyelamatan, termasuk biaya pengangkatan bangkai kapal jika diperlukan.",
  },
];

const faqs = [
  {
    q: "Apa perbedaan Marine Hull dan Marine Cargo?",
    a: "Marine Hull melindungi fisik kapal beserta mesinnya, sementara Marine Cargo melindungi muatan atau barang yang diangkut oleh kapal. Keduanya bisa dimiliki oleh pihak yang berbeda — pemilik kapal mengambil Hull, sedangkan pemilik barang mengambil Cargo.",
  },
  {
    q: "Apakah Marine Hull sudah termasuk P&I?",
    a: "Tidak. Marine Hull melindungi fisik kapal, sedangkan P&I melindungi tanggung jawab hukum pemilik kapal kepada awak, penumpang, pemilik muatan, dermaga, dan pencemaran. Keduanya saling melengkapi; penjelasan lengkap ada di halaman asuransi P&I.",
  },
  {
    q: "Apakah kapal nelayan dan speedboat bisa diasuransikan?",
    a: "Ya. Selain kapal niaga dan tanker, kapal nelayan, kapal feri, speedboat, dan kapal wisata juga dapat diasuransikan. Premi dihitung berdasarkan jenis, usia, dan nilai kapal.",
  },
  {
    q: "Siapa yang perlu asuransi marine cargo?",
    a: "Eksportir, importir, trader, dan perusahaan logistik yang mengirim atau menerima barang melalui jalur laut sangat disarankan memiliki marine cargo insurance untuk melindungi nilai kiriman mereka.",
  },
  {
    q: "Apakah ada asuransi untuk kapal yang sedang dibangun?",
    a: "Ya, produk tersebut disebut Builder's Risk atau DSU (Delay in Start-Up). Galangan kapal dan pemilik kapal yang memesan pembangunan kapal baru perlu memiliki perlindungan ini sejak awal konstruksi.",
  },
];

const policyComparison = [
  { feature: "Kerusakan Fisik Kapal/Barang", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Risiko Tabrakan & Kandas", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Tanggung Jawab Pihak Ketiga", basic: "❌", standard: "Terbatas", comprehensive: "✅" },
  { feature: "Risiko Perang & Pembajakan", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Biaya Penyelamatan (Salvage)", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Total Loss Coverage", basic: "Terbatas", standard: "✅", comprehensive: "✅" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Marine Batam",
  description:
    "Layanan asuransi marine di Batam mencakup Marine Hull, Marine Cargo, Builder's Risk, dan P&I untuk perlindungan kapal, pengiriman laut, dan tanggung jawab pemilik kapal.",
  provider: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam – Rio",
    telephone: "+6281373336728",
    areaServed: "Batam, Kepulauan Riau, Indonesia",
  },
  serviceType: "Marine Insurance",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Produk Asuransi Marine",
    itemListElement: [
      { "@type": "Offer", name: "Marine Hull Insurance" },
      { "@type": "Offer", name: "Marine Cargo Insurance" },
      { "@type": "Offer", name: "Builder's Risk Insurance" },
      { "@type": "Offer", name: "P&I (Protection & Indemnity) Insurance" },
    ],
  },
};

export default function AsuransiMarinePage() {
  return (
    <ProductPageLayout
      cluster="marine" rich
      heroImage={{ src: "/images/produk/marine.webp", alt: "Kapal kargo pengangkut kontainer di laut, ilustrasi asuransi marine di Batam", badge: "Kapal, muatan, dan galangan di perairan Batam", shape: "square" }}
      title="Asuransi Marine Batam"
      subtitle="Marine Hull, Cargo, Builder's Risk & P&I"
      description="Batam sebagai kota kepulauan dengan lalu lintas laut yang tinggi membutuhkan perlindungan yang andal. Asuransi marine kami menjaga kapal, muatan, dan aset maritim Anda dari risiko di lautan."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[{ label: "Asuransi Marine", href: "/asuransi-marine" }]}
      schema={schema}
    >
      <div className="mb-6 md:mb-8">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Produk Asuransi Marine Kami</h2><div aria-hidden="true" className="mx-auto mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-[#c9a84c] to-[#f0d080]" />
        <p className="text-center text-[#475569] mb-4 text-sm md:text-base max-w-2xl mx-auto">Pilih perlindungan yang sesuai dengan kebutuhan maritim dan pengiriman Anda di Batam.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          <Link href="/asuransi-marine/marine-hull" className={`group flex items-start gap-3 rounded-xl border p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md ${tone(0).card}`}><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ${tone(0).tile}`}><Ship size={20} strokeWidth={2} aria-hidden="true" /></span><div className="min-w-0 flex-1"><h3 className="font-display font-bold text-[15px] leading-tight text-[#0a1628] group-hover:text-[#1a4fa0] mb-1 transition-colors">Marine Hull Insurance</h3>
            <p className="text-[#475569] text-[13px] leading-snug">Perlindungan menyeluruh untuk lambung kapal, mesin, dan perlengkapan navigasi dari tabrakan, kandas, dan kebakaran.</p><span className={`mt-2 inline-flex items-center gap-1 text-xs font-semibold ${tone(0).text}`}>Lihat detail<ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></div></Link>
          <Link href="/asuransi-marine/marine-cargo" className={`group flex items-start gap-3 rounded-xl border p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md ${tone(1).card}`}><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ${tone(1).tile}`}><Package size={20} strokeWidth={2} aria-hidden="true" /></span><div className="min-w-0 flex-1"><h3 className="font-display font-bold text-[15px] leading-tight text-[#0a1628] group-hover:text-[#1a4fa0] mb-1 transition-colors">Marine Cargo Insurance</h3>
            <p className="text-[#475569] text-[13px] leading-snug">Perlindungan barang kiriman selama pengiriman laut dari Batam ke seluruh Indonesia dan mancanegara.</p><span className={`mt-2 inline-flex items-center gap-1 text-xs font-semibold ${tone(1).text}`}>Lihat detail<ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></div></Link>
          <Link href="/asuransi-marine/builders-risk" className={`group flex items-start gap-3 rounded-xl border p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md ${tone(2).card}`}><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ${tone(2).tile}`}><Hammer size={20} strokeWidth={2} aria-hidden="true" /></span><div className="min-w-0 flex-1"><h3 className="font-display font-bold text-[15px] leading-tight text-[#0a1628] group-hover:text-[#1a4fa0] mb-1 transition-colors">Builder&apos;s Risk (DSU)</h3>
            <p className="text-[#475569] text-[13px] leading-snug">Perlindungan selama pembangunan kapal di galangan Batam, dari keel laying hingga sea trial selesai.</p><span className={`mt-2 inline-flex items-center gap-1 text-xs font-semibold ${tone(2).text}`}>Lihat detail<ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></div></Link>
          <Link href="/asuransi-marine/protection-and-indemnity" className={`group flex items-start gap-3 rounded-xl border p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md ${tone(3).card}`}><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ${tone(3).tile}`}><Anchor size={20} strokeWidth={2} aria-hidden="true" /></span><div className="min-w-0 flex-1"><h3 className="font-display font-bold text-[15px] leading-tight text-[#0a1628] group-hover:text-[#1a4fa0] mb-1 transition-colors">P&amp;I (Protection &amp; Indemnity)</h3>
            <p className="text-[#475569] text-[13px] leading-snug">Tanggung jawab hukum pemilik kapal kepada awak, penumpang, pemilik muatan, dermaga, dan pencemaran.</p><span className={`mt-2 inline-flex items-center gap-1 text-xs font-semibold ${tone(3).text}`}>Lihat detail<ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></div></Link>
        </div>
      </div>
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Sering Dipadukan Dengan</h2><div aria-hidden="true" className="mx-auto mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-[#c9a84c] to-[#f0d080]" />
        <p className="text-center text-[#475569] mb-4 text-sm md:text-base max-w-2xl mx-auto">Galangan kapal dan pelaku usaha maritim biasanya butuh lebih dari satu jenis polis.</p>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/asuransi-surety-bond/performance-bond" className={`group flex items-start gap-3 rounded-xl border p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md ${tone(0).card}`}><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ${tone(0).tile}`}><FileCheck2 size={20} strokeWidth={2} aria-hidden="true" /></span><div className="min-w-0 flex-1"><h3 className="font-display font-bold text-[15px] leading-tight text-[#0a1628] mb-1">Performance Bond</h3>
            <p className="text-[#475569] text-[13px] leading-snug">Sering disyaratkan untuk kontrak pembangunan kapal di galangan.</p></div></Link>
          <Link href="/asuransi-personal-accident/pa-karyawan-grup" className={`group flex items-start gap-3 rounded-xl border p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md ${tone(1).card}`}><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ${tone(1).tile}`}><Users size={20} strokeWidth={2} aria-hidden="true" /></span><div className="min-w-0 flex-1"><h3 className="font-display font-bold text-[15px] leading-tight text-[#0a1628] mb-1">PA Karyawan Grup</h3>
            <p className="text-[#475569] text-[13px] leading-snug">Lindungi pekerja shipyard dari risiko kecelakaan kerja maritim.</p></div></Link>
          <Link href="/asuransi-liability/public-liability" className={`group flex items-start gap-3 rounded-xl border p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md ${tone(2).card}`}><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ${tone(2).tile}`}><ShieldCheck size={20} strokeWidth={2} aria-hidden="true" /></span><div className="min-w-0 flex-1"><h3 className="font-display font-bold text-[15px] leading-tight text-[#0a1628] mb-1">Public Liability</h3>
            <p className="text-[#475569] text-[13px] leading-snug">Tanggung jawab hukum atas kerusakan/cedera pihak ketiga di area pelabuhan.</p></div></Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

// app/asuransi-marine/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Marine Batam – Marine Hull, Cargo & Builder's Risk",
  description: "Asuransi marine di Batam mencakup Marine Hull, Marine Cargo, dan Builder's Risk. Perlindungan kapal, muatan, dan pembangunan kapal.",
  canonical: "https://asuransibatam.com/asuransi-marine",
  languages: {
      id: "https://asuransibatam.com/asuransi-marine",
      en: "https://asuransibatam.com/en/marine-insurance",
    },
});

const benefits = [
  {
    icon: "🚢",
    title: "Marine Hull Insurance",
    desc: "Perlindungan menyeluruh untuk lambung kapal, mesin penggerak, dan perlengkapan navigasi dari risiko tabrakan, kandas, tenggelam, dan kebakaran.",
    href: "/asuransi-marine/marine-hull",
  },
  {
    icon: "📦",
    title: "Marine Cargo Insurance",
    desc: "Perlindungan barang kiriman selama proses pengiriman laut dari pelabuhan asal hingga tujuan akhir, termasuk bongkar muat.",
    href: "/asuransi-marine/marine-cargo",
  },
  {
    icon: "🏗️",
    title: "Builder's Risk (DSU)",
    desc: "Perlindungan selama proses pembangunan dan perbaikan kapal di galangan, dari tahap keel laying hingga sea trial.",
    href: "/asuransi-marine/builders-risk",
  },
  {
    icon: "⚓",
    title: "Protection & Indemnity (P&I)",
    desc: "Perlindungan tanggung jawab hukum pemilik kapal kepada pihak ketiga, termasuk kru, penumpang, dan pencemaran lingkungan.",
  },
  {
    icon: "🌊",
    title: "War & Strikes Risk",
    desc: "Perlindungan tambahan terhadap risiko perang, pembajakan, dan mogok buruh yang dapat berdampak pada operasional kapal.",
  },
  {
    icon: "🔍",
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
    "Layanan asuransi marine di Batam mencakup Marine Hull, Marine Cargo, dan Builder's Risk untuk perlindungan kapal dan pengiriman laut.",
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
    ],
  },
};

export default function AsuransiMarinePage() {
  return (
    <ProductPageLayout
      cluster="marine"
      title="Asuransi Marine Batam"
      subtitle="Marine Hull, Cargo & Builder's Risk"
      description="Batam sebagai kota kepulauan dengan lalu lintas laut yang tinggi membutuhkan perlindungan yang andal. Asuransi marine kami menjaga kapal, muatan, dan aset maritim Anda dari risiko di lautan."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[{ label: "Asuransi Marine", href: "/asuransi-marine" }]}
      schema={schema}
    >
      <div className="mb-12">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Produk Asuransi Marine Kami</h2>
        <p className="text-center text-[#475569] mb-8 max-w-2xl mx-auto">Pilih perlindungan yang sesuai dengan kebutuhan maritim dan pengiriman Anda di Batam.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/asuransi-marine/marine-hull" className="group block p-6 rounded-2xl border-2 border-[#e2e8f0] hover:border-[#c9a84c]/50 hover:shadow-lg transition-all">
            <h3 className="font-display font-bold text-lg text-[#0a1628] group-hover:text-[#1a4fa0] mb-2">Marine Hull Insurance</h3>
            <p className="text-[#475569] text-sm">Perlindungan menyeluruh untuk lambung kapal, mesin, dan perlengkapan navigasi dari tabrakan, kandas, dan kebakaran.</p>
          </Link>
          <Link href="/asuransi-marine/marine-cargo" className="group block p-6 rounded-2xl border-2 border-[#e2e8f0] hover:border-[#c9a84c]/50 hover:shadow-lg transition-all">
            <h3 className="font-display font-bold text-lg text-[#0a1628] group-hover:text-[#1a4fa0] mb-2">Marine Cargo Insurance</h3>
            <p className="text-[#475569] text-sm">Perlindungan barang kiriman selama pengiriman laut dari Batam ke seluruh Indonesia dan mancanegara.</p>
          </Link>
          <Link href="/asuransi-marine/builders-risk" className="group block p-6 rounded-2xl border-2 border-[#e2e8f0] hover:border-[#c9a84c]/50 hover:shadow-lg transition-all">
            <h3 className="font-display font-bold text-lg text-[#0a1628] group-hover:text-[#1a4fa0] mb-2">Builder&apos;s Risk (DSU)</h3>
            <p className="text-[#475569] text-sm">Perlindungan selama pembangunan kapal di galangan Batam, dari keel laying hingga sea trial selesai.</p>
          </Link>
        </div>
      </div>
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Sering Dipadukan Dengan</h2>
        <p className="text-center text-[#475569] mb-8 max-w-2xl mx-auto">Galangan kapal dan pelaku usaha maritim biasanya butuh lebih dari satu jenis polis.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/asuransi-surety-bond/performance-bond" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Performance Bond</h3>
            <p className="text-[#475569] text-sm">Sering disyaratkan untuk kontrak pembangunan kapal di galangan.</p>
          </Link>
          <Link href="/asuransi-personal-accident/pa-karyawan-grup" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">PA Karyawan Grup</h3>
            <p className="text-[#475569] text-sm">Lindungi pekerja shipyard dari risiko kecelakaan kerja maritim.</p>
          </Link>
          <Link href="/asuransi-liability/public-liability" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Public Liability</h3>
            <p className="text-[#475569] text-sm">Tanggung jawab hukum atas kerusakan/cedera pihak ketiga di area pelabuhan.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

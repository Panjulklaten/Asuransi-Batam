import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";
import { ArrowRight, Briefcase, Cog, Construction, HardHat, ScrollText, Settings, Tractor, Users, Waves, Wrench } from "lucide-react";
export const metadata: Metadata = generateSEO({
  title: "Asuransi Engineering Batam – CAR, EAR, Contractor All Risk",
  description: "Asuransi engineering di Batam. Contractor All Risk (CAR), Erection All Risk (EAR), dan perlindungan proyek konstruksi. Konsultasi Rio 0813-7333-6728.",
  canonical: "https://asuransibatam.com/asuransi-engineering",
  languages: {
      id: "https://asuransibatam.com/asuransi-engineering",
      en: "https://asuransibatam.com/en/engineering-insurance",
    },
});
const benefits = [
  { icon: "🏗️", Icon: HardHat, title: "Contractor All Risk (CAR)", desc: "Perlindungan proyek konstruksi bangunan dari semua risiko selama masa pembangunan." },
  { icon: "⚙️", Icon: Settings, title: "Erection All Risk (EAR)", desc: "Perlindungan pemasangan mesin, pabrik, dan instalasi peralatan industri." },
  { icon: "🔧", Icon: Wrench, title: "Plant & Machinery (CPM)", desc: "Perlindungan alat konstruksi dan plant selama proyek berlangsung." },
  { icon: "👷", Icon: HardHat, title: "Tanggung Jawab Pihak Ketiga", desc: "Kerusakan properti dan cedera pihak ketiga di sekitar area proyek." },
  { icon: "💼", Icon: Briefcase, title: "Periode Pemeliharaan", desc: "Perlindungan extended selama periode pemeliharaan setelah selesai konstruksi." },
  { icon: "🌊", Icon: Waves, title: "Bencana Alam Proyek", desc: "Banjir, angin topan, gempa yang merusak proyek selama konstruksi." },
];
const faqs = [
  { q: "Apa perbedaan CAR dan EAR?", a: "CAR (Contractor All Risk) untuk proyek sipil/bangunan. EAR (Erection All Risk) untuk proyek pemasangan mesin, pabrik, dan infrastruktur mekanikal." },
  { q: "Apakah proyek jembatan dan jalan bisa diasuransikan?", a: "Ya, proyek infrastruktur termasuk jembatan, jalan, pelabuhan, dan fasilitas publik dapat diasuransikan dengan CAR." },
  { q: "Kapan sebaiknya membeli asuransi proyek?", a: "Sebaiknya sebelum proyek dimulai. Beberapa tender proyek juga mensyaratkan CAR/EAR sebagai syarat kontrak." },
  { q: "Apakah saya juga butuh Performance Bond selain CAR/EAR?", a: "Sering keduanya berjalan bersamaan. Tender proyek pemerintah/swasta umumnya mensyaratkan Performance Bond sebagai jaminan pelaksanaan, sementara CAR/EAR melindungi aset fisik proyek dari risiko kerusakan. Lihat halaman Surety Bond kami untuk detailnya." },
];
const policyComparison = [
  { feature: "Kerusakan Fisik Proyek", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Alat & Perlengkapan", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Tanggung Jawab Pihak Ketiga", basic: "Terbatas", standard: "✅", comprehensive: "✅" },
  { feature: "Bencana Alam", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Periode Pemeliharaan", basic: "❌", standard: "12 bulan", comprehensive: "24 bulan" },
];
const schema = { "@context": "https://schema.org", "@type": "Service", name: "Asuransi Engineering Batam", provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", telephone: "+6281373336728" } };
export default function AsuransiEngineeringPage() {
  return (
    <ProductPageLayout cluster="engineering" rich
      heroImage={{ src: "/images/produk/engineering.webp", alt: "Insinyur proyek konstruksi berhelm pengaman, ilustrasi asuransi engineering di Batam", badge: "Proyek terlindungi dari awal hingga serah terima", shape: "square" }} title="Asuransi Engineering Batam" subtitle="CAR, EAR & Proyek Konstruksi"
      description="Proyek konstruksi dan pemasangan instalasi di Batam penuh dengan risiko. Dengan asuransi engineering yang tepat, nilai investasi proyek Anda terlindungi dari awal hingga selesai."
      benefits={benefits} faqs={faqs} policyComparison={policyComparison}
      breadcrumbs={[{ label: "Asuransi Engineering", href: "/asuransi-engineering" }]}
      schema={schema}>
      <div className="mb-12">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Produk Asuransi Engineering Kami</h2><div aria-hidden="true" className="mx-auto mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#c9a84c] to-[#f0d080]" />
        <p className="text-center text-[#475569] mb-8 max-w-2xl mx-auto">Pilih perlindungan yang sesuai dengan jenis dan skala proyek konstruksi Anda di Batam.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/asuransi-engineering/contractor-all-risk" className="group flex h-full flex-col p-7 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/60 hover:shadow-xl hover:-translate-y-1 transition-all"><span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c9a84c]/12 text-[#a07830] ring-1 ring-[#c9a84c]/30 transition-colors group-hover:bg-gradient-to-br group-hover:from-[#c9a84c] group-hover:to-[#f0d080] group-hover:text-[#0a1628]"><HardHat size={26} strokeWidth={1.75} aria-hidden="true" /></span>
            <h3 className="font-display font-bold text-lg text-[#0a1628] group-hover:text-[#1a4fa0] mb-2 transition-colors">Contractor All Risk (CAR)</h3>
            <p className="text-[#475569] text-[15px] leading-relaxed">Perlindungan all risk untuk proyek sipil dan bangunan selama masa konstruksi berlangsung.</p>
          <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a4fa0]">Lihat detail<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></Link>
          <Link href="/asuransi-engineering/erection-all-risk" className="group flex h-full flex-col p-7 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/60 hover:shadow-xl hover:-translate-y-1 transition-all"><span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c9a84c]/12 text-[#a07830] ring-1 ring-[#c9a84c]/30 transition-colors group-hover:bg-gradient-to-br group-hover:from-[#c9a84c] group-hover:to-[#f0d080] group-hover:text-[#0a1628]"><Cog size={26} strokeWidth={1.75} aria-hidden="true" /></span>
            <h3 className="font-display font-bold text-lg text-[#0a1628] group-hover:text-[#1a4fa0] mb-2 transition-colors">Erection All Risk (EAR)</h3>
            <p className="text-[#475569] text-[15px] leading-relaxed">Perlindungan pemasangan mesin, pabrik, dan instalasi infrastruktur mekanikal dan elektrikal.</p>
          <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a4fa0]">Lihat detail<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></Link>
          <Link href="/asuransi-engineering/cecr" className="group flex h-full flex-col p-7 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/60 hover:shadow-xl hover:-translate-y-1 transition-all"><span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c9a84c]/12 text-[#a07830] ring-1 ring-[#c9a84c]/30 transition-colors group-hover:bg-gradient-to-br group-hover:from-[#c9a84c] group-hover:to-[#f0d080] group-hover:text-[#0a1628]"><Construction size={26} strokeWidth={1.75} aria-hidden="true" /></span>
            <h3 className="font-display font-bold text-lg text-[#0a1628] group-hover:text-[#1a4fa0] mb-2 transition-colors">Civil Engineering Completed Risk (CECR)</h3>
            <p className="text-[#475569] text-[15px] leading-relaxed">Perlindungan untuk infrastruktur sipil yang sudah selesai dibangun seperti jembatan, jalan, dan bendungan.</p>
          <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a4fa0]">Lihat detail<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></Link>
        </div>
      </div>
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Sering Dipadukan Dengan</h2><div aria-hidden="true" className="mx-auto mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#c9a84c] to-[#f0d080]" />
        <p className="text-center text-[#475569] mb-8 max-w-2xl mx-auto">Proyek konstruksi biasanya membutuhkan lebih dari satu jenis perlindungan.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/asuransi-surety-bond" className="group flex h-full flex-col p-6 rounded-2xl border border-[#e2e8f0] bg-gradient-to-b from-white to-[#faf8f3] hover:border-[#c9a84c]/50 hover:shadow-lg hover:-translate-y-0.5 transition-all"><span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#0a1628] to-[#1a4fa0] text-[#f0d080]"><ScrollText size={22} strokeWidth={1.75} aria-hidden="true" /></span>
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Surety Bond</h3>
            <p className="text-[#475569] text-[15px] leading-relaxed">Bid bond & performance bond — sering disyaratkan untuk tender proyek.</p>
          </Link>
          <Link href="/asuransi-personal-accident/pa-karyawan-grup" className="group flex h-full flex-col p-6 rounded-2xl border border-[#e2e8f0] bg-gradient-to-b from-white to-[#faf8f3] hover:border-[#c9a84c]/50 hover:shadow-lg hover:-translate-y-0.5 transition-all"><span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#0a1628] to-[#1a4fa0] text-[#f0d080]"><Users size={22} strokeWidth={1.75} aria-hidden="true" /></span>
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">PA Karyawan Grup</h3>
            <p className="text-[#475569] text-[15px] leading-relaxed">Lindungi pekerja lapangan proyek dari risiko kecelakaan kerja.</p>
          </Link>
          <Link href="/asuransi-machinery/asuransi-alat-berat" className="group flex h-full flex-col p-6 rounded-2xl border border-[#e2e8f0] bg-gradient-to-b from-white to-[#faf8f3] hover:border-[#c9a84c]/50 hover:shadow-lg hover:-translate-y-0.5 transition-all"><span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#0a1628] to-[#1a4fa0] text-[#f0d080]"><Tractor size={22} strokeWidth={1.75} aria-hidden="true" /></span>
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Alat Berat</h3>
            <p className="text-[#475569] text-[15px] leading-relaxed">Lindungi crane dan alat berat yang digunakan selama proyek berlangsung.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

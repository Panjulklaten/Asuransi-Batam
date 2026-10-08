// app/asuransi-properti/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";
import Link from "next/link";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Properti Batam – Rumah, Hotel, Gedung Komersial",
  description: "Lindungi properti Anda di Batam dari risiko kebakaran, bencana, dan kerusakan. Konsultasi gratis dengan Rio, praktisi asuransi properti terpercaya.",
  canonical: "https://asuransibatam.com/asuransi-properti",
  languages: {
      id: "https://asuransibatam.com/asuransi-properti",
      en: "https://asuransibatam.com/en/property-insurance",
    },
});

const benefits = [
  { icon: "🔥", title: "Kebakaran & Petir", desc: "Perlindungan menyeluruh dari kebakaran, sambaran petir, ledakan, dan kerusakan akibat asap." },
  { icon: "🌊", title: "Banjir & Angin Topan", desc: "Kerugian akibat bencana alam termasuk banjir, angin topan, badai, dan tsunami." },
  { icon: "🔨", title: "Kerusakan Bangunan", desc: "Biaya perbaikan atau pembangunan ulang struktur bangunan yang rusak." },
  { icon: "💼", title: "Isi & Peralatan", desc: "Perlindungan untuk perabot, peralatan elektronik, dan aset di dalam properti." },
  { icon: "👥", title: "Tanggung Jawab Pihak Ketiga", desc: "Perlindungan atas tuntutan hukum dari pihak ketiga yang mengalami kerugian di properti Anda." },
  { icon: "🏗️", title: "Biaya Tambahan", desc: "Biaya sewa tempat tinggal sementara dan biaya pembersihan puing-puing." },
];

const faqs = [
  { q: "Apa saja properti yang bisa diasuransikan?", a: "Hotel, rumah tinggal, ruko, gedung perkantoran, gudang, pabrik, dan properti komersial lainnya di Batam dan sekitarnya." },
  { q: "Apakah kebakaran karena kelalaian ditanggung?", a: "Ya, kebakaran karena kelalaian umumnya masih ditanggung kecuali ada unsur kesengajaan yang terbukti." },
  { q: "Berapa premi asuransi properti di Batam?", a: "Premi bervariasi tergantung nilai properti, lokasi, dan jenis perlindungan. Hubungi kami untuk penawaran spesifik." },
];

const policyComparison = [
  { feature: "Kebakaran & Petir", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Banjir & Angin Topan", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Gempa Bumi", basic: "❌", standard: "❌", comprehensive: "✅" },
  { feature: "Tanggung Jawab Pihak Ketiga", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Kerusuhan & Huru-hara", basic: "❌", standard: "Opsional", comprehensive: "✅" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Properti Batam",
  description: "Layanan asuransi properti untuk rumah, hotel, dan bangunan komersial di Batam",
  provider: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam – Rio",
    telephone: "+6281373336728",
  },
  areaServed: { "@type": "City", name: "Batam" },
};

const products = [
  {
    title: "Asuransi Hotel Batam",
    desc: "Perlindungan komprehensif untuk aset hotel Anda dari kebakaran, bencana, dan tanggung jawab pihak ketiga.",
    href: "/asuransi-properti/asuransi-hotel-batam",
  },
  {
    title: "Asuransi Rumah Batam",
    desc: "Lindungi rumah & isi rumah dari berbagai risiko termasuk kebakaran, banjir, dan pencurian.",
    href: "/asuransi-properti/asuransi-rumah-batam",
  },
  {
    title: "Asuransi Ruko Batam",
    desc: "Perlindungan untuk ruko dan properti usaha Anda dari kerugian finansial akibat bencana atau kerusakan.",
    href: "/asuransi-properti/asuransi-ruko-batam",
  },
  {
    title: "Asuransi Gudang Batam",
    desc: "Amankan gudang dan isi stok Anda dari risiko kebakaran, banjir, dan kerusakan struktural.",
    href: "/asuransi-properti/asuransi-gudang-batam",
  },
  {
    title: "Asuransi Pabrik & Kawasan Industri Batam",
    desc: "Solusi asuransi properti industri untuk pabrik dan fasilitas produksi di kawasan industri Batam.",
    href: "/asuransi-properti/asuransi-pabrik-kawasan-industri-batam",
  },
  {
    title: "Asuransi Apartemen Batam",
    desc: "Lindungi unit apartemen dan isinya dari berbagai risiko yang dapat merugikan investasi properti Anda.",
    href: "/asuransi-properti/asuransi-apartemen-batam",
  },
];

export default function AsuransiPropertiPage() {
  return (
    <ProductPageLayout cluster="property"
      title="Asuransi Properti Batam"
      subtitle="Perlindungan Properti Terpercaya"
      description="Lindungi investasi properti Anda di Batam dari risiko kebakaran, bencana alam, dan kerusakan struktural. Kami menyediakan polis yang disesuaikan untuk rumah tinggal, hotel, dan gedung komersial."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[{ label: "Asuransi Properti", href: "/asuransi-properti" }]}
      schema={schema}
      calculatorCta={{ label: "Hitung Premi Properti", href: "/kalkulator-premi-properti" }}
    >
      <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-6 text-center">Produk Properti Kami</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {products.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="group p-6 bg-white rounded-2xl border-2 border-[#e2e8f0] hover:border-[#c9a84c]/50 hover:shadow-lg transition-all"
          >
            <h3 className="font-display font-bold text-lg text-[#0a1628] group-hover:text-[#1a4fa0] mb-2">{p.title}</h3>
            <p className="text-[#475569] text-sm">{p.desc}</p>
          </Link>
        ))}
      </div>
    </ProductPageLayout>
  );
}

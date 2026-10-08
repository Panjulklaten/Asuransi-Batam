// app/asuransi-properti/asuransi-pabrik-kawasan-industri-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Pabrik & Kawasan Industri Batam – Properti Industri All Risk",
  description: "Asuransi properti industri di Batam: perlindungan gedung pabrik, mesin produksi, stok bahan baku, dan tanggung jawab kepada pihak ketiga. Khusus kawasan industri Batamindo, Kabil, Muka Kuning. Hubungi Rio: 0813-7333-6728.",
  canonical: "https://asuransibatam.com/asuransi-properti/asuransi-pabrik-kawasan-industri-batam",
  languages: {
      id: "https://asuransibatam.com/asuransi-properti/asuransi-pabrik-kawasan-industri-batam",
      en: "https://asuransibatam.com/en/property-insurance/factory-industrial-insurance-batam",
    },
});

const benefits = [
  {
    icon: "🏭",
    title: "Gedung & Bangunan Pabrik",
    desc: "Menanggung kerusakan fisik pada gedung pabrik, gudang, pos keamanan, dan bangunan penunjang lainnya akibat kebakaran, ledakan, bencana alam, dan risiko lain yang ditanggung.",
  },
  {
    icon: "⚙️",
    title: "Mesin & Peralatan Produksi",
    desc: "Perlindungan terhadap kerusakan mesin produksi, panel listrik, sistem conveyor, dan peralatan industri akibat kebakaran, ledakan, atau kejadian mendadak lainnya.",
  },
  {
    icon: "📦",
    title: "Stok Bahan Baku & Barang Jadi",
    desc: "Menanggung kerugian atas stok bahan baku, produk dalam proses (WIP), dan barang jadi yang rusak atau musnah akibat risiko yang tertanggung.",
  },
  {
    icon: "💥",
    title: "Kebakaran, Ledakan & Petir",
    desc: "Cakupan utama terhadap tiga risiko terbesar dalam lingkungan industri — khususnya penting untuk pabrik yang menggunakan bahan mudah terbakar, gas bertekanan, atau proses kimia.",
  },
  {
    icon: "🌀",
    title: "Bencana Alam",
    desc: "Perlindungan terhadap banjir, angin kencang, gempa bumi, dan longsor yang dapat merusak fasilitas produksi secara signifikan.",
  },
  {
    icon: "⚖️",
    title: "Tanggung Jawab kepada Pihak Ketiga",
    desc: "Menanggung tuntutan hukum dari pihak luar akibat kerusakan properti, cedera, atau pencemaran lingkungan yang berasal dari operasional fasilitas industri Anda.",
  },
];

const faqs = [
  {
    q: "Apakah polis properti biasa cukup untuk pabrik di Batam?",
    a: "Tidak. Properti industri memiliki profil risiko yang jauh berbeda dari properti komersial biasa. Polis untuk pabrik perlu mempertimbangkan nilai mesin produksi, stok bahan baku, proses produksi yang menggunakan bahan berbahaya, serta risiko tanggung jawab terhadap lingkungan. Polis standar rumah atau ruko tidak dirancang untuk kebutuhan ini.",
  },
  {
    q: "Apakah mesin di dalam pabrik ditanggung dalam polis properti?",
    a: "Mesin yang merupakan bagian permanen dari bangunan umumnya masuk dalam cakupan property all risk. Namun untuk perlindungan lebih komprehensif terhadap kerusakan mesin akibat gangguan mekanis atau elektrikal, produk Machinery Breakdown Insurance (MBI) direkomendasikan sebagai pelengkap.",
  },
  {
    q: "Bagaimana dengan risiko kebakaran di kawasan industri yang padat?",
    a: "Ini adalah risiko yang sangat relevan di Batam, terutama di kawasan seperti Batamindo atau Muka Kuning di mana bangunan pabrik berdekatan. Polis all risk industri biasanya mencakup fire spreading dari bangunan tetangga. Pastikan nilai pertanggungan Anda mencakup biaya rekonstruksi penuh, bukan sekadar nilai buku.",
  },
  {
    q: "Apakah ada asuransi untuk kerugian akibat terhentinya produksi?",
    a: "Ya. Produk ini disebut Business Interruption (BI) atau Loss of Profit Insurance. Jika pabrik terpaksa berhenti beroperasi akibat kerusakan yang tertanggung, BI menanggung kerugian pendapatan dan biaya tetap yang tetap berjalan selama periode perbaikan.",
  },
  {
    q: "Siapa yang menentukan nilai pertanggungan untuk pabrik?",
    a: "Nilai pertanggungan idealnya ditentukan berdasarkan biaya rekonstruksi penuh (reinstatement value) bangunan, ditambah nilai pasar mesin produksi, dan nilai stok rata-rata. Untuk pabrik besar, survei nilai oleh independent appraiser sangat dianjurkan untuk menghindari underinsurance.",
  },
];

const policyComparison = [
  { feature: "Gedung & Bangunan",                       basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Mesin & Peralatan Produksi",              basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Stok Bahan Baku & Barang Jadi",          basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Bencana Alam (Banjir, Gempa)",            basic: "❌", standard: "Optional", comprehensive: "✅" },
  { feature: "Tanggung Jawab Pihak Ketiga",             basic: "❌", standard: "❌", comprehensive: "✅" },
  { feature: "Business Interruption / Loss of Profit",  basic: "❌", standard: "❌", comprehensive: "Optional" },
  { feature: "Machinery Breakdown",                     basic: "❌", standard: "❌", comprehensive: "Optional" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Pabrik & Kawasan Industri Batam",
  description:
    "Asuransi properti industri di Batam untuk pabrik, gudang, dan fasilitas produksi di kawasan industri seperti Batamindo, Kabil, dan Muka Kuning.",
  provider: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam – Rio",
    telephone: "+6281373336728",
    areaServed: "Batam, Kepulauan Riau, Indonesia",
  },
  serviceType: "Asuransi Properti Industri",
  areaServed: {
    "@type": "City",
    name: "Batam",
    addressCountry: "ID",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Paket Asuransi Industri",
    itemListElement: [
      { "@type": "Offer", name: "Paket Dasar – Gedung & Mesin" },
      { "@type": "Offer", name: "Paket Standar – Termasuk Stok & Bencana Alam" },
      { "@type": "Offer", name: "Paket Komprehensif – All Risk + Liability + BI" },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: "https://asuransibatam.com" },
      { "@type": "ListItem", position: 2, name: "Asuransi Properti", item: "https://asuransibatam.com/asuransi-properti" },
      { "@type": "ListItem", position: 3, name: "Asuransi Pabrik & Kawasan Industri", item: "https://asuransibatam.com/asuransi-properti/asuransi-pabrik-kawasan-industri-batam" },
    ],
  },
};

export default function AsuransiPabrikBatamPage() {
  return (
    <ProductPageLayout cluster="property"
      title="Asuransi Pabrik & Kawasan Industri Batam"
      subtitle="Properti Industri All Risk – Gedung, Mesin, Stok & Liability"
      description="Batam adalah kota industri. Pabrik elektronik, galangan kapal, fasilitas logistik, dan kawasan industri terpadu membutuhkan perlindungan properti yang dirancang khusus — bukan sekadar polis properti biasa. Kami membantu Anda mendapatkan cakupan yang benar-benar sesuai."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Asuransi Properti", href: "/asuransi-properti" },
        { label: "Asuransi Pabrik & Kawasan Industri", href: "/asuransi-properti/asuransi-pabrik-kawasan-industri-batam" },
      ]}
      schema={schema}
      calculatorCard="pabrik"
    >
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Lengkapi Proteksi Kawasan Industri Anda</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/asuransi-properti/asuransi-gudang-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Gudang</h3>
            <p className="text-[#475569] text-sm">Lindungi fasilitas gudang dan stok logistik di area pabrik Anda.</p>
          </Link>
          <Link href="/asuransi-liability/asuransi-limbah-b3" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Limbah B3</h3>
            <p className="text-[#475569] text-sm">Wajib bagi industri penghasil limbah B3 sesuai PP 22/2021.</p>
          </Link>
          <Link href="/asuransi-personal-accident/pa-karyawan-grup" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">PA Karyawan Grup</h3>
            <p className="text-[#475569] text-sm">Lindungi karyawan pabrik dari risiko kecelakaan kerja.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

// app/asuransi-properti/asuransi-apartemen-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Apartemen Batam – Proteksi Unit, Isi, dan Tanggung Jawab Pemilik",
  description: "Asuransi apartemen dan kondotel di Batam: proteksi unit dari kebakaran, banjir, ledakan, dan kehilangan. Cocok untuk pemilik unit, investor, maupun penyewa. Hubungi Rio: 0813-7333-6728.",
  canonical: "https://asuransibatam.com/asuransi-properti/asuransi-apartemen-batam",
  languages: {
      id: "https://asuransibatam.com/asuransi-properti/asuransi-apartemen-batam",
      en: "https://asuransibatam.com/en/property-insurance/apartment-insurance-batam",
    },
});

const benefits = [
  {
    icon: "🔥",
    title: "Kebakaran & Ledakan",
    desc: "Menanggung kerusakan unit akibat kebakaran, ledakan gas, petir, dan dampak asap yang merusak interior maupun struktur unit Anda.",
  },
  {
    icon: "🌊",
    title: "Banjir & Kerusakan Air",
    desc: "Perlindungan terhadap kerusakan akibat banjir, rembesan dari unit atas, atau kebocoran pipa bersama di dalam gedung apartemen.",
  },
  {
    icon: "🪟",
    title: "Kerusakan Kaca & Cermin",
    desc: "Menanggung biaya penggantian kaca jendela, pintu kaca, dan cermin besar yang pecah akibat kejadian tak terduga.",
  },
  {
    icon: "🛋️",
    title: "Isi Rumah & Perabotan",
    desc: "Perlindungan terhadap kerugian atau kerusakan furnitur, elektronik, dan perabotan berharga di dalam unit akibat risiko yang ditanggung.",
  },
  {
    icon: "🏠",
    title: "Tanggung Jawab kepada Pihak Ketiga",
    desc: "Menanggung tuntutan hukum dari pemilik unit lain atau penghuni gedung akibat kelalaian yang berasal dari unit Anda — misalnya kebocoran air yang merusak unit di bawah.",
  },
  {
    icon: "🔑",
    title: "Kehilangan Kunci & Penggantian Kunci",
    desc: "Menanggung biaya penggantian kunci dan silinder kunci jika kunci unit Anda hilang atau dicuri.",
  },
];

const faqs = [
  {
    q: "Apakah asuransi dari pengelola gedung sudah cukup untuk unit saya?",
    a: "Asuransi yang dimiliki oleh manajemen gedung atau developer biasanya hanya menanggung struktur bangunan utama — bukan isi unit, interior renovasi tambahan, atau tanggung jawab pribadi Anda sebagai pemilik. Asuransi unit pribadi melengkapi perlindungan yang tidak dicakup oleh polis gedung.",
  },
  {
    q: "Apakah unit yang disewakan juga bisa diasuransikan?",
    a: "Ya. Baik unit yang ditempati sendiri maupun yang disewakan kepada pihak lain dapat diasuransikan. Untuk unit sewa, ada produk khusus yang juga mencakup kehilangan pendapatan sewa akibat kerusakan yang tertanggung.",
  },
  {
    q: "Apakah kondotel bisa menggunakan produk ini?",
    a: "Ya, kondotel yang berfungsi sebagai properti investasi dengan sistem pengelolaan sewa harian atau bulanan dapat diasuransikan. Nilainya dihitung berdasarkan nilai unit beserta isinya.",
  },
  {
    q: "Apa yang dimaksud dengan 'all risk' untuk apartemen?",
    a: "Polis all risk apartemen menanggung semua penyebab kerusakan kecuali yang secara eksplisit dikecualikan dalam polis (misalnya keausan normal, kerusakan disengaja). Ini berbeda dengan polis bernama risiko (named perils) yang hanya menanggung risiko yang disebutkan secara spesifik.",
  },
  {
    q: "Berapa premi asuransi apartemen di Batam?",
    a: "Premi dihitung berdasarkan nilai unit dan isinya, lokasi gedung, dan cakupan yang dipilih. Untuk unit senilai Rp 500 juta, premi tahunan umumnya mulai dari Rp 500 ribu hingga Rp 2 juta tergantung paket yang dipilih. Hubungi Rio untuk penawaran spesifik.",
  },
];

const policyComparison = [
  { feature: "Kebakaran, Petir & Ledakan",            basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Banjir & Rembesan Air",                 basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Kerusakan Kaca",                        basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Isi Rumah & Perabotan",                 basic: "❌", standard: "Optional", comprehensive: "✅" },
  { feature: "Tanggung Jawab Pihak Ketiga",           basic: "❌", standard: "❌", comprehensive: "✅" },
  { feature: "Kehilangan Kunci",                      basic: "❌", standard: "❌", comprehensive: "✅" },
  { feature: "Kehilangan Pendapatan Sewa",            basic: "❌", standard: "❌", comprehensive: "Optional" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Apartemen Batam",
  description:
    "Asuransi unit apartemen dan kondotel di Batam — menanggung kebakaran, banjir, isi unit, dan tanggung jawab kepada pihak ketiga.",
  provider: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam – Rio",
    telephone: "+6281373336728",
    areaServed: "Batam, Kepulauan Riau, Indonesia",
  },
  serviceType: "Asuransi Properti",
  areaServed: {
    "@type": "City",
    name: "Batam",
    addressCountry: "ID",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Paket Asuransi Apartemen",
    itemListElement: [
      { "@type": "Offer", name: "Paket Dasar – Kebakaran & Ledakan" },
      { "@type": "Offer", name: "Paket Standar – Termasuk Banjir & Kaca" },
      { "@type": "Offer", name: "Paket Komprehensif – All Risk + Tanggung Jawab" },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: "https://asuransibatam.com" },
      { "@type": "ListItem", position: 2, name: "Asuransi Properti", item: "https://asuransibatam.com/asuransi-properti" },
      { "@type": "ListItem", position: 3, name: "Asuransi Apartemen Batam", item: "https://asuransibatam.com/asuransi-properti/asuransi-apartemen-batam" },
    ],
  },
};

export default function AsuransiApartemenBatamPage() {
  return (
    <ProductPageLayout cluster="property"
      title="Asuransi Apartemen Batam"
      subtitle="Proteksi Unit, Isi Rumah & Tanggung Jawab Pemilik"
      description="Memiliki unit apartemen atau kondotel di Batam adalah investasi yang perlu dilindungi dengan tepat. Dari kebakaran hingga kebocoran yang merusak unit tetangga — asuransi apartemen memastikan investasi Anda terlindungi dari risiko yang tidak terduga."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Asuransi Properti", href: "/asuransi-properti" },
        { label: "Asuransi Apartemen Batam", href: "/asuransi-properti/asuransi-apartemen-batam" },
      ]}
      schema={schema}
      calculatorCard="apartemen"
    >
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Properti Lainnya</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/asuransi-properti/asuransi-rumah-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Rumah</h3>
            <p className="text-[#475569] text-sm">Jika Anda juga memiliki rumah tapak selain unit apartemen.</p>
          </Link>
          <Link href="/asuransi-properti/asuransi-hotel-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Hotel</h3>
            <p className="text-[#475569] text-sm">Untuk unit kondotel yang dioperasikan dengan model bisnis hotel.</p>
          </Link>
          <Link href="/blog/asuransi-properti-komersial-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Panduan Asuransi Properti Komersial</h3>
            <p className="text-[#475569] text-sm">Tips memilih perlindungan yang tepat untuk investasi properti Anda.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

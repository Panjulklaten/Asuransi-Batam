import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import KalkulatorProperti from "@/components/KalkulatorProperti";

export const metadata: Metadata = generateSEO({
  title: "Kalkulator Premi Asuransi Properti Batam – Cek Tarif OJK, Gratis",
  description:
    "Hitung estimasi premi asuransi kebakaran, banjir, huru-hara, dan gempa bumi untuk rumah, ruko, gudang, kos, hotel, dan vila di Batam. Memakai tarif OJK (SEOJK 6/2017), hasil instan, tanpa daftar.",
  canonical: "https://asuransibatam.com/kalkulator-premi-properti",
  languages: {
    id: "https://asuransibatam.com/kalkulator-premi-properti",
    en: "https://asuransibatam.com/en/property-premium-calculator",
  },
});

const breadcrumbListSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://asuransibatam.com" },
    { "@type": "ListItem", position: 2, name: "Kalkulator Premi Properti", item: "https://asuransibatam.com/kalkulator-premi-properti" },
  ],
};

export default function KalkulatorPremiPropertiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }} />
      <KalkulatorProperti />
    </>
  );
}

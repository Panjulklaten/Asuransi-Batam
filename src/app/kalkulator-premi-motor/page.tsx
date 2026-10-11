import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import KalkulatorMotor from "@/components/KalkulatorMotor";

export const metadata: Metadata = generateSEO({
  title: "Kalkulator Premi Asuransi Motor Batam – Cek Tarif OJK Sekarang, Gratis",
  description: "Berapa premi asuransi motor Anda di Batam? Hitung langsung pakai tarif resmi OJK — All Risk mulai 3,18%, TLO mulai 1,76%. Hasil instan, tanpa daftar, langsung hubungi agen.",
  canonical: "https://asuransibatam.com/kalkulator-premi-motor",
  languages: {
      id: "https://asuransibatam.com/kalkulator-premi-motor",
      en: "https://asuransibatam.com/en/motorcycle-premium-calculator",
    },
});

const breadcrumbListSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://asuransibatam.com" },
    { "@type": "ListItem", position: 2, name: "Kalkulator Premi Motor", item: "https://asuransibatam.com/kalkulator-premi-motor" },
  ],
};

export default function KalkulatorPremiMotorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }} />
      <KalkulatorMotor />
    </>
  );
}

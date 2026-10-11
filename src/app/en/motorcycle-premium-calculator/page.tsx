// app/en/motorcycle-premium-calculator/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import KalkulatorMotor from "@/components/KalkulatorMotor";

export const metadata: Metadata = generateSEO({
  title: "Motorcycle Premium Calculator Batam",
  description: "How much is motorcycle insurance in Batam? Calculate instantly using official OJK rates — All Risk from 3.18%, TLO from 1.76%. Instant results, no sign-up, contact an agent directly.",
  canonical: "https://asuransibatam.com/en/motorcycle-premium-calculator",
  languages: {
      id: "https://asuransibatam.com/kalkulator-premi-motor",
      en: "https://asuransibatam.com/en/motorcycle-premium-calculator",
    },
});

const breadcrumbListSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://asuransibatam.com/en" },
    { "@type": "ListItem", position: 2, name: "Motorcycle Premium Calculator", item: "https://asuransibatam.com/en/motorcycle-premium-calculator" },
  ],
};

export default function MotorcyclePremiumCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }} />
      <KalkulatorMotor lang="en" />
    </>
  );
}

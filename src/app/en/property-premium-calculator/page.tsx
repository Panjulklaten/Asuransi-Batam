// app/en/property-premium-calculator/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import KalkulatorProperti from "@/components/KalkulatorProperti";

export const metadata: Metadata = generateSEO({
  title: "Property Insurance Premium Calculator Batam",
  description:
    "Estimate fire, flood, riot, and earthquake insurance premiums for homes, shophouses, warehouses, boarding houses, hotels, and villas in Batam. Based on official OJK rates (SEOJK 6/2017). Instant results, no sign-up.",
  canonical: "https://asuransibatam.com/en/property-premium-calculator",
  languages: {
    id: "https://asuransibatam.com/kalkulator-premi-properti",
    en: "https://asuransibatam.com/en/property-premium-calculator",
  },
});

const breadcrumbListSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://asuransibatam.com/en" },
    { "@type": "ListItem", position: 2, name: "Property Premium Calculator", item: "https://asuransibatam.com/en/property-premium-calculator" },
  ],
};

export default function PropertyPremiumCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }} />
      <KalkulatorProperti lang="en" />
    </>
  );
}

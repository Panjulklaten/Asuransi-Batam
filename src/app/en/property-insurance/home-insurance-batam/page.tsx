// app/en/property-insurance/home-insurance-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Home Insurance Batam – Protect Your Home & Contents",
  description: "Home insurance in Batam. Protection from fire, flood, theft, and natural disasters. Affordable premiums, easy process. Contact +62-813-7333-6728.",
  canonical: "https://asuransibatam.com/en/property-insurance/home-insurance-batam",
  languages: {
      id: "https://asuransibatam.com/asuransi-properti/asuransi-rumah-batam",
      en: "https://asuransibatam.com/en/property-insurance/home-insurance-batam",
    },
});

const benefits = [
  { icon: "🏠", title: "Building Structure", desc: "Walls, roof, floors, and foundations protected from fire, lightning, and disasters." },
  { icon: "📺", title: "Contents & Electronics", desc: "TVs, refrigerators, air conditioners, laptops, and other valuable household items." },
  { icon: "💎", title: "Jewellery & Valuables", desc: "Jewellery and valuables up to a certain limit with a special endorsement." },
  { icon: "🌊", title: "Flood & Inundation", desc: "Damage from flash floods and water inundation (with extension coverage)." },
  { icon: "🔐", title: "Theft with Violence", desc: "Losses from theft accompanied by violence or forced entry." },
  { icon: "🏗️", title: "Temporary Accommodation Costs", desc: "Compensation for temporary rental costs while your home is being repaired." },
];

const faqs = [
  { q: "Does a mortgage (KPR) require home insurance?", a: "Yes, almost all banks providing mortgages require at least fire/property insurance for the duration of the loan." },
  { q: "How much is home insurance premium in Batam?", a: "Premiums are typically 0.1% – 0.3% of building value per year, depending on risk profile and coverage scope." },
  { q: "What is the difference between building insurance and contents insurance?", a: "Building insurance protects the structure of the house, while contents insurance protects the furniture and belongings inside. Both can be combined into one policy." },
];

const schema = {
  "@context": "https://schema.org", "@type": "Service",
  name: "Home Insurance Batam",
  description: "Home insurance in Batam for residential buildings and household contents",
  provider: { "@type": "InsuranceAgency", name: "Batam Insurance – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};

export default function HomeInsuranceBatamPage() {
  return (
    <ProductPageLayout
      title="Home Insurance Batam"
      subtitle="Protect Your Residence"
      description="Your home is your family's largest investment. Protect it with the right property insurance — from fire and flood to theft. Premiums starting from just a few hundred thousand rupiah per year."
      benefits={benefits} faqs={faqs}
      breadcrumbs={[
        { label: "Property Insurance", href: "/en/property-insurance" },
        { label: "Home Insurance Batam", href: "/en/property-insurance/home-insurance-batam" },
      ]}
      schema={schema}
      calculatorCard="rumah"
    />
  );
}

// app/en/property-insurance/hotel-insurance-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Hotel Insurance Batam – Comprehensive Hotel Asset Protection",
  description: "Hotel insurance in Batam. Protection for hotel buildings, contents, guest liability, and business interruption. Competitive premiums. Contact Rio: +62-813-7333-6728.",
  canonical: "https://asuransibatam.com/en/property-insurance/hotel-insurance-batam",
  languages: {
      id: "https://asuransibatam.com/asuransi-properti/asuransi-hotel-batam",
      en: "https://asuransibatam.com/en/property-insurance/hotel-insurance-batam",
    },
});

const benefits = [
  { icon: "🏨", title: "Building Structure", desc: "Protection for the entire hotel building from fire, natural disasters, explosion, and structural damage." },
  { icon: "🛋️", title: "Contents & FF&E", desc: "Furniture, fixtures, and all hotel equipment including kitchen appliances and electronics." },
  { icon: "👤", title: "Guest Liability", desc: "Legal protection if guests are injured or their belongings are damaged while staying at your hotel." },
  { icon: "📉", title: "Business Interruption", desc: "Compensation for lost revenue during hotel closure due to an insured incident." },
  { icon: "🌊", title: "Natural Disasters", desc: "Full coverage for flood, storm, earthquake, and other natural disaster risks in Batam." },
  { icon: "🔐", title: "Theft & Security", desc: "Protection from theft and damage to hotel security systems and safes." },
];

const faqs = [
  { q: "What does hotel insurance typically cover?", a: "Hotel insurance generally covers the building structure, furniture and fixtures (FF&E), guest liability, business interruption losses, and additional perils such as flood and earthquake with appropriate extensions." },
  { q: "Is guest liability automatically included?", a: "It depends on the policy. We recommend including Third-Party/Public Liability coverage in your hotel policy to protect against guest injury claims, which can be very costly." },
  { q: "Can a hotel under renovation still be insured?", a: "Yes, but the renovation period requires a specific endorsement or separate CAR coverage. Inform us of any renovation plans so the policy can be adjusted accordingly." },
];

const policyComparison = [
  { feature: "Building Structure", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Contents & FF&E", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Flood & Natural Disasters", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Guest Liability", basic: "❌", standard: "Optional", comprehensive: "✅" },
  { feature: "Business Interruption", basic: "❌", standard: "❌", comprehensive: "✅" },
  { feature: "Earthquake", basic: "❌", standard: "❌", comprehensive: "✅" },
];

const schema = {
  "@context": "https://schema.org", "@type": "Service",
  name: "Hotel Insurance Batam",
  provider: { "@type": "InsuranceAgency", name: "Batam Insurance – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};

export default function HotelInsuranceBatamPage() {
  return (
    <ProductPageLayout cluster="property"
      title="Hotel Insurance Batam"
      subtitle="Comprehensive Hotel Asset Protection"
      description="Your hotel is a major investment in Batam's growing hospitality sector. From building structure to guest liability, we provide tailored insurance solutions to protect every aspect of your hotel operations."
      benefits={benefits} faqs={faqs} policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Property Insurance", href: "/en/property-insurance" },
        { label: "Hotel Insurance Batam", href: "/en/property-insurance/hotel-insurance-batam" },
      ]}
      schema={schema}
      calculatorCard="hotel"
    />
  );
}

// app/en/liability-insurance/b3-waste-insurance/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "B3 Hazardous Waste Insurance Batam – Mandatory for Hazardous Waste Industries",
  description: "B3 hazardous waste insurance in Batam. A legal obligation for industries producing hazardous waste. Protection from environmental pollution claims. +62-813-7333-6728.",
  canonical: "https://asuransibatam.com/en/liability-insurance/b3-waste-insurance",
  languages: {
      id: "https://asuransibatam.com/asuransi-liability/asuransi-limbah-b3",
      en: "https://asuransibatam.com/en/liability-insurance/b3-waste-insurance",
    },
});

const benefits = [
  { icon: "☣️", title: "Soil & Water Pollution", desc: "Clean-up and environmental restoration costs from B3 waste spills or leaks." },
  { icon: "⚖️", title: "Environmental Legal Claims", desc: "Legal costs and damages from claims by the public or government regulators." },
  { icon: "🏥", title: "Third-Party Health Impact", desc: "Compensation for the community affected by health impacts from your waste." },
  { icon: "🌿", title: "Ecosystem Restoration Costs", desc: "Environmental restoration costs, including flora and fauna affected." },
  { icon: "🚒", title: "Emergency Response Costs", desc: "Emergency handling costs when a B3 waste spill or leak occurs." },
  { icon: "📋", title: "Regulatory Fines", desc: "Protection against administrative fines from environmental regulators (subject to policy terms)." },
];

const faqs = [
  { q: "Is B3 waste insurance required by law?", a: "Yes, Government Regulation No. 22 of 2021 on Environmental Protection and Management mandates that B3 waste management businesses have financial guarantees, one of which is insurance." },
  { q: "Which industries are required to have B3 waste insurance?", a: "Manufacturing industries, shipyards, large workshops, hospitals, mining, laboratories, and all industries that generate or manage B3 hazardous waste." },
  { q: "Batam is an industrial zone — are there specific risks?", a: "Batam as a free trade zone has many industries required to manage B3 waste. Pollution risks in an island environment are also more sensitive due to marine ecosystems." },
  { q: "What sum insured is recommended?", a: "Depends on the type and volume of waste generated. We will help determine an appropriate sum insured based on your industry's risk profile." },
];

const policyComparison = [
  { feature: "Soil Pollution", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Water / Marine Pollution", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Third-Party Claims", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Ecosystem Restoration", basic: "❌", standard: "Limited", comprehensive: "✅" },
  { feature: "Emergency Response Costs", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Regulatory Fines", basic: "❌", standard: "❌", comprehensive: "Optional" },
];

const schema = {
  "@context": "https://schema.org", "@type": "Service",
  name: "B3 Hazardous Waste Insurance Batam",
  provider: { "@type": "InsuranceAgency", name: "Batam Insurance – Rio", telephone: "+6281373336728" },
};

export default function B3WasteInsurancePage() {
  return (
    <ProductPageLayout cluster="liability"
      title="B3 Hazardous Waste Insurance Batam"
      subtitle="Legal Obligation & Environmental Protection"
      description="Industries that produce B3 hazardous waste in Batam are legally required to hold financial guarantees in the form of insurance. Protect your business from environmental legal claims that can reach billions of rupiah."
      benefits={benefits} faqs={faqs} policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Liability Insurance", href: "/en/liability-insurance" },
        { label: "B3 Waste Insurance", href: "/en/liability-insurance/b3-waste-insurance" },
      ]}
      schema={schema}
    />
  );
}

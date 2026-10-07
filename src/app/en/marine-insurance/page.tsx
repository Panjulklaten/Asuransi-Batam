// app/en/marine-insurance/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Marine Insurance Batam – Marine Hull, Cargo & Builder's Risk",
  description: "Marine insurance in Batam covering Marine Hull, Marine Cargo, and Builder's Risk. Protect your vessel, cargo, and shipbuilding projects. Consult Rio at +62-813-7333-6728.",
  canonical: "https://asuransibatam.com/en/marine-insurance",
  languages: {
      id: "https://asuransibatam.com/asuransi-marine",
      en: "https://asuransibatam.com/en/marine-insurance",
    },
});

const benefits = [
  {
    icon: "🚢",
    title: "Marine Hull Insurance",
    desc: "Comprehensive protection for a vessel's hull, engine, and navigation equipment against collision, grounding, fire, and sinking.",
    href: "/en/marine-insurance/marine-hull",
  },
  {
    icon: "📦",
    title: "Marine Cargo Insurance",
    desc: "Protection for goods and commodities during sea shipment, from the port of origin to the final destination, including loading and unloading.",
    href: "/en/marine-insurance/marine-cargo",
  },
  {
    icon: "🏗️",
    title: "Builder's Risk (DSU)",
    desc: "Protection during vessel construction and repair at a shipyard, from keel laying through sea trials and delivery.",
    href: "/en/marine-insurance/builders-risk",
  },
  {
    icon: "⚓",
    title: "Protection & Indemnity (P&I)",
    desc: "Legal liability coverage for shipowners towards third parties, including crew, passengers, and environmental pollution.",
  },
  {
    icon: "🌊",
    title: "War & Strikes Risk",
    desc: "Additional coverage against war risks, piracy, and strike action that may affect vessel operations.",
  },
  {
    icon: "🔍",
    title: "Total Loss & Salvage",
    desc: "Compensation for total vessel loss and salvage costs, including wreck removal expenses where required.",
  },
];

const faqs = [
  {
    q: "What is the difference between Marine Hull and Marine Cargo Insurance?",
    a: "Marine Hull protects the physical vessel and its machinery, while Marine Cargo protects the goods or commodities being transported. The two can be held by different parties — the shipowner takes out Hull insurance, while the cargo owner takes out Cargo insurance.",
  },
  {
    q: "Can fishing boats and speedboats be insured?",
    a: "Yes. In addition to commercial vessels and tankers, fishing boats, ferry boats, speedboats, and tourist vessels can all be insured. Premiums are calculated based on vessel type, age, and declared value.",
  },
  {
    q: "Who needs marine cargo insurance?",
    a: "Exporters, importers, traders, and logistics companies shipping or receiving goods by sea are strongly advised to hold marine cargo insurance to protect the value of their shipments.",
  },
  {
    q: "Is there insurance for vessels under construction?",
    a: "Yes. This product is called Builder's Risk or DSU (Delay in Start-Up). Shipyards and vessel owners commissioning new builds require this coverage from the start of construction.",
  },
];

const policyComparison = [
  { feature: "Physical Damage to Vessel / Cargo", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Collision & Grounding Risk", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Third-Party Liability", basic: "❌", standard: "Limited", comprehensive: "✅" },
  { feature: "War & Piracy Risk", basic: "❌", standard: "Optional", comprehensive: "✅" },
  { feature: "Salvage & Rescue Costs", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Total Loss Coverage", basic: "Limited", standard: "✅", comprehensive: "✅" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Marine Insurance Batam",
  description:
    "Marine insurance services in Batam covering Marine Hull, Marine Cargo, and Builder's Risk for vessel and maritime asset protection.",
  provider: {
    "@type": "InsuranceAgency",
    name: "Batam Insurance – Rio",
    telephone: "+6281373336728",
    areaServed: "Batam, Riau Islands, Indonesia",
  },
  serviceType: "Marine Insurance",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Marine Insurance Products",
    itemListElement: [
      { "@type": "Offer", name: "Marine Hull Insurance" },
      { "@type": "Offer", name: "Marine Cargo Insurance" },
      { "@type": "Offer", name: "Builder's Risk Insurance" },
    ],
  },
};

export default function MarineInsurancePage() {
  return (
    <ProductPageLayout
      cluster="marine"
      title="Marine Insurance Batam"
      subtitle="Marine Hull, Cargo & Builder's Risk"
      description="Batam's position as a maritime hub makes reliable marine protection essential. Our marine insurance products safeguard your vessels, cargo, and maritime assets from the risks of the sea."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[{ label: "Marine Insurance", href: "/en/marine-insurance" }]}
      schema={schema}
    />
  );
}

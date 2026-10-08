// app/en/engineering-insurance/contractor-all-risk/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Contractor All Risk (CAR) Insurance Batam – Construction Project Insurance",
  description: "Contractor All Risk Insurance in Batam for building, road, bridge, and infrastructure construction projects. Material & third-party liability protection. Consult Rio!",
  canonical: "https://asuransibatam.com/en/engineering-insurance/contractor-all-risk",
  languages: {
      id: "https://asuransibatam.com/asuransi-engineering/contractor-all-risk",
      en: "https://asuransibatam.com/en/engineering-insurance/contractor-all-risk",
    },
});

const benefits = [
  { icon: "🏗️", title: "Construction Work Damage", desc: "Physical loss or damage to the contract works during the construction period, including materials already incorporated." },
  { icon: "🔧", title: "Contractor's Plant & Equipment", desc: "Coverage for construction machinery, tools, and temporary structures used on-site." },
  { icon: "⚖️", title: "Third Party Liability (TPL)", desc: "Legal liability for bodily injury or property damage caused to third parties arising from the construction project." },
  { icon: "🌊", title: "Natural Disasters & Extreme Weather", desc: "Flood, storm, earthquake, subsidence, and other natural perils affecting the project site." },
  { icon: "🔥", title: "Fire & Explosion", desc: "Losses from fire, explosion, lightning, and resulting damage to works in progress." },
  { icon: "🚨", title: "Theft of Project Materials", desc: "Theft of materials and equipment stored on-site or incorporated into the works." },
  { icon: "🧹", title: "Debris Removal & Clearing", desc: "Costs of removing debris and clearing the site following an insured loss event." },
  { icon: "💼", title: "Maintenance Period Coverage", desc: "Extended coverage during the defects liability / maintenance period, typically 12 months post-completion." },
];

const faqs = [
  {
    q: "What is Contractor All Risk (CAR) Insurance?",
    a: "CAR Insurance is construction project insurance that protects contractors against losses during the build period — covering damage to materials, construction equipment, and third-party legal liability.",
  },
  {
    q: "What types of projects are suitable for CAR?",
    a: "CAR is suitable for all types of construction projects: multi-storey buildings, housing developments, roads & bridges, ports, dams, and other infrastructure projects.",
  },
  {
    q: "Is CAR Insurance mandatory?",
    a: "For government projects and large tenders, CAR Insurance is often required in the contract documents. For private projects, it is strongly recommended to protect the investment value.",
  },
  {
    q: "How long is the CAR coverage period?",
    a: "CAR typically follows the project construction period, plus a maintenance period (usually 12 months after project completion). Premiums are calculated based on contract value and project duration.",
  },
];

const policyComparison = [
  { feature: "Construction Works Damage", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Contractor's Plant & Equipment", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Third-Party Liability (TPL)", basic: "Limited", standard: "✅", comprehensive: "✅" },
  { feature: "Natural Disasters", basic: "❌", standard: "Optional", comprehensive: "✅" },
  { feature: "Theft of Materials", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Maintenance Period", basic: "❌", standard: "12 months", comprehensive: "24 months" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Contractor All Risk Insurance Batam",
  description: "Construction project insurance for contractors in Batam covering materials, equipment, and third-party liability.",
  provider: { "@type": "InsuranceAgency", name: "Batam Insurance – Rio", telephone: "+6281373336728" },
};

export default function ContractorAllRiskENPage() {
  return (
    <ProductPageLayout cluster="engineering"
      title="Contractor All Risk (CAR) Insurance Batam"
      subtitle="Construction Project Protection – Ground Breaking to Handover"
      description="Comprehensive protection for your construction project in Batam — from ground breaking through the maintenance period. Materials, equipment, and third-party liability are all covered under one policy."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Engineering Insurance", href: "/en/engineering-insurance" },
        { label: "Contractor All Risk", href: "/en/engineering-insurance/contractor-all-risk" },
      ]}
      schema={schema}
    />
  );
}

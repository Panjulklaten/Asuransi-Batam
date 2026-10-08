// app/en/engineering-insurance/erection-all-risk/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Erection All Risk (EAR) Insurance Batam – Machinery & Plant Installation Insurance",
  description: "Erection All Risk Insurance in Batam for machinery installation, factories, and industrial plant. Protection from mobilisation through commissioning. Contact Rio!",
  canonical: "https://asuransibatam.com/en/engineering-insurance/erection-all-risk",
  languages: {
      id: "https://asuransibatam.com/asuransi-engineering/erection-all-risk",
      en: "https://asuransibatam.com/en/engineering-insurance/erection-all-risk",
    },
});

const benefits = [
  { icon: "⚙️", title: "Damage During Erection", desc: "Physical loss or damage to machinery, equipment, and structural components during the erection process." },
  { icon: "📐", title: "Design Error or Defective Material", desc: "Damage resulting from faulty design, defective material, or poor workmanship discovered during erection." },
  { icon: "🔬", title: "Damage During Testing", desc: "Losses arising from testing, commissioning, and start-up of machinery and plant." },
  { icon: "🌊", title: "Natural Disasters & Weather", desc: "Flood, storm, earthquake, and other natural perils affecting the site during erection." },
  { icon: "🔥", title: "Fire & Explosion", desc: "Losses from fire, explosion, and short-circuit during the erection phase." },
  { icon: "⚖️", title: "Third Party Liability", desc: "Legal liability for bodily injury or property damage to third parties arising from erection operations." },
  { icon: "🧪", title: "Testing & Commissioning Period", desc: "Extended coverage during the testing and commissioning phase — the highest-risk period for new plant." },
  { icon: "🚛", title: "Dismantling & Re-shipping Costs", desc: "Costs of dismantling damaged components and re-shipping replacement parts to site." },
];

const faqs = [
  {
    q: "What is the difference between EAR and CAR Insurance?",
    a: "CAR (Contractor All Risk) is used for civil construction projects such as buildings and roads. EAR (Erection All Risk) is used for machinery installation, industrial plant, towers, and steel/iron structures.",
  },
  {
    q: "What types of projects require EAR?",
    a: "EAR is ideal for: factory machinery installation, chemical plant construction, telecommunications tower erection, power plant (PLTU/PLTG) installation, large-scale HVAC system installation, and offshore projects.",
  },
  {
    q: "Does EAR cover initial testing (testing & commissioning)?",
    a: "Yes, EAR generally includes the testing & commissioning period with a specific clause. This is critically important because the highest risk typically occurs when machinery or plant is first tested.",
  },
  {
    q: "How much is an EAR Insurance premium?",
    a: "EAR premiums depend on contract value, erection complexity, testing risks, and project location. Typically ranging from 0.5%–2% of contract value. Contact us for a specific calculation.",
  },
];

const policyComparison = [
  { feature: "Damage During Erection", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Defective Material/Design", basic: "❌", standard: "Optional", comprehensive: "✅" },
  { feature: "Testing & Commissioning", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Third-Party Liability", basic: "Limited", standard: "✅", comprehensive: "✅" },
  { feature: "Natural Disasters", basic: "❌", standard: "Optional", comprehensive: "✅" },
  { feature: "Dismantling & Re-shipping", basic: "❌", standard: "❌", comprehensive: "✅" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Erection All Risk Insurance Batam",
  description: "Machinery and industrial plant installation insurance in Batam covering erection through commissioning.",
  provider: { "@type": "InsuranceAgency", name: "Batam Insurance – Rio", telephone: "+6281373336728" },
};

export default function ErectionAllRiskENPage() {
  return (
    <ProductPageLayout cluster="engineering"
      title="Erection All Risk (EAR) Insurance Batam"
      subtitle="Machinery & Plant Installation – Mobilisation to Commissioning"
      description="All risk protection for machinery installation, industrial plant, and equipment erection projects — from mobilisation through commissioning and the maintenance period. Batam's industrial zone demands specialist coverage."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Engineering Insurance", href: "/en/engineering-insurance" },
        { label: "Erection All Risk", href: "/en/engineering-insurance/erection-all-risk" },
      ]}
      schema={schema}
    />
  );
}

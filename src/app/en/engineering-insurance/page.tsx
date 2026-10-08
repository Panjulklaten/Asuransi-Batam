// app/en/engineering-insurance/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Engineering Insurance Batam – CAR, EAR, Contractor All Risk",
  description: "Engineering insurance in Batam. Contractor All Risk (CAR), Erection All Risk (EAR), and construction project protection. Consult Rio at +62-813-7333-6728.",
  canonical: "https://asuransibatam.com/en/engineering-insurance",
  languages: {
      id: "https://asuransibatam.com/asuransi-engineering",
      en: "https://asuransibatam.com/en/engineering-insurance",
    },
});

const benefits = [
  { icon: "🏗️", title: "Contractor All Risk (CAR)", desc: "Protection for construction projects against all risks during the build period.", href: "/en/engineering-insurance/contractor-all-risk", },
  { icon: "⚙️", title: "Erection All Risk (EAR)", desc: "Protection for machinery installation, factories, and industrial equipment setup." },
  { icon: "🔧", title: "Plant & Machinery (CPM)", desc: "Protection for construction plant and equipment throughout the project." },
  { icon: "👷", title: "Third-Party Liability", desc: "Property damage and third-party injuries around the project site." },
  { icon: "💼", title: "Maintenance Period", desc: "Extended protection during the maintenance period after construction is complete." },
  { icon: "🌊", title: "Natural Disasters (Project)", desc: "Flooding, typhoons, and earthquakes damaging the project during construction." },
];

const faqs = [
  {
    q: "What is the difference between CAR and EAR?",
    a: "CAR (Contractor All Risk) covers civil/building projects. EAR (Erection All Risk) covers machinery installation, factory, and mechanical infrastructure projects.",
  },
  {
    q: "Can bridge and road projects be insured?",
    a: "Yes, infrastructure projects including bridges, roads, ports, and public facilities can be insured with CAR.",
  },
  {
    q: "When should I buy project insurance?",
    a: "Ideally before the project starts. Some project tenders also require CAR/EAR as a contract requirement.",
  },
];

const policyComparison = [
  { feature: "Physical Project Damage", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Tools & Equipment", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Third-Party Liability", basic: "Limited", standard: "✅", comprehensive: "✅" },
  { feature: "Natural Disasters", basic: "❌", standard: "Optional", comprehensive: "✅" },
  { feature: "Maintenance Period", basic: "❌", standard: "12 months", comprehensive: "24 months" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Engineering Insurance Batam",
  provider: {
    "@type": "InsuranceAgency",
    name: "Batam Insurance – Rio",
    telephone: "+6281373336728",
  },
};

export default function EngineeringInsurancePage() {
  return (
    <ProductPageLayout cluster="engineering"
      title="Engineering Insurance Batam"
      subtitle="CAR, EAR & Construction Projects"
      description="Construction and installation projects in Batam carry significant risks. With the right engineering insurance, your project investment is protected from start to finish."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[{ label: "Engineering Insurance", href: "/en/engineering-insurance" }]}
      schema={schema}
    />
  );
}

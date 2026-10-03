// app/en/property-insurance/shophouse-insurance-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Shophouse Insurance Batam – Protect Your Building & Business Stock",
  description: "Shophouse owners in Batam need protection from fire, flood, and theft. All-risk shophouse insurance covers the building, store contents, and third-party liability. Free consultation with Rio.",
  canonical: "https://asuransibatam.com/en/property-insurance/shophouse-insurance-batam",
  languages: {
      id: "https://asuransibatam.com/asuransi-properti/asuransi-ruko-batam",
      en: "https://asuransibatam.com/en/property-insurance/shophouse-insurance-batam",
    },
});

const benefits = [
  {
    icon: "🏪",
    title: "Shophouse Building",
    desc: "The shophouse structure — walls, floors, roof, partitions, and fixed installations — is protected from fire, lightning, explosion, and natural disasters. Rebuilding costs are covered up to the agreed sum insured.",
  },
  {
    icon: "📦",
    title: "Merchandise Stock",
    desc: "Inventory and trading stock stored inside the shophouse can be included in the policy at a declared value. Suitable for retail stores, distributors, and trading businesses storing high-value goods.",
  },
  {
    icon: "🖥️",
    title: "Business Equipment & Electronics",
    desc: "Cash registers, computers, display equipment, air conditioners, and all operational business equipment are protected from damage caused by fire, power surges, and disasters. Especially important for shophouses that rely on electronics in daily operations.",
  },
  {
    icon: "🔐",
    title: "Burglary & Theft",
    desc: "Loss of merchandise and equipment from theft involving forced entry or violence. Unlike general theft, this coverage requires evidence of forcible breaking and entering.",
  },
  {
    icon: "👥",
    title: "Third-Party Liability",
    desc: "If a customer or visitor sustains an injury inside or in front of your shophouse — slipping, being struck by falling goods, or other incidents — compensation claims are covered by this policy up to the set limit.",
  },
  {
    icon: "📉",
    title: "Business Income Loss",
    desc: "If the shophouse must temporarily close due to fire or serious damage requiring repairs, the Business Interruption extension provides compensation for lost income during the closure period.",
  },
];

const faqs = [
  {
    q: "Can a rented shophouse (not owner-occupied) be insured?",
    a: "Yes, with two different approaches. If you are the tenant, you can insure the contents and business equipment that belong to you — not the building itself. If you are the shophouse owner renting it out, you can insure the building structure and lost rental income if the shophouse is damaged and uninhabitable by the tenant.",
  },
  {
    q: "Can merchandise stock with a fluctuating value be insured?",
    a: "Yes, two methods are available. First, a Declaration Policy — stock value is reported monthly and the premium is calculated based on the average of those reports. Second, a Floating Sum Insured — the sum insured is set at a maximum figure and the premium is based on that amount. For businesses with highly fluctuating stock such as distributors or seasonal retailers, the Declaration Policy is generally more efficient.",
  },
  {
    q: "The Nagoya and Jodoh areas are considered high-risk — does that mean higher premiums?",
    a: "Location is one of the factors underwriters assess. Dense trading areas like Nagoya and Jodoh carry higher fire exposure due to building density and business activity. However, this doesn't always mean premiums are dramatically higher — a clean claims history and good fire protection measures (fire extinguishers, hydrant installations) can bring down the rate offered.",
  },
  {
    q: "Does shophouse insurance cover damage from tidal flooding in Batam?",
    a: "Flood coverage must be explicitly added to the policy — it does not automatically fall within a standard FLEXAS policy (Fire, Lightning, Explosion, Aircraft impact, Smoke). For shophouses in areas historically prone to flooding such as around Jodoh or Tanjung Uma, the flood extension is strongly recommended, even though it adds approximately 10–20% to the premium.",
  },
];

const policyComparison = [
  { feature: "Shophouse building", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Contents & business equipment", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Merchandise stock", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Flood & storm", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Burglary & theft", basic: "❌", standard: "Optional", comprehensive: "✅" },
  { feature: "Third-party liability", basic: "❌", standard: "Optional", comprehensive: "✅" },
  { feature: "Business Interruption", basic: "❌", standard: "❌", comprehensive: "✅" },
  { feature: "Earthquake & tsunami", basic: "❌", standard: "❌", comprehensive: "✅" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Shophouse Insurance Batam",
  description: "Insurance covering shophouses and trading businesses in Batam against fire, flood, theft, and other business risks.",
  provider: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam – Rio",
    telephone: "+6281373336728",
  },
  areaServed: { "@type": "City", name: "Batam" },
};

export default function ShophouseInsuranceBatamPage() {
  return (
    <ProductPageLayout
      title="Shophouse Insurance Batam"
      subtitle="Protect Your Building, Stock & Business Continuity"
      description="A shophouse is both an asset and a source of income. One fire, one flood, or one theft incident can stop a business that took years to build. With the right shophouse insurance, you don't have to start from scratch when disaster strikes — your building, stock, and business continuity are all protected."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Property Insurance", href: "/en/property-insurance" },
        { label: "Shophouse Insurance Batam", href: "/en/property-insurance/shophouse-insurance-batam" },
      ]}
      schema={schema}
      calculatorCard="ruko"
    />
  );
}

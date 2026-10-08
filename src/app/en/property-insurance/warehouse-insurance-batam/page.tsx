// app/en/property-insurance/warehouse-insurance-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Warehouse Insurance Batam – Stock, Building & Logistics Risk Protection",
  description: "Warehouses in Batam store assets worth billions. Protect them from fire, flood, and theft with warehouse insurance covering the building, contents, and third-party liability. Contact Rio now.",
  canonical: "https://asuransibatam.com/en/property-insurance/warehouse-insurance-batam",
  languages: {
      id: "https://asuransibatam.com/asuransi-properti/asuransi-gudang-batam",
      en: "https://asuransibatam.com/en/property-insurance/warehouse-insurance-batam",
    },
});

const benefits = [
  {
    icon: "🏭",
    title: "Building & Warehouse Structure",
    desc: "Walls, roof, columns, concrete floor, and all structural elements of the warehouse are protected from fire, lightning, explosion, high winds, and natural disasters. Includes fixed installations such as sprinkler systems, automated doors, and electrical panels.",
  },
  {
    icon: "📦",
    title: "Stored Goods (Stock in Trade)",
    desc: "Warehouse contents — finished goods, raw materials, and work-in-progress — can be included in the policy at a declared value. A Declaration Policy method (monthly stock value reporting) is available for efficient premium management in warehouses with high stock fluctuation.",
  },
  {
    icon: "🚜",
    title: "Warehouse Equipment & Forklifts",
    desc: "Forklifts, hand pallets, conveyors, storage racks, industrial scales, and other material handling equipment can be listed as separate items in the policy. Internal collision damage within the warehouse area is generally claimable.",
  },
  {
    icon: "🌊",
    title: "Flood & Storm",
    desc: "Industrial areas in Batam such as Muka Kuning and Kabil sit on terrain vulnerable to pooling during extreme rainfall. The flood extension ensures that stock losses from water entering the warehouse are covered by the policy.",
  },
  {
    icon: "👥",
    title: "Third-Party Liability",
    desc: "If a third-party worker, delivery driver, or business visitor sustains an injury on your warehouse premises, medical expenses and compensation claims are covered. Essential for warehouses with high loading/unloading activity and external vehicle traffic.",
  },
  {
    icon: "📉",
    title: "Business Interruption",
    desc: "If the warehouse is forced to cease operations due to damage requiring repairs, this extension provides compensation for fixed costs (rent, wages, utilities) and lost gross profit during the recovery period. Critical for warehouses that serve as a primary distribution hub.",
  },
];

const faqs = [
  {
    q: "What is the difference between warehouse insurance and marine cargo insurance?",
    a: "They are often considered the same but are fundamentally different. Warehouse insurance (Fire & Allied Perils or Industrial All Risk) protects goods while stored in the warehouse — static at a single location. Marine cargo insurance protects goods during the shipping process — by sea, air, or land. For businesses that both store and ship goods, having both is ideal to ensure no coverage gap exists between the storage point and the shipping point.",
  },
  {
    q: "How do I determine the right sum insured for a warehouse?",
    a: "There are two components that need to be assessed separately. First, the building value — calculated based on the cost of rebuilding the warehouse to equivalent specifications (replacement cost), not market value or book value. Second, warehouse contents — either at invoice value (for consistent stock levels) or using a Declaration Policy (for fluctuating stock). Underinsurance on warehouses is dangerous because it can result in partial claims being paid proportionally, far below the actual loss.",
  },
  {
    q: "Does a warehouse in Batam's industrial zones like Muka Kuning need special extensions?",
    a: "For industrial zones, several extensions worth considering include: flood extension (some locations in Muka Kuning and Kabil have experienced inundation during extreme rainfall), riot and civil commotion extension (standard for commercial property), and earthquake extension for high-value buildings. If the warehouse stores chemicals or hazardous materials, full disclosure to the underwriter is mandatory as this affects the premium rate and policy clauses.",
  },
  {
    q: "Can third-party goods stored in my warehouse be insured?",
    a: "Yes — this is known as goods in custody. You can take out a policy in your own name as bailee to protect your liability to the goods' owner. However, ideally the goods owner should also hold their own policy in their name. Coordination between the two policies is needed to avoid disputes at claim time.",
  },
  {
    q: "What is the typical premium range for warehouse insurance in Batam?",
    a: "Warehouse premiums have no standard published tariff as motor vehicle insurance does. Rates are determined by the underwriter based on the sum insured, building type (concrete, steel, semi-permanent), type of goods stored, fire protection systems in place, and claims history. As a general guide, Fire & Allied Perils rates for permanent-structure warehouses in Batam typically range from 0.05%–0.20% per year of the sum insured. Warehouses storing flammable or chemical materials may be subject to higher rates.",
  },
];

const policyComparison = [
  { feature: "Building & warehouse structure", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Warehouse contents / stock", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Flood & storm", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Warehouse equipment & forklifts", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Burglary & theft", basic: "❌", standard: "Optional", comprehensive: "✅" },
  { feature: "Third-party liability", basic: "❌", standard: "Optional", comprehensive: "✅" },
  { feature: "Business Interruption", basic: "❌", standard: "❌", comprehensive: "✅" },
  { feature: "Earthquake & tsunami", basic: "❌", standard: "❌", comprehensive: "✅" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Warehouse Insurance Batam",
  description: "Insurance covering warehouses and logistics facilities in Batam against fire, flood, theft, and other operational risks.",
  provider: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam – Rio",
    telephone: "+6281373336728",
  },
  areaServed: { "@type": "City", name: "Batam" },
};

export default function WarehouseInsuranceBatamPage() {
  return (
    <ProductPageLayout cluster="property"
      title="Warehouse Insurance Batam"
      subtitle="Protect Your Building, Stock & Logistics Operations"
      description="Your warehouse is the most critical point in your business distribution chain. A single fire or flood event without adequate coverage can wipe out billions in stock and shut down operations for months. The right warehouse insurance is not a formality — it is the safety net that determines whether your business can recover or not after a disaster."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Property Insurance", href: "/en/property-insurance" },
        { label: "Warehouse Insurance Batam", href: "/en/property-insurance/warehouse-insurance-batam" },
      ]}
      schema={schema}
      calculatorCard="gudang"
    />
  );
}

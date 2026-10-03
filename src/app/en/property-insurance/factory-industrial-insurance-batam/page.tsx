// app/en/property-insurance/factory-industrial-insurance-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Factory & Industrial Property Insurance Batam – All Risk Coverage",
  description: "Industrial property insurance in Batam covering factory buildings, production machinery, raw material stocks, and third-party liability. Serving Batamindo, Kabil, and Muka Kuning industrial estates. Contact Rio: +62-813-7333-6728.",
  canonical: "https://asuransibatam.com/en/property-insurance/factory-industrial-insurance-batam",
  languages: {
      id: "https://asuransibatam.com/asuransi-properti/asuransi-pabrik-kawasan-industri-batam",
      en: "https://asuransibatam.com/en/property-insurance/factory-industrial-insurance-batam",
    },
});

const benefits = [
  {
    icon: "🏭",
    title: "Factory Buildings & Structures",
    desc: "Covers physical damage to factory buildings, warehouses, guardhouses, and ancillary structures caused by fire, explosion, natural catastrophe, and other insured perils.",
  },
  {
    icon: "⚙️",
    title: "Production Machinery & Equipment",
    desc: "Protection against damage to production machinery, electrical panels, conveyor systems, and industrial equipment resulting from fire, explosion, or other sudden insured events.",
  },
  {
    icon: "📦",
    title: "Raw Material & Finished Goods Stock",
    desc: "Covers loss or damage to raw material inventory, work-in-progress (WIP), and finished goods destroyed or damaged by an insured peril.",
  },
  {
    icon: "💥",
    title: "Fire, Explosion & Lightning",
    desc: "Core coverage against the three most significant risks in an industrial environment — particularly critical for facilities using flammable materials, pressurised gases, or chemical processes.",
  },
  {
    icon: "🌀",
    title: "Natural Catastrophe",
    desc: "Protection against flood, windstorm, earthquake, and landslide that can cause significant damage to production facilities.",
  },
  {
    icon: "⚖️",
    title: "Third-Party Liability",
    desc: "Covers legal claims from external parties for property damage, personal injury, or environmental contamination arising from the operation of your industrial facility.",
  },
];

const faqs = [
  {
    q: "Is a standard commercial property policy sufficient for a factory in Batam?",
    a: "No. Industrial property has a fundamentally different risk profile from standard commercial property. A factory policy needs to account for the value of production machinery, raw material stocks, processes involving hazardous materials, and potential environmental liability. A standard residential or shophouse policy is not designed for these requirements.",
  },
  {
    q: "Are the machines inside the factory covered under the property policy?",
    a: "Machinery that forms a permanent part of the building is generally included under property all risk coverage. For more comprehensive protection against mechanical or electrical breakdown, a separate Machinery Breakdown Insurance (MBI) policy is recommended as a complement.",
  },
  {
    q: "How is fire risk managed in Batam's densely built industrial zones?",
    a: "This is highly relevant in Batam, particularly in zones like Batamindo or Muka Kuning where factory buildings stand in close proximity. Industrial all-risk policies typically cover fire spreading from neighbouring buildings. Ensure your sum insured reflects the full reinstatement cost, not the depreciated book value.",
  },
  {
    q: "Is there insurance for losses from a production halt?",
    a: "Yes. This product is called Business Interruption (BI) or Loss of Profit Insurance. If your factory is forced to cease operations due to an insured loss, BI covers lost revenue and fixed ongoing costs during the repair and restoration period.",
  },
  {
    q: "How is the sum insured determined for a factory?",
    a: "The sum insured should be based on the full reinstatement value of the building, plus the market value of production machinery, plus the average stock value. For large facilities, an independent appraisal is strongly recommended to avoid the financial exposure created by underinsurance.",
  },
];

const policyComparison = [
  { feature: "Buildings & Structures",                    basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Production Machinery & Equipment",          basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Raw Material & Finished Goods Stock",       basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Natural Catastrophe (Flood, Earthquake)",   basic: "❌", standard: "Optional", comprehensive: "✅" },
  { feature: "Third-Party Liability",                     basic: "❌", standard: "❌", comprehensive: "✅" },
  { feature: "Business Interruption / Loss of Profit",    basic: "❌", standard: "❌", comprehensive: "Optional" },
  { feature: "Machinery Breakdown",                       basic: "❌", standard: "❌", comprehensive: "Optional" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Factory & Industrial Property Insurance Batam",
  description:
    "Industrial property insurance in Batam for factories, warehouses, and production facilities in industrial estates including Batamindo, Kabil, and Muka Kuning.",
  provider: {
    "@type": "InsuranceAgency",
    name: "Batam Insurance – Rio",
    telephone: "+6281373336728",
    areaServed: "Batam, Riau Islands, Indonesia",
  },
  serviceType: "Industrial Property Insurance",
  areaServed: {
    "@type": "City",
    name: "Batam",
    addressCountry: "ID",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Industrial Insurance Packages",
    itemListElement: [
      { "@type": "Offer", name: "Basic – Buildings & Machinery" },
      { "@type": "Offer", name: "Standard – Including Stock & Natural Catastrophe" },
      { "@type": "Offer", name: "Comprehensive – All Risk + Liability + BI" },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://asuransibatam.com/en" },
      { "@type": "ListItem", position: 2, name: "Property Insurance", item: "https://asuransibatam.com/en/property-insurance" },
      { "@type": "ListItem", position: 3, name: "Factory & Industrial Insurance Batam", item: "https://asuransibatam.com/en/property-insurance/factory-industrial-insurance-batam" },
    ],
  },
};

export default function FactoryInsuranceBatamPage() {
  return (
    <ProductPageLayout
      title="Factory & Industrial Property Insurance Batam"
      subtitle="Industrial All Risk – Buildings, Machinery, Stock & Liability"
      description="Batam is an industrial city. Electronics manufacturers, shipyards, logistics facilities, and integrated industrial estates all require property protection specifically designed for industrial risk — not a standard commercial policy. We help you get coverage that genuinely fits."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Property Insurance", href: "/en/property-insurance" },
        { label: "Factory & Industrial Insurance Batam", href: "/en/property-insurance/factory-industrial-insurance-batam" },
      ]}
      schema={schema}
      calculatorCard="pabrik"
    />
  );
}

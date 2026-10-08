// app/en/property-insurance/apartment-insurance-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Apartment Insurance Batam – Unit, Contents & Owner Liability Coverage",
  description: "Apartment and condotel insurance in Batam covering fire, flood, contents, and third-party liability. Suitable for unit owners, investors, and tenants. Contact Rio: +62-813-7333-6728.",
  canonical: "https://asuransibatam.com/en/property-insurance/apartment-insurance-batam",
  languages: {
      id: "https://asuransibatam.com/asuransi-properti/asuransi-apartemen-batam",
      en: "https://asuransibatam.com/en/property-insurance/apartment-insurance-batam",
    },
});

const benefits = [
  {
    icon: "🔥",
    title: "Fire & Explosion",
    desc: "Covers damage to your unit caused by fire, gas explosion, lightning strike, and smoke damage affecting the interior or structure of the unit.",
  },
  {
    icon: "🌊",
    title: "Flood & Water Damage",
    desc: "Protection against damage from flooding, seepage from the unit above, or leaks from shared building pipework within the apartment complex.",
  },
  {
    icon: "🪟",
    title: "Glass & Mirror Breakage",
    desc: "Covers replacement costs for window glass, glass doors, and large mirrors broken by accidental or unforeseen events.",
  },
  {
    icon: "🛋️",
    title: "Contents & Furnishings",
    desc: "Covers loss or damage to furniture, electronics, and valuables inside the unit resulting from an insured event.",
  },
  {
    icon: "🏠",
    title: "Third-Party Liability",
    desc: "Covers legal claims from other unit owners or building residents arising from negligence originating in your unit — for example, a water leak that damages the unit below yours.",
  },
  {
    icon: "🔑",
    title: "Key Loss & Replacement",
    desc: "Covers the cost of replacing keys and lock cylinders if your unit keys are lost or stolen.",
  },
];

const faqs = [
  {
    q: "Is the building management's insurance policy sufficient for my unit?",
    a: "Insurance held by the building management or developer typically covers only the main building structure — not the contents of individual units, additional renovation works, or your personal liability as an owner. Personal unit insurance fills the gaps that the building policy does not cover.",
  },
  {
    q: "Can a unit that is rented out also be insured?",
    a: "Yes. Both owner-occupied and tenanted units can be insured. For rented units, specific products are available that also cover loss of rental income resulting from an insured loss.",
  },
  {
    q: "Can a condotel unit use this product?",
    a: "Yes. Condotel units operated as investment properties with daily or monthly rental management can be insured. The sum insured is based on the declared value of the unit and its contents.",
  },
  {
    q: "What does 'all risk' mean for apartment insurance?",
    a: "An all-risk apartment policy covers all causes of loss except those explicitly excluded in the policy wording (such as gradual wear, intentional damage). This differs from a named-perils policy, which only covers specific risks listed by name.",
  },
  {
    q: "What does apartment insurance typically cost in Batam?",
    a: "Premiums are calculated based on the unit and contents value, building location, and selected coverage. For a unit valued at IDR 500 million, annual premiums typically start from IDR 500,000 to IDR 2 million depending on the package chosen. Contact Rio for a specific quote.",
  },
];

const policyComparison = [
  { feature: "Fire, Lightning & Explosion",          basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Flood & Water Seepage",                basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Glass Breakage",                       basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Contents & Furnishings",               basic: "❌", standard: "Optional", comprehensive: "✅" },
  { feature: "Third-Party Liability",                basic: "❌", standard: "❌", comprehensive: "✅" },
  { feature: "Key Loss & Replacement",               basic: "❌", standard: "❌", comprehensive: "✅" },
  { feature: "Loss of Rental Income",                basic: "❌", standard: "❌", comprehensive: "Optional" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Apartment Insurance Batam",
  description:
    "Apartment and condotel unit insurance in Batam — covering fire, flood, contents, and third-party liability.",
  provider: {
    "@type": "InsuranceAgency",
    name: "Batam Insurance – Rio",
    telephone: "+6281373336728",
    areaServed: "Batam, Riau Islands, Indonesia",
  },
  serviceType: "Property Insurance",
  areaServed: {
    "@type": "City",
    name: "Batam",
    addressCountry: "ID",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Apartment Insurance Packages",
    itemListElement: [
      { "@type": "Offer", name: "Basic – Fire & Explosion" },
      { "@type": "Offer", name: "Standard – Including Flood & Glass" },
      { "@type": "Offer", name: "Comprehensive – All Risk + Liability" },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://asuransibatam.com/en" },
      { "@type": "ListItem", position: 2, name: "Property Insurance", item: "https://asuransibatam.com/en/property-insurance" },
      { "@type": "ListItem", position: 3, name: "Apartment Insurance Batam", item: "https://asuransibatam.com/en/property-insurance/apartment-insurance-batam" },
    ],
  },
};

export default function ApartmentInsuranceBatamPage() {
  return (
    <ProductPageLayout cluster="property"
      title="Apartment Insurance Batam"
      subtitle="Unit, Contents & Owner Liability Coverage"
      description="Owning an apartment or condotel unit in Batam is an investment that deserves proper protection. From fire to a water leak damaging a neighbour's unit — apartment insurance ensures your investment is covered against the unexpected."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Property Insurance", href: "/en/property-insurance" },
        { label: "Apartment Insurance Batam", href: "/en/property-insurance/apartment-insurance-batam" },
      ]}
      schema={schema}
      calculatorCard="apartemen"
    />
  );
}

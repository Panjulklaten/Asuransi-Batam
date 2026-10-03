// app/en/property-insurance/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";
import Link from "next/link";

export const metadata: Metadata = generateSEO({
  title: "Property Insurance Batam – Homes, Hotels, Commercial Buildings",
  description: "Protect your property in Batam from fire, natural disaster, and structural damage. Free consultation with Rio, an insurance practitioner in Batam.",
  canonical: "https://asuransibatam.com/en/property-insurance",
  languages: {
      id: "https://asuransibatam.com/asuransi-properti",
      en: "https://asuransibatam.com/en/property-insurance",
    },
});

const benefits = [
  { icon: "🔥", title: "Fire & Lightning", desc: "Comprehensive protection from fire, lightning strikes, explosions, and smoke damage." },
  { icon: "🌊", title: "Flood & Typhoon", desc: "Losses from natural disasters including floods, typhoons, storms, and tsunamis." },
  { icon: "🔨", title: "Building Damage", desc: "Repair or reconstruction costs for damaged building structures." },
  { icon: "💼", title: "Contents & Equipment", desc: "Protection for furniture, electronic equipment, and assets inside the property." },
  { icon: "👥", title: "Third-Party Liability", desc: "Protection against legal claims from third parties who suffer losses on your property." },
  { icon: "🏗️", title: "Additional Costs", desc: "Temporary accommodation costs and debris removal expenses." },
];

const faqs = [
  {
    q: "What types of property can be insured?",
    a: "Hotels, residences, shophouses, office buildings, warehouses, factories, and other commercial properties in Batam and surrounding areas.",
  },
  {
    q: "Is fire due to negligence covered?",
    a: "Yes, fires caused by negligence are generally covered unless deliberate intent is proven.",
  },
  {
    q: "How much is property insurance premium in Batam?",
    a: "Premiums vary depending on property value, location, and type of coverage. Contact us for a specific quote.",
  },
];

const policyComparison = [
  { feature: "Fire & Lightning", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Flood & Typhoon", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Earthquake", basic: "❌", standard: "❌", comprehensive: "✅" },
  { feature: "Third-Party Liability", basic: "❌", standard: "Optional", comprehensive: "✅" },
  { feature: "Riots & Civil Disturbance", basic: "❌", standard: "Optional", comprehensive: "✅" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Property Insurance Batam",
  description: "Property insurance services for homes, hotels, and commercial buildings in Batam",
  provider: {
    "@type": "InsuranceAgency",
    name: "Batam Insurance – Rio",
    telephone: "+6281373336728",
  },
  areaServed: { "@type": "City", name: "Batam" },
};

const products = [
  {
    title: "Hotel Insurance Batam",
    desc: "Comprehensive protection for all your hotel assets against fire, disasters, and third-party liability.",
    href: "/en/property-insurance/hotel-insurance-batam",
  },
  {
    title: "Home Insurance Batam",
    desc: "Protect your home and contents from a wide range of risks including fire, flood, and theft.",
    href: "/en/property-insurance/home-insurance-batam",
  },
  {
    title: "Shophouse Insurance Batam",
    desc: "Coverage for your shophouse and business premises against financial losses from disasters or damage.",
    href: "/en/property-insurance/shophouse-insurance-batam",
  },
  {
    title: "Warehouse Insurance Batam",
    desc: "Secure your warehouse and stock inventory from fire, flood, and structural damage risks.",
    href: "/en/property-insurance/warehouse-insurance-batam",
  },
  {
    title: "Factory & Industrial Insurance Batam",
    desc: "Industrial property insurance solutions for factories and production facilities in Batam's industrial estates.",
    href: "/en/property-insurance/factory-industrial-insurance-batam",
  },
  {
    title: "Apartment Insurance Batam",
    desc: "Protect your apartment unit and its contents from various risks that could jeopardise your property investment.",
    href: "/en/property-insurance/apartment-insurance-batam",
  },
];

export default function PropertyInsurancePage() {
  return (
    <ProductPageLayout
      title="Property Insurance Batam"
      subtitle="Trusted Property Protection"
      description="Protect your property investment in Batam from fire, natural disasters, and structural damage. We provide tailored policies for residences, hotels, and commercial buildings."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[{ label: "Property Insurance", href: "/en/property-insurance" }]}
      schema={schema}
      calculatorCta={{ label: "Calculate Property Premium", href: "/en/property-premium-calculator" }}
    >
      <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-6 text-center">Our Property Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {products.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="group p-6 bg-white rounded-2xl border-2 border-[#e2e8f0] hover:border-[#c9a84c]/50 hover:shadow-lg transition-all"
          >
            <h3 className="font-display font-bold text-lg text-[#0a1628] group-hover:text-[#1a4fa0] mb-2">{p.title}</h3>
            <p className="text-[#475569] text-sm">{p.desc}</p>
          </Link>
        ))}
      </div>
    </ProductPageLayout>
  );
}


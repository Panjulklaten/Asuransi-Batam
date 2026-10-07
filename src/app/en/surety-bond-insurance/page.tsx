// app/en/surety-bond-insurance/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Surety Bond Insurance Batam – Project & Contract Guarantee",
  description: "Surety bond services in Batam for contractors, construction companies, and procurement. Bid bond, performance bond, advance payment bond, and maintenance bond. Fast issuance, competitive premium. Free consultation with Rio.",
  keywords: [
    "surety bond batam",
    "bid bond batam",
    "performance bond batam",
    "advance payment bond batam",
    "custom bond batam",
    "ob 23 batam",
    "construction surety bond batam",
    "surety bond insurance batam",
    "contract guarantee batam",
  ],
  canonical: "https://asuransibatam.com/en/surety-bond-insurance",
  languages: {
      id: "https://asuransibatam.com/asuransi-surety-bond",
      en: "https://asuransibatam.com/en/surety-bond-insurance",
    },
});

const benefits = [
  {
    icon: "📋",
    title: "Bid Bond",
    desc: "Guarantees that the tender winner will sign the contract and submit a performance bond as required by the bidding terms.",
  },
  {
    icon: "🏗️",
    title: "Performance Bond",
    desc: "Guarantees that the contractor will complete the project according to the contract, technical specifications, and agreed schedule.",
  },
  {
    icon: "💵",
    title: "Advance Payment Bond",
    desc: "Guarantees the refund of advance payment if the contractor fails to perform after receiving the initial payment.",
  },
  {
    icon: "🔧",
    title: "Maintenance Bond",
    desc: "Guarantees rectification of latent defects or damage arising during the maintenance period after project completion.",
  },
  {
    icon: "🚢",
    title: "Custom Bond",
    desc: "Guarantee for customs facilities — OB 23/temporary import, KITE, Bonded Zone, and PPJK — without full cash collateral.",
  },
  {
    icon: "⚡",
    title: "Fast & Simple Process",
    desc: "Surety bond issuance within 1–3 business days. Minimal documentation, no collateral required for certain values.",
  },
  {
    icon: "🤝",
    title: "Backed by Licensed Insurers",
    desc: "We work with OJK-licensed surety insurance companies. Bonds are recognized by government, SOEs, and private entities in Batam.",
  },
];

const faqs = [
  {
    q: "What is the difference between a Surety Bond and a Bank Guarantee?",
    a: "A surety bond is issued by an insurance company and generally does not require collateral or a cash deposit like a bank guarantee. Premiums are lower and issuance is faster, making it ideal for contractors and companies that want to preserve liquidity.",
  },
  {
    q: "What surety bond values are available in Batam?",
    a: "Surety bond values vary according to project requirements, from hundreds of millions to tens of billions of rupiah. The premium is calculated based on contract value, bond type, and the applicant company's profile.",
  },
  {
    q: "What documents are required for a surety bond application?",
    a: "Typically required: company deed of establishment, SIUP/NIB, financial statements for the last 2 years, tender/contract documents, and director data. For government projects, a tender invitation letter is usually also required.",
  },
  {
    q: "Can a surety bond be used for both government and private projects?",
    a: "Yes. Surety bonds from OJK-licensed insurance companies are accepted for government procurement (Presidential Regulation 16/2018), SOEs, and private projects throughout Batam and Indonesia.",
  },
  {
    q: "How long does the surety bond issuance process take?",
    a: "The standard process takes 1–3 business days after complete documentation. For urgent needs, an express service is available with same-day or next-day issuance.",
  },
];

const policyComparison = [
  { feature: "Bid Bond", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Performance Bond", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Advance Payment Bond", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Maintenance Bond", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "No Collateral Required", basic: "Conditions apply", standard: "✅", comprehensive: "✅" },
  { feature: "Express Process (1 business day)", basic: "❌", standard: "Optional", comprehensive: "✅" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Surety Bond Insurance Batam",
  description:
    "Surety bond services in Batam: bid bond, performance bond, advance payment bond, and maintenance bond for construction and procurement projects.",
  provider: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam – Rio",
    telephone: "+6281373336728",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Batam",
      addressRegion: "Kepulauan Riau",
      addressCountry: "ID",
    },
  },
  areaServed: { "@type": "City", name: "Batam" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Surety Bond Types",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bid Bond" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Performance Bond" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Advance Payment Bond" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Maintenance Bond" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Bond" } },
    ],
  },
};

export default function SuretyBondInsurancePage() {
  return (
    <ProductPageLayout
      cluster="surety"
      title="Surety Bond Insurance Batam"
      subtitle="Trusted Project & Contract Guarantee"
      description="Contractors and companies in Batam need surety bonds that are issued quickly, recognized by government and private entities, without draining liquidity. We provide bid bonds, performance bonds, advance payment bonds, and maintenance bonds with a simple process and competitive premiums."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Surety Bond Insurance", href: "/en/surety-bond-insurance" },
      ]}
      schema={schema}
    >
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Guarantee Types We Issue</h2>
        <p className="text-center text-[#475569] mb-8 max-w-2xl mx-auto">Choose the guarantee that matches your project or customs facility stage in Batam.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/en/surety-bond-insurance/performance-bond" className="group block p-6 rounded-2xl border-2 border-[#e2e8f0] hover:border-[#c9a84c]/50 hover:shadow-lg transition-all">
            <h3 className="font-display font-bold text-lg text-[#0a1628] group-hover:text-[#1a4fa0] mb-2">Performance Bond</h3>
            <p className="text-[#475569] text-sm">Guarantee that the contractor will complete the project per contract and schedule.</p>
          </Link>
          <Link href="/en/surety-bond-insurance/advance-payment-bond" className="group block p-6 rounded-2xl border-2 border-[#e2e8f0] hover:border-[#c9a84c]/50 hover:shadow-lg transition-all">
            <h3 className="font-display font-bold text-lg text-[#0a1628] group-hover:text-[#1a4fa0] mb-2">Advance Payment Bond</h3>
            <p className="text-[#475569] text-sm">Guarantee for down payment recovery if the contractor fails to start or continue work.</p>
          </Link>
          <Link href="/en/surety-bond-insurance/maintenance-bond" className="group block p-6 rounded-2xl border-2 border-[#e2e8f0] hover:border-[#c9a84c]/50 hover:shadow-lg transition-all">
            <h3 className="font-display font-bold text-lg text-[#0a1628] group-hover:text-[#1a4fa0] mb-2">Maintenance Bond</h3>
            <p className="text-[#475569] text-sm">Guarantee covering the maintenance period after construction project completion.</p>
          </Link>
          <Link href="/en/surety-bond-insurance/custom-bond" className="group block p-6 rounded-2xl border-2 border-[#e2e8f0] hover:border-[#c9a84c]/50 hover:shadow-lg transition-all">
            <h3 className="font-display font-bold text-lg text-[#0a1628] group-hover:text-[#1a4fa0] mb-2">Custom Bond</h3>
            <p className="text-[#475569] text-sm">Customs guarantee for OB 23/temporary import, KITE, and Bonded Zone facilities.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

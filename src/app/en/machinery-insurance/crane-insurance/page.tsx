// app/en/machinery-insurance/crane-insurance/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Crane Insurance Batam – Tower Crane & Mobile Crane Protection",
  description: "Crane insurance in Batam covering tower cranes, mobile cranes, and lifting equipment against structural collapse, mechanical failure, and third-party liability. Free consultation with Rio: +62-813-7333-6728.",
  canonical: "https://asuransibatam.com/en/machinery-insurance/crane-insurance",
  languages: {
      id: "https://asuransibatam.com/asuransi-machinery/asuransi-crane",
      en: "https://asuransibatam.com/en/machinery-insurance/crane-insurance",
    },
});

const benefits = [
  {
    icon: "🏗️",
    title: "Physical Damage to the Crane",
    desc: "Covers the boom, cab, hydraulic system, spreader, and other core components against sudden damage caused by accidents or operational failure.",
  },
  {
    icon: "💥",
    title: "Structural Failure",
    desc: "Covers damage from structural failure, overloading beyond rated capacity, material fatigue, or rigging errors that lead to a collapse.",
  },
  {
    icon: "⚡",
    title: "Mechanical & Electrical Breakdown",
    desc: "Covers the PLC control system, drive motors, electrical panels, and other electrical components damaged by power surges or short circuits.",
  },
  {
    icon: "👤",
    title: "Third-Party Liability (TPL)",
    desc: "Critical for cranes operating in congested areas — covers compensation for damage to neighbouring property, buildings, and vehicles around the lifting zone.",
  },
  {
    icon: "🚑",
    title: "Operator Personal Accident",
    desc: "Personal accident compensation for certified crane operators who are injured while carrying out their duties.",
  },
  {
    icon: "🔧",
    title: "Dismantling & Re-erection Costs",
    desc: "Covers the cost of accessing, dismantling, and re-erecting the crane at height in order to repair damaged components.",
  },
];

const faqs = [
  {
    q: "Why is crane insurance so important in Batam?",
    a: "High-rise construction projects in Nongsa, Batam Center, and the Muka Kuning industrial estate continue to expand. Cranes operate at height with loads of tens of tonnes — the risk of accidents and damage to surrounding property is significant, including legal liability that can reach billions of rupiah.",
  },
  {
    q: "What documents are required to apply for crane insurance?",
    a: "Typically required: a valid crane fitness certificate (SIO/SIA), a periodic maintenance logbook, data on K3-certified operators, technical specifications of the crane (capacity, year of manufacture, brand), and the crane's replacement value.",
  },
  {
    q: "How much does crane insurance cost in Batam?",
    a: "Premiums depend on the crane's value, type (tower/mobile), lifting capacity, and location of operation. As a general guide, premiums range from 0.4%–1.2% of the sum insured per year. For example, a 50-tonne mobile crane worth Rp 3 billion would have a premium starting around Rp 12–36 million per year. Contact Rio for a specific quote.",
  },
  {
    q: "Can a rented crane be insured by the tenant?",
    a: "Yes. The tenant/renter can take out a policy in their own name as the 'lessee' with the crane owner's consent. This matters because operational responsibility rests with the tenant for the duration of the rental.",
  },
  {
    q: "What sum insured is recommended for a crane?",
    a: "At minimum, the full replacement value of a new crane, to avoid underinsurance. For Third-Party Liability (TPL), the limit should be adequate for the project location's risk profile — at least Rp 1–5 billion for projects in Batam's congested industrial zones.",
  },
  {
    q: "What should I do if a crane is involved in an accident?",
    a: "First, secure the site and document the damage with photos/video. Contact us immediately at +62-813-7333-6728 to report the claim within 3×24 hours. Do not move the crane before an insurer's survey is completed, unless there is a safety risk.",
  },
];

const policyComparison = [
  { feature: "Physical Damage to the Crane", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Mechanical / Electrical Failure", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Third-Party Liability (TPL)", basic: "Limited", standard: "✅", comprehensive: "✅" },
  { feature: "Natural Disasters", basic: "❌", standard: "Optional", comprehensive: "✅" },
  { feature: "Dismantling & Re-erection Costs", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Operator Personal Accident", basic: "❌", standard: "Optional", comprehensive: "✅" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Crane Insurance Batam",
  description:
    "Insurance protection for tower cranes and mobile cranes in Batam for industrial and construction projects.",
  provider: { "@type": "InsuranceAgency", name: "Batam Insurance – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};

export default function CraneInsurancePage() {
  return (
    <ProductPageLayout cluster="machinery"
      title="Crane Insurance Batam"
      subtitle="Tower Crane & Mobile Crane Protection"
      description="Tower cranes and mobile cranes are high-risk assets on Batam's construction projects. A single incident — a dropped boom, a snapped cable, or a structural collision — can cause losses worth billions of rupiah and expose you to major legal claims. Make sure your asset and your third-party liability are properly protected."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Machinery Insurance", href: "/en/machinery-insurance" },
        { label: "Crane Insurance", href: "/en/machinery-insurance/crane-insurance" },
      ]}
      schema={schema}
    >
      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Case Study: Crane Claims in Batam</h2>
        <p className="text-center text-[#475569] mb-8">Real-world illustrations of why crane insurance cannot be an afterthought in Batam's active construction zones.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">🏗️ Case 1 — Tower Crane Collapse, Batam Center</h3>
            <p className="text-[#475569] text-sm mb-3">A 45-metre tower crane at an apartment project in the Batam Center area suffered a mast connection failure during strong winds. The boom fell and struck a shophouse adjacent to the project site.</p>
            <div className="bg-white rounded-xl p-4 text-sm">
              <p className="text-[#0a1628] font-semibold mb-1">Losses incurred:</p>
              <p className="text-[#475569]">Physical damage to the crane: Rp 1.8 billion | Damage to the third party's shophouse: Rp 650 million | Legal & mediation costs: Rp 120 million</p>
              <p className="text-green-700 font-semibold mt-2">✅ The entire claim was covered because the owner held a Comprehensive policy with Rp 5 billion TPL.</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">🚛 Case 2 — Mobile Crane Overturned, Muka Kuning Industrial Estate</h3>
            <p className="text-[#475569] text-sm mb-3">An 80-tonne mobile crane overturned while lifting factory machinery components in Muka Kuning due to unstable ground conditions following heavy rain. The crane was a total loss and the machinery being lifted was also badly damaged.</p>
            <div className="bg-white rounded-xl p-4 text-sm">
              <p className="text-[#0a1628] font-semibold mb-1">Losses incurred:</p>
              <p className="text-[#475569]">Damage to the mobile crane: Rp 4.2 billion | Lifting and salvage costs: Rp 280 million</p>
              <p className="text-green-700 font-semibold mt-2">✅ The claim was settled within 14 working days thanks to complete initial documentation.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Complementary Cover for Lifting Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/en/machinery-insurance/heavy-equipment-insurance" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Heavy Equipment Insurance</h3>
            <p className="text-[#475569] text-sm">Protect excavators, bulldozers, and other heavy equipment on your project.</p>
          </Link>
          <Link href="/en/engineering-insurance/erection-all-risk" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Erection All Risk (EAR)</h3>
            <p className="text-[#475569] text-sm">For machinery installation projects that often rely on crane lifts.</p>
          </Link>
          <Link href="/en/liability-insurance/public-liability" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Public Liability</h3>
            <p className="text-[#475569] text-sm">Extend legal liability cover for property damage around the crane's work area.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

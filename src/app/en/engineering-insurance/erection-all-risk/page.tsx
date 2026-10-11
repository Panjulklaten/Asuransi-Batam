// app/en/engineering-insurance/erection-all-risk/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
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
    >
      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">How Much Does EAR Insurance Cost in Batam?</h2>
        <p className="text-center text-[#475569] mb-8">EAR premiums are calculated from the erection contract value. Below is an estimation guide for machinery installation and plant projects in Batam and the Riau Islands industrial estates.</p>
        <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0a1628] text-white">
                <th className="text-left p-4 font-semibold">Project Type</th>
                <th className="text-left p-4 font-semibold">Contract Value</th>
                <th className="text-left p-4 font-semibold">Estimated EAR Premium</th>
                <th className="text-left p-4 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#e2e8f0]">
                <td className="p-4 font-medium text-[#0a1628]">Factory machinery installation (small)</td>
                <td className="p-4 text-[#475569]">Rp 1 – 5 billion</td>
                <td className="p-4 text-[#1a4fa0] font-semibold">Rp 5 – 50 million</td>
                <td className="p-4 text-[#475569]">Light production machinery, HVAC, generator sets</td>
              </tr>
              <tr className="border-b border-[#e2e8f0] bg-[#f8faff]">
                <td className="p-4 font-medium text-[#0a1628]">Industrial plant installation</td>
                <td className="p-4 text-[#475569]">Rp 5 – 50 billion</td>
                <td className="p-4 text-[#1a4fa0] font-semibold">Rp 50 – 500 million</td>
                <td className="p-4 text-[#475569]">Processing plants, chemical plants, energy facilities</td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="p-4 font-medium text-[#0a1628]">Large infrastructure projects</td>
                <td className="p-4 text-[#475569]">Rp 50 billion and above</td>
                <td className="p-4 text-[#1a4fa0] font-semibold">Special negotiation</td>
                <td className="p-4 text-[#475569]">Power plants, offshore, telecom towers, jetties</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#475569] mt-3 text-center">* EAR premiums generally range from 0.5% to 2.0% of the contract value, depending on erection complexity, testing & commissioning risk, and project duration. Free consultation for a specific quote.</p>
      </div>
      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">EAR Case Studies in Batam</h2>
        <p className="text-center text-[#475569] mb-8">Realistic illustrations of how EAR responds on installation projects.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">⚡ Damage During Testing: Processing Plant in Muka Kuning</h3>
            <p className="text-[#475569] text-sm mb-3">A processing plant in the Muka Kuning industrial estate suffered severe damage to its main compressor system during first-time commissioning. Excess pressure from an uncalibrated valve caused a pipe to burst.</p>
            <div className="bg-white rounded-xl p-4 text-sm">
              <p className="text-[#0a1628] font-semibold mb-1">Losses:</p>
              <p className="text-[#475569]">Compressor & pipe damage: Rp 3.2 billion | Imported spare parts shipping: Rp 450 million</p>
              <p className="text-green-700 font-semibold mt-2">✅ The testing & commissioning claim was fully covered because the T&C clause was active.</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">🏗️ Crane Failure During Telecom Tower Erection</h3>
            <p className="text-[#475569] text-sm mb-3">A crane sling snapped while lifting the top segment of a telecom tower in Nongsa. The segment fell and damaged components already installed below, as well as a technician&apos;s vehicle in the erection area.</p>
            <div className="bg-white rounded-xl p-4 text-sm">
              <p className="text-[#0a1628] font-semibold mb-1">Losses:</p>
              <p className="text-[#475569]">Tower components damaged: Rp 1.8 billion | Vehicle (TPL): Rp 120 million | Re-erection costs: Rp 280 million</p>
              <p className="text-green-700 font-semibold mt-2">✅ EAR with the TPL extension covered the entire claim, including the third-party vehicle.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Related Products for Installation Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/en/engineering-insurance/contractor-all-risk" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Contractor All Risk (CAR)</h3>
            <p className="text-[#475569] text-sm">For building and civil projects outside machinery installation or plant erection.</p>
          </Link>
          <Link href="/en/engineering-insurance/cecr" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">CECR (Civil Engineering Completed Risks)</h3>
            <p className="text-[#475569] text-sm">For civil infrastructure such as retaining walls, jetties, and roads.</p>
          </Link>
          <Link href="/en/machinery-insurance/heavy-equipment-insurance" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Heavy Equipment Insurance</h3>
            <p className="text-[#475569] text-sm">Protect the cranes and heavy equipment used during the erection process.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

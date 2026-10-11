// app/en/liability-insurance/ship-repairers-liability/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Ship Repairer's Liability Insurance Batam – Shipyard & Repair Contractor Cover",
  description:
    "Ship Repairer's Liability in Batam for shipyards and ship repair contractors: liability for customers' vessels in your care, third-party property and injury. Free consultation with Rio.",
  canonical: "https://asuransibatam.com/en/liability-insurance/ship-repairers-liability",
  languages: {
    id: "https://asuransibatam.com/asuransi-liability/ship-repairers-liability",
    en: "https://asuransibatam.com/en/liability-insurance/ship-repairers-liability",
  },
});

const benefits = [
  { icon: "🚢", title: "Customers' Vessels in Your Care", desc: "Damage to or loss of a customer's vessel while it is in your dock, quay or yard, including during movements, as far as it is your legal liability." },
  { icon: "🏗️", title: "Third-Party Property", desc: "Damage to other vessels, quays, equipment or facilities around the work area arising from your repair activities." },
  { icon: "👥", title: "Third-Party Injury", desc: "Injury to people other than your own workers, for example vessel crew, surveyors or visitors in the work area." },
  { icon: "🔥", title: "Hot Work Incidents", desc: "Fire or damage that starts from welding and cutting (hot work) and spreads to a customer's vessel or property." },
  { icon: "⚖️", title: "Legal Defence Costs", desc: "Lawyers' fees and defence costs approved by the insurer if a vessel owner or other party brings a claim." },
  { icon: "📑", title: "Meeting Contract Requirements", desc: "Repair contracts from vessel owners or principals often ask for proof of insurance (COI) at a stated limit before work starts." },
];

const faqs = [
  {
    q: "What is Ship Repairer's Liability and how is it different from Builders Risk?",
    a: "Builders Risk is a property policy protecting the asset being worked on, meaning the vessel or project. Ship Repairer's Liability protects the shipyard or repair contractor as a party that can be sued, against claims for loss that is its legal liability. They answer different questions and can be held together.",
  },
  {
    q: "Doesn't Public Liability already cover a shipyard?",
    a: "Public Liability covers third-party injury and property damage. However, a customer's vessel in the shipyard's care is generally excluded from standard Public Liability (the care, custody and control exclusion). That portion is what Ship Repairer's Liability is usually used for. Always check the wording of the exclusions.",
  },
  {
    q: "Who needs this policy?",
    a: "Repair yards, newbuilding yards that also take repair work, and contractors working directly on or inside customers' vessels, such as welding, painting and blasting, mechanical and electrical trades. The need usually comes from contracts with vessel owners.",
  },
  {
    q: "Is the cost of repairing defective work covered?",
    a: "Generally not. The cost of redoing your own defective work is commonly excluded. The policy focuses on loss your work causes to others, as far as it is your legal liability and not excluded by the wording.",
  },
  {
    q: "How is the limit decided?",
    a: "It is generally linked to the highest value of vessel that may be in the yard at any one time, and to the limit required by customer contracts. Information on that highest vessel value and the number of vessels per year helps in preparing options.",
  },
  {
    q: "How is the premium calculated?",
    a: "It is generally influenced by turnover or repair volume, facility type (floating dock, graving dock, slipway), highest vessel value, hot work controls, use of subcontractors, and claims history. An exact figure can only be given once the details are complete.",
  },
  {
    q: "What documents should I prepare?",
    a: "Yard profile and dock facilities, highest vessel value and number of vessels per year, a sample repair contract or standard terms, list of subcontractors with proof of their insurance, HSE procedures and hot work controls, and 3–5 years of claims history.",
  },
  {
    q: "What should I do if an incident happens?",
    a: "Secure the vessel and area, document the condition with photos and video, and report to us within 3×24 hours. Do not admit liability or promise compensation to the vessel owner before coordinating with the insurer. A record of the vessel's condition on arrival (an on-arrival survey) greatly helps prove its state before work began.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ship Repairer's Liability Insurance Batam",
  description: "Liability insurance for shipyards and ship repair contractors in Batam.",
  provider: { "@type": "InsuranceAgency", name: "Batam Insurance – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};

export default function ShipRepairersLiabilityENPage() {
  return (
    <ProductPageLayout
      cluster="liability"
      title="Ship Repairer's Liability Insurance Batam"
      subtitle="Liability Cover for Shipyards and Ship Repair Contractors"
      description="When a customer's vessel enters dock, the yard is holding a high-value asset that belongs to someone else. Ship Repairer's Liability protects shipyards and repair contractors against claims for loss arising while the vessel is in their care."
      benefits={benefits}
      faqs={faqs}
      breadcrumbs={[
        { label: "Liability Insurance", href: "/en/liability-insurance" },
        { label: "Ship Repairer's Liability", href: "/en/liability-insurance/ship-repairers-liability" },
      ]}
      schema={schema}
    >
      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Asset, Liability, or Third Party?</h2>
        <p className="text-center text-[#475569] mb-6">Three policies often confused at a shipyard, though each protects something different.</p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-sm">
            <thead style={{ background: "#0a1628" }}>
              <tr>
                <th className="text-left text-white font-semibold px-5 py-3">Policy</th>
                <th className="text-left text-white font-semibold px-5 py-3">What it protects</th>
                <th className="text-left text-white font-semibold px-5 py-3">Example trigger</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr><td className="px-5 py-3.5 font-semibold">Builders Risk</td><td className="px-5 py-3.5">The asset: the vessel or project being worked on</td><td className="px-5 py-3.5">Fire damages the hull during work</td></tr>
              <tr><td className="px-5 py-3.5 font-semibold">Ship Repairer&apos;s Liability</td><td className="px-5 py-3.5">The yard as the party sued over a vessel in its care</td><td className="px-5 py-3.5">The vessel owner claims for damage sustained in dock</td></tr>
              <tr><td className="px-5 py-3.5 font-semibold">Public Liability</td><td className="px-5 py-3.5">Liability for third-party injury and property damage</td><td className="px-5 py-3.5">A visitor is injured or a neighbouring facility is damaged</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">This table is a general guide. Final cover and exclusions follow each insurer&apos;s policy wording.</p>
      </div>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-3 text-center">The Shipyard Context in Batam</h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          Yards around Tanjung Uncang and Kabil take in customers&apos; vessels of many kinds, such as barges, tugboats, merchant ships and offshore support vessels, for docking, plate replacement, painting and machinery repair. While in dock the vessel does not belong to the yard but is in its care, and that is where the liability gap appears.
        </p>
        <p className="text-[#475569] leading-relaxed">
          Repair contracts from vessel owners generally set out who bears loss and often ask for proof of insurance before the vessel arrives. Having the policy structure ready early usually speeds up contract signing.
        </p>
      </div>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Illustrative Scenarios</h2>
        <p className="text-center text-[#475569] mb-6 text-sm">Hypothetical scenarios to aid understanding, not real cases. Claim decisions always follow the policy wording.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">🔥 Sparks in the engine room</h3>
            <p className="text-[#475569] text-sm">Plate replacement work throws sparks that start a fire in the engine room of a customer&apos;s vessel in dock. The vessel owner sues the yard. This is a liability claim over a vessel in the yard&apos;s care.</p>
          </div>
          <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">⚓ A vessel strikes another during a move</h3>
            <p className="text-[#475569] text-sm">While being moved from a floating dock to the quay, a vessel strikes and damages the hull of another vessel berthed nearby. The second owner brings a claim against the yard.</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Complementary Shipyard Cover</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/en/marine-insurance/builders-risk" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Builder&apos;s Risk</h3>
            <p className="text-[#475569] text-sm">Protects the vessel asset being built or repaired, not the yard&apos;s liability.</p>
          </Link>
          <Link href="/en/liability-insurance/public-liability" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Public Liability</h3>
            <p className="text-[#475569] text-sm">Liability for third-party injury and property damage in the work area.</p>
          </Link>
          <Link href="/en/liability-insurance/employers-product-liability" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Employers&apos; Liability</h3>
            <p className="text-[#475569] text-sm">Claims from the yard&apos;s own workers, including work at height and inside tanks.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

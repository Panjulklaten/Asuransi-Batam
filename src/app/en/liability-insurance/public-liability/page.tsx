// app/en/liability-insurance/public-liability/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Public Liability Insurance Batam – Mandatory for Shipyard Subcontractors, Hotels & Public Businesses",
  description: "Public Liability Insurance in Batam for shipyard subcontractors (PT. Paxocean and others), hotels, restaurants, and shopping centres. Protection against visitor and third-party injury claims. Fast process, competitive rates. Contact: +62-813-7333-6728.",
  canonical: "https://asuransibatam.com/en/liability-insurance/public-liability",
  languages: {
      id: "https://asuransibatam.com/asuransi-liability/public-liability",
      en: "https://asuransibatam.com/en/liability-insurance/public-liability",
    },
});

const benefits = [
  {
    icon: "👤",
    title: "Injury to Visitors, Guests & Third-Party Workers",
    desc: "Covers medical costs and compensation if a visitor, guest, or third-party worker (including principal personnel such as shipyard supervisors) is injured within your area of operation. For example: a subcontractor's technician slipping on a ship's deck or struck by debris during blasting work — this liability falls on the subcontractor, not the main shipyard.",
  },
  {
    icon: "🏗️",
    title: "Third-Party Property Damage",
    desc: "Covers compensation for damage to third-party assets caused by your operations. For example: equipment or a ship's hull owned by a shipyard client damaged due to a subcontractor's negligence — repair costs that can reach hundreds of millions of rupiah are covered by this policy.",
  },
  {
    icon: "⚖️",
    title: "Legal Defence Costs",
    desc: "Covers lawyer fees, notary costs, and the entire civil or criminal court process arising from a third-party claim. In the shipyard environment, lawsuits from the families of workplace accident victims often reach Rp 500 million to Rp 2 billion.",
  },
  {
    icon: "🏥",
    title: "Third-Party Medical & Hospitalisation Costs",
    desc: "Covers all third-party hospital costs that become your business's legal responsibility — including surgery, hospitalisation, rehabilitation, and permanent disability. Unlike BPJS Ketenagakerjaan, this policy covers affected non-employee third parties.",
  },
  {
    icon: "💼",
    title: "Product & Completed Operations Liability",
    desc: "Protects against claims for damage or injury arising after the work has been handed over. For example: pipe welding performed by a subcontractor develops a leak once the ship is in operation, causing significant loss to the ship's owner — the resulting claim falls under this policy.",
  },
  {
    icon: "🌐",
    title: "Advertising Liability",
    desc: "Protection against legal claims arising from your promotional content, advertising, or marketing materials that are alleged to defame, infringe copyright, or otherwise harm a third party.",
  },
];

const faqs = [
  {
    q: "Why must shipyard subcontractors in Batam carry Public Liability Insurance?",
    a: "Major shipyards in Batam such as PT. Paxocean, Drydocks World, and Batam Shipyard & Offshore generally impose strict requirements on all vendors and subcontractors within their work contracts. One standard clause that must be satisfied before a subcontractor is allowed onto the shipyard premises is holding Public Liability Insurance with a minimum sum insured set by the principal — usually Rp 1–5 billion per occurrence. Without this insurance certificate, the Purchase Order (PO) or Work Order (WO) from the shipyard will not be issued, and the subcontractor cannot enter the work area.",
  },
  {
    q: "What are PT. Paxocean's Public Liability requirements for subcontractors?",
    a: "Based on our experience assisting vendors/subcontractors partnering with PT. Paxocean in Batam, common requirements include: (1) a Public Liability policy with a minimum limit of Rp 2–5 billion per occurrence; (2) PT. Paxocean must be named as 'Additional Insured' or a designated party on the policy; (3) the policy period must cover the entire duration of the work contract; (4) a Certificate of Insurance (COI) must be submitted to the shipyard's HSE/Procurement department prior to mobilisation; (5) the policy must be issued by an OJK-licensed insurance company. We are experienced in preparing COI documents in the format directly accepted by major Batam shipyards' HSE teams.",
  },
  {
    q: "Claim simulation: a subcontractor accident at a Batam shipyard",
    a: "Real-world scenario: a sandblasting service subcontractor at a shipyard in Tanjung Uncang experienced an incident — a third-party worker (a daily-hire worker from another vendor, not the subcontractor's own employee) was struck by abrasive debris and suffered a serious eye injury. Costs incurred: hospitalisation and eye surgery Rp 85 million, legal fees defending against the family's claim Rp 75 million, compensation for permanent vision impairment Rp 350 million. Total exposure: Rp 510 million. With an active Public Liability policy, all of these costs were settled by the insurer — the subcontractor only paid the agreed deductible, and the shipyard contract continued without disruption.",
  },
  {
    q: "What businesses besides shipyards need Public Liability Insurance in Batam?",
    a: "Beyond the maritime sector, this insurance is essential for: (1) hotels and resorts in Nongsa, Harbour Bay, and Nagoya — risk of guest injury in swimming pools, restaurants, or parking areas; (2) shopping centres and tenants (Nagoya Hill Mall, BCS Mall) — risk from slippery floors, escalators, and parking incidents; (3) event organisers running exhibitions, concerts, or corporate gatherings; (4) building contractors — mandatory for mid-to-large government and private projects; (5) clinics and hospitals — additional protection beyond medical malpractice cover; (6) gyms, spas, and sports facilities.",
  },
  {
    q: "What documents are required to obtain a Public Liability policy?",
    a: "Documents to prepare: (1) Company legality: NIB, SIUP/TDP, NPWP, Deed of Establishment; (2) Business profile: type of business activity, number of employees, size of operational area; (3) For shipyard subcontractors: a copy of the contract/WO with the principal and the scope of work to be carried out; (4) Claims history for the past 3 years (if any); (5) If the principal requires Additional Insured status: the full name and address of the principal company to be named. With complete documents, a policy can typically be issued within 1–3 working days — fast enough to meet project mobilisation deadlines.",
  },
  {
    q: "What is the procedure for filing a Public Liability claim?",
    a: "Claim steps: (1) Secure the site and provide first aid to anyone injured; (2) Document the incident — photos, video, witness statements, and an internal HSE report; (3) Notify the insurer within a maximum of 3×24 hours after the incident via the claims hotline; (4) Do not admit liability in writing to the claiming party before coordinating with the insurer — this is a standard policy condition; (5) Submit the incident report, the third party's claim letter, and the victim's medical documents; (6) A loss adjuster will typically be assigned within 3–5 working days to assess the claim; (7) The claim is settled through negotiation or, if needed, legal proceedings depending on how the case develops.",
  },
  {
    q: "What is the typical premium range for shipyard subcontractor Public Liability in Batam?",
    a: "Premiums vary based on the sum insured, type of work, and contract duration. As a guide: for subcontractors doing sandblasting/painting or light fabrication work, with a limit of Rp 2 billion per occurrence over a 6-month contract, premiums range from Rp 3–8 million. For multi-year contracts with a wider scope, annual premiums can reach Rp 10–30 million. We offer competitive quotes with a fast issuance process that accounts for the urgency of shipyard project mobilisation deadlines. Contact +62-813-7333-6728 for a quote within 1 working day.",
  },
];

const policyComparison = [
  { feature: "Third-Party / Visitor Injury", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Third-Party Property Damage", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Legal & Litigation Costs", basic: "Limited", standard: "✅", comprehensive: "✅" },
  { feature: "Third-Party Hospitalisation Costs", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Product & Completed Operations Liability", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Additional Insured (for principal)", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Advertising Liability", basic: "❌", standard: "❌", comprehensive: "✅" },
  { feature: "Limited Pollution (Sudden & Accidental)", basic: "❌", standard: "Optional", comprehensive: "✅" },
  { feature: "Certificate of Insurance (COI) for shipyards", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Max. Sum Insured (Rp)", basic: "1 billion", standard: "5 billion", comprehensive: "As required" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Public Liability Insurance Batam",
  description:
    "Public Liability Insurance in Batam for shipyard subcontractors, hotels, restaurants, contractors, and general businesses serving the public. Includes Certificate of Insurance (COI) issuance for principal/shipyard requirements.",
  serviceType: "Public Liability Insurance",
  areaServed: [
    { "@type": "City", name: "Batam" },
    { "@type": "AdministrativeArea", name: "Riau Islands" },
  ],
  provider: {
    "@type": "InsuranceAgency",
    name: "Batam Insurance – Rio",
    telephone: "+6281373336728",
    url: "https://asuransibatam.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Batam",
      addressRegion: "Riau Islands",
      addressCountry: "ID",
    },
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "IDR",
    description:
      "Premiums starting from Rp 3 million for shipyard subcontractors. Policy and COI issuance within 1–3 working days.",
  },
};

export default function PublicLiabilityENPage() {
  return (
    <ProductPageLayout
      title="Public Liability Insurance Batam"
      subtitle="Mandatory for Shipyard Subcontractors & Businesses Serving the Public"
      description="A single incident at your work site or business premises can lead to a legal claim worth hundreds of millions to billions of rupiah. In Batam, major shipyards such as PT. Paxocean require every vendor and subcontractor to hold Public Liability Insurance before they are allowed to operate on-site. We help you secure a policy that meets your principal's requirements — complete with a Certificate of Insurance (COI) — within 1–3 working days."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Liability Insurance", href: "/en/liability-insurance" },
        { label: "Public Liability", href: "/en/liability-insurance/public-liability" },
      ]}
      schema={schema}
    >
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Often Needed Together</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <Link href="/en/marine-insurance/builders-risk" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Shipyard Builder&apos;s Risk</h3>
            <p className="text-[#475569] text-sm">Complete the protection of your shipbuilding project's assets at the shipyard.</p>
          </Link>
          <Link href="/en/liability-insurance/b3-waste-insurance" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Hazardous Waste (B3) Insurance</h3>
            <p className="text-[#475569] text-sm">Mandatory for industries generating B3 waste under Government Regulation 22/2021.</p>
          </Link>
          <Link href="/en/engineering-insurance/contractor-all-risk" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Contractor All Risk (CAR)</h3>
            <p className="text-[#475569] text-sm">For construction projects that also need physical asset protection.</p>
          </Link>
          <Link href="/en/liability-insurance/freight-forwarders-liability" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Freight Forwarders Liability</h3>
            <p className="text-[#475569] text-sm">For forwarding companies and customs brokers also serving visitors at their warehouse/office.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

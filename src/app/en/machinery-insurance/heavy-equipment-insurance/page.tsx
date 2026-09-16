// app/en/machinery-insurance/heavy-equipment-insurance/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";
import {
  TrendingUp,
  CloudRain,
  Ship,
  Anchor,
  PhoneCall,
  ClipboardCheck,
  Search,
  CircleDollarSign,
  FileText,
  Camera,
  FileCheck2,
  Building2,
  MapPin,
  Calculator,
  Construction,
  Truck,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Heavy Equipment Insurance Batam – Excavator, Bulldozer, Crane & Construction Equipment",
  description: "Trusted heavy equipment insurance in Batam. Equipment All Risk protection for excavators, bulldozers, wheel loaders, and cranes. Easy claims. Contact +62-813-7333-6728.",
  canonical: "https://asuransibatam.com/en/machinery-insurance/heavy-equipment-insurance",
  languages: {
    id: "https://asuransibatam.com/asuransi-machinery/asuransi-alat-berat",
    en: "https://asuransibatam.com/en/machinery-insurance/heavy-equipment-insurance",
  },
});

const benefits = [
  {
    icon: "🚜",
    title: "Equipment All Risk",
    desc: "Comprehensive protection for heavy equipment against unforeseen physical risks — from worksite accidents and structural damage to incidents outside operating hours. Suited to equipment used on construction, mining, or shipyard sites in Batam.",
  },
  {
    icon: "💥",
    title: "Operational Accidents",
    desc: "Covers damage from skidding on mud, overturning on excavation slopes, unit-to-unit collisions, or impact with structures during maneuvering — common risks in dense project environments like Batamindo and Nongsa industrial zones.",
  },
  {
    icon: "🌊",
    title: "Natural Disasters",
    desc: "Financial protection against fire, flood, whirlwind, earthquake, and lightning damage. As an island region, Batam is prone to extreme weather and coastal tidal flooding, making this coverage highly relevant for equipment on open sites.",
  },
  {
    icon: "⚙️",
    title: "Machinery Breakdown",
    desc: "Covers repair costs from sudden mechanical or electrical failure — such as hydraulic pump, transmission, or engine component damage due to material defects. Normal wear and tear is excluded.",
  },
  {
    icon: "🏗️",
    title: "Transit Protection",
    desc: "Equipment mobilized between project sites via flatbed or trailer stays protected against traffic accidents and loading/unloading damage — covering land routes across Batam Island and barge transport to nearby islands.",
  },
  {
    icon: "👷",
    title: "Third-Party Liability (TPL)",
    desc: "Covers legal claims and compensation to third parties if your heavy equipment causes property damage or injury during operation — crucial for projects near residential areas or public facilities.",
  },
];

const faqs = [
  {
    q: "What types of heavy equipment can be insured?",
    a: "Almost any type of heavy equipment can be insured, including excavators (crawler & wheeled), bulldozers, wheel loaders, motor graders, vibro rollers, backhoe loaders, skid steer loaders, cranes (crawler, mobile, tower), forklifts, off-road dump trucks, and specialized shipyard equipment such as gantry and floating cranes. If your equipment isn't listed here, contact us — it can likely still be accommodated.",
  },
  {
    q: "Can rented heavy equipment be insured?",
    a: "Yes. Both the owner (lessor) and the renter (lessee) can insure heavy equipment according to their respective interests. Many lease contracts contractually require the renter to insure the leased equipment. We can help structure a policy that matches your lease clauses to avoid double insurance.",
  },
  {
    q: "How is the sum insured determined for heavy equipment?",
    a: "The sum insured is based on fair market value or book value, depending on agreement with the insurer. Equipment over 5 years old or valued above IDR 2 billion usually requires an appraisal or physical survey. We recommend against under-insuring, as it affects claim payout proportionality.",
  },
  {
    q: "How long does policy issuance take?",
    a: "For standard equipment with complete documents, a cover note (temporary proof of protection) can be issued within 1–2 business days. The definitive policy is typically issued in 7–10 business days. For special programs or large sums insured requiring a survey, the process may take 7–14 business days after the survey is completed.",
  },
  {
    q: "Does coverage extend to equipment operating in shipyards or near water?",
    a: "Yes, with the appropriate extension clauses. For equipment at shipyards, docks, or reclaimed land in Batam, we can include barge transit risk extensions, falling-into-water risk, and special corrosive-environment endorsements. We have experience serving clients in the Tanjung Uncang and Sekupang shipyard areas.",
  },
  {
    q: "What is excluded from heavy equipment insurance?",
    a: "Common exclusions include normal wear and tear, damage from negligent maintenance, damage caused by unlicensed operators, losses from war or terrorism (unless specially endorsed), and pre-existing damage prior to policy issuance. Full exclusion details are stated in the policy document.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Heavy Equipment Insurance Batam",
  description:
    "Equipment All Risk protection for excavators, bulldozers, cranes, wheel loaders, and heavy equipment at shipyards and construction sites in Batam.",
  areaServed: {
    "@type": "City",
    name: "Batam",
    addressRegion: "Kepulauan Riau",
    addressCountry: "ID",
  },
  provider: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam – Rio",
    telephone: "+6281373336728",
    url: "https://asuransibatam.com",
  },
  serviceType: "Equipment All Risk Insurance",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    areaServed: "Batam, Kepulauan Riau",
  },
};

export default function HeavyEquipmentInsurancePage() {
  return (
    <ProductPageLayout
      title="Heavy Equipment Insurance Batam"
      subtitle="Equipment All Risk – Total Protection for Your Heavy Assets"
      description={
        "Heavy equipment is a strategic investment worth billions of rupiah that keeps " +
        "construction, mining, and shipyard operations running in Batam. " +
        "A single incident without proper protection can halt a project, " +
        "strain cash flow, and lead to third-party legal claims. " +
        "Our Heavy Equipment Insurance program provides comprehensive Equipment All Risk " +
        "coverage — designed specifically for operating conditions in Batam, " +
        "including coastal environments, industrial zones, and shipyard facilities."
      }
      benefits={benefits}
      faqs={faqs}
      breadcrumbs={[
        { label: "Machinery Insurance", href: "/en/machinery-insurance" },
        {
          label: "Heavy Equipment Insurance",
          href: "/en/machinery-insurance/heavy-equipment-insurance",
        },
      ]}
      schema={schema}
    >
      {/* ── WHY IT MATTERS IN BATAM ── */}
      <section className="mb-14">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-[#0a1628] mb-4">
          Why Heavy Equipment Insurance Matters in Batam
        </h2>
        <p className="text-[#475569] leading-relaxed mb-8 max-w-3xl">
          In Batam, heavy equipment isn&apos;t just working machinery — it&apos;s a
          strategic asset that determines the progress of construction projects,
          industrial zone development, and shipyard operations. Without proper
          protection, a single incident can halt an entire project and drain
          significant cash flow.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-white">
            <TrendingUp size={22} className="text-[#c9a84c] mb-3" />
            <div className="font-display font-bold text-lg text-[#0a1628]">
              IDR 800M – 1.5B
            </div>
            <p className="text-sm text-[#475569] mt-1">
              Value of a mid-class excavator unit
            </p>
          </div>
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-white">
            <Construction size={22} className="text-[#c9a84c] mb-3" />
            <div className="font-display font-bold text-lg text-[#0a1628]">
              &gt; IDR 5B
            </div>
            <p className="text-sm text-[#475569] mt-1">
              Value of a large crane at docking facilities
            </p>
          </div>
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-white">
            <CloudRain size={22} className="text-[#c9a84c] mb-3" />
            <div className="font-display font-bold text-lg text-[#0a1628]">
              Coastal Risk
            </div>
            <p className="text-sm text-[#475569] mt-1">
              Unstable ground, high rainfall, inter-island mobilization
            </p>
          </div>
        </div>
      </section>

      {/* ── REAL CASE STUDY ── */}
      <section className="mb-14">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-[#0a1628] mb-6">
          Real Case Study: Shipyard in Batam
        </h2>
        <div className="rounded-2xl border border-[#e2e8f0] bg-white overflow-hidden">
          <div className="flex items-center gap-3 px-6 py-5 bg-[#0a1628]">
            <Anchor size={22} className="text-[#c9a84c]" />
            <div>
              <div className="text-white font-display font-semibold">
                Shipyard – Tanjung Uncang Area, Batam
              </div>
              <div className="text-white/50 text-xs">
                Corrosive environment · barge mobilization
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto rounded-xl border border-[#e2e8f0] mb-5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#faf8f3]">
                    <th className="text-left py-3 px-4 text-[#0a1628] font-semibold">Heavy Equipment Unit</th>
                    <th className="text-left py-3 px-4 text-[#0a1628] font-semibold">Quantity</th>
                    <th className="text-left py-3 px-4 text-[#0a1628] font-semibold">Risk Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[#e2e8f0]">
                    <td className="py-3 px-4 text-[#0a1628] font-medium">50-ton crawler crane</td>
                    <td className="py-3 px-4 text-[#475569]">2 units</td>
                    <td className="py-3 px-4 text-[#475569]">Seawater & salt vapor corrosion</td>
                  </tr>
                  <tr className="border-t border-[#e2e8f0] bg-[#faf8f3]">
                    <td className="py-3 px-4 text-[#0a1628] font-medium">Heavy-duty forklift</td>
                    <td className="py-3 px-4 text-[#475569]">3 units</td>
                    <td className="py-3 px-4 text-[#475569]">Inter-dock barge mobilization</td>
                  </tr>
                  <tr className="border-t border-[#e2e8f0]">
                    <td className="py-3 px-4 text-[#0a1628] font-medium">Amphibious excavator</td>
                    <td className="py-3 px-4 text-[#475569]">1 unit</td>
                    <td className="py-3 px-4 text-[#475569]">Tidal-zone operation</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[#475569] text-sm leading-relaxed mb-4">
              After a risk assessment, we structured an Equipment All Risk program with
              a <strong className="text-[#0a1628]">Marine Transit</strong> clause
              extension and a <strong className="text-[#0a1628]">corrosion
              endorsement</strong> for specific components — a customized policy
              structure, not a generic product.
            </p>
            <div className="flex items-center gap-2 bg-[#faf8f3] rounded-xl px-4 py-3 w-fit">
              <CircleDollarSign size={18} className="text-[#1a4fa0]" />
              <span className="text-sm font-semibold text-[#0a1628]">
                Agreed sum insured: IDR 12 billion
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLAIM SIMULATION ── */}
      <section className="mb-14">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-[#0a1628] mb-2">
          Claim Simulation: Excavator Overturns on a Reclamation Project
        </h2>
        <p className="text-[#475569] leading-relaxed mb-8 max-w-3xl">
          <strong className="text-[#0a1628]">Scenario:</strong> A Komatsu PC 200
          excavator was working on a reclamation project on the Nongsa coast. Due to
          unstable ground, the unit overturned onto a slope, damaging the boom, arm,
          and cabin — estimated at IDR 380 million.
        </p>
        <div className="space-y-3">
          {[
            {
              icon: PhoneCall,
              day: "Day 1",
              title: "Initial report",
              desc: "The owner contacts the agent at 0813-7333-6728. Photos and video of the site are sent via WhatsApp as initial evidence.",
            },
            {
              icon: ClipboardCheck,
              day: "Day 3",
              title: "Written claim submission",
              desc: "The official claim form is completed and attached with damage photos, an incident chronology report, and a project reference letter.",
            },
            {
              icon: Search,
              day: "Day 5",
              title: "Loss adjuster survey",
              desc: "An adjuster from the insurer visits the site for physical inspection and to confirm the extent of damage.",
            },
            {
              icon: CircleDollarSign,
              day: "Day 14",
              title: "Claim approval & payout",
              desc: "A compensation amount of IDR 362 million (after deductible) is approved and disbursed to the appointed partner workshop's account.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-2xl border border-[#e2e8f0] bg-white"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#0a1628] flex items-center justify-center">
                <step.icon size={18} className="text-[#c9a84c]" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#1a4fa0] bg-[#1a4fa0]/10 px-2 py-0.5 rounded-full">
                    {step.day}
                  </span>
                  <span className="font-display font-semibold text-[#0a1628]">
                    {step.title}
                  </span>
                </div>
                <p className="text-sm text-[#475569] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-5 bg-[#faf8f3] rounded-xl px-4 py-3 w-fit">
          <ShieldCheck size={18} className="text-[#1a4fa0]" />
          <span className="text-sm font-semibold text-[#0a1628]">
            Total resolution time: 18 business days
          </span>
        </div>
      </section>

      {/* ── REQUIRED DOCUMENTS ── */}
      <section className="mb-14">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-[#0a1628] mb-2">
          Required Documents for Heavy Equipment Insurance
        </h2>
        <p className="text-[#475569] leading-relaxed mb-6 max-w-3xl">
          For a smooth policy issuance process, prepare the following documents:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              icon: FileText,
              title: "Equipment Data",
              desc: "Brand, type/model, year of manufacture, serial number, and operating capacity.",
            },
            {
              icon: Camera,
              title: "Recent Photos",
              desc: "At least 4 angles (front, back, left, right) plus photos of main components.",
            },
            {
              icon: FileCheck2,
              title: "Proof of Ownership",
              desc: "Purchase invoice, registration documents, or a lease/finance agreement.",
            },
            {
              icon: Building2,
              title: "Company Documents",
              desc: "Business license (SIUP/NIB), company tax ID (NPWP), and articles of incorporation for corporate clients.",
            },
            {
              icon: MapPin,
              title: "Operating Location",
              desc: "Project address or site where the equipment will be used.",
            },
            {
              icon: Calculator,
              title: "Sum Insured",
              desc: "Estimated fair market value or book value, assisted by an appraisal if needed.",
            },
          ].map((doc, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-xl border border-[#e2e8f0] bg-white"
            >
              <doc.icon size={18} className="flex-shrink-0 mt-0.5 text-[#1a4fa0]" />
              <div>
                <div className="font-semibold text-[#0a1628] text-sm mb-1">{doc.title}</div>
                <p className="text-sm text-[#475569] leading-relaxed">{doc.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-[#475569] mt-5 max-w-3xl">
          For equipment valued above IDR 2 billion or used in special conditions
          (such as shipyards or mining sites), a physical survey by the underwriting
          team is usually required before the policy is issued.
        </p>
      </section>

      {/* ── INTERNAL LINKING ── */}
      <section>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-[#0a1628] mb-6">
          Other Machinery &amp; Industrial Equipment Protection in Batam
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <Link
            href="/en/machinery-insurance"
            className="block p-5 rounded-2xl border border-[#e2e8f0] bg-white hover:border-[#c9a84c]/40 hover:shadow-lg transition-all"
          >
            <Truck size={20} className="text-[#c9a84c] mb-3" />
            <div className="font-display font-semibold text-[#0a1628] mb-1">
              Machinery Insurance
            </div>
            <p className="text-sm text-[#475569] leading-relaxed">
              Comprehensive protection for production machinery, generators, and
              factory equipment under one policy.
            </p>
          </Link>
          <Link
            href="/en/machinery-insurance/crane-insurance"
            className="block p-5 rounded-2xl border border-[#e2e8f0] bg-white hover:border-[#c9a84c]/40 hover:shadow-lg transition-all"
          >
            <Construction size={20} className="text-[#c9a84c] mb-3" />
            <div className="font-display font-semibold text-[#0a1628] mb-1">
              Crane Insurance
            </div>
            <p className="text-sm text-[#475569] leading-relaxed">
              Specific protection for heavy-lifting operations in shipyard areas.
            </p>
          </Link>
          <Link
            href="/en/engineering-insurance/contractor-all-risk"
            className="block p-5 rounded-2xl border border-[#e2e8f0] bg-white hover:border-[#c9a84c]/40 hover:shadow-lg transition-all"
          >
            <Ship size={20} className="text-[#c9a84c] mb-3" />
            <div className="font-display font-semibold text-[#0a1628] mb-1">
              Contractor All Risk (CAR)
            </div>
            <p className="text-sm text-[#475569] leading-relaxed">
              Comprehensive protection for your construction project, from ground
              breaking to the maintenance period.
            </p>
          </Link>
        </div>
      </section>
    </ProductPageLayout>
  );
}

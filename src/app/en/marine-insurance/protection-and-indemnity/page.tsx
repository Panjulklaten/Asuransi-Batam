// app/en/marine-insurance/protection-and-indemnity/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { generateSEO, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { Breadcrumb, SectionHeader } from "@/components/ui/index";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import QuoteButton from "@/components/quote/QuoteButton";
import QuoteCard from "@/components/quote/QuoteCard";
import { Anchor, CheckCircle2, Scale } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "P&I Insurance (Protection & Indemnity) Batam",
  description:
    "P&I insurance in Batam covering shipowners' legal liabilities: crew, passengers, cargo, pollution, and wreck removal. Complements Marine Hull. Consult Rio!",
  canonical: "/en/marine-insurance/protection-and-indemnity",
  languages: {
    id: "https://asuransibatam.com/asuransi-marine/protection-and-indemnity",
    en: "https://asuransibatam.com/en/marine-insurance/protection-and-indemnity",
  },
});

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "P&I (Protection & Indemnity) Insurance Batam",
  description:
    "Liability insurance for shipowners and operators against claims from crew, passengers, cargo owners, third parties, and pollution.",
  url: "https://asuransibatam.com/en/marine-insurance/protection-and-indemnity",
  serviceType: "Marine Insurance – Protection & Indemnity (P&I)",
  areaServed: { "@type": "City", name: "Batam", addressCountry: "ID" },
  provider: {
    "@type": "InsuranceAgency",
    name: "Batam Insurance",
    telephone: "081373336728",
    url: "https://asuransibatam.com",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Marine Insurance Products",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "P&I (Protection & Indemnity) Insurance" } },
    ],
  },
};

const FAQS = [
  {
    q: "What is P&I (Protection & Indemnity) insurance?",
    a: "P&I insurance protects shipowners and operators against legal liability to other parties, for example injury or death of crew and passengers, loss of or damage to cargo carried, damage to piers or third-party property, pollution, and wreck removal costs. It covers the liability you owe to others, not the physical vessel itself.",
  },
  {
    q: "Does Marine Hull already include P&I?",
    a: "No. Marine Hull covers physical damage to your own vessel. A hull policy usually includes collision liability to other ships, but typically only in part, so liabilities to crew, passengers, cargo, piers, and pollution still need P&I cover. Many owners carry both to avoid gaps.",
  },
  {
    q: "Is P&I insurance mandatory for vessels in Indonesia?",
    a: "Indonesian shipping regulations, including Law No. 17 of 2008 on Shipping and Ministerial Regulation PM 71 of 2013 on Salvage and/or Underwater Work, contain provisions on shipowners' third-party liability and wreck removal. Application can differ by vessel type and size and may change, so we check the latest requirements for your vessel. Separately, charterers, ports, and terminals often ask for proof of P&I cover as an operating condition.",
  },
  {
    q: "Which vessels can take P&I cover?",
    a: "Tugboats, barges, cargo ships, tankers, passenger vessels and ferries, offshore support vessels (OSVs), and other commercial vessels. Risk assessment differs by vessel type, especially when carrying passengers, oil, or hazardous cargo.",
  },
  {
    q: "What determines the P&I premium?",
    a: "Vessel size (GT), type and age, trading area, the cargo or passengers carried, crew numbers, claims record, and the limit and deductible selected. Vessels trading across borders or carrying higher-risk cargo are generally assessed more strictly.",
  },
  {
    q: "What do I need to prepare to request a P&I quotation?",
    a: "Ownership and registration documents, vessel specifications (type, GT, year built, flag, class), trading area, crew details, cargo type, your current Marine Hull policy, and claims record. The full checklist appears in the Request a Quote form once you select P&I.",
  },
];

const BENEFITS = [
  "Injury, illness, or death of crew",
  "Injury or death of passengers",
  "Liability for loss of or damage to cargo",
  "Damage to piers, jetties, and third-party property",
  "Pollution liability and clean-up costs",
  "Wreck removal",
  "Collision liability not recovered under the hull policy",
  "Fines and legal costs linked to an incident",
  "Medical costs and crew repatriation",
  "Legal defence against third-party claims",
];

const WHO = [
  { title: "Tugboat & barge operators", desc: "Exposure to pier and vessel collisions and crew injury during towing." },
  { title: "Cargo ship & tanker owners", desc: "Liability for cargo carried and pollution risk." },
  { title: "Passenger vessels & ferries", desc: "Passenger injury and death claims on Batam–Singapore and inter-island routes." },
  { title: "OSV & support vessel operators", desc: "Operations near offshore facilities with strict contract requirements." },
  { title: "Shipping companies with chartered vessels", desc: "Charterers and terminals often ask for proof of P&I before operations start." },
];

const COMPARE = [
  ["What is protected", "Vessel, machinery, equipment", "Legal liability to other parties"],
  ["Example events", "Grounding, hull damage, fire", "Crew injury, damaged cargo, pier struck, oil spill"],
  ["Who is paid", "The shipowner", "The third party that suffered loss"],
  ["Basis of value", "Vessel value (agreed/market)", "Limit of liability per event"],
];

export default function ProtectionIndemnityPageEN() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQS)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            schemaBreadcrumb([
              { name: "Home", url: "/en" },
              { name: "Marine Insurance", url: "/en/marine-insurance" },
              { name: "P&I Insurance", url: "/en/marine-insurance/protection-and-indemnity" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section
        className="pt-32 pb-16 px-4"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d2241 60%, #0e3460 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/en" },
              { label: "Marine Insurance", href: "/en/marine-insurance" },
              { label: "P&I Insurance" },
            ]}
          />
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
            >
              <Anchor size={24} style={{ color: "#0a1628" }} />
            </div>
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ background: "#c9a84c20", color: "#f0d080" }}
            >
              Marine Insurance
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: "Syne, sans-serif" }}>
            P&amp;I Insurance (Protection &amp; Indemnity)
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Protect shipowners and operators against claims from crew, passengers, cargo owners, piers, and pollution. The liability cover that sits alongside Marine Hull, which protects the vessel itself.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <QuoteButton cluster="marine" lang="en" variant="gold" className="!py-3.5 !font-semibold" />
          </div>
        </div>
      </section>

      {/* Short definition */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 leading-relaxed text-lg">
            <strong>P&amp;I (Protection &amp; Indemnity)</strong> is liability insurance for shipowners and operators. If your vessel injures crew, damages cargo, strikes a pier, or spills oil, P&amp;I helps pay the compensation and legal costs. The vessel itself is covered by{" "}
            <Link href="/en/marine-insurance/marine-hull" className="text-[#1a4fa0] font-semibold hover:underline">
              Marine Hull
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="P&I Coverage" title="Which Liabilities Are Covered?" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BENEFITS.map((b) => (
              <div key={b} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-white">
                <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#1a4fa0" }} />
                <span className="text-sm text-gray-700">{b}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-6">
            Final cover depends on the policy wording, limits, and exclusions set by the insurer. Some items, such as wreck removal, may sit in P&I or as an extension of the hull policy; we align both so there are no gaps or overlaps.
          </p>
        </div>
      </section>

      {/* P&I vs Marine Hull */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow="Don't Mix Them Up" title="P&amp;I and Marine Hull Protect Different Things" center />
          <div className="overflow-x-auto mt-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="text-white" style={{ background: "#0a1628" }}>
                  <th className="text-left px-4 py-3 rounded-tl-lg">Aspect</th>
                  <th className="text-left px-4 py-3">Marine Hull</th>
                  <th className="text-left px-4 py-3 rounded-tr-lg">P&amp;I</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map(([aspect, hull, pi], i) => (
                  <tr key={aspect} style={{ background: i % 2 === 0 ? "#fff" : "#faf8f3" }}>
                    <td className="px-4 py-3 font-medium border-b border-gray-200" style={{ color: "#0a1628" }}>{aspect}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-200">{hull}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-200">{pi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-5">
            Want worked examples of how both respond in one incident? Read{" "}
            <Link href="/en/blog/pi-vs-marine-hull-insurance" className="text-[#1a4fa0] font-semibold hover:underline">
              P&amp;I vs Marine Hull insurance
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Who needs it */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Who Needs It" title="P&amp;I for Shipowners and Operators" center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {WHO.map((w) => (
              <div key={w.title} className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
                <h3 className="font-bold mb-2" style={{ color: "#0a1628" }}>{w.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulation & boundaries with other liability products */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
            <div className="flex items-center gap-2 mb-3">
              <Scale size={18} style={{ color: "#c9a84c" }} />
              <h3 className="font-bold" style={{ color: "#0a1628" }}>Regulatory Note</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Indonesian shipping rules (including Law 17/2008 and PM 71/2013) contain provisions on shipowners' liability and wreck removal. Application differs by vessel type and size and can change, so we check the latest requirements for your vessel before preparing a quotation.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
            <h3 className="font-bold mb-3" style={{ color: "#0a1628" }}>Not a Substitute for Other Liability Cover</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              P&amp;I addresses risks from operating a vessel. A yard repairing other owners' vessels needs{" "}
              <Link href="/en/liability-insurance/ship-repairers-liability" className="text-[#1a4fa0] font-semibold hover:underline">
                Ship Repairer&apos;s Liability
              </Link>
              , while business activity on land or project sites falls under{" "}
              <Link href="/en/liability-insurance/public-liability" className="text-[#1a4fa0] font-semibold hover:underline">
                Public Liability
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Related products & articles */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Complete Your Marine Protection" title="Related Products & Articles" center />
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/en/marine-insurance/marine-hull" className="block p-6 rounded-2xl border border-gray-100 hover:border-[#c9a84c] transition-all bg-white">
              <h3 className="font-bold text-[#0a1628] mb-2">Marine Hull Insurance</h3>
              <p className="text-sm text-gray-600">Protect the vessel itself, the main partner policy to P&amp;I.</p>
            </Link>
            <Link href="/en/marine-insurance/marine-cargo" className="block p-6 rounded-2xl border border-gray-100 hover:border-[#c9a84c] transition-all bg-white">
              <h3 className="font-bold text-[#0a1628] mb-2">Marine Cargo Insurance</h3>
              <p className="text-sm text-gray-600">For cargo owners whose goods travel on the vessel.</p>
            </Link>
            <Link href="/en/blog/how-to-claim-pi-insurance" className="block p-6 rounded-2xl border border-gray-100 hover:border-[#c9a84c] transition-all bg-white">
              <h3 className="font-bold text-[#0a1628] mb-2">How to Claim P&amp;I Insurance</h3>
              <p className="text-sm text-gray-600">Steps, documents, and what to avoid after an incident.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" style={{ background: "#faf8f3" }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow="FAQ" title="Questions About P&amp;I Insurance" center />
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <QuoteCard cluster="marine" lang="en" />
    </>
  );
}

// app/en/blog/pi-vs-marine-hull-insurance/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import QuoteButton from "@/components/quote/QuoteButton";
import ArticleLayout from "@/components/ArticleLayout";
import { generateSEO } from "@/lib/seo";
import { Lightbulb, Ship, Anchor, Scale, Waves, ListChecks, MessageCircleMore } from "lucide-react";

function SectionHeading({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 not-prose font-display font-bold text-[#0a1628] text-2xl md:text-[1.65rem] mt-12 mb-4">
      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
        <Icon className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
      </span>
      {children}
    </h2>
  );
}

export const metadata: Metadata = generateSEO({
  title: "P&I vs Marine Hull Insurance for Shipowners",
  description:
    "Marine Hull protects the vessel; P&I protects against liability claims from others. See the difference through real-world incident examples before choosing cover.",
  canonical: "https://asuransibatam.com/en/blog/pi-vs-marine-hull-insurance",
  languages: {
    id: "https://asuransibatam.com/blog/perbedaan-pi-dan-marine-hull",
    en: "https://asuransibatam.com/en/blog/pi-vs-marine-hull-insurance",
  },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "P&I vs Marine Hull Insurance – Which Does a Shipowner Need?",
  description: "Marine Hull protects the vessel, P&I covers liability to others. Incident examples and how to choose.",
  datePublished: "2026-10-16",
  dateModified: "2026-10-16",
  author: { "@type": "Person", name: "Rio", jobTitle: "Insurance Practitioner", telephone: "+6281373336728" },
  publisher: { "@type": "InsuranceAgency", name: "Batam Insurance – Rio", url: "https://asuransibatam.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://asuransibatam.com/en/blog/pi-vs-marine-hull-insurance" },
};

const rows = [
  ["Crew member injured during towing", "Not covered", "Covered (liability to crew)"],
  ["Barge hull damaged by grounding", "Covered", "Not covered"],
  ["Your vessel strikes another vessel", "Your own vessel's damage, plus part of collision liability", "Remaining collision liability and other resulting claims"],
  ["Pier or jetty struck", "Usually not, unless the clause is extended", "Usually covered"],
  ["Oil spill from the vessel", "Not covered", "Covered (pollution liability)"],
  ["Customer's cargo damaged in carriage", "Not covered", "Covered (carrier's liability)"],
];

export default function PiVsHullPage() {
  return (
    <ArticleLayout
      cluster="marine"
      title="P&I vs Marine Hull Insurance – Which Does a Shipowner Need?"
      description="A hull policy on your vessel does not mean third-party claims against you are covered. Here is the difference."
      date="16 October 2026"
      readTime="6 min"
      category="Marine"
      breadcrumbs={[{ label: "P&I vs Marine Hull Insurance", href: "/en/blog/pi-vs-marine-hull-insurance" }]}
      schema={schema}
    >
      <SectionHeading icon={Lightbulb}>The Misconception: &quot;My Hull Policy Covers Everything&quot;</SectionHeading>
      <p>
        Many shipowners assume one vessel policy handles every incident. After an accident there are two separate questions: <strong>who pays for damage to my vessel?</strong> and <strong>who pays the claims others make against me?</strong> Marine Hull answers the first. P&amp;I answers the second.
      </p>

      <SectionHeading icon={Ship}>Marine Hull: Protecting Your Vessel</SectionHeading>
      <p>
        <Link href="/en/marine-insurance/marine-hull">Marine Hull</Link> pays for physical loss of or damage to the vessel, such as hull, machinery, and equipment lost to grounding, fire, or sinking. The money goes to the shipowner. Hull policies usually include collision liability to other ships, but typically only in part (three-quarters under common standard clauses) and only for collisions with other vessels.
      </p>

      <SectionHeading icon={Anchor}>P&amp;I: Protecting Against Claims by Others</SectionHeading>
      <p>
        <Link href="/en/marine-insurance/protection-and-indemnity">P&amp;I insurance</Link> covers the owner's or operator's legal liability to other parties: crew, passengers, cargo owners, pier owners, and those affected by pollution. The money flows to the injured third party, not to the shipowner.
      </p>

      <SectionHeading icon={Scale}>Side-by-Side by Incident</SectionHeading>
      <div className="overflow-x-auto my-6 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg">Incident</th>
              <th className="text-left px-4 py-3">Marine Hull</th>
              <th className="text-left px-4 py-3 rounded-tr-lg">P&amp;I</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([k, h, p], i) => (
              <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="px-4 py-3 font-medium text-[#0a1628] border-b border-[#e2e8f0]">{k}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#e2e8f0]">{h}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#e2e8f0]">{p}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>This is a general guide. Final outcomes follow the policy wording, limits, and exclusions.</p>

      <SectionHeading icon={Waves}>One Incident, Two Policies at Work</SectionHeading>
      <p>
        Picture a barge under tow striking a jetty while berthing. The barge hull is dented and a crew member is hurt. Repairing the barge is a hull claim. Compensation to the jetty owner and the crew member's medical costs are P&amp;I claims. Without P&amp;I, the owner pays those last two bills from company cash.
      </p>

      <SectionHeading icon={ListChecks}>Who Needs What?</SectionHeading>
      <p><strong>Hull only</strong> can be enough where the vessel carries no third-party crew or cargo and no charterer requires more, but that is uncommon.</p>
      <p><strong>Hull and P&amp;I</strong> is the usual setup for commercial vessels: tugboats, barges, cargo ships, ferries, and OSVs.</p>
      <p><strong>P&amp;I only</strong> may apply where someone else insures the vessel's value but operating liability still sits with you.</p>
      <p>
        If an incident has already happened, read <Link href="/en/blog/how-to-claim-pi-insurance">how to claim P&amp;I insurance</Link>.
      </p>

      <div className="mt-10 p-6 bg-[#0a1628] rounded-2xl text-white not-prose">
        <h3 className="flex items-center gap-2.5 font-display font-bold text-lg text-[#c9a84c] mb-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 shrink-0">
            <MessageCircleMore className="w-[16px] h-[16px] text-[#c9a84c]" strokeWidth={2} />
          </span>
          Check Your Vessel's Policy Set-Up
        </h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          Send vessel type, GT, and trading area. We'll assess whether hull alone is enough or P&amp;I is needed.
        </p>
        <QuoteButton cluster="marine" lang="en" variant="gold" className="!rounded-xl !px-6 !py-3 !text-sm" />
      </div>

      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Related Pages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Products &amp; Services</p>
            <ul className="space-y-2">
              <li><Link href="/en/marine-insurance/protection-and-indemnity" className="text-sm text-blue-700 hover:underline font-medium">→ P&amp;I Insurance Batam</Link></li>
              <li><Link href="/en/marine-insurance/marine-hull" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Hull Insurance Batam</Link></li>
              <li><Link href="/en/marine-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Insurance Batam</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Related Articles</p>
            <ul className="space-y-2">
              <li><Link href="/en/blog/how-to-claim-pi-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ How to Claim P&amp;I Insurance</Link></li>
              <li><Link href="/en/blog/marine-hull-vs-cargo-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Hull vs Cargo Insurance</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}

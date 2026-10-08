// app/en/blog/builders-risk-shipyard-insurance-batam/page.tsx
import type { Metadata } from "next";
import QuoteButton from "@/components/quote/QuoteButton";
import { generateSEO } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";
import {
  Ship,
  Anchor,
  Building2,
  Waves,
  ShieldAlert,
  CircleCheck,
  CircleX,
  Landmark,
  Handshake,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Builders Risk Insurance Batam Shipyards",
  description:
    "Marine builders risk insurance explained: what it covers during vessel construction, how it differs from hull insurance, and who needs it in Batam's shipyard industry. Call Rio +62813-7333-6728.",
  canonical: "https://asuransibatam.com/en/blog/builders-risk-shipyard-insurance-batam",
  languages: {
    en: "https://asuransibatam.com/en/blog/builders-risk-shipyard-insurance-batam",
    id: "https://asuransibatam.com/blog/builders-risk-untuk-galangan-kapal",
  },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Builders Risk Insurance for Shipyards in Batam – Complete Guide",
  description: "Marine builders risk insurance explained: what it covers during vessel construction, how it differs from hull insurance, and who needs it in Batam's shipyard industry.",
  datePublished: "2026-05-07",
  dateModified: "2026-05-07",
  inLanguage: "en",
  author: { "@type": "Person", name: "Rio", jobTitle: "Insurance Practitioner", telephone: "+6281373336728" },
  publisher: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", url: "https://asuransibatam.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://asuransibatam.com/en/blog/builders-risk-shipyard-insurance-batam" },
};

const WHO_NEEDS = [
  { icon: Building2, title: "Shipyards", desc: "A shipyard carries responsibility for a vessel throughout construction. If fire breaks out, the vessel sinks during launching, or a structural accident occurs, the shipyard bears the financial consequences — unless a Builders Risk policy is in place." },
  { icon: Anchor, title: "Vessel Owners Commissioning a New Build", desc: "An owner who has commissioned a new vessel has a financial stake from the moment the first instalment is paid. Their investment is exposed throughout the build — long before a hull policy can be activated." },
  { icon: Ship, title: "Owners Undergoing Major Conversion / Drydock Repair", desc: "Vessels entering the yard for substantial work — structural modifications, engine replacement, or full conversion — can be covered under a Builders Risk policy for the drydock period." },
];

const COVERS = [
  { title: "Physical Damage to Materials & Components", desc: "All materials incorporated into the vessel — steel plates, piping, electrical systems, machinery — plus materials stored on the yard premises awaiting installation." },
  { title: "Construction Defect Consequential Damage", desc: "If a design flaw or installation error causes damage to another part of the vessel, that consequential damage is covered (repairing the defective part itself is generally excluded)." },
  { title: "Fire and Explosion", desc: "The single highest risk in a working shipyard — arising from welding, sandblasting, and painting operations." },
  { title: "Launching Risk", desc: "The moment a vessel enters the water for the first time — risk of listing, flooding, or striking yard infrastructure during launching." },
  { title: "Sea Trial Coverage", desc: "The period after construction during which the vessel undergoes sea trials, typically 30–90 days, before the policy closes and Marine Hull takes over." },
  { title: "Third-Party Liability", desc: "Damage to other vessels or property within the yard caused by the vessel under construction." },
];

const EXCLUSIONS = [
  "Normal wear and tear",
  "Cost of repairing the defective part itself — only consequential damage is covered",
  "Strike and riot damage (unless a specific endorsement is added)",
  "Financial loss from delayed delivery — requires a separate Delay in Start-Up policy",
  "Pre-existing damage present before the policy inception date",
];

const NAMED_INSURED = [
  { icon: Building2, label: "Option 1", title: "Shipyard as primary insured", desc: "The yard holds the policy and includes the vessel owner's interest as an additional insured. Common where the yard retains full control throughout the build." },
  { icon: Landmark, label: "Option 2", title: "Vessel owner as primary insured", desc: "The vessel owner holds their own policy, listing the yard as additional insured. Gives the owner greater control over the claims process." },
  { icon: Handshake, label: "Option 3", title: "Joint Policy", desc: "Both parties are co-insureds. Most common for high-value builds. The right structure depends on the build contract terms and should be agreed before construction commences." },
];

export default function BuildersRiskShipyardPage() {
  return (
    <ArticleLayout
      cluster="marine"
      title="Builders Risk Insurance for Shipyards in Batam – Complete Guide"
      description="A vessel under construction is at its most physically vulnerable. Builders Risk is the only product designed specifically for this phase."
      date="May 7, 2026"
      readTime="10 min read"
      category="Marine"
      breadcrumbs={[{ label: "Builders Risk Shipyard Insurance Batam", href: "/en/blog/builders-risk-shipyard-insurance-batam" }]}
      schema={schema}
    >
      <h2>Batam: One of Indonesia&apos;s Leading Shipyard Hubs</h2>
      <p>
        Batam is far more than an electronics manufacturing and logistics centre — it is also one of Indonesia&apos;s most significant shipbuilding locations. Positioned at the intersection of the Malacca Strait and the Singapore Strait, dozens of shipyards operate in Batam — from small facilities repairing fishing vessels to internationally certified yards building offshore support vessels and crane barges.
      </p>
      <p>
        Every vessel under construction, conversion, or major repair exists in its most <strong>physically vulnerable state</strong> — incomplete, with heavy human activity across its structure, and located in a facility that stores hazardous materials including welding gases, marine coatings, and fuel. This is precisely when a vessel needs dedicated protection: <strong>Builders Risk Insurance</strong>.
      </p>

      <h2>What Is Marine Builders Risk Insurance?</h2>
      <p>
        Builders Risk Insurance protects a <strong>vessel during the construction or major repair process</strong> — from the moment the keel is laid or work commences, through to the vessel&apos;s completion and delivery to its owner.
      </p>
      <p>This is not standard hull insurance. An operational vessel is covered by Marine Hull Insurance. Builders Risk is specifically designed for the construction phase — when the vessel has no operational certificate and cannot sail independently.</p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg">Aspect</th>
              <th className="text-left px-4 py-3">Builders Risk</th>
              <th className="text-left px-4 py-3 rounded-tr-lg">Marine Hull</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Phase", "Construction / repair", "Operational"],
              ["Vessel status", "Incomplete / not sailing", "Actively in service"],
              ["Valuation basis", "Progressive contract value", "Market value of vessel"],
              ["Primary insured", "Shipyard and/or vessel owner", "Vessel owner / operator"],
              ["Sea trial coverage", "Included", "Not applicable"],
            ].map(([aspect, br, hull], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="px-4 py-3 font-medium text-[#0a1628] border-b border-[#e2e8f0]">{aspect}</td>
                <td className="px-4 py-3 text-[#374151] border-b border-[#e2e8f0]">{br}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#e2e8f0]">{hull}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Who Needs Builders Risk Insurance?</h2>
      <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        {WHO_NEEDS.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl p-5 bg-white border border-[#e2e8f0] shadow-sm">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: "linear-gradient(135deg, #0a1628, #1a4fa0)" }}>
              <Icon size={18} className="text-white" />
            </div>
            <p className="font-bold text-sm mb-1.5" style={{ color: "#0a1628" }}>{title}</p>
            <p className="text-sm text-[#475569]">{desc}</p>
          </div>
        ))}
      </div>

      <h2>What Does Builders Risk Cover?</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {COVERS.map((c) => (
          <div key={c.title} className="flex items-start gap-3 p-4 rounded-xl border" style={{ borderColor: "#1a4fa025", background: "#1a4fa008" }}>
            <CircleCheck size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#1a4fa0" }} />
            <div>
              <p className="font-semibold text-sm" style={{ color: "#0a1628" }}>{c.title}</p>
              <p className="text-sm text-[#475569] mt-0.5">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>What Is Not Covered (Standard Exclusions)?</h2>
      <div className="not-prose space-y-2 my-6">
        {EXCLUSIONS.map((item) => (
          <div key={item} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#faf8f3] border border-[#e2e8f0]">
            <CircleX size={16} className="flex-shrink-0 mt-0.5 text-[#94a3b8]" />
            <span className="text-sm text-[#374151]">{item}</span>
          </div>
        ))}
      </div>

      <h2>How Is the Sum Insured Calculated?</h2>
      <p><strong>Agreed Value / Contract Price:</strong> The sum insured equals the full contract price from day one. Coverage is in full from the moment the policy commences. Most common method in Batam shipyards due to administrative simplicity.</p>
      <p><strong>Progressive Value:</strong> The sum insured increases in stages aligned to construction milestones. More actuarially precise but administratively complex.</p>

      <h2>What Determines the Premium?</h2>
      <div className="not-prose my-6 p-5 rounded-2xl border flex items-start gap-4" style={{ borderColor: "#c9a84c30", background: "#faf8f3" }}>
        <ShieldAlert size={22} className="flex-shrink-0 mt-0.5" style={{ color: "#a07830" }} />
        <p className="text-sm text-[#374151] m-0">
          Key rating factors: vessel type, contract value, construction duration, shipyard credentials and
          safety record, and coverage scope selected. As a general reference, Builders Risk premiums typically
          range from <strong style={{ color: "#0a1628" }}>0.5% to 1.5% of the contract value</strong> per project —
          considerably higher than standard Marine Hull rates, reflecting the elevated risk profile of the
          construction phase.
        </p>
      </div>

      <h2>Who Should Be the Named Insured?</h2>
      <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        {NAMED_INSURED.map(({ icon: Icon, label, title, desc }) => (
          <div key={label} className="rounded-2xl p-5 border-2" style={{ borderColor: "#0a162815" }}>
            <div className="flex items-center gap-2 mb-3">
              <Icon size={18} style={{ color: "#c9a84c" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#c9a84c" }}>{label}</span>
            </div>
            <p className="font-bold text-sm mb-1.5" style={{ color: "#0a1628" }}>{title}</p>
            <p className="text-sm text-[#475569]">{desc}</p>
          </div>
        ))}
      </div>

      <h2>When Does the Builders Risk Policy End?</h2>
      <p>The policy terminates at whichever occurs first: the date of delivery of the vessel to the owner, successful completion of sea trials, or the expiry date in the policy schedule. Immediately upon delivery, the vessel owner must activate a Marine Hull policy to ensure the vessel is covered from the first moment it enters commercial service.</p>

      <div className="mt-10 p-6 bg-[#0a1628] rounded-2xl text-white not-prose">
        <div className="flex items-center gap-3 mb-2">
          <Waves size={20} style={{ color: "#c9a84c" }} />
          <h3 className="font-display font-bold text-lg text-[#c9a84c] m-0">Structure Your Shipbuilding Insurance with Confidence</h3>
        </div>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          I assist Batam shipyards and vessel buyers in designing the right insurance framework for new builds and major conversions — from Builders Risk during construction through to Marine Hull for the operational life of the vessel.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <QuoteButton cluster="marine" lang="en" variant="gold" className="!rounded-xl !px-6 !py-3 !text-sm" />
          <Link href="/en/marine-insurance/builders-risk"
            className="px-5 py-3 border border-white/30 text-white font-semibold rounded-xl text-sm text-center hover:bg-white/10 transition-colors">
            Builders Risk Insurance
          </Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0] not-prose">
        <p className="text-sm font-display font-semibold text-[#0a1628] mb-3">Related Articles</p>
        <div className="flex flex-col gap-2">
          <Link href="/en/blog/marine-hull-vs-cargo-insurance" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Marine Hull vs Cargo Insurance</Link>
          <Link href="/en/marine-insurance/marine-hull" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Marine Hull Insurance Batam</Link>
          <Link href="/en/marine-insurance" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ All Marine Insurance Products</Link>
        </div>
      </div>
    
      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Related Pages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Products &amp; Services</p>
            <ul className="space-y-2">
              <li><a href="/en/marine-insurance/builders-risk" className="text-sm text-blue-700 hover:underline font-medium">→ Builders Risk Insurance Batam</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Related Articles</p>
            <ul className="space-y-2">
              <li><a href="/en/blog/how-to-get-builders-risk-insurance-batam" className="text-sm text-blue-700 hover:underline font-medium">→ How to Get Builders Risk Insurance</a></li>
              <li><a href="/en/blog/marine-hull-vs-cargo-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Hull vs Cargo Insurance</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}

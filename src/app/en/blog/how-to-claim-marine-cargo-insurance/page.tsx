// app/en/blog/how-to-claim-marine-cargo-insurance/page.tsx
import type { Metadata } from "next";
import QuoteButton from "@/components/quote/QuoteButton";
import { generateSEO } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";
import {
  PenLine,
  BellRing,
  FolderCheck,
  Search,
  Calculator,
  CircleX,
  Camera,
  ShieldCheck,
  Layers,
  FolderOpen,
  Coins,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "How to Claim Marine Cargo Insurance",
  description:
    "Step-by-step guide to filing a marine cargo insurance claim in Indonesia: required documents, reporting deadlines, and common mistakes that get claims rejected. Call Rio +62813-7333-6728.",
  canonical: "https://asuransibatam.com/en/blog/how-to-claim-marine-cargo-insurance",
  languages: {
    en: "https://asuransibatam.com/en/blog/how-to-claim-marine-cargo-insurance",
    id: "https://asuransibatam.com/blog/cara-klaim-asuransi-marine-cargo",
  },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Claim Marine Cargo Insurance the Right Way – Complete Guide",
  description: "Step-by-step guide to filing a marine cargo insurance claim in Indonesia: required documents, reporting deadlines, and common mistakes that get claims rejected.",
  datePublished: "2026-05-07",
  dateModified: "2026-05-07",
  inLanguage: "en",
  author: { "@type": "Person", name: "Rio", jobTitle: "Insurance Practitioner", telephone: "+6281373336728" },
  publisher: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", url: "https://asuransibatam.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://asuransibatam.com/en/blog/how-to-claim-marine-cargo-insurance" },
};

const STEPS = [
  { icon: PenLine, title: "Create a Damage Notation on the Spot", desc: <>The moment cargo arrives and something looks wrong — wet cartons, visible dents, short count, or missing packages — note the discrepancy directly on the receiving documents before signing anything. Don't sign a clean Delivery Order if the cargo isn't in that condition. <strong>Common mistake:</strong> staff signing documents clean under time pressure without inspecting the cargo — this alone can void an otherwise valid claim.</> },
  { icon: BellRing, title: "Notify the Insurer Within 3×24 Hours", desc: "Most policies require a first notice of loss within 3 calendar days of receiving the cargo or discovering the damage — some narrow this to 24 hours. The initial notice doesn't need to be complete: policy number, B/L number, brief description, and a preliminary estimate is enough. File first, gather full documentation after." },
  { icon: FolderCheck, title: "Compile the Full Claims Document Package", desc: "See the document table below. Additional documents depend on claim type: an independent marine survey report for wet/damaged cargo, a short-landing report from the port authority, or customs dispute documents for detained cargo." },
  { icon: Search, title: "The Loss Adjuster Survey", desc: "The insurer appoints an independent surveyor to assess the damage objectively. Do not move, repair, or dispose of damaged cargo before the survey is complete. Separate damaged from undamaged units and provide the full routing history. The output is a Survey Report forming the basis of settlement." },
  { icon: Calculator, title: "Settlement Calculation and Payment", desc: "Three common valuation bases: Agreed Value (fixed at inception), Market Value (at time/place of loss), or Invoice Value + margin (typically +10%). Know your deductible before filing — a claim below the threshold creates a claims record without a payout." },
];

const DOCS: [string, string][] = [
  ["Insurance policy / cover note", "Proof of active coverage"],
  ["Bill of Lading / Airway Bill", "Official shipment record"],
  ["Commercial Invoice", "Insured value of the goods"],
  ["Packing List", "Contents per carton or pallet"],
  ["Certificate of Insurance", "Confirms cargo is under the policy"],
  ["Delivery Order / Gate Pass", "Handover document – must carry damage notation"],
  ["Damage photographs", "Taken before goods are moved"],
];

const REJECTION_REASONS = [
  "No damage notation on delivery documents",
  "Late notification — first notice filed after the policy deadline",
  "Cargo altered before the survey (wet goods dried or sold before the loss adjuster visited)",
  "Policy does not cover the transport mode used",
  "Inadequate packaging — explicitly excluded in most policies",
  "Under-insurance — payout reduced proportionally under the Average Clause",
];

const HABITS = [
  { icon: Camera, text: "Photograph and video cargo condition before loading into the container" },
  { icon: ShieldCheck, text: "Confirm the policy is active before goods depart" },
  { icon: Layers, text: "Choose the right coverage terms: ICC (A) covers all risks; ICC (B) and (C) are named-perils" },
  { icon: FolderOpen, text: "Keep one folder per shipment: B/L, invoice, packing list, certificate of insurance" },
  { icon: Coins, text: "Insure at the correct value — under-declaring to save on premium will cost more at claim time" },
];

export default function HowToClaimMarineCargoPage() {
  return (
    <ArticleLayout
      cluster="marine"
      title="How to Claim Marine Cargo Insurance the Right Way – Complete Guide"
      description="Required documents, reporting deadlines, and the correct steps to ensure your marine cargo claim is paid without rejection."
      date="May 7, 2026"
      readTime="8 min read"
      category="Marine"
      breadcrumbs={[{ label: "How to Claim Marine Cargo Insurance", href: "/en/blog/how-to-claim-marine-cargo-insurance" }]}
      schema={schema}
    >
      <h2>Why Marine Cargo Claims Often Fall Apart</h2>
      <p>
        Many importers and exporters in Batam only discover the gaps in their policy when cargo arrives damaged or short-landed. The problem is rarely a reluctant insurer — it is almost always a misstep in the first hours after the incident.
      </p>
      <p>
        Marine cargo claims are uniquely complex: goods pass through multiple carriers and modes of transport, documentation involves shippers, freight forwarders, carriers, and customs authorities, and reporting windows are unforgiving.
      </p>

      <div className="not-prose space-y-4 my-6">
        {STEPS.map(({ icon: Icon, title, desc }, i) => (
          <div key={title} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #0a1628, #1a4fa0)" }}>
              <Icon size={20} className="text-white" />
            </div>
            <div>
              <p className="font-semibold text-sm mb-1 flex items-center gap-2" style={{ color: "#0a1628" }}>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "#c9a84c20", color: "#a07830" }}>Step {i + 1}</span>
                {title}
              </p>
              <p className="text-sm text-[#475569]">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h3>Full Claims Document Package</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg">Document</th>
              <th className="text-left px-4 py-3 rounded-tr-lg">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {DOCS.map(([doc, purpose], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="px-4 py-3 font-medium text-[#0a1628] border-b border-[#e2e8f0]">{doc}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#e2e8f0]">{purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Common Reasons Marine Cargo Claims Are Rejected</h2>
      <div className="not-prose space-y-2 my-6">
        {REJECTION_REASONS.map((reason) => (
          <div key={reason} className="flex items-start gap-3 p-3.5 rounded-xl border" style={{ borderColor: "#dc262620", background: "#fef2f2" }}>
            <CircleX size={16} className="flex-shrink-0 mt-0.5 text-red-600" />
            <span className="text-sm text-[#374151]">{reason}</span>
          </div>
        ))}
      </div>

      <h2>Pre-Shipment Habits That Make Claims Easier</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        {HABITS.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#e2e8f0] shadow-sm">
            <Icon size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#c9a84c" }} />
            <span className="text-sm text-[#374151]">{text}</span>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 bg-[#0a1628] rounded-2xl text-white not-prose">
        <h3 className="font-display font-bold text-lg text-[#c9a84c] mb-2">Need Help Filing a Claim or Reviewing Your Policy?</h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          Marine cargo claims become significantly more complicated when multiple modes of transport are involved or when goods have transited through several ports. As a Batam-based insurance practitioner with direct experience on the Batam–Singapore–Jakarta corridor, I can assist from the first notice through to settlement.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <QuoteButton cluster="marine" lang="en" variant="gold" className="!rounded-xl !px-6 !py-3 !text-sm" />
          <Link href="/en/marine-insurance/marine-cargo"
            className="px-5 py-3 border border-white/30 text-white font-semibold rounded-xl text-sm text-center hover:bg-white/10 transition-colors">
            Marine Cargo Insurance
          </Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0] not-prose">
        <p className="text-sm font-display font-semibold text-[#0a1628] mb-3">Related Articles</p>
        <div className="flex flex-col gap-2">
          <Link href="/en/blog/marine-hull-vs-cargo-insurance" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Marine Hull vs Cargo Insurance: Key Differences</Link>
          <Link href="/en/blog/batam-singapore-shipping-insurance" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Batam–Singapore Cargo Shipping Insurance</Link>
          <Link href="/en/marine-insurance/marine-cargo" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Marine Cargo Insurance Batam</Link>
        </div>
      </div>
    
      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Related Pages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Related Articles</p>
            <ul className="space-y-2">
              <li><a href="/en/blog/marine-cargo-insurance-premium-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Cargo Insurance Premium Batam</a></li>
              <li><a href="/en/blog/batam-export-cargo-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Batam Export Cargo Insurance</a></li>
              <li><a href="/en/blog/machinery-heavy-equipment-shipping-insurance-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Machinery & Heavy Equipment Shipping Insurance</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}

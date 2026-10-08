// app/en/blog/how-to-claim-home-fire-insurance/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import {
  Flame,
  Zap,
  Bomb,
  Plane,
  Wind,
  Camera,
  FileText,
  Phone,
  Search,
  Handshake,
  Clock,
  Trash2,
  TrendingDown,
  ShieldOff,
  MessageSquareWarning,
  Timer,
  Headset,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "How to Claim Home Fire Insurance – Documents, Procedure & Fatal Mistakes to Avoid",
  description: "Claiming home fire insurance is not as straightforward as it seems. Learn the required documents, the correct procedure, and the common mistakes that cause claims to be rejected — a complete guide for homeowners in Batam.",
  canonical: "https://asuransibatam.com/en/blog/how-to-claim-home-fire-insurance",
  languages: {
      id: "https://asuransibatam.com/blog/cara-klaim-asuransi-kebakaran-rumah",
      en: "https://asuransibatam.com/en/blog/how-to-claim-home-fire-insurance",
    },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Claim Home Fire Insurance: Documents, Procedure & Fatal Mistakes to Avoid",
  datePublished: "2026-05-06",
  dateModified: "2026-05-06",
  author: { "@type": "Person", name: "Rio" },
  publisher: { "@type": "Organization", name: "Asuransi Batam" },
};

const FLEXAS = [
  { letter: "F", label: "Fire", icon: Flame },
  { letter: "L", label: "Lightning", icon: Zap },
  { letter: "E", label: "Explosion", icon: Bomb },
  { letter: "A", label: "Aircraft impact", icon: Plane },
  { letter: "S", label: "Smoke damage", icon: Wind },
];

const FIRST_24H = [
  { icon: Camera, title: "Prioritise Safety, Then Documentation", desc: "Once safe, document thoroughly: exterior photos/video from all sides, interior of every affected room, damaged items, and the fire's point of origin if identifiable — before anything is touched or cleared away." },
  { icon: FileText, title: "File a Report with the Fire Brigade or Police", desc: "A letter from the Fire Department (Damkar) is mandatory in almost all claims. For major losses or suspected arson, a police report is also required — request the STPL as proof." },
  { icon: Phone, title: "Contact Your Insurance Agent or Company", desc: "Report within 3×24 hours of the incident — the deadline set by almost every policy. Give an honest, consistent account; discrepancies are scrutinised closely during verification." },
];

const AFTER_SUBMISSION = [
  { icon: Search, title: "Survey by a Loss Adjuster", desc: "For claims above roughly Rp 50 million, an independent Loss Adjuster inspects the site and produces a loss assessment report. Do not begin repairs before the survey is complete and written approval is given." },
  { icon: Handshake, title: "Claim Value Negotiation", desc: "If your claimed amount differs from the adjuster's assessment, you can raise an objection with supporting evidence — receipts, before-photos, or a contractor's repair estimate. This is a normal part of the process." },
];

const MISTAKES = [
  { icon: Clock, title: "Waiting too long to report", desc: "If three days have passed before contacting the insurer, the risk of technical rejection is very high." },
  { icon: Trash2, title: "Clearing the site before the survey", desc: "The instinct to start cleaning up is understandable, but it's one of the biggest causes of claim complications. Wait for written approval." },
  { icon: TrendingDown, title: "Underinsurance — sum insured too low", desc: "A house worth Rp 800 million insured for only Rp 400 million gets only 50% of the actual loss approved, per the underinsurance ratio." },
  { icon: ShieldOff, title: "Cause of fire not covered", desc: "Short-circuit fires are generally covered, but causes excluded by the policy — e.g. excess flammable material storage — can result in rejection." },
  { icon: MessageSquareWarning, title: "Inconsistent information", desc: "Telling the fire brigade one origin point and the surveyor another will be flagged as a red mark during verification." },
];

const TIMELINE = [
  { range: "Under Rp 50 million", duration: "7–14 working days", note: "after complete documentation is received" },
  { range: "Rp 50 million – Rp 500 million", duration: "14–30 working days", note: "depending on the Loss Adjuster's schedule" },
  { range: "Above Rp 500 million", duration: "30–60 working days or more", note: "as the negotiation process is longer" },
];

export default function ArticleHomeFireInsuranceClaimPage() {
  return (
    <ArticleLayout cluster="property"
      title="How to Claim Home Fire Insurance: Documents, Procedure & Fatal Mistakes to Avoid"
      description="The fire has happened. The house is damaged. The policy is active. But the claim is rejected — this happens more often than you'd think. Here's the complete guide to getting your claim approved."
      date="6 May 2026"
      category="Property"
      readTime="10 min read"
      breadcrumbs={[{ label: "How to Claim Home Fire Insurance", href: "/en/blog/how-to-claim-home-fire-insurance" }]}
      schema={schema}
    >
      <p>
        Nobody wants to experience a house fire. But it's precisely in those moments that
        we truly find out whether the insurance we've been paying premiums on actually works.
        Many homeowners in Batam end up disappointed not because their insurer acted in bad
        faith, but because the claims procedure wasn't followed correctly from the very
        first minute after the incident. This guide covers in detail what you must do —
        and what you must not do — to ensure your home fire insurance claim is processed
        and paid without unnecessary obstacles.
      </p>

      <h2>First, Understand: What Does Home Fire Insurance Actually Cover?</h2>
      <p>
        Before discussing the procedure, it's important to understand that not all
        fire-related damage is automatically covered by insurance. Standard property
        policies in Indonesia use the <strong>FLEXAS</strong> format as the base:
      </p>
      <div className="not-prose grid grid-cols-2 sm:grid-cols-5 gap-3 my-6">
        {FLEXAS.map(({ letter, label, icon: Icon }) => (
          <div key={letter} className="rounded-2xl p-4 text-center border" style={{ borderColor: "#0a162820", background: "#0a16280a" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2 text-white font-bold" style={{ background: "linear-gradient(135deg, #0a1628, #1a4fa0)" }}>
              {letter}
            </div>
            <Icon size={16} className="mx-auto mb-1" style={{ color: "#a07830" }} />
            <p className="text-xs font-semibold" style={{ color: "#0a1628" }}>{label}</p>
          </div>
        ))}
      </div>
      <p>
        Extensions such as flood, storm, riot, and earthquake are only covered if they
        are explicitly stated in your policy. Before submitting a claim, open your policy
        and check the coverage summary — make sure the cause of the fire or damage you
        experienced is actually included in what was agreed.
      </p>

      <h2>What You Must Do in the First 24 Hours</h2>
      <p>
        The hours immediately following a fire are the most critical for a successful claim.
        Panic is completely understandable, but certain actions taken (or not taken) during
        this phase can determine whether your claim succeeds or fails.
      </p>
      <div className="not-prose space-y-4 my-6">
        {FIRST_24H.map(({ icon: Icon, title, desc }, i) => (
          <div key={title} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #0a1628, #1a4fa0)" }}>
              <Icon size={20} className="text-white" />
            </div>
            <div>
              <p className="font-semibold text-sm mb-1 flex items-center gap-2" style={{ color: "#0a1628" }}>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "#c9a84c20", color: "#a07830" }}>{i + 1}</span>
                {title}
              </p>
              <p className="text-sm text-[#475569]">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Documents Required for the Claim Submission</h2>
      <p>
        The formal claims process cannot begin until all of these documents have been
        submitted to the insurer. Prepare them from the outset to avoid back-and-forth
        that slows down the payout:
      </p>

      <div className="overflow-x-auto my-6 rounded-2xl border border-[#e2e8f0]">
        <table className="w-full text-sm">
          <thead className="bg-[#0a1628] text-white">
            <tr>
              <th className="text-left p-4">Document</th>
              <th className="p-4 text-left">Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Insurance claim form", "Completed and signed by the policyholder; available from your agent or insurer"],
              ["Original or copy of the insurance policy", "Coverage summary page and relevant extension clauses"],
              ["Fire Department letter", "Contains date, location, estimated cause, and scale of the fire"],
              ["Police report (if required)", "For major losses or suspected arson"],
              ["Policyholder's ID card", "Identity of the policy owner submitting the claim"],
              ["Complete photos of the damage", "Visual documentation of building and home contents post-fire"],
              ["Inventory list of damaged/destroyed items", "With estimated value for each item; the more detailed the better"],
              ["Proof of property ownership", "Land certificate (SHM/SHGB) or tenancy agreement if not owner-occupied"],
              ["Purchase evidence for high-value items", "Receipts or invoices for electronics, furniture, or expensive household items"],
            ].map(([a, b], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="p-4 font-medium text-[#0a1628]">{a}</td>
                <td className="p-4 text-[#475569]">{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>What Happens After Documents Are Submitted</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {AFTER_SUBMISSION.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl p-5 bg-white border border-[#e2e8f0] shadow-sm">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: "#0a162810" }}>
              <Icon size={20} style={{ color: "#0a1628" }} />
            </div>
            <p className="font-bold text-sm mb-1.5" style={{ color: "#0a1628" }}>{title}</p>
            <p className="text-sm text-[#475569]">{desc}</p>
          </div>
        ))}
      </div>

      <h2>Fatal Mistakes That Frequently Lead to Rejected Claims</h2>
      <div className="not-prose space-y-3 my-6">
        {MISTAKES.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-start gap-4 p-4 rounded-xl border" style={{ borderColor: "#dc262620", background: "#fef2f2" }}>
            <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-red-100">
              <Icon size={17} className="text-red-600" />
            </div>
            <div>
              <p className="font-semibold text-sm" style={{ color: "#0a1628" }}>{title}</p>
              <p className="text-sm text-[#475569] mt-0.5">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>How Long Does a Home Fire Insurance Claim Take to Settle?</h2>
      <p>The duration varies considerably depending on the complexity of the damage and the completeness of the documents:</p>
      <div className="not-prose space-y-3 my-6">
        {TIMELINE.map((t) => (
          <div key={t.range} className="flex items-center gap-4 p-4 rounded-xl bg-[#faf8f3] border border-[#e2e8f0]">
            <Timer size={20} className="flex-shrink-0" style={{ color: "#c9a84c" }} />
            <div className="flex-1">
              <p className="text-sm font-semibold" style={{ color: "#0a1628" }}>{t.range}</p>
              <p className="text-xs text-[#475569]">{t.note}</p>
            </div>
            <span className="text-sm font-bold px-3 py-1.5 rounded-full text-white flex-shrink-0" style={{ background: "#0a1628" }}>{t.duration}</span>
          </div>
        ))}
      </div>
      <p>
        Complete documentation from the outset is the single most significant factor in
        speeding up the process. Every request for an additional document from the insurer
        can add 5–10 working days to the total processing time.
      </p>

      <div className="not-prose my-8 p-6 rounded-2xl border" style={{ borderColor: "#c9a84c30", background: "linear-gradient(135deg, #faf8f3, #ffffff)" }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}>
            <Headset size={20} style={{ color: "#0a1628" }} />
          </div>
          <h3 className="font-display font-bold text-[#0a1628] m-0">Need Help with a Claim or Property Insurance Consultation in Batam?</h3>
        </div>
        <p className="text-[#475569] mb-4">
          Rio assists with property insurance claims from start to finish — from document
          preparation and coordination with the Loss Adjuster to negotiating the claim
          value if there's a valuation discrepancy. Free consultation, no extra charges
          beyond your policy premium.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/en/property-insurance/home-insurance-batam"
            className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm"
          >
            View Home Insurance Products
          </Link>
          <Link
            href="/en/contact"
            className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm"
          >
            Free Consultation
          </Link>
        </div>
      </div>
    
      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Related Pages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Products &amp; Services</p>
            <ul className="space-y-2">
              <li><a href="/en/property-insurance/home-insurance-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Home Insurance Batam</a></li>
              <li><a href="/en/property-insurance/shophouse-insurance-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Shophouse Insurance Batam</a></li>
              <li><a href="/en/property-insurance/apartment-insurance-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Apartment Insurance Batam</a></li>
              <li><a href="/en/property-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Property Insurance Batam</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Related Articles</p>
            <ul className="space-y-2">
              <li><a href="/en/blog/commercial-property-insurance-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Commercial Property Insurance Batam</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}

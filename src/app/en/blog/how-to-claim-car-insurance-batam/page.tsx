// app/en/blog/how-to-claim-car-insurance-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import {
  Clock,
  FileWarning,
  ShieldOff,
  FileX,
  Camera,
  FileText,
  Phone,
  ClipboardList,
  Search,
  Wrench,
  Lightbulb,
  Scale,
  Calculator,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "How to Claim Car Insurance in Batam – Complete Guide to Avoid Rejection",
  description: "Car insurance claims in Batam often fail due to missing documents or wrong procedures. Learn the correct claim steps, required documents, and tips to get your claim approved quickly.",
  canonical: "https://asuransibatam.com/en/blog/how-to-claim-car-insurance-batam",
  languages: {
      id: "https://asuransibatam.com/blog/cara-klaim-asuransi-mobil-batam",
      en: "https://asuransibatam.com/en/blog/how-to-claim-car-insurance-batam",
    },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Claim Car Insurance in Batam Without Getting Rejected",
  datePublished: "2026-04-30",
  dateModified: "2026-04-30",
  author: { "@type": "Person", name: "Rio" },
  publisher: { "@type": "Organization", name: "Asuransi Batam" },
};

const REJECTION_REASONS = [
  { icon: Clock, title: "Late reporting", desc: "Almost every policy requires reporting within 3–5 working days of the incident. Missing this window is one of the most cited grounds for rejection." },
  { icon: FileX, title: "Incomplete documents", desc: "An expired driving licence at the time of the incident, expired vehicle registration (STNK), or a missing police report for serious damage." },
  { icon: ShieldOff, title: "Incident not covered by the policy", desc: "For example, claiming flood damage when your policy has no flood extension, or damage from an excluded form of negligence." },
  { icon: FileWarning, title: "Inaccurate information at enrolment", desc: "If the vehicle details or usage declared at purchase differ from reality, the insurer can void the claim." },
];

const CLAIM_STEPS = [
  { icon: Camera, title: "Document the Incident Immediately at the Scene", desc: "Don't panic and immediately move the vehicle. Take photos and videos from multiple angles — front, rear, sides, and close-ups of damaged areas. Note the other vehicle's plate and gather witness statements if possible." },
  { icon: FileText, title: "File a Police Report (When Required)", desc: "For minor damage a report is generally not required. It is mandatory for: collisions with another vehicle/property, serious accident damage, vehicle theft, or incidents with injuries/fatalities. Report to Polres Barelang or the nearest Polsek and request the STPL." },
  { icon: Phone, title: "Contact Your Insurance Agent or Company", desc: "Explain the sequence of events clearly and honestly. Any inconsistency between your initial account and the surveyor's findings can trigger rejection at verification." },
  { icon: ClipboardList, title: "Prepare Your Complete Claim Documents", desc: "Gather the documents required for your claim type — see the table below." },
  { icon: Search, title: "Surveyor Assessment by the Insurer", desc: "The insurer sends a surveyor to assess the damage in person, typically within 1–2 working days. Do not repair or move the vehicle before the survey is complete." },
  { icon: Wrench, title: "Claim Approval and Workshop Repairs", desc: "Approval usually comes within 3–7 working days. Your vehicle is directed to an authorised panel workshop — you only pay the own-risk (excess), typically Rp 300,000–500,000 per incident." },
];

const DOC_TABLE: [string, string][] = [
  ["Minor damage (scratches, dents)", "Claim form, photos of damage, driving licence, vehicle registration, insurance policy"],
  ["Serious damage / collision", "All of the above + police report (STPL)"],
  ["Third-party liability (TPL) claim", "All of the above + third party's ID and vehicle details"],
  ["Vehicle theft", "Police report, original vehicle registration, vehicle keys, insurance policy, ID card"],
  ["Flood / natural disaster claim", "Claim form, photos of vehicle condition, evidence of flood location"],
];

const TIPS = [
  "Save your insurer's emergency number in your phone from day one — don't wait until you're in a panic to search for it.",
  "Keep your driving licence and vehicle registration current — claims can be rejected if either has expired at the time of the incident.",
  "Use a panel workshop, not just any garage — repairs outside the insurer's authorised panel usually cannot be claimed without prior written approval.",
  "Don't delay reporting — report promptly even if the situation hasn't fully settled. Deadlines are strictly enforced.",
  "Use your insurance agent during the claim — an experienced agent can coordinate documents and speed up the whole process.",
];

export default function ArticleCarInsuranceClaimBatamPage() {
  return (
    <ArticleLayout cluster="vehicle"
      title="How to Claim Car Insurance in Batam: Step-by-Step to Avoid Rejection"
      description="A rejected claim doesn't mean your insurance is bad — it often comes down to a missed procedure. Here's the complete guide."
      date="30 April 2026"
      category="Vehicle"
      readTime="8 min read"
      breadcrumbs={[{ label: "How to Claim Car Insurance Batam", href: "/en/blog/how-to-claim-car-insurance-batam" }]}
      schema={schema}
    >
      <p>
        Many vehicle owners in Batam only realise the importance of understanding the claims
        procedure after something actually happens — an accident, a flood, or a stolen car.
        The problem is that even small mistakes during the claims process can result in
        rejection, even when your policy is active and your premiums are fully paid up.
        This article covers everything you need to know about filing a car insurance claim
        correctly so it goes through smoothly and without unnecessary delays.
      </p>

      <h2>Why Car Insurance Claims Get Rejected</h2>
      <p>Before diving into the procedure, it helps to understand the most common reasons insurers reject claims:</p>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {REJECTION_REASONS.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl p-5 border" style={{ borderColor: "#dc262620", background: "#fef2f2" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-red-100">
              <Icon size={18} className="text-red-600" />
            </div>
            <p className="font-bold text-sm mb-1.5" style={{ color: "#0a1628" }}>{title}</p>
            <p className="text-sm text-[#475569]">{desc}</p>
          </div>
        ))}
      </div>

      <h2>The Correct Steps for Filing a Car Insurance Claim</h2>
      <p>Follow this sequence carefully to ensure your claim moves smoothly from the moment of the incident through to your vehicle being repaired.</p>

      <div className="not-prose space-y-4 my-6">
        {CLAIM_STEPS.map(({ icon: Icon, title, desc }, i) => (
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

      <h3>Documents Required by Claim Type</h3>
      <div className="overflow-x-auto my-6 rounded-2xl border border-[#e2e8f0]">
        <table className="w-full text-sm">
          <thead className="bg-[#0a1628] text-white">
            <tr>
              <th className="text-left p-4">Claim Type</th>
              <th className="p-4 text-left">Documents Required</th>
            </tr>
          </thead>
          <tbody>
            {DOC_TABLE.map(([a, b], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="p-4 font-medium text-[#0a1628]">{a}</td>
                <td className="p-4 text-[#475569]">{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Tips to Speed Up and Simplify Your Claim</h2>
      <div className="not-prose space-y-3 my-6">
        {TIPS.map((tip, i) => (
          <div key={i} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "#faf8f3" }}>
            <Lightbulb size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#c9a84c" }} />
            <span className="text-sm text-[#374151]">{tip}</span>
          </div>
        ))}
      </div>

      <h2>What If Your Claim Is Rejected?</h2>
      <div className="not-prose my-6 p-5 rounded-2xl border flex items-start gap-4" style={{ borderColor: "#0a162820", background: "#0a16280a" }}>
        <Scale size={22} className="flex-shrink-0 mt-0.5" style={{ color: "#0a1628" }} />
        <p className="text-sm text-[#374151] m-0">
          If your claim is rejected, you are entitled to receive a written rejection letter stating the
          reasons. From there, you can file an internal appeal with additional supporting evidence. If no
          resolution is reached, insurance disputes in Indonesia can be referred to{" "}
          <strong style={{ color: "#0a1628" }}>LAPS SJK</strong> (the Financial Services Sector Alternative
          Dispute Resolution Body), supervised by OJK — at no cost to the policyholder.
        </p>
      </div>

      <div className="not-prose my-8 p-6 rounded-2xl border" style={{ borderColor: "#c9a84c30", background: "linear-gradient(135deg, #faf8f3, #ffffff)" }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}>
            <Calculator size={20} style={{ color: "#0a1628" }} />
          </div>
          <h3 className="font-display font-bold text-[#0a1628] m-0">Need Help with a Claim or Car Insurance Consultation in Batam?</h3>
        </div>
        <p className="text-[#475569] mb-4">
          Rio is ready to assist you through the entire claims process — from document
          preparation and survey coordination to communicating with the insurer on your
          behalf. Free consultation, no extra charges.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/en/vehicle-insurance/car-insurance-batam"
            className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm"
          >
            View Car Insurance Products
          </Link>
          <Link
            href="/en/car-premium-calculator"
            className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm"
          >
            Calculate Premium Estimate
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
              <li><a href="/en/vehicle-insurance/car-insurance-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Car Insurance Batam</a></li>
              <li><a href="/en/vehicle-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Vehicle Insurance Batam</a></li>
              <li><a href="/en/car-premium-calculator" className="text-sm text-blue-700 hover:underline font-medium">→ Car Insurance Premium Calculator</a></li>
              <li><a href="/en/vehicle-insurance/dump-truck-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Dump Truck Insurance Batam</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Related Articles</p>
            <ul className="space-y-2">
              <li><a href="/en/blog/all-risk-vs-tlo-car-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ All Risk vs TLO Car Insurance</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}

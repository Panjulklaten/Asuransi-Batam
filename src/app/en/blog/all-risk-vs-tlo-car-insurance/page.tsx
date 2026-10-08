// src/app/en/blog/all-risk-vs-tlo-car-insurance/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import {
  ShieldCheck,
  ShieldOff,
  CircleCheck,
  CircleX,
  Wallet,
  Car,
  Calculator,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "All Risk vs TLO Car Insurance – Which One Is Right for You?",
  description: "A clear explanation of the difference between Comprehensive (All Risk) and Total Loss Only (TLO) car insurance in Batam — what each covers, their pros and cons, and how to choose the right one for your vehicle.",
  canonical: "https://asuransibatam.com/en/blog/all-risk-vs-tlo-car-insurance",
  languages: {
      id: "https://asuransibatam.com/blog/perbedaan-all-risk-dan-tlo",
      en: "https://asuransibatam.com/en/blog/all-risk-vs-tlo-car-insurance",
    },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "All Risk vs TLO Car Insurance: Which One Is Right for You?",
  datePublished: "2025-03-05",
  dateModified: "2025-03-05",
  author: { "@type": "Person", name: "Rio" },
  publisher: { "@type": "Organization", name: "Batam Insurance" },
  inLanguage: "en",
};

const COMPARISON_ROWS: [string, string, string][] = [
  ["Minor damage", "Covered", "Not covered"],
  ["Total loss", "Covered", "Covered"],
  ["Theft", "Covered", "Covered"],
  ["Premium rate", "Higher (1.5–3.5%)", "Lower (0.2–0.7%)"],
  ["Best suited for", "New or high-value cars", "Older or lower-value cars"],
];

const RECOMMENDATIONS = [
  { range: "Above Rp 300 million", verdict: "All Risk is strongly recommended", color: "#0a1628" },
  { range: "Rp 150–300 million", verdict: "All Risk is recommended; TLO if budget is a constraint", color: "#1a4fa0" },
  { range: "Below Rp 150 million", verdict: "TLO is generally sufficient", color: "#4a7fb5" },
  { range: "Under financing (KKB)", verdict: "All Risk is mandatory for the duration of the loan", color: "#c9a84c" },
];

export default function ArticleAllRiskTLOENPage() {
  return (
    <ArticleLayout cluster="vehicle"
      title="All Risk vs TLO Car Insurance: Which One Is Right for You?"
      description="A practical guide to choosing between Comprehensive and Total Loss Only cover — based on your vehicle's value, age, and how you use it."
      date="5 March 2025"
      category="Vehicle"
      readTime="6 min read"
      breadcrumbs={[{ label: "All Risk vs TLO Car Insurance", href: "/en/blog/all-risk-vs-tlo-car-insurance" }]}
      schema={schema}
    >
      <p>
        When purchasing car insurance in Indonesia, the question that comes up most often is:{" "}
        <em>"Should I go with All Risk or TLO?"</em> Both have their place — and choosing the
        wrong one can mean either paying for cover you don't need or being underprotected when
        it matters most. This article walks you through both options clearly so you can make
        the right call for your situation.
      </p>

      {/* Two-column type cards */}
      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
        <div className="rounded-2xl border-2 p-6" style={{ borderColor: "#0a162820", background: "#0a16280a" }}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "linear-gradient(135deg, #0a1628, #1a4fa0)" }}>
            <ShieldCheck size={24} className="text-white" />
          </div>
          <h3 className="font-display font-bold text-lg mb-2" style={{ color: "#0a1628" }}>All Risk (Comprehensive)</h3>
          <p className="text-sm text-[#475569] mb-4">
            Covers <strong className="text-[#0a1628]">all physical damage</strong> to your vehicle —
            minor, moderate, or severe — unless explicitly excluded in the policy wording.
          </p>
          <ul className="space-y-2">
            {["Minor damage (scratches, dents, cracked windscreen)", "Moderate damage from collisions", "Total loss from a serious accident", "Theft (vehicle stolen)", "Vehicle fire"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#374151]">
                <CircleCheck size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#1a4fa0" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border-2 p-6" style={{ borderColor: "#c9a84c30", background: "#faf8f3" }}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}>
            <ShieldOff size={24} style={{ color: "#0a1628" }} />
          </div>
          <h3 className="font-display font-bold text-lg mb-2" style={{ color: "#0a1628" }}>TLO (Total Loss Only)</h3>
          <p className="text-sm text-[#475569] mb-4">
            Covers your vehicle only if it is{" "}
            <strong className="text-[#0a1628]">written off (damage exceeding 75% of value) or stolen</strong>.
          </p>
          <ul className="space-y-2 mb-3">
            {["Theft (vehicle stolen)", "Damage where repair cost exceeds 75% of market value"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#374151]">
                <CircleCheck size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#a07830" }} />
                {item}
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            {["Scratches and minor dents", "Glass damage", "Accident damage below 75% of value"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#94a3b8]">
                <CircleX size={16} className="flex-shrink-0 mt-0.5 text-[#cbd5e1]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2>Side-by-Side Comparison: All Risk vs TLO</h2>
      <div className="overflow-x-auto my-6 rounded-2xl border border-[#e2e8f0]">
        <table className="w-full text-sm">
          <thead className="bg-[#0a1628] text-white">
            <tr>
              <th className="text-left p-4">Aspect</th>
              <th className="p-4 text-center">All Risk</th>
              <th className="p-4 text-center">TLO</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map(([a, b, c], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="p-4 font-medium text-[#0a1628]">{a}</td>
                <td className="p-4 text-center text-[#475569]">{b}</td>
                <td className="p-4 text-center text-[#475569]">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>When Should You Choose Which?</h2>
      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
        <div className="rounded-2xl p-5 bg-white border border-[#e2e8f0] shadow-sm">
          <p className="font-bold text-sm mb-3 flex items-center gap-2" style={{ color: "#0a1628" }}>
            <Car size={16} /> Choose All Risk if…
          </p>
          <ul className="space-y-2 text-sm text-[#374151]">
            <li>Your vehicle is new or valued above Rp 200 million</li>
            <li>It's under a financing agreement (KKB) — most banks require All Risk throughout the loan</li>
            <li>You drive frequently in busy urban areas with realistic daily accident/parking risk</li>
            <li>You want complete peace of mind regardless of damage type</li>
          </ul>
        </div>
        <div className="rounded-2xl p-5 bg-white border border-[#e2e8f0] shadow-sm">
          <p className="font-bold text-sm mb-3 flex items-center gap-2" style={{ color: "#0a1628" }}>
            <Wallet size={16} /> Choose TLO if…
          </p>
          <ul className="space-y-2 text-sm text-[#374151]">
            <li>Your vehicle is more than 7–10 years old</li>
            <li>Its current market value is relatively low (below Rp 150 million)</li>
            <li>You have a limited budget and want minimal premiums</li>
            <li>The vehicle is used occasionally or for specific purposes only</li>
          </ul>
        </div>
      </div>

      <h2>Recommendation by Vehicle Value</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {RECOMMENDATIONS.map((r) => (
          <div key={r.range} className="rounded-2xl p-5 border" style={{ borderColor: r.color + "30", background: r.color + "08" }}>
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: r.color }}>
              {r.range}
            </span>
            <p className="text-sm text-[#374151] mt-3">{r.verdict}</p>
          </div>
        ))}
      </div>

      <div className="not-prose my-8 p-6 rounded-2xl border" style={{ borderColor: "#c9a84c30", background: "linear-gradient(135deg, #faf8f3, #ffffff)" }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}>
            <Calculator size={20} style={{ color: "#0a1628" }} />
          </div>
          <h3 className="font-display font-bold text-[#0a1628] m-0">Calculate Your Car Insurance Premium Now</h3>
        </div>
        <p className="text-[#475569] mb-4">
          Use our premium calculator to get an instant estimate for both All Risk and TLO cover,
          based on the latest OJK official rate tables for Batam.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/en/car-premium-calculator"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm hover:bg-[#132040] transition-colors"
          >
            Car Insurance Calculator <ArrowRight size={16} />
          </Link>
          <Link
            href="/en/vehicle-insurance/car-insurance-batam"
            className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm hover:bg-[#0a1628]/5 transition-colors"
          >
            Full Car Insurance Details
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
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Related Articles</p>
            <ul className="space-y-2">
              <li><a href="/en/blog/how-to-claim-car-insurance-batam" className="text-sm text-blue-700 hover:underline font-medium">→ How to Claim Car Insurance in Batam</a></li>
              <li><a href="/en/blog/construction-project-insurance-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Dump Truck Insurance Batam</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}

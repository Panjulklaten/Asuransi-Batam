// app/en/blog/heavy-equipment-insurance-construction-projects/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import {
  HardHat,
  Truck,
  Mountain,
  MoveHorizontal,
  Landmark,
  TrendingDown,
  TrendingUp,
  FileCheck2,
  Camera,
  Gauge,
  FileSpreadsheet,
  Building2,
  MapPin,
  Ban,
  PhoneCall,
  Wrench,
  FileSearch2,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Heavy Equipment Insurance for Construction Projects – Complete Guide for Contractors",
  description: "Contractors who don't insure their heavy equipment carry unnecessary risk. Understand EAR vs CAR, which equipment must be insured, how to calculate the right sum insured, and tips for a successful claim.",
  canonical: "https://asuransibatam.com/en/blog/heavy-equipment-insurance-construction-projects",
  languages: {
      id: "https://asuransibatam.com/blog/asuransi-alat-berat-proyek-konstruksi",
      en: "https://asuransibatam.com/en/blog/heavy-equipment-insurance-construction-projects",
    },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Heavy Equipment Insurance for Construction Projects: A Complete Guide for Contractors",
  datePublished: "2026-05-06",
  dateModified: "2026-05-06",
  author: { "@type": "Person", name: "Rio" },
  publisher: { "@type": "Organization", name: "Asuransi Batam" },
};

const EQUIPMENT = [
  { icon: Mountain, title: "Excavators (all classes)", desc: "From 5-tonne mini excavators to 30–50 tonne class machines. The larger and more expensive the unit, the more urgent the need. Highest claim frequency of any equipment type due to intensity of use." },
  { icon: Truck, title: "Bulldozers", desc: "Prone to undercarriage damage and accidents on slopes or soft ground. Expensive to repair because track components require specialist spare parts." },
  { icon: MoveHorizontal, title: "Wheel Loaders and Motor Graders", desc: "Often operate in heavy-traffic areas, making collisions relatively common. Consider adding Third Party Liability (TPL) coverage." },
  { icon: Gauge, title: "Vibro Rollers and Compactors", desc: "Simpler machines, but frequently suffer damage from unstable ground or slipping on wet surfaces." },
  { icon: Landmark, title: "Equipment under a financing arrangement", desc: "An absolute priority. If a financed unit is totally destroyed and uninsured, you still owe the remaining instalments — with no income-generating unit to show for it." },
];

const SUM_INSURED_MISTAKES = [
  { icon: TrendingDown, title: "Underinsurance (too low)", desc: "A unit worth Rp 1.5 billion insured for only Rp 800 million to save on premiums. A partial claim payout is reduced proportionally in line with the underinsurance ratio — you only receive a fraction of your actual loss.", color: "#dc2626" },
  { icon: TrendingUp, title: "Overinsurance (too high)", desc: "You pay higher premiums for no additional benefit. Claim payouts cannot exceed the proven actual loss.", color: "#a07830" },
];

const SUM_INSURED_STEPS = [
  { title: "New units or under 2 years old", desc: "Use the purchase price (invoice price) as the basis, ensuring the payout is sufficient to replace the unit with an equivalent one in the event of a total loss." },
  { title: "Units aged 2–5 years", desc: "Use current fair market value. Reference prices from used equipment dealers or an independent appraisal (KJPP). Update this value annually at renewal." },
  { title: "Units over 5 years old", desc: "Consider whether the unit's value still justifies a full EAR premium. For older, low-value units it may be more efficient to set aside a repair reserve instead." },
];

const DOCUMENTS = [
  { icon: FileCheck2, text: "Purchase invoice or BPKB (proof of ownership)" },
  { icon: Camera, text: "Photos of the unit from 4 angles (front, rear, left, right)" },
  { icon: Gauge, text: "Photo of the hour meter / machine operating hours" },
  { icon: FileSpreadsheet, text: "Technical specification document (manual or spec sheet)" },
  { icon: Building2, text: "Company profile or owner's ID (if an individual)" },
  { icon: MapPin, text: "Information on the unit's primary operating location" },
];

const BREAKDOWN_STEPS = [
  { icon: Ban, title: "Stop operating the unit immediately", desc: "Forcing a damaged unit to keep working can worsen the damage and complicate the claim assessment." },
  { icon: Camera, title: "Complete visual documentation", desc: "Photos and video of the unit, the incident location, and surrounding site conditions. Record the other party's details if involved." },
  { icon: PhoneCall, title: "Contact your insurance agent within 1×24 hours", desc: "Most policies allow up to 3×24 hours, but reporting faster accelerates the survey schedule and the whole claims process." },
  { icon: Ban, title: "Do not carry out any repairs before the survey", desc: "The rule most often broken due to pressure to resume production. If the unit must be moved, get written permission first and document its condition." },
  { icon: Wrench, title: "Obtain a repair cost estimate from a workshop", desc: "The surveyor will request this as a reference. Ideally get quotes from at least two workshops for comparison." },
];

const FAQS = [
  { q: "Can heavy equipment be claimed if it's damaged by flooding on a project site?", a: "Yes, as long as the policy covers natural disaster risks including flood — generally standard in EAR policies. Confirm the site is within the declared territory and the damage was sudden, not from leaving equipment in a known flood-prone area without precautions." },
  { q: "What if heavy equipment is stolen from a project site?", a: "Theft is generally covered under EAR, but a police report must be filed promptly. There is typically a waiting period (60–90 days) before payout, allowing time for law enforcement to search." },
  { q: "Does the equipment operator need a valid SIO for claims to be processed?", a: "Yes, in most policies. An SIO (Operator Licence) proves the operator is competent and licensed. Without a valid SIO at the time of incident, the insurer can reject the claim on safety-negligence grounds." },
];

export default function ArticleHeavyEquipmentInsuranceConstructionPage() {
  return (
    <ArticleLayout cluster="machinery"
      title="Heavy Equipment Insurance for Construction Projects: A Complete Guide for Contractors"
      description="Understanding the difference between EAR and CAR, setting the right sum insured, and knowing exactly what to do at claim time — these three things determine whether your heavy equipment insurance truly protects you or is just a formality."
      date="6 May 2026"
      category="Machinery"
      readTime="11 min read"
      breadcrumbs={[{ label: "Heavy Equipment Insurance Construction Projects", href: "/en/blog/heavy-equipment-insurance-construction-projects" }]}
      schema={schema}
    >
      <p>
        In the construction world, heavy equipment is more than just machinery — it is the
        backbone of project productivity. Without an excavator, earthworks stall. Without
        a bulldozer, land clearing cannot begin. Without a wheel loader, the material
        cycle stops. One unit breaking down mid-project is not just a repair cost problem —
        it means delay penalties, contractor reputation damage, and a loss of trust with
        the project owner.
      </p>
      <p>
        Yet many contractors still insure their heavy equipment in a haphazard way: taking
        out the cheapest policy without understanding what is actually covered, or not
        insuring at all on the assumption that "nothing serious has happened so far."
        This article is designed to turn that approach into something more strategic.
      </p>

      <h2>Understanding Heavy Equipment Insurance: EAR vs CAR — What's the Difference?</h2>
      <p>
        This is the most common source of confusion among newer contractors. These two
        terms are often used interchangeably, but they protect fundamentally different things.
      </p>

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
        <div className="rounded-2xl border-2 p-6" style={{ borderColor: "#0a162820", background: "#0a16280a" }}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "linear-gradient(135deg, #0a1628, #1a4fa0)" }}>
            <HardHat size={22} className="text-white" />
          </div>
          <h3 className="font-display font-bold text-lg mb-2" style={{ color: "#0a1628" }}>CAR — Contractor's All Risk</h3>
          <p className="text-sm text-[#475569]">
            Protects <em>the construction project as a whole</em> — building materials,
            completed permanent works, and heavy equipment used within it. Tied to a single
            specific project; when the project ends, the policy ends. Typically required by
            project owners in tender documents or contracts.
          </p>
        </div>
        <div className="rounded-2xl border-2 p-6" style={{ borderColor: "#c9a84c30", background: "#faf8f3" }}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}>
            <Truck size={22} style={{ color: "#0a1628" }} />
          </div>
          <h3 className="font-display font-bold text-lg mb-2" style={{ color: "#0a1628" }}>EAR — Equipment All Risk</h3>
          <p className="text-sm text-[#475569]">
            Protects <em>the equipment unit itself</em>, not the project. Coverage follows
            the unit wherever it operates — one project, multiple sites, or standby at a
            yard. The more appropriate choice for contractors deploying their own fleet
            across multiple projects.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto my-6 rounded-2xl border border-[#e2e8f0]">
        <table className="w-full text-sm">
          <thead className="bg-[#0a1628] text-white">
            <tr>
              <th className="text-left p-4">Aspect</th>
              <th className="p-4 text-left">CAR</th>
              <th className="p-4 text-left">EAR</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["What is protected", "The project (including equipment within it)", "Specific equipment unit"],
              ["Policy duration", "Matches the project period", "Annual (renewable)"],
              ["Portability", "Tied to one project", "Follows the unit to all locations"],
              ["Who typically buys it", "Contractor (at owner's request)", "Equipment owner"],
              ["Best suited for", "Single large project", "Multi-project fleet"],
              ["Equipment coverage during transit", "Limited / not always included", "Included in policy"],
            ].map(([a, b, c], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="p-4 font-medium text-[#0a1628]">{a}</td>
                <td className="p-4 text-[#475569]">{b}</td>
                <td className="p-4 text-[#475569]">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        In practice, many contractors use <strong>both simultaneously</strong>: CAR to
        meet contractual requirements, and EAR as permanent protection for their fleet
        beyond the scope of any individual project. Coordinating the two policies carefully
        is essential to avoid coverage gaps or unnecessary overlap.
      </p>

      <h2>Which Equipment Should Be Insured?</h2>
      <p>
        The short answer: any unit with a significant value whose breakdown would materially
        disrupt project operations. Here is a practical guide by equipment category:
      </p>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {EQUIPMENT.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl p-5 bg-white border border-[#e2e8f0] shadow-sm">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: "#0a162810" }}>
              <Icon size={20} style={{ color: "#0a1628" }} />
            </div>
            <p className="font-bold text-sm mb-1.5" style={{ color: "#0a1628" }}>{title}</p>
            <p className="text-sm text-[#475569]">{desc}</p>
          </div>
        ))}
      </div>

      <h2>How to Determine the Right Sum Insured</h2>
      <p>Setting the correct sum insured is the single most critical step in the policy process. The two most common mistakes are:</p>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {SUM_INSURED_MISTAKES.map(({ icon: Icon, title, desc, color }) => (
          <div key={title} className="rounded-2xl p-5 border" style={{ borderColor: color + "30", background: color + "0a" }}>
            <div className="flex items-center gap-2 mb-2">
              <Icon size={18} style={{ color }} />
              <p className="font-bold text-sm" style={{ color: "#0a1628" }}>{title}</p>
            </div>
            <p className="text-sm text-[#475569]">{desc}</p>
          </div>
        ))}
      </div>

      <p>Recommended approach for determining the sum insured:</p>
      <div className="not-prose space-y-3 my-6">
        {SUM_INSURED_STEPS.map((step, i) => (
          <div key={step.title} className="flex items-start gap-4 p-4 rounded-xl bg-[#faf8f3] border border-[#e2e8f0]">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0" style={{ background: "#0a1628" }}>
              {i + 1}
            </div>
            <div>
              <p className="font-semibold text-sm" style={{ color: "#0a1628" }}>{step.title}</p>
              <p className="text-sm text-[#475569] mt-0.5">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Documents Needed When Taking Out a Policy</h2>
      <p>Preparing these upfront will speed up underwriting and avoid requests for additional documents that delay policy issuance:</p>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        {DOCUMENTS.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#e2e8f0]">
            <Icon size={18} className="flex-shrink-0" style={{ color: "#1a4fa0" }} />
            <span className="text-sm text-[#374151]">{text}</span>
          </div>
        ))}
      </div>

      <h2>What to Do When Equipment Breaks Down on Site</h2>
      <p>Many claims end up rejected not because the damage isn't covered, but because the reporting procedure wasn't followed correctly. Here is the right sequence:</p>
      <div className="not-prose space-y-4 my-6">
        {BREAKDOWN_STEPS.map(({ icon: Icon, title, desc }, i) => (
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

      <h2>Frequently Asked Questions from Contractors</h2>
      <div className="not-prose space-y-3 my-6">
        {FAQS.map((faq) => (
          <div key={faq.q} className="rounded-2xl border border-[#e2e8f0] p-5 bg-white">
            <div className="flex items-start gap-2.5 mb-2">
              <HelpCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#c9a84c" }} />
              <p className="font-bold text-sm" style={{ color: "#0a1628" }}>{faq.q}</p>
            </div>
            <p className="text-sm text-[#475569] pl-[26px]">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="not-prose my-8 p-6 rounded-2xl border" style={{ borderColor: "#c9a84c30", background: "linear-gradient(135deg, #faf8f3, #ffffff)" }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}>
            <FileSearch2 size={20} style={{ color: "#0a1628" }} />
          </div>
          <h3 className="font-display font-bold text-[#0a1628] m-0">Ready to Protect Your Construction Equipment Fleet?</h3>
        </div>
        <p className="text-[#475569] mb-4">
          No need to navigate the CAR vs EAR decision alone or figure out the right sum
          insured by yourself. Rio will help analyse your fleet's protection needs, structure
          an efficient policy arrangement, and ensure there are no coverage gaps that
          could hurt you when it's time to make a claim.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/en/machinery-insurance/heavy-equipment-insurance"
            className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm"
          >
            View Heavy Equipment Insurance
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
              <li><a href="/en/machinery-insurance/heavy-equipment-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Heavy Equipment Insurance Batam</a></li>
              <li><a href="/en/engineering-insurance/contractor-all-risk" className="text-sm text-blue-700 hover:underline font-medium">→ Contractor All Risk Batam</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Related Articles</p>
            <ul className="space-y-2">
              <li><a href="/en/blog/excavator-and-bulldozer-insurance-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Excavator and Bulldozer Insurance</a></li>
              <li><a href="/en/blog/mining-heavy-equipment-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Mining Heavy Equipment Insurance</a></li>
              <li><a href="/en/blog/construction-project-insurance-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Construction Project Insurance Batam</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}

// app/en/blog/construction-project-insurance-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import {
  CloudRain,
  Mountain,
  Factory,
  Waves,
  Wrench,
  Banknote,
  ShieldCheck,
  UserCheck,
  Receipt,
  PhoneCall,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Construction Insurance in Batam: A Contractor's Guide to CAR, EAR & Tender Requirements",
  description: "What contractors and developers in Batam actually need to know about construction insurance — which policy fits which project, what tender documents typically require, and the local risks that get missed most often.",
  canonical: "https://asuransibatam.com/en/blog/construction-project-insurance-batam",
  languages: {
      id: "https://asuransibatam.com/blog/asuransi-proyek-konstruksi-batam",
      en: "https://asuransibatam.com/en/blog/construction-project-insurance-batam",
    },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Construction Insurance in Batam: A Contractor's Guide to CAR, EAR & Tender Requirements",
  description:
    "A practical guide for contractors and developers choosing construction insurance in Batam — policy types, tender requirements, and the risks specific to the local terrain and industrial setting.",
  datePublished: "2026-05-07",
  dateModified: "2026-08-08",
  author: { "@type": "Person", name: "Rio", telephone: "+6281373336728" },
  publisher: { "@type": "InsuranceAgency", name: "Batam Insurance – Rio", url: "https://asuransibatam.com" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://asuransibatam.com/en/blog/construction-project-insurance-batam",
  },
  inLanguage: "en-ID",
  about: { "@type": "Place", name: "Batam", addressRegion: "Riau Islands", addressCountry: "ID" },
};

const POLICY_TYPES = [
  { name: "Contractor's All Risk (CAR)", suitableFor: "Civil works — buildings, roads, bridges, ports, warehouses", note: "The baseline policy that shows up in nearly every Batam tender document." },
  { name: "Erection All Risk (EAR)", suitableFor: "Machinery installation, factories, power plants, processing facilities", note: "A must for mechanical-electrical scope. Frequently combined with CAR on mixed-use builds." },
  { name: "Contractor's Plant & Machinery (CPM)", suitableFor: "Owned equipment used on site — excavators, cranes, bulldozers", note: "A separate line from CAR, covering the contractor's own fleet for the project duration." },
  { name: "Third-Party Liability (TPL)", suitableFor: "Legal exposure for injury or property damage to outside parties", note: "Can sit as Section II inside a CAR/EAR policy, or be arranged as its own standalone cover." },
  { name: "Professional Indemnity (PI)", suitableFor: "Architects, structural engineers, design consultants", note: "Covers claims tied to design error or professional negligence." },
];

const TENDER_REQUIREMENTS = [
  { icon: Banknote, title: "Sum insured pegged to full contract value", desc: "At minimum. Some owners also expect debris removal costs folded into that declared sum." },
  { icon: ShieldCheck, title: "A floor on third-party liability limits", desc: "IDR 1–5 billion per occurrence is common for a mid-sized project, higher near industrial zones." },
  { icon: Receipt, title: "A pre-approved insurer panel", desc: "Some SOEs and large developers only accept insurers already on their list." },
  { icon: UserCheck, title: "Owner listed as additional insured", desc: "Not just the contractor's name — the project owner too, now standard on mid-to-large jobs." },
  { icon: Receipt, title: "Proof the premium was actually paid", desc: "Some owners want evidence of payment before contract signing, not just an issued policy document." },
];

const LOCAL_RISKS = [
  { icon: CloudRain, title: "Heavy Seasonal Rainfall", body: "Annual rainfall in Batam regularly tops 2,000 mm, and drainage infrastructure in newer development areas hasn't always kept pace. Confirm flood cover in writing before work starts, not after a downpour floods your site." },
  { icon: Mountain, title: "Uneven Terrain, Loose Ground", body: "A lot of Batam's land isn't flat, so cut-and-fill work is routine. Get ground conditions on record in the policy schedule, or an insurer can lean on the 'known ground condition' exclusion." },
  { icon: Factory, title: "Sites Bordering Live Industrial Estates", body: "New builds often sit inside or beside active parks like Batamindo, Kabil, or Muka Kuning. Damaging buried gas lines or cable runs during excavation is a real exposure — TPL cover deserves real attention." },
  { icon: Waves, title: "Coastal & Shipyard-Adjacent Sites", body: "Salt air speeds up corrosion, and weather bites harder than further inland. Some insurers want coastal proximity disclosed upfront — leaving it out hands them grounds to dispute a claim later." },
  { icon: Wrench, title: "Layered, Cross-Border Subcontractor Chains", body: "Larger projects pull in subcontractors from Singapore or Malaysia alongside local crews. Make sure the policy names every subcontractor explicitly, or carries a blanket clause covering unnamed ones." },
];

const CHECKLIST = [
  { title: "Set the sum insured against the full contract value", body: "Fold in materials, labour, plant, and ideally debris removal too. Underinsurance is the costliest mistake — the average clause proportionally cuts every payout, not just the big ones." },
  { title: "Actually read the exclusions", body: "Ask directly: is flooding in scope? Landslide? Vibration damage from next-door construction? 'All risks' in the name doesn't mean literally all risks." },
  { title: "Line up the policy period with your schedule, plus slack", body: "Construction projects run late more often than not. Buy cover that runs past your target completion date, or confirm extending it later is quick and affordable." },
  { title: "Don't drop the maintenance period", body: "The defects liability extension is easy to skip and expensive to regret. After handover, the contractor is still on the hook for defects in completed work." },
  { title: "Work with someone who's actually handled Batam projects before", body: "An agent with real Batam claims experience knows which areas flood, which adjusters respond quickly, and which insurers pay out without a fight." },
];

export default function BlogConstructionBatamENPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ArticleLayout
        title="Choosing Construction Insurance in Batam: A Practical Guide for Contractors and Developers"
        description="Batam doesn't behave like a typical Indonesian construction market. Free trade zone status, proximity to Singapore, and constant construction activity all shape a risk profile that's genuinely its own — a CAR policy that's perfectly adequate in Jakarta can be missing exactly what a Batam project actually needs."
        date="Updated 8 August 2026"
        category="Engineering Insurance · Batam Local"
        readTime="10 min read"
        breadcrumbs={[{ label: "Construction Insurance Batam", href: "/en/blog/construction-project-insurance-batam" }]}
        schema={schema}
      >
        <h2>Insurance Isn&apos;t Just There to Satisfy a Tender Checklist</h2>
        <p>
          A pattern that shows up over and over: a contractor buys a CAR policy purely because
          the tender document demands one, files the certificate away, and never looks at it
          again. A policy purchased in a hurry, without anyone reading the wording, tends to be
          full of gaps — gaps that only surface once a claim is already on the table.
        </p>
        <p>
          Project values around Batam run from a few hundred million rupiah into the trillions.
          One warehouse fire, one crane collapse, or one open excavation swamped by a flood can
          erase an entire project&apos;s margin — and if the policy doesn&apos;t perform as
          assumed, the contractor can end up covering that loss out of pocket.
        </p>

        <h2>Which Policy Covers Which Part of a Construction Project</h2>
        <p>No single product covers every angle of a construction project. Here&apos;s how the relevant policies map to what they&apos;re actually meant for:</p>
        <div className="not-prose overflow-x-auto rounded-2xl border border-[#e2e8f0] my-6">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "#0a1628" }}>
                <th className="text-left py-3 px-4 text-white font-semibold">Policy</th>
                <th className="text-left py-3 px-4 text-white font-semibold">Fits</th>
                <th className="text-left py-3 px-4 text-white font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {POLICY_TYPES.map((p, i) => (
                <tr key={p.name} className="border-t border-[#e2e8f0]" style={i % 2 === 1 ? { background: "#faf8f3" } : undefined}>
                  <td className="py-3 px-4 font-semibold" style={{ color: "#0a1628" }}>{p.name}</td>
                  <td className="py-3 px-4 text-[#475569]">{p.suitableFor}</td>
                  <td className="py-3 px-4 text-[#94a3b8] text-xs">{p.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>What Batam Tender Documents Typically Ask For</h2>
        <p>Insurance clauses in Batam tenders — public and private alike — have gotten noticeably more specific over the years. A few requirements that come up repeatedly:</p>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          {TENDER_REQUIREMENTS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3 p-4 rounded-xl border border-[#e2e8f0] bg-white">
              <Icon size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#1a4fa0" }} />
              <div>
                <p className="font-semibold text-sm mb-1" style={{ color: "#0a1628" }}>{title}</p>
                <p className="text-sm text-[#475569]">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2>Batam-Specific Risks Worth Flagging Before You Buy</h2>
        <p>This is the part that gets skipped most often when construction insurance is bought in Batam. Every risk below is real, tied specifically to the local setting, and needs to be declared explicitly or built into the policy wording:</p>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          {LOCAL_RISKS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl p-5 bg-white border border-[#e2e8f0] shadow-sm">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: "#0a162810" }}>
                <Icon size={20} style={{ color: "#0a1628" }} />
              </div>
              <p className="font-bold text-sm mb-1" style={{ color: "#0a1628" }}>{title}</p>
              <p className="text-sm text-[#475569]">{body}</p>
            </div>
          ))}
        </div>

        <h2>A Practical Checklist for Picking Construction Insurance in Batam</h2>
        <p>Choosing a CAR or EAR policy isn&apos;t just a premium comparison exercise. Here&apos;s what actually deserves your attention:</p>
        <div className="not-prose space-y-4 my-6">
          {CHECKLIST.map((item, i) => (
            <div key={item.title} className="flex items-start gap-4 p-5 rounded-2xl bg-[#faf8f3] border border-[#e2e8f0]">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: "#0a1628" }}>
                {i + 1}
              </div>
              <div>
                <p className="font-semibold text-sm mb-1" style={{ color: "#0a1628" }}>{item.title}</p>
                <p className="text-sm text-[#475569]">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <h2>Roughly What CAR Insurance Costs in Batam</h2>
        <p>CAR premiums are priced as a percentage of contract value. There&apos;s no single fixed rate, but as a general reference point:</p>
        <div className="not-prose overflow-x-auto rounded-2xl border border-[#e2e8f0] my-6">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "#0a1628" }}>
                <th className="text-left py-3 px-4 text-white font-semibold">Project Type</th>
                <th className="text-left py-3 px-4 text-white font-semibold">Typical Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#e2e8f0]">
                <td className="py-3 px-4 font-medium" style={{ color: "#0a1628" }}>Standard commercial building</td>
                <td className="py-3 px-4 text-[#1a4fa0] font-semibold">0.15%–0.35% of contract value / year</td>
              </tr>
              <tr className="border-t border-[#e2e8f0]" style={{ background: "#faf8f3" }}>
                <td className="py-3 px-4 font-medium" style={{ color: "#0a1628" }}>Infrastructure (roads, bridges)</td>
                <td className="py-3 px-4 text-[#1a4fa0] font-semibold">0.20%–0.45% of contract value</td>
              </tr>
              <tr className="border-t border-[#e2e8f0]">
                <td className="py-3 px-4 font-medium" style={{ color: "#0a1628" }}>Higher-risk sites (coastal, unstable ground)</td>
                <td className="py-3 px-4 text-[#475569]">Above these ranges</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          For a project valued at IDR 4 billion, that puts the CAR premium somewhere between
          IDR 6 million and IDR 14 million a year — a small number set against the scale of loss
          it&apos;s protecting against. What matters far more than the premium itself is whether
          the policy is actually built around the risks your specific project carries.
        </p>

        <h2>Bottom Line</h2>
        <p>
          Construction insurance in Batam isn&apos;t something to treat as a checkbox. The
          city&apos;s own mix of factors — uneven terrain, heavy rainfall, dense industrial
          neighbours, and layered subcontractor structures — adds up to a risk profile that
          calls for a policy actually configured around it, not a generic template.
        </p>
        <p>
          Before breaking ground, sit down with someone who genuinely understands how projects
          run in Batam, walk through the full scope of what needs covering, and buy a policy
          built to protect the project — not just to clear a document requirement.
        </p>

        <div className="not-prose my-8 p-6 rounded-2xl border" style={{ borderColor: "#c9a84c30", background: "linear-gradient(135deg, #faf8f3, #ffffff)" }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}>
              <PhoneCall size={20} style={{ color: "#0a1628" }} />
            </div>
            <h3 className="font-display font-bold text-[#0a1628] m-0">Talk Through Insurance for Your Batam Project</h3>
          </div>
          <p className="text-[#475569] mb-4">
            Starting or already running a construction project in Batam? Reach out to Rio for a
            free consultation and a coverage recommendation built around your specific project.
          </p>
          <a
            href="https://wa.me/6281373336728"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm"
          >
            Chat on WhatsApp
          </a>
          <p className="text-sm text-[#475569] mt-3">+62-813-7333-6728 · Rio, Batam Insurance Agent</p>
        </div>

        {/* Related Links */}
        <div className="not-prose mt-10 pt-8 border-t border-gray-200">
          <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Related Articles &amp; Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/en/engineering-insurance/contractor-all-risk" className="block p-4 rounded-xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all">
              <p className="font-semibold text-sm" style={{ color: "#0a1628" }}>Contractor All Risk (CAR)</p>
              <p className="text-sm text-[#475569]">Full coverage & benefits</p>
            </a>
            <a href="/en/engineering-insurance/erection-all-risk" className="block p-4 rounded-xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all">
              <p className="font-semibold text-sm" style={{ color: "#0a1628" }}>Erection All Risk (EAR)</p>
              <p className="text-sm text-[#475569]">Industrial installation protection</p>
            </a>
            <a href="/en/blog/difference-between-car-and-ear-insurance" className="block p-4 rounded-xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all">
              <p className="font-semibold text-sm" style={{ color: "#0a1628" }}>CAR vs EAR Insurance</p>
              <p className="text-sm text-[#475569]">What&apos;s the difference?</p>
            </a>
            <a href="/en/blog/how-to-claim-car-insurance-project" className="block p-4 rounded-xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all">
              <p className="font-semibold text-sm" style={{ color: "#0a1628" }}>How to Claim CAR Insurance</p>
              <p className="text-sm text-[#475569]">When your project is damaged</p>
            </a>
          </div>
        </div>
      </ArticleLayout>
    </>
  );
}

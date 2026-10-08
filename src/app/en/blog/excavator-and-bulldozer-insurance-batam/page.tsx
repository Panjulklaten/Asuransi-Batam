// app/en/blog/excavator-and-bulldozer-insurance-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import {
  Mountain,
  Wrench,
  Flame,
  Truck,
  Scale,
  Gauge,
  CircleCheck,
  CircleX,
  HelpCircle,
  PhoneCall,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Excavator and Bulldozer Insurance in Batam – Coverage, Protection & How to Claim",
  description: "Excavators and bulldozers are expensive assets highly vulnerable to damage in the field. Learn about the right type of protection, what is covered, and how to insure your heavy equipment in Batam.",
  canonical: "https://asuransibatam.com/en/blog/excavator-and-bulldozer-insurance-batam",
  languages: {
      id: "https://asuransibatam.com/blog/asuransi-excavator-dan-bulldozer",
      en: "https://asuransibatam.com/en/blog/excavator-and-bulldozer-insurance-batam",
    },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Excavator and Bulldozer Insurance in Batam: Coverage, Protection & How to Claim",
  datePublished: "2026-05-06",
  dateModified: "2026-05-06",
  author: { "@type": "Person", name: "Rio" },
  publisher: { "@type": "Organization", name: "Asuransi Batam" },
};

const RISKS = [
  { icon: Mountain, title: "Sliding and overturning on sloped terrain", desc: "Excavators near embankment edges or slopes risk losing stability, especially on wet ground or during a landslide. Repair costs can reach hundreds of millions of rupiah." },
  { icon: Wrench, title: "Boom and arm damage from impact", desc: "The hydraulic arm and boom are highly vulnerable when digging hard materials like bedrock or old concrete. Replacement requires imported parts with long lead times." },
  { icon: Gauge, title: "Bulldozer undercarriage damage", desc: "The track system wears quickly on rocky terrain. Replacing a full undercarriage set can cost upwards of Rp 100 million depending on unit size." },
  { icon: Flame, title: "Fire from hydraulic oil leaks", desc: "High-pressure hydraulic systems leaking onto hot components is one of the most underestimated causes of fire that operators fail to anticipate." },
  { icon: Truck, title: "Transit damage by flatbed trailer", desc: "Moving units between project sites carries risk — from units falling during loading to damage caused by poor road conditions during transport." },
];

const COVERAGE = [
  { item: "Operational accidents (overturning, collision, sinking into ground)", status: "covered" },
  { item: "Fire and explosion", status: "covered" },
  { item: "Natural disasters (flood, high winds, earthquake)", status: "covered" },
  { item: "Transit damage / transport between locations", status: "covered" },
  { item: "Third-party liability (persons/property)", status: "optional" },
  { item: "Sudden mechanical breakdown", status: "optional" },
  { item: "Normal wear and gradual deterioration", status: "excluded" },
  { item: "Damage from intentional overloading", status: "excluded" },
  { item: "Routine maintenance costs (scheduled servicing)", status: "excluded" },
];

const CLAIM_STEPS = [
  { title: "Stop operations and secure the area", desc: "As soon as damage occurs, stop using the unit. Do not attempt any repairs before the surveyor arrives — doing so can void the claim on the grounds of altering the evidence." },
  { title: "Document the damage thoroughly", desc: "Take photos and videos from multiple angles — external physical damage, surrounding site conditions, and the instrument panel if accessible. Record the exact time and location." },
  { title: "Report to your insurance agent within 3 × 24 hours", desc: "Nearly all EAR policies require reporting within this window. Missing the deadline is the most common — and most easily avoidable — reason for claim rejection." },
  { title: "Wait for the survey appointment", desc: "The insurance surveyor will visit the site to assess the damage. Do not move the unit to a workshop before the survey is complete unless you have written permission." },
  { title: "Follow the panel workshop recommendation", desc: "Once the claim is approved, repairs are directed to an authorised workshop or dealer. Repairs outside the panel without written approval generally cannot be claimed." },
];

const FAQS = [
  { q: "Can a rented excavator be insured by the hirer?", a: "Yes, but care is needed. A hirer can take out a policy in their own name to cover their liability during the rental period. However, it must be confirmed there is no double insurance — if the equipment owner already has an active policy covering the same period, complications can arise at claims time. Coordinate with the owner before taking out an additional policy." },
  { q: "What if the excavator is damaged due to operator error?", a: "EAR policies generally cover damage caused by operator negligence as long as it is not intentional (willful misconduct). Damage caused by an unqualified or uncertified operator can be grounds for rejection in some policies — make sure all operators hold a valid SIO (Operator Licence)." },
  { q: "Is the policy still valid when the equipment is on standby?", a: "Yes. As long as the policy is active and premiums are paid, coverage remains in place even when the unit is parked or on standby — including fire, theft, or natural disaster risks while not in use." },
];

const statusStyle: Record<string, { color: string; icon: typeof CircleCheck; label: string }> = {
  covered: { color: "#1a4fa0", icon: CircleCheck, label: "Covered" },
  optional: { color: "#a07830", icon: CircleCheck, label: "Optional extension" },
  excluded: { color: "#94a3b8", icon: CircleX, label: "Not covered" },
};

export default function ArticleExcavatorBulldozerInsurancePage() {
  return (
    <ArticleLayout cluster="machinery"
      title="Excavator and Bulldozer Insurance in Batam: Coverage, Protection & How to Claim"
      description="A single excavator unit can be worth billions of rupiah. Without the right insurance, one breakdown in the field could bring your entire project to a halt."
      date="6 May 2026"
      category="Machinery"
      readTime="9 min read"
      breadcrumbs={[{ label: "Excavator and Bulldozer Insurance", href: "/en/blog/excavator-and-bulldozer-insurance-batam" }]}
      schema={schema}
    >
      <p>
        On project sites across Batam — from industrial zone developments to port reclamation
        works — excavators and bulldozers operate under far from ideal conditions. Hard ground,
        waterlogged terrain, steep slopes, and relentless operational pressure make both machines
        among the most damage-prone assets on any site. A mid-range excavator unit alone
        is worth between Rp 800 million and Rp 2 billion. If it suffers serious damage without
        insurance protection, the contractor can face losses equivalent to the profit margin
        of several projects combined.
      </p>
      <p>
        This article specifically covers how insurance protection for excavators and bulldozers
        works, what is and isn't covered, and how to navigate the claims process in Batam.
      </p>

      <h2>Why Do Excavators and Bulldozers Need Their Own Insurance?</h2>
      <p>
        Some contractors still assume that project insurance (CAR/EAR) is sufficient to
        cover all assets on site. In practice, it's not that straightforward. A CAR
        (Contractor's All Risk) policy can include heavy equipment, but its coverage is
        limited to risks arising <em>within a specific project scope</em> and during the
        active contract period. Once the equipment moves to another project or the contract
        ends, the protection lapses immediately.
      </p>
      <p>
        By contrast, an <strong>Equipment All Risk (EAR)</strong> policy is designed to
        protect the unit itself — not the project. The policy follows the unit wherever
        it operates, for as long as the policy remains active. This makes EAR far more
        relevant for equipment owners whose units move between project sites throughout
        the year.
      </p>

      <h2>Real-World Risks for Excavators and Bulldozers in the Field</h2>
      <p>
        Before choosing a policy, it's important to understand the types of risks that
        most commonly affect both machines based on actual field conditions:
      </p>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {RISKS.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl p-5 bg-white border border-[#e2e8f0] shadow-sm">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: "#0a162810" }}>
              <Icon size={20} style={{ color: "#0a1628" }} />
            </div>
            <p className="font-bold text-sm mb-1.5" style={{ color: "#0a1628" }}>{title}</p>
            <p className="text-sm text-[#475569]">{desc}</p>
          </div>
        ))}
      </div>

      <h2>What Does an EAR Policy Cover for Excavators and Bulldozers?</h2>
      <div className="not-prose grid grid-cols-1 gap-2.5 my-6">
        {COVERAGE.map(({ item, status }) => {
          const s = statusStyle[status];
          const Icon = s.icon;
          return (
            <div key={item} className="flex items-center gap-3 p-4 rounded-xl border" style={{ borderColor: s.color + "25", background: s.color + "08" }}>
              <Icon size={18} className="flex-shrink-0" style={{ color: s.color }} />
              <span className="text-sm text-[#374151] flex-1">{item}</span>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full text-white flex-shrink-0" style={{ background: s.color }}>
                {s.label}
              </span>
            </div>
          );
        })}
      </div>

      <h2>How to Determine the Right Sum Insured</h2>
      <p>
        This is the question that comes up most often when equipment owners arrange
        insurance for the first time. There are two common approaches:
      </p>
      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
        <div className="rounded-2xl p-6 border-2" style={{ borderColor: "#0a162820", background: "#0a16280a" }}>
          <div className="flex items-center gap-2 mb-2">
            <Scale size={18} style={{ color: "#0a1628" }} />
            <p className="font-bold text-sm" style={{ color: "#0a1628" }}>Market Value</p>
          </div>
          <p className="text-sm text-[#475569]">
            The current resale value of the unit in the secondhand market, taking into account
            age and machine hours. More commonly used for units over three years old — payout
            reflects market value at the time of the incident.
          </p>
        </div>
        <div className="rounded-2xl p-6 border-2" style={{ borderColor: "#c9a84c30", background: "#faf8f3" }}>
          <div className="flex items-center gap-2 mb-2">
            <Scale size={18} style={{ color: "#a07830" }} />
            <p className="font-bold text-sm" style={{ color: "#0a1628" }}>Replacement Value</p>
          </div>
          <p className="text-sm text-[#475569]">
            The cost of a new unit with equivalent specifications at current market prices.
            Premiums are higher, but payout is more favourable since no depreciation is deducted.
            Best for new units or units under financing.
          </p>
        </div>
      </div>
      <p>
        Insurance companies typically require a physical survey of the unit before issuing
        a policy. The surveyor will inspect the physical condition, check the hour meter
        reading, and verify ownership documents. Make sure the unit is in well-maintained
        condition at the time of the survey.
      </p>

      <h2>Claims Process: What to Do When Damage Occurs</h2>
      <div className="not-prose space-y-4 my-6">
        {CLAIM_STEPS.map((step, i) => (
          <div key={step.title} className="flex items-start gap-4 p-5 rounded-2xl bg-[#faf8f3] border border-[#e2e8f0]">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: "#0a1628" }}>
              {i + 1}
            </div>
            <div>
              <p className="font-semibold text-sm mb-1" style={{ color: "#0a1628" }}>{step.title}</p>
              <p className="text-sm text-[#475569]">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Frequently Asked Questions About Excavator Insurance</h2>
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
            <PhoneCall size={20} style={{ color: "#0a1628" }} />
          </div>
          <h3 className="font-display font-bold text-[#0a1628] m-0">Free Heavy Equipment Insurance Consultation in Batam</h3>
        </div>
        <p className="text-[#475569] mb-4">
          Every piece of heavy equipment has a different risk profile depending on the
          type of work, operating terrain, and machine age. Rio is ready to help calculate
          the right protection needs and compare policy options that fit your project budget.
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
              <li><a href="/en/machinery-insurance/crane-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Crane Insurance Batam</a></li>
              <li><a href="/en/machinery-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Machinery Insurance Batam</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Related Articles</p>
            <ul className="space-y-2">
              <li><a href="/en/blog/heavy-equipment-insurance-construction-projects" className="text-sm text-blue-700 hover:underline font-medium">→ Heavy Equipment for Construction Projects</a></li>
              <li><a href="/en/blog/mining-heavy-equipment-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Mining Heavy Equipment Insurance</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}

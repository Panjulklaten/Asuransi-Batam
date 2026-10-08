// app/en/blog/mining-heavy-equipment-insurance/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import {
  ShieldCheck,
  Cog,
  Users,
  Ban,
  Weight,
  MapPinOff,
  Wrench,
  Package,
  Calendar,
  MapPin,
  Coins,
  History,
  Layers,
  FileCheck,
  MapPinned,
  Scale,
  PlaneTakeoff,
  Boxes,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Mining Heavy Equipment Insurance – Mandatory, What's Covered & How to Choose",
  description: "Operating a mine without heavy equipment insurance is an unacceptably large financial risk. Learn about mandatory coverage types, applicable K3 regulations, and how to choose the right policy for equipment in mining areas.",
  canonical: "https://asuransibatam.com/en/blog/mining-heavy-equipment-insurance",
  languages: {
      id: "https://asuransibatam.com/blog/asuransi-alat-berat-pertambangan",
      en: "https://asuransibatam.com/en/blog/mining-heavy-equipment-insurance",
    },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mining Heavy Equipment Insurance: Mandatory, What's Covered & How to Choose",
  datePublished: "2026-05-06",
  dateModified: "2026-05-06",
  author: { "@type": "Person", name: "Rio" },
  publisher: { "@type": "Organization", name: "Asuransi Batam" },
};

const POLICY_TYPES = [
  { icon: ShieldCheck, title: "Equipment All Risk (EAR) with Mining Clause", desc: "The primary policy protecting the equipment unit from physical damage caused by all risks not explicitly excluded. A mining clause is added to accommodate burial by landslide material, ground subsidence damage, and operations within a mining licence area (IUP)." },
  { icon: Cog, title: "Machinery Breakdown (MB)", desc: "Protection against sudden and unexpected mechanical failure not caused by an external event — a piston fracturing without warning, a bearing collapsing suddenly, or a transmission failing abruptly. Highly relevant given the high operating hours mining units accumulate." },
  { icon: Users, title: "Third Party Liability (TPL)", desc: "In mining areas dense with workers, light vehicles, and infrastructure, the risk of heavy equipment striking or damaging assets or people is significant. TPL covers compensation claims from third parties who suffer loss from your equipment's operations." },
];

const EXCLUSIONS = [
  { icon: Ban, title: "Normal wear and gradual deterioration", desc: "Components that wear slowly due to age and normal use are not the insurer's responsibility — filter replacements, seals, and other consumable components." },
  { icon: Weight, title: "Damage from intentional overloading", desc: "If a dump truck is loaded beyond the capacity stated in its technical specifications, resulting damage is generally not covered." },
  { icon: MapPinOff, title: "Operations outside the declared area", desc: "If the policy is issued for operations in Batam but the unit is used in Kalimantan without notification, a claim can be rejected due to the difference in operating location." },
  { icon: Wrench, title: "Damage during repair or modification", desc: "Units dismantled at a workshop for repairs are generally not covered during that process." },
];

const PREMIUM_FACTORS = [
  { icon: Package, text: "Unit type and brand — brands with easily available spare parts tend to attract lower premiums" },
  { icon: Calendar, text: "Unit age and operating hours (hour meter) — older units and higher hours mean higher premiums" },
  { icon: MapPin, text: "Location and type of operation — open pit mining is riskier than a standard quarry" },
  { icon: Coins, text: "Sum insured basis — market value or replacement value" },
  { icon: History, text: "Claims history — companies with a clean claims record get more competitive rates" },
  { icon: Layers, text: "Number of units on a single policy — fleet policies covering multiple units are typically more efficient" },
];

const TIPS = [
  { icon: FileCheck, title: "Ensure a mining or heavy equipment clause is included", desc: "Don't accept a standard policy that doesn't explicitly name the type of operation." },
  { icon: MapPinned, title: "Check the territorial coverage", desc: "Make sure the policy covers all areas where the unit operates, including transit routes if units are frequently moved between locations." },
  { icon: Scale, title: "Compare the indemnity basis", desc: "Agreed Value (a fixed agreed sum) is more favourable than Indemnity Value (market value at claim time) for expensive units with fluctuating values." },
  { icon: PlaneTakeoff, title: "Check the sublimit for evacuation costs", desc: "Evacuating an excavator from a remote mining area can be extremely expensive. Make sure these costs are covered or an adequate sublimit is in place." },
  { icon: Boxes, title: "Use a fleet policy if you have more than 3 units", desc: "Insuring all units under one fleet policy is usually more cost-effective and simpler to manage administratively, especially at claims time." },
];

export default function ArticleMiningHeavyEquipmentInsurancePage() {
  return (
    <ArticleLayout cluster="machinery"
      title="Mining Heavy Equipment Insurance: Mandatory, What's Covered & How to Choose"
      description="Mining sites are among the harshest working environments in the world. Heavy equipment operating there faces risks far greater than those on a typical construction project."
      date="6 May 2026"
      category="Machinery"
      readTime="10 min read"
      breadcrumbs={[{ label: "Mining Heavy Equipment Insurance", href: "/en/blog/mining-heavy-equipment-insurance" }]}
      schema={schema}
    >
      <p>
        Mining operations — whether nickel, bauxite, silica sand, or coal — rely on fleets
        of heavy equipment working under extreme conditions: silica dust, thick mud, sharp
        slopes, and 10–20 hour operational cycles every day. A single mining dump truck
        unit can be worth Rp 3–5 billion. A mining-class excavator can reach Rp 5–8 billion.
        When equipment like this suffers serious damage or total loss without insurance
        coverage, the loss is not just the unit's value — it's also the daily production
        stoppage, which can amount to tens of millions of rupiah per day.
      </p>
      <p>
        This isn't simply a matter of being financially prudent. In the Indonesian mining
        context, there is a regulatory dimension that makes heavy equipment insurance not
        just optional, but effectively mandatory.
      </p>

      <h2>Regulations That Require Asset Protection in Mining Areas</h2>
      <p>
        Under <strong>Ministry of Energy and Mineral Resources Decree No. 1827 K/30/MEM/2018</strong>
        on Good Mining Technical Practice Guidelines, mining companies are required to
        implement risk management that includes protection of operational assets. In practice,
        financial institutions that finance heavy equipment purchases for mines (leasing or
        instalment financing) almost invariably require an active insurance policy as a
        disbursement condition and throughout the repayment period.
      </p>
      <p>
        This means that if your equipment is still under a financing arrangement — which
        is the situation for the majority of mid-scale mining contractors — insurance has
        effectively already become a contractual obligation, not a choice.
      </p>

      <h2>Mining Risk vs General Construction: The Key Differences</h2>
      <p>
        Many equipment owners insure their mining units with the same standard policy
        they use for building construction projects. This is a potentially costly mistake.
        Insurance underwriters distinguish between these two contexts because the risk
        profiles are genuinely and significantly different:
      </p>

      <div className="overflow-x-auto my-6 rounded-2xl border border-[#e2e8f0]">
        <table className="w-full text-sm">
          <thead className="bg-[#0a1628] text-white">
            <tr>
              <th className="text-left p-4">Risk Factor</th>
              <th className="p-4 text-left">General Construction</th>
              <th className="p-4 text-left">Mining</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Daily operating hours", "8–10 hours", "10–20 hours (double shift)"],
              ["Terrain conditions", "Relatively controlled", "Extreme: slopes, mud, bedrock"],
              ["Abrasive dust exposure", "Moderate", "High (silica, abrasive minerals)"],
              ["Landslide / ground failure risk", "Low–moderate", "High (especially open pit)"],
              ["Distance from repair facilities", "Close (in town)", "Far (remote area)"],
              ["Unit value in operation", "Rp 500M – 2B", "Rp 2B – 8B+"],
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
        These risk profile differences are reflected in higher premiums and specific clauses
        that must be present in any policy for mining operations. If you use a standard
        policy without a mining clause, claims that arise on a mining site may be rejected
        on the grounds that the situation falls outside the agreed scope.
      </p>

      <h2>Relevant Policy Types for Mining Heavy Equipment</h2>
      <div className="not-prose space-y-4 my-6">
        {POLICY_TYPES.map(({ icon: Icon, title, desc }, i) => (
          <div key={title} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #0a1628, #1a4fa0)" }}>
              <Icon size={20} className="text-white" />
            </div>
            <div>
              <p className="font-semibold text-sm mb-1" style={{ color: "#0a1628" }}>{i + 1}. {title}</p>
              <p className="text-sm text-[#475569]">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>What Is Typically Not Covered — Read Before Buying</h2>
      <p>This is the most important section and the most frequently overlooked. Some common exclusions you need to understand before signing a policy:</p>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {EXCLUSIONS.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-start gap-3 p-4 rounded-xl border" style={{ borderColor: "#dc262620", background: "#fef2f2" }}>
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

      <h2>How Mining Equipment Insurance Premiums Are Calculated</h2>
      <p>
        There is no published standard tariff for heavy equipment insurance as there is
        for motor vehicle insurance (which is regulated by OJK). Premiums are calculated
        on a <em>case-by-case</em> basis by the underwriter based on a number of factors:
      </p>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        {PREMIUM_FACTORS.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#faf8f3] border border-[#e2e8f0]">
            <Icon size={17} className="flex-shrink-0 mt-0.5" style={{ color: "#1a4fa0" }} />
            <span className="text-sm text-[#374151]">{text}</span>
          </div>
        ))}
      </div>
      <div className="not-prose my-6 p-5 rounded-2xl border flex items-start gap-4" style={{ borderColor: "#c9a84c30", background: "#faf8f3" }}>
        <Coins size={22} className="flex-shrink-0 mt-0.5" style={{ color: "#a07830" }} />
        <p className="text-sm text-[#374151] m-0">
          As a general guide, EAR premiums for mining heavy equipment typically range from{" "}
          <strong style={{ color: "#0a1628" }}>1.5% to 3.5%</strong> of the sum insured per year,
          depending on the factors above. To get an accurate figure for your specific fleet,
          a direct consultation with an experienced insurance agent in this sector is the
          most reliable approach.
        </p>
      </div>

      <h2>Tips for Choosing the Right Policy for Your Mining Operation</h2>
      <div className="not-prose space-y-3 my-6">
        {TIPS.map(({ icon: Icon, title, desc }, i) => (
          <div key={title} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#e2e8f0] shadow-sm">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0" style={{ background: "#0a1628" }}>
              {i + 1}
            </div>
            <div>
              <p className="font-semibold text-sm flex items-center gap-2" style={{ color: "#0a1628" }}>
                <Icon size={15} style={{ color: "#c9a84c" }} />
                {title}
              </p>
              <p className="text-sm text-[#475569] mt-0.5">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="my-8 p-6 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0]">
        <h3 className="font-display font-bold text-[#0a1628] mb-3">
          Discuss Your Mining Equipment Insurance Needs
        </h3>
        <p className="text-[#475569] mb-4">
          Every mining fleet has a unique risk profile. Rio can help analyse the right
          coverage requirements, compare offers from multiple insurers, and ensure no
          protection gaps are left in your policy.
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
              <li><a href="/en/blog/excavator-and-bulldozer-insurance-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Excavator and Bulldozer Insurance</a></li>
              <li><a href="/en/blog/heavy-equipment-insurance-construction-projects" className="text-sm text-blue-700 hover:underline font-medium">→ Heavy Equipment for Construction</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}

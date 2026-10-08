// app/en/blog/commercial-property-insurance-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import {
  Store,
  Warehouse,
  Building,
  Users,
  Layers,
  Scale,
  TrendingDown,
  FileWarning,
  ShieldQuestion,
  UserCheck,
  FileSearch,
  GitCompareArrows,
  Headset,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Commercial Property Insurance Batam – Guide for Shophouse, Warehouse & Building Owners",
  description: "Commercial properties in Batam have a different risk profile from residential homes. Learn the right type of policy, what must be covered, and how to choose appropriate coverage for your business.",
  canonical: "https://asuransibatam.com/en/blog/commercial-property-insurance-batam",
  languages: {
      id: "https://asuransibatam.com/blog/asuransi-properti-komersial-batam",
      en: "https://asuransibatam.com/en/blog/commercial-property-insurance-batam",
    },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Commercial Property Insurance Batam: Guide for Shophouse, Warehouse & Building Owners",
  datePublished: "2026-05-06",
  dateModified: "2026-05-06",
  author: { "@type": "Person", name: "Rio" },
  publisher: { "@type": "Organization", name: "Asuransi Batam" },
};

const DIFFERENCES = [
  { icon: Layers, title: "Different exposure profile", desc: "Higher foot traffic, more intensive activity, and more electrical equipment running simultaneously — statistically raising the probability of loss-causing events." },
  { icon: Scale, title: "More complex value", desc: "Beyond building value, commercial property has contents value (stock, business equipment) and economic value (revenue potential) that need separate cover." },
  { icon: Users, title: "Broader third-party liability", desc: "Owners are responsible for the safety of visitors, customers, third-party workers, and business partners on their premises — a much greater exposure than residential." },
];

const PROPERTY_TYPES = [
  {
    icon: Store,
    title: "Shophouses in Trading Areas",
    body: "Shophouses in Nagoya, Jodoh, Batam Center, and Batu Aji form the backbone of Batam's retail economy. Comprehensive cover needs to include the building structure (including tenant renovations), merchandise stock, cashier equipment/electronics, and liability to customers.",
    note: "Frequently overlooked: stock coverage. Many policies only cover the building, leaving hundreds of millions in stock uninsured — if fire strikes, the policy pays for the building, not the destroyed stock.",
  },
  {
    icon: Warehouse,
    title: "Warehouses and Logistics Facilities",
    body: "Batam's industrial zones — Muka Kuning, Kabil, Tanjung Uncang, Batu Ampar — are full of storage warehouses. Cover needs to account for goods type (general vs chemicals vs high-value electronics), stock turnover, and fire protection systems.",
    note: "Warehouses storing chemicals or flammables must fully disclose this to the underwriter. Concealing it for a lower premium is dangerous — undisclosed hazardous materials found after a fire can void the claim entirely.",
  },
  {
    icon: Building,
    title: "Hotels and Accommodation",
    body: "Batam's growing hospitality industry — driven by tourism from Singapore and Malaysia — makes hotel insurance increasingly relevant. Beyond building and furnishings, consider Business Interruption Insurance for lost room revenue during restoration.",
    note: "Guest liability (public liability) is critical — a bathroom slip, lift malfunction, or pool incident can trigger substantial compensation claims.",
  },
];

const MISTAKES = [
  { icon: TrendingDown, title: "Underinsurance — Sum Insured Too Low", desc: "The most widespread and damaging problem. If a shophouse bought for Rp 500 million ten years ago now costs Rp 900 million to rebuild, but the policy is still at Rp 500 million, a total loss only pays 55% of the actual loss. Update your sum insured every renewal to reflect current replacement cost." },
  { icon: FileWarning, title: "Failing to Report Changes in Property Use", desc: "If a shophouse insured as a retail store is later converted to a restaurant or workshop, this must be reported — cooking activity carries higher fire risk. Unreported changes can lead to claim rejection on grounds of material misrepresentation." },
  { icon: ShieldQuestion, title: "Not Reading the Exclusion Clauses", desc: "Gradual wear and deterioration, structural damage from faulty design/construction defects, and losses when a property has been unoccupied for 30+ consecutive days are commonly excluded or require a special endorsement." },
];

const AGENT_TIPS = [
  { icon: UserCheck, text: "Ask about specific experience with commercial property — an agent who mainly handles home insurance may not understand a warehouse with high-value stock." },
  { icon: FileSearch, text: "Ask for an explanation of the exclusion clauses — a good agent proactively explains what is not covered, not just the features that are." },
  { icon: GitCompareArrows, text: "Compare at least two quotes — commercial property premiums vary considerably between insurers." },
  { icon: Headset, text: "Ask about claim support — make sure your agent actively assists with claims, not only at the point of sale." },
];

export default function ArticleCommercialPropertyInsuranceBatamPage() {
  return (
    <ArticleLayout cluster="property"
      title="Commercial Property Insurance Batam: Guide for Shophouse, Warehouse & Building Owners"
      description="Batam is growing as an industrial and trading city. Commercial property here is not just a building — it's the asset that sustains a business and a livelihood. Protecting it isn't optional; it's essential."
      date="6 May 2026"
      category="Property"
      readTime="11 min read"
      breadcrumbs={[{ label: "Commercial Property Insurance Batam", href: "/en/blog/commercial-property-insurance-batam" }]}
      schema={schema}
    >
      <p>
        Batam is a city built on the wheels of trade and industry. From rows of shophouses
        in Nagoya and Jodoh, logistics warehouses in Muka Kuning and Kabil, to office
        buildings and hotels in Batam Center — commercial properties in this city hold
        enormous asset value. Yet unlike residential homes, whose protection is relatively
        straightforward, commercial property insurance has layers of complexity that
        owners often don't realise exist until they actually need to make a claim.
      </p>
      <p>
        This article provides a comprehensive overview of how commercial property owners
        in Batam can make the right decisions when selecting and structuring their
        property insurance policies.
      </p>

      <h2>Why Does Commercial Property Need a Different Policy from a Residence?</h2>
      <p>
        This is the most common misconception. Many shophouse and warehouse owners insure
        their commercial properties using a standard home insurance policy because it's
        cheaper and easier to arrange. When a claim arises, they discover that home
        insurance policies contain explicit exclusions for property used for commercial
        purposes. There are three fundamental differences from an insurance perspective:
      </p>
      <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        {DIFFERENCES.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl p-5 bg-white border border-[#e2e8f0] shadow-sm">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: "linear-gradient(135deg, #0a1628, #1a4fa0)" }}>
              <Icon size={18} className="text-white" />
            </div>
            <p className="font-bold text-sm mb-1.5" style={{ color: "#0a1628" }}>{title}</p>
            <p className="text-sm text-[#475569]">{desc}</p>
          </div>
        ))}
      </div>

      <h2>Types of Commercial Property in Batam and Their Protection Needs</h2>
      <div className="not-prose space-y-4 my-6">
        {PROPERTY_TYPES.map(({ icon: Icon, title, body, note }) => (
          <div key={title} className="rounded-2xl border border-[#e2e8f0] bg-white overflow-hidden">
            <div className="flex items-center gap-3 p-5 pb-3">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#0a162810" }}>
                <Icon size={22} style={{ color: "#0a1628" }} />
              </div>
              <p className="font-display font-bold" style={{ color: "#0a1628" }}>{title}</p>
            </div>
            <div className="px-5 pb-5">
              <p className="text-sm text-[#475569] mb-3">{body}</p>
              <div className="p-3.5 rounded-xl border-l-4 border-[#c9a84c] bg-[#faf8f3] text-sm text-[#374151]">
                {note}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Commercial Property Policy Components That Should Be Present</h2>
      <div className="overflow-x-auto my-6 rounded-2xl border border-[#e2e8f0]">
        <table className="w-full text-sm">
          <thead className="bg-[#0a1628] text-white">
            <tr>
              <th className="text-left p-4">Component</th>
              <th className="p-4 text-left">For Whom</th>
              <th className="p-4 text-left">Priority</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["FLEXAS (Fire & Allied Perils)", "All commercial property", "Mandatory"],
              ["Flood & Storm Extension", "Low-lying shophouses, waterfront warehouses", "Highly Recommended"],
              ["Stock & Contents", "Retail shophouses, distributor warehouses", "Mandatory if stock exists"],
              ["Business Interruption", "Hotels, primary distribution warehouses, high-turnover shophouses", "Recommended"],
              ["Public Liability", "Hotels, high-footfall shophouses, warehouses with third-party access", "Recommended"],
              ["Burglary & Theft", "Retail shophouses, electronics warehouses", "Optional"],
              ["Machinery Breakdown", "Warehouses with industrial equipment, hotels with central A/C & lifts", "Optional"],
              ["Earthquake & Tsunami", "High-value properties, multi-storey buildings", "Optional"],
            ].map(([a, b, c], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="p-4 font-medium text-[#0a1628]">{a}</td>
                <td className="p-4 text-[#475569]">{b}</td>
                <td className={`p-4 font-semibold ${c === "Mandatory" ? "text-red-600" : c === "Highly Recommended" ? "text-orange-500" : "text-[#475569]"}`}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Three Most Common Mistakes Made by Commercial Property Owners in Batam</h2>
      <div className="not-prose space-y-4 my-6">
        {MISTAKES.map(({ icon: Icon, title, desc }, i) => (
          <div key={title} className="flex items-start gap-4 p-5 rounded-2xl border" style={{ borderColor: "#dc262620", background: "#fef2f2" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-red-100">
              <Icon size={20} className="text-red-600" />
            </div>
            <div>
              <p className="font-semibold text-sm mb-1" style={{ color: "#0a1628" }}>{i + 1}. {title}</p>
              <p className="text-sm text-[#475569]">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>How to Choose the Right Commercial Property Insurance Agent</h2>
      <p>Not every insurance agent is familiar with the nuances of commercial property. Things to look for:</p>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {AGENT_TIPS.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#e2e8f0] shadow-sm">
            <Icon size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#c9a84c" }} />
            <span className="text-sm text-[#374151]">{text}</span>
          </div>
        ))}
      </div>

      <div className="my-8 p-6 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0]">
        <h3 className="font-display font-bold text-[#0a1628] mb-3">
          Commercial Property Insurance Consultation in Batam
        </h3>
        <p className="text-[#475569] mb-4">
          Every commercial property has unique characteristics and risks. Rio helps you
          analyse the right coverage needs, avoid underinsurance, and ensure the policy
          you hold will genuinely protect your business assets when it matters most.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/en/property-insurance"
            className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm"
          >
            View All Property Products
          </Link>
          <Link
            href="/en/property-insurance/shophouse-insurance-batam"
            className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm"
          >
            Shophouse Insurance Batam
          </Link>
          <Link
            href="/en/property-insurance/warehouse-insurance-batam"
            className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm"
          >
            Warehouse Insurance Batam
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
              <li><a href="/en/property-insurance/warehouse-insurance-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Warehouse Insurance Batam</a></li>
              <li><a href="/en/property-insurance/hotel-insurance-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Hotel Insurance Batam</a></li>
              <li><a href="/en/property-insurance/factory-industrial-insurance-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Factory & Industrial Insurance Batam</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Related Articles</p>
            <ul className="space-y-2">
              <li><a href="/en/blog/how-to-claim-home-fire-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ How to Claim Home Fire Insurance</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}

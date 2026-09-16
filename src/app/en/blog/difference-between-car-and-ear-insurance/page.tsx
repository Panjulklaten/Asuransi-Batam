// app/en/blog/difference-between-car-and-ear-insurance/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import {
  Building,
  Cog,
  Layers,
  SplitSquareHorizontal,
  AlertTriangle,
  MapPin,
  Waves,
  Users,
  PhoneCall,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "CAR vs EAR Insurance: What's the Difference and Which Do You Need?",
  description: "Confused between Contractor All Risk (CAR) and Erection All Risk (EAR)? This guide breaks down the key differences, coverage scope, and how to choose the right policy for your project in Batam.",
  canonical: "https://asuransibatam.com/en/blog/difference-between-car-and-ear-insurance",
  languages: {
      id: "https://asuransibatam.com/blog/perbedaan-car-dan-ear",
      en: "https://asuransibatam.com/en/blog/difference-between-car-and-ear-insurance",
    },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "CAR vs EAR Insurance: What's the Difference and Which Do You Need?",
  description:
    "A complete guide to understanding the difference between Contractor All Risk (CAR) and Erection All Risk (EAR) for construction and industrial installation projects in Batam.",
  datePublished: "2026-05-07",
  dateModified: "2026-05-07",
  author: { "@type": "Person", name: "Rio", telephone: "+6281373336728" },
  publisher: { "@type": "InsuranceAgency", name: "Batam Insurance – Rio", url: "https://asuransibatam.com" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://asuransibatam.com/en/blog/difference-between-car-and-ear-insurance",
  },
  inLanguage: "en-ID",
};

const COMPARISON = [
  ["Type of Work", "Civil construction & building", "Mechanical & electrical installation"],
  ["Typical Projects", "Buildings, bridges, roads, ports", "Factories, power plants, refineries, water treatment"],
  ["Primary Materials", "Concrete, structural steel, masonry", "Machinery, turbines, pipework, electrical panels"],
  ["Who Needs It", "Civil contractors, property developers", "M&E contractors, machine vendors, plant operators"],
  ["DSU (Delay in Start-Up)", "Not available", "Available as an extension"],
  ["Maintenance Period", "Available (typically 12–24 months)", "Available (typically 12–24 months)"],
  ["Third-Party Liability", "Available (Section II)", "Available (Section II)"],
];

const APPROACHES = [
  { icon: SplitSquareHorizontal, title: "Separate policies", desc: "One CAR policy for the civil works and one EAR policy for the mechanical installation. This approach clearly delineates responsibility between the civil contractor and the M&E contractor." },
  { icon: Layers, title: "Combined engineering policy", desc: "Some insurers offer a single policy encompassing both civil and mechanical works. This simplifies administration but requires careful wording to ensure there are no coverage gaps between the two scopes." },
];

const MISTAKES = [
  { title: "Using CAR for a machinery installation project", desc: "When damage occurs to equipment being erected, the claim is rejected because machinery is not an insured object under a standard CAR policy." },
  { title: "Insuring below the actual contract value", desc: "Declaring a lower sum insured to reduce premium triggers the principle of average — the payout is reduced proportionally to the underinsurance." },
  { title: "Failing to extend the policy when the project overruns", desc: "CAR and EAR policies have fixed expiry dates. If a project is delayed and the policy isn't extended, incidents in the uninsured gap are borne entirely by the contractor." },
  { title: "Omitting the maintenance period", desc: "Without a maintenance extension, damage discovered after handover falls outside coverage, leaving the contractor with an exposed liability gap." },
];

const BATAM_FACTORS = [
  { icon: MapPin, title: "Varying ground conditions", desc: "Hilly terrain in some areas, former swampland in others. Subsidence and flooding risks should be addressed clearly in the policy schedule." },
  { icon: Users, title: "Foreign subcontractors", desc: "Industrial zone projects in Batamindo, Kabil, or Tanjung Uncang often involve foreign subcontractors — ensure the policy extends to all parties as named insureds or under an unnamed subcontractor clause." },
  { icon: Waves, title: "Coastal proximity", desc: "Proximity to the sea accelerates corrosion and increases exposure to extreme weather. Declare this upfront to avoid the insurer using non-disclosure to contest a claim." },
];

export default function BlogCARvsEARENPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ArticleLayout
        title="CAR vs EAR Insurance: What's the Difference and Which One Does Your Project Actually Need?"
        description="In construction and industrial installation, two engineering insurance products appear most often in project tenders: CAR (Contractor All Risk) and EAR (Erection All Risk). They sound similar and are often confused — but choosing the wrong one can leave your project entirely unprotected."
        date="7 May 2026"
        category="Engineering Insurance"
        readTime="8 min read"
        breadcrumbs={[{ label: "CAR vs EAR Insurance", href: "/en/blog/difference-between-car-and-ear-insurance" }]}
        schema={schema}
      >
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-5 my-6">
          <div className="rounded-2xl p-6 border-2" style={{ borderColor: "#0a162820", background: "#0a16280a" }}>
            <div className="flex items-center gap-2 mb-2">
              <Building size={20} style={{ color: "#0a1628" }} />
              <p className="font-display font-bold" style={{ color: "#0a1628" }}>CAR — Contractor All Risk</p>
            </div>
            <p className="text-sm text-[#475569]">
              Protects <strong>civil construction projects</strong> — anything built from the
              ground up using concrete, structural steel, timber, or masonry. Buildings, bridges,
              roads, tunnels, harbours, dams, and public infrastructure all fall within CAR&apos;s
              scope.
            </p>
          </div>
          <div className="rounded-2xl p-6 border-2" style={{ borderColor: "#c9a84c30", background: "#faf8f3" }}>
            <div className="flex items-center gap-2 mb-2">
              <Cog size={20} style={{ color: "#a07830" }} />
              <p className="font-display font-bold" style={{ color: "#0a1628" }}>EAR — Erection All Risk</p>
            </div>
            <p className="text-sm text-[#475569]">
              Protects projects of a <strong>mechanical and electrical nature</strong> —
              installation of industrial machinery, turbine assembly, power generation equipment
              erection, process piping, and plant commissioning.
            </p>
          </div>
        </div>
        <p>
          A standard CAR policy is structured into two sections: <strong>physical loss or
          damage</strong> to the works under construction (temporary structures, materials on
          site, construction plant), and <strong>third-party liability</strong>. EAR carries the
          same two sections, with one distinguishing feature: a <strong>Delay in Start-Up
          (DSU)</strong> extension covering financial losses from delayed commercial operations
          caused by an insured physical loss.
        </p>

        <h2>Side-by-Side Comparison: CAR vs EAR</h2>
        <div className="not-prose overflow-x-auto rounded-2xl border border-[#e2e8f0] my-6">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "#0a1628" }}>
                <th className="text-left py-3 px-4 text-white font-semibold">Aspect</th>
                <th className="text-left py-3 px-4 text-white font-semibold">CAR</th>
                <th className="text-left py-3 px-4 text-white font-semibold">EAR</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map(([aspect, car, ear], i) => (
                <tr key={aspect} className="border-t border-[#e2e8f0]" style={i % 2 === 1 ? { background: "#faf8f3" } : undefined}>
                  <td className="py-3 px-4 font-medium" style={{ color: "#0a1628" }}>{aspect}</td>
                  <td className="py-3 px-4 text-[#475569]">{car}</td>
                  <td className="py-3 px-4 text-[#475569]">{ear}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>What If My Project Involves Both?</h2>
        <p>
          This is one of the most common questions, particularly for large-scale projects in
          Batam — for example, an industrial facility involving both civil building works and
          simultaneous installation of heavy machinery. In practice, two approaches are used:
        </p>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          {APPROACHES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl p-5 bg-white border border-[#e2e8f0] shadow-sm">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: "#0a162810" }}>
                <Icon size={20} style={{ color: "#0a1628" }} />
              </div>
              <p className="font-bold text-sm mb-1" style={{ color: "#0a1628" }}>{title}</p>
              <p className="text-sm text-[#475569]">{desc}</p>
            </div>
          ))}
        </div>
        <p>
          The best approach depends on your contract structure, who holds the policy, and the
          overall complexity of the works. Always discuss this with your broker or agent before
          committing.
        </p>

        <h2>Common Mistakes Seen in Practice</h2>
        <p>Based on real claims experience handling projects in Batam, several mistakes come up repeatedly:</p>
        <div className="not-prose space-y-3 my-6">
          {MISTAKES.map((m) => (
            <div key={m.title} className="flex items-start gap-3 p-4 rounded-xl border" style={{ borderColor: "#c9a84c30", background: "#faf8f3" }}>
              <AlertTriangle size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#a07830" }} />
              <div>
                <p className="font-semibold text-sm mb-1" style={{ color: "#0a1628" }}>{m.title}</p>
                <p className="text-sm text-[#475569]">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2>Specific Considerations for Projects in Batam</h2>
        <p>
          Batam occupies a unique position as both a free trade zone and an industrial city.
          Projects here range widely — from shophouse developments and warehousing, to shipyard
          facilities, electronics manufacturing plants, and integrated industrial estates. Several
          local factors are worth declaring explicitly when arranging CAR or EAR cover in Batam:
        </p>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          {BATAM_FACTORS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-4 rounded-xl border border-[#e2e8f0] bg-white">
              <Icon size={18} className="mb-2" style={{ color: "#1a4fa0" }} />
              <p className="font-semibold text-sm mb-1" style={{ color: "#0a1628" }}>{title}</p>
              <p className="text-sm text-[#475569]">{desc}</p>
            </div>
          ))}
        </div>

        <h2>Conclusion</h2>
        <p>
          CAR and EAR are not interchangeable products. Each is built for a distinct type of
          project work, and selecting the wrong one means carrying risk without genuine
          protection. The simple rule: if your project is building a physical structure from
          scratch, choose <strong>CAR</strong>. If your project is installing, assembling, or
          commissioning industrial equipment, choose <strong>EAR</strong>. If both apply, speak
          to a specialist to determine the optimal structure.
        </p>

        <div className="not-prose my-8 p-6 rounded-2xl border" style={{ borderColor: "#c9a84c30", background: "linear-gradient(135deg, #faf8f3, #ffffff)" }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}>
              <PhoneCall size={20} style={{ color: "#0a1628" }} />
            </div>
            <h3 className="font-display font-bold text-[#0a1628] m-0">Not Sure Which Policy Fits Your Project?</h3>
          </div>
          <p className="text-[#475569] mb-4">
            Speak directly with Rio for a free consultation — no commitment required.
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
          <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Products</p>
              <ul className="space-y-2">
                <li><a href="/en/engineering-insurance/contractor-all-risk" className="text-sm text-blue-700 hover:underline font-medium">→ Contractor All Risk Batam</a></li>
                <li><a href="/en/engineering-insurance/erection-all-risk" className="text-sm text-blue-700 hover:underline font-medium">→ Erection All Risk Batam</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Related Articles</p>
              <ul className="space-y-2">
                <li><a href="/en/blog/how-to-claim-car-insurance-project" className="text-sm text-blue-700 hover:underline font-medium">→ How to Claim CAR Insurance When Your Project Is Damaged</a></li>
                <li><a href="/en/blog/construction-project-insurance-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Construction Project Insurance Batam</a></li>
              </ul>
            </div>
          </div>
        </div>
      </ArticleLayout>
    </>
  );
}

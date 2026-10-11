// src/app/en/blog/hazardous-waste-insurance-batam/page.tsx
import type { Metadata } from "next";
import QuoteButton from "@/components/quote/QuoteButton";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import {
  Droplet,
  FlaskConical,
  BatteryWarning,
  PaintBucket,
  Factory,
  Waves,
  Landmark,
  ShieldCheck,
  Scroll,
  Gavel,
  Newspaper,
  Fish,
  Anchor,
  Globe,
  HandCoins,
  HeartPulse,
  Scale,
  Siren,
  Users,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Is Hazardous Waste (B3) Insurance Mandatory in Batam? PP 22/2021 Explained",
  description: "Is B3 hazardous waste insurance a legal requirement? What Government Regulation 22/2021 says about financial guarantees, the three ways to comply, and the penalties for non-compliance for industries in Batam.",
  canonical: "https://asuransibatam.com/en/blog/hazardous-waste-insurance-batam",
  languages: {
      id: "https://asuransibatam.com/blog/pentingnya-asuransi-limbah-b3",
      en: "https://asuransibatam.com/en/blog/hazardous-waste-insurance-batam",
    },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Is Hazardous Waste (B3) Insurance Mandatory in Batam? PP 22/2021 Explained",
  datePublished: "2025-02-20",
  dateModified: "2025-02-20",
  author: { "@type": "Person", name: "Rio" },
  publisher: { "@type": "Organization", name: "Batam Insurance" },
  inLanguage: "en",
};

const WASTE_TYPES = [
  { icon: Droplet, label: "Used engine oil & hydraulic fluids" },
  { icon: FlaskConical, label: "Industrial process chemicals" },
  { icon: BatteryWarning, label: "Used batteries and accumulators" },
  { icon: PaintBucket, label: "Paint waste and solvents" },
  { icon: Factory, label: "Waste from galvanising processes" },
  { icon: Waves, label: "Sludge from wastewater treatment plants (IPAL)" },
];

const GUARANTEE_OPTIONS = [
  { icon: Landmark, title: "Dedicated Guarantee Fund", desc: "A cash reserve locked in a designated bank account, tying up capital that could otherwise be used for operations." },
  { icon: ShieldCheck, title: "Environmental Pollution Insurance", desc: "The most practical, cost-effective route — broader protection without locking up cash, backed by an underwriter's balance sheet." },
  { icon: Scroll, title: "Guarantee from Another Financial Institution", desc: "A bank guarantee or similar instrument from a licensed institution, typically requiring collateral." },
];

const CONSEQUENCES = [
  { icon: Gavel, title: "Administrative sanctions", desc: "Written warnings, government-mandated corrective action, and suspension of operating licences." },
  { icon: Scale, title: "Criminal penalties", desc: "Imprisonment of 1 to 10 years and fines of up to Rp 10 billion." },
  { icon: Users, title: "Civil liability claims", desc: "Compensation demands from communities and individuals affected by contamination." },
  { icon: Newspaper, title: "Reputational damage", desc: "Negative media coverage that can significantly harm standing with clients, partners, and regulators." },
];

const BATAM_RISKS = [
  { icon: Fish, text: "Contamination reaching the sea can cause severe and lasting damage to mangrove ecosystems and coral reefs" },
  { icon: Anchor, text: "Environmental incidents directly affect Batam's tourism and local fishing industries, which are economically significant to the island" },
  { icon: HandCoins, text: "Coastal communities and fishing operators have strong grounds for civil compensation claims in the event of contamination" },
  { icon: Globe, text: "Batam's proximity to Singapore and Malaysia means environmental standards are subject to closer regional scrutiny than in many other parts of Indonesia" },
];

const COVERAGE = [
  { icon: Factory, text: "Costs of cleaning up and remediating contaminated land" },
  { icon: Waves, text: "Costs of restoring affected aquatic ecosystems" },
  { icon: HeartPulse, text: "Health compensation for communities impacted by contamination" },
  { icon: Scale, text: "Legal defence costs and representation fees" },
  { icon: Siren, text: "Emergency response costs when a leak or spill occurs" },
  { icon: Gavel, text: "Claims brought by government authorities and affected members of the public" },
];

export default function ArticleHazardousWasteInsuranceENPage() {
  return (
    <ArticleLayout cluster="liability"
      title="Is Hazardous Waste (B3) Insurance Mandatory in Batam? PP 22/2021 Explained"
      description="What the law requires of industries that produce hazardous waste, the three ways to meet the financial guarantee obligation, and what non-compliance costs."
      date="20 February 2025"
      category="Liability"
      readTime="8 min read"
      breadcrumbs={[{ label: "Hazardous Waste Insurance Batam", href: "/en/blog/hazardous-waste-insurance-batam" }]}
      schema={schema}
    >
      <p>
        Batam's status as a Free Trade Zone (FTZ) makes it home to thousands of industrial
        companies — from shipyards and electronics manufacturers to chemical processing plants.
        Almost all of these industries generate waste classified as Hazardous and Toxic Materials
        (Limbah B3 — Bahan Berbahaya dan Beracun). For many of them, holding the right insurance
        is not a matter of choice. It is a legal requirement.
      </p>

      <h2>What Is Hazardous Waste (B3)?</h2>
      <p>
        Hazardous waste (B3) refers to any residual material from industrial or business
        activities that contains substances which are dangerous or toxic and which — due to
        their nature, concentration, or volume — have the potential to contaminate the
        environment or harm human health. Common examples generated by industries in Batam include:
      </p>
      <div className="not-prose grid grid-cols-2 sm:grid-cols-3 gap-3 my-6">
        {WASTE_TYPES.map(({ icon: Icon, label }) => (
          <div key={label} className="rounded-2xl p-4 bg-white border border-[#e2e8f0] shadow-sm text-center">
            <Icon size={20} className="mx-auto mb-2" style={{ color: "#a07830" }} />
            <p className="text-xs font-semibold" style={{ color: "#0a1628" }}>{label}</p>
          </div>
        ))}
      </div>

      <h2>The Legal Obligation: Government Regulation No. 22 of 2021</h2>
      <p>
        Under <strong>Government Regulation (PP) No. 22 of 2021</strong> on the Implementation
        of Environmental Protection and Management, every business operator that produces or
        manages B3 waste is <strong>legally required to hold a financial guarantee</strong>.
        This may take one of three forms:
      </p>
      <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        {GUARANTEE_OPTIONS.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl p-5 bg-white border border-[#e2e8f0] shadow-sm">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: "linear-gradient(135deg, #0a1628, #1a4fa0)" }}>
              <Icon size={18} className="text-white" />
            </div>
            <p className="font-bold text-sm mb-1.5" style={{ color: "#0a1628" }}>{title}</p>
            <p className="text-sm text-[#475569]">{desc}</p>
          </div>
        ))}
      </div>
      <p>
        Of these options, insurance is by far the most practical and cost-effective. It
        eliminates the need to lock up large amounts of cash in a dedicated account while
        providing broader protection should an actual contamination incident occur.
      </p>

      <h2>Consequences of Non-Compliance</h2>
      <p>Industries that fail to meet their financial guarantee obligations under PP 22/2021 face the following penalties:</p>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {CONSEQUENCES.map(({ icon: Icon, title, desc }) => (
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

      <h2>Why Batam Carries Higher Environmental Risk</h2>
      <p>As an island surrounded entirely by sea, Batam has a particularly sensitive ecosystem that amplifies the consequences of any contamination incident:</p>
      <div className="not-prose space-y-2.5 my-6">
        {BATAM_RISKS.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#faf8f3] border border-[#e2e8f0]">
            <Icon size={17} className="flex-shrink-0 mt-0.5" style={{ color: "#1a4fa0" }} />
            <span className="text-sm text-[#374151]">{text}</span>
          </div>
        ))}
      </div>

      <h2>What a Qualifying Insurance Policy Typically Covers</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        {COVERAGE.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#e2e8f0] shadow-sm">
            <Icon size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#1a4fa0" }} />
            <span className="text-sm text-[#374151]">{text}</span>
          </div>
        ))}
      </div>

      <h2>Where to Go Next</h2>
      <p>
        Once you know the obligation applies to your facility, the practical questions are cost, documents
        and how to arrange the policy — these are covered on the{" "}
        <Link href="/en/liability-insurance/b3-waste-insurance" className="text-[#1a4fa0] font-semibold hover:underline">
          B3 Hazardous Waste Insurance Batam
        </Link>{" "}
        page. If an incident has already happened, follow the{" "}
        <Link href="/en/hazardous-waste-insurance-batam" className="text-[#1a4fa0] font-semibold hover:underline">
          B3 insurance claim procedure
        </Link>
        .
      </p>

      <div className="my-8 p-6 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0]">
        <h3 className="font-display font-bold text-[#0a1628] mb-3">
          Ensure Your Business Is Fully Compliant
        </h3>
        <p className="text-[#475569] mb-4">
          Rio assists industries across Batam in meeting their environmental liability
          obligations under PP 22/2021.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/en/liability-insurance/b3-waste-insurance"
            className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm"
          >
            B3 Insurance Details
          </Link>
          <QuoteButton cluster="liability" lang="en" variant="gold" className="!rounded-xl !px-6 !py-3 !text-sm" />
        </div>
      </div>
    
      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Related Pages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Products &amp; Services</p>
            <ul className="space-y-2">
              <li><a href="/en/liability-insurance/b3-waste-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ B3 Hazardous Waste Insurance Batam</a></li>
              <li><a href="/en/hazardous-waste-insurance-batam" className="text-sm text-blue-700 hover:underline font-medium">→ How to File a B3 Insurance Claim in Batam</a></li>
              <li><a href="/en/liability-insurance/public-liability" className="text-sm text-blue-700 hover:underline font-medium">→ Public Liability Insurance Batam</a></li>
              <li><a href="/en/liability-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Liability Insurance Batam</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Related Articles</p>
            <ul className="space-y-2">
              <li><a href="/en/blog/how-to-claim-car-insurance-project" className="text-sm text-blue-700 hover:underline font-medium">→ How to Claim CAR Insurance</a></li>
              <li><a href="/en/blog/construction-project-insurance-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Construction Project Insurance Batam</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}

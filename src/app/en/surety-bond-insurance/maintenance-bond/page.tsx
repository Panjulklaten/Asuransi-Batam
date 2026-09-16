// app/en/surety-bond-insurance/maintenance-bond/page.tsx
import type { Metadata } from "next";
import { generateSEO, schemaInsuranceProduct } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";
import {
  Wrench,
  Droplets,
  Zap,
  PaintBucket,
  Route,
  Timer,
  Wallet,
  TrendingUp,
  FileText,
  FileCheck2,
  Building2,
  Landmark,
  Scale,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Maintenance Bond Batam – Post-Project Defect Guarantee",
  description: "Maintenance bond in Batam: guarantee your post-project obligations and replace cash retention with a surety bond. Fast issuance, free consultation with Rio.",
  keywords: [
    "maintenance bond batam",
    "defect guarantee batam",
    "post-project guarantee batam",
    "retention bond batam",
    "surety bond maintenance batam",
  ],
  canonical: "https://asuransibatam.com/en/surety-bond-insurance/maintenance-bond",
  languages: {
      id: "https://asuransibatam.com/asuransi-surety-bond/maintenance-bond",
      en: "https://asuransibatam.com/en/surety-bond-insurance/maintenance-bond",
    },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Maintenance Bond Batam – Post-Project Defect Guarantee",
  description:
    "Guide to maintenance bonds in Batam: what they cover, bond value, validity periods, and how contractors can use them to replace cash retention.",
  author: { "@type": "Person", name: "Rio Mardiansyah", jobTitle: "Insurance Practitioner" },
  publisher: { "@type": "Organization", name: "Asuransi Batam", url: "https://asuransibatam.com" },
  mainEntityOfPage: "https://asuransibatam.com/en/surety-bond-insurance/maintenance-bond",
};

const serviceSchema = schemaInsuranceProduct({
  name: "Maintenance Bond Batam",
  description: "Maintenance bond services in Batam for post-project construction obligations, replacing cash retention with a surety bond.",
  url: "/en/surety-bond-insurance/maintenance-bond",
  category: "Surety Bond",
});

const DEFECT_RISKS = [
  { icon: Wrench, title: "Wall or structural cracks", desc: "Caused by foundation settlement common in Batam's soil conditions." },
  { icon: Droplets, title: "Roof / waterproofing failures", desc: "Aggravated by heavy tropical rainfall and high humidity." },
  { icon: Zap, title: "MEP failures post-handover", desc: "Mechanical, electrical, or plumbing systems failing after completion." },
  { icon: PaintBucket, title: "Undetected finishing defects", desc: "Issues not caught during final inspection." },
  { icon: Route, title: "Road or pavement damage", desc: "Due to substandard asphalt mix quality." },
];

const PERIODS = [
  { duration: "6 months", scope: "Simple works — painting, landscaping, light interior fit-out" },
  { duration: "12 months", scope: "Standard commercial or industrial buildings" },
  { duration: "24 months", scope: "Large-scale infrastructure, mechanical installations, EPC projects" },
];

const BOND_VS_RETENTION = [
  { icon: Wallet, title: "100% of final payment released", desc: "No retention withheld from the contractor." },
  { icon: CheckCircle2, title: "Equivalent protection for the owner", desc: "A formal insurance guarantee replaces the cash held back." },
  { icon: TrendingUp, title: "Improved contractor cash flow", desc: "Funds can be reinvested into the next project immediately." },
];

const DOCUMENTS = [
  { icon: FileText, title: "Contract with maintenance clause", desc: "Must state the maintenance period terms." },
  { icon: FileCheck2, title: "Prior Performance Bond copy", desc: "Copy of the bond previously issued." },
  { icon: CheckCircle2, title: "First Handover Certificate (BAST I)", desc: "Proof of practical completion." },
  { icon: Building2, title: "Deed of establishment & NIB/SIUP", desc: "Company legal documents." },
  { icon: Landmark, title: "Company NPWP", desc: "Tax Registration Number of the company." },
  { icon: Scale, title: "Latest financial statements", desc: "Current company financial position." },
];

export default function MaintenanceBondENPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ArticleLayout
      title="Maintenance Bond Batam: Post-Project Defect & Retention Guarantee"
      description="A complete guide to maintenance bonds in Batam — what they cover, bond value, maintenance period durations, and how contractors can use them to release cash retention and improve project cash flow."
      date="2025"
      category="Surety Bond"
      readTime="5 min"
      breadcrumbs={[
        { label: "Surety Bond Insurance", href: "/en/surety-bond-insurance" },
        { label: "Maintenance Bond", href: "/en/surety-bond-insurance/maintenance-bond" },
      ]}
      schema={schema}
    >
      <p>
        Project handover is not the end of a contractor&apos;s obligations. During the maintenance
        period that follows practical completion, the contractor remains responsible for
        rectifying any latent defects or damage attributable to workmanship quality. A{" "}
        <strong>Maintenance Bond</strong> provides the project owner with formal assurance that
        these post-handover obligations will be met.
      </p>
      <p>
        The maintenance bond completes the full surety bond cycle for a project — from the{" "}
        <Link href="/en/surety-bond-insurance/bid-bond">Bid Bond</Link> (pre-tender) through
        the{" "}
        <Link href="/en/surety-bond-insurance/performance-bond">Performance Bond</Link>{" "}
        (execution phase) to the maintenance bond (post-handover).
      </p>

      <h2>What Is a Maintenance Bond?</h2>
      <p>
        A maintenance bond is a type of{" "}
        <Link href="/en/surety-bond-insurance">surety bond</Link> that guarantees to the project
        owner that during the agreed maintenance period, the contractor will repair defects
        identified after the first handover, respond to notifications within the contractual
        timeframe, and fulfil all obligations through to the final handover (BAST II). If the
        contractor neglects these obligations, the project owner can claim the bond to cover
        repair costs by a third party.
      </p>

      <h2>Why Batam Project Owners Need a Maintenance Bond</h2>
      <p>
        Post-construction defects are more common than many expect — particularly in Batam&apos;s
        tropical climate with high humidity, heavy rainfall, and specific soil conditions.
        Maintenance bonds address risks such as:
      </p>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {DEFECT_RISKS.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl p-5 bg-white border border-[#e2e8f0] shadow-sm">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: "#0a162810" }}>
              <Icon size={20} style={{ color: "#0a1628" }} />
            </div>
            <p className="font-bold text-sm mb-1" style={{ color: "#0a1628" }}>{title}</p>
            <p className="text-sm text-[#475569]">{desc}</p>
          </div>
        ))}
      </div>

      <h2>Bond Value and Maintenance Period Duration</h2>
      <p>
        Maintenance bond values are typically set at <strong>5% of the contract value</strong>,
        mirroring the performance bond. Maintenance period durations commonly applied to Batam
        projects:
      </p>
      <div className="not-prose overflow-x-auto rounded-2xl border border-[#e2e8f0] my-6">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: "#0a1628" }}>
              <th className="text-left py-3 px-4 text-white font-semibold">
                <span className="inline-flex items-center gap-2"><Timer size={14} /> Duration</span>
              </th>
              <th className="text-left py-3 px-4 text-white font-semibold">Typical Scope</th>
            </tr>
          </thead>
          <tbody>
            {PERIODS.map((p, i) => (
              <tr key={p.duration} className="border-t border-[#e2e8f0]" style={i % 2 === 1 ? { background: "#faf8f3" } : undefined}>
                <td className="py-3 px-4 font-semibold" style={{ color: "#1a4fa0" }}>{p.duration}</td>
                <td className="py-3 px-4 text-[#475569]">{p.scope}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        The bond is valid from the first handover date (BAST I) until the final handover (BAST
        II) or the expiry date stated in the bond document.
      </p>

      <h2>Maintenance Bond vs Cash Retention: A Better Option for Contractors</h2>
      <p>
        Traditionally, project owners withhold a percentage of the contractor&apos;s final
        payment as <em>cash retention</em> (typically 5%) to secure maintenance obligations. By
        issuing a maintenance bond, a contractor can request full release of the final payment —
        substituting the cash retention with an insurance guarantee:
      </p>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        {BOND_VS_RETENTION.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="p-4 rounded-xl border border-[#e2e8f0] bg-white">
            <Icon size={18} className="mb-2" style={{ color: "#1a4fa0" }} />
            <p className="font-semibold text-sm mb-1" style={{ color: "#0a1628" }}>{title}</p>
            <p className="text-sm text-[#475569]">{desc}</p>
          </div>
        ))}
      </div>
      <p>
        This approach is particularly valuable for active Batam contractors managing multiple
        simultaneous projects who cannot afford to have large sums tied up in retention accounts.
      </p>

      <h2>Required Documents</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {DOCUMENTS.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-start gap-3 p-4 rounded-xl border border-[#e2e8f0] bg-white">
            <Icon size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#1a4fa0" }} />
            <div>
              <p className="font-semibold text-sm mb-1" style={{ color: "#0a1628" }}>{title}</p>
              <p className="text-sm text-[#475569]">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="not-prose my-8 p-6 rounded-2xl border" style={{ borderColor: "#c9a84c30", background: "linear-gradient(135deg, #faf8f3, #ffffff)" }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}>
            <PhoneCall size={20} style={{ color: "#0a1628" }} />
          </div>
          <h3 className="font-display font-bold text-[#0a1628] m-0">Replace Your Retention with a Maintenance Bond</h3>
        </div>
        <p className="text-[#475569] mb-4">
          Don&apos;t leave hundreds of millions in retention sitting idle for months. Issue a
          maintenance bond and release your final payment now — 1–3 business day issuance, free
          consultation.
        </p>
        <p className="text-sm mb-4" style={{ color: "#0a1628" }}>
          <strong>WhatsApp:</strong> +62 813-7333-6728 · <strong>Hours:</strong> Mon–Sat, 08:00–17:00 WIB
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="https://wa.me/6281373336728?text=Hello%20Rio%2C%20I%20would%20like%20to%20consult%20about%20a%20Maintenance%20Bond"
            className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm"
          >
            Chat on WhatsApp
          </Link>
          <Link
            href="/en/surety-bond-insurance"
            className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm"
          >
            View All Surety Bonds
          </Link>
        </div>
      </div>

      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Complete Surety Bond Cycle for Your Project</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/en/surety-bond-insurance/bid-bond" className="block p-4 rounded-xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all">
            <p className="font-semibold text-sm" style={{ color: "#0a1628" }}>Bid Bond</p>
            <p className="text-sm text-[#475569]">Pre-tender guarantee</p>
          </a>
          <a href="/en/surety-bond-insurance/performance-bond" className="block p-4 rounded-xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all">
            <p className="font-semibold text-sm" style={{ color: "#0a1628" }}>Performance Bond</p>
            <p className="text-sm text-[#475569]">Contract execution guarantee</p>
          </a>
          <a href="/en/surety-bond-insurance/advance-payment-bond" className="block p-4 rounded-xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all">
            <p className="font-semibold text-sm" style={{ color: "#0a1628" }}>Advance Payment Bond</p>
            <p className="text-sm text-[#475569]">Down payment guarantee</p>
          </a>
          <a href="/en/engineering-insurance/erection-all-risk" className="block p-4 rounded-xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all">
            <p className="font-semibold text-sm" style={{ color: "#0a1628" }}>Erection All Risk</p>
            <p className="text-sm text-[#475569]">Machinery & equipment installation insurance</p>
          </a>
        </div>
      </div>
    </ArticleLayout>
    </>
  );
}

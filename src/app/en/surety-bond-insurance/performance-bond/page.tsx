// app/en/surety-bond-insurance/performance-bond/page.tsx
import type { Metadata } from "next";
import { generateSEO, schemaInsuranceProduct } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";
import {
  Target,
  Clock,
  ShieldCheck,
  Building2,
  Factory,
  Package,
  Laptop,
  Users,
  Scale,
  Landmark,
  FileCheck2,
  FileText,
  Banknote,
  ClipboardList,
  Fingerprint,
  ArrowRightLeft,
  Mail,
  Search,
  Handshake,
  PhoneCall,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Performance Bond Batam – Contract Execution Guarantee",
  description: "Performance bond services in Batam for construction contractors, EPC companies, and suppliers. Guarantee your project is completed on time and on spec. Fast issuance, free consultation with Rio.",
  keywords: [
    "performance bond batam",
    "contract execution guarantee batam",
    "construction performance bond batam",
    "surety bond performance bond batam",
    "project completion guarantee batam",
  ],
  canonical: "https://asuransibatam.com/en/surety-bond-insurance/performance-bond",
  languages: {
      id: "https://asuransibatam.com/asuransi-surety-bond/performance-bond",
      en: "https://asuransibatam.com/en/surety-bond-insurance/performance-bond",
    },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Performance Bond Batam – Contract Execution Guarantee",
  description:
    "Complete guide to performance bonds in Batam: definition, who needs one, value, validity, required documents, and the claims process.",
  author: { "@type": "Person", name: "Rio Mardiansyah", jobTitle: "Insurance Practitioner" },
  publisher: { "@type": "Organization", name: "Asuransi Batam", url: "https://asuransibatam.com" },
  mainEntityOfPage: "https://asuransibatam.com/en/surety-bond-insurance/performance-bond",
};

const serviceSchema = schemaInsuranceProduct({
  name: "Performance Bond Batam",
  description: "Performance bond services in Batam for construction contractors, EPC companies, and suppliers, guaranteeing project completion per contract.",
  url: "/en/surety-bond-insurance/performance-bond",
  category: "Surety Bond",
});

const GUARANTEES = [
  { icon: ClipboardList, title: "Complete the scope of work", desc: "Deliver all work within the agreed scope of contract." },
  { icon: Target, title: "Meet quality standards", desc: "Comply with technical specifications and quality requirements as set out in the contract." },
  { icon: Clock, title: "Finish on schedule", desc: "Complete the project within the stipulated timeframe agreed with the owner." },
  { icon: ShieldCheck, title: "Submit a Maintenance Bond", desc: "Provide a Maintenance Bond upon completion, if required by the contract." },
];

const WHO_NEEDS = [
  { icon: Building2, title: "Construction contractors", desc: "Working on buildings, industrial facilities, or infrastructure in Batam." },
  { icon: Factory, title: "EPC contractors", desc: "Engineering, Procurement & Construction for factory, refinery, or large installation projects in industrial estates." },
  { icon: Package, title: "Procurement suppliers", desc: "Delivering high-value goods or equipment to SOEs or government agencies." },
  { icon: Laptop, title: "IT and service contractors", desc: "Engaged in long-term projects with measurable delivery milestones." },
  { icon: Users, title: "Subcontractors", desc: "In back-to-back arrangements with the main contractor." },
];

const DOCUMENTS = [
  { icon: FileText, title: "Deed of establishment", desc: "Company deed of establishment and all amendments." },
  { icon: FileCheck2, title: "NIB & SIUJK", desc: "Business Registration Number, plus SIUJK for construction contractors." },
  { icon: Landmark, title: "Company NPWP", desc: "Tax Registration Number of the company." },
  { icon: Banknote, title: "Financial statements", desc: "Last 2 years, audited statements preferred." },
  { icon: Handshake, title: "Signed contract / SPK", desc: "Contract or Work Order from the project owner." },
  { icon: Fingerprint, title: "Prior Bid Bond copy", desc: "Copy of the Bid Bond previously issued, if applicable." },
  { icon: ClipboardList, title: "Project track record", desc: "List of similar projects completed in the past 3–5 years." },
  { icon: Scale, title: "Balance sheet & income statement", desc: "Current year figures, if available." },
];

const CLAIM_STEPS = [
  { icon: Mail, title: "Written notification", desc: "From the project owner to both the surety (insurance company) and the contractor, documenting the breach of contract." },
  { icon: Search, title: "Investigation", desc: "The surety verifies the validity of the claim and assesses the extent of loss." },
  { icon: Handshake, title: "Resolution", desc: "The surety either pays financial indemnity or facilitates project completion through a replacement contractor." },
];

export default function PerformanceBondENPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ArticleLayout
      title="Performance Bond Batam: Guaranteeing Contract Execution"
      description="A complete guide to performance bonds in Batam — what they cover, who is required to submit one, how much they cost, required documents, and how the claims process works for construction and procurement projects."
      date="2025"
      category="Surety Bond"
      readTime="7 min"
      breadcrumbs={[
        { label: "Surety Bond Insurance", href: "/en/surety-bond-insurance" },
        { label: "Performance Bond", href: "/en/surety-bond-insurance/performance-bond" },
      ]}
      schema={schema}
    >
      <p>
        Once a contract is signed, the project owner needs certainty that the contractor will
        deliver the work as agreed — on time, on budget, and to specification. This is precisely
        the purpose of a <strong>Performance Bond</strong>, the most critical surety bond in the
        project execution phase.
      </p>
      <p>
        Performance bonds are among the most commonly required documents for contractors
        operating in Batam, whether for government, SOE, or privately funded projects. They are
        typically submitted immediately after the{" "}
        <Link href="/en/surety-bond-insurance/bid-bond">Bid Bond</Link> phase is complete and
        the contract has been formally signed.
      </p>

      <h2>What Is a Performance Bond?</h2>
      <p>
        A performance bond is a type of{" "}
        <Link href="/en/surety-bond-insurance">surety bond</Link> that guarantees to the project
        owner (<em>obligee</em>) that the contractor (<em>principal</em>) will meet four key
        commitments:
      </p>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {GUARANTEES.map(({ icon: Icon, title, desc }) => (
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
        If the contractor defaults — by abandoning the project, delivering substandard work, or
        exceeding the agreed timeline without valid justification — the project owner can claim
        the performance bond as financial compensation.
      </p>

      <h2>Who Is Required to Submit a Performance Bond in Batam?</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {WHO_NEEDS.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-start gap-3 p-4 rounded-xl border border-[#e2e8f0] bg-white">
            <Icon size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#1a4fa0" }} />
            <div>
              <p className="font-semibold text-sm mb-1" style={{ color: "#0a1628" }}>{title}</p>
              <p className="text-sm text-[#475569]">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>How Much Is a Performance Bond?</h2>
      <p>
        Under Indonesian government procurement regulations, performance bond values are
        typically set at <strong>5% of the contract value</strong>. For private contracts in
        Batam, the percentage may range between 5% and 10% depending on project risk profile
        and the parties&apos; agreement.
      </p>
      <div className="not-prose overflow-x-auto rounded-2xl border border-[#e2e8f0] my-6">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: "#0a1628" }}>
              <th className="text-left py-3 px-4 text-white font-semibold">Contract Type</th>
              <th className="text-left py-3 px-4 text-white font-semibold">Typical Bond Value</th>
              <th className="text-left py-3 px-4 text-white font-semibold">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-[#e2e8f0]">
              <td className="py-3 px-4 font-medium" style={{ color: "#0a1628" }}>Government / SOE procurement</td>
              <td className="py-3 px-4 text-[#1a4fa0] font-semibold">5% of contract value</td>
              <td className="py-3 px-4 text-[#475569]">IDR 50B contract → ~IDR 2.5B bond</td>
            </tr>
            <tr className="border-t border-[#e2e8f0]" style={{ background: "#faf8f3" }}>
              <td className="py-3 px-4 font-medium" style={{ color: "#0a1628" }}>Private contract</td>
              <td className="py-3 px-4 text-[#1a4fa0] font-semibold">5%–10% of contract value</td>
              <td className="py-3 px-4 text-[#475569]">Depends on risk profile & negotiation</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Performance Bond Validity Period</h2>
      <p>
        A performance bond is valid from the contract signing date until the completion of all
        works and formal handover (BAST). Validity typically mirrors the project duration plus a
        30-day buffer. If the project timeline is extended through an addendum, the performance
        bond must be extended simultaneously to avoid a coverage gap.
      </p>

      <h2>Required Documents for a Performance Bond Application</h2>
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

      <h2>Performance Bond vs Bid Bond: Key Differences</h2>
      <div className="not-prose overflow-x-auto rounded-2xl border border-[#e2e8f0] my-6">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: "#0a1628" }}>
              <th className="text-left py-3 px-4 text-white font-semibold">
                <span className="inline-flex items-center gap-2">
                  <ArrowRightLeft size={14} /> Aspect
                </span>
              </th>
              <th className="text-left py-3 px-4 text-white font-semibold">Bid Bond</th>
              <th className="text-left py-3 px-4 text-white font-semibold">Performance Bond</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-[#e2e8f0]">
              <td className="py-3 px-4 font-medium" style={{ color: "#0a1628" }}>Issued</td>
              <td className="py-3 px-4 text-[#475569]">Before the tender begins</td>
              <td className="py-3 px-4 text-[#475569]">After the contract is signed</td>
            </tr>
            <tr className="border-t border-[#e2e8f0]" style={{ background: "#faf8f3" }}>
              <td className="py-3 px-4 font-medium" style={{ color: "#0a1628" }}>Expires</td>
              <td className="py-3 px-4 text-[#475569]">When the contract is signed</td>
              <td className="py-3 px-4 text-[#475569]">Throughout the project execution phase</td>
            </tr>
            <tr className="border-t border-[#e2e8f0]">
              <td className="py-3 px-4 font-medium" style={{ color: "#0a1628" }}>Purpose</td>
              <td className="py-3 px-4 text-[#475569]">Prevent the winning bidder from withdrawing</td>
              <td className="py-3 px-4 text-[#475569]">Ensure project completion per contract terms</td>
            </tr>
            <tr className="border-t border-[#e2e8f0]" style={{ background: "#faf8f3" }}>
              <td className="py-3 px-4 font-medium" style={{ color: "#0a1628" }}>Typical value</td>
              <td className="py-3 px-4 text-[#475569]">Based on the tender estimate</td>
              <td className="py-3 px-4 text-[#475569]">Based on the full contract value (generally larger)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>How Does the Claims Process Work?</h2>
      <p>
        If a contractor defaults, the project owner may initiate a performance bond claim through
        the following steps:
      </p>
      <div className="not-prose space-y-4 my-6">
        {CLAIM_STEPS.map((step, i) => (
          <div key={step.title} className="flex items-start gap-4 p-5 rounded-2xl bg-[#faf8f3] border border-[#e2e8f0]">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: "#0a1628" }}>
              {i + 1}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <step.icon size={16} style={{ color: "#c9a84c" }} />
                <p className="font-semibold text-sm" style={{ color: "#0a1628" }}>{step.title}</p>
              </div>
              <p className="text-sm text-[#475569]">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="not-prose my-8 p-6 rounded-2xl border" style={{ borderColor: "#c9a84c30", background: "linear-gradient(135deg, #faf8f3, #ffffff)" }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}>
            <PhoneCall size={20} style={{ color: "#0a1628" }} />
          </div>
          <h3 className="font-display font-bold text-[#0a1628] m-0">Need a Performance Bond in Batam?</h3>
        </div>
        <p className="text-[#475569] mb-4">
          Don&apos;t delay submitting your performance bond and risk losing your contract award.
          Our team handles everything from documentation to issuance within 1–3 business days.
          We serve contractors, EPC companies, and suppliers across Batam and the Riau Islands.
        </p>
        <p className="text-sm mb-4" style={{ color: "#0a1628" }}>
          <strong>WhatsApp:</strong> +62 813-7333-6728 · <strong>Hours:</strong> Mon–Sat, 08:00–17:00 WIB
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="https://wa.me/6281373336728?text=Hello%20Rio%2C%20I%20would%20like%20to%20consult%20about%20a%20Performance%20Bond"
            className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm"
          >
            Chat on WhatsApp
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
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Other Surety Bonds in Your Project Cycle</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/en/surety-bond-insurance/bid-bond" className="block p-4 rounded-xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all">
            <p className="font-semibold text-sm" style={{ color: "#0a1628" }}>Bid Bond</p>
            <p className="text-sm text-[#475569]">Pre-tender guarantee</p>
          </a>
          <a href="/en/surety-bond-insurance/advance-payment-bond" className="block p-4 rounded-xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all">
            <p className="font-semibold text-sm" style={{ color: "#0a1628" }}>Advance Payment Bond</p>
            <p className="text-sm text-[#475569]">Down payment guarantee</p>
          </a>
          <a href="/en/surety-bond-insurance/maintenance-bond" className="block p-4 rounded-xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all">
            <p className="font-semibold text-sm" style={{ color: "#0a1628" }}>Maintenance Bond</p>
            <p className="text-sm text-[#475569]">Post-completion guarantee</p>
          </a>
          <a href="/en/engineering-insurance/contractor-all-risk" className="block p-4 rounded-xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all">
            <p className="font-semibold text-sm" style={{ color: "#0a1628" }}>Contractor All Risk</p>
            <p className="text-sm text-[#475569]">Physical loss insurance for construction</p>
          </a>
        </div>
      </div>
    </ArticleLayout>
    </>
  );
}

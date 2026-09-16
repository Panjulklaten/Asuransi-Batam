// app/en/surety-bond-insurance/advance-payment-bond/page.tsx
import type { Metadata } from "next";
import { generateSEO, schemaInsuranceProduct } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";
import {
  FileSignature,
  Banknote,
  TrendingDown,
  CheckCircle2,
  Landmark,
  Building2,
  Factory,
  Package,
  Globe,
  FileText,
  FileCheck2,
  Scale,
  CreditCard,
  Mail,
  PhoneCall,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Advance Payment Bond Batam – Down Payment Guarantee",
  description: "Advance payment bond in Batam: protect your project's advance payment from contractor default. Fast issuance, competitive premium. Free consultation with Rio.",
  keywords: [
    "advance payment bond batam",
    "down payment guarantee batam",
    "advance payment bond construction batam",
    "surety bond advance payment batam",
    "project advance guarantee batam",
  ],
  canonical: "https://asuransibatam.com/en/surety-bond-insurance/advance-payment-bond",
  languages: {
      id: "https://asuransibatam.com/asuransi-surety-bond/advance-payment-bond",
      en: "https://asuransibatam.com/en/surety-bond-insurance/advance-payment-bond",
    },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Advance Payment Bond Batam – Down Payment Guarantee",
  description:
    "Complete guide to advance payment bonds in Batam: how they work, the reduction mechanism, required documents, and how to apply.",
  author: { "@type": "Person", name: "Rio Mardiansyah", jobTitle: "Insurance Practitioner" },
  publisher: { "@type": "Organization", name: "Asuransi Batam", url: "https://asuransibatam.com" },
  mainEntityOfPage: "https://asuransibatam.com/en/surety-bond-insurance/advance-payment-bond",
};

const serviceSchema = schemaInsuranceProduct({
  name: "Advance Payment Bond Batam",
  description: "Advance payment bond services in Batam. Protects the project owner from contractor default after an advance payment has been disbursed.",
  url: "/en/surety-bond-insurance/advance-payment-bond",
  category: "Surety Bond",
});

const REDUCTION_STEPS = [
  { icon: FileSignature, title: "Contract signed", desc: "Contract value IDR 20 billion; advance payment set at 20% = IDR 4 billion." },
  { icon: Banknote, title: "Advance payment bond issued", desc: "The bond is issued at the full advance amount: IDR 4 billion." },
  { icon: TrendingDown, title: "Proportional reduction", desc: "Each progress billing that includes an advance deduction reduces the bond value proportionally." },
  { icon: CheckCircle2, title: "Bond expires automatically", desc: "Once the advance has been fully deducted from billing, the bond expires on its own." },
];

const WHEN_REQUIRED = [
  { icon: Landmark, title: "Government construction projects", desc: "Mandatory in Batam under procurement regulations." },
  { icon: Building2, title: "SOE & state agency contracts", desc: "Any contract that includes advance payment provisions." },
  { icon: Factory, title: "EPC projects in industrial zones", desc: "Batamindo, Kabil, Tanjung Uncang, and similar estates." },
  { icon: Package, title: "Machinery / equipment procurement", desc: "Purchases with significant upfront payment." },
  { icon: Globe, title: "Foreign direct investment projects", desc: "Private projects in Batam with strict guarantee requirements." },
];

const DOCUMENTS = [
  { icon: FileText, title: "Contract or SPK", desc: "Must contain the advance payment clause." },
  { icon: FileCheck2, title: "Prior Performance Bond copy", desc: "APB typically follows a Performance Bond." },
  { icon: Building2, title: "Deed of establishment & NIB/SIUP", desc: "Company legal documents." },
  { icon: Landmark, title: "Company NPWP", desc: "Tax Registration Number of the company." },
  { icon: Scale, title: "Financial statements", desc: "Last 2 years of company financials." },
  { icon: CreditCard, title: "Bank statements", desc: "Last 3 months of company bank activity." },
  { icon: Mail, title: "Advance payment request letter", desc: "From the contractor to the project owner." },
];

export default function AdvancePaymentBondENPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ArticleLayout
      title="Advance Payment Bond Batam: Securing Your Project's Down Payment"
      description="A complete guide to advance payment bonds in Batam — what they cover, how the reduction mechanism works, who needs one, required documents, and how to apply."
      date="2025"
      category="Surety Bond"
      readTime="6 min"
      breadcrumbs={[
        { label: "Surety Bond Insurance", href: "/en/surety-bond-insurance" },
        { label: "Advance Payment Bond", href: "/en/surety-bond-insurance/advance-payment-bond" },
      ]}
      schema={schema}
    >
      <p>
        Many construction and procurement contracts in Batam include an advance payment provision
        — an upfront sum paid to the contractor to cover mobilisation, initial material
        procurement, or equipment costs. This creates a real financial risk: what happens if the
        contractor disappears or fails to commence work after receiving the funds?
      </p>
      <p>
        An <strong>Advance Payment Bond</strong> (APB) directly addresses this risk, providing
        the project owner with a formal guarantee over the outstanding advance at every stage of
        the project.
      </p>

      <h2>What Is an Advance Payment Bond?</h2>
      <p>
        An advance payment bond is a type of{" "}
        <Link href="/en/surety-bond-insurance">surety bond</Link> that guarantees to the project
        owner (<em>obligee</em>) that if the contractor (<em>principal</em>) fails to perform
        after receiving the advance payment, the insurance company (<em>surety</em>) will
        compensate the project owner for the unrecovered advance.
      </p>

      <h2>How the Reduction Mechanism Works</h2>
      <p>
        One distinguishing feature of an advance payment bond is its proportional reduction. Here
        is how it works in practice:
      </p>
      <div className="not-prose space-y-4 my-6">
        {REDUCTION_STEPS.map((step, i) => (
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
      <p>
        This mechanism ensures the guarantee always reflects the actual outstanding advance,
        giving the project owner accurate protection throughout the project lifecycle.
      </p>

      <h2>How Much Is the Advance Payment?</h2>
      <div className="not-prose overflow-x-auto rounded-2xl border border-[#e2e8f0] my-6">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: "#0a1628" }}>
              <th className="text-left py-3 px-4 text-white font-semibold">Entity Type</th>
              <th className="text-left py-3 px-4 text-white font-semibold">Maximum Advance</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-[#e2e8f0]">
              <td className="py-3 px-4 font-medium" style={{ color: "#0a1628" }}>Small enterprises</td>
              <td className="py-3 px-4 text-[#1a4fa0] font-semibold">30% of contract value</td>
            </tr>
            <tr className="border-t border-[#e2e8f0]" style={{ background: "#faf8f3" }}>
              <td className="py-3 px-4 font-medium" style={{ color: "#0a1628" }}>Non-small / corporate entities</td>
              <td className="py-3 px-4 text-[#1a4fa0] font-semibold">20% of contract value</td>
            </tr>
            <tr className="border-t border-[#e2e8f0]">
              <td className="py-3 px-4 font-medium" style={{ color: "#0a1628" }}>Private contracts (Batam)</td>
              <td className="py-3 px-4 text-[#1a4fa0] font-semibold">10%–30%, by agreement</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>When Is an Advance Payment Bond Required?</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {WHEN_REQUIRED.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-start gap-3 p-4 rounded-xl border border-[#e2e8f0] bg-white">
            <Icon size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#1a4fa0" }} />
            <div>
              <p className="font-semibold text-sm mb-1" style={{ color: "#0a1628" }}>{title}</p>
              <p className="text-sm text-[#475569]">{desc}</p>
            </div>
          </div>
        ))}
      </div>

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
          <h3 className="font-display font-bold text-[#0a1628] m-0">Apply for an Advance Payment Bond in Batam</h3>
        </div>
        <p className="text-[#475569] mb-4">
          Don&apos;t let advance payment bond delays hold up your project&apos;s cash
          disbursement. Our team manages the process from documentation to issuance in 1–3
          business days.
        </p>
        <p className="text-sm mb-4" style={{ color: "#0a1628" }}>
          <strong>WhatsApp:</strong> +62 813-7333-6728 · <strong>Hours:</strong> Mon–Sat, 08:00–17:00 WIB
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="https://wa.me/6281373336728?text=Hello%20Rio%2C%20I%20would%20like%20to%20consult%20about%20an%20Advance%20Payment%20Bond"
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
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Other Surety Bonds Relevant to Your Project</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/en/surety-bond-insurance/bid-bond" className="block p-4 rounded-xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all">
            <p className="font-semibold text-sm" style={{ color: "#0a1628" }}>Bid Bond</p>
            <p className="text-sm text-[#475569]">Pre-tender guarantee</p>
          </a>
          <a href="/en/surety-bond-insurance/performance-bond" className="block p-4 rounded-xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all">
            <p className="font-semibold text-sm" style={{ color: "#0a1628" }}>Performance Bond</p>
            <p className="text-sm text-[#475569]">Contract execution guarantee</p>
          </a>
          <a href="/en/surety-bond-insurance/maintenance-bond" className="block p-4 rounded-xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all">
            <p className="font-semibold text-sm" style={{ color: "#0a1628" }}>Maintenance Bond</p>
            <p className="text-sm text-[#475569]">Post-completion guarantee</p>
          </a>
          <a href="/en/engineering-insurance/contractor-all-risk" className="block p-4 rounded-xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all">
            <p className="font-semibold text-sm" style={{ color: "#0a1628" }}>Contractor All Risk</p>
            <p className="text-sm text-[#475569]">Construction project insurance</p>
          </a>
        </div>
      </div>
    </ArticleLayout>
    </>
  );
}

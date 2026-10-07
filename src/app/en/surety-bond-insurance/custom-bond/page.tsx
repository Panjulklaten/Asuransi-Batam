// app/en/surety-bond-insurance/custom-bond/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";
import {
  Plane,
  Factory,
  Warehouse,
  ClipboardCheck,
  Scale,
  Ship,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Custom Bond Batam – Customs Guarantee for Import & Export",
  description: "Custom bond (customs bond) services in Batam for customs facilities: OB 23/temporary import, KITE, Bonded Zone, and PPJK. No full cash collateral, 3-7 business day issuance. Free consultation with Rio.",
  keywords: [
    "custom bond batam",
    "customs bond batam",
    "ob 23 batam",
    "customs guarantee batam",
    "temporary import batam",
    "customs insurance batam",
    "kite batam",
    "customs bond indonesia",
  ],
  canonical: "https://asuransibatam.com/en/surety-bond-insurance/custom-bond",
  languages: {
    id: "https://asuransibatam.com/asuransi-surety-bond/custom-bond",
    en: "https://asuransibatam.com/en/surety-bond-insurance/custom-bond",
  },
});

const benefits = [
  {
    icon: "✈️",
    title: "OB 23 – Temporary Import",
    desc: "Guarantee for import duty exemption and VAT deferral on goods imported temporarily and re-exported later — exhibitions, seminars, expert equipment, and project needs.",
  },
  {
    icon: "🏭",
    title: "KITE (Import Facility for Export Purposes)",
    desc: "Guarantee for exemption/refund of import duty and VAT on imported raw materials processed into export commodities — yarn, leather, garments, and similar goods.",
  },
  {
    icon: "🏗️",
    title: "Bonded Zone (Kawasan Berikat/EPTE)",
    desc: "Guarantee for companies in Batam's Bonded Zone that move goods out for repair, sorting, or subcontracted processing before returning them to the zone.",
  },
  {
    icon: "📋",
    title: "PPJK (Customs Brokerage License)",
    desc: "Mandatory guarantee for Customs Brokerage Service Providers (PPJK) to obtain their registration number from the local Customs Office.",
  },
  {
    icon: "⚖️",
    title: "SPKPBM / Notul (Duty Appeal)",
    desc: "Guarantee required as a condition for filing an objection against a Customs Underpayment Notice (SPKPBM) issued by Customs.",
  },
  {
    icon: "🚢",
    title: "Vooruitslag & Onward Transport",
    desc: "Guarantee for early release of goods from the port/customs office with deferred duty, excise, and tax payment — including onward transport between customs offices.",
  },
];

const faqs = [
  {
    q: "What is a Custom Bond and who is involved?",
    a: "A custom bond is a three-party guarantee between the Surety (the insurance company issuing the bond), the Principal (importer/exporter/PPJK), and the Obligee (the Directorate General of Customs and Excise). If the Principal fails to meet its customs obligations, the Surety pays the indemnity to Customs directly — the Principal does not need to deposit cash upfront.",
  },
  {
    q: "What is the difference between Custom Bond and OB 23?",
    a: "Custom Bond is the general term for all types of customs guarantees issued by insurance companies. OB 23 (Ordonansi Bea Article 23) is just one specific facility within it, covering temporary imports — goods brought in for a specific purpose (exhibitions, projects, expert equipment) that must be re-exported within a set period.",
  },
  {
    q: "Can Custom Bond fully replace a Bank Guarantee?",
    a: "Yes, and that is its main advantage. Indonesia's Customs Law recognizes insurance company guarantees (Custom Bond) as equivalent to Bank Guarantees and cash deposits for customs purposes. Unlike a bank guarantee, Custom Bond generally does not require a 100% cash deposit, keeping company liquidity intact.",
  },
  {
    q: "How long is a Custom Bond valid?",
    a: "Validity follows the duration of the customs facility granted (for example, the temporary import period), plus a buffer for administrative processing. If the facility is extended, the Custom Bond must be extended at the same time to avoid a coverage gap.",
  },
  {
    q: "What documents are most often rejected by Customs during application?",
    a: "The most common issues are an unissued Customs facility decree (SKEP), unaudited financial statements for large guarantee values, and an Indemnity Agreement (SPGR) that has not been notarized. Prepare these three documents early to avoid delays.",
  },
  {
    q: "What happens if a company fails to re-export temporarily imported goods (OB 23)?",
    a: "Customs will collect the import duty and VAT that had been exempted from the Principal. If the Principal does not pay, Customs claims the Custom Bond from the guaranteeing insurance company for the guaranteed value. The Surety then pursues recovery from the Principal under the signed Indemnity Agreement.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Bond Batam",
  description:
    "Custom bond (customs bond) issuance services in Batam for customs facilities: OB 23/temporary import, KITE, Bonded Zone, PPJK, and SPKPBM appeals.",
  provider: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam – Rio",
    telephone: "+6281373336728",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Batam",
      addressRegion: "Kepulauan Riau",
      addressCountry: "ID",
    },
  },
  areaServed: { "@type": "City", name: "Batam" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Custom Bond Facility Types",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "OB 23 / Temporary Import" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "KITE" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bonded Zone" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "PPJK" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function CustomBondENPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ProductPageLayout
        cluster="surety"
        title="Custom Bond Batam"
        subtitle="Customs Guarantee for Import & Export"
        description="As a Free Trade Zone (FTZ) city, import-export activity in Batam is intense — and nearly every customs facility requires a guarantee. Custom bond lets your company secure OB 23, KITE, or Bonded Zone facilities without locking up cash as collateral the way a bank guarantee does."
        benefits={benefits}
        faqs={faqs}
        breadcrumbs={[
          { label: "Surety Bond Insurance", href: "/en/surety-bond-insurance" },
          { label: "Custom Bond", href: "/en/surety-bond-insurance/custom-bond" },
        ]}
        schema={schema}
      >
        {/* ── What Is Custom Bond ── */}
        <div className="mb-16 max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-[#0a1628] mb-4 text-center">
            What Is a Custom Bond?
          </h2>
          <p className="text-[#374151] leading-relaxed mb-4">
            A <strong>custom bond</strong> (customs bond) is a type of guarantee issued by an
            OJK-licensed general insurance company on behalf of the guaranteed party
            (<em>Principal</em>) — typically an importer, exporter, or customs broker (PPJK) — to
            the Directorate General of Customs and Excise (<em>Obligee</em>). It is governed by
            Law No. 10 of 1995 as amended by Law No. 17 of 2006 on Customs, and Ministry of
            Finance Regulation No. 259/PMK.04/2010 on Customs Guarantees.
          </p>
          <p className="text-[#374151] leading-relaxed">
            If the Principal fails to meet its obligations under a granted customs facility — for
            example, failing to re-export temporarily imported goods on time — Customs can claim
            the custom bond directly without first pursuing the Principal. The insurance company
            (<em>Surety</em>) that pays the indemnity then seeks recovery from the Principal under
            the Indemnity Agreement (SPGR) signed at the outset.
          </p>

          {/* Case example */}
          <div className="mt-8 bg-white border-l-4 border-[#c9a84c] rounded-r-2xl p-6 shadow-sm">
            <p className="font-display font-bold text-[#0a1628] mb-2 text-sm uppercase tracking-wide">
              Case Example
            </p>
            <p className="text-[#374151] leading-relaxed text-sm">
              An industrial exhibition organizer in Batam imports display equipment worth{" "}
              <strong>IDR 2 billion</strong> from Singapore for a two-week trade show. Since the
              goods will be taken back out of the country, the company applies for the{" "}
              <strong>OB 23 (Temporary Import)</strong> facility to avoid paying full import duty
              upfront. Customs requires a guarantee equal to the potential duty and VAT exempted.
              Instead of depositing cash or tying up a bank credit line, the company issues a
              custom bond for that amount — keeping working capital free for other exhibition needs.
            </p>
            <p className="text-[#475569] mt-3 text-xs leading-relaxed">
              Once the goods are re-exported on schedule and proven with an export declaration
              (PEB), the custom bond is closed with no claim ever triggered.
            </p>
          </div>
        </div>

        {/* ── Custom Bond vs Bank Guarantee ── */}
        <div className="mb-16 max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">
            Custom Bond vs Bank Guarantee
          </h2>
          <p className="text-center text-[#475569] mb-8 max-w-2xl mx-auto">
            Both are recognized by Customs — but the impact on company finances is very different.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-[#c9a84c]/40 bg-[#faf8f3] p-6">
              <h3 className="font-display font-bold text-[#0a1628] mb-3 flex items-center gap-2">
                <span className="text-xl">✅</span> Custom Bond (Insurance)
              </h3>
              <ul className="space-y-2 text-sm text-[#374151]">
                <li>• Generally no 100% cash collateral required</li>
                <li>• Does not tie up your bank credit line</li>
                <li>• Premium is far lighter than the cost of tied-up bank collateral</li>
                <li>• Relatively fast issuance, 3–7 business days</li>
                <li>• Accepted at every Customs Office in Indonesia</li>
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-[#e2e8f0] bg-white p-6">
              <h3 className="font-display font-bold text-[#0a1628] mb-3 flex items-center gap-2">
                <span className="text-xl">🏦</span> Bank Guarantee
              </h3>
              <ul className="space-y-2 text-sm text-[#475569]">
                <li>• Usually requires cash/deposit collateral up to 100%</li>
                <li>• Locks up your company's credit facility with the bank</li>
                <li>• Funds remain tied up for the entire guarantee period</li>
                <li>• Relatively slower due to bank credit analysis</li>
                <li>• Must be managed separately from working capital loans</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Required Documents ── */}
        <div className="mb-16 max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">
            Documents Required for a Custom Bond Application
          </h2>
          <p className="text-center text-[#475569] mb-8">
            Prepare these documents in advance to avoid delays in issuance.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: ClipboardCheck, text: "Custom Bond issuance application letter" },
              { icon: Factory, text: "Company profile & legal documents (deed, NIB, tax ID)" },
              { icon: Scale, text: "Financial statements for the last 2 years, ideally audited" },
              { icon: Warehouse, text: "Bank statements for the last 3 months (newly established companies)" },
              { icon: Ship, text: "SKEP (facility decree) from Customs" },
              { icon: Plane, text: "Notarized Indemnity Agreement (SPGR)" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-[#f0f7ff] border border-[#dbeafe]"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#1a4fa0] shrink-0">
                  <item.icon className="w-4 h-4 text-white" strokeWidth={2} />
                </span>
                <span className="text-sm text-[#0a1628] leading-relaxed pt-1">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Issuance Process ── */}
        <div className="mb-16 max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-8 text-center">
            Custom Bond Issuance Process
          </h2>
          <ol className="space-y-5">
            {[
              { title: "Apply for a facility with Customs", desc: "The Principal applies for an import/export facility (OB 23, KITE, etc.) with the Directorate General of Customs and Excise." },
              { title: "Receive the facility decree (SKEP)", desc: "Customs issues a decree granting the facility along with the required guarantee value." },
              { title: "Apply for Custom Bond issuance", desc: "The Principal applies to the insurance company, attaching the SKEP and other supporting documents." },
              { title: "Custom Bond certificate is issued", desc: "The Surety issues the guarantee certificate and signs the Indemnity Agreement together with the Principal." },
              { title: "Submit to Customs", desc: "The Custom Bond certificate is submitted to the Customs Office to obtain a Guarantee Receipt (BPJ), and the goods can then be processed further." },
            ].map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0a1628] text-[#c9a84c] font-display font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <div className="pt-1">
                  <p className="font-semibold text-[#0a1628] text-[15px]">{step.title}</p>
                  <p className="text-sm text-[#475569] mt-1">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* ── Premium Estimate ── */}
        <div className="mb-16 max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">
            Custom Bond Premium Estimate
          </h2>
          <p className="text-center text-[#475569] mb-8 max-w-2xl mx-auto">
            Premium is calculated as a percentage of the guarantee value (not the goods value),
            depending on facility type, tenor, and the company's risk profile.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0] shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0a1628] text-white">
                  <th className="text-left p-4 font-semibold">Guarantee Value</th>
                  <th className="text-left p-4 font-semibold">Facility Type</th>
                  <th className="text-left p-4 font-semibold">Estimated Premium/Year</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e2e8f0]">
                  <td className="p-4 text-[#0a1628] font-medium">IDR 100 million</td>
                  <td className="p-4 text-[#475569]">OB 23 (Temporary Import)</td>
                  <td className="p-4 text-[#1a4fa0] font-semibold">IDR 0.8–2 million</td>
                </tr>
                <tr className="border-b border-[#e2e8f0] bg-[#f8faff]">
                  <td className="p-4 text-[#0a1628] font-medium">IDR 500 million</td>
                  <td className="p-4 text-[#475569]">KITE / Bonded Zone</td>
                  <td className="p-4 text-[#1a4fa0] font-semibold">IDR 4–9 million</td>
                </tr>
                <tr className="border-b border-[#e2e8f0]">
                  <td className="p-4 text-[#0a1628] font-medium">IDR 1 billion</td>
                  <td className="p-4 text-[#475569]">KITE / Bonded Zone</td>
                  <td className="p-4 text-[#1a4fa0] font-semibold">IDR 8–18 million</td>
                </tr>
                <tr>
                  <td className="p-4 text-[#0a1628] font-medium">IDR 150 million (min. Tj. Priok)</td>
                  <td className="p-4 text-[#475569]">PPJK</td>
                  <td className="p-4 text-[#1a4fa0] font-semibold">IDR 1.2–2.7 million</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#475569] mt-3 text-center">
            * General illustrative estimate based on market rates (roughly 0.8%–1.8% of the
            guarantee value per year). Actual premium is determined by underwriters based on
            facility type, tenor, and your company's risk profile — contact us for an official quote.
          </p>
        </div>

        {/* ── Related Links ── */}
        <div>
          <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">
            Other Guarantees Often Needed Alongside Custom Bond
          </h2>
          <p className="text-center text-[#475569] mb-8 max-w-2xl mx-auto">
            Import-export businesses in Batam often need more than one type of guarantee at once.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/en/blog/temporary-import-guarantee-ob23-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
              <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">OB 23 Guide</h3>
              <p className="text-[#475569] text-sm">How to handle temporary import for exhibitions and projects, plus common mistakes to avoid.</p>
            </Link>
            <Link href="/en/surety-bond-insurance" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
              <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Bid Bond</h3>
              <p className="text-[#475569] text-sm">Pre-tender guarantee for government and private procurement.</p>
            </Link>
            <Link href="/en/surety-bond-insurance/advance-payment-bond" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
              <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Advance Payment Bond</h3>
              <p className="text-[#475569] text-sm">Guarantee for down payment recovery in construction and procurement contracts.</p>
            </Link>
            <Link href="/en/marine-insurance/marine-cargo" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
              <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Marine Cargo</h3>
              <p className="text-[#475569] text-sm">Protect the value of your import/export goods against loss or damage in transit.</p>
            </Link>
          </div>
        </div>
      </ProductPageLayout>
    </>
  );
}

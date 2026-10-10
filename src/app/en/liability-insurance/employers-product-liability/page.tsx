// app/en/liability-insurance/employers-product-liability/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Employers' Liability & Product Liability Insurance Batam",
  description:
    "Employers' Liability and Product Liability insurance in Batam for factories, export manufacturers, shipyards and contractors. Complements BPJS Ketenagakerjaan and protects against product claims. Free consultation with Rio.",
  canonical: "https://asuransibatam.com/en/liability-insurance/employers-product-liability",
  languages: {
    id: "https://asuransibatam.com/asuransi-liability/employers-product-liability",
    en: "https://asuransibatam.com/en/liability-insurance/employers-product-liability",
  },
});

const benefits = [
  { icon: "👷", title: "Employers' Liability (EL)", desc: "Compensation claims by employees or their heirs for injury, occupational illness or death arising from the company's legal liability, over and above statutory programme benefits." },
  { icon: "⚖️", title: "Legal Defence Costs", desc: "Lawyers' fees, court costs and defence expenses approved by the insurer, including where the claim is ultimately not proven." },
  { icon: "📦", title: "Product Liability (PL)", desc: "Bodily injury or third-party property damage caused by a product you manufacture, assemble, sell or distribute once it has left your control." },
  { icon: "🌏", title: "Exported Products", desc: "Products made in Batam and shipped overseas can be covered, with territorial limits and the jurisdiction of claims agreed from the start." },
  { icon: "🏪", title: "Vendors Extension", desc: "A vendors extension for distributors, importers or retailers selling your products (optional, subject to the policy wording)." },
  { icon: "🏭", title: "Completes Public Liability", desc: "Public Liability covers third parties at your premises. EL and PL close the two gaps it leaves open: your own workers and products already on the market." },
];

const faqs = [
  {
    q: "What limit and deductible should I choose?",
    a: "There is no standard figure. The limit is usually set against contract values, headcount or sales volume, and buyer or principal requirements, while the deductible reflects how much risk the company can retain itself. We prepare several limit and deductible options to compare before you decide.",
  },
  {
    q: "Can I take Employers' Liability only, or Product Liability only?",
    a: "Yes. They are separate covers, so they can be arranged individually or together. The choice is available in the quote request form, and the final structure follows the insurer's underwriting position.",
  },
  {
    q: "What does Product Liability usually not cover?",
    a: "It generally does not cover damage to the product itself, product recall costs, failure of a product to meet specifications or quality warranties, or contractual liability beyond legal liability. The details follow the policy wording, so always have the exclusions read through.",
  },
  {
    q: "My products are exported to the United States or Canada. Can they be covered?",
    a: "This needs specific attention. Many policies limit or exclude claims brought in US and Canadian courts, or require a territorial extension on different terms and premium. State the export destinations at application so the policy is structured correctly from day one.",
  },
  {
    q: "What are occurrence and claims-made bases, and why do they matter?",
    a: "On an occurrence basis, the policy responds to events that happen during the policy period. On a claims-made basis, what counts is when the claim is made, so the retroactive date is critical and must not be broken at renewal. Which basis applies depends on the insurer and wording, and it is one of the first things I check.",
  },
  {
    q: "How is the premium calculated?",
    a: "EL is generally based on total payroll and job classification, while PL is based on turnover or sales value, product type and destination markets. Claims history, limits and deductibles also matter, so an exact figure can only be given once your business details are complete.",
  },
  {
    q: "What documents should I prepare?",
    a: "Company legal documents (NIB, tax ID, deed), business profile and headcount, annual payroll and proof of BPJS Ketenagakerjaan enrolment (for EL), product description, turnover and sales destinations (for PL), and claims and product-complaint history for the last 3 years.",
  },
  {
    q: "What should I do if a claim is made against me?",
    a: "Report it to us within 3×24 hours of receiving the claim or becoming aware of a potential claim. Do not admit fault or offer a settlement to the claimant before coordinating with the insurer, as this can affect your right to indemnity.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Employers' Liability & Product Liability Insurance Batam",
  description: "Employers' Liability and Product Liability insurance for companies in Batam.",
  provider: { "@type": "InsuranceAgency", name: "Batam Insurance – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};

export default function EmployersProductLiabilityENPage() {
  return (
    <ProductPageLayout
      cluster="liability"
      title="Employers' Liability & Product Liability Insurance Batam"
      subtitle="Liability to Your Employees and for Your Products"
      description="Public Liability protects you from outside claims, but it does not cover claims from your own workers or claims over products already on the market. Employers' Liability and Product Liability close those two gaps."
      benefits={benefits}
      faqs={faqs}
      breadcrumbs={[
        { label: "Liability Insurance", href: "/en/liability-insurance" },
        { label: "Employers & Product Liability", href: "/en/liability-insurance/employers-product-liability" },
      ]}
      schema={schema}
    >
      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Employers&apos; Liability vs Product Liability</h2>
        <p className="text-center text-[#475569] mb-6">Two policies often bought as a pair, but they protect against different things.</p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-sm">
            <thead style={{ background: "#0a1628" }}>
              <tr>
                <th className="text-left text-white font-semibold px-5 py-3"> </th>
                <th className="text-left text-white font-semibold px-5 py-3">Employers&apos; Liability</th>
                <th className="text-left text-white font-semibold px-5 py-3">Product Liability</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr><td className="px-5 py-3.5 font-semibold">Who is claiming against you</td><td className="px-5 py-3.5">Your own employees</td><td className="px-5 py-3.5">Third parties who use or are affected by the product</td></tr>
              <tr><td className="px-5 py-3.5 font-semibold">Trigger</td><td className="px-5 py-3.5">Injury or illness arising from work</td><td className="px-5 py-3.5">Injury or property damage caused by a product once on the market</td></tr>
              <tr><td className="px-5 py-3.5 font-semibold">Premium basis (generally)</td><td className="px-5 py-3.5">Total payroll and job classification</td><td className="px-5 py-3.5">Turnover, product type, destination markets</td></tr>
              <tr><td className="px-5 py-3.5 font-semibold">Typical users in Batam</td><td className="px-5 py-3.5">Shipyards, factories, contractors</td><td className="px-5 py-3.5">Export manufacturers, distributors, importers</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">This table is a general guide. Final cover and exclusions follow each insurer&apos;s policy wording.</p>
      </div>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-3 text-center">What We Settle With You Before Quoting</h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          An Employers&apos; and Product Liability quotation cannot be built from a single figure. The decisions below determine how far the policy really protects you, and are best agreed before the policy is issued:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#475569] leading-relaxed mb-4">
          <li>The limit per occurrence and the annual aggregate, matched to contract values and your exposure.</li>
          <li>The deductible, or the amount of risk you are comfortable retaining.</li>
          <li>The policy basis (occurrence or claims-made) and the retroactive date, especially for Product Liability.</li>
          <li>Territory and jurisdiction: which export destinations are covered and which are excluded.</li>
          <li>Optional extensions, such as vendors for distributors, and any certificate of insurance (COI) required by a buyer or principal.</li>
        </ul>
        <p className="text-[#475569] leading-relaxed">
          Employers&apos; Liability only, Product Liability only, or both can be selected directly in the quote request form.
        </p>
      </div>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Illustrative Scenarios</h2>
        <p className="text-center text-[#475569] mb-6 text-sm">Hypothetical scenarios to aid understanding, not real cases. Claim decisions always follow the policy wording.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">👷 A shipyard worker falls from scaffolding</h3>
            <p className="text-[#475569] text-sm">A subcontractor&apos;s worker is seriously injured during work at height. Besides benefits from the BPJS Ketenagakerjaan programme, the family brings an additional compensation claim against the company. This is where Employers&apos; Liability becomes relevant, including for legal defence costs.</p>
          </div>
          <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">📦 An electronic component is blamed for damage at a buyer&apos;s plant</h3>
            <p className="text-[#475569] text-sm">A component made in Batam and built into the buyer&apos;s product is alleged to have caused property damage and injury to an end user. Product Liability can respond to the compensation and defence costs, while product recall costs generally need separate arrangements.</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Complementary Liability Cover</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/en/liability-insurance/public-liability" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Public Liability</h3>
            <p className="text-[#475569] text-sm">Liability to third parties at your premises and project sites.</p>
          </Link>
          <Link href="/en/personal-accident-insurance/group-employee-pa" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Group Employee PA</h3>
            <p className="text-[#475569] text-sm">Accident benefits for employees, different from the company&apos;s legal liability.</p>
          </Link>
          <Link href="/en/liability-insurance/b3-waste-insurance" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">B3 Waste Insurance</h3>
            <p className="text-[#475569] text-sm">Environmental liability for facilities that generate hazardous waste.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

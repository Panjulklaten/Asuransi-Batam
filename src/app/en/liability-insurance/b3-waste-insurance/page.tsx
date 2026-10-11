// app/en/liability-insurance/b3-waste-insurance/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "B3 Hazardous Waste Insurance Batam – Mandatory for Hazardous Waste Industries",
  description: "B3 hazardous waste insurance in Batam: what it covers, premium estimates, required documents and how to arrange a policy. Meets the PP 22/2021 financial guarantee requirement. +62-813-7333-6728.",
  canonical: "https://asuransibatam.com/en/liability-insurance/b3-waste-insurance",
  languages: {
      id: "https://asuransibatam.com/asuransi-liability/asuransi-limbah-b3",
      en: "https://asuransibatam.com/en/liability-insurance/b3-waste-insurance",
    },
});

const benefits = [
  { icon: "☣️", title: "Soil & Water Pollution", desc: "Clean-up and environmental restoration costs from B3 waste spills or leaks." },
  { icon: "⚖️", title: "Environmental Legal Claims", desc: "Legal costs and damages from claims by the public or government regulators." },
  { icon: "🏥", title: "Third-Party Health Impact", desc: "Compensation for the community affected by health impacts from your waste." },
  { icon: "🌿", title: "Ecosystem Restoration Costs", desc: "Environmental restoration costs, including flora and fauna affected." },
  { icon: "🚒", title: "Emergency Response Costs", desc: "Emergency handling costs when a B3 waste spill or leak occurs." },
  { icon: "📋", title: "Regulatory Fines", desc: "Protection against administrative fines from environmental regulators (subject to policy terms)." },
];

const faqs = [
  { q: "Is B3 waste insurance required by law?", a: "Yes. Government Regulation No. 22 of 2021 on Environmental Protection and Management requires businesses that produce or manage B3 waste to hold a financial guarantee, and insurance is one of the accepted forms." },
  { q: "Which industries in Batam need B3 waste insurance?", a: "Shipyards and maritime industry (Tanjung Uncang and Sekupang) producing paint, oil and solvent waste; electronics and manufacturing plants (Muka Kuning and Batamindo) producing lead and chemical waste; hospitals and large clinics; automotive workshops and metal industries; research and calibration laboratories; and oil & gas companies operating in the Riau Islands." },
  { q: "What documents are needed to apply for a B3 waste insurance policy?", a: "Standard documents: (1) company legal documents — NIB, business licence, NPWP and deed of establishment; (2) environmental documents — environmental approval (AMDAL/UKL-UPL), the technical approval for B3 waste management (Pertek), and last year's B3 waste balance; (3) B3 waste manifests for the last 6 months; (4) facility technical data — waste storage layout, tank capacity, and type and monthly volume of waste; (5) any environmental incident record in the last 3 years. Underwriting generally takes 7–14 working days once the documents are complete." },
  { q: "What is the recommended sum insured and the premium range?", a: "For a mid-sized industry in Batam, a sum insured of at least Rp 5 billion is recommended, with premiums of roughly 0.3%–0.8% per year of the sum insured depending on risk profile. High-risk industries such as shipyards and chemical manufacturing usually need Rp 10–50 billion. We provide a free risk assessment so the limit is neither too low (underinsured) nor excessive." },
  { q: "Does public liability insurance already cover B3 waste contamination?", a: "Generally no. Standard public liability policies exclude pollution and environmental contamination, so B3 waste risk needs a dedicated environmental liability policy." },
  { q: "What should I do if a spill or leak has already happened?", a: "Notify your insurer promptly and document the incident. The full step-by-step procedure, required documents and real cases are in our B3 insurance claim guide linked below." },
];

const policyComparison = [
  { feature: "Soil Pollution", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Water / Marine Pollution", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Third-Party Claims", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Ecosystem Restoration", basic: "❌", standard: "Limited", comprehensive: "✅" },
  { feature: "Emergency Response Costs", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Regulatory Fines", basic: "❌", standard: "❌", comprehensive: "Optional" },
  { feature: "Legal & Litigation Costs", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Third-Party Health Compensation", basic: "Limited", standard: "✅", comprehensive: "✅" },
  { feature: "Transboundary Pollution", basic: "❌", standard: "❌", comprehensive: "Optional" },
  { feature: "Maximum Sum Insured (Rp)", basic: "5 B", standard: "15 B", comprehensive: "As required" },
];

const premiumExamples = [
  { jenis: "Mid-scale electronics factory", limit: "IDR 10 billion", premi: "IDR 30–80 million/year" },
  { jenis: "Metal processing facility", limit: "IDR 20 billion", premi: "IDR 60–160 million/year" },
  { jenis: "Chemical storage warehouse", limit: "IDR 15 billion", premi: "IDR 45–120 million/year" },
  { jenis: "Galvanising / coating facility", limit: "IDR 25 billion", premi: "IDR 75–200 million/year" },
  { jenis: "B3 waste treatment facility", limit: "IDR 50 billion", premi: "IDR 150–400 million/year" },
];

const steps = [
  { title: "Risk assessment", desc: "By an insurance specialist familiar with industrial environmental liability." },
  { title: "Detailed questionnaire", desc: "Covering the types, volumes, and handling methods of the hazardous waste your facility produces." },
  { title: "Sum insured determined", desc: "Based on the scale of your operations and potential remediation costs." },
  { title: "Policy issuance and premium payment", desc: "Once the underwriter has reviewed and accepted the risk." },
  { title: "Policy submitted to the authority", desc: "As formal proof of the financial guarantee required under PP 22/2021." },
];

const schema = {
  "@context": "https://schema.org", "@type": "Service",
  name: "B3 Hazardous Waste Insurance Batam",
  serviceType: "Environmental Liability Insurance",
  areaServed: [{ "@type": "City", name: "Batam" }, { "@type": "AdministrativeArea", name: "Riau Islands" }],
  provider: { "@type": "InsuranceAgency", name: "Batam Insurance – Rio", telephone: "+6281373336728" },
};

export default function B3WasteInsurancePage() {
  return (
    <ProductPageLayout cluster="liability"
      title="B3 Hazardous Waste Insurance Batam"
      subtitle="Legal Obligation & Environmental Protection"
      description="Industries that produce B3 hazardous waste in Batam are legally required to hold financial guarantees in the form of insurance. Protect your business from environmental legal claims that can reach billions of rupiah."
      benefits={benefits} faqs={faqs} policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Liability Insurance", href: "/en/liability-insurance" },
        { label: "B3 Waste Insurance", href: "/en/liability-insurance/b3-waste-insurance" },
      ]}
      schema={schema}
    >
      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">B3 Insurance Premium Estimates for Batam Industry</h2>
        <p className="text-center text-[#475569] mb-8">Premiums depend on the type and volume of waste, incident history, management systems, location and limit. These are illustrations at roughly 0.3%–0.8% of the limit per year.</p>
        <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0a1628] text-white">
                <th className="text-left p-4 font-semibold">Facility Type</th>
                <th className="text-left p-4 font-semibold">Limit</th>
                <th className="text-left p-4 font-semibold">Estimated Premium</th>
              </tr>
            </thead>
            <tbody>
              {premiumExamples.map((row, i) => (
                <tr key={row.jenis} className={i % 2 === 0 ? "border-b border-[#e2e8f0]" : "border-b border-[#e2e8f0] bg-[#f8faff]"}>
                  <td className="p-4 text-[#0a1628] font-medium">{row.jenis}</td>
                  <td className="p-4 text-[#475569]">{row.limit}</td>
                  <td className="p-4 text-[#1a4fa0] font-semibold">{row.premi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#475569] mt-3 text-center">* Actual premiums are set after underwriting based on your facility&apos;s specific risk profile. Free consultation: +62-813-7333-6728.</p>
      </div>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">How to Arrange B3 Hazardous Waste Insurance</h2>
        <p className="text-center text-[#475569] mb-8">Five steps an experienced insurance agent can guide you through.</p>
        <ol className="space-y-3">
          {steps.map((st, i) => (
            <li key={st.title} className="flex items-start gap-4 p-4 rounded-xl bg-[#faf8f3] border border-[#e2e8f0]">
              <span className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0 bg-[#0a1628]">{i + 1}</span>
              <div>
                <p className="font-semibold text-sm text-[#0a1628]">{st.title}</p>
                <p className="text-sm text-[#475569] mt-0.5">{st.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Complete Your Industrial Compliance</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/en/blog/hazardous-waste-insurance-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Is B3 Insurance Mandatory?</h3>
            <p className="text-[#475569] text-sm">What PP 22/2021 requires, the three ways to comply, and the penalties for non-compliance.</p>
          </Link>
          <Link href="/en/hazardous-waste-insurance-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">How to File a B3 Claim</h3>
            <p className="text-[#475569] text-sm">The 7-step claim procedure and real incident cases from Batam industrial estates.</p>
          </Link>
          <Link href="/en/liability-insurance/public-liability" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Public Liability</h3>
            <p className="text-[#475569] text-sm">Broader legal liability cover for risks outside B3 waste.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

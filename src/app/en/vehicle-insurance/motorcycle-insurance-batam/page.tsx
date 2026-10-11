// app/en/vehicle-insurance/motorcycle-insurance-batam/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Motorcycle Insurance Batam – All Risk & TLO | Free Premium Calculator",
  description:
    "Motorcycle insurance in Batam: choose All Risk or TLO, add flood cover, third-party liability and rider PA. Estimate your premium online and talk to Rio: +62 813-7333-6728.",
  canonical: "https://asuransibatam.com/en/vehicle-insurance/motorcycle-insurance-batam",
  languages: {
    id: "https://asuransibatam.com/asuransi-kendaraan/asuransi-motor-batam",
    en: "https://asuransibatam.com/en/vehicle-insurance/motorcycle-insurance-batam",
  },
});

const benefits = [
  { icon: "🛵", title: "All Risk / Comprehensive", desc: "Covers partial or total loss or damage from collision, impact, overturning, skidding, malicious acts, theft and fire, under the standard motor vehicle policy." },
  { icon: "🔒", title: "TLO (Total Loss Only)", desc: "An economical base cover: pays when the motorcycle is stolen or damaged beyond 75% of its value. Minor damage is not covered." },
  { icon: "🌧️", title: "Flood & Storm Extension", desc: "Flood, inundation and storm are generally excluded from the base policy. This extension covers them, relevant for Batam areas that flood in heavy rain." },
  { icon: "⚖️", title: "Third-Party Legal Liability", desc: "An extension for compensation if your motorcycle damages property or injures others, including legal costs approved by the insurer, up to the limit in the policy." },
  { icon: "🧑‍⚕️", title: "Rider & Passenger PA", desc: "Accident benefits for the rider and passenger, complementing cover for the motorcycle itself. Suited to daily commuters to the industrial estates." },
  { icon: "📐", title: "Rates Under OJK Rules", desc: "Premium is the motorcycle's value multiplied by a rate within OJK's lower and upper limits, so you can estimate the cost before you apply." },
];

const faqs = [
  {
    q: "Do all insurers offer All Risk for motorcycles?",
    a: "Not always. For two-wheelers, some insurers offer TLO only, while others offer both TLO and All Risk. Availability is also affected by the age and value of the motorcycle. We therefore check the options available for your motorcycle before presenting a quotation.",
  },
  {
    q: "Why can the insurer's premium differ from the calculator result?",
    a: "The calculator estimates from the lower and upper limits of the OJK rates. The final premium is set by the insurer within that range, and can rise with the motorcycle's age (older motorcycles on a comprehensive policy may carry an additional rate), the extensions chosen, and administration, policy and stamp-duty charges.",
  },
  {
    q: "My motorcycle is still on credit or lease. Does it need insurance?",
    a: "Some financiers require a financed motorcycle to be insured, with specific policy types and clauses. Ask your financier for its requirements before choosing a policy, and state the financing status at application so the policy is set up accordingly.",
  },
  {
    q: "I use my motorcycle for ride-hailing or deliveries. Can it still be insured?",
    a: "It can be applied for, but the use must be declared accurately. The standard policy excludes loss when the vehicle is used for anything other than what is stated in the policy, so a work motorcycle declared as private use risks a rejected claim.",
  },
  {
    q: "What about electric motorcycles?",
    a: "You can enquire, but terms and availability vary between insurers. Tariffs for electric vehicles currently still follow the same OJK rules, while OJK is reviewing adjustments because of special risks such as the battery. Consult us before applying.",
  },
  {
    q: "Are accessories and modifications covered?",
    a: "Additional equipment not stated in the policy is generally not covered. Declare valuable accessories and modifications (exhaust, rims, top box and the like) at application so their value is included, and align the sum insured with the motorcycle's condition after modification.",
  },
  {
    q: "When can a claim be rejected?",
    a: "Among other cases, when the motorcycle is ridden without a suitable licence, under the influence of alcohol or prohibited drugs, on a prohibited road, used for racing or speed trials, or where there is embezzlement, fraud or hypnosis. Malicious acts by people close to the insured or by employees are also excluded. Details follow the policy wording.",
  },
  {
    q: "How soon must I report an incident?",
    a: "The standard policy generally requires notice to the insurer within 5 calendar days of the event, and some insurers ask for sooner. For theft, make a police report as soon as possible and contact us so the claim documents are prepared from the start.",
  },
  {
    q: "Is there an excess (deductible) I must bear?",
    a: "Yes. Approved claims are generally subject to an excess stated in the policy and deducted from the payout. The amount follows OJK rules and the insurer's policy, so ask to see it before you pay the premium.",
  },
  {
    q: "Is a survey or photos required before the policy is issued?",
    a: "For motorcycles that have been in use for a long time or are of high value, the insurer may request photos or a survey. Prepare photos of all four sides, chassis and engine numbers, and the odometer so approval is not delayed.",
  },
];

const policyComparison = [
  { feature: "Partial damage (scratches, breakage)", basic: "❌ TLO", standard: "✅ All Risk", comprehensive: "✅" },
  { feature: "Total loss (>75%)", basic: "✅ TLO", standard: "✅", comprehensive: "✅" },
  { feature: "Theft / loss", basic: "✅ TLO", standard: "✅", comprehensive: "✅" },
  { feature: "Flood & storm extension", basic: "❌", standard: "Optional", comprehensive: "✅" },
  { feature: "Third-party legal liability", basic: "❌", standard: "Optional", comprehensive: "✅" },
  { feature: "Rider & passenger PA", basic: "❌", standard: "Optional", comprehensive: "✅" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Motorcycle Insurance Batam",
  description: "All Risk and TLO motorcycle insurance in Batam with premium estimates based on OJK rates.",
  provider: { "@type": "InsuranceAgency", name: "Batam Insurance – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};

const card = "block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover";

export default function MotorcycleInsuranceBatamPage() {
  return (
    <ProductPageLayout
      cluster="vehicle"
      title="Motorcycle Insurance Batam"
      subtitle="All Risk & TLO Cover for Daily, Sport and Work Motorcycles"
      description="Motorcycles are the main vehicle for many Batam residents, from industrial-estate commuters to delivery riders. One theft at a car park or one accident can wipe out months of savings. Choose All Risk or TLO to match your motorcycle's value and use, then estimate the premium before you apply."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Vehicle Insurance", href: "/en/vehicle-insurance" },
        { label: "Motorcycle Insurance Batam", href: "/en/vehicle-insurance/motorcycle-insurance-batam" },
      ]}
      schema={schema}
    >
      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">OJK Motorcycle Premium Rates (Region 1 – Batam)</h2>
        <p className="text-center text-[#475569] mb-6">The base premium is the motorcycle&apos;s value multiplied by an annual rate. For motorcycles, OJK sets a single category for all price ranges.</p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-sm">
            <thead style={{ background: "#0a1628" }}>
              <tr>
                <th className="text-left text-white font-semibold px-5 py-3">Cover type</th>
                <th className="text-left text-white font-semibold px-5 py-3">Annual rate</th>
                <th className="text-left text-white font-semibold px-5 py-3">Rp 25 million bike</th>
                <th className="text-left text-white font-semibold px-5 py-3">Rp 45 million bike</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr><td className="px-5 py-3.5 font-semibold">All Risk (comprehensive)</td><td className="px-5 py-3.5">3.18% – 3.50%</td><td className="px-5 py-3.5">Rp 795,000 – 875,000</td><td className="px-5 py-3.5">Rp 1,431,000 – 1,575,000</td></tr>
              <tr><td className="px-5 py-3.5 font-semibold">TLO (theft &amp; total loss)</td><td className="px-5 py-3.5">1.76% – 2.11%</td><td className="px-5 py-3.5">Rp 440,000 – 527,500</td><td className="px-5 py-3.5">Rp 792,000 – 949,500</td></tr>
            </tbody>
          </table>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-sm text-[#475569] leading-relaxed mt-4">
          <li>These are the lower and upper limits in OJK Circular SEOJK 6/SEOJK.05/2017. Insurers set the final rate within the range.</li>
          <li>Administration, policy and stamp-duty charges are added on top of the premium. For comprehensive policies, older motorcycles may carry an additional rate.</li>
          <li>OJK is reviewing adjustments to motor vehicle tariffs, so confirm the latest figures when you apply.</li>
        </ul>
        <p className="mt-4 text-[#475569] text-sm">
          Want to calculate your own motorcycle?{" "}
          <Link href="/en/motorcycle-premium-calculator" className="font-semibold text-[#1a4fa0] hover:underline">Open the Motorcycle Premium Calculator</Link>.
        </p>
      </div>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Choose Cover to Match Your Motorcycle</h2>
        <p className="text-center text-[#475569] mb-6">Not every motorcycle needs the same protection. These are the considerations we usually raise.</p>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-[#0a1628] mb-2">🛵 Daily scooters &amp; commuters</h3>
            <p className="text-sm text-[#475569]">For a moderately valued bike ridden to the industrial estates, TLO is often enough for the biggest risk, which is theft. Choose All Risk if the bike is new or you want minor damage covered as well.</p>
          </div>
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-[#0a1628] mb-2">🏍️ Sport &amp; big bikes</h3>
            <p className="text-sm text-[#475569]">Higher value and a greater risk of skidding or theft make All Risk more sensible. Availability of All Risk for particular models differs between insurers, so check early.</p>
          </div>
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-[#0a1628] mb-2">🔧 Modified motorcycles</h3>
            <p className="text-sm text-[#475569]">Accessories not stated in the policy are generally not covered. Declare the exhaust, rims and other valuable equipment, and align the sum insured with the bike&apos;s condition after modification.</p>
          </div>
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-[#0a1628] mb-2">📦 Work &amp; delivery motorcycles</h3>
            <p className="text-sm text-[#475569]">Motorcycles used for deliveries or ride-hailing must be declared according to their actual use. Use that differs from the policy can be excluded at claim time.</p>
          </div>
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-[#0a1628] mb-2">⚡ Electric motorcycles</h3>
            <p className="text-sm text-[#475569]">They can be applied for, but terms and availability vary. Rates still follow the current OJK rules while a dedicated electric vehicle tariff is under review.</p>
          </div>
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-[#0a1628] mb-2">💳 Financed motorcycles</h3>
            <p className="text-sm text-[#475569]">Some financiers require insurance with particular clauses. State the financing status at application so the policy is set up to meet their requirements.</p>
          </div>
        </div>
      </div>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">What Is and Is Not Covered</h2>
        <p className="text-center text-[#475569] mb-6">A general picture of the standard motor vehicle policy. Final details follow the insurer&apos;s wording.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-[#e2e8f0]">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-3">✅ Generally covered</h3>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#475569]">
              <li>Collision, impact, overturning, skidding or falling into a hole (All Risk).</li>
              <li>Malicious acts and theft, including theft with violence.</li>
              <li>Fire, including from lightning and damage from firefighting efforts.</li>
              <li>Incidents while the motorcycle is aboard an official ferry supervised by the Directorate General of Land Transportation (check your route).</li>
              <li>Optional extensions: flood and storm, riot and terrorism, earthquake and tsunami, rider and passenger PA, and third-party legal liability.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl border border-[#e2e8f0]">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-3">⚠️ Generally not covered</h3>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#475569]">
              <li>Riding without a suitable licence, or under the influence of alcohol or prohibited drugs.</li>
              <li>Racing, speed trials, and use other than that stated in the policy.</li>
              <li>Embezzlement, fraud, hypnosis, and malicious acts by people close to the insured or by employees.</li>
              <li>Wear and tear, and tyres or rims damaged without damage to other parts, except from certain perils.</li>
              <li>Keys not attached to the motorcycle, and additional equipment not stated in the policy.</li>
              <li>Flood, earthquake and riot if the extension is not taken.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-3 text-center">Riding Conditions in Batam</h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          Many riders in Batam travel busy routes to Muka Kuning, Kabil and Batamindo, park in crowded public areas, and ride through stretches that flood in heavy rain. Those three conditions explain why theft, accidents and flooding are the three risks we most often discuss with motorcycle owners.
        </p>
        <p className="text-[#475569] leading-relaxed">
          If you often take your motorcycle between islands on ferries, ask whether your route and type of vessel fall within the policy cover before you travel.
        </p>
      </div>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-4 text-center">How to Apply</h2>
        <ol className="space-y-3">
          {[
            ["Estimate the premium", "Use the calculator to see the range for All Risk and TLO."],
            ["Send your motorcycle details", "Through the Request a Quote button: make and model, year, price and type of use."],
            ["Prepare documents", "ID card, registration (STNK), and photos of all four sides, chassis and engine numbers and the odometer. Add a list of accessories if any."],
            ["Assessment and quotation", "The insurer assesses your application and may ask for more photos or a survey. We then send you the options and figures."],
            ["Pay and policy issued", "Once approved and the premium is paid, the policy is issued and cover runs from the date in the policy."],
          ].map(([t, d], i) => (
            <li key={t} className="flex gap-4 p-4 rounded-xl border border-[#e2e8f0] bg-[#f8faff]">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0a1628] text-white font-bold flex items-center justify-center text-sm">{i + 1}</span>
              <div><div className="font-semibold text-[#0a1628]">{t}</div><div className="text-sm text-[#475569]">{d}</div></div>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Read &amp; Complement</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/en/motorcycle-premium-calculator" className={card}>
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Motorcycle Premium Calculator</h3>
            <p className="text-[#475569] text-sm">Estimate All Risk and TLO premiums from your motorcycle&apos;s price.</p>
          </Link>
          <Link href="/en/blog/all-risk-vs-tlo-car-insurance" className={card}>
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">All Risk vs TLO</h3>
            <p className="text-[#475569] text-sm">Understand the difference before choosing your cover.</p>
          </Link>
          <Link href="/en/personal-accident-insurance/individual-family-pa" className={card}>
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Individual &amp; Family PA</h3>
            <p className="text-[#475569] text-sm">Protect the rider, not just the motorcycle.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

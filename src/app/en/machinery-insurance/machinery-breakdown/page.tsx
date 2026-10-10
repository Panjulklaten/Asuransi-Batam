// app/en/machinery-insurance/machinery-breakdown/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Machinery Breakdown Insurance Batam – Factory & Production Machinery",
  description:
    "Machinery Breakdown (MB) insurance in Batam for production machinery, generators, compressors and factory plant. Cover against sudden damage, electrical failure and operator error. Free consultation with Rio.",
  canonical: "https://asuransibatam.com/en/machinery-insurance/machinery-breakdown",
  languages: {
    id: "https://asuransibatam.com/asuransi-machinery/machinery-breakdown",
    en: "https://asuransibatam.com/en/machinery-insurance/machinery-breakdown",
  },
});

const benefits = [
  { icon: "⚙️", title: "Sudden Machinery Damage", desc: "Sudden and unforeseen physical damage to installed machinery, whether it is operating, idle, or being cleaned or maintained." },
  { icon: "🔌", title: "Electrical Failure", desc: "Damage from short circuit, overcurrent or faults in the machine's electrical and control systems." },
  { icon: "🧑‍🔧", title: "Operator & Maintenance Error", desc: "Sudden damage caused by negligence, lack of skill, or mistakes by operators and technicians." },
  { icon: "🛠️", title: "Defective Design, Material & Workmanship", desc: "Damage arising from design faults, defective material or workmanship, as long as it is not covered by the manufacturer's warranty." },
  { icon: "🌀", title: "Centrifugal Force & Foreign Objects", desc: "Damage from excessive centrifugal force, and from foreign objects entering the machine." },
  { icon: "📉", title: "Business Interruption (Optional)", desc: "An extension for loss of income while the machine is down, important for production lines that cannot stop for long." },
];

const faqs = [
  {
    q: "What is Machinery Breakdown insurance?",
    a: "Machinery Breakdown (MB) covers sudden and unforeseen physical damage to machinery that is installed and ready to operate, for example from short circuit, operator error, defective material or centrifugal force. MB focuses on damage arising from within the machine itself.",
  },
  {
    q: "How is MB different from fire or property insurance?",
    a: "Machinery damaged by fire, lightning, explosion or flood is generally covered under a property or factory fire policy, not MB. MB covers sudden damage from internal causes such as mechanical and electrical failure. The two complement each other, and I usually recommend reviewing them together.",
  },
  {
    q: "What is usually not covered?",
    a: "Normal wear and tear, rust and corrosion, gradual deterioration, consumables (belts, filters, oil), damage covered by the manufacturer's or supplier's warranty, and damage from poor maintenance that is continually neglected. Machinery still being installed and tested usually falls under Erection All Risk, not MB.",
  },
  {
    q: "Can older machinery be insured?",
    a: "Yes, but insurers pay attention to age and condition. Machinery that has been running for a long time may be asked for a survey, maintenance history, and a different valuation basis or a higher deductible. The tidier your service records, the easier the acceptance process.",
  },
  {
    q: "What sum insured should be used?",
    a: "Replacement cost for new machinery is generally recommended to avoid underinsurance. For imported machinery, consider freight, import duty and installation costs, since they affect the real cost of replacement.",
  },
  {
    q: "How is the premium calculated?",
    a: "It depends on the type and value of the machinery, its age, condition and maintenance history, breakdown history, the deductible, and whether a Business Interruption extension is taken. With this many variables, an exact figure can only be given once the machinery details are complete.",
  },
  {
    q: "What about heavy equipment, electronic equipment and boilers?",
    a: "Mobile heavy equipment such as excavators and cranes have their own pages (Heavy Equipment and Crane Insurance). Electronic equipment (EEI) and boilers and pressure vessels are usually arranged as separate cover. All of them can be submitted through the online SPPA form by choosing Engineering.",
  },
  {
    q: "What should I do if a machine breaks down?",
    a: "Secure the area, stop the machine and document it with photos or video. Keep the damaged parts and do not dismantle or repair before the insurer's survey unless there is a safety risk. Contact us at 0813-7333-6728 to report the claim within 3×24 hours.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Machinery Breakdown Insurance Batam",
  description: "Machinery Breakdown insurance for factory and production machinery in Batam.",
  provider: { "@type": "InsuranceAgency", name: "Batam Insurance – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};

export default function MachineryBreakdownENPage() {
  return (
    <ProductPageLayout
      cluster="machinery"
      title="Machinery Breakdown Insurance Batam"
      subtitle="Protection for Factory & Production Machinery"
      description="One key machine failing can halt an entire production line, and specialist parts often have to be ordered from overseas. Machinery Breakdown pays for repair or replacement after sudden damage to machinery that is already installed."
      benefits={benefits}
      faqs={faqs}
      breadcrumbs={[
        { label: "Machinery Insurance", href: "/en/machinery-insurance" },
        { label: "Machinery Breakdown", href: "/en/machinery-insurance/machinery-breakdown" },
      ]}
      schema={schema}
    >
      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">MB or Another Policy? The Differences</h2>
        <p className="text-center text-[#475569] mb-6">Machinery can fall under several policies. What differs is the cause of damage and the stage of the machine&apos;s life.</p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-sm">
            <thead style={{ background: "#0a1628" }}>
              <tr>
                <th className="text-left text-white font-semibold px-5 py-3">Policy</th>
                <th className="text-left text-white font-semibold px-5 py-3">Protection focus</th>
                <th className="text-left text-white font-semibold px-5 py-3">Suited to</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr><td className="px-5 py-3.5 font-semibold">Machinery Breakdown</td><td className="px-5 py-3.5">Sudden internal damage (mechanical, electrical) once the machine is ready to operate</td><td className="px-5 py-3.5">Production machinery, generators, compressors, pumps</td></tr>
              <tr><td className="px-5 py-3.5 font-semibold">Property / factory fire</td><td className="px-5 py-3.5">Fire, lightning, explosion and natural perils to buildings and contents</td><td className="px-5 py-3.5">Factories and warehouses</td></tr>
              <tr><td className="px-5 py-3.5 font-semibold">Erection All Risk (EAR)</td><td className="px-5 py-3.5">Installation and testing of new machinery</td><td className="px-5 py-3.5">Machinery installation projects</td></tr>
              <tr><td className="px-5 py-3.5 font-semibold">Heavy Equipment / Crane</td><td className="px-5 py-3.5">Mobile project equipment, plus third-party liability</td><td className="px-5 py-3.5">Excavators, cranes, dump trucks</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">This table is a general guide. Final cover and exclusions follow each insurer&apos;s policy wording.</p>
      </div>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-3 text-center">Why It Matters for Industry in Batam</h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          Batam&apos;s industrial estates such as Batamindo, Muka Kuning and Kabil host electronics plants, component manufacturers and fabricators whose machines run almost non-stop: SMT lines, plastic injection moulding, CNC, generators and compressors. With machinery like this, the biggest cost is often not the repair itself but the production downtime while waiting for parts.
        </p>
        <p className="text-[#475569] leading-relaxed">
          Many specialist components must be brought in from overseas, so lead times can be long. For critical machines I usually suggest discussing a Business Interruption extension together with the MB policy, rather than after a breakdown has happened.
        </p>
      </div>

      <div className="mb-12 max-w-4xl mx-auto p-5 rounded-xl border" style={{ background: "#f0d08015", borderColor: "#c9a84c40" }}>
        <p className="text-sm text-gray-700 leading-relaxed">
          <strong>Want to apply right away?</strong> Besides the Request a Quote button, you can complete the{" "}
          <Link href="/form-sppa" className="font-semibold text-[#1a4fa0] hover:underline">online SPPA form</Link>{" "}
          (Indonesian) by choosing Engineering, then Machinery Breakdown. Submitting the form does not mean the risk is automatically accepted or bound.
        </p>
      </div>

      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Complementary Cover for Industrial Assets</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/en/property-insurance/factory-industrial-insurance-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Factory &amp; Industrial Insurance</h3>
            <p className="text-[#475569] text-sm">Protection for factory buildings and contents against fire and natural perils.</p>
          </Link>
          <Link href="/en/engineering-insurance/erection-all-risk" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Erection All Risk (EAR)</h3>
            <p className="text-[#475569] text-sm">For installation and commissioning of new machinery, before MB applies.</p>
          </Link>
          <Link href="/en/machinery-insurance/heavy-equipment-insurance" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Heavy Equipment Insurance</h3>
            <p className="text-[#475569] text-sm">For mobile project equipment, not permanently installed factory machinery.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

// app/en/machinery-insurance/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";
import Link from "next/link";

export const metadata: Metadata = generateSEO({
  title: "Machinery Insurance Batam – Protect Machines & Heavy Equipment from Breakdown",
  description: "Machinery breakdown = operations halt = major losses. Machinery insurance in Batam for excavators, cranes, and industrial machinery. Easy claims, competitive premiums. Free consultation with Rio: +62-813-7333-6728.",
  canonical: "https://asuransibatam.com/en/machinery-insurance",
  languages: {
      id: "https://asuransibatam.com/asuransi-machinery",
      en: "https://asuransibatam.com/en/machinery-insurance",
    },
});

const benefits = [
  { icon: "⚙️", title: "Machinery Breakdown (MB)", desc: "Machinery Breakdown – protection against machine failure from operational faults." },
  { icon: "💥", title: "Operational Accidents", desc: "Damage from impact, falling, or operator error." },
  { icon: "⚡", title: "Electrical Damage", desc: "Power surges, short circuits, and electrical damage." },
  { icon: "🏗️", title: "During Construction/Installation", desc: "Protection while machinery is being installed or commissioned." },
  { icon: "💼", title: "Spare Parts Freight Costs", desc: "Emergency shipping costs for spare parts to speed up repairs." },
  { icon: "📉", title: "Loss of Profit (LoP)", desc: "Compensation for lost profits when machinery is out of service." },
];

const faqs = [
  {
    q: "What is Machinery Breakdown Insurance?",
    a: "Insurance that covers sudden and unforeseen damage to industrial machinery and equipment, including mechanical and electrical failures.",
  },
  {
    q: "Is normal wear and tear covered?",
    a: "No. Machinery insurance covers sudden damage, not normal wear, corrosion, or gradual deterioration.",
  },
  {
    q: "What is Equipment All Risk?",
    a: "Equipment All Risk (EAR) covers all risks of physical damage to heavy equipment during a project, including accidents and natural disasters.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Machinery Insurance Batam",
  provider: {
    "@type": "InsuranceAgency",
    name: "Batam Insurance – Rio",
    telephone: "+6281373336728",
  },
};

export default function MachineryInsurancePage() {
  return (
    <ProductPageLayout cluster="machinery"
      title="Machinery Insurance Batam"
      subtitle="Protection for Machines & Industrial Equipment"
      description="Machinery and heavy equipment are the heartbeat of your business operations. With the right machinery insurance, downtime from breakdowns no longer threatens your business continuity."
      benefits={benefits}
      faqs={faqs}
      breadcrumbs={[{ label: "Machinery Insurance", href: "/en/machinery-insurance" }]}
      schema={schema}
    >
      <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-6 text-center">Our Machinery Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {[
          {
            title: "Heavy Equipment Insurance",
            desc: "Protection for excavators, bulldozers, and construction heavy equipment.",
            href: "/en/machinery-insurance/heavy-equipment-insurance",
          },
          {
            title: "Crane Insurance",
            desc: "Comprehensive protection for cranes and lifting equipment.",
            href: "/en/machinery-insurance/crane-insurance",
          },
        ].map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="group p-6 bg-white rounded-2xl border-2 border-[#e2e8f0] hover:border-[#c9a84c]/50 hover:shadow-lg transition-all"
          >
            <h3 className="font-display font-bold text-lg text-[#0a1628] group-hover:text-[#1a4fa0] mb-2">{p.title}</h3>
            <p className="text-[#475569] text-sm">{p.desc}</p>
          </Link>
        ))}
      </div>
    </ProductPageLayout>
  );
}

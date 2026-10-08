// app/en/vehicle-insurance/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";
import Link from "next/link";

export const metadata: Metadata = generateSEO({
  title: "Vehicle Insurance Batam – All Risk & TLO for Cars, Dump Trucks & Commercial Vehicles",
  description: "Looking for trusted vehicle insurance in Batam? We provide All Risk and TLO protection for private cars, dump trucks, and commercial fleets. Competitive premiums, fast claims. Calculate online or contact Rio: +62-813-7333-6728.",
  canonical: "https://asuransibatam.com/en/vehicle-insurance",
  languages: {
      id: "https://asuransibatam.com/asuransi-kendaraan",
      en: "https://asuransibatam.com/en/vehicle-insurance",
    },
});

const benefits = [
  { icon: "🚗", title: "Total & Partial Loss", desc: "All Risk covers minor, moderate, and total damage from accidents." },
  { icon: "💥", title: "Collision & Impact", desc: "Damage from collisions, impacts, or skidding on the road." },
  { icon: "🔥", title: "Vehicle Fire", desc: "Losses from fire, explosion, and lightning strikes on vehicles." },
  { icon: "🚨", title: "Vehicle Theft", desc: "Compensation if the vehicle is stolen (TLO & All Risk)." },
  { icon: "🌊", title: "Natural Disasters", desc: "Damage from floods, typhoons, and other natural disasters." },
  { icon: "👥", title: "Third-Party Liability", desc: "Repair costs for third-party vehicles/property damaged by your vehicle." },
];

const faqs = [
  {
    q: "What is the difference between All Risk and TLO?",
    a: "All Risk (Comprehensive) covers all damage including minor damage. TLO (Total Loss Only) only covers if the vehicle is damaged more than 75% or stolen. TLO premiums are cheaper.",
  },
  {
    q: "Can vehicles from outside Batam be insured here?",
    a: "Yes, we can arrange vehicle insurance for the Kepulauan Riau region and surrounding areas.",
  },
  {
    q: "Can modified vehicles be insured?",
    a: "Yes, but the modification must be declared when the policy is issued. The sum insured is adjusted accordingly.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Vehicle Insurance Batam",
  description: "All Risk and TLO car and commercial vehicle insurance in Batam",
  provider: {
    "@type": "InsuranceAgency",
    name: "Batam Insurance – Rio",
    telephone: "+6281373336728",
  },
  areaServed: { "@type": "City", name: "Batam" },
};

export default function VehicleInsurancePage() {
  return (
    <ProductPageLayout cluster="vehicle"
      title="Vehicle Insurance Batam"
      subtitle="All Risk & TLO for All Vehicle Types"
      description="From private cars to dump truck fleets – we provide comprehensive vehicle protection in Batam. All Risk, TLO, and special packages for commercial vehicles."
      benefits={benefits}
      faqs={faqs}
      breadcrumbs={[{ label: "Vehicle Insurance", href: "/en/vehicle-insurance" }]}
      schema={schema}
    >
      <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-6 text-center">Our Vehicle Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {[
          {
            title: "Car Insurance Batam",
            desc: "All Risk & TLO for private cars with an online premium calculator.",
            href: "/en/vehicle-insurance/car-insurance-batam",
          },
          {
            title: "Dump Truck Insurance",
            desc: "Protection for dump truck fleets and heavy commercial vehicles.",
            href: "/en/vehicle-insurance/dump-truck-insurance",
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

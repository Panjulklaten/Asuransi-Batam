// app/en/vehicle-insurance/dump-truck-insurance/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Dump Truck Insurance Batam – Heavy & Commercial Fleet Protection",
  description: "Dump truck and heavy commercial vehicle insurance in Batam. All Risk, TLO, off-road and fleet insurance for mining and construction fleets. Competitive premiums. Contact Rio: +62-813-7333-6728.",
  canonical: "https://asuransibatam.com/en/vehicle-insurance/dump-truck-insurance",
  languages: {
    id: "https://asuransibatam.com/asuransi-kendaraan/asuransi-dumptruck",
    en: "https://asuransibatam.com/en/vehicle-insurance/dump-truck-insurance",
  },
});

const benefits = [
  { icon: "🚛", title: "Physical Damage to the Vehicle", desc: "Damage from accidents, collisions, rollovers, getting bogged down, or the uneven terrain of mining and construction roads." },
  { icon: "🔥", title: "Fire & Explosion", desc: "Protection against engine fires, fuel tank explosions, and electrical short circuits that are common on heavy vehicles with high operating hours." },
  { icon: "⚙️", title: "Engine Damage Caused by an Accident", desc: "Optional cover for dump truck engine damage caused directly by an accident — not normal wear and tear or poor maintenance." },
  { icon: "👷", title: "Third-Party Liability", desc: "Compensation for damage to other vehicles, property, or injuries to third parties caused by your dump truck on public roads." },
  { icon: "🏗️", title: "Off-Road Coverage", desc: "Dedicated off-road policy for dump trucks working in mines, excavation sites, and construction areas that do not use public roads." },
  { icon: "🚑", title: "Driver Personal Accident", desc: "Personal accident and death benefits for dump truck drivers, as part of protecting your fleet's human resources." },
];

const faqs = [
  { q: "Can mining and off-road dump trucks be insured in Batam?", a: "Yes. There is a dedicated Off-Road Vehicle (ORV) or Equipment All Risk policy for dump trucks operating in mines, excavation sites, reclamation areas, and construction projects that do not use public roads. It differs from standard motor vehicle insurance, and the premium is calculated from the unit value, the type of load, and operating intensity." },
  { q: "What is the estimated premium for dump truck insurance in Batam?", a: "Dump truck premiums are higher than for private cars because operating risk is greater. For an on-road All Risk policy on a heavy vehicle, the premium typically ranges from 2.0% to 4.0% of the vehicle price per year. For example, a Hino 260 dump truck worth Rp 800 million would start at roughly Rp 16–32 million per year for All Risk. For off-road/ORV policies, the premium is based on the unit's replacement value." },
  { q: "Can I insure an entire dump truck fleet at once (fleet insurance)?", a: "Yes. Fleet insurance is available for owners of 5 or more units, with a significant premium discount — up to 15–25% compared with individual policies. A fleet policy is also easier to manage because all units sit under one policy with the same renewal date. Contact us for a dedicated fleet quote." },
  { q: "What is the difference between All Risk and TLO for a dump truck?", a: "All Risk covers all damage, from scratches and minor dents to total loss. TLO (Total Loss Only) pays only when the vehicle is damaged by more than 75% of the sum insured or is stolen. For actively working dump trucks at high-risk sites, All Risk is strongly recommended even though the premium is higher." },
  { q: "What should I do if my dump truck is involved in an accident that injures someone?", a: "Secure the location immediately, call the police to file a report, and document the incident. Report to us within 3×24 hours. Do not offer compensation directly to victims without coordinating with our team first — this matters so that the Third Party Liability (TPL) claim follows the policy procedure." },
  { q: "Is the cargo inside the dump truck also covered?", a: "Cargo is a separate cover from vehicle insurance. A standard dump truck policy protects the unit only, not the load. To protect soil, sand, stone, or other materials you need separate Marine Cargo or Inland Transit insurance. We can arrange both together." },
];

const policyComparison = [
  { feature: "Physical Damage (All Risk)", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "TLO (Total Loss Only)", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Fire & Explosion", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Third Party Liability (TPL)", basic: "Limited", standard: "✅", comprehensive: "✅" },
  { feature: "Off-Road / Mining Area", basic: "❌", standard: "Optional", comprehensive: "✅" },
  { feature: "Driver Personal Accident", basic: "❌", standard: "Optional", comprehensive: "✅" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dump Truck Insurance Batam",
  description: "Dump truck and heavy commercial vehicle insurance in Batam for mining, construction, and material haulage fleets. All Risk, TLO, off-road, and fleet insurance.",
  provider: { "@type": "InsuranceAgency", name: "Batam Insurance – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};

export default function DumpTruckInsurancePage() {
  return (
    <ProductPageLayout cluster="vehicle"
      title="Dump Truck Insurance Batam"
      subtitle="Heavy & Commercial Fleet Protection"
      description="Your dump truck fleet is a vital asset and a source of business income. In Batam — a city of active reclamation, industrial estate construction, and excavation — dump trucks work in the toughest conditions. A single accident or engine failure left uninsured can halt operations and drain your cash."
      benefits={benefits} faqs={faqs} policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Vehicle Insurance", href: "/en/vehicle-insurance" },
        { label: "Dump Truck Insurance", href: "/en/vehicle-insurance/dump-truck-insurance" },
      ]}
      schema={schema}
    >
      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Estimated Dump Truck Premiums in Batam</h2>
        <p className="text-center text-[#475569] mb-8">A pricing guide for protecting your heavy vehicle fleet.</p>
        <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0a1628] text-white">
                <th className="text-left p-4 font-semibold">Unit Type</th>
                <th className="text-left p-4 font-semibold">Unit Value</th>
                <th className="text-left p-4 font-semibold">TLO Premium / yr</th>
                <th className="text-left p-4 font-semibold">All Risk Premium / yr</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#e2e8f0]">
                <td className="p-4 text-[#0a1628] font-medium">Mitsubishi Colt Diesel dump truck (6-wheel)</td>
                <td className="p-4 text-[#475569]">Rp 350–450 million</td>
                <td className="p-4 text-[#1a4fa0] font-semibold">Rp 3.5–6.7 million</td>
                <td className="p-4 text-[#475569]">Rp 7–18 million</td>
              </tr>
              <tr className="border-b border-[#e2e8f0] bg-[#f8faff]">
                <td className="p-4 text-[#0a1628] font-medium">Hino 260 dump truck (10-wheel)</td>
                <td className="p-4 text-[#475569]">Rp 700–900 million</td>
                <td className="p-4 text-[#1a4fa0] font-semibold">Rp 7–13.5 million</td>
                <td className="p-4 text-[#475569]">Rp 14–36 million</td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="p-4 text-[#0a1628] font-medium">Volvo / Scania articulated dump truck</td>
                <td className="p-4 text-[#475569]">Rp 2.5–4 billion</td>
                <td className="p-4 text-[#1a4fa0] font-semibold">Rp 25–60 million</td>
                <td className="p-4 text-[#475569]">Contact us</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#475569] mt-3 text-center">* Premium estimates are based on on-road rates. Actual premiums depend on vehicle condition, operating area, and claims record. Contact us for a specific quote, including fleet discounts.</p>
      </div>
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Complementary Cover for Mining & Project Operations</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/en/machinery-insurance/heavy-equipment-insurance" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Heavy Equipment Insurance</h3>
            <p className="text-[#475569] text-sm">Protect the excavators and bulldozers that work alongside your dump truck fleet.</p>
          </Link>
          <Link href="/en/liability-insurance/public-liability" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Public Liability</h3>
            <p className="text-[#475569] text-sm">Extend the legal liability cover of your fleet operations beyond the limits of a standard vehicle policy.</p>
          </Link>
          <Link href="/en/blog/mining-heavy-equipment-insurance" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Mining Equipment Insurance Guide</h3>
            <p className="text-[#475569] text-sm">How to protect heavy equipment and haulage fleets in mining and excavation operations.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

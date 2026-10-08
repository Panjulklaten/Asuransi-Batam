// app/en/vehicle-insurance/dump-truck-insurance/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Dump Truck Insurance Batam – Heavy & Commercial Vehicle Protection",
  description: "Dump truck insurance in Batam for heavy commercial vehicles. All Risk and TLO available. Comprehensive protection, fast claims, competitive premiums. Contact Rio!",
  canonical: "https://asuransibatam.com/en/vehicle-insurance/dump-truck-insurance",
  languages: {
      id: "https://asuransibatam.com/asuransi-kendaraan/asuransi-dumptruck",
      en: "https://asuransibatam.com/en/vehicle-insurance/dump-truck-insurance",
    },
});

const benefits = [
  { icon: "🚛", title: "All Risk / Comprehensive", desc: "Complete protection for dump trucks against all types of physical damage, from minor damage during operations to major collisions on haulage routes." },
  { icon: "🔑", title: "TLO (Total Loss Only)", desc: "An economical option covering vehicle theft and total loss above 75% of vehicle value. Suitable for older fleet vehicles." },
  { icon: "💥", title: "Collision & Rollover", desc: "Damage from head-on collisions, impacts, or rollovers that frequently occur in haulage and mining operations." },
  { icon: "🔥", title: "Fire & Explosion", desc: "Losses from fire, fuel tank explosions, and lightning strikes on heavy vehicles." },
  { icon: "👥", title: "Third-Party Liability", desc: "Compensation costs for property damage or third-party injuries caused by your dump truck on public roads." },
  { icon: "🛠️", title: "Fleet Package", desc: "Special package available for multiple dump truck fleets with more competitive premiums and centralised management." },
];

const faqs = [
  { q: "Can dump trucks be insured with All Risk?", a: "Yes, dump trucks can be insured with Comprehensive (All Risk) or TLO (Total Loss Only) policies. All Risk provides broader protection including partial damage." },
  { q: "What is the premium for dump truck insurance?", a: "Premiums depend on vehicle value, usage area, and coverage type. Commercial vehicle premiums generally range from 1.5% to 3.5% of vehicle value per year. Contact us for a specific quote." },
  { q: "Are dump trucks used for mining activities covered?", a: "Yes, but operational area and usage type must be clearly declared when the policy is issued, so coverage can be tailored to the specific risk." },
  { q: "Can an entire dump truck fleet be insured at once?", a: "Yes, we provide fleet packages for 3 or more vehicles with more competitive premiums and simplified administrative management." },
];

const schema = {
  "@context": "https://schema.org", "@type": "Service",
  name: "Dump Truck Insurance Batam",
  provider: { "@type": "InsuranceAgency", name: "Batam Insurance – Rio", telephone: "+6281373336728" },
};

export default function DumpTruckInsurancePage() {
  return (
    <ProductPageLayout cluster="vehicle"
      title="Dump Truck Insurance Batam"
      subtitle="Heavy Commercial Vehicle Protection"
      description="Dump trucks are the backbone of construction and mining operations in Batam. With the right insurance, your fleet is protected from the risks of damage, accidents, and theft — without disrupting your operations."
      benefits={benefits} faqs={faqs}
      breadcrumbs={[
        { label: "Vehicle Insurance", href: "/en/vehicle-insurance" },
        { label: "Dump Truck Insurance", href: "/en/vehicle-insurance/dump-truck-insurance" },
      ]}
      schema={schema}
    />
  );
}

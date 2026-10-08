// app/en/vehicle-insurance/car-insurance-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";
import KalkulatorMobil from "@/components/KalkulatorMobil";

export const metadata: Metadata = generateSEO({
  title: "Trusted Car Insurance Batam – All Risk & TLO | Free Premium Calculator",
  description: "Looking for car insurance in Batam? Choose All Risk or TLO with affordable premiums, easy claims, and authorised repair workshops. Calculate your estimated premium online now — free and instant. Contact Rio: +62-813-7333-6728.",
  canonical: "https://asuransibatam.com/en/vehicle-insurance/car-insurance-batam",
  languages: {
      id: "https://asuransibatam.com/asuransi-kendaraan/asuransi-mobil-batam",
      en: "https://asuransibatam.com/en/vehicle-insurance/car-insurance-batam",
    },
});

const benefits = [
  { icon: "🛡️", title: "All Risk / Comprehensive", desc: "The most complete protection for your vehicle. Covers all physical damage in any condition — from minor scratches in a car park to severe damage from a collision. Ideal for new cars or high-value vehicles that need maximum protection." },
  { icon: "🔑", title: "TLO (Total Loss Only)", desc: "An economical solution for basic vehicle protection. Covers losses from theft and total damage exceeding 75% of vehicle value. Perfect for cars over 5 years old or those with tighter budget constraints." },
  { icon: "🌊", title: "Flood Extension", desc: "Batam is an island region with high rainfall. Flood and water inundation risks can come at any time. With this extension, damage to engines or electrics from submersion is fully covered — highly recommended additional protection." },
  { icon: "👤", title: "Third-Party Liability (TPL)", desc: "If your vehicle causes damage to another vehicle, property, or injures someone, compensation costs are covered by this policy. Protect yourself from unexpected financial claims arising from road incidents." },
  { icon: "🚑", title: "Driver & Passenger Personal Accident", desc: "Protection for life and health isn't just for vehicles. With this benefit, drivers and passengers injured in accidents receive medical cost compensation and death benefits — because human safety is the top priority." },
  { icon: "🔧", title: "Authorised Workshop Network", desc: "Enjoy easy claims with access to hundreds of authorised partner workshops across Indonesia, including in Batam. Transparent, guaranteed repairs with no out-of-pocket costs — just show your policy card and everything is handled." },
];

const faqs = [
  { q: "How much is All Risk car insurance premium in Batam?", a: "Based on OJK regulations, All Risk premiums for Batam (Region 1) range from 1.05% to 3.46% of the insured value per year, depending on vehicle price and type. As an example, a car worth Rp 200 million may have a premium of approximately Rp 2.1 million – Rp 5 million per year. Use the premium calculator on this page for a more accurate estimate for your specific vehicle." },
  { q: "What is OJK's rating region and which region is Batam in?", a: "OJK divides Indonesia into 3 rating regions based on traffic risk levels and vehicle density. Batam is in Region 1 along with Sumatra and surrounding areas. Each region has different base rates — Region 1 generally has lower rates than Region 2 (Java, Madura, Bali), making Batam premiums relatively competitive." },
  { q: "Is a police report required to file a car insurance claim?", a: "Not always. For minor damage like scratches, small dents, or parking damage, most insurers do not require a police report. However, for major damage, collisions involving third parties, or vehicle theft, a police report must be included as a claim document. We will guide you step by step through the claims process." },
  { q: "How long does the car insurance claims process take?", a: "Generally, the claims process is quite swift: vehicle survey within 1–2 business days after the report is submitted, claim approval takes 3–7 business days depending on damage complexity, and workshop repairs are carried out according to the agreed timeframe. We assist in coordinating your claims process from start to finish." },
];

const policyComparison = [
  { feature: "Partial damage (scratches, etc.)", basic: "❌ TLO", standard: "✅ All Risk", comprehensive: "✅ All Risk" },
  { feature: "Total damage (>75%)", basic: "✅ TLO", standard: "✅", comprehensive: "✅" },
  { feature: "Theft / Loss", basic: "✅ TLO", standard: "✅", comprehensive: "✅" },
  { feature: "Flood Extension", basic: "❌", standard: "Optional", comprehensive: "✅" },
  { feature: "Third-Party Liability", basic: "❌", standard: "Optional", comprehensive: "✅" },
  { feature: "Driver Personal Accident", basic: "❌", standard: "Optional", comprehensive: "✅" },
];

const schema = {
  "@context": "https://schema.org", "@type": "Service",
  name: "Car Insurance Batam",
  description: "All Risk and TLO car insurance in Batam with online premium calculator",
  provider: { "@type": "InsuranceAgency", name: "Batam Insurance – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};

export default function CarInsuranceBatamPage() {
  return (
    <ProductPageLayout cluster="vehicle"
      title="Car Insurance Batam"
      subtitle="All Risk & TLO Protection – Drive with Confidence"
      description="Your car is a valuable asset that accompanies your daily activities in Batam. One accident, one unexpected incident, could drain millions of rupiah. With the right car insurance — All Risk for comprehensive coverage or TLO for economical protection — you no longer need to worry. Calculate your vehicle premium estimate now using our free online calculator."
      benefits={benefits} faqs={faqs} policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Vehicle Insurance", href: "/en/vehicle-insurance" },
        { label: "Car Insurance Batam", href: "/en/vehicle-insurance/car-insurance-batam" },
      ]}
      schema={schema}
    >
      <KalkulatorMobil />
    </ProductPageLayout>
  );
}

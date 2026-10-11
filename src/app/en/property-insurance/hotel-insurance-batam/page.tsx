// app/en/property-insurance/hotel-insurance-batam/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Hotel Insurance Batam – Comprehensive Hotel Asset Protection",
  description: "Hotel and lodging insurance in Batam. Protect buildings, furniture, equipment, and guest liability from fire, flood, and damage. Free consultation: +62-813-7333-6728.",
  canonical: "https://asuransibatam.com/en/property-insurance/hotel-insurance-batam",
  languages: {
    id: "https://asuransibatam.com/asuransi-properti/asuransi-hotel-batam",
    en: "https://asuransibatam.com/en/property-insurance/hotel-insurance-batam",
  },
});

const benefits = [
  { icon: "🏨", title: "Hotel Building & Structure", desc: "Protection for the hotel's structure from fire, lightning, explosion, natural disasters, and other physical damage." },
  { icon: "🛋️", title: "Furniture, Interiors & Decor", desc: "Room, lobby, and restaurant furniture, decor, bathroom fittings, and all high-value hotel contents." },
  { icon: "⚡", title: "Hotel Operating Equipment", desc: "Air conditioners, TVs, lifts, CCTV systems, laundry machines, restaurant kitchen equipment, generators, and the hotel's electrical systems." },
  { icon: "👤", title: "Guest Liability", desc: "Protection against claims from guests injured on hotel premises — slipping at the pool, a faulty lift, or a fire in a room." },
  { icon: "💰", title: "Business Interruption (Loss of Income)", desc: "Compensation for lost room revenue while the hotel is temporarily closed for repairs following a covered claim." },
  { icon: "🔒", title: "Theft & Vandalism", desc: "Losses from forced-entry theft, burglary, and vandalism by internal or external parties." },
];

const faqs = [
  { q: "Why do hotels in Batam need dedicated property insurance?", a: "Batam is an international tourist destination with millions of visits per year — most from Singapore and Malaysia. International guests have high expectations and good legal awareness. A single fire or guest accident without insurance can mean losses of tens of billions of rupiah in repairs, plus legal claims from foreign guests." },
  { q: "Is damage caused by unruly guests or vandalism covered?", a: "Yes. Hotel insurance covers damage caused by guests, including vandalism, theft by guests, and other deliberate damage. However, there is a sub-limit for this type of claim — make sure the limit is adequate for the standard of your hotel rooms." },
  { q: "How do I calculate the right sum insured for a hotel?", a: "The sum insured is based on replacement cost (the cost of rebuilding at current prices), not book value or purchase price. For contents and furniture, use the current inventory value. Do not underinsure — if the sum insured is lower than the true value, a claim can be reduced proportionally." },
  { q: "What is the estimated premium for hotel insurance in Batam?", a: "Hotel building premiums range from 0.08% to 0.15% of the building value per year for standard risks. Hotels with a swimming pool, restaurant, or complex facilities can be higher. For example, a 3-star hotel with a building value of Rp 20 billion would start at roughly Rp 16–30 million per year for the building cover. Contact us for a detailed quote." },
  { q: "Can I claim for lost income while the hotel is closed?", a: "Yes, with a Business Interruption (BI) extension you are compensated for income lost during the repair period. BI is calculated from the hotel's average daily revenue multiplied by the estimated repair time, less variable costs that are not incurred. It is especially important for hotels with a high occupancy rate." },
  { q: "What should I do if a guest files a claim for an accident at the hotel?", a: "Document the incident immediately (photos, witness statements, internal report). Do not admit fault or offer compensation before consulting us. Contact us at +62-813-7333-6728 — our team will guide the handling of the guest claim so it does not harm your business." },
];

const policyComparison = [
  { feature: "Hotel Building", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Furniture & Interiors", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Electronic Equipment & Machinery", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Business Interruption", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Guest Liability (TPL)", basic: "❌", standard: "Optional", comprehensive: "✅" },
  { feature: "Theft & Vandalism", basic: "❌", standard: "✅", comprehensive: "✅" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hotel Insurance Batam",
  description: "Hotel and lodging insurance in Batam covering the building, furniture, equipment, business interruption, and guest liability.",
  provider: { "@type": "InsuranceAgency", name: "Batam Insurance – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};

export default function HotelInsuranceBatamPage() {
  return (
    <ProductPageLayout cluster="property"
      title="Hotel Insurance Batam"
      subtitle="Comprehensive Protection for the Hospitality Industry"
      description="A hotel or lodging business in Batam is a major investment serving international guests from Singapore and Malaysia. One incident — a fire in the restaurant kitchen, a guest accident at the pool, or a flood damaging dozens of rooms — can threaten the survival of the business without the right protection."
      benefits={benefits} faqs={faqs} policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Property Insurance", href: "/en/property-insurance" },
        { label: "Hotel Insurance Batam", href: "/en/property-insurance/hotel-insurance-batam" },
      ]}
      schema={schema}
      calculatorCard="hotel"
    >
      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Case Studies: Hotel Claims in Batam</h2>
        <p className="text-center text-[#475569] mb-8">Realistic illustrations of why hotel insurance matters in an international tourist city like Batam.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">🔥 Case 1 — Kitchen Fire, Hotel in Nagoya</h3>
            <p className="text-[#475569] text-sm mb-3">A fire in the restaurant kitchen of a 3-star hotel in the Nagoya area destroyed the kitchen and dining room and damaged 12 rooms on the upper floor. The hotel closed for 3 months for renovation.</p>
            <div className="bg-white rounded-xl p-4 text-sm">
              <p className="text-[#0a1628] font-semibold mb-1">Losses incurred:</p>
              <p className="text-[#475569]">Building & furniture renovation: Rp 3.8 billion | 3 months of lost income (BI): Rp 1.2 billion</p>
              <p className="text-green-700 font-semibold mt-2">✅ The entire claim was covered. The hotel reopened without draining its own capital.</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">🏊 Case 2 — Foreign Guest Accident at the Pool</h3>
            <p className="text-[#475569] text-sm mb-3">A guest from Singapore slipped at the pool area of a resort in Nongsa and suffered a spinal injury. The family filed a claim for medical compensation and non-material damages.</p>
            <div className="bg-white rounded-xl p-4 text-sm">
              <p className="text-[#0a1628] font-semibold mb-1">Claim filed:</p>
              <p className="text-[#475569]">Medical costs in Singapore: SGD 45,000 | Non-material compensation: Rp 800 million | Legal fees: Rp 150 million</p>
              <p className="text-green-700 font-semibold mt-2">✅ Liability insurance covered the full claim and legal costs. The resort was protected from insolvency.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Other Commercial Property in Batam</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/en/property-insurance/shophouse-insurance-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Shophouse Insurance Batam</h3>
            <p className="text-[#475569] text-sm">For commercial business owners in Batam Center, Nagoya, and Batu Aji.</p>
          </Link>
          <Link href="/en/property-insurance/apartment-insurance-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Apartment / Condotel Insurance</h3>
            <p className="text-[#475569] text-sm">Protection for units and owner liability for condotels rented out to guests.</p>
          </Link>
          <Link href="/en/blog/commercial-property-insurance-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Commercial Property Insurance Guide</h3>
            <p className="text-[#475569] text-sm">Tips for choosing the right protection for your property business in Batam.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

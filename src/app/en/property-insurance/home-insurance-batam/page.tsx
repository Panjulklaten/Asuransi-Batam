// app/en/property-insurance/home-insurance-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Home Insurance Batam – Protect Your Home & Contents",
  description: "Home insurance in Batam. Protection from fire, flood, theft, and natural disasters. Affordable premiums, easy process. Contact +62-813-7333-6728.",
  canonical: "https://asuransibatam.com/en/property-insurance/home-insurance-batam",
  languages: {
      id: "https://asuransibatam.com/asuransi-properti/asuransi-rumah-batam",
      en: "https://asuransibatam.com/en/property-insurance/home-insurance-batam",
    },
});

const benefits = [
  { icon: "🏠", title: "Building Structure", desc: "Walls, roof, floors, and foundations protected from fire, lightning, and disasters." },
  { icon: "📺", title: "Contents & Electronics", desc: "TVs, refrigerators, air conditioners, laptops, and other valuable household items." },
  { icon: "💎", title: "Jewellery & Valuables", desc: "Jewellery and valuables up to a certain limit with a special endorsement." },
  { icon: "🌊", title: "Flood & Inundation", desc: "Damage from flash floods, standing water, and tidal flooding (rob) — a real risk in parts of Batam such as Sekupang and Batu Aji. Added as an extension." },
  { icon: "🔐", title: "Theft with Violence", desc: "Losses from theft accompanied by violence or forced entry." },
  { icon: "🏗️", title: "Temporary Accommodation Costs", desc: "Compensation for temporary rental costs while your home is being repaired." },
];

const faqs = [
  { q: "Does a mortgage (KPR) in Batam require home insurance?", a: "Yes. Almost all banks offering mortgages in Batam, including BTN, BRI, Mandiri, and BCA, require at least fire insurance for the full loan tenor. Bank-arranged cover often protects the building only and can cost more. We can arrange a more complete policy at a competitive price." },
  { q: "How much is home insurance in Batam?", a: "Standard building fire cover typically runs about 0.10%–0.25% of the building value per year. For example, a type-70 house in Batam Centre with a building value of Rp 500 million would pay roughly Rp 500,000–1,250,000 per year for fire cover. Flood and contents extensions add to this based on the sums insured." },
  { q: "Is flood covered by home insurance in Batam?", a: "Flood is not part of standard fire cover, but it can be added as an extension. Because areas such as Sekupang, Batu Aji, and Tanjung Riau can flood during heavy rain, we usually recommend it. The extra premium is small compared with the cost of actual flood damage." },
  { q: "What is the difference between building insurance and contents insurance?", a: "Building insurance protects the physical structure of the house, while contents insurance protects furniture, electronics, and belongings inside. Both can be combined into one policy, which is what we recommend to avoid gaps in cover." },
  { q: "Can a rented-out house or a rented home be insured?", a: "Yes. A landlord can insure the building even when it is let to tenants, and a tenant can take out separate contents insurance for their own belongings." },
  { q: "What should I do first if my house catches fire?", a: "Once it is safe, photograph or film the damage before any cleaning. Report the incident to us within 3×24 hours at +62-813-7333-6728. Do not remove debris or start repairs before the insurer's survey, otherwise the claim may be rejected." },
];

const schema = {
  "@context": "https://schema.org", "@type": "Service",
  name: "Home Insurance Batam",
  description: "Home insurance in Batam for residential buildings and household contents",
  provider: { "@type": "InsuranceAgency", name: "Batam Insurance – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};

export default function HomeInsuranceBatamPage() {
  return (
    <ProductPageLayout cluster="property"
      title="Home Insurance Batam"
      subtitle="Protect Your Residence"
      description="Your home is your family's largest investment. Protect it with the right property insurance — from fire and flood to theft. Premiums starting from just a few hundred thousand rupiah per year."
      benefits={benefits} faqs={faqs}
      breadcrumbs={[
        { label: "Property Insurance", href: "/en/property-insurance" },
        { label: "Home Insurance Batam", href: "/en/property-insurance/home-insurance-batam" },
      ]}
      schema={schema}
      calculatorCard="rumah"
    >
      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Estimated Home Insurance Premiums in Batam</h2>
        <p className="text-center text-[#475569] mb-8">Protection costs far less than repairing the damage yourself.</p>
        <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0a1628] text-white">
                <th className="text-left p-4 font-semibold">House type (Batam)</th>
                <th className="text-left p-4 font-semibold">Building value</th>
                <th className="text-left p-4 font-semibold">Fire premium / year</th>
                <th className="text-left p-4 font-semibold">+ Flood &amp; contents</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#e2e8f0]">
                <td className="p-4 text-[#0a1628] font-medium">Type 36 (Batu Aji / Sagulung)</td>
                <td className="p-4 text-[#475569]">Rp 200–300 million</td>
                <td className="p-4 text-[#1a4fa0] font-semibold">Rp 200–750 thousand</td>
                <td className="p-4 text-[#475569]">+Rp 300–600 thousand</td>
              </tr>
              <tr className="border-b border-[#e2e8f0] bg-[#f8faff]">
                <td className="p-4 text-[#0a1628] font-medium">Type 70 (Batam Centre / Bengkong)</td>
                <td className="p-4 text-[#475569]">Rp 400–600 million</td>
                <td className="p-4 text-[#1a4fa0] font-semibold">Rp 400 thousand–1.5 million</td>
                <td className="p-4 text-[#475569]">+Rp 500 thousand–1 million</td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="p-4 text-[#0a1628] font-medium">Luxury home (Nongsa / Sukajadi)</td>
                <td className="p-4 text-[#475569]">Rp 1–3 billion</td>
                <td className="p-4 text-[#1a4fa0] font-semibold">Rp 1–7.5 million</td>
                <td className="p-4 text-[#475569]">+Rp 1–3 million</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#475569] mt-3 text-center">* Estimates only. Actual premiums depend on building condition, location, and the cover chosen. Contact us for a specific quote.</p>
      </div>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-4 text-center">What Is Not Covered</h2>
        <p className="text-[#475569] leading-relaxed text-center">
          Standard home policies generally exclude wear and tear, gradual deterioration, damage from poor maintenance, intentional acts, and losses that happen without any sign of forced entry. Flood and tidal flooding need to be added as extensions, and jewellery or collectibles above the standard limit need a special endorsement. We go through these points with you before the policy is issued, so there are no surprises at claim time.
        </p>
      </div>

      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Complete Your Family&apos;s Protection</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/en/blog/how-to-claim-home-fire-insurance" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">How to Claim Home Fire Insurance</h3>
            <p className="text-[#475569] text-sm">A step-by-step guide so your home insurance claim goes smoothly.</p>
          </Link>
          <Link href="/en/personal-accident-insurance/individual-family-pa" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Individual &amp; Family PA</h3>
            <p className="text-[#475569] text-sm">Protect yourself and your family against accidents as well.</p>
          </Link>
          <Link href="/en/property-insurance/apartment-insurance-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Apartment Insurance Batam</h3>
            <p className="text-[#475569] text-sm">Living in an apartment instead? See how cover differs for units.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

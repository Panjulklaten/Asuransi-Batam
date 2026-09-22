// app/en/liability-insurance/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";
import Link from "next/link";

export const metadata: Metadata = generateSEO({
  title: "Liability Insurance Batam – Third-Party Liability & B3 Hazardous Waste",
  description: "Liability insurance in Batam. Public liability, product liability, and specialist B3 hazardous waste insurance. Essential for industry in Batam. +62-813-7333-6728.",
  canonical: "https://asuransibatam.com/en/liability-insurance",
  languages: {
      id: "https://asuransibatam.com/asuransi-liability",
      en: "https://asuransibatam.com/en/liability-insurance",
    },
});

const benefits = [
  { icon: "⚖️", title: "Third-Party Legal Liability", desc: "Compensation and legal costs if your business causes loss to a third party." },
  { icon: "🏭", title: "Operational Liability", desc: "Protection against legal liability arising from business operations." },
  { icon: "📋", title: "Legal Costs", desc: "Lawyer fees, court costs, and legal claim settlements." },
  { icon: "☣️", title: "Environmental Pollution", desc: "Specialist cover for industries that may pollute the environment." },
  { icon: "🛡️", title: "Product Liability", desc: "Protection against claims for damage caused by products you sell or distribute." },
  { icon: "👥", title: "Employers Liability", desc: "Protection against employee claims for workplace accidents." },
];

const faqs = [
  {
    q: "Who needs liability insurance?",
    a: "Businesses that interact with the public, industries generating waste, heavy equipment operators, and any business that could potentially cause loss to third parties.",
  },
  {
    q: "What is Public Liability Insurance?",
    a: "Insurance that protects businesses from legal claims by third parties (customers, visitors, the public) for injury or property damage caused by business operations.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Liability Insurance Batam",
  provider: {
    "@type": "InsuranceAgency",
    name: "Batam Insurance – Rio",
    telephone: "+6281373336728",
  },
};

export default function LiabilityInsurancePage() {
  return (
    <ProductPageLayout
      title="Liability Insurance Batam"
      subtitle="Business Legal Liability Protection"
      description="A single unexpected event can expose your business to billion-rupiah legal claims. Liability insurance protects you from the risk of legal responsibility to third parties."
      benefits={benefits}
      faqs={faqs}
      breadcrumbs={[{ label: "Liability Insurance", href: "/en/liability-insurance" }]}
      schema={schema}
    >
      <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-6 text-center">Our Liability Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          {
            title: "B3 Hazardous Waste Insurance",
            desc: "Specialist coverage for industries producing Hazardous & Toxic Material waste.",
            href: "/en/liability-insurance/b3-waste-insurance",
          },
          {
            title: "Public Liability Insurance",
            desc: "Third-party and public liability protection for your business.",
            href: "/en/liability-insurance/public-liability",
          },
          {
            title: "Freight Forwarders Liability (FFL)",
            desc: "Protection for forwarding companies and customs brokers against cargo loss, damage, and documentation-error claims.",
            href: "/en/liability-insurance/freight-forwarders-liability",
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

// app/en/marine-insurance/marine-cargo/page.tsx
import type { Metadata } from "next";
import { generateSEO, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { WHATSAPP_URL } from "@/lib/constants";
import { Breadcrumb, CTASection, SectionHeader } from "@/components/ui/index";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import QuoteButton from "@/components/quote/QuoteButton";
import QuoteRequirements from "@/components/quote/QuoteRequirements";
import { Package, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Marine Cargo Insurance Batam – Goods in Transit Protection | Batam Insurance",
  description:
    "Marine Cargo Insurance in Batam for goods shipped by sea, air, or land. Export, import, and domestic shipment coverage. Consult Rio at +62-813-7333-6728!",
  canonical: "/en/marine-insurance/marine-cargo",
  languages: {
    id: "https://asuransibatam.com/asuransi-marine/marine-cargo",
    en: "https://asuransibatam.com/en/marine-insurance/marine-cargo",
  },
});

// ─── Schema: Service — no image/price required, correct for insurance ───
const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Marine Cargo Insurance Batam",
  description:
    "Marine cargo insurance in Batam covering goods in transit for export, import, and domestic shipments by sea.",
  url: "https://asuransibatam.com/en/marine-insurance/marine-cargo",
  serviceType: "Marine Insurance – Marine Cargo",
  areaServed: {
    "@type": "City",
    name: "Batam",
    addressCountry: "ID",
  },
  provider: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam",
    telephone: "081373336728",
    url: "https://asuransibatam.com",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Marine Insurance Products",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Marine Cargo Insurance",
        },
      },
    ],
  },
};

const FAQS = [
  {
    q: "What is Marine Cargo Insurance?",
    a: "Marine Cargo Insurance protects goods and commodities during transit from one location to another — whether by sea, air, or overland. Coverage applies against risks of physical damage, loss, and theft while goods are in transit.",
  },
  {
    q: "Who should hold Marine Cargo Insurance?",
    a: "Any party involved in shipping high-value goods: exporters, importers, traders, distributors, manufacturers, and freight forwarders. This insurance protects the commercial value of goods while they are on the move.",
  },
  {
    q: "What is the difference between ICC A, B, and C clauses?",
    a: "ICC (A) provides the broadest cover — all risks except those explicitly excluded. ICC (B) covers named perils including fire, grounding, and flooding. ICC (C) covers the most limited set of major risks such as fire and vessel stranding. The right clause depends on the type of goods and risk appetite.",
  },
  {
    q: "Can domestic inter-island shipments within Indonesia be insured?",
    a: "Yes. Marine Cargo Insurance also covers domestic inter-island shipments, including routes such as Batam–Jakarta, Batam–Surabaya, and other domestic corridors.",
  },
  {
    q: "Can a claim be made for goods damaged during loading or unloading?",
    a: "Yes, provided the goods are still within the policy period and the damage results from a covered risk. Policies typically cover goods on a warehouse-to-warehouse basis, which includes loading and unloading operations.",
  },
];

const BENEFITS = [
  "Damage from fire & explosion",
  "Vessel stranding, collision & sinking",
  "Ingress of sea water into vessel",
  "Theft and piracy",
  "Extreme weather damage",
  "Contamination & wet damage",
  "Loading & unloading damage",
  "General Average contribution",
  "Survey and salvage costs",
  "Warehouse-to-warehouse coverage",
];

export default function MarineCargoENPage() {
  return (
    <>
      {/* Schema: Service — no image/price required unlike Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            schemaBreadcrumb([
              { name: "Home", url: "/en" },
              { name: "Marine Insurance", url: "/en/marine-insurance" },
              { name: "Marine Cargo Insurance", url: "/en/marine-insurance/marine-cargo" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section
        className="pt-32 pb-16 px-4"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0d2241 60%, #0e3460 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/en" },
              { label: "Marine Insurance", href: "/en/marine-insurance" },
              { label: "Marine Cargo Insurance" },
            ]}
          />
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
            >
              <Package size={24} style={{ color: "#0a1628" }} />
            </div>
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ background: "#c9a84c20", color: "#f0d080" }}
            >
              Marine Insurance
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Marine Cargo Insurance
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Your shipment is protected from the sender's warehouse to the receiver's door. Whether exporting, importing, or shipping domestically — every risk during the sea voyage is covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL("Hello Rio, I need Marine Cargo Insurance for a shipment from Batam")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold rounded-xl text-navy"
              style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
            >
              Consult Cargo Coverage
            </a>
            <QuoteButton cluster="marine" lang="en" variant="onDark" className="!py-3.5 !font-semibold" />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Cargo Coverage"
            title="Risks Covered by Marine Cargo Insurance"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BENEFITS.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50"
              >
                <CheckCircle2
                  size={16}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "#1a4fa0" }}
                />
                <span className="text-sm text-gray-700">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ICC Clauses */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Coverage Tiers" title="Choosing the Right ICC Clause" center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                label: "ICC (C)",
                title: "Basic Cover",
                color: "#4a7fb5",
                desc: "Covers major named perils: fire, explosion, vessel stranding/sinking, and collision. Suitable for lower-value goods or limited-risk shipments.",
              },
              {
                label: "ICC (B)",
                title: "Intermediate Cover",
                color: "#1a4fa0",
                desc: "Includes all ICC (C) risks plus earthquake, volcanic eruption, lightning, sea water ingress, weather damage, and partial theft.",
              },
              {
                label: "ICC (A)",
                title: "Broadest Cover",
                color: "#0a1628",
                desc: "All risks — covers all physical loss or damage not specifically excluded. Recommended for high-value cargo and goods sensitive to handling damage.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100"
              >
                <div
                  className="inline-block text-white text-xs font-bold px-3 py-1 rounded-full mb-3"
                  style={{ background: item.color }}
                >
                  {item.label}
                </div>
                <h3 className="font-bold mb-2" style={{ color: "#0a1628" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" style={{ background: "#faf8f3" }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title="Marine Cargo Insurance – Common Questions"
            center
          />
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <QuoteRequirements cluster="marine" lang="en" />

      <CTASection
        cluster="marine"
        lang="en"
        title="Protect Your Shipment Today"
        waMsg="Hello Rio, I would like Marine Cargo Insurance for my shipment from Batam"
      />
    </>
  );
        }

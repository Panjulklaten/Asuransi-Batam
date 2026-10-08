// app/en/marine-insurance/builders-risk/page.tsx
import type { Metadata } from "next";
import { generateSEO, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { Breadcrumb, SectionHeader } from "@/components/ui/index";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import QuoteButton from "@/components/quote/QuoteButton";
import QuoteCard from "@/components/quote/QuoteCard";
import { Wrench, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Builder's Risk Insurance Batam – Shipbuilding & Repair Coverage | Batam Insurance",
  description:
    "Builder's Risk Insurance in Batam for vessel construction and repair at shipyards. From keel laying to sea trial — every stage is covered. Consult Rio!",
  canonical: "/en/marine-insurance/builders-risk",
  languages: {
    id: "https://asuransibatam.com/asuransi-marine/builders-risk",
    en: "https://asuransibatam.com/en/marine-insurance/builders-risk",
  },
});

// ─── Schema: Service — no image/price required, correct for insurance ───
const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Builder's Risk Insurance Batam",
  description:
    "Vessel construction insurance in Batam covering all stages from keel laying to sea trial and handover.",
  url: "https://asuransibatam.com/en/marine-insurance/builders-risk",
  serviceType: "Marine Insurance – Builder's Risk",
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
          name: "Builder's Risk Insurance",
        },
      },
    ],
  },
};

const FAQS = [
  {
    q: "What is Builder's Risk Insurance for vessels?",
    a: "Builder's Risk Insurance (also known as Marine Builder's Risk or DSU – Delay in Start-Up) protects a vessel during construction at the shipyard. Coverage begins at keel laying and extends through sea trials and formal handover to the owner.",
  },
  {
    q: "Who needs Builder's Risk Insurance?",
    a: "Both the vessel owner commissioning the new build and the shipyard bearing construction risk need this coverage. Each party has an insurable interest that Builder's Risk is designed to protect.",
  },
  {
    q: "Does Builder's Risk cover damage during sea trials?",
    a: "Yes. Most Builder's Risk policies include the sea trial period as part of the coverage period, since damage during trials is considered part of the construction process.",
  },
  {
    q: "Can major repair or drydocking work also be insured?",
    a: "Yes. In addition to new builds, Builder's Risk policies can cover major renovation, vessel conversion, or heavy refit work at a shipyard requiring extended drydocking.",
  },
  {
    q: "What is Increased Value (IV) in Builder's Risk?",
    a: "Increased Value is supplementary coverage that compensates for the difference between the vessel's completed value and the primary sum insured — particularly relevant when the vessel's value grows significantly during construction.",
  },
];

const BENEFITS = [
  "Physical damage during construction",
  "Fire and explosion at the shipyard",
  "Flooding and extreme weather",
  "Design and construction defects",
  "Damage during sea trials",
  "Third Party Liability (TPL) for shipyard",
  "Worker negligence damage",
  "Dismantling and repair costs",
  "Increased Value coverage",
  "Launching risks",
];

const STAGES = [
  {
    no: "01",
    title: "Keel Laying",
    desc: "Coverage begins at keel laying — the foundational stage of vessel construction.",
  },
  {
    no: "02",
    title: "Construction Phase",
    desc: "All stages of framing, hull plating, deck installation, and systems fit-out are covered.",
  },
  {
    no: "03",
    title: "Launching",
    desc: "Coverage includes the moment the vessel first enters the water, including capsize and hull damage risks.",
  },
  {
    no: "04",
    title: "Sea Trial & Handover",
    desc: "Extended protection through sea trials until formal delivery of the vessel to its owner.",
  },
];

export default function BuildersRiskENPage() {
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
              { name: "Builder's Risk Insurance", url: "/en/marine-insurance/builders-risk" },
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
              { label: "Builder's Risk Insurance" },
            ]}
          />
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
            >
              <Wrench size={24} style={{ color: "#0a1628" }} />
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
            Builder&apos;s Risk Insurance
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Shipbuilding is a major investment at every stage. From keel laying to sea trial, every
            phase of your vessel&apos;s construction in Batam is protected with Builder&apos;s Risk
            Insurance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            
            <QuoteButton cluster="marine" lang="en" variant="gold" className="!py-3.5 !font-semibold" />
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Coverage Period"
            title="Protection at Every Stage of Construction"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
            {STAGES.map((s) => (
              <div
                key={s.no}
                className="relative p-6 rounded-2xl border border-gray-100 bg-gray-50"
              >
                <div className="text-3xl font-black mb-3 opacity-20" style={{ color: "#1a4fa0" }}>
                  {s.no}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Builder's Risk Coverage"
            title="Risks Covered During Vessel Construction"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {BENEFITS.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 p-4 rounded-xl border border-blue-100 bg-white"
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

      {/* FAQ */}
      <section className="py-16 px-4" style={{ background: "#faf8f3" }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title="Builder's Risk Insurance – Common Questions"
            center
          />
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <QuoteCard cluster="marine" />
    </>
  );
}

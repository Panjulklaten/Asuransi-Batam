// app/en/marine-insurance/marine-hull/page.tsx
import type { Metadata } from "next";
import { generateSEO, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { WHATSAPP_URL } from "@/lib/constants";
import { Breadcrumb, SectionHeader } from "@/components/ui/index";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import QuoteButton from "@/components/quote/QuoteButton";
import QuoteCard from "@/components/quote/QuoteCard";
import { Ship, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Marine Hull Insurance Batam – Vessel Hull & Machinery Protection | Batam Insurance",
  description:
    "Marine Hull Insurance in Batam for comprehensive protection of vessel hull, engine, and navigation equipment against collision, grounding, fire, and sinking. Consult Rio!",
  canonical: "/en/marine-insurance/marine-hull",
  languages: {
    id: "https://asuransibatam.com/asuransi-marine/marine-hull",
    en: "https://asuransibatam.com/en/marine-insurance/marine-hull",
  },
});

// ─── Schema: Service — no image/price required, correct for insurance ───
const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Marine Hull Insurance Batam",
  description:
    "Vessel hull insurance in Batam providing comprehensive physical protection for ships, engines, and navigation equipment against all marine perils.",
  url: "https://asuransibatam.com/en/marine-insurance/marine-hull",
  serviceType: "Marine Insurance – Marine Hull",
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
          name: "Marine Hull Insurance",
        },
      },
    ],
  },
};

const FAQS = [
  {
    q: "What is Marine Hull Insurance?",
    a: "Marine Hull Insurance protects the physical structure of a vessel in its entirety — hull, main and auxiliary engines, navigation systems, and on-board equipment — against risks such as collision, grounding, fire, explosion, and sinking.",
  },
  {
    q: "What types of vessels can be covered under Marine Hull?",
    a: "Almost all vessel types are insurable: cargo ships, tankers, passenger vessels, ferries, tugboats, barges, commercial fishing vessels, speedboats, and tourist boats.",
  },
  {
    q: "Does Marine Hull only cover engine damage?",
    a: "No. Marine Hull covers the entire vessel as an integrated unit — hull, engines, electrical systems, navigation equipment, and fixed fittings on board. If you require standalone machinery protection, a Machinery Breakdown extension is also available.",
  },
  {
    q: "How is the insured value of a vessel determined?",
    a: "The insured value is typically set on an Agreed Value basis (a value agreed between the owner and the insurer) or Market Value. An independent marine survey is generally required for larger vessels.",
  },
  {
    q: "Does Marine Hull cover damage caused by crew negligence?",
    a: "Yes. Under the Institute Time Clauses – Hull (ITC), crew, master, or pilot negligence resulting in physical damage to the vessel is generally covered, provided there is no wilful misconduct on the part of the vessel owner.",
  },
];

const BENEFITS = [
  "Hull damage from collision & grounding",
  "Fire and explosion on board",
  "Heavy weather and storm damage",
  "Sinking and foundering",
  "Theft and sea robbery",
  "Salvage and rescue charges",
  "Collision Liability (Running Down Clause)",
  "General Average contribution",
  "Accidental machinery damage",
  "Wreck removal expenses",
];

export default function MarineHullENPage() {
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
              { name: "Marine Hull Insurance", url: "/en/marine-insurance/marine-hull" },
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
              { label: "Marine Hull Insurance" },
            ]}
          />
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
            >
              <Ship size={24} style={{ color: "#0a1628" }} />
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
            Marine Hull Insurance
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Total protection for your vessel — hull, engines, and navigation systems covered against every major marine peril. From Batam's busy waterways to international voyages.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL("Hello Rio, I need Marine Hull Insurance for my vessel in Batam")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold rounded-xl text-navy"
              style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
            >
              Consult Marine Hull Coverage
            </a>
            <QuoteButton cluster="marine" lang="en" variant="onDark" className="!py-3.5 !font-semibold" />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Marine Hull Coverage"
            title="What Does Marine Hull Insurance Cover?"
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

      {/* Clauses */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Standard Clauses" title="Marine Hull Coverage Basis" center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Institute Time Clauses – Hull (ITC)",
                desc: "The international London market standard clause for commercially operated vessels. Provides the broadest protection on a time-period basis.",
              },
              {
                title: "Institute Voyage Clauses – Hull (IVC)",
                desc: "Coverage based on a specific voyage between named ports. Suitable for single-trip vessel deliveries or one-off voyages.",
              },
              {
                title: "Institute Fishing Vessel Clauses",
                desc: "Purpose-built for commercial fishing vessels facing unique risks at fishing grounds, including loss of nets and fishing gear.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100"
              >
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
            title="Marine Hull Insurance – Common Questions"
            center
          />
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <QuoteCard cluster="marine" />
    </>
  );
}

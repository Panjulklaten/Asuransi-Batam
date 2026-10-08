// app/en/blog/batam-export-cargo-insurance/page.tsx
import type { Metadata } from "next";
import QuoteButton from "@/components/quote/QuoteButton";
import { generateSEO, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { Breadcrumb, SectionHeader } from "@/components/ui/index";
import QuoteCard from "@/components/quote/QuoteCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Package, Globe } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Export Cargo Insurance from Batam – International Shipment Coverage | Batam Insurance",
  description:
    "Protect your export shipments from Batam to Singapore, Malaysia, and beyond. Marine Cargo Insurance for Batam exporters. Easy process, fast claims. Contact Rio!",
  canonical: "/en/blog/batam-export-cargo-insurance",
  languages: {
    id: "https://asuransibatam.com/blog/asuransi-cargo-ekspor-batam",
    en: "https://asuransibatam.com/en/blog/batam-export-cargo-insurance",
  },
});

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Export Cargo Insurance from Batam",
  description:
    "A guide to marine cargo insurance for exporters in Batam, covering routes to Singapore, Malaysia, and other destinations, and how to choose the right ICC clause.",
  url: "https://asuransibatam.com/en/blog/batam-export-cargo-insurance",
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  author: {
    "@type": "Person",
    name: "Rio",
    url: "https://asuransibatam.com/en/about-us",
  },
  publisher: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam",
    url: "https://asuransibatam.com",
  },
};

const FAQS = [
  {
    q: "Are Batam exporters required to hold cargo insurance?",
    a: "It depends on the agreed Incoterms in your export contract. Under CIF or CIP terms, the exporter is obligated to provide cargo insurance. Under FOB or EXW terms, insurance responsibility shifts to the buyer. Regardless of Incoterms, having your own policy is strongly recommended to protect your business interests.",
  },
  {
    q: "What is the difference between export and import cargo policies?",
    a: "The underlying clauses and products are the same. The distinction lies in who takes out the policy: exporters for outbound shipments, importers for inbound ones. From Batam, exporters typically insure the route from their warehouse to the final destination port in the receiving country.",
  },
  {
    q: "Can export cargo insurance from Batam cover shipments to any country?",
    a: "Yes. Marine Cargo Insurance is inherently international — it can cover routes to any approved destination country. Popular routes from Batam include Singapore, Malaysia (Port Klang), China, Japan, and European countries.",
  },
  {
    q: "What happens if an overseas buyer rejects goods due to damage?",
    a: "If the damage occurred during transit and falls under a covered risk, the exporter can file a claim with the insurer. An independent surveyor will be dispatched to assess the damage, and the claim will be settled based on the sum insured declared in the policy.",
  },
  {
    q: "Can goods exhibited at an overseas trade fair also be insured?",
    a: "Yes. A specialist exhibition endorsement or policy extension can cover goods from the moment they leave Batam, throughout the trade fair period, and until they are returned to Indonesia. Speak to your agent about this specific coverage need.",
  },
];

const INCOTERMS = [
  {
    term: "CIF",
    full: "Cost, Insurance & Freight",
    obligation: "Exporter is required to provide cargo insurance",
    party: "Exporter",
    color: "#0a1628",
  },
  {
    term: "CIP",
    full: "Carriage & Insurance Paid To",
    obligation: "Exporter is required to provide cargo insurance",
    party: "Exporter",
    color: "#0a1628",
  },
  {
    term: "FOB",
    full: "Free On Board",
    obligation: "Insurance responsibility transfers to the buyer",
    party: "Importer",
    color: "#4a7fb5",
  },
  {
    term: "EXW",
    full: "Ex Works",
    obligation: "All risk borne by the buyer from the factory gate",
    party: "Importer",
    color: "#4a7fb5",
  },
];

const COMMODITIES = [
  { name: "Electronic Components & PCBs", clause: "ICC (A)" },
  { name: "Oil & Gas Industrial Products", clause: "ICC (A)" },
  { name: "Vessel Spare Parts", clause: "ICC (A)" },
  { name: "Furniture & Handicrafts", clause: "ICC (B)" },
  { name: "Textiles & Garments", clause: "ICC (B)" },
  { name: "Steel & Construction Materials", clause: "ICC (C)" },
];

export default function BatamExportCargoENPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
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
              { name: "Blog", url: "/en/blog" },
              { name: "Batam Export Cargo Insurance", url: "/en/blog/batam-export-cargo-insurance" },
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
              { label: "Blog", href: "/en/blog" },
              { label: "Export Cargo Insurance" },
            ]}
          />
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
            >
              <Globe size={24} style={{ color: "#0a1628" }} />
            </div>
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ background: "#c9a84c20", color: "#f0d080" }}
            >
              Export Cargo – International
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Export Cargo Insurance<br />from Batam
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Batam is one of Indonesia's largest export hubs — electronics, industrial components,
            and manufactured goods are shipped to Singapore, Malaysia, and dozens of countries every
            day. Protect the value of your exports with the right cargo insurance.
          </p>
          <QuoteButton cluster="marine" lang="en" variant="gold" className="!rounded-xl !px-6 !py-3 !text-sm" />
        </div>
      </section>

      {/* Incoterms */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Export Contracts"
            title="Incoterms and Cargo Insurance Obligations"
          />
          <p className="text-gray-600 mt-4 max-w-2xl">
            The obligation to provide cargo insurance is determined by the Incoterms agreed in your
            international sales contract. Understanding your position is essential before each shipment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            {INCOTERMS.map((item) => (
              <div
                key={item.term}
                className="rounded-2xl p-6 border"
                style={{ borderColor: item.color + "30", background: item.color + "06" }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span
                      className="text-white text-sm font-bold px-3 py-1 rounded-full"
                      style={{ background: item.color }}
                    >
                      {item.term}
                    </span>
                    <p className="text-xs text-gray-500 mt-2">{item.full}</p>
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full border"
                    style={{ color: item.color, borderColor: item.color + "40" }}
                  >
                    {item.party}
                  </span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{item.obligation}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">
            *Even under FOB or EXW terms, exporters may voluntarily take out cargo insurance to protect their business reputation and relationships.
          </p>
        </div>
      </section>

      {/* Commodities */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Recommended Clauses"
            title="Batam Export Commodities and Suggested ICC Clauses"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {COMMODITIES.map((k) => (
              <div
                key={k.name}
                className="bg-white rounded-xl p-5 flex items-center justify-between shadow-sm border border-blue-100"
              >
                <div className="flex items-start gap-3">
                  <Package size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#1a4fa0" }} />
                  <span className="text-sm text-gray-700 font-medium">{k.name}</span>
                </div>
                <span
                  className="text-xs font-bold px-2 py-1 rounded-full text-white flex-shrink-0 ml-3"
                  style={{
                    background: k.clause === "ICC (A)" ? "#0a1628" : k.clause === "ICC (B)" ? "#1a4fa0" : "#4a7fb5",
                  }}
                >
                  {k.clause}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-6 text-center">
            *Clause recommendations are general guidance. Final selection depends on commodity condition, route, and underwriter assessment.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Step by Step"
            title="How to Get an Export Cargo Policy from Batam"
          />
          <div className="mt-10 space-y-5">
            {[
              {
                step: "01",
                title: "Consultation & Shipment Details",
                desc: "Contact Rio via WhatsApp. Prepare: commodity type, declared value, destination country, and your contract's Incoterms.",
              },
              {
                step: "02",
                title: "Quotation & Clause Selection",
                desc: "You will receive a premium offer based on your shipment details. Select the ICC clause that best fits your needs and risk appetite.",
              },
              {
                step: "03",
                title: "Payment & Policy Issuance",
                desc: "Once the premium is settled, your policy or certificate of insurance is issued prior to the shipment departure.",
              },
              {
                step: "04",
                title: "Ship with Active Protection",
                desc: "Coverage is active from the moment goods leave your Batam warehouse until they arrive at the final destination in the receiving country.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-5 p-5 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: "#1a4fa0" }}
                >
                  {item.step}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
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
            title="Common Questions on Batam Export Cargo Insurance"
            center
          />
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      
      {/* Related Links */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Products &amp; Services</p>
              <ul className="space-y-2">
                <li><a href="/en/marine-insurance/marine-cargo" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Cargo Insurance Batam</a></li>
                <li><a href="/en/marine-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Insurance Batam</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Related Articles</p>
              <ul className="space-y-2">
                <li><a href="/en/blog/marine-cargo-insurance-premium-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Cargo Insurance Premium in Batam</a></li>
                <li><a href="/en/blog/batam-singapore-shipping-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Batam–Singapore Shipping Insurance</a></li>
                <li><a href="/en/blog/how-to-claim-marine-cargo-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ How to Claim Marine Cargo Insurance</a></li>
                <li><a href="/en/blog/marine-hull-vs-cargo-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Hull vs Cargo Insurance</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <QuoteCard cluster="marine" />
    </>
  );
                  }

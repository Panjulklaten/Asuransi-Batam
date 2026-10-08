// app/en/blog/batam-jakarta-cargo-insurance/page.tsx
import type { Metadata } from "next";
import QuoteButton from "@/components/quote/QuoteButton";
import { generateSEO, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { Breadcrumb, SectionHeader } from "@/components/ui/index";
import QuoteCard from "@/components/quote/QuoteCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Package, CheckCircle2, AlertTriangle, Truck } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Cargo Insurance Batam to Jakarta – Domestic Marine Shipment | Batam Insurance",
  description:
    "Protect your goods shipped from Batam to Jakarta with Marine Cargo Insurance. Covers sea freight, RoRo, and container routes. Affordable premiums. Contact Rio!",
  canonical: "/en/blog/batam-jakarta-cargo-insurance",
  languages: {
    id: "https://asuransibatam.com/blog/asuransi-pengiriman-batam-jakarta",
    en: "https://asuransibatam.com/en/blog/batam-jakarta-cargo-insurance",
  },
});

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cargo Insurance for Shipments from Batam to Jakarta",
  description:
    "A complete guide to marine cargo insurance for domestic shipments from Batam to Jakarta, covering risks, ICC clauses, and how to choose the right policy.",
  url: "https://asuransibatam.com/en/blog/batam-jakarta-cargo-insurance",
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
    q: "Is cargo insurance mandatory for shipments from Batam to Jakarta?",
    a: "It is not legally required, but strongly advisable. The Batam–Jakarta route crosses the Karimata Strait and Java Sea, both known for rough conditions — especially during the west monsoon season (November–February). Without insurance, any loss or damage is borne entirely by the shipper.",
  },
  {
    q: "How long does sea freight from Batam to Jakarta take?",
    a: "Typically 3–5 days for standard cargo vessels, depending on vessel type and weather conditions. Marine Cargo Insurance remains active throughout this transit period.",
  },
  {
    q: "Why can't I use land freight insurance for this route?",
    a: "Batam is an island — there is no road connection to Java. All shipments must travel by sea, which means Marine Cargo Insurance is the appropriate product to protect your goods in transit.",
  },
  {
    q: "What types of goods can be insured on this route?",
    a: "Almost all commodity types: electronics and components, furniture, packaged food and beverages, building materials, industrial machinery, textiles, and consumer goods. High-value goods such as electronics and factory components are strongly recommended to use ICC (A) clause.",
  },
  {
    q: "How do I file a claim if my goods arrive damaged in Jakarta?",
    a: "Document the damage with photos before breaking any seals or signing the delivery receipt. Immediately notify your insurance agent (contact Rio) and the shipping company. Prepare: Bill of Lading, commercial invoice, packing list, and damage photos. A licensed surveyor will then assess the claim.",
  },
];

const RISKS = [
  "Sea water ingress into vessel cargo holds",
  "Extreme rolling and pitching in heavy weather",
  "Fire or explosion on board",
  "Damage during loading and unloading",
  "Loss or theft during transit",
  "Vessel grounding or collision",
  "Damage from cargo shifting",
  "Contamination from other cargo",
];

const DOCUMENTS = [
  { label: "Bill of Lading (B/L)", desc: "Official shipping document issued by the carrier" },
  { label: "Commercial Invoice", desc: "Invoice stating the declared value of goods" },
  { label: "Packing List", desc: "Detailed itemised list of shipment contents" },
  { label: "Certificate of Insurance", desc: "Your cargo policy certificate" },
  { label: "Shipping Manifest", desc: "Cargo manifest from the port of origin" },
];

export default function BatamJakartaCargoENPage() {
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
              { name: "Batam to Jakarta Cargo Insurance", url: "/en/blog/batam-jakarta-cargo-insurance" },
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
              { label: "Batam–Jakarta Cargo" },
            ]}
          />
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
            >
              <Truck size={24} style={{ color: "#0a1628" }} />
            </div>
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ background: "#c9a84c20", color: "#f0d080" }}
            >
              Marine Cargo – Domestic
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Cargo Insurance:<br />Batam to Jakarta
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            The Batam–Jakarta corridor is one of Indonesia's busiest domestic freight routes. Protect
            the value of your shipment against sea risks, extreme weather, and port handling damage —
            from the moment goods leave your warehouse until they reach their destination.
          </p>
          <QuoteButton cluster="marine" lang="en" variant="gold" className="!rounded-xl !px-6 !py-3 !text-sm" />
        </div>
      </section>

      {/* Why This Route Carries Risk */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Understanding the Risk"
            title="Why Batam–Jakarta Shipments Need Protection"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Batam is an island — there is no overland route to Java. Every shipment bound for
                Jakarta must cross the Karimata Strait and the Java Sea, both of which experience
                significant wave action, particularly during the west monsoon season.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Batam's manufacturing industries — electronics, oil & gas components, shipbuilding
                parts, and automotive components — regularly ship goods worth billions of rupiah to
                Jakarta every week. The financial exposure without cargo insurance is substantial.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Marine Cargo Insurance provides <strong>warehouse-to-warehouse</strong> protection:
                from your Batam storage facility, throughout the sea voyage, until goods are received
                at the destination warehouse in Jakarta.
              </p>
            </div>
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle size={20} style={{ color: "#b45309" }} />
                <span className="font-bold text-amber-800">Key Risks on the Batam–Jakarta Route</span>
              </div>
              <ul className="space-y-3">
                {RISKS.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#1a4fa0" }} />
                    <span className="text-sm text-gray-700">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ICC Clauses */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Policy Options"
            title="ICC Clauses Available for Domestic Shipments"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                label: "ICC (C)",
                title: "Basic Cover",
                color: "#4a7fb5",
                desc: "Covers major named perils: fire, explosion, vessel stranding, and collision. Suitable for general goods with lower declared value.",
                rec: false,
              },
              {
                label: "ICC (B)",
                title: "Intermediate Cover",
                color: "#1a4fa0",
                desc: "All ICC (C) risks plus heavy waves, sea water ingress, earthquake, and partial theft. Suitable for consumer goods and furniture.",
                rec: true,
              },
              {
                label: "ICC (A)",
                title: "Broadest Cover",
                color: "#0a1628",
                desc: "All risks — covers everything not specifically excluded. Recommended for electronics, industrial components, and high-value goods from Batam.",
                rec: false,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100 relative"
              >
                {item.rec && (
                  <div
                    className="absolute -top-3 right-4 text-xs font-bold px-3 py-1 rounded-full text-white"
                    style={{ background: "#c9a84c" }}
                  >
                    Popular
                  </div>
                )}
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

      {/* Required Documents */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Claim Preparation"
            title="Key Documents for Batam–Jakarta Shipments"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            {DOCUMENTS.map((d) => (
              <div
                key={d.label}
                className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50"
              >
                <Package size={20} className="flex-shrink-0 mt-0.5" style={{ color: "#1a4fa0" }} />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{d.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{d.desc}</p>
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
            title="Common Questions on Batam–Jakarta Cargo Insurance"
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
                <li><a href="/en/blog/batam-export-cargo-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Batam Export Cargo Insurance</a></li>
                <li><a href="/en/blog/batam-singapore-shipping-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Batam–Singapore Shipping Insurance</a></li>
                <li><a href="/en/blog/how-to-claim-marine-cargo-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ How to Claim Marine Cargo Insurance</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <QuoteCard cluster="marine" />
    </>
  );
        }

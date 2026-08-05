// app/en/blog/marine-cargo-insurance-premium-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { WHATSAPP_URL } from "@/lib/constants";
import { Breadcrumb, CTASection, SectionHeader } from "@/components/ui/index";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CheckCircle2, Calculator } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "How Marine Cargo Insurance Premiums Are Set in Batam | Batam Insurance",
  description:
    "What actually goes into the price of marine cargo insurance in Batam? Walk through the premium formula, the factors underwriters weigh, and how to get solid coverage without overpaying. Contact Rio!",
  canonical: "/en/blog/marine-cargo-insurance-premium-batam",
  languages: {
    id: "https://asuransibatam.com/blog/premi-asuransi-marine-cargo-batam",
    en: "https://asuransibatam.com/en/blog/marine-cargo-insurance-premium-batam",
  },
});

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Actually Determines Your Marine Cargo Insurance Premium in Batam",
  description:
    "A practical walkthrough of how marine cargo insurance premiums are set in Batam, covering the rating factors, policy structures, and tips for getting solid coverage at a fair price.",
  url: "https://asuransibatam.com/en/blog/marine-cargo-insurance-premium-batam",
  datePublished: "2026-05-08",
  dateModified: "2026-08-04",
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
    q: "Do I pay the cargo premium per shipment, or once a year?",
    a: "Either structure is available. An open cover (annual) policy fits exporters or distributors shipping on a regular basis — you pay upfront and simply declare each shipment to get a certificate. A per-voyage policy works better if your shipments are one-off or infrequent.",
  },
  {
    q: "Is there a floor on cargo value before insurance makes sense?",
    a: "There's no formal minimum. That said, for goods worth under IDR 5 million, the premium can end up disproportionate to what you'd actually recover in a claim, making cover less worthwhile. Once a shipment crosses roughly IDR 50 million, cargo insurance becomes well worth arranging.",
  },
  {
    q: "How do I land on the right sum insured?",
    a: "The usual approach is the CIF (Cost + Insurance + Freight) value of the goods, plus a 10% allowance for anticipated profit. Steer clear of under-insuring — if a claim comes in, any shortfall gets applied proportionally and your payout shrinks accordingly.",
  },
  {
    q: "What does a deductible mean on a cargo policy?",
    a: "A deductible (sometimes called an excess) is the slice of any loss you absorb yourself before the insurer starts paying. Say the deductible is IDR 1 million and the loss totals IDR 10 million — the insurer covers IDR 9 million. Opting for a higher deductible brings your premium down.",
  },
  {
    q: "Can a clean claims history get me a better rate?",
    a: "Yes. Policyholders with a low loss ratio — few or no claims — typically see a discount or no-claim reduction when they renew. It's one of the clearest advantages an annual open cover has over arranging cover voyage by voyage.",
  },
];

const FACTORS = [
  {
    title: "Declared Cargo Value (Sum Insured)",
    desc: "A higher declared value pushes up the absolute premium even when the percentage rate itself doesn't change.",
  },
  {
    title: "Commodity Type & Condition",
    desc: "Fragile items, liquids, or chemicals sit at a higher rate than steel or building materials simply because their risk profile is greater.",
  },
  {
    title: "Route & Distance",
    desc: "A domestic run like Batam–Jakarta is priced differently than an international leg such as Batam–Singapore or Batam–Port Klang.",
  },
  {
    title: "Which ICC Clause You Pick",
    desc: "ICC (A) costs the most because it covers the most. ICC (C) is the cheapest option, but the protection it offers is correspondingly narrow.",
  },
  {
    title: "Packaging & How It's Loaded",
    desc: "FCL (Full Container Load) shipments generally rate lower than LCL or break-bulk cargo, since the damage exposure is easier to contain.",
  },
  {
    title: "Your Claims History",
    desc: "A track record with few claims earns better pricing at renewal — one of the practical upsides of sticking with an annual open cover arrangement.",
  },
];

export default function MarineCargoPremiENPage() {
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
              { name: "Marine Cargo Premium Batam", url: "/en/blog/marine-cargo-insurance-premium-batam" },
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
              { label: "Cargo Premium Guide" },
            ]}
          />
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
            >
              <Calculator size={24} style={{ color: "#0a1628" }} />
            </div>
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ background: "#c9a84c20", color: "#f0d080" }}
            >
              Premium Guide
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            What Does Marine Cargo<br />Insurance Cost in Batam?
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            There's no single flat rate for marine cargo insurance — the premium shifts based on
            several factors specific to your shipment. Here's how the calculation actually works,
            what pushes the cost up or down, and how to get solid coverage without overpaying.
          </p>
          <a
            href={WHATSAPP_URL("Hello Rio, I would like a premium estimate for marine cargo insurance from Batam")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold rounded-xl"
            style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)", color: "#0a1628" }}
          >
            Get a Free Premium Estimate
          </a>
        </div>
      </section>

      {/* Premium Formula */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Premium Formula"
            title="The Math Behind a Marine Cargo Premium"
          />
          <div className="mt-10 space-y-6">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <p className="text-sm font-bold text-blue-800 mb-2 uppercase tracking-wide">Basic Formula</p>
              <p className="text-2xl font-bold text-blue-900 font-mono">
                Premium = Sum Insured × Rate (%)
              </p>
              <p className="text-sm text-blue-700 mt-3">
                Sum Insured = CIF value of the goods + 10% (anticipated profit allowance)
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <p className="text-sm font-bold text-gray-700 mb-4">Worked Example:</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Cargo value (CIF)</span>
                  <span className="font-semibold">IDR 400,000,000</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Sum Insured (CIF + 10%)</span>
                  <span className="font-semibold">IDR 440,000,000</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Rate – ICC (B), domestic route</span>
                  <span className="font-semibold">~0.15% – 0.25%</span>
                </div>
                <div className="flex justify-between pt-2 text-blue-800 font-bold">
                  <span>Estimated Premium</span>
                  <span>IDR 660,000 – IDR 1,100,000</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                *These rates are illustrative only. The underwriter sets the actual rate based on commodity type, route, and the ICC clause chosen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Factors */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Rating Factors"
            title="What Actually Moves Your Cargo Premium"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {FACTORS.map((f, i) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold mb-3"
                  style={{ background: "#1a4fa0" }}
                >
                  {i + 1}
                </div>
                <h3 className="font-bold mb-2 text-sm" style={{ color: "#0a1628" }}>
                  {f.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Type Comparison */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Per-Voyage vs Open Cover"
            title="Picking the Policy Structure That Fits Your Business"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {[
              {
                title: "Per-Voyage Policy",
                color: "#4a7fb5",
                points: [
                  "Suited to a single shipment or infrequent shipping",
                  "You pay a premium for each individual shipment",
                  "No ongoing reporting obligations",
                  "A natural fit for SMEs or first-time shippers",
                  "Flexible, with no annual commitment attached",
                ],
              },
              {
                title: "Open Cover Policy (Annual)",
                color: "#0a1628",
                points: [
                  "Built for shippers moving cargo on a regular monthly basis",
                  "One policy sits behind every shipment across the year",
                  "You declare each voyage and receive a certificate per shipment",
                  "Works out cheaper per shipment once volume picks up",
                  "Opens the door to a no-claim discount at renewal",
                ],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 border"
                style={{ borderColor: item.color + "40", background: item.color + "08" }}
              >
                <div
                  className="inline-block text-white text-xs font-bold px-3 py-1 rounded-full mb-4"
                  style={{ background: item.color }}
                >
                  {item.title}
                </div>
                <ul className="space-y-2">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: item.color }} />
                      {p}
                    </li>
                  ))}
                </ul>
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
            title="Marine Cargo Premium — Questions People Actually Ask"
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
                <li><a href="/en/blog/batam-export-cargo-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Batam Export Cargo Insurance</a></li>
                <li><a href="/en/blog/batam-jakarta-cargo-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Batam–Jakarta Cargo Insurance</a></li>
                <li><a href="/en/blog/batam-singapore-shipping-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Batam–Singapore Shipping Insurance</a></li>
                <li><a href="/en/blog/how-to-claim-marine-cargo-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ How to Claim Marine Cargo Insurance</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CTASection
        title="Get Your Marine Cargo Premium Calculated"
        waMsg="Hello Rio, I would like a premium estimate for marine cargo insurance from Batam"
      />
    </>
  );
}

// app/en/blog/machinery-heavy-equipment-shipping-insurance-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { WHATSAPP_URL } from "@/lib/constants";
import { Breadcrumb, SectionHeader } from "@/components/ui/index";
import QuoteCard from "@/components/quote/QuoteCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CheckCircle2, Wrench, AlertTriangle } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Machinery & Heavy Equipment Shipping Insurance Batam – Marine Cargo Coverage",
  description:
    "Cargo insurance for machinery and heavy equipment shipped from Batam. Protection for excavators, cranes, generators, and industrial machines in transit. Contact Rio!",
  canonical: "/en/blog/machinery-heavy-equipment-shipping-insurance-batam",
  languages: {
    id: "https://asuransibatam.com/blog/asuransi-pengiriman-mesin-alat-berat",
    en: "https://asuransibatam.com/en/blog/machinery-heavy-equipment-shipping-insurance-batam",
  },
});

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Machinery and Heavy Equipment Shipping Insurance from Batam",
  description:
    "A guide to marine cargo insurance for shipping industrial machinery and heavy equipment from Batam, covering unique transit risks, policy types, and claims procedures.",
  url: "https://asuransibatam.com/en/blog/machinery-heavy-equipment-shipping-insurance-batam",
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
    q: "Can marine cargo insurance cover machinery and heavy equipment?",
    a: "Yes. Marine Cargo Insurance can cover the transit of industrial machinery and heavy equipment — whether shipped by sea, overland, or a combination of both. This is distinct from Machinery Insurance, which covers operational risks while the equipment is in use at a work site.",
  },
  {
    q: "What are the biggest risks when shipping machinery by sea?",
    a: "The main risks include: physical damage from shock and vessel movement during loading/unloading, rust and corrosion from exposure to salt-laden sea air, deformation from improper cargo stacking, and damage to electronic or hydraulic components from moisture and vibration. Oversized machinery shipped as breakbulk cargo is generally more exposed than containerised goods.",
  },
  {
    q: "Is there a difference between insuring new vs second-hand machinery?",
    a: "Yes. New machinery is generally easier and less expensive to insure as its condition and value are clearly established. Second-hand equipment typically requires a pre-shipment condition survey, and premiums may be higher. Some insurers also restrict coverage for machinery beyond a certain age.",
  },
  {
    q: "Is a pre-shipment survey required for high-value machinery?",
    a: "For machinery above a certain declared value threshold (commonly above IDR 500 million, or as specified by the insurer), a condition survey prior to loading is typically required. This survey confirms the equipment is fit for transit and supports the claims process if damage occurs.",
  },
  {
    q: "Can machinery shipped in a knocked-down (KD) condition be insured?",
    a: "Yes. Machinery shipped in knocked-down or partially assembled form can be fully insured. Ensure all components are listed in the packing list and that the policy covers loading and unloading risks at the port.",
  },
];

const MACHINERY_TYPES = [
  { name: "Excavators & Bulldozers", note: "Shipped on flat rack or open deck" },
  { name: "Tower Cranes & Mobile Cranes", note: "Require dismantling and specialist packing" },
  { name: "Generator Sets & Power Plants", note: "Sensitive to moisture and vibration" },
  { name: "CNC & Industrial Press Machines", note: "Precision components require sturdy crating" },
  { name: "Industrial Pumps & Compressors", note: "Frequently shipped knocked-down" },
  { name: "Boilers & Heat Exchangers", note: "Oversized — breakbulk or heavy-lift cargo" },
  { name: "Industrial Transformers & Switchgear", note: "Highly sensitive to water and vibration" },
  { name: "Drilling Equipment & Rig Parts", note: "Offshore or mine site destination routes" },
];

const SPECIFIC_RISKS = [
  {
    title: "Breakbulk & Heavy-Lift Exposure",
    icon: "⚓",
    desc: "Large machinery that cannot fit in standard containers must be shipped as breakbulk on open decks, increasing exposure to weather and the risk of shifting or falling.",
  },
  {
    title: "Corrosion from Marine Atmosphere",
    icon: "🌊",
    desc: "Exposure to salt-laden sea air and spray can cause rapid corrosion of unprotected iron and steel components, even during short transits.",
  },
  {
    title: "Shock & Continuous Vibration",
    icon: "📳",
    desc: "Constant vessel movement in rough seas causes vibration that can damage precision components, bearings, or structural frames.",
  },
  {
    title: "Port Handling Damage",
    icon: "🏗️",
    desc: "Improper use of slings or port cranes during loading and unloading can cause structural damage or destroy sensitive components.",
  },
];

export default function MachineryShippingInsuranceENPage() {
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
              { name: "Machinery Shipping Insurance Batam", url: "/en/blog/machinery-heavy-equipment-shipping-insurance-batam" },
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
              { label: "Machinery Shipping Insurance" },
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
              Cargo – Machinery & Heavy Equipment
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Machinery & Heavy Equipment<br />Shipping Insurance
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Industrial machinery and heavy equipment are high-value assets that face unique risks
            during sea transit — from saltwater corrosion and wave shock to port handling damage.
            Make sure your investment is protected from the first leg of the journey.
          </p>
          <a
            href={WHATSAPP_URL("Hello Rio, I need cargo insurance for shipping machinery/heavy equipment from Batam")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold rounded-xl"
            style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)", color: "#0a1628" }}
          >
            Consult Machinery Cargo Insurance
          </a>
        </div>
      </section>

      {/* Why Machinery Is Different */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Specialist Cargo"
            title="Why Machinery Shipments Demand Specialist Coverage"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Unlike standard consumer goods, industrial machinery and heavy equipment have
                characteristics that make them both more vulnerable and more complex to handle
                during transit:
              </p>
              <ul className="space-y-3">
                {[
                  "Oversize and heavyweight — often cannot fit in standard shipping containers",
                  "Very high unit value — a single loss can run into billions of rupiah",
                  "Sensitive sub-components (electronics, hydraulics, pneumatics) are moisture-prone",
                  "Require specialist crating and load-securing methods",
                  "Often shipped to remote, offshore, or challenging final destinations",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#1a4fa0" }} />
                    <span className="text-sm text-gray-700">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle size={20} style={{ color: "#b45309" }} />
                <span className="font-bold text-amber-800">Key Risks in Machinery Shipping</span>
              </div>
              <div className="space-y-4">
                {SPECIFIC_RISKS.map((r) => (
                  <div key={r.title} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{r.icon}</span>
                    <div>
                      <p className="font-semibold text-sm text-amber-900">{r.title}</p>
                      <p className="text-xs text-amber-700 mt-0.5 leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery Types */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Commodity Coverage"
            title="Types of Machinery and Equipment That Can Be Insured"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            {MACHINERY_TYPES.map((m) => (
              <div
                key={m.name}
                className="bg-white rounded-xl p-5 flex items-start gap-4 shadow-sm border border-blue-100"
              >
                <Wrench size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#1a4fa0" }} />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{m.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{m.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cargo vs Machinery Insurance */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Key Distinction"
            title="Cargo Insurance vs Machinery Insurance — What's the Difference?"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {[
              {
                title: "Marine Cargo Insurance",
                color: "#1a4fa0",
                points: [
                  "Protects machinery DURING the shipping/transit process",
                  "Active from origin warehouse to destination warehouse",
                  "Covers physical damage from transit-related perils",
                  "Ends once the machinery is delivered and accepted",
                  "What you need: when shipping equipment from Batam",
                ],
              },
              {
                title: "Machinery Insurance (MB / EAR)",
                color: "#4a7fb5",
                points: [
                  "Protects machinery WHILE IN OPERATION at the work site",
                  "Active throughout the operational life of the equipment",
                  "Covers mechanical breakdown, electrical failure, sabotage",
                  "For construction projects or operating factories",
                  "A separate product: Machinery Breakdown / EAR Insurance",
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
          <div className="mt-6 p-5 rounded-2xl bg-blue-50 border border-blue-200 text-sm text-blue-800">
            💡 <strong>Pro tip:</strong> For complete protection, many companies combine both —
            Marine Cargo Insurance during transit, and Machinery Insurance once the equipment
            arrives and begins operating at the site.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" style={{ background: "#faf8f3" }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title="Common Questions on Machinery Shipping Insurance"
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
                <li><a href="/en/machinery-insurance/heavy-equipment-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Heavy Equipment Insurance Batam</a></li>
                <li><a href="/en/machinery-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Machinery Insurance Batam</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Related Articles</p>
              <ul className="space-y-2">
                <li><a href="/en/blog/heavy-equipment-insurance-construction-projects" className="text-sm text-blue-700 hover:underline font-medium">→ Heavy Equipment Insurance for Construction</a></li>
                <li><a href="/en/blog/mining-heavy-equipment-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Mining Heavy Equipment Insurance</a></li>
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

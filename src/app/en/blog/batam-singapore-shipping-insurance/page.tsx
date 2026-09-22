// app/en/blog/batam-singapore-shipping-insurance/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";
import {
  Ship,
  Container,
  Zap,
  Plane,
  TrafficCone,
  CloudLightning,
  PackageX,
  ShieldAlert,
  Droplets,
  FileCheck,
  Percent,
  Layers,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Batam-Singapore Cargo Shipping Insurance",
  description:
    "Everything importers and exporters need to know about marine cargo insurance on the Batam–Singapore route: Incoterms, policy clauses, route risks, and open cover. Call Rio +62813-7333-6728.",
  canonical: "https://asuransibatam.com/en/blog/batam-singapore-shipping-insurance",
  languages: {
    en: "https://asuransibatam.com/en/blog/batam-singapore-shipping-insurance",
    id: "https://asuransibatam.com/blog/asuransi-pengiriman-batam-singapore",
  },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Batam–Singapore Cargo Shipping Insurance – Complete Guide for Exporters",
  description: "Everything importers and exporters need to know about marine cargo insurance on the Batam–Singapore route: Incoterms, policy clauses, route risks, and open cover.",
  datePublished: "2026-05-07",
  dateModified: "2026-05-07",
  inLanguage: "en",
  author: { "@type": "Person", name: "Rio", jobTitle: "Insurance Practitioner", telephone: "+6281373336728" },
  publisher: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", url: "https://asuransibatam.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://asuransibatam.com/en/blog/batam-singapore-shipping-insurance" },
};

const METHODS = [
  { icon: Ship, title: "Roll-on/Roll-off (RoRo) Ferry", desc: "Trucks or containers drive directly onto the vessel. Transit time: approximately 45–60 minutes." },
  { icon: Container, title: "Conventional Ferry + Barge", desc: "Cargo transported separately from vehicles, typically in containers or break-bulk. Used for heavy or oversized cargo." },
  { icon: Zap, title: "Speedboat / Cargo Pompong", desc: "Small fast craft for urgent or small-volume shipments. More vulnerable to water ingress due to vessel size." },
  { icon: Plane, title: "Air Freight via Hang Nadim Airport", desc: "For high-value or time-critical goods. Standard marine cargo policies generally extend to cover air freight." },
];

const RISKS = [
  { icon: TrafficCone, title: "Singapore Strait Traffic Congestion", desc: "Over 1,000 vessel movements per day — supertankers, bulk carriers, and large container ships sharing the passage with small ferry craft. Collision and near-miss risk is higher here than on open ocean routes." },
  { icon: CloudLightning, title: "Unpredictable Weather During Monsoon Transitions", desc: "Between March–May and October–December, sudden squalls with high waves and strong winds can develop quickly. Smaller vessels are particularly vulnerable." },
  { icon: PackageX, title: "Terminal Handling Damage", desc: "Rough handling during loading/unloading at Batam Centre Ferry Terminal, Sekupang, or Singapore's Tanah Merah Ferry Terminal is the highest-risk point for fragile and electronic goods." },
  { icon: ShieldAlert, title: "Theft and Pilferage", desc: "Break-bulk cargo waiting in open quayside areas is more exposed, especially during night operations or peak congestion periods." },
  { icon: Droplets, title: "Moisture and Water Ingress", desc: "For cargo on speedboats or open barges, rainwater and sea spray are real risks for goods that are not moisture-proof packaged." },
];

export default function BatamSingaporeShippingInsurancePage() {
  return (
    <ArticleLayout
      title="Batam–Singapore Cargo Shipping Insurance – Complete Guide for Exporters"
      description="Less than 20 kilometres of water, but the risks of the Batam–Singapore corridor are real. A guide to choosing the right cargo insurance for this route."
      date="May 7, 2026"
      readTime="9 min read"
      category="Marine"
      breadcrumbs={[{ label: "Batam–Singapore Shipping Insurance", href: "/en/blog/batam-singapore-shipping-insurance" }]}
      schema={schema}
    >
      <h2>Batam and Singapore: Less Than 20 Kilometres, More Than You Think at Stake</h2>
      <p>
        The Singapore Strait separates Batam from Singapore by under 20 kilometres — but economically, the two are inseparably linked. Every day, hundreds of shipments cross this corridor: electronic components from Batamindo industrial zone to Singapore manufacturers, processed food products, industrial spare parts, and a wide range of export commodities.
      </p>
      <p>
        The short distance leads many business owners to assume the risk is low and skip cargo insurance altogether. This is a misjudgement. <strong>Short distance does not reduce handling damage at the terminal, theft risk on the quayside, or water ingress during transit.</strong> The Singapore Strait handles over 1,000 vessel movements per day — congestion increases incident risk significantly.
      </p>

      <h2>Common Shipping Methods on the Batam–Singapore Route</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {METHODS.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl p-5 bg-white border border-[#e2e8f0] shadow-sm">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: "#0a162810" }}>
              <Icon size={20} style={{ color: "#0a1628" }} />
            </div>
            <p className="font-bold text-sm mb-1.5" style={{ color: "#0a1628" }}>{title}</p>
            <p className="text-sm text-[#475569]">{desc}</p>
          </div>
        ))}
      </div>

      <h2>Route-Specific Risks on the Batam–Singapore Corridor</h2>
      <div className="not-prose space-y-3 my-6">
        {RISKS.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-start gap-4 p-4 rounded-xl bg-[#faf8f3] border border-[#e2e8f0]">
            <Icon size={20} className="flex-shrink-0 mt-0.5" style={{ color: "#a07830" }} />
            <div>
              <p className="font-semibold text-sm" style={{ color: "#0a1628" }}>{title}</p>
              <p className="text-sm text-[#475569] mt-0.5">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Incoterms and Who Must Buy Insurance</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg">Incoterms</th>
              <th className="text-left px-4 py-3">Risk Transfers to Buyer</th>
              <th className="text-left px-4 py-3 rounded-tr-lg">Who Should Buy Insurance</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["EXW (Ex Works)", "At seller's premises in Batam", "Buyer (Singapore importer)"],
              ["FOB (Free on Board)", "When goods cross ship's rail in Batam", "Buyer"],
              ["CFR (Cost & Freight)", "When goods cross ship's rail in Batam", "Buyer (seller pays freight, not risk)"],
              ["CIF (Cost, Insurance & Freight)", "When goods cross ship's rail", "Seller must purchase for buyer's benefit"],
              ["DAP (Delivered at Place)", "At named destination in Singapore", "Seller"],
            ].map(([inc, risk, who], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="px-4 py-3 font-bold text-[#1a4fa0] border-b border-[#e2e8f0]">{inc}</td>
                <td className="px-4 py-3 text-[#374151] border-b border-[#e2e8f0]">{risk}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#e2e8f0]">{who}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="not-prose my-6 p-4 rounded-xl border-l-4 border-[#c9a84c] bg-[#faf8f3] text-sm text-[#374151]">
        <strong style={{ color: "#0a1628" }}>A critical note on CIF:</strong> Many Batam exporters selling CIF purchase the minimum coverage required by the contract rather than coverage that actually protects the buyer's interest. A low ICC (C) policy purchased just to satisfy the contract leaves the importer underprotected while believing they are covered.
      </div>

      <h2>Choosing the Right Clause for This Route</h2>
      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="rounded-2xl p-5 border" style={{ borderColor: "#1a4fa025", background: "#1a4fa008" }}>
          <div className="flex items-center gap-2 mb-2">
            <Layers size={18} style={{ color: "#1a4fa0" }} />
            <p className="font-bold text-sm" style={{ color: "#0a1628" }}>ICC (A) — recommended for</p>
          </div>
          <p className="text-sm text-[#475569]">Electronics, circuit boards, medical equipment, precision instruments, goods valued above USD 10,000 per shipment, and moisture-sensitive items.</p>
        </div>
        <div className="rounded-2xl p-5 border" style={{ borderColor: "#c9a84c30", background: "#faf8f3" }}>
          <div className="flex items-center gap-2 mb-2">
            <Layers size={18} style={{ color: "#a07830" }} />
            <p className="font-bold text-sm" style={{ color: "#0a1628" }}>ICC (B) or (C) — worth considering for</p>
          </div>
          <p className="text-sm text-[#475569]">Industrial raw materials (steel, plastics, bulk chemicals), agricultural and fishery commodities, and robust low-value cargo.</p>
        </div>
      </div>
      <p><strong>Relevant additional clauses:</strong> War &amp; Strikes Clause (typically automatic for international routes), Institute Theft, Pilferage &amp; Non-Delivery (TPND) Clause, and Refrigeration Clause for frozen or temperature-controlled shipments.</p>

      <h2>What Does Cargo Insurance Cost on This Route?</h2>
      <p>Because this is a short, well-established corridor, premiums tend to be competitive:</p>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
        {[
          ["ICC (A) for electronics", "0.2% – 0.4%"],
          ["ICC (A) for general cargo", "0.1% – 0.25%"],
          ["ICC (C) for bulk cargo", "from 0.05%"],
        ].map(([label, rate]) => (
          <div key={label} className="rounded-2xl p-4 text-center bg-white border border-[#e2e8f0]">
            <Percent size={18} className="mx-auto mb-2" style={{ color: "#c9a84c" }} />
            <p className="text-xs text-[#475569] mb-1">{label}</p>
            <p className="font-display font-bold text-lg" style={{ color: "#0a1628" }}>{rate}</p>
          </div>
        ))}
      </div>
      <p>
        For regular shippers, consider an <strong>Open Cover Policy</strong> — a standing arrangement that automatically covers each shipment within a defined period without requiring a new policy for every dispatch. This reduces administrative burden and typically lowers the per-shipment cost.
      </p>

      <h2>A Real-World Scenario: Electronics Damaged at Tanah Merah Terminal</h2>
      <div className="not-prose my-6 p-5 rounded-2xl border-l-4 border-[#c9a84c] bg-[#faf8f3] flex items-start gap-4">
        <FileCheck size={22} className="flex-shrink-0 mt-0.5" style={{ color: "#a07830" }} />
        <p className="text-sm text-[#374151] m-0">
          An electronics firm in Batamindo shipped 50 cartons of circuit board components to a buyer in
          Singapore via cargo ferry. During unloading at Tanah Merah Ferry Terminal, 8 cartons were dropped
          by a forklift and damaged — total loss approximately SGD 12,000. Because the policy was ICC (A)
          with the TPND clause, and the receiving staff immediately noted the damage on the delivery order
          before signing, the claim was processed within <strong style={{ color: "#0a1628" }}>3 weeks</strong>.
          Without insurance, the company would have faced either absorbing the full loss or pursuing the
          ferry operator through a prolonged legal process with an uncertain outcome.
        </p>
      </div>

      <div className="mt-10 p-6 bg-[#0a1628] rounded-2xl text-white not-prose">
        <h3 className="font-display font-bold text-lg text-[#c9a84c] mb-2">Consult on Cargo Insurance for Your Batam–Singapore Shipments</h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          I assist exporters and importers across Batam in selecting the correct policy aligned to their Incoterms, cargo type, and shipment frequency — including structuring Open Cover for regular shippers on this corridor.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="https://wa.me/6281373336728?text=Hello%20Rio%2C%20I%20would%20like%20to%20consult%20about%20cargo%20insurance%20Batam%20Singapore"
            target="_blank" rel="noopener noreferrer"
            className="px-5 py-3 bg-[#c9a84c] text-[#0a1628] font-bold rounded-xl text-sm text-center hover:bg-[#f0d080] transition-colors">
            WhatsApp Consultation
          </a>
          <Link href="/en/marine-insurance/marine-cargo"
            className="px-5 py-3 border border-white/30 text-white font-semibold rounded-xl text-sm text-center hover:bg-white/10 transition-colors">
            Marine Cargo Insurance
          </Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0] not-prose">
        <p className="text-sm font-display font-semibold text-[#0a1628] mb-3">Related Articles</p>
        <div className="flex flex-col gap-2">
          <Link href="/en/blog/how-to-claim-marine-cargo-insurance" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ How to Claim Marine Cargo Insurance</Link>
          <Link href="/en/blog/marine-hull-vs-cargo-insurance" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Marine Hull vs Cargo Insurance</Link>
          <Link href="/en/marine-insurance/marine-cargo" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Marine Cargo Insurance Batam</Link>
        </div>
      </div>
    
      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Related Pages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Related Articles</p>
            <ul className="space-y-2">
              <li><a href="/en/blog/batam-export-cargo-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Batam Export Cargo Insurance</a></li>
              <li><a href="/en/blog/marine-cargo-insurance-premium-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Cargo Insurance Premium Batam</a></li>
              <li><a href="/en/blog/batam-jakarta-cargo-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Batam–Jakarta Cargo Insurance</a></li>
              <li><a href="/en/blog/pa-insurance-foreign-workers-singapore-from-batam" className="text-sm text-blue-700 hover:underline font-medium">→ PA Insurance for Foreign Workers Travelling to Singapore</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}

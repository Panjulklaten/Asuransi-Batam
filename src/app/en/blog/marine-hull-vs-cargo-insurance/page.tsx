// app/en/blog/marine-hull-vs-cargo-insurance/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";
import {
  Ship,
  Package,
  Gavel,
  Percent,
  Anchor,
  Container,
  Layers,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Marine Hull Insurance vs Marine Cargo Insurance, Explained",
  description:
    "A plain-language breakdown of marine hull (the vessel) and marine cargo (the goods) insurance: who each one is for, what it actually covers, and how the two interact. Consult Rio +62813-7333-6728.",
  canonical: "https://asuransibatam.com/en/blog/marine-hull-vs-cargo-insurance",
  languages: {
    en: "https://asuransibatam.com/en/blog/marine-hull-vs-cargo-insurance",
    id: "https://asuransibatam.com/blog/perbedaan-marine-hull-vs-cargo",
  },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Marine Hull vs Marine Cargo Insurance: How They Differ and Why It Matters",
  description: "A plain-language breakdown of marine hull (the vessel) and marine cargo (the goods) insurance: who each one is for, what it actually covers, and how the two interact.",
  datePublished: "2026-05-07",
  dateModified: "2026-08-04",
  inLanguage: "en",
  author: { "@type": "Person", name: "Rio", jobTitle: "Insurance Practitioner", telephone: "+6281373336728" },
  publisher: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", url: "https://asuransibatam.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://asuransibatam.com/en/blog/marine-hull-vs-cargo-insurance" },
};

export default function MarineHullVsCargoPage() {
  return (
    <ArticleLayout
      title="Marine Hull vs Marine Cargo Insurance: How They Differ and Why It Matters"
      description="Insuring the ship doesn't mean your goods are covered too. Here's the core distinction between these two products, laid out before you have to find out the hard way."
      date="May 7, 2026"
      readTime="7 min read"
      category="Marine"
      breadcrumbs={[{ label: "Marine Hull vs Cargo Insurance", href: "/en/blog/marine-hull-vs-cargo-insurance" }]}
      schema={schema}
    >
      <h2>The Expensive Assumption: &quot;The Vessel Is Insured, So My Goods Must Be Too&quot;</h2>
      <p>
        This is one of the costliest misunderstandings I run into when advising clients around Batam. Owners of the goods being shipped often assume that because the vessel carrying their cargo has insurance, their shipment is riding along under that same protection.
      </p>
      <p>
        It isn&apos;t. <strong>Marine hull and marine cargo insurance are two completely separate products</strong> — different insured objects, different policyholders, and different claims processes entirely.
      </p>

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
        <div className="rounded-2xl border-2 p-6" style={{ borderColor: "#0a162820", background: "#0a16280a" }}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "linear-gradient(135deg, #0a1628, #1a4fa0)" }}>
            <Ship size={24} className="text-white" />
          </div>
          <h3 className="font-display font-bold text-lg mb-2" style={{ color: "#0a1628" }}>Marine Hull Insurance</h3>
          <p className="text-sm text-[#475569] mb-3">
            Covers the <strong className="text-[#0a1628]">physical vessel and everything permanently built into it</strong> — the hull itself, onboard machinery, navigation gear, and any equipment that's a fixed part of the ship.
          </p>
          <p className="text-sm text-[#475569] mb-1"><strong className="text-[#0a1628]">Typical buyer:</strong> owners and operators of vessels — shipping lines, ferry operators, tugboat owners, patrol boat fleets.</p>
          <p className="text-sm text-[#475569]"><strong className="text-[#0a1628]">What it pays for:</strong> hull damage from collision, grounding, or heavy weather; machinery breakdown (as an add-on); collision liability; and total loss.</p>
        </div>
        <div className="rounded-2xl border-2 p-6" style={{ borderColor: "#c9a84c30", background: "#faf8f3" }}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}>
            <Package size={24} style={{ color: "#0a1628" }} />
          </div>
          <h3 className="font-display font-bold text-lg mb-2" style={{ color: "#0a1628" }}>Marine Cargo Insurance</h3>
          <p className="text-sm text-[#475569] mb-3">
            Covers <strong className="text-[#0a1628]">the goods in transit</strong> — not the ship carrying them. It travels with the goods from the shipper&apos;s warehouse to the consignee&apos;s door, including time spent at terminals, inside containers, and across changes of transport mode.
          </p>
          <p className="text-sm text-[#475569]"><strong className="text-[#0a1628]">Typical buyer:</strong> whoever owns the goods — a shipper, importer, exporter, or trading company. Exactly who that is depends on the Incoterms agreed in the sale.</p>
        </div>
      </div>

      <h2>Three Levels of Cover Under the Institute Cargo Clauses (ICC)</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg">Clause</th>
              <th className="text-left px-4 py-3">What It Covers</th>
              <th className="text-left px-4 py-3 rounded-tr-lg">Suited For</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["ICC (A)", "All risks — everything except what's specifically excluded", "High-value goods, electronics, machinery"],
              ["ICC (B)", "Named perils only — fire, collision, sinking, and similar events", "Bulk commodities, raw materials"],
              ["ICC (C)", "A narrower set of perils — major and total losses only", "Low-value cargo with lower exposure"],
            ].map(([clause, scope, best], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="px-4 py-3 font-bold text-[#1a4fa0] border-b border-[#e2e8f0]">{clause}</td>
                <td className="px-4 py-3 text-[#374151] border-b border-[#e2e8f0]">{scope}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#e2e8f0]">{best}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Hull vs Cargo, Side by Side</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg">Point of Comparison</th>
              <th className="text-left px-4 py-3">Marine Hull</th>
              <th className="text-left px-4 py-3 rounded-tr-lg">Marine Cargo</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["What's insured", "The vessel itself", "The goods being carried"],
              ["Who holds the policy", "The vessel owner", "The cargo owner"],
              ["What it follows", "The ship", "The shipment's journey"],
              ["When it's active", "Whenever the vessel operates", "While goods are in transit"],
              ["How value is set", "Market value of the vessel", "Invoice value plus a margin"],
              ["Who files the claim", "Owner or operator of the ship", "Shipper or consignee"],
            ].map(([aspect, hull, cargo], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="px-4 py-3 font-medium text-[#0a1628] border-b border-[#e2e8f0]">{aspect}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#e2e8f0]">{hull}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#e2e8f0]">{cargo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>What Happens When Both Get Triggered by the Same Incident</h2>
      <div className="not-prose my-6 p-5 rounded-2xl border-l-4 border-[#c9a84c] bg-[#faf8f3] flex items-start gap-4">
        <Container size={22} className="flex-shrink-0 mt-0.5" style={{ color: "#a07830" }} />
        <p className="text-sm text-[#374151] m-0">
          Picture a small cargo vessel on the Batam–Jakarta route catching fire on deck and ruining part of what's on board. The vessel owner files a hull claim for the structural damage. Separately, each cargo owner whose goods were affected files their own claim under their own cargo policy. These claims run <strong style={{ color: "#0a1628" }}>side by side, entirely independent of one another</strong> — a delay or dispute on one has no bearing on the other. That's how a single fire can produce dozens of distinct cargo claims from different owners, alongside just one hull claim from the vessel's owner.
        </p>
      </div>

      <h2>Won't the Carrier Just Pay for Cargo Damage?</h2>
      <div className="not-prose my-6 p-5 rounded-2xl border flex items-start gap-4" style={{ borderColor: "#0a162820", background: "#0a16280a" }}>
        <Gavel size={22} className="flex-shrink-0 mt-0.5" style={{ color: "#0a1628" }} />
        <p className="text-sm text-[#374151] m-0">
          Under the Hague-Visby Rules that govern international carriage by sea, carriers do carry some liability for cargo damage — but relying on that alone runs into three practical snags. Their liability is capped, usually calculated per package or per kilogram and often well under the goods&apos; real value; recovering anything from a carrier can take months or years of legal process; and carriers lean on broad exclusions, including force majeure and acts of God. That combination is exactly why cargo owners are better off holding their own cargo policy instead of counting on the carrier to make them whole.
        </p>
      </div>

      <h2>So Which One Do You Actually Need?</h2>
      <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="rounded-2xl p-5 bg-white border border-[#e2e8f0] shadow-sm">
          <Anchor size={20} className="mb-2" style={{ color: "#0a1628" }} />
          <p className="font-bold text-sm mb-1" style={{ color: "#0a1628" }}>Get Marine Hull if you</p>
          <p className="text-sm text-[#475569]">Own or operate a commercial vessel, or run a fleet of tugboats, ferries, or patrol boats in Batam waters.</p>
        </div>
        <div className="rounded-2xl p-5 bg-white border border-[#e2e8f0] shadow-sm">
          <Package size={20} className="mb-2" style={{ color: "#0a1628" }} />
          <p className="font-bold text-sm mb-1" style={{ color: "#0a1628" }}>Get Marine Cargo if you</p>
          <p className="text-sm text-[#475569]">Regularly import or export goods by sea or air, run a trading business, or handle large inbound shipments.</p>
        </div>
        <div className="rounded-2xl p-5 bg-white border border-[#e2e8f0] shadow-sm">
          <Layers size={20} className="mb-2" style={{ color: "#0a1628" }} />
          <p className="font-bold text-sm mb-1" style={{ color: "#0a1628" }}>Get both if you</p>
          <p className="text-sm text-[#475569]">Own the vessel and also ship your own goods on it.</p>
        </div>
      </div>

      <h2>What Does This Actually Cost?</h2>
      <div className="not-prose my-6 p-5 rounded-2xl border flex items-start gap-4" style={{ borderColor: "#c9a84c30", background: "#faf8f3" }}>
        <Percent size={22} className="flex-shrink-0 mt-0.5" style={{ color: "#a07830" }} />
        <p className="text-sm text-[#374151] m-0">
          Marine cargo premiums generally land somewhere between <strong style={{ color: "#0a1628" }}>0.1% and 0.5% of the cargo's value</strong>, with
          the exact rate shaped by the type of goods, the route, and which clause you pick. Shorter
          crossings such as Batam–Singapore or Batam–Jakarta usually price lower than long-haul
          international routes.
        </p>
      </div>

      <div className="mt-10 p-6 bg-[#0a1628] rounded-2xl text-white not-prose">
        <h3 className="font-display font-bold text-lg text-[#c9a84c] mb-2">Free Consultation — Figure Out What You Actually Need</h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          Not sure if you need hull cover, cargo cover, or both? It comes down to your role in the supply chain and the Incoterms you're working under. Happy to walk through it with you.
        </p>
        <a href="https://wa.me/6281373336728?text=Hello%20Rio%2C%20I%20would%20like%20to%20consult%20about%20marine%20insurance"
          target="_blank" rel="noopener noreferrer"
          className="inline-block px-5 py-3 bg-[#c9a84c] text-[#0a1628] font-bold rounded-xl text-sm text-center hover:bg-[#f0d080] transition-colors">
          WhatsApp Consultation
        </a>
      </div>

      <div className="mt-6 p-5 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0] not-prose">
        <p className="text-sm font-display font-semibold text-[#0a1628] mb-3">Related Articles</p>
        <div className="flex flex-col gap-2">
          <Link href="/en/blog/how-to-claim-marine-cargo-insurance" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ How to Claim Marine Cargo Insurance</Link>
          <Link href="/en/blog/batam-singapore-shipping-insurance" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Batam–Singapore Cargo Shipping Insurance</Link>
          <Link href="/en/marine-insurance" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ All Marine Insurance Products</Link>
        </div>
      </div>
    
      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Related Pages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Products &amp; Services</p>
            <ul className="space-y-2">
              <li><a href="/en/marine-insurance/marine-hull" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Hull Insurance Batam</a></li>
              <li><a href="/en/marine-insurance/marine-cargo" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Cargo Insurance Batam</a></li>
              <li><a href="/en/marine-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Insurance Batam</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Related Articles</p>
            <ul className="space-y-2">
              <li><a href="/en/blog/marine-cargo-insurance-premium-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Cargo Insurance Premium Batam</a></li>
              <li><a href="/en/blog/batam-export-cargo-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Batam Export Cargo Insurance</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}

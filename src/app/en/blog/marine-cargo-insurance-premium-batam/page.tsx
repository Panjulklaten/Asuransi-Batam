// app/en/blog/marine-cargo-insurance-premium-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { WHATSAPP_URL } from "@/lib/constants";
import { Breadcrumb, CTASection, SectionHeader } from "@/components/ui/index";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { TrendingDown, Calculator, ArrowRight } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Marine Cargo Insurance Premium in Batam: Pricing & How to Lower It",
  description:
    "A breakdown of how marine cargo insurance premiums are priced in Batam — two worked examples, the factors underwriters weigh, and practical ways shippers actually bring the cost down. Contact Rio!",
  canonical: "/en/blog/marine-cargo-insurance-premium-batam",
  languages: {
    id: "https://asuransibatam.com/blog/premi-asuransi-marine-cargo-batam",
    en: "https://asuransibatam.com/en/blog/marine-cargo-insurance-premium-batam",
  },
});

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Marine Cargo Insurance Premium in Batam: How It's Priced, and How to Bring It Down",
  description:
    "A shipper's breakdown of marine cargo insurance pricing in Batam, with two worked examples and practical steps for lowering the premium without cutting real protection.",
  url: "https://asuransibatam.com/en/blog/marine-cargo-insurance-premium-batam",
  datePublished: "2026-05-08",
  dateModified: "2026-08-10",
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
    q: "Do I pay per shipment, or as one annual premium?",
    a: "Both structures exist. A per-voyage policy prices each shipment on its own — simplest for occasional shippers. An open cover runs annually: you pay upfront, then just declare each shipment as it goes out to get its certificate. Regular shippers usually come out ahead financially on open cover.",
  },
  {
    q: "Below what cargo value does insurance stop making sense?",
    a: "There's no hard cutoff, but under roughly IDR 5 million the premium can end up disproportionate to what you'd realistically recover. Past about IDR 50 million per shipment, arranging cover is almost always worth it.",
  },
  {
    q: "What sum insured should I actually declare?",
    a: "Standard practice is CIF (Cost + Insurance + Freight) value plus 10% to cover anticipated profit. Don't shave that number down to save on premium — under-insuring triggers a proportional cut on any payout, which usually costs far more than the premium you saved.",
  },
  {
    q: "How does the deductible affect what I pay?",
    a: "A deductible is the portion of any loss you absorb before the insurer pays the rest. A IDR 10 million loss against a IDR 1 million deductible means the insurer pays IDR 9 million. Taking on a higher deductible is one of the more effective levers for bringing the premium down, provided you can comfortably absorb a bigger first loss.",
  },
  {
    q: "Does a clean claims history actually lower the premium?",
    a: "Yes — insurers reward a low loss ratio with a no-claim discount at renewal, most visibly under an annual open cover. It's one of the clearer financial arguments for consolidating shipments under one policy instead of insuring voyage by voyage.",
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
            Marine Cargo Insurance in Batam:<br />What It Costs, and Why
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Ask three different shippers what they pay for cargo cover out of Batam and you'll get
            three different numbers. That's not inconsistency — it's because the premium is built
            from several moving parts. Here's what those parts are, two worked examples, and a few
            genuine levers for bringing the cost down.
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

      {/* What drives pricing — narrative, not a card grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="What Sets the Price"
            title="Six Things Underwriters Actually Look At"
          />
          <div className="mt-8 space-y-5 text-gray-700 leading-relaxed">
            <p>
              None of these factors work in isolation — an underwriter weighs them together, which
              is why two shipments of similar value can land on noticeably different rates.
            </p>
            <ol className="space-y-4">
              {[
                { label: "Declared value (sum insured)", detail: "A higher CIF value raises the rupiah premium even at an unchanged percentage rate." },
                { label: "What the cargo actually is", detail: "Electronics, glass, and chemicals sit at a materially higher rate than steel coils or bagged cement, purely on breakage/spoilage risk." },
                { label: "Route and distance", detail: "Batam–Jakarta domestic legs price differently than Batam–Singapore or Batam–Port Klang international runs." },
                { label: "Institute Cargo Clause chosen", detail: "ICC (A) — all risks — sits at the top of the range. ICC (C) is the cheapest but the narrowest in what it actually pays out for." },
                { label: "Packing and loading method", detail: "A sealed FCL container rates lower than LCL or break-bulk cargo, since the exposure to handling damage is smaller." },
                { label: "Your claims track record", detail: "Fewer past claims earns a better rate at renewal — one of the practical arguments for staying on one insurer's open cover rather than shopping per voyage." },
              ].map((f, i) => (
                <li key={f.label} className="flex gap-4">
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: "#1a4fa0" }}
                  >
                    {i + 1}
                  </span>
                  <p className="m-0">
                    <span className="font-semibold text-[#0a1628]">{f.label}.</span>{" "}
                    <span className="text-gray-600">{f.detail}</span>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Formula + two contrasting worked examples */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="The Math"
            title="Same Formula, Two Very Different Results"
          />
          <div className="mt-8 bg-white rounded-2xl p-6 border border-blue-200 shadow-sm">
            <p className="text-sm font-bold text-blue-800 mb-2 uppercase tracking-wide">The Base Formula</p>
            <p className="text-2xl font-bold text-blue-900 font-mono">Premium = Sum Insured × Rate (%)</p>
            <p className="text-sm text-blue-700 mt-3">Sum Insured = CIF value of the goods + 10% (anticipated profit margin)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <p className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-3">Example A — Electronics, ICC (A)</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between border-b border-gray-100 pb-2"><span>CIF value</span><span className="font-semibold">IDR 300,000,000</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-2"><span>Sum Insured (+10%)</span><span className="font-semibold">IDR 330,000,000</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-2"><span>Rate — ICC (A)</span><span className="font-semibold">~0.30% – 0.45%</span></div>
                <div className="flex justify-between pt-1 text-blue-800 font-bold"><span>Premium</span><span>≈ IDR 990,000 – 1,485,000</span></div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <p className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-3">Example B — Bagged Cement, ICC (C)</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between border-b border-gray-100 pb-2"><span>CIF value</span><span className="font-semibold">IDR 300,000,000</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-2"><span>Sum Insured (+10%)</span><span className="font-semibold">IDR 330,000,000</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-2"><span>Rate — ICC (C)</span><span className="font-semibold">~0.05% – 0.10%</span></div>
                <div className="flex justify-between pt-1 text-blue-800 font-bold"><span>Premium</span><span>≈ IDR 165,000 – 330,000</span></div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Same cargo value, same route — the four- to fivefold gap between the two comes almost
            entirely from commodity risk and clause choice. This is exactly why "what's the going
            rate for cargo insurance" rarely has a single honest answer.
          </p>
        </div>
      </section>

      {/* Policy structure comparison — table, not cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow="Per-Voyage vs Open Cover" title="Which Policy Structure Actually Fits Your Volume" />
          <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-[#0a1628] text-white">
                <tr>
                  <th className="px-5 py-4">Question</th>
                  <th className="px-5 py-4">Per-Voyage Policy</th>
                  <th className="px-5 py-4">Open Cover (Annual)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Best fit", "One-off or infrequent shipments", "Monthly or more frequent shipping"],
                  ["How you pay", "Per shipment, as it goes out", "One upfront premium, shipments declared as they occur"],
                  ["Paperwork", "None ongoing", "A certificate issued per declared shipment"],
                  ["Cost per shipment at volume", "Higher", "Lower once shipment count picks up"],
                  ["No-claim discount at renewal", "Not applicable", "Available"],
                ].map(([q, a, b], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                    <td className="px-5 py-3 font-semibold text-[#0a1628]">{q}</td>
                    <td className="px-5 py-3 text-gray-600">{a}</td>
                    <td className="px-5 py-3 text-gray-600">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* NEW: practical premium-lowering tips */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow="Cost Control" title="Genuine Ways to Bring the Premium Down" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            {[
              { title: "Raise your deductible", body: "Absorbing a larger first-loss amount is one of the most direct ways to cut the rate — worth doing if your business can comfortably self-fund a small loss." },
              { title: "Consolidate under open cover", body: "If you're shipping more than roughly once a month, switching from per-voyage policies to one open cover almost always lowers the effective cost per shipment." },
              { title: "Match the clause to the real risk, not habit", body: "ICC (A) is the safe default, but bulk or low-value cargo genuinely exposed to fewer perils can often move to ICC (B) or (C) without meaningfully weakening protection." },
              { title: "Keep packaging and handling documentation tight", body: "A clean claims history is what earns a discount at renewal — and clear packing lists, photos, and handover records are what keep disputed claims from happening in the first place." },
            ].map((t) => (
              <div key={t.title} className="bg-white rounded-2xl p-6 border border-blue-100 flex gap-4">
                <TrendingDown size={20} className="flex-shrink-0 mt-1" style={{ color: "#1a4fa0" }} />
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "#0a1628" }}>{t.title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-6 flex items-start gap-2">
            <ArrowRight size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#a07830" }} />
            None of these should come at the cost of being genuinely under-covered — the point is
            trimming the premium intelligently, not just picking the cheapest clause available.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" style={{ background: "#faf8f3" }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow="FAQ" title="Marine Cargo Premium — Questions People Actually Ask" center />
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

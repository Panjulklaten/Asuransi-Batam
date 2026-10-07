import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import { Shield, Clock } from "lucide-react";
import SuretyQuoteCard from "@/components/surety/SuretyQuoteCard";

export const metadata: Metadata = generateSEO({
  title: "OB 23 Guide: How to Handle Temporary Import for Exhibitions & Projects in Batam",
  description: "Complete guide to OB 23 (temporary import) in Batam: when to use it, required documents, the application process, common mistakes that lead to penalties, and custom bond cost estimates.",
  keywords: [
    "ob 23 batam",
    "temporary import batam",
    "how to apply for ob 23",
    "custom bond ob 23",
    "temporary import guarantee",
    "customs temporary import batam",
  ],
  canonical: "https://asuransibatam.com/en/blog/temporary-import-guarantee-ob23-batam",
  languages: {
      id: "https://asuransibatam.com/blog/panduan-ob23-impor-sementara-batam",
      en: "https://asuransibatam.com/en/blog/temporary-import-guarantee-ob23-batam",
    },
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "OB 23 Guide: How to Handle Temporary Import for Exhibitions & Projects in Batam",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  author: { "@type": "Organization", name: "Asuransi Batam Team", url: "https://asuransibatam.com" },
  publisher: { "@type": "Organization", name: "Asuransi Batam – Rio", url: "https://asuransibatam.com" },
};

const breadcrumbListSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://asuransibatam.com/en" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://asuransibatam.com/en/blog" },
    { "@type": "ListItem", position: 3, name: "Surety Bond Insurance", item: "https://asuransibatam.com/en/surety-bond-insurance" },
    { "@type": "ListItem", position: 4, name: "OB 23 Guide Batam", item: "https://asuransibatam.com/en/blog/temporary-import-guarantee-ob23-batam" },
  ],
};

const useCases = [
  { icon: "🎪", title: "Exhibition & Booth Equipment", desc: "Display units, demo machines, and booth fixtures brought in specifically for trade or industry exhibitions in Batam." },
  { icon: "🛢️", title: "Oil & Gas / Shipyard Project Equipment", desc: "Heavy equipment or specialized units owned by foreign contractors, brought in temporarily for offshore or shipyard project work." },
  { icon: "🧰", title: "Foreign Expert Work Equipment", desc: "Technical equipment brought in by foreign experts or technicians for machine installation, servicing, or training at Batam factories." },
  { icon: "🧪", title: "Product Samples for Testing", desc: "Goods or raw material samples imported temporarily for quality testing or research before a sale contract is finalized." },
  { icon: "🎬", title: "Event & Production Equipment", desc: "Filming equipment, sound systems, or gear for international events held temporarily in Batam." },
  { icon: "📦", title: "Reusable Packaging & Containers", desc: "Containers, pallets, or special packaging used repeatedly for cross-border shipping that must be returned." },
];

const commonMistakes = [
  { covered: false, label: "Filing the OB 23 extension too late", desc: "If the temporary import period is about to expire but goods cannot yet be re-exported, the extension must be filed before — not after — the deadline." },
  { covered: false, label: "Goods not matching the SKEP", desc: "The type, quantity, and specification of goods realized must exactly match what is stated in the Customs facility decree." },
  { covered: false, label: "Guarantee value lower than required", desc: "The custom bond issued must fully cover the potential import duty and VAT exempted, not a rough estimate." },
  { covered: false, label: "SPGR not notarized", desc: "An Indemnity Agreement that is not notarized can lead to application rejection or claims issues down the line." },
  { covered: true, label: "File the extension 14 days before the deadline", desc: "Leave a buffer for Customs' administrative process, which can take several business days." },
  { covered: true, label: "Keep the re-export PEB document safe", desc: "The export declaration is the primary proof that the OB 23 obligation has been fulfilled and the custom bond can be closed." },
];

const costEstimates = [
  { need: "Exhibition equipment IDR 300 million (2 weeks)", cost: "IDR 2.5 – 5 million", tenor: "1 month (+buffer)" },
  { need: "Oil & gas project equipment IDR 2 billion (6 months)", cost: "IDR 16 – 36 million", tenor: "6–8 months" },
  { need: "Foreign expert equipment IDR 150 million (1 month)", cost: "IDR 1.2 – 2.7 million", tenor: "2 months" },
  { need: "Product samples IDR 50 million (3 months)", cost: "IDR 400 thousand – 900 thousand", tenor: "4 months" },
];

const faqs = [
  { q: "What is OB 23 and why is it called that?", a: "OB 23 stands for Ordonansi Bea Article 23, the older legal basis governing temporary import facilities in Indonesia. The term is still widely used in practice, even though the current legal basis refers to the Customs Law and Ministry of Finance Regulation 259/PMK.04/2010. In essence, OB 23 is a permit to bring goods into Indonesia temporarily with import duty exemption, on condition the goods are re-exported within a set period." },
  { q: "What is the maximum duration for OB 23?", a: "The temporary import period generally follows the actual needs of the activity (e.g., the duration of an exhibition or project) and can be extended with Customs' approval. In practice it ranges from a few weeks up to a maximum of 3 years for certain cases such as project heavy equipment. The key is always filing the extension before the current period expires." },
  { q: "Is OB 23 the same as KITE?", a: "No. OB 23 is for goods that are not processed and must be re-exported in the same form (e.g., exhibition equipment or heavy equipment). KITE is for raw materials imported to be processed into finished goods, with the processed output being what's exported — the form of the goods changes." },
  { q: "What happens if OB 23 goods are damaged and cannot be re-exported?", a: "Customs will collect the import duty and VAT that had been exempted, based on the goods' condition at that time. The custom bond will be claimed for that amount if the company does not pay directly. It's best to report the condition to Customs as soon as possible to get proper guidance on resolution." },
  { q: "Can a foreign company without a legal entity in Indonesia apply for OB 23 directly?", a: "Generally it must go through a local party — a subsidiary, local partner, or customs broker (PPJK) — acting as the Principal responsible for the customs obligations in Indonesia, including issuing the custom bond." },
];

export default function OB23GuideENPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0] overflow-hidden pt-24 pb-16">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#c9a84c]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-56 h-56 bg-[#1a4fa0]/40 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8 flex-wrap" aria-label="Breadcrumb">
            <Link href="/en" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/en/blog" className="hover:text-white/80 transition-colors">Blog</Link>
            <span>/</span>
            <Link href="/en/surety-bond-insurance" className="hover:text-[#c9a84c] transition-colors">Surety Bond Insurance</Link>
            <span>/</span>
            <span className="text-white/70">OB 23 Guide Batam</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a84c]/20 border border-[#c9a84c]/30 rounded-full text-[#c9a84c] text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            Surety Bond & Customs
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
            OB 23 Guide:<br />
            <span className="text-gradient-gold">Temporary Import</span><br />
            for Exhibitions & Projects in Batam
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-3xl">
            How to handle OB 23 from start to finish — documents, process, the most common
            mistakes that lead to penalties, and custom bond cost estimates for various needs in Batam.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> July 5, 2026</span>
            <span>•</span>
            <span>Asuransi Batam Team</span>
            <span>•</span>
            <span>±9 min read</span>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Intro / case */}
        <div className="bg-[#faf8f3] border-l-4 border-[#c9a84c] rounded-r-2xl p-6 mb-12">
          <p className="text-[#0a1628] leading-relaxed">
            A South Korean oil & gas contractor won an 8-month offshore platform maintenance
            project in Batam waters. They needed to bring in specialized equipment worth{" "}
            <strong>IDR 3.5 billion</strong> that would be shipped back to Korea once the project
            was complete. Since the equipment would not stay permanently in Indonesia, their legal
            team applied for the <strong>OB 23 (Temporary Import)</strong> facility and issued a
            custom bond as a guarantee to Customs — instead of paying the full import duty upfront,
            which could have run into hundreds of millions of rupiah.
          </p>
          <p className="text-[#475569] mt-3 text-sm leading-relaxed">
            The project finished on schedule, the equipment was re-exported with complete export
            declaration documents, and the custom bond was closed with no claim ever triggered.
          </p>
        </div>

        {/* Section 1: Who needs it */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-3">
            Who Typically Needs OB 23 in Batam?
          </h2>
          <p className="text-[#475569] leading-relaxed mb-8">
            As a high-traffic Free Trade Zone, several types of needs most commonly use this
            facility in Batam. For a broader look at other customs guarantee types, see our{" "}
            <Link href="/en/surety-bond-insurance/custom-bond" className="text-[#1a4fa0] font-semibold hover:underline">
              Custom Bond Batam
            </Link>{" "}
            page.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {useCases.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl border-2 border-[#e2e8f0] p-5 hover:border-[#c9a84c]/50 hover:shadow-lg transition-all card-hover">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-display font-bold text-[#0a1628] mb-2 text-sm">{p.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Common mistakes */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-3">
            Common Mistakes That Cause OB 23 Problems — and How to Avoid Them
          </h2>
          <p className="text-[#475569] leading-relaxed mb-8">
            Most OB 23 penalties or rejections can actually be avoided with the right preparation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commonMistakes.map((item) => (
              <div key={item.label} className={`rounded-2xl p-5 border ${item.covered ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${item.covered ? "bg-green-500" : "bg-red-500"}`}>
                    <span className="text-white text-xs font-bold">{item.covered ? "✓" : "✗"}</span>
                  </div>
                  <div>
                    <p className={`font-display font-bold text-sm mb-1 ${item.covered ? "text-green-900" : "text-red-900"}`}>{item.label}</p>
                    <p className={`text-xs leading-relaxed ${item.covered ? "text-green-800" : "text-red-800"}`}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Cost estimate */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-5">
            Custom Bond Cost Estimate for OB 23
          </h2>
          <p className="text-[#475569] leading-relaxed mb-6">
            Cost is calculated from the guarantee value (potential import duty + VAT exempted),
            not from the value of the goods themselves. For a full breakdown of other customs
            facility types, visit our{" "}
            <Link href="/en/surety-bond-insurance/custom-bond" className="text-[#1a4fa0] font-semibold hover:underline">
              Custom Bond Batam
            </Link>{" "}
            page.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0] shadow-sm mb-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="gradient-navy">
                  <th className="text-left px-5 py-4 text-white/70 font-semibold">Need</th>
                  <th className="text-left px-5 py-4 text-[#c9a84c] font-display font-bold">Estimated Custom Bond Cost</th>
                  <th className="text-left px-5 py-4 text-blue-300 font-display font-bold">Guarantee Tenor</th>
                </tr>
              </thead>
              <tbody>
                {costEstimates.map((row, i) => (
                  <tr key={row.need} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                    <td className="px-5 py-3 font-medium text-[#0a1628]">{row.need}</td>
                    <td className="px-5 py-3 text-[#475569]">{row.cost}</td>
                    <td className="px-5 py-3 text-[#475569]">{row.tenor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[#94a3b8] text-xs">* General illustration. Actual cost is determined after underwriting and depends on the actual guarantee value required by Customs.</p>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <p className="text-[#8a6d1f] font-semibold uppercase tracking-widest text-sm mb-2">FAQ</p>
            <h2 className="font-display font-bold text-3xl text-[#0a1628]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-display font-semibold text-[#0a1628] hover:text-[#1a4fa0] transition-colors list-none">
                  {faq.q}
                  <span className="ml-4 text-[#c9a84c] text-xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 text-[#475569] text-sm leading-relaxed border-t border-[#e2e8f0] pt-4">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-xl text-[#0a1628] mb-5">Related Articles & Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Custom Bond Batam", href: "/en/surety-bond-insurance/custom-bond", desc: "Full product page: OB 23, KITE, Bonded Zone, and PPJK" },
              { title: "Surety Bond Insurance Batam", href: "/en/surety-bond-insurance", desc: "All types of project and customs guarantees in Batam" },
              { title: "Marine Cargo", href: "/en/marine-insurance/marine-cargo", desc: "Protect the value of import/export goods against risk in transit" },
              { title: "Performance Bond Batam", href: "/en/surety-bond-insurance/performance-bond", desc: "Understand other project guarantee types" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="group flex items-start gap-3 p-4 bg-[#faf8f3] rounded-xl border border-[#e2e8f0] hover:border-[#c9a84c]/50 hover:shadow-md transition-all">
                <Shield className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#0a1628] group-hover:text-[#1a4fa0] transition-colors text-sm">{link.title}</div>
                  <div className="text-[#475569] text-xs mt-0.5">{link.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="border-t border-[#e2e8f0] pt-8">
          <p className="text-[#94a3b8] text-xs leading-relaxed italic">
            This article is based on common practice in Indonesia's customs guarantee market and
            our experience assisting companies in Batam. Technical requirements may change with
            updated Customs regulations. For specific needs, please consult directly with our team.
          </p>
        </div>
      </article>
      <SuretyQuoteCard />
    </>
  );
}

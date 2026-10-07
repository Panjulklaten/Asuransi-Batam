import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import { FileText, CheckCircle, AlertCircle, ArrowRight, Clock, Shield } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = generateSEO({
  title: "Bid Bond vs Performance Bond: Differences, Functions & When to Use Each | Asuransi Batam",
  description: "What is the difference between a bid bond and a performance bond? A complete guide for contractors in Batam — when each is required, guarantee values, validity periods, and claim consequences.",
  keywords: [
    "bid bond vs performance bond",
    "difference bid bond performance bond",
    "surety bond Batam",
    "bid guarantee Batam",
    "performance guarantee Batam",
    "surety bond insurance Batam",
  ],
  canonical: "https://asuransibatam.com/en/difference-between-bid-bond-and-performance-bond",
  languages: {
      en: "https://asuransibatam.com/en/difference-between-bid-bond-and-performance-bond",
      id: "https://asuransibatam.com/blog/perbedaan-bid-bond-performance-bond",
    },
});

// ── SCHEMA ───────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Bid Bond vs Performance Bond: Differences, Functions, and When to Use Each",
  description:
    "A complete guide on the difference between bid bonds and performance bonds for government project contractors in Batam.",
  datePublished: "2026-05-29",
  dateModified: "2026-05-29",
  author: {
    "@type": "Organization",
    name: "Asuransi Batam Team",
    url: "https://asuransibatam.com/en",
  },
  publisher: {
    "@type": "Organization",
    name: "Asuransi Batam – Rio",
    url: "https://asuransibatam.com",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can a bid bond be used as a substitute for a performance bond?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. They are separate products with different functions. A bid bond becomes irrelevant once the contract is signed — and that is precisely when the performance bond must already be in place.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a contractor have to submit a performance bond after being named the winner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under Presidential Regulation 16/2018, the winning contractor is generally given 14 calendar days from the issuance of the SPPBJ to sign the contract, and the performance bond must be submitted at or before signing.",
      },
    },
    {
      "@type": "Question",
      name: "Is the bid bond automatically returned if the company does not win the tender?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The surety's obligation ends once the tender is complete and the contractor is not named the winner. There are no additional charges.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if project delays are caused by force majeure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Force majeure conditions recognized in the contract generally do not trigger a performance bond claim. However, this must be properly documented and communicated to the project owner in writing.",
      },
    },
    {
      "@type": "Question",
      name: "Can one insurance company issue all surety bond types for a single project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, and it is actually recommended to simplify coordination and ensure document consistency.",
      },
    },
  ],
};

// ── DATA ─────────────────────────────────────────────────────────────────────

const comparisonRows = [
  { aspect: "Project phase", bidBond: "Before contract — during the tender process", perfBond: "After the contract is signed" },
  { aspect: "Primary function", bidBond: "Guarantees seriousness of the bid", perfBond: "Guarantees project completion" },
  { aspect: "Guarantee value", bidBond: "1–3% of bid value", perfBond: "5% of contract value" },
  { aspect: "Validity period", bidBond: "During the tender process", perfBond: "During project execution" },
  { aspect: "Issued when", bidBond: "Before submitting bid documents", perfBond: "Before contract signing" },
  { aspect: "Released when", bidBond: "Tender concludes (for losing bidders)", perfBond: "PHO / provisional handover" },
  { aspect: "Claim trigger", bidBond: "Winner withdraws / refuses to sign", perfBond: "Default during execution" },
  { aspect: "Claim impact", bidBond: "Relatively limited (smaller value)", perfBond: "Significant (larger value)" },
  { aspect: "Regulatory basis", bidBond: "Presidential Regulation 16/2018", perfBond: "Presidential Regulation 16/2018" },
];

const costRows = [
  { type: "Bid Bond (2%)", nilai: "IDR 100 million", biaya: "IDR 500K – IDR 1 million" },
  { type: "Performance Bond (5%)", nilai: "IDR 250 million", biaya: "IDR 2 million – IDR 5 million" },
  { type: "Advance Payment Bond (20%)", nilai: "IDR 200 million", biaya: "IDR 1.5 million – IDR 3 million" },
  { type: "Maintenance Bond (5%)", nilai: "IDR 250 million", biaya: "IDR 1 million – IDR 2.5 million" },
];

const projectContexts = [
  {
    title: "BP Batam (Batam Authority)",
    desc: "Infrastructure projects — roads, utilities, and Batu Ampar port facilities — always require both bid bonds and performance bonds under Presidential Regulation 16/2018. Projects typically exceed IDR 1 billion, making both bonds mandatory.",
    icon: "🏗️",
  },
  {
    title: "Batam City Government",
    desc: "School buildings, health clinics, and drainage projects in Bengkong, Sekupang, and Batam Centre generally require both bonds, with varying contract values across districts.",
    icon: "🏛️",
  },
  {
    title: "Private Industrial Estates",
    desc: "Projects in Muka Kuning, Batamindo, and Nongsa managed by private entities typically follow the same standards as government procurement — since many factory tenants are multinationals with equivalent requirements.",
    icon: "🏭",
  },
  {
    title: "Energy Projects",
    desc: "PLN Batam and industrial estate energy suppliers often require performance bonds with values above the standard rate, given the operational risk from delays affecting tenant production lines in Kabil and surrounding areas.",
    icon: "⚡",
  },
];

const tips = [
  {
    title: "Prepare your company documents well in advance",
    desc: "Your deed of establishment, NPWP, NIB, IUJK, and SBU must always be valid and ready. Many contractors lose opportunities because an expired SBU is only discovered at the tender stage.",
  },
  {
    title: "Factor issuance time into your tender schedule",
    desc: "For standard values, a bid bond can be issued within 1–2 working days. Don't wait until the day before the document submission deadline.",
  },
  {
    title: "Don't confuse bid value with contract value",
    desc: "The bid bond is calculated from the bid value (which may differ from the final contract value after negotiation). The performance bond is calculated from the agreed contract value.",
  },
  {
    title: "Understand the claim clauses in your certificate",
    desc: "Read carefully what conditions allow the obligee to file a claim. Not every delay or scope change automatically triggers a performance bond claim.",
  },
];

const faqs = [
  {
    q: "Can a bid bond be used as a substitute for a performance bond?",
    a: "No. They are separate products with different functions. A bid bond becomes irrelevant once the contract is signed — and that is precisely when the performance bond must already be in place. Attempting to use a bid bond as a performance guarantee will be rejected by the procurement committee.",
  },
  {
    q: "How long does a contractor have to submit a performance bond after being named the winner?",
    a: "Under Presidential Regulation 16/2018, the winning contractor is generally given 14 calendar days from the issuance of the SPPBJ (Letter of Appointment) to sign the contract — and the performance bond must be submitted at or before signing. Our surety bond issuance process normally takes 1–3 working days, so prepare your documents as soon as the winner is announced.",
  },
  {
    q: "Is the bid bond automatically returned if the company does not win the tender?",
    a: "The bid bond is not 'returned' in a physical sense for all formats — it depends on the mechanism used. What is certain: the surety's obligation ends once the tender is complete and the contractor is not named the winner. There are no additional charges.",
  },
  {
    q: "What happens if project delays are caused by force majeure?",
    a: "Force majeure conditions recognized in the contract generally do not trigger a performance bond claim. However, this must be properly documented and communicated to the project owner in writing. Consult our team if you encounter this situation.",
  },
  {
    q: "Can one insurance company issue all surety bond types for a single project?",
    a: "Yes, and it is actually recommended — to simplify coordination and ensure document consistency. The Asuransi Batam team can issue bid bonds, performance bonds, advance payment bonds, and maintenance bonds in a single integrated process.",
  },
];

const timelineSteps = [
  { label: "Tender Announcement", highlight: false, bond: null },
  { label: "Prepare & Submit Bid Bond", highlight: true, bond: "bid" },
  { label: "Bid Document Submission", highlight: false, bond: null },
  { label: "Evaluation by Procurement Committee", highlight: false, bond: null },
  { label: "Winner Announcement", highlight: false, bond: null },
  { label: "Prepare Performance Bond (within 14 days)", highlight: true, bond: "perf" },
  { label: "Contract Signing", highlight: false, bond: null },
  { label: "Prepare Advance Payment Bond (if advance payment applies)", highlight: true, bond: "adv" },
  { label: "Project Execution", highlight: false, bond: null },
  { label: "PHO — Provisional Handover", highlight: false, bond: null },
  { label: "Prepare Maintenance Bond", highlight: true, bond: "maint" },
  { label: "Maintenance Period 12–24 Months", highlight: false, bond: null },
  { label: "FHO — Final Handover", highlight: false, bond: null },
];

const bondColors: Record<string, string> = {
  bid: "bg-gold text-navy",
  perf: "bg-blue-600 text-white",
  adv: "bg-navy-mid text-gold",
  maint: "bg-navy text-cream",
};

// ── PAGE ─────────────────────────────────────────────────────────────────────

export default function BidBondVsPerformanceBondPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0] overflow-hidden pt-24 pb-16">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#c9a84c]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-56 h-56 bg-[#1a4fa0]/40 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/en" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/en/blog" className="hover:text-white/80 transition-colors">Blog</Link>
            <span>/</span>
            <Link href="/en/surety-bond-insurance" className="hover:text-[#c9a84c] transition-colors">Surety Bond</Link>
            <span>/</span>
            <span className="text-white/70">Bid Bond vs Performance Bond</span>
          </nav>

          {/* Language switcher */}
          <div className="flex items-center gap-2 mb-6">
            <Link
              href="/blog/perbedaan-bid-bond-performance-bond"
              className="text-xs px-3 py-1.5 rounded-full border border-white/20 text-white/50 hover:text-white/80 hover:border-white/40 transition-all"
            >
              🇮🇩 Baca dalam Bahasa Indonesia
            </Link>
          </div>

          {/* Category badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a84c]/20 border border-[#c9a84c]/30 rounded-full text-[#c9a84c] text-sm font-semibold mb-6">
            <FileText className="w-4 h-4" />
            Surety Bond
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
            Bid Bond vs Performance Bond:<br />
            <span className="text-gradient-gold">Differences, Functions,</span> and When to Use Each
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-3xl">
            A complete guide for contractors in Batam — when each bond is required, guarantee values, validity periods, and what happens if a claim is filed.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> May 29, 2026</span>
            <span>•</span>
            <span>Asuransi Batam Team</span>
            <span>•</span>
            <span>~10 min read</span>
          </div>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────────── */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Scenario intro */}
        <div className="bg-[#faf8f3] border-l-4 border-[#c9a84c] rounded-r-2xl p-6 mb-12">
          <p className="text-[#0a1628] leading-relaxed">
            PT Arya Konstruksi, a mid-sized contractor based in <strong>Batu Ampar</strong>, has just won a tender
            for a facility building in the <strong>Kabil</strong> industrial estate valued at IDR 8.5 billion.
            On the director's desk sit two documents from the insurance company: a bid bond certificate used
            during the bidding process, and a request to immediately issue a performance bond before the
            contract is signed.
          </p>
          <p className="text-[#0a1628] mt-4 leading-relaxed">
            <em>"Isn't the bid bond enough?"</em> the director asks his team.
          </p>
          <p className="text-[#475569] mt-4 text-sm leading-relaxed">
            The answer: <strong className="text-[#0a1628]">no.</strong> This is the most common misunderstanding
            that catches new contractors in Batam off guard. This article breaks down the differences in full.
          </p>
        </div>

        {/* ── SECTION 1: What is surety bond ── */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-5">
            What Is a Surety Bond — and Why Are There Multiple Types?
          </h2>
          <p className="text-[#475569] leading-relaxed mb-5">
            A surety bond is not a single product — it is a family of guarantee instruments, each designed to
            secure a <strong className="text-[#0a1628]">specific phase and obligation</strong> in a construction
            or procurement project lifecycle.
          </p>
          <p className="text-[#475569] leading-relaxed mb-6">
            Under Indonesia's government procurement framework (Presidential Regulation 16/2018), there are at
            least four types of surety bonds:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { num: "01", title: "Bid Bond", sub: "Guarantee during tendering", href: "/en/surety-bond-insurance/bid-bond" },
              { num: "02", title: "Performance Bond", sub: "Guarantee during execution", href: "/en/surety-bond-insurance/performance-bond" },
              { num: "03", title: "Advance Payment Bond", sub: "Guarantee for advance payment", href: "/en/surety-bond-insurance/advance-payment-bond" },
              { num: "04", title: "Maintenance Bond", sub: "Guarantee during defects liability period", href: "/en/surety-bond-insurance/maintenance-bond" },
            ].map((item) => (
              <Link key={item.num} href={item.href}
                className="group flex items-center gap-4 p-4 rounded-xl border-2 border-[#e2e8f0] hover:border-[#c9a84c]/60 hover:shadow-lg transition-all bg-white card-hover">
                <div className="w-10 h-10 rounded-lg gradient-navy flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-xs text-[#c9a84c]">{item.num}</span>
                </div>
                <div>
                  <div className="font-display font-bold text-[#0a1628] group-hover:text-[#1a4fa0] transition-colors text-sm">
                    {item.title}
                  </div>
                  <div className="text-[#475569] text-xs">{item.sub}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#c9a84c] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>

          <p className="text-[#475569] leading-relaxed">
            The bid bond and performance bond are the two most commonly confused — because both are issued in
            adjacent phases of the procurement cycle, just before and immediately after the contract is signed.
          </p>
        </section>

        {/* ── SECTION 2: Bid Bond ── */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="font-display font-bold text-[#0a1628] text-sm">BB</span>
            </div>
            <h2 className="font-display font-bold text-3xl text-[#0a1628]">
              Bid Bond: Guaranteeing Intent and Capability at the Tender Stage
            </h2>
          </div>

          <p className="text-[#475569] leading-relaxed mb-6">
            A <strong className="text-[#0a1628]">bid bond</strong> (or <em>jaminan penawaran</em> in Indonesian) is
            a surety bond certificate issued to guarantee that the contractor participating in a tender is
            serious about its bid, is capable of fulfilling the contract requirements, and will not withdraw
            after being named the winner.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            {[
              { label: "Guarantee Value", val: "1–3%", sub: "of bid value" },
              { label: "Validity", val: "+30 days", sub: "after tender period ends" },
              { label: "Issued", val: "Before", sub: "bid document submission" },
            ].map((s) => (
              <div key={s.label} className="bg-[#faf8f3] rounded-2xl p-5 text-center border border-[#e2e8f0]">
                <div className="text-[#475569] text-xs uppercase tracking-widest mb-2">{s.label}</div>
                <div className="font-display font-bold text-2xl text-[#c9a84c] mb-1">{s.val}</div>
                <div className="text-[#475569] text-xs">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6 mb-5">
            <h3 className="font-display font-bold text-[#0a1628] mb-3">Illustration Example</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-[#faf8f3] rounded-xl p-3">
                <div className="text-[#475569] text-xs mb-1">Bid value</div>
                <div className="font-bold text-[#0a1628]">IDR 8.5 billion</div>
              </div>
              <div className="bg-[#faf8f3] rounded-xl p-3">
                <div className="text-[#475569] text-xs mb-1">Bid bond at 2%</div>
                <div className="font-bold text-[#c9a84c]">IDR 170 million</div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-900 text-sm mb-1">Bid Bond Claim Trigger</p>
                <p className="text-amber-800 text-sm leading-relaxed">
                  A claim occurs if the tender winner <strong>refuses to sign the contract</strong> or
                  <strong> fails to submit the performance bond</strong> within the specified timeframe. The
                  contractor's reputation on the LPJK procurement system may also be affected.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: Performance Bond ── */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#1a4fa0] rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="font-display font-bold text-white text-sm">PB</span>
            </div>
            <h2 className="font-display font-bold text-3xl text-[#0a1628]">
              Performance Bond: Guaranteeing Project Completion to Spec
            </h2>
          </div>

          <p className="text-[#475569] leading-relaxed mb-6">
            A <strong className="text-[#0a1628]">performance bond</strong> (or <em>jaminan pelaksanaan</em>) is
            issued <strong className="text-[#0a1628]">after the contractor has been named the winner</strong> and
            is ready to sign the contract. Its function: to guarantee that the contractor will complete the work
            according to the technical specifications, agreed schedule, and quality standards required.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            {[
              { label: "Guarantee Value", val: "5%", sub: "of contract value" },
              { label: "Validity", val: "Until PHO", sub: "provisional handover" },
              { label: "Issued", val: "Before", sub: "contract signing" },
            ].map((s) => (
              <div key={s.label} className="bg-[#0a1628] rounded-2xl p-5 text-center">
                <div className="text-white/50 text-xs uppercase tracking-widest mb-2">{s.label}</div>
                <div className="font-display font-bold text-2xl text-[#c9a84c] mb-1">{s.val}</div>
                <div className="text-white/60 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6 mb-5">
            <h3 className="font-display font-bold text-[#0a1628] mb-3">Illustration Example (continued)</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-[#faf8f3] rounded-xl p-3">
                <div className="text-[#475569] text-xs mb-1">Contract value</div>
                <div className="font-bold text-[#0a1628]">IDR 8.5 billion</div>
              </div>
              <div className="bg-[#faf8f3] rounded-xl p-3">
                <div className="text-[#475569] text-xs mb-1">Performance bond at 5%</div>
                <div className="font-bold text-[#1a4fa0]">IDR 425 million</div>
              </div>
            </div>
            <p className="text-[#475569] text-xs mt-3 leading-relaxed">
              The performance bond value is <strong className="text-[#0a1628]">significantly larger</strong> than the
              bid bond — because failure during execution causes far greater losses to the project owner.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-blue-900 text-sm mb-1">Performance Bond Claim Triggers</p>
                <ul className="text-blue-800 text-sm leading-relaxed space-y-1">
                  <li>• Halting work before completion without valid justification</li>
                  <li>• Failure to meet technical specifications after being given the opportunity to remedy</li>
                  <li>• Declared insolvent and unable to continue the project</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: Comparison table ── */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-6">
            Side-by-Side Comparison: Bid Bond vs Performance Bond
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0] shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="gradient-navy">
                  <th className="text-left px-5 py-4 text-white/70 font-semibold w-1/3">Aspect</th>
                  <th className="text-left px-5 py-4 text-[#c9a84c] font-display font-bold">Bid Bond</th>
                  <th className="text-left px-5 py-4 text-blue-300 font-display font-bold">Performance Bond</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.aspect} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                    <td className="px-5 py-3.5 font-semibold text-[#0a1628]">{row.aspect}</td>
                    <td className="px-5 py-3.5 text-[#475569]">{row.bidBond}</td>
                    <td className="px-5 py-3.5 text-[#475569]">{row.perfBond}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── SECTION 5: Timeline ── */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-3">
            Chronological Flow in a Single Project Cycle in Batam
          </h2>
          <p className="text-[#475569] leading-relaxed mb-8">
            The bid bond <strong className="text-[#0a1628]">always precedes</strong> the performance bond and
            the two are never active in the same phase. Understanding this flow lets you prepare documents
            earlier and avoid the delays that frequently trip up contractors.
          </p>

          <div className="relative">
            <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-[#e2e8f0]" />
            <div className="space-y-3">
              {timelineSteps.map((step, i) => (
                <div key={i} className="relative flex items-start gap-4 pl-14">
                  <div className={`absolute left-3 w-4 h-4 rounded-full border-2 flex-shrink-0 mt-0.5 ${
                    step.highlight
                      ? "border-[#c9a84c] bg-[#c9a84c]"
                      : "border-[#cbd5e1] bg-white"
                  }`} />
                  <div className={`flex-1 rounded-xl px-4 py-3 ${
                    step.highlight
                      ? step.bond ? `${bondColors[step.bond]} shadow-sm` : "bg-[#c9a84c] text-navy"
                      : "bg-[#faf8f3] text-[#475569]"
                  }`}>
                    <span className={`text-sm font-${step.highlight ? "bold font-display" : "medium"}`}>
                      {step.highlight && "→ "}{step.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 6: Batam context ── */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-3">
            Projects in Batam That Routinely Require Both Bonds
          </h2>
          <p className="text-[#475569] leading-relaxed mb-8">
            Batam's project ecosystem spans multiple sectors and authorities — all of which require bid bonds
            and performance bonds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projectContexts.map((ctx) => (
              <div key={ctx.title} className="bg-white rounded-2xl border-2 border-[#e2e8f0] p-6 hover:border-[#c9a84c]/50 hover:shadow-lg transition-all card-hover">
                <div className="text-3xl mb-3">{ctx.icon}</div>
                <h3 className="font-display font-bold text-[#0a1628] mb-2">{ctx.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{ctx.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 7: Cost estimate ── */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-3">
            Cost Estimate: A Full Project Cycle at IDR 5 Billion
          </h2>
          <p className="text-[#475569] leading-relaxed mb-6">
            As a general illustration, here is the estimated total surety bond cost for a hypothetical project
            in Batam with a contract value of IDR 5 billion.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0] shadow-sm mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#faf8f3] border-b border-[#e2e8f0]">
                  <th className="text-left px-5 py-3.5 font-display font-bold text-[#0a1628]">Type</th>
                  <th className="text-left px-5 py-3.5 font-display font-bold text-[#0a1628]">Guarantee Value</th>
                  <th className="text-left px-5 py-3.5 font-display font-bold text-[#0a1628]">Estimated Cost</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                    <td className="px-5 py-3 text-[#0a1628] font-medium">{row.type}</td>
                    <td className="px-5 py-3 text-[#475569]">{row.nilai}</td>
                    <td className="px-5 py-3 text-[#475569]">{row.biaya}</td>
                  </tr>
                ))}
                <tr className="bg-[#0a1628]">
                  <td className="px-5 py-3 text-[#c9a84c] font-display font-bold">Total estimate</td>
                  <td className="px-5 py-3 text-white/50">—</td>
                  <td className="px-5 py-3 text-[#c9a84c] font-bold">IDR 5M – IDR 11.5M</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#faf8f3] border border-[#e2e8f0] rounded-xl p-4 text-sm text-[#475569] leading-relaxed">
            <strong className="text-[#0a1628]">Note:</strong> The figures above are general illustrations based on
            market conditions. Total surety bond costs are less than <strong className="text-[#0a1628]">0.3%</strong> of
            the IDR 5 billion contract value — a small investment compared to the risk of failing a tender.
            Actual costs depend on the company's profile, track record, and the policies of each bond issuer.{" "}
            <Link href="/en/surety-bond-insurance" className="text-[#1a4fa0] font-semibold hover:underline">
              Contact us for an accurate quote →
            </Link>
          </div>
        </section>

        {/* ── SECTION 8: Tips ── */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-6">
            Practical Tips for Batam Contractors
          </h2>
          <div className="space-y-4">
            {tips.map((tip, i) => (
              <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:shadow-md transition-shadow">
                <div className="w-9 h-9 gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-[#0a1628]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#0a1628] mb-1">{tip.title}</h3>
                  <p className="text-[#475569] text-sm leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 9: FAQ ── */}
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
                <div className="px-5 pb-5 text-[#475569] text-sm leading-relaxed border-t border-[#e2e8f0] pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── Internal links ── */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-xl text-[#0a1628] mb-5">
            Learn More About Surety Bonds
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Surety Bond Insurance Batam", href: "/en/surety-bond-insurance", desc: "Complete guide to all surety bond types and submission procedures" },
              { title: "Surety Bond Insurance Overview", href: "/en/surety-bond-insurance", desc: "Our full range of project guarantee services in Batam" },
              { title: "Bid Bond", href: "/en/surety-bond-insurance/bid-bond", desc: "Bid guarantee product details" },
              { title: "Performance Bond", href: "/en/surety-bond-insurance/performance-bond", desc: "Project execution guarantee product details" },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="group flex items-start gap-3 p-4 bg-[#faf8f3] rounded-xl border border-[#e2e8f0] hover:border-[#c9a84c]/50 hover:shadow-md transition-all">
                <Shield className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#0a1628] group-hover:text-[#1a4fa0] transition-colors text-sm">{link.title}</div>
                  <div className="text-[#475569] text-xs mt-0.5">{link.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <div className="border-t border-[#e2e8f0] pt-8">
          <p className="text-[#94a3b8] text-xs leading-relaxed italic">
            This article is based on Presidential Regulation 16/2018 on Government Procurement of Goods/Services,
            OJK regulations on licensed surety companies, and practical experience assisting contractors in Batam.
            Specific conditions for each project may vary — please consult our team before making decisions.
          </p>
        </div>
      </article>

      <CTASection lang="en" cluster="surety" />
    </>
  );
}

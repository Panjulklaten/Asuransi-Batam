// app/en/blog/how-to-get-builders-risk-insurance-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Image from "next/image";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";

export const metadata: Metadata = generateSEO({
  title: "How to Choose Builders Risk Insurance in Batam",
  description:
    "A field-tested guide to picking Builders Risk cover for construction sites and shipyards in Batam: a real claim walkthrough, the mistakes that trip owners up, and how to size the sum insured correctly. Consult Rio +62 813-7333-6728.",
  canonical:
    "https://asuransibatam.com/en/blog/how-to-get-builders-risk-insurance-batam",
  languages: {
    id: "https://asuransibatam.com/blog/cara-mendapatkan-asuransi-builders-risk-batam",
    en: "https://asuransibatam.com/en/blog/how-to-get-builders-risk-insurance-batam",
  },
});

// Article schema (E-E-A-T: authorship & publisher signal)
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Choose the Right Builders Risk Insurance in Batam",
  description:
    "A field-tested guide to picking Builders Risk cover for construction sites and shipyards in Batam, built around a real claim walkthrough.",
  datePublished: "2026-06-23",
  dateModified: "2026-08-04",
  inLanguage: "en",
  author: {
    "@type": "Person",
    name: "Rio",
    jobTitle: "Insurance Practitioner",
    telephone: "+6281373336728",
  },
  publisher: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam – Rio",
    url: "https://asuransibatam.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://asuransibatam.com/en/blog/how-to-get-builders-risk-insurance-batam",
  },
};

// FAQ schema (required — kept separate from Article schema)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What exactly does Builders Risk insurance cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Builders Risk — also sold as Contractors' All Risks or Erection All Risks — indemnifies physical loss or damage to a project that is still under construction, including a vessel being built or repaired at a shipyard. Triggers typically include fire, water ingress, on-site accidents, and natural catastrophe events occurring while the work is in progress.",
      },
    },
    {
      "@type": "Question",
      name: "Is Builders Risk cover actually necessary for a Batam shipyard?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "In most cases, yes. While a vessel is being built or repaired, its value is often substantial, yet it doesn't qualify for a standard marine hull policy since it isn't complete or seaworthy yet. Builders Risk bridges that gap from the day work starts until formal handover.",
      },
    },
    {
      "@type": "Question",
      name: "Roughly how long does it take to settle a Builders Risk claim?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Timing depends heavily on how complex the loss is and how organized the paperwork is. As a rough range, expect anywhere from a few weeks up to two or three months for larger losses that call for a more thorough loss adjuster investigation.",
      },
    },
    {
      "@type": "Question",
      name: "What's the single most common misstep buyers make with this policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Under-declaring the sum insured is by far the most frequent issue, followed closely by leaving subcontractors off the policy as named insureds and skipping a careful read of design-defect exclusions — a clause that shows up in a disproportionate share of claim disputes.",
      },
    },
    {
      "@type": "Question",
      name: "Are subcontractors automatically covered under a Builders Risk policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Not automatically — it comes down to how the policy is worded. Most projects run through several subcontractors handling different scopes, so the wording has to spell out that each of them is protected as a joint insured or additional insured, closing any liability gap before a claim is ever filed.",
      },
    },
  ],
};

export default function HowToGetBuildersRiskPage() {
  return (
    <ArticleLayout
      title="How to Choose the Right Builders Risk Insurance in Batam"
      description="A real claim walkthrough from a Batam shipyard, plus the steps for picking a Builders Risk policy that actually holds up when something goes wrong."
      date="June 23, 2026"
      readTime="10 min read"
      category="Marine"
      breadcrumbs={[
        { label: "Marine Insurance", href: "/en/marine-insurance" },
        { label: "Builders Risk", href: "/en/marine-insurance/builders-risk" },
        {
          label: "How to Get Builders Risk Insurance",
          href: "/en/blog/how-to-get-builders-risk-insurance-batam",
        },
      ]}
      schema={articleSchema}
    >
      {/* ArticleLayout only accepts a single schema object (Article).
          The FAQ schema is injected directly here so the FAQ rich result still appears. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#8a6d1f] mb-3">
        Understanding the Risk
      </p>
      <h2>Why This Cover Gets Skipped, Even Though the Exposure Is Enormous</h2>
      <p>
        The moment a construction project or a ship repair job breaks ground, everyone&apos;s attention shifts to schedules, budgets, and getting the work done. Insurance tends to get filed under &quot;we&apos;ll sort it out later&quot; — right up until something goes wrong mid-project and it becomes clear an asset worth billions of rupiah was never actually protected.
      </p>
      <p>
        <Link href="/en/marine-insurance/builders-risk" className="text-[#1a4fa0] hover:text-[#c9a84c] underline transition-colors">Builders Risk insurance</Link> (also referred to as Contractors&apos; All Risks or Erection All Risks) exists specifically to close that gap: it protects a project while it&apos;s still being built, not an asset that&apos;s already finished. For building construction, plant installation, and especially ship construction or repair inside a shipyard, the build phase itself is when a project is most exposed to a major loss.
      </p>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#8a6d1f] whitespace-nowrap">
          Field Experience
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="text-center">A Real Builders Risk Claim from a Batam Shipyard</h2>
      <p>
        One project I worked on directly involved a Batam shipyard carrying out repair and structural modification work on a commercial vessel — welding, replacing sections of hull plating, and reinstalling part of the mechanical system while the ship sat in dock.
      </p>
      <p>
        Partway through the job, a small fire started near the welding station, sparked by nearby combustible material. The yard crew put it out quickly, but not before it damaged part of the structure under repair and a handful of pieces of equipment nearby.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-[#e2e8f0] bg-white p-3 shadow-[0_20px_48px_-12px_rgba(10,22,40,0.15)]">
        <div className="overflow-hidden rounded-xl">
          <Image
            src="/images/potoartikel/klaimbuilderisk.webp"
            alt="Documentation of a Builders Risk insurance claim being handled at a shipyard in Batam"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
        <figcaption className="flex items-center gap-2 px-2 pt-4 pb-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#c9a84c]" />
          <span className="font-display text-xs font-semibold uppercase tracking-wider text-[#0a1628]">
            Field Documentation
          </span>
          <span className="text-xs text-[#475569]">
            — Handling a Builders Risk claim at a shipyard in Batam
          </span>
        </figcaption>
      </figure>

      <p>Here&apos;s roughly how that claim moved through the process:</p>
      <div className="not-prose my-7 overflow-hidden rounded-2xl border border-[#e2e8f0] shadow-[0_8px_24px_-8px_rgba(10,22,40,0.12)]">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-5 py-4 font-display tracking-wide">Stage</th>
              <th className="text-left px-5 py-4 font-display tracking-wide">What Happened</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "First notice of loss",
                "The yard notified the insurer inside 24 hours, before touching or clearing the affected area",
              ],
              [
                "Scene preserved",
                "The damaged section was cordoned off, with no repair work started ahead of the survey",
              ],
              [
                "Loss adjuster survey",
                "An independent adjuster inspected the structural and equipment damage and put together a repair-cost estimate",
              ],
              [
                "Sum insured & wording check",
                "The team confirmed the declared value tracked actual project progress, and that the fire's cause fell within the wording",
              ],
              [
                "Negotiation & adjustment",
                "The claim figure was adjusted against the survey findings, net of the policy deductible",
              ],
              [
                "Payout",
                "Funds were released to cover structural repairs and to replace the damaged equipment",
              ],
            ].map(([stage, detail], i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}
              >
                <td className="px-5 py-4 font-semibold text-[#0a1628] border-b border-[#e2e8f0]">
                  {stage}
                </td>
                <td className="px-5 py-4 text-[#475569] leading-relaxed border-b border-[#e2e8f0]">
                  {detail}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="not-prose my-8 rounded-2xl border-l-4 border-[#c9a84c] bg-[#faf8f3] px-6 py-5">
        <p className="text-[#0a1628] leading-relaxed">
          <span className="font-display font-bold">Field note:</span> This claim went through without much friction, and that wasn&apos;t luck. Following an insurance consultant&apos;s advice early on, the yard had structured the sum insured to step up in line with project progress rather than locking in one fixed figure at signing, and the policy named every subcontractor working in the dock area as a covered party. Those two details are exactly where under-prepared Builders Risk claims most often run into trouble.
        </p>
      </div>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#8a6d1f] whitespace-nowrap">
          Policy Coverage
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="text-center">What&apos;s In and What&apos;s Out Under a Builders Risk Policy</h2>
      <p>
        Builders Risk sits within the <Link href="/en/marine-insurance" className="text-[#1a4fa0] hover:text-[#c9a84c] underline transition-colors">marine insurance</Link> line we handle in Batam, and its coverage is shaped specifically around the construction period. Broadly, here&apos;s how the covered risks and the exclusions split out:
      </p>

      <div className="not-prose mt-8 mb-10 grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6">
          <p className="font-display font-bold text-[#0a1628] mb-4 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0a1628] text-[#c9a84c] text-xs">
              ✓
            </span>
            Typically Covered
          </p>
          <ul className="space-y-3 text-sm text-[#475569] leading-relaxed">
            <li className="flex gap-2"><span className="text-[#c9a84c]">—</span>Fire, explosion, and lightning strikes at the job site</li>
            <li className="flex gap-2"><span className="text-[#c9a84c]">—</span>Damage from workplace accidents or operator error on heavy equipment</li>
            <li className="flex gap-2"><span className="text-[#c9a84c]">—</span>Natural catastrophe events — flood, high winds, earthquake — usually as an extension</li>
            <li className="flex gap-2"><span className="text-[#c9a84c]">—</span>Theft of materials or equipment already installed on site</li>
            <li className="flex gap-2"><span className="text-[#c9a84c]">—</span>Damage arising during testing and commissioning, subject to the agreed wording</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-[#e2e8f0] bg-[#faf8f3] p-6">
          <p className="font-display font-bold text-[#0a1628] mb-4 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0a1628]/10 text-[#0a1628] text-xs">
              ✕
            </span>
            Typically Excluded
          </p>
          <ul className="space-y-3 text-sm text-[#475569] leading-relaxed">
            <li className="flex gap-2"><span className="text-[#94a3b8]">—</span>Loss traced back to a pre-existing design flaw</li>
            <li className="flex gap-2"><span className="text-[#94a3b8]">—</span>Ordinary wear and tear or gradual deterioration from routine corrosion</li>
            <li className="flex gap-2"><span className="text-[#94a3b8]">—</span>Delay penalties or consequential loss, unless a specific extension is purchased</li>
            <li className="flex gap-2"><span className="text-[#94a3b8]">—</span>Loss occurring after the maintenance period ends without an extended cover in place</li>
          </ul>
        </div>
      </div>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#8a6d1f] whitespace-nowrap">
          Practical Steps
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="text-center">A Practical Way to Choose Your Builders Risk Policy</h2>

      <div className="not-prose mt-10 mb-12">
        {[
          {
            n: "01",
            title: "Map Out What's Actually Risky About Your Project",
            body: "Building construction, plant installation, and shipyard repair work each carry a distinct risk profile. Before shopping for a policy, flag the trouble spots yourself: is there hot work involved (welding, cutting), storage of combustible material nearby, or work at height with elevated exposure?",
          },
          {
            n: "02",
            title: "Base the Sum Insured on the Full Contract Value, Not Today's Progress",
            body: "The most common slip-up is pegging the sum insured to work completed so far, when it should instead reflect the project's total contract value plus the materials and equipment still to be installed. Set it too low and you trigger a proportional reduction (the average clause) the moment a claim is filed.",
          },
          {
            n: "03",
            title: "Confirm Every Party on Site Is Named as an Insured",
            body: "Where subcontractors are involved, make sure the wording explicitly lists them as a joint insured or additional insured. Skip this and the insurer may deny the claim outright, or come after your own subcontractors through subrogation.",
          },
          {
            n: "04",
            title: "Check the Construction Period Against the Maintenance Period",
            body: "A Builders Risk policy usually runs from the moment materials are mobilized to site through to handover, plus a maintenance period (commonly 12 months). Make sure that window genuinely matches your real project timeline, including realistic room for delays.",
          },
          {
            n: "05",
            title: "Read the Wording and Exclusions Closely — or Bring In Someone Who Will",
            body: (
              <>
                A single exclusion clause can be the difference between a claim worth hundreds of millions of rupiah being paid in full or denied outright. Working with a consultant who actually understands construction and shipyard risk — rather than just comparing premium quotes — is usually what saves a project when something does go wrong. You can review{" "}
                <Link href="/en/marine-insurance/builders-risk" className="text-[#1a4fa0] hover:text-[#c9a84c] underline transition-colors">
                  our Builders Risk coverage details here
                </Link>
                .
              </>
            ),
          },
        ].map((step, i, arr) => (
          <div key={step.n} className="flex gap-5">
            <div className="flex flex-col items-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0a1628] font-display text-base font-bold text-[#c9a84c]">
                {step.n}
              </span>
              {i < arr.length - 1 && (
                <span className="mt-1 w-px flex-1 bg-[#e2e8f0]" style={{ minHeight: "2.5rem" }} />
              )}
            </div>
            <div className={i < arr.length - 1 ? "pb-9" : ""}>
              <h3 className="mt-1.5 mb-2">{step.title}</h3>
              <p className="text-[#475569] leading-relaxed">{step.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#8a6d1f] whitespace-nowrap">
          Frequently Asked Questions
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="text-center">FAQ: Builders Risk Insurance in Batam</h2>

      <div className="not-prose mt-8 mb-10 space-y-3">
        {[
          {
            q: "What exactly does Builders Risk insurance cover?",
            a: "It indemnifies physical loss or damage to a project still under construction — including a vessel being built or repaired at a shipyard — from causes such as fire, on-site accidents, or natural catastrophe events during the build period.",
          },
          {
            q: "Is Builders Risk cover actually necessary for a Batam shipyard?",
            a: "In most cases, yes — a vessel under construction or repair can't be placed on a standard marine hull policy since it isn't finished or seaworthy yet. Builders Risk fills that gap from day one of the project until handover.",
          },
          {
            q: "Roughly how long does it take to settle a Builders Risk claim?",
            a: "It varies with how complex the loss is and how complete the documentation is — generally a few weeks up to two or three months for larger losses needing deeper investigation by the loss adjuster.",
          },
          {
            q: "What's the single most common misstep buyers make with this policy?",
            a: "Under-declaring the sum insured, leaving subcontractors off the policy as named parties, and skipping a close read of design-defect exclusions — a clause that turns up in a disproportionate share of claim disputes.",
          },
          {
            q: "Are subcontractors automatically covered under a Builders Risk policy?",
            a: "Not automatically — it depends entirely on the wording. The policy needs to explicitly list every party working on the project as a joint insured or additional insured, so there's no liability gap when a claim comes in.",
          },
        ].map((item) => (
          <div
            key={item.q}
            className="rounded-xl border border-[#e2e8f0] bg-white px-5 py-4"
          >
            <p className="font-display font-semibold text-[#0a1628] mb-1.5">
              {item.q}
            </p>
            <p className="text-sm text-[#475569] leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 p-7 sm:p-8 bg-[#0a1628] rounded-2xl text-white not-prose relative overflow-hidden">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#c9a84c]/10" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-3">
          Free Consultation
        </p>
        <h3 className="font-display font-bold text-xl text-white mb-3">
          Kicking Off a Construction Project or Shipyard Job?
        </h3>
        <p className="text-white/70 text-sm mb-6 leading-relaxed max-w-2xl">
          I help set the sum insured correctly, make sure every relevant party is actually named on the policy, and stay involved if a claim ever happens — grounded in hands-on claims experience, not just premium comparisons.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/6281373336728?text=Hi%20Rio%2C%20I%27d%20like%20to%20consult%20about%20Builders%20Risk%20insurance"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-[#c9a84c] text-[#0a1628] font-bold rounded-xl text-sm text-center hover:bg-[#f0d080] transition-colors"
          >
            Consult via WhatsApp
          </a>
          <Link
            href="/en/marine-insurance/builders-risk"
            className="px-5 py-3 border border-white/30 text-white font-semibold rounded-xl text-sm text-center hover:bg-white/10 transition-colors"
          >
            View Builders Risk Product
          </Link>
        </div>
      </div>

      <div className="mt-6 p-6 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0] not-prose">
        <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[#0a1628] mb-4">
          Related Articles & Pages
        </p>
        <div className="flex flex-col gap-3">
          <Link
            href="/en/marine-insurance"
            className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors"
          >
            → Marine Insurance Batam
          </Link>
          <Link
            href="/en/marine-insurance/builders-risk"
            className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors"
          >
            → Builders Risk Insurance Product (Batam)
          </Link>
          <Link
            href="/blog/cara-mendapatkan-asuransi-builders-risk-batam"
            className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors"
          >
            → Versi Bahasa Indonesia / Indonesian Version
          </Link>
        </div>
      </div>
    </ArticleLayout>
  );
}

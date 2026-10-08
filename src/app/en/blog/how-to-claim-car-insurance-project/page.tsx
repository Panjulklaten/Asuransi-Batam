// app/en/blog/how-to-claim-car-insurance-project/page.tsx
import type { Metadata } from "next";
import QuoteButton from "@/components/quote/QuoteButton";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "How to Claim CAR Insurance When Your Project Is Damaged – Step-by-Step Guide",
  description: "A step-by-step guide to filing a Contractor All Risk (CAR) insurance claim in Indonesia — from the first notification to receiving your settlement payment, including the documents you need.",
  canonical: "https://asuransibatam.com/en/blog/how-to-claim-car-insurance-project",
  languages: {
      id: "https://asuransibatam.com/blog/cara-klaim-asuransi-car",
      en: "https://asuransibatam.com/en/blog/how-to-claim-car-insurance-project",
    },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Claim CAR Insurance When Your Project Is Damaged",
  description:
    "A step-by-step guide to filing a Contractor All Risk (CAR) insurance claim — from incident reporting through to settlement payment.",
  datePublished: "2026-05-07",
  dateModified: "2026-05-07",
  author: {
    "@type": "Person",
    name: "Rio",
    telephone: "+6281373336728",
  },
  publisher: {
    "@type": "InsuranceAgency",
    name: "Batam Insurance – Rio",
    url: "https://asuransibatam.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://asuransibatam.com/en/blog/how-to-claim-car-insurance-project",
  },
  inLanguage: "en-ID",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://asuransibatam.com/en" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://asuransibatam.com/en/blog" },
      { "@type": "ListItem", position: 3, name: "How to Claim CAR Insurance", item: "https://asuransibatam.com/en/blog/how-to-claim-car-insurance-project" },
    ],
  },
  "HowTo": {
    "@type": "HowTo",
    name: "How to File a CAR Insurance Claim",
    step: [
      { "@type": "HowToStep", position: 1, name: "Secure the site and document the damage" },
      { "@type": "HowToStep", position: 2, name: "Notify the insurer within 72 hours" },
      { "@type": "HowToStep", position: 3, name: "Prepare claim documents" },
      { "@type": "HowToStep", position: 4, name: "Loss adjuster survey" },
      { "@type": "HowToStep", position: 5, name: "Settlement negotiation and agreement" },
      { "@type": "HowToStep", position: 6, name: "Payment disbursement" },
    ],
  },
};

const claimSteps = [
  {
    number: "01",
    title: "Secure the Site & Document the Damage",
    body: "Immediately after an incident, safety comes first. Cordon off hazardous areas before anything else. Once it is safe to proceed, document the damage thoroughly — photographs from multiple angles, a video walkthrough of the site, and a precise record of the date and time of the incident. Critically: do not move, remove, or repair anything before receiving clearance from your insurer. Unilateral action before the survey can significantly weaken your claim.",
  },
  {
    number: "02",
    title: "Notify the Insurer Within 72 Hours",
    body: "Most CAR policies require an initial notification within 3×24 hours (72 hours) of the incident occurring. Initial notification can be done by phone or WhatsApp, followed by a formal written notice. If you purchased the policy through a broker or agent, contact them first — they will coordinate with the insurer on your behalf. Delayed notification without a valid reason is one of the most common grounds used to deny a claim outright.",
  },
  {
    number: "03",
    title: "Prepare a Complete Claim Package",
    body: "The completeness of your documentation is the single biggest factor determining how quickly your claim is processed. Typically required: the original policy, the project bill of quantities (BOQ) or budget plan, the construction contract, an incident report from the site manager or supervisor, a police report (for theft or sabotage cases), as-built drawings where available, and a cost of reinstatement estimate prepared by a contractor or independent quantity surveyor.",
  },
  {
    number: "04",
    title: "Loss Adjuster Survey",
    body: "For claims of significant value, the insurer will appoint a loss adjuster — an independent expert who assesses and verifies the loss. The adjuster will visit the site, review documentation, interview relevant parties, and submit a recommendation report to the insurer. Be cooperative and fully transparent throughout this process. Concealing any facts — however minor they appear — risks voiding the claim entirely.",
  },
  {
    number: "05",
    title: "Settlement Negotiation",
    body: "Once the loss adjuster's report is complete, the insurer will present a settlement offer. If you disagree with the amount offered, you have the right to submit a formal written objection supported by additional evidence. This is where having an active broker is valuable — they act as your advocate in negotiations with the insurer. If no agreement is reached, the dispute resolution mechanism in the policy (usually arbitration) can be invoked.",
  },
  {
    number: "06",
    title: "Payment Disbursement",
    body: "Once the settlement amount is agreed, you will be asked to sign a discharge voucher. Read this carefully before signing — it typically constitutes a full and final settlement of the claim for that specific incident. Payment is generally released within 14–30 business days of the insurer receiving the signed discharge voucher.",
  },
];

const docsChecklist = [
  { doc: "Copy of the current CAR policy", critical: true },
  { doc: "Chronological incident report from site manager", critical: true },
  { doc: "Timestamped photos and video of damage", critical: true },
  { doc: "Cost of reinstatement estimate from contractor", critical: true },
  { doc: "Construction contract and BOQ/budget plan", critical: true },
  { doc: "Police report (for criminal incidents)", critical: false },
  { doc: "As-built drawings (relevant sections)", critical: false },
  { doc: "Site diary / daily construction log", critical: false },
  { doc: "Weather records (for natural catastrophe claims)", critical: false },
  { doc: "Written statement from supervising engineer (MK)", critical: false },
];

export default function BlogHowToClaimCARPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex gap-2">
            <li><a href="/en" className="hover:underline">Home</a></li>
            <li>/</li>
            <li><a href="/en/blog" className="hover:underline">Blog</a></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">How to Claim CAR Insurance</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Engineering Insurance
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            How to Claim CAR Insurance When Your Project Is Damaged: A Step-by-Step Guide
          </h1>
          <p className="text-gray-500 text-sm">
            By <span className="font-medium text-gray-700">Rio</span> &middot; 7 May 2026 &middot; 9 min read
          </p>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Incidents on construction sites can happen at any time — a material store fire, a slope failure during excavation, a crane collapse damaging a completed structure. When they do, how quickly and correctly you respond has a direct bearing on whether your Contractor All Risk (CAR) claim succeeds.
          </p>
        </header>

        <section className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-10">

          <p>
            Many contractors carry a CAR policy but have no clear idea what to do the moment an incident actually occurs. The result: late notifications, incomplete documentation, premature clean-up before the survey — and claims that are rejected outright or settled for far less than the actual loss.
          </p>
          <p>
            This guide walks you through every step: from the moment an incident happens to the point where settlement funds arrive in your account.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">The 6 Steps of Filing a CAR Insurance Claim</h2>

          <div className="space-y-6">
            {claimSteps.map((step) => (
              <div key={step.number} className="flex gap-5 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white font-bold text-lg rounded-xl flex items-center justify-center">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Documents Checklist */}
          <h2 className="text-2xl font-bold text-gray-900">CAR Claim Documents Checklist</h2>
          <p>
            Use this checklist to track what you need. Mandatory items are marked in red; situational documents depend on the nature of the incident.
          </p>

          <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-600 font-semibold">
                <tr>
                  <th className="px-5 py-3 text-left">Document</th>
                  <th className="px-5 py-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {docsChecklist.map((item) => (
                  <tr key={item.doc} className="bg-white hover:bg-gray-50 transition">
                    <td className="px-5 py-3 text-gray-700">{item.doc}</td>
                    <td className="px-5 py-3 text-center">
                      <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${item.critical ? "bg-red-50 text-red-600" : "bg-gray-100 text-gray-500"}`}>
                        {item.critical ? "Mandatory" : "Situational"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Why Claims Get Rejected */}
          <h2 className="text-2xl font-bold text-gray-900">The Most Common Reasons CAR Claims Are Denied</h2>
          <p>
            Understanding why claims fail is just as important as knowing the process. These are the recurring patterns:
          </p>

          <div className="space-y-4">
            {[
              {
                title: "Late notification",
                desc: "The 72-hour notification window is not a formality. A delay without valid justification can be treated as grounds for denial — the insurer may argue that the late report suggests undisclosed circumstances surrounding the incident.",
              },
              {
                title: "Disturbing the evidence before the survey",
                desc: "Moving debris, starting clean-up, or carrying out temporary repairs before the loss adjuster inspects the site destroys the physical evidence needed to assess the extent of loss. Always seek written clearance from your insurer before touching anything.",
              },
              {
                title: "Sum insured lower than the actual contract value",
                desc: "If you declared a sum insured below the true project value to reduce your premium, the average principle applies at the time of claim. For example: if your project is worth IDR 10 billion but insured for IDR 6 billion, a claim of IDR 1 billion will only result in a payout of IDR 600 million.",
              },
              {
                title: "Policy has lapsed",
                desc: "Projects that overrun their scheduled completion date without a corresponding policy extension are uninsured during the gap period. This is a common and entirely avoidable exposure — extend the policy as soon as a project delay is identified.",
              },
              {
                title: "The risk is excluded under the policy",
                desc: "Every policy contains exclusions. Damage arising from faulty design, known defective workmanship, or inherent vice are standard exclusions under most CAR policies and cannot be claimed, regardless of the financial impact.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-red-400 pl-5 py-1">
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="text-gray-600 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Tips to Speed Up */}
          <h2 className="text-2xl font-bold text-gray-900">Practical Tips to Accelerate Your Claim</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Keep all communication in writing.</strong> Follow up every phone conversation with a WhatsApp message or email summarising what was discussed. This creates a clear audit trail if any dispute arises later.
            </li>
            <li>
              <strong>Appoint a single internal claims coordinator.</strong> When responsibility is unclear internally, documents move slowly. Designate one person to own the claim process from start to finish.
            </li>
            <li>
              <strong>Get reinstatement estimates from two separate contractors.</strong> Having two independent quotes gives you a stronger negotiating position when the insurer tables their settlement offer.
            </li>
            <li>
              <strong>Work with an active broker.</strong> A good broker doesn't just arrange the policy — they advocate for you throughout the claims process, liaising directly with the loss adjuster and insurer on your behalf.
            </li>
          </ul>

          {/* Timeframes */}
          <h2 className="text-2xl font-bold text-gray-900">How Long Does a CAR Claim Take?</h2>
          <p>
            There is no fixed timeline, as it depends on the complexity of the damage and how completely you submit your documentation upfront. As a general reference:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Small claims (under IDR 100 million) with complete documents: <strong>2–4 weeks</strong></li>
            <li>Mid-sized claims requiring a site survey: <strong>4–8 weeks</strong></li>
            <li>Large or complex claims involving an external loss adjuster: <strong>2–6 months</strong></li>
          </ul>
          <p>
            The most reliable way to speed up the process is to submit thorough, well-organised documentation from the very beginning. Every back-and-forth request for missing information adds days or weeks to the timeline.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Conclusion</h2>
          <p>
            A successful CAR claim is not about luck — it is the result of disciplined preparation and the right actions at the right moment. Notify early, document everything, and do not touch the site before getting the insurer's go-ahead.
          </p>
          <p>
            If you are not clear on the claims procedure in your current CAR policy, reach out to your broker or agent now — before an incident occurs, not after it.
          </p>

        </section>

        {/* CTA */}
        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Need Help With a CAR Claim or Policy?</h3>
          <p className="text-gray-600 mb-5">
            Rio is available to assist — from policy selection through to claims support.
          </p>
          <QuoteButton cluster="engineering" lang="en" variant="gold" className="!rounded-xl !px-8 !py-3" />
          <p className="text-sm text-gray-400 mt-3">+62-813-7333-6728 &middot; Rio, Batam Insurance Agent</p>
        </div>

        {/* Internal Links */}
        <div className="mt-10 border-t pt-8">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Related Articles</p>
          <ul className="space-y-2">
            <li>
              <a href="/en/blog/difference-between-car-and-ear-insurance" className="text-blue-600 hover:underline font-medium">
                → CAR vs EAR Insurance: What's the Difference?
              </a>
            </li>
            <li>
              <a href="/en/engineering-insurance/contractor-all-risk" className="text-blue-600 hover:underline font-medium">
                → Contractor All Risk (CAR) – Full Coverage & Benefits
              </a>
            </li>
            <li>
              <a href="/en/engineering-insurance" className="text-blue-600 hover:underline font-medium">
                → Engineering Insurance Batam – All Products
              </a>
            </li>
          </ul>
        </div>

      
        <div className="mt-10 pt-8 border-t border-gray-200">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#c9a84c" }}>Related Pages</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><p className="text-xs font-semibold text-gray-500 mb-2">Products</p><ul className="space-y-2">
              <li><a href="/en/engineering-insurance/contractor-all-risk" className="text-sm text-blue-700 hover:underline font-medium">→ Contractor All Risk Batam</a></li>
              <li><a href="/en/engineering-insurance/erection-all-risk" className="text-sm text-blue-700 hover:underline font-medium">→ Erection All Risk Batam</a></li>
            </ul></div>
            <div><p className="text-xs font-semibold text-gray-500 mb-2">Related Articles</p><ul className="space-y-2">
              <li><a href="/en/blog/difference-between-car-and-ear-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ CAR vs EAR Insurance</a></li>
              <li><a href="/en/blog/construction-project-insurance-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Construction Project Insurance Batam</a></li>
            </ul></div>
          </div>
        </div>
      </article>
    </>
  );
            }

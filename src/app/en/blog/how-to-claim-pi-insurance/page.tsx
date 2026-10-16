// app/en/blog/how-to-claim-pi-insurance/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import QuoteButton from "@/components/quote/QuoteButton";
import ArticleLayout from "@/components/ArticleLayout";
import { generateSEO } from "@/lib/seo";
import { AlertTriangle, PhoneCall, FileText, Route, Ban, MessageCircleMore } from "lucide-react";

function SectionHeading({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 not-prose font-display font-bold text-[#0a1628] text-2xl md:text-[1.65rem] mt-12 mb-4">
      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
        <Icon className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
      </span>
      {children}
    </h2>
  );
}

export const metadata: Metadata = generateSEO({
  title: "How to Claim P&I Insurance: Steps and Documents",
  description:
    "How to claim P&I insurance after a vessel incident: notifying the insurer, securing evidence, documents to prepare, and mistakes that make claims hard to pay.",
  canonical: "https://asuransibatam.com/en/blog/how-to-claim-pi-insurance",
  languages: {
    id: "https://asuransibatam.com/blog/cara-klaim-asuransi-pi-kapal",
    en: "https://asuransibatam.com/en/blog/how-to-claim-pi-insurance",
  },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Claim P&I Insurance: Steps, Documents, and Mistakes to Avoid",
  description: "A step-by-step guide to claiming P&I insurance after a vessel incident.",
  datePublished: "2026-10-16",
  dateModified: "2026-10-16",
  author: { "@type": "Person", name: "Rio", jobTitle: "Insurance Practitioner", telephone: "+6281373336728" },
  publisher: { "@type": "InsuranceAgency", name: "Batam Insurance – Rio", url: "https://asuransibatam.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://asuransibatam.com/en/blog/how-to-claim-pi-insurance" },
};

const docs = [
  "Master's incident report and the ship's logbook",
  "Crew list and details of the crew involved",
  "Photos, video, and vessel position data at the time",
  "Written demand or complaint from the injured party",
  "Charter party, bill of lading, or carriage contract (for cargo claims)",
  "Surveyor report, medical report, or damage estimate",
  "Proof of report to the harbour master or port authority",
  "Copies of the P&I policy and the current Marine Hull policy",
];

export default function HowToClaimPiPage() {
  return (
    <ArticleLayout
      cluster="marine"
      title="How to Claim P&I Insurance: Steps, Documents, and Mistakes to Avoid"
      description="A P&I claim starts with someone else's demand, not damage to your vessel. Here is a safe order of action."
      date="16 October 2026"
      readTime="6 min"
      category="Marine"
      breadcrumbs={[{ label: "How to Claim P&I Insurance", href: "/en/blog/how-to-claim-pi-insurance" }]}
      schema={schema}
    >
      <p>
        A claim under <Link href="/en/marine-insurance/protection-and-indemnity">P&amp;I insurance</Link> differs from a hull claim. What you claim is not damage to your vessel but a demand, or potential demand, from someone else: an injured crew member, a cargo owner, a pier owner, or a party affected by pollution. How you react in the first days often decides how smoothly the claim runs.
      </p>

      <SectionHeading icon={PhoneCall}>Step 1: Secure Safety, Then Notify the Insurer</SectionHeading>
      <p>
        First priority is the safety of crew and passengers and preventing further loss, for example stopping a leak. Then notify your broker and insurer <strong>as soon as possible</strong>, even if no formal demand has arrived. Many policies require prompt notice, and incidents that may become claims are best recorded from the start. Also report to the harbour master or port authority as the rules require.
      </p>

      <SectionHeading icon={AlertTriangle}>Step 2: Preserve Evidence</SectionHeading>
      <p>
        Keep the logbook, recordings, navigation data, and photos. Note witness names and take crew statements while memories are fresh. Do not alter or clean up the scene before it is documented, except for safety or pollution response.
      </p>

      <SectionHeading icon={FileText}>Step 3: Prepare Documents</SectionHeading>
      <ul>
        {docs.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <p>The exact list depends on the claim type. Cargo claims and crew injury claims need different papers.</p>

      <SectionHeading icon={Route}>Step 4: The Assessment Process</SectionHeading>
      <p>
        The insurer will check whether the event falls within cover, appoint a surveyor or legal adviser if needed, assess the extent of liability, and negotiate with the claimant. How payment works, including whether the insurer pays directly or reimburses you after you pay, follows the policy wording. A broker's job is to manage communication, complete documents, and make sure deadlines are not missed.
      </p>

      <SectionHeading icon={Ban}>Mistakes That Make Claims Hard to Pay</SectionHeading>
      <ul>
        <li><strong>Admitting liability or promising compensation</strong> to the claimant before coordinating with the insurer.</li>
        <li><strong>Settling privately</strong> without the insurer's consent, so the cost may be refused.</li>
        <li><strong>Reporting late</strong> while waiting for a formal demand letter.</li>
        <li><strong>Losing or not keeping evidence</strong> such as the logbook and recordings.</li>
        <li><strong>Not knowing the policy terms</strong>, such as limits and deductibles, so expectations do not match.</li>
      </ul>
      <p>
        To see how P&amp;I and hull split roles, read <Link href="/en/blog/pi-vs-marine-hull-insurance">P&amp;I vs Marine Hull insurance</Link>.
      </p>

      <div className="mt-10 p-6 bg-[#0a1628] rounded-2xl text-white not-prose">
        <h3 className="flex items-center gap-2.5 font-display font-bold text-lg text-[#c9a84c] mb-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 shrink-0">
            <MessageCircleMore className="w-[16px] h-[16px] text-[#c9a84c]" strokeWidth={2} />
          </span>
          No P&amp;I Yet, or Want a Policy Check?
        </h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          Send your vessel details for an initial assessment before an incident happens.
        </p>
        <QuoteButton cluster="marine" lang="en" variant="gold" className="!rounded-xl !px-6 !py-3 !text-sm" />
      </div>

      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Related Pages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Products &amp; Services</p>
            <ul className="space-y-2">
              <li><Link href="/en/marine-insurance/protection-and-indemnity" className="text-sm text-blue-700 hover:underline font-medium">→ P&amp;I Insurance Batam</Link></li>
              <li><Link href="/en/marine-insurance/marine-hull" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Hull Insurance Batam</Link></li>
              <li><Link href="/en/marine-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Insurance Batam</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Related Articles</p>
            <ul className="space-y-2">
              <li><Link href="/en/blog/pi-vs-marine-hull-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ P&amp;I vs Marine Hull Insurance</Link></li>
              <li><Link href="/en/blog/how-to-claim-marine-cargo-insurance" className="text-sm text-blue-700 hover:underline font-medium">→ How to Claim Marine Cargo Insurance</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}

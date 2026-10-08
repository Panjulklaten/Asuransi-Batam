// app/en/surety-bond-insurance/bid-bond/page.tsx
import type { Metadata } from "next";
import { generateSEO, schemaInsuranceProduct } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";
import {
  FileText,
  Users,
  Wallet,
  CalendarClock,
  ClipboardList,
  Scale,
  ListChecks,
  Network,
  MessageCircleMore,
  CheckCircle2,
} from "lucide-react";

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

function IconList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="not-prose grid gap-3 my-5 list-none p-0">
      {items.map((text, i) => (
        <li key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#faf8f3] border border-[#eee3cc]">
          <CheckCircle2 className="w-[18px] h-[18px] text-[#1a7a4c] shrink-0 mt-0.5" strokeWidth={2} />
          <span className="text-sm text-[#374151] leading-relaxed">{text}</span>
        </li>
      ))}
    </ul>
  );
}

function Steps({ items }: { items: { title: string; desc?: React.ReactNode }[] }) {
  return (
    <ol className="not-prose relative my-6 list-none p-0 space-y-5 ml-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0a1628] text-[#c9a84c] font-display font-bold text-sm shrink-0">
            {i + 1}
          </span>
          <div className="pt-0.5">
            <p className="font-semibold text-[#0a1628] m-0 text-[15px]">{item.title}</p>
            {item.desc && <p className="text-sm text-[#475569] mt-1 mb-0">{item.desc}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}

export const metadata: Metadata = generateSEO({
  title: "Bid Bond Batam – Tender Bid Guarantee",
  description: "Bid bond (tender guarantee) in Batam for government, SOE, and private tenders. Fast issuance, no collateral, officially recognized. Contact Rio for a free consultation.",
  keywords: [
    "bid bond batam",
    "tender guarantee batam",
    "bid guarantee batam",
    "construction bid bond batam",
    "surety bond bid bond batam",
  ],
  canonical: "https://asuransibatam.com/en/surety-bond-insurance/bid-bond",
  languages: {
      id: "https://asuransibatam.com/asuransi-surety-bond/bid-bond",
      en: "https://asuransibatam.com/en/surety-bond-insurance/bid-bond",
    },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bid Bond Batam – Tender Bid Guarantee",
  description:
    "A complete guide to bid bonds in Batam: definition, purpose, required documents, and how to apply for a tender bid guarantee for government and private tenders.",
  author: {
    "@type": "Person",
    name: "Rio Mardiansyah",
    jobTitle: "Insurance Practitioner",
  },
  publisher: {
    "@type": "Organization",
    name: "Asuransi Batam",
    url: "https://asuransibatam.com",
  },
  mainEntityOfPage: "https://asuransibatam.com/en/surety-bond-insurance/bid-bond",
};

const serviceSchema = schemaInsuranceProduct({
  name: "Bid Bond (Tender Guarantee) Batam",
  description: "Bid bond / tender guarantee services in Batam for government, SOE, and private tenders. Fast issuance, no collateral required.",
  url: "/en/surety-bond-insurance/bid-bond",
  category: "Surety Bond",
});

export default function BidBondENPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ArticleLayout
        cluster="surety"
      title="Bid Bond Batam: Tender Bid Guarantee"
      description="A complete guide to bid bonds in Batam — definition, purpose, guarantee value, required documents, and how to quickly obtain a bid guarantee for government and private tenders."
      date="2025"
      category="Surety Bond"
      readTime="6 min"
      breadcrumbs={[
        { label: "Surety Bond Insurance", href: "/en/surety-bond-insurance" },
        { label: "Bid Bond", href: "/en/surety-bond-insurance/bid-bond" },
      ]}
      schema={schema}
    >
      {/* ── Intro ── */}
      <p>
        Every company participating in a tender process in Batam — whether for government,
        SOE, or private projects — is generally required to submit a <strong>Bid Bond</strong>{" "}
        (tender guarantee). This document is not just an administrative formality; it is
        proof of your company&apos;s seriousness and ability to fulfill contract obligations
        if selected as the winning bidder.
      </p>
      <p>
        This page explains in full what a bid bond is, who needs one, how much it costs, and
        how to obtain one quickly in Batam.
      </p>

      {/* ── H2: What Is Bid Bond ── */}
      <SectionHeading icon={FileText}>What Is a Bid Bond (Tender Guarantee)?</SectionHeading>
      <p>
        A bid bond is a type of <Link href="/en/surety-bond-insurance">surety bond</Link>{" "}
        issued by an OJK-licensed insurance company. Its function is to guarantee to the
        project owner (<em>obligee</em>) that the bidder (<em>principal</em>) who is declared
        the winner will:
      </p>
      <ul>
        <li>Sign the work contract in accordance with the submitted bid</li>
        <li>
          Submit a{" "}
          <Link href="/en/surety-bond-insurance/performance-bond">Performance Bond</Link> and{" "}
          <Link href="/en/surety-bond-insurance/advance-payment-bond">Advance Payment Bond</Link>{" "}
          within the specified deadline
        </li>
        <li>Not unilaterally withdraw after the winner is announced</li>
      </ul>
      <p>
        If the winning bidder defaults, the project owner can claim the bid bond to cover the
        cost of re-tendering or any losses incurred.
      </p>

      {/* ── H2: Who Needs Bid Bond ── */}
      <SectionHeading icon={Users}>Who Needs a Bid Bond in Batam?</SectionHeading>
      <p>
        Bid bonds are needed by various types of companies active in procurement of goods and
        services in Batam, including:
      </p>
      <IconList
        items={[
          <><strong>Construction contractors</strong> bidding on building, road, and infrastructure tenders</>,
          <><strong>Manufacturing and industrial companies</strong> in Batam&apos;s industrial estates bidding on machinery and equipment procurement</>,
          <><strong>Procurement companies</strong> acting as vendors for SOEs, BP Batam, or foreign companies</>,
          <><strong>Service companies</strong> such as IT, cleaning services, and security bidding on service tenders</>,
          <><strong>Subcontractors</strong> handling part of a project for the main contractor</>,
        ]}
      />

      {/* ── H2: Guarantee Value ── */}
      <SectionHeading icon={Wallet}>How Much Bid Bond Value Is Required?</SectionHeading>
      <p>
        Under government procurement regulations (Presidential Regulation 16/2018 as amended
        by 12/2021), bid bond values generally range from <strong>1% to 3%</strong> of the
        total bid value (Owner Estimate/HPS). For private projects, the amount is agreed upon
        in each tender&apos;s documents.
      </p>
      <p>
        Example: if a project&apos;s HPS is IDR 10 billion, the required bid bond ranges from
        approximately IDR 100 million to IDR 300 million.
      </p>

      {/* ── H2: Validity Period ── */}
      <SectionHeading icon={CalendarClock}>Bid Bond Validity Period</SectionHeading>
      <p>
        A bid bond is valid throughout the tender period, plus a buffer for the winner
        selection and contract signing process. The typical validity period is{" "}
        <strong>30 to 90 days</strong> from the issuance date, per the tender document
        requirements. If the tender process is extended, the bid bond can be extended
        accordingly.
      </p>

      {/* ── H2: Required Documents ── */}
      <SectionHeading icon={ClipboardList}>Documents Required for a Bid Bond Application</SectionHeading>
      <p>
        Here are the standard documents needed to apply for a bid bond in Batam:
      </p>
      <ul>
        <li>Company deed of establishment and any amendments (if applicable)</li>
        <li>SIUP / NIB (Business Registration Number)</li>
        <li>Company NPWP (Tax Registration Number)</li>
        <li>Financial statements for the last 2 years (or annual tax return)</li>
        <li>Tender documents / Bid Invitation from the project owner</li>
        <li>Director/commissioner identity cards</li>
        <li>Track record of similar work (if available)</li>
      </ul>
      <p>
        For new contractors or companies without audited financial statements, alternative
        processes can still be discussed with our consultants.
      </p>

      {/* ── H2: Insurance Bid Bond vs Bank Guarantee ── */}
      <SectionHeading icon={Scale}>Insurance Bid Bond vs Bank Guarantee: Which Is More Advantageous?</SectionHeading>
      <p>
        Many companies in Batam still use bank guarantees for tender purposes. However, a bid
        bond from an insurance company offers several significant advantages:
      </p>
      <IconList
        items={[
          <><strong>No frozen funds:</strong> A bank guarantee requires you to place a deposit or collateral at the bank. An insurance bid bond does not — your company&apos;s liquidity stays intact.</>,
          <><strong>Lower cost:</strong> Insurance bid bond fees are generally lower than bank guarantee provision fees.</>,
          <><strong>Faster process:</strong> Insurance bid bond issuance can be completed in 1–3 business days, much faster than a bank guarantee process.</>,
          <><strong>Officially recognized:</strong> Bid bonds from OJK-licensed insurers are accepted for government and private procurement throughout Indonesia, including Batam.</>,
        ]}
      />

      {/* ── H2: How to Apply ── */}
      <SectionHeading icon={ListChecks}>How to Apply for a Bid Bond in Batam</SectionHeading>
      <Steps
        items={[
          { title: "Contact us", desc: "Via WhatsApp or phone for an initial consultation and eligibility check." },
          { title: "Prepare documents", desc: "As per the checklist above, and send them to our team." },
          { title: "Underwriting process", desc: "Our team evaluates eligibility and prepares a draft bid bond for insurer approval." },
          { title: "Issuance", desc: "The bid bond is printed and delivered (physical or digital as needed) within 1–3 business days." },
        ]}
      />

      {/* ── H2: Internal Links ── */}
      <SectionHeading icon={Network}>Other Surety Bonds You May Need</SectionHeading>
      <p>
        In addition to a bid bond, your project cycle may require other types of surety bonds.
        Learn more:
      </p>
      <ul>
        <li>
          <Link href="/en/surety-bond-insurance/performance-bond">
            Performance Bond – Contract Execution Guarantee
          </Link>
        </li>
        <li>
          <Link href="/en/surety-bond-insurance/advance-payment-bond">
            Advance Payment Bond – Down Payment Guarantee
          </Link>
        </li>
        <li>
          <Link href="/en/surety-bond-insurance/maintenance-bond">
            Maintenance Bond – Post-Completion Guarantee
          </Link>
        </li>
        <li>
          <Link href="/en/engineering-insurance/contractor-all-risk">
            Contractor All Risk (CAR) – Construction Project Insurance
          </Link>
        </li>
      </ul>
      <p>
        Or go back to the main{" "}
        <Link href="/en/surety-bond-insurance">Surety Bond Insurance Batam</Link> page for a
        complete overview.
      </p>

      {/* ── CTA ── */}
      <div className="mt-10 p-6 bg-[#0a1628] rounded-2xl text-white not-prose">
        <h3 className="flex items-center gap-2.5 font-display font-bold text-lg text-[#c9a84c] mb-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 shrink-0">
            <MessageCircleMore className="w-[16px] h-[16px] text-[#c9a84c]" strokeWidth={2} />
          </span>
          Free Bid Bond Consultation with Rio
        </h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          Do you have tender documents in hand and need a bid bond quickly? Contact Rio — a
          insurance practitioner with 8+ years of experience in Batam — to get the best
          premium offer and fast issuance.
        </p>
        <p className="text-sm text-white/80">
          <strong className="text-[#c9a84c]">WhatsApp:</strong> +62 813-7333-6728 &nbsp;|&nbsp;
          <strong className="text-[#c9a84c]">Hours:</strong> Mon–Sat, 08:00–17:00 WIB
        </p>
      </div>
    </ArticleLayout>
    </>
  );
}

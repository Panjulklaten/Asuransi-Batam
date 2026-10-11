// app/en/marine-insurance/builders-risk/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { generateSEO, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { Breadcrumb, SectionHeader } from "@/components/ui/index";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import QuoteButton from "@/components/quote/QuoteButton";
import QuoteCard from "@/components/quote/QuoteCard";
import { Wrench, CheckCircle2, ClipboardCheck, ShieldCheck, FileSignature, HandCoins } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Builder's Risk Insurance Batam – Shipbuilding & Repair Coverage | Batam Insurance",
  description:
    "Builder's Risk Insurance in Batam for vessel construction and repair at shipyards. From keel laying to sea trial — every stage is covered. Consult Rio!",
  canonical: "/en/marine-insurance/builders-risk",
  languages: {
    id: "https://asuransibatam.com/asuransi-marine/builders-risk",
    en: "https://asuransibatam.com/en/marine-insurance/builders-risk",
  },
});

// ─── Schema: Service — no image/price required, correct for insurance ───
const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Builder's Risk Insurance Batam",
  description:
    "Vessel construction insurance in Batam covering all stages from keel laying to sea trial and handover.",
  url: "https://asuransibatam.com/en/marine-insurance/builders-risk",
  serviceType: "Marine Insurance – Builder's Risk",
  areaServed: {
    "@type": "City",
    name: "Batam",
    addressCountry: "ID",
  },
  provider: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam",
    telephone: "081373336728",
    url: "https://asuransibatam.com",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Marine Insurance Products",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Builder's Risk Insurance",
        },
      },
    ],
  },
};

const FAQS = [
  {
    q: "What is Builder's Risk Insurance for vessels?",
    a: "Builder's Risk Insurance (also known as Marine Builder's Risk or DSU – Delay in Start-Up) protects a vessel during construction at the shipyard. Coverage begins at keel laying and extends through sea trials and formal handover to the owner.",
  },
  {
    q: "Who needs Builder's Risk Insurance?",
    a: "Both the vessel owner commissioning the new build and the shipyard bearing construction risk need this coverage. Each party has an insurable interest that Builder's Risk is designed to protect.",
  },
  {
    q: "Does Builder's Risk cover damage during sea trials?",
    a: "Yes. Most Builder's Risk policies include the sea trial period as part of the coverage period, since damage during trials is considered part of the construction process.",
  },
  {
    q: "Can major repair or drydocking work also be insured?",
    a: "Yes. In addition to new builds, Builder's Risk policies can cover major renovation, vessel conversion, or heavy refit work at a shipyard requiring extended drydocking.",
  },
  {
    q: "What is Increased Value (IV) in Builder's Risk?",
    a: "Increased Value is supplementary coverage that compensates for the difference between the vessel's completed value and the primary sum insured — particularly relevant when the vessel's value grows significantly during construction.",
  },
];

const BENEFITS = [
  "Physical damage during construction",
  "Fire and explosion at the shipyard",
  "Flooding and extreme weather",
  "Design and construction defects",
  "Damage during sea trials",
  "Third Party Liability (TPL) for shipyard",
  "Worker negligence damage",
  "Dismantling and repair costs",
  "Increased Value coverage",
  "Launching risks",
];

const STAGES = [
  {
    no: "01",
    title: "Keel Laying",
    desc: "Coverage begins at keel laying — the foundational stage of vessel construction.",
  },
  {
    no: "02",
    title: "Construction Phase",
    desc: "All stages of framing, hull plating, deck installation, and systems fit-out are covered.",
  },
  {
    no: "03",
    title: "Launching",
    desc: "Coverage includes the moment the vessel first enters the water, including capsize and hull damage risks.",
  },
  {
    no: "04",
    title: "Sea Trial & Handover",
    desc: "Extended protection through sea trials until formal delivery of the vessel to its owner.",
  },
];

const HOW_TO_GET = [
  {
    no: "01",
    icon: ClipboardCheck,
    title: "Consultation & Initial Risk Assessment",
    desc: "Share the project specifications — vessel type, total contract value, construction duration, and the yard's working methods — so coverage needs can be mapped accurately from the start.",
  },
  {
    no: "02",
    icon: ShieldCheck,
    title: "Setting the Sum Insured & Scope of Cover",
    desc: "The sum insured is based on the total contract value, not a rough estimate. The scope of cover is also adjusted depending on whether it includes sea trial and Increased Value.",
  },
  {
    no: "03",
    icon: FileSignature,
    title: "Technical Survey & Policy Issuance",
    desc: "The underwriter or surveyor assesses the yard and construction methods before issuing the policy — ideally completed before keel laying begins so there is no gap in protection.",
  },
  {
    no: "04",
    icon: HandCoins,
    title: "Monitoring While the Project Runs",
    desc: "Report scope changes, duration extensions, or added sea trials to the insurer so the policy stays relevant until the vessel is delivered.",
  },
];

export default function BuildersRiskENPage() {
  return (
    <>
      {/* Schema: Service — no image/price required unlike Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
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
              { name: "Marine Insurance", url: "/en/marine-insurance" },
              { name: "Builder's Risk Insurance", url: "/en/marine-insurance/builders-risk" },
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
              { label: "Marine Insurance", href: "/en/marine-insurance" },
              { label: "Builder's Risk Insurance" },
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
              Marine Insurance
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Builder&apos;s Risk Insurance
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Shipbuilding is a major investment at every stage. From keel laying to sea trial, every
            phase of your vessel&apos;s construction in Batam is protected with Builder&apos;s Risk
            Insurance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            
            <QuoteButton cluster="marine" lang="en" variant="gold" className="!py-3.5 !font-semibold" />
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Coverage Period"
            title="Protection at Every Stage of Construction"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
            {STAGES.map((s) => (
              <div
                key={s.no}
                className="relative p-6 rounded-2xl border border-gray-100 bg-gray-50"
              >
                <div className="text-3xl font-black mb-3 opacity-20" style={{ color: "#1a4fa0" }}>
                  {s.no}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Builder's Risk Coverage"
            title="Risks Covered During Vessel Construction"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {BENEFITS.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 p-4 rounded-xl border border-blue-100 bg-white"
              >
                <CheckCircle2
                  size={16}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "#1a4fa0" }}
                />
                <span className="text-sm text-gray-700">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Real case study (E-E-A-T: Experience) ─── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Real Case Study"
            title="Hands-On Experience Handling Builder's Risk Claims in Batam"
            subtitle="Not just theory — this is how a Builder's Risk claim was actually handled, first-hand, at a shipyard in Tanjung Uncang, Batam."
          />

          <div className="space-y-10">
            <div>
              <Image
                src="/images/potoartikel/klaimbuilderisk.webp"
                alt="Rio handling a Builder's Risk Insurance claim at a shipyard in Batam"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 896px"
                className="rounded-2xl shadow-[0_8px_24px_-8px_rgba(10,22,40,0.12)] w-full object-cover"
              />
              <p className="text-center text-sm text-gray-500 mt-3">
                Documenting and handling a Builder&apos;s Risk claim on site at a shipyard in Batam.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              On a vessel construction project under way at a Tanjung Uncang shipyard, a technical
              incident during the construction stage damaged part of the vessel&apos;s structure. As the
              practitioner supporting the insurance process, the first step was to make sure the
              damage — photos, video, and a timeline of events — was documented as quickly as possible
              before repairs began. This initial documentation is crucial because the insurer&apos;s
              surveyor needs evidence of the real condition on site to assess the claim against the
              applicable policy.
            </p>

            <div>
              <Image
                src="/images/potoartikel/Potobersamabuilderisk.webp"
                alt="Rio with the vessel owner and the insurer in front of a vessel under construction at the Tanjung Uncang shipyard, Batam"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 896px"
                className="rounded-2xl shadow-[0_8px_24px_-8px_rgba(10,22,40,0.12)] w-full object-cover"
              />
              <p className="text-center text-sm text-gray-500 mt-3">
                Coordinating directly with the vessel owner and the insurer at the Tanjung Uncang shipyard, Batam.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Once the initial documentation was complete, the shipyard, the vessel owner, and the
              insurance team coordinated to align the timeline of events and the estimated loss value.
              This technical discussion took place on the project site so that everyone shared the same
              understanding of the vessel&apos;s condition and the scope of the policy. In the end, the
              claim was processed and approved because the Builder&apos;s Risk policy in use covered
              construction risks from the earliest stage of the build — so the loss from the technical
              incident was covered under the policy terms.
            </p>

            <div>
              <Image
                src="/images/potoartikel/kapalsedangdibangun.webp"
                alt="A vessel under construction at a shipyard in Batam, illustrating a project that needs Builder's Risk Insurance"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 896px"
                className="rounded-2xl shadow-[0_8px_24px_-8px_rgba(10,22,40,0.12)] w-full object-cover"
              />
              <p className="text-center text-sm text-gray-500 mt-3">
                The construction stage — the most critical period, needing Builder&apos;s Risk protection from day one.
              </p>
            </div>

            <div className="border-l-4 border-[#c9a84c] bg-[#faf8f3] px-6 py-5 rounded-r-lg">
              <p className="font-semibold text-[#0a1628] mb-1">Practitioner Insight</p>
              <p className="text-gray-700 text-sm leading-relaxed m-0">
                This case shows how important it is to define the scope of cover precisely from the
                start of a project — not just to meet the contract&apos;s administrative requirements. A
                cheap premium is not always the best choice; coverage gaps that go undetected early are
                often the reason claims are partly or fully rejected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How to get Builder's Risk (step timeline) ─── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Practical Steps"
            title="How to Arrange Builder's Risk Insurance Properly"
            subtitle="Four steps I recommend, based on experience supporting a range of shipbuilding projects at Batam shipyards."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {HOW_TO_GET.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.no}
                  className="p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_8px_24px_-8px_rgba(10,22,40,0.08)]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: "#0a1628", color: "#c9a84c" }}
                    >
                      {step.no}
                    </div>
                    <Icon size={20} style={{ color: "#1a4fa0" }} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Related: Surety Bond ─── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Protect the Whole Project"
            title="Performance & Advance Payment Guarantees for Shipyard Projects"
            subtitle="Builder's Risk Insurance protects the physical vessel, but modern shipbuilding contracts usually also require the project-assurance guarantees below."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Link
              href="/en/surety-bond-insurance/performance-bond"
              className="group p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#c9a84c] hover:shadow-[0_8px_24px_-8px_rgba(10,22,40,0.12)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#1a4fa015" }}>
                  <ShieldCheck size={20} style={{ color: "#1a4fa0" }} />
                </div>
                <h3 className="font-bold text-gray-900 m-0">Performance Bond</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                A performance guarantee that protects the vessel owner if the shipyard fails to
                complete construction as contracted — an important complement to Builder&apos;s Risk Insurance.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold mt-4 text-[#1a4fa0] group-hover:text-[#c9a84c]">
                Learn about Performance Bond →
              </span>
            </Link>

            <Link
              href="/en/surety-bond-insurance/advance-payment-bond"
              className="group p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#c9a84c] hover:shadow-[0_8px_24px_-8px_rgba(10,22,40,0.12)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#1a4fa015" }}>
                  <HandCoins size={20} style={{ color: "#1a4fa0" }} />
                </div>
                <h3 className="font-bold text-gray-900 m-0">Advance Payment Bond</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                An advance payment guarantee that protects the return of the down payment if the
                shipyard cannot continue the vessel project as agreed.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold mt-4 text-[#1a4fa0] group-hover:text-[#c9a84c]">
                Learn about Advance Payment Bond →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Related reading ─── */}
      <section className="py-16 px-4 bg-[#faf8f3]">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#a07830]">Related Reading</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-6" style={{ fontFamily: "Syne, sans-serif", color: "#0a1628" }}>
            Learn More About Builder&apos;s Risk
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Link href="/en/blog/builders-risk-shipyard-insurance-batam" className="block p-5 rounded-xl bg-white border border-gray-100 hover:border-[#c9a84c] transition-all">
              <p className="text-sm font-semibold text-[#0a1628]">Builder&apos;s Risk Insurance for Shipyards in Batam</p>
              <span className="text-xs text-[#1a4fa0] mt-2 inline-block">Read article →</span>
            </Link>
            <Link href="/en/blog/how-to-get-builders-risk-insurance-batam" className="block p-5 rounded-xl bg-white border border-gray-100 hover:border-[#c9a84c] transition-all">
              <p className="text-sm font-semibold text-[#0a1628]">How to Get Builder&apos;s Risk Insurance in Batam</p>
              <span className="text-xs text-[#1a4fa0] mt-2 inline-block">Read article →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Related products ─── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Complete Your Shipyard Protection" title="Related Products & Articles" center />
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/en/personal-accident-insurance/group-employee-pa" className="block p-6 rounded-2xl border border-gray-100 hover:border-[#c9a84c] transition-all bg-gray-50">
              <h3 className="font-bold text-[#0a1628] mb-2">Group Employee PA</h3>
              <p className="text-sm text-gray-600">Protect shipyard workers against workplace accident risk.</p>
            </Link>
            <Link href="/en/liability-insurance/ship-repairers-liability" className="block p-6 rounded-2xl border border-gray-100 hover:border-[#c9a84c] transition-all bg-gray-50">
              <h3 className="font-bold text-[#0a1628] mb-2">Ship Repairer&apos;s Liability</h3>
              <p className="text-sm text-gray-600">The yard&apos;s legal liability for customers&apos; vessels in its custody.</p>
            </Link>
            <Link href="/en/marine-insurance/marine-hull" className="block p-6 rounded-2xl border border-gray-100 hover:border-[#c9a84c] transition-all bg-gray-50">
              <h3 className="font-bold text-[#0a1628] mb-2">Marine Hull Insurance</h3>
              <p className="text-sm text-gray-600">Hull and machinery cover once the vessel is delivered and in service.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" style={{ background: "#faf8f3" }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title="Builder's Risk Insurance – Common Questions"
            center
          />
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <QuoteCard cluster="marine" />
    </>
  );
}

import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle,
  Clock,
  Shield,
  ArrowRight,
  FileText,
  Phone,
} from "lucide-react";
import QuoteCard from "@/components/quote/QuoteCard";

export const metadata: Metadata = generateSEO({
  title: "Hazardous Waste (B3) Insurance Claims in Batam Industrial Estates: Procedure, Regulations & Case Studies",
  description: "Complete guide to filing hazardous waste (B3) insurance claims for factories in Batam's industrial zones. KLHK regulations, required documents, real case examples from Kabil and Muka Kuning, premium estimates.",
  keywords: [
    "hazardous waste insurance Batam",
    "B3 liability insurance Batam",
    "environmental impairment liability Batam",
    "industrial pollution insurance Batam",
    "EIL insurance Batam",
    "B3 waste claim Batam",
  ],
  canonical: "https://asuransibatam.com/en/hazardous-waste-insurance-batam",
  languages: {
      en: "https://asuransibatam.com/en/hazardous-waste-insurance-batam",
      id: "https://asuransibatam.com/blog/klaim-asuransi-limbah-b3-kawasan-industri-batam",
    },
});

// ── SCHEMA ───────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Hazardous Waste (B3) Insurance Claims in Batam Industrial Estates: Procedure, Regulations & Case Studies",
  description:
    "A complete guide to filing hazardous waste insurance claims for factories in Batam's industrial zones.",
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
      name: "Is B3 hazardous waste insurance mandatory for all factories in Batam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under Government Regulation 22/2021, holders of B3 waste management permits are legally required to maintain financial guarantees for pollution risk. In practice, industrial estates such as Batamindo and BP Batam require proof of environmental insurance as a condition for tenant operating licences.",
      },
    },
    {
      "@type": "Question",
      name: "Does public liability insurance cover B3 hazardous waste contamination?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally, no. Standard public liability policies explicitly exclude pollution and environmental contamination, including B3 waste spills. A separate Liability B3 or Environmental Impairment Liability (EIL) policy is required.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a B3 insurance claim typically take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "B3 claims are more complex than standard insurance claims because they involve environmental investigation, KLHK verification, and potential legal proceedings. Estimated timeframe: 3–12 months depending on the scale of the incident and complexity of the claim.",
      },
    },
    {
      "@type": "Question",
      name: "Does the policy cover land remediation costs for contaminated sites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A comprehensive Liability B3 policy typically covers remediation costs (clean-up costs), including excavation of contaminated soil, groundwater treatment, and ecosystem restoration — in accordance with KLHK-prescribed standards.",
      },
    },
    {
      "@type": "Question",
      name: "What if contamination is only discovered years after the policy has expired?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This is known as a 'long-tail claim' and is one of the key complexities of environmental insurance. Some policies use a 'claims-made' basis (the claim must be filed while the policy is still active), while others use an 'occurrence basis'. Consult our team to ensure your policy structure provides long-term protection.",
      },
    },
  ],
};

// ── DATA ─────────────────────────────────────────────────────────────────────

const claimSteps = [
  {
    step: "01",
    title: "Secure the incident area",
    desc: "Stop the source of leakage if safely possible. Cordon off the contaminated area. Do not clean the area before an investigation — this can destroy evidence and complicate the claim.",
    urgent: true,
  },
  {
    step: "02",
    title: "Report to KLHK / DLHK within 24 hours",
    desc: "Government Regulation 22/2021 requires notification of B3 incidents to the Regional Environmental and Forestry Office within 1×24 hours. Delayed reporting can carry legal consequences and complicate the insurance claim process.",
    urgent: true,
  },
  {
    step: "03",
    title: "Contact your insurer immediately",
    desc: "Notify the insurer before making any statement to third parties or the media. The insurance team will guide your response from the very first moment.",
    urgent: true,
  },
  {
    step: "04",
    title: "Document everything thoroughly",
    desc: "Take timestamped photos and videos of the incident area. Record the time of the event, weather conditions, estimated waste volume, and flow paths. Collect internal reports, operational logs, and B3 waste manifests.",
    urgent: false,
  },
  {
    step: "05",
    title: "Conduct environmental sampling",
    desc: "Collect soil, groundwater, and surface water samples through an accredited laboratory. Sampling results form the basis for determining the scale of contamination and remediation costs — a key document in the claims process.",
    urgent: false,
  },
  {
    step: "06",
    title: "Submit complete claim documents",
    desc: "The insurance company will send an adjuster for investigation. Prepare all B3 permit documents, manifests, incident reports, sampling results, and correspondence with environmental authorities.",
    urgent: false,
  },
  {
    step: "07",
    title: "Negotiation and settlement",
    desc: "The adjuster will assess the extent of losses and remediation costs. The insurer will negotiate with affected third parties. Payment is made in accordance with the policy limit and terms.",
    urgent: false,
  },
];

const coverageItems = [
  {
    covered: true,
    label: "Contaminated land remediation costs",
    desc: "Excavation, transportation, and treatment of contaminated soil in accordance with KLHK standards",
  },
  {
    covered: true,
    label: "Groundwater restoration",
    desc: "Pump-and-treat or other remediation technology costs for contaminated groundwater",
  },
  {
    covered: true,
    label: "Third-party compensation",
    desc: "Compensation to landowners, property owners, or businesses affected by the contamination",
  },
  {
    covered: true,
    label: "Legal defence costs",
    desc: "Attorney fees, court proceedings, and expert environmental witness costs",
  },
  {
    covered: true,
    label: "Certain administrative fines",
    desc: "Regulatory fines that are insurable under applicable law",
  },
  {
    covered: false,
    label: "Intentional contamination",
    desc: "Illegal waste dumping carried out deliberately and knowingly",
  },
  {
    covered: false,
    label: "Criminal penalties",
    desc: "Criminal sanctions imposed by courts are not insurable under Indonesian law",
  },
  {
    covered: false,
    label: "Pre-existing contamination",
    desc: "Pollution that occurred or was known before the policy effective date",
  },
];

const regulasiItems = [
  {
    kode: "GR 22/2021",
    nama: "Implementation of Environmental Protection and Management",
    relevansi: "Mandates financial guarantees for B3 waste permit holders; requires incident reporting to authorities within 24 hours",
  },
  {
    kode: "Law 32/2009",
    nama: "Environmental Protection and Management",
    relevansi: "Legal basis for strict liability in pollution cases — companies are liable even without negligence, making dedicated B3 coverage essential",
  },
  {
    kode: "PermenLHK P.56/2015",
    nama: "Technical Requirements for B3 Waste Management",
    relevansi: "Technical standards for B3 waste handling, storage, and transport — the reference framework for claims investigation",
  },
  {
    kode: "BP Batam Regulations",
    nama: "Batam Industrial Zone Operational Requirements",
    relevansi: "Tenants in BP Batam industrial estates must provide proof of compliant B3 waste management as a condition for operating licence renewal",
  },
];

const kasusNyata = [
  {
    lokasi: "Kabil Industrial Estate",
    insiden: "A storage tank holding organic solvent waste developed a leak due to corrosion. Waste seeped into the soil and began contaminating a neighbouring factory's groundwater well.",
    dampak: "Land remediation: IDR 3.2 billion + neighbouring factory operational disruption compensation: IDR 800 million + environmental consultant fees: IDR 450 million",
    hasil: "The factory holding a Liability B3 policy was fully protected. Without coverage, the full cost would have been borne by the company.",
    color: "border-amber-400",
    bg: "bg-amber-50",
  },
  {
    lokasi: "Muka Kuning Industrial Zone",
    insiden: "Liquid waste from a metal processing facility spilled during a transfer operation and flowed through the estate's drainage channel into a waterbody outside the factory boundary.",
    dampak: "Estate management claim: IDR 1.5 billion + drainage clean-up costs: IDR 600 million + administrative sanctions from Batam City DLHK",
    hasil: "The claim was processed. The insurance company handled negotiations with estate management and coordinated with the environmental authority.",
    color: "border-blue-400",
    bg: "bg-blue-50",
  },
  {
    lokasi: "Batu Ampar Area",
    insiden: "A fire at a chemical storage warehouse produced toxic smoke that affected nearby residential areas. Residents filed claims for health impacts.",
    dampak: "Claims from 47 affected residents: medical costs + compensation totalling IDR 2.8 billion + air quality monitoring by environmental consultant",
    hasil: "The policy covered impacts on third parties. The insurer facilitated mediation and compensation payments.",
    color: "border-red-400",
    bg: "bg-red-50",
  },
];

const premiEstimasi = [
  { jenis: "Mid-scale electronics factory", limit: "IDR 10 billion", premi: "IDR 25–50 million/year" },
  { jenis: "Metal processing facility", limit: "IDR 20 billion", premi: "IDR 50–100 million/year" },
  { jenis: "Chemical storage warehouse", limit: "IDR 15 billion", premi: "IDR 35–75 million/year" },
  { jenis: "Galvanising / coating facility", limit: "IDR 25 billion", premi: "IDR 60–120 million/year" },
  { jenis: "B3 waste treatment facility", limit: "IDR 50 billion", premi: "IDR 100–200 million/year" },
];

const faqs = [
  {
    q: "Is B3 hazardous waste insurance mandatory for all factories in Batam?",
    a: "Under Government Regulation 22/2021, holders of B3 waste management permits are legally required to maintain financial guarantees for pollution risk. In practice, industrial estates such as Batamindo and BP Batam require proof of environmental insurance as a condition for tenant operating licences.",
  },
  {
    q: "Does public liability insurance cover B3 hazardous waste contamination?",
    a: "Generally, no. Standard public liability policies explicitly exclude pollution and environmental contamination, including B3 waste spills. A separate Liability B3 or Environmental Impairment Liability (EIL) policy is required.",
  },
  {
    q: "How long does a B3 insurance claim typically take?",
    a: "B3 claims are more complex than standard insurance claims because they involve environmental investigation, KLHK verification, and potential legal proceedings. Estimated timeframe: 3–12 months depending on the scale of the incident and complexity of the claim.",
  },
  {
    q: "Does the policy cover land remediation costs for contaminated sites?",
    a: "Yes. A comprehensive Liability B3 policy typically covers remediation costs (clean-up costs), including excavation of contaminated soil, groundwater treatment, and ecosystem restoration — in accordance with KLHK-prescribed standards.",
  },
  {
    q: "What if contamination is only discovered years after the policy has expired?",
    a: "This is known as a 'long-tail claim' and is one of the key complexities of environmental insurance. Some policies use a 'claims-made' basis (the claim must be filed while the policy is still active), while others use an 'occurrence basis'. Consult our team to ensure your policy structure provides long-term protection.",
  },
];

// ── PAGE ─────────────────────────────────────────────────────────────────────

export default function HazardousWasteInsuranceBatamPage() {
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
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8 flex-wrap">
            <Link href="/en" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/en/blog" className="hover:text-white/80 transition-colors">Blog</Link>
            <span>/</span>
            <Link href="/en/liability-insurance" className="hover:text-[#c9a84c] transition-colors">Liability</Link>
            <span>/</span>
            <span className="text-white/70">Hazardous Waste Insurance Batam</span>
          </nav>

          {/* Language switcher */}
          <div className="flex items-center gap-2 mb-6">
            <Link
              href="/blog/klaim-asuransi-limbah-b3-kawasan-industri-batam"
              className="text-xs px-3 py-1.5 rounded-full border border-white/20 text-white/50 hover:text-white/80 hover:border-white/40 transition-all"
            >
              🇮🇩 Baca dalam Bahasa Indonesia
            </Link>
          </div>

          {/* Category badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a84c]/20 border border-[#c9a84c]/30 rounded-full text-[#c9a84c] text-sm font-semibold mb-6">
            <AlertTriangle className="w-4 h-4" />
            Liability
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
            Hazardous Waste (B3) Insurance Claims<br />
            in <span className="text-gradient-gold">Batam Industrial Estates:</span><br />
            Procedure, Regulations & Cases
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-3xl">
            A complete guide to the claims process, applicable KLHK regulations, real incident examples from
            Kabil and Muka Kuning, and how to ensure your policy actually protects your business.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> May 29, 2026</span>
            <span>•</span>
            <span>Asuransi Batam Team</span>
            <span>•</span>
            <span>~12 min read</span>
          </div>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────────── */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Scenario intro */}
        <div className="bg-[#faf8f3] border-l-4 border-red-500 rounded-r-2xl p-6 mb-12">
          <p className="text-[#0a1628] leading-relaxed">
            At 2:30 AM, a night-shift operator at a metal processing factory in the{" "}
            <strong>Kabil</strong> industrial estate detects a sharp chemical odour from the storage tank area.
            After inspection: a crack in the tank wall has been leaking organic solvent waste for several hours.
            Dark liquid has seeped into the ground and begun flowing toward the estate's drainage channel.
          </p>
          <p className="text-[#0a1628] mt-4 leading-relaxed">
            Within the next 72 hours, the factory faces: an investigation by the Batam City Environmental Office,
            compensation claims from three neighbouring factories, and a remediation cost demand from the
            estate manager. Total financial exposure: over <strong>IDR 4.5 billion</strong>.
          </p>
          <p className="text-[#475569] mt-4 text-sm leading-relaxed">
            This factory held a Liability B3 policy. That fact made a decisive difference to the outcome.
          </p>
        </div>

        {/* ── SECTION 1: Why B3 needs a separate policy ── */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-5">
            Why B3 Waste Requires a Separate Policy — Not Just Public Liability
          </h2>
          <p className="text-[#475569] leading-relaxed mb-5">
            Many factory owners in Batam assume their{" "}
            <Link href="/en/liability-insurance/public-liability" className="text-[#1a4fa0] font-semibold hover:underline">
              public liability insurance
            </Link>{" "}
            is sufficient to cover pollution incidents. This assumption is both incorrect and dangerous.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-900 text-sm mb-2">Standard Exclusion in Public Liability Policies</p>
                <p className="text-red-800 text-sm leading-relaxed">
                  Almost all standard public liability policies explicitly <strong>exclude</strong> pollution,
                  contamination, and environmental damage — including B3 waste spills. Claims arising from B3
                  incidents will be rejected if the company relies solely on a public liability policy.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0] shadow-sm mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="gradient-navy">
                  <th className="text-left px-5 py-4 text-white/70 font-semibold">Coverage Area</th>
                  <th className="text-left px-5 py-4 text-[#c9a84c] font-display font-bold">Public Liability</th>
                  <th className="text-left px-5 py-4 text-blue-300 font-display font-bold">Liability B3 / EIL</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Third-party injury (non-pollution)", "✅ Covered", "✅ Covered"],
                  ["Property damage (non-pollution)", "✅ Covered", "✅ Covered"],
                  ["B3 hazardous waste contamination", "❌ Excluded", "✅ Covered"],
                  ["Land remediation costs", "❌ Excluded", "✅ Covered"],
                  ["Groundwater restoration", "❌ Excluded", "✅ Covered"],
                  ["Environmental administrative sanctions", "❌ Excluded", "✅ Partially covered"],
                  ["Environmental consultant fees", "❌ Excluded", "✅ Covered"],
                ].map(([area, pub, b3], i) => (
                  <tr key={area} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                    <td className="px-5 py-3.5 font-medium text-[#0a1628]">{area}</td>
                    <td className="px-5 py-3.5 text-[#475569]">{pub}</td>
                    <td className="px-5 py-3.5 text-[#475569]">{b3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[#475569] leading-relaxed">
            For businesses in Batam's industrial zones that generate, store, or transport B3 waste, a combination
            of both policies is necessary. Consult our{" "}
            <Link href="/en/liability-insurance" className="text-[#1a4fa0] font-semibold hover:underline">
              liability team
            </Link>{" "}
            to assess your specific requirements.
          </p>
        </section>

        {/* ── SECTION 2: Regulations ── */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-5">
            Regulations Binding B3 Waste Managers in Batam
          </h2>
          <p className="text-[#475569] leading-relaxed mb-6">
            Despite its Free Trade Zone (FTZ) and Special Economic Zone (KEK) status, Batam remains fully
            subject to national environmental regulations. The following are the key frameworks relevant to
            B3 waste managers in Batam's industrial estates:
          </p>

          <div className="space-y-4">
            {regulasiItems.map((reg) => (
              <div key={reg.kode} className="bg-white rounded-2xl border border-[#e2e8f0] p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 px-3 py-1.5 gradient-navy rounded-lg">
                    <span className="font-display font-bold text-[#c9a84c] text-xs whitespace-nowrap">{reg.kode}</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-[#0a1628] text-sm mb-1">{reg.nama}</p>
                    <p className="text-[#475569] text-sm leading-relaxed">{reg.relevansi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-[#faf8f3] border border-[#e2e8f0] rounded-2xl p-5">
            <p className="text-[#475569] text-sm leading-relaxed">
              <strong className="text-[#0a1628]">Key point:</strong> Law 32/2009 applies the principle of{" "}
              <em>strict liability</em> to B3 pollution — meaning a company can be held liable{" "}
              <strong className="text-[#0a1628]">even in the absence of negligence</strong>. This is
              fundamentally different from most standard liability insurance frameworks, and is the primary
              reason a dedicated B3 policy is necessary for any industrial operation in Batam.
            </p>
          </div>
        </section>

        {/* ── SECTION 3: Coverage ── */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-6">
            What a Liability B3 Policy Covers — and What It Does Not
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coverageItems.map((item) => (
              <div
                key={item.label}
                className={`rounded-2xl p-5 border ${
                  item.covered
                    ? "bg-green-50 border-green-200"
                    : "bg-red-50 border-red-200"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${
                    item.covered ? "bg-green-500" : "bg-red-500"
                  }`}>
                    <span className="text-white text-xs font-bold">{item.covered ? "✓" : "✗"}</span>
                  </div>
                  <div>
                    <p className={`font-display font-bold text-sm mb-1 ${
                      item.covered ? "text-green-900" : "text-red-900"
                    }`}>
                      {item.label}
                    </p>
                    <p className={`text-xs leading-relaxed ${
                      item.covered ? "text-green-800" : "text-red-800"
                    }`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 4: 7-Step claim procedure ── */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-3">
            7-Step B3 Insurance Claim Procedure
          </h2>
          <p className="text-[#475569] leading-relaxed mb-8">
            Actions taken in the first 24–72 hours after an incident are critical to the success of the claim.
            Follow this procedure carefully:
          </p>

          <div className="space-y-5">
            {claimSteps.map((s) => (
              <div
                key={s.step}
                className={`relative flex gap-5 p-5 rounded-2xl border-2 ${
                  s.urgent
                    ? "border-red-300 bg-red-50"
                    : "border-[#e2e8f0] bg-white"
                }`}
              >
                {s.urgent && (
                  <div className="absolute -top-2.5 left-5">
                    <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded-full">
                      URGENT
                    </span>
                  </div>
                )}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 font-display font-black text-sm ${
                  s.urgent ? "bg-red-500 text-white" : "gradient-navy text-[#c9a84c]"
                }`}>
                  {s.step}
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#0a1628] mb-1">{s.title}</h3>
                  <p className="text-[#475569] text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-[#0a1628] rounded-2xl p-5 flex items-start gap-4">
            <Phone className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-display font-bold text-white text-sm mb-1">
                Don't wait — contact us the moment an incident occurs
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                Our team is ready to guide the correct response steps from minute one, including
                coordination with DLHK and the insurance company.{" "}
                <a
                  href="https://wa.me/6281373336728?text=Emergency%20-%20B3%20waste%20incident"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c9a84c] font-semibold hover:underline"
                >
                  WhatsApp +62813-7333-6728 →
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: Case studies ── */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-3">
            Case Studies: B3 Incidents in Batam Industrial Estates
          </h2>
          <p className="text-[#475569] leading-relaxed mb-8">
            The following three scenarios illustrate the scale of risk and the importance of Liability B3
            coverage for industry in Batam. Company names and specific details have been anonymised.
          </p>

          <div className="space-y-6">
            {kasusNyata.map((kasus, i) => (
              <div key={i} className={`rounded-2xl border-2 ${kasus.color} ${kasus.bg} p-6`}>
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-4 h-4 text-[#0a1628]" />
                  <span className="font-display font-bold text-[#0a1628] text-sm">
                    Case {i + 1} — {kasus.lokasi}
                  </span>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-[#0a1628]">Incident: </span>
                    <span className="text-[#475569]">{kasus.insiden}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#0a1628]">Financial exposure: </span>
                    <span className="text-[#475569]">{kasus.dampak}</span>
                  </div>
                  <div className="bg-white/70 rounded-xl p-3">
                    <span className="font-semibold text-[#0a1628]">Outcome: </span>
                    <span className="text-[#475569]">{kasus.hasil}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 6: Premium estimates ── */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-3">
            Liability B3 Premium Estimates for Batam Industry
          </h2>
          <p className="text-[#475569] leading-relaxed mb-6">
            Premiums for Liability B3 policies are influenced by the type and volume of waste generated,
            incident history, existing management systems, location, and coverage limit. The following
            figures are general illustrations only:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0] shadow-sm mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#faf8f3] border-b border-[#e2e8f0]">
                  <th className="text-left px-5 py-3.5 font-display font-bold text-[#0a1628]">Facility Type</th>
                  <th className="text-left px-5 py-3.5 font-display font-bold text-[#0a1628]">Limit</th>
                  <th className="text-left px-5 py-3.5 font-display font-bold text-[#0a1628]">Estimated Premium</th>
                </tr>
              </thead>
              <tbody>
                {premiEstimasi.map((row, i) => (
                  <tr key={row.jenis} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                    <td className="px-5 py-3 text-[#0a1628] font-medium">{row.jenis}</td>
                    <td className="px-5 py-3 text-[#475569]">{row.limit}</td>
                    <td className="px-5 py-3 text-[#475569]">{row.premi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[#94a3b8] text-xs leading-relaxed">
            * Figures above are general illustrations. Actual premiums are determined after underwriting based
            on your facility's specific risk profile.{" "}
            <Link href="/en/liability-insurance/b3-waste-insurance" className="text-[#1a4fa0] font-semibold hover:underline">
              Contact us for an accurate quote →
            </Link>
          </p>
        </section>

        {/* ── SECTION 7: FAQ ── */}
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
            Learn More About Liability Insurance
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Liability Insurance Overview",
                href: "/en/liability-insurance",
                desc: "Our full range of legal liability protection products for businesses in Batam",
              },
              {
                title: "B3 Waste Insurance",
                href: "/en/liability-insurance/b3-waste-insurance",
                desc: "Environmental Impairment Liability policy details",
              },
              {
                title: "Hazardous Waste Insurance Batam",
                href: "/en/blog/hazardous-waste-insurance-batam",
                desc: "Why B3 coverage is essential for Batam industrial tenants",
              },
              {
                title: "Public Liability Insurance",
                href: "/en/liability-insurance/public-liability",
                desc: "Third-party liability coverage for businesses in Batam",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-start gap-3 p-4 bg-[#faf8f3] rounded-xl border border-[#e2e8f0] hover:border-[#c9a84c]/50 hover:shadow-md transition-all"
              >
                <Shield className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#0a1628] group-hover:text-[#1a4fa0] transition-colors text-sm">
                    {link.title}
                  </div>
                  <div className="text-[#475569] text-xs mt-0.5">{link.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <div className="border-t border-[#e2e8f0] pt-8">
          <p className="text-[#94a3b8] text-xs leading-relaxed italic">
            This article is based on Government Regulation 22/2021, Law 32/2009 on Environmental Protection
            and Management, PermenLHK P.56/2015, and practical experience assisting industrial clients in Batam.
            The cases described are illustrative scenarios. For a risk analysis and policy quote specific to
            your facility, please consult our team directly.
          </p>
        </div>
      </article>

      <QuoteCard cluster="liability" lang="en" />
    </>
  );
}

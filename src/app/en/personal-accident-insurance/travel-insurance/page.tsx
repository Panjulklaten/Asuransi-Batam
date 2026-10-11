// app/en/personal-accident-insurance/travel-insurance/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Travel Insurance Batam – Singapore, Malaysia & Overseas Trips",
  description:
    "Travel insurance in Batam for holidays, business trips and study: overseas medical costs, evacuation, trip cancellation, baggage and Schengen visa requirements. Free consultation with Rio.",
  canonical: "https://asuransibatam.com/en/personal-accident-insurance/travel-insurance",
  languages: {
    id: "https://asuransibatam.com/asuransi-personal-accident/asuransi-perjalanan",
    en: "https://asuransibatam.com/en/personal-accident-insurance/travel-insurance",
  },
});

const benefits = [
  { icon: "🏥", title: "Emergency Medical Costs Overseas", desc: "Inpatient care, emergency outpatient treatment and medication after a sudden illness or accident during your trip, up to the limit you choose." },
  { icon: "🚁", title: "Medical Evacuation & Repatriation", desc: "Transfer to a better-equipped hospital or return to Indonesia when medically necessary, including repatriation of remains as provided in the policy." },
  { icon: "✈️", title: "Trip Cancellation & Curtailment", desc: "Reimbursement of non-refundable prepaid trip costs if you must cancel or cut your trip short for a reason the policy covers." },
  { icon: "🧳", title: "Baggage, Documents & Passport", desc: "Loss of, damage to, or delay of baggage, plus assistance and costs related to a lost passport or travel documents." },
  { icon: "⏱️", title: "Travel Delay", desc: "A benefit or reimbursement of extra costs when a covered flight or transport is delayed or cancelled, as set out in the policy." },
  { icon: "🆘", title: "Personal Accident & 24-Hour Assistance", desc: "Accident benefits, personal liability to third parties on certain policies, and access to a 24-hour emergency assistance centre while you are abroad." },
];

const faqs = [
  {
    q: "Is travel insurance compulsory?",
    a: "It depends on the destination. For a Schengen visa, travel medical insurance meeting set conditions is required. For most Asian destinations insurance is not an entry requirement, but immigration rules can change, so check the latest rules of your destination. Whatever the requirement, medical bills abroad are often much larger than expected.",
  },
  {
    q: "What are the insurance requirements for a Schengen visa?",
    a: "In general: medical cover of at least EUR 30,000, covering emergency medical treatment and medical and mortal-remains repatriation, valid in all Schengen states for the whole trip. Non-medical benefits such as cancellation and baggage do not count towards that minimum. Details can differ between consulates, so check the latest requirements of the embassy you are applying to.",
  },
  {
    q: "Is BPJS Kesehatan or company health insurance enough?",
    a: "BPJS Kesehatan generally covers services in Indonesia only, so medical bills abroad are not covered. Company health insurance needs checking for overseas validity and limits. Credit card travel insurance also has its own limits and conditions, for example that the tickets must be bought with that card.",
  },
  {
    q: "Which zone should I choose for Singapore or Malaysia?",
    a: "Usually the Asia zone. Pay attention to the medical limit, because treatment costs in Singapore are generally much higher than in Indonesia. Also ask whether the journey from the moment you leave Batam, including the ferry crossing, falls within the period of cover.",
  },
  {
    q: "Are pre-existing medical conditions covered?",
    a: "Generally not. Conditions that existed before the policy was bought are commonly excluded unless the insurer has a specific provision or extension. Because this involves health information, disclose your condition honestly at application so it does not become a problem at claim time.",
  },
  {
    q: "I travel to Singapore or Malaysia often. Is there an annual policy?",
    a: "Some insurers offer annual (multi-trip) policies with a maximum length for each trip. For frequent short trips, this can be more practical than buying a policy per trip. Availability and duration limits differ between products.",
  },
  {
    q: "What about children and older travellers?",
    a: "Children can usually be added to a parent's policy on certain products. For older travellers, many products apply age limits, extra conditions or different premiums. State the ages of all travellers when applying.",
  },
  {
    q: "When should I buy travel insurance?",
    a: "Before you leave, ideally soon after tickets and accommodation are paid for. Cancellation cover generally applies only to events arising after the policy is bought, and a policy does not cover an event that has already happened before purchase.",
  },
  {
    q: "What should I prepare if baggage is lost or a flight is delayed?",
    a: "For baggage, obtain a Property Irregularity Report from the airline before leaving the airport, and keep proof of ownership and value. For delays, obtain a letter from the airline stating the cause and length of the delay, and keep receipts for all extra expenses.",
  },
  {
    q: "How is the premium calculated?",
    a: "It depends on the destination or zone, trip length, the travellers' ages, the benefit limits chosen, and any planned activities. An exact figure can therefore only be given once your travel plan is clear.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Travel Insurance Batam",
  description: "Travel insurance for Batam residents: overseas medical costs, evacuation, trip cancellation, baggage and Schengen visa requirements.",
  provider: { "@type": "InsuranceAgency", name: "Batam Insurance – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};

const card = "block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover";

export default function TravelInsuranceENPage() {
  return (
    <ProductPageLayout
      cluster="pa"
      title="Travel Insurance Batam"
      subtitle="Cover for Holidays, Business Trips and Study Abroad"
      description="From Batam, Singapore and Malaysia are a short ferry ride away, but a sudden illness, lost baggage or a cancelled flight there can still be costly. Travel insurance covers medical bills, cancellations and loss while you are abroad, and is a requirement for certain visa applications."
      benefits={benefits}
      faqs={faqs}
      breadcrumbs={[
        { label: "Personal Accident Insurance", href: "/en/personal-accident-insurance" },
        { label: "Travel Insurance", href: "/en/personal-accident-insurance/travel-insurance" },
      ]}
      schema={schema}
    >
      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Where Are You Travelling From Batam?</h2>
        <p className="text-center text-[#475569] mb-6">Cover needs differ with the destination and the type of trip.</p>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-[#0a1628] mb-2">⛴️ Singapore &amp; Malaysia</h3>
            <p className="text-sm text-[#475569]">Short, frequent trips. Look at the medical limit and consider an annual policy if you shuttle back and forth. Ask whether the ferry crossing falls within the period of cover.</p>
          </div>
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-[#0a1628] mb-2">💼 Business trips</h3>
            <p className="text-sm text-[#475569]">Check whether your company already has corporate travel cover so you do not duplicate it. For foreign workers travelling from Batam, see our dedicated guide in Indonesian.</p>
          </div>
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-[#0a1628] mb-2">🌴 Family holidays</h3>
            <p className="text-sm text-[#475569]">Register every traveller with the correct age. Children and older travellers have different terms, and cancellation cover matters when flights and hotels are paid in advance.</p>
          </div>
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-[#0a1628] mb-2">🇪🇺 Europe (Schengen)</h3>
            <p className="text-sm text-[#475569]">Insurance meeting minimum conditions is required for the visa. Choose a policy whose certificate states the medical cover, repatriation and territory explicitly.</p>
          </div>
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-[#0a1628] mb-2">🎓 Study &amp; long stays</h3>
            <p className="text-sm text-[#475569]">Trips lasting months have duration limits and dedicated products. State the length of stay from the start so the policy you choose actually fits.</p>
          </div>
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-[#0a1628] mb-2">🏔️ Adventure activities</h3>
            <p className="text-sm text-[#475569]">Diving, high-altitude trekking or skiing are generally high-risk sports that are excluded unless extended. Mention your planned activities when applying.</p>
          </div>
        </div>
      </div>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Choosing a Travel Zone</h2>
        <p className="text-center text-[#475569] mb-6">Insurers divide travel territory into zones. Names and groupings can differ between products.</p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-sm">
            <thead style={{ background: "#0a1628" }}>
              <tr>
                <th className="text-left text-white font-semibold px-5 py-3">Zone (typically)</th>
                <th className="text-left text-white font-semibold px-5 py-3">Example destinations</th>
                <th className="text-left text-white font-semibold px-5 py-3">Points to note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr><td className="px-5 py-3.5 font-semibold">Asia</td><td className="px-5 py-3.5">Singapore, Malaysia, Thailand, Japan, Korea</td><td className="px-5 py-3.5">Most relevant for Batam residents. Medical costs in Singapore are generally high, so check the limit.</td></tr>
              <tr><td className="px-5 py-3.5 font-semibold">Worldwide excluding USA and Canada</td><td className="px-5 py-3.5">Europe, Australia, New Zealand</td><td className="px-5 py-3.5">For Schengen, make sure the visa requirements are met.</td></tr>
              <tr><td className="px-5 py-3.5 font-semibold">Worldwide including USA and Canada</td><td className="px-5 py-3.5">United States, Canada</td><td className="px-5 py-3.5">Medical costs are very high. Many products separate or restrict this zone, so choose a high limit.</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">This table is a general guide. Zones, limits and exclusions follow each insurer&apos;s policy wording.</p>
      </div>

      <div className="mb-12 max-w-4xl mx-auto p-6 rounded-2xl border" style={{ background: "#f0d08015", borderColor: "#c9a84c40" }}>
        <h2 className="font-display font-bold text-xl text-[#0a1628] mb-3">Insurance Requirements for a Schengen Visa</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-[#475569] leading-relaxed">
          <li>Medical cover of at least <strong>EUR 30,000</strong>.</li>
          <li>Covering emergency medical treatment, medical repatriation and repatriation of remains.</li>
          <li>Valid across all Schengen states and for the whole trip.</li>
          <li>Non-medical benefits such as cancellation and baggage do not count towards the minimum.</li>
          <li>Ask for a certificate that explicitly states the Schengen territory, the amount of cover and repatriation, and match it against the latest requirements of the destination embassy, because details can differ between consulates.</li>
        </ul>
      </div>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-3 text-center">What Is Generally Not Covered</h2>
        <ul className="list-disc pl-6 space-y-2 text-[#475569] leading-relaxed">
          <li>Medical conditions that existed before the policy was bought, unless there is a specific provision.</li>
          <li>Pregnancy and childbirth, except certain complications the policy covers.</li>
          <li>High-risk sports or activities that have not been extended.</li>
          <li>Travel to areas under a travel warning or armed conflict.</li>
          <li>Events caused by alcohol or prohibited drugs.</li>
          <li>Cancellation for reasons not on the list of covered causes. Cancellation for any reason is generally not covered.</li>
          <li>Infectious disease or pandemic, which depends on each product&apos;s wording.</li>
        </ul>
        <p className="text-xs text-gray-500 mt-3">This list is a general guide. Always have the policy exclusions read through before you buy.</p>
      </div>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-4 text-center">If Something Happens Abroad</h2>
        <ol className="space-y-3">
          {[
            ["Call the emergency assistance centre", "The 24-hour number is on your policy card or certificate. Call before non-emergency treatment so costs can be arranged directly where possible."],
            ["Collect evidence", "Keep receipts, doctor's reports, test results, a police report for loss, and an airline report for baggage or delays."],
            ["Report to us", "Tell us as soon as possible and within the time limit in the policy, then send the documents you have gathered."],
            ["We support the claim", "We help complete the documents and follow up with the insurer until a decision is made."],
          ].map(([t, d], i) => (
            <li key={t} className="flex gap-4 p-4 rounded-xl border border-[#e2e8f0] bg-[#f8faff]">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0a1628] text-white font-bold flex items-center justify-center text-sm">{i + 1}</span>
              <div><div className="font-semibold text-[#0a1628]">{t}</div><div className="text-sm text-[#475569]">{d}</div></div>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Read &amp; Complement</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Link href="/en/personal-accident-insurance/individual-family-pa" className={card}>
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Individual &amp; Family PA</h3>
            <p className="text-[#475569] text-sm">Everyday accident cover, not only while you travel.</p>
          </Link>
          <Link href="/en/personal-accident-insurance/group-employee-pa" className={card}>
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Group Employee PA</h3>
            <p className="text-[#475569] text-sm">Accident cover for teams, including business travel as set out in the policy.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

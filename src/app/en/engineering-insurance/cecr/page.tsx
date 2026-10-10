// app/en/engineering-insurance/cecr/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "CECR Insurance Batam – Civil Engineering Completed Risk Cover",
  description:
    "CECR (Civil Engineering Completed Risk) insurance in Batam for revetments, jetties, roads and civil structures after handover. Survey, premium and claims support from Rio, an insurance practitioner with 8+ years of experience.",
  canonical: "https://asuransibatam.com/en/engineering-insurance/cecr",
  languages: {
    id: "https://asuransibatam.com/asuransi-engineering/cecr",
    en: "https://asuransibatam.com/en/engineering-insurance/cecr",
  },
});

const benefits = [
  { icon: "📐", title: "Design-Risk Damage", desc: "Structural failure arising from weaknesses in civil design parameters, including load calculations and slope or revetment stability." },
  { icon: "🌊", title: "Erosion & Scouring", desc: "Undermining of the base or edge of a structure by currents, waves and tides that weaken the foundation of a revetment or jetty." },
  { icon: "🚢", title: "Vessel & Equipment Impact", desc: "Physical damage from collision with vessels berthing nearby, cargo-handling equipment or operational vehicles." },
  { icon: "⛈️", title: "Natural Perils & Extreme Weather", desc: "Damage from flood, strong wind and extreme weather. Earthquake is available as an additional cover, subject to the insurer's wording." },
  { icon: "🔥", title: "Fire & Lightning", desc: "A relatively small exposure for civil structures, but this basic cover is still part of the CECR policy." },
  { icon: "🏗️", title: "Day-to-Day Operational Risk", desc: "Losses arising from routine use of the structure after handover (BAST), outside the contractor's maintenance responsibility." },
];

const faqs = [
  {
    q: "What is CECR insurance and when does it start?",
    a: "CECR (Civil Engineering Completed Risk) covers completed civil engineering works — jetties, revetments, roads, bridges and drainage channels — after construction ends and the handover certificate (BAST) has been issued. Once the BAST is signed, the risk shifts from a 'project risk' covered by CAR/EAR to an 'operational risk', and that is where a CECR policy takes over.",
  },
  {
    q: "What is the difference between CECR and Contractor's All Risk (CAR)?",
    a: "CAR covers the construction period, while equipment, materials and workers are still on site. CECR covers the structure once it is complete and in use. For a revetment or jetty we usually recommend running CAR until the BAST and continuing straight into CECR, so there is no gap of cover.",
  },
  {
    q: "Are CECR premium rates fixed by the regulator?",
    a: "Not in the way property all risks rates are. CECR does not follow a standard tariff, so the underwriter sets the rate based on the project's risk profile, including the contractor's reputation, claims history and site conditions found during the survey.",
  },
  {
    q: "What risks does a CECR policy cover for a revetment?",
    a: "Typically physical damage from design-related structural risk and operational risk, such as slope failure or collapse of the stone facing due to erosion or scouring, ground movement, impact from vessels or heavy equipment, and extreme weather. Standard exclusions still apply, for example normal wear and tear and maintenance that is continuously neglected.",
  },
  {
    q: "How is the premium calculated for a project in Batam?",
    a: "The premium is based on the total sum insured, the type and location of the structure, its age, the field survey result and the last 3–5 years of claims history. Port-area projects such as Batu Ampar usually carry extra exposure from cargo handling and vessel traffic, which underwriters take into account.",
  },
  {
    q: "Does the site survey decide whether a CECR application is accepted?",
    a: "The survey is a key step. The underwriter assesses the design parameters against natural hazards, the maintenance condition and the actual use of the structure. A well-documented survey, with photos of the stone facing, slope angle and weak points, speeds up acceptance and helps set a more accurate rate.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CECR (Civil Engineering Completed Risk) Insurance Batam",
  description: "Insurance for revetments, jetties, roads and other civil infrastructure after construction in Batam.",
  provider: { "@type": "InsuranceAgency", name: "Batam Insurance – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};

export default function CECRENPage() {
  return (
    <ProductPageLayout
      cluster="engineering"
      title="CECR Insurance Batam"
      subtitle="Civil Engineering Completed Risk – Protection After Handover"
      description="Civil Engineering Completed Risk (CECR) covers revetments, jetties, roads and other civil structures once construction ends, at the point where responsibility for the risk passes from the contractor to the asset owner or operator."
      benefits={benefits}
      faqs={faqs}
      breadcrumbs={[
        { label: "Engineering Insurance", href: "/en/engineering-insurance" },
        { label: "CECR", href: "/en/engineering-insurance/cecr" },
      ]}
      schema={schema}
    >
      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-3 text-center">Where CECR Sits in the Project Lifecycle</h2>
        <p className="text-[#475569] mb-4 leading-relaxed">
          Many project owners assume insurance ends automatically once the handover certificate (BAST) is signed. In fact, that is exactly when the type of risk changes. During construction, a revetment, jetty or access road is protected by{" "}
          <Link href="/en/engineering-insurance/contractor-all-risk" className="font-semibold text-[#1a4fa0] hover:underline">Contractor All Risk (CAR)</Link>
          . After handover, the exposure is no longer construction work but operation: erosion at the foundation, ground movement, vessel impact, or design faults that only show up once the structure is in use.
        </p>
        <p className="text-[#475569] leading-relaxed">
          As a practitioner handling infrastructure projects in Batam, I usually advise running CAR and CECR back-to-back, so that not a single day passes with the asset unprotected, a gap many contractors and owners overlook.
        </p>
      </div>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-3 text-center">Why It Matters for Batu Ampar and Port Areas</h2>
        <p className="text-[#475569] leading-relaxed">
          Batu Ampar is Batam&apos;s main export-import gateway and has been going through large-scale port works, from strengthening jetties to expanding container yards. Revetments here face a distinctive exposure: waves from passing vessels, tidal movement, static loads from cargo equipment, and ground movement in reclaimed areas. A completed revetment does not mean the risk is over; it moves towards long-term operational risks such as scouring, displaced stone blocks and cracking from repeated loads.
        </p>
        <div className="mt-6 rounded-2xl overflow-hidden border border-gray-100">
          <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
            <Image
              src="/images/potoartikel/surveicecr.webp"
              alt="Rio, a general insurance practitioner in Batam, carrying out a site survey for CECR insurance on a revetment project in the Batu Ampar area"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          <p className="px-5 py-4 bg-gray-50 text-sm text-gray-600 leading-relaxed">
            A site survey is a step that cannot be skipped before a CECR policy is issued: stone facing, slope angle, packing density and the points most exposed to scouring are all checked on site.
          </p>
        </div>
      </div>

      <div className="mb-12 max-w-4xl mx-auto p-5 rounded-xl border" style={{ background: "#f0d08015", borderColor: "#c9a84c40" }}>
        <p className="text-sm text-gray-700 leading-relaxed">
          <strong>Note:</strong> CECR rates are set by the underwriter after a survey and are not fixed by a standard tariff. Standard exclusions, such as normal wear and tear, apply, and the cover follows the wording of the policy issued by each insurer.
        </p>
      </div>

      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Related Project Cover</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/en/engineering-insurance/contractor-all-risk" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Contractor All Risk (CAR)</h3>
            <p className="text-[#475569] text-sm">Covers the construction period, up to the handover certificate (BAST).</p>
          </Link>
          <Link href="/en/engineering-insurance/erection-all-risk" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Erection All Risk (EAR)</h3>
            <p className="text-[#475569] text-sm">Relevant when the project involves installing cranes, machinery or plant.</p>
          </Link>
          <Link href="/en/surety-bond-insurance/maintenance-bond" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Maintenance Bond</h3>
            <p className="text-[#475569] text-sm">The contractor&apos;s guarantee during the maintenance period, a different instrument from CECR.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

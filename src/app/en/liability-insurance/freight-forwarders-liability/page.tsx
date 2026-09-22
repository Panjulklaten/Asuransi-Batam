// app/en/liability-insurance/freight-forwarders-liability/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Freight Forwarders Liability (FFL) Insurance Batam – Protection for Forwarders & Customs Brokers",
  description: "Freight Forwarders Liability (FFL) Insurance in Batam for forwarding companies, customs brokers (PPJK), and NVOCCs at Batu Ampar, Sekupang & Tanjung Uncang. Protect your business from cargo loss, mis-delivery, and documentation-error claims. Contact: +62-813-7333-6728.",
  canonical: "https://asuransibatam.com/en/liability-insurance/freight-forwarders-liability",
  languages: {
    id: "https://asuransibatam.com/asuransi-liability/freight-forwarders-liability",
    en: "https://asuransibatam.com/en/liability-insurance/freight-forwarders-liability",
  },
});

const benefits = [
  {
    icon: "📦",
    title: "Loss & Damage to Cargo in Your Care, Custody & Control",
    desc: "Covers compensation to cargo owners if goods are lost, damaged, or short-landed while in the forwarder's care, storage, or control — for example during LCL consolidation at a Batu Ampar CFS warehouse, temporary yard storage, or intermodal transload at Sekupang.",
  },
  {
    icon: "🚚",
    title: "Mis-delivery",
    desc: "Protects against claims arising from goods delivered to the wrong address or recipient, mixed up with another shipper's consolidated cargo, or released without a valid delivery order — a common risk in high-volume consolidation warehouses.",
  },
  {
    icon: "📄",
    title: "Documentation & Customs Declaration Errors",
    desc: "Covers third-party losses arising from errors in import/export declarations, incorrect HS codes, mistaken applications for free-trade-zone facilities, or other administrative lapses in customs handling that lead to fines, cargo holds, or claims from cargo owners.",
  },
  {
    icon: "⏱️",
    title: "Third-Party Consequential Loss",
    desc: "Covers claims for a third party's financial loss caused by delay — such as demurrage/detention charges at port, extra storage costs, or a client's production loss when raw materials arrive late at their industrial-estate factory.",
  },
  {
    icon: "⚖️",
    title: "Legal Defence Costs",
    desc: "Covers lawyer fees, mediation, and civil litigation arising from disputes with shippers, consignees, or other third parties — even where the forwarder is ultimately found not liable.",
  },
  {
    icon: "🔗",
    title: "Liability for Subcontracted Carriers",
    desc: "Protects the forwarder against claims arising from the negligence of subcontracted parties — local trucking, stevedoring companies, partner customs agents, or third-party warehouse operators acting on the forwarder's behalf.",
  },
  {
    icon: "🧾",
    title: "Professional Errors & Omissions (E&O)",
    desc: "An extension covering pure administrative errors — incorrect shipment data entry, missed notifications, or mistakes in issuing a House Bill of Lading (HBL) that cause the client financial loss.",
  },
  {
    icon: "✅",
    title: "Certificate of Insurance for Principals & Corporate Clients",
    desc: "Many industrial-estate principals, international forwarding partners, and corporate clients in Batam require proof of active FFL cover as part of vendor qualification before signing a logistics contract. We help issue a COI in the format your principal requires.",
  },
];

const faqs = [
  {
    q: "What is the difference between Freight Forwarders Liability (FFL) and Marine Cargo Insurance?",
    a: "This is the most common question we get. Marine Cargo Insurance protects the cargo owner (shipper/consignee) against physical loss or damage to their goods during transit, regardless of cause — vessel incidents, bad weather, vehicle accidents, and so on. FFL, by contrast, protects the forwarding company itself against legal claims and financial liability arising from the forwarder's own negligence in performing its duties — wrong deliveries, documentation errors, cargo lost while in its care, or other operational mistakes. Many forwarders in Batam carry both: FFL to protect their own business, and they arrange or facilitate marine cargo cover for their clients' goods.",
  },
  {
    q: "Who needs FFL insurance in Batam?",
    a: "Ideally every business providing transport-management services should hold FFL, including: (1) freight forwarding companies and NVOCCs issuing House Bills of Lading; (2) customs brokers (PPJK) handling import-export documentation, including facilities such as OB23 and KITE within the free-trade-zone framework; (3) EMKL (sea-cargo forwarding agents) operating at Batu Ampar and Sekupang; (4) consolidation (CFS) warehouse operators and industrial-estate trucking logistics companies; (5) third-party logistics (3PL) providers managing warehousing for manufacturing clients in Batam's industrial estates.",
  },
  {
    q: "Why do forwarders in Batam face higher risk exposure than in other cities?",
    a: "Batam is a Free Trade Zone and Free Port (KPBPB) with very dense import-export and transshipment traffic — including Batu Ampar Port as the main container gateway, Sekupang and Telaga Punggur as cargo and cross-border passenger hubs to Singapore and Malaysia, and Tanjung Uncang as a logistics base for shipyard and offshore operations. High transaction volume, the number of fiscal facilities (OB23, KITE, Free Trade Zone) that must be administered accurately, and dense intermodal consolidation and transload activity all create far more room for documentation or handling errors than in cities with lower logistics volume.",
  },
  {
    q: "Claim simulation: a customs documentation error at Batu Ampar",
    a: "Real-world scenario: a Batam customs broker (PPJK) filed an incorrect HS code and customs value on the import declaration for a container of electronic components bound for the Muka Kuning industrial estate. The error caused the container to be held at Batu Ampar for 12 days pending further inspection, resulting in production losses for the client's factory, who filed a claim of around Rp 340 million, plus roughly Rp 60 million in demurrage and administrative penalties. With an active FFL policy, the insurer covered the defence costs and most of the consequential-loss claim within the policy limit, allowing the broker to preserve the client relationship.",
  },
  {
    q: "Claim simulation: cargo lost during consolidation at a Sekupang warehouse",
    a: "Real-world scenario: a forwarder consolidating LCL cargo for several consignees at a warehouse near Sekupang Port lost one pallet of light electronics due to a sorting error during re-consolidation. The lost goods were valued at approximately Rp 95 million. Because the forwarder held full responsibility for the goods under its Care, Custody & Control, the shipper's claim was filed directly against the forwarder. The FFL policy covered the replacement value once the internal investigation and loss report were verified.",
  },
  {
    q: "What documents are needed to obtain an FFL policy?",
    a: "Documents typically required: (1) business legality — an NIB with a forwarding/customs-broker (PPJK) business classification, a forwarding business licence from the Ministry of Transportation, tax ID, and deed of establishment; (2) an operational profile — types of service (FCL/LCL, air/sea, customs brokerage, trucking), estimated annual cargo volume and value, and a list of operated warehouses/facilities; (3) claims history for the past three years, if any; (4) a list of regular subcontractors (trucking, stevedoring, partner agents) if subcontractor-liability cover is required; (5) a copy of any client or principal contract terms requiring Additional Insured status or specific limits.",
  },
  {
    q: "What is the FFL claims procedure if an incident occurs?",
    a: "Steps to follow: (1) secure and document the scene — photograph the condition of the goods, the storage area, and related handover documents; (2) prepare an internal incident report recording the chronology; (3) notify the insurer within 3×24 hours of discovering the incident; (4) gather supporting documents — invoice, packing list, bill of lading/delivery order, correspondence with the shipper/consignee, and any formal claim letter received; (5) avoid admitting fault or agreeing to compensation unilaterally before coordinating with the insurer; (6) an adjuster will typically assess the claim within 5–10 working days, longer for cases involving disputed customs documentation.",
  },
  {
    q: "What is the typical premium range for FFL cover for forwarders in Batam?",
    a: "Premiums depend on annual turnover, the type of service provided (pure customs brokerage, FCL/LCL forwarding, or combined with trucking/warehousing), and the chosen limit. As a general guide: small-to-medium forwarders with a limit of Rp 1–2 billion per occurrence typically pay Rp 8–20 million per year; larger forwarding companies with high volume through Batu Ampar and cross-border coverage (Batam–Singapore–Malaysia) may see annual premiums reach tens of millions of rupiah depending on limit and claims history. Contact +62-813-7333-6728 for a premium simulation tailored to your operational profile.",
  },
  {
    q: "Does FFL also cover cross-border shipments to Singapore or Malaysia?",
    a: "Yes, most FFL policies can be extended to cover cross-border operations given Batam's role as a logistics hub to Singapore (via Sekupang/Batam Center) and Malaysia. However, the territorial scope must be explicitly stated in the policy — make sure your broker lists the routes and destination countries relevant to your operations so there is no coverage gap when a cross-border claim arises.",
  },
];

const policyComparison = [
  { feature: "Cargo Loss/Damage in CCC", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Mis-delivery", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Customs Documentation Errors (Import/Export, FTZ Facilities)", basic: "Limited", standard: "✅", comprehensive: "✅" },
  { feature: "Consequential Loss (Demurrage, Delay)", basic: "❌", standard: "Optional", comprehensive: "✅" },
  { feature: "Legal Defence Costs", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Subcontractor Liability (Trucking/Stevedoring/Agents)", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Professional Errors & Omissions (E&O)", basic: "❌", standard: "Optional", comprehensive: "✅" },
  { feature: "Cross-Border Coverage (Singapore/Malaysia)", basic: "❌", standard: "Optional", comprehensive: "✅" },
  { feature: "Certificate of Insurance for Principal/Client", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Max. Sum Insured (Rp)", basic: "1 billion", standard: "3 billion", comprehensive: "As required" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Freight Forwarders Liability Insurance Batam",
  description:
    "Freight Forwarders Liability (FFL) Insurance in Batam for forwarding companies, customs brokers (PPJK), EMKL agents, NVOCCs, and consolidation-warehouse operators. Protects against claims for cargo loss, damage, mis-delivery, and customs documentation errors at Batu Ampar, Sekupang, and Tanjung Uncang.",
  serviceType: "Freight Forwarders Liability Insurance",
  areaServed: [
    { "@type": "City", name: "Batam" },
    { "@type": "AdministrativeArea", name: "Riau Islands" },
  ],
  provider: {
    "@type": "InsuranceAgency",
    name: "Batam Insurance – Rio",
    telephone: "+6281373336728",
    url: "https://asuransibatam.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Batam",
      addressRegion: "Riau Islands",
      addressCountry: "ID",
    },
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "IDR",
    description:
      "Premiums starting from Rp 8 million per year for small-to-medium Batam forwarders. Policy and COI issuance within 1–3 working days.",
  },
};

export default function FreightForwardersLiabilityENPage() {
  return (
    <ProductPageLayout
      title="Freight Forwarders Liability Insurance Batam"
      subtitle="Essential Protection for Forwarding Companies, Customs Brokers & Agents"
      description="As the Riau Islands' main logistics hub, Batam processes thousands of intermodal shipments every month — containers through Batu Ampar, consolidated cargo through Sekupang, and shipyard supply chains through Tanjung Uncang. One customs documentation error or one lost shipment while in your care can lead to a claim worth hundreds of millions of rupiah from a client. We help forwarding companies and customs brokers in Batam secure an FFL policy matched to their operational profile — complete with a Certificate of Insurance (COI) — within 1–3 working days."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Liability Insurance", href: "/en/liability-insurance" },
        { label: "Freight Forwarders Liability", href: "/en/liability-insurance/freight-forwarders-liability" },
      ]}
      schema={schema}
    >
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Often Needed Together</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/en/marine-insurance/marine-cargo" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Marine Cargo Insurance</h3>
            <p className="text-[#475569] text-sm">Protects the physical value of your clients' cargo, separate from the forwarder's own liability.</p>
          </Link>
          <Link href="/en/property-insurance/warehouse-insurance-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Warehouse Insurance Batam</h3>
            <p className="text-[#475569] text-sm">Protects the physical assets of the forwarder's own warehouse and consolidation facilities.</p>
          </Link>
          <Link href="/en/liability-insurance/public-liability" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Public Liability Insurance</h3>
            <p className="text-[#475569] text-sm">Covers injury to visitors or guests at your warehouse and operational offices.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

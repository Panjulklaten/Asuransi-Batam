// app/en/blog/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = generateSEO({
  title: "Insurance Education Blog – Tips, Guides & Batam Insurance Info",
  description: "General insurance education articles. Claims guides, product comparisons, tips for choosing insurance, and the latest insurance information in Batam.",
  canonical: "https://asuransibatam.com/en/blog",
  languages: {
      id: "https://asuransibatam.com/blog",
      en: "https://asuransibatam.com/en/blog",
    },
});

type Article = {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
};

const articles: Article[] = [
  // ── Vehicle ─────────────────────────────────────────────────────────────────
  {
    title: "How to File a Car Insurance Claim in Batam Correctly and Quickly",
    slug: "how-to-claim-car-insurance-batam",
    date: "April 30, 2026",
    category: "Vehicle",
    excerpt:
      "A complete step-by-step guide on how to file a car insurance claim in Batam, the documents required, and tips to get your claim approved faster.",
    readTime: "7 min",
  },
  {
    title: "How to File a Car Insurance Claim for Construction Projects",
    slug: "how-to-claim-car-insurance-project",
    date: "April 30, 2026",
    category: "Vehicle",
    excerpt:
      "A guide to filing car insurance claims for vehicles used in construction projects: required documents, procedures, and tips for a smooth claims process.",
    readTime: "6 min",
  },
  {
    title: "All Risk vs TLO Car Insurance: Which One Is Right for You?",
    slug: "all-risk-vs-tlo-car-insurance",
    date: "May 7, 2026",
    category: "Vehicle",
    excerpt:
      "Understand the difference between All Risk and TLO (Total Loss Only) car insurance – coverage scope, premium costs, and which policy suits your needs.",
    readTime: "5 min",
  },
  // ── Heavy Equipment ─────────────────────────────────────────────────────────
  {
    title: "Excavator and Bulldozer Insurance in Batam",
    slug: "excavator-and-bulldozer-insurance-batam",
    date: "May 6, 2026",
    category: "Heavy Equipment",
    excerpt:
      "A complete guide to excavator and bulldozer insurance – types of coverage, premium rates, and how to choose the right policy for your heavy equipment.",
    readTime: "8 min",
  },
  {
    title: "Heavy Equipment Insurance for Construction Projects",
    slug: "heavy-equipment-insurance-construction-projects",
    date: "May 6, 2026",
    category: "Heavy Equipment",
    excerpt:
      "Why must heavy equipment on construction sites be insured? Discover the types of coverage, risks covered, and how to file claims efficiently.",
    readTime: "7 min",
  },
  {
    title: "Mining Heavy Equipment Insurance",
    slug: "mining-heavy-equipment-insurance",
    date: "May 6, 2026",
    category: "Heavy Equipment",
    excerpt:
      "Specialized insurance for mining heavy equipment: operational risks in tough terrain, available protection, and tips for choosing a policy that meets regulations.",
    readTime: "8 min",
  },
  {
    title: "Machinery & Heavy Equipment Shipping Insurance in Batam",
    slug: "machinery-heavy-equipment-shipping-insurance-batam",
    date: "May 8, 2026",
    category: "Heavy Equipment",
    excerpt:
      "A guide to insuring machinery and heavy equipment during transit: risks in shipping, available coverage types, and how to ensure optimal protection during delivery.",
    readTime: "7 min",
  },
  // ── Property ────────────────────────────────────────────────────────────────
  {
    title: "Commercial Property Insurance in Batam",
    slug: "commercial-property-insurance-batam",
    date: "May 6, 2026",
    category: "Property",
    excerpt:
      "A guide to choosing commercial property insurance in Batam – shophouses, warehouses, hotels, and office buildings. OJK rates, coverage types, and claims.",
    readTime: "9 min",
  },
  {
    title: "How to File a Home Fire Insurance Claim",
    slug: "how-to-claim-home-fire-insurance",
    date: "May 6, 2026",
    category: "Property",
    excerpt:
      "Step-by-step guide to filing a home fire insurance claim: required documents, reporting deadlines, and tips to prevent your claim from being rejected.",
    readTime: "6 min",
  },
  // ── Liability ───────────────────────────────────────────────────────────────
  {
    title: "Hazardous Waste (B3) Insurance in Batam",
    slug: "hazardous-waste-insurance-batam",
    date: "May 7, 2026",
    category: "Liability",
    excerpt:
      "Why do companies handling B3 hazardous waste need liability insurance? Explore legal risks, regulatory requirements, and available coverage in Batam.",
    readTime: "7 min",
  },
  // ── Engineering ─────────────────────────────────────────────────────────────
  {
    title: "Construction Project Insurance in Batam",
    slug: "construction-project-insurance-batam",
    date: "May 7, 2026",
    category: "Engineering",
    excerpt:
      "Everything you need to know about insuring construction projects in Batam – CAR/EAR policies, coverage scope, and how to protect your investment from start to finish.",
    readTime: "8 min",
  },
  {
    title: "Difference Between CAR and EAR Insurance",
    slug: "difference-between-car-and-ear-insurance",
    date: "May 7, 2026",
    category: "Engineering",
    excerpt:
      "What separates Contractor's All Risk (CAR) from Erection All Risk (EAR) insurance? Learn which policy applies to your project type and what each covers.",
    readTime: "6 min",
  },
  // ── Marine ──────────────────────────────────────────────────────────────────
  {
    title: "How to File a Marine Cargo Insurance Claim",
    slug: "how-to-claim-marine-cargo-insurance",
    date: "May 7, 2026",
    category: "Marine",
    excerpt:
      "A complete guide to marine cargo insurance claims – damage survey documents, reporting procedures, and how to speed up claim payments.",
    readTime: "7 min",
  },
  {
    title: "Marine Hull vs Marine Cargo Insurance: What's the Difference?",
    slug: "marine-hull-vs-cargo-insurance",
    date: "May 7, 2026",
    category: "Marine",
    excerpt:
      "What's the difference between Marine Hull and Marine Cargo insurance? Learn the coverage, who needs it, and how both policies work together.",
    readTime: "6 min",
  },
  {
    title: "Batam–Singapore Shipping Insurance",
    slug: "batam-singapore-shipping-insurance",
    date: "May 7, 2026",
    category: "Marine",
    excerpt:
      "A guide to cargo insurance for the Batam–Singapore shipping route: import-export regulations, key risks, and how to get the right policy.",
    readTime: "8 min",
  },
  {
    title: "Batam–Jakarta Cargo Insurance",
    slug: "batam-jakarta-cargo-insurance",
    date: "May 8, 2026",
    category: "Marine",
    excerpt:
      "A guide to cargo insurance for the Batam–Jakarta shipping route: sea transit risks, types of coverage available, and tips for choosing the right policy for your business.",
    readTime: "7 min",
  },
  {
    title: "Marine Cargo Insurance Premium in Batam",
    slug: "marine-cargo-insurance-premium-batam",
    date: "May 8, 2026",
    category: "Marine",
    excerpt:
      "A complete guide to marine cargo insurance premium rates in Batam: factors that determine the premium, how to calculate coverage costs, and tips for competitive pricing.",
    readTime: "7 min",
  },
  {
    title: "Batam Export Cargo Insurance",
    slug: "batam-export-cargo-insurance",
    date: "May 8, 2026",
    category: "Marine",
    excerpt:
      "A guide to export cargo insurance from Batam: regulatory requirements, types of coverage for international shipments, and how to ensure your export cargo is fully protected.",
    readTime: "8 min",
  },
  {
    title: "Builder's Risk Insurance for Shipyards in Batam",
    slug: "builders-risk-shipyard-insurance-batam",
    date: "May 7, 2026",
    category: "Marine",
    excerpt:
      "Builder's Risk insurance for shipyards: protection during construction, risks covered, and policy requirements in Batam's shipbuilding industry.",
    readTime: "8 min",
  },
  {
    title: "How to Get the Right Builders Risk Insurance in Batam",
    slug: "how-to-get-builders-risk-insurance-batam",
    date: "June 23, 2026",
    category: "Marine",
    excerpt:
      "A complete guide to choosing Builders Risk insurance for construction projects and shipyards in Batam: a real claim case study, common mistakes, and how to set the right sum insured.",
    readTime: "8 min",
  },
  {
    title: "OB 23 Guide: How to Handle Temporary Import for Exhibitions & Projects in Batam",
    slug: "temporary-import-guarantee-ob23-batam",
    date: "July 5, 2026",
    category: "Surety Bond",
    excerpt:
      "Complete guide to OB 23 (temporary import) in Batam: when to use it, required documents, the application process, common mistakes that lead to penalties, and custom bond cost estimates.",
    readTime: "9 min",
  },
  {
    title: "PA Insurance for Foreign Workers Travelling to Singapore from Batam",
    slug: "pa-insurance-foreign-workers-singapore-from-batam",
    date: "September 22, 2026",
    category: "Personal Accident",
    excerpt:
      "A practical guide to PA insurance for foreign technicians and staff travelling from Batam to Singapore — ICA rules for visa-free visitors, MOM requirements for Work Pass holders, and visa documentation for nationals like India.",
    readTime: "10 min",
  },
];

const categoryColors: Record<string, string> = {
  Vehicle: "bg-blue-100 text-blue-800",
  "Heavy Equipment": "bg-yellow-100 text-yellow-800",
  Property: "bg-green-100 text-green-800",
  Liability: "bg-orange-100 text-orange-800",
  Engineering: "bg-purple-100 text-purple-800",
  Marine: "bg-cyan-100 text-cyan-800",
  "Surety Bond": "bg-rose-100 text-rose-800",
  "Personal Accident": "bg-indigo-100 text-indigo-800",
};

const categories = ["Vehicle", "Heavy Equipment", "Property", "Liability", "Engineering", "Marine", "Surety Bond", "Personal Accident"];

export default function BlogPageEN() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-2">
            Blog & Education
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Insurance Education Articles
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Reliable guides, tips, and information about general insurance to protect your assets
            in Batam.
          </p>
        </div>
      </section>

      {/* ── Articles by category ── */}
      <section className="section-padding bg-[#faf8f3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {categories.map((cat) => {
            const catArticles = articles.filter((a) => a.category === cat);
            if (!catArticles.length) return null;
            return (
              <div key={cat}>
                {/* Category heading */}
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      categoryColors[cat] ?? "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {cat}
                  </span>
                  <div className="flex-1 h-px bg-[#e2e8f0]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catArticles.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/en/blog/${a.slug}`}
                      className="group bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden hover:shadow-xl transition-all card-hover"
                    >
                      <div className="h-3 bg-gradient-to-r from-[#0a1628] to-[#1a4fa0]" />
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span
                            className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                              categoryColors[a.category] ?? "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {a.category}
                          </span>
                          <span className="text-[#475569] text-xs">{a.readTime} read</span>
                        </div>
                        <h2 className="font-display font-bold text-base text-[#0a1628] mb-2 group-hover:text-[#1a4fa0] transition-colors leading-tight">
                          {a.title}
                        </h2>
                        <p className="text-[#475569] text-sm leading-relaxed mb-4">{a.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-[#475569] text-xs">{a.date}</span>
                          <span className="text-[#1a4fa0] text-sm font-semibold group-hover:text-[#c9a84c] transition-colors">
                            Read →
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

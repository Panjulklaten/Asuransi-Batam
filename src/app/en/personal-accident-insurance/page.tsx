import { Metadata } from 'next';
import Link from 'next/link';
import QuoteButton from '@/components/quote/QuoteButton';
import { generateSEO, schemaInsuranceProduct } from '@/lib/seo';
import { 
  ShieldCheck, 
  Users, 
  HardHat, 
  Anchor, 
  Clock, 
  HeartPulse, 
  ChevronRight 
} from 'lucide-react';

// --- METADATA SEO & HREFLANG ---
export const metadata: Metadata = generateSEO({
  title: 'Personal Accident Insurance (PA) Batam',
  description: 'Comprehensive Personal Accident Insurance in Batam. Specialized protection for shipyard, manufacturing, and logistics workers. Group PA & Individual solutions to supplement BPJS/Workman Compensation.',
  canonical: 'https://asuransibatam.com/en/personal-accident-insurance',
  languages: {
    id: 'https://asuransibatam.com/asuransi-personal-accident',
    en: 'https://asuransibatam.com/en/personal-accident-insurance',
  },
});

// --- JSON-LD SCHEMA (GSC Safety) ---
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://asuransibatam.com" },
    { "@type": "ListItem", "position": 2, "name": "Personal Accident Insurance", "item": "https://asuransibatam.com/en/personal-accident-insurance" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Personal Accident Insurance suitable for shipyard workers in Batam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, absolutely. Our PA insurance is specifically designed for high-risk sectors like shipyards and manufacturing in Batam, providing an extra layer of protection on top of standard BPJS Ketenagakerjaan."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between Group PA and Individual PA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Group PA (Collective) is typically purchased by companies for employees with more economical premiums. Individual PA is personal coverage with flexible sum insured amounts tailored for family needs."
      }
    },
    {
      "@type": "Question",
      "name": "How does the claim process work in Batam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Claims must be reported within 2x24 hours to our team. Required documents include an accident report from authorities or HRD, medical reports, and ID copy. Our team provides full administrative assistance."
      }
    }
  ]
};

const serviceSchema = schemaInsuranceProduct({
  name: "Personal Accident Insurance (PA) Batam",
  description: "Comprehensive Personal Accident Insurance for shipyard, manufacturing, and logistics workers in Batam. Group PA & Individual solutions.",
  url: "/en/personal-accident-insurance",
  category: "Personal Accident",
});

// --- KOMPONEN UTAMA ---
export default function PersonalAccidentPageEN() {
  return (
    <>
      {/* Inject Schema JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-cream text-navy font-sans">
        
        {/* HERO SECTION */}
        <section className="gradient-navy text-cream section-padding min-h-[60vh] flex items-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-batik.png')]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              {/* Breadcrumb Visual */}
              <nav className="text-sm mb-4 opacity-80">
                <Link href="/en" className="hover:text-gold">Home</Link> 
                <ChevronRight className="inline w-4 h-4 mx-1" /> 
                <span className="text-gold">Personal Accident Insurance</span>
              </nav>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Essential Protection for <span className="text-gradient-gold">Batam Industrial</span> Workers
              </h1>
              <p className="text-lg md:text-xl text-cream/90 mb-8 leading-relaxed">
                Specialized Personal Accident (PA) Insurance designed for shipyard, manufacturing, and maritime sectors in Batam. Secure your financial safety net beyond standard BPJS coverage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <QuoteButton cluster="pa" lang="en" variant="gold" className="!rounded-full !px-8 !py-3.5" />
                <Link href="#products" className="inline-flex items-center justify-center gap-2 border-2 border-cream hover:border-gold hover:text-gold font-bold py-3 px-8 rounded-full transition-all duration-300">
                  View Protection Schemes
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WHY NEED PA (BATAM CONTEXT) */}
        <section className="section-padding bg-cream">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
                High Risks Require Maximum Protection
              </h2>
              <p className="text-navy/70 max-w-2xl mx-auto">
                In Batam industrial zones, workplace accidents are a daily reality. Our PA insurance acts as a crucial additional financial shield.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover border border-navy/5">
                <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mb-6 text-navy">
                  <HardHat size={28} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">BPJS TK Supplement</h3>
                <p className="text-navy/70 leading-relaxed">
                  Fills the coverage gaps of BPJS. Receive cash compensation (cashless) for recovery costs or income replacement during medical leave.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover border border-navy/5">
                <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mb-6 text-navy">
                  <Anchor size={28} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Shipyard & Logistics Focus</h3>
                <p className="text-navy/70 leading-relaxed">
                  Policies that understand risk classifications for shipyards and ports in Batam. Transparent underwriting without claim rejections due to misclassification.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover border border-navy/5">
                <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mb-6 text-navy">
                  <Clock size={28} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Fast & Trusted Claims</h3>
                <p className="text-navy/70 leading-relaxed">
                  Local Batam claims team that is responsive. Full administrative assistance from reporting to fund disbursement. Full compliance with GCG principles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT CLUSTER */}
        <section id="products" className="section-padding bg-navy-light/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
                PA Product Options
              </h2>
              <p className="text-navy/70">
                Flexible solutions for corporate and individual needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Group PA */}
              <div className="group relative bg-white p-8 rounded-3xl shadow-lg card-hover overflow-hidden border-b-4 border-gold">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full transition-transform group-hover:scale-150"></div>
                <Users className="text-gold w-12 h-12 mb-6" />
                <h3 className="font-display text-2xl font-bold text-navy mb-4">Group PA (Employees)</h3>
                <ul className="space-y-3 text-navy/80 mb-6">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <span>Ideal for manufacturing & shipyard companies.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <span>Economical premiums (bulk discount).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <span>24-hour coverage or work-hours only options.</span>
                  </li>
                </ul>
                <Link href="/en/personal-accident-insurance/group-employee-pa" className="font-bold text-navy group-hover:text-gold transition-colors flex items-center gap-2">
                  Learn More <ChevronRight size={18} />
                </Link>
              </div>

              {/* Individual PA */}
              <div className="group relative bg-white p-8 rounded-3xl shadow-lg card-hover overflow-hidden border-b-4 border-navy">
                <div className="absolute top-0 right-0 w-32 h-32 bg-navy/10 rounded-bl-full transition-transform group-hover:scale-150"></div>
                <HeartPulse className="text-navy w-12 h-12 mb-6" />
                <h3 className="font-display text-2xl font-bold text-navy mb-4">Individual / Family PA</h3>
                <ul className="space-y-3 text-navy/80 mb-6">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <span>Personal protection for Batam-Singapore/Malaysia commuters.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <span>Hospitalization & permanent disability benefits.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <span>Extendable to family dependents.</span>
                  </li>
                </ul>
                <Link href="/en/personal-accident-insurance/individual-family-pa" className="font-bold text-navy group-hover:text-gold transition-colors flex items-center gap-2">
                  Learn More <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION (EEAT) */}
        <section className="section-padding bg-cream">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <details className="group bg-white p-6 rounded-xl shadow-sm card-hover">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-navy text-lg">
                  Does PA Insurance replace BPJS Workman Compensation (JKK)?
                  <ChevronRight className="w-5 h-5 transform transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-navy/70 leading-relaxed">
                  No, it supplements it. BPJS JKK focuses on medical bills. PA insurance provides direct cash payments to the victim or heirs to replace lost income during recovery or as a death benefit.
                </p>
              </details>

              {/* FAQ Item 2 */}
              <details className="group bg-white p-6 rounded-xl shadow-sm card-hover">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-navy text-lg">
                  Can foreign workers (WNA) in Batam be insured?
                  <ChevronRight className="w-5 h-5 transform transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-navy/70 leading-relaxed">
                  Yes. We provide PA schemes for Expatriates working on projects in Batam with risk coverage that meets international standards and OJK regulations.
                </p>
              </details>

              {/* FAQ Item 3 */}
              <details className="group bg-white p-6 rounded-xl shadow-sm card-hover">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-navy text-lg">
                  What are the common exclusions?
                  <ChevronRight className="w-5 h-5 transform transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-navy/70 leading-relaxed">
                  Generally, exclusions include accidents due to illegal acts, intoxication, or Occupational Diseases that should be covered by BPJS JKK. However, policies can be custom-designed for specific company needs.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section id="consultation" className="gradient-gold section-padding">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
                Need Risk Management Consultation?
            </h2>
            <p className="text-navy/80 mb-8 max-w-2xl mx-auto">
                Our experts are ready to help your company in Batam design an effective and cost-efficient employee protection scheme.
            </p>
            <QuoteButton cluster="pa" lang="en" variant="navy" className="!rounded-full !px-10 !py-4 !text-lg hover:-translate-y-1" />
          </div>
        </section>

      </main>
    </>
  );
}

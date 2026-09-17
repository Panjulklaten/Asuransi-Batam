import { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO, schemaInsuranceProduct } from '@/lib/seo';
import {
  ChevronRight, PhoneCall, Trophy, Ruler, Users, Percent, Eye, FileText
} from 'lucide-react';

export const metadata: Metadata = generateSEO({
  title: 'Hole-in-One Insurance Batam – Golf Tournament Prize Cover',
  description: 'Hole-in-one insurance for golf tournaments in Batam. Prize indemnity for cars, cash, or jewellery without the committee bearing the full prize value. Free consultation.',
  canonical: 'https://asuransibatam.com/en/event-insurance/hole-in-one-insurance',
  languages: {
    id: 'https://asuransibatam.com/asuransi-event/hole-in-one',
    en: 'https://asuransibatam.com/en/event-insurance/hole-in-one-insurance',
  },
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://asuransibatam.com" },
    { "@type": "ListItem", "position": 2, "name": "Event Insurance", "item": "https://asuransibatam.com/en/event-insurance" },
    { "@type": "ListItem", "position": 3, "name": "Hole-in-One Insurance", "item": "https://asuransibatam.com/en/event-insurance/hole-in-one-insurance" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is hole-in-one insurance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It's a policy that pays out a golf tournament's hole-in-one prize — a car, cash, or jewellery — to whoever hits a hole-in-one from the tee box, so the organizing committee pays a small premium instead of setting aside the full prize value."
      }
    },
    {
      "@type": "Question",
      "name": "Why is there a minimum hole distance requirement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The probability of a hole-in-one rises sharply as distance decreases. A minimum distance (commonly around 120 metres) keeps the statistical odds within the range insurers can price accurately."
      }
    },
    {
      "@type": "Question",
      "name": "Why must participants be amateur, not professional golfers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional golfers have a materially higher hit accuracy than amateurs, which would significantly skew the probability the premium was calculated on. Standard policies are priced for amateur play only."
      }
    }
  ]
};

const serviceSchema = schemaInsuranceProduct({
  name: "Hole-in-One Insurance Batam",
  description: "Hole-in-one insurance for golf tournaments in Batam — prize indemnity cover for cars, cash, or jewellery awarded to a participant who scores a hole-in-one.",
  url: "/en/event-insurance/hole-in-one-insurance",
  category: "Prize Indemnity Insurance",
});

export default function HoleInOneInsurancePageEN() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-cream text-navy font-sans">

        {/* HERO */}
        <section className="gradient-navy text-cream section-padding pt-32 md:pt-40 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-batik.png')]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <nav className="text-sm mb-6 opacity-80 flex items-center flex-wrap gap-2">
              <Link href="/en" className="hover:text-gold">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/en/event-insurance" className="hover:text-gold">Event Insurance</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gold font-semibold">Hole-in-One Insurance</span>
            </nav>
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                One Shot, <span className="text-gradient-gold">One Big Prize</span> — Without the Full Risk
              </h1>
              <p className="text-lg text-cream/90 mb-8 leading-relaxed">
                Batam has at least seven internationally rated golf courses and tournaments running almost
                every month — most offering a hole-in-one prize as the main draw. We help committees insure
                that prize instead of setting aside its full value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#consultation" className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                  <PhoneCall size={20} /> Get a Quote
                </Link>
                <Link href="/blog/asuransi-hole-in-one-golf-batam" className="inline-flex items-center justify-center gap-2 border-2 border-cream hover:border-gold hover:text-gold font-bold py-3 px-8 rounded-full transition-all duration-300">
                  Read the Full Guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* COVERAGE */}
        <section className="section-padding bg-cream">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">What's Covered</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover border border-navy/5">
                <Trophy className="text-gold w-10 h-10 mb-4" />
                <h3 className="font-display text-lg font-bold mb-2">Vehicle Prizes</h3>
                <p className="text-navy/70 text-sm leading-relaxed">Payout for a car or motorcycle prize — the most common hole-in-one prize format.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover border border-navy/5">
                <FileText className="text-gold w-10 h-10 mb-4" />
                <h3 className="font-display text-lg font-bold mb-2">Cash Prizes</h3>
                <p className="text-navy/70 text-sm leading-relaxed">Cash payout for one or several par-3 holes in a single tournament.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover border border-navy/5">
                <Eye className="text-gold w-10 h-10 mb-4" />
                <h3 className="font-display text-lg font-bold mb-2">Independent Witness</h3>
                <p className="text-navy/70 text-sm leading-relaxed">An insurer-appointed officer verifies the shot at the insured hole to prevent claim disputes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TERMS */}
        <section className="section-padding bg-navy-light/10">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border-l-4 border-gold">
              <h2 className="font-display text-2xl font-bold text-navy mb-6">Standard Policy Terms</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy">Max. 150 Participants</h4>
                    <p className="text-navy/60 text-sm">Keeps statistical probability within the priced range.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy">Amateurs Only</h4>
                    <p className="text-navy/60 text-sm">Licensed professionals are excluded from standard policies.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Ruler className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy">Min. 120m Hole Distance</h4>
                    <p className="text-navy/60 text-sm">Shorter holes fall outside standard actuarial pricing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Percent className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy">10% Own Risk of TSI</h4>
                    <p className="text-navy/60 text-sm">The committee bears 10% of the insured prize value if a claim occurs.</p>
                  </div>
                </div>
              </div>
              <p className="text-navy/70 text-sm mt-6 pt-6 border-t border-navy/10">
                An insurer-appointed officer must be present at the insured hole throughout the tournament
                to independently verify any hole-in-one attempt.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-cream">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group bg-white p-6 rounded-xl shadow-sm card-hover">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-navy text-lg">
                  How is the premium calculated?
                  <ChevronRight className="w-5 h-5 transform transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-navy/70 leading-relaxed">
                  Based on the sum insured (prize value), hole distance, and number of participants. Each
                  tournament is quoted individually — contact us with your tournament details for an estimate.
                </p>
              </details>
              <details className="group bg-white p-6 rounded-xl shadow-sm card-hover">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-navy text-lg">
                  Can tournaments with Singapore/Malaysia participants be insured?
                  <ChevronRight className="w-5 h-5 transform transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-navy/70 leading-relaxed">
                  Yes, as long as participants remain amateur and within the participant cap. Many Batam
                  tournaments already draw cross-border players given the city's proximity to Singapore
                  and Malaysia.
                </p>
              </details>
              <details className="group bg-white p-6 rounded-xl shadow-sm card-hover">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-navy text-lg">
                  How early should we apply before the tournament?
                  <ChevronRight className="w-5 h-5 transform transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-navy/70 leading-relaxed">
                  At least 1–2 weeks ahead, to allow time to verify hole distance, confirm participant
                  numbers, and schedule the witnessing officer on the day.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="consultation" className="gradient-gold section-padding">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">Planning a Golf Tournament in Batam?</h2>
            <p className="text-navy/80 mb-8 max-w-2xl mx-auto">Tell us your prize value, hole distance, and participant count for a quote.</p>
            <Link href="https://wa.me/6281373336728?text=Hello,%20I%20am%20interested%20in%20Hole-in-One%20Insurance%20Batam" target="_blank" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-cream font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <PhoneCall size={22} /> Chat via WhatsApp
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}

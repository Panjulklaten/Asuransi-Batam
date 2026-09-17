import { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO, schemaInsuranceProduct } from '@/lib/seo';
import {
  ChevronRight, PhoneCall, Users, HeartPulse, Fence, Gavel,
  Ambulance, AlertTriangle
} from 'lucide-react';

export const metadata: Metadata = generateSEO({
  title: 'Motocross Event Insurance Batam – Rider Accident & Liability',
  description: 'Event insurance for motocross and grasstrack races in Batam and the Riau Islands. Rider personal accident, spectator public liability, venue property damage cover.',
  canonical: 'https://asuransibatam.com/en/event-insurance/motocross-insurance',
  languages: {
    id: 'https://asuransibatam.com/asuransi-event/motor-cross',
    en: 'https://asuransibatam.com/en/event-insurance/motocross-insurance',
  },
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://asuransibatam.com" },
    { "@type": "ListItem", "position": 2, "name": "Event Insurance", "item": "https://asuransibatam.com/en/event-insurance" },
    { "@type": "ListItem", "position": 3, "name": "Motocross Insurance", "item": "https://asuransibatam.com/en/event-insurance/motocross-insurance" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does this policy cover damage to the rider's own motorcycle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generally no. The core focus is rider personal accident and third-party public liability. Damage to a rider's own bike is typically their own responsibility unless a special extension is agreed in advance."
      }
    },
    {
      "@type": "Question",
      "name": "Who needs to buy the policy — the committee or each rider individually?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Public liability and venue property cover is the organizing committee's responsibility, since they're the party who would be sued. Rider personal accident can be purchased collectively by the committee for all registered riders, or required as proof from each rider at registration."
      }
    },
    {
      "@type": "Question",
      "name": "What safety standards does the insurer usually assess before issuing a policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standby ambulance and medical crew throughout practice and race sessions, spectator barriers and safe-distance zones, a rider safety briefing before the race, and verification of rider licenses and standard protective gear."
      }
    }
  ]
};

const serviceSchema = schemaInsuranceProduct({
  name: "Motocross Event Insurance Batam",
  description: "Event insurance for motocross and grasstrack races in Batam and the Riau Islands — rider personal accident, spectator liability, and venue property damage cover.",
  url: "/en/event-insurance/motocross-insurance",
  category: "Personal Accident / Public Liability Insurance",
});

export default function MotocrossInsurancePageEN() {
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
              <span className="text-gold font-semibold">Motocross Insurance</span>
            </nav>
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                From the <span className="text-gradient-gold">Riders to the Crowd</span>
              </h1>
              <p className="text-lg text-cream/90 mb-8 leading-relaxed">
                Grasstrack and motocross events are growing across the Riau Islands — from the Golden Prawn
                circuit in Bengkong to the Temenggung Abdul Jamal sports complex. We help clubs, IMI
                Kepri, and private organizers cover riders and spectators alike.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#consultation" className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                  <PhoneCall size={20} /> Get a Quote
                </Link>
                <Link href="/blog/asuransi-motorcross-batam" className="inline-flex items-center justify-center gap-2 border-2 border-cream hover:border-gold hover:text-gold font-bold py-3 px-8 rounded-full transition-all duration-300">
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
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover border border-navy/5">
                <HeartPulse className="text-gold w-10 h-10 mb-4" />
                <h3 className="font-display text-lg font-bold mb-2">Rider Personal Accident</h3>
                <p className="text-navy/70 text-sm leading-relaxed">Cash benefits for registered riders in case of injury, permanent disability, or death during practice, qualifying, or the main race.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover border border-navy/5">
                <Users className="text-gold w-10 h-10 mb-4" />
                <h3 className="font-display text-lg font-bold mb-2">Spectator Public Liability</h3>
                <p className="text-navy/70 text-sm leading-relaxed">Covers compensation claims if a spectator, photographer, or third party is injured by a bike leaving the track or other operational incidents.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover border border-navy/5">
                <Fence className="text-gold w-10 h-10 mb-4" />
                <h3 className="font-display text-lg font-bold mb-2">Venue Property Damage</h3>
                <p className="text-navy/70 text-sm leading-relaxed">Protects the committee from claims over damaged barriers, temporary stands, or third-party land leased as the circuit.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover border border-navy/5">
                <Gavel className="text-gold w-10 h-10 mb-4" />
                <h3 className="font-display text-lg font-bold mb-2">Third-Party Liability</h3>
                <p className="text-navy/70 text-sm leading-relaxed">Covers claims if a rider's bike collides with another vehicle parked on-site or damages public infrastructure near the venue.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SAFETY STANDARDS */}
        <section className="section-padding bg-navy-light/10">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border-l-4 border-gold">
              <div className="flex items-center gap-3 mb-4">
                <Ambulance className="w-7 h-7 text-gold" />
                <h2 className="font-display text-2xl font-bold text-navy">What Insurers Look For Before Issuing a Policy</h2>
              </div>
              <ul className="space-y-3 text-navy/70">
                <li className="flex items-start gap-2"><AlertTriangle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" /><span>Standby ambulance and medical crew for the entire event day, not just the main race.</span></li>
                <li className="flex items-start gap-2"><AlertTriangle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" /><span>Physical barriers and a defined safe-distance zone between track and spectators.</span></li>
                <li className="flex items-start gap-2"><AlertTriangle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" /><span>Pre-race rider safety briefing covering flag signals and hazard points.</span></li>
                <li className="flex items-start gap-2"><AlertTriangle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" /><span>Verified rider licenses and standard protective gear (helmet, body protector).</span></li>
              </ul>
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
                  Does this cover damage to a rider's own bike?
                  <ChevronRight className="w-5 h-5 transform transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-navy/70 leading-relaxed">
                  No, not by default. The policy focuses on rider personal accident and third-party
                  liability; the rider's own motorcycle is normally their own responsibility.
                </p>
              </details>
              <details className="group bg-white p-6 rounded-xl shadow-sm card-hover">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-navy text-lg">
                  Who buys the policy — the committee or each rider?
                  <ChevronRight className="w-5 h-5 transform transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-navy/70 leading-relaxed">
                  The committee typically buys public liability and venue cover, and can also buy
                  collective personal accident cover for all registered riders.
                </p>
              </details>
              <details className="group bg-white p-6 rounded-xl shadow-sm card-hover">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-navy text-lg">
                  How far ahead should a club apply?
                  <ChevronRight className="w-5 h-5 transform transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-navy/70 leading-relaxed">
                  Ideally 1–2 weeks before a Kejurda or official championship, to allow time for a venue
                  and safety assessment.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="consultation" className="gradient-gold section-padding">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">Racing Soon in Batam or the Riau Islands?</h2>
            <p className="text-navy/80 mb-8 max-w-2xl mx-auto">Talk to us about riders, spectators, and venue cover for your event.</p>
            <Link href="https://wa.me/6281373336728?text=Hello,%20I%20am%20interested%20in%20Motocross%20Event%20Insurance%20Batam" target="_blank" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-cream font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <PhoneCall size={22} /> Chat via WhatsApp
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}

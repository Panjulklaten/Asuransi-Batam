import { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO, schemaInsuranceProduct } from '@/lib/seo';
import {
  Music4, Bike, Flag, ShieldCheck, Users, CloudRain,
  ChevronRight, PhoneCall, Trophy
} from 'lucide-react';

export const metadata: Metadata = generateSEO({
  title: 'Event Insurance Batam – Concerts, Motocross & Hole in One',
  description: 'Event insurance in Batam for concert promoters, motocross/grasstrack organizers, and golf hole-in-one tournaments. Liability, personal accident, and cancellation cover.',
  canonical: 'https://asuransibatam.com/en/event-insurance',
  languages: {
    id: 'https://asuransibatam.com/asuransi-event',
    en: 'https://asuransibatam.com/en/event-insurance',
  },
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://asuransibatam.com" },
    { "@type": "ListItem", "position": 2, "name": "Event Insurance", "item": "https://asuransibatam.com/en/event-insurance" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is event insurance and who needs it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Event insurance bundles the covers a specific event needs — liability, personal accident, cancellation, and in some cases prize indemnity such as hole-in-one — into one policy. It's used by promoters, event organizers, race committees, and venue managers in Batam."
      }
    },
    {
      "@type": "Question",
      "name": "Do concerts, motocross, and golf tournaments use the same policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Each event type has a different risk profile, so the coverage structure and premium calculation differ significantly — see the dedicated page for each category below."
      }
    },
    {
      "@type": "Question",
      "name": "How early should I apply for event insurance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ideally 2–4 weeks before a medium-to-large event, or at least 1–2 weeks for smaller club-level events. Complex events — involving overseas artists, large prizes, or outdoor venues — should be arranged as early as possible."
      }
    }
  ]
};

const serviceSchema = schemaInsuranceProduct({
  name: "Event Insurance Batam",
  description: "Event insurance for concerts, motocross/grasstrack, and golf hole-in-one tournaments in Batam — liability, personal accident, and cancellation cover.",
  url: "/en/event-insurance",
  category: "Event Insurance",
});

export default function EventInsurancePageEN() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-cream text-navy font-sans">

        {/* HERO SECTION */}
        <section className="gradient-navy text-cream section-padding pt-32 md:pt-40 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-batik.png')]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <nav className="text-sm mb-4 opacity-80">
              <Link href="/en" className="hover:text-gold">Home</Link>
              <ChevronRight className="inline w-4 h-4 mx-1" />
              <span className="text-gold">Event Insurance</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                From the Stage to the Track and the <span className="text-gradient-gold">Fairway</span>
              </h1>
              <p className="text-lg md:text-xl text-cream/90 mb-8 leading-relaxed">
                Every event carries its own risk profile — one that can turn into a major financial loss
                without the right cover. We help promoters, race committees, and event organizers in
                Batam design protection that fits the scale and type of their event.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#categories" className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                  <ShieldCheck size={20} /> View Event Categories
                </Link>
                <Link href="#consultation" className="inline-flex items-center justify-center gap-2 border-2 border-cream hover:border-gold hover:text-gold font-bold py-3 px-8 rounded-full transition-all duration-300">
                  <PhoneCall size={18} /> Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section id="categories" className="section-padding bg-cream">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">Choose Your Event Type</h2>
              <p className="text-navy/70 max-w-2xl mx-auto">Each category has its own coverage details and application process.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative bg-white p-8 rounded-3xl shadow-lg card-hover overflow-hidden border-b-4 border-gold">
                <Music4 className="text-gold w-12 h-12 mb-6" />
                <h3 className="font-display text-xl font-bold text-navy mb-3">Concert Insurance</h3>
                <p className="text-navy/70 text-sm mb-6">Audience liability, artist non-appearance, and event cancellation for promoters and venues.</p>
                <Link href="/en/event-insurance/concert-insurance" className="font-bold text-navy group-hover:text-gold transition-colors flex items-center gap-2">
                  Learn More <ChevronRight size={18} />
                </Link>
              </div>
              <div className="group relative bg-white p-8 rounded-3xl shadow-lg card-hover overflow-hidden border-b-4 border-navy">
                <Bike className="text-navy w-12 h-12 mb-6" />
                <h3 className="font-display text-xl font-bold text-navy mb-3">Motocross Insurance</h3>
                <p className="text-navy/70 text-sm mb-6">Rider personal accident and spectator public liability for motocross and grasstrack events.</p>
                <Link href="/en/event-insurance/motocross-insurance" className="font-bold text-navy group-hover:text-gold transition-colors flex items-center gap-2">
                  Learn More <ChevronRight size={18} />
                </Link>
              </div>
              <div className="group relative bg-white p-8 rounded-3xl shadow-lg card-hover overflow-hidden border-b-4 border-gold">
                <Trophy className="text-gold w-12 h-12 mb-6" />
                <h3 className="font-display text-xl font-bold text-navy mb-3">Hole-in-One Insurance</h3>
                <p className="text-navy/70 text-sm mb-6">Prize indemnity cover for golf tournaments — participant limits, hole distance, and self-risk.</p>
                <Link href="/en/event-insurance/hole-in-one-insurance" className="font-bold text-navy group-hover:text-gold transition-colors flex items-center gap-2">
                  Learn More <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="section-padding bg-navy-light/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">Why Batam Organizers Need Event Cover</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover border border-navy/5">
                <Users className="text-navy w-8 h-8 mb-4" />
                <h3 className="font-display text-lg font-bold mb-2">Third-Party Liability</h3>
                <p className="text-navy/70 text-sm leading-relaxed">A single injury claim from an attendee or spectator can exceed an event's entire production budget without liability cover.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover border border-navy/5">
                <CloudRain className="text-navy w-8 h-8 mb-4" />
                <h3 className="font-display text-lg font-bold mb-2">Tropical Weather Risk</h3>
                <p className="text-navy/70 text-sm leading-relaxed">Batam's tropical climate means outdoor events face real cancellation and postponement risk from sudden storms.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover border border-navy/5">
                <Flag className="text-navy w-8 h-8 mb-4" />
                <h3 className="font-display text-lg font-bold mb-2">Cross-Border Events</h3>
                <p className="text-navy/70 text-sm leading-relaxed">Batam's proximity to Singapore and Malaysia means many events involve overseas artists, riders, or players — adding travel-related risk.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="consultation" className="gradient-gold section-padding">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">Planning an Event in Batam?</h2>
            <p className="text-navy/80 mb-8 max-w-2xl mx-auto">Talk to our team about the right coverage for your concert, race, or tournament.</p>
            <Link href="https://wa.me/6281373336728?text=Hello,%20I%20am%20interested%20in%20Event%20Insurance%20Batam" target="_blank" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-cream font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <PhoneCall size={22} /> Contact Batam Sales Team
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}

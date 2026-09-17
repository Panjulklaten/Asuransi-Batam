import { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO, schemaInsuranceProduct } from '@/lib/seo';
import {
  ChevronRight, PhoneCall, Users, Mic2, CloudRain, Wrench,
  Gavel, FileText, AlertTriangle
} from 'lucide-react';

export const metadata: Metadata = generateSEO({
  title: 'Concert Insurance Batam – Liability, Non-Appearance & Cancellation',
  description: 'Concert and music event insurance for promoters and organizers in Batam. Audience liability, artist non-appearance, event cancellation, and equipment damage cover.',
  canonical: 'https://asuransibatam.com/en/event-insurance/concert-insurance',
  languages: {
    id: 'https://asuransibatam.com/asuransi-event/konser-musik',
    en: 'https://asuransibatam.com/en/event-insurance/concert-insurance',
  },
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://asuransibatam.com" },
    { "@type": "ListItem", "position": 2, "name": "Event Insurance", "item": "https://asuransibatam.com/en/event-insurance" },
    { "@type": "ListItem", "position": 3, "name": "Concert Insurance", "item": "https://asuransibatam.com/en/event-insurance/concert-insurance" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What's the difference between event cancellation and non-appearance cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Event cancellation protects the promoter if the entire event is cancelled, postponed, or relocated due to circumstances beyond their control (severe weather, disaster, permit revocation). Non-appearance is narrower: it covers losses when the headline artist fails to appear due to illness, accident, or travel delay, while the rest of the show can still proceed."
      }
    },
    {
      "@type": "Question",
      "name": "Who is legally responsible if an artist cancels last-minute?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under Indonesian consumer protection principles, the promoter — as the business operator — carries the legal obligation to refund ticket holders, not the artist or the venue. Without non-appearance insurance, the promoter absorbs the full loss: talent fees already paid, production costs, and refund obligations."
      }
    },
    {
      "@type": "Question",
      "name": "Does the venue require proof of insurance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many larger venues in Batam, including sports halls used for concerts, require a Certificate of Insurance (COI) for public liability before issuing a venue permit. We help prepare a COI that fits venue and sponsor requirements."
      }
    }
  ]
};

const serviceSchema = schemaInsuranceProduct({
  name: "Concert Insurance Batam",
  description: "Concert and music event insurance for promoters and organizers in Batam — audience liability, artist non-appearance, and event cancellation cover.",
  url: "/en/event-insurance/concert-insurance",
  category: "Event Liability Insurance",
});

export default function ConcertInsurancePageEN() {
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
              <span className="text-gold font-semibold">Concert Insurance</span>
            </nav>
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                Protect Your Show from <span className="text-gradient-gold">Stage to Curtain Call</span>
              </h1>
              <p className="text-lg text-cream/90 mb-8 leading-relaxed">
                Batam's concert scene is growing fast — from local venues hosting national acts to
                cross-border shows with artists from Malaysia and Singapore. We help promoters and event
                organizers cover audience liability, artist non-appearance, and cancellation risk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#consultation" className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                  <PhoneCall size={20} /> Get a Quote
                </Link>
                <Link href="/blog/asuransi-konser-musik-batam" className="inline-flex items-center justify-center gap-2 border-2 border-cream hover:border-gold hover:text-gold font-bold py-3 px-8 rounded-full transition-all duration-300">
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
                <Users className="text-gold w-10 h-10 mb-4" />
                <h3 className="font-display text-lg font-bold mb-2">Public Liability</h3>
                <p className="text-navy/70 text-sm leading-relaxed">Claims and medical costs if attendees or third parties are injured due to crowd crush, barrier collapse, or venue-related accidents.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover border border-navy/5">
                <Mic2 className="text-gold w-10 h-10 mb-4" />
                <h3 className="font-display text-lg font-bold mb-2">Non-Appearance</h3>
                <p className="text-navy/70 text-sm leading-relaxed">Reimburses talent fees and production costs if the headline artist can't perform due to illness, accident, or travel delay.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover border border-navy/5">
                <CloudRain className="text-gold w-10 h-10 mb-4" />
                <h3 className="font-display text-lg font-bold mb-2">Event Cancellation</h3>
                <p className="text-navy/70 text-sm leading-relaxed">Covers losses if the event is cancelled, postponed, or relocated due to extreme weather, disaster, or last-minute permit issues.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover border border-navy/5">
                <Wrench className="text-gold w-10 h-10 mb-4" />
                <h3 className="font-display text-lg font-bold mb-2">Equipment Damage</h3>
                <p className="text-navy/70 text-sm leading-relaxed">Covers stage, rigging, sound system, and LED screens damaged by fire, high winds, or operational accidents.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover border border-navy/5">
                <Gavel className="text-gold w-10 h-10 mb-4" />
                <h3 className="font-display text-lg font-bold mb-2">Legal Defense Costs</h3>
                <p className="text-navy/70 text-sm leading-relaxed">Covers legal fees if the promoter is sued by an attendee or third party over the event.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover border border-navy/5">
                <FileText className="text-gold w-10 h-10 mb-4" />
                <h3 className="font-display text-lg font-bold mb-2">Certificate of Insurance</h3>
                <p className="text-navy/70 text-sm leading-relaxed">A COI issued to meet crowd-permit requirements or sponsor/venue conditions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* RISK CONTEXT */}
        <section className="section-padding bg-navy-light/10">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border-l-4 border-gold">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-7 h-7 text-gold" />
                <h2 className="font-display text-2xl font-bold text-navy">Why This Matters in Batam</h2>
              </div>
              <p className="text-navy/70 leading-relaxed">
                As an FTZ city bordering Singapore and Malaysia, Batam has become an increasingly attractive
                stop for cross-border concerts — but that convenience adds risk layers most local promoters
                haven't budgeted for, from ferry delays affecting overseas artists to the tropical storms that
                threaten outdoor stages. A single cancelled show can wipe out an entire year's production
                margin without the right cover in place.
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
                  Event cancellation vs. non-appearance — what's the difference?
                  <ChevronRight className="w-5 h-5 transform transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-navy/70 leading-relaxed">
                  Cancellation covers the whole event being called off; non-appearance is specific to the
                  headline artist failing to show while the event itself could still proceed with a
                  different line-up.
                </p>
              </details>
              <details className="group bg-white p-6 rounded-xl shadow-sm card-hover">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-navy text-lg">
                  Who's liable if the artist cancels last-minute?
                  <ChevronRight className="w-5 h-5 transform transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-navy/70 leading-relaxed">
                  The promoter carries the legal refund obligation to ticket holders — not the artist.
                  Non-appearance insurance reimburses the promoter for talent fees and production costs
                  already spent.
                </p>
              </details>
              <details className="group bg-white p-6 rounded-xl shadow-sm card-hover">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-navy text-lg">
                  How long before the event should I apply?
                  <ChevronRight className="w-5 h-5 transform transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-navy/70 leading-relaxed">
                  For small-to-medium shows, 1–2 weeks is usually enough. For larger events involving
                  overseas artists or a large sum insured, apply 30–60 days ahead so we have time to
                  assess venue and artist risk.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="consultation" className="gradient-gold section-padding">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">Ready to Protect Your Show?</h2>
            <p className="text-navy/80 mb-8 max-w-2xl mx-auto">Tell us about your event and we'll put together a coverage plan that fits.</p>
            <Link href="https://wa.me/6281373336728?text=Hello,%20I%20am%20interested%20in%20Concert%20Insurance%20Batam" target="_blank" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-cream font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <PhoneCall size={22} /> Chat via WhatsApp
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}

// app/en/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import { Shield, Star, Clock, Users, CheckCircle } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = generateSEO({
  title: "Trusted Insurance Batam – Property, Vehicle, Heavy Equipment & Liability | Rio",
  description: "Rio, an insurance practitioner in Batam with 8+ years of experience. Serving property, vehicle, heavy equipment, liability, and engineering insurance. Free consultation, fast response via WhatsApp. Call now: 0813-7333-6728.",
  canonical: "https://asuransibatam.com/en",
  languages: {
      id: "https://asuransibatam.com",
      en: "https://asuransibatam.com/en",
    },
});

const products = [
  {
    icon: "🏠",
    title: "Property Insurance",
    desc: "Protection for hotels, homes, shophouses, and warehouses against fire, natural disasters, and damage.",
    href: "/en/property-insurance",
    tags: ["Hotel", "Home", "Shophouse", "Warehouse"],
  },
  {
    icon: "🚗",
    title: "Vehicle Insurance",
    desc: "All Risk & TLO for cars, dump trucks, and commercial vehicles. Online premium calculator available.",
    href: "/en/vehicle-insurance",
    tags: ["Car", "Dump Truck", "All Risk"],
  },
  {
    icon: "⚙️",
    title: "Machinery Insurance",
    desc: "Protection for heavy equipment, cranes, and industrial machinery against operational damage.",
    href: "/en/machinery-insurance",
    tags: ["Heavy Equipment", "Crane", "Machinery"],
  },
  {
    icon: "⚖️",
    title: "Liability Insurance",
    desc: "Third-party liability coverage, B3 hazardous waste, and public liability protection.",
    href: "/en/liability-insurance",
    tags: ["B3 Waste", "Public Liability"],
  },
  {
    icon: "🔧",
    title: "Engineering Insurance",
    desc: "Coverage for construction projects, machinery installation, and infrastructure works.",
    href: "/en/engineering-insurance",
    tags: ["CAR", "EAR", "Construction"],
  },
];

const testimonials = [
  {
    name: "Budi Santoso",
    company: "PT. Batam Properti Utama",
    text: "Rio is very professional in explaining insurance products. Our hotel claim was processed quickly and without any hassle.",
    rating: 5,
  },
  {
    name: "Hendra Wijaya",
    company: "CV. Trans Batam",
    text: "Our dump truck insurance was handled exceptionally well. Competitive premium, easy process.",
    rating: 5,
  },
  {
    name: "Susanto",
    company: "PT. Konstruksi Riau",
    text: "We've trusted Rio with our heavy equipment insurance for 5 years. Responsive and reliable.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "What is non-life (general) insurance?",
    a: "Non-life insurance provides financial protection against losses due to damage or loss of property, including real estate, vehicles, heavy equipment, and legal liability.",
  },
  {
    q: "How long does policy issuance take?",
    a: "Insurance policies can generally be issued within 1–3 working days after complete documents are received and the premium is paid.",
  },
  {
    q: "How do I file a claim?",
    a: "Contact us immediately after an incident. Rio will guide you through the entire claims process from start to finish.",
  },
  {
    q: "Can I consult before purchasing a policy?",
    a: "Absolutely! Free consultation is available via WhatsApp, phone, or an in-person visit to our office in Batam Center.",
  },
];

export default function HomePageEN() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["InsuranceAgency", "LocalBusiness"],
        "@id": "https://asuransibatam.com/#organization",
        name: "Asuransi Batam – Rio",
        url: "https://asuransibatam.com",
        telephone: "+6281373336728",
        email: "rio@asuransibatam.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Batam Center",
          addressLocality: "Batam",
          addressRegion: "Kepulauan Riau",
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 1.1277,
          longitude: 104.0196,
        },
        openingHours: "Mo-Fr 08:00-17:00",
        employee: {
          "@type": "Person",
          name: "Rio",
          jobTitle: "Insurance Practitioner",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0] overflow-hidden pt-16">
        {/* Decorative circles */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#c9a84c]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#1a4fa0]/40 rounded-full blur-3xl" />
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#c9a84c] rounded-full opacity-60" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-[#c9a84c]/40 rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a84c]/20 border border-[#c9a84c]/30 rounded-full text-[#c9a84c] text-sm font-semibold mb-6">
                <Shield className="w-4 h-4" />
                Insurance Practitioner Batam
              </div>
              <h1 className="font-display font-bold text-5xl md:text-6xl text-white leading-tight mb-6">
                Protect Your<br />
                <span className="text-gradient-gold">Assets & Business</span><br />
                in Batam
              </h1>
              <p className="text-white/70 text-xl leading-relaxed mb-10">
                Rio, an insurance practitioner with 8+ years of experience in Batam.
                The right solution for property, vehicles, heavy equipment, liability, and engineering.
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: <CheckCircle className="w-4 h-4" />, text: "OJK-Registered" },
                  { icon: <CheckCircle className="w-4 h-4" />, text: "8+ Years Experience" },
                  { icon: <CheckCircle className="w-4 h-4" />, text: "Fast Claim Process" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-white/70 text-sm">
                    <span className="text-[#c9a84c]">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { val: "8+", label: "Years of Experience", bg: "bg-[#c9a84c]/20", color: "text-[#c9a84c]" },
                { val: "200+", label: "Active Clients", bg: "bg-white/10", color: "text-white" },
                { val: "98%", label: "Claim Success Rate", bg: "bg-white/10", color: "text-white" },
                { val: "24/7", label: "Emergency Service", bg: "bg-[#c9a84c]/20", color: "text-[#c9a84c]" },
              ].map((s) => (
                <div key={s.label} className={`${s.bg} backdrop-blur rounded-2xl p-8 text-center`}>
                  <div className={`font-display font-black text-5xl ${s.color} mb-2`}>{s.val}</div>
                  <div className="text-white/60 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#8a6d1f] font-semibold uppercase tracking-widest text-sm mb-2">Featured Products</p>
            <h2 className="font-display font-bold text-4xl text-[#0a1628] mb-4">
              All Your Insurance Needs in One Place
            </h2>
            <p className="text-[#475569] text-lg max-w-2xl mx-auto">
              From property to engineering — we provide complete non-life insurance solutions for individuals and businesses in Batam.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <Link key={p.href} href={p.href} className="group">
                <div className="h-full p-7 rounded-2xl border-2 border-[#e2e8f0] group-hover:border-[#c9a84c]/60 group-hover:shadow-xl transition-all card-hover bg-white">
                  <div className="text-4xl mb-4">{p.icon}</div>
                  <h3 className="font-display font-bold text-xl text-[#0a1628] mb-3 group-hover:text-[#1a4fa0] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[#475569] text-sm leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-[#faf8f3] text-[#1a4fa0] text-xs font-semibold rounded-full border border-[#e2e8f0]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
            {/* Calculator card */}
            <Link href="/en/car-premium-calculator" className="group">
              <div className="h-full p-7 rounded-2xl bg-gradient-to-br from-[#0a1628] to-[#1a4fa0] group-hover:shadow-xl transition-all card-hover">
                <div className="text-4xl mb-4">🧮</div>
                <h3 className="font-display font-bold text-xl text-white mb-3">Premium Calculator</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Calculate your car and motorcycle premium estimates online — fast and accurate.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 text-[#c9a84c] text-xs font-semibold rounded-full border border-[#c9a84c]/30">
                    Car Premium
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-[#c9a84c] text-xs font-semibold rounded-full border border-[#c9a84c]/30">
                    Motorcycle Premium
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section-padding bg-[#faf8f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#8a6d1f] font-semibold uppercase tracking-widest text-sm mb-2">Our Advantages</p>
              <h2 className="font-display font-bold text-4xl text-[#0a1628] mb-6">
                Why Trust Us with Your Insurance?
              </h2>
              <p className="text-[#475569] text-lg leading-relaxed mb-8">
                With 8+ years of experience in the Batam non-life insurance industry,
                Rio is here as a trusted partner who understands local needs.
              </p>
              <div className="space-y-5">
                {[
                  {
                    icon: <Users className="w-5 h-5" />,
                    title: "Personal Assistance",
                    desc: "You get a dedicated consultant who guides you from policy selection through to claim completion.",
                  },
                  {
                    icon: <Clock className="w-5 h-5" />,
                    title: "Fast Response",
                    desc: "Questions answered within 1 business hour. Claims processed with a clear timeline.",
                  },
                  {
                    icon: <Shield className="w-5 h-5" />,
                    title: "OJK-Registered Partners",
                    desc: "Working with official insurance companies supervised by OJK for your peace of mind.",
                  },
                  {
                    icon: <Star className="w-5 h-5" />,
                    title: "Competitive Premiums",
                    desc: "We compare multiple insurers to secure the best premium rates for you.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#0a1628] text-[#c9a84c] rounded-xl flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-[#0a1628] mb-1">{item.title}</h3>
                      <p className="text-[#475569] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "8+", label: "Years of Experience", bg: "bg-[#0a1628]", color: "text-[#c9a84c]" },
                { val: "200+", label: "Active Clients", bg: "bg-[#c9a84c]", color: "text-[#0a1628]" },
                { val: "98%", label: "Claim Success Rate", bg: "bg-[#1a4fa0]", color: "text-white" },
                { val: "24/7", label: "Emergency Service", bg: "bg-[#132040]", color: "text-[#f0d080]" },
              ].map((s) => (
                <div key={s.label} className={`${s.bg} rounded-2xl p-4 sm:p-6 lg:p-8 text-center overflow-hidden`}>
                  <div className={`font-display font-black text-3xl sm:text-4xl lg:text-5xl ${s.color} mb-2 leading-none`}>{s.val}</div>
                  <div className="text-white/60 text-xs sm:text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#8a6d1f] font-semibold uppercase tracking-widest text-sm mb-2">Testimonials</p>
            <h2 className="font-display font-bold text-4xl text-[#0a1628] mb-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-7 rounded-2xl bg-[#faf8f3] border border-[#e2e8f0] hover:shadow-lg transition-all">
                <div className="flex text-[#c9a84c] mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-[#475569] text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div>
                  <div className="font-display font-bold text-[#0a1628]">{t.name}</div>
                  <div className="text-[#c9a84c] text-sm">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding bg-[#faf8f3]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#8a6d1f] font-semibold uppercase tracking-widest text-sm mb-2">FAQ</p>
            <h2 className="font-display font-bold text-4xl text-[#0a1628] mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-display font-semibold text-[#0a1628] hover:text-[#1a4fa0] transition-colors list-none">
                  {faq.q}
                  <span className="ml-4 text-[#c9a84c] text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-[#475569] text-sm leading-relaxed border-t border-[#e2e8f0] pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        title="Protect Your Assets in Batam"
        subtitle="Consult your insurance needs with Rio, an insurance practitioner in Batam."
        primaryLabel="Free Consultation via WhatsApp"
        waMsg="Hello%20Rio%2C%20I%20would%20like%20to%20consult%20about%20insurance"
        secondaryLabel="Calculate Car Premium"
        secondaryHref="/en/car-premium-calculator"
        tertiaryLabel="Calculate Property Premium"
        tertiaryHref="/en/property-premium-calculator"
      />
    </>
  );
}

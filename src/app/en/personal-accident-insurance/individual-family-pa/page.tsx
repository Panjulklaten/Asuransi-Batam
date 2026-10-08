import { Metadata } from 'next';
import Link from 'next/link';
import QuoteButton from '@/components/quote/QuoteButton';
import { generateSEO, schemaInsuranceProduct } from '@/lib/seo';
import { 
  HeartHandshake, Car, Ship, ShieldAlert, ChevronRight, 
  PhoneCall, MapPin, Clock, FileText, CheckCircle, AlertTriangle,
  UserCheck, Home, Wallet 
} from 'lucide-react';

// --- METADATA SEO (EN) ---
export const metadata: Metadata = generateSEO({
  title: 'Individual & Family PA Insurance Batam',
  description: 'Personal Accident (PA) Insurance for Batam residents. Comprehensive 24/7 protection for commuters, motorcyclists, and families. Affordable premiums, 1-day claim process.',
  canonical: 'https://asuransibatam.com/en/personal-accident-insurance/individual-family-pa',
  languages: {
    id: 'https://asuransibatam.com/asuransi-personal-accident/pa-individu-keluarga',
    en: 'https://asuransibatam.com/en/personal-accident-insurance/individual-family-pa',
  },
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://asuransibatam.com" },
    { "@type": "ListItem", "position": 2, "name": "Personal Accident Insurance", "item": "https://asuransibatam.com/en/personal-accident-insurance" },
    { "@type": "ListItem", "position": 3, "name": "Individual & Family PA", "item": "https://asuransibatam.com/en/personal-accident-insurance/individual-family-pa" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Individual PA cover accidents during working hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Individual PA is 24/7 worldwide coverage, including working hours. It serves as an additional benefit if company insurance or BPJS is insufficient."
      }
    },
    {
      "@type": "Question",
      "name": "I am a foreigner (WNA) living in Batam, can I buy this?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide PA policies for Expatriates residing in Batam, with coverage extendable to the Southeast Asian region."
      }
    },
    {
      "@type": "Question",
      "name": "How do I claim PA Insurance in Batam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Report via WhatsApp within 24 hours. Provide accident photos, hospital letters, and ID. Once approved, funds are transferred to your account within 3 working days."
      }
    }
  ]
};

const serviceSchema = schemaInsuranceProduct({
  name: "Individual & Family PA Insurance Batam",
  description: "Personal Accident Insurance for Batam residents: comprehensive 24/7 protection for commuters, motorcyclists, and families.",
  url: "/en/personal-accident-insurance/individual-family-pa",
  category: "Personal Accident",
});

export default function IndividualFamilyPA_EN() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-cream text-navy font-sans">
        
        {/* HERO SECTION */}
        <section className="gradient-navy text-cream section-padding pt-32 md:pt-40 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/images/family-protection.svg')]"></div>
          <div className="container mx-auto px-6 relative z-10">
            
            <nav className="text-sm mb-6 opacity-80 flex items-center flex-wrap gap-2">
              <Link href="/en" className="hover:text-gold">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/en/personal-accident-insurance" className="hover:text-gold">Personal Accident Insurance</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gold font-semibold">Individual & Family PA</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="bg-gold/20 text-gold text-xs font-bold py-1 px-3 rounded-full uppercase tracking-wider">24-Hour Personal Protection</span>
                <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mt-4 mb-6">
                  Don't Let Accidents Destroy Your Family's <span className="text-gradient-gold">Financial Future</span>
                </h1>
                <p className="text-lg text-cream/90 mb-8 leading-relaxed">
                  Living in Batam with high activity? From traffic accidents on Sudirman Road, workplace risks, to travel mishaps to Singapore. <strong>Individual PA Insurance</strong> is your ultimate financial shield. Low premium, high benefits.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#registration-form" className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold py-4 px-8 rounded-full transition-all shadow-xl transform hover:-translate-y-1">
                    <ShieldAlert size={20} /> Check Premium Now
                  </Link>
                  <Link href="#case-study" className="inline-flex items-center justify-center gap-2 border-2 border-cream/50 hover:border-gold text-cream font-bold py-4 px-8 rounded-full transition-all">
                    View Claim Scenario
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="bg-navy-light/30 backdrop-blur-sm p-8 rounded-3xl border border-cream/10">
                  <h3 className="font-display text-2xl font-bold text-gold mb-6">Why Batam Residents Need Individual PA?</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="bg-gold/20 p-3 rounded-full">
                        <Car className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-cream">High Traffic Accident Risks</h4>
                        <p className="text-cream/60 text-sm">Increasing vehicle volume on Barelang & Batam Toll Roads. Motorists face high risks daily.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="bg-gold/20 p-3 rounded-full">
                        <Ship className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-cream">Commuter & Maritime Activity</h4>
                        <p className="text-cream/60 text-sm">High frequency of Ship crossings to Singapore/Malaysia requires extra protection.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="bg-gold/20 p-3 rounded-full">
                        <Wallet className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-cream">Income Replacement</h4>
                        <p className="text-cream/60 text-sm">If you are disabled for 3 months, who pays the bills? Individual PA provides cash allowance.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: TARGET MARKET */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
                Risk Profile of Batam Residents: Are You One of Them?
              </h2>
              <p className="text-navy/70 max-w-2xl mx-auto">
                Batam has unique characteristics. We analyze the demographics to determine your protection needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-cream p-6 rounded-2xl border border-navy/10 card-hover group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <Ship className="text-gold w-10 h-10 mb-4" />
                <h3 className="font-display font-bold text-xl mb-2">Commuter (Singapore/Bintan)</h3>
                <p className="text-navy/60 text-sm mb-4">
                  Crossing daily via Batam Centre or Harbour Bay? Risks at sea and cross-border transport require **Regional/Worldwide** coverage.
                </p>
                <span className="text-xs font-bold text-navy bg-navy/5 py-1 px-3 rounded-full">Recommended: PA 24 Hrs Regional</span>
              </div>

              <div className="bg-cream p-6 rounded-2xl border border-navy/10 card-hover group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <Car className="text-gold w-10 h-10 mb-4" />
                <h3 className="font-display font-bold text-xl mb-2">Daily Motorcyclist</h3>
                <p className="text-navy/60 text-sm mb-4">
                  Unpredictable weather and road conditions. Motor insurance covers the bike, not your bones or surgery. Individual PA is the solution.
                </p>
                <span className="text-xs font-bold text-navy bg-navy/5 py-1 px-3 rounded-full">Recommended: Medical + Disability</span>
              </div>

              <div className="bg-cream p-6 rounded-2xl border border-navy/10 card-hover group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <Home className="text-gold w-10 h-10 mb-4" />
                <h3 className="font-display font-bold text-xl mb-2">Head of Household</h3>
                <p className="text-navy/60 text-sm mb-4">
                  Your family relies on your income. In case of a tragedy, Individual PA provides a large lump sum (e.g., IDR 500M - 1B) as income replacement.
                </p>
                <span className="text-xs font-bold text-navy bg-navy/5 py-1 px-3 rounded-full">Recommended: High UP Death Benefit</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: CASE STUDY */}
        <section id="case-study" className="section-padding bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
                Real Case Study: Motorcycle Accident in Batam
              </h2>
              <p className="text-navy/70">Claim simulation to prove the value of this protection.</p>
            </div>

            <div className="bg-gradient-to-br from-navy to-navy-mid p-8 md:p-12 rounded-3xl text-cream shadow-2xl max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-6 border-b border-cream/20 pb-4">
                <AlertTriangle className="w-8 h-8 text-gold" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-cream/60">Scenario</span>
                  <h3 className="font-display text-xl font-bold">Accident on Jalan Ahmad Yani</h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gold mb-2">Chronology:</h4>
                  <p className="text-cream/80 text-sm leading-relaxed mb-4">
                    Mr. Andi (30), admin staff in Batam Center, had a motorbike accident on his way home. Result: broken shin bone (tibia fracture) requiring surgery. Treated at RS Budi Kemuliaan for 7 days.
                  </p>
                  
                  <h4 className="font-bold text-gold mb-2">Policy Parameters:</h4>
                  <ul className="text-sm text-cream/80 space-y-1">
                    <li><strong>Sum Insured (SI):</strong> IDR 200,000,000</li>
                    <li><strong>Premium Paid:</strong> IDR 280,000 / Year</li>
                    <li><strong>Coverage:</strong> 24 Hours (Indonesia)</li>
                  </ul>
                </div>

                <div className="bg-navy-light/30 p-6 rounded-xl border border-cream/10">
                  <h4 className="font-bold text-white mb-4 text-center">Claim Calculation Received</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between border-b border-cream/10 pb-2 text-sm">
                      <span className="text-cream/70">Medical Reimbursement:</span>
                      <span className="font-bold">IDR 10,000,000</span>
                    </div>
                    <div className="flex justify-between border-b border-cream/10 pb-2 text-sm">
                      <span className="text-cream/70">Permanent Disability Benefit:</span>
                      <span className="font-bold">IDR 5,000,000</span>
                    </div>
                    <div className="flex justify-between border-b border-cream/10 pb-2 text-sm">
                      <span className="text-cream/70">Daily Hospital Allowance (7 Days):</span>
                      <span className="font-bold">IDR 1,750,000</span>
                    </div>

                    <div className="flex justify-between bg-gold/20 p-3 rounded-lg mt-4">
                      <span className="font-bold text-gold">TOTAL PAYOUT:</span>
                      <span className="font-bold text-gold text-lg">IDR 16,750,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: REQUIREMENTS */}
        <section className="section-padding bg-cream">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              <div>
                <h2 className="font-display text-3xl font-bold text-navy mb-8">
                  Easy Claim Procedure in Batam
                </h2>
                <div className="relative pl-8 border-l-2 border-gold space-y-8">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-gold rounded-full -translate-x-1/2 mt-1.5"></div>
                  <div>
                    <h3 className="font-bold text-xl text-navy">1. Immediate Report</h3>
                    <p className="text-navy/70 text-sm mt-1">Contact our hotline or WhatsApp within 24 hours. If emergency, go to the nearest hospital (RS Budi Kemuliaan / RS Eka Hospital) first.</p>
                  </div>
                  
                  <div className="absolute left-0 top-1/3 w-4 h-4 bg-gold rounded-full -translate-x-1/2 mt-1.5"></div>
                  <div>
                    <h3 className="font-bold text-xl text-navy">2. Document Verification</h3>
                    <p className="text-navy/70 text-sm mt-1">Our team guides you through the form. Photo ID, accident photos, and doctor's certificate are mandatory.</p>
                  </div>

                  <div className="absolute left-0 top-2/3 w-4 h-4 bg-gold rounded-full -translate-x-1/2 mt-1.5"></div>
                  <div>
                    <h3 className="font-bold text-xl text-navy">3. Fund Disbursement</h3>
                    <p className="text-navy/70 text-sm mt-1">Claim approved? Funds are transferred directly to your bank account. Fast process.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-gold">
                <h3 className="font-display text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                  <FileText className="text-gold" /> Requirements to Buy Policy
                </h3>
                <p className="text-navy/70 text-sm mb-6">
                  The registration process is simple and can be done online.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-navy/10 rounded-full flex items-center justify-center text-navy font-bold text-xs flex-shrink-0 mt-0.5">1</div>
                    <div>
                      <strong className="text-navy">Personal Data:</strong>
                      <p className="text-sm text-navy/60">Full name (as per ID), DOB, Batam address, active phone number.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-navy/10 rounded-full flex items-center justify-center text-navy font-bold text-xs flex-shrink-0 mt-0.5">2</div>
                    <div>
                      <strong className="text-navy">Occupation Info:</strong>
                      <p className="text-sm text-navy/60">Job title and brief description (for risk rating).</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-navy/10 rounded-full flex items-center justify-center text-navy font-bold text-xs flex-shrink-0 mt-0.5">3</div>
                    <div>
                      <strong className="text-navy">Beneficiary (Heir):</strong>
                      <p className="text-sm text-navy/60">Name and relationship to speed up death benefit claims.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="registration-form" className="section-padding gradient-gold">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
                Start Your Protection Today
            </h2>
            <p className="text-navy/80 mb-8 max-w-2xl mx-auto text-lg">
                A small investment today for peace of mind tomorrow. Consult your needs with our team for FREE.
            </p>
            <QuoteButton cluster="pa" lang="en" variant="navy" className="!rounded-full !px-10 !py-4 !text-lg hover:-translate-y-1" />
          </div>
        </section>

      </main>
    </>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import QuoteButton from '@/components/quote/QuoteButton';
import { generateSEO } from '@/lib/seo';
import { 
  Building2, Users, ShieldCheck, FileText, Clock, ChevronRight, 
  MapPin, AlertTriangle, CheckCircle, ArrowRight, 
  Landmark, FileCheck, UserCheck, Car 
} from 'lucide-react';

// --- METADATA SEO SUPER OPTIMIZED (EN) ---
export const metadata: Metadata = generateSEO({
  title: 'Group Personal Accident Insurance Batam',
  description: 'Group Personal Accident (PA) Insurance for companies in Batam, Batamindo, Mukakuning, and KIKN. Coverage for factory, shipyard, & project workers. Fast claims process (1 working day), supplementing BPJS JKK.',
  canonical: 'https://asuransibatam.com/en/personal-accident-insurance/group-employee-pa',
  languages: {
    id: 'https://asuransibatam.com/asuransi-personal-accident/pa-karyawan-grup',
    en: 'https://asuransibatam.com/en/personal-accident-insurance/group-employee-pa',
  },
});

// --- JSON-LD SCHEMAS ---
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://asuransibatam.com" },
    { "@type": "ListItem", "position": 2, "name": "Personal Accident Insurance", "item": "https://asuransibatam.com/en/personal-accident-insurance" },
    { "@type": "ListItem", "position": 3, "name": "Group Employee PA", "item": "https://asuransibatam.com/en/personal-accident-insurance/group-employee-pa" }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Group Personal Accident Insurance - Asuransi Batam",
  "image": "https://asuransibatam.com/images/group-pa-batam.jpg",
  "url": "https://asuransibatam.com/en/personal-accident-insurance/group-employee-pa",
  "areaServed": {
    "@type": "City",
    "name": "Batam",
    "containsPlace": ["Batamindo Industrial Park", "Muka Kuning", "Tanjung Uncang", "Batu Ampar"]
  },
  "provider": {
    "@type": "InsuranceAgency",
    "name": "Asuransi Batam",
    "address": "Batam, Riau Islands, Indonesia"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between Group PA Insurance and BPJS JKK?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BPJS JKK focuses on medical treatment costs. Group PA Insurance provides direct cash compensation to the employee or heirs for income replacement during recovery, disability, or death. Group PA can also cover accidents outside working hours if the policy is set to 24-hour coverage."
      }
    },
    {
      "@type": "Question",
      "name": "How much is the premium for factory workers in Batam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Group PA premiums are very competitive, typically ranging from 0.1% to 0.5% of the Sum Insured per year, depending on the risk classification. Electronics factory workers (Low Risk) pay significantly less than shipyard workers (High Risk). Contact us for a specific quotation."
      }
    },
    {
      "@type": "Question",
      "name": "Can we include Expatriate employees in the policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our Group PA policy supports coverage for foreign workers (Expatriates) working on projects in Batam, with adjustments for coverage areas (domestic or regional)."
      }
    }
  ]
};

// --- KOMPONEN UTAMA ---
export default function GroupEmployeePA_EN() {
  return (
    <>
      {/* Inject Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-cream text-navy font-sans">
        
        {/* HERO SECTION */}
        <section className="gradient-navy text-cream section-padding pt-32 md:pt-40 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('/images/industrial-pattern.svg')]"></div>
          <div className="container mx-auto px-6 relative z-10">
            
            {/* Breadcrumb Visual */}
            <nav className="text-sm mb-6 opacity-80 flex items-center flex-wrap gap-2">
              <Link href="/en" className="hover:text-gold">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/en/personal-accident-insurance" className="hover:text-gold">Personal Accident Insurance</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gold font-semibold">Group Employee PA</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Group PA Insurance Batam: <span className="text-gradient-gold">Protect Your Company's</span> Greatest Asset
                </h1>
                <p className="text-lg text-cream/90 mb-8 leading-relaxed">
                  Does your company operate in Batamindo, Mukakuning, or Tanjung Uncang? Protect your workforce from workplace accident risks with our <strong>Group Personal Accident</strong> solution that supplements BPJS Ketenagakerjaan. Focus on productivity, let us handle the risks.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <QuoteButton cluster="pa" lang="en" variant="gold" className="!rounded-full !px-8 !py-3.5" />
                  <Link href="#case-study" className="inline-flex items-center justify-center gap-2 border-2 border-cream/50 hover:border-gold text-cream font-bold py-4 px-8 rounded-full transition-all">
                    View Claim Scenario
                  </Link>
                </div>
              </div>

              <div className="bg-navy-light/20 p-8 rounded-3xl border border-cream/10 backdrop-blur-sm">
                <h3 className="font-display text-2xl font-bold text-gold mb-6">Key Advantages of Our Scheme:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gold/20 rounded-lg">
                      <Landmark className="text-gold w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Top-Up for BPJS JKK</h4>
                      <p className="text-sm text-cream/70">Direct cash compensation above BPJS limits for additional treatment costs or income replacement.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gold/20 rounded-lg">
                      <Users className="text-gold w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Flexible Minimum Participants</h4>
                      <p className="text-sm text-cream/70">Starting from 5 participants for Batam SMEs up to thousands of employees for large factories.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gold/20 rounded-lg">
                      <MapPin className="text-gold w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Specific Local Coverage</h4>
                      <p className="text-sm text-cream/70">Deep understanding of risk classification for shipyards, electronics manufacturing, and construction projects in Batam.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: TARGET MARKET & LOCAL CONTEXT */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-gold font-bold uppercase tracking-widest text-sm">Batam Industrial Sectors</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
                Who Needs Group PA Insurance?
              </h2>
              <p className="text-navy/70 max-w-3xl mx-auto">
                As a free trade zone hub, Batam has unique workplace risk profiles. Here are the types of companies that must have this protection:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card Industri */}
              <div className="bg-cream p-6 rounded-2xl border border-navy/10 card-hover group">
                <div className="h-16 w-16 bg-navy/5 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                  <MapPin className="text-navy group-hover:text-gold w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">Shipyards & Marine</h3>
                <p className="text-navy/60 text-sm mb-3">
                  Location: Tanjung Uncang, Sekupang. High risks: Welding, working at heights, confined spaces. Risk Class: 3 (High Risk).
                </p>
                <span className="text-xs font-semibold text-gold bg-gold/10 py-1 px-3 rounded-full">High Priority</span>
              </div>

              <div className="bg-cream p-6 rounded-2xl border border-navy/10 card-hover group">
                <div className="h-16 w-16 bg-navy/5 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                  <Building2 className="text-navy group-hover:text-gold w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">Electronics Manufacturing</h3>
                <p className="text-navy/60 text-sm mb-3">
                  Location: Batamindo, Mukakuning. Medium risks: Assembly machinery, chemical exposure. Risk Class: 2 (Medium Risk).
                </p>
                <span className="text-xs font-semibold text-navy bg-navy/5 py-1 px-3 rounded-full">Medium Priority</span>
              </div>

              <div className="bg-cream p-6 rounded-2xl border border-navy/10 card-hover group">
                <div className="h-16 w-16 bg-navy/5 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                  <Car className="text-navy group-hover:text-gold w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">Logistics & Expeditions</h3>
                <p className="text-navy/60 text-sm mb-3">
                  Location: Sekupang Port, Batu Ampar. Risks: Loading/unloading, traffic accidents, forklifts. Risk Class: 2-3.
                </p>
                <span className="text-xs font-semibold text-navy bg-navy/5 py-1 px-3 rounded-full">High Priority</span>
              </div>

              <div className="bg-cream p-6 rounded-2xl border border-navy/10 card-hover group">
                <div className="h-16 w-16 bg-navy/5 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                  <Users className="text-navy group-hover:text-gold w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">Offices & Retail</h3>
                <p className="text-navy/60 text-sm mb-3">
                  Location: Nagoya, Batam Center. Low risks: Accidents during business travel or in office. Risk Class: 1 (Low Risk).
                </p>
                <span className="text-xs font-semibold text-green-600 bg-green-100 py-1 px-3 rounded-full">Standard</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: BENEFITS DETAIL & REQUIREMENTS */}
        <section className="section-padding bg-navy-light/5">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Left Column: Benefits */}
              <div>
                <h2 className="font-display text-3xl font-bold text-navy mb-8">
                  Detailed Coverage Benefits
                </h2>
                <p className="text-navy/70 mb-6">
                  Our policies are designed to provide tangible financial impact, not just formalities.
                </p>

                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-gold flex gap-4">
                    <ShieldCheck className="w-6 h-6 text-gold flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-navy">Death Benefit</h4>
                      <p className="text-sm text-navy/60">100% Sum Insured (SI) paid to designated heirs. Fast liquidation process without selling assets.</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-gold flex gap-4">
                    <ShieldCheck className="w-6 h-6 text-gold flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-navy">Permanent Disability</h4>
                      <p className="text-sm text-navy/60">Ranging from 1% to 100% SI based on standard industry disability tables (e.g., loss of fingers, eyesight, limbs).</p>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-gold flex gap-4">
                    <ShieldCheck className="w-6 h-6 text-gold flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-navy">Medical Expenses Reimbursement</h4>
                      <p className="text-sm text-navy/60">Coverage for hospitalization, outpatient care, and doctor procedures due to accidents. Cashless options available.</p>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-gold flex gap-4">
                    <ShieldCheck className="w-6 h-6 text-gold flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-navy">Daily Hospital Allowance</h4>
                      <p className="text-sm text-navy/60">Daily income replacement while the employee is hospitalized (e.g., IDR 100k - 300k/day).</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Requirements */}
              <div>
                <h2 className="font-display text-3xl font-bold text-navy mb-8">
                  Policy Requirements
                </h2>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="font-bold text-xl mb-4 text-navy">A. Registration Documents</h3>
                  <ul className="space-y-3 text-navy/80 mb-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span><strong>Proposal Form:</strong> Complete company data (NPWP, SIUP, NIB).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span><strong>Employee List:</strong> Full names, date of birth, specific occupation/job title.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span><strong>Job Description:</strong> Task descriptions for accurate premium rate determination.</span>
                    </li>
                  </ul>

                  <h3 className="font-bold text-xl mb-4 text-navy">B. Eligibility Criteria</h3>
                  <ul className="space-y-3 text-navy/80">
                    <li className="flex items-start gap-2">
                      <UserCheck className="w-5 h-5 text-gold mt-0.5" />
                      <span>Employee age between 17 - 65 years old.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <UserCheck className="w-5 h-5 text-gold mt-0.5" />
                      <span>Status: Permanent, contract, or daily workers (must be declared).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <UserCheck className="w-5 h-5 text-gold mt-0.5" />
                      <span>No pre-existing permanent disability or critical illness.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: CASE STUDY & CLAIMS (CRITICAL FOR EEAT) */}
        <section id="case-study" className="section-padding bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
                Case Study & Claim Scenario
              </h2>
              <p className="text-navy/70">Transparency in claim calculations so you are confident in your protection choice.</p>
            </div>

            {/* Case Study Card */}
            <div className="bg-gradient-to-br from-navy to-navy-mid p-8 md:p-12 rounded-3xl text-cream shadow-2xl max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-cream/60">Real Scenario</span>
                  <h3 className="font-display text-xl font-bold">Workplace Accident in Mukakuning Industrial Area</h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gold mb-2">Incident Chronology:</h4>
                  <p className="text-cream/80 text-sm leading-relaxed mb-4">
                    Mr. Budi (35), a machine operator at an electronics factory, suffered an injury while repairing a conveyor belt. His finger was severely injured requiring surgery. He was treated at RS Budi Kemuliaan Batam for 5 days. Medical costs were covered by BPJS, but he was unable to work for 2 months.
                  </p>
                  
                  <h4 className="font-bold text-gold mb-2">Policy Parameters:</h4>
                  <ul className="text-sm text-cream/80 space-y-1">
                    <li><strong>Sum Insured (SI):</strong> IDR 100,000,000</li>
                    <li><strong>Coverage:</strong> 24 Hours</li>
                    <li><strong>Annual Premium:</strong> Est. IDR 250,000/employee</li>
                  </ul>
                </div>

                <div className="bg-navy-light/30 p-6 rounded-xl border border-cream/10">
                  <h4 className="font-bold text-white mb-4 text-center">Claim Calculation Received</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between border-b border-cream/10 pb-2">
                      <span className="text-cream/70">Medical Reimbursement:</span>
                      <span className="font-bold">IDR 15,000,000</span>
                    </div>
                    <div className="flex justify-between border-b border-cream/10 pb-2">
                      <span className="text-cream/70">Disability Benefit (5% SI):</span>
                      <span className="font-bold">IDR 5,000,000</span>
                    </div>
                    <div className="flex justify-between border-b border-cream/10 pb-2">
                      <span className="text-cream/70">Hospital Allowance (5 days):</span>
                      <span className="font-bold">IDR 1,000,000</span>
                    </div>
                    <div className="flex justify-between bg-gold/20 p-3 rounded-lg mt-4">
                      <span className="font-bold text-gold">TOTAL PAYOUT:</span>
                      <span className="font-bold text-gold text-lg">IDR 21,000,000</span>
                    </div>
                  </div>
                  <p className="text-xs text-cream/50 mt-4 text-center">*Funds transferred to employee account within 3 working days</p>
                </div>
              </div>
            </div>

            {/* Process Timeline */}
            <div className="mt-16">
              <h3 className="font-display text-2xl font-bold text-navy text-center mb-8">Fast Claim Procedure in Batam</h3>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gold/20 hidden md:block"></div>
                <div className="space-y-8">
                  {/* Step 1 */}
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="w-10 h-10 bg-gold text-navy rounded-full flex items-center justify-center font-bold z-10">1</div>
                    <div className="bg-cream p-4 rounded-xl shadow-sm flex-1 border border-navy/5">
                      <h4 className="font-bold text-navy">Incident Reporting</h4>
                      <p className="text-sm text-navy/60">Contact our team via WhatsApp within 2x24 hours. In emergencies, focus on hospital care first.</p>
                    </div>
                  </div>
                  {/* Step 2 */}
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="w-10 h-10 bg-gold text-navy rounded-full flex items-center justify-center font-bold z-10">2</div>
                    <div className="bg-cream p-4 rounded-xl shadow-sm flex-1 border border-navy/5">
                      <h4 className="font-bold text-navy">Documentation</h4>
                      <p className="text-sm text-navy/60">Complete claim form, accident report from HRD/Police, medical reports, and ID copy.</p>
                    </div>
                  </div>
                  {/* Step 3 */}
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="w-10 h-10 bg-gold text-navy rounded-full flex items-center justify-center font-bold z-10">3</div>
                    <div className="bg-cream p-4 rounded-xl shadow-sm flex-1 border border-navy/5">
                      <h4 className="font-bold text-navy">Verification & Payout</h4>
                      <p className="text-sm text-navy/60">We process validation. Compensation is transferred to the employee or company account.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: FAQ EXPANDED */}
        <section className="section-padding bg-cream">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              
              <details className="group bg-white p-6 rounded-xl shadow-sm card-hover">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-navy text-lg">
                  Is the premium for shipyard workers higher?
                  <ChevronRight className="w-5 h-5 transform transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-navy/70 leading-relaxed">
                  Yes, generally shipyards fall under Risk Class 3 (High Risk). However, we have access to major insurers competitive in Batam, allowing us to negotiate the best premiums without reducing the sum insured.
                </p>
              </details>

              <details className="group bg-white p-6 rounded-xl shadow-sm card-hover">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-navy text-lg">
                  Is a commuting accident covered?
                  <ChevronRight className="w-5 h-5 transform transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-navy/70 leading-relaxed">
                  Yes, as long as the policy is set to "24 Hours" coverage. If the policy is "Business Hours" only, commuting accidents may not be covered unless it is a business trip. We highly recommend 24-hour coverage for maximum protection.
                </p>
              </details>

              <details className="group bg-white p-6 rounded-xl shadow-sm card-hover">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-navy text-lg">
                  What if the employee already has personal Life Insurance?
                  <ChevronRight className="w-5 h-5 transform transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-navy/70 leading-relaxed">
                  Group PA from the company acts as an "Overriding" or supplementary layer. Claims can be submitted to all parties (stacking). For example, if an employee has Personal Life Insurance and Group PA, heirs can receive benefits from both if the cause is an accident.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section id="free-consultation" className="section-padding gradient-gold">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
                Ready to Protect Your Team?
            </h2>
            <p className="text-navy/80 mb-8 max-w-2xl mx-auto text-lg">
                Don't let accident risks disrupt your company's financial stability and your employees' families. Contact us now for the best Group PA quote in Batam.
            </p>
            <QuoteButton cluster="pa" lang="en" variant="navy" className="!rounded-full !px-10 !py-4 !text-lg hover:-translate-y-1" />
          </div>
        </section>

      </main>
    </>
  );
}

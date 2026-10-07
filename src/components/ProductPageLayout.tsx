// components/ProductPageLayout.tsx
import Link from "next/link";
import CTASection from "./CTASection";
import AuthorAvatar from "./AuthorAvatar";
import CalculatorPromoCard, { type CalculatorCardVariant } from "./CalculatorPromoCard";
import SuretyQuoteButton from "./surety/SuretyQuoteButton";

interface FAQ { q: string; a: string; }
interface Benefit { icon: string; title: string; desc: string; href?: string; }
interface PolicyComparison { feature: string; basic: string; standard: string; comprehensive: string; }

interface ProductPageProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: Benefit[];
  faqs: FAQ[];
  policyComparison?: PolicyComparison[];
  breadcrumbs: { label: string; href: string }[];
  schema: Record<string, unknown>;
  /** Tombol kalkulator tambahan di CTA bawah (opsional), mis. kalkulator premi properti. */
  calculatorCta?: { label: string; href: string };
  /** Tampilkan kartu ajakan kalkulator premi properti (sub-halaman properti). */
  calculatorCard?: CalculatorCardVariant;
  /** Cluster surety bond: tombol "Minta Penawaran" (popup → WhatsApp) + tabel persyaratan penerbitan. */
  cluster?: "surety";
  children?: React.ReactNode;
}

export default function ProductPageLayout({
  title, subtitle, description,
  benefits, faqs, policyComparison,
  breadcrumbs, schema, calculatorCta, calculatorCard, cluster, children,
}: ProductPageProps) {
  // Detect language from first breadcrumb href
  const isEN = breadcrumbs[0]?.href?.startsWith("/en");
  const lang = isEN ? "en" : "id";

  const t = {
    home: isEN ? "Home" : "Beranda",
    homeHref: isEN ? "/en" : "/",
    benefitsTitle: isEN ? "Benefits & Coverage" : "Manfaat & Perlindungan",
    benefitsSubtitle: isEN ? "What does this insurance policy cover?" : "Apa saja yang dicakup dalam polis asuransi ini?",
    compareTitle: isEN ? "Policy Comparison" : "Perbandingan Polis",
    compareSubtitle: isEN ? "Choose the package that suits your needs" : "Pilih paket yang sesuai dengan kebutuhan Anda",
    compareNote: isEN ? "* Contact us for the best offer tailored to your needs" : "* Hubungi kami untuk penawaran terbaik sesuai kebutuhan Anda",
    faqTitle: isEN ? "Frequently Asked Questions" : "Pertanyaan Umum",
    faqSubtitle: isEN ? "Answers to commonly asked questions" : "Jawaban untuk pertanyaan yang sering ditanyakan",
    feature: isEN ? "Feature" : "Fitur",
    cta: isEN ? "Free Consultation" : "Konsultasi Gratis",
    authorSubtitle: isEN
      ? "Insurance Practitioner · 8+ Years Experience"
      : "Praktisi Asuransi · 8+ Tahun Pengalaman",
    reviewedBy: isEN ? "Reviewed by" : "Ditinjau oleh",
    phone: isEN
      ? "https://wa.me/6281373336728?text=Hello%20Rio%2C%20I%20would%20like%20to%20consult%20about%20insurance"
      : "https://wa.me/6281373336728?text=Halo%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi",
  };

  // BreadcrumbList JSON-LD — generated from the same breadcrumbs prop used for the visual nav.
  const breadcrumbListSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t.home,
        item: `https://asuransibatam.com${t.homeHref === "/" ? "" : t.homeHref}`,
      },
      ...breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: b.label,
        item: `https://asuransibatam.com${b.href}`,
      })),
    ],
  };

  // FAQPage JSON-LD — auto-generated from the faqs prop already used for the visual accordion.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
      />
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8 flex-wrap" aria-label="Breadcrumb">
            <Link href={t.homeHref} className="hover:text-[#c9a84c] transition-colors">{t.home}</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-2">
                <span>/</span>
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-[#c9a84c]">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-[#c9a84c] transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>

          <div className="max-w-3xl">
            <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-3">{subtitle}</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">{title}</h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">{description}</p>

            {/* EEAT author byline */}
            <div className="flex items-center gap-3 mb-8 pb-8 border-b border-white/10">
              <AuthorAvatar />
              <div>
                <div className="text-white/60 text-xs">{t.reviewedBy}</div>
                <div className="text-white font-medium text-sm">Rio Mardiansyah</div>
                <div className="text-white/50 text-xs">{t.authorSubtitle}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={t.phone}
                target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-[#c9a84c] to-[#f0d080] text-[#0a1628] font-bold rounded-xl hover:shadow-xl transition-all text-center"
              >
                {t.cta}
              </a>
              {cluster === "surety" ? (
                <SuretyQuoteButton lang={lang} variant="onDark" />
              ) : (
                <a
                  href="https://wa.me/6281373336728"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-center"
                >
                  WhatsApp Sekarang
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-2 text-center">{t.benefitsTitle}</h2>
          <p className="text-center text-[#475569] mb-12 max-w-2xl mx-auto">{t.benefitsSubtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => {
              const cardClass = "p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover block";
              const content = (
                <>
                  <div className="text-3xl mb-3">{b.icon}</div>
                  <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">{b.title}</h3>
                  <p className="text-[#475569] text-sm leading-relaxed">{b.desc}</p>
                </>
              );
              return b.href ? (
                <Link key={i} href={b.href} className={cardClass}>
                  {content}
                </Link>
              ) : (
                <div key={i} className={cardClass}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional content (children) */}
      {children && (
        <section className="section-padding bg-[#faf8f3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
        </section>
      )}

      {/* Kartu kalkulator premi properti (opsional) */}
      {calculatorCard && <CalculatorPromoCard lang={lang} variant={calculatorCard} />}

      {/* Policy comparison */}
      {policyComparison && (
        <section className="section-padding bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-2 text-center">{t.compareTitle}</h2>
            <p className="text-center text-[#475569] mb-10">{t.compareSubtitle}</p>
            <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0] shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0a1628]">
                    <th className="text-left py-4 px-6 text-white/70 font-medium text-sm">{t.feature}</th>
                    <th className="py-4 px-6 text-white font-display font-bold text-center">Basic</th>
                    <th className="py-4 px-6 text-[#c9a84c] font-display font-bold text-center">Standard</th>
                    <th className="py-4 px-6 text-[#f0d080] font-display font-bold text-center">Comprehensive</th>
                  </tr>
                </thead>
                <tbody>
                  {policyComparison.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                      <td className="py-3.5 px-6 text-[#0a1628] font-medium text-sm">{row.feature}</td>
                      <td className="py-3.5 px-6 text-center text-sm text-[#475569]">{row.basic}</td>
                      <td className="py-3.5 px-6 text-center text-sm text-[#0a1628] font-medium">{row.standard}</td>
                      <td className="py-3.5 px-6 text-center text-sm text-[#1a4fa0] font-bold">{row.comprehensive}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-sm text-[#475569] mt-4">{t.compareNote}</p>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-padding bg-[#faf8f3]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-2 text-center">{t.faqTitle}</h2>
          <p className="text-center text-[#475569] mb-10">{t.faqSubtitle}</p>
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

      {/* ✅ lang prop now passed so CTA defaults to correct language */}
      {/* Cluster surety: banner CTA bawah dihilangkan (tombol sudah ada di hero) */}
      {cluster !== "surety" && (
        <CTASection
          lang={lang}
          tertiaryLabel={calculatorCta?.label}
          tertiaryHref={calculatorCta?.href}
        />
      )}
    </>
  );
}

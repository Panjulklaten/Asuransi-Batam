// components/ArticleLayout.tsx
import Link from "next/link";
import CTASection from "./CTASection";
import SuretyQuoteCard from "./surety/SuretyQuoteCard";
import AuthorAvatar from "./AuthorAvatar";

interface Breadcrumb { label: string; href: string; }

interface ArticleLayoutProps {
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  breadcrumbs: Breadcrumb[];
  schema: Record<string, unknown>;
  /** Optional FAQPage JSON-LD. Pass the same object used for the visual FAQ list. */
  faqSchema?: Record<string, unknown>;
  /** Cluster surety bond: CTA bawah berupa satu kartu dengan tombol "Minta Penawaran" (popup → WhatsApp). */
  cluster?: "surety";
  /** @deprecated Tidak dipakai lagi — persyaratan penerbitan kini hanya ada di popup "Minta Penawaran". */
  suretyRequirements?: boolean;
  children: React.ReactNode;
}

export default function ArticleLayout({
  title, description, date, category, readTime,
  breadcrumbs, schema, faqSchema, cluster, children,
}: ArticleLayoutProps) {
  // Auto-detect language from breadcrumb href — same pattern as ProductPageLayout & Footer
  const isEN = breadcrumbs[0]?.href?.startsWith("/en");

  const t = {
    home:           isEN ? "Home"     : "Beranda",
    homeHref:       isEN ? "/en"      : "/",
    blog:           isEN ? "Blog"     : "Blog",
    blogHref:       isEN ? "/en/blog" : "/blog",
    readLabel:      isEN ? "read"     : "baca",
    authorSubtitle: isEN
      ? "Insurance Practitioner · 8+ Years Experience"
      : "Praktisi Asuransi · 8+ Tahun Pengalaman",
  };

  // BreadcrumbList JSON-LD — generated from the same breadcrumbs prop used for the visual nav,
  // so the two can never drift out of sync. Includes Home + Blog as the first two items,
  // matching what is actually rendered in the <nav> below.
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
      {
        "@type": "ListItem",
        position: 2,
        name: t.blog,
        item: `https://asuransibatam.com${t.blogHref}`,
      },
      ...breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 3,
        name: b.label,
        item: `https://asuransibatam.com${b.href}`,
      })),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <section className="pt-24 pb-12 bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8 flex-wrap">
            <Link href={t.homeHref} className="hover:text-[#c9a84c]">{t.home}</Link>
            <span>/</span>
            <Link href={t.blogHref} className="hover:text-[#c9a84c]">{t.blog}</Link>
            {breadcrumbs.map((b, i) => (
              <span key={b.href} className="flex items-center gap-2">
                <span>/</span>
                {i === breadcrumbs.length - 1
                  ? <span className="text-[#c9a84c]">{b.label}</span>
                  : <Link href={b.href} className="hover:text-[#c9a84c]">{b.label}</Link>}
              </span>
            ))}
          </nav>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-[#c9a84c]/20 text-[#c9a84c] text-sm font-semibold rounded-full border border-[#c9a84c]/30">
              {category}
            </span>
            <span className="text-white/50 text-sm">{date}</span>
            <span className="text-white/50 text-sm">· {readTime} {t.readLabel}</span>
          </div>

          {/* Heading */}
          <h1 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-white/70 text-lg">{description}</p>

          {/* Author */}
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/10">
            <AuthorAvatar />
            <div>
              <div className="text-white font-medium text-sm">Rio Mardiansyah</div>
              <div className="text-white/50 text-xs">{t.authorSubtitle}</div>
            </div>
          </div>

        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-[#0a1628] prose-p:text-[#374151] prose-p:leading-relaxed prose-a:text-[#1a4fa0] prose-strong:text-[#0a1628]">
            {children}
          </div>
        </div>
      </section>

      {/* Cluster surety: hanya satu kartu dengan satu tombol "Minta Penawaran" (popup). */}
      {cluster === "surety" ? (
        <SuretyQuoteCard lang={isEN ? "en" : "id"} />
      ) : (
        <CTASection lang={isEN ? "en" : "id"} />
      )}
    </>
  );
}

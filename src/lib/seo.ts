import type { Metadata } from "next";
import { SITE } from "./constants";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
  keywords?: string[];
  languages?: {
    id?: string;
    en?: string;
  };
}

const EN_BRAND = "Batam Insurance";

// ─── OG IMAGE PER CLUSTER ────────────────────────────────────────────────────
// Prefix path (ID & EN) → gambar cluster. Dicek urutan dari atas ke bawah,
// jadi taruh prefix yang lebih spesifik duluan kalau ada tumpang tindih.
const OG_IMAGE_BY_PREFIX: [string, string][] = [
  ["/asuransi-properti", "/images/og/og-properti.jpg"],
  ["/property-insurance", "/images/og/og-properti.jpg"],
  ["/asuransi-kendaraan", "/images/og/og-kendaraan.jpg"],
  ["/vehicle-insurance", "/images/og/og-kendaraan.jpg"],
  ["/kalkulator-premi-mobil", "/images/og/og-kendaraan.jpg"],
  ["/kalkulator-premi-motor", "/images/og/og-kendaraan.jpg"],
  ["/car-premium-calculator", "/images/og/og-kendaraan.jpg"],
  ["/motorcycle-premium-calculator", "/images/og/og-kendaraan.jpg"],
  ["/asuransi-machinery", "/images/og/og-machinery.jpg"],
  ["/machinery-insurance", "/images/og/og-machinery.jpg"],
  ["/asuransi-liability", "/images/og/og-liability.jpg"],
  ["/liability-insurance", "/images/og/og-liability.jpg"],
  ["/hazardous-waste-insurance-batam", "/images/og/og-liability.jpg"],
  ["/asuransi-engineering", "/images/og/og-engineering.jpg"],
  ["/engineering-insurance", "/images/og/og-engineering.jpg"],
  ["/asuransi-marine", "/images/og/og-marine.jpg"],
  ["/marine-insurance", "/images/og/og-marine.jpg"],
  ["/asuransi-surety-bond", "/images/og/og-surety-bond.jpg"],
  ["/surety-bond-insurance", "/images/og/og-surety-bond.jpg"],
  ["/difference-between-bid-bond-and-performance-bond", "/images/og/og-surety-bond.jpg"],
  ["/asuransi-personal-accident", "/images/og/og-personal-accident.jpg"],
  ["/personal-accident-insurance", "/images/og/og-personal-accident.jpg"],
  ["/asuransi-event", "/images/og/og-liability.jpg"], // fallback sampai og-event.jpg dibuat
  ["/event-insurance", "/images/og/og-liability.jpg"],
];

// Artikel blog tidak punya prefix cluster di URL-nya, jadi dipetakan manual
// per-slug (ID & EN pakai slug beda tapi konten sepadan → cluster sama).
const OG_IMAGE_BY_BLOG_SLUG: Record<string, string> = {
  // ── Machinery ──
  "asuransi-alat-berat-pertambangan": "machinery",
  "asuransi-alat-berat-proyek-konstruksi": "machinery",
  "asuransi-excavator-dan-bulldozer": "machinery",
  "excavator-and-bulldozer-insurance-batam": "machinery",
  "heavy-equipment-insurance-construction-projects": "machinery",
  "mining-heavy-equipment-insurance": "machinery",
  // ── Kendaraan ──
  "asuransi-dump-truck-batam-proyek-konstruksi": "kendaraan",
  "asuransi-motor-batam": "kendaraan",
  "cara-klaim-asuransi-mobil-batam": "kendaraan",
  "perbedaan-all-risk-dan-tlo": "kendaraan",
  "all-risk-vs-tlo-car-insurance": "kendaraan",
  "how-to-claim-car-insurance-batam": "kendaraan",
  // ── Marine ──
  "asuransi-cargo-ekspor-batam": "marine",
  "asuransi-pengiriman-batam-jakarta": "marine",
  "asuransi-pengiriman-batam-singapore": "marine",
  "asuransi-pengiriman-mesin-alat-berat": "marine",
  "berapa-premi-asuransi-builders-risk-kapal-batam": "marine",
  "builders-risk-untuk-galangan-kapal": "marine",
  "cara-klaim-asuransi-marine-cargo": "marine",
  "cara-mendapatkan-asuransi-builders-risk-batam": "marine",
  "jenis-jenis-asuransi-kapal-armada": "marine",
  "perbedaan-marine-hull-vs-cargo": "marine",
  "premi-asuransi-kapal-batam-2026": "marine",
  "premi-asuransi-marine-cargo-batam": "marine",
  "batam-export-cargo-insurance": "marine",
  "batam-jakarta-cargo-insurance": "marine",
  "batam-singapore-shipping-insurance": "marine",
  "builders-risk-shipyard-insurance-batam": "marine",
  "how-to-claim-marine-cargo-insurance": "marine",
  "how-to-get-builders-risk-insurance-batam": "marine",
  "machinery-heavy-equipment-shipping-insurance-batam": "marine",
  "marine-cargo-insurance-premium-batam": "marine",
  "marine-hull-vs-cargo-insurance": "marine",
  // ── Properti ──
  "asuransi-gudang-kawasan-industri-muka-kuning-batam": "properti",
  "asuransi-properti-komersial-batam": "properti",
  "cara-klaim-asuransi-kebakaran-rumah": "properti",
  "commercial-property-insurance-batam": "properti",
  "how-to-claim-home-fire-insurance": "properti",
  // ── Engineering ──
  "asuransi-erection-all-risk-batam": "engineering",
  "asuransi-proyek-konstruksi-batam": "engineering",
  "cara-klaim-asuransi-car": "engineering",
  "perbedaan-car-dan-ear": "engineering",
  "construction-project-insurance-batam": "engineering",
  "difference-between-car-and-ear-insurance": "engineering",
  "how-to-claim-car-insurance-project": "engineering",
  // ── Liability ──
  "asuransi-public-liability-batam-panduan-lengkap": "liability",
  "cara-klaim-asuransi-public-liability-batam": "liability",
  "employers-liability-product-liability-batam": "liability",
  "klaim-asuransi-limbah-b3-kawasan-industri-batam": "liability",
  "pentingnya-asuransi-limbah-b3": "liability",
  "hazardous-waste-insurance-batam": "liability",
  "asuransi-freight-forwarders-liability-batam-panduan-lengkap": "liability",
  "cara-klaim-asuransi-ffl-freight-forwarder-batam": "liability",
  "kawasan-logistik-pergudangan-batam-batu-ampar-sekupang-tanjung-uncang": "liability",
  // ── Surety Bond ──
  "biaya-premi-surety-bond-batam": "surety-bond",
  "cara-mendapatkan-surety-bond-tender-proyek-batam": "surety-bond",
  "checklist-dokumen-custom-bond-ditolak": "surety-bond",
  "custom-bond-galangan-kapal-batam": "surety-bond",
  "ob23-vs-kite-batam": "surety-bond",
  "panduan-ob23-impor-sementara-batam": "surety-bond",
  "perbedaan-bid-bond-performance-bond": "surety-bond",
  "temporary-import-guarantee-ob23-batam": "surety-bond",
  // ── Personal Accident ──
  "asuransi-kecelakaan-diri-pekerja-industri-batam": "personal-accident",
  // ── Asuransi Event (pakai og-liability sebagai fallback sampai og-event.jpg dibuat) ──
  "asuransi-konser-musik-batam": "liability",
  "asuransi-motorcross-batam": "liability",
  "asuransi-hole-in-one-golf-batam": "liability",
};

function detectOgImage(canonicalPath: string): string | undefined {
  // Rute EN ada di bawah /en/... (mis. /en/marine-insurance/marine-cargo).
  // Buang prefix /en supaya bisa dicocokkan ke tabel prefix yang sama.
  const normalized = canonicalPath.replace(/^\/en(?=\/|$)/, "") || "/";

  const match = OG_IMAGE_BY_PREFIX.find(([prefix]) =>
    normalized === prefix || normalized.startsWith(`${prefix}/`)
  );
  if (match) return match[1];

  // /blog/slug atau /en/blog/slug → cek peta slug artikel
  const slug = normalized.split("/").filter(Boolean).pop();
  if (slug && OG_IMAGE_BY_BLOG_SLUG[slug]) {
    return `/images/og/og-${OG_IMAGE_BY_BLOG_SLUG[slug]}.jpg`;
  }
  return undefined;
}

export function generateSEO({
  title,
  description,
  canonical,
  ogImage,
  noIndex = false,
  keywords,
  languages,
}: SEOProps): Metadata {
  const canonicalUrl = canonical
    ? canonical.startsWith("http") ? canonical : `${SITE.url}${canonical}`
    : SITE.url;

  // Deteksi bahasa halaman dari path canonical (/en atau /en/...)
  const canonicalPath = canonicalUrl.replace(SITE.url, "") || "/";
  const resolvedOgImage =
    ogImage ?? detectOgImage(canonicalPath) ?? "/images/og-default.jpg";
  const isEnglish = canonicalPath === "/en" || canonicalPath.startsWith("/en/");
  const brand = isEnglish ? EN_BRAND : SITE.name;
  const locale = isEnglish ? "en_US" : "id_ID";
  const alternateLocale = isEnglish ? "id_ID" : "en_US";

  const fullTitle =
    title.includes(SITE.name) || title.includes(EN_BRAND)
      ? title
      : `${title} | ${brand}`;

  return {
    // title.absolute mem-bypass title.template dari root/en layout, jadi
    // fullTitle di atas TIDAK ditumpuk lagi oleh layout (dulu ini penyebab
    // title dobel, mis. "... | Asuransi Batam | Asuransi Batam").
    title: { absolute: fullTitle },
    description,
    ...(keywords && { keywords }),
    ...(noIndex && { robots: { index: false, follow: false } }),
    alternates: {
      canonical: canonicalUrl,
      ...(languages && { languages }),
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE.name,
      type: "website",
      locale,
      ...(languages?.id && languages?.en && { alternateLocale }),
      images: [
        {
          url: `${SITE.url}${resolvedOgImage}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE.url}${resolvedOgImage}`],
    },
  };
}

// JSON-LD Schema helpers
export function schemaOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Batam Center",
      addressRegion: "Kepulauan Riau",
      addressCountry: "ID",
    },
    employee: {
      "@type": "Person",
      name: SITE.agent.name,
      jobTitle: SITE.agent.title,
      sameAs: SITE.agent.sameAs,
    },
    openingHours: "Mo-Fr 08:00-17:00",
    sameAs: [`https://wa.me/${SITE.phoneWA}`],
  };
}

export function schemaLocalBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.name,
    image: `${SITE.url}/images/og-default.jpg`,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Batam Center",
      addressLocality: "Batam",
      addressRegion: "Kepulauan Riau",
      postalCode: "29461",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 1.1277,
      longitude: 104.0196,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
  };
}

export function schemaInsuranceProduct(data: {
  name: string;
  description: string;
  url: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    description: data.description,
    url: `${SITE.url}${data.url}`,
    serviceType: data.category,
    provider: {
      "@type": "InsuranceAgency",
      name: SITE.name,
      telephone: SITE.phone,
    },
  };
}

export function schemaFAQ(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function schemaBreadcrumb(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE.url}${item.url}`,
    })),
  };
}

export function schemaArticle(data: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    url: `${SITE.url}${data.url}`,
    datePublished: data.datePublished,
    dateModified: data.dateModified,
    author: {
      "@type": "Person",
      name: data.authorName,
      sameAs: SITE.agent.sameAs,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };
}

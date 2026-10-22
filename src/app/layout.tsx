// app/layout.tsx  ← GANTI file yang lama dengan ini
import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HtmlLangSync from "@/components/HtmlLangSync";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asuransibatam.com"),
  title: {
    default: "Asuransi Batam – Praktisi Asuransi | Rio",
    template: "%s | Asuransi Batam",
  },
  description:
    "Rio, praktisi asuransi kerugian profesional di Batam. Solusi asuransi properti, kendaraan, alat berat, liability & engineering. Pengalaman 8+ tahun.",
  keywords: [
    "asuransi batam",
    "praktisi asuransi batam",
    "asuransi mobil batam",
    "asuransi properti batam",
    "asuransi alat berat batam",
  ],
  authors: [{ name: "Rio" }],
  creator: "Rio",
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",          // ← tambahan bilingual
    url: "https://asuransibatam.com",
    siteName: "Asuransi Batam",
    title: "Asuransi Batam – Praktisi Asuransi",
    description:
      "Praktisi asuransi kerugian profesional di Batam. Properti, kendaraan, alat berat, liability & engineering.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asuransi Batam – Rio",
    description: "Praktisi asuransi kerugian profesional di Batam",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // lang="id" adalah default statis (perlu untuk SSG). Untuk halaman /en/*,
    // <HtmlLangSync /> mengoreksi document.documentElement.lang ke "en" saat
    // render — didekati begini (bukan headers()/middleware) supaya SEMUA 140
    // halaman tetap bisa di-generate statis (SSG), tidak korbankan PageSpeed
    // 100 yang sudah dicapai. Googlebot me-render JS sepenuhnya jadi atribut
    // lang yang benar tetap terbaca saat indexing.
    <html lang="id" className={`${dmSans.variable} ${syne.variable}`}>
      {/*
        hreflang TIDAK di-hardcode di sini lagi.
        Setiap page.tsx sudah punya alternates.languages sendiri via generateSEO()
        atau metadata.alternates — itu satu-satunya sumber hreflang per halaman.
        Hardcode global sebelumnya bikin SETIAP halaman punya 2 set hreflang
        yang saling konflik (satu nunjuk ke homepage, satu nunjuk ke halaman
        sebenarnya), yang membuat Google mengabaikan sinyal hreflang.
      */}
      <body className="font-sans antialiased">
        <HtmlLangSync />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

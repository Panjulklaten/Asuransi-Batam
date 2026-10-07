import Link from "next/link";
import SuretyQuoteButton from "./surety/SuretyQuoteButton";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  waMsg?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  /** Tombol ketiga (opsional). Hanya tampil bila label dan href diisi. */
  tertiaryLabel?: string;
  tertiaryHref?: string;
  /** Pass "en" to use English defaults. All explicit props still override. */
  lang?: "id" | "en";
  /**
   * Cluster halaman. "surety" mengganti tombol sekunder (kalkulator premi mobil yang
   * tidak relevan) dengan tombol "Minta Penawaran" yang membuka popup form → WhatsApp admin.
   */
  cluster?: "surety";
}

const DEFAULTS = {
  id: {
    title: "Siap Melindungi Aset Anda?",
    subtitle: "Konsultasikan kebutuhan asuransi Anda bersama Rio, Praktisi asuransi terpercaya di Batam.",
    primaryLabel: "Konsultasi Gratis via WhatsApp",
    secondaryLabel: "Hitung Premi Mobil",
    secondaryHref: "/kalkulator-premi-mobil",
    waMsg: "Halo%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi",
  },
  en: {
    title: "Ready to Protect Your Assets?",
    subtitle: "Consult with Rio, your trusted insurance practitioner in Batam. Free, fast, and tailored to your needs.",
    primaryLabel: "Free Consultation via WhatsApp",
    secondaryLabel: "Calculate Car Premium",
    secondaryHref: "/en/car-premium-calculator",
    waMsg: "Hello%20Rio%2C%20I%20would%20like%20to%20consult%20about%20insurance",
  },
};

export default function CTASection({
  lang = "id",
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  waMsg,
  secondaryLabel,
  secondaryHref,
  tertiaryLabel,
  tertiaryHref,
  cluster,
}: CTASectionProps) {
  const d = DEFAULTS[lang];

  const resolvedTitle         = title         ?? d.title;
  const resolvedSubtitle      = subtitle      ?? d.subtitle;
  const resolvedPrimaryLabel  = primaryLabel  ?? d.primaryLabel;
  const resolvedSecondaryLabel = secondaryLabel ?? d.secondaryLabel;
  const resolvedSecondaryHref  = secondaryHref ?? d.secondaryHref;
  const resolvedWaMsg         = waMsg         ?? d.waMsg;
  const resolvedHref          = primaryHref   ?? `https://wa.me/6281373336728?text=${resolvedWaMsg}`;

  return (
    <section className="py-20 bg-gradient-to-r from-[#0a1628] to-[#1a4fa0] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a84c]/10 rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#c9a84c]/10 rounded-full translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
          {resolvedTitle}
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">{resolvedSubtitle}</p>
        <div className={`flex flex-col sm:flex-row gap-4 justify-center${tertiaryLabel && tertiaryHref ? " sm:flex-wrap" : ""}`}>
          <a
            href={resolvedHref}
            target={resolvedHref.startsWith("http") ? "_blank" : undefined}
            rel={resolvedHref.startsWith("http") ? "noopener noreferrer" : undefined}
            className="px-8 py-4 bg-gradient-to-r from-[#c9a84c] to-[#f0d080] text-[#0a1628] font-bold rounded-xl hover:shadow-xl hover:shadow-[#c9a84c]/30 transition-all text-center"
          >
            {resolvedPrimaryLabel}
          </a>
          {cluster === "surety" ? (
            <SuretyQuoteButton lang={lang} variant="onDark" />
          ) : (
            <Link
              href={resolvedSecondaryHref}
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-center"
            >
              {resolvedSecondaryLabel}
            </Link>
          )}
          {tertiaryLabel && tertiaryHref && (
            <Link
              href={tertiaryHref}
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-center"
            >
              {tertiaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

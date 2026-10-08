// Server components only – no hooks, no "use client"
import Link from "next/link";
import { ChevronRight, Star } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

// ─── Breadcrumb ───────────────────────────────────────────────
interface BreadcrumbItem {
  label: string;
  href?: string;
}
export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-6">
      {items.map((item, idx) => (
        <span key={idx} className="flex items-center gap-1.5">
          {item.href ? (
            <Link href={item.href} className="hover:text-blue-600 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-700 font-medium">{item.label}</span>
          )}
          {idx < items.length - 1 && <ChevronRight size={14} />}
        </span>
      ))}
    </nav>
  );
}

// ─── CTA Section ─────────────────────────────────────────────
export function CTASection({
  title = "Siap Melindungi Aset Anda?",
  subtitle = "Konsultasi gratis dengan Rio. Dapatkan penawaran terbaik sesuai kebutuhan Anda.",
  waMsg = "Halo Rio, saya ingin konsultasi asuransi",
}: {
  title?: string;
  subtitle?: string;
  waMsg?: string;
}) {
  return (
    <section
      className="py-16 px-4 text-center"
      style={{
        background: "linear-gradient(135deg, #0a1628 0%, #1a4fa0 50%, #0a1628 100%)",
      }}
    >
      <h2
        className="text-2xl md:text-3xl font-bold text-white mb-3"
        style={{ fontFamily: "Syne, sans-serif" }}
      >
        {title}
      </h2>
      <p className="text-gray-300 mb-8 max-w-xl mx-auto">{subtitle}</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href={WHATSAPP_URL(waMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold rounded-xl transition-all hover:scale-105"
          style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)", color: "#0a1628" }}
        >
          Konsultasi Gratis
        </a>
        <Link
          href="/kalkulator-premi-mobil"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold text-white border-2 border-white/30 rounded-xl hover:border-yellow-400 hover:text-yellow-400 transition-all"
        >
          Hitung Premi
        </Link>
      </div>
    </section>
  );
}

// ─── Star Rating ─────────────────────────────────────────────
export function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          style={{ color: i < rating ? "#c9a84c" : "#d1d5db", fill: i < rating ? "#c9a84c" : "none" }}
        />
      ))}
    </div>
  );
}

// ─── Section Header ──────────────────────────────────────────
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <span
          className="inline-block text-sm font-semibold uppercase tracking-wider mb-2 px-3 py-1 rounded-full"
          style={{ background: "#f0d08040", color: "#a07830" }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="text-3xl md:text-4xl font-bold mb-3"
        style={{ fontFamily: "Syne, sans-serif", color: "#0a1628" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-gray-600 text-lg max-w-2xl ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Product Page Hero ──────────────────────────────────────
export function ProductPageHero({
  tag,
  title,
  subtitle,
  waMsg,
}: {
  tag: string;
  title: string;
  subtitle: string;
  waMsg: string;
}) {
  return (
    <section
      className="pt-32 pb-16 px-4"
      style={{
        background: "linear-gradient(135deg, #0a1628 0%, #132040 60%, #1e3a6e 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <span
          className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
          style={{ background: "#c9a84c20", color: "#f0d080" }}
        >
          {tag}
        </span>
        <h1
          className="text-3xl md:text-5xl font-bold text-white mb-5"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          {title}
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={WHATSAPP_URL(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold rounded-xl"
            style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)", color: "#0a1628" }}
          >
            Konsultasi Sekarang
          </a>
          <Link
            href="/kalkulator-premi-mobil"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold text-white border border-white/30 rounded-xl hover:border-yellow-400 hover:text-yellow-400 transition-all"
          >
            Hitung Premi
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calculator } from "lucide-react";
import { QUOTE_CLUSTERS, type Lang, type QuoteClusterKey } from "@/lib/quote";

const VARIANTS = {
  gold: "btn-shimmer bg-gradient-to-r from-[#c9a84c] to-[#f0d080] text-[#0a1628] shadow-lg shadow-[#c9a84c]/20 hover:shadow-xl hover:shadow-[#c9a84c]/30",
  onDark: "border-2 border-white/30 text-white hover:border-[#c9a84c] hover:bg-white/10",
} as const;

/** Tombol menuju kalkulator premi yang sesuai halaman. Tidak tampil bila jenis produknya tidak punya kalkulator. */
export default function QuoteCalcButton({
  cluster,
  lang,
  variant = "onDark",
  className = "",
}: {
  cluster: QuoteClusterKey;
  lang: Lang;
  variant?: keyof typeof VARIANTS;
  className?: string;
}) {
  const pathname = usePathname() ?? "";
  const config = QUOTE_CLUSTERS[cluster];
  const calc = config.calculator?.(config.inferType(pathname), lang, pathname);
  if (!calc) return null;
  return (
    <Link
      href={calc.href}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-center font-bold transition-all active:scale-[0.98] ${VARIANTS[variant]} ${className}`}
    >
      <Calculator size={18} className={variant === "onDark" ? "text-[#c9a84c]" : ""} />
      <span>{calc.label}</span>
    </Link>
  );
}

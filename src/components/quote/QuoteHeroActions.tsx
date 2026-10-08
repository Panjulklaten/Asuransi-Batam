"use client";
import { usePathname } from "next/navigation";
import QuoteButton from "./QuoteButton";
import QuoteCalcButton from "./QuoteCalcButton";
import { QUOTE_CLUSTERS, type Lang, type QuoteClusterKey } from "@/lib/quote";

/**
 * Tombol hero untuk cluster tanpa tombol WhatsApp (properti, kendaraan, engineering, machinery):
 * [Hitung Premi] + [Minta Penawaran]. WhatsApp tidak ditampilkan di sini karena sudah ada tombol WA melayang.
 * Halaman tanpa kalkulator (mis. dump truck, engineering, machinery) hanya menampilkan "Minta Penawaran" sebagai aksi utama.
 */
export default function QuoteHeroActions({ cluster, lang }: { cluster: QuoteClusterKey; lang: Lang }) {
  const pathname = usePathname() ?? "";
  const config = QUOTE_CLUSTERS[cluster];
  const hasCalc = !!config.calculator?.(config.inferType(pathname), lang, pathname);
  return hasCalc ? (
    <>
      <QuoteCalcButton cluster={cluster} lang={lang} variant="gold" />
      <QuoteButton cluster={cluster} lang={lang} variant="onDark" />
    </>
  ) : (
    <QuoteButton cluster={cluster} lang={lang} variant="gold" />
  );
}

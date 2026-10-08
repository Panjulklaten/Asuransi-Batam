"use client";
import { usePathname } from "next/navigation";
import QuoteButton from "./QuoteButton";
import QuoteCalcButton from "./QuoteCalcButton";
import type { Lang, QuoteClusterKey } from "@/lib/quote";

const T = {
  id: {
    text: "Siap mengajukan? Isi data singkat, tim kami analisa awalnya.",
    btn: "Minta Penawaran",
  },
  en: {
    text: "Ready to apply? Fill in a short form and we'll do the initial assessment.",
    btn: "Request a Quote",
  },
} as const;

/**
 * CTA bawah halaman cluster produk: kartu navy dengan tombol "Minta Penawaran" (emas, shimmer) → popup.
 * Untuk cluster yang punya kalkulator premi (properti, kendaraan), ditambah satu tombol kalkulator.
 */
export default function QuoteCard({ cluster, lang: langProp }: { cluster: QuoteClusterKey; lang?: Lang }) {
  const pathname = usePathname();
  const lang: Lang = langProp ?? (pathname?.startsWith("/en") ? "en" : "id");
  const t = T[lang];

  return (
    <section className="border-t border-[#e2e8f0] bg-[#faf8f3] py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-[#0a1628] to-[#1a4fa0] p-6 sm:flex-row">
          <p className="max-w-xl text-center text-sm text-white/80 sm:text-left">{t.text}</p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <QuoteCalcButton cluster={cluster} lang={lang} variant="onDark" />
            <QuoteButton cluster={cluster} lang={lang} variant="gold" label={t.btn} />
          </div>
        </div>
      </div>
    </section>
  );
}

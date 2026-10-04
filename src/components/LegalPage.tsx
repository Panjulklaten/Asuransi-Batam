import type { ReactNode } from "react";
import Link from "next/link";

export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <section className="pt-24 pb-10 bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-white/50 mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Beranda</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/80">{title}</span>
          </nav>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white">{title}</h1>
          <p className="mt-3 text-white/60 text-sm">Terakhir diperbarui: {updated}</p>
        </div>
      </section>
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-[#1e293b] leading-relaxed [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-xl [&_h2]:text-[#0a1628] [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-3 [&_li]:mb-1.5 [&_a]:text-[#1a4fa0] [&_a]:underline">
          {children}
        </div>
      </section>
    </>
  );
}

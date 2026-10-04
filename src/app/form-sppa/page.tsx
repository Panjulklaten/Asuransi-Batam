import type { Metadata } from "next";
import Link from "next/link";
import SppaWizard from "@/components/sppa/SppaWizard";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Form SPPA Online – Pengajuan Asuransi Kerugian",
  description:
    "Ajukan SPPA online untuk asuransi Engineering, Marine Hull, Marine Cargo, dan Personal Accident. Isi bertahap lewat HP, tim kami menghubungi Anda untuk proses selanjutnya.",
  canonical: "https://asuransibatam.com/form-sppa",
});

const breadcrumbListSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://asuransibatam.com" },
    { "@type": "ListItem", position: 2, name: "Form SPPA", item: "https://asuransibatam.com/form-sppa" },
  ],
};

export default function FormSppaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }} />
      <section className="pt-24 pb-10 bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-white/50 mb-5 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Beranda</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/80">Form SPPA</span>
          </nav>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white">Form SPPA Online</h1>
          <p className="mt-3 text-white/70 text-sm sm:text-base leading-relaxed">
            Surat Permohonan Penutupan Asuransi untuk Engineering, Marine Hull, Marine Cargo, dan Personal Accident. Pertanyaan menyesuaikan produk yang Anda pilih.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-12 bg-[#faf8f3]">
        <div className="max-w-2xl mx-auto px-4">
          <SppaWizard />
          <p className="mt-6 text-center text-xs text-[#64748b] leading-relaxed">
            Mengirim formulir ini belum berarti risiko otomatis diterima atau ditutup. Data Anda hanya digunakan untuk proses pengajuan asuransi sesuai{" "}
            <Link href="/kebijakan-privasi" className="underline">Kebijakan Privasi</Link>.
          </p>
        </div>
      </section>
    </>
  );
}

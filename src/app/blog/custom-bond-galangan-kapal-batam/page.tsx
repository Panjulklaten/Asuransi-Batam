import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import { Anchor, Ship, Wrench, Clock, Factory } from "lucide-react";
import SuretyQuoteCard from "@/components/surety/SuretyQuoteCard";

export const metadata: Metadata = generateSEO({
  title: "Custom Bond untuk Galangan Kapal Batam: Panduan Lengkap Impor Peralatan Proyek",
  description: "Galangan kapal di Tanjung Uncang, Kabil, dan Sekupang butuh strategi kepabeanan yang tepat untuk peralatan dan unit asing. Ini cara kerja custom bond untuk industri shipyard Batam.",
  keywords: [
    "custom bond galangan kapal",
    "asuransi kepabeanan galangan kapal batam",
    "custom bond shipyard batam",
    "kawasan berikat galangan kapal",
    "impor peralatan kapal batam",
  ],
  canonical: "https://asuransibatam.com/blog/custom-bond-galangan-kapal-batam",
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Custom Bond untuk Galangan Kapal Batam: Panduan Lengkap Impor Peralatan Proyek",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  author: { "@type": "Organization", name: "Tim Asuransi Batam", url: "https://asuransibatam.com" },
  publisher: { "@type": "Organization", name: "Asuransi Batam – Rio", url: "https://asuransibatam.com" },
};

const breadcrumbListSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://asuransibatam.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://asuransibatam.com/blog" },
    { "@type": "ListItem", position: 3, name: "Surety Bond", item: "https://asuransibatam.com/asuransi-surety-bond" },
    { "@type": "ListItem", position: 4, name: "Custom Bond Galangan Kapal", item: "https://asuransibatam.com/blog/custom-bond-galangan-kapal-batam" },
  ],
};

const faqs = [
  { q: "Kenapa galangan kapal di Batam sering butuh dua fasilitas kepabeanan sekaligus?", a: "Karena aktivitasnya bercampur: material dan komponen kapal yang diolah menjadi produk jadi (masuk skema Kawasan Berikat), sementara alat berat, unit uji, dan peralatan tenaga ahli asing yang sifatnya sementara dan tidak diolah (masuk skema OB 23). Keduanya butuh custom bond terpisah sesuai fungsinya." },
  { q: "Apakah kapal asing yang masuk untuk direparasi di Batam butuh custom bond?", a: "Tergantung skema yang digunakan galangan. Jika kapal masuk sebagai objek jasa reparasi tanpa impor barang dalam jumlah signifikan, biasanya tidak perlu custom bond terpisah. Namun jika ada komponen atau spare part yang diimpor khusus untuk pekerjaan tersebut dan harus dikeluarkan lagi, custom bond tetap relevan." },
  { q: "Berapa lama proyek konversi FPSO biasanya membutuhkan custom bond aktif?", a: "Proyek konversi FPSO di Batam bisa berlangsung 6 bulan hingga lebih dari 1 tahun. Custom bond untuk peralatan asing yang dipakai selama proyek perlu disesuaikan tenornya dengan estimasi durasi proyek, dan diperpanjang jika pekerjaan molor dari jadwal awal." },
  { q: "Apa yang terjadi jika galangan tidak mengurus custom bond dan ketahuan saat inspeksi Bea Cukai?", a: "Bea Cukai dapat menahan barang, menagih Bea Masuk dan PPN penuh secara retroaktif, serta mengenakan sanksi administrasi. Untuk galangan besar dengan proyek bernilai puluhan hingga ratusan miliar rupiah, risiko ini jauh lebih mahal dibanding biaya premi custom bond itu sendiri." },
];

export default function CustomBondGalanganKapalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />

      {/* HERO — tema industrial amber/oranye */}
      <section className="relative bg-gradient-to-br from-[#1a1408] via-[#2b1f0e] to-[#7c4a12] overflow-hidden pt-24 pb-16">
        <div className="absolute top-10 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white/80 transition-colors">Blog</Link>
            <span>/</span>
            <Link href="/asuransi-surety-bond" className="hover:text-amber-400 transition-colors">Surety Bond</Link>
            <span>/</span>
            <span className="text-white/70">Custom Bond Galangan Kapal</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold mb-6">
            <Anchor className="w-4 h-4" />
            Industri Maritim & Galangan Kapal
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
            Custom Bond untuk<br />Galangan Kapal Batam
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-3xl">
            Batam adalah pusat industri galangan kapal terbesar di Indonesia — dan itu berarti
            lalu lintas impor peralatan proyek yang sangat tinggi. Ini cara mengelola kepabeanannya
            dengan benar.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 5 Juli 2026</span>
            <span>•</span>
            <span>Tim Asuransi Batam</span>
            <span>•</span>
            <span>±8 menit baca</span>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Konteks industri */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-4">
            Batam: Jantung Industri Galangan Kapal Indonesia
          </h2>
          <p className="text-[#374151] leading-relaxed mb-4">
            Sejak era 1980-an, kawasan <strong>Tanjung Uncang, Kabil, Sekupang, dan Batu Ampar</strong>{" "}
            berkembang menjadi pusat industri maritim dengan lebih dari 135 perusahaan galangan
            dan fabrikasi lepas pantai. Batam saat ini dikenal sebagai kawasan industri galangan
            kapal terbesar di Indonesia, dengan proyek-proyek besar seperti konversi FPSO
            (Floating Production Storage and Offloading) yang nilainya bisa mencapai ratusan juta
            dolar AS berjalan bersamaan di Tanjung Uncang dan Kabil.
          </p>
          <p className="text-[#374151] leading-relaxed">
            Skala proyek sebesar itu selalu melibatkan peralatan, unit kerja, dan tenaga ahli
            asing yang didatangkan sementara — mulai dari crane barge, ROV (Remotely Operated
            Vehicle), mesin las bawah air, hingga instrumen kalibrasi presisi. Semua ini butuh
            jalur kepabeanan yang tepat agar proyek tidak tersendat di pelabuhan.
          </p>
        </section>

        {/* Skema ganda */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-3">
            Dua Skema yang Biasa Berjalan Beriringan
          </h2>
          <p className="text-[#475569] leading-relaxed mb-8">
            Galangan kapal jarang hanya memakai satu jenis fasilitas kepabeanan. Berikut kombinasi yang paling umum:
          </p>
          <div className="space-y-5">
            <div className="flex gap-4 p-5 rounded-2xl bg-orange-50 border border-orange-200">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-orange-500 shrink-0">
                <Factory className="w-5 h-5 text-white" />
              </span>
              <div>
                <p className="font-display font-bold text-orange-950 mb-1">Kawasan Berikat (Kaber) — untuk material yang diolah</p>
                <p className="text-orange-900 text-sm leading-relaxed">
                  Pelat baja, pipa, dan komponen kapal yang diimpor untuk difabrikasi menjadi
                  bagian kapal atau struktur lepas pantai. Barang ini mengalami perubahan bentuk
                  sebelum menjadi produk akhir.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-2xl bg-amber-50 border border-amber-200">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-amber-500 shrink-0">
                <Wrench className="w-5 h-5 text-white" />
              </span>
              <div>
                <p className="font-display font-bold text-amber-950 mb-1">OB 23 — untuk unit kerja yang tidak diolah</p>
                <p className="text-amber-900 text-sm leading-relaxed">
                  Crane barge, ROV, generator las bawah air, dan peralatan tenaga ahli asing yang
                  dipakai sementara selama proyek berlangsung, lalu dibawa kembali keluar negeri
                  setelah pekerjaan selesai.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case study naratif */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-6">Studi Kasus: Proyek Konversi FPSO di Tanjung Uncang</h2>
          <div className="relative border-l-2 border-amber-300 pl-8 space-y-8 ml-2">
            <div className="relative">
              <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-amber-500 border-4 border-white shadow" />
              <p className="font-display font-bold text-[#0a1628] text-sm mb-1">Bulan 1 — Mobilisasi Peralatan</p>
              <p className="text-[#475569] text-sm leading-relaxed">
                Galangan menerima kontrak konversi FPSO dari operator migas asing. Kontraktor
                teknis membawa masuk crane barge dan unit welding otomatis senilai total sekitar{" "}
                <strong>Rp 12 miliar</strong> — seluruhnya akan dibawa kembali setelah proyek
                selesai. Tim legal galangan mengajukan OB 23 dan menerbitkan custom bond senilai
                potensi Bea Masuk yang dibebaskan.
              </p>
            </div>
            <div className="relative">
              <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-orange-500 border-4 border-white shadow" />
              <p className="font-display font-bold text-[#0a1628] text-sm mb-1">Bulan 2–8 — Fabrikasi Berjalan</p>
              <p className="text-[#475569] text-sm leading-relaxed">
                Bersamaan dengan itu, pelat baja dan pipa untuk modifikasi struktur FPSO diimpor
                melalui skema Kawasan Berikat karena akan diproses menjadi bagian struktur baru —
                bukan dikembalikan dalam bentuk semula.
              </p>
            </div>
            <div className="relative">
              <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-amber-500 border-4 border-white shadow" />
              <p className="font-display font-bold text-[#0a1628] text-sm mb-1">Bulan 9 — Proyek Molor 1 Bulan</p>
              <p className="text-[#475569] text-sm leading-relaxed">
                Cuaca laut yang buruk menunda jadwal penyelesaian. Karena custom bond OB 23 akan
                jatuh tempo, tim galangan mengajukan perpanjangan 14 hari sebelum masa berlaku
                habis — menghindari denda keterlambatan re-ekspor.
              </p>
            </div>
            <div className="relative">
              <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-green-500 border-4 border-white shadow" />
              <p className="font-display font-bold text-[#0a1628] text-sm mb-1">Bulan 10 — Selesai & Custom Bond Ditutup</p>
              <p className="text-[#475569] text-sm leading-relaxed">
                Crane barge dan unit welding diekspor kembali dengan dokumen PEB lengkap. Custom
                bond OB 23 ditutup tanpa klaim. FPSO hasil konversi berlayar keluar dari Tanjung Uncang.
              </p>
            </div>
          </div>
        </section>

        {/* Peralatan yang umum masuk skema ini */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-6">
            Peralatan yang Umum Menggunakan Custom Bond di Galangan Kapal
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Ship, text: "Crane barge dan unit angkat berat untuk instalasi lepas pantai" },
              { icon: Wrench, text: "Mesin las bawah air dan peralatan inspeksi lambung kapal" },
              { icon: Factory, text: "ROV (Remotely Operated Vehicle) untuk inspeksi bawah laut" },
              { icon: Anchor, text: "Unit kalibrasi dan alat ukur presisi milik tenaga ahli asing" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#fff7ed] border border-orange-100">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-500 shrink-0">
                  <item.icon className="w-4 h-4 text-white" strokeWidth={2} />
                </span>
                <span className="text-sm text-[#0a1628] leading-relaxed pt-1">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <p className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-2">FAQ</p>
            <h2 className="font-display font-bold text-3xl text-[#0a1628]">Pertanyaan yang Sering Diajukan</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-display font-semibold text-[#0a1628] hover:text-amber-700 transition-colors list-none">
                  {faq.q}
                  <span className="ml-4 text-amber-500 text-xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 text-[#475569] text-sm leading-relaxed border-t border-[#e2e8f0] pt-4">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* Related links */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-xl text-[#0a1628] mb-5">Artikel & Halaman Terkait</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Custom Bond Batam", href: "/asuransi-surety-bond/custom-bond", desc: "Halaman produk lengkap: OB 23, KITE, Kawasan Berikat, dan PPJK" },
              { title: "OB 23 vs KITE", href: "/blog/ob23-vs-kite-batam", desc: "Cara menentukan fasilitas yang tepat untuk bisnis Anda" },
              { title: "Panduan OB 23 Batam", href: "/blog/panduan-ob23-impor-sementara-batam", desc: "Cara mengurus impor sementara untuk pameran dan proyek" },
              { title: "Builders Risk untuk Galangan Kapal", href: "/blog/builders-risk-untuk-galangan-kapal", desc: "Lindungi proyek konstruksi kapal dari risiko kerusakan" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="group flex items-start gap-3 p-4 bg-[#fff7ed] rounded-xl border border-orange-100 hover:border-amber-300 hover:shadow-md transition-all">
                <Ship className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#0a1628] group-hover:text-amber-700 transition-colors text-sm">{link.title}</div>
                  <div className="text-[#475569] text-xs mt-0.5">{link.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="border-t border-[#e2e8f0] pt-8">
          <p className="text-[#94a3b8] text-xs leading-relaxed italic">
            Artikel ini disusun berdasarkan praktik pasar penjaminan kepabeanan dan gambaran umum
            aktivitas industri galangan kapal di Batam. Skema kepabeanan aktual harus disesuaikan
            dengan kondisi spesifik proyek masing-masing perusahaan. Untuk kebutuhan spesifik,
            konsultasikan langsung dengan tim kami.
          </p>
        </div>
      </article>
      <SuretyQuoteCard />
    </>
  );
}

import type { Metadata } from "next";
import { generateSEO, schemaInsuranceProduct, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { Breadcrumb, SectionHeader } from "@/components/ui/index";
import QuoteButton from "@/components/quote/QuoteButton";
import QuoteCard from "@/components/quote/QuoteCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Hammer, CheckCircle2 } from "lucide-react";

// Contractor All Risk
export const metadata: Metadata = generateSEO({
  title: "Contractor All Risk (CAR) Insurance Batam – Asuransi Proyek Konstruksi | Asuransi Batam",
  description: "Contractor All Risk Insurance di Batam untuk proyek konstruksi gedung, jalan, jembatan, dan infrastruktur. Perlindungan material & TPL. Konsultasi dengan Rio!",
  canonical: "https://asuransibatam.com/asuransi-engineering/contractor-all-risk",
  languages: {
    id: "https://asuransibatam.com/asuransi-engineering/contractor-all-risk",
    en: "https://asuransibatam.com/en/engineering-insurance/contractor-all-risk",
  },
});

const FAQS = [
  {
    q: "Apa itu Contractor All Risk (CAR) Insurance?",
    a: "CAR Insurance adalah asuransi proyek konstruksi yang melindungi kontraktor dari risiko kerugian selama masa pembangunan, mulai dari kerusakan material, peralatan konstruksi, hingga tanggung jawab hukum kepada pihak ketiga.",
  },
  {
    q: "Proyek apa saja yang cocok menggunakan CAR?",
    a: "CAR cocok untuk semua jenis proyek konstruksi: gedung bertingkat, perumahan, jalan & jembatan, pelabuhan, bendungan, dan proyek infrastruktur lainnya.",
  },
  {
    q: "Apakah CAR Insurance wajib?",
    a: "Untuk proyek pemerintah dan tender besar, CAR Insurance seringkali diwajibkan dalam dokumen kontrak. Untuk proyek swasta, sangat direkomendasikan untuk melindungi nilai investasi.",
  },
  {
    q: "Berapa lama periode pertanggungan CAR?",
    a: "CAR biasanya mengikuti periode konstruksi proyek, plus maintenance period (biasanya 12 bulan setelah proyek selesai). Premi dihitung berdasarkan nilai kontrak dan durasi proyek.",
  },
];

const BENEFITS = [
  "Kerusakan pekerjaan konstruksi",
  "Peralatan & mesin kontraktor",
  "Third Party Liability (TPL)",
  "Bencana alam & cuaca ekstrem",
  "Kebakaran & ledakan",
  "Pencurian material proyek",
  "Biaya pembongkaran & pembersihan",
  "Maintenance period coverage",
];

export default function ContractorAllRiskPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaInsuranceProduct({
        name: "Contractor All Risk Insurance Batam",
        description: "Asuransi proyek konstruksi untuk kontraktor di Batam mencakup material, peralatan, dan tanggung jawab pihak ketiga.",
        url: "/asuransi-engineering/contractor-all-risk",
        category: "Asuransi Engineering",
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Beranda", url: "/" },
        { name: "Asuransi Engineering", url: "/asuransi-engineering" },
        { name: "Contractor All Risk", url: "/asuransi-engineering/contractor-all-risk" },
      ])) }} />

      <section className="pt-32 pb-16 px-4" style={{ background: "linear-gradient(135deg, #0a1628 0%, #132040 60%, #1e3a6e 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { label: "Beranda", href: "/" },
            { label: "Asuransi Engineering", href: "/asuransi-engineering" },
            { label: "Contractor All Risk" },
          ]} />
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}>
              <Hammer size={24} style={{ color: "#0a1628" }} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: "#c9a84c20", color: "#f0d080" }}>Asuransi Engineering</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: "Syne, sans-serif" }}>
            Contractor All Risk (CAR) Insurance
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Proteksi menyeluruh untuk proyek konstruksi Anda di Batam — dari ground breaking hingga masa pemeliharaan. Material, peralatan, dan tanggung jawab pihak ketiga semua terlindungi.
          </p>
          <QuoteButton cluster="engineering" lang="id" variant="gold" className="!rounded-xl !px-8 !py-3.5" />
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Perlindungan CAR" title="Apa yang Ditanggung Contractor All Risk?" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BENEFITS.map((b) => (
              <div key={b} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50">
                <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#1a4fa0" }} />
                <span className="text-sm text-gray-700">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4" style={{ background: "#faf8f3" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Estimasi Premi CAR" title="Berapa Biaya Asuransi CAR di Batam?" center />
          <p className="text-center text-gray-500 text-sm mb-8 max-w-2xl mx-auto">Premi CAR Insurance dihitung berdasarkan nilai kontrak proyek. Berikut panduan estimasi untuk proyek konstruksi di Batam dan sekitar Kepulauan Riau.</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0a1628] text-white">
                  <th className="text-left p-4 font-semibold">Skala Proyek</th>
                  <th className="text-left p-4 font-semibold">Nilai Kontrak</th>
                  <th className="text-left p-4 font-semibold">Estimasi Premi CAR</th>
                  <th className="text-left p-4 font-semibold">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-[#0a1628]">Renovasi / Proyek Kecil</td>
                  <td className="p-4 text-gray-600">Rp 500 jt – 2 M</td>
                  <td className="p-4 text-[#1a4fa0] font-semibold">Rp 2,5 – 10 jt</td>
                  <td className="p-4 text-gray-500">Ruko, perumahan subsidi, renovasi fasilitas</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-4 font-medium text-[#0a1628]">Proyek Menengah</td>
                  <td className="p-4 text-gray-600">Rp 2 – 20 M</td>
                  <td className="p-4 text-[#1a4fa0] font-semibold">Rp 10 – 100 jt</td>
                  <td className="p-4 text-gray-500">Gedung bertingkat, ruko kompleks, fasilitas industri</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-[#0a1628]">Proyek Besar / Infrastruktur</td>
                  <td className="p-4 text-gray-600">Rp 20 M ke atas</td>
                  <td className="p-4 text-[#1a4fa0] font-semibold">Negosiasi khusus</td>
                  <td className="p-4 text-gray-500">Jembatan, dermaga, kawasan industri, apartemen besar</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-gray-400">* Premi aktual berkisar 0,3%–1,0% dari nilai kontrak tergantung jenis konstruksi, durasi, lokasi, dan risiko spesifik proyek. Hubungi kami untuk penawaran tepat.</p>
          <div className="mt-12">
            <SectionHeader eyebrow="Studi Kasus CAR" title="Klaim Nyata CAR Insurance di Batam" center />
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="p-6 rounded-2xl border border-gray-200 bg-white">
                <h3 className="font-bold text-[#0a1628] mb-2">🏗️ Gedung Perkantoran di Batam Centre Ambruk Sebagian</h3>
                <p className="text-sm text-gray-600 mb-3">Proyek pembangunan gedung 8 lantai di kawasan Batam Centre mengalami keruntuhan bekisting lantai 4 akibat penopang tidak sesuai spesifikasi, menyebabkan kerusakan struktur dan material senilai besar.</p>
                <div className="bg-gray-50 rounded-xl p-3 text-sm">
                  <p className="text-[#0a1628] font-semibold">Kerugian:</p>
                  <p className="text-gray-600">Kerusakan struktur & material: Rp 4,7 M | Biaya pembersihan: Rp 380 jt</p>
                  <p className="text-green-700 font-semibold mt-1">✅ Seluruh klaim disetujui dalam 21 hari kerja.</p>
                </div>
              </div>
              <div className="p-6 rounded-2xl border border-gray-200 bg-white">
                <h3 className="font-bold text-[#0a1628] mb-2">🌊 Banjir Rob Rusak Material Proyek di Sekupang</h3>
                <p className="text-sm text-gray-600 mb-3">Material konstruksi — besi tulangan, semen, dan kayu bekisting — di proyek pembangunan fasilitas dermaga di Sekupang rusak terendam banjir rob yang datang tiba-tiba saat pekerjaan pondasi berlangsung.</p>
                <div className="bg-gray-50 rounded-xl p-3 text-sm">
                  <p className="text-[#0a1628] font-semibold">Kerugian:</p>
                  <p className="text-gray-600">Material rusak: Rp 1,2 M | Biaya keterlambatan proyek: ditanggung polis BI</p>
                  <p className="text-green-700 font-semibold mt-1">✅ Klaim material dan business interruption diproses sepenuhnya.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Lengkapi Proteksi Proyek" title="Produk Terkait untuk Kontraktor" center />
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/asuransi-engineering/erection-all-risk" className="block p-6 rounded-2xl border border-gray-100 hover:border-[#c9a84c] transition-all bg-gray-50">
              <h3 className="font-bold text-[#0a1628] mb-2">Erection All Risk (EAR)</h3>
              <p className="text-sm text-gray-600">Untuk proyek pemasangan mesin & instalasi pabrik, bukan bangunan sipil.</p>
            </a>
            <a href="/asuransi-surety-bond/performance-bond" className="block p-6 rounded-2xl border border-gray-100 hover:border-[#c9a84c] transition-all bg-gray-50">
              <h3 className="font-bold text-[#0a1628] mb-2">Performance Bond</h3>
              <p className="text-sm text-gray-600">Syarat tender proyek pemerintah/swasta — sering diminta berbarengan dengan CAR.</p>
            </a>
            <a href="/asuransi-personal-accident/pa-karyawan-grup" className="block p-6 rounded-2xl border border-gray-100 hover:border-[#c9a84c] transition-all bg-gray-50">
              <h3 className="font-bold text-[#0a1628] mb-2">PA Karyawan Grup</h3>
              <p className="text-sm text-gray-600">Lindungi pekerja lapangan proyek dari risiko kecelakaan kerja.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4" style={{ background: "#faf8f3" }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow="FAQ" title="Pertanyaan Seputar CAR Insurance" center />
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <QuoteCard cluster="engineering" lang="id" />
    </>
  );
}

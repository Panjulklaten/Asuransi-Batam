import type { Metadata } from "next";
import { generateSEO, schemaInsuranceProduct, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { Breadcrumb, SectionHeader } from "@/components/ui/index";
import QuoteButton from "@/components/quote/QuoteButton";
import QuoteCard from "@/components/quote/QuoteCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Hammer, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Erection All Risk (EAR) Batam",
  description: "Erection All Risk Insurance di Batam untuk pemasangan mesin, pabrik, dan plant industri. Perlindungan selama masa erection hingga commissioning. Hubungi Rio!",
  canonical: "https://asuransibatam.com/asuransi-engineering/erection-all-risk",
  languages: {
    id: "https://asuransibatam.com/asuransi-engineering/erection-all-risk",
    en: "https://asuransibatam.com/en/engineering-insurance/erection-all-risk",
  },
});

const FAQS = [
  {
    q: "Apa perbedaan EAR dan CAR Insurance?",
    a: "CAR (Contractor All Risk) digunakan untuk proyek konstruksi sipil seperti gedung dan jalan. EAR (Erection All Risk) digunakan untuk proyek pemasangan mesin, plant industri, menara, dan struktur baja/besi.",
  },
  {
    q: "Apa saja proyek yang membutuhkan EAR?",
    a: "EAR cocok untuk: pemasangan mesin pabrik, pembangunan plant kimia, konstruksi menara telekomunikasi, pemasangan PLTU/PLTG, instalasi sistem HVAC skala besar, dan proyek offshore.",
  },
  {
    q: "Apakah EAR mencakup pengujian awal (testing & commissioning)?",
    a: "Ya, EAR umumnya mencakup periode testing & commissioning dengan tambahan klausul khusus. Ini sangat penting karena risiko tertinggi sering terjadi saat pertama kali mesin/plant diuji.",
  },
  {
    q: "Berapa premi EAR Insurance?",
    a: "Premi EAR bergantung pada nilai kontrak, kompleksitas erection, risiko uji coba, dan lokasi proyek. Umumnya berkisar 0,5%–2% dari nilai kontrak. Hubungi kami untuk kalkulasi spesifik.",
  },
];

const BENEFITS = [
  "Kerusakan selama erection",
  "Kesalahan desain atau material",
  "Kerusakan akibat uji coba",
  "Bencana alam & cuaca",
  "Kebakaran & ledakan",
  "Third Party Liability",
  "Testing & commissioning period",
  "Biaya pembongkaran & pengiriman ulang",
];

export default function ErectionAllRiskPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaInsuranceProduct({
        name: "Erection All Risk Insurance Batam",
        description: "Asuransi pemasangan mesin dan plant industri di Batam untuk proyek erection hingga commissioning.",
        url: "/asuransi-engineering/erection-all-risk",
        category: "Asuransi Engineering",
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQS)) }} />

      <section className="pt-32 pb-16 px-4" style={{ background: "linear-gradient(135deg, #0a1628 0%, #132040 60%, #1e3a6e 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { label: "Beranda", href: "/" },
            { label: "Asuransi Engineering", href: "/asuransi-engineering" },
            { label: "Erection All Risk" },
          ]} />
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}>
              <Hammer size={24} style={{ color: "#0a1628" }} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: "#c9a84c20", color: "#f0d080" }}>Asuransi Engineering</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: "Syne, sans-serif" }}>
            Erection All Risk (EAR) Insurance
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Perlindungan all risk untuk proyek pemasangan mesin, plant industri, dan instalasi peralatan — dari mobilisasi hingga commissioning dan maintenance period.
          </p>
          <QuoteButton cluster="engineering" lang="id" variant="gold" className="!rounded-xl !px-8 !py-3.5" />
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Perlindungan EAR" title="Apa yang Ditanggung EAR Insurance?" />
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
          <SectionHeader eyebrow="Estimasi Premi EAR" title="Berapa Biaya EAR Insurance di Batam?" center />
          <p className="text-center text-gray-500 text-sm mb-8 max-w-2xl mx-auto">Premi EAR Insurance dihitung berdasarkan nilai kontrak erection. Berikut panduan estimasi untuk proyek pemasangan mesin dan instalasi di Batam dan kawasan industri Kepulauan Riau.</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0a1628] text-white">
                  <th className="text-left p-4 font-semibold">Jenis Proyek</th>
                  <th className="text-left p-4 font-semibold">Nilai Kontrak</th>
                  <th className="text-left p-4 font-semibold">Estimasi Premi EAR</th>
                  <th className="text-left p-4 font-semibold">Catatan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-[#0a1628]">Pemasangan Mesin Pabrik (kecil)</td>
                  <td className="p-4 text-gray-600">Rp 1 – 5 M</td>
                  <td className="p-4 text-[#1a4fa0] font-semibold">Rp 5 – 50 jt</td>
                  <td className="p-4 text-gray-500">Mesin produksi ringan, HVAC, genset</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-4 font-medium text-[#0a1628]">Instalasi Plant Industri</td>
                  <td className="p-4 text-gray-600">Rp 5 – 50 M</td>
                  <td className="p-4 text-[#1a4fa0] font-semibold">Rp 50 – 500 jt</td>
                  <td className="p-4 text-gray-500">Pabrik pengolahan, plant kimia, fasilitas energi</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-[#0a1628]">Proyek Infrastruktur Besar</td>
                  <td className="p-4 text-gray-600">Rp 50 M ke atas</td>
                  <td className="p-4 text-[#1a4fa0] font-semibold">Negosiasi khusus</td>
                  <td className="p-4 text-gray-500">PLTU, offshore, menara telekomunikasi, dermaga</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-gray-400">* Premi EAR umumnya berkisar 0,5%–2,0% dari nilai kontrak, tergantung kompleksitas erection, risiko testing & commissioning, dan durasi proyek. Konsultasi gratis untuk penawaran spesifik.</p>
          <div className="mt-12">
            <SectionHeader eyebrow="Studi Kasus EAR" title="Klaim Nyata EAR Insurance di Batam" center />
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="p-6 rounded-2xl border border-gray-200 bg-white">
                <h3 className="font-bold text-[#0a1628] mb-2">⚡ Kerusakan Saat Testing: Plant Pengolahan di Muka Kuning</h3>
                <p className="text-sm text-gray-600 mb-3">Sebuah pabrik pengolahan di kawasan industri Muka Kuning mengalami kerusakan parah pada sistem kompresor utama saat proses commissioning pertama kali. Tekanan berlebih akibat valve yang belum terkalibrasi menyebabkan pipa meledak.</p>
                <div className="bg-gray-50 rounded-xl p-3 text-sm">
                  <p className="text-[#0a1628] font-semibold">Kerugian:</p>
                  <p className="text-gray-600">Kerusakan kompresor & pipa: Rp 3,2 M | Biaya pengiriman suku cadang impor: Rp 450 jt</p>
                  <p className="text-green-700 font-semibold mt-1">✅ Klaim testing & commissioning period ditanggung penuh karena klausul T&C aktif.</p>
                </div>
              </div>
              <div className="p-6 rounded-2xl border border-gray-200 bg-white">
                <h3 className="font-bold text-[#0a1628] mb-2">🏗️ Crane Jatuh saat Erection Menara Telekomunikasi</h3>
                <p className="text-sm text-gray-600 mb-3">Sling crane putus saat mengangkat segmen teratas menara telekomunikasi di Nongsa. Segmen menara jatuh dan merusak komponen yang sudah terpasang di bawahnya serta kendaraan teknisi di area erection.</p>
                <div className="bg-gray-50 rounded-xl p-3 text-sm">
                  <p className="text-[#0a1628] font-semibold">Kerugian:</p>
                  <p className="text-gray-600">Komponen menara rusak: Rp 1,8 M | Kendaraan TPL: Rp 120 jt | Biaya re-erection: Rp 280 jt</p>
                  <p className="text-green-700 font-semibold mt-1">✅ EAR + TPL extension menanggung keseluruhan klaim termasuk kendaraan pihak ketiga.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Lengkapi Proteksi Instalasi" title="Produk Terkait untuk Proyek Pemasangan" center />
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/asuransi-engineering/contractor-all-risk" className="block p-6 rounded-2xl border border-gray-100 hover:border-[#c9a84c] transition-all bg-gray-50">
              <h3 className="font-bold text-[#0a1628] mb-2">Contractor All Risk (CAR)</h3>
              <p className="text-sm text-gray-600">Untuk proyek bangunan/sipil di luar pemasangan mesin atau instalasi pabrik.</p>
            </a>
            <a href="/asuransi-engineering/cecr" className="block p-6 rounded-2xl border border-gray-100 hover:border-[#c9a84c] transition-all bg-gray-50">
              <h3 className="font-bold text-[#0a1628] mb-2">CECR (Civil Engineering)</h3>
              <p className="text-sm text-gray-600">Untuk proyek infrastruktur sipil seperti talud, dermaga, dan jalan.</p>
            </a>
            <a href="/asuransi-machinery/asuransi-alat-berat" className="block p-6 rounded-2xl border border-gray-100 hover:border-[#c9a84c] transition-all bg-gray-50">
              <h3 className="font-bold text-[#0a1628] mb-2">Asuransi Alat Berat</h3>
              <p className="text-sm text-gray-600">Lindungi crane dan alat berat yang dipakai selama proses erection.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4" style={{ background: "#faf8f3" }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow="FAQ" title="Pertanyaan Seputar EAR Insurance" center />
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <QuoteCard cluster="engineering" lang="id" />
    </>
  );
}

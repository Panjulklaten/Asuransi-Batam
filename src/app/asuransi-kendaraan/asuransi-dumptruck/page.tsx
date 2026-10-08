import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";
export const metadata: Metadata = generateSEO({
  title: "Asuransi Dump Truck Batam – Perlindungan Armada Kendaraan Berat",
  description: "Asuransi dump truck dan kendaraan niaga berat di Batam. All risk, TLO, dan fleet insurance untuk armada tambang & konstruksi. Premi kompetitif. Hubungi Rio: 0813-7333-6728.",
  canonical: "https://asuransibatam.com/asuransi-kendaraan/asuransi-dumptruck",
  languages: {
      id: "https://asuransibatam.com/asuransi-kendaraan/asuransi-dumptruck",
      en: "https://asuransibatam.com/en/vehicle-insurance/dump-truck-insurance",
    },
});
const benefits = [
  { icon: "🚛", title: "Kerusakan Fisik Kendaraan", desc: "Kerusakan akibat kecelakaan, benturan, terbalik, terperosok, atau risiko medan jalan tambang dan konstruksi yang tidak rata." },
  { icon: "🔥", title: "Kebakaran & Ledakan", desc: "Perlindungan dari kebakaran mesin, ledakan tangki bahan bakar, dan korsleting listrik yang umum terjadi pada kendaraan berat beroperasi tinggi." },
  { icon: "⚙️", title: "Kerusakan Mesin Akibat Kecelakaan", desc: "Opsi perlindungan kerusakan mesin dump truck yang disebabkan langsung oleh kecelakaan — bukan keausan normal atau kurang perawatan." },
  { icon: "👷", title: "Tanggung Jawab kepada Pihak Ketiga", desc: "Biaya ganti rugi kerusakan kendaraan, properti, atau cedera pihak ketiga yang disebabkan oleh dump truck Anda di jalan umum." },
  { icon: "🏗️", title: "Coverage Khusus Area Off-Road", desc: "Polis khusus kendaraan off-road untuk dump truck yang beroperasi di area tambang, galian tanah, dan konstruksi yang tidak melewati jalan umum." },
  { icon: "🚑", title: "Kecelakaan Pengemudi", desc: "Santunan kecelakaan diri dan meninggal dunia untuk pengemudi dump truck sebagai bentuk perlindungan sumber daya manusia armada." },
];
const faqs = [
  { q: "Apakah dump truck untuk tambang dan off-road bisa diasuransikan di Batam?", a: "Ya. Ada polis khusus Off-Road Vehicle (ORV) atau Equipment All Risk untuk dump truck yang beroperasi di area tambang, galian tanah, reklamasi, dan proyek konstruksi yang tidak melewati jalan umum. Polis ini berbeda dengan asuransi kendaraan bermotor biasa dan preminya dihitung berdasarkan nilai unit, jenis muatan, dan intensitas operasi." },
  { q: "Berapa estimasi premi asuransi dump truck di Batam?", a: "Premi dump truck lebih tinggi dari kendaraan pribadi karena risiko operasional lebih besar. Untuk polis All Risk kendaraan berat on-road, premi berkisar 2,0%–4,0% dari harga kendaraan per tahun. Dump truck Hino 260 seharga Rp 800 juta misalnya, premi All Risk mulai sekitar Rp 16–32 juta per tahun. Untuk polis off-road/ORV, premi dihitung berdasarkan nilai penggantian unit." },
  { q: "Apakah bisa mengasuransikan armada dump truck sekaligus (fleet insurance)?", a: "Ya, fleet insurance tersedia untuk kepemilikan 5 unit atau lebih dengan diskon premi yang cukup signifikan — bisa hingga 15–25% dibanding polis per unit. Fleet insurance juga lebih mudah dikelola karena semua unit dalam satu polis dengan tanggal perpanjangan yang sama. Hubungi kami untuk penawaran fleet khusus." },
  { q: "Apa perbedaan All Risk dan TLO untuk dump truck?", a: "All Risk menanggung semua kerusakan mulai dari lecet, penyok ringan, hingga kerusakan total. TLO (Total Loss Only) hanya menanggung jika kendaraan rusak lebih dari 75% dari nilai pertanggungan atau hilang dicuri. Untuk dump truck operasional aktif di lokasi berisiko tinggi, All Risk jauh lebih disarankan meski preminya lebih mahal." },
  { q: "Bagaimana jika dump truck terlibat kecelakaan dan melukai orang?", a: "Segera amankan lokasi, hubungi polisi untuk membuat laporan, dan dokumentasikan kejadian. Laporkan ke kami dalam 3×24 jam. Jangan memberikan kompensasi langsung kepada korban tanpa koordinasi dengan tim kami terlebih dahulu — ini penting agar proses klaim TPL (Third Party Liability) berjalan sesuai prosedur polis." },
  { q: "Apakah muatan di dalam dump truck juga ditanggung?", a: "Muatan (cargo) adalah cakupan terpisah dari asuransi kendaraan. Asuransi dump truck standar melindungi unitnya saja, bukan muatan di dalamnya. Untuk melindungi muatan tanah, pasir, batu, atau material lain, diperlukan Marine Cargo atau Inland Transit Insurance terpisah. Kami bisa mengatur keduanya sekaligus." },
];
const policyComparison = [
  { feature: "Kerusakan Fisik (All Risk)", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "TLO (Total Loss Only)", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Kebakaran & Ledakan", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Third Party Liability (TPL)", basic: "Terbatas", standard: "✅", comprehensive: "✅" },
  { feature: "Off-Road / Area Tambang", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Kecelakaan Pengemudi", basic: "❌", standard: "Opsional", comprehensive: "✅" },
];
const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Dump Truck Batam",
  description: "Asuransi dump truck dan kendaraan niaga berat di Batam untuk armada tambang, konstruksi, dan angkutan material. All risk, TLO, dan fleet insurance.",
  provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};
export default function AsuransiDumpTruckPage() {
  return (
    <ProductPageLayout cluster="vehicle" title="Asuransi Dump Truck Batam" subtitle="Perlindungan Armada Kendaraan Berat & Niaga"
      description="Armada dump truck adalah aset vital dan sumber pendapatan bisnis Anda. Di Batam — kota dengan proyek reklamasi, konstruksi kawasan industri, dan galian aktif — dump truck bekerja di kondisi paling berat. Satu kecelakaan atau kerusakan mesin yang tidak terlindungi bisa menghentikan operasional dan menguras kas bisnis."
      benefits={benefits} faqs={faqs} policyComparison={policyComparison}
      breadcrumbs={[{ label: "Asuransi Kendaraan", href: "/asuransi-kendaraan" }, { label: "Asuransi Dump Truck", href: "/asuransi-kendaraan/asuransi-dumptruck" }]}
      schema={schema}>
      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Estimasi Premi Dump Truck di Batam</h2>
        <p className="text-center text-[#475569] mb-8">Panduan harga perlindungan untuk armada kendaraan berat Anda.</p>
        <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0a1628] text-white">
                <th className="text-left p-4 font-semibold">Tipe Unit</th>
                <th className="text-left p-4 font-semibold">Nilai Unit</th>
                <th className="text-left p-4 font-semibold">Premi TLO/th</th>
                <th className="text-left p-4 font-semibold">Premi All Risk/th</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#e2e8f0]">
                <td className="p-4 text-[#0a1628] font-medium">Dump Truck Mitsubishi Colt Diesel (6 roda)</td>
                <td className="p-4 text-[#475569]">Rp 350–450 jt</td>
                <td className="p-4 text-[#1a4fa0] font-semibold">Rp 3,5–6,7 jt/th</td>
                <td className="p-4 text-[#475569]">Rp 7–18 jt/th</td>
              </tr>
              <tr className="border-b border-[#e2e8f0] bg-[#f8faff]">
                <td className="p-4 text-[#0a1628] font-medium">Dump Truck Hino 260 (10 roda)</td>
                <td className="p-4 text-[#475569]">Rp 700–900 jt</td>
                <td className="p-4 text-[#1a4fa0] font-semibold">Rp 7–13,5 jt/th</td>
                <td className="p-4 text-[#475569]">Rp 14–36 jt/th</td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="p-4 text-[#0a1628] font-medium">Dump Truck Volvo / Scania (Articulated)</td>
                <td className="p-4 text-[#475569]">Rp 2,5–4 M</td>
                <td className="p-4 text-[#1a4fa0] font-semibold">Rp 25–60 jt/th</td>
                <td className="p-4 text-[#475569]">Hubungi kami</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#475569] mt-3 text-center">* Estimasi premi berdasarkan tarif on-road. Premi aktual bergantung pada kondisi kendaraan, area operasi, dan rekam jejak klaim. Hubungi kami untuk penawaran spesifik termasuk fleet discount.</p>
      </div>
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Pelengkap untuk Operasional Tambang & Proyek</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/asuransi-machinery/asuransi-alat-berat" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Alat Berat</h3>
            <p className="text-[#475569] text-sm">Lindungi excavator dan bulldozer yang bekerja bersama armada dump truck Anda.</p>
          </Link>
          <Link href="/asuransi-liability/public-liability" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Public Liability</h3>
            <p className="text-[#475569] text-sm">Perluas tanggung jawab hukum operasional armada di luar batas polis kendaraan standar.</p>
          </Link>
          <Link href="/blog/asuransi-dump-truck-batam-proyek-konstruksi" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Panduan Dump Truck untuk Proyek</h3>
            <p className="text-[#475569] text-sm">Tips lengkap proteksi armada dump truck untuk kebutuhan proyek konstruksi Batam.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

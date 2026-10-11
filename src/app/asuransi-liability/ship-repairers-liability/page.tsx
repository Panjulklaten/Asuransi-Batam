// app/asuransi-liability/ship-repairers-liability/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Ship Repairer's Liability Batam – Tanggung Gugat Galangan Reparasi Kapal",
  description:
    "Ship Repairer's Liability di Batam untuk galangan dan kontraktor reparasi kapal: tanggung gugat atas kapal pelanggan yang berada dalam penguasaan Anda, properti dan pihak ketiga. Konsultasi dengan Rio.",
  canonical: "https://asuransibatam.com/asuransi-liability/ship-repairers-liability",
  languages: {
    id: "https://asuransibatam.com/asuransi-liability/ship-repairers-liability",
    en: "https://asuransibatam.com/en/liability-insurance/ship-repairers-liability",
  },
});

const benefits = [
  { icon: "🚢", title: "Kapal Pelanggan dalam Penguasaan Anda", desc: "Kerusakan atau kehilangan kapal milik pelanggan saat berada di dok, dermaga, atau area galangan, termasuk saat dipindahkan, sepanjang menjadi tanggung gugat hukum Anda." },
  { icon: "🏗️", title: "Properti Pihak Ketiga", desc: "Kerusakan pada kapal lain, dermaga, peralatan, atau fasilitas di sekitar area kerja yang timbul dari kegiatan reparasi Anda." },
  { icon: "👥", title: "Cedera Pihak Ketiga", desc: "Cedera pada orang di luar pekerja Anda, misalnya awak kapal, surveyor, atau tamu yang berada di area kerja." },
  { icon: "🔥", title: "Insiden Pekerjaan Panas", desc: "Kebakaran atau kerusakan yang bermula dari pengelasan dan pemotongan (hot work) dan merambat ke kapal atau properti pelanggan." },
  { icon: "⚖️", title: "Biaya Hukum & Pembelaan", desc: "Biaya pengacara dan pembelaan yang disetujui penanggung bila pemilik kapal atau pihak lain mengajukan tuntutan." },
  { icon: "📑", title: "Memenuhi Persyaratan Kontrak", desc: "Kontrak reparasi dari pemilik kapal atau principal sering meminta bukti asuransi (COI) dengan limit tertentu sebelum pekerjaan dimulai." },
];

const faqs = [
  {
    q: "Apa itu Ship Repairer's Liability dan apa bedanya dengan Builders Risk?",
    a: "Builders Risk adalah polis properti yang melindungi aset yang sedang dikerjakan, yaitu kapal atau proyeknya. Ship Repairer's Liability melindungi galangan atau kontraktor reparasi sebagai pihak yang bisa digugat, yaitu dari tuntutan ganti rugi atas kerugian yang menjadi tanggung gugat hukumnya. Keduanya menjawab pertanyaan yang berbeda dan dapat dimiliki bersamaan.",
  },
  {
    q: "Bukankah Public Liability sudah menutup galangan?",
    a: "Public Liability menutup cedera dan kerusakan properti pihak ketiga. Namun kapal pelanggan yang sedang berada dalam penguasaan galangan umumnya dikecualikan dari Public Liability standar (pengecualian care, custody and control). Karena itu bagian inilah yang biasanya perlu ditutup lewat Ship Repairer's Liability. Selalu periksa wording pengecualiannya.",
  },
  {
    q: "Siapa yang membutuhkan polis ini?",
    a: "Galangan reparasi, galangan bangun baru yang juga menerima reparasi, serta kontraktor yang bekerja langsung di atas atau di dalam kapal pelanggan seperti pengelasan, pengecatan dan blasting, mekanikal, dan kelistrikan. Kebutuhannya biasanya muncul dari kontrak dengan pemilik kapal.",
  },
  {
    q: "Apakah biaya memperbaiki pekerjaan yang cacat ikut ditanggung?",
    a: "Umumnya tidak. Biaya mengerjakan ulang pekerjaan Anda sendiri yang cacat lazim dikecualikan. Yang menjadi fokus polis adalah kerugian yang ditimbulkan oleh pekerjaan tersebut kepada pihak lain, sejauh menjadi tanggung gugat hukum Anda dan tidak dikecualikan wording.",
  },
  {
    q: "Bagaimana limit pertanggungan ditentukan?",
    a: "Umumnya dikaitkan dengan nilai kapal tertinggi yang mungkin berada di galangan pada satu waktu, dan dengan persyaratan limit di kontrak pelanggan. Informasi nilai kapal tertinggi dan jumlah kapal per tahun sangat membantu penyusunan opsi.",
  },
  {
    q: "Bagaimana premi dihitung?",
    a: "Umumnya dipengaruhi omzet atau volume reparasi, jenis fasilitas (floating dock, graving dock, slipway), nilai kapal tertinggi, kontrol pekerjaan panas, penggunaan subkontraktor, dan riwayat klaim. Angka pasti baru bisa disampaikan setelah datanya lengkap.",
  },
  {
    q: "Dokumen apa yang perlu disiapkan?",
    a: "Profil galangan dan fasilitas dok, nilai kapal tertinggi serta jumlah kapal per tahun, contoh kontrak reparasi atau syarat standar yang dipakai, daftar subkontraktor beserta bukti asuransinya, prosedur K3 dan pengendalian hot work, serta riwayat klaim 3–5 tahun.",
  },
  {
    q: "Apa yang harus dilakukan bila terjadi insiden?",
    a: "Amankan kapal dan area, dokumentasikan kondisi dengan foto dan video, lalu laporkan ke kami dalam 3×24 jam. Jangan mengakui tanggung jawab atau menjanjikan ganti rugi kepada pemilik kapal sebelum berkoordinasi dengan penanggung. Catatan kondisi kapal saat masuk galangan (survei awal) sangat membantu membuktikan kondisi sebelum pekerjaan.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Ship Repairer's Liability Batam",
  description: "Asuransi tanggung gugat bagi galangan dan kontraktor reparasi kapal di Batam.",
  provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};

export default function ShipRepairersLiabilityPage() {
  return (
    <ProductPageLayout
      cluster="liability"
      title="Asuransi Ship Repairer's Liability Batam"
      subtitle="Tanggung Gugat Galangan dan Kontraktor Reparasi Kapal"
      description="Saat kapal pelanggan masuk dok, galangan memegang aset bernilai tinggi milik orang lain. Ship Repairer's Liability melindungi galangan dan kontraktor reparasi dari tuntutan ganti rugi atas kerugian yang timbul selama kapal berada dalam penguasaan mereka."
      benefits={benefits}
      faqs={faqs}
      breadcrumbs={[
        { label: "Asuransi Liability", href: "/asuransi-liability" },
        { label: "Ship Repairer's Liability", href: "/asuransi-liability/ship-repairers-liability" },
      ]}
      schema={schema}
    >
      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Aset, Tanggung Gugat, atau Pihak Ketiga?</h2>
        <p className="text-center text-[#475569] mb-6">Tiga polis yang sering dicampuradukkan di galangan, padahal melindungi hal yang berbeda.</p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-sm">
            <thead style={{ background: "#0a1628" }}>
              <tr>
                <th className="text-left text-white font-semibold px-5 py-3">Polis</th>
                <th className="text-left text-white font-semibold px-5 py-3">Yang dilindungi</th>
                <th className="text-left text-white font-semibold px-5 py-3">Contoh pemicu</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr><td className="px-5 py-3.5 font-semibold">Builders Risk</td><td className="px-5 py-3.5">Aset: kapal atau proyek yang sedang dikerjakan</td><td className="px-5 py-3.5">Kebakaran merusak lambung kapal selama pekerjaan</td></tr>
              <tr><td className="px-5 py-3.5 font-semibold">Ship Repairer&apos;s Liability</td><td className="px-5 py-3.5">Galangan sebagai pihak yang digugat atas kapal dalam penguasaannya</td><td className="px-5 py-3.5">Pemilik kapal menuntut ganti rugi atas kerusakan di dok</td></tr>
              <tr><td className="px-5 py-3.5 font-semibold">Public Liability</td><td className="px-5 py-3.5">Tanggung gugat atas cedera dan kerusakan properti pihak ketiga</td><td className="px-5 py-3.5">Pengunjung cedera atau fasilitas tetangga rusak</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">Tabel ini bersifat umum. Cakupan dan pengecualian final mengikuti wording polis masing-masing penanggung.</p>
      </div>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-3 text-center">Konteks Galangan di Batam</h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          Galangan di sekitar Tanjung Uncang dan Kabil menerima kapal pelanggan dari berbagai jenis, seperti tongkang, tugboat, kapal niaga, dan kapal pendukung lepas pantai, untuk docking, penggantian pelat, pengecatan, dan perbaikan mesin. Selama berada di dok, kapal itu bukan milik galangan tetapi berada dalam penguasaannya, dan di situlah celah tanggung gugatnya muncul.
        </p>
        <p className="text-[#475569] leading-relaxed">
          Kontrak reparasi dari pemilik kapal umumnya mengatur siapa yang menanggung kerugian dan sering meminta bukti asuransi sebelum kapal masuk. Menyiapkan struktur polisnya lebih awal biasanya mempercepat penandatanganan kontrak.
        </p>
      </div>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Ilustrasi Skenario</h2>
        <p className="text-center text-[#475569] mb-6 text-sm">Skenario hipotetis untuk memudahkan pemahaman, bukan kasus nyata. Keputusan klaim tetap mengikuti wording polis.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">🔥 Percikan las di ruang mesin</h3>
            <p className="text-[#475569] text-sm">Pekerjaan penggantian pelat menimbulkan percikan yang memicu kebakaran di ruang mesin kapal pelanggan yang sedang docking. Pemilik kapal menuntut galangan. Ini adalah tuntutan tanggung gugat atas kapal dalam penguasaan galangan.</p>
          </div>
          <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">⚓ Kapal terbentur saat dipindahkan</h3>
            <p className="text-[#475569] text-sm">Saat dipindahkan dari floating dock ke dermaga, sebuah kapal terbentur dan merusak lambung kapal lain yang sedang bersandar di dekatnya. Pemilik kapal kedua mengajukan tuntutan kepada galangan.</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Pelengkap Perlindungan Galangan</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/asuransi-marine/builders-risk" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Builder&apos;s Risk</h3>
            <p className="text-[#475569] text-sm">Melindungi aset kapal yang sedang dibangun atau direparasi, bukan tanggung gugatnya.</p>
          </Link>
          <Link href="/asuransi-liability/public-liability" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Public Liability</h3>
            <p className="text-[#475569] text-sm">Tanggung gugat atas cedera dan kerusakan properti pihak ketiga di area kerja.</p>
          </Link>
          <Link href="/asuransi-liability/employers-product-liability" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Employers&apos; Liability</h3>
            <p className="text-[#475569] text-sm">Tuntutan dari pekerja galangan sendiri, pekerjaan di ketinggian dan di dalam tangki.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

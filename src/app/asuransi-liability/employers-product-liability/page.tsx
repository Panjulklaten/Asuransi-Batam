// app/asuransi-liability/employers-product-liability/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Employers Liability & Product Liability Batam – Tanggung Gugat Karyawan & Produk",
  description:
    "Asuransi Employers' Liability dan Product Liability di Batam untuk pabrik, manufaktur ekspor, galangan, dan kontraktor. Melengkapi BPJS Ketenagakerjaan dan melindungi bisnis dari gugatan produk. Konsultasi gratis dengan Rio.",
  canonical: "https://asuransibatam.com/asuransi-liability/employers-product-liability",
  languages: {
    id: "https://asuransibatam.com/asuransi-liability/employers-product-liability",
    en: "https://asuransibatam.com/en/liability-insurance/employers-product-liability",
  },
});

const benefits = [
  { icon: "👷", title: "Employers' Liability (EL)", desc: "Tuntutan ganti rugi dari karyawan atau ahli warisnya atas cedera, penyakit akibat kerja, atau kematian yang timbul dari tanggung gugat hukum perusahaan, di luar manfaat program statutori." },
  { icon: "⚖️", title: "Biaya Hukum & Pembelaan", desc: "Biaya pengacara, biaya perkara, dan biaya pembelaan yang disetujui penanggung, termasuk bila tuntutan akhirnya tidak terbukti." },
  { icon: "📦", title: "Product Liability (PL)", desc: "Cedera badan atau kerusakan properti pihak ketiga yang disebabkan oleh produk yang Anda produksi, rakit, jual, atau distribusikan setelah produk lepas dari kendali Anda." },
  { icon: "🌏", title: "Produk Ekspor", desc: "Produk buatan Batam yang dikirim ke luar negeri dapat dicakup, dengan batas wilayah dan yurisdiksi gugatan yang perlu disepakati sejak awal." },
  { icon: "🏪", title: "Perluasan untuk Distributor", desc: "Perluasan vendors untuk distributor, importir, atau pengecer yang menjual produk Anda (opsional, mengikuti wording polis)." },
  { icon: "🏭", title: "Pelengkap Public Liability", desc: "Public Liability menjamin pihak ketiga di lokasi usaha. EL dan PL menutup dua sisi yang tidak tercakup di sana: pekerja sendiri dan produk yang sudah beredar." },
];

const faqs = [
  {
    q: "Berapa limit dan deductible yang sebaiknya dipilih?",
    a: "Tidak ada angka baku. Limit biasanya disesuaikan dengan nilai kontrak, jumlah pekerja atau volume penjualan, dan persyaratan buyer atau principal, sedangkan deductible disesuaikan dengan kemampuan perusahaan menanggung risiko sendiri. Kami menyusun beberapa opsi limit dan deductible untuk dibandingkan sebelum Anda memutuskan.",
  },
  {
    q: "Bisakah saya mengambil Employers' Liability saja atau Product Liability saja?",
    a: "Bisa. Keduanya merupakan perlindungan yang terpisah, sehingga dapat diajukan sendiri-sendiri atau digabung. Pilihannya tersedia di form permintaan penawaran, dan susunan akhirnya mengikuti kebijakan penanggung.",
  },
  {
    q: "Apa yang umumnya tidak ditanggung Product Liability?",
    a: "Umumnya tidak menjamin kerusakan produk itu sendiri, biaya penarikan produk (product recall), kegagalan produk memenuhi spesifikasi atau garansi mutu, serta kewajiban kontraktual di luar tanggung gugat hukum. Rinciannya mengikuti wording polis, jadi selalu minta dibacakan bagian pengecualiannya.",
  },
  {
    q: "Produk saya diekspor ke Amerika Serikat atau Kanada. Apakah bisa dicakup?",
    a: "Perlu dicek khusus. Banyak polis membatasi atau mengecualikan gugatan yang diajukan di pengadilan AS dan Kanada, atau mensyaratkan perluasan wilayah dengan syarat dan premi berbeda. Sampaikan negara tujuan ekspor saat pengajuan agar struktur polisnya tepat sejak awal.",
  },
  {
    q: "Apa itu basis occurrence dan claims-made, dan mengapa penting?",
    a: "Pada basis occurrence, polis menjamin kejadian yang terjadi selama periode polis. Pada claims-made, yang dilihat adalah kapan klaim diajukan, sehingga tanggal retroaktif sangat penting dan tidak boleh terputus saat perpanjangan. Basis mana yang dipakai bergantung pada penanggung dan wording, dan ini salah satu hal pertama yang saya cek.",
  },
  {
    q: "Bagaimana premi dihitung?",
    a: "Umumnya EL dihitung dari total upah atau gaji karyawan dan klasifikasi pekerjaannya, sedangkan PL dari omzet atau nilai penjualan produk, jenis produk, dan negara tujuan. Riwayat klaim, limit, dan deductible ikut menentukan. Karena itu angka pasti baru bisa disampaikan setelah data usaha Anda lengkap.",
  },
  {
    q: "Dokumen apa yang perlu disiapkan?",
    a: "Legalitas perusahaan (NIB, NPWP, akta), profil usaha dan jumlah karyawan, total gaji tahunan serta bukti kepesertaan BPJS Ketenagakerjaan (untuk EL), deskripsi produk, omzet, dan negara tujuan penjualan (untuk PL), serta riwayat klaim dan komplain produk 3 tahun terakhir.",
  },
  {
    q: "Apa yang harus dilakukan bila ada tuntutan?",
    a: "Laporkan ke kami dalam 3×24 jam setelah menerima tuntutan atau mengetahui potensi klaim. Jangan mengakui kesalahan atau menawarkan penyelesaian kepada penggugat sebelum berkoordinasi dengan penanggung, karena hal itu dapat mempengaruhi hak klaim Anda.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Employers Liability & Product Liability Batam",
  description: "Asuransi tanggung gugat terhadap karyawan (Employers' Liability) dan produk (Product Liability) untuk perusahaan di Batam.",
  provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};

export default function EmployersProductLiabilityPage() {
  return (
    <ProductPageLayout
      cluster="liability"
      title="Asuransi Employers Liability & Product Liability Batam"
      subtitle="Tanggung Gugat terhadap Karyawan dan Produk Anda"
      description="Public Liability melindungi Anda dari tuntutan pihak luar, tetapi tidak menutup tuntutan dari pekerja sendiri maupun gugatan atas produk yang sudah beredar. Employers' Liability dan Product Liability menutup dua celah itu."
      benefits={benefits}
      faqs={faqs}
      breadcrumbs={[
        { label: "Asuransi Liability", href: "/asuransi-liability" },
        { label: "Employers & Product Liability", href: "/asuransi-liability/employers-product-liability" },
      ]}
      schema={schema}
    >
      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Employers&apos; Liability vs Product Liability</h2>
        <p className="text-center text-[#475569] mb-6">Dua polis yang sering dibeli berpasangan, tetapi melindungi hal yang berbeda.</p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-sm">
            <thead style={{ background: "#0a1628" }}>
              <tr>
                <th className="text-left text-white font-semibold px-5 py-3"> </th>
                <th className="text-left text-white font-semibold px-5 py-3">Employers&apos; Liability</th>
                <th className="text-left text-white font-semibold px-5 py-3">Product Liability</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr><td className="px-5 py-3.5 font-semibold">Siapa yang dilindungi dari tuntutan</td><td className="px-5 py-3.5">Pekerja perusahaan sendiri</td><td className="px-5 py-3.5">Pihak ketiga pengguna atau terdampak produk</td></tr>
              <tr><td className="px-5 py-3.5 font-semibold">Pemicu</td><td className="px-5 py-3.5">Cedera atau penyakit akibat pekerjaan</td><td className="px-5 py-3.5">Cedera atau kerusakan properti akibat produk setelah beredar</td></tr>
              <tr><td className="px-5 py-3.5 font-semibold">Dasar perhitungan premi (umumnya)</td><td className="px-5 py-3.5">Total upah dan klasifikasi pekerjaan</td><td className="px-5 py-3.5">Omzet, jenis produk, negara tujuan</td></tr>
              <tr><td className="px-5 py-3.5 font-semibold">Contoh pemakai di Batam</td><td className="px-5 py-3.5">Galangan, pabrik, kontraktor</td><td className="px-5 py-3.5">Manufaktur ekspor, distributor, importir</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">Tabel ini bersifat umum. Cakupan dan pengecualian final mengikuti wording polis masing-masing penanggung.</p>
      </div>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-3 text-center">Yang Kami Tentukan Bersama Anda Sebelum Penawaran</h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          Penawaran Employers&apos; dan Product Liability tidak bisa dibuat dari satu angka. Beberapa keputusan berikut menentukan seberapa jauh polis benar-benar melindungi, dan sebaiknya disepakati sebelum polis diterbitkan:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#475569] leading-relaxed mb-4">
          <li>Limit pertanggungan per kejadian dan agregat per tahun, disesuaikan dengan nilai kontrak dan eksposur usaha.</li>
          <li>Deductible atau risiko sendiri yang masih sanggup Anda tanggung.</li>
          <li>Basis polis (occurrence atau claims-made) dan tanggal retroaktif, terutama untuk Product Liability.</li>
          <li>Wilayah dan yurisdiksi: negara tujuan ekspor yang dicakup dan yang dikecualikan.</li>
          <li>Perluasan opsional, seperti vendors untuk distributor, serta persyaratan sertifikat asuransi (COI) dari buyer atau principal.</li>
        </ul>
        <p className="text-[#475569] leading-relaxed">
          Employers&apos; Liability saja, Product Liability saja, atau keduanya bisa dipilih langsung di form permintaan penawaran.
        </p>
      </div>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Ilustrasi Skenario</h2>
        <p className="text-center text-[#475569] mb-6 text-sm">Skenario hipotetis untuk memudahkan pemahaman, bukan kasus nyata. Keputusan klaim tetap mengikuti wording polis.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">👷 Pekerja galangan jatuh dari perancah</h3>
            <p className="text-[#475569] text-sm">Seorang pekerja subkontraktor mengalami cedera berat saat pekerjaan di ketinggian. Selain santunan dari program BPJS Ketenagakerjaan, keluarganya mengajukan tuntutan ganti rugi tambahan kepada perusahaan. Di sinilah Employers&apos; Liability relevan, termasuk untuk biaya pembelaan hukum.</p>
          </div>
          <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">📦 Komponen elektronik memicu kerusakan di pabrik pembeli</h3>
            <p className="text-[#475569] text-sm">Sebuah komponen buatan Batam yang sudah terpasang di produk pembeli dituduh menyebabkan kerusakan properti dan cedera pada pengguna akhir. Product Liability dapat menanggung ganti rugi dan biaya pembelaan, sementara biaya penarikan produk umumnya perlu pengaturan terpisah.</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Pelengkap Perlindungan Liability</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/asuransi-liability/public-liability" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Public Liability</h3>
            <p className="text-[#475569] text-sm">Tanggung gugat terhadap pihak ketiga di lokasi usaha dan proyek.</p>
          </Link>
          <Link href="/asuransi-personal-accident/pa-karyawan-grup" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">PA Karyawan Grup</h3>
            <p className="text-[#475569] text-sm">Santunan kecelakaan diri bagi karyawan, berbeda dari tanggung gugat perusahaan.</p>
          </Link>
          <Link href="/blog/employers-liability-product-liability-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Mengapa EL &amp; PL Sering Terlewat</h3>
            <p className="text-[#475569] text-sm">Artikel tentang celah di luar BPJS dan Public Liability, serta siapa yang paling rentan.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

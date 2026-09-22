import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";

// ─────────────────────────────────────────────
// METADATA — diperkaya keyword subcon galangan kapal & lokal Batam
// ─────────────────────────────────────────────
export const metadata: Metadata = generateSEO({
  title: "Asuransi Public Liability Batam – Wajib untuk Subkon Galangan Kapal, Hotel & Bisnis Publik",
  description: "Public Liability Insurance di Batam untuk subkontraktor galangan kapal (PT. Paxocean & lainnya), hotel, restoran, dan pusat perbelanjaan. Perlindungan tuntutan cedera pengunjung & pihak ketiga. Proses cepat, harga kompetitif. Hubungi: 0813-7333-6728.",
  canonical: "https://asuransibatam.com/asuransi-liability/public-liability",
  languages: {
      id: "https://asuransibatam.com/asuransi-liability/public-liability",
      en: "https://asuransibatam.com/en/liability-insurance/public-liability",
    },
});

// ─────────────────────────────────────────────
// BENEFITS — diperkaya dengan konteks operasional nyata
// ─────────────────────────────────────────────
const benefits = [
  {
    icon: "👤",
    title: "Cedera Pengunjung, Tamu & Pekerja Pihak Ketiga",
    desc: "Menanggung biaya medis dan ganti rugi jika pengunjung, tamu, atau pekerja pihak ketiga (termasuk personel principal seperti pengawas galangan) mengalami cedera di area operasional Anda. Misalnya: teknisi subcon yang terpeleset di deck kapal atau terkena serpihan material saat pekerjaan blasting — cedera ini menjadi tanggung jawab hukum subcon, bukan galangan utama.",
  },
  {
    icon: "🏗️",
    title: "Kerusakan Properti Pihak Ketiga",
    desc: "Menanggung kompensasi kerusakan aset milik pihak ketiga yang disebabkan oleh operasional Anda. Contoh: peralatan atau lambung kapal milik klien galangan rusak akibat kelalaian pekerjaan subcon — biaya perbaikan yang bisa mencapai ratusan juta rupiah ditanggung polis ini.",
  },
  {
    icon: "⚖️",
    title: "Biaya Pembelaan Hukum",
    desc: "Menanggung honorarium pengacara, biaya notaris, dan seluruh proses persidangan perdata maupun pidana akibat tuntutan pihak ketiga. Di lingkungan galangan kapal, gugatan dari keluarga korban kecelakaan kerja sering kali mencapai Rp 500 juta hingga Rp 2 miliar.",
  },
  {
    icon: "🏥",
    title: "Biaya Pengobatan & Rawat Inap Pihak Ketiga",
    desc: "Menanggung seluruh biaya rumah sakit pihak ketiga yang menjadi tanggung jawab hukum bisnis Anda — termasuk biaya operasi, rawat inap, rehabilitasi, hingga cacat permanen. Berbeda dengan BPJS Ketenagakerjaan, polis ini mencakup pihak ketiga non-karyawan yang terdampak.",
  },
  {
    icon: "💼",
    title: "Tuntutan Produk & Hasil Pekerjaan (Product & Completed Operations)",
    desc: "Melindungi dari klaim kerusakan atau cedera yang timbul setelah pekerjaan selesai diserahterimakan. Contoh: las-lasan pipa yang dikerjakan subcon bocor setelah kapal beroperasi, menyebabkan kerugian besar pada pemilik kapal — biaya tuntutan ini masuk cakupan polis.",
  },
  {
    icon: "🌐",
    title: "Advertising Liability",
    desc: "Perlindungan dari tuntutan hukum akibat konten promosi, iklan, atau materi pemasaran bisnis Anda yang dianggap mencemarkan nama baik, melanggar hak cipta, atau merugikan pihak lain.",
  },
];

// ─────────────────────────────────────────────
// FAQS — diperkaya dengan konteks galangan kapal, simulasi klaim & prosedur
// ─────────────────────────────────────────────
const faqs = [
  {
    q: "Mengapa subkontraktor galangan kapal di Batam wajib memiliki Public Liability Insurance?",
    a: "Galangan kapal besar di Batam seperti PT. Paxocean, Drydocks World, dan Batam Shipyard & Offshore umumnya menetapkan persyaratan ketat kepada seluruh vendor dan subkontraktor dalam kontrak kerja mereka. Salah satu klausul standar yang wajib dipenuhi sebelum subcon diizinkan masuk dan bekerja di area galangan adalah kepemilikan Public Liability Insurance dengan nilai pertanggungan minimum yang ditetapkan principal — biasanya Rp 1–5 miliar per kejadian. Tanpa sertifikat asuransi ini, Purchase Order (PO) atau Work Order (WO) dari galangan tidak akan diterbitkan, dan subcon tidak bisa memasuki area kerja.",
  },
  {
    q: "Seperti apa persyaratan Public Liability dari PT. Paxocean untuk subkontraktor?",
    a: "Berdasarkan pengalaman kami membantu vendor/subkon yang bermitra dengan PT. Paxocean di Batam, persyaratan umum yang diminta meliputi: (1) Polis Public Liability dengan limit minimum Rp 2–5 miliar per occurrence; (2) PT. Paxocean harus dicantumkan sebagai 'Additional Insured' atau pihak tertunjuk dalam polis; (3) Masa berlaku polis harus mencakup seluruh durasi kontrak kerja; (4) Certificate of Insurance (COI) diserahkan ke bagian HSE/Procurement Paxocean sebelum mobilisasi; (5) Polis harus diterbitkan oleh perusahaan asuransi berlisensi OJK. Kami berpengalaman menyiapkan dokumen COI dalam format yang langsung diterima tim HSE galangan besar di Batam.",
  },
  {
    q: "Simulasi klaim: kecelakaan subkon di area galangan kapal Batam",
    a: "Skenario nyata: Sebuah subkon penyedia jasa sandblasting di area galangan Tanjung Uncang mengalami insiden — salah satu pekerja pihak ketiga (non-karyawan subkon, berstatus harian lepas dari vendor lain) terkena serpihan abrasif dan mengalami cedera mata serius. Biaya yang timbul: rawat inap & operasi mata Rp 85 juta, biaya pengacara menghadapi tuntutan keluarga Rp 75 juta, ganti rugi cacat penglihatan permanen Rp 350 juta. Total eksposur: Rp 510 juta. Dengan polis Public Liability aktif, seluruh biaya ini diselesaikan oleh penanggung — subkon cukup membayar deductible yang telah disepakati, dan kontrak dengan galangan tetap berjalan tanpa gangguan.",
  },
  {
    q: "Bisnis apa saja selain galangan kapal yang membutuhkan Public Liability di Batam?",
    a: "Di luar sektor maritim, asuransi ini sangat dibutuhkan oleh: (1) Hotel dan resor di Nongsa, Harbour Bay, dan Nagoya — risiko cedera tamu di kolam renang, restoran, atau area parkir; (2) Pusat perbelanjaan dan tenant (Mall Nagoya Hill, BCS Mall) — risiko lantai licin, eskalator, dan insiden parkir; (3) Event Organizer untuk acara pameran, konser, atau gathering korporat; (4) Kontraktor bangunan — wajib untuk proyek pemerintah dan swasta skala menengah ke atas; (5) Klinik dan rumah sakit — perlindungan tambahan di luar medical malpractice; (6) Gym, spa, dan fasilitas olahraga.",
  },
  {
    q: "Apa saja dokumen yang diperlukan untuk mendapatkan polis Public Liability?",
    a: "Dokumen yang perlu disiapkan: (1) Legalitas perusahaan: NIB, SIUP/TDP, NPWP, Akta Pendirian; (2) Profil bisnis: jenis kegiatan usaha, jumlah karyawan, luas area operasional; (3) Untuk subkon galangan: salinan kontrak/WO dengan principal, scope of work yang akan dijalankan; (4) Riwayat klaim 3 tahun terakhir (jika ada); (5) Khusus jika principal meminta Additional Insured: nama lengkap dan alamat perusahaan principal yang akan dicantumkan. Dengan dokumen lengkap, polis dapat diterbitkan dalam 1–3 hari kerja — cukup cepat untuk memenuhi deadline mobilisasi proyek.",
  },
  {
    q: "Bagaimana prosedur pengajuan klaim Public Liability?",
    a: "Langkah klaim yang harus dilakukan: (1) Amankan lokasi dan berikan pertolongan pertama kepada pihak yang terluka; (2) Dokumentasikan insiden — foto, video, keterangan saksi, dan laporan internal HSE; (3) Notifikasi penanggung maksimal 3×24 jam setelah insiden melalui hotline klaim; (4) Jangan akui tanggung jawab secara tertulis kepada pihak penuntut sebelum berkoordinasi dengan penanggung — ini adalah syarat standar polis; (5) Serahkan laporan kejadian, surat tuntutan dari pihak ketiga, dan dokumen medis korban; (6) Loss adjuster akan ditugaskan dalam 3–5 hari kerja untuk menilai klaim; (7) Penyelesaian klaim dilakukan melalui negosiasi atau jalur hukum sesuai perkembangan kasus.",
  },
  {
    q: "Berapa kisaran premi Public Liability untuk subkon galangan kapal di Batam?",
    a: "Premi bervariasi berdasarkan nilai pertanggungan, jenis pekerjaan, dan durasi kontrak. Sebagai gambaran: untuk subkon dengan lingkup pekerjaan sandblasting/painting atau fabrikasi ringan, dengan limit Rp 2 miliar per occurrence dan durasi 6 bulan, premi berkisar Rp 3–8 juta. Untuk pekerjaan bertahun dengan scope lebih luas, premi tahunan bisa Rp 10–30 juta. Kami menyediakan penawaran yang kompetitif dengan proses penerbitan cepat yang memahami urgensi deadline mobilisasi proyek galangan. Hubungi 0813-7333-6728 untuk penawaran dalam 1 hari kerja.",
  },
];

// ─────────────────────────────────────────────
// POLICY COMPARISON — ditambah baris relevan untuk konteks galangan
// ─────────────────────────────────────────────
const policyComparison = [
  { feature: "Cedera Pihak Ketiga / Pengunjung", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Kerusakan Properti Pihak Ketiga", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Biaya Pengacara & Litigasi", basic: "Terbatas", standard: "✅", comprehensive: "✅" },
  { feature: "Biaya Medis Rawat Inap Pihak Ketiga", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Product & Completed Operations Liability", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Additional Insured (untuk principal)", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Advertising Liability", basic: "❌", standard: "❌", comprehensive: "✅" },
  { feature: "Pencemaran Terbatas (Sudden & Accidental)", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Certificate of Insurance (COI) untuk galangan", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Limit Pertanggungan Maks. (Rp)", basic: "1 M", standard: "5 M", comprehensive: "Sesuai Kebutuhan" },
];

// ─────────────────────────────────────────────
// SCHEMA — diperkaya dengan areaServed, serviceType & target industri
// ─────────────────────────────────────────────
const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Public Liability Insurance Batam",
  description:
    "Asuransi tanggung gugat publik (Public Liability Insurance) di Batam untuk subkontraktor galangan kapal, hotel, restoran, kontraktor, dan bisnis umum yang melayani publik. Termasuk penerbitan Certificate of Insurance (COI) untuk persyaratan principal/galangan.",
  serviceType: "Public Liability Insurance / Asuransi Tanggung Gugat Publik",
  areaServed: [
    { "@type": "City", name: "Batam" },
    { "@type": "AdministrativeArea", name: "Kepulauan Riau" },
  ],
  provider: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam – Rio",
    telephone: "+6281373336728",
    url: "https://asuransibatam.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Batam",
      addressRegion: "Kepulauan Riau",
      addressCountry: "ID",
    },
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "IDR",
    description:
      "Premi mulai Rp 3 juta untuk subkon galangan kapal. Penerbitan polis dan COI dalam 1–3 hari kerja.",
  },
};

// ─────────────────────────────────────────────
// PAGE COMPONENT — struktur tidak berubah
// ─────────────────────────────────────────────
export default function PublicLiabilityPage() {
  return (
    <ProductPageLayout
      title="Public Liability Insurance Batam"
      subtitle="Wajib untuk Subkon Galangan Kapal & Bisnis yang Melayani Publik"
      description="Satu insiden di area kerja atau bisnis Anda bisa berujung tuntutan hukum senilai ratusan juta hingga miliaran rupiah. Di Batam, galangan kapal besar seperti PT. Paxocean mewajibkan seluruh vendor dan subkontraktor memiliki Public Liability Insurance sebelum boleh beroperasi di area mereka. Kami membantu Anda mendapatkan polis yang sesuai persyaratan principal — lengkap dengan Certificate of Insurance (COI) — dalam 1–3 hari kerja."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Asuransi Liability", href: "/asuransi-liability" },
        { label: "Public Liability", href: "/asuransi-liability/public-liability" },
      ]}
      schema={schema}
    >
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Sering Dibutuhkan Bersamaan</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <Link href="/asuransi-marine/builders-risk" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Builder&apos;s Risk Galangan Kapal</h3>
            <p className="text-[#475569] text-sm">Lengkapi proteksi aset proyek pembangunan kapal Anda di galangan.</p>
          </Link>
          <Link href="/asuransi-liability/asuransi-limbah-b3" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Limbah B3</h3>
            <p className="text-[#475569] text-sm">Wajib bagi industri penghasil limbah B3 sesuai PP 22/2021.</p>
          </Link>
          <Link href="/asuransi-engineering/contractor-all-risk" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Contractor All Risk (CAR)</h3>
            <p className="text-[#475569] text-sm">Untuk proyek konstruksi yang juga butuh proteksi aset fisik.</p>
          </Link>
          <Link href="/asuransi-liability/freight-forwarders-liability" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Freight Forwarders Liability</h3>
            <p className="text-[#475569] text-sm">Untuk perusahaan forwarding & PPJK yang juga melayani publik di area gudang/kantor.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

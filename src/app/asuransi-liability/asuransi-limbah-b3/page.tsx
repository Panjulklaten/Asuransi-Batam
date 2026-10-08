import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";

// ─────────────────────────────────────────────
// METADATA — diperkaya dengan keyword lokal & long-tail
// ─────────────────────────────────────────────
export const metadata: Metadata = generateSEO({
  title: "Asuransi Limbah B3 Batam – Kewajiban Hukum PP 22/2021 untuk Industri Penghasil Limbah Berbahaya",
  description: "Asuransi limbah B3 (Bahan Berbahaya & Beracun) di Batam. Kewajiban hukum PP No. 22/2021 bagi industri manufaktur, galangan kapal & rumah sakit. Lindungi bisnis dari tuntutan pencemaran miliaran rupiah. Konsultasi gratis: 0813-7333-6728.",
  canonical: "https://asuransibatam.com/asuransi-liability/asuransi-limbah-b3",
  languages: {
      id: "https://asuransibatam.com/asuransi-liability/asuransi-limbah-b3",
      en: "https://asuransibatam.com/en/liability-insurance/b3-waste-insurance",
    },
});

// ─────────────────────────────────────────────
// BENEFITS — diperkaya dengan konteks risiko nyata & nilai klaim
// ─────────────────────────────────────────────
const benefits = [
  {
    icon: "☣️",
    title: "Pencemaran Tanah & Air",
    desc: "Menanggung biaya pembersihan (remediation) dan pemulihan lingkungan akibat tumpahan atau kebocoran limbah B3. Contoh nyata: kebocoran oli bekas dari tangki penyimpanan galangan kapal di Tanjung Uncang, Batam, dapat menimbulkan biaya remediation tanah hingga Rp 800 juta — seluruhnya dicakup dalam polis ini.",
  },
  {
    icon: "⚖️",
    title: "Tuntutan Hukum Lingkungan",
    desc: "Menanggung biaya pengacara, biaya sidang, dan nilai ganti rugi (damages) akibat gugatan perdata atau tuntutan pidana dari masyarakat terdampak maupun instansi pemerintah seperti KLHK atau BP Batam. Nilai gugatan lingkungan di Indonesia rata-rata mencapai Rp 2–10 miliar per kasus.",
  },
  {
    icon: "🏥",
    title: "Dampak Kesehatan Pihak Ketiga",
    desc: "Memberikan kompensasi medis dan ganti rugi bagi masyarakat atau pekerja pihak ketiga yang mengalami gangguan kesehatan akibat paparan limbah B3 Anda — mulai dari iritasi kulit hingga kerusakan organ jangka panjang yang memerlukan perawatan bertahun-tahun.",
  },
  {
    icon: "🌿",
    title: "Biaya Pemulihan Ekosistem",
    desc: "Menanggung biaya restorasi lingkungan, termasuk pemulihan biota laut, mangrove, dan fauna pesisir yang terdampak. Ini sangat krusial di Batam yang berbatasan langsung dengan Selat Singapura dan kawasan konservasi laut — di mana biaya restorasi ekosistem laut bisa melampaui Rp 1 miliar.",
  },
  {
    icon: "🚒",
    title: "Biaya Respons Darurat",
    desc: "Menanggung biaya mobilisasi tim hazmat, penyewaan peralatan spill containment, dan koordinasi dengan BPBD atau instansi terkait dalam 48 jam pertama setelah insiden kebocoran atau tumpahan limbah B3 — periode paling kritis untuk mencegah pencemaran meluas.",
  },
  {
    icon: "📋",
    title: "Denda Regulatori",
    desc: "Memberikan perlindungan atas sanksi denda administratif dari KLHK, Dinas Lingkungan Hidup Batam, atau BP Batam akibat pelanggaran prosedur pengelolaan limbah B3 (sesuai klausul polis yang dipilih). Denda administratif dapat mencapai Rp 500 juta per pelanggaran berdasarkan UU No. 32 Tahun 2009.",
  },
];

// ─────────────────────────────────────────────
// FAQS — diperdalam dengan regulasi spesifik, simulasi klaim, & prosedur dokumen
// ─────────────────────────────────────────────
const faqs = [
  {
    q: "Apakah asuransi limbah B3 diwajibkan oleh hukum di Indonesia?",
    a: "Ya, kewajiban ini diatur secara eksplisit dalam PP No. 22 Tahun 2021 tentang Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup, yang merupakan turunan dari UU No. 11 Tahun 2020 (Cipta Kerja). Pasal yang mengatur jaminan finansial lingkungan hidup mewajibkan setiap pelaku usaha penghasil atau pengelola limbah B3 untuk memiliki salah satu instrumen jaminan: deposito, bank garansi, atau asuransi lingkungan. Tanpa salah satu dari ketiganya, izin pengelolaan lingkungan (Persetujuan Teknis/Pertek) dapat dicabut oleh KLHK.",
  },
  {
    q: "Industri apa saja di Batam yang wajib memiliki asuransi limbah B3?",
    a: "Di Batam, industri yang wajib memiliki asuransi ini antara lain: (1) Galangan kapal dan industri maritim (kawasan Tanjung Uncang & Sekupang) — menghasilkan limbah cat, oli, dan solven; (2) Industri manufaktur elektronik (kawasan Muka Kuning & Batamindo Industrial Park) — menghasilkan limbah timbal dan bahan kimia; (3) Rumah sakit dan klinik besar (limbah medis infeksius & bahan farmasi); (4) Bengkel otomotif dan industri logam; (5) Laboratorium riset dan kalibrasi; serta (6) Perusahaan oil & gas yang beroperasi di Kepulauan Riau.",
  },
  {
    q: "Bagaimana simulasi klaim asuransi limbah B3 yang nyata?",
    a: "Contoh simulasi kasus nyata: Sebuah perusahaan galangan kapal di Batam mengalami kebocoran tangki penyimpanan oli bekas (solar oil) sebesar 2.000 liter ke perairan pantai sekitar fasilitas. Total kerugian mencakup: biaya respons darurat & penyedotan limbah Rp 180 juta, biaya remediation tanah & sedimen pantai Rp 650 juta, ganti rugi nelayan setempat atas kehilangan mata pencaharian Rp 300 juta, dan biaya pengacara menghadapi gugatan warga Rp 120 juta. Total eksposur: Rp 1,25 miliar — seluruhnya ditanggung polis Comprehensive, sementara perusahaan hanya menanggung deductible sesuai kesepakatan polis.",
  },
  {
    q: "Apa saja dokumen yang diperlukan untuk mengajukan polis asuransi limbah B3?",
    a: "Dokumen standar yang dibutuhkan: (1) Dokumen legal perusahaan: NIB, SIUP/TDP, NPWP, Akta Pendirian; (2) Dokumen lingkungan: Persetujuan Lingkungan (AMDAL/UKL-UPL), Persetujuan Teknis Pengelolaan Limbah B3 (Pertek), Neraca Limbah B3 tahun terakhir; (3) Manifest limbah B3 6 bulan terakhir; (4) Data teknis fasilitas: layout area penyimpanan limbah, kapasitas tangki, jenis dan volume limbah yang dihasilkan per bulan; (5) Rekam jejak insiden lingkungan (jika ada) dalam 3 tahun terakhir. Proses underwriting umumnya membutuhkan 7–14 hari kerja setelah dokumen lengkap.",
  },
  {
    q: "Bagaimana prosedur klaim jika terjadi insiden pencemaran?",
    a: "Langkah klaim yang harus segera dilakukan: (1) Notifikasi darurat — hubungi penanggung (pihak asuransi) maksimal 48 jam setelah insiden diketahui via hotline klaim; (2) Dokumentasi insiden — foto, video, laporan internal, dan laporan ke instansi terkait (DLHK Batam/BP Batam); (3) Pemasangan containment barrier untuk mencegah pencemaran meluas — biaya ini termasuk yang diganti asuransi; (4) Pengajuan klaim resmi — lengkapi formulir klaim, laporan kronologi insiden, dan estimasi biaya pemulihan dari kontraktor remediation bersertifikat; (5) Survei adjuster — penanggung akan mengirim loss adjuster dalam 3–5 hari kerja; (6) Persetujuan klaim dan pembayaran dilakukan bertahap sesuai progress pemulihan.",
  },
  {
    q: "Batam termasuk kawasan industri kepulauan — mengapa risiko lingkungannya lebih tinggi?",
    a: "Posisi geografis Batam sebagai pulau yang dikelilingi perairan Selat Singapura dan Selat Riau menjadikan setiap insiden pencemaran berpotensi berdampak lintas batas (transboundary pollution). Pencemaran laut di Batam tidak hanya melibatkan KLHK, tetapi juga dapat memicu sanksi internasional berdasarkan MARPOL Convention dan OSPAR, serta tuntutan dari otoritas lingkungan Singapura. Selain itu, ekosistem mangrove dan terumbu karang di perairan Batam memiliki nilai restorasi yang jauh lebih tinggi dibandingkan wilayah daratan biasa.",
  },
  {
    q: "Berapa kisaran premi dan nilai pertanggungan yang disarankan?",
    a: "Nilai pertanggungan minimal yang disarankan untuk industri menengah di Batam adalah Rp 5 miliar, dengan premi berkisar 0,3–0,8% per tahun dari nilai pertanggungan tergantung profil risiko. Industri berrisiko tinggi (galangan kapal, manufaktur kimia) umumnya memerlukan pertanggungan Rp 10–50 miliar. Kami akan melakukan risk assessment gratis untuk menentukan nilai pertanggungan yang optimal — tidak terlalu rendah (underinsured) maupun berlebihan. Hubungi kami di 0813-7333-6728 untuk konsultasi tanpa komitmen.",
  },
];

// ─────────────────────────────────────────────
// POLICY COMPARISON — ditambah baris baru yang lebih informatif
// ─────────────────────────────────────────────
const policyComparison = [
  { feature: "Pencemaran Tanah", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Pencemaran Air/Laut", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Tuntutan Pihak Ketiga", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Biaya Pemulihan Ekosistem", basic: "❌", standard: "Terbatas", comprehensive: "✅" },
  { feature: "Biaya Respons Darurat", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Denda Regulatori", basic: "❌", standard: "❌", comprehensive: "Opsional" },
  { feature: "Biaya Pengacara & Litigasi", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Kompensasi Kesehatan Pihak Ketiga", basic: "Terbatas", standard: "✅", comprehensive: "✅" },
  { feature: "Pencemaran Lintas Batas (Transboundary)", basic: "❌", standard: "❌", comprehensive: "Opsional" },
  { feature: "Nilai Pertanggungan Maks. (Rp)", basic: "5 M", standard: "15 M", comprehensive: "Sesuai Kebutuhan" },
];

// ─────────────────────────────────────────────
// SCHEMA — diperkaya dengan areaServed, serviceType & description
// ─────────────────────────────────────────────
const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Limbah B3 Batam",
  description:
    "Layanan asuransi pertanggungjawaban lingkungan (environmental liability insurance) untuk industri penghasil atau pengelola limbah B3 di Batam dan Kepulauan Riau. Memenuhi kewajiban jaminan finansial sesuai PP No. 22 Tahun 2021.",
  serviceType: "Environmental Liability Insurance / Asuransi Lingkungan Hidup B3",
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
    description: "Premi mulai 0,3% per tahun dari nilai pertanggungan. Konsultasi dan risk assessment gratis.",
  },
};

// ─────────────────────────────────────────────
// PAGE COMPONENT — struktur tidak berubah
// ─────────────────────────────────────────────
export default function AsuransiLimbahB3Page() {
  return (
    <ProductPageLayout cluster="liability"
      title="Asuransi Limbah B3 Batam"
      subtitle="Kewajiban Hukum PP 22/2021 & Perlindungan Lingkungan Kepulauan"
      description="Setiap industri penghasil limbah B3 di Batam wajib memiliki jaminan finansial berupa asuransi berdasarkan PP No. 22 Tahun 2021. Tanpa perlindungan ini, satu insiden kebocoran limbah bisa berujung pada tuntutan hukum senilai miliaran rupiah, pencabutan izin usaha, hingga sanksi pidana. Kami membantu industri di Batam dan Kepulauan Riau memenuhi kewajiban regulasi sekaligus terlindungi secara finansial dari risiko lingkungan yang nyata."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Asuransi Liability", href: "/asuransi-liability" },
        { label: "Asuransi Limbah B3", href: "/asuransi-liability/asuransi-limbah-b3" },
      ]}
      schema={schema}
    >
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Lengkapi Kepatuhan Industri Anda</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/asuransi-liability/public-liability" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Public Liability</h3>
            <p className="text-[#475569] text-sm">Tanggung jawab hukum yang lebih luas di luar risiko limbah B3.</p>
          </Link>
          <Link href="/asuransi-properti/asuransi-pabrik-kawasan-industri-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Pabrik Kawasan Industri</h3>
            <p className="text-[#475569] text-sm">Lindungi aset fisik pabrik penghasil limbah B3 dari risiko kerusakan.</p>
          </Link>
          <Link href="/blog/klaim-asuransi-limbah-b3-kawasan-industri-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Cara Klaim Asuransi Limbah B3</h3>
            <p className="text-[#475569] text-sm">Pelajari proses klaim dan studi kasus nyata di kawasan industri Batam.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

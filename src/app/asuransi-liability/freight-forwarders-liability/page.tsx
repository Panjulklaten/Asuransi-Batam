import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";

// ─────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────
export const metadata: Metadata = generateSEO({
  title: "Asuransi Freight Forwarders Liability (FFL) Batam – Proteksi PPJK, EMKL & Perusahaan Forwarding",
  description: "Asuransi Freight Forwarders Liability (FFL) di Batam untuk perusahaan forwarding, PPJK, EMKL, dan NVOCC di Batu Ampar, Sekupang & Tanjung Uncang. Lindungi bisnis dari tuntutan kehilangan, kerusakan, dan kesalahan dokumen kargo pihak ketiga. Hubungi: 0813-7333-6728.",
  canonical: "https://asuransibatam.com/asuransi-liability/freight-forwarders-liability",
  languages: {
    id: "https://asuransibatam.com/asuransi-liability/freight-forwarders-liability",
    en: "https://asuransibatam.com/en/liability-insurance/freight-forwarders-liability",
  },
});

// ─────────────────────────────────────────────
// BENEFITS
// ─────────────────────────────────────────────
const benefits = [
  {
    icon: "📦",
    title: "Kehilangan & Kerusakan Kargo dalam Penguasaan Anda",
    desc: "Menanggung ganti rugi kepada pemilik barang jika kargo hilang, rusak, atau susut selama berada dalam penguasaan, penyimpanan, atau pengendalian forwarder — misalnya saat konsolidasi muatan di gudang CFS Batu Ampar, penumpukan sementara di lapangan penumpukan (CY), atau selama proses transload antar moda di Sekupang.",
  },
  {
    icon: "🚚",
    title: "Kesalahan Pengiriman (Mis-delivery)",
    desc: "Melindungi dari klaim akibat barang terkirim ke alamat atau penerima yang salah, tertukar dengan muatan konsolidasi milik shipper lain, atau diserahkan tanpa dokumen serah terima (delivery order) yang sah — risiko umum pada gudang konsolidasi bervolume tinggi.",
  },
  {
    icon: "📄",
    title: "Kesalahan Dokumentasi & Deklarasi Kepabeanan",
    desc: "Menanggung kerugian pihak ketiga akibat kesalahan dalam PIB/PEB, kekeliruan kode HS, kesalahan pengajuan fasilitas OB23 atau KITE, maupun kelalaian administratif lain dalam pengurusan dokumen kepabeanan yang berujung pada denda, penahanan barang, atau tuntutan dari pemilik kargo.",
  },
  {
    icon: "⏱️",
    title: "Kerugian Konsekuensial Pihak Ketiga",
    desc: "Mencakup tuntutan atas kerugian finansial pihak ketiga akibat keterlambatan — seperti denda demurrage/detention di pelabuhan, biaya penyimpanan tambahan, atau kerugian produksi klien akibat bahan baku terlambat tiba di kawasan industri.",
  },
  {
    icon: "⚖️",
    title: "Biaya Pembelaan Hukum",
    desc: "Menanggung biaya pengacara, mediasi, dan proses persidangan perdata yang timbul dari sengketa dengan shipper, consignee, atau pihak ketiga lain — termasuk jika pada akhirnya forwarder terbukti tidak bersalah.",
  },
  {
    icon: "🔗",
    title: "Tanggung Jawab atas Sub-kontraktor Pengangkut",
    desc: "Melindungi forwarder dari tuntutan yang timbul akibat kelalaian pihak yang disubkontrakkan — trucking lokal, Perusahaan Bongkar Muat (PBM), EMKL mitra, atau operator gudang pihak ketiga yang bekerja atas nama forwarder.",
  },
  {
    icon: "🧾",
    title: "Errors & Omissions (E&O) Profesional",
    desc: "Perluasan tanggung jawab profesional atas kesalahan administratif murni — salah input data pengiriman, kelalaian notifikasi, atau kesalahan penerbitan House Bill of Lading (HBL) yang merugikan klien secara finansial.",
  },
  {
    icon: "✅",
    title: "Certificate of Insurance untuk Prinsipal & Klien Korporat",
    desc: "Banyak prinsipal kawasan industri, forwarder internasional, dan klien korporat di Batam mensyaratkan bukti FFL aktif sebagai bagian dari kualifikasi vendor sebelum kontrak logistik ditandatangani. Kami membantu penerbitan COI sesuai format yang diminta.",
  },
];

// ─────────────────────────────────────────────
// FAQS
// ─────────────────────────────────────────────
const faqs = [
  {
    q: "Apa perbedaan Freight Forwarders Liability (FFL) dengan Marine Cargo Insurance?",
    a: "Ini pertanyaan yang paling sering muncul. Marine Cargo Insurance melindungi pemilik barang (shipper/consignee) atas kerugian fisik pada barangnya selama pengiriman, apa pun penyebabnya — kecelakaan kapal, cuaca buruk, kecelakaan kendaraan, dan sebagainya. FFL sebaliknya melindungi perusahaan forwarding itu sendiri dari tuntutan hukum dan tanggung jawab finansial yang timbul karena kelalaian forwarder dalam menjalankan tugasnya — salah kirim, salah dokumen, barang hilang saat berada dalam penguasaannya, atau kesalahan operasional lain. Banyak forwarder di Batam membeli keduanya: FFL untuk melindungi bisnis mereka sendiri, dan menawarkan atau membantu pengurusan marine cargo untuk kepentingan klien.",
  },
  {
    q: "Siapa saja yang wajib memiliki asuransi FFL di Batam?",
    a: "Idealnya setiap pelaku usaha jasa pengurusan transportasi memiliki FFL, termasuk: (1) Perusahaan freight forwarding dan NVOCC yang menerbitkan House Bill of Lading; (2) PPJK (Pengusaha Pengurusan Jasa Kepabeanan) yang menangani dokumen impor-ekspor, termasuk pengurusan fasilitas KPBPB seperti OB23 dan KITE; (3) EMKL (Ekspedisi Muatan Kapal Laut) yang beroperasi di Batu Ampar dan Sekupang; (4) Operator gudang konsolidasi (CFS) dan trucking logistik kawasan industri; (5) Perusahaan yang mengelola pergudangan pihak ketiga (3PL) untuk klien manufaktur di kawasan industri Batam.",
  },
  {
    q: "Mengapa forwarder di Batam punya eksposur risiko lebih tinggi dibanding kota lain?",
    a: "Batam berstatus Kawasan Perdagangan Bebas dan Pelabuhan Bebas (KPBPB) dengan lalu lintas barang impor-ekspor dan transshipment yang sangat padat — mencakup Pelabuhan Batu Ampar sebagai pintu utama kontainer, Sekupang dan Telaga Punggur sebagai simpul kargo dan penumpang lintas negara ke Singapura dan Malaysia, serta Tanjung Uncang sebagai basis logistik galangan kapal dan offshore. Volume transaksi yang tinggi, banyaknya fasilitas fiskal (OB23, KITE, Free Trade Zone) yang harus dikelola dengan akurat, serta padatnya proses konsolidasi dan transload antarmoda membuat ruang kesalahan dokumen maupun penanganan fisik jauh lebih besar dibanding kota dengan volume logistik lebih rendah.",
  },
  {
    q: "Simulasi klaim: kesalahan dokumen kepabeanan di Batu Ampar",
    a: "Skenario nyata: sebuah PPJK di Batam keliru mengajukan kode HS dan nilai pabean pada PIB untuk satu kontainer komponen elektronik tujuan kawasan industri Muka Kuning. Kesalahan tersebut menyebabkan kontainer tertahan di Batu Ampar selama 12 hari untuk pemeriksaan lanjutan, sehingga pabrik klien mengalami kerugian produksi dan mengajukan klaim ganti rugi senilai Rp 340 juta, ditambah biaya demurrage dan denda administratif sekitar Rp 60 juta. Dengan polis FFL aktif, penanggung menanggung biaya pembelaan dan sebagian besar ganti rugi konsekuensial sesuai limit polis, sehingga hubungan bisnis PPJK dengan kliennya tetap terjaga.",
  },
  {
    q: "Simulasi klaim: kargo hilang saat konsolidasi di gudang Sekupang",
    a: "Skenario nyata: sebuah forwarder yang mengonsolidasikan kargo LCL (Less than Container Load) tujuan beberapa consignee di gudang dekat Pelabuhan Sekupang kehilangan satu palet barang elektronik ringan akibat kesalahan pemisahan muatan saat proses sortir ulang. Nilai barang yang hilang ditaksir Rp 95 juta. Karena forwarder memegang tanggung jawab penuh atas barang selama berada dalam CCC (Care, Custody & Control) miliknya, klaim dari shipper diajukan langsung kepada forwarder. Polis FFL menanggung penggantian setelah proses investigasi internal dan laporan kehilangan diverifikasi.",
  },
  {
    q: "Apa saja dokumen yang diperlukan untuk mendapatkan polis FFL?",
    a: "Dokumen yang umumnya diperlukan: (1) Legalitas usaha — NIB dengan KBLI jasa pengurusan transportasi/PPJK, izin usaha forwarding dari Kementerian Perhubungan, NPWP, Akta Pendirian; (2) Profil operasional — jenis layanan (FCL/LCL, udara/laut, PPJK, trucking), estimasi volume dan nilai kargo tahunan, daftar gudang/fasilitas yang dioperasikan; (3) Riwayat klaim 3 tahun terakhir jika ada; (4) Daftar sub-kontraktor tetap (trucking, PBM, EMKL mitra) jika ingin dicakup dalam perluasan tanggung jawab sub-kontraktor; (5) Salinan syarat kontrak dari klien atau prinsipal jika mensyaratkan Additional Insured atau limit tertentu.",
  },
  {
    q: "Bagaimana prosedur klaim FFL jika terjadi insiden?",
    a: "Langkah yang perlu dilakukan: (1) Amankan dan dokumentasikan lokasi kejadian — foto kondisi barang, area penyimpanan, dan dokumen serah terima terkait; (2) Buat Berita Acara internal yang mencatat kronologi kejadian; (3) Notifikasi ke penanggung selambat-lambatnya 3×24 jam sejak insiden diketahui; (4) Kumpulkan dokumen pendukung — invoice, packing list, bill of lading/delivery order, korespondensi dengan shipper/consignee, serta surat tuntutan resmi jika sudah diterima; (5) Hindari mengakui kesalahan atau menyepakati ganti rugi secara sepihak sebelum berkoordinasi dengan penanggung; (6) Adjuster akan menilai klaim dalam 5–10 hari kerja tergantung kompleksitas kasus, khususnya untuk klaim yang melibatkan sengketa dokumen kepabeanan.",
  },
  {
    q: "Berapa kisaran premi asuransi FFL untuk forwarder di Batam?",
    a: "Premi bergantung pada omzet tahunan, jenis layanan (PPJK murni, forwarding FCL/LCL, atau kombinasi dengan trucking/pergudangan), dan limit tanggungan yang dipilih. Sebagai gambaran umum: forwarder skala kecil-menengah dengan limit Rp 1–2 miliar per kejadian berkisar Rp 8–20 juta per tahun; untuk perusahaan forwarding besar dengan volume tinggi di Batu Ampar dan cakupan lintas negara (Batam–Singapura–Malaysia), premi tahunan bisa mencapai puluhan juta rupiah menyesuaikan limit dan riwayat klaim. Hubungi 0813-7333-6728 untuk simulasi premi sesuai profil operasional Anda.",
  },
  {
    q: "Apakah FFL juga mencakup kargo milik forwarder yang dikirim lintas negara ke Singapura atau Malaysia?",
    a: "Ya, sebagian besar polis FFL dapat diperluas untuk mencakup operasional lintas negara mengingat posisi Batam sebagai simpul logistik ke Singapura (via Sekupang/Batam Center) dan Malaysia. Namun cakupan wilayah (territorial scope) perlu dinyatakan secara eksplisit dalam polis — pastikan broker Anda mencantumkan rute dan negara tujuan yang relevan dengan operasional bisnis Anda agar tidak terjadi celah perlindungan saat klaim lintas batas terjadi.",
  },
];

// ─────────────────────────────────────────────
// POLICY COMPARISON
// ─────────────────────────────────────────────
const policyComparison = [
  { feature: "Kehilangan/Kerusakan Kargo dalam CCC", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Kesalahan Pengiriman (Mis-delivery)", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Kesalahan Dokumen Kepabeanan (PIB/PEB, OB23, KITE)", basic: "Terbatas", standard: "✅", comprehensive: "✅" },
  { feature: "Kerugian Konsekuensial (Demurrage, Keterlambatan)", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Biaya Pembelaan Hukum", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Tanggung Jawab Sub-kontraktor (Trucking/PBM/EMKL)", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Errors & Omissions (E&O) Profesional", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Cakupan Lintas Negara (Singapura/Malaysia)", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Certificate of Insurance untuk Prinsipal/Klien", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Limit Pertanggungan Maks. (Rp)", basic: "1 M", standard: "3 M", comprehensive: "Sesuai Kebutuhan" },
];

// ─────────────────────────────────────────────
// SCHEMA
// ─────────────────────────────────────────────
const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Freight Forwarders Liability Insurance Batam",
  description:
    "Asuransi Freight Forwarders Liability (FFL) di Batam untuk perusahaan forwarding, PPJK, EMKL, NVOCC, dan operator gudang konsolidasi. Melindungi dari tuntutan kehilangan, kerusakan, kesalahan pengiriman, dan kesalahan dokumen kepabeanan kargo pihak ketiga di Batu Ampar, Sekupang, dan Tanjung Uncang.",
  serviceType: "Freight Forwarders Liability Insurance / Asuransi Tanggung Gugat Forwarder",
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
      "Premi mulai Rp 8 juta per tahun untuk forwarder skala kecil-menengah di Batam. Penerbitan polis dan COI dalam 1–3 hari kerja.",
  },
};

// ─────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────
export default function FreightForwardersLiabilityPage() {
  return (
    <ProductPageLayout
      title="Freight Forwarders Liability Insurance Batam"
      subtitle="Proteksi Wajib untuk Perusahaan Forwarding, PPJK & EMKL"
      description="Sebagai simpul logistik utama di Kepulauan Riau, Batam memproses ribuan pengiriman lintas moda setiap bulan — dari kontainer di Batu Ampar, kargo konsolidasi di Sekupang, hingga suplai galangan kapal di Tanjung Uncang. Satu kesalahan dokumen kepabeanan atau kargo yang hilang saat berada dalam penguasaan Anda bisa berujung tuntutan ratusan juta rupiah dari klien. Kami membantu perusahaan forwarding dan PPJK di Batam mendapatkan polis FFL yang sesuai profil operasional — lengkap dengan Certificate of Insurance (COI) — dalam 1–3 hari kerja."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Asuransi Liability", href: "/asuransi-liability" },
        { label: "Freight Forwarders Liability", href: "/asuransi-liability/freight-forwarders-liability" },
      ]}
      schema={schema}
    >
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Sering Dibutuhkan Bersamaan</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/asuransi-marine/marine-cargo" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Marine Cargo Insurance</h3>
            <p className="text-[#475569] text-sm">Lindungi nilai fisik kargo klien Anda, di luar tanggung jawab forwarder itu sendiri.</p>
          </Link>
          <Link href="/asuransi-properti/asuransi-gudang-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Gudang Batam</h3>
            <p className="text-[#475569] text-sm">Proteksi aset fisik gudang dan fasilitas konsolidasi milik forwarder sendiri.</p>
          </Link>
          <Link href="/asuransi-liability/public-liability" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Public Liability Insurance</h3>
            <p className="text-[#475569] text-sm">Tanggung gugat atas cedera pengunjung/tamu di area gudang dan kantor operasional.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

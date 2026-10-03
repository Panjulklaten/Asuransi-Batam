import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Rumah Batam – Lindungi Rumah & Isi Rumah dari Kebakaran & Banjir",
  description: "Asuransi rumah tinggal di Batam. Perlindungan dari kebakaran, banjir, pencurian, dan bencana alam. Premi mulai ratusan ribu per tahun. Hubungi Rio: 0813-7333-6728.",
  canonical: "https://asuransibatam.com/asuransi-properti/asuransi-rumah-batam",
  languages: {
      id: "https://asuransibatam.com/asuransi-properti/asuransi-rumah-batam",
      en: "https://asuransibatam.com/en/property-insurance/home-insurance-batam",
    },
});

const benefits = [
  { icon: "🏠", title: "Struktur & Bangunan Rumah", desc: "Dinding, atap, lantai, pondasi, instalasi listrik, dan pipa air dilindungi dari kebakaran, sambaran petir, ledakan, dan bencana alam." },
  { icon: "📺", title: "Isi Rumah & Elektronik", desc: "TV, kulkas, AC, laptop, komputer, kamera, dan perabot berharga lainnya dengan nilai pertanggungan sesuai kondisi barang." },
  { icon: "💎", title: "Perhiasan & Barang Berharga", desc: "Perhiasan emas, logam mulia, dan barang koleksi dengan nilai tinggi bisa dilindungi dengan endorsement khusus." },
  { icon: "🌊", title: "Banjir & Genangan Air", desc: "Kerusakan akibat banjir bandang, genangan air, dan banjir rob — risiko nyata di beberapa wilayah Batam seperti Sekupang dan Batu Aji." },
  { icon: "🔐", title: "Pencurian dengan Paksaan", desc: "Kehilangan akibat pencurian yang disertai kekerasan, pembobolan, atau perusakan pintu dan jendela rumah." },
  { icon: "🏗️", title: "Biaya Sewa Tempat Tinggal Sementara", desc: "Kompensasi biaya sewa hunian sementara selama rumah dalam proses perbaikan atau renovasi akibat klaim yang ditanggung." },
];

const faqs = [
  { q: "Apakah KPR mewajibkan asuransi rumah di Batam?", a: "Ya, hampir semua bank penyedia KPR di Batam — termasuk Bank BTN, BRI, Mandiri, dan BCA — mewajibkan asuransi kebakaran minimal selama tenor kredit berlangsung. Namun asuransi dari bank seringkali hanya mencakup bangunan saja dengan harga premi lebih mahal. Kami bisa memberikan polis yang lebih komprehensif dengan harga lebih kompetitif." },
  { q: "Berapa estimasi premi asuransi rumah di Batam?", a: "Premi asuransi kebakaran bangunan standar berkisar 0,10%–0,25% dari nilai bangunan per tahun. Contoh nyata: rumah tipe 70 di perumahan Batam Centre dengan nilai bangunan Rp 500 juta, premi kebakaran mulai Rp 500.000–1.250.000 per tahun. Untuk perluasan banjir dan isi rumah, premi bertambah sesuai nilai pertanggungan." },
  { q: "Apakah banjir di Batam ditanggung asuransi rumah?", a: "Banjir bukan cakupan standar, tapi bisa ditambahkan sebagai perluasan (extension). Mengingat beberapa kawasan Batam seperti Sekupang, Batu Aji, dan Tanjung Riau rentan banjir saat hujan deras, perluasan banjir sangat disarankan. Premi tambahan relatif kecil dibanding risiko kerusakan aktual." },
  { q: "Apa perbedaan asuransi rumah dan asuransi isi rumah?", a: "Asuransi rumah (fire insurance/property insurance) melindungi struktur bangunan fisik. Asuransi isi rumah (home content insurance) melindungi perabot, elektronik, dan barang di dalam rumah. Keduanya bisa digabung dalam satu polis — ini yang kami rekomendasikan agar tidak ada celah perlindungan." },
  { q: "Apakah rumah sewaan atau rumah yang dikontrakkan bisa diasuransikan?", a: "Bisa. Pemilik rumah tetap bisa mengasuransikan bangunan meski rumah disewakan kepada pihak lain. Penyewa juga bisa mengambil asuransi isi rumah untuk barang-barang pribadi mereka di dalam rumah tersebut secara terpisah." },
  { q: "Bagaimana jika rumah mengalami kebakaran — apa langkah pertama?", a: "Setelah api padam dan situasi aman, segera dokumentasikan kerusakan dengan foto/video sebelum ada pembersihan. Laporkan ke kami dalam 3×24 jam di nomor 0813-7333-6728. Jangan membuang puing atau melakukan perbaikan apapun sebelum ada survei dari pihak asuransi — ini penting agar klaim tidak ditolak." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Rumah Batam",
  description: "Asuransi rumah tinggal di Batam untuk perlindungan bangunan, isi rumah, banjir, dan pencurian dengan premi terjangkau.",
  provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};

export default function AsuransiRumahBatamPage() {
  return (
    <ProductPageLayout
      title="Asuransi Rumah Batam"
      subtitle="Proteksi Hunian & Isi Rumah Keluarga Anda"
      description="Rumah adalah investasi terbesar keluarga Anda di Batam. Kebakaran, banjir, dan pencurian adalah risiko nyata yang bisa menghancurkan aset dalam semalam. Dengan asuransi rumah yang tepat, nilai investasi properti Anda tetap terlindungi — premi mulai dari ratusan ribu rupiah per tahun."
      benefits={benefits}
      faqs={faqs}
      breadcrumbs={[
        { label: "Asuransi Properti", href: "/asuransi-properti" },
        { label: "Asuransi Rumah Batam", href: "/asuransi-properti/asuransi-rumah-batam" },
      ]}
      schema={schema}
      calculatorCard="rumah"
    >
      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Estimasi Premi Asuransi Rumah di Batam</h2>
        <p className="text-center text-[#475569] mb-8">Harga perlindungan yang jauh lebih murah dari biaya memperbaiki kerusakan sendiri.</p>
        <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0a1628] text-white">
                <th className="text-left p-4 font-semibold">Tipe Rumah (Batam)</th>
                <th className="text-left p-4 font-semibold">Nilai Bangunan</th>
                <th className="text-left p-4 font-semibold">Premi Kebakaran/th</th>
                <th className="text-left p-4 font-semibold">+ Banjir & Isi Rumah</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#e2e8f0]">
                <td className="p-4 text-[#0a1628] font-medium">Rumah Tipe 36 (Batu Aji/Sagulung)</td>
                <td className="p-4 text-[#475569]">Rp 200–300 jt</td>
                <td className="p-4 text-[#1a4fa0] font-semibold">Rp 200–750 rb/th</td>
                <td className="p-4 text-[#475569]">+Rp 300–600 rb/th</td>
              </tr>
              <tr className="border-b border-[#e2e8f0] bg-[#f8faff]">
                <td className="p-4 text-[#0a1628] font-medium">Rumah Tipe 70 (Batam Centre/Bengkong)</td>
                <td className="p-4 text-[#475569]">Rp 400–600 jt</td>
                <td className="p-4 text-[#1a4fa0] font-semibold">Rp 400 rb–1,5 jt/th</td>
                <td className="p-4 text-[#475569]">+Rp 500 rb–1 jt/th</td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="p-4 text-[#0a1628] font-medium">Rumah Mewah (Nongsa/Sukajadi)</td>
                <td className="p-4 text-[#475569]">Rp 1–3 M</td>
                <td className="p-4 text-[#1a4fa0] font-semibold">Rp 1–7,5 jt/th</td>
                <td className="p-4 text-[#475569]">+Rp 1–3 jt/th</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#475569] mt-3 text-center">* Estimasi premi. Harga aktual bergantung pada kondisi bangunan, lokasi, dan cakupan perlindungan. Hubungi kami untuk penawaran spesifik.</p>
      </div>
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Lengkapi Proteksi Keluarga Anda</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/blog/cara-klaim-asuransi-kebakaran-rumah" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Cara Klaim Kebakaran Rumah</h3>
            <p className="text-[#475569] text-sm">Panduan langkah demi langkah agar proses klaim asuransi rumah Anda berjalan lancar.</p>
          </Link>
          <Link href="/asuransi-personal-accident/pa-individu-keluarga" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">PA Individu & Keluarga</h3>
            <p className="text-[#475569] text-sm">Lindungi juga diri dan anggota keluarga dari risiko kecelakaan dan musibah.</p>
          </Link>
          <Link href="/asuransi-kendaraan/asuransi-mobil-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Mobil Batam</h3>
            <p className="text-[#475569] text-sm">Lengkapi proteksi aset keluarga — rumah sudah terlindungi, giliran kendaraan Anda.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

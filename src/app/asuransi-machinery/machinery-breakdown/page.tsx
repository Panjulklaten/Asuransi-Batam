// app/asuransi-machinery/machinery-breakdown/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Machinery Breakdown Batam – Kerusakan Mesin Pabrik & Mesin Produksi",
  description:
    "Asuransi Machinery Breakdown (MB) di Batam untuk mesin produksi, genset, kompresor, dan mesin pabrik. Lindungi dari kerusakan mendadak, kegagalan elektrikal, dan kesalahan operator. Konsultasi gratis dengan Rio.",
  canonical: "https://asuransibatam.com/asuransi-machinery/machinery-breakdown",
  languages: {
    id: "https://asuransibatam.com/asuransi-machinery/machinery-breakdown",
    en: "https://asuransibatam.com/en/machinery-insurance/machinery-breakdown",
  },
});

const benefits = [
  { icon: "⚙️", title: "Kerusakan Mendadak pada Mesin", desc: "Kerusakan fisik yang tiba-tiba dan tidak terduga pada mesin yang sudah terpasang, baik saat beroperasi, berhenti, maupun saat dibersihkan atau dirawat." },
  { icon: "🔌", title: "Kegagalan Elektrikal", desc: "Kerusakan akibat korsleting, arus lebih, atau gangguan pada sistem kelistrikan dan kontrol mesin." },
  { icon: "🧑‍🔧", title: "Kesalahan Operator & Perawatan", desc: "Kerusakan akibat kelalaian, kurang keahlian, atau kesalahan operator dan teknisi yang bersifat tiba-tiba." },
  { icon: "🛠️", title: "Cacat Desain, Material & Pengerjaan", desc: "Kerusakan yang bersumber dari kesalahan rancangan, cacat bahan, atau pengerjaan, sepanjang tidak menjadi tanggungan garansi pabrikan." },
  { icon: "🌀", title: "Gaya Sentrifugal & Benda Asing", desc: "Kerusakan karena gaya sentrifugal berlebih, serta benda asing yang masuk ke dalam mesin." },
  { icon: "📉", title: "Business Interruption (Opsional)", desc: "Perluasan untuk kerugian penghasilan akibat mesin berhenti, penting untuk lini produksi yang tidak bisa berhenti lama." },
];

const faqs = [
  {
    q: "Apa itu asuransi Machinery Breakdown?",
    a: "Machinery Breakdown (MB) menjamin kerusakan fisik yang mendadak dan tidak terduga pada mesin yang sudah terpasang dan siap beroperasi, misalnya akibat korsleting, kesalahan operator, cacat material, atau gaya sentrifugal. MB berfokus pada kerusakan dari dalam mesin itu sendiri.",
  },
  {
    q: "Apa bedanya MB dengan asuransi kebakaran atau properti?",
    a: "Mesin yang rusak karena kebakaran, petir, ledakan, atau banjir umumnya dijamin oleh polis properti atau kebakaran pabrik, bukan MB. MB menutup kerusakan mendadak dari penyebab internal seperti mekanis dan elektrikal. Karena itu keduanya saling melengkapi, dan saya biasanya menyarankan memeriksa keduanya bersamaan.",
  },
  {
    q: "Apa yang umumnya tidak dijamin?",
    a: "Keausan wajar (wear and tear), karat dan korosi, kerusakan bertahap, komponen habis pakai (belt, filter, oli), kerusakan yang ditanggung garansi pabrikan atau pemasok, serta kerusakan akibat perawatan buruk yang terus diabaikan. Mesin yang masih dalam masa instalasi dan pengujian biasanya masuk ke Erection All Risk, bukan MB.",
  },
  {
    q: "Apakah mesin lama bisa diasuransikan?",
    a: "Bisa, tetapi penanggung biasanya memperhatikan usia dan kondisi mesin. Mesin yang sudah lama beroperasi dapat diminta survei, riwayat perawatan, dan dasar nilai yang berbeda atau deductible yang lebih tinggi. Semakin rapi catatan servis Anda, semakin mudah proses akseptasinya.",
  },
  {
    q: "Nilai pertanggungan apa yang sebaiknya dipakai?",
    a: "Umumnya disarankan nilai penggantian mesin baru (replacement cost) agar tidak terjadi underinsurance. Untuk mesin impor, pertimbangkan biaya angkut, bea masuk, dan pemasangan karena ikut menentukan biaya penggantian sebenarnya.",
  },
  {
    q: "Bagaimana premi dihitung?",
    a: "Bergantung pada jenis dan nilai mesin, usia, kondisi dan riwayat perawatan, riwayat kerusakan, deductible, serta apakah perluasan Business Interruption diambil. Karena variabelnya banyak, angka pasti baru bisa disampaikan setelah data mesin lengkap.",
  },
  {
    q: "Bagaimana dengan alat berat, peralatan elektronik, dan boiler?",
    a: "Alat berat bergerak seperti excavator dan crane punya halaman tersendiri (Asuransi Alat Berat dan Asuransi Crane). Peralatan elektronik (EEI) serta boiler dan bejana tekan biasanya ditutup sebagai pertanggungan tersendiri. Semuanya bisa diajukan lewat Form SPPA Online dengan memilih Engineering.",
  },
  {
    q: "Apa yang harus dilakukan bila mesin rusak?",
    a: "Amankan lokasi, hentikan mesin, dan dokumentasikan dengan foto atau video. Simpan komponen yang rusak dan jangan membongkar atau memperbaiki sebelum survei penanggung, kecuali ada risiko keselamatan. Hubungi kami di 0813-7333-6728 untuk pelaporan klaim dalam 3×24 jam.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Machinery Breakdown Batam",
  description: "Asuransi kerusakan mesin pabrik dan mesin produksi (Machinery Breakdown) untuk industri di Batam.",
  provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};

export default function MachineryBreakdownPage() {
  return (
    <ProductPageLayout
      cluster="machinery"
      title="Asuransi Machinery Breakdown Batam"
      subtitle="Perlindungan Mesin Pabrik & Mesin Produksi"
      description="Satu mesin kunci yang rusak bisa menghentikan seluruh lini produksi, dan komponen khusus sering harus dipesan dari luar negeri. Machinery Breakdown menanggung biaya perbaikan atau penggantian akibat kerusakan mendadak pada mesin yang sudah terpasang."
      benefits={benefits}
      faqs={faqs}
      breadcrumbs={[
        { label: "Asuransi Machinery", href: "/asuransi-machinery" },
        { label: "Machinery Breakdown", href: "/asuransi-machinery/machinery-breakdown" },
      ]}
      schema={schema}
    >
      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">MB atau Polis Lain? Ini Perbedaannya</h2>
        <p className="text-center text-[#475569] mb-6">Mesin bisa tercakup di beberapa polis. Yang berbeda adalah penyebab kerusakan dan tahap hidup mesinnya.</p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-sm">
            <thead style={{ background: "#0a1628" }}>
              <tr>
                <th className="text-left text-white font-semibold px-5 py-3">Polis</th>
                <th className="text-left text-white font-semibold px-5 py-3">Fokus perlindungan</th>
                <th className="text-left text-white font-semibold px-5 py-3">Cocok untuk</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr><td className="px-5 py-3.5 font-semibold">Machinery Breakdown</td><td className="px-5 py-3.5">Kerusakan mendadak internal (mekanis, elektrikal) saat mesin siap beroperasi</td><td className="px-5 py-3.5">Mesin produksi, genset, kompresor, pompa</td></tr>
              <tr><td className="px-5 py-3.5 font-semibold">Properti / kebakaran pabrik</td><td className="px-5 py-3.5">Kebakaran, petir, ledakan, dan bahaya alam terhadap bangunan dan isinya</td><td className="px-5 py-3.5">Pabrik dan gudang</td></tr>
              <tr><td className="px-5 py-3.5 font-semibold">Erection All Risk (EAR)</td><td className="px-5 py-3.5">Masa pemasangan dan pengujian mesin baru</td><td className="px-5 py-3.5">Proyek instalasi mesin</td></tr>
              <tr><td className="px-5 py-3.5 font-semibold">Alat Berat / Crane</td><td className="px-5 py-3.5">Peralatan bergerak di proyek, plus tanggung gugat pihak ketiga</td><td className="px-5 py-3.5">Excavator, crane, dump truck</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">Tabel ini bersifat umum. Cakupan dan pengecualian final mengikuti wording polis masing-masing penanggung.</p>
      </div>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-3 text-center">Mengapa Penting bagi Industri di Batam</h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          Kawasan industri Batam seperti Batamindo, Muka Kuning, dan Kabil menampung pabrik elektronik, manufaktur komponen, dan fabrikasi dengan mesin yang bekerja nyaris tanpa henti: lini SMT, mesin injeksi plastik, CNC, genset, hingga kompresor. Pada mesin seperti ini, biaya terbesar sering bukan perbaikannya, melainkan waktu henti produksi sambil menunggu suku cadang.
        </p>
        <p className="text-[#475569] leading-relaxed">
          Banyak komponen khusus harus didatangkan dari luar negeri, sehingga waktu tunggunya bisa panjang. Karena itu, untuk mesin kritikal saya biasanya menyarankan membahas perluasan Business Interruption bersamaan dengan polis MB, bukan setelah kerusakan terjadi.
        </p>
      </div>

      <div className="mb-12 max-w-4xl mx-auto p-5 rounded-xl border" style={{ background: "#f0d08015", borderColor: "#c9a84c40" }}>
        <p className="text-sm text-gray-700 leading-relaxed">
          <strong>Ingin langsung mengajukan?</strong> Selain tombol Minta Penawaran, Anda bisa mengisi{" "}
          <Link href="/form-sppa" className="font-semibold text-[#1a4fa0] hover:underline">Form SPPA Online</Link>{" "}
          dan memilih Engineering, lalu Machinery Breakdown. Mengirim formulir belum berarti risiko otomatis diterima atau ditutup.
        </p>
      </div>

      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Pelengkap untuk Aset Industri</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/asuransi-properti/asuransi-pabrik-kawasan-industri-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Pabrik &amp; Kawasan Industri</h3>
            <p className="text-[#475569] text-sm">Perlindungan bangunan dan isi pabrik dari kebakaran dan bahaya alam.</p>
          </Link>
          <Link href="/asuransi-engineering/erection-all-risk" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Erection All Risk (EAR)</h3>
            <p className="text-[#475569] text-sm">Untuk masa pemasangan dan commissioning mesin baru, sebelum MB berlaku.</p>
          </Link>
          <Link href="/asuransi-machinery/asuransi-alat-berat" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Alat Berat</h3>
            <p className="text-[#475569] text-sm">Untuk peralatan bergerak di proyek, bukan mesin pabrik yang terpasang tetap.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}

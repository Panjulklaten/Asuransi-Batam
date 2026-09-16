import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";
import {
  TrendingUp,
  CloudRain,
  Ship,
  Anchor,
  PhoneCall,
  ClipboardCheck,
  Search,
  CircleDollarSign,
  FileText,
  Camera,
  FileCheck2,
  Building2,
  MapPin,
  Calculator,
  Construction,
  Truck,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Alat Berat Batam – Excavator, Bulldozer, Crane & Alat Konstruksi",
  description: "Asuransi alat berat terpercaya di Batam. Perlindungan Equipment All Risk untuk excavator, bulldozer, wheel loader, crane, dan alat galangan kapal. Proses klaim mudah. Hubungi 0813-7333-6728.",
  canonical: "https://asuransibatam.com/asuransi-machinery/asuransi-alat-berat",
  languages: {
      id: "https://asuransibatam.com/asuransi-machinery/asuransi-alat-berat",
      en: "https://asuransibatam.com/en/machinery-insurance/heavy-equipment-insurance",
    },
});

const benefits = [
  {
    icon: "🚜",
    title: "Equipment All Risk",
    desc: "Perlindungan menyeluruh alat berat dari semua risiko fisik yang tidak terduga — mulai dari kecelakaan di lokasi kerja, kerusakan struktural, hingga insiden di luar jam operasi. Cocok untuk alat berat di proyek konstruksi, pertambangan, maupun galangan kapal di Batam.",
  },
  {
    icon: "💥",
    title: "Kecelakaan Operasional",
    desc: "Menanggung kerusakan akibat tergelincir di permukaan lumpur, terguling di lereng galian, benturan antar unit, atau tabrakan dengan struktur bangunan saat manuver. Risiko ini sangat umum di lingkungan proyek padat seperti kawasan industri Batamindo dan Nongsa.",
  },
  {
    icon: "🌊",
    title: "Bencana Alam",
    desc: "Perlindungan finansial atas kerusakan akibat kebakaran, banjir, angin puting beliung, gempa bumi, dan petir. Batam sebagai wilayah kepulauan rentan cuaca ekstrem dan banjir rob di area pesisir, menjadikan perlindungan ini sangat relevan untuk alat berat di lahan terbuka.",
  },
  {
    icon: "⚙️",
    title: "Kerusakan Mesin (Breakdown)",
    desc: "Menanggung biaya perbaikan akibat kegagalan mekanis atau elektrikal yang tiba-tiba — seperti kerusakan pompa hidrolik, sistem transmisi, atau komponen engine akibat cacat material. Tidak termasuk keausan normal (wear and tear).",
  },
  {
    icon: "🏗️",
    title: "Perlindungan Selama Transit",
    desc: "Alat berat yang dimobilisasi antar lokasi proyek via flatbed atau trailer tetap terlindungi dari kecelakaan lalu lintas dan kerusakan saat bongkar muat. Perlindungan mencakup jalur darat di Pulau Batam maupun mobilisasi via kapal tongkang ke pulau-pulau sekitar.",
  },
  {
    icon: "👷",
    title: "Tanggung Jawab Pihak Ketiga (TPL)",
    desc: "Menanggung tuntutan hukum dan biaya ganti rugi kepada pihak ketiga jika alat berat Anda menyebabkan kerusakan properti atau cedera saat beroperasi. Perlindungan ini krusial untuk proyek yang berdekatan dengan permukiman atau fasilitas publik.",
  },
];

const faqs = [
  {
    q: "Alat berat apa saja yang bisa diasuransikan?",
    a: "Hampir semua jenis alat berat dapat diasuransikan, termasuk excavator (crawler & wheeled), bulldozer, wheel loader, motor grader, vibro roller, backhoe loader, skid steer loader, crane (crawler, mobile, tower), forklift, dump truck off-road, dan alat khusus galangan kapal seperti gantry crane dan floating crane. Jika alat Anda tidak tercantum di sini, hubungi kami untuk konsultasi — kemungkinan besar bisa kami akomodasi.",
  },
  {
    q: "Apakah alat berat sewaan bisa diasuransikan?",
    a: "Ya. Baik pemilik (lessor) maupun penyewa (lessee) dapat mengasuransikan alat berat sesuai kepentingan masing-masing. Dalam banyak kontrak sewa, penyewa diwajibkan secara kontraktual untuk memasang asuransi atas alat yang disewanya. Kami dapat membantu menyusun struktur polis yang sesuai dengan klausul kontrak sewa Anda agar tidak terjadi double insurance.",
  },
  {
    q: "Bagaimana cara menentukan nilai pertanggungan alat berat?",
    a: "Nilai pertanggungan didasarkan pada nilai pasar wajar (market value) atau nilai buku (book value), tergantung kesepakatan dengan penanggung. Untuk alat berat berusia di atas 5 tahun atau bernilai di atas Rp 2 miliar, biasanya diperlukan appraisal atau survei fisik. Kami menyarankan untuk tidak under-insure karena akan berdampak pada proporsionalitas pembayaran klaim.",
  },
  {
    q: "Berapa lama proses penerbitan polis asuransi alat berat?",
    a: "Untuk alat berat standar dengan dokumen lengkap, cover note (bukti sementara perlindungan) dapat diterbitkan dalam 1–2 hari kerja. Polis definitif umumnya terbit dalam 7–10 hari kerja. Untuk program khusus atau nilai pertanggungan besar yang memerlukan survei, prosesnya bisa memakan 7–14 hari kerja setelah survei selesai.",
  },
  {
    q: "Apakah perlindungan mencakup alat berat yang beroperasi di area galangan kapal atau sekitar air?",
    a: "Ya, dengan klausul perluasan yang tepat. Untuk alat berat di galangan kapal, dermaga, atau lahan reklamasi di Batam, kami dapat menyertakan perluasan risiko transit via tongkang, risiko terjatuh ke air, dan endorsement khusus lingkungan korosif. Kami berpengalaman menangani kebutuhan ini untuk klien di kawasan shipyard Tanjung Uncang dan Sekupang.",
  },
  {
    q: "Apa saja yang tidak ditanggung (eksklusi) dalam asuransi alat berat?",
    a: "Eksklusi umum meliputi: keausan normal (wear and tear), kerusakan akibat perawatan yang lalai, kerusakan akibat operator tidak berlisensi, kerugian akibat perang atau terorisme (kecuali ada endorsement khusus), serta kerusakan yang sudah ada sebelum polis diterbitkan (pre-existing damage). Detail eksklusi lengkap tercantum dalam dokumen polis.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Alat Berat Batam",
  description:
    "Perlindungan Equipment All Risk untuk excavator, bulldozer, crane, wheel loader, dan alat berat di galangan kapal serta proyek konstruksi di Batam.",
  areaServed: {
    "@type": "City",
    name: "Batam",
    addressRegion: "Kepulauan Riau",
    addressCountry: "ID",
  },
  provider: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam – Rio",
    telephone: "+6281373336728",
    url: "https://asuransibatam.com",
  },
  serviceType: "Equipment All Risk Insurance",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    areaServed: "Batam, Kepulauan Riau",
  },
};

export default function AsuransiAlatBeratPage() {
  return (
    <ProductPageLayout
      title="Asuransi Alat Berat Batam"
      subtitle="Equipment All Risk – Perlindungan Total untuk Aset Berat Anda"
      description={
        "Alat berat adalah investasi strategis bernilai miliaran rupiah yang menopang " +
        "proyek konstruksi, pertambangan, dan operasi galangan kapal di Batam. " +
        "Satu insiden tanpa proteksi yang tepat dapat menghentikan proyek, " +
        "membebani arus kas, dan berujung pada tuntutan hukum pihak ketiga. " +
        "Program Asuransi Alat Berat kami memberikan perlindungan Equipment All Risk " +
        "yang komprehensif — dirancang khusus untuk kondisi operasional di Batam, " +
        "termasuk lingkungan pesisir, kawasan industri, dan fasilitas shipyard."
      }
      benefits={benefits}
      faqs={faqs}
      breadcrumbs={[
        { label: "Asuransi Machinery", href: "/asuransi-machinery" },
        {
          label: "Asuransi Alat Berat",
          href: "/asuransi-machinery/asuransi-alat-berat",
        },
      ]}
      schema={schema}
    >
      {/* ── KONTEKS LOKAL BATAM ── */}
      <section className="mb-14">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-[#0a1628] mb-4">
          Mengapa Asuransi Alat Berat Sangat Penting di Batam?
        </h2>
        <p className="text-[#475569] leading-relaxed mb-8 max-w-3xl">
          Di Batam, alat berat bukan sekadar mesin kerja — ia adalah aset strategis
          yang menentukan jalannya proyek konstruksi, pengembangan kawasan industri,
          hingga aktivitas galangan kapal (shipyard). Tanpa proteksi yang tepat, satu
          insiden dapat menghentikan seluruh proyek dan menguras arus kas perusahaan
          secara signifikan.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-white">
            <TrendingUp size={22} className="text-[#c9a84c] mb-3" />
            <div className="font-display font-bold text-lg text-[#0a1628]">
              Rp 800 jt – 1,5 M
            </div>
            <p className="text-sm text-[#475569] mt-1">
              Nilai satu unit excavator kelas menengah
            </p>
          </div>
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-white">
            <Construction size={22} className="text-[#c9a84c] mb-3" />
            <div className="font-display font-bold text-lg text-[#0a1628]">
              &gt; Rp 5 M
            </div>
            <p className="text-sm text-[#475569] mt-1">
              Nilai crane besar di fasilitas docking
            </p>
          </div>
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-white">
            <CloudRain size={22} className="text-[#c9a84c] mb-3" />
            <div className="font-display font-bold text-lg text-[#0a1628]">
              Risiko Pesisir
            </div>
            <p className="text-sm text-[#475569] mt-1">
              Tanah labil, hujan tinggi, mobilisasi lintas pulau
            </p>
          </div>
        </div>
      </section>

      {/* ── STUDI KASUS NYATA ── */}
      <section className="mb-14">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-[#0a1628] mb-6">
          Studi Kasus Nyata: Galangan Kapal di Batam
        </h2>
        <div className="rounded-2xl border border-[#e2e8f0] bg-white overflow-hidden">
          <div className="flex items-center gap-3 px-6 py-5 bg-[#0a1628]">
            <Anchor size={22} className="text-[#c9a84c]" />
            <div>
              <div className="text-white font-display font-semibold">
                Shipyard – Kawasan Tanjung Uncang, Batam
              </div>
              <div className="text-white/50 text-xs">
                Lingkungan korosif · mobilisasi via tongkang
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto rounded-xl border border-[#e2e8f0] mb-5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#faf8f3]">
                    <th className="text-left py-3 px-4 text-[#0a1628] font-semibold">Unit Alat Berat</th>
                    <th className="text-left py-3 px-4 text-[#0a1628] font-semibold">Jumlah</th>
                    <th className="text-left py-3 px-4 text-[#0a1628] font-semibold">Catatan Risiko</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[#e2e8f0]">
                    <td className="py-3 px-4 text-[#0a1628] font-medium">Crawler crane 50 ton</td>
                    <td className="py-3 px-4 text-[#475569]">2 unit</td>
                    <td className="py-3 px-4 text-[#475569]">Korosi air laut & uap garam</td>
                  </tr>
                  <tr className="border-t border-[#e2e8f0] bg-[#faf8f3]">
                    <td className="py-3 px-4 text-[#0a1628] font-medium">Forklift heavy-duty</td>
                    <td className="py-3 px-4 text-[#475569]">3 unit</td>
                    <td className="py-3 px-4 text-[#475569]">Mobilisasi antar dok via tongkang</td>
                  </tr>
                  <tr className="border-t border-[#e2e8f0]">
                    <td className="py-3 px-4 text-[#0a1628] font-medium">Excavator amphibious</td>
                    <td className="py-3 px-4 text-[#475569]">1 unit</td>
                    <td className="py-3 px-4 text-[#475569]">Operasi di area pasang surut</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[#475569] text-sm leading-relaxed mb-4">
              Setelah asesmen risiko, kami menyusun program Equipment All Risk dengan
              perluasan klausul <strong className="text-[#0a1628]">Marine Transit</strong> dan{" "}
              <strong className="text-[#0a1628]">endorsement corrosion</strong> untuk
              komponen tertentu — bukan produk generik, melainkan struktur polis yang
              dikustomisasi untuk kebutuhan shipyard.
            </p>
            <div className="flex items-center gap-2 bg-[#faf8f3] rounded-xl px-4 py-3 w-fit">
              <CircleDollarSign size={18} className="text-[#1a4fa0]" />
              <span className="text-sm font-semibold text-[#0a1628]">
                Nilai pertanggungan disepakati: Rp 12 miliar
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SIMULASI KLAIM ── */}
      <section className="mb-14">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-[#0a1628] mb-2">
          Simulasi Klaim: Excavator Terguling di Proyek Reklamasi
        </h2>
        <p className="text-[#475569] leading-relaxed mb-8 max-w-3xl">
          <strong className="text-[#0a1628]">Skenario:</strong> Sebuah excavator Komatsu
          PC 200 sedang mengerjakan proyek reklamasi di area pesisir Nongsa. Akibat
          tanah yang tidak stabil, unit terguling ke arah lereng dan mengalami
          kerusakan pada boom, arm, dan kabin senilai estimasi Rp 380 juta.
        </p>
        <div className="space-y-3">
          {[
            {
              icon: PhoneCall,
              day: "H+1",
              title: "Laporan awal",
              desc: "Pemilik menghubungi agen di 0813-7333-6728. Foto dan video lokasi dikirim via WhatsApp sebagai bukti awal.",
            },
            {
              icon: ClipboardCheck,
              day: "H+3",
              title: "Pengajuan klaim tertulis",
              desc: "Formulir klaim resmi diisi dan dilampiri foto kerusakan, laporan kronologi kejadian, dan surat keterangan proyek.",
            },
            {
              icon: Search,
              day: "H+5",
              title: "Survei loss adjuster",
              desc: "Adjuster dari perusahaan asuransi datang ke lokasi untuk inspeksi fisik dan konfirmasi nilai kerusakan.",
            },
            {
              icon: CircleDollarSign,
              day: "H+14",
              title: "Persetujuan & pencairan klaim",
              desc: "Nilai ganti rugi Rp 362 juta (setelah deductible) disetujui dan dicairkan ke rekening bengkel rekanan yang ditunjuk.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-2xl border border-[#e2e8f0] bg-white"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#0a1628] flex items-center justify-center">
                <step.icon size={18} className="text-[#c9a84c]" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#1a4fa0] bg-[#1a4fa0]/10 px-2 py-0.5 rounded-full">
                    {step.day}
                  </span>
                  <span className="font-display font-semibold text-[#0a1628]">
                    {step.title}
                  </span>
                </div>
                <p className="text-sm text-[#475569] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-5 bg-[#faf8f3] rounded-xl px-4 py-3 w-fit">
          <ShieldCheck size={18} className="text-[#1a4fa0]" />
          <span className="text-sm font-semibold text-[#0a1628]">
            Total waktu penyelesaian: 18 hari kerja
          </span>
        </div>
      </section>

      {/* ── SYARAT DOKUMEN ── */}
      <section className="mb-14">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-[#0a1628] mb-2">
          Syarat Dokumen Pengajuan Asuransi Alat Berat
        </h2>
        <p className="text-[#475569] leading-relaxed mb-6 max-w-3xl">
          Untuk proses penerbitan polis yang lancar, siapkan dokumen berikut:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              icon: FileText,
              title: "Data Alat Berat",
              desc: "Merek, tipe/model, tahun pembuatan, nomor seri, dan kapasitas operasi.",
            },
            {
              icon: Camera,
              title: "Foto Terkini",
              desc: "Minimal 4 sudut (depan, belakang, kiri, kanan) dan foto komponen utama.",
            },
            {
              icon: FileCheck2,
              title: "Bukti Kepemilikan",
              desc: "Invoice pembelian, BPKB, atau kontrak sewa guna usaha (leasing).",
            },
            {
              icon: Building2,
              title: "Dokumen Perusahaan",
              desc: "SIUP/NIB, NPWP perusahaan, dan akta pendirian (klien korporasi).",
            },
            {
              icon: MapPin,
              title: "Lokasi Operasi",
              desc: "Alamat proyek atau site yang menjadi wilayah penggunaan alat.",
            },
            {
              icon: Calculator,
              title: "Nilai Pertanggungan",
              desc: "Estimasi nilai pasar wajar atau nilai buku, dibantu appraisal bila perlu.",
            },
          ].map((doc, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-xl border border-[#e2e8f0] bg-white"
            >
              <doc.icon size={18} className="flex-shrink-0 mt-0.5 text-[#1a4fa0]" />
              <div>
                <div className="font-semibold text-[#0a1628] text-sm mb-1">{doc.title}</div>
                <p className="text-sm text-[#475569] leading-relaxed">{doc.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-[#475569] mt-5 max-w-3xl">
          Untuk alat berat di atas nilai Rp 2 miliar atau dengan kondisi penggunaan
          khusus (seperti di lingkungan galangan kapal atau pertambangan), biasanya
          diperlukan survei fisik oleh tim underwriter sebelum polis diterbitkan.
        </p>
      </section>

      {/* ── INTERNAL LINKING ── */}
      <section>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-[#0a1628] mb-6">
          Perlindungan Mesin &amp; Alat Industri Lainnya di Batam
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <Link
            href="/asuransi-machinery"
            className="block p-5 rounded-2xl border border-[#e2e8f0] bg-white hover:border-[#c9a84c]/40 hover:shadow-lg transition-all"
          >
            <Truck size={20} className="text-[#c9a84c] mb-3" />
            <div className="font-display font-semibold text-[#0a1628] mb-1">
              Asuransi Machinery
            </div>
            <p className="text-sm text-[#475569] leading-relaxed">
              Perlindungan komprehensif untuk mesin produksi, generator, dan peralatan
              pabrik dalam satu payung polis.
            </p>
          </Link>
          <Link
            href="/asuransi-machinery/asuransi-crane"
            className="block p-5 rounded-2xl border border-[#e2e8f0] bg-white hover:border-[#c9a84c]/40 hover:shadow-lg transition-all"
          >
            <Construction size={20} className="text-[#c9a84c] mb-3" />
            <div className="font-display font-semibold text-[#0a1628] mb-1">
              Asuransi Crane
            </div>
            <p className="text-sm text-[#475569] leading-relaxed">
              Perlindungan spesifik untuk operasi pengangkatan beban berat di kawasan
              shipyard.
            </p>
          </Link>
          <Link
            href="/asuransi-engineering/contractor-all-risk"
            className="block p-5 rounded-2xl border border-[#e2e8f0] bg-white hover:border-[#c9a84c]/40 hover:shadow-lg transition-all"
          >
            <Ship size={20} className="text-[#c9a84c] mb-3" />
            <div className="font-display font-semibold text-[#0a1628] mb-1">
              Contractor All Risk (CAR)
            </div>
            <p className="text-sm text-[#475569] leading-relaxed">
              Perlindungan menyeluruh untuk proyek konstruksi Anda, dari ground
              breaking hingga masa pemeliharaan.
            </p>
          </Link>
        </div>
      </section>
    </ProductPageLayout>
  );
}

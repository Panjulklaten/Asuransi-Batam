import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import {
  Gavel,
  Scale,
  ShieldCheck,
  Cog,
  Users,
  Wrench,
  AlertTriangle,
  MapPin,
  Hammer,
  Calculator,
  ListChecks,
  Truck,
  Repeat,
  FileSearch,
  BadgeCheck,
  Mountain,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Alat Berat Pertambangan – Wajib, Apa yang Ditanggung & Cara Pilihnya",
  description: "Operasi tambang tanpa asuransi alat berat adalah risiko finansial yang terlalu besar. Pelajari jenis coverage yang wajib ada, regulasi K3 yang berlaku, dan cara memilih polis yang tepat untuk alat berat di area pertambangan.",
  canonical: "https://asuransibatam.com/blog/asuransi-alat-berat-pertambangan",
  languages: {
      id: "https://asuransibatam.com/blog/asuransi-alat-berat-pertambangan",
      en: "https://asuransibatam.com/en/blog/mining-heavy-equipment-insurance",
    },
});
const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asuransi Alat Berat Pertambangan: Wajib, Apa yang Ditanggung & Cara Pilihnya",
  datePublished: "2026-05-06",
  dateModified: "2026-05-06",
  author: { "@type": "Person", name: "Rio" },
  publisher: { "@type": "Organization", name: "Asuransi Batam" },
};

// FAQPage JSON-LD — sumber tunggal untuk schema & accordion FAQ visual di bawah.
const faqItems = [
  {
    question: "Apakah asuransi alat berat tambang wajib secara hukum?",
    answer:
      "Tidak ada undang-undang yang secara eksplisit mewajibkan asuransi alat berat tambang. Namun Kepmen ESDM No. 1827 K/30/MEM/2018 mewajibkan manajemen risiko terhadap aset operasional, dan dalam praktiknya lembaga pembiayaan (leasing/KPM) hampir selalu mensyaratkan polis aktif selama masa angsuran — sehingga secara kontraktual menjadi kewajiban.",
  },
  {
    question: "Apakah polis EAR biasa bisa dipakai untuk alat berat yang beroperasi di tambang?",
    answer:
      "Sebaiknya tidak tanpa klausul mining tambahan. Polis EAR standar untuk konstruksi umum tidak otomatis mencakup risiko spesifik tambang seperti tertimbun material longsor atau ground subsidence. Klaim berisiko ditolak jika ruang lingkup polis tidak menyebutkan operasi pertambangan secara eksplisit.",
  },
  {
    question: "Apa perbedaan Agreed Value dan Indemnity Value dalam polis alat berat?",
    answer:
      "Agreed Value menetapkan nilai pertanggungan tetap yang sudah disepakati di awal polis, sehingga nilai klaim sudah pasti. Indemnity Value menghitung ganti rugi berdasarkan nilai pasar unit saat klaim terjadi, yang bisa lebih rendah akibat depresiasi. Untuk unit mahal dengan nilai fluktuatif, Agreed Value umumnya lebih menguntungkan.",
  },
  {
    question: "Apakah biaya evakuasi alat berat dari lokasi tambang terpencil ditanggung polis?",
    answer:
      "Tergantung sublimit yang tercantum dalam polis. Evakuasi unit besar dari area tambang remote bisa sangat mahal, jadi pastikan ada sublimit khusus untuk ongkos evakuasi dan transportasi sebelum menandatangani polis.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

// --- Helper presentational components (lokal, konsisten dengan artikel sebelumnya) ---

function SectionHeading({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 not-prose font-display font-bold text-[#0a1628] text-2xl md:text-[1.65rem] mt-12 mb-4">
      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
        <Icon className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
      </span>
      {children}
    </h2>
  );
}

function SubHeading({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <h3 className="flex items-center gap-2.5 not-prose font-display font-bold text-[#0a1628] text-lg mt-8 mb-3">
      <Icon className="w-[18px] h-[18px] text-[#a07830]" strokeWidth={2} />
      {children}
    </h3>
  );
}

function IconList({ items }: { items: { icon: React.ElementType; title?: string; text: React.ReactNode }[] }) {
  return (
    <ul className="not-prose grid sm:grid-cols-2 gap-3 my-5 list-none p-0">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <li key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#faf8f3] border border-[#eee3cc]">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white border border-[#e2e8f0] shrink-0 mt-0.5">
              <Icon className="w-[14px] h-[14px] text-[#1a4fa0]" strokeWidth={2} />
            </span>
            <span className="text-sm text-[#374151] leading-relaxed">
              {item.title && <span className="font-semibold text-[#0a1628] block">{item.title}</span>}
              {item.text}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function Steps({ items }: { items: { title: string; desc?: React.ReactNode }[] }) {
  return (
    <ol className="not-prose relative my-6 list-none p-0 space-y-5 ml-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0a1628] text-[#c9a84c] font-display font-bold text-sm shrink-0">
            {i + 1}
          </span>
          <div className="pt-0.5">
            <p className="font-semibold text-[#0a1628] m-0 text-[15px]">{item.title}</p>
            {item.desc && <p className="text-sm text-[#475569] mt-1 mb-0">{item.desc}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function ArticleAsuransiAlatBeratPertambanganPage() {
  return (
    <ArticleLayout cluster="machinery"
      title="Asuransi Alat Berat Pertambangan: Wajib, Apa yang Ditanggung & Cara Pilihnya"
      description="Area pertambangan adalah salah satu lingkungan kerja paling keras di dunia. Alat berat yang beroperasi di sana menghadapi risiko yang jauh lebih tinggi dibanding proyek konstruksi biasa."
      date="6 Mei 2026"
      category="Machinery"
      readTime="10 menit"
      breadcrumbs={[{ label: "Asuransi Alat Berat Pertambangan", href: "/blog/asuransi-alat-berat-pertambangan" }]}
      schema={schema}
      faqSchema={faqSchema}
    >
      <p>
        Operasi pertambangan — baik tambang nikel, bauksit, pasir kuarsa, maupun batu bara —
        mengandalkan armada{" "}
        <Link href="/asuransi-machinery/asuransi-alat-berat" className="font-medium">
          alat berat
        </Link>{" "}
        yang bekerja dalam kondisi ekstrem: debu silika, lumpur tebal, kemiringan tajam, dan
        siklus operasi 10–20 jam per hari. Satu unit dump truck tambang bisa bernilai
        Rp 3–5 miliar. Excavator mining class bisa mencapai Rp 5–8 miliar — pelajari juga
        karakteristik risiko spesifik{" "}
        <Link href="/blog/asuransi-excavator-dan-bulldozer" className="font-medium">
          asuransi excavator dan bulldozer
        </Link>{" "}
        sebelum menentukan jenis polis. Ketika unit seperti ini mengalami kerusakan parah atau
        total loss tanpa perlindungan asuransi, kerugiannya bukan hanya nilai unit — tapi juga
        kehilangan produksi harian yang bisa mencapai puluhan juta rupiah per hari.
      </p>
      <p>
        Ini bukan sekadar soal bijak atau tidak bijak. Dalam konteks pertambangan Indonesia,
        ada dimensi regulasi yang membuat asuransi alat berat bukan lagi pilihan opsional.
      </p>

      <SectionHeading icon={Gavel}>Regulasi yang Mewajibkan Perlindungan Aset di Area Tambang</SectionHeading>
      <p>
        Berdasarkan <strong>Kepmen ESDM No. 1827 K/30/MEM/2018</strong> tentang Pedoman
        Pelaksanaan Kaidah Teknik Pertambangan yang Baik, perusahaan pertambangan wajib
        menerapkan manajemen risiko yang mencakup perlindungan terhadap aset operasional.
        Dalam praktiknya, lembaga keuangan yang membiayai pembelian alat berat tambang
        (leasing atau KPM) hampir selalu mensyaratkan polis asuransi aktif sebagai syarat
        pencairan dan selama masa angsuran berlangsung.
      </p>
      <p>
        Artinya, jika alat berat Anda masih dalam pembiayaan — yang merupakan kondisi mayoritas
        kontraktor tambang skala menengah — asuransi secara praktis sudah menjadi kewajiban
        kontraktual, bukan pilihan.
      </p>

      <SectionHeading icon={Scale}>Perbedaan Risiko Tambang vs Proyek Konstruksi Biasa</SectionHeading>
      <p>
        Banyak pemilik alat berat yang mengasuransikan unit tambang mereka dengan polis standar
        yang sama seperti untuk{" "}
        <Link href="/blog/asuransi-alat-berat-proyek-konstruksi" className="font-medium">
          proyek konstruksi gedung
        </Link>
        . Ini adalah kesalahan yang berpotensi mahal. Underwriter asuransi membedakan dua
        konteks ini karena profil risikonya memang berbeda secara signifikan:
      </p>

      <div className="overflow-x-auto my-6 rounded-2xl border border-[#e2e8f0]">
        <table className="w-full text-sm">
          <thead className="bg-[#0a1628] text-white">
            <tr>
              <th className="text-left p-4">Faktor Risiko</th>
              <th className="p-4 text-left">Konstruksi Umum</th>
              <th className="p-4 text-left">Pertambangan</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Jam operasi harian", "8–10 jam", "10–20 jam (shift ganda)"],
              ["Kondisi medan", "Relatif terkontrol", "Ekstrem: lereng, lumpur, batu cadas"],
              ["Paparan debu abrasif", "Sedang", "Tinggi (silika, mineral abrasif)"],
              ["Risiko longsor / ground failure", "Rendah–sedang", "Tinggi (terutama open pit)"],
              ["Jarak dari fasilitas perbaikan", "Dekat (dalam kota)", "Jauh (remote area)"],
              ["Nilai unit yang beroperasi", "Rp 500 jt – 2 M", "Rp 2 M – 8 M+"],
            ].map(([a, b, c], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="p-4 font-medium text-[#0a1628]">{a}</td>
                <td className="p-4 text-[#475569]">{b}</td>
                <td className="p-4 text-[#475569]">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        Perbedaan profil risiko ini tercermin dalam premi yang lebih tinggi dan dalam klausul
        khusus yang harus ada dalam polis untuk operasi tambang. Jika Anda menggunakan polis
        standar tanpa klausul pertambangan, klaim yang terjadi di area tambang bisa ditolak
        karena dianggap di luar ruang lingkup yang diperjanjikan.
      </p>

      <SectionHeading icon={ShieldCheck}>Jenis Polis yang Relevan untuk Alat Berat Pertambangan</SectionHeading>

      <SubHeading icon={Cog}>1. Equipment All Risk (EAR) dengan Klausul Mining</SubHeading>
      <p>
        Polis utama yang melindungi unit alat berat dari kerusakan fisik akibat semua risiko
        yang tidak dikecualikan secara eksplisit. Untuk operasi tambang, klausul mining
        ditambahkan untuk mengakomodasi risiko spesifik seperti tertimbun material longsor,
        kerusakan akibat ground subsidence, dan operasi di area izin tambang (IUP).
      </p>

      <SubHeading icon={Wrench}>2. Machinery Breakdown (MB)</SubHeading>
      <p>
        Perlindungan terhadap kerusakan mesin yang terjadi secara tiba-tiba dan tidak terduga
        akibat kegagalan mekanis internal — bukan akibat faktor eksternal. Contohnya: piston
        patah tiba-tiba, bearing hancur tanpa tanda-tanda sebelumnya, atau sistem transmisi
        rusak mendadak. Polis MB sangat relevan untuk alat tambang karena jam operasi yang
        tinggi mempercepat keausan komponen internal meski mesin tetap dirawat secara rutin.
      </p>

      <SubHeading icon={Users}>3. Third Party Liability (TPL)</SubHeading>
      <p>
        Di area tambang yang padat dengan pekerja, kendaraan ringan, dan infrastruktur,
        risiko alat berat menabrak atau merusak aset/orang lain cukup tinggi. Polis TPL
        menanggung tuntutan ganti rugi dari pihak ketiga yang dirugikan oleh operasi
        alat berat Anda.
      </p>

      <SectionHeading icon={AlertTriangle}>Yang Sering Tidak Ditanggung — Baca Sebelum Beli Polis</SectionHeading>
      <p>
        Ini bagian yang paling penting dan paling sering diabaikan. Beberapa pengecualian umum
        yang perlu Anda pahami sebelum menandatangani polis:
      </p>
      <IconList
        items={[
          {
            icon: Wrench,
            title: "Keausan normal dan kerusakan bertahap",
            text: "Komponen yang aus secara perlahan karena usia dan penggunaan normal bukan tanggung jawab polis asuransi, termasuk filter, seal, dan komponen habis pakai lainnya.",
          },
          {
            icon: AlertTriangle,
            title: "Kerusakan akibat overloading yang disengaja",
            text: "Jika dump truck dimuati melebihi kapasitas yang tercantum dalam spesifikasi teknis, kerusakan yang timbul biasanya tidak ditanggung.",
          },
          {
            icon: MapPin,
            title: "Operasi di luar area yang dideklarasikan",
            text: "Jika polis diterbitkan untuk operasi di Batam namun unit digunakan di Kalimantan tanpa notifikasi, klaim bisa ditolak karena perbedaan lokasi operasi.",
          },
          {
            icon: Hammer,
            title: "Kerusakan saat unit dalam perbaikan atau modifikasi",
            text: "Unit yang sedang dibongkar di bengkel untuk perbaikan umumnya tidak dilindungi selama proses tersebut berlangsung.",
          },
        ]}
      />

      <SectionHeading icon={Calculator}>Cara Menghitung Premi Asuransi Alat Berat Tambang</SectionHeading>
      <p>
        Tidak ada tarif baku yang dipublikasikan untuk asuransi alat berat seperti halnya
        asuransi kendaraan bermotor (yang diatur OJK). Premi dihitung secara <em>case by case</em>{" "}
        oleh underwriter berdasarkan sejumlah faktor:
      </p>
      <IconList
        items={[
          { icon: Cog, text: "Jenis dan merek unit — merek dengan suku cadang mudah didapat cenderung premi lebih rendah" },
          { icon: Repeat, text: "Usia unit dan jam operasi (hour meter) — unit lebih tua dan jam tinggi = premi lebih tinggi" },
          { icon: Mountain, text: "Lokasi dan jenis operasi — tambang open pit lebih berisiko dari quarry biasa" },
          { icon: Calculator, text: "Nilai pertanggungan — apakah berdasarkan market value atau replacement value" },
          { icon: ListChecks, text: "Rekam jejak klaim — perusahaan dengan histori klaim bersih mendapat rate lebih kompetitif" },
          { icon: Truck, text: "Jumlah unit dalam satu polis — fleet policy untuk banyak unit biasanya lebih efisien" },
        ]}
      />
      <p>
        Sebagai gambaran umum, premi EAR untuk alat berat tambang biasanya berkisar antara{" "}
        <strong>1,5% hingga 3,5%</strong> dari nilai pertanggungan per tahun, tergantung
        faktor-faktor di atas. Untuk mendapatkan angka yang akurat sesuai kondisi armada Anda,
        konsultasi langsung dengan agen asuransi yang berpengalaman di sektor ini adalah
        langkah yang paling tepat.
      </p>

      <SectionHeading icon={ListChecks}>Tips Memilih Polis yang Tepat untuk Operasi Tambang Anda</SectionHeading>
      <Steps
        items={[
          {
            title: "Pastikan ada klausul mining atau heavy equipment untuk tambang",
            desc: "Jangan terima polis standar yang tidak menyebutkan jenis operasi secara eksplisit.",
          },
          {
            title: "Cek territorial coverage",
            desc: "Pastikan polis mencakup wilayah di mana unit beroperasi, termasuk rute transit jika unit sering dipindahkan antar lokasi.",
          },
          {
            title: "Bandingkan basis ganti rugi",
            desc: "Agreed Value (nilai tetap yang disepakati) lebih menguntungkan dibanding Indemnity Value (nilai pasar saat klaim) untuk unit mahal yang nilainya fluktuatif.",
          },
          {
            title: "Perhatikan sublimit untuk ongkos evakuasi",
            desc: (
              <>
                Mengevakuasi excavator dari area tambang terpencil bisa sangat mahal — pelajari
                juga seluk-beluk{" "}
                <Link href="/blog/asuransi-pengiriman-mesin-alat-berat" className="font-medium">
                  asuransi pengiriman mesin alat berat
                </Link>{" "}
                agar tidak ada celah perlindungan saat unit dipindahkan.
              </>
            ),
          },
          {
            title: "Gunakan fleet policy jika punya lebih dari 3 unit",
            desc: "Mengasuransikan semua unit dalam satu polis fleet biasanya lebih hemat dan lebih mudah dikelola dari sisi administrasi klaim.",
          },
        ]}
      />

      <SectionHeading icon={FileSearch}>Pertanyaan yang Sering Diajukan</SectionHeading>
      <div className="space-y-3 not-prose">
        {faqItems.map((item) => (
          <details key={item.question} className="group p-5 rounded-xl border border-[#e2e8f0] bg-[#faf8f3]">
            <summary className="font-semibold text-[#0a1628] cursor-pointer list-none flex items-center justify-between gap-3">
              <span className="flex items-center gap-3">
                <BadgeCheck className="w-[16px] h-[16px] text-[#c9a84c] shrink-0" strokeWidth={2} />
                {item.question}
              </span>
              <span className="text-[#c9a84c] group-open:rotate-45 transition-transform text-xl leading-none shrink-0">+</span>
            </summary>
            <p className="text-[#374151] text-sm mt-3 mb-0 leading-relaxed pl-7">{item.answer}</p>
          </details>
        ))}
      </div>

      <div className="my-8 p-6 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0]">
        <div className="flex items-center gap-2.5 mb-3">
          <ShieldCheck className="w-5 h-5 text-[#c9a84c]" strokeWidth={2} />
          <h3 className="font-display font-bold text-[#0a1628] m-0">
            Diskusikan Kebutuhan Asuransi Alat Berat Tambang Anda
          </h3>
        </div>
        <p className="text-[#475569] mb-4">
          Setiap armada tambang punya profil risiko yang unik. Rio dapat membantu menganalisis
          kebutuhan coverage yang sesuai, membandingkan penawaran dari beberapa perusahaan
          asuransi, dan memastikan tidak ada celah perlindungan yang terlewat dalam polis Anda.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/asuransi-machinery/asuransi-alat-berat"
            className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm"
          >
            Lihat Produk Asuransi Alat Berat
          </Link>
          <Link
            href="/kontak"
            className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm"
          >
            Konsultasi Gratis
          </Link>
        </div>
      </div>
    
      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Halaman Terkait</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Produk &amp; Layanan</p>
            <ul className="space-y-2">
              <li><a href="/asuransi-machinery/asuransi-alat-berat" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Alat Berat Batam</a></li>
              <li><a href="/asuransi-machinery/asuransi-crane" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Crane Batam</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait</p>
            <ul className="space-y-2">
              <li><a href="/blog/asuransi-dump-truck-batam-proyek-konstruksi" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Dump Truck Proyek Konstruksi</a></li>
              <li><a href="/blog/asuransi-pengiriman-mesin-alat-berat" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Pengiriman Mesin & Alat Berat</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}

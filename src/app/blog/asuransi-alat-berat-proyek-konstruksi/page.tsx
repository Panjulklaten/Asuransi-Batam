import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import {
  Scale,
  Truck,
  Pickaxe,
  Mountain,
  Waves,
  CreditCard,
  ArrowUpFromLine,
  Calculator,
  ClipboardList,
  Siren,
  FileSearch,
  BadgeCheck,
  ShieldCheck,
  AlertTriangle,
  CircleDollarSign,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Alat Berat Proyek Konstruksi – Panduan Lengkap untuk Kontraktor",
  description: "Kontraktor yang tidak mengasuransikan alat berat mereka menanggung risiko yang tidak perlu. Pahami pengertian EAR vs CAR, alat apa yang wajib diasuransikan, cara hitung nilai pertanggungan, dan tips klaim yang benar.",
  canonical: "https://asuransibatam.com/blog/asuransi-alat-berat-proyek-konstruksi",
  languages: {
      id: "https://asuransibatam.com/blog/asuransi-alat-berat-proyek-konstruksi",
      en: "https://asuransibatam.com/en/blog/heavy-equipment-insurance-construction-projects",
    },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asuransi Alat Berat untuk Proyek Konstruksi: Panduan Lengkap Kontraktor",
  datePublished: "2026-05-06",
  dateModified: "2026-05-06",
  author: { "@type": "Person", name: "Rio" },
  publisher: { "@type": "Organization", name: "Asuransi Batam" },
};

// FAQPage JSON-LD — sumber tunggal untuk schema & accordion FAQ visual di bawah.
const faqItems = [
  {
    question: "Apakah asuransi alat berat bisa diklaim jika rusak karena banjir di area proyek?",
    answer:
      "Bisa, selama polis mencakup risiko bencana alam termasuk banjir — yang umumnya sudah ada dalam polis EAR standar. Yang perlu dipastikan: lokasi kejadian sesuai dengan wilayah yang dideklarasikan dalam polis, dan kerusakan bersifat tiba-tiba bukan akibat unit dibiarkan di area yang sudah diketahui berpotensi banjir tanpa tindakan pencegahan.",
  },
  {
    question: "Bagaimana jika alat berat dicuri dari lokasi proyek?",
    answer:
      "Pencurian alat berat umumnya ditanggung dalam polis EAR, tapi dengan syarat ada laporan polisi yang dibuat segera setelah kejadian diketahui. Untuk klaim pencurian, biasanya ada masa tunggu (60–90 hari) sebelum ganti rugi dibayarkan, memberi waktu bagi pihak berwajib melakukan pencarian.",
  },
  {
    question: "Apakah operator alat berat perlu memiliki SIO untuk klaim bisa diproses?",
    answer:
      "Ya, di sebagian besar polis. SIO (Surat Izin Operator) adalah bukti operator kompeten dan berlisensi. Jika operator tidak memiliki SIO yang valid saat kecelakaan terjadi, perusahaan asuransi berhak menolak klaim dengan alasan kelalaian prosedur keselamatan.",
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

// --- Helper presentational components (lokal, konsisten dengan artikel limbah B3) ---

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

export default function ArticleAsuransiAlatBeratKonstruksiPage() {
  return (
    <ArticleLayout cluster="machinery"
      title="Asuransi Alat Berat untuk Proyek Konstruksi: Panduan Lengkap Kontraktor"
      description="Memahami perbedaan EAR dan CAR, menentukan nilai pertanggungan yang tepat, dan tahu apa yang harus dilakukan saat klaim — ini tiga hal yang menentukan apakah asuransi alat berat Anda benar-benar melindungi atau hanya formalitas."
      date="6 Mei 2026"
      category="Machinery"
      readTime="11 menit"
      breadcrumbs={[{ label: "Asuransi Alat Berat Proyek Konstruksi", href: "/blog/asuransi-alat-berat-proyek-konstruksi" }]}
      schema={schema}
      faqSchema={faqSchema}
    >
      <p>
        Di dunia konstruksi, alat berat bukan sekadar kendaraan — mereka adalah tulang punggung
        produktivitas proyek. Tanpa excavator, pekerjaan galian mandek. Tanpa bulldozer, land
        clearing tidak bisa dimulai. Tanpa wheel loader, siklus material terhenti. Satu unit
        yang rusak di tengah proyek bukan hanya masalah biaya perbaikan — tapi juga denda
        keterlambatan, reputasi kontraktor, dan kepercayaan pemberi kerja. Risiko inilah yang
        seharusnya ditutup lewat{" "}
        <Link href="/asuransi-machinery/asuransi-alat-berat" className="font-medium">
          asuransi alat berat
        </Link>{" "}
        yang tepat sejak awal proyek berjalan.
      </p>
      <p>
        Anehnya, masih banyak kontraktor yang mengasuransikan alat berat mereka secara asal-asalan:
        mengambil polis yang murah tanpa memahami apa yang benar-benar dilindungi, atau bahkan
        tidak mengasuransikan sama sekali dengan asumsi &quot;selama ini belum pernah ada masalah
        besar.&quot; Artikel ini hadir untuk mengubah pendekatan itu menjadi lebih strategis.
      </p>

      <SectionHeading icon={Scale}>Pengertian Asuransi Alat Berat: EAR vs CAR, Apa Bedanya?</SectionHeading>
      <p>
        Ini adalah titik kebingungan yang paling umum di kalangan kontraktor pemula. Dua istilah
        ini sering dipertukarkan, padahal keduanya melindungi hal yang berbeda.
      </p>

      <h3>CAR — Contractor&apos;s All Risk</h3>
      <p>
        CAR adalah polis yang melindungi <em>proyek konstruksi secara keseluruhan</em> — mulai
        dari material bangunan, pekerjaan permanen yang sudah selesai, hingga alat berat yang
        digunakan dalam proyek tersebut. Kata kuncinya: <strong>proyek</strong>. Polis{" "}
        <Link href="/asuransi-engineering/contractor-all-risk" className="font-medium">
          Contractor&apos;s All Risk (CAR)
        </Link>{" "}
        terikat pada satu proyek spesifik dengan nilai kontrak, lokasi, dan jangka waktu
        tertentu. Saat proyek selesai, polis berakhir. Jika alat dipindahkan ke proyek lain
        yang tidak masuk dalam polis yang sama, perlindungan gugur.
      </p>
      <p>
        CAR umumnya dipersyaratkan oleh pemilik proyek (owner) dalam dokumen tender atau
        kontrak — terutama untuk proyek pemerintah dan proyek swasta berskala besar.
      </p>

      <h3>EAR — Equipment All Risk</h3>
      <p>
        EAR adalah polis yang melindungi <em>unit alat berat itu sendiri</em>, bukan proyeknya.
        Perlindungan mengikuti unit ke mana pun ia beroperasi selama jangka waktu polis aktif —
        bisa satu proyek, bisa berpindah-pindah, bisa juga saat unit sedang dalam kondisi
        standby di gudang. EAR adalah pilihan yang lebih tepat bagi kontraktor yang memiliki
        armada sendiri dan menggunakannya di berbagai proyek secara bergantian.
      </p>

      <div className="overflow-x-auto my-6 rounded-2xl border border-[#e2e8f0]">
        <table className="w-full text-sm">
          <thead className="bg-[#0a1628] text-white">
            <tr>
              <th className="text-left p-4">Aspek</th>
              <th className="p-4 text-left">CAR</th>
              <th className="p-4 text-left">EAR</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Objek yang dilindungi", "Proyek (termasuk alat di dalamnya)", "Unit alat berat spesifik"],
              ["Durasi polis", "Sesuai masa proyek", "Per tahun (bisa diperpanjang)"],
              ["Portabilitas", "Terikat satu proyek", "Mengikuti unit ke semua lokasi"],
              ["Siapa yang biasanya membeli", "Kontraktor (atas permintaan owner)", "Pemilik alat berat"],
              ["Cocok untuk", "Proyek tunggal besar", "Armada multi-proyek"],
              ["Coverage alat berat saat transit", "Terbatas / tidak selalu ada", "Termasuk dalam polis"],
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
        Dalam praktiknya, banyak kontraktor menggunakan <strong>keduanya secara bersamaan</strong>:
        CAR untuk memenuhi persyaratan kontrak proyek, dan EAR sebagai perlindungan permanen
        untuk armada alat berat mereka di luar konteks proyek tertentu. Koordinasi antara dua
        polis ini perlu dilakukan dengan cermat agar tidak ada celah coverage maupun overlap
        yang tidak perlu.
      </p>

      <SectionHeading icon={Truck}>Alat Berat Apa Saja yang Perlu Diasuransikan?</SectionHeading>
      <p>
        Jawaban singkatnya: semua unit yang nilainya signifikan dan yang jika rusak akan
        mengganggu operasional proyek secara material. Berikut panduan praktisnya berdasarkan
        kategori alat:
      </p>
      <IconList
        items={[
          {
            icon: Pickaxe,
            title: "Excavator (berbagai kelas)",
            text: "Dari mini excavator 5 ton hingga kelas 30–50 ton. Alat dengan frekuensi klaim tertinggi karena intensitas penggunaannya.",
          },
          {
            icon: Mountain,
            title: "Bulldozer",
            text: "Rentan kerusakan undercarriage dan kecelakaan di lereng atau tanah lunak. Suku cadang track-nya juga mahal.",
          },
          {
            icon: Truck,
            title: "Wheel Loader & Motor Grader",
            text: (
              <>
                Sering beroperasi di area lalu lintas padat. Tambahkan{" "}
                <Link href="/asuransi-liability/public-liability" className="font-medium">
                  Public Liability
                </Link>{" "}
                untuk antisipasi tuntutan pihak ketiga.
              </>
            ),
          },
          {
            icon: Waves,
            title: "Vibro Roller & Compactor",
            text: "Sering rusak akibat operasi di tanah tidak stabil atau tergelincir saat permukaan basah.",
          },
          {
            icon: ArrowUpFromLine,
            title: "Crane",
            text: (
              <>
                Risiko tinggi saat pengangkatan beban berat. Pelajari ketentuan{" "}
                <Link href="/asuransi-machinery/asuransi-crane" className="font-medium">
                  asuransi crane
                </Link>{" "}
                secara khusus karena karakteristik risikonya berbeda dari alat berat lain.
              </>
            ),
          },
          {
            icon: CreditCard,
            title: "Alat berat dalam cicilan pembiayaan",
            text: "Prioritas mutlak — jika unit rusak total dan tidak diasuransikan, Anda tetap wajib membayar sisa cicilan tanpa unit yang menghasilkan pendapatan.",
          },
        ]}
      />

      <SectionHeading icon={Calculator}>Cara Menentukan Nilai Pertanggungan yang Tepat</SectionHeading>
      <p>
        Menentukan nilai pertanggungan (sum insured) yang benar adalah langkah paling kritis
        dalam proses pengambilan polis. Dua kesalahan yang paling umum:
      </p>
      <IconList
        items={[
          {
            icon: AlertTriangle,
            title: "Underinsurance (nilai terlalu rendah)",
            text: "Misalnya unit bernilai Rp 1,5 miliar tapi diasuransikan hanya Rp 800 juta untuk menghemat premi. Saat klaim parsial, ganti rugi dikurangi proporsional sesuai rasio underinsurance.",
          },
          {
            icon: CircleDollarSign,
            title: "Overinsurance (nilai terlalu tinggi)",
            text: "Premi lebih mahal tapi tidak ada manfaat tambahan. Ganti rugi tidak bisa melebihi kerugian aktual yang terbukti.",
          },
        ]}
      />
      <p>Pendekatan yang disarankan untuk menentukan nilai pertanggungan:</p>
      <Steps
        items={[
          {
            title: "Unit baru atau usia di bawah 2 tahun",
            desc: "Gunakan harga perolehan (invoice price) sebagai dasar nilai pertanggungan, memastikan ganti rugi cukup untuk unit setara jika terjadi total loss.",
          },
          {
            title: "Unit berusia 2–5 tahun",
            desc: "Gunakan nilai pasar wajar saat ini, dari harga dealer alat bekas atau appraisal KJPP. Perbarui nilai ini setiap tahun saat memperpanjang polis.",
          },
          {
            title: "Unit berusia di atas 5 tahun",
            desc: "Pertimbangkan apakah nilai unit masih cukup signifikan untuk dijustifikasi dengan premi EAR penuh, atau lebih efisien dialokasikan ke cadangan perbaikan mandiri.",
          },
        ]}
      />

      <SectionHeading icon={ClipboardList}>Dokumen yang Perlu Disiapkan Saat Mengajukan Polis</SectionHeading>
      <p>
        Proses pengambilan polis EAR untuk alat berat konstruksi umumnya membutuhkan dokumen
        berikut. Menyiapkannya dari awal akan mempercepat proses underwriting dan menghindari
        permintaan dokumen tambahan yang memperlambat penerbitan polis:
      </p>
      <IconList
        items={[
          { icon: ShieldCheck, text: "Faktur pembelian atau BPKB unit (bukti kepemilikan)" },
          { icon: ClipboardList, text: "Foto unit dari 4 sudut (depan, belakang, kiri, kanan) dalam kondisi terkini" },
          { icon: Calculator, text: "Foto hour meter / jam operasi mesin" },
          { icon: FileSearch, text: "Dokumen spesifikasi teknis unit (buku manual / lembar spesifikasi dealer)" },
          { icon: BadgeCheck, text: "Profil perusahaan atau identitas pemilik (jika individu)" },
          { icon: Truck, text: "Informasi lokasi operasi utama unit" },
        ]}
      />

      <SectionHeading icon={Siren}>Apa yang Harus Dilakukan Saat Alat Berat Rusak di Proyek?</SectionHeading>
      <p>
        Banyak klaim yang akhirnya ditolak bukan karena kerusakan tidak ditanggung polis, tapi
        karena prosedur pelaporan yang tidak diikuti dengan benar. Ini urutannya:
      </p>
      <Steps
        items={[
          {
            title: "Hentikan operasi unit segera",
            desc: "Memaksakan penggunaan unit yang sudah rusak bisa memperparah kerusakan dan mempersulit penilaian klaim. Surveyor perlu menilai kondisi yang tidak berubah dari saat kejadian.",
          },
          {
            title: "Dokumentasi visual lengkap",
            desc: "Foto dan video kondisi unit, lokasi kejadian, dan kondisi medan sekitar. Untuk kecelakaan yang melibatkan pihak lain, catat identitas dan plat nomor kendaraan lain.",
          },
          {
            title: "Hubungi agen asuransi dalam 1 x 24 jam",
            desc: "Meski batas pelaporan di polis umumnya 3 x 24 jam, melapor lebih cepat mempercepat jadwal survei dan proses klaim secara keseluruhan.",
          },
          {
            title: "Jangan lakukan perbaikan sebelum survei",
            desc: "Aturan yang paling sering dilanggar karena tekanan untuk segera berproduksi. Jika terpaksa memindahkan unit demi keselamatan, minta izin tertulis dari pihak asuransi dan dokumentasikan kondisi sebelum pemindahan.",
          },
          {
            title: "Siapkan estimasi biaya perbaikan dari bengkel",
            desc: "Surveyor akan meminta ini sebagai referensi penilaian. Lebih baik dapatkan dari minimal dua bengkel berbeda untuk perbandingan.",
          },
        ]}
      />

      <SectionHeading icon={FileSearch}>Pertanyaan yang Sering Ditanyakan Kontraktor</SectionHeading>
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
            Siap Melindungi Armada Alat Berat Proyek Anda?
          </h3>
        </div>
        <p className="text-[#475569] mb-4">
          Tidak perlu bingung memilih antara CAR dan EAR, atau menghitung nilai pertanggungan
          yang tepat sendirian. Rio akan membantu menganalisis kebutuhan proteksi armada Anda,
          menyusun struktur polis yang efisien, dan memastikan tidak ada celah perlindungan
          yang bisa merugikan Anda saat klaim dibutuhkan.
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
              <li><a href="/blog/asuransi-proyek-konstruksi-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Proyek Konstruksi Batam</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}

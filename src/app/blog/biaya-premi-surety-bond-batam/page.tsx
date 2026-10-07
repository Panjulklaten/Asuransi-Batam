// app/blog/biaya-premi-surety-bond-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import {
  Calculator,
  ShieldCheck,
  TrendingUp,
  Building2,
  Layers,
  FileWarning,
  Scale,
  Headphones,
  FileSearch,
  BadgeCheck,
  Banknote,
  ListChecks,
  Landmark,
  PiggyBank,
  History,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Biaya dan Premi Surety Bond di Batam – Faktor yang Mempengaruhi Tarif",
  description: "Berapa biaya surety bond di Batam? Panduan lengkap cara perhitungan premi bid bond, performance bond, advance payment bond, dan maintenance bond, serta faktor yang membuat tarif lebih murah atau lebih mahal.",
  canonical: "https://asuransibatam.com/blog/biaya-premi-surety-bond-batam",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Biaya dan Premi Surety Bond di Batam: Faktor yang Mempengaruhi Tarif",
  datePublished: "2026-07-02",
  dateModified: "2026-07-02",
  author: { "@type": "Person", name: "Rio" },
  publisher: { "@type": "Organization", name: "Asuransi Batam" },
};

const faqItems = [
  {
    question: "Apakah premi surety bond dibayar sekali atau berkala?",
    answer:
      "Umumnya premi dibayar di muka untuk seluruh masa berlaku bond dalam satu kali pembayaran, karena bond biasanya menjamin satu periode kontrak tertentu. Untuk proyek dengan durasi lebih dari satu tahun, sebagian penanggung menawarkan skema perpanjangan tahunan.",
  },
  {
    question: "Apakah ada biaya lain selain premi?",
    answer:
      "Selain premi, kontraktor bisa dikenakan biaya administrasi, materai, atau biaya penerbitan dokumen fisik. Sebaiknya minta rincian biaya lengkap sejak konsultasi awal agar tidak ada biaya tersembunyi.",
  },
  {
    question: "Apakah premi bisa dikembalikan jika proyek batal?",
    answer:
      "Kebijakan pengembalian premi (refund) berbeda-beda antar penanggung dan biasanya diatur dalam ketentuan polis. Sebagian penanggung memberikan pengembalian sebagian premi apabila bond dibatalkan sebelum digunakan, dikurangi biaya administrasi minimum.",
  },
  {
    question: "Kenapa kontraktor baru biasanya dikenakan tarif lebih tinggi?",
    answer:
      "Tarif premi mencerminkan penilaian risiko. Kontraktor tanpa rekam jejak proyek yang terverifikasi dianggap memiliki risiko wanprestasi yang belum terukur, sehingga penanggung cenderung menerapkan tarif lebih konservatif dibanding kontraktor dengan riwayat penyelesaian proyek yang baik.",
  },
  {
    question: "Apakah nilai jaminan yang besar otomatis membuat tarif persentase lebih tinggi?",
    answer:
      "Tidak selalu. Justru sebaliknya, nilai jaminan yang lebih besar kadang mendapat tarif persentase yang sedikit lebih rendah karena skala ekonomi, selama profil risiko perusahaan dan proyek dinilai baik oleh penanggung.",
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

function SectionHeading({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <h2 className="flex items-center gap-3 not-prose font-display font-bold text-[#0a1628] text-2xl md:text-[1.65rem] mt-12 mb-4">
      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
        <Icon className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
      </span>
      {children}
    </h2>
  );
}

function SubHeading({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <h3 className="flex items-center gap-2.5 not-prose font-display font-bold text-[#0a1628] text-lg mt-8 mb-3">
      <Icon className="w-[18px] h-[18px] text-[#a07830]" strokeWidth={2} />
      {children}
    </h3>
  );
}

function IconList({
  items,
}: {
  items: { icon: React.ElementType; title?: string; text: React.ReactNode }[];
}) {
  return (
    <ul className="not-prose grid sm:grid-cols-2 gap-3 my-5 list-none p-0">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <li
            key={i}
            className="flex items-start gap-3 p-3.5 rounded-xl bg-[#faf8f3] border border-[#eee3cc]"
          >
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white border border-[#e2e8f0] shrink-0 mt-0.5">
              <Icon className="w-[14px] h-[14px] text-[#1a4fa0]" strokeWidth={2} />
            </span>
            <span className="text-sm text-[#374151] leading-relaxed">
              {item.title && (
                <span className="font-semibold text-[#0a1628] block">{item.title}</span>
              )}
              {item.text}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function IllustrationTable() {
  const rows = [
    {
      bond: "Bid Bond",
      nilai: "Rp 500 juta",
      kisaran: "0,5% – 1,5%",
      estimasi: "Rp 2,5 – 7,5 juta",
    },
    {
      bond: "Performance Bond",
      nilai: "Rp 2 miliar",
      kisaran: "1% – 2,5%",
      estimasi: "Rp 20 – 50 juta",
    },
    {
      bond: "Advance Payment Bond",
      nilai: "Rp 1 miliar",
      kisaran: "1% – 2%",
      estimasi: "Rp 10 – 20 juta",
    },
    {
      bond: "Maintenance Bond",
      nilai: "Rp 800 juta",
      kisaran: "0,5% – 1,5%",
      estimasi: "Rp 4 – 12 juta",
    },
  ];
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-[#e2e8f0]">
      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="bg-[#0a1628] text-white">
            <th className="p-3 font-semibold">Jenis Bond</th>
            <th className="p-3 font-semibold">Nilai Jaminan</th>
            <th className="p-3 font-semibold">Kisaran Tarif</th>
            <th className="p-3 font-semibold">Estimasi Premi</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
              <td className="p-3 text-[#0a1628] font-semibold border-t border-[#e2e8f0] whitespace-nowrap">
                {r.bond}
              </td>
              <td className="p-3 text-[#374151] border-t border-[#e2e8f0] whitespace-nowrap">
                {r.nilai}
              </td>
              <td className="p-3 text-[#1a4fa0] font-medium border-t border-[#e2e8f0] whitespace-nowrap">
                {r.kisaran}
              </td>
              <td className="p-3 text-[#374151] border-t border-[#e2e8f0] whitespace-nowrap">
                {r.estimasi}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-[#475569] p-3 bg-[#faf8f3] border-t border-[#e2e8f0] m-0">
        Ilustrasi umum untuk menggambarkan cara perhitungan, bukan penawaran resmi.
        Tarif aktual ditentukan melalui proses underwriting dan dapat berbeda-beda
        tergantung profil risiko perusahaan serta kebijakan masing-masing penanggung.
      </p>
    </div>
  );
}

export default function ArticleBiayaPremiSuretyBondBatamPage() {
  return (
    <ArticleLayout
      cluster="surety"
      title="Biaya dan Premi Surety Bond di Batam: Faktor yang Mempengaruhi Tarif"
      description="Salah satu pertanyaan paling sering dari kontraktor di Batam: berapa sebenarnya biaya surety bond? Jawabannya tidak flat — tarif ditentukan lewat kombinasi beberapa faktor. Berikut cara kerjanya secara rinci."
      date="2 Juli 2026"
      category="Surety Bond"
      readTime="9 menit baca"
      breadcrumbs={[
        {
          label: "Biaya dan Premi Surety Bond di Batam",
          href: "/blog/biaya-premi-surety-bond-batam",
        },
      ]}
      schema={schema}
      faqSchema={faqSchema}
    >
      <p>
        Berbeda dari asuransi kendaraan atau properti yang punya tabel tarif relatif
        baku, premi{" "}
        <Link href="/asuransi-surety-bond" className="font-medium">
          surety bond
        </Link>{" "}
        dihitung melalui proses underwriting yang mempertimbangkan banyak variabel
        sekaligus — nilai kontrak, jenis bond, hingga rekam jejak perusahaan pemohon.
        Karena itu, dua kontraktor yang mengajukan bond dengan nilai jaminan sama pun
        bisa mendapat tarif premi yang berbeda.
      </p>
      <p>
        Artikel ini membahas bagaimana premi surety bond dihitung, faktor apa saja yang
        membuat tarif lebih murah atau lebih mahal, dan bagaimana cara mendapatkan tarif
        yang paling kompetitif untuk kebutuhan proyek Anda di Batam.
      </p>

      <SectionHeading icon={Calculator}>Dasar Perhitungan Premi Surety Bond</SectionHeading>
      <p>
        Premi surety bond umumnya dihitung sebagai persentase dari nilai jaminan (bond
        amount), bukan dari total nilai kontrak proyek secara keseluruhan. Nilai jaminan
        ini biasanya sudah ditentukan dalam dokumen tender atau kontrak — misalnya bid
        bond senilai 1–3% dari nilai penawaran, atau performance bond senilai 5–10% dari
        nilai kontrak pelaksanaan.
      </p>
      <p>
        Dari nilai jaminan itulah penanggung menetapkan tarif premi sesuai hasil
        penilaian risiko. Berikut ilustrasi umum untuk menggambarkan cara kerjanya:
      </p>
      <IllustrationTable />

      <SectionHeading icon={TrendingUp}>Faktor yang Mempengaruhi Besaran Tarif</SectionHeading>
      <p>
        Penanggung menilai kelayakan dan menentukan tarif berdasarkan prinsip 3C yang
        umum dipakai dalam underwriting surety: character, capacity, dan capital. Secara
        praktis, ini diterjemahkan menjadi beberapa faktor berikut:
      </p>
      <IconList
        items={[
          {
            icon: History,
            title: "Rekam jejak perusahaan",
            text: "Riwayat penyelesaian proyek tepat waktu tanpa klaim wanprestasi menjadi indikator risiko paling kuat.",
          },
          {
            icon: Banknote,
            title: "Kesehatan keuangan",
            text: "Laporan keuangan yang sehat dengan likuiditas memadai menunjukkan kapasitas menyelesaikan proyek tanpa gangguan arus kas.",
          },
          {
            icon: Building2,
            title: "Profil dan kompleksitas proyek",
            text: "Proyek dengan spesifikasi teknis rumit atau lokasi sulit dinilai berisiko lebih tinggi dibanding proyek standar.",
          },
          {
            icon: Layers,
            title: "Jenis dan durasi bond",
            text: "Performance bond dan advance payment bond umumnya bertarif lebih tinggi dari bid bond karena eksposur risiko dan durasi keterikatannya lebih panjang.",
          },
        ]}
      />

      <SubHeading icon={Scale}>
        Kenapa Nilai Jaminan Besar Belum Tentu Tarif Persentasenya Lebih Mahal?
      </SubHeading>
      <p>
        Secara intuitif, banyak kontraktor mengira nilai jaminan besar otomatis membuat
        tarif persentase ikut naik. Faktanya, penanggung sering menerapkan tarif
        berjenjang (tiered pricing) — semakin besar nilai jaminan, tarif persentase bisa
        justru sedikit menurun, selama profil risiko perusahaan tetap dinilai baik.
        Sebaliknya, nilai jaminan kecil dari kontraktor berisiko tinggi bisa dikenai
        tarif persentase yang lebih besar.
      </p>

      <SectionHeading icon={PiggyBank}>Cara Mendapatkan Tarif yang Lebih Kompetitif</SectionHeading>
      <IconList
        items={[
          {
            icon: ListChecks,
            title: "Lengkapi dokumen sejak awal",
            text: "Underwriting yang lancar tanpa bolak-balik dokumen sering kali menghasilkan penawaran tarif yang lebih baik.",
          },
          {
            icon: History,
            title: "Bangun dan tunjukkan rekam jejak",
            text: "Kumpulkan bukti penyelesaian proyek sebelumnya secara rapi untuk memperkuat posisi tawar saat pengajuan.",
          },
          {
            icon: Headphones,
            title: "Bandingkan penawaran melalui konsultan",
            text: "Konsultan yang memahami beberapa penanggung dapat membantu mencocokkan profil perusahaan dengan penanggung yang paling sesuai.",
          },
          {
            icon: FileWarning,
            title: "Hindari riwayat klaim yang bisa dihindari",
            text: "Setiap klaim wanprestasi akan memengaruhi penilaian risiko pada pengajuan-pengajuan berikutnya.",
          },
        ]}
      />

      <SectionHeading icon={Landmark}>
        Perbandingan Biaya: Surety Bond vs Bank Garansi
      </SectionHeading>
      <p>
        Selain tarif premi itu sendiri, biaya riil yang perlu diperhitungkan kontraktor
        adalah opportunity cost dari dana yang terkunci. Bank garansi umumnya
        mensyaratkan setoran jaminan tunai (cash collateral) yang membekukan modal kerja
        selama masa berlaku garansi. Surety bond, karena berbasis penilaian kelayakan,
        biasanya tidak mensyaratkan setoran tunai sebesar itu — sehingga meski nominal
        premi surety bond terlihat sebagai biaya langsung, total biaya modal kerja yang
        "hilang" bisa jadi lebih rendah dibanding bank garansi untuk kontraktor yang
        menjalankan banyak proyek sekaligus.
      </p>

      <SectionHeading icon={FileSearch}>Pertanyaan yang Sering Diajukan</SectionHeading>
      <div className="space-y-3 not-prose">
        {faqItems.map((item) => (
          <details
            key={item.question}
            className="group p-5 rounded-xl border border-[#e2e8f0] bg-[#faf8f3]"
          >
            <summary className="font-semibold text-[#0a1628] cursor-pointer list-none flex items-center justify-between gap-3">
              <span className="flex items-center gap-3">
                <BadgeCheck className="w-[16px] h-[16px] text-[#c9a84c] shrink-0" strokeWidth={2} />
                {item.question}
              </span>
              <span className="text-[#c9a84c] group-open:rotate-45 transition-transform text-xl leading-none shrink-0">
                +
              </span>
            </summary>
            <p className="text-[#374151] text-sm mt-3 mb-0 leading-relaxed pl-7">
              {item.answer}
            </p>
          </details>
        ))}
      </div>

      <div className="my-8 p-6 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0]">
        <div className="flex items-center gap-2.5 mb-3">
          <ShieldCheck className="w-5 h-5 text-[#c9a84c]" strokeWidth={2} />
          <h3 className="font-display font-bold text-[#0a1628] m-0">
            Dapatkan Estimasi Premi Surety Bond Anda
          </h3>
        </div>
        <p className="text-[#475569] mb-4">
          Setiap proyek punya profil risiko dan struktur biaya yang berbeda. Rio
          membantu menghitungkan estimasi premi secara realistis sesuai nilai jaminan
          dan profil perusahaan Anda, sebelum mengajukan ke penanggung.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/asuransi-surety-bond"
            className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm"
          >
            Lihat Semua Produk Surety Bond
          </Link>
          <Link
            href="/blog/cara-mendapatkan-surety-bond-tender-proyek-batam"
            className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm"
          >
            Cara Mendapatkan Surety Bond
          </Link>
        </div>
      </div>

      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2
          className="text-lg font-bold mb-6"
          style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}
        >
          Halaman Terkait
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "#c9a84c" }}
            >
              Produk &amp; Layanan
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="/asuransi-surety-bond/bid-bond"
                  className="text-sm text-blue-700 hover:underline font-medium"
                >
                  → Bid Bond
                </a>
              </li>
              <li>
                <a
                  href="/asuransi-surety-bond/performance-bond"
                  className="text-sm text-blue-700 hover:underline font-medium"
                >
                  → Performance Bond
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "#c9a84c" }}
            >
              Artikel Terkait
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="/blog/cara-mendapatkan-surety-bond-tender-proyek-batam"
                  className="text-sm text-blue-700 hover:underline font-medium"
                >
                  → Cara Mendapatkan Surety Bond untuk Tender Proyek
                </a>
              </li>
              <li>
                <a
                  href="/blog/perbedaan-bid-bond-performance-bond"
                  className="text-sm text-blue-700 hover:underline font-medium"
                >
                  → Perbedaan Bid Bond dan Performance Bond
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}

// app/blog/asuransi-public-liability-batam-panduan-lengkap/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import {
  Scale,
  ShieldCheck,
  Building2,
  Anchor,
  Hotel,
  Store,
  Users,
  FileWarning,
  Headphones,
  FileSearch,
  BadgeCheck,
  Banknote,
  ListChecks,
  FileCheck2,
  Gavel,
  HardHat,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Public Liability di Batam – Panduan Lengkap untuk Subkontraktor Galangan Kapal, Hotel & Bisnis Publik",
  description: "Panduan lengkap Asuransi Public Liability di Batam — siapa yang wajib memilikinya, cara kerja Additional Insured & Certificate of Insurance (COI) untuk subkontraktor galangan kapal, nilai pertanggungan, dan proses klaim.",
  canonical: "https://asuransibatam.com/blog/asuransi-public-liability-batam-panduan-lengkap",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Asuransi Public Liability di Batam: Panduan Lengkap untuk Subkontraktor Galangan Kapal, Hotel & Bisnis Publik",
  datePublished: "2026-07-02",
  dateModified: "2026-07-02",
  author: { "@type": "Person", name: "Rio" },
  publisher: { "@type": "Organization", name: "Asuransi Batam" },
};

const faqItems = [
  {
    question: "Apa beda Public Liability dengan Product Liability?",
    answer:
      "Public Liability menanggung tuntutan pihak ketiga akibat aktivitas operasional sehari-hari — misalnya pengunjung terpeleset di area bisnis Anda. Product Liability secara spesifik menanggung tuntutan yang timbul dari produk yang Anda buat, jual, atau distribusikan, termasuk setelah produk itu digunakan konsumen.",
  },
  {
    question: "Apakah Public Liability sama dengan Employers Liability?",
    answer:
      "Berbeda. Public Liability melindungi dari tuntutan pihak ketiga di luar hubungan kerja (pengunjung, tamu, klien principal), sedangkan Employers Liability melindungi dari tuntutan karyawan sendiri atas cedera atau penyakit akibat kerja yang tidak sepenuhnya tercakup BPJS Ketenagakerjaan. Perusahaan dengan risiko operasional tinggi seringkali membutuhkan kedua jenis polis ini secara terpisah.",
  },
  {
    question: "Apa itu Additional Insured dan kenapa principal memintanya?",
    answer:
      "Additional Insured adalah status yang mencantumkan nama perusahaan principal (misalnya galangan kapal atau pemilik gedung) sebagai pihak yang turut dilindungi dalam polis subkontraktor. Principal meminta ini agar jika terjadi tuntutan pihak ketiga akibat pekerjaan subkontraktor, mereka ikut mendapat perlindungan hukum dan finansial dari polis tersebut, bukan hanya subkontraktornya.",
  },
  {
    question: "Berapa lama proses penerbitan Certificate of Insurance (COI)?",
    answer:
      "Dengan dokumen legalitas dan scope of work yang lengkap, polis beserta COI umumnya dapat diterbitkan dalam 1–3 hari kerja. Untuk kebutuhan mendesak menjelang mobilisasi proyek, sebaiknya proses pengajuan dimulai sesegera mungkin setelah kontrak atau Work Order diterima.",
  },
  {
    question: "Apakah nilai pertanggungan Public Liability bisa disesuaikan per proyek?",
    answer:
      "Bisa. Nilai pertanggungan (limit of liability) biasanya disesuaikan dengan skala operasional dan, khusus untuk subkontraktor, mengikuti nilai minimum yang disyaratkan principal dalam kontrak kerja. Semakin besar dan kompleks eksposur risikonya, semakin tinggi nilai pertanggungan yang direkomendasikan.",
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

function SectorTable() {
  const rows = [
    { sektor: "Subkontraktor galangan kapal", limit: "Rp 1 – 5 miliar / kejadian" },
    { sektor: "Hotel & resort", limit: "Rp 500 juta – 2 miliar / kejadian" },
    { sektor: "Mall & tenant ritel", limit: "Rp 500 juta – 2 miliar / kejadian" },
    { sektor: "Event organizer", limit: "Rp 250 juta – 1 miliar / kejadian" },
    { sektor: "Kontraktor bangunan", limit: "Rp 1 – 3 miliar / kejadian" },
  ];
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-[#e2e8f0]">
      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="bg-[#0a1628] text-white">
            <th className="p-3 font-semibold">Sektor Bisnis</th>
            <th className="p-3 font-semibold">Kisaran Limit Umum Diminta</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
              <td className="p-3 text-[#0a1628] font-semibold border-t border-[#e2e8f0]">
                {r.sektor}
              </td>
              <td className="p-3 text-[#374151] border-t border-[#e2e8f0]">{r.limit}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-[#475569] p-3 bg-[#faf8f3] border-t border-[#e2e8f0] m-0">
        Ilustrasi umum berdasarkan pola permintaan principal/klien di Batam. Nilai
        pertanggungan aktual tetap mengikuti kontrak, penilaian risiko, dan kesepakatan
        dengan penanggung.
      </p>
    </div>
  );
}

export default function ArticleAsuransiPublicLiabilityBatamPanduanLengkapPage() {
  return (
    <ArticleLayout cluster="liability"
      title="Asuransi Public Liability di Batam: Panduan Lengkap untuk Subkontraktor Galangan Kapal, Hotel & Bisnis Publik"
      description="Dari galangan kapal di Tanjung Uncang hingga hotel di Nongsa, hampir setiap bisnis yang berinteraksi langsung dengan pihak ketiga — pengunjung, klien, atau principal — punya eksposur tanggung gugat yang nyata. Berikut panduan lengkap Asuransi Public Liability di Batam."
      date="2 Juli 2026"
      category="Liability"
      readTime="10 menit baca"
      breadcrumbs={[
        {
          label: "Asuransi Public Liability di Batam: Panduan Lengkap",
          href: "/blog/asuransi-public-liability-batam-panduan-lengkap",
        },
      ]}
      schema={schema}
      faqSchema={faqSchema}
    >
      <p>
        Banyak pelaku usaha di Batam baru menyadari pentingnya{" "}
        <Link href="/asuransi-liability/public-liability" className="font-medium">
          Public Liability Insurance
        </Link>{" "}
        setelah dihadapkan pada persyaratan kontrak dari principal — misalnya galangan
        kapal yang mensyaratkan Certificate of Insurance sebelum subkontraktor boleh
        memasuki area kerja, atau setelah menghadapi tuntutan pihak ketiga yang
        ternyata tidak tercakup asuransi lain yang sudah dimiliki.
      </p>
      <p>
        Artikel ini membahas secara menyeluruh apa itu Public Liability, siapa saja
        yang wajib memilikinya di Batam, bagaimana mekanisme Additional Insured dan
        Certificate of Insurance (COI) bekerja, hingga proses klaim yang perlu
        dipahami.
      </p>

      <SectionHeading icon={Scale}>Apa Itu Public Liability Insurance?</SectionHeading>
      <p>
        Public Liability Insurance adalah polis yang menanggung tanggung jawab hukum
        bisnis Anda atas cedera fisik atau kerusakan properti pihak ketiga yang timbul
        akibat aktivitas operasional. Cakupannya mencakup biaya ganti rugi, biaya
        pengobatan pihak ketiga, hingga biaya pembelaan hukum jika bisnis Anda digugat.
      </p>
      <p>
        Produk ini hanya boleh diterbitkan oleh perusahaan asuransi umum yang berizin
        dan diawasi Otoritas Jasa Keuangan (OJK). Pastikan Anda memahami definisi
        "kejadian" (occurrence), batas waktu pelaporan klaim, dan pengecualian yang
        tercantum dalam polis sebelum menandatangani perjanjian.
      </p>

      <SectionHeading icon={Building2}>Siapa yang Wajib Memiliki Public Liability di Batam?</SectionHeading>
      <p>
        Kebutuhan Public Liability tidak terbatas pada satu sektor. Berikut jenis usaha
        di Batam yang paling umum diwajibkan atau sangat disarankan memilikinya:
      </p>
      <IconList
        items={[
          {
            icon: Anchor,
            title: "Subkontraktor galangan kapal",
            text: "Galangan besar di Tanjung Uncang dan sekitarnya umumnya mewajibkan seluruh vendor dan subkon memiliki polis ini sebagai syarat penerbitan Purchase Order/Work Order.",
          },
          {
            icon: Hotel,
            title: "Hotel, resort & restoran",
            text: "Risiko cedera tamu di kolam renang, area parkir, atau restoran menjadi tanggung jawab hukum pengelola.",
          },
          {
            icon: Store,
            title: "Mall & tenant ritel",
            text: "Insiden lantai licin, eskalator, atau kecelakaan area parkir berpotensi menimbulkan tuntutan pengunjung.",
          },
          {
            icon: HardHat,
            title: "Kontraktor bangunan & EO",
            text: "Proyek konstruksi dan penyelenggaraan acara publik seringkali mensyaratkan bukti Public Liability sebagai bagian dari perizinan atau kontrak.",
          },
        ]}
      />

      <SectionHeading icon={Gavel}>
        Public Liability vs Jenis Liability Lain
      </SectionHeading>
      <p>
        Public Liability sering tertukar dengan produk liability lain yang juga
        tersedia dalam satu payung{" "}
        <Link href="/asuransi-liability" className="font-medium">
          Asuransi Liability
        </Link>
        . Memahami perbedaannya penting agar perlindungan yang dibeli benar-benar
        sesuai eksposur risiko bisnis:
      </p>
      <IconList
        items={[
          {
            icon: Users,
            title: "Employers Liability",
            text: "Menanggung tuntutan karyawan sendiri, bukan pihak ketiga eksternal — melengkapi celah yang tidak tercakup BPJS Ketenagakerjaan.",
          },
          {
            icon: ShieldCheck,
            title: "Product Liability",
            text: "Berlaku untuk klaim yang timbul dari produk yang diproduksi atau didistribusikan, termasuk setelah produk digunakan konsumen.",
          },
          {
            icon: FileWarning,
            title: "Asuransi Limbah B3",
            text: "Khusus industri penghasil limbah berbahaya, menanggung tanggung jawab pencemaran lingkungan sesuai regulasi KLHK.",
          },
        ]}
      />
      <p className="text-sm text-[#475569]">
        Sudah membaca soal kewajiban limbah industri?{" "}
        <Link
          href="/blog/pentingnya-asuransi-limbah-b3"
          className="font-medium text-[#1a4fa0]"
        >
          Baca juga: Pentingnya Asuransi Limbah B3 bagi Industri
        </Link>
        .
      </p>

      <SectionHeading icon={FileCheck2}>
        Additional Insured & Certificate of Insurance (COI)
      </SectionHeading>
      <p>
        Bagi subkontraktor yang bekerja untuk principal besar, dua istilah ini sering
        muncul sebagai syarat wajib sebelum mobilisasi ke lokasi kerja:
      </p>
      <IconList
        items={[
          {
            icon: FileCheck2,
            title: "Additional Insured",
            text: "Status yang mencantumkan nama principal dalam polis subkontraktor, sehingga principal turut mendapat perlindungan jika tuntutan pihak ketiga timbul dari pekerjaan subkon di area mereka.",
          },
          {
            icon: BadgeCheck,
            title: "Certificate of Insurance (COI)",
            text: "Dokumen bukti kepemilikan polis aktif yang diserahkan ke bagian HSE/Procurement principal, biasanya berisi nama tertanggung, nilai pertanggungan, dan masa berlaku polis.",
          },
        ]}
      />
      <p>
        Tanpa COI yang valid dan status Additional Insured yang sesuai permintaan
        principal, subkontraktor umumnya tidak diizinkan memasuki area kerja atau
        menerima Purchase Order. Menyiapkan dokumen ini di awal, bukan menjelang
        tenggat mobilisasi, akan menghindarkan keterlambatan proyek.
      </p>

      <SectionHeading icon={Banknote}>Nilai Pertanggungan yang Umum Diminta</SectionHeading>
      <p>
        Nilai pertanggungan (limit of liability) bervariasi tergantung sektor dan
        skala operasional. Berikut ilustrasi kisaran umum yang biasa diminta di Batam:
      </p>
      <SectorTable />

      <SectionHeading icon={Headphones}>Proses Klaim Public Liability</SectionHeading>
      <IconList
        items={[
          {
            icon: FileWarning,
            title: "1. Laporkan kejadian segera",
            text: "Sampaikan kronologi awal kepada penanggung secepatnya setelah insiden terjadi, idealnya dalam 2x24 jam.",
          },
          {
            icon: ListChecks,
            title: "2. Kumpulkan bukti pendukung",
            text: "Dokumentasi lokasi kejadian, keterangan saksi, dan laporan medis pihak ketiga yang terdampak.",
          },
          {
            icon: Scale,
            title: "3. Verifikasi & investigasi",
            text: "Penanggung menilai keabsahan klaim serta besaran kerugian berdasarkan bukti yang diserahkan.",
          },
          {
            icon: BadgeCheck,
            title: "4. Penyelesaian klaim",
            text: "Penanggung membayar ganti rugi dan/atau menangani proses hukum sesuai cakupan polis yang berlaku.",
          },
        ]}
      />

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
            Siapkan Public Liability & COI untuk Bisnis Anda
          </h3>
        </div>
        <p className="text-[#475569] mb-4">
          Rio membantu subkontraktor galangan kapal, hotel, mall, dan penyelenggara
          acara di Batam menyiapkan polis Public Liability beserta dokumen Certificate
          of Insurance yang langsung diterima tim HSE/Procurement principal.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/asuransi-liability/public-liability"
            className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm"
          >
            Lihat Produk Public Liability
          </Link>
          <Link
            href="/asuransi-liability"
            className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm"
          >
            Semua Produk Liability
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
                  href="/asuransi-liability/public-liability"
                  className="text-sm text-blue-700 hover:underline font-medium"
                >
                  → Asuransi Public Liability
                </a>
              </li>
              <li>
                <a
                  href="/asuransi-liability/asuransi-limbah-b3"
                  className="text-sm text-blue-700 hover:underline font-medium"
                >
                  → Asuransi Limbah B3
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
                  href="/blog/pentingnya-asuransi-limbah-b3"
                  className="text-sm text-blue-700 hover:underline font-medium"
                >
                  → Pentingnya Asuransi Limbah B3 bagi Industri
                </a>
              </li>
              <li>
                <a
                  href="/blog/klaim-asuransi-limbah-b3-kawasan-industri-batam"
                  className="text-sm text-blue-700 hover:underline font-medium"
                >
                  → Cara Klaim Asuransi Limbah B3 Kawasan Industri Batam
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}

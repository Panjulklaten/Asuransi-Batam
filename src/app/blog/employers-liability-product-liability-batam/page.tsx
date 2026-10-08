// app/blog/employers-liability-product-liability-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import {
  Users,
  Package,
  ShieldCheck,
  Factory,
  Ship,
  FileWarning,
  Scale,
  Headphones,
  FileSearch,
  BadgeCheck,
  Stethoscope,
  Truck,
  Globe,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Employers Liability & Product Liability di Batam – Perlindungan yang Sering Terlewat",
  description: "Dua jenis asuransi liability yang jarang disadari perusahaan di Batam: Employers Liability (tuntutan karyawan di luar BPJS TK) dan Product Liability (tuntutan atas produk yang diproduksi/didistribusikan). Panduan lengkap siapa yang butuh dan kenapa.",
  canonical: "https://asuransibatam.com/blog/employers-liability-product-liability-batam",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Employers Liability & Product Liability di Batam: Perlindungan yang Sering Terlewat",
  datePublished: "2026-07-02",
  dateModified: "2026-07-02",
  author: { "@type": "Person", name: "Rio" },
  publisher: { "@type": "Organization", name: "Asuransi Batam" },
};

const faqItems = [
  {
    question: "Apakah Employers Liability sama dengan asuransi Personal Accident untuk karyawan?",
    answer:
      "Berbeda. Personal Accident memberikan santunan langsung kepada karyawan yang mengalami kecelakaan, tanpa perlu pembuktian kesalahan perusahaan. Employers Liability menanggung perusahaan ketika karyawan menuntut secara hukum atas dasar kelalaian perusahaan yang menyebabkan cedera atau penyakit akibat kerja — dua produk ini saling melengkapi, bukan saling menggantikan.",
  },
  {
    question: "Apakah BPJS Ketenagakerjaan sudah cukup melindungi perusahaan dari tuntutan karyawan?",
    answer:
      "BPJS Ketenagakerjaan memberikan santunan kepada karyawan sesuai skema jaminan sosial, tetapi tidak melindungi perusahaan dari gugatan perdata yang diajukan karyawan atau ahli warisnya atas dasar kelalaian. Employers Liability berfungsi menutup celah biaya hukum dan ganti rugi tambahan yang bisa timbul dari gugatan semacam itu.",
  },
  {
    question: "Siapa yang paling membutuhkan Product Liability di Batam?",
    answer:
      "Produsen makanan dan minuman, pabrik komponen elektronik, industri furnitur ekspor, dan distributor barang konsumen adalah kelompok yang paling berisiko menghadapi tuntutan Product Liability, mengingat Batam adalah salah satu basis manufaktur dan ekspor utama di Indonesia.",
  },
  {
    question: "Apakah Product Liability berlaku untuk produk yang sudah diekspor ke luar negeri?",
    answer:
      "Bisa mencakup, tergantung cakupan geografis yang disepakati dalam polis. Untuk eksportir, penting mengonfirmasi apakah polis mencakup tuntutan yang diajukan di negara tujuan ekspor, karena standar dan nilai tuntutan hukum produk di beberapa negara bisa jauh lebih tinggi dibanding di Indonesia.",
  },
  {
    question: "Apakah dua jenis liability ini bisa digabung dalam satu polis dengan Public Liability?",
    answer:
      "Banyak penanggung menawarkan gabungan (combined liability) yang mencakup Public Liability, Employers Liability, dan Product Liability dalam satu polis dengan limit gabungan atau limit terpisah per jenis risiko, tergantung kebutuhan dan profil operasional perusahaan.",
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

function ComparisonTable() {
  const rows = [
    {
      jenis: "Public Liability",
      melindungi: "Perusahaan dari tuntutan pihak ketiga umum (pengunjung, tamu, klien)",
      contoh: "Tamu terpeleset di hotel",
    },
    {
      jenis: "Employers Liability",
      melindungi: "Perusahaan dari tuntutan hukum karyawan sendiri",
      contoh: "Karyawan menggugat atas penyakit akibat kerja",
    },
    {
      jenis: "Product Liability",
      melindungi: "Perusahaan dari tuntutan atas produk yang diproduksi/dijual",
      contoh: "Konsumen cedera akibat cacat produk",
    },
  ];
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-[#e2e8f0]">
      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="bg-[#0a1628] text-white">
            <th className="p-3 font-semibold">Jenis Liability</th>
            <th className="p-3 font-semibold">Melindungi Dari</th>
            <th className="p-3 font-semibold">Contoh Kasus</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
              <td className="p-3 text-[#0a1628] font-semibold border-t border-[#e2e8f0] whitespace-nowrap">
                {r.jenis}
              </td>
              <td className="p-3 text-[#374151] border-t border-[#e2e8f0]">{r.melindungi}</td>
              <td className="p-3 text-[#374151] border-t border-[#e2e8f0]">{r.contoh}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ArticleEmployersLiabilityProductLiabilityBatamPage() {
  return (
    <ArticleLayout cluster="liability"
      title="Employers Liability & Product Liability di Batam: Perlindungan yang Sering Terlewat"
      description="Banyak perusahaan di Batam sudah memiliki Public Liability, tapi melewatkan dua risiko besar lain: tuntutan hukum dari karyawan sendiri, dan tuntutan atas produk yang mereka produksi atau distribusikan. Berikut kenapa keduanya layak dipertimbangkan serius."
      date="2 Juli 2026"
      category="Liability"
      readTime="10 menit baca"
      breadcrumbs={[
        {
          label: "Employers Liability & Product Liability di Batam",
          href: "/blog/employers-liability-product-liability-batam",
        },
      ]}
      schema={schema}
      faqSchema={faqSchema}
    >
      <p>
        Ketika membahas{" "}
        <Link href="/asuransi-liability" className="font-medium">
          Asuransi Liability
        </Link>
        , perhatian sering tertuju pada Public Liability atau kewajiban limbah B3.
        Padahal ada dua eksposur risiko lain yang tidak kalah penting, terutama bagi
        perusahaan manufaktur dan padat karya di Batam: tuntutan hukum dari karyawan
        sendiri (Employers Liability), dan tuntutan atas produk yang diproduksi atau
        didistribusikan (Product Liability).
      </p>
      <p>
        Kedua risiko ini sering terlewat karena dianggap sudah tercakup produk lain —
        padahal keduanya menutup celah yang sama sekali berbeda. Artikel ini membahas
        keduanya secara mendalam: apa yang ditanggung, siapa yang paling
        membutuhkannya, dan bagaimana keduanya berbeda dari Public Liability.
      </p>

      <SectionHeading icon={Users}>Employers Liability: Celah di Luar BPJS Ketenagakerjaan</SectionHeading>
      <p>
        Employers Liability menanggung perusahaan ketika karyawan atau ahli warisnya
        mengajukan gugatan hukum perdata atas dasar kelalaian perusahaan yang
        menyebabkan cedera, penyakit akibat kerja, atau kematian. Ini berbeda dari
        BPJS Ketenagakerjaan, yang memberikan santunan kepada karyawan berdasarkan
        skema jaminan sosial tanpa memerlukan pembuktian kelalaian perusahaan di
        pengadilan.
      </p>
      <p>
        Celahnya muncul ketika karyawan atau keluarganya merasa santunan BPJS TK tidak
        mencerminkan kerugian riil yang dialami, lalu menempuh jalur gugatan perdata
        terhadap perusahaan. Tanpa Employers Liability, seluruh biaya pembelaan hukum
        dan potensi ganti rugi tambahan ini menjadi beban langsung perusahaan.
      </p>

      <SubHeading icon={Factory}>Siapa yang Paling Membutuhkan?</SubHeading>
      <IconList
        items={[
          {
            icon: Ship,
            title: "Galangan kapal & fabrikasi",
            text: "Aktivitas kerja berisiko tinggi (ketinggian, pengelasan, blasting) meningkatkan potensi cedera serius yang berujung gugatan.",
          },
          {
            icon: Factory,
            title: "Manufaktur & pabrik",
            text: "Paparan mesin, bahan kimia, dan kebisingan jangka panjang berpotensi memicu klaim penyakit akibat kerja.",
          },
          {
            icon: Truck,
            title: "Logistik & pergudangan",
            text: "Operasional alat berat dan aktivitas bongkar muat membawa risiko cedera fisik yang signifikan.",
          },
          {
            icon: Users,
            title: "Perusahaan padat karya",
            text: "Semakin besar jumlah karyawan, semakin besar pula eksposur potensi gugatan yang harus diantisipasi.",
          },
        ]}
      />

      <SectionHeading icon={Package}>Product Liability: Risiko Setelah Produk Meninggalkan Pabrik</SectionHeading>
      <p>
        Product Liability menanggung tuntutan hukum yang timbul dari cedera atau
        kerugian yang dialami konsumen maupun pihak lain akibat produk yang
        diproduksi, dijual, atau didistribusikan perusahaan — termasuk cacat desain,
        cacat produksi, atau informasi/label yang menyesatkan.
      </p>
      <p>
        Risiko ini relevan terutama karena tanggung jawab produsen tidak berhenti
        begitu produk terjual. Klaim bisa muncul jauh setelah produk digunakan
        konsumen, kadang bertahun-tahun kemudian, dan biaya penanganannya — mulai dari
        penarikan produk (recall) hingga pembelaan hukum — bisa sangat besar bagi
        perusahaan skala menengah.
      </p>

      <SubHeading icon={Globe}>Siapa yang Paling Membutuhkan?</SubHeading>
      <IconList
        items={[
          {
            icon: Package,
            title: "Produsen makanan & minuman",
            text: "Risiko kontaminasi atau kesalahan pelabelan bahan alergen membawa eksposur tuntutan kesehatan konsumen.",
          },
          {
            icon: Factory,
            title: "Manufaktur komponen elektronik",
            text: "Cacat komponen yang menyebabkan kegagalan produk akhir dapat memicu klaim dari produsen hilir maupun konsumen.",
          },
          {
            icon: Globe,
            title: "Eksportir & industri berorientasi ekspor",
            text: "Standar dan nilai tuntutan hukum produk di negara tujuan ekspor bisa jauh berbeda dari Indonesia.",
          },
          {
            icon: Truck,
            title: "Distributor & importir",
            text: "Dalam banyak kasus, distributor turut bertanggung jawab hukum meski tidak memproduksi barang secara langsung.",
          },
        ]}
      />

      <SectionHeading icon={Scale}>Perbandingan Tiga Jenis Liability</SectionHeading>
      <p>
        Untuk memperjelas posisi Employers Liability dan Product Liability dibanding
        Public Liability yang lebih umum dikenal:
      </p>
      <ComparisonTable />
      <p className="text-sm text-[#475569]">
        Sudah familiar dengan Public Liability?{" "}
        <Link
          href="/blog/asuransi-public-liability-batam-panduan-lengkap"
          className="font-medium text-[#1a4fa0]"
        >
          Baca panduan lengkap Public Liability di Batam
        </Link>
        .
      </p>

      <SectionHeading icon={AlertTriangle}>Kenapa Dua Risiko Ini Sering Terlewat?</SectionHeading>
      <IconList
        items={[
          {
            icon: ShieldCheck,
            title: "Dianggap sudah tercakup produk lain",
            text: "Banyak perusahaan mengira BPJS TK dan asuransi produk standar sudah cukup menutup seluruh risiko terkait.",
          },
          {
            icon: FileWarning,
            title: "Belum pernah menghadapi klaim",
            text: "Tanpa pengalaman klaim sebelumnya, eksposur risiko ini sering dianggap tidak mendesak untuk diasuransikan.",
          },
          {
            icon: Stethoscope,
            title: "Dampaknya baru terasa saat kejadian besar",
            text: "Risiko ini bersifat low-frequency, high-severity — jarang terjadi, tapi berdampak besar ketika terjadi.",
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
          <Headphones className="w-5 h-5 text-[#c9a84c]" strokeWidth={2} />
          <h3 className="font-display font-bold text-[#0a1628] m-0">
            Cek Celah Perlindungan Liability Perusahaan Anda
          </h3>
        </div>
        <p className="text-[#475569] mb-4">
          Rio membantu perusahaan di Batam memetakan risiko Employers Liability dan
          Product Liability sesuai profil operasional, dan menyusun struktur
          perlindungan liability yang menyeluruh — bukan hanya Public Liability saja.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/asuransi-liability"
            className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm"
          >
            Lihat Semua Produk Liability
          </Link>
          <Link
            href="/asuransi-liability/public-liability"
            className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm"
          >
            Public Liability
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
                  href="/asuransi-liability"
                  className="text-sm text-blue-700 hover:underline font-medium"
                >
                  → Semua Produk Liability
                </a>
              </li>
              <li>
                <a
                  href="/asuransi-liability/public-liability"
                  className="text-sm text-blue-700 hover:underline font-medium"
                >
                  → Asuransi Public Liability
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
                  href="/blog/asuransi-public-liability-batam-panduan-lengkap"
                  className="text-sm text-blue-700 hover:underline font-medium"
                >
                  → Asuransi Public Liability di Batam: Panduan Lengkap
                </a>
              </li>
              <li>
                <a
                  href="/blog/pentingnya-asuransi-limbah-b3"
                  className="text-sm text-blue-700 hover:underline font-medium"
                >
                  → Pentingnya Asuransi Limbah B3 bagi Industri
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}

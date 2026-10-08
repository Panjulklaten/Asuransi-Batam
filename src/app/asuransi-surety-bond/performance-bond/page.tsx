// app/asuransi-surety-bond/performance-bond/page.tsx
import type { Metadata } from "next";
import { generateSEO, schemaInsuranceProduct } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  Wallet,
  CalendarClock,
  ClipboardList,
  Scale,
  Gavel,
  Network,
  MessageCircleMore,
  CheckCircle2,
} from "lucide-react";

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

function IconList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="not-prose grid gap-3 my-5 list-none p-0">
      {items.map((text, i) => (
        <li key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#faf8f3] border border-[#eee3cc]">
          <CheckCircle2 className="w-[18px] h-[18px] text-[#1a7a4c] shrink-0 mt-0.5" strokeWidth={2} />
          <span className="text-sm text-[#374151] leading-relaxed">{text}</span>
        </li>
      ))}
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

export const metadata: Metadata = generateSEO({
  title: "Performance Bond Batam – Jaminan Pelaksanaan Proyek Konstruksi",
  description: "Performance bond atau jaminan pelaksanaan di Batam untuk kontraktor konstruksi, EPC, dan pengadaan. Jaminan proyek selesai sesuai kontrak. Proses cepat, konsultasi gratis dengan Rio.",
  keywords: [
    "performance bond batam",
    "jaminan pelaksanaan batam",
    "jaminan pelaksanaan konstruksi batam",
    "surety bond performance bond batam",
    "jaminan kontrak proyek batam",
  ],
  canonical: "https://asuransibatam.com/asuransi-surety-bond/performance-bond",
  languages: {
      id: "https://asuransibatam.com/asuransi-surety-bond/performance-bond",
      en: "https://asuransibatam.com/en/surety-bond-insurance/performance-bond",
    },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Performance Bond Batam – Jaminan Pelaksanaan Proyek Konstruksi",
  description:
    "Panduan lengkap performance bond di Batam: pengertian, fungsi, nilai, dokumen, dan cara mendapatkan jaminan pelaksanaan untuk proyek konstruksi dan pengadaan.",
  author: {
    "@type": "Person",
    name: "Rio Mardiansyah",
    jobTitle: "Praktisi Asuransi",
  },
  publisher: {
    "@type": "Organization",
    name: "Asuransi Batam",
    url: "https://asuransibatam.com",
  },
  mainEntityOfPage:
    "https://asuransibatam.com/asuransi-surety-bond/performance-bond",
};

const serviceSchema = schemaInsuranceProduct({
  name: "Performance Bond (Jaminan Pelaksanaan) Batam",
  description: "Performance bond atau jaminan pelaksanaan proyek konstruksi di Batam untuk kontraktor, EPC, dan pengadaan. Menjamin proyek selesai sesuai kontrak.",
  url: "/asuransi-surety-bond/performance-bond",
  category: "Surety Bond",
});

export default function PerformanceBondPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ArticleLayout
        cluster="surety"
      title="Performance Bond Batam: Jaminan Pelaksanaan Proyek Sesuai Kontrak"
      description="Panduan lengkap performance bond di Batam — pengertian, fungsi, nilai, dokumen yang dibutuhkan, dan cara mengajukan jaminan pelaksanaan untuk proyek konstruksi, EPC, dan pengadaan barang/jasa."
      date="2025"
      category="Surety Bond"
      readTime="7 menit"
      breadcrumbs={[
        { label: "Surety Bond", href: "/asuransi-surety-bond" },
        { label: "Performance Bond", href: "/asuransi-surety-bond/performance-bond" },
      ]}
      schema={schema}
    >
      {/* ── Intro ── */}
      <p>
        Ketika sebuah kontrak proyek ditandatangani, pemilik proyek membutuhkan kepastian bahwa
        kontraktor akan menyelesaikan pekerjaan sesuai spesifikasi, jadwal, dan nilai kontrak
        yang disepakati. Di sinilah <strong>Performance Bond</strong> atau{" "}
        <strong>Jaminan Pelaksanaan</strong> memainkan perannya.
      </p>
      <p>
        Performance bond adalah instrumen yang paling sering diminta setelah{" "}
        <Link href="/asuransi-surety-bond/bid-bond">Bid Bond</Link> dalam siklus pengadaan
        proyek di Batam. Dokumen ini wajib diserahkan oleh kontraktor pemenang sebelum
        pekerjaan dimulai.
      </p>

      {/* ── H2: Definisi ── */}
      <SectionHeading icon={ShieldCheck}>Apa Itu Performance Bond (Jaminan Pelaksanaan)?</SectionHeading>
      <p>
        Performance bond adalah jenis <Link href="/asuransi-surety-bond">surety bond</Link> yang
        memberikan jaminan kepada pemilik proyek (<em>obligee</em>) bahwa kontraktor (
        <em>principal</em>) akan:
      </p>
      <ul>
        <li>Menyelesaikan seluruh pekerjaan sesuai ruang lingkup kontrak</li>
        <li>Memenuhi standar kualitas dan spesifikasi teknis yang disyaratkan</li>
        <li>Menyelesaikan proyek dalam batas waktu yang ditetapkan</li>
        <li>
          Menyerahkan{" "}
          <Link href="/asuransi-surety-bond/maintenance-bond">Maintenance Bond</Link> setelah
          proyek selesai, jika dipersyaratkan
        </li>
      </ul>
      <p>
        Jika kontraktor wanprestasi — misalnya menghentikan pekerjaan di tengah jalan,
        mengerjakan dengan kualitas di bawah standar, atau melampaui waktu tanpa sebab sah —
        pemilik proyek dapat mencairkan performance bond sebagai kompensasi.
      </p>

      {/* ── H2: Siapa yang Membutuhkan ── */}
      <SectionHeading icon={Users}>Siapa yang Wajib Menyerahkan Performance Bond di Batam?</SectionHeading>
      <p>
        Performance bond umumnya dipersyaratkan kepada:
      </p>
      <IconList
        items={[
          <><strong>Kontraktor konstruksi</strong> yang mengerjakan proyek gedung, fasilitas industri, atau infrastruktur di Batam</>,
          <><strong>Kontraktor EPC</strong> (Engineering, Procurement &amp; Construction) untuk proyek pabrik, kilang, atau instalasi besar di kawasan industri</>,
          <><strong>Supplier pengadaan</strong> yang memasok barang atau peralatan dengan nilai kontrak signifikan kepada BUMN atau pemerintah</>,
          <><strong>Kontraktor IT dan jasa</strong> dalam proyek jangka panjang dengan milestone penyelesaian yang terukur</>,
          <><strong>Subkontraktor</strong> dalam kontrak back-to-back dengan kontraktor utama</>,
        ]}
      />

      {/* ── H2: Nilai Performance Bond ── */}
      <SectionHeading icon={Wallet}>Berapa Nilai Performance Bond?</SectionHeading>
      <p>
        Berdasarkan Perpres 16/2018 dan ketentuan pengadaan yang berlaku, nilai performance bond
        umumnya ditetapkan sebesar <strong>5% dari nilai kontrak</strong>. Namun untuk proyek
        swasta atau kontrak bilateral, nilai ini dapat berbeda sesuai kesepakatan para pihak —
        umumnya berkisar antara 5% hingga 10% dari nilai kontrak.
      </p>
      <p>
        Contoh: Untuk kontrak konstruksi senilai Rp 50 miliar, performance bond yang dibutuhkan
        adalah sekitar <strong>Rp 2,5 miliar</strong>.
      </p>

      {/* ── H2: Masa Berlaku ── */}
      <SectionHeading icon={CalendarClock}>Masa Berlaku Performance Bond</SectionHeading>
      <p>
        Performance bond berlaku sejak tanggal penandatanganan kontrak hingga selesainya seluruh
        pekerjaan dan dilakukannya serah terima proyek (BAST). Masa berlaku biasanya
        mencerminkan durasi kontrak ditambah buffer 30 hari. Jika proyek mengalami perpanjangan
        waktu (addendum), performance bond harus diperpanjang secara bersamaan.
      </p>

      {/* ── H2: Dokumen ── */}
      <SectionHeading icon={ClipboardList}>Dokumen yang Dibutuhkan untuk Pengajuan Performance Bond</SectionHeading>
      <ul>
        <li>Akta pendirian dan seluruh perubahan perusahaan</li>
        <li>NIB (Nomor Induk Berusaha) dan SIUJK (untuk kontraktor konstruksi)</li>
        <li>NPWP perusahaan</li>
        <li>Laporan keuangan 2 tahun terakhir (lebih baik jika sudah diaudit)</li>
        <li>
          Salinan kontrak / Surat Perintah Kerja (SPK) dari pemilik proyek (
          <em>obligee</em>)
        </li>
        <li>
          Salinan <Link href="/asuransi-surety-bond/bid-bond">Bid Bond</Link> yang telah
          diterbitkan (jika ada)
        </li>
        <li>Daftar pengalaman proyek sejenis 3–5 tahun terakhir</li>
        <li>Neraca dan laporan laba rugi tahun berjalan (jika tersedia)</li>
      </ul>

      {/* ── H2: Perbedaan dengan Bid Bond ── */}
      <SectionHeading icon={Scale}>Perbedaan Performance Bond dan Bid Bond</SectionHeading>
      <p>
        Meskipun keduanya termasuk dalam kelompok{" "}
        <Link href="/asuransi-surety-bond">surety bond</Link>, performance bond dan bid bond
        memiliki perbedaan mendasar:
      </p>
      <IconList
        items={[
          <><strong>Bid bond</strong> diterbitkan sebelum tender dimulai dan berakhir saat kontrak ditandatangani. Tujuannya memastikan pemenang tender tidak mengundurkan diri.</>,
          <><strong>Performance bond</strong> diterbitkan setelah kontrak ditandatangani dan berlaku selama masa pelaksanaan proyek. Tujuannya memastikan proyek selesai sesuai kontrak.</>,
          <>Nilai performance bond umumnya lebih besar dari bid bond karena mencerminkan nilai kontrak yang lebih tinggi.</>,
        ]}
      />

      {/* ── H2: Klaim ── */}
      <SectionHeading icon={Gavel}>Bagaimana Proses Klaim Performance Bond?</SectionHeading>
      <p>
        Pemilik proyek dapat mengajukan klaim performance bond apabila kontraktor terbukti
        wanprestasi. Proses klaim umumnya melibatkan:
      </p>
      <Steps
        items={[
          { title: "Notifikasi tertulis", desc: "Dari obligee kepada penanggung (perusahaan asuransi) dan principal (kontraktor) mengenai pelanggaran kontrak." },
          { title: "Investigasi", desc: "Penanggung memverifikasi keabsahan klaim dan besaran kerugian." },
          { title: "Penyelesaian", desc: "Penanggung dapat membayar ganti rugi tunai, atau membantu menyelesaikan proyek melalui kontraktor pengganti." },
        ]}
      />

      {/* ── H2: Internal Links ── */}
      <SectionHeading icon={Network}>Jenis Surety Bond Lain dalam Siklus Proyek Anda</SectionHeading>
      <ul>
        <li>
          <Link href="/asuransi-surety-bond/bid-bond">
            Bid Bond – Jaminan Penawaran Tender
          </Link>
        </li>
        <li>
          <Link href="/asuransi-surety-bond/advance-payment-bond">
            Advance Payment Bond – Jaminan Uang Muka
          </Link>
        </li>
        <li>
          <Link href="/asuransi-surety-bond/maintenance-bond">
            Maintenance Bond – Jaminan Pemeliharaan Pasca Proyek
          </Link>
        </li>
        <li>
          <Link href="/asuransi-engineering/contractor-all-risk">
            Contractor All Risk – Asuransi Perlindungan Proyek Konstruksi
          </Link>
        </li>
      </ul>

      {/* ── CTA ── */}
      <div className="mt-10 p-6 bg-[#0a1628] rounded-2xl text-white not-prose">
        <h3 className="flex items-center gap-2.5 font-display font-bold text-lg text-[#c9a84c] mb-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 shrink-0">
            <MessageCircleMore className="w-[16px] h-[16px] text-[#c9a84c]" strokeWidth={2} />
          </span>
          Butuh Performance Bond di Batam? Konsultasi Gratis
        </h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          Jangan tunda penyerahan performance bond dan berisiko kehilangan kontrak. Hubungi Rio
          sekarang untuk mendapatkan penawaran premi dan proses penerbitan dalam 1–3 hari kerja.
          Kami melayani kontraktor, perusahaan EPC, dan supplier di seluruh wilayah Batam dan
          Kepulauan Riau.
        </p>
        <p className="text-sm text-white/80">
          <strong className="text-[#c9a84c]">WhatsApp:</strong> 0813-7333-6728 &nbsp;|&nbsp;
          <strong className="text-[#c9a84c]">Layanan:</strong> Senin–Sabtu, 08.00–17.00 WIB
        </p>
      </div>
    </ArticleLayout>
    </>
  );
}

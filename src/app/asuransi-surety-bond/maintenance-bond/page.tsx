// app/asuransi-surety-bond/maintenance-bond/page.tsx
import type { Metadata } from "next";
import { generateSEO, schemaInsuranceProduct } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";
import {
  ShieldCheck,
  AlertTriangle,
  Wallet,
  Scale,
  ClipboardList,
  Network,
  MessageCircleMore,
  CheckCircle2,
  XCircle,
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

function IconList({ items, variant = "check" }: { items: React.ReactNode[]; variant?: "check" | "warn" }) {
  const Icon = variant === "check" ? CheckCircle2 : AlertTriangle;
  const color = variant === "check" ? "text-[#1a7a4c]" : "text-[#b3261e]";
  return (
    <ul className="not-prose grid gap-3 my-5 list-none p-0">
      {items.map((text, i) => (
        <li key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#faf8f3] border border-[#eee3cc]">
          <Icon className={`w-[18px] h-[18px] shrink-0 mt-0.5 ${color}`} strokeWidth={2} />
          <span className="text-sm text-[#374151] leading-relaxed">{text}</span>
        </li>
      ))}
    </ul>
  );
}

export const metadata: Metadata = generateSEO({
  title: "Maintenance Bond Batam – Jaminan Pemeliharaan Pasca Proyek",
  description: "Maintenance bond atau jaminan pemeliharaan di Batam untuk proyek konstruksi setelah serah terima. Lindungi pemilik proyek dari cacat tersembunyi. Proses cepat, konsultasi gratis dengan Rio.",
  keywords: [
    "maintenance bond batam",
    "jaminan pemeliharaan batam",
    "jaminan masa pemeliharaan batam",
    "surety bond maintenance bond batam",
    "jaminan retensi konstruksi batam",
  ],
  canonical: "https://asuransibatam.com/asuransi-surety-bond/maintenance-bond",
  languages: {
      id: "https://asuransibatam.com/asuransi-surety-bond/maintenance-bond",
      en: "https://asuransibatam.com/en/surety-bond-insurance/maintenance-bond",
    },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Maintenance Bond Batam – Jaminan Pemeliharaan Pasca Proyek",
  description:
    "Panduan maintenance bond di Batam: fungsi, nilai, masa berlaku, dan cara mendapatkan jaminan pemeliharaan untuk proyek konstruksi dan pengadaan.",
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
    "https://asuransibatam.com/asuransi-surety-bond/maintenance-bond",
};

const serviceSchema = schemaInsuranceProduct({
  name: "Maintenance Bond (Jaminan Pemeliharaan) Batam",
  description: "Maintenance bond atau jaminan pemeliharaan pasca-proyek konstruksi di Batam. Melindungi pemilik proyek dari cacat tersembunyi setelah serah terima.",
  url: "/asuransi-surety-bond/maintenance-bond",
  category: "Surety Bond",
});

export default function MaintenanceBondPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ArticleLayout
        cluster="surety"
        suretyRequirements
      title="Maintenance Bond Batam: Jaminan Pemeliharaan Setelah Proyek Selesai"
      description="Panduan lengkap maintenance bond di Batam — pengertian, fungsi, nilai jaminan, masa berlaku, dan cara pengajuan jaminan pemeliharaan untuk proyek konstruksi dan pengadaan pemerintah maupun swasta."
      date="2025"
      category="Surety Bond"
      readTime="5 menit"
      breadcrumbs={[
        { label: "Surety Bond", href: "/asuransi-surety-bond" },
        {
          label: "Maintenance Bond",
          href: "/asuransi-surety-bond/maintenance-bond",
        },
      ]}
      schema={schema}
    >
      {/* ── Intro ── */}
      <p>
        Serah terima proyek bukan berarti tanggung jawab kontraktor berakhir. Dalam masa
        pemeliharaan setelah selesainya pekerjaan, kontraktor masih wajib memperbaiki segala
        cacat tersembunyi (<em>latent defect</em>) atau kerusakan yang timbul akibat mutu
        pekerjaan yang tidak memenuhi standar. Untuk menjamin kewajiban ini,{" "}
        <strong>Maintenance Bond</strong> atau <strong>Jaminan Pemeliharaan</strong>{" "}
        diterbitkan.
      </p>
      <p>
        Maintenance bond melengkapi siklus penuh surety bond dalam sebuah proyek — mulai dari{" "}
        <Link href="/asuransi-surety-bond/bid-bond">Bid Bond</Link> (pra-tender),{" "}
        <Link href="/asuransi-surety-bond/performance-bond">Performance Bond</Link> (masa
        pelaksanaan), hingga maintenance bond (pasca serah terima).
      </p>

      {/* ── H2: Definisi ── */}
      <SectionHeading icon={ShieldCheck}>Apa Itu Maintenance Bond (Jaminan Pemeliharaan)?</SectionHeading>
      <p>
        Maintenance bond adalah jenis <Link href="/asuransi-surety-bond">surety bond</Link> yang
        memberikan jaminan kepada pemilik proyek bahwa selama masa pemeliharaan yang disepakati,
        kontraktor akan:
      </p>
      <ul>
        <li>
          Memperbaiki cacat, retak, kebocoran, atau kerusakan lain yang ditemukan setelah serah
          terima pertama (BAST I)
        </li>
        <li>
          Merespons keluhan pemilik proyek dalam batas waktu yang ditetapkan kontrak
        </li>
        <li>
          Menyelesaikan seluruh kewajiban pemeliharaan hingga serah terima akhir (BAST II)
        </li>
      </ul>
      <p>
        Jika kontraktor mengabaikan kewajiban pemeliharaan, pemilik proyek dapat mencairkan
        maintenance bond untuk membiayai perbaikan oleh pihak ketiga.
      </p>

      {/* ── H2: Manfaat bagi Pemilik Proyek ── */}
      <SectionHeading icon={AlertTriangle}>Mengapa Pemilik Proyek di Batam Membutuhkan Maintenance Bond?</SectionHeading>
      <p>
        Kerusakan pasca konstruksi lebih umum terjadi daripada yang banyak orang bayangkan —
        terutama di lingkungan Batam dengan kondisi iklim tropis, kelembaban tinggi, dan
        karakteristik tanah tertentu. Beberapa risiko yang dijamin maintenance bond antara lain:
      </p>
      <IconList
        variant="warn"
        items={[
          "Retakan pada dinding atau struktur akibat penurunan pondasi",
          "Kebocoran atap atau sistem waterproofing yang gagal",
          "Kerusakan sistem MEP (mekanikal, elektrikal, plumbing) pasca serah terima",
          "Cacat pada finishing yang tidak terdeteksi saat inspeksi akhir",
          "Kerusakan jalan atau perkerasan akibat mutu campuran aspal yang kurang memadai",
        ]}
      />

      {/* ── H2: Nilai dan Masa Berlaku ── */}
      <SectionHeading icon={Wallet}>Berapa Nilai dan Masa Berlaku Maintenance Bond?</SectionHeading>
      <p>
        Nilai maintenance bond umumnya ditetapkan sebesar <strong>5% dari nilai kontrak</strong>,
        sama dengan nilai performance bond. Namun untuk proyek tertentu, nilai ini dapat
        disesuaikan dengan kesepakatan kontrak.
      </p>
      <p>
        Masa berlaku maintenance bond mencerminkan durasi masa pemeliharaan yang ditetapkan
        dalam kontrak. Untuk proyek pemerintah, masa pemeliharaan umumnya:
      </p>
      <IconList
        items={[
          <><strong>6 bulan</strong> untuk pekerjaan sederhana seperti pengecatan, landscape, atau interior ringan</>,
          <><strong>12 bulan</strong> untuk konstruksi bangunan gedung standar</>,
          <><strong>24 bulan</strong> untuk proyek infrastruktur berskala besar, instalasi mekanikal, atau proyek EPC</>,
        ]}
      />
      <p>
        Maintenance bond berlaku sejak tanggal BAST I (serah terima pertama) dan berakhir
        pada saat BAST II (serah terima akhir) atau sesuai tanggal kedaluwarsa yang tertera.
      </p>

      {/* ── H2: Alternatif – Retensi vs Maintenance Bond ── */}
      <SectionHeading icon={Scale}>Maintenance Bond vs Uang Retensi: Mana yang Lebih Menguntungkan Kontraktor?</SectionHeading>
      <p>
        Secara tradisional, pemilik proyek menahan sebagian pembayaran kontraktor sebagai{" "}
        <em>uang retensi</em> (biasanya 5%) untuk menjamin kewajiban pemeliharaan. Namun
        praktik ini merugikan kontraktor karena mengikat arus kas.
      </p>
      <p>
        Dengan menerbitkan maintenance bond, kontraktor dapat meminta pencairan penuh pembayaran
        terakhir dan menggantikan uang retensi dengan jaminan asuransi. Hasilnya:
      </p>
      <IconList
        items={[
          "Kontraktor menerima 100% pembayaran tanpa retensi ditahan",
          "Pemilik proyek tetap mendapatkan perlindungan setara melalui jaminan asuransi",
          "Arus kas kontraktor lebih sehat untuk proyek berikutnya",
        ]}
      />
      <p>
        Opsi ini sangat relevan bagi kontraktor aktif di Batam yang sering menangani beberapa
        proyek secara bersamaan dan membutuhkan fleksibilitas likuiditas.
      </p>

      {/* ── H2: Dokumen ── */}
      <SectionHeading icon={ClipboardList}>Dokumen untuk Pengajuan Maintenance Bond</SectionHeading>
      <ul>
        <li>Salinan kontrak yang memuat klausul masa pemeliharaan</li>
        <li>
          Salinan{" "}
          <Link href="/asuransi-surety-bond/performance-bond">Performance Bond</Link> yang
          pernah diterbitkan
        </li>
        <li>Berita Acara Serah Terima Pertama (BAST I)</li>
        <li>Akta pendirian dan NIB/SIUP perusahaan</li>
        <li>NPWP perusahaan</li>
        <li>Laporan keuangan terbaru</li>
      </ul>

      {/* ── H2: Internal Links ── */}
      <SectionHeading icon={Network}>Siklus Lengkap Surety Bond untuk Proyek Anda di Batam</SectionHeading>
      <p>
        Proyek yang berjalan mulus membutuhkan jaminan yang tepat di setiap tahapnya. Pelajari
        selengkapnya:
      </p>
      <ul>
        <li>
          <Link href="/asuransi-surety-bond/bid-bond">
            Bid Bond – Jaminan Penawaran (Pra-Tender)
          </Link>
        </li>
        <li>
          <Link href="/asuransi-surety-bond/performance-bond">
            Performance Bond – Jaminan Pelaksanaan (Masa Konstruksi)
          </Link>
        </li>
        <li>
          <Link href="/asuransi-surety-bond/advance-payment-bond">
            Advance Payment Bond – Jaminan Uang Muka
          </Link>
        </li>
        <li>
          <Link href="/asuransi-engineering/erection-all-risk">
            Erection All Risk – Asuransi Instalasi Mesin dan Peralatan
          </Link>
        </li>
      </ul>
      <p>
        Lihat gambaran lengkap layanan kami di halaman{" "}
        <Link href="/asuransi-surety-bond">Surety Bond Batam</Link>.
      </p>

      {/* ── CTA ── */}
      <div className="mt-10 p-6 bg-[#0a1628] rounded-2xl text-white not-prose">
        <h3 className="flex items-center gap-2.5 font-display font-bold text-lg text-[#c9a84c] mb-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 shrink-0">
            <MessageCircleMore className="w-[16px] h-[16px] text-[#c9a84c]" strokeWidth={2} />
          </span>
          Ganti Uang Retensi dengan Maintenance Bond — Hubungi Rio
        </h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          Jangan biarkan uang retensi ratusan juta hingga miliaran rupiah tertahan di tangan
          pemilik proyek selama berbulan-bulan. Terbitkan maintenance bond dan cairkan retensi
          Anda sekarang. Proses 1–3 hari kerja, konsultasi gratis.
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

// app/blog/asuransi-pa-pekerja-asing-ke-singapura-dari-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";
import {
  Plane,
  Wrench,
  FileCheck,
  ShieldAlert,
  Globe2,
  CheckCircle2,
  XCircle,
  MessageCircleMore,
  AlertTriangle,
  Stethoscope,
  Building2,
  FileText,
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

function IconList({ items }: { items: { icon: React.ElementType; title: string; desc: string }[] }) {
  return (
    <ul className="not-prose grid gap-3 my-5 list-none p-0">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <li key={i} className="flex items-start gap-3.5 p-4 rounded-xl bg-[#faf8f3] border border-[#eee3cc]">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-[#e2e8f0] shrink-0">
              <Icon className="w-[16px] h-[16px] text-[#1a4fa0]" strokeWidth={2} />
            </span>
            <div>
              <p className="font-semibold text-[#0a1628] m-0 text-[15px]">{item.title}</p>
              <p className="text-sm text-[#475569] mt-1 mb-0 leading-relaxed">{item.desc}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export const metadata: Metadata = generateSEO({
  title: "Asuransi PA untuk Pekerja Asing ke Singapura dari Batam: Panduan Ketentuan ICA & MOM",
  description:
    "Panduan Asuransi Personal Accident (PA) untuk pekerja asing dan teknisi proyek yang bepergian dari Batam ke Singapura — aturan ICA untuk turis bebas visa, ketentuan MOM untuk Work Pass, dan syarat dokumen visa negara subjek visa seperti India. Konsultasi Rio 0813-7333-6728.",
  canonical: "https://asuransibatam.com/blog/asuransi-pa-pekerja-asing-ke-singapura-dari-batam",
  languages: {
    id: "https://asuransibatam.com/blog/asuransi-pa-pekerja-asing-ke-singapura-dari-batam",
    en: "https://asuransibatam.com/en/blog/pa-insurance-foreign-workers-singapore-from-batam",
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah turis bebas visa wajib punya asuransi untuk masuk Singapura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak. Otoritas Imigrasi Singapura (ICA) tidak lagi mewajibkan asuransi perjalanan bagi turis dari negara bebas visa. Namun sangat direkomendasikan mengingat biaya perawatan medis bagi non-resident di Singapura tergolong sangat tinggi.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah pekerja Work Permit atau S Pass wajib punya asuransi di Singapura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. Berdasarkan ketentuan Ministry of Manpower (MOM), pemberi kerja di Singapura wajib menyediakan asuransi medis minimal SGD 60.000 per tahun untuk setiap pemegang Work Permit dan S Pass, mencakup rawat inap dan bedah harian, sejak 1 Juli 2025. Ini adalah kewajiban pemberi kerja di Singapura, terpisah dari asuransi PA/perjalanan yang biasa diurus dari Batam.",
      },
    },
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asuransi PA untuk Pekerja Asing ke Singapura dari Batam: Panduan Ketentuan ICA & MOM",
  description:
    "Panduan Asuransi Personal Accident (PA) untuk pekerja asing dan teknisi proyek yang bepergian dari Batam ke Singapura — aturan ICA untuk turis bebas visa, ketentuan MOM untuk Work Pass, dan syarat dokumen visa negara subjek visa seperti India.",
  datePublished: "2026-09-22",
  dateModified: "2026-09-22",
  author: { "@type": "Person", name: "Rio", jobTitle: "Praktisi Asuransi", telephone: "+6281373336728" },
  publisher: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", url: "https://asuransibatam.com" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://asuransibatam.com/blog/asuransi-pa-pekerja-asing-ke-singapura-dari-batam",
  },
};

export default function PAPekerjaAsingSingapuraPage() {
  return (
    <ArticleLayout
      title="Asuransi PA untuk Pekerja Asing ke Singapura dari Batam: Panduan Ketentuan ICA & MOM"
      description="Banyak perusahaan di Batam mengirim teknisi, engineer proyek, dan staf asing untuk keperluan sementara ke Singapura — site visit, instalasi, commissioning, atau urusan bisnis. Berikut aturan asuransi yang berlaku menurut kewarganegaraan dan jenis pass yang dipegang."
      date="22 September 2026"
      readTime="11 menit"
      category="Personal Accident"
      breadcrumbs={[{ label: "Asuransi PA untuk Pekerja Asing ke Singapura", href: "/blog/asuransi-pa-pekerja-asing-ke-singapura-dari-batam" }]}
      schema={schema}
      faqSchema={faqSchema}
    >
      <SectionHeading icon={Globe2}>Batam sebagai Titik Transit Pekerja Asing menuju Singapura</SectionHeading>
      <p>
        Kedekatan geografis Batam dengan Singapura — hanya sekitar 45 menit dengan feri dari Pelabuhan
        Batam Center atau Sekupang — membuat banyak perusahaan proyek, galangan kapal, dan kontraktor
        multinasional yang beroperasi di Batam terbiasa mengirim staf teknis asing bolak-balik ke Singapura
        untuk keperluan sementara: site visit, instalasi peralatan, commissioning, pertemuan klien, atau
        pengadaan suku cadang. Sebagian dari pekerja ini adalah warga negara Eropa, India, dan negara
        lain yang statusnya terhadap Singapura sangat berbeda-beda — sebagian bebas visa, sebagian
        wajib mengurus visa kunjungan, dan sebagian lagi memegang work pass resmi.
      </p>
      <p>
        Pertanyaan yang paling sering kami terima dari HR dan project manager di Batam: <em>apakah staf
        asing kami wajib punya asuransi Personal Accident (PA) atau asuransi perjalanan sebelum berangkat
        ke Singapura?</em> Jawabannya tergantung pada tiga hal: kewarganegaraan, jenis dokumen yang
        dipegang (bebas visa, visa kunjungan, atau work pass), dan tujuan kunjungan. Berikut panduannya.
      </p>

      <SectionHeading icon={FileCheck}>Tiga Kategori Perjalanan & Aturan Asuransinya</SectionHeading>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg">Kategori</th>
              <th className="text-left px-4 py-3">Status Asuransi</th>
              <th className="text-left px-4 py-3 rounded-tr-lg">Regulator</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Turis biasa (negara bebas visa)", "Tidak wajib, sangat direkomendasikan", "ICA (Imigrasi Singapura)"],
              ["Pekerja proyek/teknisi pemegang Work Pass (Work Permit/S Pass)", "Wajib — ditanggung pemberi kerja di Singapura", "MOM (Ministry of Manpower)"],
              ["Pemegang visa kunjungan (negara subjek visa, mis. India)", "Tidak diwajibkan ICA, tapi jadi dokumen pendukung utama", "ICA / agen visa"],
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                {row.map((cell, j) => (
                  <td key={j} className={`px-4 py-3 ${j === 0 ? "font-medium text-[#0a1628]" : "text-[#475569]"}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionHeading icon={Plane}>1. Turis Biasa (Negara Bebas Visa)</SectionHeading>
      <p>
        Warga negara dari mayoritas negara Eropa, sebagian besar negara ASEAN, dan banyak negara lain
        dapat memasuki Singapura tanpa visa untuk kunjungan singkat. Otoritas Imigrasi dan Pos Pemeriksaan
        Singapura (ICA) saat ini tidak lagi mewajibkan bukti asuransi perjalanan sebagai syarat masuk bagi
        turis dari negara bebas visa.
      </p>
      <p>
        Meski begitu, kami selalu merekomendasikan PA/asuransi perjalanan kepada klien kami yang mengirim
        staf ke Singapura dalam kategori ini, dengan alasan sederhana: biaya perawatan medis bagi
        non-resident di rumah sakit Singapura tergolong sangat mahal — rawat inap semalam saja bisa
        mencapai jutaan rupiah, belum termasuk tindakan atau evakuasi darurat. Tanpa proteksi, biaya ini
        sepenuhnya ditanggung sendiri oleh pekerja atau perusahaan pengirim.
      </p>

      <SectionHeading icon={Wrench}>2. Pekerja Proyek, Teknisi & Pemegang Work Pass</SectionHeading>
      <p>
        Ini kategori yang paling relevan bagi banyak klien kami di Batam — perusahaan galangan kapal,
        kontraktor EPC, dan penyedia jasa teknis yang mengirim staf asing (termasuk dari India dan Eropa)
        untuk bekerja langsung di Singapura, baik dalam jangka pendek maupun menengah. Jika staf tersebut
        dipekerjakan secara resmi oleh entitas di Singapura di bawah <strong>Work Permit</strong> atau{" "}
        <strong>S Pass</strong>, berlaku ketentuan tegas dari Ministry of Manpower (MOM):
      </p>
      <IconList
        items={[
          { icon: Stethoscope, title: "Asuransi Medis Minimal SGD 60.000/tahun", desc: "Sejak 1 Juli 2025, pemberi kerja di Singapura wajib menyediakan asuransi medis dengan pertanggungan minimal SGD 60.000 per tahun per pekerja untuk rawat inap dan bedah harian — naik dari batas SGD 15.000 sebelumnya." },
          { icon: Building2, title: "Kewajiban Ada di Pihak Pemberi Kerja Singapura", desc: "Biaya asuransi ini wajib ditanggung penuh oleh pemberi kerja di Singapura dan tidak boleh dibebankan kepada pekerja. Polis harus aktif sebelum penerbitan dan perpanjangan work pass." },
          { icon: AlertTriangle, title: "Employment Pass (EP) Tidak Diwajibkan MOM", desc: "Jika staf Anda dikirim dengan status Employment Pass (umumnya untuk posisi profesional/manajerial dengan gaji minimum lebih tinggi), MOM saat ini tidak mewajibkan pemberi kerja menyediakan asuransi medis — meski tetap sangat disarankan secara praktik industri." },
        ]}
      />
      <p>
        <strong>Yang penting dipahami:</strong> asuransi medis wajib MOM tersebut adalah kewajiban entitas
        pemberi kerja di Singapura dan umumnya diurus melalui penyedia asuransi berizin di Singapura —
        bukan sesuatu yang bisa digantikan oleh polis PA yang diterbitkan dari Batam. Namun, PA/asuransi
        perjalanan dari Batam tetap sangat relevan sebagai <em>pelengkap</em>, khususnya untuk:
      </p>
      <ul>
        <li>Masa transit dan perjalanan feri Batam–Singapura, yang umumnya tidak tercakup dalam skema asuransi kerja MOM;</li>
        <li>Santunan kematian dan cacat tetap akibat kecelakaan — cakupan yang berbeda dari asuransi medis rawat inap MOM yang berfokus pada biaya perawatan;</li>
        <li>Staf berstatus Employment Pass yang tidak wajib diasuransikan pemberi kerja Singapura;</li>
        <li>Periode sebelum work pass resmi aktif, misalnya saat kunjungan awal untuk survei atau negosiasi proyek.</li>
      </ul>

      <SectionHeading icon={FileText}>3. Pemegang Visa Kunjungan (Negara Subjek Visa)</SectionHeading>
      <p>
        Warga negara dari negara yang termasuk kategori subjek visa terhadap Singapura — India adalah
        salah satu contoh paling umum di antara klien kami — wajib mengajukan visa kunjungan (Social
        Visit Pass/Business Visit Pass) sebelum berangkat, meskipun tujuannya bukan bekerja secara resmi
        di Singapura, misalnya untuk pertemuan bisnis, survei proyek, atau pelatihan singkat.
      </p>
      <p>
        Berdasarkan ketentuan resmi ICA, asuransi perjalanan <strong>tidak menjadi syarat wajib</strong>{" "}
        dalam daftar dokumen pengajuan visa kunjungan. Namun dalam praktiknya, hampir semua agen visa dan
        sponsor lokal yang kami temui di Batam tetap meminta bukti asuransi perjalanan/PA aktif sebagai
        bagian dari berkas pendukung — karena dokumen ini memperkuat gambaran bahwa pemohon memiliki
        kemampuan finansial menghadapi risiko selama kunjungan, sehingga meningkatkan peluang persetujuan
        visa oleh petugas yang memeriksa berkas.
      </p>
      <p>
        Untuk klien kami yang mengirim staf India atau negara subjek visa lain ke Singapura, kami
        menyarankan PA/asuransi perjalanan diurus bersamaan dengan pengajuan visa — bukan setelahnya —
        agar polis bisa langsung dilampirkan sebagai bagian dari berkas pengajuan.
      </p>

      <SectionHeading icon={CheckCircle2}>Ringkasan: Kapan PA Benar-Benar Dibutuhkan</SectionHeading>
      <IconList
        items={[
          { icon: CheckCircle2, title: "Selalu direkomendasikan", desc: "Untuk seluruh kategori pekerja asing yang dikirim ke Singapura dari Batam, tanpa memandang status visa — mengingat tingginya biaya medis non-resident." },
          { icon: XCircle, title: "Bukan pengganti kewajiban statutori", desc: "Untuk pemegang Work Permit/S Pass, PA dari Batam melengkapi, bukan menggantikan, kewajiban asuransi medis MOM yang harus disediakan pemberi kerja Singapura." },
          { icon: ShieldAlert, title: "Memperkuat pengajuan visa", desc: "Untuk pemegang visa kunjungan negara subjek visa seperti India, PA/asuransi perjalanan berperan sebagai dokumen pendukung yang memperkuat kelengkapan berkas di mata petugas visa." },
        ]}
      />

      <SectionHeading icon={FileCheck}>Dokumen yang Dibutuhkan untuk Menerbitkan PA WNA</SectionHeading>
      <p>
        Untuk penerbitan polis PA bagi pekerja asing dari Batam, umumnya kami membutuhkan: salinan
        paspor yang masih berlaku, KITAS/izin tinggal (jika staf tersebut berbasis di Batam), detail
        jadwal keberangkatan dan durasi kunjungan ke Singapura, serta data pemberi kerja atau sponsor di
        Batam. Untuk pengajuan grup (banyak staf sekaligus), kami menyediakan skema{" "}
        <Link href="/asuransi-personal-accident/pa-karyawan-grup" className="text-[#1a4fa0] hover:text-[#c9a84c]">
          PA Karyawan Grup
        </Link>{" "}
        yang memudahkan administrasi dan pelaporan untuk perusahaan dengan banyak pekerja proyek.
      </p>

      <div className="mt-10 p-6 bg-[#0a1628] rounded-2xl text-white not-prose">
        <h3 className="flex items-center gap-2.5 font-display font-bold text-lg text-[#c9a84c] mb-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 shrink-0">
            <MessageCircleMore className="w-[16px] h-[16px] text-[#c9a84c]" strokeWidth={2} />
          </span>
          Konsultasi PA untuk Staf Asing Anda
        </h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          Rio membantu perusahaan di Batam menentukan jenis proteksi PA yang tepat sesuai status visa
          dan work pass staf asing Anda sebelum keberangkatan ke Singapura — individu maupun grup.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="https://wa.me/6281373336728?text=Halo%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi%20PA%20untuk%20staf%20asing%20yang%20akan%20ke%20Singapura"
            target="_blank" rel="noopener noreferrer"
            className="px-5 py-3 bg-[#c9a84c] text-[#0a1628] font-bold rounded-xl text-sm text-center hover:bg-[#f0d080] transition-colors">
            Konsultasi via WhatsApp
          </a>
          <Link href="/asuransi-personal-accident/pa-individu-keluarga"
            className="px-5 py-3 border border-white/30 text-white font-semibold rounded-xl text-sm text-center hover:bg-white/10 transition-colors">
            Lihat Produk PA Individu
          </Link>
        </div>
      </div>

      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Halaman Terkait</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Produk &amp; Layanan</p>
            <ul className="space-y-2">
              <li><a href="/asuransi-personal-accident/pa-individu-keluarga" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi PA Individu & Keluarga Batam</a></li>
              <li><a href="/asuransi-personal-accident/pa-karyawan-grup" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi PA Karyawan Grup Batam</a></li>
              <li><a href="/asuransi-liability/freight-forwarders-liability" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Freight Forwarders Liability Batam</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait</p>
            <ul className="space-y-2">
              <li><a href="/blog/asuransi-pengiriman-batam-singapore" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Pengiriman Batam–Singapura</a></li>
              <li><a href="/blog/kawasan-logistik-pergudangan-batam-batu-ampar-sekupang-tanjung-uncang" className="text-sm text-blue-700 hover:underline font-medium">→ Peta Risiko Logistik Batu Ampar, Sekupang & Tanjung Uncang</a></li>
              <li><a href="/blog/asuransi-freight-forwarders-liability-batam-panduan-lengkap" className="text-sm text-blue-700 hover:underline font-medium">→ Panduan Lengkap Asuransi FFL Batam</a></li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-xs text-[#94a3b8] mt-8 not-prose">
        Informasi regulasi ICA dan MOM pada artikel ini disusun berdasarkan ketentuan yang berlaku umum per
        September 2026 dan dapat berubah sewaktu-waktu. Selalu verifikasi ketentuan terbaru langsung ke
        ICA (ica.gov.sg) atau MOM (mom.gov.sg), atau melalui agen visa/HR resmi, sebelum keberangkatan.
      </p>
    </ArticleLayout>
  );
}

// app/blog/cara-klaim-asuransi-pi-kapal/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import QuoteButton from "@/components/quote/QuoteButton";
import ArticleLayout from "@/components/ArticleLayout";
import { generateSEO } from "@/lib/seo";
import { AlertTriangle, PhoneCall, FileText, Route, Ban, MessageCircleMore } from "lucide-react";

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

export const metadata: Metadata = generateSEO({
  title: "Cara Klaim Asuransi P&I Kapal: Langkah dan Dokumen",
  description:
    "Langkah klaim asuransi P&I setelah insiden kapal: notifikasi, pengamanan bukti, dokumen yang disiapkan, dan kesalahan yang membuat klaim sulit dibayar.",
  canonical: "https://asuransibatam.com/blog/cara-klaim-asuransi-pi-kapal",
  languages: {
    id: "https://asuransibatam.com/blog/cara-klaim-asuransi-pi-kapal",
    en: "https://asuransibatam.com/en/blog/how-to-claim-pi-insurance",
  },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cara Klaim Asuransi P&I Kapal: Langkah, Dokumen, dan Kesalahan yang Harus Dihindari",
  description: "Panduan langkah klaim asuransi P&I setelah insiden kapal.",
  datePublished: "2026-10-16",
  dateModified: "2026-10-16",
  author: { "@type": "Person", name: "Rio", jobTitle: "Praktisi Asuransi", telephone: "+6281373336728" },
  publisher: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", url: "https://asuransibatam.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://asuransibatam.com/blog/cara-klaim-asuransi-pi-kapal" },
};

const docs = [
  "Laporan kejadian dari nakhoda dan catatan jurnal kapal (logbook)",
  "Daftar awak (crew list) dan data awak yang terlibat",
  "Foto, video, dan data posisi kapal saat kejadian",
  "Surat tuntutan atau komplain tertulis dari pihak yang dirugikan",
  "Kontrak charter, bill of lading, atau perjanjian angkut (untuk klaim muatan)",
  "Laporan surveyor, laporan medis, atau estimasi kerusakan",
  "Bukti laporan ke syahbandar atau otoritas pelabuhan terkait",
  "Salinan polis P&I dan polis Marine Hull yang berjalan",
];

export default function CaraKlaimPiPage() {
  return (
    <ArticleLayout
      cluster="marine"
      title="Cara Klaim Asuransi P&I Kapal: Langkah, Dokumen, dan Kesalahan yang Harus Dihindari"
      description="Klaim P&I berawal dari tuntutan pihak lain, bukan dari kerusakan kapal. Ini urutan yang aman."
      date="16 Oktober 2026"
      readTime="6 menit"
      category="Marine"
      breadcrumbs={[{ label: "Cara Klaim Asuransi P&I Kapal", href: "/blog/cara-klaim-asuransi-pi-kapal" }]}
      schema={schema}
    >
      <p>
        Klaim <Link href="/asuransi-marine/protection-and-indemnity">asuransi P&amp;I</Link> berbeda dari klaim hull. Yang diklaim bukan kerusakan kapal Anda, melainkan tuntutan atau potensi tuntutan pihak lain: awak yang cedera, pemilik muatan, pemilik dermaga, atau pihak yang terdampak pencemaran. Cara Anda bereaksi di hari-hari pertama sering menentukan apakah klaim berjalan lancar.
      </p>

      <SectionHeading icon={PhoneCall}>Langkah 1: Amankan Keselamatan, Lalu Beritahu Penanggung</SectionHeading>
      <p>
        Prioritas pertama selalu keselamatan awak dan penumpang serta pencegahan kerugian lebih besar, misalnya menghentikan kebocoran. Setelah itu, laporkan kejadian ke broker dan penanggung <strong>secepat mungkin</strong>, juga bila belum ada tuntutan resmi. Banyak polis mensyaratkan pemberitahuan segera, dan kejadian yang berpotensi menjadi tuntutan sebaiknya dicatat sejak awal. Laporkan juga ke syahbandar atau otoritas pelabuhan sesuai ketentuan yang berlaku.
      </p>

      <SectionHeading icon={AlertTriangle}>Langkah 2: Amankan Bukti</SectionHeading>
      <p>
        Simpan jurnal kapal, rekaman, data navigasi, dan foto. Catat nama saksi dan minta keterangan awak selagi ingatan masih segar. Jangan mengubah atau membersihkan lokasi kejadian sebelum didokumentasikan, kecuali untuk alasan keselamatan atau penanggulangan pencemaran.
      </p>

      <SectionHeading icon={FileText}>Langkah 3: Siapkan Dokumen</SectionHeading>
      <ul>
        {docs.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <p>Daftar ini bergantung pada jenis klaim. Klaim muatan dan klaim cedera awak membutuhkan dokumen yang berbeda.</p>

      <SectionHeading icon={Route}>Langkah 4: Proses Penilaian</SectionHeading>
      <p>
        Penanggung akan menilai apakah kejadian masuk cakupan, menunjuk surveyor atau penasihat hukum bila perlu, lalu menilai besar tanggung jawab dan berunding dengan pihak penuntut. Mekanisme pembayaran, termasuk apakah penanggung membayar langsung atau mengganti setelah Anda membayar, mengikuti wording polis. Tugas broker adalah mengawal komunikasi, melengkapi dokumen, dan memastikan tenggat tidak terlewat.
      </p>

      <SectionHeading icon={Ban}>Kesalahan yang Sering Membuat Klaim Sulit</SectionHeading>
      <ul>
        <li><strong>Mengakui tanggung jawab atau berjanji ganti rugi</strong> kepada pihak penuntut sebelum berkoordinasi dengan penanggung.</li>
        <li><strong>Menyelesaikan sendiri secara damai</strong> tanpa persetujuan penanggung, sehingga biaya tersebut bisa ditolak.</li>
        <li><strong>Terlambat melapor</strong> karena menunggu surat tuntutan resmi.</li>
        <li><strong>Menghilangkan atau tidak menyimpan bukti</strong> seperti jurnal kapal dan rekaman.</li>
        <li><strong>Tidak tahu isi polis</strong>, misalnya batas pertanggungan dan deductible, sehingga ekspektasi tidak sesuai.</li>
      </ul>
      <p>
        Untuk memahami pembagian peran dengan polis hull, baca <Link href="/blog/perbedaan-pi-dan-marine-hull">perbedaan P&amp;I dan Marine Hull</Link>.
      </p>

      <div className="mt-10 p-6 bg-[#0a1628] rounded-2xl text-white not-prose">
        <h3 className="flex items-center gap-2.5 font-display font-bold text-lg text-[#c9a84c] mb-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 shrink-0">
            <MessageCircleMore className="w-[16px] h-[16px] text-[#c9a84c]" strokeWidth={2} />
          </span>
          Belum Punya P&amp;I atau Ingin Cek Polis?
        </h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          Kirim data kapal Anda untuk analisa awal sebelum insiden terjadi.
        </p>
        <QuoteButton cluster="marine" lang="id" variant="gold" className="!rounded-xl !px-6 !py-3 !text-sm" />
      </div>

      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Halaman Terkait</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Produk &amp; Layanan</p>
            <ul className="space-y-2">
              <li><Link href="/asuransi-marine/protection-and-indemnity" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi P&amp;I Batam</Link></li>
              <li><Link href="/asuransi-marine/marine-hull" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Hull Insurance Batam</Link></li>
              <li><Link href="/asuransi-marine" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Marine Batam</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait</p>
            <ul className="space-y-2">
              <li><Link href="/blog/perbedaan-pi-dan-marine-hull" className="text-sm text-blue-700 hover:underline font-medium">→ Perbedaan P&amp;I dan Marine Hull</Link></li>
              <li><Link href="/blog/jenis-jenis-asuransi-kapal-armada" className="text-sm text-blue-700 hover:underline font-medium">→ Jenis-Jenis Asuransi Kapal Armada</Link></li>
              <li><Link href="/blog/cara-klaim-asuransi-marine-cargo" className="text-sm text-blue-700 hover:underline font-medium">→ Cara Klaim Asuransi Marine Cargo</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}

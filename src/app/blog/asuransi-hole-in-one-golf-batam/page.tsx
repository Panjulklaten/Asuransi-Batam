// app/blog/asuransi-hole-in-one-golf-batam/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import {
  Trophy,
  ShieldCheck,
  Users,
  Ruler,
  Percent,
  Eye,
  Gavel,
  MapPin,
  ClipboardList,
  FileSearch,
  BadgeCheck,
  Flag,
  Calculator,
  CreditCard,
  Gem,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Hole in One Batam: Syarat, Ketentuan & Cara Kerja Lengkap",
  description:
    "Panduan lengkap asuransi hole in one untuk turnamen golf di Batam — syarat peserta, jarak minimum hole, risiko sendiri, dan cara kerja klaim hadiah hole in one.",
  keywords: [
    "asuransi hole in one Batam",
    "asuransi turnamen golf Batam",
    "hole in one insurance",
    "asuransi golf Batam",
    "syarat hole in one",
    "asuransi event Batam",
  ],
  canonical: "https://asuransibatam.com/blog/asuransi-hole-in-one-golf-batam",
  languages: { id: "https://asuransibatam.com/blog/asuransi-hole-in-one-golf-batam" },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asuransi Hole in One Batam: Syarat, Ketentuan & Cara Kerja Lengkap",
  datePublished: "2026-09-17",
  dateModified: "2026-09-17",
  author: { "@type": "Person", name: "Rio Mardiansyah" },
  publisher: { "@type": "Organization", name: "Asuransi Batam" },
};

const faqItems = [
  {
    question: "Apa itu asuransi hole in one?",
    answer:
      "Asuransi hole in one adalah polis yang membayarkan hadiah turnamen golf (mobil, uang tunai, perhiasan, atau hadiah lain) kepada peserta yang berhasil memasukkan bola langsung ke hole hanya dengan satu pukulan dari tee box. Alih-alih panitia menanggung sendiri risiko hadiah bernilai besar, biaya tersebut dialihkan ke perusahaan asuransi dengan membayar premi yang jauh lebih kecil dari nilai hadiah.",
  },
  {
    question: "Kenapa jarak hole minimal harus 120 meter?",
    answer:
      "Peluang seorang pegolf mencetak hole in one berbanding terbalik dengan jarak — semakin pendek jarak hole, semakin tinggi probabilitas bola langsung masuk. Batas jarak minimum (dalam kasus ini 120 meter) adalah standar aktuaria yang menjaga probabilitas kejadian tetap berada dalam rentang yang wajar dihitung oleh perusahaan asuransi. Hole yang lebih pendek dari batas ini biasanya akan dikecualikan dari jaminan atau dikenakan premi jauh lebih tinggi.",
  },
  {
    question: "Apa yang dimaksud risiko sendiri 10% dari TSI dalam polis hole in one?",
    answer:
      "TSI (Total Sum Insured) adalah nilai total hadiah yang diasuransikan. Risiko sendiri 10% berarti jika terjadi klaim, tertanggung (biasanya panitia turnamen) menanggung 10% dari nilai hadiah tersebut secara mandiri, sementara 90% sisanya dibayarkan oleh asuransi. Skema ini membantu menekan premi sekaligus memastikan panitia tetap punya kepentingan dalam menjaga integritas pertandingan.",
  },
  {
    question: "Kenapa peserta harus amatir, bukan pemain profesional?",
    answer:
      "Pegolf profesional memiliki tingkat akurasi pukulan jauh lebih tinggi dibanding amatir, sehingga probabilitas mereka mencetak hole in one juga lebih besar. Karena perhitungan premi asuransi hole in one didasarkan pada probabilitas statistik pemain amatir pada umumnya, keikutsertaan pemain profesional akan mengubah profil risiko secara signifikan dan biasanya dikecualikan dari polis standar.",
  },
  {
    question: "Kenapa harus ada petugas asuransi yang mengawasi pertandingan?",
    answer:
      "Kehadiran petugas independen (marshal/witness) di hole yang diasuransikan berfungsi memverifikasi bahwa hole in one benar-benar terjadi sesuai prosedur — bola dipukul dari tee box yang benar, dengan klub dan bola yang sah, dan tercatat oleh saksi netral. Tanpa verifikasi independen, klaim berisiko ditolak karena tidak ada bukti sah yang bisa dipertanggungjawabkan kepada perusahaan asuransi.",
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

function TCCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2.5 mb-2.5">
        <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#faf8f3] border border-[#eee3cc]">
          <Icon className="w-[18px] h-[18px] text-[#a07830]" strokeWidth={2} />
        </span>
        <p className="text-sm font-semibold text-[#0a1628] m-0">{title}</p>
      </div>
      <p className="text-sm text-[#475569] m-0 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function AsuransiHoleInOneGolfBatamPage() {
  return (
    <ArticleLayout
      title="Panduan Lengkap Asuransi Hole in One Batam: Syarat, Ketentuan & Cara Kerja"
      description="Panduan lengkap bagi panitia turnamen golf di Batam — memahami syarat peserta, jarak minimum hole, risiko sendiri, dan cara kerja klaim hadiah hole in one."
      date="17 September 2026"
      category="Asuransi Event"
      readTime="9 menit"
      breadcrumbs={[{ label: "Asuransi Hole in One Golf Batam", href: "/blog/asuransi-hole-in-one-golf-batam" }]}
      schema={schema}
      faqSchema={faqSchema}
    >
      <p>
        Batam adalah salah satu destinasi wisata golf paling matang di Indonesia. Kota ini memiliki
        setidaknya tujuh lapangan golf berstandar internasional — Southlinks Country Club, Palm Springs
        Golf &amp; Beach Resort, Tering Bay Golf &amp; Country Club (rancangan Greg Norman), BICC, Padang
        Golf Sukajadi, Indah Puri Golf Resort, dan Batam Hills Golf Resort. Popularitasnya terus naik;
        salah satu klub besar di Batam bahkan mencatat puluhan ribu putaran pemain per tahun, dengan porsi
        signifikan berasal dari wisatawan golf Singapura dan Malaysia yang datang lewat feri dalam hitungan
        menit.
      </p>
      <p>
        Dengan geliat sport tourism sebesar ini, turnamen golf amal, korporat, maupun reguler klub hampir
        digelar setiap bulan di Batam — dan hampir semuanya menyertakan hadiah hole in one sebagai daya
        tarik utama peserta. Di sinilah <strong>asuransi hole in one</strong> berperan penting: memastikan
        panitia turnamen tidak perlu menanggung sendiri risiko finansial dari hadiah bernilai besar jika
        benar-benar ada peserta yang berhasil mencetaknya.
      </p>

      {/* HERO IMAGE SLOT */}
      <div className="not-prose my-10 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
        <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
          <Image
            src="/images/potoartikel/golf-hole-in-one-batam.webp"
            alt="Pegolf melakukan pukulan tee shot pada turnamen golf hole in one di Batam"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <div className="bg-gray-50 px-5 py-3 border-t border-gray-200 flex items-start gap-3">
          <Trophy className="w-4 h-4 text-[#c9a84c] mt-0.5 flex-shrink-0" />
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong className="text-gray-800">Satu pukulan, satu hadiah besar</strong> — hole in one adalah
            momen langka yang menjadikannya daya tarik utama sekaligus risiko finansial terbesar dalam
            sebuah turnamen golf amatir.
          </p>
        </div>
      </div>

      <SectionHeading icon={ShieldCheck}>Bagaimana Cara Kerja Asuransi Hole in One?</SectionHeading>
      <p>
        Konsepnya sederhana namun elegan secara aktuaria: panitia turnamen menjanjikan hadiah besar —
        mulai dari mobil, motor, uang tunai, hingga perhiasan — bagi siapa pun yang berhasil hole in one
        di hole tertentu yang sudah ditentukan (biasanya par 3). Alih-alih menyiapkan dana cadangan sebesar
        nilai hadiah penuh (yang mungkin tidak akan pernah terpakai jika tidak ada yang berhasil), panitia
        cukup membayar premi asuransi yang nilainya jauh lebih kecil.
      </p>
      <p>
        Jika benar-benar ada peserta yang mencetak hole in one sesuai syarat dan ketentuan polis,
        perusahaan asuransi yang akan membayarkan sebagian besar nilai hadiah tersebut kepada panitia
        (atau langsung kepada pemenang, tergantung skema yang disepakati). Karena probabilitas hole in one
        pada pegolf amatir sangat kecil, premi yang dibayarkan panitia jauh lebih ekonomis dibanding
        risiko menyediakan dana hadiah penuh di muka.
      </p>

      <SectionHeading icon={ClipboardList}>Syarat dan Ketentuan Standar Polis Hole in One</SectionHeading>
      <p>
        Untuk menjaga agar perhitungan risiko tetap akurat dan adil bagi semua pihak, polis hole in one
        selalu mensyaratkan beberapa ketentuan (term &amp; condition) yang ketat. Berikut penjelasan
        masing-masing syarat secara rinci:
      </p>

      <div className="not-prose my-6 grid sm:grid-cols-2 gap-4">
        <TCCard
          icon={Users}
          title="Peserta Maksimal 150 Orang"
          desc="Semakin banyak peserta yang mencoba, semakin besar peluang statistik munculnya hole in one. Batas maksimal 150 peserta menjaga probabilitas kejadian tetap sesuai perhitungan premi yang sudah disepakati di awal. Jika jumlah peserta turnamen melebihi batas ini, panitia wajib melapor ke asuransi untuk penyesuaian premi sebelum hari pelaksanaan."
        />
        <TCCard
          icon={Trophy}
          title="Peserta Berstatus Amatir"
          desc="Pegolf profesional memiliki akurasi pukulan jauh di atas rata-rata pemain amatir, sehingga peluang mereka mencetak hole in one juga meningkat drastis. Polis hole in one standar hanya berlaku untuk turnamen amatir; kehadiran pemain berlisensi profesional di hole yang diasuransikan umumnya membuat klaim tidak dijamin."
        />
        <TCCard
          icon={Ruler}
          title="Jarak Hole Minimal 120 Meter"
          desc="Jarak tee ke hole berbanding lurus dengan tingkat kesulitan, dan berbanding terbalik dengan probabilitas hole in one. Hole yang terlalu pendek akan membuat peluang keberhasilan naik signifikan di luar perhitungan aktuaria standar, sehingga panitia wajib memastikan hole yang dipilih memenuhi jarak minimum ini sebelum turnamen dimulai."
        />
        <TCCard
          icon={Percent}
          title="Risiko Sendiri 10% dari TSI"
          desc="Bila klaim terjadi, tertanggung (panitia) menanggung 10% dari Total Sum Insured (nilai hadiah yang diasuransikan) sebagai risiko sendiri, sementara 90% sisanya dibayarkan asuransi. Skema ini adalah praktik umum di banyak lini asuransi untuk menjaga premi tetap terjangkau."
        />
      </div>

      <div className="not-prose my-6">
        <TCCard
          icon={Eye}
          title="Petugas Asuransi sebagai Pengawas Independen"
          desc="Perusahaan asuransi (atau perwakilannya) berhak menempatkan petugas di hole yang diasuransikan untuk memverifikasi secara langsung bahwa hole in one benar-benar terjadi sesuai prosedur — pukulan dilakukan dari tee box yang sah, dengan peserta terdaftar, klub dan bola yang sesuai aturan, dan disaksikan pihak netral. Kehadiran pengawas ini melindungi baik peserta maupun panitia dari sengketa keabsahan klaim setelah pertandingan selesai."
        />
      </div>

      <SectionHeading icon={Gem}>Jenis Hadiah yang Umum Diasuransikan</SectionHeading>
      <p>
        Nilai dan jenis hadiah hole in one di turnamen-turnamen Batam bervariasi tergantung skala acara —
        mulai dari turnamen amal komunitas hingga turnamen korporat berskala besar yang melibatkan sponsor
        dari Singapura dan Malaysia. Beberapa jenis hadiah yang umum diasuransikan:
      </p>
      <ul>
        <li>Kendaraan bermotor (mobil atau motor) sebagai hadiah utama — jenis hadiah paling umum dan paling sering menjadi daya tarik utama turnamen.</li>
        <li>Uang tunai dengan nominal tertentu, sering dikombinasikan dengan hadiah lain sebagai hadiah hiburan di hole-hole lainnya.</li>
        <li>Perhiasan atau barang mewah bernilai tinggi, khususnya pada turnamen amal atau turnamen yang disponsori merek premium.</li>
        <li>Paket perjalanan atau voucher bernilai besar sebagai variasi hadiah yang lebih fleksibel bagi panitia.</li>
      </ul>

      <SectionHeading icon={Calculator}>Ilustrasi Sederhana: Kenapa Premi Jauh Lebih Kecil dari Nilai Hadiah</SectionHeading>
      <p>
        Sebagai ilustrasi umum (bukan angka pasti, karena setiap turnamen memiliki profil risiko
        berbeda): jika sebuah turnamen menjanjikan hadiah mobil senilai ratusan juta rupiah untuk hole in
        one di hole par 3 sejauh lebih dari 120 meter, dengan jumlah peserta di bawah 150 orang yang
        semuanya berstatus amatir, probabilitas statistik munculnya hole in one pada hari itu sangat
        kecil. Karena itulah, premi yang perlu dibayar panitia biasanya hanya berkisar pada persentase
        kecil dari nilai hadiah — jauh lebih hemat dibanding harus menyiapkan dana cadangan sebesar nilai
        hadiah penuh yang mungkin tidak pernah terpakai.
      </p>
      <div className="bg-[#faf8f3] border border-[#e2e8f0] rounded-xl p-4 flex items-start gap-3">
        <Calculator className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" />
        <p className="text-sm text-[#475569] leading-relaxed m-0">
          Angka premi aktual ditentukan oleh perusahaan asuransi berdasarkan nilai hadiah, jarak hole,
          jumlah peserta, dan data historis turnamen serupa.{" "}
          <Link href="/kontak" className="text-[#1a4fa0] font-semibold hover:underline">
            Konsultasikan kebutuhan turnamen Anda untuk estimasi premi yang akurat →
          </Link>
        </p>
      </div>

      <SectionHeading icon={MapPin}>Konteks Batam: Sport Tourism dan Turnamen Rutin</SectionHeading>
      <p>
        Dinas Kebudayaan dan Pariwisata Kota Batam mencatat tujuh lapangan golf berkelas internasional di
        Batam, dengan turnamen yang digelar hampir setiap bulan — mulai dari Batam Golf Tournament
        tahunan di BICC hingga kompetisi rutin di Palm Springs dan Southlinks. Besarnya animo wisatawan
        golf dari Singapura dan Malaysia membuat turnamen di Batam sering kali berskala regional,
        melibatkan peserta lintas negara dengan nilai hadiah yang tidak sedikit — menjadikan perlindungan
        asuransi hole in one bukan sekadar formalitas, melainkan bagian penting dari manajemen risiko
        acara.
      </p>
      <p>
        Bagi panitia turnamen amal atau korporat yang ingin memberikan hadiah lebih besar dari standar
        (misalnya mobil mewah atau hadiah multi-hole), penting untuk mengonsultasikan struktur turnamen
        sejak tahap perencanaan agar syarat jarak hole, jumlah peserta, dan skema pengawasan bisa
        disesuaikan dengan nilai pertanggungan yang diinginkan.
      </p>

      <SectionHeading icon={Gavel}>Kesalahan Umum yang Membuat Klaim Ditolak</SectionHeading>
      <div className="not-prose my-6 grid sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl border border-[#e2e8f0] bg-white">
          <div className="flex items-center gap-2.5 mb-2">
            <Eye className="w-[18px] h-[18px] text-[#a07830]" strokeWidth={2} />
            <p className="text-sm font-semibold text-[#0a1628] m-0">Tidak Ada Saksi Independen</p>
          </div>
          <p className="text-sm text-[#475569] m-0">Hole in one yang hanya disaksikan teman satu flight tanpa petugas resmi berisiko sulit diverifikasi.</p>
        </div>
        <div className="p-5 rounded-xl border border-[#e2e8f0] bg-white">
          <div className="flex items-center gap-2.5 mb-2">
            <Ruler className="w-[18px] h-[18px] text-[#a07830]" strokeWidth={2} />
            <p className="text-sm font-semibold text-[#0a1628] m-0">Jarak Hole Tidak Sesuai</p>
          </div>
          <p className="text-sm text-[#475569] m-0">Perubahan tee box mendadak (misalnya dimajukan karena cuaca) tanpa konfirmasi ke asuransi bisa membuat jarak turun di bawah minimum polis.</p>
        </div>
        <div className="p-5 rounded-xl border border-[#e2e8f0] bg-white">
          <div className="flex items-center gap-2.5 mb-2">
            <Users className="w-[18px] h-[18px] text-[#a07830]" strokeWidth={2} />
            <p className="text-sm font-semibold text-[#0a1628] m-0">Peserta Tidak Terdaftar</p>
          </div>
          <p className="text-sm text-[#475569] m-0">Pemain tamu dadakan yang tidak masuk daftar resmi peserta turnamen umumnya tidak memenuhi syarat klaim.</p>
        </div>
        <div className="p-5 rounded-xl border border-[#e2e8f0] bg-white">
          <div className="flex items-center gap-2.5 mb-2">
            <Flag className="w-[18px] h-[18px] text-[#a07830]" strokeWidth={2} />
            <p className="text-sm font-semibold text-[#0a1628] m-0">Data Turnamen Tidak Dilaporkan</p>
          </div>
          <p className="text-sm text-[#475569] m-0">Perubahan jumlah peserta atau format lomba yang tidak dikonfirmasi ke asuransi sebelum hari-H bisa membatalkan jaminan.</p>
        </div>
      </div>

      <SectionHeading icon={CreditCard}>Cakupan, Dokumen & Estimasi Premi</SectionHeading>
      <p>
        Rincian jenis hadiah yang bisa diasuransikan, dokumen yang perlu disiapkan panitia, dan gambaran
        premi dijelaskan di halaman produk kami. Lihat{" "}
        <Link href="/asuransi-event/hole-in-one" className="font-medium">
          Asuransi Hole in One Batam
        </Link>{" "}
        untuk detail cakupan dan cara pengajuannya.
      </p>

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
          <CreditCard className="w-5 h-5 text-[#c9a84c]" strokeWidth={2} />
          <h3 className="font-display font-bold text-[#0a1628] m-0">Rencanakan Turnamen Golf Anda</h3>
        </div>
        <p className="text-[#475569] mb-4">
          Rio berpengalaman langsung menangani asuransi hole in one untuk berbagai turnamen golf. Konsultasikan
          syarat, jarak hole, dan nilai hadiah turnamen Anda untuk mendapatkan perlindungan yang tepat.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/asuransi-event/hole-in-one" className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm">
            Lihat Cakupan & Ajukan
          </Link>
          <a href="https://wa.me/6281373336728?text=Halo%2C%20saya%20ingin%20konsultasi%20asuransi%20hole%20in%20one" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm">
            Chat via WhatsApp
          </a>
        </div>
      </div>

      {/* Related Links — Cluster Asuransi Event */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>
          Baca Juga: Cluster Asuransi Event
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait dalam Cluster</p>
            <ul className="space-y-2">
              <li><Link href="/blog/asuransi-konser-musik-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Konser Musik Batam</Link></li>
              <li><Link href="/blog/asuransi-motorcross-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Event Motor Cross Batam & Kepri</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Produk &amp; Layanan</p>
            <ul className="space-y-2">
              <li><Link href="/asuransi-event/hole-in-one" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Hole in One Batam (cakupan & harga)</Link></li>
              <li><Link href="/asuransi-liability" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Liability Batam</Link></li>
              <li><Link href="/kontak" className="text-sm text-blue-700 hover:underline font-medium">→ Hubungi Tim Asuransi Batam</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}

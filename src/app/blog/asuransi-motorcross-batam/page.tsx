// app/blog/asuransi-motorcross-batam/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import {
  Bike,
  ShieldCheck,
  Users,
  HeartPulse,
  CloudRain,
  Gavel,
  AlertTriangle,
  MapPin,
  ClipboardList,
  FileSearch,
  BadgeCheck,
  Ambulance,
  Fence,
  CreditCard,
  Flag,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Event Motor Cross Batam & Kepri: Jaminan Pembalap & Penonton",
  description:
    "Panduan lengkap asuransi event motor cross dan grasstrack di Batam serta Kepulauan Riau — jaminan personal accident pembalap, public liability penonton, dan risiko cuaca.",
  keywords: [
    "asuransi motor cross Batam",
    "asuransi event grasstrack Kepri",
    "asuransi balap motor Batam",
    "public liability event olahraga",
    "personal accident pembalap",
    "asuransi event Batam",
  ],
  canonical: "https://asuransibatam.com/blog/asuransi-motorcross-batam",
  languages: { id: "https://asuransibatam.com/blog/asuransi-motorcross-batam" },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asuransi Event Motor Cross Batam & Kepri: Jaminan Pembalap & Penonton",
  datePublished: "2026-09-17",
  dateModified: "2026-09-17",
  author: { "@type": "Person", name: "Rio Mardiansyah" },
  publisher: { "@type": "Organization", name: "Asuransi Batam" },
};

const faqItems = [
  {
    question: "Apakah asuransi motor cross menanggung kerusakan motor pembalap?",
    answer:
      "Umumnya tidak secara otomatis. Fokus utama asuransi event motor cross adalah personal accident pembalap dan public liability terhadap pihak ketiga (penonton, panitia, properti sekitar sirkuit). Kerusakan unit motor pembalap biasanya menjadi tanggung jawab pribadi masing-masing pembalap atau tim, kecuali ada perluasan jaminan khusus yang disepakati di awal.",
  },
  {
    question: "Siapa yang wajib membeli polis: panitia atau pembalap masing-masing?",
    answer:
      "Public liability dan asuransi properti venue menjadi tanggung jawab panitia penyelenggara (event organizer atau klub balap), karena merekalah pihak yang digugat jika ada penonton atau pihak ketiga yang dirugikan. Personal accident pembalap bisa dibeli kolektif oleh panitia untuk seluruh peserta terdaftar, atau menjadi syarat wajib yang harus dibuktikan setiap pembalap saat pendaftaran.",
  },
  {
    question: "Apakah event grasstrack/motocross skala klub tetap perlu asuransi?",
    answer:
      "Sangat disarankan. Justru event skala klub atau kejuaraan daerah (Kejurda) yang biasanya belum memiliki prosedur keselamatan seketat kejuaraan nasional lebih rentan terhadap insiden. Nilai premi untuk event skala kecil-menengah relatif terjangkau dibanding potensi kerugian jika terjadi kecelakaan serius.",
  },
  {
    question: "Bagaimana jika hujan deras membuat trek becek dan event harus dihentikan?",
    answer:
      "Jika penghentian dilakukan demi keselamatan (trek terlalu licin dan berbahaya), ini termasuk risiko operasional yang wajar dan tidak otomatis menjadi klaim asuransi kecuali panitia memiliki perluasan event cancellation. Namun, jika insiden kecelakaan tetap terjadi akibat kondisi trek yang buruk sebelum penghentian, jaminan personal accident dan liability tetap berlaku selama sesuai prosedur polis.",
  },
  {
    question: "Apakah penonton yang menonton dari luar area yang diizinkan tetap dijamin?",
    answer:
      "Tidak selalu. Polis public liability umumnya mensyaratkan panitia menyediakan barrier dan zona aman penonton sesuai standar keselamatan. Penonton yang secara sengaja melanggar batas larangan (misalnya masuk ke dalam trek) berpotensi dikecualikan dari jaminan, sehingga penting bagi panitia untuk menegakkan pembatasan area secara konsisten.",
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

function CoverageCard({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
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

export default function AsuransiMotorCrossBatamPage() {
  return (
    <ArticleLayout
      title="Asuransi Event Motor Cross Batam & Kepri: Dari Pembalap sampai Penonton"
      description="Panduan lengkap perlindungan risiko event motor cross dan grasstrack di Kepulauan Riau — jaminan personal accident, public liability, dan tips memilih perlindungan yang tepat."
      date="17 September 2026"
      category="Asuransi Event"
      readTime="9 menit"
      breadcrumbs={[{ label: "Asuransi Motor Cross Batam", href: "/blog/asuransi-motorcross-batam" }]}
      schema={schema}
      faqSchema={faqSchema}
    >
      <p>
        Olahraga garuk tanah semakin menggeliat di Kepulauan Riau. Data Ikatan Motor Indonesia (IMI)
        Kepri mencatat puluhan pembalap grasstrack dan motocross aktif berlaga di ajang-ajang seperti
        Kejurda Kepri Jangkar Biru Grasstrack &amp; Motocross yang digelar di Sirkuit Golden Prawn,
        Bengkong — mendatangkan peserta dari Tanjungpinang, Karimun, Bintan, Kundur, hingga tuan rumah
        Batam sendiri. Sementara itu, kawasan olahraga Temenggung Abdul Jamal di Muka Kuning rutin
        dipakai untuk ajang balap roda dua berskala lebih besar seperti Kepri Cup Prix dan Barelang Drag
        Championship, yang menghadirkan ratusan penonton dalam satu akhir pekan.
      </p>
      <p>
        Semakin ramai sebuah event balap, semakin besar pula eksposur risikonya — bukan hanya bagi
        pembalap yang memacu adrenalin di lintasan, tapi juga bagi penonton yang berdiri di pinggir trek,
        panitia yang mengatur jalannya lomba, dan pemilik lahan atau properti di sekitar sirkuit.{" "}
        <strong>Asuransi event motor cross</strong> hadir untuk memastikan satu insiden di lintasan tidak
        berubah menjadi bencana finansial bagi penyelenggara.
      </p>

      {/* HERO IMAGE SLOT */}
      <div className="not-prose my-10 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
        <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
          <Image
            src="/images/potoartikel/motorcross-kepri.webp"
            alt="Aksi pembalap motor cross di sirkuit Kepulauan Riau yang memerlukan perlindungan asuransi event"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <div className="bg-gray-50 px-5 py-3 border-t border-gray-200 flex items-start gap-3">
          <Bike className="w-4 h-4 text-[#c9a84c] mt-0.5 flex-shrink-0" />
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong className="text-gray-800">Kecepatan tinggi, margin keselamatan tipis</strong> —
            karakter olahraga motor cross membuat cedera pembalap dan risiko terhadap penonton jauh lebih
            tinggi dibanding olahraga penonton pasif lainnya.
          </p>
        </div>
      </div>

      <SectionHeading icon={Flag}>Kenapa Motor Cross Punya Profil Risiko Khusus?</SectionHeading>
      <p>
        Berbeda dengan konser atau turnamen olahraga statis, motor cross dan grasstrack melibatkan
        kendaraan bermotor yang melaju kencang di lintasan tanah terbuka, sering kali tanpa pembatas fisik
        yang kokoh antara trek dan area penonton. Beberapa karakteristik yang membuat risikonya unik:
      </p>
      <ul>
        <li>Pembalap memacu kecepatan tinggi di permukaan tanah yang tidak rata, dengan risiko jatuh atau tabrakan antar pembalap yang relatif tinggi dibanding olahraga lain.</li>
        <li>Motor yang keluar lintasan (out of track) berpotensi mengenai penonton, panitia, atau kendaraan lain yang terparkir di sekitar venue.</li>
        <li>Kondisi trek sangat bergantung cuaca — hujan membuat permukaan tanah licin dan meningkatkan risiko selip atau terguling.</li>
        <li>Banyak event, terutama skala klub dan Kejurda, diselenggarakan di lahan terbuka atau sirkuit non-permanen dengan fasilitas keselamatan yang bervariasi.</li>
      </ul>

      <SectionHeading icon={ShieldCheck}>Jaminan dari Pemain sampai Penonton</SectionHeading>
      <p>
        Sesuai namanya, asuransi event motor cross yang baik harus mencakup seluruh pihak yang terlibat —
        bukan hanya pembalap di lintasan, tapi juga penonton dan panitia di sekelilingnya.
      </p>
      <div className="not-prose my-6 grid sm:grid-cols-2 gap-4">
        <CoverageCard
          icon={HeartPulse}
          title="Personal Accident Pembalap"
          desc="Santunan tunai untuk pembalap terdaftar jika mengalami cedera, cacat tetap, atau meninggal dunia akibat kecelakaan selama sesi latihan, kualifikasi, maupun balapan utama."
        />
        <CoverageCard
          icon={Users}
          title="Public Liability Penonton"
          desc="Menanggung tuntutan ganti rugi jika penonton, fotografer, atau pihak ketiga lain cedera akibat motor yang keluar lintasan atau insiden operasional lainnya."
        />
        <CoverageCard
          icon={Fence}
          title="Kerusakan Properti Venue"
          desc="Melindungi panitia dari klaim kerusakan pagar pembatas, tribun sementara, atau lahan milik pihak ketiga yang disewa sebagai lokasi sirkuit."
        />
        <CoverageCard
          icon={Gavel}
          title="Liability Pihak Ketiga"
          desc="Mencakup tanggung gugat jika motor peserta menabrak kendaraan lain yang terparkir di area venue atau merusak fasilitas umum di sekitar lokasi."
        />
      </div>
      <p>
        Sebagai pelengkap, panitia besar yang menyelenggarakan Kejurda atau kejuaraan tingkat provinsi
        juga sebaiknya mempertimbangkan{" "}
        <Link href="/asuransi-personal-accident" className="font-medium">
          Asuransi Personal Accident
        </Link>{" "}
        kolektif untuk seluruh kru medis dan panitia lintasan, mengingat mereka juga beroperasi di dekat
        area berisiko tinggi sepanjang hari perlombaan.
      </p>

      <SectionHeading icon={Ambulance}>Standar Keselamatan yang Perlu Dipenuhi</SectionHeading>
      <p>
        Perusahaan asuransi umumnya akan menilai kesiapan standar keselamatan sebelum menerbitkan polis
        event motor cross. Beberapa hal yang biasanya menjadi bagian dari assessment risiko:
      </p>
      <ol className="not-prose relative my-6 list-none p-0 space-y-5 ml-1">
        {[
          { title: "Ambulans dan tim medis standby", desc: "Wajib tersedia di lokasi sepanjang sesi latihan hingga balapan utama berlangsung, bukan hanya saat race utama." },
          { title: "Barrier dan zona aman penonton", desc: "Jarak minimum antara garis trek dan area penonton, dilengkapi pembatas fisik seperti ban bekas, waterbarrier, atau pagar jaring." },
          { title: "Briefing keselamatan pembalap", desc: "Sesi pengarahan sebelum lomba mengenai bendera peringatan, titik rawan trek, dan prosedur darurat." },
          { title: "Verifikasi lisensi dan APD pembalap", desc: "Helm standar SNI/SNELL, body protector, dan perlengkapan pelindung lain sesuai kelas yang diikuti." },
        ].map((item, i) => (
          <li key={i} className="flex gap-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0a1628] text-[#c9a84c] font-display font-bold text-sm shrink-0">
              {i + 1}
            </span>
            <div className="pt-0.5">
              <p className="font-semibold text-[#0a1628] m-0 text-[15px]">{item.title}</p>
              <p className="text-sm text-[#475569] mt-1 mb-0">{item.desc}</p>
            </div>
          </li>
        ))}
      </ol>

      <SectionHeading icon={MapPin}>Lokasi Balap di Kepri dan Konteks Risikonya</SectionHeading>
      <p>
        Sirkuit Golden Prawn di Bengkong menjadi salah satu lokasi favorit untuk ajang grasstrack dan
        motocross Kejurda Kepri, dengan peserta lintas kabupaten/kota — mulai dari Batam, Tanjungpinang,
        Karimun, Bintan, hingga Kundur. Sementara itu, kompleks olahraga Temenggung Abdul Jamal di Muka
        Kuning kini juga menjadi tuan rumah ajang balap berskala lebih besar seperti BMS KCP Kepri Cup
        Prix dan Barelang Drag Championship, yang menggabungkan road race dan drag race dalam satu
        akhir pekan dengan belasan kelas perlombaan.
      </p>
      <p>
        Karakteristik geografis Batam yang berupa pulau dengan curah hujan tropis tinggi turut memengaruhi
        jadwal dan keselamatan event. Trek tanah (grasstrack) sangat sensitif terhadap hujan — permukaan
        yang basah bisa berubah drastis dari kondisi ideal menjadi sangat licin hanya dalam hitungan
        menit, sehingga panitia perlu kesiapan mitigasi cuaca sebagai bagian dari manajemen risiko event.
      </p>

      <SectionHeading icon={AlertTriangle}>Risiko yang Sering Diabaikan Panitia</SectionHeading>
      <div className="not-prose my-6 grid sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl border border-[#e2e8f0] bg-white">
          <div className="flex items-center gap-2.5 mb-2">
            <CloudRain className="w-[18px] h-[18px] text-[#a07830]" strokeWidth={2} />
            <p className="text-sm font-semibold text-[#0a1628] m-0">Perubahan Cuaca Mendadak</p>
          </div>
          <p className="text-sm text-[#475569] m-0">Hujan deras di tengah lomba mengubah karakter trek dan meningkatkan risiko kecelakaan secara signifikan.</p>
        </div>
        <div className="p-5 rounded-xl border border-[#e2e8f0] bg-white">
          <div className="flex items-center gap-2.5 mb-2">
            <Users className="w-[18px] h-[18px] text-[#a07830]" strokeWidth={2} />
            <p className="text-sm font-semibold text-[#0a1628] m-0">Penonton di Luar Zona Aman</p>
          </div>
          <p className="text-sm text-[#475569] m-0">Penonton yang berdiri terlalu dekat trek demi foto atau video close-up rentan terkena motor yang keluar jalur.</p>
        </div>
        <div className="p-5 rounded-xl border border-[#e2e8f0] bg-white">
          <div className="flex items-center gap-2.5 mb-2">
            <HeartPulse className="w-[18px] h-[18px] text-[#a07830]" strokeWidth={2} />
            <p className="text-sm font-semibold text-[#0a1628] m-0">Pembalap Tanpa Proteksi</p>
          </div>
          <p className="text-sm text-[#475569] m-0">Pembalap non-tim atau kelas pemula kerap tidak memiliki asuransi pribadi, sehingga menjadi tanggungan penuh panitia jika terjadi kecelakaan.</p>
        </div>
        <div className="p-5 rounded-xl border border-[#e2e8f0] bg-white">
          <div className="flex items-center gap-2.5 mb-2">
            <Fence className="w-[18px] h-[18px] text-[#a07830]" strokeWidth={2} />
            <p className="text-sm font-semibold text-[#0a1628] m-0">Lahan Sewaan Pihak Ketiga</p>
          </div>
          <p className="text-sm text-[#475569] m-0">Banyak sirkuit non-permanen memakai lahan sewaan; kerusakan lahan bisa memicu sengketa dengan pemilik jika tidak diasuransikan.</p>
        </div>
      </div>

      <SectionHeading icon={ClipboardList}>Cara Mendapatkan Asuransi Event Motor Cross</SectionHeading>
      <p>Proses pengajuan untuk panitia klub, IMI Kepri, atau event organizer swasta umumnya meliputi:</p>
      <Steps />

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
          <h3 className="font-display font-bold text-[#0a1628] m-0">Lindungi Event Balap Anda</h3>
        </div>
        <p className="text-[#475569] mb-4">
          Konsultasikan kebutuhan asuransi event motor cross, grasstrack, atau balap otomotif lainnya
          dengan Rio. Kami membantu panitia dan klub balap di Kepri merancang perlindungan yang sesuai
          skala event.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/kontak" className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm">
            Konsultasi Asuransi Event
          </Link>
          <a href="https://wa.me/6281373336728?text=Halo%2C%20saya%20ingin%20konsultasi%20asuransi%20event%20motor%20cross" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm">
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
              <li><Link href="/blog/asuransi-hole-in-one-golf-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Hole in One Turnamen Golf Batam</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Produk &amp; Layanan</p>
            <ul className="space-y-2">
              <li><Link href="/asuransi-personal-accident" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Personal Accident Batam</Link></li>
              <li><Link href="/asuransi-kendaraan" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Kendaraan Batam</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}

function Steps() {
  const items = [
    { title: "Pendaftaran data event", desc: "Tanggal, lokasi sirkuit, estimasi jumlah pembalap dan penonton, serta susunan kelas yang dipertandingkan." },
    { title: "Assessment lokasi & keselamatan", desc: "Peninjauan kesiapan barrier, akses ambulans, dan zona aman penonton di venue." },
    { title: "Penentuan nilai pertanggungan", desc: "Santunan personal accident per pembalap dan limit liability disesuaikan skala event." },
    { title: "Penerbitan polis sebelum hari-H", desc: "Idealnya diajukan 1–2 minggu sebelum pelaksanaan untuk event Kejurda atau kejuaraan resmi." },
    { title: "Pendampingan klaim", desc: "Jika terjadi kecelakaan, tim kami membantu proses dokumentasi medis dan pengajuan klaim." },
  ];
  return (
    <ol className="not-prose relative my-6 list-none p-0 space-y-5 ml-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0a1628] text-[#c9a84c] font-display font-bold text-sm shrink-0">
            {i + 1}
          </span>
          <div className="pt-0.5">
            <p className="font-semibold text-[#0a1628] m-0 text-[15px]">{item.title}</p>
            <p className="text-sm text-[#475569] mt-1 mb-0">{item.desc}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

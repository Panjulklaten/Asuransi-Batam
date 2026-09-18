// app/blog/asuransi-konser-musik-batam/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import {
  Music4,
  ShieldCheck,
  Users,
  CloudRain,
  UserX,
  Wrench,
  Gavel,
  AlertTriangle,
  MapPin,
  FileSearch,
  BadgeCheck,
  Ticket,
  Landmark,
  Plane,
  CreditCard,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Konser Musik Batam: Liability, Pembatalan & Non-Appearance",
  description:
    "Panduan lengkap asuransi konser musik untuk promotor, event organizer, dan venue di Batam — liability penonton, risiko pembatalan acara, non-appearance artis, dan studi kasus nyata.",
  keywords: [
    "asuransi konser musik Batam",
    "asuransi event organizer Batam",
    "asuransi pembatalan konser",
    "non appearance insurance artis",
    "public liability konser",
    "asuransi event Batam",
  ],
  canonical: "https://asuransibatam.com/blog/asuransi-konser-musik-batam",
  languages: { id: "https://asuransibatam.com/blog/asuransi-konser-musik-batam" },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asuransi Konser Musik Batam: Liability, Pembatalan & Non-Appearance",
  datePublished: "2026-09-17",
  dateModified: "2026-09-17",
  author: { "@type": "Person", name: "Rio Mardiansyah" },
  publisher: { "@type": "Organization", name: "Asuransi Batam" },
};

const faqItems = [
  {
    question: "Apakah asuransi konser wajib dimiliki promotor di Batam?",
    answer:
      "Tidak ada regulasi yang mewajibkan secara eksplisit, namun venue-venue besar seperti GOR/Sport Hall Temenggung Abdul Jamal umumnya mensyaratkan bukti perlindungan public liability sebelum izin peminjaman gedung diterbitkan. Selain itu, semakin banyak sponsor korporat dan pemerintah kota yang meminta bukti asuransi sebagai syarat kerja sama acara berskala menengah-besar.",
  },
  {
    question: "Apa bedanya event cancellation insurance dan non-appearance insurance?",
    answer:
      "Event cancellation melindungi promotor dari kerugian akibat SELURUH acara batal, ditunda, atau direlokasi karena sebab di luar kendali (cuaca ekstrem, bencana, izin dicabut). Non-appearance insurance lebih spesifik: hanya menanggung kerugian akibat artis utama gagal tampil karena sakit, kecelakaan, atau keterlambatan perjalanan, sementara acara itu sendiri tetap bisa berjalan dengan susunan lain.",
  },
  {
    question: "Siapa yang menanggung kerugian jika artis mendadak batal datang?",
    answer:
      "Secara hukum, kewajiban mengembalikan uang tiket ada di pihak promotor sebagai pelaku usaha, bukan artis atau venue. Tanpa non-appearance insurance, seluruh talent fee yang sudah dibayar (yang biasanya tidak bisa ditarik kembali), biaya venue, dan kewajiban refund tiket ditanggung penuh oleh promotor.",
  },
  {
    question: "Apakah konser outdoor di Batam berisiko lebih tinggi dibanding indoor?",
    answer:
      "Ya. Cuaca tropis Batam dengan curah hujan tinggi dan angin kencang di musim tertentu meningkatkan risiko pembatalan mendadak untuk acara outdoor. Panggung, rigging lampu, dan LED screen yang terpasang di ruang terbuka juga lebih rentan rusak akibat angin kencang dibanding acara indoor di gedung tertutup.",
  },
  {
    question: "Berapa lama proses pengajuan asuransi konser sebelum hari-H?",
    answer:
      "Idealnya polis diajukan 30–60 hari sebelum acara, terutama jika melibatkan artis mancanegara atau nilai pertanggungan besar, karena perusahaan asuransi perlu waktu untuk assessment risiko venue, rundown acara, dan profil artis. Untuk acara kecil-menengah, proses bisa dipercepat menjadi 1–2 minggu.",
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

function CoverageCard({
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

export default function AsuransiKonserMusikBatamPage() {
  return (
    <ArticleLayout
      title="Panduan Lengkap Asuransi Konser Musik Batam: Liability, Pembatalan & Non-Appearance Artis"
      description="Panduan lengkap perlindungan risiko konser musik untuk promotor, event organizer, dan pengelola venue — dari liability penonton hingga pembatalan mendadak."
      date="17 September 2026"
      category="Asuransi Event"
      readTime="10 menit"
      breadcrumbs={[{ label: "Asuransi Konser Musik Batam", href: "/blog/asuransi-konser-musik-batam" }]}
      schema={schema}
      faqSchema={faqSchema}
    >
      <p>
        Batam sedang tumbuh menjadi salah satu titik pertunjukan musik yang diperhitungkan di Kepulauan
        Riau. Sport Hall Temenggung Abdul Jamal di Muka Kuning tercatat pernah menjadi panggung Konser
        Tulus &quot;Tur Manusia&quot; dan XYZ Live Ground, sementara pelantikan pengurus Solidaritas Musisi
        Indonesia (SOLMI) Batam pada akhir 2025 turut dirangkaikan dengan konser internasional{" "}
        <em>Rock Friend&rsquo;z</em> yang menghadirkan musisi dari Indonesia, Malaysia, dan Singapura dalam
        satu panggung. Hotel-hotel besar seperti Grand Swiss-Belhotel Harbour Bay pun rutin mengundang
        artis mancanegara, mulai dari legenda Mandopop asal Malaysia hingga penyanyi regional lainnya.
      </p>
      <p>
        Sebagai kota FTZ (Free Trade Zone) yang berbatasan langsung dengan Singapura dan Malaysia, Batam
        punya posisi unik: mendatangkan artis dari negara tetangga jauh lebih mudah secara logistik
        dibanding kota-kota besar lain di Indonesia. Namun kemudahan ini juga membawa lapisan risiko
        tambahan — mulai dari keterlambatan penyeberangan artis lewat feri, isu keimigrasian, sampai
        risiko standar setiap konser seperti kerumunan penonton dan kerusakan peralatan panggung. Di sinilah{" "}
        <Link href="/asuransi-event/konser-musik" className="font-medium">
          asuransi konser musik
        </Link>{" "}
        — salah satu kategori dalam{" "}
        <Link href="/asuransi-event" className="font-medium">
          asuransi event
        </Link>{" "}
        — berperan sebagai jaring pengaman finansial bagi promotor, event organizer, dan pihak venue.
      </p>

      {/* HERO IMAGE SLOT */}
      <div className="not-prose my-10 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
        <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
          <Image
            src="/images/potoartikel/konser-musik-batam.webp"
            alt="Ilustrasi konser musik di Batam yang memerlukan perlindungan asuransi event"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <div className="bg-gray-50 px-5 py-3 border-t border-gray-200 flex items-start gap-3">
          <Music4 className="w-4 h-4 text-[#c9a84c] mt-0.5 flex-shrink-0" />
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong className="text-gray-800">Panggung, penonton, dan artis</strong> — tiga elemen konser
            yang masing-masing punya profil risiko berbeda dan idealnya dilindungi dengan skema asuransi
            yang sesuai.
          </p>
        </div>
      </div>

      <SectionHeading icon={ShieldCheck}>Apa Itu Asuransi Konser Musik?</SectionHeading>
      <p>
        Asuransi konser musik bukan satu produk tunggal, melainkan gabungan beberapa jaminan yang
        dirancang khusus untuk siklus hidup sebuah acara — dari masa persiapan, hari pelaksanaan, sampai
        pembongkaran panggung. Secara umum, paket perlindungan untuk konser mencakup empat pilar utama
        yang saling melengkapi.
      </p>

      <div className="not-prose my-6 grid sm:grid-cols-2 gap-4">
        <CoverageCard
          icon={Users}
          title="Public Liability (Tanggung Gugat)"
          desc="Menanggung tuntutan hukum dan biaya pengobatan jika penonton, kru, atau pihak ketiga cedera akibat operasional acara — misalnya desakan crowd, barikade roboh, atau kecelakaan di area venue."
        />
        <CoverageCard
          icon={UserX}
          title="Non-Appearance Artis"
          desc="Mengganti kerugian promotor jika artis utama gagal tampil karena sakit mendadak, kecelakaan, atau tidak bisa tiba tepat waktu di lokasi acara."
        />
        <CoverageCard
          icon={CloudRain}
          title="Event Cancellation"
          desc="Melindungi dari kerugian jika seluruh acara terpaksa dibatalkan, ditunda, atau direlokasi akibat cuaca ekstrem, bencana alam, atau pencabutan izin mendadak."
        />
        <CoverageCard
          icon={Wrench}
          title="Kerusakan Properti & Peralatan"
          desc="Menanggung kerusakan panggung, rigging, sound system, dan LED screen akibat kebakaran, angin kencang, atau kecelakaan operasional selama masa persiapan hingga pembongkaran."
        />
      </div>

      <SectionHeading icon={Gavel}>Risiko Liability: Saat Penonton yang Menuntut</SectionHeading>
      <p>
        Risiko liability adalah salah satu yang paling sering meluluhlantakkan keuangan penyelenggara
        acara karena nilainya tidak terduga dan bisa berkembang menjadi gugatan hukum berkepanjangan.
        Kasus yang paling umum terjadi di lapangan antara lain panggung ambruk akibat angin kencang
        dengan kerugian peralatan yang bisa mencapai miliaran rupiah, serta penonton yang cedera akibat
        desakan kerumunan (crowd crush) di dekat panggung utama. Tanpa perlindungan public liability,
        seluruh tuntutan ganti rugi dari korban maupun keluarganya harus ditanggung sendiri oleh event
        organizer — sebuah risiko yang secara finansial bisa jauh melampaui total budget produksi acara
        itu sendiri.
      </p>
      <p>
        Polis public liability untuk konser biasanya juga memperluas jaminan ke kerusakan properti pihak
        ketiga di sekitar venue — misalnya pagar, tanaman, atau bangunan yang tidak sengaja rusak saat
        proses bongkar-pasang panggung dan tenda.
      </p>

      <SectionHeading icon={UserX}>Non-Appearance: Ketika Artis Batal Datang</SectionHeading>
      <p>
        Salah satu risiko paling menakutkan bagi promotor adalah ketidakhadiran artis utama —
        <em> non-appearance</em>. Riset hukum terkait pembatalan konser internasional di Jakarta pernah
        menyoroti bahwa promotor memiliki kewajiban hukum penuh untuk memenuhi hak konsumen, termasuk
        hak atas informasi yang jelas dan hak pengembalian dana, ketika sebuah konser batal digelar.
        Dalam praktiknya, mekanisme refund dan kompensasi kerap menjadi titik lemah karena promotor
        sendiri sudah kehilangan biaya talent fee, sewa venue, dan promosi yang tidak bisa ditarik
        kembali.
      </p>
      <p>
        <strong>Non-appearance insurance</strong> dirancang khusus untuk mengisi celah ini. Polis akan
        mengganti kerugian finansial promotor — mulai dari talent fee yang sudah dibayar di muka, biaya
        produksi yang sudah dikeluarkan, hingga kewajiban refund tiket — ketika artis utama tidak bisa
        tampil karena sebab-sebab yang dijamin polis, seperti sakit mendadak, kecelakaan, atau keterlambatan
        perjalanan yang berada di luar kendali promotor. Untuk konser yang mendatangkan artis dari
        Malaysia atau Singapura, jaminan ini menjadi krusial karena ketergantungan pada jadwal penerbangan
        atau feri internasional menambah satu lapisan risiko keterlambatan yang tidak dimiliki artis
        lokal.
      </p>

      <SectionHeading icon={FileSearch}>Studi Kasus: Pelajaran dari Pembatalan Konser Besar</SectionHeading>
      <p>
        Kasus pembatalan konser internasional besar di Jakarta menjadi contoh nyata betapa kompleksnya
        konsekuensi hukum dan finansial ketika sebuah acara batal digelar. Penelitian hukum atas kasus
        tersebut menemukan bahwa meskipun regulasi perlindungan konsumen mewajibkan promotor memberikan
        hak refund dan kompensasi, implementasinya di lapangan masih menyisakan celah — terutama pada
        mekanisme pengembalian dana dan kompensasi kerugian non-tiket yang dialami penonton (misalnya
        biaya transportasi dan akomodasi yang sudah dikeluarkan).
      </p>
      <p>
        Pelajaran penting bagi promotor di Batam: kewajiban hukum terhadap penonton tetap ada terlepas
        dari apakah penyebab pembatalan berada di luar kendali promotor atau tidak. Memiliki event
        cancellation insurance dan non-appearance insurance tidak menghilangkan kewajiban hukum tersebut,
        tetapi memastikan promotor memiliki sumber dana yang jelas untuk memenuhinya tanpa harus
        menanggung kerugian dari kantong sendiri atau berisiko gagal bayar kepada penonton.
      </p>

      <SectionHeading icon={CloudRain}>Event Cancellation: Faktor Cuaca dan Perizinan</SectionHeading>
      <p>
        Untuk konser outdoor, cuaca tropis Batam yang kadang berubah drastis — hujan deras disertai angin
        kencang — adalah ancaman nyata terhadap kelangsungan acara. Event cancellation insurance akan
        mengganti biaya bersih (pengeluaran yang sudah terlanjur keluar, dikurangi pendapatan yang masih
        bisa diselamatkan) ketika acara terpaksa dibatalkan, ditunda, dipindahkan, atau dibatasi akibat
        peristiwa yang dijamin dalam polis. Penyebab yang umum dijamin meliputi:
      </p>
      <ul>
        <li>Cuaca ekstrem dan bencana alam (hujan badai, banjir, gempa bumi) yang membuat venue outdoor tidak layak digunakan.</li>
        <li>Kerusakan venue sebelum atau selama masa asuransi berlangsung sehingga acara tidak bisa diselenggarakan sesuai rencana.</li>
        <li>Pencabutan atau tidak terbitnya izin keramaian dari pihak kepolisian atau pemerintah kota secara mendadak.</li>
        <li>Ketidakhadiran figur kunci acara akibat kematian, kecelakaan, sakit, atau penundaan perjalanan.</li>
      </ul>
      <p>
        Penting dicatat, polis ini bersifat indemnity murni — ia mengganti kerugian riil yang bisa
        dibuktikan, bukan menanggung kerugian akibat tiket yang tidak laku terjual atau kebangkrutan
        usaha promotor itu sendiri.
      </p>

      <SectionHeading icon={AlertTriangle}>Menghitung Potensi Kerugian: Kenapa Nominalnya Bisa Sangat Besar</SectionHeading>
      <div className="not-prose my-6 grid sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl border border-[#e2e8f0] bg-white">
          <div className="flex items-center gap-2.5 mb-2">
            <Wrench className="w-[18px] h-[18px] text-[#a07830]" strokeWidth={2} />
            <p className="text-sm font-semibold text-[#0a1628] m-0">Kerusakan Peralatan</p>
          </div>
          <p className="text-sm text-[#475569] m-0">
            Panggung ambruk akibat angin dapat merusak peralatan senilai miliaran rupiah; kerusakan LED
            raksasa saja bisa mencapai ratusan juta rupiah untuk perbaikan atau penggantian.
          </p>
        </div>
        <div className="p-5 rounded-xl border border-[#e2e8f0] bg-white">
          <div className="flex items-center gap-2.5 mb-2">
            <Gavel className="w-[18px] h-[18px] text-[#a07830]" strokeWidth={2} />
            <p className="text-sm font-semibold text-[#0a1628] m-0">Tuntutan Hukum</p>
          </div>
          <p className="text-sm text-[#475569] m-0">
            Cedera penonton akibat desakan crowd atau barikade roboh bisa berujung tuntutan ganti rugi
            dalam jumlah besar dari keluarga korban.
          </p>
        </div>
        <div className="p-5 rounded-xl border border-[#e2e8f0] bg-white">
          <div className="flex items-center gap-2.5 mb-2">
            <Ticket className="w-[18px] h-[18px] text-[#a07830]" strokeWidth={2} />
            <p className="text-sm font-semibold text-[#0a1628] m-0">Refund Massal</p>
          </div>
          <p className="text-sm text-[#475569] m-0">
            Konser outdoor yang batal karena hujan deras mewajibkan refund seluruh tiket, sementara biaya
            promosi, DP vendor, dan sewa venue sudah terlanjur hangus.
          </p>
        </div>
        <div className="p-5 rounded-xl border border-[#e2e8f0] bg-white">
          <div className="flex items-center gap-2.5 mb-2">
            <Landmark className="w-[18px] h-[18px] text-[#a07830]" strokeWidth={2} />
            <p className="text-sm font-semibold text-[#0a1628] m-0">Kewajiban ke Vendor</p>
          </div>
          <p className="text-sm text-[#475569] m-0">
            Kontrak sewa panggung, sound system, dan katering biasanya tetap mengikat meski acara batal,
            sehingga EO tetap wajib membayar sebagian atau seluruh nilai kontrak.
          </p>
        </div>
      </div>

      <SectionHeading icon={Plane}>Konteks Batam: Konser Lintas Negara dan Ambisi Kota Musik</SectionHeading>
      <p>
        Pemerintah Kota Batam secara terbuka mendorong Batam menjadi &quot;Kota Musik dan MICE&quot;
        (Meeting, Incentive, Convention, Exhibition), sebagaimana disampaikan dalam pelantikan pengurus
        SOLMI Batam yang dirangkaikan dengan konser internasional Rock Friend&rsquo;z. Ambisi ini membuka
        peluang besar bagi promotor lokal, namun juga berarti semakin banyak acara berskala menengah-besar
        yang melibatkan artis dari Malaysia dan Singapura akan digelar di venue-venue seperti Sport Hall
        Temenggung Abdul Jamal, hotel-hotel besar di kawasan Harbour Bay, dan ruang-ruang MICE lainnya.
      </p>
      <p>
        Untuk acara lintas negara semacam ini, promotor perlu mempertimbangkan cakupan tambahan berupa
        keterlambatan perjalanan internasional (feri Batam–Singapura atau penerbangan dari Malaysia),
        selain jaminan standar liability dan cancellation. Kombinasi ini bisa dikonsultasikan langsung
        sesuai profil acara masing-masing promotor.
      </p>

      <SectionHeading icon={MapPin}>Siapa yang Perlu Memiliki Asuransi Ini?</SectionHeading>
      <ul>
        <li><strong>Promotor dan event organizer</strong> — pihak yang menanggung risiko finansial terbesar jika acara batal atau digugat.</li>
        <li><strong>Pengelola venue</strong> — GOR, hotel, atau ballroom yang menyewakan tempat sering mensyaratkan bukti asuransi liability dari penyewa acara.</li>
        <li><strong>Vendor produksi panggung</strong> — perusahaan sound system, lighting, dan rigging yang peralatannya berisiko rusak selama acara berlangsung.</li>
        <li><strong>Sponsor korporat</strong> — perusahaan yang menanamkan dana besar pada sebuah acara dan ingin memastikan risiko finansial terkelola dengan baik.</li>
      </ul>

      <SectionHeading icon={CreditCard}>Cakupan, Dokumen & Estimasi Premi</SectionHeading>
      <p>
        Rincian cakupan lengkap, dokumen yang dibutuhkan, dan gambaran premi untuk masing-masing skala
        acara dijelaskan di halaman produk kami agar tidak berulang di sini. Lihat{" "}
        <Link href="/asuransi-event/konser-musik" className="font-medium">
          Asuransi Konser Musik Batam
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
          <h3 className="font-display font-bold text-[#0a1628] m-0">Rencanakan Perlindungan Acara Anda</h3>
        </div>
        <p className="text-[#475569] mb-4">
          Konsultasikan kebutuhan asuransi konser dan acara Anda dengan Rio. Kami membantu promotor dan
          event organizer di Batam merancang skema perlindungan yang sesuai skala acara.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/asuransi-event/konser-musik" className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm">
            Lihat Cakupan & Ajukan
          </Link>
          <a href="https://wa.me/6281373336728?text=Halo%2C%20saya%20ingin%20konsultasi%20asuransi%20konser%20musik" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm">
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
              <li><Link href="/blog/asuransi-motorcross-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Event Motor Cross Batam & Kepri</Link></li>
              <li><Link href="/blog/asuransi-hole-in-one-golf-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Hole in One Turnamen Golf Batam</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Produk &amp; Layanan</p>
            <ul className="space-y-2">
              <li><Link href="/asuransi-event" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Event Batam (semua kategori)</Link></li>
              <li><Link href="/asuransi-event/konser-musik" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Konser Musik Batam (cakupan & harga)</Link></li>
              <li><Link href="/asuransi-liability" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Liability Batam</Link></li>
              <li><Link href="/asuransi-personal-accident" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Personal Accident (Kru & Talent)</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}

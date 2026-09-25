// app/blog/risiko-banjir-kendaraan-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import {
  Car,
  ShieldAlert,
  ShieldCheck,
  Zap,
  ClipboardList,
  Siren,
  MapPin,
  BadgeCheck,
  FileSearch,
  AlertTriangle,
  Wrench,
  PowerOff,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Banjir Batam dan Asuransi Kendaraan: Apakah Mobil Anda Terlindungi?",
  description:
    "Banjir 22 September 2026 menyeret mobil ke parit di Bengkong Indah, Batam. Pelajari kenapa asuransi All Risk belum tentu otomatis menanggung banjir, bahaya water hammer, dan langkah menyelamatkan kendaraan saat genangan naik.",
  canonical: "https://asuransibatam.com/blog/risiko-banjir-kendaraan-batam",
  languages: {
    id: "https://asuransibatam.com/blog/risiko-banjir-kendaraan-batam",
  },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Banjir Batam dan Asuransi Kendaraan: Apakah Mobil Anda Terlindungi?",
  description:
    "Analisis kejadian mobil hanyut saat banjir Bengkong Indah 22 September 2026 serta panduan lengkap perlindungan asuransi kendaraan terhadap risiko banjir di Batam.",
  datePublished: "2026-09-24",
  dateModified: "2026-09-24",
  author: { "@type": "Person", name: "Rio" },
  publisher: { "@type": "Organization", name: "Asuransi Batam" },
};

const faqItems = [
  {
    question: "Saya sudah punya asuransi All Risk, apakah otomatis aman dari banjir?",
    answer:
      "Belum tentu. Polis Standar Asuransi Kendaraan Bermotor Indonesia (PSAKBI) — dasar dari hampir semua polis All Risk maupun TLO di Indonesia — mengecualikan kerugian akibat banjir, genangan air, tanah longsor, dan bencana alam serupa dari jaminan dasar. Perlindungan terhadap banjir baru aktif jika Anda mengambil perluasan jaminan banjir secara terpisah, di luar paket All Risk standar.",
  },
  {
    question: "Apakah TLO (Total Loss Only) juga bisa ditambah perluasan banjir?",
    answer:
      "Bisa. Perluasan banjir, angin topan, dan tanah longsor tersedia baik untuk polis All Risk maupun TLO — bukan eksklusif untuk salah satu jenis polis. Yang membedakan hanya jenis kerugian yang ditanggung sesuai dasar polisnya: TLO baru membayar jika kerugian akibat banjir dinilai sebagai kerugian total, sedangkan All Risk bisa menanggung kerugian sebagian (partial loss) sekaligus.",
  },
  {
    question: "Mesin mobil saya mati saat menerjang genangan, apakah tetap bisa diklaim?",
    answer:
      "Ini kasus yang paling sering ditolak. Kerusakan mesin akibat water hammer — air masuk ke ruang bakar saat mobil menerjang genangan atau saat mesin dipaksa dinyalakan kembali setelah terendam — umumnya dianggap sebagai akibat kelalaian atau tindakan yang disengaja, sehingga dikecualikan meski polis Anda sudah punya perluasan banjir. Penanggung akan memeriksa kondisi fisik kendaraan untuk menilai apakah kerusakan terjadi karena nekat menerjang genangan.",
  },
  {
    question: "Berapa lama batas waktu melaporkan klaim kerusakan akibat banjir?",
    answer:
      "Sama seperti klaim kendaraan pada umumnya, sebagian besar polis mewajibkan pelaporan dalam 3–5 hari kerja sejak kejadian. Semakin lama ditunda, semakin besar risiko klaim dipersulit atau ditolak atas dasar keterlambatan pelaporan.",
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

function SubHeading({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <h3 className="flex items-center gap-2.5 not-prose font-display font-bold text-[#0a1628] text-lg mt-8 mb-3">
      <Icon className="w-[18px] h-[18px] text-[#a07830]" strokeWidth={2} />
      {children}
    </h3>
  );
}

function IconList({ items }: { items: { icon: React.ElementType; title?: string; text: React.ReactNode }[] }) {
  return (
    <ul className="not-prose grid sm:grid-cols-2 gap-3 my-5 list-none p-0">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <li key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#faf8f3] border border-[#eee3cc]">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white border border-[#e2e8f0] shrink-0 mt-0.5">
              <Icon className="w-[14px] h-[14px] text-[#1a4fa0]" strokeWidth={2} />
            </span>
            <span className="text-sm text-[#374151] leading-relaxed">
              {item.title && <span className="font-semibold text-[#0a1628] block">{item.title}</span>}
              {item.text}
            </span>
          </li>
        );
      })}
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

export default function ArticleBanjirBatam2026AsuransiKendaraanPage() {
  return (
    <ArticleLayout
      title="Banjir Batam dan Asuransi Kendaraan: Apakah Mobil Anda Terlindungi?"
      description="Video mobil yang terseret arus ke parit di Bengkong Indah sempat ramai dibicarakan warga Batam. Di balik kejadian itu, ada satu hal yang jarang disadari pemilik kendaraan: All Risk tidak selalu berarti bebas risiko banjir."
      date="24 September 2026"
      category="Kendaraan"
      readTime="10 menit baca"
      breadcrumbs={[{ label: "Banjir Batam & Asuransi Kendaraan", href: "/blog/risiko-banjir-kendaraan-batam" }]}
      schema={schema}
      faqSchema={faqSchema}
    >
      <p>
        Selasa, 22 September 2026, hujan deras yang mengguyur Batam selama sekitar dua jam memicu
        banjir kilat di beberapa kawasan, salah satunya Bengkong Indah. Di titik ini, arus air yang
        deras sempat menyeret satu unit mobil ke dalam parit di depan permukiman warga — kejadian
        yang sempat direkam dan menyebar di kalangan warga sekitar. Beruntung tidak ada korban jiwa.
        Namun insiden ini menjadi pengingat penting bagi pemilik kendaraan di Batam: memiliki{" "}
        <Link href="/asuransi-kendaraan" className="font-medium">
          asuransi mobil
        </Link>{" "}
        saja tidak otomatis berarti kendaraan Anda terlindungi dari kerusakan akibat banjir.
      </p>

      <SectionHeading icon={ShieldAlert}>
        Fakta yang Mengejutkan: All Risk Tidak Otomatis Menanggung Banjir
      </SectionHeading>
      <p>
        Banyak pemilik kendaraan mengira polis All Risk (Comprehensive) berarti "semua risiko
        ditanggung". Kenyataannya, Polis Standar Asuransi Kendaraan Bermotor Indonesia (PSAKBI) —
        format dasar yang menjadi acuan hampir seluruh perusahaan asuransi kendaraan di Indonesia —
        secara eksplisit mengecualikan kerugian yang disebabkan oleh gempa bumi, letusan gunung
        berapi, angin topan, badai, tsunami, hujan es, banjir, genangan air, tanah longsor, atau
        gejala geologi dan meteorologi lainnya dari jaminan dasar. Ini berlaku baik untuk polis All
        Risk maupun TLO —{" "}
        <Link href="/blog/perbedaan-all-risk-dan-tlo" className="font-medium">
          keduanya punya batasan dasar yang sama untuk risiko bencana alam
        </Link>
        .
      </p>
      <p>
        Artinya, jika mobil Anda terendam banjir seperti yang terjadi di Bengkong Indah pada 22
        September 2026, dan polis Anda hanya memegang paket All Risk standar tanpa tambahan apa
        pun, secara teknis kerugian tersebut tidak masuk jaminan polis. Perlindungan terhadap banjir
        baru berlaku jika Anda secara khusus mengambil perluasan jaminan banjir, angin topan, dan
        tanah longsor — sering disebut perluasan bencana alam — dengan tambahan premi di luar premi
        dasar All Risk atau TLO.
      </p>

      <SubHeading icon={Car}>Perluasan Berlaku untuk All Risk Maupun TLO</SubHeading>
      <p>
        Kabar baiknya, perluasan banjir ini tersedia untuk kedua jenis polis. Perbedaannya terletak
        pada dasar cakupannya: pada polis TLO, klaim banjir baru dibayarkan jika kerugian dinilai
        sebagai kerugian total (umumnya di atas 75 persen dari nilai kendaraan). Pada polis All
        Risk, kerugian sebagian akibat banjir — misalnya sistem kelistrikan atau interior yang rusak
        tanpa kerusakan total — juga bisa diklaim. Menambahkan perluasan ini saat memperpanjang atau
        membeli polis baru jauh lebih murah dibanding menanggung sendiri biaya perbaikan mesin atau
        kelistrikan yang rusak akibat banjir.
      </p>

      <SectionHeading icon={Zap}>Water Hammer: Kerusakan yang Tetap Tidak Ditanggung</SectionHeading>
      <p>
        Ada satu jenis kerusakan yang perlu benar-benar dipahami pemilik kendaraan, karena tetap
        tidak ditanggung meski polis Anda sudah memiliki perluasan banjir lengkap:{" "}
        <strong>water hammer</strong>. Kondisi ini terjadi ketika air masuk ke ruang bakar mesin
        melalui saluran intake udara — biasanya karena mobil nekat menerjang genangan yang terlalu
        tinggi, atau karena mesin dipaksa dinyalakan kembali setelah kendaraan sempat terendam.
        Akibatnya bisa fatal secara mekanis: setang piston bengkok, ring piston rusak, dinding
        silinder tergores, hingga head silinder melengkung — kerusakan yang biaya perbaikannya bisa
        jauh melebihi ekspektasi.
      </p>
      <p>
        PSAKBI secara tegas mengecualikan kerugian akibat kendaraan yang tetap dikemudikan secara
        paksa meski kondisi teknisnya sudah tidak laik jalan. Karena itu, saat terjadi klaim water
        hammer, penanggung akan memeriksa kondisi fisik kendaraan untuk menilai apakah kerusakan
        terjadi karena kesengajaan menerjang genangan — dan jika terbukti demikian, klaim akan
        ditolak, terlepas dari perluasan banjir yang Anda miliki.
      </p>

      <SectionHeading icon={Siren}>Langkah Menyelamatkan Kendaraan Saat Genangan Naik</SectionHeading>
      <IconList
        items={[
          {
            icon: PowerOff,
            title: "Segera matikan mesin",
            text: "Begitu air mulai masuk ke ruang mesin atau kabin, matikan mesin sesegera mungkin untuk mencegah air terhisap ke ruang bakar.",
          },
          {
            icon: AlertTriangle,
            title: "Jangan coba menyalakan ulang mesin",
            text: "Menyalakan mesin saat atau segera setelah kendaraan terendam adalah penyebab utama water hammer — tunda sampai ada pemeriksaan profesional.",
          },
          {
            icon: Wrench,
            title: "Cabut kabel aki bila aman dilakukan",
            text: "Langkah ini membantu mencegah korsleting pada sistem kelistrikan selama kendaraan masih terendam atau basah.",
          },
          {
            icon: MapPin,
            title: "Pindahkan kendaraan ke tempat lebih tinggi lebih awal",
            text: "Begitu hujan deras mulai turun di kawasan langganan banjir seperti Bengkong atau Batu Aji, jangan tunggu air naik untuk memindahkan kendaraan.",
          },
        ]}
      />

      <SectionHeading icon={ClipboardList}>Prosedur Klaim Jika Kendaraan Terlanjur Terendam</SectionHeading>
      <Steps
        items={[
          {
            title: "Jangan starter mesin sebelum diperiksa bengkel",
            desc: "Meski tergoda untuk mengecek apakah mesin masih hidup, menahan diri di sini bisa menyelamatkan Anda dari klaim water hammer yang ditolak.",
          },
          {
            title: "Dokumentasikan kondisi kendaraan secara menyeluruh",
            desc: "Foto dan video ketinggian air yang merendam kendaraan, kondisi interior, dan lokasi kejadian sebelum kendaraan dipindahkan atau diderek.",
          },
          {
            title: "Hubungi penanggung atau agen asuransi dalam 3–5 hari kerja",
            desc: "Laporkan kejadian secepatnya sesuai tenggat waktu yang tercantum dalam polis Anda untuk menghindari penolakan atas dasar keterlambatan.",
          },
          {
            title: "Derek kendaraan ke bengkel rekanan, bukan bengkel sembarangan",
            desc: "Pemeriksaan awal oleh bengkel rekanan penanggung membantu memastikan penilaian kerusakan sesuai standar klaim.",
          },
          {
            title: "Tunggu hasil survei sebelum memulai perbaikan",
            desc: "Perbaikan yang dilakukan sebelum persetujuan tertulis penanggung berisiko dianggap mengubah bukti kerugian dan mempersulit proses klaim.",
          },
        ]}
      />

      <SectionHeading icon={MapPin}>Kawasan yang Perlu Diwaspadai Pengendara di Batam</SectionHeading>
      <p>
        Berdasarkan kejadian 22 September 2026, Bengkong Aljabar, Bengkong Harapan, Bengkong
        Swadebi, Bengkong Indah, dan Batu Aji tercatat sebagai kawasan yang paling terdampak, dengan
        genangan mencapai 70–100 sentimeter di beberapa ruas. Namun mengingat BMKG memperkirakan
        potensi hujan di Batam masih berlangsung tiga hingga lima hari ke depan, dan sebagian besar
        aktivitas alih fungsi lahan di kota ini berlangsung tanpa izin resmi sehingga mengurangi
        kawasan resapan air, pengendara sebaiknya tidak hanya waspada di titik-titik yang sudah
        dikenal rawan, tetapi juga di ruas jalan rendah mana pun yang belum pernah tergenang
        sebelumnya.
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
          <ShieldCheck className="w-5 h-5 text-[#c9a84c]" strokeWidth={2} />
          <h3 className="font-display font-bold text-[#0a1628] m-0">
            Pastikan Kendaraan Anda Punya Perluasan Banjir Sebelum Musim Hujan Berikutnya
          </h3>
        </div>
        <p className="text-[#475569] mb-4">
          Rio siap membantu memeriksa apakah polis kendaraan Anda sudah mencakup perluasan banjir,
          angin topan, dan tanah longsor, atau membantu menambahkannya sebelum hujan berikutnya
          turun di Batam. Konsultasi tidak dipungut biaya tambahan di luar premi polis.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/asuransi-kendaraan/asuransi-mobil-batam"
            className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm"
          >
            Lihat Produk Asuransi Mobil
          </Link>
          <Link
            href="/kontak"
            className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm"
          >
            Konsultasi Gratis
          </Link>
        </div>
      </div>

      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Halaman Terkait</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Produk &amp; Layanan</p>
            <ul className="space-y-2">
              <li><a href="/asuransi-kendaraan/asuransi-mobil-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Mobil Batam</a></li>
              <li><a href="/asuransi-kendaraan" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Kendaraan Batam</a></li>
              <li><a href="/kalkulator-premi-mobil" className="text-sm text-blue-700 hover:underline font-medium">→ Kalkulator Estimasi Premi Mobil</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait</p>
            <ul className="space-y-2">
              <li><a href="/blog/risiko-banjir-properti-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Banjir Batam & Asuransi Properti</a></li>
              <li><a href="/blog/cara-klaim-asuransi-mobil-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Cara Klaim Asuransi Mobil Batam</a></li>
              <li><a href="/blog/perbedaan-all-risk-dan-tlo" className="text-sm text-blue-700 hover:underline font-medium">→ Perbedaan All Risk dan TLO</a></li>
            </ul>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}

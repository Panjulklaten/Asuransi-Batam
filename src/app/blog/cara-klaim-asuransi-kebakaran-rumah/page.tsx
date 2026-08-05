// app/blog/cara-klaim-asuransi-kebakaran-rumah/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import {
  ShieldCheck,
  Flame,
  Zap,
  AlertTriangle,
  PlaneTakeoff,
  Wind,
  Camera,
  FileWarning,
  PhoneCall,
  ClipboardList,
  Search,
  Scale,
  Clock,
  Trash2,
  TrendingDown,
  MessageSquareWarning,
  Timer,
  FileSearch,
  BadgeCheck,
  Home,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Prosedur Klaim Asuransi Kebakaran Rumah – Dokumen, Tahapan & Penyebab Klaim Ditolak",
  description: "Proses klaim kebakaran rumah menyimpan sejumlah jebakan yang jarang disadari pemilik rumah. Ketahui dokumen wajib, tahapan dari survei hingga pencairan dana, dan kesalahan paling umum yang membuat klaim gagal cair — panduan bagi pemilik rumah di Batam.",
  canonical: "https://asuransibatam.com/blog/cara-klaim-asuransi-kebakaran-rumah",
  languages: {
      id: "https://asuransibatam.com/blog/cara-klaim-asuransi-kebakaran-rumah",
      en: "https://asuransibatam.com/en/blog/how-to-claim-home-fire-insurance",
    },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Prosedur Klaim Asuransi Kebakaran Rumah: Dokumen, Tahapan & Penyebab Klaim Ditolak",
  datePublished: "2026-05-06",
  dateModified: "2026-08-04",
  author: { "@type": "Person", name: "Rio" },
  publisher: { "@type": "Organization", name: "Asuransi Batam" },
};

// FAQPage JSON-LD — sumber tunggal untuk schema & accordion FAQ visual di bawah.
const faqItems = [
  {
    question: "Kalau kerusakan cuma dari asap, tanpa rumah ikut terbakar, apakah tetap ditanggung?",
    answer:
      "Tetap ditanggung. Asap termasuk risiko dasar dalam format FLEXAS yang dipakai hampir semua polis properti di Indonesia. Syaratnya, asap tersebut harus berasal dari kejadian kebakaran yang memang dijamin polis — kerusakan pada furnitur, dinding, atau barang lain akibat asap tetap bisa diklaim.",
  },
  {
    question: "Perbaikan rumah wajib pakai kontraktor rekanan asuransi, benar begitu?",
    answer:
      "Tidak selalu. Anda tetap punya kebebasan menunjuk kontraktor pilihan sendiri, asalkan nilai perbaikan yang diajukan sejalan dengan hasil penilaian Loss Adjuster. Sebagian penanggung memang menyediakan daftar kontraktor rekanan, tapi sifatnya opsi tambahan, bukan keharusan.",
  },
  {
    question: "Sudah mengikuti semua prosedur tapi klaim tetap ditolak, apa yang bisa dilakukan?",
    answer:
      "Ajukan keberatan tertulis ke penanggung, lengkapi dengan bukti pendukung tambahan yang belum sempat disertakan sebelumnya. Bila tidak tercapai kesepakatan, jalur mediasi melalui OJK atau Badan Mediasi Asuransi Indonesia (BMAI) tersedia sebagai opsi sebelum menempuh jalur hukum.",
  },
  {
    question: "Elektronik dan perabot rumah ikut ditanggung, atau hanya bangunannya saja?",
    answer:
      "Tergantung struktur polis yang dipilih. Polis standar umumnya hanya menjamin bangunan, sementara isi rumah — elektronik, furnitur, dan barang pribadi — baru tercakup jika Anda mengambil perluasan household contents secara terpisah. Cek kembali ringkasan polis untuk memastikan keduanya sudah termasuk.",
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

// --- Helper presentational components (lokal, konsisten dengan artikel sebelumnya) ---

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

export default function ArticleCaraKlaimAsuransiKebakaranRumahPage() {
  return (
    <ArticleLayout
      title="Prosedur Klaim Asuransi Kebakaran Rumah: Dokumen, Tahapan & Penyebab Klaim Ditolak"
      description="Api sudah padam, rumah sudah rusak, polis masih aktif — tapi klaim tetap bisa ditolak. Ini terjadi lebih sering dari yang dibayangkan kebanyakan orang. Berikut panduan lengkap agar klaim Anda diproses tanpa hambatan."
      date="6 Mei 2026"
      category="Properti"
      readTime="10 menit baca"
      breadcrumbs={[{ label: "Cara Klaim Asuransi Kebakaran Rumah", href: "/blog/cara-klaim-asuransi-kebakaran-rumah" }]}
      schema={schema}
      faqSchema={faqSchema}
    >
      <p>
        Kebakaran rumah adalah skenario yang tidak pernah ingin dialami siapa pun. Namun justru
        pada momen itulah kualitas{" "}
        <Link href="/asuransi-properti" className="font-medium">
          asuransi properti
        </Link>{" "}
        yang selama ini preminya rutin dibayar benar-benar diuji. Tidak sedikit pemilik rumah di
        Batam yang akhirnya kecewa — bukan karena penanggung bertindak curang, melainkan karena
        prosedur klaim tidak dijalankan dengan tepat sejak menit-menit pertama pascakejadian.
        Panduan berikut merinci apa yang sebaiknya dilakukan, dan apa yang sebaiknya dihindari,
        agar proses klaim asuransi kebakaran rumah Anda berjalan lancar sampai dana cair.
      </p>
      <p>
        Fokus pembahasan di sini adalah rumah tinggal, tapi alur klaimnya pada dasarnya berlaku
        juga untuk properti komersial seperti{" "}
        <Link href="/asuransi-properti/asuransi-ruko-batam" className="font-medium">
          ruko
        </Link>{" "}
        maupun{" "}
        <Link href="/asuransi-properti/asuransi-apartemen-batam" className="font-medium">
          apartemen
        </Link>{" "}
        — bedanya umumnya hanya pada dokumen kepemilikan dan pihak yang dilibatkan saat survei.
      </p>

      <SectionHeading icon={ShieldCheck}>
        Sebelum Bicara Prosedur: Kenali Dulu Apa yang Sebenarnya Ditanggung
      </SectionHeading>
      <p>
        Tidak semua kerugian akibat kebakaran otomatis dijamin polis. Standar polis properti di
        Indonesia mengacu pada format <strong>FLEXAS</strong>:
      </p>
      <IconList
        items={[
          { icon: Flame, title: "Fire", text: "Kebakaran itu sendiri — penyebab paling umum di balik klaim polis properti" },
          { icon: Zap, title: "Lightning", text: "Sambaran petir yang berdampak langsung pada bangunan" },
          { icon: AlertTriangle, title: "Explosion", text: "Ledakan, baik yang bersumber dari dalam maupun luar bangunan" },
          { icon: PlaneTakeoff, title: "Aircraft impact", text: "Kejatuhan pesawat udara atau bagian dari pesawat" },
          { icon: Wind, title: "Smoke damage", text: "Kerusakan yang ditimbulkan asap dari peristiwa kebakaran" },
        ]}
      />
      <p>
        Risiko tambahan seperti banjir, badai, huru-hara, atau gempa bumi hanya dijamin apabila
        secara eksplisit dicantumkan sebagai perluasan pada polis Anda. Sebelum mengajukan klaim,
        buka kembali ringkasan pertanggungan untuk memastikan penyebab kerusakan yang dialami
        memang termasuk dalam yang sudah disepakati.
      </p>

      <SectionHeading icon={Timer}>Momen Kritis: yang Perlu Dilakukan dalam 24 Jam Pertama</SectionHeading>
      <p>
        Jam-jam awal pascakebakaran menentukan lancar-tidaknya proses klaim ke depan. Panik
        adalah reaksi yang sangat wajar, tapi ada beberapa tindakan pada fase ini yang sebaiknya
        tidak sampai terlewat.
      </p>

      <SubHeading icon={Camera}>1. Keselamatan Dulu, Dokumentasi Menyusul</SubHeading>
      <p>
        Pastikan seluruh penghuni dalam kondisi aman dan api benar-benar padam sebelum mendekat
        ke area yang terdampak. Begitu situasi aman, mulailah mendokumentasikan kondisi kerusakan
        selengkap mungkin:
      </p>
      <IconList
        items={[
          { icon: Camera, text: "Rekam foto dan video bangunan dari berbagai sisi — tampak depan, samping, belakang" },
          { icon: Home, text: "Ambil gambar setiap ruangan yang terkena dampak dari dalam" },
          { icon: FileWarning, text: "Foto barang yang rusak atau hangus — dokumen, furnitur, peralatan elektronik" },
          { icon: Flame, text: "Jika titik awal api masih terlihat, dokumentasikan secara khusus" },
          { icon: ClipboardList, text: "Rekam kondisi apa adanya sebelum ada yang dipindahkan atau dibersihkan" },
        ]}
      />
      <p>
        Dokumentasi inilah yang nantinya menjadi rujukan utama surveyor saat menilai klaim.
        Semakin rinci catatan visual yang Anda simpan, semakin cepat proses verifikasi berjalan.
      </p>

      <SubHeading icon={FileWarning}>2. Segera Buat Laporan ke Damkar atau Kepolisian</SubHeading>
      <p>
        Surat keterangan dari Dinas Pemadam Kebakaran menjadi dokumen yang hampir selalu diminta
        dalam klaim kebakaran. Isinya mencakup tanggal kejadian, dugaan penyebab, serta gambaran
        awal tingkat kerusakan. Warga Batam bisa mengurusnya melalui kantor Damkar terdekat di
        kecamatan masing-masing.
      </p>
      <p>
        Untuk kasus dengan kerugian besar, dampak ke properti tetangga, atau indikasi unsur
        kesengajaan, laporan ke kepolisian juga menjadi keharusan. Simpan Surat Tanda Penerimaan
        Laporan (STPL) sebagai arsip resmi.
      </p>

      <SubHeading icon={PhoneCall}>3. Segera Hubungi Agen atau Penanggung Anda</SubHeading>
      <p>
        Jangan tunda pelaporan sampai keadaan tenang atau Anda merasa "siap". Batas waktu resmi
        pelaporan adalah <strong>3×24 jam</strong> sejak kejadian diketahui — ketentuan ini
        berlaku di hampir seluruh polis properti yang beredar. Melewati tenggat ini bisa dipakai
        sebagai dasar penolakan teknis, sekalipun kerusakannya jelas termasuk yang dijamin.
      </p>
      <p>
        Ceritakan kronologi apa adanya. Hindari menambah-nambahi detail atau menyembunyikan fakta
        yang relevan, sebab konsistensi antara laporan awal Anda dan temuan surveyor akan
        diperiksa secara ketat sepanjang proses verifikasi berlangsung.
      </p>

      <SectionHeading icon={ClipboardList}>Berkas yang Wajib Disiapkan Sebelum Mengajukan Klaim</SectionHeading>
      <p>
        Pengajuan klaim resmi baru bisa diproses setelah seluruh dokumen berikut lengkap di
        tangan penanggung. Menyiapkannya sejak awal akan menghindarkan Anda dari bolak-balik yang
        memperlambat pencairan:
      </p>

      <div className="overflow-x-auto my-6 rounded-2xl border border-[#e2e8f0]">
        <table className="w-full text-sm">
          <thead className="bg-[#0a1628] text-white">
            <tr>
              <th className="text-left p-4">Dokumen</th>
              <th className="p-4 text-left">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Formulir pengajuan klaim", "Diisi lengkap dan ditandatangani pemegang polis; formulirnya bisa diminta ke agen atau langsung ke penanggung"],
              ["Salinan polis (atau yang asli)", "Termasuk halaman ringkasan pertanggungan dan klausul perluasan yang relevan dengan kejadian"],
              ["Surat keterangan Damkar", "Mencantumkan tanggal, lokasi, dugaan penyebab, dan skala kebakaran"],
              ["Laporan kepolisian (bila relevan)", "Diperlukan untuk kerugian besar atau bila ada indikasi kesengajaan"],
              ["KTP pemegang polis", "Sebagai bukti identitas pihak yang mengajukan klaim"],
              ["Dokumentasi visual kerusakan", "Foto dan video menyeluruh kondisi bangunan serta isi rumah pascakebakaran"],
              ["Daftar barang yang rusak/hilang", "Sertakan estimasi nilai tiap barang; semakin detail semakin membantu proses penilaian"],
              ["Bukti kepemilikan properti", "SHM/SHGB, atau perjanjian sewa apabila Anda bukan pemilik langsung"],
              ["Bukti pembelian barang bernilai besar", "Nota atau invoice untuk elektronik, furnitur, atau perabot dengan harga tinggi"],
            ].map(([a, b], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="p-4 font-medium text-[#0a1628]">{a}</td>
                <td className="p-4 text-[#475569]">{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionHeading icon={Search}>Sesudah Berkas Diserahkan, Apa Selanjutnya?</SectionHeading>

      <SubHeading icon={Search}>Survei dari Loss Adjuster</SubHeading>
      <p>
        Untuk klaim kebakaran dengan nilai kerugian signifikan (umumnya di atas Rp 50 juta),
        penanggung akan menugaskan <em>Loss Adjuster</em> independen — pihak di luar perusahaan
        asuransi — untuk menilai kerugian secara objektif. Petugas ini akan datang langsung ke
        lokasi, memeriksa kondisi bangunan, membandingkan dokumentasi Anda dengan temuan di
        lapangan, lalu menyusun laporan penilaian yang menjadi dasar pembayaran klaim.
      </p>
      <p>
        Selama tahap ini berlangsung, <strong>tunda dulu segala bentuk perbaikan</strong> sampai
        survei rampung dan ada persetujuan tertulis dari penanggung. Memperbaiki bangunan sebelum
        survei selesai dianggap mengubah kondisi bukti, dan berisiko membuat klaim ditolak atau
        nilai pembayarannya dipangkas.
      </p>

      <SubHeading icon={Scale}>Tahap Negosiasi Nilai Klaim</SubHeading>
      <p>
        Bila muncul selisih antara nilai kerugian yang Anda ajukan dengan hasil penilaian Loss
        Adjuster, di sinilah negosiasi berlangsung. Anda berhak menyampaikan keberatan disertai
        bukti tambahan — nota pembelian, foto kondisi sebelum kebakaran, atau opini kontraktor
        soal estimasi biaya perbaikan. Proses negosiasi ini wajar terjadi dan bukan pertanda ada
        masalah dengan klaim Anda.
      </p>

      <SectionHeading icon={AlertTriangle}>Kesalahan yang Paling Sering Membuat Klaim Ditolak</SectionHeading>
      <IconList
        items={[
          {
            icon: Clock,
            title: "Melapor terlalu lambat",
            text: "Banyak pemilik rumah menunggu keadaan reda dulu sebelum menghubungi penanggung. Lewat dari tiga hari, peluang penolakan atas dasar teknis meningkat tajam.",
          },
          {
            icon: Trash2,
            title: "Membersihkan lokasi sebelum disurvei",
            text: "Keinginan segera merapikan puing memang manusiawi, tapi ini justru salah satu pemicu terbesar komplikasi klaim. Tahan dulu sampai ada izin tertulis.",
          },
          {
            icon: TrendingDown,
            title: "Nilai pertanggungan lebih rendah dari nilai riil",
            text: "Rumah senilai Rp 800 juta yang hanya diasuransikan Rp 400 juta berarti klaim yang disetujui pun proporsional — hanya sekitar separuh dari kerugian sebenarnya, sesuai prinsip underinsurance.",
          },
          {
            icon: Flame,
            title: "Penyebab kebakaran termasuk yang dikecualikan polis",
            text: "Korsleting listrik umumnya dijamin, tapi penyebab yang secara eksplisit dikecualikan — misalnya penyimpanan bahan mudah terbakar dalam jumlah berlebih — bisa jadi dasar penolakan.",
          },
          {
            icon: MessageSquareWarning,
            title: "Cerita yang tidak konsisten",
            text: "Menyebut api berasal dari dapur ke petugas pemadam, lalu menyebut garasi ke surveyor, adalah jenis inkonsistensi yang langsung ditandai sebagai catatan merah saat verifikasi.",
          },
        ]}
      />

      <SectionHeading icon={Timer}>Berapa Lama Biasanya Proses Klaim Berlangsung?</SectionHeading>
      <p>Lama prosesnya bervariasi, tergantung besar kerusakan dan kelengkapan dokumen sejak awal. Sebagai gambaran umum:</p>
      <Steps
        items={[
          { title: "Klaim nilai kecil (di bawah Rp 50 juta)", desc: "Biasanya selesai 7–14 hari kerja sejak dokumen lengkap diterima penanggung." },
          { title: "Klaim nilai menengah (Rp 50 juta – Rp 500 juta)", desc: "Berkisar 14–30 hari kerja, tergantung jadwal kunjungan Loss Adjuster." },
          { title: "Klaim nilai besar (di atas Rp 500 juta)", desc: "Bisa mencapai 30–60 hari kerja atau lebih, karena tahap negosiasi yang biasanya lebih panjang." },
        ]}
      />
      <p>
        Kelengkapan dokumen sejak pengajuan pertama adalah faktor paling menentukan cepat-
        lambatnya proses. Setiap kali penanggung meminta dokumen tambahan, total waktu
        pemrosesan bisa molor 5–10 hari kerja. Jika Anda belum punya polis dan ingin memastikan
        proses klaim di masa depan tidak berbelit, mulailah dengan memilih{" "}
        <Link href="/asuransi-properti/asuransi-rumah-batam" className="font-medium">
          asuransi rumah
        </Link>{" "}
        dengan nilai pertanggungan yang sesuai sejak awal.
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
            Butuh Pendampingan Klaim atau Konsultasi Asuransi Properti di Batam?
          </h3>
        </div>
        <p className="text-[#475569] mb-4">
          Rio siap mendampingi proses klaim asuransi properti Anda dari tahap awal sampai
          pencairan — mulai dari menyiapkan dokumen, mengoordinasikan jadwal dengan Loss
          Adjuster, hingga membantu negosiasi bila terjadi selisih penilaian. Konsultasi tidak
          dipungut biaya tambahan di luar premi polis yang sudah Anda bayar.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/asuransi-properti/asuransi-rumah-batam"
            className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm"
          >
            Lihat Produk Asuransi Rumah
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
              <li><a href="/asuransi-properti/asuransi-gudang-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Gudang Batam</a></li>
              <li><a href="/asuransi-properti/asuransi-hotel-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Hotel Batam</a></li>
              <li><a href="/asuransi-properti/asuransi-pabrik-kawasan-industri-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Pabrik & Kawasan Industri Batam</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait</p>
            <ul className="space-y-2">
              <li><a href="/blog/asuransi-properti-komersial-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Properti Komersial Batam</a></li>
              <li><a href="/blog/asuransi-gudang-kawasan-industri-muka-kuning-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Gudang Kawasan Industri Batam</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}

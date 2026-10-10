// app/asuransi-engineering/cecr/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { generateSEO, schemaFAQ, schemaBreadcrumb, schemaInsuranceProduct } from "@/lib/seo";
import { Breadcrumb, SectionHeader } from "@/components/ui/index";
import QuoteButton from "@/components/quote/QuoteButton";
import QuoteCard from "@/components/quote/QuoteCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

// ─── Data Halaman ──────────────────────────────────────────────
const PAGE_URL = "/asuransi-engineering/cecr";

const FAQS_CECR = [
  {
    q: "Apa itu asuransi CECR dan kapan polis ini mulai berlaku?",
    a: "CECR (Civil Engineering Completed Risk) adalah polis yang menjamin struktur hasil pekerjaan teknik sipil — dermaga, talud/revetment, jalan, jembatan, saluran irigasi — setelah masa konstruksinya selesai dan Berita Acara Serah Terima (BAST) diterbitkan. Begitu BAST ditandatangani, risiko bergeser dari 'risiko proyek' yang dijamin CAR/EAR menjadi 'risiko operasional', dan di titik inilah polis CECR mengambil alih.",
  },
  {
    q: "Apa beda CECR dengan Contractor's All Risk (CAR)?",
    a: "CAR menjamin selama masa pembangunan berlangsung — saat alat berat, material, dan pekerja masih bekerja di lokasi. CECR menjamin setelah bangunan selesai dan sudah dioperasikan. Untuk proyek talud atau dermaga, kami biasa menyarankan CAR berjalan dulu sampai BAST, lalu disambung langsung dengan CECR agar tidak ada celah waktu tanpa perlindungan (gap of cover).",
  },
  {
    q: "Apakah CECR mengikuti tarif premi yang ditetapkan OJK?",
    a: "Tidak. Berbeda dengan PAR (Property All Risk) yang tunduk pada tarif OJK, CECR tidak diatur tarifnya secara baku sehingga rate ditentukan bebas oleh underwriter berdasarkan profil risiko proyek — termasuk reputasi kontraktor, riwayat klaim, dan kondisi lapangan saat survei.",
  },
  {
    q: "Risiko apa saja yang dijamin dalam polis CECR untuk pekerjaan talud atau revetment?",
    a: "Polis CECR menjamin kerusakan fisik akibat risiko desain struktur dan risiko operasional, seperti longsor atau ambruknya pasangan batu akibat erosi/scouring, pergeseran tanah, benturan kapal atau alat berat, serta cuaca ekstrem. Pengecualian umum tetap berlaku, misalnya keausan wajar (wear and tear) dan kesalahan pemeliharaan yang terus-menerus diabaikan.",
  },
  {
    q: "Bagaimana premi CECR dihitung untuk proyek di Batam?",
    a: "Premi dihitung dari Total Sum Insured (nilai pertanggungan bangunan), jenis dan lokasi struktur, usia bangunan, hasil survei lapangan, serta riwayat klaim 3–5 tahun terakhir. Proyek di kawasan pelabuhan seperti Batu Ampar umumnya punya eksposur tambahan dari aktivitas bongkar muat dan lalu lintas kapal yang ikut diperhitungkan underwriter.",
  },
  {
    q: "Apakah hasil survei lapangan menentukan diterima atau ditolaknya pengajuan CECR?",
    a: "Ya, survei adalah tahap krusial. Underwriter menilai parameter desain terhadap risiko alam, kondisi pemeliharaan, dan penggunaan aktual struktur. Survei yang terdokumentasi baik — termasuk foto kondisi pasangan batu, kemiringan talud, dan titik rawan — mempercepat proses akseptasi dan membantu menetapkan rate yang lebih akurat.",
  },
];

const metadata_url = `${PAGE_URL}`;

export const metadata: Metadata = generateSEO({
  title: "Asuransi CECR Batam – Civil Engineering Completed Risk untuk Talud, Dermaga & Infrastruktur Sipil",
  description:
    "Konsultasi asuransi CECR (Civil Engineering Completed Risk) di Batam untuk talud, revetment, dermaga, dan infrastruktur sipil pasca-konstruksi. Simulasi premi, survei lapangan, dan klaim dibantu langsung oleh Rio, praktisi asuransi berpengalaman 8+ tahun.",
  canonical: metadata_url,
  languages: {
    id: "https://asuransibatam.com/asuransi-engineering/cecr",
    en: "https://asuransibatam.com/en/engineering-insurance/cecr",
  },
});

const jsonLdFAQ = schemaFAQ(FAQS_CECR);
const jsonLdBreadcrumb = schemaBreadcrumb([
  { name: "Home", url: "/" },
  { name: "Asuransi Engineering", url: "/asuransi-engineering" },
  { name: "Asuransi CECR", url: PAGE_URL },
]);
const jsonLdService = schemaInsuranceProduct({
  name: "Asuransi CECR (Civil Engineering Completed Risk) Batam",
  description: "Asuransi untuk talud, revetment, dermaga, dan infrastruktur sipil pasca-konstruksi di Batam.",
  url: PAGE_URL,
  category: "Asuransi Engineering",
});

export default function CECRPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section
        className="pt-32 pb-16 px-4"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #132040 60%, #1e3a6e 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
            style={{ background: "#c9a84c20", color: "#f0d080" }}
          >
            Asuransi Engineering
          </span>
          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Asuransi CECR Batam — Lindungi Infrastruktur Sipil Setelah Proyek Selesai
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Civil Engineering Completed Risk (CECR) menjamin talud, revetment,
            dermaga, jalan, dan struktur sipil lain begitu masa konstruksi
            berakhir — saat tanggung jawab risiko beralih dari kontraktor ke
            pemilik aset/operasional.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <QuoteButton cluster="engineering" lang="id" variant="gold" className="!rounded-xl !px-8 !py-3.5" />
            <Link
              href="/asuransi-engineering/contractor-all-risk"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold text-white border border-white/30 rounded-xl hover:border-yellow-400 hover:text-yellow-400 transition-all"
            >
              Lihat Asuransi CAR
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <div className="pt-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Asuransi Engineering", href: "/asuransi-engineering" },
              { label: "Asuransi CECR" },
            ]}
          />
        </div>

        {/* ─── PENGANTAR: APA ITU CECR ─────────────────────── */}
        <section className="section-padding">
          <SectionHeader
            eyebrow="Panduan Praktisi"
            title="Apa Itu Asuransi CECR?"
            subtitle="Memahami posisi CECR dalam siklus perlindungan aset infrastruktur, dari masa konstruksi hingga operasional."
          />
          <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Banyak pemilik proyek mengira perlindungan asuransi otomatis
              berakhir begitu Berita Acara Serah Terima (BAST) ditandatangani.
              Faktanya, justru di titik itulah jenis risiko berubah total.
              Selama pembangunan, talud, dermaga, atau jalan akses Anda
              dilindungi oleh{" "}
              <Link
                href="/asuransi-engineering/contractor-all-risk"
                className="font-semibold text-blue-700 hover:underline"
              >
                Contractor&apos;s All Risk (CAR)
              </Link>
              . Begitu proyek selesai dan mulai dioperasikan, risiko yang
              dihadapi bukan lagi risiko pekerjaan konstruksi, melainkan risiko
              operasional: erosi pondasi, pergeseran tanah, benturan kapal,
              hingga kegagalan desain yang baru terlihat setelah struktur
              dipakai.
            </p>
            <p>
              <strong>Civil Engineering Completed Risk (CECR)</strong> dirancang
              khusus untuk mengisi celah ini. Polis ini menjamin kerugian atau
              kerusakan material pada hasil pekerjaan teknik sipil yang sudah
              selesai dibangun — termasuk talud/revetment, dermaga, jalan,
              jembatan, dan saluran air — dari risiko-risiko yang timbul akibat
              kelemahan desain struktur maupun penggunaan operasionalnya
              sehari-hari.
            </p>
            <p>
              Sebagai praktisi yang menangani langsung proyek-proyek
              infrastruktur di Batam, saya kerap menyarankan klien untuk
              menyambung CAR dengan CECR secara berurutan tanpa jeda
              (back-to-back), supaya tidak ada satu hari pun aset Anda tanpa
              perlindungan — sebuah celah yang sering tidak disadari banyak
              kontraktor dan pemilik proyek.
            </p>
          </div>
        </section>

        {/* ─── KONTEKS LOKAL BATAM ─────────────────────────── */}
        <section className="section-padding">
          <SectionHeader
            eyebrow="Konteks Industri Batam"
            title="Mengapa CECR Penting bagi Proyek di Batu Ampar dan Sekitarnya"
          />
          <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Batam adalah kawasan dengan kepadatan aktivitas pelabuhan dan
              industri yang tinggi. <strong>Pelabuhan Batu Ampar</strong>,
              sebagai pintu ekspor-impor utama Batam, saat ini sedang menjalani
              revitalisasi besar — mulai dari perkuatan dermaga, pendalaman
              kolam pelabuhan, hingga perluasan lapangan penumpukan peti kemas.
              Setiap pekerjaan sipil di kawasan ini, termasuk pemasangan batu
              miring (revetment) untuk menahan abrasi dan menstabilkan tepi
              dermaga, menghadapi eksposur risiko yang khas: gelombang dari
              lalu-lalang kapal, pasang-surut air laut, beban statis dari alat
              bongkar muat, hingga pergerakan tanah di area reklamasi.
            </p>
            <p>
              Struktur revetment yang sudah selesai dipasang bukan berarti
              risikonya selesai. Justru di titik ini risiko bergeser ke arah
              operasional jangka panjang: scouring (pengikisan dasar akibat
              arus), pergeseran blok batu, hingga retak struktur akibat beban
              berulang. Inilah alasan mengapa pemilik proyek di kawasan
              industri dan pelabuhan Batam — baik itu kontraktor BUMN, pengelola
              kawasan industri, maupun pemilik aset privat — perlu menempatkan
              CECR sebagai bagian dari manajemen risiko jangka panjang, bukan
              sekadar formalitas dokumen proyek.
            </p>
          </div>
        </section>

        {/* ─── FOTO SURVEI LAPANGAN ─────────────────────────── */}
        <section className="section-padding">
          <SectionHeader
            eyebrow="Dari Lapangan"
            title="Survei Langsung Proyek Revetment di Batu Ampar"
          />
          <div className="rounded-2xl overflow-hidden card-hover border border-gray-100">
            <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/potoartikel/surveicecr.webp"
                alt="Rio, praktisi asuransi kerugian Batam, melakukan survei lapangan untuk asuransi CECR pada proyek pemasangan batu miring (revetment) di kawasan Batu Ampar, Batam"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <div className="px-5 py-4 bg-gray-50 text-sm text-gray-600 leading-relaxed">
              Survei lapangan adalah tahap yang tidak bisa dilewati sebelum
              polis CECR diterbitkan. Pada kunjungan ini, dilakukan pemeriksaan
              langsung terhadap kemiringan pasangan batu, kepadatan susunan,
              dan titik-titik yang berpotensi tergerus arus — salah satu proyek
              perkuatan tepi tebing di daerah Batu Ampar, Batam.
            </div>
          </div>
        </section>

        {/* ─── RISIKO YANG DIJAMIN ───────────────────────────── */}
        <section className="section-padding">
          <SectionHeader
            eyebrow="Cakupan Polis"
            title="Risiko yang Dijamin dalam Polis CECR"
          />
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Kerusakan Akibat Risiko Desain",
                desc: "Kegagalan struktur yang muncul dari kelemahan parameter desain teknik sipil, termasuk perhitungan beban dan stabilitas lereng/talud.",
              },
              {
                title: "Erosi & Scouring",
                desc: "Pengikisan dasar atau tepi struktur akibat arus laut, gelombang, dan pasang-surut yang melemahkan fondasi revetment atau dermaga.",
              },
              {
                title: "Benturan Alat Berat & Kapal",
                desc: "Kerusakan fisik akibat benturan kendaraan operasional, alat bongkar muat, atau kapal yang bersandar di sekitar struktur.",
              },
              {
                title: "Bencana Alam & Cuaca Ekstrem",
                desc: "Kerusakan akibat banjir, angin kencang, gempa (sesuai jaminan tambahan), dan kondisi cuaca ekstrem lainnya.",
              },
              {
                title: "Kebakaran & Sambaran Petir",
                desc: "Meski risikonya relatif kecil pada struktur sipil, jaminan dasar ini tetap melekat pada polis CECR.",
              },
              {
                title: "Risiko Operasional Harian",
                desc: "Kerugian yang timbul dari penggunaan rutin struktur pasca-BAST, di luar tanggung jawab pemeliharaan kontraktor.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl border border-gray-200 card-hover bg-white"
              >
                <h3 className="font-semibold mb-1.5" style={{ color: "#0a1628" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Pengecualian standar tetap berlaku, antara lain keausan wajar
            (wear and tear), perang, dan kelalaian pemeliharaan yang
            terus-menerus diabaikan. Detail jaminan dan pengecualian mengikuti
            wording polis yang diterbitkan masing-masing perusahaan asuransi.
          </p>
        </section>

        {/* ─── SIMULASI PERHITUNGAN PREMI ───────────────────── */}
        <section className="section-padding">
          <SectionHeader
            eyebrow="Simulasi"
            title="Ilustrasi Perhitungan Premi CECR"
            subtitle="Gambaran umum agar Anda memahami komponen yang membentuk premi — bukan penawaran final."
          />
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead style={{ background: "#0a1628" }}>
                <tr>
                  <th className="text-left text-white font-semibold px-5 py-3">
                    Nilai Pertanggungan (TSI)
                  </th>
                  <th className="text-left text-white font-semibold px-5 py-3">
                    Jenis Struktur
                  </th>
                  <th className="text-left text-white font-semibold px-5 py-3">
                    Estimasi Rate / Tahun
                  </th>
                  <th className="text-left text-white font-semibold px-5 py-3">
                    Ilustrasi Premi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-blue-50/50">
                  <td className="px-5 py-3.5">Rp 5.000.000.000</td>
                  <td className="px-5 py-3.5">Revetment / talud pelabuhan</td>
                  <td className="px-5 py-3.5">0,08% – 0,15%</td>
                  <td className="px-5 py-3.5 font-semibold" style={{ color: "#0a1628" }}>
                    Rp 4.000.000 – Rp 7.500.000
                  </td>
                </tr>
                <tr className="hover:bg-blue-50/50">
                  <td className="px-5 py-3.5">Rp 15.000.000.000</td>
                  <td className="px-5 py-3.5">Dermaga / jetty industri</td>
                  <td className="px-5 py-3.5">0,10% – 0,18%</td>
                  <td className="px-5 py-3.5 font-semibold" style={{ color: "#0a1628" }}>
                    Rp 15.000.000 – Rp 27.000.000
                  </td>
                </tr>
                <tr className="hover:bg-blue-50/50">
                  <td className="px-5 py-3.5">Rp 30.000.000.000</td>
                  <td className="px-5 py-3.5">Jalan akses & jembatan kawasan industri</td>
                  <td className="px-5 py-3.5">0,07% – 0,12%</td>
                  <td className="px-5 py-3.5 font-semibold" style={{ color: "#0a1628" }}>
                    Rp 21.000.000 – Rp 36.000.000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            *Rate bersifat indikatif dan dapat berbeda signifikan tergantung
            hasil survei lapangan, usia struktur, riwayat klaim, lokasi
            geografis, dan underwriter yang menerbitkan polis. CECR tidak
            tunduk pada tarif baku OJK sehingga setiap penawaran perlu
            dikonsultasikan langsung. Angka di atas adalah ilustrasi edukasi,
            bukan penawaran premi resmi.
          </p>
          <div className="mt-6 p-5 rounded-xl border" style={{ background: "#f0d08015", borderColor: "#c9a84c40" }}>
            <p className="text-sm text-gray-700">
              <strong>Simulasi klaim:</strong> Misalnya talud revetment senilai
              TSI Rp 5 miliar mengalami kerusakan akibat scouring pasca cuaca
              ekstrem dengan estimasi kerugian Rp 800 juta. Setelah dikurangi
              own risk/deductible sesuai polis (umumnya berbasis persentase TSI
              atau nominal tetap), nilai klaim yang dapat diajukan ke
              penanggung adalah selisihnya — proses ini akan jauh lebih lancar
              bila dokumentasi survei awal dan laporan kondisi berkala
              tersimpan rapi.
            </p>
          </div>
        </section>

        {/* ─── INTERNAL LINK: TAHAPAN PROYEK ───────────────── */}
        <section className="section-padding">
          <SectionHeader
            eyebrow="Rangkaian Perlindungan Proyek"
            title="CECR Bukan Berdiri Sendiri — Kenali Tahapan Proteksi Proyek Anda"
            subtitle="Perlindungan infrastruktur sipil yang lengkap mencakup beberapa fase, bukan hanya satu polis."
          />
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/asuransi-engineering/contractor-all-risk"
              className="block p-5 rounded-xl border border-gray-200 card-hover bg-white hover:border-blue-300 transition-colors"
            >
              <span
                className="inline-block text-xs font-bold uppercase tracking-wider mb-2 px-2.5 py-1 rounded-full"
                style={{ background: "#1a4fa015", color: "#1a4fa0" }}
              >
                Fase Konstruksi
              </span>
              <h3 className="font-semibold mb-1.5" style={{ color: "#0a1628" }}>
                Contractor&apos;s All Risk (CAR)
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Menjamin risiko selama masa pembangunan talud, dermaga, atau
                jalan berlangsung — sebelum BAST diterbitkan.
              </p>
            </Link>
            <Link
              href="/asuransi-engineering/erection-all-risk"
              className="block p-5 rounded-xl border border-gray-200 card-hover bg-white hover:border-blue-300 transition-colors"
            >
              <span
                className="inline-block text-xs font-bold uppercase tracking-wider mb-2 px-2.5 py-1 rounded-full"
                style={{ background: "#1a4fa015", color: "#1a4fa0" }}
              >
                Fase Pemasangan Alat
              </span>
              <h3 className="font-semibold mb-1.5" style={{ color: "#0a1628" }}>
                Erection All Risk (EAR)
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Relevan bila proyek Anda melibatkan pemasangan crane,
                conveyor, atau mesin pendukung di area pelabuhan/industri.
              </p>
            </Link>
            <Link
              href="/asuransi-surety-bond/performance-bond"
              className="block p-5 rounded-xl border border-gray-200 card-hover bg-white hover:border-blue-300 transition-colors"
            >
              <span
                className="inline-block text-xs font-bold uppercase tracking-wider mb-2 px-2.5 py-1 rounded-full"
                style={{ background: "#c9a84c20", color: "#a07830" }}
              >
                Jaminan Kontraktual
              </span>
              <h3 className="font-semibold mb-1.5" style={{ color: "#0a1628" }}>
                Performance Bond
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Jaminan pelaksanaan yang sering disyaratkan pemilik proyek
                kepada kontraktor sebelum dan selama masa konstruksi
                berlangsung.
              </p>
            </Link>
          </div>
        </section>

        {/* ─── FAQ ────────────────────────────────────────────── */}
        <section className="section-padding">
          <SectionHeader eyebrow="Pertanyaan Umum" title="FAQ Seputar Asuransi CECR" />
          <FAQAccordion faqs={FAQS_CECR} />
        </section>
      </div>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <QuoteCard cluster="engineering" lang="id" />
    </>
  );
}

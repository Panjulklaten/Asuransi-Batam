"use client";
import { useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/constants";

// ─── FORMAT HELPERS ──────────────────────────────────────────────────────────
function formatRupiah(val: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(val);
}
// "100000000" → "100.000.000"
function formatInput(val: string): string {
  const digits = val.replace(/\D/g, "");
  if (!digits) return "";
  return parseInt(digits, 10).toLocaleString("id-ID");
}
function parseInput(val: string): number {
  return parseFloat(val.replace(/\./g, "")) || 0;
}

// ─── TARIF OJK ───────────────────────────────────────────────────────────────
// Sumber: SE OJK No. 6/SEOJK.05/2017 tentang Penetapan Tarif Premi atau Kontribusi
// pada Lini Usaha Asuransi Harta Benda dan Asuransi Kendaraan Bermotor.
//
// Lampiran I Tabel I.A — tarif kebakaran (FLEXAS) per kode okupasi, dalam PER MIL (‰),
// per kelas konstruksi 1/2/3. Perusahaan asuransi boleh memakai tarif di antara
// BATAS BAWAH (lo) dan BATAS ATAS (hi), sehingga kalkulator menampilkan rentang.
type Kelas = "k1" | "k2" | "k3";
const KELAS_INDEX: Record<Kelas, 0 | 1 | 2> = { k1: 0, k2: 1, k3: 2 };

type OkupasiKey =
  | "rumah"
  | "apartemen"
  | "kos"
  | "kantor"
  | "ruko"
  | "gudang_sendiri"
  | "gudang_umum"
  | "hotel_bawah"
  | "hotel_atas"
  | "vila";

interface OkupasiRate {
  kode: string; // kode okupasi OJK (referensi)
  dwelling: boolean; // true = Dwelling House (kode 2976) → dipakai untuk tarif gempa
  lo: [number, number, number]; // ‰ tarif bawah  [kelas1, kelas2, kelas3]
  hi: [number, number, number]; // ‰ tarif atas   [kelas1, kelas2, kelas3]
}

const OKUPASI: Record<OkupasiKey, OkupasiRate> = {
  // 2976 – Dwelling houses (bukan ruko), maks. 3 lantai
  rumah:          { kode: "2976",  dwelling: true,  lo: [0.294, 0.397, 0.499], hi: [0.328, 0.443, 0.558] },
  // 2971 – Apartments/condominiums, offices, multi-storeyed car parks (maks. 6 lantai)
  apartemen:      { kode: "2971",  dwelling: false, lo: [0.368, 0.497, 0.625], hi: [0.460, 0.621, 0.781] },
  kantor:         { kode: "2971",  dwelling: false, lo: [0.368, 0.497, 0.625], hi: [0.460, 0.621, 0.781] },
  // 29761 – Dwelling house for boarding house / kos-kosan
  kos:            { kode: "29761", dwelling: false, lo: [0.478, 0.645, 0.812], hi: [0.597, 0.806, 1.015] },
  // 2934 – Shops, non chain store (dipakai untuk ruko / toko)
  ruko:           { kode: "2934",  dwelling: false, lo: [1.520, 2.280, 3.040], hi: [1.900, 2.850, 3.800] },
  // 29371 – Private warehouse (isi gudang milik tertanggung sepenuhnya)
  gudang_sendiri: { kode: "29371", dwelling: false, lo: [1.127, 1.691, 2.255], hi: [1.260, 1.890, 2.520] },
  // 29378 – Public warehouse (ada barang milik pihak lain / gudang sewa)
  gudang_umum:    { kode: "29378", dwelling: false, lo: [2.255, 3.382, 4.509], hi: [2.520, 3.780, 5.040] },
  // 29411 – Hotels, motels, inns and the like — certified below 3 star (juga vila / homestay)
  hotel_bawah:    { kode: "29411", dwelling: false, lo: [0.886, 1.329, 1.772], hi: [0.990, 1.485, 1.980] },
  vila:           { kode: "29411", dwelling: false, lo: [0.886, 1.329, 1.772], hi: [0.990, 1.485, 1.980] },
  // 29412 – Hotels, motels, inns and the like — certified 3 star and above
  hotel_atas:     { kode: "29412", dwelling: false, lo: [0.483, 0.725, 0.966], hi: [0.540, 0.810, 1.080] },
};

const OKUPASI_ORDER: OkupasiKey[] = [
  "rumah", "apartemen", "kos", "kantor", "ruko", "gudang_sendiri", "gudang_umum", "vila", "hotel_bawah", "hotel_atas",
];

// Lampiran III Tabel III.A — tarif gempa bumi (‰) per zona.
//   Dwelling House (kode 2976), rangka baja/kayu/beton bertulang:  Z1 0,76 · Z2 0,79 · Z3 1,04
//   Commercial (selain 2976), rangka baja/kayu/beton ≤ 9 lantai:   Z1 0,75 · Z2 0,76 · Z3 1,00
// Zona per daerah: Lampiran III Tabel III.D (Kepulauan Riau).
type Zona = 1 | 2 | 3;
const GEMPA_RATE: Record<Zona, { dw: number; com: number }> = {
  1: { dw: 0.76, com: 0.75 },
  2: { dw: 0.79, com: 0.76 },
  3: { dw: 1.04, com: 1.0 },
};

const WILAYAH: { value: string; label: string; zona: Zona }[] = [
  { value: "batam",        label: "Kota Batam",           zona: 2 },
  { value: "tanjungpinang", label: "Kota Tanjungpinang",  zona: 2 },
  { value: "bintan",       label: "Kab. Bintan",          zona: 2 },
  { value: "karimun",      label: "Kab. Karimun",         zona: 2 },
  { value: "lingga",       label: "Kab. Lingga",          zona: 3 },
  { value: "natuna",       label: "Kab. Natuna",          zona: 1 },
  { value: "anambas",      label: "Kab. Kepulauan Anambas", zona: 1 },
];

// Perluasan huru-hara (RSMDCC / SRCC), dalam PERSEN (%) dari total pertanggungan.
// CATATAN: SE OJK 6/SEOJK.05/2017 tidak menetapkan angka tarif RSMDCC (diserahkan ke
// kebijakan perusahaan asuransi). Ini tarif referensi — samakan dengan kalkulator
// Asuransi Jogja; ubah sesuai tarif insurer yang dipakai. Kisaran RIPLAY publik: 0,005%–0,05%.
const RATE_HURUHARA = 0.025; // 0,025% = 0,25‰

const MIN_NILAI_BANGUNAN = 10_000_000;

// Biaya administrasi per polis (estimasi): premi < Rp 5 juta → Rp 30.000, selain itu Rp 40.000
const adminFee = (premi: number) => (premi < 5_000_000 ? 30_000 : 40_000);

// ─── PERHITUNGAN ─────────────────────────────────────────────────────────────
interface Params {
  okupasi: OkupasiKey;
  kelas: Kelas;
  nilaiBangunan: number;
  nilaiIsi: number;
  huruhara: boolean;
  gempa: boolean;
  wilayah: string;
}

function hitung(p: Params, band: "lo" | "hi") {
  const o = OKUPASI[p.okupasi];
  const total = p.nilaiBangunan + p.nilaiIsi;

  // Polis 1: kebakaran (+ huru-hara bila dipilih)
  const rateKebakaran = o[band][KELAS_INDEX[p.kelas]];
  const kebakaran = (total * rateKebakaran) / 1000;
  const huruhara = p.huruhara ? (total * RATE_HURUHARA) / 100 : 0;
  const polis1 = kebakaran + huruhara;
  const admin1 = adminFee(polis1);

  // Polis 2: gempa bumi (terpisah) — hanya Kelas 1
  let gempa = 0;
  let admin2 = 0;
  if (p.gempa && p.kelas === "k1") {
    const w = WILAYAH.find((x) => x.value === p.wilayah) ?? WILAYAH[0];
    const rate = GEMPA_RATE[w.zona][o.dwelling ? "dw" : "com"];
    gempa = (total * rate) / 1000;
    admin2 = adminFee(gempa);
  }

  return {
    total,
    kebakaran,
    huruhara,
    admin1,
    gempa,
    admin2,
    duaPolis: gempa > 0,
    grandTotal: polis1 + admin1 + gempa + admin2,
  };
}

type Hasil = { lo: ReturnType<typeof hitung>; hi: ReturnType<typeof hitung> };

// ─── TEKS ID / EN ────────────────────────────────────────────────────────────
const TEXT = {
  id: {
    breadcrumbHome: "Beranda",
    breadcrumbCurrent: "Kalkulator Premi Properti",
    eyebrow: "Kalkulator Online",
    title: "Kalkulator Premi Asuransi Properti",
    subtitle: "Estimasi premi kebakaran, huru-hara, dan gempa bumi berdasarkan tarif OJK.",
    okupasiLabel: "Jenis Properti / Okupasi",
    kelasLabel: "Kelas Konstruksi",
    kelas: {
      k1: "Kelas 1 – Beton / Bata (permanen)",
      k2: "Kelas 2 – Semi Permanen",
      k3: "Kelas 3 – Kayu / Bambu",
    },
    okupasi: {
      rumah: "Rumah Tinggal",
      apartemen: "Apartemen (maks. 6 lantai)",
      kos: "Kos-kosan",
      kantor: "Kantor (maks. 6 lantai)",
      ruko: "Ruko / Toko",
      gudang_sendiri: "Gudang (isi milik sendiri)",
      gudang_umum: "Gudang (sewa / ada barang pihak lain)",
      vila: "Vila / Homestay",
      hotel_bawah: "Hotel / Penginapan (di bawah bintang 3)",
      hotel_atas: "Hotel (bintang 3 ke atas)",
    } as Record<OkupasiKey, string>,
    nilaiBangunanLabel: "Nilai Bangunan (Rp)",
    nilaiBangunanPlaceholder: "Contoh: 500.000.000",
    nilaiBangunanHint: "Nilai penggantian bangunan (bukan harga tanah)",
    nilaiIsiLabel: "Nilai Isi / Perabotan (Rp)",
    optional: "— opsional",
    nilaiIsiPlaceholder: "Contoh: 50.000.000",
    nilaiIsiHint: "Perabot, elektronik, mesin, stok barang",
    perluasanLabel: "Perluasan Jaminan (opsional)",
    huruhara: "Huru-hara (RSMDCC)",
    gempa: "Gempa Bumi",
    gempaOnlyK1: "(hanya Kelas 1)",
    gempaSeparate: "(polis terpisah)",
    wilayahLabel: "Lokasi Properti",
    wilayahHint: "Zona gempa mengikuti lokasi risiko (Lampiran III OJK).",
    gempaInfo: "Gempa bumi diterbitkan sebagai polis tersendiri, biaya administrasi dihitung per polis.",
    errMinNilai: "Masukkan nilai bangunan minimal Rp 10.000.000",
    button: "Hitung Estimasi Premi",
    resultTitle: "Estimasi Premi Tahunan",
    min: "Minimum",
    max: "Maksimum",
    breakdownTitle: "Rincian",
    totalInsured: "Total pertanggungan",
    fire: "Kebakaran, petir, ledakan",
    riot: "Perluasan huru-hara",
    quake: "Gempa bumi (polis 2)",
    admin: "Biaya administrasi",
    disclaimer:
      "* Estimasi berdasarkan SE OJK No. 6/SEOJK.05/2017: kebakaran dihitung dari batas bawah sampai batas atas tarif OJK. Tarif huru-hara adalah tarif referensi karena tidak diatur OJK. Premi final ditentukan perusahaan asuransi setelah survei.",
    cta: "Minta Penawaran via WhatsApp",
    otherCalc: "→ Coba Kalkulator Premi Mobil",
    otherCalcHref: "/kalkulator-premi-mobil",
    waGreeting: "Halo Pak Rio, saya ingin konsultasi asuransi properti.",
    waData: "Data properti:",
    waType: "Jenis",
    waClass: "Konstruksi",
    waBuilding: "Nilai Bangunan",
    waContents: "Nilai Isi",
    waTotal: "Total Pertanggungan",
    waExt: "Perluasan",
    waNone: "Tidak ada",
    waEst: "Estimasi premi per tahun",
    waNote: "(Mohon info penawaran resminya. Terima kasih.)",
    waPolicyTwo: "Polis terpisah",
  },
  en: {
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Property Premium Calculator",
    eyebrow: "Online Calculator",
    title: "Property Insurance Premium Calculator",
    subtitle: "Estimate fire, riot, and earthquake premiums based on official OJK rates.",
    okupasiLabel: "Property Type / Occupancy",
    kelasLabel: "Construction Class",
    kelas: {
      k1: "Class 1 – Concrete / Brick (permanent)",
      k2: "Class 2 – Semi-permanent",
      k3: "Class 3 – Timber / Bamboo",
    },
    okupasi: {
      rumah: "Private Residence",
      apartemen: "Apartment (max. 6 storeys)",
      kos: "Boarding House (kos)",
      kantor: "Office (max. 6 storeys)",
      ruko: "Shophouse / Shop",
      gudang_sendiri: "Warehouse (own stock only)",
      gudang_umum: "Warehouse (rented / third-party goods)",
      vila: "Villa / Homestay",
      hotel_bawah: "Hotel / Inn (below 3 star)",
      hotel_atas: "Hotel (3 star and above)",
    } as Record<OkupasiKey, string>,
    nilaiBangunanLabel: "Building Value (Rp)",
    nilaiBangunanPlaceholder: "e.g. 500.000.000",
    nilaiBangunanHint: "Reinstatement value of the building (excluding land)",
    nilaiIsiLabel: "Contents Value (Rp)",
    optional: "— optional",
    nilaiIsiPlaceholder: "e.g. 50.000.000",
    nilaiIsiHint: "Furniture, electronics, machinery, stock",
    perluasanLabel: "Extensions (optional)",
    huruhara: "Riot & Civil Commotion (RSMDCC)",
    gempa: "Earthquake",
    gempaOnlyK1: "(Class 1 only)",
    gempaSeparate: "(separate policy)",
    wilayahLabel: "Property Location",
    wilayahHint: "The earthquake zone follows the risk location (OJK Appendix III).",
    gempaInfo: "Earthquake cover is issued as a separate policy, so the admin fee applies per policy.",
    errMinNilai: "Enter a building value of at least Rp 10.000.000",
    button: "Calculate Estimated Premium",
    resultTitle: "Estimated Annual Premium",
    min: "Minimum",
    max: "Maximum",
    breakdownTitle: "Breakdown",
    totalInsured: "Total sum insured",
    fire: "Fire, lightning, explosion",
    riot: "Riot extension",
    quake: "Earthquake (policy 2)",
    admin: "Administration fee",
    disclaimer:
      "* Estimate based on OJK Circular No. 6/SEOJK.05/2017: fire is calculated from the lower to the upper OJK rate. The riot rate is a reference rate because OJK does not set one. The final premium is determined by the insurer after a survey.",
    cta: "Request a Quote via WhatsApp",
    otherCalc: "→ Try the Car Premium Calculator",
    otherCalcHref: "/en/car-premium-calculator",
    waGreeting: "Hello Rio, I would like to discuss property insurance.",
    waData: "Property details:",
    waType: "Type",
    waClass: "Construction",
    waBuilding: "Building Value",
    waContents: "Contents Value",
    waTotal: "Total Sum Insured",
    waExt: "Extensions",
    waNone: "None",
    waEst: "Estimated annual premium",
    waNote: "(Please send me the official quotation. Thank you.)",
    waPolicyTwo: "Separate policy",
  },
};

interface KalkulatorPropertiProps {
  lang?: "id" | "en";
}

// ─── KOMPONEN ────────────────────────────────────────────────────────────────
export default function KalkulatorProperti({ lang = "id" }: KalkulatorPropertiProps) {
  const t = TEXT[lang];

  const [okupasi, setOkupasi] = useState<OkupasiKey>("rumah");
  const [kelas, setKelas] = useState<Kelas>("k1");
  const [nilai, setNilai] = useState("");
  const [isi, setIsi] = useState("");
  const [huruhara, setHuruhara] = useState(false);
  const [gempa, setGempa] = useState(false);
  const [wilayah, setWilayah] = useState("batam");

  const [hasil, setHasil] = useState<Hasil | null>(null);
  const [error, setError] = useState("");

  const gempaBisaDipilih = kelas === "k1";
  const reset = () => setHasil(null);

  const handleKelas = (val: Kelas) => {
    setKelas(val);
    if (val !== "k1") setGempa(false);
    reset();
  };

  function calculate() {
    const nilaiBangunan = parseInput(nilai);
    const nilaiIsi = parseInput(isi);
    if (nilaiBangunan < MIN_NILAI_BANGUNAN) {
      setError(t.errMinNilai);
      setHasil(null);
      return;
    }
    setError("");
    const params: Params = { okupasi, kelas, nilaiBangunan, nilaiIsi, huruhara, gempa, wilayah };
    setHasil({ lo: hitung(params, "lo"), hi: hitung(params, "hi") });
  }

  function buildWaLink() {
    if (!hasil) return `https://wa.me/${SITE.phoneWA}`;
    const w = WILAYAH.find((x) => x.value === wilayah) ?? WILAYAH[0];
    const ext = [
      huruhara && t.huruhara,
      hasil.lo.duaPolis && `${t.gempa} – ${w.label} (${t.waPolicyTwo})`,
    ].filter(Boolean).join(" + ") || t.waNone;

    const lines = [
      t.waGreeting,
      "",
      `*${t.waData}*`,
      `- ${t.waType}: ${t.okupasi[okupasi]}`,
      `- ${t.waClass}: ${t.kelas[kelas]}`,
      `- ${t.waBuilding}: ${formatRupiah(parseInput(nilai))}`,
      ...(parseInput(isi) > 0 ? [`- ${t.waContents}: ${formatRupiah(parseInput(isi))}`] : []),
      `- ${t.waTotal}: ${formatRupiah(hasil.lo.total)}`,
      `- ${t.waExt}: ${ext}`,
      "",
      `*${t.waEst}: ${formatRupiah(hasil.lo.grandTotal)} – ${formatRupiah(hasil.hi.grandTotal)}*`,
      "",
      t.waNote,
    ];
    return `https://wa.me/${SITE.phoneWA}?text=${encodeURIComponent(lines.join("\n"))}`;
  }

  const fieldCls =
    "w-full px-4 py-3 rounded-xl border-2 border-[#e2e8f0] focus:border-[#1a4fa0] outline-none text-[#0a1628] font-medium bg-white";
  const labelCls = "block font-display font-semibold text-[#0a1628] mb-2";
  const hintCls = "text-[#475569] text-xs mt-1.5 block";

  // Baris rincian: tampilkan rentang bila min ≠ maks
  const range = (lo: number, hi: number) =>
    Math.round(lo) === Math.round(hi) ? formatRupiah(lo) : `${formatRupiah(lo)} – ${formatRupiah(hi)}`;

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-white/50 mb-4 flex-wrap" aria-label="Breadcrumb">
            <Link href={lang === "en" ? "/en" : "/"} className="hover:text-white/80 transition-colors">{t.breadcrumbHome}</Link>
            <span>/</span>
            <span className="text-white/70">{t.breadcrumbCurrent}</span>
          </nav>
          <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-2">{t.eyebrow}</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">{t.title}</h1>
          <p className="text-white/70 text-xl">{t.subtitle}</p>
        </div>
      </section>

      {/* KALKULATOR */}
      <section className="section-padding bg-[#faf8f3]">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 sm:p-8 shadow-sm">
            <div className="space-y-6">
              {/* Okupasi + Kelas konstruksi */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="kp-okupasi" className={labelCls}>{t.okupasiLabel}</label>
                  <select
                    id="kp-okupasi"
                    className={fieldCls}
                    value={okupasi}
                    onChange={(e) => { setOkupasi(e.target.value as OkupasiKey); reset(); }}
                  >
                    {OKUPASI_ORDER.map((k) => (
                      <option key={k} value={k}>{t.okupasi[k]}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="kp-kelas" className={labelCls}>{t.kelasLabel}</label>
                  <select
                    id="kp-kelas"
                    className={fieldCls}
                    value={kelas}
                    onChange={(e) => handleKelas(e.target.value as Kelas)}
                  >
                    {(["k1", "k2", "k3"] as Kelas[]).map((k) => (
                      <option key={k} value={k}>{t.kelas[k]}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Nilai bangunan + isi */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="kp-nilai" className={labelCls}>{t.nilaiBangunanLabel}</label>
                  <input
                    id="kp-nilai"
                    type="text"
                    inputMode="numeric"
                    placeholder={t.nilaiBangunanPlaceholder}
                    value={nilai}
                    onChange={(e) => { setNilai(formatInput(e.target.value)); reset(); }}
                    className={fieldCls}
                  />
                  <span className={hintCls}>{t.nilaiBangunanHint}</span>
                </div>
                <div>
                  <label htmlFor="kp-isi" className={labelCls}>
                    {t.nilaiIsiLabel} <span className="text-[#475569] font-normal text-xs">{t.optional}</span>
                  </label>
                  <input
                    id="kp-isi"
                    type="text"
                    inputMode="numeric"
                    placeholder={t.nilaiIsiPlaceholder}
                    value={isi}
                    onChange={(e) => { setIsi(formatInput(e.target.value)); reset(); }}
                    className={fieldCls}
                  />
                  <span className={hintCls}>{t.nilaiIsiHint}</span>
                </div>
              </div>

              {/* Perluasan */}
              <div>
                <span className={labelCls}>{t.perluasanLabel}</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      huruhara ? "border-[#c9a84c] bg-[#c9a84c]/5" : "border-[#e2e8f0] hover:border-[#c9a84c]/40"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={huruhara}
                      onChange={(e) => { setHuruhara(e.target.checked); reset(); }}
                      className="accent-[#c9a84c] w-4 h-4"
                    />
                    <span className="text-sm font-semibold text-[#0a1628]">{t.huruhara}</span>
                  </label>

                  <label
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                      !gempaBisaDipilih
                        ? "border-[#e2e8f0] bg-[#f8fafc] cursor-not-allowed opacity-60"
                        : gempa
                          ? "border-[#c9a84c] bg-[#c9a84c]/5 cursor-pointer"
                          : "border-[#e2e8f0] hover:border-[#c9a84c]/40 cursor-pointer"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={gempa}
                      disabled={!gempaBisaDipilih}
                      onChange={(e) => { setGempa(e.target.checked); reset(); }}
                      className="accent-[#c9a84c] w-4 h-4"
                    />
                    <span className="text-sm font-semibold text-[#0a1628]">
                      {t.gempa}{" "}
                      <span className="font-normal text-xs text-[#475569]">
                        {!gempaBisaDipilih ? t.gempaOnlyK1 : gempa ? t.gempaSeparate : ""}
                      </span>
                    </span>
                  </label>
                </div>

                {gempa && gempaBisaDipilih && (
                  <div className="mt-4">
                    <label htmlFor="kp-wilayah" className={labelCls}>{t.wilayahLabel}</label>
                    <select
                      id="kp-wilayah"
                      className={fieldCls}
                      value={wilayah}
                      onChange={(e) => { setWilayah(e.target.value); reset(); }}
                    >
                      {WILAYAH.map((w) => (
                        <option key={w.value} value={w.value}>{w.label}</option>
                      ))}
                    </select>
                    <span className={hintCls}>{t.wilayahHint}</span>
                    <p className="text-[#475569] text-xs mt-2 leading-relaxed">{t.gempaInfo}</p>
                  </div>
                )}
              </div>

              {error && <p className="text-red-600 text-sm" role="alert">{error}</p>}

              <button
                onClick={calculate}
                className="w-full py-4 bg-gradient-to-r from-[#0a1628] to-[#1a4fa0] text-white font-bold rounded-xl hover:shadow-lg transition-all text-lg"
              >
                {t.button}
              </button>
            </div>

            {/* HASIL */}
            {hasil && (
              <div className="mt-6 p-6 bg-gradient-to-r from-[#0a1628] to-[#1a4fa0] rounded-2xl text-white">
                <h3 className="font-display font-bold text-lg mb-4 text-[#c9a84c]">{t.resultTitle}</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-white/60 text-xs mb-1">{t.min}</div>
                    <div className="font-bold text-xl">{formatRupiah(hasil.lo.grandTotal)}</div>
                  </div>
                  <div className="bg-[#c9a84c]/20 rounded-xl p-4 text-center border border-[#c9a84c]/40">
                    <div className="text-[#c9a84c] text-xs mb-1">{t.max}</div>
                    <div className="font-bold text-xl text-[#f0d080]">{formatRupiah(hasil.hi.grandTotal)}</div>
                  </div>
                </div>

                <div className="text-sm border-t border-white/15 pt-4">
                  <div className="text-white/60 text-xs font-semibold mb-2">{t.breakdownTitle}</div>
                  <dl className="space-y-2">
                    <div className="flex justify-between gap-4">
                      <dt className="text-white/70">{t.totalInsured}</dt>
                      <dd className="font-semibold text-right">{formatRupiah(hasil.lo.total)}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-white/70">{t.fire}</dt>
                      <dd className="font-semibold text-right">{range(hasil.lo.kebakaran, hasil.hi.kebakaran)}</dd>
                    </div>
                    {hasil.lo.huruhara > 0 && (
                      <div className="flex justify-between gap-4">
                        <dt className="text-white/70">{t.riot}</dt>
                        <dd className="font-semibold text-right">{formatRupiah(hasil.lo.huruhara)}</dd>
                      </div>
                    )}
                    {hasil.lo.duaPolis && (
                      <div className="flex justify-between gap-4">
                        <dt className="text-white/70">{t.quake}</dt>
                        <dd className="font-semibold text-right">{formatRupiah(hasil.lo.gempa)}</dd>
                      </div>
                    )}
                    <div className="flex justify-between gap-4">
                      <dt className="text-white/70">{t.admin}</dt>
                      <dd className="font-semibold text-right">
                        {range(hasil.lo.admin1 + hasil.lo.admin2, hasil.hi.admin1 + hasil.hi.admin2)}
                      </dd>
                    </div>
                  </dl>
                </div>

                <p className="text-white/60 text-xs mt-4 mb-4 leading-relaxed">{t.disclaimer}</p>
                <a
                  href={buildWaLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 bg-[#c9a84c] text-[#0a1628] font-bold rounded-xl text-center hover:bg-[#f0d080] transition-colors"
                >
                  {t.cta}
                </a>
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <Link href={t.otherCalcHref} className="text-[#1a4fa0] font-semibold hover:text-[#c9a84c] transition-colors">
              {t.otherCalc}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

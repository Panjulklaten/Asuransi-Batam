import type { QuoteCluster } from "./types";

const CAR = ["car"];
const DUMP = ["dumptruck"];
const ALL = ["car", "motor", "dumptruck"];

export const VEHICLE: QuoteCluster = {
  key: "vehicle",
  typeLegend: { id: "Jenis kendaraan", en: "Vehicle type" },
  typeLine: { id: "Jenis kendaraan", en: "Vehicle type" },
  types: [
    { key: "car", label: { id: "Mobil", en: "Car" }, hint: { id: "All Risk & TLO", en: "All Risk & TLO" } },
    { key: "motor", label: { id: "Sepeda Motor", en: "Motorcycle" }, hint: { id: "All Risk & TLO", en: "All Risk & TLO" } },
    { key: "dumptruck", label: { id: "Dump Truck / Armada", en: "Dump Truck / Fleet" }, hint: { id: "Kendaraan proyek & fleet", en: "Project vehicles & fleets" } },
  ],
  inferType(pathname) {
    const p = pathname.toLowerCase();
    if (/dump|truck|truk|armada|fleet/.test(p)) return "dumptruck";
    if (/asuransi-motor|motorcycle|sepeda-motor/.test(p)) return "motor";
    return "car";
  },
  companyOptionalFor: ["car", "motor"],
  calculator(type, lang) {
    if (type === "motor")
      return {
        label: lang === "id" ? "Hitung Premi Motor" : "Calculate Motorcycle Premium",
        href: lang === "id" ? "/kalkulator-premi-motor" : "/en/motorcycle-premium-calculator",
      };
    if (type === "car")
      return {
        label: lang === "id" ? "Hitung Premi Mobil" : "Calculate Car Premium",
        href: lang === "id" ? "/kalkulator-premi-mobil" : "/en/car-premium-calculator",
      };
    return null; // dump truck / armada: belum ada kalkulator
  },
  fields: [
    {
      key: "model",
      kind: "text",
      showFor: ALL,
      label: { id: "Merek & tipe kendaraan", en: "Vehicle make & model" },
      placeholder: { id: "mis. Toyota Fortuner VRZ / Hino 500", en: "e.g. Toyota Fortuner VRZ / Hino 500" },
    },
    {
      key: "year",
      kind: "number",
      showFor: ALL,
      label: { id: "Tahun pembuatan", en: "Year of manufacture" },
      placeholder: { id: "mis. 2022", en: "e.g. 2022" },
    },
    {
      key: "units",
      kind: "number",
      showFor: DUMP,
      label: { id: "Jumlah unit", en: "Number of units" },
      placeholder: { id: "mis. 10", en: "e.g. 10" },
      suffix: { id: "unit", en: "units" },
    },
    {
      key: "value",
      kind: "money",
      showFor: ALL,
      label: { id: "Harga / nilai kendaraan (per unit)", en: "Vehicle price / value (per unit)" },
      placeholder: { id: "mis. 450.000.000", en: "e.g. 450,000,000" },
    },
    {
      key: "coverage",
      kind: "select",
      showFor: ALL,
      optional: true,
      label: { id: "Jenis perlindungan", en: "Cover type" },
      placeholder: { id: "Pilih perlindungan", en: "Select cover" },
      options: [
        { value: "allrisk", label: { id: "All Risk (komprehensif)", en: "All Risk (comprehensive)" } },
        { value: "tlo", label: { id: "TLO (kehilangan & rusak total)", en: "TLO (theft & total loss)" } },
        { value: "unsure", label: { id: "Belum yakin — mohon disarankan", en: "Not sure — please advise" } },
      ],
    },
    {
      key: "usage",
      kind: "select",
      showFor: CAR,
      optional: true,
      label: { id: "Penggunaan", en: "Usage" },
      placeholder: { id: "Pilih penggunaan", en: "Select usage" },
      options: [
        { value: "private", label: { id: "Pribadi / keluarga", en: "Private / family" } },
        { value: "commercial", label: { id: "Usaha / operasional", en: "Business / operational" } },
      ],
    },
    {
      key: "operation",
      kind: "select",
      showFor: DUMP,
      optional: true,
      label: { id: "Area operasi", en: "Operating area" },
      placeholder: { id: "Pilih area operasi", en: "Select operating area" },
      options: [
        { value: "construction", label: { id: "Proyek konstruksi", en: "Construction project" } },
        { value: "reclamation", label: { id: "Reklamasi / galian", en: "Reclamation / excavation" } },
        { value: "industrial", label: { id: "Kawasan industri", en: "Industrial estate" } },
        { value: "other", label: { id: "Lainnya", en: "Other" } },
      ],
    },
  ],
  flags: [
    { key: "accessories", showFor: ["car", "motor"], label: { id: "Ada aksesori / modifikasi tambahan", en: "Has accessories / modifications" } },
    { key: "tpl", label: { id: "Perlu tanggung gugat pihak ketiga (TPL)", en: "Need third-party liability (TPL)" } },
    { key: "pa", label: { id: "Perlu PA pengemudi & penumpang", en: "Need driver & passenger PA" } },
    { key: "flood", label: { id: "Perlu perluasan banjir / bencana alam", en: "Need flood / natural disaster extension" } },
    { key: "workshop", showFor: ["car", "motor"], label: { id: "Ingin bengkel rekanan / resmi", en: "Prefer partner / authorised workshop" } },
    { key: "fleet", showFor: DUMP, label: { id: "Armada banyak — minta fleet discount", en: "Large fleet — request fleet discount" } },
    { key: "financed", label: { id: "Masih leasing / kredit (syarat lembaga pembiayaan)", en: "Still on lease / loan (financier requirement)" } },
    { key: "claim", label: { id: "Pernah klaim dalam 3 tahun terakhir", en: "Claim made in the last 3 years" } },
    { key: "renewal", label: { id: "Perpanjangan polis yang sudah ada", en: "Renewal of an existing policy" } },
    { key: "urgent", label: { id: "Dibutuhkan mendesak (≤ 3 hari kerja)", en: "Urgent (≤ 3 working days)" } },
  ],
  general: [
    {
      doc: { id: "Identitas pemilik", en: "Owner identity" },
      note: { id: "KTP (perorangan) atau akta, NIB & NPWP (perusahaan)", en: "ID card (individual) or deed, NIB & NPWP (company)" },
      must: true,
    },
    {
      doc: { id: "STNK kendaraan", en: "Vehicle registration (STNK)" },
      note: { id: "Memuat nomor polisi, nomor rangka, dan nomor mesin", en: "Shows plate, chassis, and engine numbers" },
      must: true,
    },
    {
      doc: { id: "Foto kendaraan", en: "Vehicle photos" },
      note: { id: "Empat sisi, interior, dan odometer", en: "Four sides, interior, and odometer" },
      must: true,
    },
    {
      doc: { id: "Polis sebelumnya & riwayat klaim", en: "Previous policy & claims record" },
      note: { id: "Untuk perpanjangan, atau bila pernah klaim", en: "For renewals, or if a claim was made" },
      must: false,
    },
  ],
  specific: {
    car: [
      {
        doc: { id: "Daftar aksesori / modifikasi", en: "List of accessories / modifications" },
        note: { id: "Agar nilainya ikut dipertanggungkan", en: "So their value can be insured" },
        must: false,
      },
      {
        doc: { id: "Syarat dari lembaga pembiayaan", en: "Financier's requirements" },
        note: { id: "Bila mobil masih kredit / leasing", en: "If the car is still on credit / lease" },
        must: false,
      },
    ],
    motor: [
      {
        doc: { id: "Daftar aksesori / modifikasi", en: "List of accessories / modifications" },
        note: { id: "Agar nilainya ikut dipertanggungkan", en: "So their value can be insured" },
        must: false,
      },
    ],
    dumptruck: [
      {
        doc: { id: "Daftar unit armada", en: "Fleet unit list" },
        note: { id: "Nomor polisi, tipe, tahun, dan nilai tiap unit", en: "Plate number, type, year, and value of each unit" },
        must: true,
      },
      {
        doc: { id: "Area operasi & jenis proyek", en: "Operating area & project type" },
        note: { id: "Konstruksi, reklamasi, atau galian — menentukan tarif", en: "Construction, reclamation, or excavation — affects rating" },
        must: true,
      },
      {
        doc: { id: "Rekam jejak klaim & kecelakaan armada", en: "Fleet claims & accident record" },
        note: { id: "Dasar penilaian risiko dan potensi fleet discount", en: "Basis for risk assessment and possible fleet discount" },
        must: false,
      },
      {
        doc: { id: "Data pengemudi (SIM)", en: "Driver details (licence)" },
        note: { id: "Untuk perlindungan kecelakaan pengemudi", en: "For driver accident cover" },
        must: false,
      },
    ],
  },
  disclaimer: {
    id: "Daftar bersifat umum. Premi mengikuti tarif OJK per kategori harga dan wilayah; survei kendaraan dapat diminta sebelum polis aktif, terutama untuk kendaraan lama atau bernilai besar.",
    en: "This list is a general guide. Premiums follow OJK rates by price category and region; a vehicle survey may be requested before the policy starts, especially for older or high-value vehicles.",
  },
  copy: {
    modalTitle: { id: "Permintaan Penawaran Asuransi Kendaraan", en: "Vehicle Insurance Quote Request" },
    modalSubtitle: {
      id: "Isi data singkat kendaraan Anda — kami analisa awal dan balas lewat WhatsApp.",
      en: "Share a few details about your vehicle — we'll assess and reply on WhatsApp.",
    },
    reqEyebrow: { id: "Persyaratan Penerbitan", en: "Issuance Requirements" },
    reqTitle: { id: "Dokumen yang Disiapkan untuk Asuransi Kendaraan", en: "Documents to Prepare for Vehicle Insurance" },
    reqSubtitle: {
      id: "Pilih jenis kendaraan untuk melihat dokumen khususnya. Dokumen pemilik berlaku untuk semua jenis.",
      en: "Choose a vehicle type to see its specific documents. Owner documents apply to every type.",
    },
    dateLabel: { id: "Tanggal mulai pertanggungan", en: "Cover start date" },
    clientLabel: { id: "Nomor polisi (opsional)", en: "Plate number (optional)" },
    clientPh: { id: "mis. BP 1234 XY", en: "e.g. BP 1234 XY" },
    notePh: {
      id: "mis. varian kendaraan, kondisi saat ini, lokasi pemakaian, atau info lain yang menurut Anda penting.",
      en: "e.g. vehicle variant, current condition, area of use, or anything else you think matters.",
    },
    msgIntro: {
      id: "Halo Rio, saya ingin *meminta penawaran Asuransi Kendaraan*.",
      en: "Hello Rio, I would like to *request a Vehicle Insurance quotation*.",
    },
    msgOutro: {
      id: "Mohon dibantu analisa awal, estimasi premi, dan daftar dokumen yang dibutuhkan. Terima kasih.",
      en: "Please help with an initial assessment, premium estimate, and the list of required documents. Thank you.",
    },
    unsureNote: { id: "", en: "" },
    companyLabel: { id: "Nama perusahaan", en: "Company name" },
  },
};

import type { QuoteCluster } from "./types";

const HEAVY = ["heavy"];
const CRANE = ["crane"];
const BOTH = ["heavy", "crane"];

export const MACHINERY: QuoteCluster = {
  key: "machinery",
  typeLegend: { id: "Jenis alat", en: "Equipment type" },
  typeLine: { id: "Jenis alat", en: "Equipment type" },
  noHeroWhatsApp: true,
  types: [
    {
      key: "heavy",
      label: { id: "Alat Berat", en: "Heavy Equipment" },
      hint: { id: "Excavator, bulldozer, wheel loader", en: "Excavators, bulldozers, wheel loaders" },
    },
    {
      key: "crane",
      label: { id: "Crane", en: "Crane" },
      hint: { id: "Mobile, tower & overhead crane", en: "Mobile, tower & overhead cranes" },
    },
  ],
  inferType(pathname) {
    return /crane/.test(pathname.toLowerCase()) ? "crane" : "heavy";
  },
  fields: [
    {
      key: "craneType",
      kind: "select",
      showFor: CRANE,
      label: { id: "Jenis crane", en: "Crane type" },
      placeholder: { id: "Pilih jenis crane", en: "Select crane type" },
      options: [
        { value: "mobile", label: { id: "Mobile crane", en: "Mobile crane" } },
        { value: "crawler", label: { id: "Crawler crane", en: "Crawler crane" } },
        { value: "tower", label: { id: "Tower crane", en: "Tower crane" } },
        { value: "overhead", label: { id: "Overhead / gantry crane", en: "Overhead / gantry crane" } },
      ],
    },
    {
      key: "equipmentType",
      kind: "text",
      showFor: HEAVY,
      label: { id: "Jenis alat berat", en: "Type of equipment" },
      placeholder: { id: "mis. excavator, bulldozer, wheel loader", en: "e.g. excavator, bulldozer, wheel loader" },
    },
    {
      key: "model",
      kind: "text",
      showFor: BOTH,
      label: { id: "Merek & tipe", en: "Make & model" },
      placeholder: { id: "mis. Komatsu PC200-8 / Tadano GR-500", en: "e.g. Komatsu PC200-8 / Tadano GR-500" },
    },
    {
      key: "year",
      kind: "number",
      showFor: BOTH,
      label: { id: "Tahun pembuatan", en: "Year of manufacture" },
      placeholder: { id: "mis. 2019", en: "e.g. 2019" },
    },
    {
      key: "units",
      kind: "number",
      showFor: BOTH,
      label: { id: "Jumlah unit", en: "Number of units" },
      placeholder: { id: "mis. 3", en: "e.g. 3" },
      suffix: { id: "unit", en: "units" },
    },
    {
      key: "value",
      kind: "money",
      showFor: BOTH,
      label: { id: "Nilai alat (per unit)", en: "Equipment value (per unit)" },
      placeholder: { id: "mis. 1.800.000.000", en: "e.g. 1,800,000,000" },
    },
    {
      key: "capacity",
      kind: "number",
      showFor: CRANE,
      optional: true,
      label: { id: "Kapasitas angkat", en: "Lifting capacity" },
      placeholder: { id: "mis. 50", en: "e.g. 50" },
      suffix: { id: "ton", en: "tonnes" },
    },
    {
      key: "operation",
      kind: "select",
      showFor: BOTH,
      optional: true,
      label: { id: "Area operasi", en: "Operating area" },
      placeholder: { id: "Pilih area operasi", en: "Select operating area" },
      options: [
        { value: "construction", label: { id: "Proyek konstruksi", en: "Construction project" } },
        { value: "mining", label: { id: "Pertambangan / galian", en: "Mining / excavation" } },
        { value: "shipyard", label: { id: "Galangan kapal / pelabuhan", en: "Shipyard / port" } },
        { value: "industrial", label: { id: "Kawasan industri", en: "Industrial estate" } },
      ],
    },
    {
      key: "ownership",
      kind: "select",
      showFor: BOTH,
      optional: true,
      label: { id: "Status alat", en: "Equipment status" },
      placeholder: { id: "Pilih status", en: "Select status" },
      options: [
        { value: "owned", label: { id: "Milik sendiri", en: "Owned" } },
        { value: "leased", label: { id: "Leasing / sewa guna usaha", en: "Leased" } },
        { value: "rental", label: { id: "Disewakan ke pihak lain", en: "Rented out to others" } },
      ],
    },
  ],
  flags: [
    { key: "breakdown", label: { id: "Perlu perlindungan kerusakan mesin (breakdown)", en: "Need machinery breakdown cover" } },
    { key: "tpl", label: { id: "Perlu tanggung gugat pihak ketiga (TPL)", en: "Need third-party liability (TPL)" } },
    { key: "operator", label: { id: "Perlu santunan kecelakaan operator", en: "Need operator accident cover" } },
    { key: "certified", showFor: CRANE, label: { id: "Operator & crane bersertifikat (SIO/SIA)", en: "Certified operator & crane (SIO/SIA)" } },
    { key: "appraisal", label: { id: "Perlu bantuan appraisal nilai alat", en: "Need help appraising the equipment value" } },
    { key: "fleet", label: { id: "Banyak unit — minta penawaran program", en: "Many units — request a programme quote" } },
    { key: "claim", label: { id: "Pernah klaim dalam 3 tahun terakhir", en: "Claim made in the last 3 years" } },
    { key: "renewal", label: { id: "Perpanjangan polis yang sudah ada", en: "Renewal of an existing policy" } },
    { key: "urgent", label: { id: "Dibutuhkan mendesak", en: "Urgent" } },
  ],
  general: [
    {
      doc: { id: "Data alat", en: "Equipment details" },
      note: { id: "Merek, tipe/model, tahun pembuatan, nomor seri, dan kapasitas operasi", en: "Make, model, year, serial number, and operating capacity" },
      must: true,
    },
    {
      doc: { id: "Foto terkini alat", en: "Recent equipment photos" },
      note: { id: "Minimal 4 sudut (depan, belakang, kiri, kanan) dan komponen utama", en: "At least 4 angles (front, rear, left, right) and key components" },
      must: true,
    },
    {
      doc: { id: "Bukti kepemilikan", en: "Proof of ownership" },
      note: { id: "Invoice pembelian, BPKB, atau kontrak leasing", en: "Purchase invoice, registration, or lease agreement" },
      must: true,
    },
    {
      doc: { id: "Dokumen perusahaan", en: "Company documents" },
      note: { id: "SIUP/NIB, NPWP, dan akta pendirian (klien korporasi)", en: "SIUP/NIB, NPWP, and deed (corporate clients)" },
      must: true,
    },
    {
      doc: { id: "Lokasi operasi", en: "Operating location" },
      note: { id: "Alamat proyek atau site tempat alat digunakan", en: "Project or site address where the equipment is used" },
      must: true,
    },
  ],
  specific: {
    heavy: [
      {
        doc: { id: "Estimasi nilai pasar atau nilai buku", en: "Estimated market or book value" },
        note: { id: "Alat di atas 5 tahun atau bernilai di atas Rp 2 miliar biasanya perlu appraisal / survei", en: "Equipment over 5 years old or above Rp 2 billion usually needs appraisal / survey" },
        must: true,
      },
    ],
    crane: [
      {
        doc: { id: "Sertifikat kelayakan crane (SIO/SIA)", en: "Crane fitness certificate (SIO/SIA)" },
        note: { id: "Harus masih berlaku", en: "Must still be valid" },
        must: true,
      },
      {
        doc: { id: "Buku log perawatan berkala", en: "Periodic maintenance log" },
        note: { id: "Menunjukkan kondisi dan riwayat servis", en: "Shows condition and service history" },
        must: true,
      },
      {
        doc: { id: "Data operator bersertifikat K3", en: "K3-certified operator details" },
        note: { id: "Untuk penilaian risiko operasi dan santunan operator", en: "For operating-risk assessment and operator cover" },
        must: true,
      },
      {
        doc: { id: "Nilai penggantian (replacement cost)", en: "Replacement cost" },
        note: { id: "Dasar nilai pertanggungan crane", en: "Basis of the crane's sum insured" },
        must: true,
      },
    ],
  },
  disclaimer: {
    id: "Daftar bersifat umum. Untuk alat standar dengan dokumen lengkap, cover note umumnya terbit 1–2 hari kerja; polis definitif 7–10 hari kerja. Survei fisik dapat diminta sebelum polis terbit.",
    en: "This list is a general guide. For standard equipment with complete documents, a cover note is usually issued in 1–2 working days and the final policy in 7–10 working days. A physical survey may be requested before issuance.",
  },
  copy: {
    modalTitle: { id: "Permintaan Penawaran Asuransi Alat Berat", en: "Heavy Equipment Insurance Quote Request" },
    modalSubtitle: {
      id: "Isi data singkat alat Anda — kami analisa awal dan balas lewat WhatsApp.",
      en: "Share a few details about your equipment — we'll assess and reply on WhatsApp.",
    },
    reqEyebrow: { id: "Persyaratan Penerbitan", en: "Issuance Requirements" },
    reqTitle: { id: "Dokumen yang Disiapkan untuk Asuransi Alat Berat", en: "Documents to Prepare for Heavy Equipment Insurance" },
    reqSubtitle: {
      id: "Pilih jenis alat untuk melihat dokumen khususnya. Dokumen umum berlaku untuk semua jenis.",
      en: "Choose an equipment type to see its specific documents. General documents apply to every type.",
    },
    dateLabel: { id: "Target polis mulai berlaku", en: "Target policy start date" },
    clientLabel: { id: "Nama proyek / site (opsional)", en: "Project / site name (optional)" },
    clientPh: { id: "mis. Proyek Reklamasi Batam Centre", en: "e.g. Batam Centre reclamation project" },
    notePh: {
      id: "mis. kondisi alat, riwayat kerusakan, atau info lain yang menurut Anda penting.",
      en: "e.g. equipment condition, damage history, or anything else you think matters.",
    },
    msgIntro: {
      id: "Halo Rio, saya ingin *meminta penawaran Asuransi Alat Berat*.",
      en: "Hello Rio, I would like to *request a Heavy Equipment Insurance quotation*.",
    },
    msgOutro: {
      id: "Mohon dibantu analisa awal, estimasi premi, dan daftar dokumen yang dibutuhkan. Terima kasih.",
      en: "Please help with an initial assessment, premium estimate, and the list of required documents. Thank you.",
    },
    unsureNote: { id: "", en: "" },
    companyLabel: { id: "Nama perusahaan", en: "Company name" },
  },
};

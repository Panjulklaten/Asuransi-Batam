import type { Option, QuoteCluster } from "./types";

const YES_NO: Option[] = [
  { value: "yes", label: { id: "Ya", en: "Yes" } },
  { value: "no", label: { id: "Tidak", en: "No" } },
];

const IND = ["individual"];
const GRP = ["group"];

export const PA: QuoteCluster = {
  key: "pa",
  noHeroWhatsApp: true,
  typeLegend: { id: "Jenis perlindungan", en: "Cover type" },
  typeLine: { id: "Jenis perlindungan", en: "Cover type" },
  types: [
    {
      key: "individual",
      label: { id: "PA Individu & Keluarga", en: "Individual & Family PA" },
      hint: { id: "Perlindungan pribadi atau keluarga", en: "Personal or family protection" },
    },
    {
      key: "group",
      label: { id: "PA Karyawan / Grup", en: "Employee / Group PA" },
      hint: { id: "Perlindungan seluruh karyawan", en: "Cover for all employees" },
    },
  ],
  inferType(pathname) {
    return /karyawan|grup|group|employee|pekerja|worker/.test(pathname.toLowerCase()) ? "group" : "individual";
  },
  companyOptionalFor: ["individual"],
  fields: [
    {
      key: "members",
      kind: "number",
      showFor: IND,
      label: { id: "Anggota keluarga yang diasuransikan", en: "Family members to insure" },
      placeholder: { id: "mis. 4", en: "e.g. 4" },
      suffix: { id: "orang", en: "people" },
    },
    {
      key: "occupation",
      kind: "text",
      showFor: IND,
      label: { id: "Pekerjaan / jabatan", en: "Occupation / job title" },
      placeholder: { id: "mis. supervisor produksi (untuk rate risiko)", en: "e.g. production supervisor (for risk rate)" },
    },
    {
      key: "employees",
      kind: "number",
      showFor: GRP,
      label: { id: "Karyawan yang diasuransikan", en: "Employees to insure" },
      placeholder: { id: "mis. 80", en: "e.g. 80" },
      suffix: { id: "orang", en: "people" },
    },
    {
      key: "jobClass",
      kind: "select",
      showFor: GRP,
      label: { id: "Klasifikasi pekerjaan", en: "Job classification" },
      placeholder: { id: "Pilih klasifikasi", en: "Select classification" },
      options: [
        { value: "office", label: { id: "Kantor / administrasi", en: "Office / admin" } },
        { value: "factory", label: { id: "Pabrik / lapangan", en: "Factory / field" } },
        { value: "highrisk", label: { id: "Konstruksi / galangan / risiko tinggi", en: "Construction / shipyard / high-risk" } },
      ],
    },
    {
      key: "sumInsured",
      kind: "money",
      label: { id: "Uang pertanggungan (UP) per orang", en: "Sum insured per person" },
      placeholder: { id: "mis. 500.000.000", en: "e.g. 500,000,000" },
    },
    {
      key: "period",
      kind: "period",
      showFor: GRP,
      optional: true,
      label: { id: "Periode polis", en: "Policy period" },
      placeholder: { id: "mis. 12", en: "e.g. 12" },
      defaultUnit: "month",
    },
    {
      key: "medical",
      kind: "select",
      optional: true,
      label: { id: "Butuh biaya medis akibat kecelakaan?", en: "Need accident medical expenses?" },
      placeholder: { id: "Pilih", en: "Select" },
      options: YES_NO,
    },
  ],
  flags: [
    { key: "heir", showFor: IND, label: { id: "Ahli waris sudah ditentukan", en: "Beneficiary already named" } },
    { key: "fieldwork", showFor: GRP, label: { id: "Sebagian besar pekerjaan di lapangan", en: "Mostly field work" } },
    { key: "foreign", label: { id: "Ada pekerja asing / perjalanan lintas negara", en: "Foreign workers / cross-border travel" } },
    { key: "bpjs", label: { id: "Sudah punya BPJS — ingin melengkapi", en: "Already have BPJS — want to supplement" } },
    { key: "urgent", label: { id: "Dibutuhkan mendesak", en: "Urgent" } },
  ],
  general: [
    {
      doc: { id: "Nomor WhatsApp aktif & identitas penanggung jawab", en: "Active WhatsApp number & contact person" },
      note: { id: "Untuk koordinasi dan penerbitan polis", en: "For coordination and policy issuance" },
      must: true,
    },
  ],
  specific: {
    individual: [
      {
        doc: { id: "Data diri sesuai KTP", en: "ID details" },
        note: { id: "Nama lengkap, tanggal lahir, alamat domisili, no. HP aktif", en: "Full name, date of birth, address, active phone number" },
        must: true,
      },
      {
        doc: { id: "Jabatan & deskripsi pekerjaan", en: "Job title & job description" },
        note: { id: "Untuk menentukan rate risiko", en: "To determine the risk rate" },
        must: true,
      },
      {
        doc: { id: "Nama & hubungan ahli waris", en: "Beneficiary name & relationship" },
        note: { id: "Dianjurkan, mempercepat klaim meninggal dunia", en: "Recommended; speeds up death claims" },
        must: false,
      },
    ],
    group: [
      {
        doc: { id: "Formulir proposal & data perusahaan", en: "Proposal form & company data" },
        note: { id: "NPWP, SIUP, dan NIB", en: "NPWP, SIUP, and NIB" },
        must: true,
      },
      {
        doc: { id: "Daftar karyawan", en: "Employee list" },
        note: { id: "Nama lengkap, tanggal lahir, dan jabatan", en: "Full name, date of birth, and job title" },
        must: true,
      },
      {
        doc: { id: "Klasifikasi pekerjaan", en: "Job classification" },
        note: { id: "Pabrik vs kantor, untuk rate premi", en: "Factory vs office, for the premium rate" },
        must: true,
      },
      {
        doc: { id: "Kriteria kelayakan karyawan", en: "Employee eligibility" },
        note: { id: "Usia 17–65 tahun; status tetap/kontrak/harian dideklarasikan", en: "Aged 17–65; permanent/contract/daily status declared" },
        must: true,
      },
    ],
  },
  disclaimer: {
    id: "Daftar bersifat umum. PA Individu dengan UP di bawah Rp 1 miliar umumnya tanpa medical check-up, kecuali ada riwayat penyakit tertentu. Peserta tidak sedang dalam kondisi cacat atau sakit parah sebelum polis dimulai.",
    en: "This list is a general guide. Individual PA with a sum insured below Rp 1 billion usually needs no medical check-up unless there is a relevant history. Insured persons must not have a disabling or serious pre-existing condition at inception.",
  },
  copy: {
    modalTitle: { id: "Permintaan Penawaran Asuransi PA", en: "Personal Accident Quote Request" },
    modalSubtitle: {
      id: "Isi data singkat peserta — kami analisa awal dan balas lewat WhatsApp.",
      en: "Share a few details about the insured — we'll assess and reply on WhatsApp.",
    },
    reqEyebrow: { id: "Persyaratan Pendaftaran", en: "Application Requirements" },
    reqTitle: { id: "Dokumen yang Disiapkan untuk Asuransi PA", en: "Documents to Prepare for Personal Accident Insurance" },
    reqSubtitle: {
      id: "Pilih jenis perlindungan untuk melihat dokumen yang dibutuhkan.",
      en: "Choose a cover type to see the documents needed.",
    },
    dateLabel: { id: "Target polis mulai berlaku", en: "Target policy start date" },
    clientLabel: { id: "Nama perusahaan induk / lokasi kerja", en: "Parent company / work location" },
    clientPh: { id: "mis. proyek atau lokasi kerja karyawan", en: "e.g. project or employees' work location" },
    notePh: {
      id: "mis. rentang usia peserta, manfaat tambahan yang dibutuhkan, atau lokasi kerja.",
      en: "e.g. age range, extra benefits needed, or work location.",
    },
    msgIntro: {
      id: "Halo Rio, saya ingin *meminta penawaran Asuransi Personal Accident*.",
      en: "Hello Rio, I would like to *request a Personal Accident Insurance quotation*.",
    },
    msgOutro: {
      id: "Mohon dibantu analisa awal, estimasi premi, dan daftar dokumen yang dibutuhkan. Terima kasih.",
      en: "Please help with an initial assessment, premium estimate, and the list of required documents. Thank you.",
    },
    unsureNote: { id: "", en: "" },
    companyLabel: { id: "Nama perusahaan", en: "Company name" },
  },
};

import type { Option, QuoteCluster } from "./types";

const YES_NO: Option[] = [
  { value: "yes", label: { id: "Ya", en: "Yes" } },
  { value: "no", label: { id: "Tidak", en: "No" } },
];

const IND = ["individual"];
const GRP = ["group"];
const TRV = ["travel"];
const PAONLY = ["individual", "group"];

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
    {
      key: "travel",
      label: { id: "Asuransi Perjalanan", en: "Travel Insurance" },
      hint: { id: "Perjalanan luar negeri & visa", en: "Overseas trips & visas" },
    },
  ],
  inferType(pathname) {
    const p = pathname.toLowerCase();
    if (/perjalanan|travel/.test(p)) return "travel";
    return /karyawan|grup|group|employee|pekerja|worker/.test(p) ? "group" : "individual";
  },
  companyOptionalFor: ["individual", "travel"],
  fields: [
    {
      key: "destination",
      kind: "select",
      showFor: TRV,
      label: { id: "Tujuan perjalanan", en: "Destination" },
      placeholder: { id: "Pilih tujuan", en: "Select destination" },
      options: [
        { value: "sgmy", label: { id: "Singapura / Malaysia", en: "Singapore / Malaysia" } },
        { value: "asia", label: { id: "Asia lainnya", en: "Other Asia" } },
        { value: "schengen", label: { id: "Eropa (Schengen)", en: "Europe (Schengen)" } },
        { value: "world", label: { id: "Dunia, tanpa AS / Kanada", en: "Worldwide, excl. USA / Canada" } },
        { value: "us", label: { id: "Termasuk AS / Kanada", en: "Including USA / Canada" } },
      ],
    },
    {
      key: "tripKind",
      kind: "select",
      showFor: TRV,
      label: { id: "Jenis polis", en: "Policy type" },
      placeholder: { id: "Pilih jenis polis", en: "Select policy type" },
      options: [
        { value: "single", label: { id: "Sekali perjalanan", en: "Single trip" } },
        { value: "annual", label: { id: "Tahunan (multi-trip)", en: "Annual (multi-trip)" } },
      ],
    },
    {
      key: "days",
      kind: "number",
      showFor: TRV,
      label: { id: "Lama perjalanan", en: "Trip length" },
      placeholder: { id: "mis. 7", en: "e.g. 7" },
      suffix: { id: "hari", en: "days" },
    },
    {
      key: "travelers",
      kind: "number",
      showFor: TRV,
      label: { id: "Jumlah peserta", en: "Number of travellers" },
      placeholder: { id: "mis. 4", en: "e.g. 4" },
      suffix: { id: "orang", en: "people" },
    },
    {
      key: "ages",
      kind: "text",
      showFor: TRV,
      label: { id: "Usia masing-masing peserta", en: "Age of each traveller" },
      placeholder: { id: "mis. 38, 35, 8", en: "e.g. 38, 35, 8" },
    },
    {
      key: "purpose",
      kind: "select",
      showFor: TRV,
      optional: true,
      label: { id: "Tujuan utama", en: "Main purpose" },
      placeholder: { id: "Pilih tujuan", en: "Select purpose" },
      options: [
        { value: "leisure", label: { id: "Liburan", en: "Leisure" } },
        { value: "business", label: { id: "Perjalanan dinas", en: "Business" } },
        { value: "study", label: { id: "Studi / tinggal lama", en: "Study / long stay" } },
      ],
    },
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
      showFor: PAONLY,
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
      showFor: PAONLY,
      optional: true,
      label: { id: "Butuh biaya medis akibat kecelakaan?", en: "Need accident medical expenses?" },
      placeholder: { id: "Pilih", en: "Select" },
      options: YES_NO,
    },
  ],
  flags: [
    { key: "heir", showFor: IND, label: { id: "Ahli waris sudah ditentukan", en: "Beneficiary already named" } },
    { key: "fieldwork", showFor: GRP, label: { id: "Sebagian besar pekerjaan di lapangan", en: "Mostly field work" } },
    { key: "schengen", showFor: TRV, label: { id: "Untuk pengajuan visa Schengen", en: "For a Schengen visa application" } },
    { key: "cancellation", showFor: TRV, label: { id: "Perlu perlindungan pembatalan perjalanan", en: "Need trip cancellation cover" } },
    { key: "adventure", showFor: TRV, label: { id: "Ada aktivitas petualangan / olahraga berisiko", en: "Adventure activities / high-risk sports planned" } },
    { key: "seniorkid", showFor: TRV, label: { id: "Peserta termasuk anak atau berusia lanjut", en: "Travellers include children or seniors" } },
    { key: "medicalq", showFor: TRV, label: { id: "Ingin menanyakan soal kondisi medis yang sudah ada", en: "Want to ask about a pre-existing medical condition" } },
    { key: "foreign", showFor: PAONLY, label: { id: "Ada pekerja asing / perjalanan lintas negara", en: "Foreign workers / cross-border travel" } },
    { key: "bpjs", showFor: PAONLY, label: { id: "Sudah punya BPJS — ingin melengkapi", en: "Already have BPJS — want to supplement" } },
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
    travel: [
      {
        doc: { id: "Paspor peserta", en: "Travellers' passports" },
        note: { id: "Halaman data diri; nama pada polis harus sesuai paspor", en: "Data page; the name on the policy must match the passport" },
        must: true,
      },
      {
        doc: { id: "Rencana perjalanan & bukti pemesanan", en: "Itinerary & booking proof" },
        note: { id: "Tanggal berangkat dan pulang, tujuan, tiket atau hotel", en: "Departure and return dates, destinations, tickets or hotel" },
        must: true,
      },
      {
        doc: { id: "Persyaratan visa / kedutaan", en: "Visa / embassy requirements" },
        note: { id: "Untuk Schengen, kirim persyaratan asuransi dari kedutaan tujuan", en: "For Schengen, send the insurance requirements from the destination embassy" },
        must: false,
      },
      {
        doc: { id: "Informasi kondisi medis", en: "Medical condition information" },
        note: { id: "Hanya bila ingin menanyakan kondisi yang sudah ada", en: "Only if you want to ask about a pre-existing condition" },
        must: false,
      },
    ],
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
    id: "Daftar bersifat umum. PA Individu dengan UP di bawah Rp 1 miliar umumnya tanpa medical check-up, kecuali ada riwayat penyakit tertentu. Peserta tidak sedang dalam kondisi cacat atau sakit parah sebelum polis dimulai. Untuk Asuransi Perjalanan, polis dibeli sebelum keberangkatan; ketentuan kondisi medis yang sudah ada, batas usia, dan zona mengikuti masing-masing penanggung.",
    en: "This list is a general guide. Individual PA with a sum insured below Rp 1 billion usually needs no medical check-up unless there is a relevant history. Insured persons must not have a disabling or serious pre-existing condition at inception. For Travel Insurance, the policy is bought before departure; pre-existing conditions, age limits and zones follow each insurer.",
  },
  copy: {
    modalTitle: { id: "Permintaan Penawaran Asuransi PA / Perjalanan", en: "Personal Accident / Travel Quote Request" },
    modalSubtitle: {
      id: "Isi data singkat peserta — kami analisa awal dan balas lewat WhatsApp.",
      en: "Share a few details about the insured — we'll assess and reply on WhatsApp.",
    },
    reqEyebrow: { id: "Persyaratan Pendaftaran", en: "Application Requirements" },
    reqTitle: { id: "Dokumen yang Disiapkan untuk Asuransi PA / Perjalanan", en: "Documents to Prepare for Personal Accident / Travel Insurance" },
    reqSubtitle: {
      id: "Pilih jenis perlindungan untuk melihat dokumen yang dibutuhkan.",
      en: "Choose a cover type to see the documents needed.",
    },
    dateLabel: { id: "Target polis mulai berlaku / tanggal berangkat", en: "Target policy start / departure date" },
    clientLabel: { id: "Nama perusahaan induk / lokasi kerja", en: "Parent company / work location" },
    clientPh: { id: "mis. proyek atau lokasi kerja karyawan", en: "e.g. project or employees' work location" },
    notePh: {
      id: "mis. rentang usia peserta, manfaat tambahan yang dibutuhkan, atau lokasi kerja.",
      en: "e.g. age range, extra benefits needed, or work location.",
    },
    msgIntro: {
      id: "Halo Rio, saya ingin *meminta penawaran Asuransi Personal Accident / Perjalanan*.",
      en: "Hello Rio, I would like to *request a Personal Accident / Travel Insurance quotation*.",
    },
    msgOutro: {
      id: "Mohon dibantu analisa awal, estimasi premi, dan daftar dokumen yang dibutuhkan. Terima kasih.",
      en: "Please help with an initial assessment, premium estimate, and the list of required documents. Thank you.",
    },
    unsureNote: { id: "", en: "" },
    companyLabel: { id: "Nama perusahaan", en: "Company name" },
  },
};

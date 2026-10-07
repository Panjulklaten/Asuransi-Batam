import type { QuoteCluster, Requirement } from "./types";

const GENERAL: Requirement[] = [
  {
    doc: { id: "Akta pendirian & perubahan terakhir", en: "Deed of establishment & latest amendment" },
    note: { id: "Beserta SK pengesahan Kemenkumham", en: "With the Ministry of Law approval decree" },
    must: true,
  },
  {
    doc: { id: "NIB & izin usaha sesuai bidang", en: "NIB & business licence for the field" },
    note: { id: "Termasuk SBU/sertifikat yang relevan dengan pekerjaan", en: "Including any SBU/certificate relevant to the work" },
    must: true,
  },
  {
    doc: { id: "NPWP perusahaan", en: "Company tax ID (NPWP)" },
    note: { id: "SPT Tahunan terakhir bila diminta penanggung", en: "Latest annual tax return if the surety asks" },
    must: true,
  },
  {
    doc: { id: "KTP & NPWP direksi / pemilik", en: "ID & NPWP of directors / owners" },
    note: { id: "Pengurus dan pemegang saham utama", en: "Management and main shareholders" },
    must: true,
  },
  {
    doc: { id: "Laporan keuangan 2 tahun terakhir", en: "Financial statements, last 2 years" },
    note: { id: "Dasar penilaian kapasitas jaminan", en: "Basis for assessing guarantee capacity" },
    must: true,
  },
  {
    doc: { id: "Rekening koran 3–6 bulan terakhir", en: "Bank statements, last 3–6 months" },
    note: { id: "Menyesuaikan kebijakan penanggung & nilai jaminan", en: "Depends on the surety's policy and guarantee value" },
    must: false,
  },
  {
    doc: { id: "Daftar pengalaman proyek", en: "Project track record" },
    note: { id: "Memperkuat analisa, terutama untuk nilai besar", en: "Strengthens the assessment, esp. for larger values" },
    must: false,
  },
  {
    doc: { id: "Perjanjian ganti rugi (indemnity)", en: "Indemnity agreement" },
    note: { id: "Ditandatangani saat penerbitan oleh pihak berwenang", en: "Signed at issuance by authorised signatories" },
    must: true,
  },
];

const SPECIFIC: Record<string, Requirement[]> = {
  bid: [
    {
      doc: { id: "Undangan tender / dokumen pemilihan", en: "Tender invitation / bidding documents" },
      note: { id: "Memuat nilai & masa berlaku jaminan yang diminta", en: "States the required guarantee value and validity" },
      must: true,
    },
    {
      doc: { id: "Format jaminan dari panitia / pemberi kerja", en: "Guarantee format from the committee / employer" },
      note: { id: "Agar redaksi bond sesuai ketentuan tender", en: "So the wording matches the tender rules" },
      must: true,
    },
    {
      doc: { id: "Nilai penawaran / HPS", en: "Bid value / owner's estimate" },
      note: { id: "Acuan menentukan nilai jaminan penawaran", en: "Reference for the bid guarantee value" },
      must: false,
    },
  ],
  performance: [
    {
      doc: { id: "Kontrak / SPK / SPPBJ", en: "Contract / work order / award letter" },
      note: { id: "Nilai kontrak, lingkup, dan masa pekerjaan", en: "Contract value, scope, and duration" },
      must: true,
    },
    {
      doc: { id: "Format jaminan pelaksanaan dari pemberi kerja", en: "Performance guarantee format from the employer" },
      note: { id: "Menyesuaikan redaksi dan masa berlaku", en: "Aligns wording and validity period" },
      must: true,
    },
    {
      doc: { id: "Jadwal pelaksanaan (time schedule)", en: "Work schedule" },
      note: { id: "Dasar menentukan masa berlaku bond", en: "Basis for the bond's validity period" },
      must: false,
    },
  ],
  advance: [
    {
      doc: { id: "Kontrak / SPK beserta ketentuan uang muka", en: "Contract with down-payment clause" },
      note: { id: "Persentase dan skema pengembalian uang muka", en: "Percentage and repayment scheme" },
      must: true,
    },
    {
      doc: { id: "Surat permohonan uang muka", en: "Down-payment request letter" },
      note: { id: "Diajukan ke pemberi kerja", en: "Addressed to the employer" },
      must: true,
    },
    {
      doc: { id: "Rencana penggunaan uang muka", en: "Down-payment usage plan" },
      note: { id: "Bila diminta penanggung / pemberi kerja", en: "If requested by the surety / employer" },
      must: false,
    },
  ],
  maintenance: [
    {
      doc: { id: "Berita acara serah terima pertama (PHO)", en: "Provisional hand-over certificate (PHO)" },
      note: { id: "Penanda dimulainya masa pemeliharaan", en: "Marks the start of the maintenance period" },
      must: true,
    },
    {
      doc: { id: "Kontrak & ketentuan masa pemeliharaan", en: "Contract & maintenance period clause" },
      note: { id: "Lama masa pemeliharaan dan nilai jaminan", en: "Length of the period and guarantee value" },
      must: true,
    },
    {
      doc: { id: "Format jaminan pemeliharaan", en: "Maintenance guarantee format" },
      note: { id: "Dari pemberi kerja bila ada", en: "From the employer, if provided" },
      must: false,
    },
  ],
  custom: [
    {
      doc: { id: "Dasar fasilitas kepabeanan", en: "Customs facility basis" },
      note: { id: "OB 23 / impor sementara, KITE, atau Kawasan Berikat", en: "OB 23 / temporary import, KITE, or bonded zone" },
      must: true,
    },
    {
      doc: { id: "Daftar barang, invoice & packing list", en: "Goods list, invoice & packing list" },
      note: { id: "Dasar menghitung estimasi bea masuk dan PPN", en: "Basis for estimating import duty and VAT" },
      must: true,
    },
    {
      doc: { id: "Estimasi nilai jaminan & jangka waktu fasilitas", en: "Guarantee value estimate & facility period" },
      note: { id: "Termasuk rencana re-ekspor", en: "Including the re-export plan" },
      must: true,
    },
    {
      doc: { id: "Format jaminan dari kantor Bea Cukai", en: "Guarantee format from the Customs office" },
      note: { id: "Bila sudah ada arahan dari kantor setempat", en: "If the local office has already given guidance" },
      must: false,
    },
  ],
};


export const SURETY: QuoteCluster = {
  key: "surety",
  typeLegend: { id: "Jenis surety bond", en: "Surety bond type" },
  typeLine: { id: "Jenis bond", en: "Bond type" },
  types: [
    { key: "bid", label: { id: "Bid Bond", en: "Bid Bond" }, hint: { id: "Jaminan penawaran tender", en: "Tender bid guarantee" } },
    { key: "performance", label: { id: "Performance Bond", en: "Performance Bond" }, hint: { id: "Jaminan pelaksanaan kontrak", en: "Contract performance" } },
    { key: "advance", label: { id: "Advance Payment Bond", en: "Advance Payment Bond" }, hint: { id: "Jaminan uang muka", en: "Down-payment guarantee" } },
    { key: "maintenance", label: { id: "Maintenance Bond", en: "Maintenance Bond" }, hint: { id: "Jaminan masa pemeliharaan", en: "Defects liability period" } },
    { key: "custom", label: { id: "Custom Bond", en: "Custom Bond" }, hint: { id: "Jaminan kepabeanan (OB 23, KITE, KB)", en: "Customs guarantee (OB 23, KITE, bonded zone)" } },
    { key: "unsure", label: { id: "Belum yakin", en: "Not sure yet" }, hint: { id: "Bantu saya menentukan", en: "Help me decide" } },
  ],
  inferType(pathname) {
    const p = pathname.toLowerCase();
    const rules: [RegExp, string][] = [
      [/advance-payment/, "advance"],
      [/maintenance-bond/, "maintenance"],
      [/perbedaan-bid-bond|difference-between-bid-bond|biaya-premi-surety/, "unsure"],
      [/bid-bond|cara-mendapatkan-surety-bond-tender/, "bid"],
      [/performance-bond/, "performance"],
      [/custom-bond|ob23|kite|galangan|temporary-import/, "custom"],
    ];
    for (const [re, key] of rules) if (re.test(p)) return key;
    return "unsure";
  },
  fields: [
    {
      key: "scope",
      kind: "segmented",
      label: { id: "Jenis proyek", en: "Project type" },
      default: "gov",
      options: [
        { value: "gov", icon: "gov", label: { id: "Pemerintah / BUMN", en: "Government / SOE" } },
        { value: "private", icon: "private", label: { id: "Swasta", en: "Private" } },
      ],
    },
    {
      key: "amount",
      kind: "money",
      label: { id: "Jumlah jaminan", en: "Guarantee amount" },
      placeholder: { id: "mis. 2.500.000.000", en: "e.g. 2,500,000,000" },
    },
    {
      key: "period",
      kind: "period",
      label: { id: "Lama periode", en: "Period" },
      placeholder: { id: "mis. 12", en: "e.g. 12" },
      defaultUnit: "month",
    },
  ],
  flags: [
    { key: "history", label: { id: "Pernah menerbitkan surety bond sebelumnya", en: "Has issued a surety bond before" } },
    { key: "fin2y", label: { id: "Laporan keuangan 2 tahun terakhir tersedia", en: "2 years of financial statements available" } },
    { key: "license", label: { id: "Izin usaha / SBU sesuai bidang tersedia", en: "Relevant licence / SBU available" } },
    { key: "noCollateral", label: { id: "Ingin tanpa agunan tunai", en: "Prefer no cash collateral" } },
    { key: "urgent", label: { id: "Dibutuhkan mendesak (≤ 3 hari kerja)", en: "Urgent (≤ 3 working days)" } },
    { key: "multi", label: { id: "Perlu lebih dari satu jenis bond", en: "Need more than one bond type" } },
  ],
  general: GENERAL,
  specific: SPECIFIC,
  disclaimer: {
    id: "Daftar bersifat umum. Kebutuhan akhir menyesuaikan kebijakan penanggung, nilai jaminan, dan profil perusahaan. Proses penerbitan umumnya 1–3 hari kerja setelah dokumen lengkap.",
    en: "This list is a general guide. Final requirements depend on the surety's policy, guarantee value, and company profile. Issuance usually takes 1–3 working days once documents are complete.",
  },
  copy: {
    modalTitle: { id: "Permintaan Penawaran Surety Bond", en: "Surety Bond Quote Request" },
    modalSubtitle: {
      id: "Isi data singkat — kami analisa awal dan balas lewat WhatsApp.",
      en: "Fill in a few details — we'll do an initial assessment and reply on WhatsApp.",
    },
    reqEyebrow: { id: "Persyaratan Penerbitan", en: "Issuance Requirements" },
    reqTitle: { id: "Dokumen yang Disiapkan untuk Surety Bond", en: "Documents to Prepare for a Surety Bond" },
    reqSubtitle: {
      id: "Pilih jenis bond untuk melihat dokumen khususnya. Dokumen pemohon berlaku untuk semua jenis.",
      en: "Choose a bond type to see its specific documents. Applicant documents apply to every type.",
    },
    dateLabel: { id: "Target tanggal terbit", en: "Target issuance date" },
    clientLabel: { id: "Pemberi kerja / nama proyek", en: "Employer / project name" },
    clientPh: { id: "mis. Dinas PUPR Kota Batam / PT ABC", en: "e.g. Batam City Public Works / PT ABC" },
    notePh: {
      id: "mis. lokasi proyek, nilai kontrak, kendala agunan, atau info lain yang menurut Anda penting.",
      en: "e.g. project location, contract value, collateral concerns, or anything else you think matters.",
    },
    msgIntro: {
      id: "Halo Rio, saya ingin *meminta penawaran Surety Bond*.",
      en: "Hello Rio, I would like to *request a Surety Bond quotation*.",
    },
    msgOutro: {
      id: "Mohon dibantu analisa awal, estimasi premi, dan daftar dokumen yang dibutuhkan. Terima kasih.",
      en: "Please help with an initial assessment, premium estimate, and the list of required documents. Thank you.",
    },
    unsureNote: {
      id: "Belum yakin jenis bond yang dibutuhkan? Lanjutkan saja — ceritakan kebutuhan Anda di langkah berikut.",
      en: "Not sure which bond you need? Just continue — tell us about your needs in the next step.",
    },
  },
};

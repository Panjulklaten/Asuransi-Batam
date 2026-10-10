import type { QuoteCluster } from "./types";

const PUBLIC = ["public"];
const FFL = ["ffl"];
const B3 = ["b3"];
const ELPL = ["elpl"];

export const LIABILITY: QuoteCluster = {
  key: "liability",
  noHeroWhatsApp: true,
  typeLegend: { id: "Jenis liability", en: "Liability type" },
  typeLine: { id: "Jenis liability", en: "Liability type" },
  types: [
    {
      key: "public",
      label: { id: "Public Liability", en: "Public Liability" },
      hint: { id: "Subkon galangan, kontraktor & usaha umum", en: "Shipyard subcons, contractors & general business" },
    },
    {
      key: "ffl",
      label: { id: "Freight Forwarders Liability", en: "Freight Forwarders Liability" },
      hint: { id: "Forwarder, PPJK, EMKL & NVOCC", en: "Forwarders, customs brokers, EMKL & NVOCC" },
    },
    {
      key: "b3",
      label: { id: "Limbah B3", en: "Hazardous Waste (B3)" },
      hint: { id: "Pencemaran & tanggung gugat limbah B3", en: "Pollution & hazardous-waste liability" },
    },
    {
      key: "elpl",
      label: { id: "Employers' & Product Liability", en: "Employers' & Product Liability" },
      hint: { id: "Tuntutan karyawan & gugatan atas produk", en: "Employee claims & product claims" },
    },
  ],
  inferType(pathname) {
    const p = pathname.toLowerCase();
    if (/employer|product-liability|elpl/.test(p)) return "elpl";
    if (/freight|forwarder|ffl/.test(p)) return "ffl";
    if (/b3|limbah|waste|hazardous/.test(p)) return "b3";
    return "public";
  },
  fields: [
    {
      key: "business",
      kind: "text",
      label: { id: "Bidang usaha / ruang lingkup pekerjaan", en: "Business activity / scope of work" },
      placeholder: { id: "mis. sandblasting & painting di galangan", en: "e.g. sandblasting & painting at a shipyard" },
    },
    {
      key: "limit",
      kind: "money",
      label: { id: "Limit pertanggungan yang diinginkan", en: "Desired limit of liability" },
      placeholder: { id: "mis. 5.000.000.000", en: "e.g. 5,000,000,000" },
    },
    {
      key: "period",
      kind: "period",
      label: { id: "Periode polis", en: "Policy period" },
      placeholder: { id: "mis. 12", en: "e.g. 12" },
      defaultUnit: "month",
    },
    // ── Public Liability ──
    {
      key: "employees",
      kind: "number",
      showFor: ["public", "ffl", "elpl"],
      optional: true,
      label: { id: "Jumlah karyawan", en: "Number of employees" },
      placeholder: { id: "mis. 40", en: "e.g. 40" },
      suffix: { id: "orang", en: "people" },
    },
    {
      key: "principal",
      kind: "text",
      showFor: PUBLIC,
      optional: true,
      label: { id: "Principal / pemberi kerja (Additional Insured)", en: "Principal / employer (Additional Insured)" },
      placeholder: { id: "Nama principal, bila diminta", en: "Principal name, if required" },
    },
    // ── Freight Forwarders ──
    {
      key: "serviceType",
      kind: "select",
      showFor: FFL,
      label: { id: "Jenis usaha", en: "Business type" },
      placeholder: { id: "Pilih jenis usaha", en: "Select business type" },
      options: [
        { value: "forwarder", label: { id: "Freight forwarder / NVOCC", en: "Freight forwarder / NVOCC" } },
        { value: "ppjk", label: { id: "PPJK (kepabeanan)", en: "Customs broker (PPJK)" } },
        { value: "emkl", label: { id: "EMKL / gudang / trucking", en: "EMKL / warehouse / trucking" } },
      ],
    },
    {
      key: "cargoValue",
      kind: "money",
      showFor: FFL,
      optional: true,
      label: { id: "Estimasi nilai kargo ditangani per tahun", en: "Estimated cargo value handled per year" },
      placeholder: { id: "mis. 50.000.000.000", en: "e.g. 50,000,000,000" },
    },
    // ── Employers' & Product Liability ──
    {
      key: "coverNeed",
      kind: "select",
      showFor: ELPL,
      label: { id: "Perlindungan yang dibutuhkan", en: "Cover needed" },
      placeholder: { id: "Pilih kebutuhan", en: "Select what you need" },
      options: [
        { value: "el", label: { id: "Employers' Liability saja", en: "Employers' Liability only" } },
        { value: "pl", label: { id: "Product Liability saja", en: "Product Liability only" } },
        { value: "both", label: { id: "Keduanya", en: "Both" } },
      ],
    },
    {
      key: "products",
      kind: "text",
      showFor: ELPL,
      optional: true,
      label: { id: "Produk yang dihasilkan / dijual", en: "Products made / sold" },
      placeholder: { id: "mis. komponen elektronik, kabel, peralatan kapal", en: "e.g. electronic components, cables, marine equipment" },
    },
    {
      key: "turnover",
      kind: "money",
      showFor: ELPL,
      optional: true,
      label: { id: "Omzet tahunan (untuk Product Liability)", en: "Annual turnover (for Product Liability)" },
      placeholder: { id: "mis. 25.000.000.000", en: "e.g. 25,000,000,000" },
    },
    {
      key: "markets",
      kind: "text",
      showFor: ELPL,
      optional: true,
      label: { id: "Negara tujuan penjualan / ekspor", en: "Sales / export destinations" },
      placeholder: { id: "mis. Singapura, Malaysia, AS", en: "e.g. Singapore, Malaysia, USA" },
    },
    // ── Limbah B3 ──
    {
      key: "wasteType",
      kind: "text",
      showFor: B3,
      label: { id: "Jenis limbah B3", en: "Type of hazardous waste" },
      placeholder: { id: "mis. oli bekas, sludge, pelarut", en: "e.g. used oil, sludge, solvents" },
    },
    {
      key: "volume",
      kind: "number",
      showFor: B3,
      optional: true,
      label: { id: "Volume limbah per bulan", en: "Waste volume per month" },
      placeholder: { id: "mis. 20", en: "e.g. 20" },
      suffix: { id: "ton", en: "tonnes" },
    },
    {
      key: "role",
      kind: "select",
      showFor: B3,
      optional: true,
      label: { id: "Peran fasilitas", en: "Facility role" },
      placeholder: { id: "Pilih peran", en: "Select role" },
      options: [
        { value: "generator", label: { id: "Penghasil limbah", en: "Waste generator" } },
        { value: "collector", label: { id: "Pengumpul / penyimpan", en: "Collector / storage" } },
        { value: "transporter", label: { id: "Pengangkut / pengolah", en: "Transporter / processor" } },
      ],
    },
  ],
  flags: [
    { key: "additional", showFor: PUBLIC, label: { id: "Principal meminta Additional Insured", en: "Principal requires Additional Insured" } },
    { key: "permit", showFor: B3, label: { id: "Izin lingkungan & Pertek tersedia", en: "Environmental permit & technical approval available" } },
    { key: "bpjs", showFor: ELPL, label: { id: "Seluruh karyawan terdaftar BPJS Ketenagakerjaan", en: "All employees enrolled in BPJS Ketenagakerjaan" } },
    { key: "usexport", showFor: ELPL, label: { id: "Produk diekspor ke AS / Kanada", en: "Products exported to the USA / Canada" } },
    { key: "coi", label: { id: "Perlu Certificate of Insurance (COI)", en: "Need a Certificate of Insurance (COI)" } },
    { key: "contract", label: { id: "Polis jadi syarat kontrak / kualifikasi vendor", en: "Policy is a contract / vendor-qualification requirement" } },
    { key: "claims", label: { id: "Ada riwayat klaim 3 tahun terakhir", en: "Claims history in the last 3 years" } },
    { key: "urgent", label: { id: "Dibutuhkan mendesak (mobilisasi proyek)", en: "Urgent (project mobilisation)" } },
  ],
  general: [
    {
      doc: { id: "Legalitas perusahaan", en: "Company legal documents" },
      note: { id: "NIB, SIUP/TDP, NPWP, dan Akta Pendirian", en: "NIB, SIUP/TDP, NPWP, and deed of establishment" },
      must: true,
    },
    {
      doc: { id: "Riwayat klaim 3 tahun terakhir", en: "Claims history, last 3 years" },
      note: { id: "Bila ada; menjadi dasar penilaian risiko", en: "If any; basis for risk assessment" },
      must: false,
    },
  ],
  specific: {
    public: [
      {
        doc: { id: "Profil bisnis", en: "Business profile" },
        note: { id: "Kegiatan usaha, jumlah karyawan, luas area operasional", en: "Activity, headcount, operating area" },
        must: true,
      },
      {
        doc: { id: "Kontrak / WO & scope of work dengan principal", en: "Contract / WO & scope of work with principal" },
        note: { id: "Untuk subkontraktor galangan atau proyek", en: "For shipyard or project subcontractors" },
        must: false,
      },
      {
        doc: { id: "Nama & alamat principal", en: "Principal name & address" },
        note: { id: "Bila principal meminta Additional Insured", en: "If the principal requires Additional Insured" },
        must: false,
      },
    ],
    ffl: [
      {
        doc: { id: "Izin usaha sesuai bidang", en: "Business licence for the field" },
        note: { id: "Forwarder / PPJK / EMKL / NVOCC", en: "Forwarder / PPJK / EMKL / NVOCC" },
        must: true,
      },
      {
        doc: { id: "Profil operasional", en: "Operating profile" },
        note: { id: "Jenis layanan, volume dan nilai kargo yang ditangani", en: "Services, cargo volume and value handled" },
        must: true,
      },
      {
        doc: { id: "Format COI dari prinsipal / klien", en: "COI format from principal / client" },
        note: { id: "Bila disyaratkan dalam kontrak layanan", en: "If required in the service contract" },
        must: false,
      },
    ],
    elpl: [
      {
        doc: { id: "Profil usaha & data karyawan", en: "Business profile & employee data" },
        note: { id: "Kegiatan usaha, jumlah karyawan, dan total gaji per tahun", en: "Activity, headcount, and total annual payroll" },
        must: true,
      },
      {
        doc: { id: "Bukti kepesertaan BPJS Ketenagakerjaan", en: "Proof of BPJS Ketenagakerjaan enrolment" },
        note: { id: "Untuk Employers' Liability", en: "For Employers' Liability" },
        must: false,
      },
      {
        doc: { id: "Deskripsi produk, omzet & negara tujuan", en: "Product description, turnover & destinations" },
        note: { id: "Untuk Product Liability; sebutkan bila ada ekspor ke AS / Kanada", en: "For Product Liability; state any exports to the USA / Canada" },
        must: false,
      },
      {
        doc: { id: "Riwayat komplain produk & kecelakaan kerja", en: "Product complaint & workplace accident history" },
        note: { id: "3 tahun terakhir, bila ada", en: "Last 3 years, if any" },
        must: false,
      },
      {
        doc: { id: "Persyaratan buyer / principal", en: "Buyer / principal requirements" },
        note: { id: "Format COI atau limit minimum bila disyaratkan kontrak", en: "COI format or minimum limit if the contract requires it" },
        must: false,
      },
    ],
    b3: [
      {
        doc: { id: "Dokumen lingkungan", en: "Environmental documents" },
        note: { id: "Persetujuan Lingkungan (AMDAL/UKL-UPL), Pertek B3, Neraca Limbah B3", en: "Environmental approval (AMDAL/UKL-UPL), B3 technical approval, waste balance" },
        must: true,
      },
      {
        doc: { id: "Manifest limbah B3 6 bulan terakhir", en: "B3 waste manifests, last 6 months" },
        note: { id: "Dasar volume dan jenis limbah", en: "Basis of waste volume and type" },
        must: true,
      },
      {
        doc: { id: "Data teknis fasilitas", en: "Facility technical data" },
        note: { id: "Layout penyimpanan, kapasitas tangki, jenis & volume limbah per bulan", en: "Storage layout, tank capacity, waste type & monthly volume" },
        must: true,
      },
      {
        doc: { id: "Rekam jejak insiden lingkungan", en: "Environmental incident record" },
        note: { id: "3 tahun terakhir, bila ada", en: "Last 3 years, if any" },
        must: false,
      },
    ],
  },
  disclaimer: {
    id: "Daftar bersifat umum. Dengan dokumen lengkap, Public Liability umumnya terbit 1–3 hari kerja; underwriting limbah B3 umumnya 7–14 hari kerja. Employers' / Product Liability menjalani underwriting yang lebih panjang, estimasi waktunya kami sampaikan setelah data lengkap.",
    en: "This list is a general guide. With complete documents, Public Liability is usually issued in 1–3 working days; hazardous-waste underwriting usually takes 7–14 working days. Employers' / Product Liability goes through longer underwriting; we will give a time estimate once your details are complete.",
  },
  copy: {
    modalTitle: { id: "Permintaan Penawaran Asuransi Liability", en: "Liability Insurance Quote Request" },
    modalSubtitle: {
      id: "Isi profil usaha Anda — kami analisa awal dan balas lewat WhatsApp.",
      en: "Share your business profile — we'll assess and reply on WhatsApp.",
    },
    reqEyebrow: { id: "Persyaratan Penerbitan", en: "Issuance Requirements" },
    reqTitle: { id: "Dokumen yang Disiapkan untuk Asuransi Liability", en: "Documents to Prepare for Liability Insurance" },
    reqSubtitle: {
      id: "Pilih jenis liability untuk melihat dokumen khususnya. Dokumen perusahaan berlaku untuk semua jenis.",
      en: "Choose a liability type to see its specific documents. Company documents apply to every type.",
    },
    dateLabel: { id: "Tanggal mulai polis", en: "Policy start date" },
    clientLabel: { id: "Proyek / principal", en: "Project / principal" },
    clientPh: { id: "mis. proyek galangan PT. Paxocean", en: "e.g. shipyard project for the principal" },
    notePh: {
      id: "mis. kebutuhan wording khusus, lokasi operasional, atau info lain yang menurut Anda penting.",
      en: "e.g. special wording needed, operating location, or anything else you think matters.",
    },
    msgIntro: {
      id: "Halo Rio, saya ingin *meminta penawaran Asuransi Liability*.",
      en: "Hello Rio, I would like to *request a Liability Insurance quotation*.",
    },
    msgOutro: {
      id: "Mohon dibantu analisa awal, estimasi premi, dan daftar dokumen yang dibutuhkan. Terima kasih.",
      en: "Please help with an initial assessment, premium estimate, and the list of required documents. Thank you.",
    },
    unsureNote: { id: "", en: "" },
  },
};

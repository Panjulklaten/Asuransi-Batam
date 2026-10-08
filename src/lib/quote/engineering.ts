import type { QuoteCluster } from "./types";

const CAR = ["car"];
const EAR = ["ear"];
const CECR = ["cecr"];

export const ENGINEERING: QuoteCluster = {
  key: "engineering",
  typeLegend: { id: "Jenis asuransi engineering", en: "Engineering insurance type" },
  typeLine: { id: "Jenis asuransi", en: "Insurance type" },
  noHeroWhatsApp: true,
  types: [
    {
      key: "car",
      label: { id: "Contractor All Risk (CAR)", en: "Contractor All Risk (CAR)" },
      hint: { id: "Proyek konstruksi gedung, jalan, infrastruktur", en: "Building, road & infrastructure construction" },
    },
    {
      key: "ear",
      label: { id: "Erection All Risk (EAR)", en: "Erection All Risk (EAR)" },
      hint: { id: "Pemasangan mesin, plant & instalasi", en: "Machinery, plant & installation erection" },
    },
    {
      key: "cecr",
      label: { id: "Civil Engineering Completed Risk (CECR)", en: "Civil Engineering Completed Risk (CECR)" },
      hint: { id: "Talud, dermaga & infrastruktur sipil pasca-konstruksi", en: "Post-construction revetments, jetties & civil assets" },
    },
  ],
  inferType(pathname) {
    const p = pathname.toLowerCase();
    if (/cecr|completed-risk/.test(p)) return "cecr";
    if (/car-(dan|and|vs)-ear/.test(p)) return "car"; // artikel perbandingan
    if (/erection|(^|[-/])ear([-/]|$)/.test(p)) return "ear";
    return "car";
  },
  fields: [
    {
      key: "location",
      kind: "text",
      label: { id: "Lokasi proyek / aset", en: "Project / asset location" },
      placeholder: { id: "mis. Kabil, Batam / Tanjung Uncang", en: "e.g. Kabil, Batam / Tanjung Uncang" },
    },
    // ── CAR ──
    {
      key: "projectType",
      kind: "select",
      showFor: CAR,
      optional: true,
      label: { id: "Jenis proyek", en: "Project type" },
      placeholder: { id: "Pilih jenis proyek", en: "Select project type" },
      options: [
        { value: "building", label: { id: "Gedung / bangunan", en: "Building" } },
        { value: "road", label: { id: "Jalan / jembatan", en: "Road / bridge" } },
        { value: "infra", label: { id: "Infrastruktur / dermaga", en: "Infrastructure / jetty" } },
        { value: "industrial", label: { id: "Pabrik / industri", en: "Factory / industrial" } },
      ],
    },
    {
      key: "contractValue",
      kind: "money",
      showFor: ["car", "ear"],
      label: { id: "Nilai kontrak proyek", en: "Contract value" },
      placeholder: { id: "mis. 25.000.000.000", en: "e.g. 25,000,000,000" },
    },
    // ── EAR ──
    {
      key: "installation",
      kind: "text",
      showFor: EAR,
      label: { id: "Jenis mesin / instalasi yang dipasang", en: "Machinery / installation being erected" },
      placeholder: { id: "mis. boiler, turbin, conveyor, plant", en: "e.g. boiler, turbine, conveyor, plant" },
    },
    {
      key: "equipmentValue",
      kind: "money",
      showFor: EAR,
      optional: true,
      label: { id: "Nilai mesin / peralatan yang dipasang", en: "Value of machinery / equipment erected" },
      placeholder: { id: "mis. 10.000.000.000", en: "e.g. 10,000,000,000" },
    },
    {
      key: "testing",
      kind: "select",
      showFor: EAR,
      optional: true,
      label: { id: "Ada testing & commissioning?", en: "Testing & commissioning involved?" },
      placeholder: { id: "Pilih", en: "Select" },
      options: [
        { value: "yes", label: { id: "Ya", en: "Yes" } },
        { value: "no", label: { id: "Tidak", en: "No" } },
      ],
    },
    // ── CECR ──
    {
      key: "assetType",
      kind: "select",
      showFor: CECR,
      label: { id: "Jenis aset sipil", en: "Civil asset type" },
      placeholder: { id: "Pilih jenis aset", en: "Select asset type" },
      options: [
        { value: "revetment", label: { id: "Talud / revetment", en: "Slope / revetment" } },
        { value: "jetty", label: { id: "Dermaga / jetty", en: "Jetty / wharf" } },
        { value: "road", label: { id: "Jalan / jembatan", en: "Road / bridge" } },
        { value: "other", label: { id: "Infrastruktur sipil lain", en: "Other civil infrastructure" } },
      ],
    },
    {
      key: "assetValue",
      kind: "money",
      showFor: CECR,
      label: { id: "Nilai konstruksi aset", en: "Asset construction value" },
      placeholder: { id: "mis. 15.000.000.000", en: "e.g. 15,000,000,000" },
    },
    {
      key: "handover",
      kind: "text",
      showFor: CECR,
      optional: true,
      label: { id: "Perkiraan tanggal serah terima (PHO)", en: "Expected handover date (PHO)" },
      placeholder: { id: "mis. Desember 2026", en: "e.g. December 2026" },
    },
    // ── Periode ──
    {
      key: "period",
      kind: "period",
      showFor: ["car", "ear"],
      label: { id: "Periode konstruksi", en: "Construction period" },
      placeholder: { id: "mis. 12", en: "e.g. 12" },
      defaultUnit: "month",
    },
    {
      key: "maintenance",
      kind: "number",
      showFor: ["car", "ear"],
      optional: true,
      label: { id: "Masa pemeliharaan (maintenance period)", en: "Maintenance period" },
      placeholder: { id: "mis. 12", en: "e.g. 12" },
      suffix: { id: "bulan", en: "months" },
    },
  ],
  flags: [
    { key: "tpl", showFor: ["car", "ear"], label: { id: "Perlu tanggung gugat pihak ketiga (TPL)", en: "Need third-party liability (TPL)" } },
    { key: "marine", showFor: ["car", "cecr"], label: { id: "Ada pekerjaan di laut / pesisir", en: "Includes marine / coastal works" } },
    { key: "subcon", showFor: ["car", "ear"], label: { id: "Ada subkontraktor utama", en: "Has major subcontractors" } },
    { key: "contract", label: { id: "Polis disyaratkan dalam kontrak / tender", en: "Policy required by the contract / tender" } },
    { key: "bond", showFor: ["car", "ear"], label: { id: "Sekaligus perlu surety bond (jaminan)", en: "Also need a surety bond" } },
    { key: "running", showFor: ["car", "ear"], label: { id: "Proyek sudah berjalan", en: "Project already under way" } },
    { key: "urgent", label: { id: "Dibutuhkan mendesak", en: "Urgent" } },
  ],
  general: [
    {
      doc: { id: "Legalitas perusahaan", en: "Company legal documents" },
      note: { id: "Akta, NIB, dan NPWP kontraktor / pemilik proyek", en: "Deed, NIB, and NPWP of the contractor / project owner" },
      must: true,
    },
    {
      doc: { id: "Kontrak / SPK / Letter of Award", en: "Contract / work order / Letter of Award" },
      note: { id: "Memuat nilai dan lingkup pekerjaan", en: "Showing the value and scope of work" },
      must: true,
    },
    {
      doc: { id: "Jadwal pelaksanaan proyek", en: "Project time schedule" },
      note: { id: "Tanggal mulai, selesai, dan masa pemeliharaan", en: "Start, completion, and maintenance dates" },
      must: true,
    },
  ],
  specific: {
    car: [
      {
        doc: { id: "Ringkasan lingkup & BoQ / RAB", en: "Scope summary & BoQ" },
        note: { id: "Dasar penentuan nilai dan risiko proyek", en: "Basis for project value and risk" },
        must: true,
      },
      {
        doc: { id: "Data lokasi & kondisi tanah", en: "Site & soil condition data" },
        note: { id: "Hasil soil test, risiko banjir atau pesisir, bila ada", en: "Soil test, flood or coastal risk, if available" },
        must: false,
      },
      {
        doc: { id: "Daftar subkontraktor utama", en: "List of major subcontractors" },
        note: { id: "Bila ada pekerjaan yang disubkontrakkan", en: "If any work is subcontracted" },
        must: false,
      },
    ],
    ear: [
      {
        doc: { id: "Daftar mesin / peralatan yang dipasang", en: "List of machinery / equipment to be erected" },
        note: { id: "Beserta nilai tiap item", en: "With the value of each item" },
        must: true,
      },
      {
        doc: { id: "Jadwal erection, testing & commissioning", en: "Erection, testing & commissioning schedule" },
        note: { id: "Fase testing menentukan risiko dan tarif", en: "The testing phase affects risk and rating" },
        must: true,
      },
      {
        doc: { id: "Data pabrikan / vendor peralatan", en: "Equipment manufacturer / vendor details" },
        note: { id: "Bila tersedia", en: "If available" },
        must: false,
      },
    ],
    cecr: [
      {
        doc: { id: "Spesifikasi aset sipil", en: "Civil asset specifications" },
        note: { id: "Jenis, dimensi, dan nilai konstruksi aset", en: "Type, dimensions, and construction value of the asset" },
        must: true,
      },
      {
        doc: { id: "Tanggal PHO & masa pemeliharaan", en: "PHO date & maintenance period" },
        note: { id: "Dasar periode pertanggungan setelah konstruksi", en: "Basis for the post-construction cover period" },
        must: true,
      },
      {
        doc: { id: "Gambar as-built & laporan kondisi aset", en: "As-built drawings & asset condition report" },
        note: { id: "Bila tersedia", en: "If available" },
        must: false,
      },
      {
        doc: { id: "Data lingkungan lokasi", en: "Site environmental data" },
        note: { id: "Pesisir, pasang surut, atau risiko banjir", en: "Coastal, tidal, or flood exposure" },
        must: false,
      },
    ],
  },
  disclaimer: {
    id: "Daftar bersifat umum. Proyek bernilai besar atau berisiko tinggi dapat diminta survei lokasi dan dokumen teknis tambahan. Premi dihitung dari nilai kontrak, durasi, dan kompleksitas proyek.",
    en: "This list is a general guide. Large or high-risk projects may require a site survey and extra technical documents. Premiums depend on contract value, duration, and project complexity.",
  },
  copy: {
    modalTitle: { id: "Permintaan Penawaran Asuransi Engineering", en: "Engineering Insurance Quote Request" },
    modalSubtitle: {
      id: "Isi data singkat proyek Anda — kami analisa awal dan balas lewat WhatsApp.",
      en: "Share a few details about your project — we'll assess and reply on WhatsApp.",
    },
    reqEyebrow: { id: "Persyaratan Penerbitan", en: "Issuance Requirements" },
    reqTitle: { id: "Dokumen yang Disiapkan untuk Asuransi Engineering", en: "Documents to Prepare for Engineering Insurance" },
    reqSubtitle: {
      id: "Pilih jenis asuransi untuk melihat dokumen khususnya. Dokumen perusahaan berlaku untuk semua jenis.",
      en: "Choose an insurance type to see its specific documents. Company documents apply to every type.",
    },
    dateLabel: { id: "Target polis mulai berlaku", en: "Target policy start date" },
    clientLabel: { id: "Nama proyek / pemilik proyek", en: "Project name / project owner" },
    clientPh: { id: "mis. Pembangunan Gudang PT. ABC", en: "e.g. ABC warehouse construction" },
    notePh: {
      id: "mis. tahap proyek saat ini, syarat dari owner / bank, atau info lain yang menurut Anda penting.",
      en: "e.g. current project stage, owner / bank requirements, or anything else you think matters.",
    },
    msgIntro: {
      id: "Halo Rio, saya ingin *meminta penawaran Asuransi Engineering*.",
      en: "Hello Rio, I would like to *request an Engineering Insurance quotation*.",
    },
    msgOutro: {
      id: "Mohon dibantu analisa awal, estimasi premi, dan daftar dokumen yang dibutuhkan. Terima kasih.",
      en: "Please help with an initial assessment, premium estimate, and the list of required documents. Thank you.",
    },
    unsureNote: { id: "", en: "" },
    companyLabel: { id: "Nama kontraktor / perusahaan", en: "Contractor / company name" },
  },
};

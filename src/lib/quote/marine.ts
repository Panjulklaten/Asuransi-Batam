import type { Option, QuoteCluster } from "./types";

const VESSELS: Option[] = [
  { value: "tug", label: { id: "Tugboat", en: "Tugboat" } },
  { value: "barge", label: { id: "Tongkang (barge)", en: "Barge" } },
  { value: "cargo", label: { id: "Kapal kargo / general cargo", en: "Cargo / general cargo ship" } },
  { value: "tanker", label: { id: "Tanker", en: "Tanker" } },
  { value: "passenger", label: { id: "Kapal penumpang / feri", en: "Passenger / ferry" } },
  { value: "fishing", label: { id: "Kapal ikan", en: "Fishing vessel" } },
  { value: "osv", label: { id: "Offshore support vessel (OSV)", en: "Offshore support vessel (OSV)" } },
  { value: "other", label: { id: "Lainnya", en: "Other" } },
];

const HULL = ["hull"];
const CARGO = ["cargo"];
const BUILD = ["builders"];

export const MARINE: QuoteCluster = {
  key: "marine",
  typeLegend: { id: "Jenis asuransi marine", en: "Marine insurance type" },
  typeLine: { id: "Jenis asuransi", en: "Insurance type" },
  types: [
    {
      key: "hull",
      label: { id: "Marine Hull", en: "Marine Hull" },
      hint: { id: "Lambung & mesin kapal", en: "Vessel hull & machinery" },
    },
    {
      key: "cargo",
      label: { id: "Marine Cargo", en: "Marine Cargo" },
      hint: { id: "Barang yang dikirim", en: "Goods in transit" },
    },
    {
      key: "builders",
      label: { id: "Builder's Risk", en: "Builder's Risk" },
      hint: { id: "Pembangunan kapal di galangan", en: "Vessel construction at a shipyard" },
    },
    {
      key: "unsure",
      label: { id: "Belum yakin", en: "Not sure yet" },
      hint: { id: "Bantu saya menentukan", en: "Help me decide" },
    },
  ],
  inferType(pathname) {
    const p = pathname.toLowerCase();
    const rules: [RegExp, string][] = [
      [/hull-vs-cargo/, "unsure"],
      [/builders-risk|galangan|shipyard/, "builders"],
      [/marine-hull|asuransi-kapal|jenis-jenis-asuransi-kapal/, "hull"],
      [/cargo|pengiriman|shipping|ekspor|export/, "cargo"],
    ];
    for (const [re, key] of rules) if (re.test(p)) return key;
    return "unsure";
  },
  fields: [
    // ── Marine Hull ──
    {
      key: "vesselType",
      kind: "select",
      showFor: HULL,
      label: { id: "Jenis kapal", en: "Vessel type" },
      placeholder: { id: "Pilih jenis kapal", en: "Select vessel type" },
      options: VESSELS,
    },
    {
      key: "hullValue",
      kind: "money",
      showFor: HULL,
      label: { id: "Nilai pertanggungan kapal", en: "Vessel insured value" },
      placeholder: { id: "mis. 8.000.000.000", en: "e.g. 8,000,000,000" },
    },
    {
      key: "vesselGt",
      kind: "number",
      showFor: HULL,
      optional: true,
      label: { id: "Ukuran kapal", en: "Vessel size" },
      placeholder: { id: "mis. 300", en: "e.g. 300" },
      suffix: { id: "GT", en: "GT" },
    },
    {
      key: "vesselAge",
      kind: "number",
      showFor: HULL,
      optional: true,
      label: { id: "Usia kapal", en: "Vessel age" },
      placeholder: { id: "mis. 8", en: "e.g. 8" },
      suffix: { id: "tahun", en: "years" },
    },
    {
      key: "hullArea",
      kind: "select",
      showFor: HULL,
      label: { id: "Daerah pelayaran", en: "Trading area" },
      placeholder: { id: "Pilih daerah pelayaran", en: "Select trading area" },
      options: [
        { value: "batam", label: { id: "Perairan Batam & Kepulauan Riau", en: "Batam & Riau Islands waters" } },
        { value: "domestic", label: { id: "Antar pulau (domestik)", en: "Inter-island (domestic)" } },
        { value: "intl", label: { id: "Internasional (mis. Singapura, Malaysia)", en: "International (e.g. Singapore, Malaysia)" } },
      ],
    },
    {
      key: "hullPeriod",
      kind: "period",
      showFor: HULL,
      label: { id: "Periode pertanggungan", en: "Policy period" },
      placeholder: { id: "mis. 12", en: "e.g. 12" },
      defaultUnit: "month",
    },

    // ── Marine Cargo ──
    {
      key: "cargoItem",
      kind: "text",
      showFor: CARGO,
      label: { id: "Jenis barang", en: "Type of goods" },
      placeholder: { id: "mis. mesin industri, elektronik, material konstruksi", en: "e.g. industrial machinery, electronics, construction material" },
    },
    {
      key: "cargoValue",
      kind: "money",
      showFor: CARGO,
      label: { id: "Nilai barang", en: "Cargo value" },
      placeholder: { id: "mis. 500.000.000", en: "e.g. 500,000,000" },
    },
    {
      key: "cargoRoute",
      kind: "text",
      showFor: CARGO,
      label: { id: "Rute pengiriman", en: "Shipping route" },
      placeholder: { id: "mis. Batam → Jakarta", en: "e.g. Batam → Jakarta" },
    },
    {
      key: "cargoMode",
      kind: "select",
      half: true,
      showFor: CARGO,
      label: { id: "Moda pengiriman", en: "Mode of transport" },
      placeholder: { id: "Pilih moda", en: "Select mode" },
      options: [
        { value: "sea", label: { id: "Laut", en: "Sea" } },
        { value: "air", label: { id: "Udara", en: "Air" } },
        { value: "land", label: { id: "Darat", en: "Land" } },
        { value: "multi", label: { id: "Multimoda", en: "Multimodal" } },
      ],
    },
    {
      key: "cargoFreq",
      kind: "select",
      half: true,
      showFor: CARGO,
      label: { id: "Frekuensi pengiriman", en: "Shipping frequency" },
      placeholder: { id: "Pilih frekuensi", en: "Select frequency" },
      options: [
        { value: "single", label: { id: "Sekali kirim", en: "Single shipment" } },
        { value: "regular", label: { id: "Rutin (open cover)", en: "Regular (open cover)" } },
      ],
    },

    // ── Builder's Risk ──
    {
      key: "buildType",
      kind: "select",
      showFor: BUILD,
      label: { id: "Jenis kapal yang dibangun", en: "Vessel type being built" },
      placeholder: { id: "Pilih jenis kapal", en: "Select vessel type" },
      options: VESSELS,
    },
    {
      key: "buildValue",
      kind: "money",
      showFor: BUILD,
      label: { id: "Nilai kontrak pembangunan", en: "Construction contract value" },
      placeholder: { id: "mis. 25.000.000.000", en: "e.g. 25,000,000,000" },
    },
    {
      key: "buildPeriod",
      kind: "period",
      showFor: BUILD,
      label: { id: "Lama pembangunan", en: "Construction period" },
      placeholder: { id: "mis. 18", en: "e.g. 18" },
      defaultUnit: "month",
    },
    {
      key: "buildYard",
      kind: "text",
      showFor: BUILD,
      optional: true,
      label: { id: "Nama / lokasi galangan", en: "Shipyard name / location" },
      placeholder: { id: "mis. galangan di Tanjung Uncang, Batam", en: "e.g. shipyard in Tanjung Uncang, Batam" },
    },

    // ── Belum yakin ──
    {
      key: "estValue",
      kind: "money",
      showFor: ["unsure"],
      optional: true,
      label: { id: "Perkiraan nilai yang ingin diasuransikan", en: "Estimated value to insure" },
      placeholder: { id: "mis. 1.000.000.000", en: "e.g. 1,000,000,000" },
    },
  ],
  flags: [
    { key: "classed", showFor: HULL, label: { id: "Kapal berkelas / sertifikat lengkap", en: "Classed vessel / complete certificates" } },
    { key: "survey", showFor: HULL, label: { id: "Bersedia disurvei kondisi kapalnya", en: "Open to a vessel condition survey" } },
    { key: "claim", showFor: ["hull", "cargo"], label: { id: "Pernah klaim dalam 3 tahun terakhir", en: "Claim made in the last 3 years" } },
    { key: "renewal", showFor: ["hull", "cargo"], label: { id: "Perpanjangan polis yang sudah ada", en: "Renewal of an existing policy" } },
    { key: "special", showFor: CARGO, label: { id: "Barang berisiko khusus (mesin, mudah pecah, B3)", en: "Special-risk goods (machinery, fragile, hazardous)" } },
    { key: "lc", showFor: CARGO, label: { id: "Ada syarat asuransi dari L/C atau pembeli", en: "Insurance required by L/C or buyer" } },
    { key: "yardExp", showFor: BUILD, label: { id: "Galangan pernah membangun kapal sejenis", en: "Yard has built similar vessels" } },
    { key: "classBuild", showFor: BUILD, label: { id: "Pembangunan diawasi lembaga klasifikasi (class)", en: "Build supervised by a classification society" } },
    { key: "urgent", label: { id: "Dibutuhkan mendesak (≤ 3 hari kerja)", en: "Urgent (≤ 3 working days)" } },
    { key: "multi", label: { id: "Perlu lebih dari satu jenis polis marine", en: "Need more than one marine policy" } },
  ],
  general: [
    {
      doc: { id: "Identitas pemohon", en: "Applicant identity" },
      note: { id: "Akta & SK Kemenkumham (perusahaan) atau KTP (perorangan)", en: "Deed & Ministry approval (company) or ID card (individual)" },
      must: true,
    },
    {
      doc: { id: "NIB & izin usaha sesuai bidang", en: "NIB & business licence for the field" },
      note: { id: "Pelayaran, galangan, ekspedisi, atau perdagangan", en: "Shipping, shipyard, forwarding, or trading" },
      must: true,
    },
    {
      doc: { id: "NPWP", en: "Tax ID (NPWP)" },
      note: { id: "Perusahaan atau pemilik", en: "Company or owner" },
      must: true,
    },
    {
      doc: { id: "KTP direksi / penanggung jawab", en: "ID of director / responsible person" },
      note: { id: "Penandatangan polis", en: "Policy signatory" },
      must: true,
    },
    {
      doc: { id: "Riwayat klaim 3–5 tahun", en: "Claims record, 3–5 years" },
      note: { id: "Menjadi dasar penilaian risiko & tarif", en: "Basis for risk assessment and rating" },
      must: false,
    },
    {
      doc: { id: "Polis sebelumnya (perpanjangan)", en: "Previous policy (renewals)" },
      note: { id: "Agar cakupan dan syarat dapat dibandingkan", en: "So cover and terms can be compared" },
      must: false,
    },
  ],
  specific: {
    hull: [
      {
        doc: { id: "Dokumen kepemilikan & registrasi kapal", en: "Ownership & registration documents" },
        note: { id: "Mis. grosse akta, surat tanda kebangsaan, dan surat ukur kapal", en: "E.g. grosse deed, nationality certificate, and tonnage certificate" },
        must: true,
      },
      {
        doc: { id: "Spesifikasi kapal", en: "Vessel specifications" },
        note: { id: "Jenis, GT, tahun bangun, material, dan mesin", en: "Type, GT, year built, material, and engine" },
        must: true,
      },
      {
        doc: { id: "Dasar nilai pertanggungan", en: "Basis of insured value" },
        note: { id: "Kontrak jual-beli, invoice galangan, atau hasil appraisal", en: "Sale contract, yard invoice, or appraisal" },
        must: true,
      },
      {
        doc: { id: "Daerah pelayaran & rute trading", en: "Trading area & routes" },
        note: { id: "Menentukan klausul dan tarif yang berlaku", en: "Determines applicable clauses and rating" },
        must: true,
      },
      {
        doc: { id: "Sertifikat kelas & keselamatan", en: "Class & safety certificates" },
        note: { id: "Yang masih berlaku, bila kapal berkelas", en: "Valid ones, if the vessel is classed" },
        must: false,
      },
      {
        doc: { id: "Laporan survei kondisi kapal", en: "Vessel condition survey report" },
        note: { id: "Terutama untuk kapal berusia tua atau bernilai besar", en: "Mainly for older or high-value vessels" },
        must: false,
      },
    ],
    cargo: [
      {
        doc: { id: "Invoice & packing list", en: "Invoice & packing list" },
        note: { id: "Dasar nilai pertanggungan (umumnya CIF + 10%)", en: "Basis of insured value (usually CIF + 10%)" },
        must: true,
      },
      {
        doc: { id: "Deskripsi barang & kemasan", en: "Goods description & packing" },
        note: { id: "Jenis, jumlah, dan cara pengemasan", en: "Type, quantity, and packing method" },
        must: true,
      },
      {
        doc: { id: "Rute, moda & jadwal pengiriman", en: "Route, mode & shipping schedule" },
        note: { id: "Lokasi asal–tujuan dan nama pengangkut", en: "Origin–destination and carrier name" },
        must: true,
      },
      {
        doc: { id: "B/L, AWB, atau surat jalan", en: "B/L, AWB, or delivery note" },
        note: { id: "Bila sudah terbit", en: "Once issued" },
        must: false,
      },
      {
        doc: { id: "L/C atau syarat asuransi dari pembeli", en: "L/C or buyer's insurance terms" },
        note: { id: "Agar klausul polis sesuai persyaratan", en: "So policy clauses match the requirements" },
        must: false,
      },
      {
        doc: { id: "Estimasi volume pengiriman per tahun", en: "Estimated annual shipment volume" },
        note: { id: "Untuk pengiriman rutin (open cover)", en: "For regular shipments (open cover)" },
        must: false,
      },
    ],
    builders: [
      {
        doc: { id: "Kontrak pembangunan kapal", en: "Shipbuilding contract" },
        note: { id: "Nilai kontrak, pihak yang terlibat, dan lingkup", en: "Contract value, parties involved, and scope" },
        must: true,
      },
      {
        doc: { id: "Jadwal pembangunan (milestone)", en: "Construction schedule (milestones)" },
        note: { id: "Keel laying, launching, sea trial, dan serah terima", en: "Keel laying, launching, sea trial, and delivery" },
        must: true,
      },
      {
        doc: { id: "Gambar & spesifikasi teknis kapal", en: "Vessel drawings & technical specs" },
        note: { id: "Termasuk persetujuan class bila ada", en: "Including class approval, if any" },
        must: true,
      },
      {
        doc: { id: "Profil & pengalaman galangan", en: "Shipyard profile & experience" },
        note: { id: "Fasilitas dan daftar kapal yang pernah dibangun", en: "Facilities and list of vessels built" },
        must: true,
      },
      {
        doc: { id: "Rencana launching & sea trial", en: "Launching & sea trial plan" },
        note: { id: "Lokasi dan metode peluncuran", en: "Location and launching method" },
        must: true,
      },
      {
        doc: { id: "Daftar subkontraktor", en: "Subcontractor list" },
        note: { id: "Bila ada pihak lain yang perlu dicakup", en: "If other parties need to be covered" },
        must: false,
      },
    ],
  },
  disclaimer: {
    id: "Daftar bersifat umum. Kebutuhan akhir menyesuaikan penanggung, nilai pertanggungan, jenis dan usia kapal, serta hasil survei bila diperlukan. Waktu penerbitan bergantung pada kelengkapan dokumen.",
    en: "This list is a general guide. Final requirements depend on the insurer, insured value, vessel type and age, and survey results where needed. Issuance time depends on how complete the documents are.",
  },
  copy: {
    modalTitle: { id: "Permintaan Penawaran Asuransi Marine", en: "Marine Insurance Quote Request" },
    modalSubtitle: {
      id: "Isi data singkat kapal atau pengiriman Anda — kami analisa awal dan balas lewat WhatsApp.",
      en: "Share a few details about your vessel or shipment — we'll assess and reply on WhatsApp.",
    },
    reqEyebrow: { id: "Persyaratan Penerbitan", en: "Issuance Requirements" },
    reqTitle: { id: "Dokumen yang Disiapkan untuk Asuransi Marine", en: "Documents to Prepare for Marine Insurance" },
    reqSubtitle: {
      id: "Pilih jenis asuransi untuk melihat dokumen khususnya. Dokumen pemohon berlaku untuk semua jenis.",
      en: "Choose an insurance type to see its specific documents. Applicant documents apply to every type.",
    },
    dateLabel: { id: "Tanggal mulai pertanggungan", en: "Cover start date" },
    clientLabel: { id: "Nama kapal / proyek", en: "Vessel / project name" },
    clientPh: { id: "mis. MV Samudra Jaya / pengiriman mesin ke Jakarta", en: "e.g. MV Samudra Jaya / machinery shipment to Jakarta" },
    notePh: {
      id: "mis. bendera & kelas kapal, rincian muatan, titik muat–bongkar, atau info lain yang menurut Anda penting.",
      en: "e.g. vessel flag & class, cargo details, loading–discharge points, or anything else you think matters.",
    },
    msgIntro: {
      id: "Halo Rio, saya ingin *meminta penawaran Asuransi Marine*.",
      en: "Hello Rio, I would like to *request a Marine Insurance quotation*.",
    },
    msgOutro: {
      id: "Mohon dibantu analisa awal, estimasi premi, dan daftar dokumen yang dibutuhkan. Terima kasih.",
      en: "Please help with an initial assessment, premium estimate, and the list of required documents. Thank you.",
    },
    unsureNote: {
      id: "Belum yakin jenis polis yang dibutuhkan? Lanjutkan saja — ceritakan kebutuhan Anda di langkah berikut.",
      en: "Not sure which policy you need? Just continue — tell us about your needs in the next step.",
    },
  },
};

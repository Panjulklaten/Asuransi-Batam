import type { QuoteCluster } from "./types";

const HOME = ["rumah"];
const RUKO = ["ruko"];
const GUDANG = ["gudang"];
const PABRIK = ["pabrik"];
const APT = ["apartemen"];
const HOTEL = ["hotel"];
const BUILDING = ["rumah", "ruko", "gudang", "pabrik", "hotel"];
const COMMERCIAL = ["ruko", "gudang", "pabrik", "hotel"];

export const PROPERTY: QuoteCluster = {
  key: "property",
  typeLegend: { id: "Jenis properti", en: "Property type" },
  typeLine: { id: "Jenis properti", en: "Property type" },
  types: [
    { key: "rumah", label: { id: "Rumah", en: "Home" }, hint: { id: "Bangunan & isi rumah", en: "House building & contents" } },
    { key: "ruko", label: { id: "Ruko", en: "Shophouse" }, hint: { id: "Bangunan & stok usaha", en: "Building & business stock" } },
    { key: "gudang", label: { id: "Gudang", en: "Warehouse" }, hint: { id: "Bangunan & barang simpanan", en: "Building & stored goods" } },
    { key: "pabrik", label: { id: "Pabrik / Industri", en: "Factory / Industrial" }, hint: { id: "Bangunan, mesin & stok", en: "Building, machinery & stock" } },
    { key: "apartemen", label: { id: "Apartemen", en: "Apartment" }, hint: { id: "Unit & isi unit", en: "Unit & contents" } },
    { key: "hotel", label: { id: "Hotel", en: "Hotel" }, hint: { id: "Bangunan, perabot & liability tamu", en: "Building, FF&E & guest liability" } },
  ],
  inferType(pathname) {
    const p = pathname.toLowerCase();
    const rules: [RegExp, string][] = [
      [/apartemen|apartment/, "apartemen"],
      [/hotel/, "hotel"],
      [/gudang|warehouse|pergudangan|logistik/, "gudang"],
      [/pabrik|factory|industrial/, "pabrik"],
      [/ruko|shophouse|komersial|commercial/, "ruko"],
    ];
    for (const [re, key] of rules) if (re.test(p)) return key;
    return "rumah";
  },
  companyOptionalFor: ["rumah", "apartemen"],
  calculator(type, lang, pathname) {
    const href = lang === "id" ? "/kalkulator-premi-properti" : "/en/property-premium-calculator";
    // Okupasi dipilih otomatis hanya di halaman produk (bukan pilar / artikel). Pabrik tidak punya okupasi di kalkulator.
    const onProductPage = /^\/(asuransi-properti|en\/property-insurance)\/[^/]+/.test(pathname);
    const preselect: Record<string, string> = {
      rumah: "rumah",
      ruko: "ruko",
      gudang: "gudang_sendiri",
      apartemen: "apartemen",
      hotel: "hotel_bawah",
    };
    const q = onProductPage && preselect[type] ? `?okupasi=${preselect[type]}` : "";
    return { label: lang === "id" ? "Hitung Premi Properti" : "Calculate Property Premium", href: href + q };
  },
  fields: [
    {
      key: "location",
      kind: "text",
      label: { id: "Lokasi properti", en: "Property location" },
      placeholder: { id: "mis. Batam Centre / Muka Kuning / Nagoya", en: "e.g. Batam Centre / Muka Kuning / Nagoya" },
    },
    // ── Nilai pertanggungan ──
    {
      key: "buildingValue",
      kind: "money",
      showFor: BUILDING,
      label: { id: "Nilai bangunan (biaya bangun ulang)", en: "Building value (rebuild cost)" },
      placeholder: { id: "mis. 1.500.000.000", en: "e.g. 1,500,000,000" },
    },
    {
      key: "unitValue",
      kind: "money",
      showFor: APT,
      label: { id: "Nilai unit apartemen", en: "Apartment unit value" },
      placeholder: { id: "mis. 800.000.000", en: "e.g. 800,000,000" },
    },
    {
      key: "contentsValue",
      kind: "money",
      showFor: ["rumah", "ruko", "apartemen", "hotel"],
      optional: true,
      label: { id: "Nilai isi / perabot / stok", en: "Contents / furnishings / stock value" },
      placeholder: { id: "mis. 300.000.000", en: "e.g. 300,000,000" },
    },
    {
      key: "stockValue",
      kind: "money",
      showFor: ["gudang", "pabrik"],
      label: { id: "Nilai barang / stok", en: "Goods / stock value" },
      placeholder: { id: "mis. 5.000.000.000", en: "e.g. 5,000,000,000" },
    },
    {
      key: "machineryValue",
      kind: "money",
      showFor: PABRIK,
      optional: true,
      label: { id: "Nilai mesin produksi", en: "Production machinery value" },
      placeholder: { id: "mis. 10.000.000.000", en: "e.g. 10,000,000,000" },
    },
    // ── Data bangunan ──
    {
      key: "area",
      kind: "number",
      showFor: [...BUILDING, "apartemen"],
      optional: true,
      label: { id: "Luas bangunan / unit", en: "Building / unit area" },
      placeholder: { id: "mis. 120", en: "e.g. 120" },
      suffix: { id: "m²", en: "m²" },
    },
    {
      key: "yearBuilt",
      kind: "number",
      showFor: BUILDING,
      optional: true,
      label: { id: "Tahun bangun", en: "Year built" },
      placeholder: { id: "mis. 2018", en: "e.g. 2018" },
    },
    {
      key: "construction",
      kind: "select",
      showFor: ["ruko", "gudang", "pabrik"],
      optional: true,
      label: { id: "Konstruksi bangunan", en: "Building construction" },
      placeholder: { id: "Pilih konstruksi", en: "Select construction" },
      options: [
        { value: "concrete", label: { id: "Beton", en: "Concrete" } },
        { value: "steel", label: { id: "Rangka baja", en: "Steel frame" } },
        { value: "semi", label: { id: "Semi permanen", en: "Semi-permanent" } },
      ],
    },
    {
      key: "occupancy",
      kind: "select",
      showFor: ["rumah", "ruko", "apartemen"],
      optional: true,
      label: { id: "Pemakaian", en: "Occupancy" },
      placeholder: { id: "Pilih pemakaian", en: "Select occupancy" },
      options: [
        { value: "owner", label: { id: "Dihuni / dipakai sendiri", en: "Owner-occupied" } },
        { value: "rented", label: { id: "Disewakan", en: "Rented out" } },
        { value: "vacant", label: { id: "Kosong", en: "Vacant" } },
      ],
    },
    // ── Gudang ──
    {
      key: "goodsType",
      kind: "text",
      showFor: GUDANG,
      label: { id: "Jenis barang yang disimpan", en: "Type of goods stored" },
      placeholder: { id: "mis. elektronik, bahan baku, barang FMCG", en: "e.g. electronics, raw materials, FMCG" },
    },
    // ── Pabrik ──
    {
      key: "industry",
      kind: "text",
      showFor: PABRIK,
      label: { id: "Jenis industri / produksi", en: "Industry / production type" },
      placeholder: { id: "mis. fabrikasi logam, elektronik, plastik", en: "e.g. metal fabrication, electronics, plastics" },
    },
    // ── Hotel ──
    {
      key: "rooms",
      kind: "number",
      showFor: HOTEL,
      label: { id: "Jumlah kamar", en: "Number of rooms" },
      placeholder: { id: "mis. 80", en: "e.g. 80" },
      suffix: { id: "kamar", en: "rooms" },
    },
    {
      key: "period",
      kind: "period",
      optional: true,
      label: { id: "Periode polis", en: "Policy period" },
      placeholder: { id: "mis. 12", en: "e.g. 12" },
      defaultUnit: "month",
    },
  ],
  flags: [
    { key: "mortgage", showFor: [...HOME, ...RUKO, ...APT], label: { id: "Dipersyaratkan bank (KPR / kredit)", en: "Required by the bank (mortgage / loan)" } },
    { key: "protection", showFor: [...GUDANG, ...PABRIK, ...HOTEL], label: { id: "Ada proteksi kebakaran (APAR / hydrant / sprinkler)", en: "Fire protection in place (extinguishers / hydrant / sprinkler)" } },
    { key: "bi", showFor: COMMERCIAL, label: { id: "Perlu perlindungan kehilangan laba (business interruption)", en: "Need business interruption cover" } },
    { key: "pl", showFor: [...HOTEL, ...RUKO], label: { id: "Perlu tanggung gugat pihak ketiga / tamu (liability)", en: "Need third-party / guest liability cover" } },
    { key: "declaration", showFor: GUDANG, label: { id: "Stok fluktuatif — tertarik Declaration Policy", en: "Fluctuating stock — interested in a Declaration Policy" } },
    { key: "flood", label: { id: "Perlu perluasan banjir / gempa / huru-hara", en: "Need flood / earthquake / riot extensions" } },
    { key: "claim", label: { id: "Pernah klaim dalam 3 tahun terakhir", en: "Claim made in the last 3 years" } },
    { key: "renewal", label: { id: "Perpanjangan polis yang sudah ada", en: "Renewal of an existing policy" } },
    { key: "urgent", label: { id: "Dibutuhkan mendesak (≤ 3 hari kerja)", en: "Urgent (≤ 3 working days)" } },
  ],
  general: [
    {
      doc: { id: "Identitas pemilik / penanggung jawab", en: "Owner / responsible person identity" },
      note: { id: "KTP (perorangan) atau akta, NIB & NPWP (perusahaan)", en: "ID card (individual) or deed, NIB & NPWP (company)" },
      must: true,
    },
    {
      doc: { id: "Bukti kepemilikan atau penguasaan", en: "Proof of ownership or occupation" },
      note: { id: "Sertifikat (SHM/SHGB), AJB/PPJB, atau perjanjian sewa", en: "Title (SHM/SHGB), deed of sale, or lease agreement" },
      must: true,
    },
    {
      doc: { id: "Foto lokasi & bangunan", en: "Photos of the site & building" },
      note: { id: "Tampak depan, samping, dan bagian dalam", en: "Front, side, and interior views" },
      must: true,
    },
    {
      doc: { id: "Polis sebelumnya & riwayat klaim", en: "Previous policy & claims record" },
      note: { id: "Untuk perpanjangan, atau bila pernah klaim", en: "For renewals, or if a claim was made" },
      must: false,
    },
  ],
  specific: {
    rumah: [
      {
        doc: { id: "Luas bangunan & tahun bangun", en: "Building area & year built" },
        note: { id: "Dasar perhitungan nilai bangunan", en: "Basis for the building value" },
        must: true,
      },
      {
        doc: { id: "Daftar isi rumah bernilai", en: "List of valuable contents" },
        note: { id: "Elektronik dan perabot yang ingin dimasukkan", en: "Electronics and furniture to be included" },
        must: false,
      },
      {
        doc: { id: "Syarat asuransi dari bank", en: "Bank's insurance requirements" },
        note: { id: "Bila rumah dibiayai KPR", en: "If the house is financed by a mortgage" },
        must: false,
      },
    ],
    ruko: [
      {
        doc: { id: "Jumlah lantai & konstruksi bangunan", en: "Floors & building construction" },
        note: { id: "Beton, rangka baja, atau semi permanen", en: "Concrete, steel frame, or semi-permanent" },
        must: true,
      },
      {
        doc: { id: "Jenis usaha penghuni", en: "Tenant business type" },
        note: { id: "Menentukan tingkat risiko kebakaran", en: "Determines fire risk level" },
        must: true,
      },
      {
        doc: { id: "Nilai stok & isi usaha", en: "Stock & business contents value" },
        note: { id: "Bila stok ingin diasuransikan", en: "If stock is to be insured" },
        must: false,
      },
    ],
    gudang: [
      {
        doc: { id: "Jenis & nilai barang yang disimpan", en: "Type & value of stored goods" },
        note: { id: "Dasar nilai isi; stok fluktuatif bisa memakai Declaration Policy", en: "Basis of contents value; fluctuating stock can use a Declaration Policy" },
        must: true,
      },
      {
        doc: { id: "Konstruksi & sistem proteksi kebakaran", en: "Construction & fire protection system" },
        note: { id: "Material bangunan, APAR, hydrant, sprinkler", en: "Building material, extinguishers, hydrant, sprinkler" },
        must: true,
      },
      {
        doc: { id: "Peralatan material handling", en: "Material handling equipment" },
        note: { id: "Forklift, rak, conveyor, bila ingin dicakup", en: "Forklifts, racking, conveyors, if to be covered" },
        must: false,
      },
    ],
    pabrik: [
      {
        doc: { id: "Nilai bangunan, mesin & stok", en: "Building, machinery & stock values" },
        note: { id: "Dasar nilai pertanggungan all risk industri", en: "Basis of the industrial all-risk sum insured" },
        must: true,
      },
      {
        doc: { id: "Proses produksi & bahan berbahaya", en: "Production process & hazardous materials" },
        note: { id: "Menentukan profil risiko dan tarif", en: "Determines risk profile and rating" },
        must: true,
      },
      {
        doc: { id: "Sistem proteksi kebakaran", en: "Fire protection system" },
        note: { id: "Sprinkler, hydrant, dan tim tanggap darurat", en: "Sprinkler, hydrant, and emergency response team" },
        must: true,
      },
      {
        doc: { id: "Laporan penilaian nilai (appraisal)", en: "Valuation (appraisal) report" },
        note: { id: "Dianjurkan untuk pabrik besar", en: "Recommended for large factories" },
        must: false,
      },
    ],
    apartemen: [
      {
        doc: { id: "Data unit", en: "Unit details" },
        note: { id: "Nama apartemen, tower, lantai, nomor unit, dan luas", en: "Apartment name, tower, floor, unit number, and area" },
        must: true,
      },
      {
        doc: { id: "Bukti kepemilikan unit", en: "Proof of unit ownership" },
        note: { id: "Sertifikat SHMSRS atau AJB/PPJB", en: "SHMSRS title or deed of sale" },
        must: true,
      },
      {
        doc: { id: "Daftar isi unit", en: "Unit contents list" },
        note: { id: "Furnitur dan elektronik, bila ingin dicakup", en: "Furniture and electronics, if to be covered" },
        must: false,
      },
    ],
    hotel: [
      {
        doc: { id: "Profil hotel", en: "Hotel profile" },
        note: { id: "Kelas/bintang, jumlah kamar, dan fasilitas (kolam renang, restoran)", en: "Class/stars, room count, and facilities (pool, restaurant)" },
        must: true,
      },
      {
        doc: { id: "Nilai bangunan & perabot (FF&E)", en: "Building & FF&E values" },
        note: { id: "Dihitung berdasarkan replacement cost, bukan nilai buku", en: "Based on replacement cost, not book value" },
        must: true,
      },
      {
        doc: { id: "Sistem proteksi kebakaran & keselamatan", en: "Fire protection & safety systems" },
        note: { id: "Sprinkler, alarm, dan prosedur evakuasi", en: "Sprinklers, alarms, and evacuation procedures" },
        must: true,
      },
      {
        doc: { id: "Riwayat klaim tamu / liability", en: "Guest / liability claims record" },
        note: { id: "Untuk penilaian tanggung gugat pihak ketiga", en: "For third-party liability assessment" },
        must: false,
      },
    ],
  },
  disclaimer: {
    id: "Daftar bersifat umum. Nilai pertanggungan yang ideal dihitung dari biaya bangun ulang (replacement cost), bukan harga pasar. Survei lokasi dapat diminta untuk properti bernilai besar atau berisiko tinggi.",
    en: "This list is a general guide. The ideal sum insured is based on rebuild (replacement) cost, not market price. A site survey may be requested for high-value or high-risk properties.",
  },
  copy: {
    modalTitle: { id: "Permintaan Penawaran Asuransi Properti", en: "Property Insurance Quote Request" },
    modalSubtitle: {
      id: "Isi data singkat properti Anda — kami analisa awal dan balas lewat WhatsApp.",
      en: "Share a few details about your property — we'll assess and reply on WhatsApp.",
    },
    reqEyebrow: { id: "Persyaratan Penerbitan", en: "Issuance Requirements" },
    reqTitle: { id: "Dokumen yang Disiapkan untuk Asuransi Properti", en: "Documents to Prepare for Property Insurance" },
    reqSubtitle: {
      id: "Pilih jenis properti untuk melihat dokumen khususnya. Dokumen pemilik berlaku untuk semua jenis.",
      en: "Choose a property type to see its specific documents. Owner documents apply to every type.",
    },
    dateLabel: { id: "Tanggal mulai pertanggungan", en: "Cover start date" },
    clientLabel: { id: "Nama properti / bangunan", en: "Property / building name" },
    clientPh: { id: "mis. Ruko Nagoya Square / Gudang PT. ABC", en: "e.g. Nagoya Square shophouse / ABC warehouse" },
    notePh: {
      id: "mis. alamat lengkap, kondisi bangunan, perluasan yang dibutuhkan, atau info lain yang menurut Anda penting.",
      en: "e.g. full address, building condition, extensions needed, or anything else you think matters.",
    },
    msgIntro: {
      id: "Halo Rio, saya ingin *meminta penawaran Asuransi Properti*.",
      en: "Hello Rio, I would like to *request a Property Insurance quotation*.",
    },
    msgOutro: {
      id: "Mohon dibantu analisa awal, estimasi premi, dan daftar dokumen yang dibutuhkan. Terima kasih.",
      en: "Please help with an initial assessment, premium estimate, and the list of required documents. Thank you.",
    },
    unsureNote: { id: "", en: "" },
    companyLabel: { id: "Nama perusahaan", en: "Company name" },
  },
};

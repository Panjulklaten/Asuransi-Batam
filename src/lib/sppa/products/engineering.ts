import type { Condition, ProductConfig } from "../types";
import { claimsFields, companyApplicantFields, currencyFields, money, opts, periodFields, yesNo } from "./shared";

const PROJECT: Condition = { field: "subType", in: ["car", "ear"] };
const EQUIPMENT: Condition = { field: "subType", in: ["cpm", "mb", "eei", "boiler"] };
const OTHER: Condition = { field: "subType", equals: "other" };
const WORK_RISK: Condition = { field: "subType", in: ["car", "ear", "other"] };
const NOT_PROJECT: Condition = { field: "subType", in: ["cpm", "mb", "eei", "boiler", "other"] };

const S_PROJECT = "Informasi Proyek";
const S_WORK = "Detail Pekerjaan";
const S_EQUIP = "Data Peralatan";

export const engineeringConfig: ProductConfig = {
  id: "engineering",
  label: "Engineering",
  description: "CAR, EAR, alat berat kontraktor, mesin, peralatan elektronik, boiler.",
  subTypeField: {
    name: "subType",
    label: "Jenis pertanggungan Engineering",
    type: "select",
    required: true,
    options: opts([
      ["car", "Contractor's All Risks (CAR)"],
      ["ear", "Erection All Risks (EAR)"],
      ["cpm", "Contractor's Plant & Machinery (CPM)"],
      ["mb", "Machinery Breakdown (MB)"],
      ["eei", "Electronic Equipment Insurance (EEI)"],
      ["boiler", "Boiler & Pressure Vessel"],
      ["other", "Lainnya"],
    ]),
  },
  steps: [
    {
      id: "applicant",
      title: "Data Pemohon",
      description: "Data perusahaan dan kontak yang bisa kami hubungi.",
      fields: companyApplicantFields({ businessType: true, website: true }),
    },
    {
      id: "risk",
      title: "Data Risiko",
      description: "Jawab sesuai kondisi sebenarnya. Pilih Ya jika ada, lalu jelaskan singkat.",
      fields: [
        ...yesNo("floodArea", "Apakah lokasi berada di area banjir?", { section: "Lokasi" }),
        ...yesNo("earthquakeZone", "Apakah berada di zona gempa?", { section: "Lokasi" }),
        ...yesNo("nearWater", "Apakah berada dekat sungai/pantai?", { section: "Lokasi" }),
        ...yesNo("undergroundWork", "Apakah terdapat pekerjaan bawah tanah?", { showIf: WORK_RISK, section: "Pekerjaan" }),
        ...yesNo("hotWork", "Apakah terdapat pekerjaan dengan api?", { showIf: WORK_RISK, section: "Pekerjaan" }),
        ...yesNo("liftingWork", "Apakah terdapat pekerjaan lifting/heavy lifting?", { showIf: WORK_RISK, section: "Pekerjaan" }),
        ...yesNo("heightWork", "Apakah terdapat pekerjaan di ketinggian?", { showIf: WORK_RISK, section: "Pekerjaan" }),
        ...yesNo("electricalWork", "Apakah terdapat pekerjaan kelistrikan?", { showIf: WORK_RISK, section: "Pekerjaan" }),
        ...yesNo("hazardousMaterial", "Apakah terdapat penggunaan bahan berbahaya?", { showIf: WORK_RISK, section: "Pekerjaan" }),
      ],
    },
    {
      id: "object",
      title: "Detail Objek Pertanggungan",
      fields: [
        // ── CAR / EAR ──
        { name: "projectName", label: "Nama proyek", type: "text", required: true, maxLength: 200, showIf: PROJECT, section: S_PROJECT },
        { name: "projectLocation", label: "Lokasi proyek (kota/kabupaten)", type: "text", required: true, maxLength: 150, showIf: PROJECT, section: S_PROJECT },
        { name: "projectAddress", label: "Alamat lengkap lokasi proyek", type: "textarea", required: true, maxLength: 500, showIf: PROJECT, section: S_PROJECT },
        { name: "projectType", label: "Jenis proyek", type: "text", required: true, maxLength: 150, placeholder: "mis. gedung, jalan, pabrik", showIf: PROJECT, section: S_PROJECT },
        { name: "ownerName", label: "Pemilik proyek / Owner", type: "text", required: true, maxLength: 150, showIf: PROJECT, section: S_PROJECT },
        { name: "mainContractor", label: "Kontraktor utama", type: "text", required: true, maxLength: 150, showIf: PROJECT, section: S_PROJECT },
        { name: "subcontractor", label: "Subkontraktor (jika ada)", type: "text", maxLength: 300, showIf: PROJECT, section: S_PROJECT },
        { name: "consultant", label: "Konsultan / Engineer (jika ada)", type: "text", maxLength: 150, showIf: PROJECT, section: S_PROJECT },
        money("contractValue", "Nilai kontrak", { required: true, hint: "Mata uang mengikuti pilihan di langkah Coverage.", showIf: PROJECT, section: S_PROJECT }),
        { name: "projectStart", label: "Tanggal mulai proyek", type: "date", required: true, showIf: PROJECT, section: S_PROJECT },
        { name: "projectEnd", label: "Estimasi tanggal selesai", type: "date", required: true, notBefore: "projectStart", showIf: PROJECT, section: S_PROJECT },
        { name: "maintenanceMonths", label: "Masa pemeliharaan (bulan)", type: "number", min: 0, max: 120, showIf: PROJECT, section: S_PROJECT },

        { name: "workDescription", label: "Deskripsi pekerjaan", type: "textarea", required: true, maxLength: 2000, showIf: PROJECT, section: S_WORK },
        { name: "constructionType", label: "Jenis konstruksi", type: "text", maxLength: 150, showIf: PROJECT, section: S_WORK },
        { name: "buildingArea", label: "Luas bangunan (m²)", type: "number", min: 0, showIf: PROJECT, section: S_WORK },
        { name: "floors", label: "Jumlah lantai", type: "number", min: 0, max: 200, showIf: PROJECT, section: S_WORK },
        { name: "buildingHeight", label: "Ketinggian bangunan (m)", type: "number", min: 0, showIf: PROJECT, section: S_WORK },
        { name: "structureType", label: "Jenis struktur", type: "text", maxLength: 150, placeholder: "mis. beton bertulang, baja", showIf: PROJECT, section: S_WORK },
        { name: "constructionMethod", label: "Metode konstruksi", type: "text", maxLength: 200, showIf: PROJECT, section: S_WORK },
        { name: "soilCondition", label: "Kondisi tanah", type: "text", maxLength: 200, showIf: PROJECT, section: S_WORK },
        { name: "basementDepth", label: "Kedalaman basement (m, jika ada)", type: "number", min: 0, showIf: PROJECT, section: S_WORK },
        { name: "specialWorks", label: "Pekerjaan khusus (jika ada)", type: "textarea", maxLength: 1000, showIf: PROJECT, section: S_WORK },
        ...yesNo("heavyEquipmentUse", "Apakah ada penggunaan alat berat?", {
          detailLabel: "Sebutkan jenis alat berat yang digunakan.",
          showIf: PROJECT,
          section: S_WORK,
        }),

        // ── CPM / MB / EEI / Boiler ──
        { name: "equipmentName", label: "Nama/jenis peralatan", type: "text", required: true, maxLength: 200, showIf: EQUIPMENT, section: S_EQUIP },
        { name: "equipmentBrand", label: "Merek", type: "text", maxLength: 100, showIf: EQUIPMENT, section: S_EQUIP },
        { name: "equipmentModel", label: "Model/tipe", type: "text", maxLength: 100, showIf: EQUIPMENT, section: S_EQUIP },
        { name: "equipmentYear", label: "Tahun pembuatan", type: "year", showIf: EQUIPMENT, section: S_EQUIP },
        { name: "equipmentSerial", label: "Nomor seri", type: "text", maxLength: 100, showIf: EQUIPMENT, section: S_EQUIP },
        { name: "equipmentLocation", label: "Lokasi peralatan", type: "textarea", required: true, maxLength: 500, showIf: EQUIPMENT, section: S_EQUIP },
        { name: "equipmentDescription", label: "Keterangan tambahan", type: "textarea", maxLength: 1000, showIf: EQUIPMENT, section: S_EQUIP },

        // ── Lainnya ──
        { name: "otherDescription", label: "Jelaskan objek yang ingin diasuransikan", type: "textarea", required: true, maxLength: 2000, showIf: OTHER, section: "Objek Pertanggungan" },
      ],
    },
    {
      id: "coverage",
      title: "Coverage & Periode",
      fields: [
        ...currencyFields(),
        // CAR / EAR: nilai dipecah per komponen, total dihitung otomatis
        money("contractWorks", "Contract Works", { required: true, showIf: PROJECT, section: "Nilai Pertanggungan" }),
        money("material", "Material", { showIf: PROJECT, section: "Nilai Pertanggungan" }),
        money("machineryEquipment", "Machinery / Equipment", { showIf: PROJECT, section: "Nilai Pertanggungan" }),
        money("temporaryWorks", "Temporary Works", { showIf: PROJECT, section: "Nilai Pertanggungan" }),
        money("existingProperty", "Existing Property", { showIf: PROJECT, section: "Nilai Pertanggungan" }),
        money("debrisRemoval", "Debris Removal", { showIf: PROJECT, section: "Nilai Pertanggungan" }),
        money("professionalFees", "Professional Fees", { showIf: PROJECT, section: "Nilai Pertanggungan" }),
        money("thirdPartyLiability", "Third Party Liability", { showIf: PROJECT, section: "Nilai Pertanggungan" }),
        money("otherCosts", "Other Costs", { showIf: PROJECT, section: "Nilai Pertanggungan" }),
        {
          name: "totalSumInsured",
          label: "Total Sum Insured",
          type: "money",
          required: true,
          sumOf: ["contractWorks", "material", "machineryEquipment", "temporaryWorks", "existingProperty", "debrisRemoval", "professionalFees", "thirdPartyLiability", "otherCosts"],
          hint: "Dihitung otomatis dari seluruh komponen di atas.",
          showIf: PROJECT,
          section: "Nilai Pertanggungan",
        },
        // Jenis lain: satu nilai
        money("sumInsured", "Nilai pertanggungan (Sum Insured)", { required: true, showIf: NOT_PROJECT, section: "Nilai Pertanggungan" }),
        ...periodFields(),
      ],
    },
    { id: "claims", title: "Riwayat Asuransi & Klaim", fields: claimsFields() },
    { id: "documents", title: "Upload Dokumen", description: "Semua dokumen opsional pada tahap awal. Lampirkan yang sudah tersedia.", fields: [] },
  ],
  documents: [
    { key: "contractSpk", label: "Contract / SPK", showIf: PROJECT },
    { key: "rabBoq", label: "RAB / BOQ", showIf: PROJECT },
    { key: "projectSchedule", label: "Project Schedule", showIf: PROJECT },
    { key: "sitePlan", label: "Site Plan", showIf: PROJECT },
    { key: "layout", label: "Denah / Layout", showIf: PROJECT },
    { key: "riskSurvey", label: "Risk Survey (jika ada)" },
    { key: "sitePhotos", label: "Foto lokasi", multiple: true },
    { key: "technicalDocs", label: "Dokumen teknis", multiple: true },
  ],
  summary: { nameField: "companyName", sumFields: ["totalSumInsured", "sumInsured"] },
};

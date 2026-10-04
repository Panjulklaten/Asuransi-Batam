import type { Condition, Field, ProductConfig } from "../types";
import { GENDERS, money, opts, periodFields, yesNo } from "./shared";

const INDIVIDUAL: Condition = { field: "subType", equals: "individual" };
const GROUPLIKE: Condition = { field: "subType", in: ["family", "group"] };
const EVENT: Condition = { field: "subType", equals: "event" };
const PEOPLE: Condition = { field: "subType", in: ["individual", "family", "group"] };
const DIFFERENT: Condition = { all: [INDIVIDUAL, { field: "insuredDifferent", equals: "ya" }] };
const MANUAL: Condition = { all: [GROUPLIKE, { field: "participantMode", equals: "manual" }] };
const UPLOAD: Condition = { all: [GROUPLIKE, { field: "participantMode", equals: "upload" }] };
const has = (b: string): Condition => ({ field: "benefits", includes: b });

const S_HOLDER = "Data Pemegang Polis";
const S_INSURED = "Data Tertanggung";
const S_JOB = "Informasi Pekerjaan";

const participantItems: Field[] = [
  { name: "name", label: "Nama", type: "text", required: true, maxLength: 100 },
  { name: "nik", label: "NIK", type: "nik", required: true },
  { name: "birthDate", label: "Tanggal lahir", type: "date", required: true, notFuture: true },
  { name: "gender", label: "Jenis kelamin", type: "select", required: true, options: GENDERS },
  { name: "relationship", label: "Hubungan (untuk keluarga)", type: "text", maxLength: 60 },
  { name: "occupation", label: "Pekerjaan", type: "text", maxLength: 100 },
];

export const personalAccidentConfig: ProductConfig = {
  id: "personal_accident",
  label: "Personal Accident",
  description: "Perlindungan kecelakaan diri untuk individu, keluarga, karyawan, atau acara.",
  subTypeField: {
    name: "subType",
    label: "Jenis Peserta",
    type: "radio",
    required: true,
    options: opts([
      ["individual", "Individual"],
      ["family", "Family"],
      ["group", "Group / Employee"],
      ["event", "Event / Activity"],
    ]),
  },
  steps: [
    {
      id: "applicant",
      title: "Data Pemegang Polis",
      fields: [
        { name: "holderName", label: "Nama", type: "text", required: true, maxLength: 100, section: S_HOLDER },
        { name: "nik", label: "NIK", type: "nik", required: true, section: S_HOLDER },
        { name: "birthDate", label: "Tanggal lahir", type: "date", required: true, notFuture: true, section: S_HOLDER },
        { name: "gender", label: "Jenis kelamin", type: "select", required: true, options: GENDERS, section: S_HOLDER },
        { name: "address", label: "Alamat", type: "textarea", required: true, maxLength: 500, section: S_HOLDER },
        { name: "phone", label: "Nomor HP/WhatsApp", type: "tel", required: true, placeholder: "081234567890", section: S_HOLDER },
        { name: "email", label: "Email", type: "email", required: true, section: S_HOLDER },
        { name: "occupation", label: "Pekerjaan", type: "text", required: true, maxLength: 100, section: S_HOLDER },
        {
          name: "occupationType",
          label: "Jenis pekerjaan",
          type: "select",
          required: true,
          options: opts([
            ["employee", "Karyawan swasta"],
            ["civil", "PNS/TNI/Polri"],
            ["self", "Wiraswasta"],
            ["professional", "Profesional"],
            ["student", "Pelajar/Mahasiswa"],
            ["other", "Lainnya"],
          ]),
          section: S_HOLDER,
        },
      ],
    },
    {
      id: "risk",
      title: "Informasi Pekerjaan & Risiko",
      description: "Pertanyaan medis rinci hanya akan diminta jika diperlukan saat underwriting.",
      fields: [
        { name: "mainOccupation", label: "Pekerjaan utama", type: "text", required: true, maxLength: 150, showIf: PEOPLE, section: S_JOB },
        { name: "workActivities", label: "Aktivitas pekerjaan", type: "textarea", required: true, maxLength: 1000, showIf: PEOPLE, section: S_JOB },
        { name: "workLocation", label: "Lokasi pekerjaan", type: "text", required: true, maxLength: 200, showIf: PEOPLE, section: S_JOB },
        ...yesNo("workAtHeights", "Apakah bekerja di ketinggian?", { detail: false, showIf: PEOPLE, section: S_JOB }),
        ...yesNo("workWithMachinery", "Apakah bekerja dengan mesin?", { detail: false, showIf: PEOPLE, section: S_JOB }),
        ...yesNo("workAtSea", "Apakah bekerja di laut?", { detail: false, showIf: PEOPLE, section: S_JOB }),
        ...yesNo("workInConstruction", "Apakah bekerja di area konstruksi?", { detail: false, showIf: PEOPLE, section: S_JOB }),
        ...yesNo("highRiskJob", "Apakah pekerjaan berisiko tinggi?", { detailLabel: "Jelaskan jenis risiko pekerjaan Anda.", showIf: PEOPLE, section: S_JOB }),
        { name: "eventRisk", label: "Jenis kegiatan dan risiko utamanya", type: "textarea", required: true, maxLength: 1500, showIf: EVENT, section: "Kegiatan" },
      ],
    },
    {
      id: "object",
      title: "Data Tertanggung",
      fields: [
        ...yesNo("insuredDifferent", "Apakah tertanggung berbeda dari pemegang polis?", { detail: false, showIf: INDIVIDUAL, section: S_INSURED }),
        { name: "insuredName", label: "Nama tertanggung", type: "text", required: true, maxLength: 100, showIf: DIFFERENT, section: S_INSURED },
        { name: "insuredNik", label: "NIK tertanggung", type: "nik", required: true, showIf: DIFFERENT, section: S_INSURED },
        { name: "insuredBirthDate", label: "Tanggal lahir tertanggung", type: "date", required: true, notFuture: true, showIf: DIFFERENT, section: S_INSURED },
        { name: "insuredGender", label: "Jenis kelamin tertanggung", type: "select", required: true, options: GENDERS, showIf: DIFFERENT, section: S_INSURED },
        { name: "insuredRelationship", label: "Hubungan dengan pemegang polis", type: "text", required: true, maxLength: 60, showIf: DIFFERENT, section: S_INSURED },
        { name: "insuredOccupation", label: "Pekerjaan tertanggung", type: "text", required: true, maxLength: 100, showIf: DIFFERENT, section: S_INSURED },

        {
          name: "participantMode",
          label: "Cara mengisi daftar peserta",
          type: "radio",
          required: true,
          options: opts([["manual", "Isi satu per satu"], ["upload", "Kirim daftar peserta via WhatsApp"]]),
          showIf: GROUPLIKE,
          section: "Daftar Peserta",
        },
        {
          name: "participants",
          label: "Peserta",
          type: "repeatable",
          required: true,
          minItems: 1,
          maxItems: 200,
          itemLabel: "Peserta",
          items: participantItems,
          hint: "Untuk daftar yang panjang, pilih opsi kirim daftar peserta via WhatsApp.",
          showIf: MANUAL,
          section: "Daftar Peserta",
        },
        { name: "eventName", label: "Nama acara/kegiatan", type: "text", required: true, maxLength: 200, showIf: EVENT, section: "Data Acara" },
        { name: "eventLocation", label: "Lokasi acara", type: "text", required: true, maxLength: 200, showIf: EVENT, section: "Data Acara" },
        { name: "eventParticipants", label: "Perkiraan jumlah peserta", type: "number", required: true, min: 1, max: 1000000, showIf: EVENT, section: "Data Acara" },
      ],
    },
    {
      id: "coverage",
      title: "Manfaat & Periode",
      fields: [
        {
          name: "benefits",
          label: "Manfaat yang dipilih",
          type: "checkboxes",
          required: true,
          options: opts([
            ["accidental_death", "Accidental Death"],
            ["permanent_disablement", "Permanent Disablement"],
            ["temporary_disablement", "Temporary Disablement"],
            ["medical_expenses", "Medical Expenses"],
            ["funeral_expenses", "Funeral Expenses"],
            ["weekly_benefit", "Weekly Benefit"],
          ]),
          hint: "Nilai dalam Rupiah (IDR). Untuk grup, isi nilai per orang.",
          section: "Manfaat",
        },
        money("accidentalDeathSI", "Sum Insured – Accidental Death (IDR)", { required: true, showIf: has("accidental_death"), section: "Manfaat" }),
        money("permanentDisablementSI", "Sum Insured – Permanent Disablement (IDR)", { required: true, showIf: has("permanent_disablement"), section: "Manfaat" }),
        money("temporaryDisablementSI", "Sum Insured – Temporary Disablement (IDR)", { required: true, showIf: has("temporary_disablement"), section: "Manfaat" }),
        money("medicalExpensesSI", "Sum Insured – Medical Expenses (IDR)", { required: true, showIf: has("medical_expenses"), section: "Manfaat" }),
        money("funeralExpensesSI", "Sum Insured – Funeral Expenses (IDR)", { required: true, showIf: has("funeral_expenses"), section: "Manfaat" }),
        money("weeklyBenefitSI", "Sum Insured – Weekly Benefit (IDR per minggu)", { required: true, showIf: has("weekly_benefit"), section: "Manfaat" }),
        ...periodFields("Periode Pertanggungan"),
      ],
    },
    {
      id: "claims",
      title: "Riwayat",
      fields: [
        ...yesNo("hadPA", "Pernah memiliki asuransi Personal Accident sebelumnya?", { detailLabel: "Sebutkan perusahaan asuransi dan periodenya.", section: "Riwayat" }),
        ...yesNo("hadAccident", "Pernah mengalami kecelakaan?", { detailLabel: "Jelaskan kejadian singkat (kapan dan akibatnya).", section: "Riwayat" }),
        ...yesNo("hadPAClaim", "Pernah mengajukan klaim?", { detailLabel: "Jelaskan klaim tersebut (tahun, nilai, penyebab).", section: "Riwayat" }),
      ],
    },
    { id: "documents", title: "Dokumen Pendukung", description: "Dokumen dikirim lewat WhatsApp setelah SPPA terkirim. Daftar peserta wajib dikirim jika Anda memilih opsi tersebut.", fields: [] },
  ],
  documents: [
    { key: "participantList", label: "Daftar peserta", hint: "Nama, NIK, tanggal lahir, jenis kelamin, pekerjaan.", required: true, showIf: UPLOAD },
    { key: "eventDocs", label: "Rundown / izin acara (jika ada)", showIf: EVENT, multiple: true },
    { key: "otherDocs", label: "Dokumen pendukung lainnya", multiple: true },
  ],
  summary: { nameField: "holderName", sumFields: [] },
};




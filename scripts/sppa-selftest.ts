// Self-test logika SPPA (tanpa framework test). Jalankan: npx tsx scripts/sppa-selftest.ts
import { PRODUCTS, PRODUCT_LIST, getProduct } from "../src/lib/sppa/productConfig";
import { evaluate, flattenFields, visibleSteps } from "../src/lib/sppa/conditions";
import { extractSummary, normalizePhone, requestedDocuments, validateFields, validateSubmission } from "../src/lib/sppa/validation";
import { generateReferenceNo, REFERENCE_PATTERN } from "../src/lib/sppa/reference";
import { sanitizeText, sanitizeMultiline } from "../src/lib/sppa/sanitize";
import { validateDeclaration, DECLARATION_ITEMS } from "../src/lib/sppa/declaration";
import { submissionEnvelope } from "../src/lib/sppa/schema";

let pass = 0, fail = 0;
function t(name: string, cond: boolean, extra?: unknown) {
  if (cond) pass++; else { fail++; console.log("FAIL:", name, extra ?? ""); }
}
const NIK = "3171234567890001";
const base = { picName: "Budi", picTitle: "Manajer", phone: "0812-3456-7890", email: "Budi@Contoh.com", address: "Jl. Contoh No. 1, Batam", companyName: "PT Contoh", businessType: "Konstruksi" };
const noClaims = { insuredBefore: "tidak", hadClaim: "tidak" };

// ── Struktur config ──
for (const p of PRODUCT_LIST) {
  const names = flattenFields(p).map((f) => f.name);
  t(`${p.id}: nama field unik`, new Set(names).size === names.length, names.filter((n, i) => names.indexOf(n) !== i));
  for (const f of flattenFields(p)) {
    if (f.sumOf) t(`${p.id}.${f.name}: sumOf valid`, f.sumOf.every((n) => names.includes(n)));
    if (f.notBefore) t(`${p.id}.${f.name}: notBefore valid`, names.includes(f.notBefore));
    if (["select", "radio", "yesno", "checkboxes"].includes(f.type)) t(`${p.id}.${f.name}: punya options`, !!f.options?.length);
  }
  for (const f of flattenFields(p)) {
    const refs: string[] = [];
    const walk = (c: any): void => { if (!c) return; if (c.all) c.all.forEach(walk); else if (c.any) c.any.forEach(walk); else refs.push(c.field); };
    walk(f.showIf);
    for (const r of refs) t(`${p.id}.${f.name}: showIf merujuk field yang ada & lebih dulu`, names.includes(r) && names.indexOf(r) < names.indexOf(f.name), r);
  }
}

// ── Engineering CAR valid ──
const eng = PRODUCTS.engineering;
const car = {
  subType: "car", ...base, website: "contoh.com",
  floodArea: "tidak", earthquakeZone: "ya", earthquakeZoneDetail: "Zona gempa sedang", nearWater: "tidak",
  undergroundWork: "tidak", hotWork: "tidak", liftingWork: "tidak", heightWork: "ya", heightWorkDetail: "Lantai 10", electricalWork: "tidak", hazardousMaterial: "tidak",
  projectName: "Gedung A", projectLocation: "Batam", projectAddress: "Batam Center", projectType: "Gedung", ownerName: "PT Owner", mainContractor: "PT Kontraktor",
  contractValue: "10.000.000.000", projectStart: "2026-11-01", projectEnd: "2027-11-01", workDescription: "Pembangunan gedung 5 lantai", heavyEquipmentUse: "tidak",
  currency: "IDR", contractWorks: "8.000.000.000", material: "1000000000", totalSumInsured: "1", policyStart: "2026-11-01", policyEnd: "2027-11-01", ...noClaims,
};
let r = validateSubmission(eng, car);
t("CAR valid", r.ok, r.errors);
t("CAR total dihitung server (abaikan nilai klien)", r.values.totalSumInsured === "9000000000", r.values.totalSumInsured);
t("CAR: email lowercase", r.values.email === "budi@contoh.com");
t("CAR: HP dinormalisasi", r.values.phone === "6281234567890");
t("CAR: website dinormalisasi", r.values.website === "https://contoh.com/");
t("CAR: field peralatan tidak ikut", !("equipmentName" in r.values));
t("CAR: summary", extractSummary(eng, r.values).sumInsured === 9000000000 && extractSummary(eng, r.values).currency === "IDR");

// kondisional: Ya tanpa detail → error
r = validateSubmission(eng, { ...car, earthquakeZoneDetail: "" });
t("Ya tanpa detail → error", !r.ok && !!r.errors.earthquakeZoneDetail);
// Tidak → detail basi dibuang
r = validateSubmission(eng, { ...car, floodArea: "tidak", floodAreaDetail: "sisa lama" });
t("detail basi dibuang", r.ok && !("floodAreaDetail" in r.values));
// tanggal selesai sebelum mulai
r = validateSubmission(eng, { ...car, projectEnd: "2026-10-01" });
t("tanggal selesai < mulai ditolak", !!r.errors.projectEnd);
r = validateSubmission(eng, { ...car, policyEnd: "2026-01-01" });
t("periode polis terbalik ditolak", !!r.errors.policyEnd);
// angka / email / telp
r = validateSubmission(eng, { ...car, contractWorks: "abc", email: "bukan-email", phone: "123" });
t("money non-angka ditolak", !!r.errors.contractWorks);
t("email invalid ditolak", !!r.errors.email);
t("telp invalid ditolak", !!r.errors.phone);
r = validateSubmission(eng, { ...car, contractValue: "10.5" });
t("money desimal ambigu ditolak (tidak diam-diam jadi 105)", !!r.errors.contractValue);
// subtype CPM: tidak butuh field proyek
const cpm = { subType: "cpm", ...base, floodArea: "tidak", earthquakeZone: "tidak", nearWater: "tidak", equipmentName: "Excavator", equipmentLocation: "Batam", currency: "USD", sumInsured: "50000", policyStart: "2026-11-01", policyEnd: "2027-11-01", ...noClaims };
r = validateSubmission(eng, cpm);
t("CPM valid tanpa field proyek", r.ok, r.errors);
t("CPM: pertanyaan pekerjaan tidak diminta", !("hotWork" in r.values));
t("CPM: summary USD", extractSummary(eng, r.values).currency === "USD");
r = validateSubmission(eng, { ...cpm, currency: "other" });
t("currency=other butuh nama mata uang", !!r.errors.currencyOther);
r = validateSubmission(eng, { ...cpm, subType: "xyz" });
t("subType tidak valid ditolak", !!r.errors.subType);
r = validateSubmission(eng, { ...cpm, hadClaim: "ya" });
t("klaim Ya → detail wajib", !!r.errors.claimCount && !!r.errors.claimCause && !!r.errors.claimTotal);
// jawaban basi: subType berubah dari car ke cpm, field proyek lama tidak lolos
r = validateSubmission(eng, { ...cpm, projectName: "sisa", contractWorks: "999" });
t("field subtype lain dibuang", r.ok && !("projectName" in r.values) && !("contractWorks" in r.values));
t("langkah tampil sesuai subtype", visibleSteps(eng, { subType: "cpm" }).length === 6);

// ── XSS / sanitasi ──
r = validateSubmission(eng, { ...cpm, equipmentName: "<script>alert(1)</script>Crane\u202E" });
t("tag HTML & bidi dibuang", r.values.equipmentName === "alert(1)Crane", r.values.equipmentName);
t("teks '< 5 m' tidak rusak", sanitizeText("tinggi < 5 m dan > 3 m") === "tinggi < 5 m dan > 3 m");
t("multiline dirapikan", sanitizeMultiline("a\r\n\r\n\r\n\r\nb  c") === "a\n\nb c");
t("maxLength ditolak (tidak dipotong diam-diam)", !!validateFields([{ name: "x", label: "x", type: "text", maxLength: 5, required: true }], { x: "abcdefg" }).errors.x);

// ── Marine Hull ──
const hull = PRODUCTS.marine_hull;
const hullVals = {
  ...base, vesselPurpose: "Angkut", vesselActivity: "Tarik tongkang", tradingArea: "Indonesia", route: "Batam-Jakarta",
  domesticOnly: "tidak", international: "ya", internationalDetail: "Singapura", warPiracyArea: "tidak",
  vesselName: "TB Contoh", vesselType: "other", vesselTypeOther: "Pontoon", flag: "Indonesia", portOfRegistry: "Batam", yearBuilt: "2015", hullMaterial: "Baja", grossTonnage: "150,5",
  lastDryDock: "2025-01-01", nextDryDock: "2024-01-01", classification: "classed", classSociety: "BKI", classStatus: "Aktif",
  currency: "IDR", hullMachinerySI: "5000000000", policyStart: "2026-11-01", policyEnd: "2027-11-01", ...noClaims,
};
r = validateSubmission(hull, hullVals);
t("Hull: dry dock berikutnya sebelum terakhir ditolak", !!r.errors.nextDryDock);
r = validateSubmission(hull, { ...hullVals, nextDryDock: "2027-01-01" });
t("Hull valid", r.ok, r.errors);
t("Hull: GT desimal koma → titik", r.values.grossTonnage === "150.5");
r = validateSubmission(hull, { ...hullVals, nextDryDock: "2027-01-01", vesselTypeOther: "", yearBuilt: "1800", classSociety: "" });
t("Hull: kondisional other/class/tahun", !!r.errors.vesselTypeOther && !!r.errors.yearBuilt && !!r.errors.classSociety);
t("Hull: dokumen class tampil jika berklasifikasi", evaluate(hull.documents.find((d) => d.key === "classCertificate")!.showIf, { classification: "classed" }));

// ── Marine Cargo ──
const cargo = PRODUCTS.marine_cargo;
const cargoVals = {
  ...base, fragile: "tidak", hazardous: "tidak", temperatureControl: "ya", temperatureControlDetail: "2–8°C", shipmentPattern: "open_cover", shipmentsPerYear: "24", annualTurnover: "1000000000", annualCargoValue: "900000000",
  goodsType: "Elektronik", goodsName: "Laptop", packing: "Karton", unitCount: "100",
  originCity: "Batam", originCountry: "Indonesia", destCity: "Jakarta", destCountry: "Indonesia", transportMode: "sea", seaType: "container",
  currency: "IDR", invoiceValue: "500000000", freight: "10000000", coverageClauses: ["icc_a", "custom"], coverageNote: "Tambah banjir",
  policyStart: "2026-11-01", policyEnd: "2027-11-01", ...noClaims,
};
r = validateSubmission(cargo, cargoVals);
t("Cargo open cover valid", r.ok, r.errors);
t("Cargo: sumInsured = invoice+freight", r.values.sumInsured === "510000000", r.values.sumInsured);
t("Cargo: ETD tidak diminta pada open cover", !("shipmentDate" in r.values));
r = validateSubmission(cargo, { ...cargoVals, shipmentPattern: "single" });
t("Cargo single → ETD wajib, periode & annual dibuang", !!r.errors.shipmentDate && !("policyStart" in r.values) && !("annualTurnover" in r.values), r.errors);
r = validateSubmission(cargo, { ...cargoVals, coverageClauses: ["icc_a", "hack"] });
t("Cargo: opsi checkbox invalid ditolak", !!r.errors.coverageClauses);
r = validateSubmission(cargo, { ...cargoVals, coverageClauses: ["icc_a"], coverageNote: "" });
t("Cargo: catatan tidak wajib tanpa additional/custom", r.ok, r.errors);
r = validateSubmission(cargo, { ...cargoVals, transportMode: "air" });
t("Cargo: seaType hanya untuk sea", !("seaType" in r.values) && r.ok, r.errors);

// ── Personal Accident ──
const pa = PRODUCTS.personal_accident;
const paBase = {
  holderName: "Siti", nik: NIK, birthDate: "1990-05-05", gender: "P", address: "Batam", phone: "+6281234567890", email: "siti@contoh.com", occupation: "Guru", occupationType: "civil",
  mainOccupation: "Guru", workActivities: "Mengajar", workLocation: "Sekolah", workAtHeights: "tidak", workWithMachinery: "tidak", workAtSea: "tidak", workInConstruction: "tidak", highRiskJob: "tidak",
  benefits: ["accidental_death", "medical_expenses"], accidentalDeathSI: "100.000.000", medicalExpensesSI: "10000000", policyStart: "2026-11-01", policyEnd: "2027-11-01",
  hadPA: "tidak", hadAccident: "tidak", hadPAClaim: "tidak",
};
r = validateSubmission(pa, { subType: "individual", insuredDifferent: "tidak", ...paBase });
t("PA individual valid", r.ok, r.errors);
t("PA: SI manfaat yang tidak dipilih dibuang", !("funeralExpensesSI" in r.values));
r = validateSubmission(pa, { subType: "individual", insuredDifferent: "ya", ...paBase });
t("PA: tertanggung berbeda → field wajib", !!r.errors.insuredName && !!r.errors.insuredNik);
r = validateSubmission(pa, { subType: "individual", insuredDifferent: "tidak", ...paBase, nik: "123" , birthDate: "2999-01-01" });
t("PA: NIK & tanggal lahir masa depan ditolak", !!r.errors.nik && !!r.errors.birthDate);
r = validateSubmission(pa, { subType: "individual", insuredDifferent: "tidak", ...paBase, benefits: ["weekly_benefit"] });
t("PA: manfaat dipilih → SI wajib", !!r.errors.weeklyBenefitSI);
r = validateSubmission(pa, { subType: "individual", insuredDifferent: "tidak", ...paBase, benefits: [] });
t("PA: minimal satu manfaat", !!r.errors.benefits);
const grpPeople = [{ name: "A", nik: NIK, birthDate: "1990-01-01", gender: "L" }, { name: "B", nik: "1", birthDate: "bad", gender: "X" }];
r = validateSubmission(pa, { subType: "group", participantMode: "manual", participants: grpPeople, ...paBase });
t("PA group: error per baris peserta", !!r.errors["participants.1.nik"] && !!r.errors["participants.1.birthDate"] && !!r.errors["participants.1.gender"] && !r.errors["participants.0.nik"], r.errors);
r = validateSubmission(pa, { subType: "group", participantMode: "manual", participants: [grpPeople[0]], ...paBase });
t("PA group manual valid", r.ok, r.errors);
r = validateSubmission(pa, { subType: "group", participantMode: "manual", participants: [], ...paBase });
t("PA group: minimal 1 peserta", !!r.errors.participants);
r = validateSubmission(pa, { subType: "group", participantMode: "upload", participants: grpPeople, ...paBase });
t("PA group upload: peserta manual dibuang", r.ok && !("participants" in r.values), r.errors);
t("PA group via WA: daftar peserta diminta", requestedDocuments(pa, r.values).some((d) => d.key === "participantList" && d.required));
t("PA individual: daftar peserta tidak diminta", !requestedDocuments(pa, validateSubmission(pa, { subType: "individual", ...paBase }).values).some((d) => d.key === "participantList"));
r = validateSubmission(pa, { subType: "event", eventRisk: "Lomba lari", eventName: "Fun Run", eventLocation: "Batam", eventParticipants: "500", ...paBase });
t("PA event valid; pertanyaan pekerjaan tidak diminta", r.ok && !("workAtSea" in r.values), r.errors);
t("PA event: langkah risiko tetap tampil", visibleSteps(pa, { subType: "event" }).some((s) => s.id === "risk"));
t("PA: summary tanpa nilai", extractSummary(pa, r.values).sumInsured === null && extractSummary(pa, r.values).applicantName === "Siti");
const many = Array.from({ length: 201 }, () => grpPeople[0]);
r = validateSubmission(pa, { subType: "group", participantMode: "manual", participants: many, ...paBase });
t("PA group: maks 200 peserta", !!r.errors.participants);

// ── Util ──
t("normalizePhone variasi", ["081234567890", "+62 812-3456-7890", "6281234567890"].every((x) => normalizePhone(x) === "6281234567890") && normalizePhone("0211234567") === null);
const refs = new Set<string>();
for (let i = 0; i < 3000; i++) { const x = generateReferenceNo(new Date("2026-10-04")); t("format referensi", REFERENCE_PATTERN.test(x), x); refs.add(x); }
t("referensi unik (3000 sampel)", refs.size === 3000, refs.size);
t("deklarasi: semua wajib", validateDeclaration([]) !== null && validateDeclaration(DECLARATION_ITEMS.map((i) => i.id)) === null && validateDeclaration(["truthful"]) !== null);
t("envelope: honeypot terisi ditolak", !submissionEnvelope.safeParse({ product: "engineering", values: {}, declaration: { accepted: [] }, startedAt: 1, website: "x" }).success);
t("envelope: valid", submissionEnvelope.safeParse({ product: "engineering", values: { a: 1 }, declaration: { accepted: [] }, startedAt: 1 }).success);
t("getProduct menolak __proto__/constructor", getProduct("__proto__") === null && getProduct("constructor") === null && getProduct("engineering") !== null);

console.log(`\n${pass} lulus, ${fail} gagal`);
process.exit(fail ? 1 : 0);

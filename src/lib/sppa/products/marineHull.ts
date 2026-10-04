import type { Condition, ProductConfig } from "../types";
import { claimsFields, companyApplicantFields, currencyFields, money, opts, periodFields, yesNo } from "./shared";

const OTHER_VESSEL: Condition = { field: "vesselType", equals: "other" };
const CLASSED: Condition = { field: "classification", equals: "classed" };
const S_ID = "Identitas Kapal";
const S_SPEC = "Spesifikasi";
const S_ENGINE = "Mesin";
const S_COND = "Kondisi Kapal";

export const marineHullConfig: ProductConfig = {
  id: "marine_hull",
  label: "Marine Hull",
  description: "Asuransi badan kapal dan permesinan.",
  steps: [
    {
      id: "applicant",
      title: "Data Tertanggung",
      fields: companyApplicantFields({ companyLabel: "Nama perusahaan / Tertanggung" }),
    },
    {
      id: "risk",
      title: "Penggunaan & Navigasi",
      fields: [
        { name: "vesselPurpose", label: "Purpose of Vessel (tujuan penggunaan kapal)", type: "text", required: true, maxLength: 200, section: "Penggunaan Kapal" },
        { name: "cargoType", label: "Jenis muatan", type: "text", maxLength: 200, section: "Penggunaan Kapal" },
        { name: "vesselActivity", label: "Aktivitas kapal", type: "textarea", required: true, maxLength: 1000, section: "Penggunaan Kapal" },
        { name: "tradingArea", label: "Trading Area", type: "text", required: true, maxLength: 200, section: "Navigasi" },
        { name: "route", label: "Rute pelayaran", type: "text", required: true, maxLength: 300, section: "Navigasi" },
        { name: "usualPorts", label: "Pelabuhan yang biasa disinggahi", type: "textarea", maxLength: 500, section: "Navigasi" },
        { name: "operatingRegion", label: "Wilayah operasi", type: "text", maxLength: 300, section: "Navigasi" },
        ...yesNo("domesticOnly", "Apakah beroperasi di Indonesia saja?", {
          detail: false,
          section: "Navigasi",
        }),
        ...yesNo("international", "Apakah beroperasi internasional?", {
          detailLabel: "Sebutkan negara/pelabuhan tujuan internasional.",
          section: "Navigasi",
        }),
        ...yesNo("warPiracyArea", "Apakah pernah beroperasi di area perang/piracy?", {
          detailLabel: "Jelaskan area, waktu, dan kondisi pengamanan.",
          section: "Navigasi",
        }),
      ],
    },
    {
      id: "object",
      title: "Data Kapal",
      fields: [
        { name: "vesselName", label: "Nama kapal", type: "text", required: true, maxLength: 150, section: S_ID },
        {
          name: "vesselType",
          label: "Jenis kapal",
          type: "select",
          required: true,
          section: S_ID,
          options: opts([
            ["cargo", "Cargo Vessel"],
            ["tug", "Tug Boat"],
            ["barge", "Barge"],
            ["tanker", "Tanker"],
            ["container", "Container Vessel"],
            ["passenger", "Passenger Vessel"],
            ["fishing", "Fishing Vessel"],
            ["work_boat", "Work Boat"],
            ["offshore", "Offshore Vessel"],
            ["landing_craft", "Landing Craft"],
            ["supply", "Supply Vessel"],
            ["other", "Other"],
          ]),
        },
        { name: "vesselTypeOther", label: "Sebutkan jenis kapal", type: "text", required: true, maxLength: 100, showIf: OTHER_VESSEL, section: S_ID },
        { name: "imoNumber", label: "IMO Number", type: "text", maxLength: 20, hint: "Kosongkan jika tidak ada.", section: S_ID },
        { name: "mmsiNumber", label: "MMSI Number", type: "text", maxLength: 20, section: S_ID },
        { name: "callSign", label: "Call Sign", type: "text", maxLength: 20, section: S_ID },
        { name: "flag", label: "Flag (bendera)", type: "text", required: true, maxLength: 60, section: S_ID },
        { name: "portOfRegistry", label: "Port of Registry", type: "text", required: true, maxLength: 100, section: S_ID },
        { name: "yearBuilt", label: "Tahun pembuatan", type: "year", required: true, section: S_ID },
        { name: "shipyard", label: "Shipyard pembuat", type: "text", maxLength: 150, section: S_ID },
        { name: "buildCountry", label: "Negara pembuat", type: "text", maxLength: 60, section: S_ID },
        { name: "hullMaterial", label: "Material konstruksi", type: "text", required: true, maxLength: 60, placeholder: "mis. baja, aluminium, fiberglass", section: S_ID },

        { name: "grossTonnage", label: "Gross Tonnage (GT)", type: "number", required: true, min: 0, section: S_SPEC },
        { name: "netTonnage", label: "Net Tonnage (NT)", type: "number", min: 0, section: S_SPEC },
        { name: "deadweight", label: "Deadweight Tonnage (DWT)", type: "number", min: 0, section: S_SPEC },
        { name: "lengthM", label: "Panjang kapal (m)", type: "number", min: 0, section: S_SPEC },
        { name: "breadthM", label: "Lebar kapal (m)", type: "number", min: 0, section: S_SPEC },
        { name: "draftM", label: "Draft (m)", type: "number", min: 0, section: S_SPEC },

        { name: "mainEngine", label: "Main Engine", type: "text", maxLength: 150, section: S_ENGINE },
        { name: "engineMaker", label: "Engine Manufacturer", type: "text", maxLength: 100, section: S_ENGINE },
        { name: "enginePower", label: "Engine Power (HP/kW)", type: "text", maxLength: 50, section: S_ENGINE },
        { name: "engineCount", label: "Jumlah mesin", type: "number", min: 0, max: 20, section: S_ENGINE },
        { name: "fuelType", label: "Jenis bahan bakar", type: "text", maxLength: 60, section: S_ENGINE },

        { name: "lastDryDock", label: "Dry Dock terakhir", type: "date", section: S_COND },
        { name: "nextDryDock", label: "Dry Dock berikutnya", type: "date", notBefore: "lastDryDock", section: S_COND },
        { name: "lastSurveyYear", label: "Tahun terakhir survey", type: "year", section: S_COND },
        { name: "surveyorName", label: "Nama surveyor", type: "text", maxLength: 150, section: S_COND },
        {
          name: "classification",
          label: "Klasifikasi kapal",
          type: "radio",
          required: true,
          options: opts([["classed", "Berklasifikasi"], ["unclassed", "Tidak berklasifikasi"]]),
          section: S_COND,
        },
        { name: "classSociety", label: "Class Society", type: "text", required: true, maxLength: 100, placeholder: "mis. BKI, ABS, LR", showIf: CLASSED, section: S_COND },
        { name: "classStatus", label: "Status Class", type: "text", required: true, maxLength: 100, showIf: CLASSED, section: S_COND },
        { name: "engineCondition", label: "Kondisi mesin", type: "textarea", maxLength: 500, section: S_COND },
      ],
    },
    {
      id: "coverage",
      title: "Coverage & Periode",
      fields: [
        ...currencyFields(),
        money("hullMachinerySI", "Hull & Machinery Sum Insured", { required: true, section: "Nilai Kapal" }),
        money("machinerySI", "Machinery", { hint: "Jika dipisahkan dari nilai Hull & Machinery.", section: "Nilai Kapal" }),
        money("equipmentSI", "Equipment", { section: "Nilai Kapal" }),
        money("increasedValue", "Increased Value (jika ada)", { section: "Nilai Kapal" }),
        money("freightInterest", "Freight Interest (jika ada)", { section: "Nilai Kapal" }),
        ...periodFields(),
      ],
    },
    {
      id: "claims",
      title: "Riwayat Asuransi & Klaim",
      fields: claimsFields({ claimQuestion: "Pernah mengalami klaim dalam 3–5 tahun terakhir?", claimType: true }),
    },
    { id: "documents", title: "Upload Dokumen", description: "Semua dokumen opsional pada tahap awal. Lampirkan yang sudah tersedia.", fields: [] },
  ],
  documents: [
    { key: "shipParticular", label: "Ship Particular" },
    { key: "certificateOfRegistry", label: "Certificate of Registry" },
    { key: "classCertificate", label: "Class Certificate", showIf: CLASSED },
    { key: "safetyCertificate", label: "Safety Certificate" },
    { key: "vesselPhotos", label: "Foto kapal", multiple: true },
    { key: "valuation", label: "Valuation / Appraisal (jika ada)" },
    { key: "previousPolicy", label: "Previous Insurance Policy" },
    { key: "claimsRecord", label: "Claims Record" },
  ],
  summary: { nameField: "companyName", sumFields: ["hullMachinerySI"] },
};

import type { Condition, ProductConfig } from "../types";
import { claimsFields, companyApplicantFields, currencyFields, money, opts, yesNo } from "./shared";

const SINGLE: Condition = { field: "shipmentPattern", equals: "single" };
const OPEN: Condition = { field: "shipmentPattern", equals: "open_cover" };
const SEA: Condition = { field: "transportMode", equals: "sea" };
const NEEDS_NOTE: Condition = { any: [{ field: "coverageClauses", includes: "additional" }, { field: "coverageClauses", includes: "custom" }] };

const S_GOODS = "Informasi Barang";
const S_ORIGIN = "Asal (Origin)";
const S_DEST = "Tujuan (Destination)";
const S_MODE = "Moda Transportasi";
const S_SHIP = "Detail Pengiriman (opsional)";
const S_VAL = "Nilai Cargo";

export const marineCargoConfig: ProductConfig = {
  id: "marine_cargo",
  label: "Marine Cargo",
  description: "Asuransi pengiriman barang via laut, udara, atau darat.",
  steps: [
    {
      id: "applicant",
      title: "Data Tertanggung",
      fields: companyApplicantFields({ businessType: true }),
    },
    {
      id: "risk",
      title: "Karakter Barang & Pola Pengiriman",
      fields: [
        ...yesNo("fragile", "Apakah barang mudah rusak?", { detailLabel: "Jelaskan sifat kerentanan barang.", section: "Karakter Barang" }),
        ...yesNo("hazardous", "Apakah barang berbahaya?", { detailLabel: "Sebutkan jenis dan klasifikasi bahan berbahaya (mis. kelas IMDG, jika ada).", section: "Karakter Barang" }),
        ...yesNo("temperatureControl", "Apakah barang membutuhkan temperature control?", { detailLabel: "Sebutkan kisaran suhu yang dibutuhkan.", section: "Karakter Barang" }),
        {
          name: "shipmentPattern",
          label: "Apakah pengiriman hanya satu kali atau rutin?",
          type: "radio",
          required: true,
          options: opts([["single", "Single Shipment"], ["open_cover", "Open Cover / Annual"]]),
          section: "Pola Pengiriman",
        },
        { name: "shipmentsPerYear", label: "Estimasi jumlah shipment per tahun", type: "number", required: true, min: 1, max: 100000, showIf: OPEN, section: "Pola Pengiriman" },
        money("annualTurnover", "Estimasi annual turnover", { required: true, showIf: OPEN, section: "Pola Pengiriman" }),
        money("annualCargoValue", "Estimasi total cargo value per tahun", { required: true, showIf: OPEN, section: "Pola Pengiriman" }),
      ],
    },
    {
      id: "object",
      title: "Barang & Pengangkutan",
      fields: [
        { name: "goodsType", label: "Jenis barang", type: "text", required: true, maxLength: 150, section: S_GOODS },
        { name: "goodsName", label: "Nama barang", type: "text", required: true, maxLength: 200, section: S_GOODS },
        { name: "goodsDescription", label: "Deskripsi barang", type: "textarea", maxLength: 1000, section: S_GOODS },
        { name: "hsCode", label: "HS Code (opsional)", type: "text", maxLength: 20, section: S_GOODS },
        { name: "packing", label: "Packing", type: "text", required: true, maxLength: 100, placeholder: "mis. karton, pallet, drum", section: S_GOODS },
        { name: "unitCount", label: "Jumlah unit", type: "number", required: true, min: 0, section: S_GOODS },
        { name: "weightKg", label: "Berat (kg)", type: "number", min: 0, section: S_GOODS },
        { name: "volumeM3", label: "Volume (m³)", type: "number", min: 0, section: S_GOODS },

        { name: "originCity", label: "Kota asal", type: "text", required: true, maxLength: 100, section: S_ORIGIN },
        { name: "originCountry", label: "Negara asal", type: "text", required: true, maxLength: 100, defaultValue: "Indonesia", section: S_ORIGIN },
        { name: "originPort", label: "Pelabuhan/Bandara asal", type: "text", maxLength: 150, section: S_ORIGIN },
        { name: "destCity", label: "Kota tujuan", type: "text", required: true, maxLength: 100, section: S_DEST },
        { name: "destCountry", label: "Negara tujuan", type: "text", required: true, maxLength: 100, section: S_DEST },
        { name: "destPort", label: "Pelabuhan/Bandara tujuan", type: "text", maxLength: 150, section: S_DEST },

        {
          name: "transportMode",
          label: "Moda transportasi",
          type: "radio",
          required: true,
          options: opts([["sea", "Sea (laut)"], ["air", "Air (udara)"], ["land", "Land (darat)"], ["multimodal", "Multimodal"]]),
          section: S_MODE,
        },
        {
          name: "seaType",
          label: "Jenis pengiriman laut",
          type: "select",
          required: true,
          options: opts([["container", "Container"], ["bulk", "Bulk"], ["break_bulk", "Break Bulk"], ["general", "General Cargo"]]),
          showIf: SEA,
          section: S_MODE,
        },

        { name: "vesselNameCargo", label: "Nama kapal", type: "text", maxLength: 150, section: S_SHIP },
        { name: "voyageNumber", label: "Voyage Number", type: "text", maxLength: 50, section: S_SHIP },
        { name: "shippingLine", label: "Shipping Line", type: "text", maxLength: 100, section: S_SHIP },
        { name: "containerNumber", label: "Container Number", type: "text", maxLength: 100, section: S_SHIP },
        { name: "billOfLading", label: "Bill of Lading", type: "text", maxLength: 100, section: S_SHIP },
        { name: "invoiceNumber", label: "Invoice Number", type: "text", maxLength: 100, section: S_SHIP },
        { name: "purchaseOrder", label: "Purchase Order", type: "text", maxLength: 100, section: S_SHIP },
      ],
    },
    {
      id: "coverage",
      title: "Coverage & Nilai Cargo",
      fields: [
        ...currencyFields(),
        money("invoiceValue", "Invoice Value", { required: true, section: S_VAL }),
        money("freight", "Freight", { section: S_VAL }),
        money("insuranceCost", "Insurance", { section: S_VAL }),
        money("otherCosts", "Other Costs", { section: S_VAL }),
        {
          name: "sumInsured",
          label: "Sum Insured",
          type: "money",
          required: true,
          sumOf: ["invoiceValue", "freight", "insuranceCost", "otherCosts"],
          hint: "Dihitung otomatis dari komponen di atas.",
          section: S_VAL,
        },
        {
          name: "coverageClauses",
          label: "Kebutuhan perlindungan",
          type: "checkboxes",
          required: true,
          hint: "Ini hanya pilihan kebutuhan Anda. Wording dan syarat polis ditentukan oleh perusahaan asuransi.",
          options: opts([
            ["icc_a", "ICC (A)"],
            ["icc_b", "ICC (B)"],
            ["icc_c", "ICC (C)"],
            ["war", "Institute War Clauses"],
            ["strikes", "Institute Strikes Clauses"],
            ["additional", "Additional Cover"],
            ["custom", "Custom"],
          ]),
          section: "Coverage",
        },
        { name: "coverageNote", label: "Jelaskan kebutuhan tambahan/custom", type: "textarea", required: true, maxLength: 1000, showIf: NEEDS_NOTE, section: "Coverage" },
        { name: "shipmentDate", label: "Estimasi tanggal pengiriman (ETD)", type: "date", required: true, showIf: SINGLE, section: "Periode" },
        { name: "policyStart", label: "Tanggal mulai pertanggungan", type: "date", required: true, showIf: OPEN, section: "Periode" },
        { name: "policyEnd", label: "Tanggal berakhir pertanggungan", type: "date", required: true, notBefore: "policyStart", showIf: OPEN, section: "Periode" },
      ],
    },
    {
      id: "claims",
      title: "Riwayat Asuransi & Klaim",
      fields: claimsFields({ claimQuestion: "Pernah mengalami klaim dalam 3–5 tahun terakhir?", frequency: true, totalLabel: "Total nilai klaim" }),
    },
    { id: "documents", title: "Upload Dokumen", description: "Semua dokumen opsional pada tahap awal. Lampirkan yang sudah tersedia.", fields: [] },
  ],
  documents: [
    { key: "commercialInvoice", label: "Commercial Invoice" },
    { key: "packingList", label: "Packing List" },
    { key: "billOfLadingDoc", label: "Bill of Lading / AWB" },
    { key: "purchaseOrderDoc", label: "Purchase Order" },
    { key: "shippingSchedule", label: "Shipping Schedule" },
    { key: "previousPolicy", label: "Previous Policy" },
    { key: "claimsExperience", label: "Claims Experience" },
  ],
  summary: { nameField: "companyName", sumFields: ["sumInsured"] },
};

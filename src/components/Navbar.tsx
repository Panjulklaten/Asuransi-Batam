"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Calculator,
  Car,
  Bike,
  Building2,
  FileText,
  ArrowRight,
} from "lucide-react";
import { QUOTE_CLUSTERS, type QuoteClusterKey } from "@/lib/quote";

// Modal penawaran baru dimuat saat dibuka, supaya tidak menambah beban halaman.
const QuoteModal = dynamic(() => import("./quote/QuoteModal"), { ssr: false });

// ─── URL mapping: Indonesian ↔ English ───────────────────────────────────────
const URL_MAP: Record<string, string> = {
  // ID → EN
  "/": "/en",
  // Properti
  "/asuransi-properti": "/en/property-insurance",
  "/asuransi-properti/asuransi-hotel-batam": "/en/property-insurance/hotel-insurance-batam",
  "/asuransi-properti/asuransi-rumah-batam": "/en/property-insurance/home-insurance-batam",
  "/asuransi-properti/asuransi-ruko-batam": "/en/property-insurance/shophouse-insurance-batam",
  "/asuransi-properti/asuransi-gudang-batam": "/en/property-insurance/warehouse-insurance-batam",
  "/asuransi-properti/asuransi-apartemen-batam": "/en/property-insurance/apartment-insurance-batam",
  "/asuransi-properti/asuransi-pabrik-kawasan-industri-batam": "/en/property-insurance/factory-industrial-insurance-batam",
  // Kendaraan
  "/asuransi-kendaraan": "/en/vehicle-insurance",
  "/asuransi-kendaraan/asuransi-mobil-batam": "/en/vehicle-insurance/car-insurance-batam",
  "/asuransi-kendaraan/asuransi-dumptruck": "/en/vehicle-insurance/dump-truck-insurance",
  // Machinery
  "/asuransi-machinery": "/en/machinery-insurance",
  "/asuransi-machinery/asuransi-alat-berat": "/en/machinery-insurance/heavy-equipment-insurance",
  "/asuransi-machinery/asuransi-crane": "/en/machinery-insurance/crane-insurance",
  "/asuransi-machinery/machinery-breakdown": "/en/machinery-insurance/machinery-breakdown",
  // Liability
  "/asuransi-liability": "/en/liability-insurance",
  "/asuransi-liability/asuransi-limbah-b3": "/en/liability-insurance/b3-waste-insurance",
  "/asuransi-liability/public-liability": "/en/liability-insurance/public-liability",
  "/asuransi-liability/employers-product-liability": "/en/liability-insurance/employers-product-liability",
  "/asuransi-liability/freight-forwarders-liability": "/en/liability-insurance/freight-forwarders-liability",
  // Engineering
  "/asuransi-engineering": "/en/engineering-insurance",
  "/asuransi-engineering/contractor-all-risk": "/en/engineering-insurance/contractor-all-risk",
  "/asuransi-engineering/erection-all-risk": "/en/engineering-insurance/erection-all-risk",
  "/asuransi-engineering/cecr": "/en/engineering-insurance/cecr",

  // Personal Accident
  "/asuransi-personal-accident": "/en/personal-accident-insurance",
  "/asuransi-personal-accident/pa-individu-keluarga": "/en/personal-accident-insurance/individual-family-pa",
  "/asuransi-personal-accident/pa-karyawan-grup": "/en/personal-accident-insurance/group-employee-pa",

  // Surety Bond
  "/asuransi-surety-bond": "/en/surety-bond-insurance",
  "/asuransi-surety-bond/bid-bond": "/en/surety-bond-insurance/bid-bond",
  "/asuransi-surety-bond/performance-bond": "/en/surety-bond-insurance/performance-bond",
  "/asuransi-surety-bond/advance-payment-bond": "/en/surety-bond-insurance/advance-payment-bond",
  "/asuransi-surety-bond/maintenance-bond": "/en/surety-bond-insurance/maintenance-bond",
  "/asuransi-surety-bond/custom-bond": "/en/surety-bond-insurance/custom-bond",
  // Marine
  "/asuransi-marine": "/en/marine-insurance",
  "/asuransi-marine/marine-hull": "/en/marine-insurance/marine-hull",
  "/asuransi-marine/marine-cargo": "/en/marine-insurance/marine-cargo",
  "/asuransi-marine/builders-risk": "/en/marine-insurance/builders-risk",
  "/asuransi-event": "/en/event-insurance",
  "/asuransi-event/konser-musik": "/en/event-insurance/concert-insurance",
  "/asuransi-event/motor-cross": "/en/event-insurance/motocross-insurance",
  "/asuransi-event/hole-in-one": "/en/event-insurance/hole-in-one-insurance",
  // Kalkulator
  "/kalkulator-premi-mobil": "/en/car-premium-calculator",
  "/kalkulator-premi-motor": "/en/motorcycle-premium-calculator",
  "/kalkulator-premi-properti": "/en/property-premium-calculator",
  // Info
  "/tentang-kami": "/en/about-us",
  "/kontak": "/en/contact",
  "/lokasi": "/en/location",
  // Blog – index
  "/blog": "/en/blog",
  // Blog – Kendaraan
  "/blog/cara-klaim-asuransi-mobil-batam": "/en/blog/how-to-claim-car-insurance-batam",
  "/blog/perbedaan-all-risk-dan-tlo": "/en/blog/all-risk-vs-tlo-car-insurance",
  // Blog – Alat Berat / Machinery
  "/blog/asuransi-excavator-dan-bulldozer": "/en/blog/excavator-and-bulldozer-insurance-batam",
  "/blog/asuransi-alat-berat-proyek-konstruksi": "/en/blog/heavy-equipment-insurance-construction-projects",
  "/blog/asuransi-alat-berat-pertambangan": "/en/blog/mining-heavy-equipment-insurance",
  "/blog/asuransi-pengiriman-mesin-alat-berat": "/en/blog/machinery-heavy-equipment-shipping-insurance-batam",
  // Blog – Properti
  "/blog/asuransi-properti-komersial-batam": "/en/blog/commercial-property-insurance-batam",
  "/blog/cara-klaim-asuransi-kebakaran-rumah": "/en/blog/how-to-claim-home-fire-insurance",
  // Blog – Liability
  "/blog/pentingnya-asuransi-limbah-b3": "/en/blog/hazardous-waste-insurance-batam",
  // Blog – Engineering
  "/blog/asuransi-proyek-konstruksi-batam": "/en/blog/construction-project-insurance-batam",
  "/blog/perbedaan-car-dan-ear": "/en/blog/difference-between-car-and-ear-insurance",
  // Blog – Marine
  "/blog/cara-klaim-asuransi-marine-cargo": "/en/blog/how-to-claim-marine-cargo-insurance",
  "/blog/perbedaan-marine-hull-vs-cargo": "/en/blog/marine-hull-vs-cargo-insurance",
  "/blog/asuransi-pengiriman-batam-singapore": "/en/blog/batam-singapore-shipping-insurance",
  "/blog/asuransi-pengiriman-batam-jakarta": "/en/blog/batam-jakarta-cargo-insurance",
  "/blog/premi-asuransi-marine-cargo-batam": "/en/blog/marine-cargo-insurance-premium-batam",
  "/blog/asuransi-cargo-ekspor-batam": "/en/blog/batam-export-cargo-insurance",
  "/blog/builders-risk-untuk-galangan-kapal": "/en/blog/builders-risk-shipyard-insurance-batam",
  "/blog/cara-mendapatkan-asuransi-builders-risk-batam": "/en/blog/how-to-get-builders-risk-insurance-batam",
  // Blog – Surety Bond
  "/blog/perbedaan-bid-bond-performance-bond": "/en/difference-between-bid-bond-and-performance-bond",
  "/blog/panduan-ob23-impor-sementara-batam": "/en/blog/temporary-import-guarantee-ob23-batam",
  // Blog – Personal Accident
  "/blog/asuransi-pa-pekerja-asing-ke-singapura-dari-batam": "/en/blog/pa-insurance-foreign-workers-singapore-from-batam",
};

// Build reverse map (EN → ID) automatically
const REVERSE_MAP = Object.fromEntries(
  Object.entries(URL_MAP).map(([id, en]) => [en, id])
);

function getOtherLangUrl(pathname: string, currentLang: "id" | "en"): string {
  if (currentLang === "id") return URL_MAP[pathname] ?? "/en";
  return REVERSE_MAP[pathname] ?? "/";
}

// ─── Nav structure ────────────────────────────────────────────────────────────
type NavChild = { label: string; href: string; desc?: string };
type NavItem = { label: string; href: string; children: NavChild[] };

const productsID: NavItem[] = [
  {
    label: "Properti",
    href: "/asuransi-properti",
    children: [
      { label: "Asuransi Hotel", href: "/asuransi-properti/asuransi-hotel-batam", desc: "Hotel & penginapan" },
      { label: "Asuransi Rumah", href: "/asuransi-properti/asuransi-rumah-batam", desc: "Hunian & vila" },
      { label: "Asuransi Ruko", href: "/asuransi-properti/asuransi-ruko-batam", desc: "Ruko & komersial" },
      { label: "Asuransi Gudang", href: "/asuransi-properti/asuransi-gudang-batam", desc: "Gudang & logistik" },
      { label: "Asuransi Apartemen", href: "/asuransi-properti/asuransi-apartemen-batam", desc: "Apartemen & kondominium" },
      { label: "Asuransi Pabrik", href: "/asuransi-properti/asuransi-pabrik-kawasan-industri-batam", desc: "Pabrik & kawasan industri" },
    ],
  },
  {
    label: "Kendaraan",
    href: "/asuransi-kendaraan",
    children: [
      { label: "Asuransi Mobil", href: "/asuransi-kendaraan/asuransi-mobil-batam", desc: "All risk & TLO" },
      { label: "Asuransi Dump Truck", href: "/asuransi-kendaraan/asuransi-dumptruck", desc: "Truk & armada" },
    ],
  },
  {
    label: "Machinery",
    href: "/asuransi-machinery",
    children: [
      { label: "Asuransi Alat Berat", href: "/asuransi-machinery/asuransi-alat-berat", desc: "Excavator, bulldozer" },
      { label: "Asuransi Crane", href: "/asuransi-machinery/asuransi-crane", desc: "Tower & mobile crane" },
      { label: "Machinery Breakdown", href: "/asuransi-machinery/machinery-breakdown", desc: "Mesin pabrik & produksi" },
    ],
  },
  {
    label: "Liability",
    href: "/asuransi-liability",
    children: [
      { label: "Asuransi Limbah B3", href: "/asuransi-liability/asuransi-limbah-b3", desc: "Pencemaran lingkungan" },
      { label: "Public Liability", href: "/asuransi-liability/public-liability", desc: "Tanggung jawab publik" },
      { label: "Employers & Product Liability", href: "/asuransi-liability/employers-product-liability", desc: "Karyawan & produk" },
      { label: "Freight Forwarders Liability", href: "/asuransi-liability/freight-forwarders-liability", desc: "Forwarder & PPJK" },
    ],
  },
  {
    label: "Engineering",
    href: "/asuransi-engineering",
    children: [
      { label: "Contractor All Risk", href: "/asuransi-engineering/contractor-all-risk", desc: "CAR proyek konstruksi" },
      { label: "Erection All Risk", href: "/asuransi-engineering/erection-all-risk", desc: "EAR instalasi mesin" },
      { label: "CECR", href: "/asuransi-engineering/cecr", desc: "Struktur sipil pasca-BAST" },
    ],
  },
  {
    label: "Personal Accident",
    href: "/asuransi-personal-accident",
    children: [
      { label: "PA Individu & Keluarga", href: "/asuransi-personal-accident/pa-individu-keluarga", desc: "Proteksi diri & keluarga" },
      { label: "PA Karyawan Grup", href: "/asuransi-personal-accident/pa-karyawan-grup", desc: "Proteksi tim & perusahaan" },
    ],
  },
  {
    label: "Surety Bond",
    href: "/asuransi-surety-bond",
    children: [
      { label: "Bid Bond", href: "/asuransi-surety-bond/bid-bond", desc: "Jaminan penawaran tender" },
      { label: "Performance Bond", href: "/asuransi-surety-bond/performance-bond", desc: "Jaminan pelaksanaan proyek" },
      { label: "Advance Payment Bond", href: "/asuransi-surety-bond/advance-payment-bond", desc: "Jaminan uang muka" },
      { label: "Maintenance Bond", href: "/asuransi-surety-bond/maintenance-bond", desc: "Jaminan masa pemeliharaan" },
      { label: "Custom Bond", href: "/asuransi-surety-bond/custom-bond", desc: "Jaminan kepabeanan OB 23/KITE" },
    ],
  },
  {
    label: "Marine",
    href: "/asuransi-marine",
    children: [
      { label: "Marine Hull", href: "/asuransi-marine/marine-hull", desc: "Lambung & mesin kapal" },
      { label: "Marine Cargo", href: "/asuransi-marine/marine-cargo", desc: "Muatan & pengiriman laut" },
      { label: "Builder's Risk", href: "/asuransi-marine/builders-risk", desc: "Pembangunan kapal" },
    ],
  },
  {
    label: "Event",
    href: "/asuransi-event",
    children: [
      { label: "Asuransi Konser Musik", href: "/asuransi-event/konser-musik", desc: "Liability & non-appearance artis" },
      { label: "Asuransi Motor Cross", href: "/asuransi-event/motor-cross", desc: "Personal accident pembalap" },
      { label: "Asuransi Hole in One", href: "/asuransi-event/hole-in-one", desc: "Jaminan hadiah turnamen golf" },
    ],
  },
];

const productsEN: NavItem[] = [
  {
    label: "Property",
    href: "/en/property-insurance",
    children: [
      { label: "Hotel Insurance", href: "/en/property-insurance/hotel-insurance-batam", desc: "Hotels & lodging" },
      { label: "Home Insurance", href: "/en/property-insurance/home-insurance-batam", desc: "Residences & villas" },
      { label: "Shophouse Insurance", href: "/en/property-insurance/shophouse-insurance-batam", desc: "Shophouses & retail" },
      { label: "Warehouse Insurance", href: "/en/property-insurance/warehouse-insurance-batam", desc: "Warehouses & logistics" },
      { label: "Apartment Insurance", href: "/en/property-insurance/apartment-insurance-batam", desc: "Apartments & condominiums" },
      { label: "Factory Insurance", href: "/en/property-insurance/factory-industrial-insurance-batam", desc: "Factories & industrial estates" },
    ],
  },
  {
    label: "Vehicle",
    href: "/en/vehicle-insurance",
    children: [
      { label: "Car Insurance", href: "/en/vehicle-insurance/car-insurance-batam", desc: "All risk & TLO" },
      { label: "Dump Truck Insurance", href: "/en/vehicle-insurance/dump-truck-insurance", desc: "Trucks & fleets" },
    ],
  },
  {
    label: "Machinery",
    href: "/en/machinery-insurance",
    children: [
      { label: "Heavy Equipment", href: "/en/machinery-insurance/heavy-equipment-insurance", desc: "Excavator, bulldozer" },
      { label: "Crane Insurance", href: "/en/machinery-insurance/crane-insurance", desc: "Tower & mobile crane" },
      { label: "Machinery Breakdown", href: "/en/machinery-insurance/machinery-breakdown", desc: "Factory & production machinery" },
    ],
  },
  {
    label: "Liability",
    href: "/en/liability-insurance",
    children: [
      { label: "B3 Waste Insurance", href: "/en/liability-insurance/b3-waste-insurance", desc: "Environmental liability" },
      { label: "Public Liability", href: "/en/liability-insurance/public-liability", desc: "Third-party liability" },
      { label: "Employers & Product Liability", href: "/en/liability-insurance/employers-product-liability", desc: "Employees & products" },
      { label: "Freight Forwarders Liability", href: "/en/liability-insurance/freight-forwarders-liability", desc: "Forwarders & customs brokers" },
    ],
  },
  {
    label: "Engineering",
    href: "/en/engineering-insurance",
    children: [
      { label: "Contractor All Risk", href: "/en/engineering-insurance/contractor-all-risk", desc: "CAR construction projects" },
      { label: "Erection All Risk", href: "/en/engineering-insurance/erection-all-risk", desc: "EAR machinery installation" },
      { label: "CECR", href: "/en/engineering-insurance/cecr", desc: "Completed civil structures" },
    ],
  },
  {
    label: "Personal Accident",
    href: "/en/personal-accident-insurance",
    children: [
      { label: "Individual & Family PA", href: "/en/personal-accident-insurance/individual-family-pa", desc: "Personal & family protection" },
      { label: "Group Employee PA", href: "/en/personal-accident-insurance/group-employee-pa", desc: "Team & company protection" },
    ],
  },
  {
    label: "Surety Bond",
    href: "/en/surety-bond-insurance",
    children: [
      { label: "Bid Bond", href: "/en/surety-bond-insurance/bid-bond", desc: "Tender bid guarantee" },
      { label: "Performance Bond", href: "/en/surety-bond-insurance/performance-bond", desc: "Contract execution guarantee" },
      { label: "Advance Payment Bond", href: "/en/surety-bond-insurance/advance-payment-bond", desc: "Down payment guarantee" },
      { label: "Maintenance Bond", href: "/en/surety-bond-insurance/maintenance-bond", desc: "Post-project defect guarantee" },
      { label: "Custom Bond", href: "/en/surety-bond-insurance/custom-bond", desc: "Customs guarantee OB 23/KITE" },
    ],
  },
  {
    label: "Marine",
    href: "/en/marine-insurance",
    children: [
      { label: "Marine Hull", href: "/en/marine-insurance/marine-hull", desc: "Hull & vessel machinery" },
      { label: "Marine Cargo", href: "/en/marine-insurance/marine-cargo", desc: "Cargo & sea freight" },
      { label: "Builder's Risk", href: "/en/marine-insurance/builders-risk", desc: "Vessel construction" },
    ],
  },
  {
    label: "Event",
    href: "/en/event-insurance",
    children: [
      { label: "Concert Insurance", href: "/en/event-insurance/concert-insurance", desc: "Liability & artist non-appearance" },
      { label: "Motocross Insurance", href: "/en/event-insurance/motocross-insurance", desc: "Rider personal accident" },
      { label: "Hole-in-One Insurance", href: "/en/event-insurance/hole-in-one-insurance", desc: "Golf prize indemnity" },
    ],
  },
];

// ─── Blog articles grouped by category ───────────────────────────────────────
type BlogLink = { label: string; href: string };
type BlogCategory = { category: string; articles: BlogLink[] };

const blogCategoriesID: BlogCategory[] = [
  {
    category: "Kendaraan",
    articles: [
      { label: "Cara Klaim Asuransi Mobil Batam", href: "/blog/cara-klaim-asuransi-mobil-batam" },
      { label: "Perbedaan All Risk dan TLO", href: "/blog/perbedaan-all-risk-dan-tlo" },
    ],
  },
  {
    category: "Alat Berat",
    articles: [
      { label: "Asuransi Excavator & Bulldozer", href: "/blog/asuransi-excavator-dan-bulldozer" },
      { label: "Alat Berat Proyek Konstruksi", href: "/blog/asuransi-alat-berat-proyek-konstruksi" },
      { label: "Alat Berat Pertambangan", href: "/blog/asuransi-alat-berat-pertambangan" },
      { label: "Pengiriman Mesin & Alat Berat", href: "/blog/asuransi-pengiriman-mesin-alat-berat" },
    ],
  },
  {
    category: "Properti",
    articles: [
      { label: "Asuransi Properti Komersial Batam", href: "/blog/asuransi-properti-komersial-batam" },
      { label: "Cara Klaim Asuransi Kebakaran Rumah", href: "/blog/cara-klaim-asuransi-kebakaran-rumah" },
    ],
  },
  {
    category: "Liability",
    articles: [
      { label: "Pentingnya Asuransi Limbah B3", href: "/blog/pentingnya-asuransi-limbah-b3" },
      { label: "Panduan Freight Forwarders Liability (FFL)", href: "/blog/asuransi-freight-forwarders-liability-batam-panduan-lengkap" },
    ],
  },
  {
    category: "Engineering",
    articles: [
      { label: "Asuransi Proyek Konstruksi Batam", href: "/blog/asuransi-proyek-konstruksi-batam" },
      { label: "Perbedaan CAR dan EAR", href: "/blog/perbedaan-car-dan-ear" },
    ],
  },
  {
    category: "Marine",
    articles: [
      { label: "Cara Klaim Asuransi Marine Cargo", href: "/blog/cara-klaim-asuransi-marine-cargo" },
      { label: "Perbedaan Marine Hull vs Cargo", href: "/blog/perbedaan-marine-hull-vs-cargo" },
      { label: "Asuransi Pengiriman Batam–Singapore", href: "/blog/asuransi-pengiriman-batam-singapore" },
      { label: "Asuransi Pengiriman Batam–Jakarta", href: "/blog/asuransi-pengiriman-batam-jakarta" },
      { label: "Premi Asuransi Marine Cargo Batam", href: "/blog/premi-asuransi-marine-cargo-batam" },
      { label: "Asuransi Cargo Ekspor Batam", href: "/blog/asuransi-cargo-ekspor-batam" },
      { label: "Builder's Risk Galangan Kapal", href: "/blog/builders-risk-untuk-galangan-kapal" },
      { label: "Cara Mendapatkan Asuransi Builders Risk", href: "/blog/cara-mendapatkan-asuransi-builders-risk-batam" },
    ],
  },
  {
    category: "Personal Accident",
    articles: [
      { label: "PA untuk Pekerja Asing ke Singapura", href: "/blog/asuransi-pa-pekerja-asing-ke-singapura-dari-batam" },
    ],
  },
];

const blogCategoriesEN: BlogCategory[] = [
  {
    category: "Vehicle",
    articles: [
      { label: "How to Claim Car Insurance Batam", href: "/en/blog/how-to-claim-car-insurance-batam" },
      { label: "How to Claim Car Insurance (Project)", href: "/en/blog/how-to-claim-car-insurance-project" },
      { label: "All Risk vs TLO Car Insurance", href: "/en/blog/all-risk-vs-tlo-car-insurance" },
    ],
  },
  {
    category: "Heavy Equipment",
    articles: [
      { label: "Excavator & Bulldozer Insurance", href: "/en/blog/excavator-and-bulldozer-insurance-batam" },
      { label: "Construction Heavy Equipment", href: "/en/blog/heavy-equipment-insurance-construction-projects" },
      { label: "Mining Heavy Equipment", href: "/en/blog/mining-heavy-equipment-insurance" },
      { label: "Machinery & Equipment Shipping", href: "/en/blog/machinery-heavy-equipment-shipping-insurance-batam" },
    ],
  },
  {
    category: "Property",
    articles: [
      { label: "Commercial Property Insurance Batam", href: "/en/blog/commercial-property-insurance-batam" },
      { label: "How to Claim Home Fire Insurance", href: "/en/blog/how-to-claim-home-fire-insurance" },
    ],
  },
  {
    category: "Liability",
    articles: [
      { label: "Hazardous Waste Insurance Batam", href: "/en/blog/hazardous-waste-insurance-batam" },
    ],
  },
  {
    category: "Engineering",
    articles: [
      { label: "Construction Project Insurance Batam", href: "/en/blog/construction-project-insurance-batam" },
      { label: "CAR vs EAR Insurance", href: "/en/blog/difference-between-car-and-ear-insurance" },
    ],
  },
  {
    category: "Marine",
    articles: [
      { label: "How to Claim Marine Cargo Insurance", href: "/en/blog/how-to-claim-marine-cargo-insurance" },
      { label: "Marine Hull vs Cargo Insurance", href: "/en/blog/marine-hull-vs-cargo-insurance" },
      { label: "Batam–Singapore Shipping Insurance", href: "/en/blog/batam-singapore-shipping-insurance" },
      { label: "Batam–Jakarta Cargo Insurance", href: "/en/blog/batam-jakarta-cargo-insurance" },
      { label: "Marine Cargo Premium Batam", href: "/en/blog/marine-cargo-insurance-premium-batam" },
      { label: "Batam Export Cargo Insurance", href: "/en/blog/batam-export-cargo-insurance" },
      { label: "Builder's Risk Shipyard Insurance", href: "/en/blog/builders-risk-shipyard-insurance-batam" },
      { label: "How to Get Builders Risk Insurance", href: "/en/blog/how-to-get-builders-risk-insurance-batam" },
    ],
  },
  {
    category: "Personal Accident",
    articles: [
      { label: "PA Insurance for Foreign Workers to Singapore", href: "/en/blog/pa-insurance-foreign-workers-singapore-from-batam" },
    ],
  },
];

// ─── Pilar produk → cluster form penawaran (urutan sama dengan productsID / productsEN) ─────
const PILLAR_CLUSTERS: QuoteClusterKey[] = [
  "property",
  "vehicle",
  "machinery",
  "liability",
  "engineering",
  "pa",
  "surety",
  "marine",
  "event",
];

// Susunan 3 kolom di panel Produk (indeks ke array products) — dibuat seimbang tingginya
const PRODUCT_COLUMNS: number[][] = [
  [0, 1, 2], // Properti, Kendaraan, Machinery
  [6, 7, 4], // Surety Bond, Marine, Engineering
  [3, 5, 8], // Liability, Personal Accident, Event
];

// ─── Kalkulator ───────────────────────────────────────────────────────────────
type CalcItem = { label: string; desc: string; href: string; icon: typeof Car };

const calcID: CalcItem[] = [
  { label: "Kalkulator Mobil", desc: "Hitung estimasi premi asuransi mobil", href: "/kalkulator-premi-mobil", icon: Car },
  { label: "Kalkulator Motor", desc: "Hitung estimasi premi asuransi motor", href: "/kalkulator-premi-motor", icon: Bike },
  { label: "Kalkulator Properti", desc: "Hitung estimasi premi asuransi properti", href: "/kalkulator-premi-properti", icon: Building2 },
];

const calcEN: CalcItem[] = [
  { label: "Car Calculator", desc: "Estimate your car insurance premium", href: "/en/car-premium-calculator", icon: Car },
  { label: "Motorcycle Calculator", desc: "Estimate your motorcycle insurance premium", href: "/en/motorcycle-premium-calculator", icon: Bike },
  { label: "Property Calculator", desc: "Estimate your property insurance premium", href: "/en/property-premium-calculator", icon: Building2 },
];

// ─── WhatsApp ─────────────────────────────────────────────────────────────────
const WA_NUMBER = "6281373336728";
const waUrl = (lang: "id" | "en") =>
  `https://wa.me/${WA_NUMBER}?text=${
    lang === "id"
      ? "Halo%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi"
      : "Hello%20Rio%2C%20I%20would%20like%20to%20consult%20about%20insurance"
  }`;

// ─── Kontrol dropdown desktop (satu menu terbuka dalam satu waktu) ───────────
type MenuCtl = {
  active: string | null;
  open: (key: string) => void;
  close: () => void;
  hide: () => void;
  stay: () => void;
};

function useMenuController(pathname: string): MenuCtl {
  const [active, setActive] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clear = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  // Tutup semua dropdown saat pindah halaman
  useEffect(() => {
    clear();
    setActive(null);
  }, [pathname, clear]);

  // Esc atau klik di luar menu menutup dropdown
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    const onDown = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target?.closest?.("[data-menu-root]")) setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
      clear();
    };
  }, [clear]);

  return {
    active,
    open: (key) => {
      clear();
      setActive(key);
    },
    stay: clear,
    hide: () => {
      clear();
      setActive(null);
    },
    close: () => {
      clear();
      timer.current = setTimeout(() => setActive(null), 140);
    },
  };
}

const triggerCls = (on: boolean) =>
  `flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
    on ? "text-[#c9a84c] bg-white/5" : "text-white/80 hover:text-[#c9a84c] hover:bg-white/5"
  }`;

const panelCls =
  "bg-[#0d1f3c] border border-[#c9a84c]/20 rounded-2xl shadow-2xl shadow-black/40";

const Chevron = ({ on }: { on: boolean }) => (
  <ChevronDown
    className={`w-3 h-3 transition-transform duration-200 opacity-60 ${on ? "rotate-180" : ""}`}
  />
);

// ─── Mega Menu (Desktop) ──────────────────────────────────────────────────────
function MegaMenu({
  products,
  lang,
  menu,
}: {
  products: NavItem[];
  lang: "id" | "en";
  menu: MenuCtl;
}) {
  const { active, open, close, stay } = menu;
  const pathname = usePathname() ?? "";

  const blogHref = lang === "id" ? "/blog" : "/en/blog";
  const aboutHref = lang === "id" ? "/tentang-kami" : "/en/about-us";
  const aboutLabel = lang === "id" ? "Tentang" : "About";
  const blogCategories = lang === "id" ? blogCategoriesID : blogCategoriesEN;
  const calcs = lang === "id" ? calcID : calcEN;

  const productsOn = active === "products";
  const calcOn = active === "calc";
  const blogOn = active === "Blog";

  return (
    <div className="hidden lg:flex items-center gap-0.5">
      {/* ── Produk: satu dropdown berisi semua pilar ── */}
      <div
        data-menu-root
        className="flex items-center h-16"
        onMouseEnter={() => open("products")}
        onMouseLeave={close}
      >
        <button
          type="button"
          className={triggerCls(productsOn)}
          aria-expanded={productsOn}
          onClick={() => open("products")}
        >
          {lang === "id" ? "Produk Asuransi" : "Insurance Products"}
          <Chevron on={productsOn} />
        </button>

        {productsOn && (
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 w-[min(900px,calc(100vw-2rem))]"
            onMouseEnter={stay}
            onMouseLeave={close}
          >
            <div className={`${panelCls} overflow-hidden`}>
              <div className="grid grid-cols-3 gap-x-3 p-4">
                {PRODUCT_COLUMNS.map((col, ci) => (
                  <div key={ci} className="space-y-4">
                    {col.map((i) => {
                      const item = products[i];
                      return (
                        <div key={item.href}>
                          <Link
                            href={item.href}
                            className="group flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#c9a84c] hover:bg-white/5 transition-colors"
                          >
                            <span>{item.label}</span>
                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </Link>
                          <div className="mt-0.5">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                title={child.desc}
                                className="block px-3 py-1.5 rounded-lg text-sm text-white/75 hover:text-[#c9a84c] hover:bg-white/5 transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between gap-4 px-7 py-3 bg-black/20 border-t border-[#c9a84c]/10 text-xs">
                <span className="text-white/50">
                  {lang === "id" ? "Belum yakin produk yang cocok?" : "Not sure which cover fits?"}
                </span>
                <a
                  href={waUrl(lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#c9a84c] hover:text-[#f0d080] transition-colors"
                >
                  {lang === "id" ? "Konsultasi gratis via WhatsApp →" : "Free consultation via WhatsApp →"}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Kalkulator ── */}
      <div
        data-menu-root
        className="relative flex items-center h-16"
        onMouseEnter={() => open("calc")}
        onMouseLeave={close}
      >
        <button
          type="button"
          className={triggerCls(calcOn)}
          aria-expanded={calcOn}
          onClick={() => open("calc")}
        >
          <Calculator className="w-3.5 h-3.5 text-[#c9a84c]" />
          {lang === "id" ? "Kalkulator" : "Calculator"}
          <Chevron on={calcOn} />
        </button>

        {calcOn && (
          <div
            className="absolute top-full left-0 pt-2 z-50"
            onMouseEnter={stay}
            onMouseLeave={close}
          >
            <div className={`${panelCls} p-2 w-[310px]`}>
              {calcs.map((c) => {
                const Icon = c.icon;
                const current = pathname === c.href;
                return (
                  <Link
                    key={c.href}
                    href={c.href}
                    className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors ${
                      current ? "bg-white/5" : ""
                    }`}
                  >
                    <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#c9a84c]" />
                    </span>
                    <span className="flex flex-col min-w-0">
                      <span className="text-sm font-medium text-white/90 group-hover:text-[#c9a84c] transition-colors">
                        {c.label}
                      </span>
                      <span className="text-xs text-white/40 mt-0.5">{c.desc}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* ── Blog ── */}
      <div
        data-menu-root
        className="relative flex items-center h-16"
        onMouseEnter={() => open("Blog")}
        onMouseLeave={close}
      >
        <Link href={blogHref} className={triggerCls(blogOn)}>
          Blog
          <Chevron on={blogOn} />
        </Link>

        {blogOn && (
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
            onMouseEnter={stay}
            onMouseLeave={close}
          >
            <div className={`${panelCls} p-3 w-[300px] max-h-[75vh] overflow-y-auto`}>
              <Link
                href={blogHref}
                className="flex items-center gap-2 px-3 py-2 mb-1 text-xs font-bold uppercase tracking-wider text-[#c9a84c]/70 hover:text-[#c9a84c] hover:bg-white/5 rounded-lg transition-colors"
              >
                {lang === "id" ? "Semua Artikel →" : "All Articles →"}
              </Link>
              <div className="h-px bg-[#c9a84c]/10 mb-2" />
              {blogCategories.map((cat) => (
                <div key={cat.category} className="mb-3 last:mb-0">
                  <p className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#c9a84c]/50">
                    {cat.category}
                  </p>
                  {cat.articles.map((art) => (
                    <Link
                      key={art.href}
                      href={art.href}
                      className="block px-3 py-1.5 rounded-lg text-sm text-white/70 hover:text-[#c9a84c] hover:bg-white/5 transition-colors"
                    >
                      {art.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── Tentang ── */}
      <Link
        href={aboutHref}
        className="px-3 py-2 text-sm text-white/80 hover:text-[#c9a84c] hover:bg-white/5 font-medium rounded-lg transition-colors"
      >
        {aboutLabel}
      </Link>
    </div>
  );
}

// ─── Tombol "Minta Penawaran" (Desktop) — pilih jenis asuransi lalu buka form ──
type QuoteItem = { cluster: QuoteClusterKey; label: string; href: string };

function QuotePicker({
  items,
  lang,
  menu,
  onPick,
}: {
  items: QuoteItem[];
  lang: "id" | "en";
  menu: MenuCtl;
  onPick: (cluster: QuoteClusterKey) => void;
}) {
  const { active, open, close, stay } = menu;
  const pathname = usePathname() ?? "";
  const on = active === "quote";

  return (
    <div
      data-menu-root
      className="relative flex items-center h-16"
      onMouseEnter={() => open("quote")}
      onMouseLeave={close}
    >
      <button
        type="button"
        aria-expanded={on}
        onClick={() => open("quote")}
        className="btn-shimmer inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#c9a84c] to-[#f0d080] text-[#0a1628] text-sm font-bold rounded-lg shadow-lg shadow-[#c9a84c]/20 hover:shadow-xl hover:shadow-[#c9a84c]/30 transition-all whitespace-nowrap"
      >
        <FileText className="w-4 h-4" />
        <span>{lang === "id" ? "Minta Penawaran" : "Request a Quote"}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${on ? "rotate-180" : ""}`} />
      </button>

      {on && (
        <div
          className="absolute top-full right-0 pt-2 z-50"
          onMouseEnter={stay}
          onMouseLeave={close}
        >
          <div className={`${panelCls} p-2 w-[260px]`}>
            <p className="px-3 pt-2 pb-1.5 text-[10px] font-bold uppercase tracking-widest text-[#c9a84c]/60">
              {lang === "id" ? "Pilih jenis asuransi" : "Choose insurance type"}
            </p>
            {items.map((it) => {
              const current = pathname.startsWith(it.href);
              return (
                <button
                  key={it.cluster}
                  type="button"
                  onClick={() => onPick(it.cluster)}
                  className={`group w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-left hover:bg-white/5 transition-colors ${
                    current ? "text-[#c9a84c] font-semibold" : "text-white/80 hover:text-[#c9a84c]"
                  }`}
                >
                  <span>{it.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [quoteCluster, setQuoteCluster] = useState<QuoteClusterKey | null>(null);
  const pathname = usePathname() ?? "";
  const menu = useMenuController(pathname);

  const isEN = pathname.startsWith("/en");
  const lang: "id" | "en" = isEN ? "en" : "id";
  const products = isEN ? productsEN : productsID;
  const otherLangUrl = getOtherLangUrl(pathname, lang);
  const blogCategories = lang === "id" ? blogCategoriesID : blogCategoriesEN;
  const calcs = lang === "id" ? calcID : calcEN;

  const quoteItems: QuoteItem[] = products.map((p, i) => ({
    cluster: PILLAR_CLUSTERS[i],
    label: p.label,
    href: p.href,
  }));

  const t = {
    ctaMobile: lang === "id" ? "Konsultasi via WhatsApp" : "Consult via WhatsApp",
    quote: lang === "id" ? "Minta Penawaran" : "Request a Quote",
    calc: lang === "id" ? "Kalkulator Premi" : "Premium Calculator",
    blogHref: lang === "id" ? "/blog" : "/en/blog",
    aboutHref: lang === "id" ? "/tentang-kami" : "/en/about-us",
    aboutLabel: lang === "id" ? "Tentang Kami" : "About Us",
    langSwitch: lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia",
    pickType: lang === "id" ? "Pilih jenis asuransi" : "Choose insurance type",
  };

  const pickQuote = (cluster: QuoteClusterKey) => {
    menu.hide();
    setMobileOpen(false);
    setMobileExpanded(null);
    setQuoteCluster(cluster);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#c9a84c]/20 ${
          scrolled ? "bg-[#0a1628]/98 backdrop-blur-md shadow-lg" : "bg-[#0a1628]/95"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* ── Logo ── */}
            <Link
              href={lang === "id" ? "/" : "/en"}
              className="flex items-center gap-2 flex-shrink-0"
            >
              <div className="logo-shimmer w-8 h-8 bg-gradient-to-br from-[#c9a84c] to-[#f0d080] rounded-lg flex items-center justify-center">
                <span className="text-[#0a1628] font-bold text-sm">AB</span>
              </div>
              <span className="font-bold text-white text-lg leading-tight">
                Asuransi<span className="text-[#c9a84c]">Batam</span>
              </span>
            </Link>

            {/* ── Desktop Mega Menu ── */}
            <MegaMenu products={products} lang={lang} menu={menu} />

            {/* ── Desktop Right: Lang + Minta Penawaran ── */}
            <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
              <Link
                href={otherLangUrl}
                className="flex items-center gap-1.5 px-3 py-1.5 border border-[#c9a84c]/40 text-[#c9a84c] text-xs font-bold rounded-lg hover:bg-[#c9a84c]/10 transition-all"
                title={t.langSwitch}
              >
                {lang === "id" ? (
                  <>
                    <span className="text-sm leading-none">🇬🇧</span>
                    <span>EN</span>
                  </>
                ) : (
                  <>
                    <span className="text-sm leading-none">🇮🇩</span>
                    <span>ID</span>
                  </>
                )}
              </Link>

              <QuotePicker items={quoteItems} lang={lang} menu={menu} onPick={pickQuote} />
            </div>

            {/* ── Mobile: Lang Switch + Hamburger ── */}
            <div className="lg:hidden flex items-center gap-1">
              <Link
                href={otherLangUrl}
                className="flex items-center gap-1.5 px-2.5 py-1.5 border border-[#c9a84c]/40 text-[#c9a84c] text-xs font-bold rounded-lg hover:bg-[#c9a84c]/10 transition-all"
                title={t.langSwitch}
              >
                {lang === "id" ? (
                  <>
                    <span className="text-base leading-none">🇬🇧</span>
                    <span>EN</span>
                  </>
                ) : (
                  <>
                    <span className="text-base leading-none">🇮🇩</span>
                    <span>ID</span>
                  </>
                )}
              </Link>
              <button
                className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#0a1628] border-t border-[#c9a84c]/20 max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-3 space-y-0.5">
              {products.map((item) => (
                <div key={item.label}>
                  {/* Category header row */}
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="flex-1 px-3 py-2.5 text-white/85 font-semibold hover:text-[#c9a84c] transition-colors text-sm"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    <button
                      className="px-3 py-2.5 text-white/40 hover:text-[#c9a84c] transition-colors"
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                      aria-label={`Expand ${item.label}`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileExpanded === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Sub-items */}
                  {mobileExpanded === item.label && (
                    <div className="ml-3 mb-1 border-l border-[#c9a84c]/20 pl-3 space-y-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-sm text-white/60 hover:text-[#c9a84c] transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                          {child.desc && (
                            <span className="block text-xs text-white/30 mt-0.5">{child.desc}</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Kalkulator */}
              <div>
                <button
                  className="w-full flex items-center justify-between px-3 py-2.5 text-white/85 font-semibold hover:text-[#c9a84c] transition-colors text-sm"
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === "Calc" ? null : "Calc")
                  }
                  aria-label="Expand Calculator"
                >
                  <span className="flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-[#c9a84c]" />
                    {t.calc}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-white/40 transition-transform duration-200 ${
                      mobileExpanded === "Calc" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === "Calc" && (
                  <div className="ml-3 mb-1 border-l border-[#c9a84c]/20 pl-3 space-y-0.5">
                    {calcs.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block py-2 text-sm text-white/60 hover:text-[#c9a84c] transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {c.label}
                        <span className="block text-xs text-white/30 mt-0.5">{c.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Blog with expandable categories */}
              <div>
                <div className="flex items-center justify-between">
                  <Link
                    href={t.blogHref}
                    className="flex-1 px-3 py-2.5 text-white/85 font-semibold hover:text-[#c9a84c] transition-colors text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    Blog
                  </Link>
                  <button
                    className="px-3 py-2.5 text-white/40 hover:text-[#c9a84c] transition-colors"
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === "Blog" ? null : "Blog")
                    }
                    aria-label="Expand Blog"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileExpanded === "Blog" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {mobileExpanded === "Blog" && (
                  <div className="ml-3 mb-1 border-l border-[#c9a84c]/20 pl-3 space-y-0.5">
                    {blogCategories.map((cat) => (
                      <div key={cat.category}>
                        <p className="px-2 pt-2 pb-1 text-[10px] font-bold uppercase tracking-widest text-[#c9a84c]/50">
                          {cat.category}
                        </p>
                        {cat.articles.map((art) => (
                          <Link
                            key={art.href}
                            href={art.href}
                            className="block py-1.5 px-2 text-sm text-white/60 hover:text-[#c9a84c] transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {art.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* About */}
              <Link
                href={t.aboutHref}
                className="block px-3 py-2.5 text-white/85 font-semibold hover:text-[#c9a84c] transition-colors text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {t.aboutLabel}
              </Link>

              {/* Language switcher */}
              <div className="pt-2">
                <Link
                  href={otherLangUrl}
                  className="flex items-center gap-2 px-3 py-2.5 text-[#c9a84c] text-sm font-medium border border-[#c9a84c]/30 rounded-xl"
                  onClick={() => setMobileOpen(false)}
                >
                  {lang === "id" ? (
                    <>
                      <span className="text-base leading-none">🇬🇧</span>
                      <span>{t.langSwitch}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-base leading-none">🇮🇩</span>
                      <span>{t.langSwitch}</span>
                    </>
                  )}
                </Link>
              </div>

              {/* Minta Penawaran + WA */}
              <div className="pt-2 border-t border-white/10 space-y-2">
                <button
                  type="button"
                  aria-expanded={mobileExpanded === "Quote"}
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === "Quote" ? null : "Quote")
                  }
                  className="btn-shimmer flex w-full items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#c9a84c] to-[#f0d080] text-[#0a1628] font-bold rounded-xl text-sm"
                >
                  <FileText className="w-4 h-4" />
                  {t.quote}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileExpanded === "Quote" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileExpanded === "Quote" && (
                  <div className="rounded-xl border border-[#c9a84c]/20 p-1.5">
                    <p className="px-3 pt-1.5 pb-1 text-[10px] font-bold uppercase tracking-widest text-[#c9a84c]/60">
                      {t.pickType}
                    </p>
                    {quoteItems.map((it) => (
                      <button
                        key={it.cluster}
                        type="button"
                        onClick={() => pickQuote(it.cluster)}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-left text-white/80 hover:text-[#c9a84c] hover:bg-white/5 transition-colors"
                      >
                        <span>{it.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                      </button>
                    ))}
                  </div>
                )}

                <a
                  href={waUrl(lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 border border-[#c9a84c]/40 text-[#c9a84c] font-bold rounded-xl text-center text-sm hover:bg-[#c9a84c]/10 transition-colors"
                >
                  {t.ctaMobile}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ── Form Minta Penawaran (dimuat saat dibuka) ── */}
      {quoteCluster && (
        <QuoteModal
          cluster={quoteCluster}
          lang={lang}
          defaultType={QUOTE_CLUSTERS[quoteCluster].inferType(pathname)}
          onClose={() => setQuoteCluster(null)}
        />
      )}
    </>
  );
}

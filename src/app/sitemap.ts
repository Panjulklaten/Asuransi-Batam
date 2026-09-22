// app/sitemap.ts
import type { MetadataRoute } from "next";

const BASE_URL = "https://asuransibatam.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [

    // ── Homepage ─────────────────────────────────────────────────────────────
    { url: `${BASE_URL}`,    lastModified: new Date("2026-07-08"), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/en`, lastModified: new Date("2026-07-12"), changeFrequency: "weekly", priority: 1.0 },

    // ────────────────────────────────────────────────────────────────────────
    // PILLAR PAGES – ID
    // ────────────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/asuransi-properti`,    lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/asuransi-kendaraan`,   lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/asuransi-machinery`,   lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/asuransi-liability`,   lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/asuransi-engineering`, lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/asuransi-marine`,      lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/asuransi-surety-bond`, lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.9 },

    // PILLAR PAGES – EN
    { url: `${BASE_URL}/en/property-insurance`,    lastModified: new Date("2026-07-12"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/en/vehicle-insurance`,     lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/en/machinery-insurance`,   lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/en/liability-insurance`,   lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/en/engineering-insurance`, lastModified: new Date("2026-06-27"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/en/marine-insurance`,      lastModified: new Date("2026-06-27"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/en/surety-bond-insurance`, lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.9 },

    // ────────────────────────────────────────────────────────────────────────
    // SUB-PAGES – PROPERTI / PROPERTY
    // ────────────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/asuransi-properti/asuransi-hotel-batam`,                      lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-properti/asuransi-rumah-batam`,                      lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-properti/asuransi-ruko-batam`,                       lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-properti/asuransi-gudang-batam`,                     lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-properti/asuransi-apartemen-batam`,                  lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-properti/asuransi-pabrik-kawasan-industri-batam`,    lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.8 },

    { url: `${BASE_URL}/en/property-insurance/hotel-insurance-batam`,                 lastModified: new Date("2026-06-27"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/property-insurance/home-insurance-batam`,                  lastModified: new Date("2026-06-27"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/property-insurance/shophouse-insurance-batam`,             lastModified: new Date("2026-06-27"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/property-insurance/warehouse-insurance-batam`,             lastModified: new Date("2026-06-27"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/property-insurance/apartment-insurance-batam`,             lastModified: new Date("2026-06-27"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/property-insurance/factory-industrial-insurance-batam`,    lastModified: new Date("2026-06-27"), changeFrequency: "monthly", priority: 0.8 },

    // ────────────────────────────────────────────────────────────────────────
    // SUB-PAGES – KENDARAAN / VEHICLE
    // ────────────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/asuransi-kendaraan/asuransi-mobil-batam`,                     lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-kendaraan/asuransi-dumptruck`,                       lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.8 },

    { url: `${BASE_URL}/en/vehicle-insurance/car-insurance-batam`,                    lastModified: new Date("2026-06-27"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/vehicle-insurance/dump-truck-insurance`,                   lastModified: new Date("2026-06-27"), changeFrequency: "monthly", priority: 0.8 },

    // ────────────────────────────────────────────────────────────────────────
    // PILLAR + SUB-PAGES – PERSONAL ACCIDENT (sebelumnya hilang dari sitemap)
    // ────────────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/asuransi-personal-accident`,                                  lastModified: new Date("2026-06-28"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/asuransi-personal-accident/pa-individu-keluarga`,             lastModified: new Date("2026-06-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-personal-accident/pa-karyawan-grup`,                 lastModified: new Date("2026-06-28"), changeFrequency: "monthly", priority: 0.8 },

    // ── Asuransi Event ─────────────────────────────────────────────────────
    { url: `${BASE_URL}/asuransi-event`,                    lastModified: new Date("2026-09-17"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/asuransi-event/konser-musik`,       lastModified: new Date("2026-09-17"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-event/motor-cross`,        lastModified: new Date("2026-09-17"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-event/hole-in-one`,        lastModified: new Date("2026-09-17"), changeFrequency: "monthly", priority: 0.8 },

    { url: `${BASE_URL}/en/personal-accident-insurance`,                              lastModified: new Date("2026-06-27"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/en/personal-accident-insurance/individual-family-pa`,         lastModified: new Date("2026-06-27"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/personal-accident-insurance/group-employee-pa`,           lastModified: new Date("2026-06-27"), changeFrequency: "monthly", priority: 0.8 },

    // ── EN: Event Insurance ──────────────────────────────────────────────────
    { url: `${BASE_URL}/en/event-insurance`,                                     lastModified: new Date("2026-09-17"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/en/event-insurance/concert-insurance`,                   lastModified: new Date("2026-09-17"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/event-insurance/motocross-insurance`,                 lastModified: new Date("2026-09-17"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/event-insurance/hole-in-one-insurance`,               lastModified: new Date("2026-09-17"), changeFrequency: "monthly", priority: 0.8 },

    // ────────────────────────────────────────────────────────────────────────
    // SUB-PAGES – MACHINERY
    // ────────────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/asuransi-machinery/asuransi-alat-berat`,                      lastModified: new Date("2026-06-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-machinery/asuransi-crane`,                           lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.8 },

    { url: `${BASE_URL}/en/machinery-insurance/heavy-equipment-insurance`,            lastModified: new Date("2026-06-27"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/machinery-insurance/crane-insurance`,                      lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.8 },

    // ────────────────────────────────────────────────────────────────────────
    // SUB-PAGES – LIABILITY
    // ────────────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/asuransi-liability/asuransi-limbah-b3`,                       lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-liability/public-liability`,                         lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-liability/freight-forwarders-liability`,             lastModified: new Date("2026-09-22"), changeFrequency: "monthly", priority: 0.8 },

    { url: `${BASE_URL}/en/liability-insurance/b3-waste-insurance`,                   lastModified: new Date("2026-06-27"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/liability-insurance/public-liability`,                     lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/liability-insurance/freight-forwarders-liability`,         lastModified: new Date("2026-09-22"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/hazardous-waste-insurance-batam`,                          lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.7 },

    // ────────────────────────────────────────────────────────────────────────
    // SUB-PAGES – ENGINEERING
    // ────────────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/asuransi-engineering/contractor-all-risk`,                    lastModified: new Date("2026-06-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-engineering/erection-all-risk`,                      lastModified: new Date("2026-06-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-engineering/cecr`,                                   lastModified: new Date("2026-06-27"), changeFrequency: "monthly", priority: 0.8 },

    { url: `${BASE_URL}/en/engineering-insurance/contractor-all-risk`,                lastModified: new Date("2026-06-27"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/engineering-insurance/erection-all-risk`,                  lastModified: new Date("2026-06-27"), changeFrequency: "monthly", priority: 0.8 },

    // ────────────────────────────────────────────────────────────────────────
    // SUB-PAGES – MARINE
    // ────────────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/asuransi-marine/marine-hull`,                                 lastModified: new Date("2026-06-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-marine/marine-cargo`,                                lastModified: new Date("2026-06-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-marine/builders-risk`,                               lastModified: new Date("2026-06-28"), changeFrequency: "monthly", priority: 0.8 },

    { url: `${BASE_URL}/en/marine-insurance/marine-hull`,                             lastModified: new Date("2026-06-27"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/marine-insurance/marine-cargo`,                            lastModified: new Date("2026-06-27"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/marine-insurance/builders-risk`,                           lastModified: new Date("2026-06-27"), changeFrequency: "monthly", priority: 0.8 },

    // ────────────────────────────────────────────────────────────────────────
    // SUB-PAGES – SURETY BOND
    // ────────────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/asuransi-surety-bond/bid-bond`,                               lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-surety-bond/performance-bond`,                       lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-surety-bond/advance-payment-bond`,                   lastModified: new Date("2026-07-07"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-surety-bond/maintenance-bond`,                       lastModified: new Date("2026-07-07"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asuransi-surety-bond/custom-bond`,                            lastModified: new Date("2026-07-05"), changeFrequency: "monthly", priority: 0.8 },

    { url: `${BASE_URL}/en/surety-bond-insurance/bid-bond`,                           lastModified: new Date("2026-07-05"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/surety-bond-insurance/performance-bond`,                   lastModified: new Date("2026-07-12"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/surety-bond-insurance/advance-payment-bond`,               lastModified: new Date("2026-07-12"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/surety-bond-insurance/maintenance-bond`,                   lastModified: new Date("2026-07-12"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/surety-bond-insurance/custom-bond`,                        lastModified: new Date("2026-07-05"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en/difference-between-bid-bond-and-performance-bond`,         lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.7 },

    // ────────────────────────────────────────────────────────────────────────
    // TOOLS / KALKULATOR
    // ────────────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/kalkulator-premi-mobil`,           lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/kalkulator-premi-motor`,           lastModified: new Date("2026-07-12"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/en/motorcycle-premium-calculator`, lastModified: new Date("2026-07-12"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/en/car-premium-calculator`,        lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.8 },

    // ────────────────────────────────────────────────────────────────────────
    // BLOG – ID
    // ────────────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/blog`,                                       lastModified: new Date("2026-07-08"),                    changeFrequency: "weekly",  priority: 0.8 },
    // Kendaraan
    { url: `${BASE_URL}/blog/cara-klaim-asuransi-mobil-batam`,       lastModified: new Date("2026-04-30"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/perbedaan-all-risk-dan-tlo`,            lastModified: new Date("2025-03-05"), changeFrequency: "yearly",  priority: 0.7 },
    // Alat Berat
    { url: `${BASE_URL}/blog/asuransi-excavator-dan-bulldozer`,      lastModified: new Date("2026-05-06"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-alat-berat-proyek-konstruksi`, lastModified: new Date("2026-05-06"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-alat-berat-pertambangan`,      lastModified: new Date("2026-05-06"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-pengiriman-mesin-alat-berat`,  lastModified: new Date("2026-05-08"), changeFrequency: "yearly",  priority: 0.7 },
    // Properti
    { url: `${BASE_URL}/blog/asuransi-properti-komersial-batam`,     lastModified: new Date("2026-05-08"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/cara-klaim-asuransi-kebakaran-rumah`,   lastModified: new Date("2026-05-08"), changeFrequency: "yearly",  priority: 0.7 },
    // Liability
    { url: `${BASE_URL}/blog/pentingnya-asuransi-limbah-b3`,         lastModified: new Date("2025-02-20"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-public-liability-batam-panduan-lengkap`, lastModified: new Date("2026-07-02"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/cara-klaim-asuransi-public-liability-batam`, lastModified: new Date("2026-07-02"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/employers-liability-product-liability-batam`, lastModified: new Date("2026-07-02"), changeFrequency: "yearly",  priority: 0.7 },
    // Engineering
    { url: `${BASE_URL}/blog/asuransi-proyek-konstruksi-batam`,      lastModified: new Date("2026-05-07"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/cara-klaim-asuransi-car`,               lastModified: new Date("2026-05-07"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/perbedaan-car-dan-ear`,                 lastModified: new Date("2026-05-07"), changeFrequency: "yearly",  priority: 0.7 },
    // Marine
    { url: `${BASE_URL}/blog/cara-klaim-asuransi-marine-cargo`,      lastModified: new Date("2026-05-07"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/perbedaan-marine-hull-vs-cargo`,        lastModified: new Date("2026-05-07"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-pengiriman-batam-singapore`,   lastModified: new Date("2026-05-07"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-pengiriman-batam-jakarta`,     lastModified: new Date("2026-05-08"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/premi-asuransi-marine-cargo-batam`,     lastModified: new Date("2026-05-08"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-cargo-ekspor-batam`,           lastModified: new Date("2026-05-08"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/builders-risk-untuk-galangan-kapal`,    lastModified: new Date("2026-05-07"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/cara-mendapatkan-asuransi-builders-risk-batam`,    lastModified: new Date("2026-05-07"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/berapa-premi-asuransi-builders-risk-kapal-batam`,  lastModified: new Date("2026-05-07"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/jenis-jenis-asuransi-kapal-armada`,               lastModified: new Date("2026-05-07"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/premi-asuransi-kapal-batam-2026`,                  lastModified: new Date("2026-05-08"), changeFrequency: "yearly",  priority: 0.7 },
    // Tambahan blog yang sebelumnya hilang dari sitemap
    { url: `${BASE_URL}/blog/asuransi-motor-batam`,                            lastModified: new Date("2026-05-06"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-dump-truck-batam-proyek-konstruksi`,     lastModified: new Date("2026-05-06"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-erection-all-risk-batam`,                lastModified: new Date("2026-05-07"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-gudang-kawasan-industri-muka-kuning-batam`, lastModified: new Date("2026-05-08"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/blog/klaim-asuransi-limbah-b3-kawasan-industri-batam`, lastModified: new Date("2026-05-08"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/perbedaan-bid-bond-performance-bond`,             lastModified: new Date("2026-05-07"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/cara-mendapatkan-surety-bond-tender-proyek-batam`, lastModified: new Date("2026-07-02"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/biaya-premi-surety-bond-batam`,                    lastModified: new Date("2026-07-02"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/panduan-ob23-impor-sementara-batam`,               lastModified: new Date("2026-07-05"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/ob23-vs-kite-batam`,                               lastModified: new Date("2026-07-05"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/custom-bond-galangan-kapal-batam`,                 lastModified: new Date("2026-07-05"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/checklist-dokumen-custom-bond-ditolak`,            lastModified: new Date("2026-07-05"), changeFrequency: "yearly",  priority: 0.7 },
    // Personal Accident
    { url: `${BASE_URL}/blog/asuransi-kecelakaan-diri-pekerja-industri-batam`, lastModified: new Date("2026-07-02"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-pa-pekerja-asing-ke-singapura-dari-batam`, lastModified: new Date("2026-09-22"), changeFrequency: "yearly",  priority: 0.7 },

    // ── Asuransi Event ─────────────────────────────────────────────────────
    { url: `${BASE_URL}/blog/asuransi-konser-musik-batam`,       lastModified: new Date("2026-09-17"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-freight-forwarders-liability-batam-panduan-lengkap`, lastModified: new Date("2026-09-22"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/cara-klaim-asuransi-ffl-freight-forwarder-batam`,             lastModified: new Date("2026-09-22"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/kawasan-logistik-pergudangan-batam-batu-ampar-sekupang-tanjung-uncang`, lastModified: new Date("2026-09-22"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-motorcross-batam`,         lastModified: new Date("2026-09-17"), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/blog/asuransi-hole-in-one-golf-batam`,   lastModified: new Date("2026-09-17"), changeFrequency: "yearly",  priority: 0.7 },

    // ────────────────────────────────────────────────────────────────────────
    // BLOG – EN
    // ────────────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/en/blog`,                                                        lastModified: new Date("2026-07-08"),                    changeFrequency: "weekly", priority: 0.8 },
    // Vehicle
    { url: `${BASE_URL}/en/blog/how-to-claim-car-insurance-batam`,                       lastModified: new Date("2026-04-30"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/how-to-claim-car-insurance-project`,                     lastModified: new Date("2026-04-30"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/all-risk-vs-tlo-car-insurance`,                          lastModified: new Date("2026-05-07"), changeFrequency: "yearly", priority: 0.7 },
    // Heavy Equipment
    { url: `${BASE_URL}/en/blog/excavator-and-bulldozer-insurance-batam`,                lastModified: new Date("2026-05-06"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/heavy-equipment-insurance-construction-projects`,        lastModified: new Date("2026-05-06"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/mining-heavy-equipment-insurance`,                       lastModified: new Date("2026-05-06"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/machinery-heavy-equipment-shipping-insurance-batam`,     lastModified: new Date("2026-05-08"), changeFrequency: "yearly", priority: 0.7 },
    // Property
    { url: `${BASE_URL}/en/blog/commercial-property-insurance-batam`,                    lastModified: new Date("2026-05-06"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/how-to-claim-home-fire-insurance`,                       lastModified: new Date("2026-05-06"), changeFrequency: "yearly", priority: 0.7 },
    // Liability
    { url: `${BASE_URL}/en/blog/hazardous-waste-insurance-batam`,                        lastModified: new Date("2026-05-07"), changeFrequency: "yearly", priority: 0.7 },
    // Engineering
    { url: `${BASE_URL}/en/blog/construction-project-insurance-batam`,                   lastModified: new Date("2026-05-07"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/difference-between-car-and-ear-insurance`,               lastModified: new Date("2026-05-07"), changeFrequency: "yearly", priority: 0.7 },
    // Marine
    { url: `${BASE_URL}/en/blog/how-to-claim-marine-cargo-insurance`,                    lastModified: new Date("2026-04-30"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/marine-hull-vs-cargo-insurance`,                         lastModified: new Date("2026-05-07"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/batam-singapore-shipping-insurance`,                     lastModified: new Date("2026-05-07"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/batam-jakarta-cargo-insurance`,                          lastModified: new Date("2026-05-08"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/marine-cargo-insurance-premium-batam`,                   lastModified: new Date("2026-05-08"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/batam-export-cargo-insurance`,                           lastModified: new Date("2026-05-08"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/builders-risk-shipyard-insurance-batam`,                 lastModified: new Date("2026-05-07"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/how-to-get-builders-risk-insurance-batam`,               lastModified: new Date("2026-05-07"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/temporary-import-guarantee-ob23-batam`,                  lastModified: new Date("2026-07-05"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/en/blog/pa-insurance-foreign-workers-singapore-from-batam`,      lastModified: new Date("2026-09-22"), changeFrequency: "yearly", priority: 0.7 },

    // ────────────────────────────────────────────────────────────────────────
    // INFO PAGES
    // ────────────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/tentang-kami`, lastModified: new Date("2026-07-08"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/kontak`,       lastModified: new Date("2026-07-12"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/lokasi`,       lastModified: new Date("2026-07-12"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/en/about-us`,  lastModified: new Date("2026-07-12"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/en/contact`,   lastModified: new Date("2026-07-12"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/en/location`,  lastModified: new Date("2026-07-12"), changeFrequency: "monthly", priority: 0.6 },
  ];

  return staticPages;
}

// Menentukan jenis asuransi untuk pesan WhatsApp float berdasarkan halaman yang dibuka.
// Format label: [Indonesia, English?] — jika English kosong, label Indonesia dipakai.

type Label = readonly [string, string?];

const PAGE_TOPICS: Record<string, Label> = {
  // Properti
  "/asuransi-properti": ["Properti"],
  "/asuransi-properti/asuransi-hotel-batam": ["Hotel"],
  "/asuransi-properti/asuransi-rumah-batam": ["Rumah"],
  "/asuransi-properti/asuransi-ruko-batam": ["Ruko"],
  "/asuransi-properti/asuransi-gudang-batam": ["Gudang"],
  "/asuransi-properti/asuransi-apartemen-batam": ["Apartemen"],
  "/asuransi-properti/asuransi-pabrik-kawasan-industri-batam": ["Pabrik & Kawasan Industri"],
  "/kalkulator-premi-properti": ["Properti"],
  // Kendaraan
  "/asuransi-kendaraan": ["Kendaraan"],
  "/asuransi-kendaraan/asuransi-mobil-batam": ["Mobil"],
  "/asuransi-kendaraan/asuransi-dumptruck": ["Dump Truck"],
  "/kalkulator-premi-mobil": ["Mobil"],
  "/kalkulator-premi-motor": ["Motor"],
  // Machinery
  "/asuransi-machinery": ["Machinery"],
  "/asuransi-machinery/asuransi-alat-berat": ["Alat Berat"],
  "/asuransi-machinery/asuransi-crane": ["Crane"],
  "/asuransi-machinery/machinery-breakdown": ["Machinery Breakdown"],
  // Liability
  "/asuransi-liability": ["Liability"],
  "/asuransi-liability/asuransi-limbah-b3": ["Limbah B3"],
  "/asuransi-liability/public-liability": ["Public Liability"],
  "/asuransi-liability/employers-product-liability": ["Employers' & Product Liability"],
  "/asuransi-liability/freight-forwarders-liability": ["Freight Forwarders Liability"],
  // Engineering
  "/asuransi-engineering": ["Engineering"],
  "/asuransi-engineering/contractor-all-risk": ["Contractor All Risk"],
  "/asuransi-engineering/erection-all-risk": ["Erection All Risk"],
  "/asuransi-engineering/cecr": ["CECR (Civil Engineering Completed Risk)"],
  // Personal Accident
  "/asuransi-personal-accident": ["Personal Accident"],
  "/asuransi-personal-accident/pa-individu-keluarga": ["Personal Accident Individu & Keluarga", "Personal Accident for Individuals & Families"],
  "/asuransi-personal-accident/pa-karyawan-grup": ["Personal Accident Karyawan Grup", "Group Employee Personal Accident"],
  // Surety Bond
  "/asuransi-surety-bond": ["Surety Bond"],
  "/asuransi-surety-bond/bid-bond": ["Bid Bond"],
  "/asuransi-surety-bond/performance-bond": ["Performance Bond"],
  "/asuransi-surety-bond/advance-payment-bond": ["Advance Payment Bond"],
  "/asuransi-surety-bond/maintenance-bond": ["Maintenance Bond"],
  "/asuransi-surety-bond/custom-bond": ["Custom Bond"],
  // Marine
  "/asuransi-marine": ["Marine"],
  "/asuransi-marine/marine-hull": ["Marine Hull"],
  "/asuransi-marine/marine-cargo": ["Marine Cargo"],
  "/asuransi-marine/builders-risk": ["Builders Risk"],
  // Event
  "/asuransi-event": ["Event"],
  "/asuransi-event/konser-musik": ["Konser Musik", "Concert"],
  "/asuransi-event/motor-cross": ["Motocross"],
  "/asuransi-event/hole-in-one": ["Hole in One"],
  // Blog (ID) — dipetakan per slug karena nama slug tidak konsisten
  "/blog/asuransi-alat-berat-pertambangan": ["Alat Berat"],
  "/blog/asuransi-alat-berat-proyek-konstruksi": ["Alat Berat"],
  "/blog/asuransi-cargo-ekspor-batam": ["Marine Cargo"],
  "/blog/asuransi-dump-truck-batam-proyek-konstruksi": ["Dump Truck"],
  "/blog/asuransi-erection-all-risk-batam": ["Erection All Risk"],
  "/blog/asuransi-excavator-dan-bulldozer": ["Alat Berat"],
  "/blog/asuransi-freight-forwarders-liability-batam-panduan-lengkap": ["Freight Forwarders Liability"],
  "/blog/asuransi-gudang-kawasan-industri-muka-kuning-batam": ["Gudang"],
  "/blog/asuransi-hole-in-one-golf-batam": ["Hole in One"],
  "/blog/asuransi-kecelakaan-diri-pekerja-industri-batam": ["Personal Accident"],
  "/blog/asuransi-konser-musik-batam": ["Konser Musik"],
  "/blog/asuransi-motor-batam": ["Motor"],
  "/blog/asuransi-motorcross-batam": ["Motocross"],
  "/blog/asuransi-pa-pekerja-asing-ke-singapura-dari-batam": ["Personal Accident"],
  "/blog/asuransi-pengiriman-batam-jakarta": ["Marine Cargo"],
  "/blog/asuransi-pengiriman-batam-singapore": ["Marine Cargo"],
  "/blog/asuransi-pengiriman-mesin-alat-berat": ["Marine Cargo"],
  "/blog/asuransi-properti-komersial-batam": ["Properti Komersial", "Commercial Property"],
  "/blog/asuransi-proyek-konstruksi-batam": ["Contractor All Risk"],
  "/blog/asuransi-public-liability-batam-panduan-lengkap": ["Public Liability"],
  "/blog/berapa-premi-asuransi-builders-risk-kapal-batam": ["Builders Risk"],
  "/blog/biaya-premi-surety-bond-batam": ["Surety Bond"],
  "/blog/builders-risk-untuk-galangan-kapal": ["Builders Risk"],
  "/blog/cara-klaim-asuransi-car": ["Contractor All Risk"],
  "/blog/cara-klaim-asuransi-ffl-freight-forwarder-batam": ["Freight Forwarders Liability"],
  "/blog/cara-klaim-asuransi-kebakaran-rumah": ["Kebakaran Rumah", "Home Fire"],
  "/blog/cara-klaim-asuransi-marine-cargo": ["Marine Cargo"],
  "/blog/cara-klaim-asuransi-mobil-batam": ["Mobil"],
  "/blog/cara-klaim-asuransi-public-liability-batam": ["Public Liability"],
  "/blog/cara-mendapatkan-asuransi-builders-risk-batam": ["Builders Risk"],
  "/blog/cara-mendapatkan-surety-bond-tender-proyek-batam": ["Surety Bond"],
  "/blog/checklist-dokumen-custom-bond-ditolak": ["Custom Bond"],
  "/blog/custom-bond-galangan-kapal-batam": ["Custom Bond"],
  "/blog/employers-liability-product-liability-batam": ["Liability"],
  "/blog/jenis-jenis-asuransi-kapal-armada": ["Marine Hull"],
  "/blog/kawasan-logistik-pergudangan-batam-batu-ampar-sekupang-tanjung-uncang": ["Gudang"],
  "/blog/klaim-asuransi-limbah-b3-kawasan-industri-batam": ["Limbah B3"],
  "/blog/pentingnya-asuransi-limbah-b3": ["Limbah B3"],
  "/blog/perbedaan-all-risk-dan-tlo": ["Mobil"],
  "/blog/perbedaan-bid-bond-performance-bond": ["Surety Bond"],
  "/blog/perbedaan-car-dan-ear": ["Engineering"],
  "/blog/perbedaan-marine-hull-vs-cargo": ["Marine"],
  "/blog/premi-asuransi-kapal-batam-2026": ["Marine Hull"],
  "/blog/premi-asuransi-marine-cargo-batam": ["Marine Cargo"],
  "/blog/risiko-banjir-kendaraan-batam": ["Kendaraan"],
  "/blog/risiko-banjir-properti-batam": ["Properti"],

  // ── English ──
  "/en/property-insurance": ["Properti", "Property"],
  "/en/property-insurance/hotel-insurance-batam": ["Hotel"],
  "/en/property-insurance/home-insurance-batam": ["Rumah", "Home"],
  "/en/property-insurance/shophouse-insurance-batam": ["Ruko", "Shophouse"],
  "/en/property-insurance/warehouse-insurance-batam": ["Gudang", "Warehouse"],
  "/en/property-insurance/apartment-insurance-batam": ["Apartemen", "Apartment"],
  "/en/property-insurance/factory-industrial-insurance-batam": ["Pabrik", "Factory & Industrial"],
  "/en/property-premium-calculator": ["Properti", "Property"],
  "/en/vehicle-insurance": ["Kendaraan", "Vehicle"],
  "/en/vehicle-insurance/car-insurance-batam": ["Mobil", "Car"],
  "/en/vehicle-insurance/dump-truck-insurance": ["Dump Truck"],
  "/en/car-premium-calculator": ["Mobil", "Car"],
  "/en/motorcycle-premium-calculator": ["Motor", "Motorcycle"],
  "/en/machinery-insurance": ["Machinery"],
  "/en/machinery-insurance/heavy-equipment-insurance": ["Alat Berat", "Heavy Equipment"],
  "/en/machinery-insurance/crane-insurance": ["Crane"],
  "/en/machinery-insurance/machinery-breakdown": ["Machinery Breakdown"],
  "/en/liability-insurance": ["Liability"],
  "/en/liability-insurance/b3-waste-insurance": ["Limbah B3", "Hazardous Waste (B3)"],
  "/en/liability-insurance/public-liability": ["Public Liability"],
  "/en/liability-insurance/employers-product-liability": ["Employers' & Product Liability"],
  "/en/liability-insurance/freight-forwarders-liability": ["Freight Forwarders Liability"],
  "/en/hazardous-waste-insurance-batam": ["Limbah B3", "Hazardous Waste (B3)"],
  "/en/engineering-insurance": ["Engineering"],
  "/en/engineering-insurance/contractor-all-risk": ["Contractor All Risk"],
  "/en/engineering-insurance/erection-all-risk": ["Erection All Risk"],
  "/en/engineering-insurance/cecr": ["CECR (Civil Engineering Completed Risk)"],
  "/en/personal-accident-insurance": ["Personal Accident"],
  "/en/personal-accident-insurance/individual-family-pa": ["Personal Accident Individu & Keluarga", "Personal Accident for Individuals & Families"],
  "/en/personal-accident-insurance/group-employee-pa": ["Personal Accident Karyawan Grup", "Group Employee Personal Accident"],
  "/en/surety-bond-insurance": ["Surety Bond"],
  "/en/surety-bond-insurance/bid-bond": ["Bid Bond"],
  "/en/surety-bond-insurance/performance-bond": ["Performance Bond"],
  "/en/surety-bond-insurance/advance-payment-bond": ["Advance Payment Bond"],
  "/en/surety-bond-insurance/maintenance-bond": ["Maintenance Bond"],
  "/en/surety-bond-insurance/custom-bond": ["Custom Bond"],
  "/en/difference-between-bid-bond-and-performance-bond": ["Surety Bond"],
  "/en/marine-insurance": ["Marine"],
  "/en/marine-insurance/marine-hull": ["Marine Hull"],
  "/en/marine-insurance/marine-cargo": ["Marine Cargo"],
  "/en/marine-insurance/builders-risk": ["Builders Risk"],
  "/en/event-insurance": ["Event"],
  "/en/event-insurance/concert-insurance": ["Konser Musik", "Concert"],
  "/en/event-insurance/motocross-insurance": ["Motocross"],
  "/en/event-insurance/hole-in-one-insurance": ["Hole in One"],
  // Blog (EN)
  "/en/blog/all-risk-vs-tlo-car-insurance": ["Mobil", "Car"],
  "/en/blog/batam-export-cargo-insurance": ["Marine Cargo"],
  "/en/blog/batam-jakarta-cargo-insurance": ["Marine Cargo"],
  "/en/blog/batam-singapore-shipping-insurance": ["Marine Cargo"],
  "/en/blog/builders-risk-shipyard-insurance-batam": ["Builders Risk"],
  "/en/blog/commercial-property-insurance-batam": ["Properti Komersial", "Commercial Property"],
  "/en/blog/construction-project-insurance-batam": ["Contractor All Risk"],
  "/en/blog/difference-between-car-and-ear-insurance": ["Engineering"],
  "/en/blog/excavator-and-bulldozer-insurance-batam": ["Alat Berat", "Heavy Equipment"],
  "/en/blog/hazardous-waste-insurance-batam": ["Limbah B3", "Hazardous Waste (B3)"],
  "/en/blog/heavy-equipment-insurance-construction-projects": ["Alat Berat", "Heavy Equipment"],
  "/en/blog/how-to-claim-car-insurance-batam": ["Mobil", "Car"],
  "/en/blog/how-to-claim-car-insurance-project": ["Contractor All Risk"],
  "/en/blog/how-to-claim-home-fire-insurance": ["Kebakaran Rumah", "Home Fire"],
  "/en/blog/how-to-claim-marine-cargo-insurance": ["Marine Cargo"],
  "/en/blog/how-to-get-builders-risk-insurance-batam": ["Builders Risk"],
  "/en/blog/machinery-heavy-equipment-shipping-insurance-batam": ["Marine Cargo"],
  "/en/blog/marine-cargo-insurance-premium-batam": ["Marine Cargo"],
  "/en/blog/marine-hull-vs-cargo-insurance": ["Marine"],
  "/en/blog/mining-heavy-equipment-insurance": ["Alat Berat", "Heavy Equipment"],
  "/en/blog/pa-insurance-foreign-workers-singapore-from-batam": ["Personal Accident"],
};

// Jika halaman tidak ada di peta (beranda, kontak, tentang kami, dll.) → pesan umum.
export function getWhatsAppMessage(pathname: string): string {
  const isEN = pathname.startsWith("/en");
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const label = PAGE_TOPICS[clean];

  if (!label) {
    return isEN
      ? "Hello Rio, I would like to consult about insurance"
      : "Halo Rio, saya ingin konsultasi asuransi";
  }

  const topic = isEN ? label[1] ?? label[0] : label[0];
  return isEN
    ? `Hello Rio, I would like to ask about ${topic} insurance. Please send me the information.`
    : `Halo Rio, saya ingin menanyakan asuransi ${topic}. Tolong informasinya.`;
}

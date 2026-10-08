import type { Option, QuoteCluster } from "./types";

const YES_NO: Option[] = [
  { value: "yes", label: { id: "Ya", en: "Yes" } },
  { value: "no", label: { id: "Tidak", en: "No" } },
];

const KONSER = ["konser"];
const MOTO = ["motocross"];
const HIO = ["holeinone"];
const CROWD = ["konser", "motocross"];

export const EVENT: QuoteCluster = {
  key: "event",
  typeLegend: { id: "Jenis event", en: "Event type" },
  typeLine: { id: "Jenis event", en: "Event type" },
  types: [
    {
      key: "konser",
      label: { id: "Konser Musik", en: "Concert" },
      hint: { id: "Liability penonton & non-appearance artis", en: "Spectator liability & artist non-appearance" },
    },
    {
      key: "motocross",
      label: { id: "Motor Cross", en: "Motocross" },
      hint: { id: "PA pembalap & liability penonton", en: "Rider PA & spectator liability" },
    },
    {
      key: "holeinone",
      label: { id: "Hole in One", en: "Hole in One" },
      hint: { id: "Jaminan hadiah turnamen golf", en: "Golf tournament prize indemnity" },
    },
  ],
  inferType(pathname) {
    const p = pathname.toLowerCase();
    if (/hole-in-one|golf/.test(p)) return "holeinone";
    if (/motor-cross|motocross/.test(p)) return "motocross";
    return "konser";
  },
  fields: [
    {
      key: "venue",
      kind: "text",
      label: { id: "Lokasi / venue", en: "Venue" },
      placeholder: { id: "Nama venue atau lapangan golf", en: "Venue or golf course name" },
    },
    // ── Konser & Motor Cross ──
    {
      key: "audience",
      kind: "number",
      showFor: CROWD,
      label: { id: "Estimasi penonton", en: "Estimated spectators" },
      placeholder: { id: "mis. 5000", en: "e.g. 5000" },
      suffix: { id: "orang", en: "people" },
    },
    {
      key: "days",
      kind: "number",
      showFor: CROWD,
      optional: true,
      label: { id: "Durasi event", en: "Event duration" },
      placeholder: { id: "mis. 2", en: "e.g. 2" },
      suffix: { id: "hari", en: "days" },
    },
    // ── Konser ──
    {
      key: "setting",
      kind: "select",
      showFor: KONSER,
      optional: true,
      label: { id: "Lokasi acara", en: "Setting" },
      placeholder: { id: "Pilih indoor / outdoor", en: "Select indoor / outdoor" },
      options: [
        { value: "indoor", label: { id: "Indoor", en: "Indoor" } },
        { value: "outdoor", label: { id: "Outdoor", en: "Outdoor" } },
      ],
    },
    {
      key: "intlArtist",
      kind: "select",
      showFor: KONSER,
      optional: true,
      label: { id: "Ada artis mancanegara?", en: "International artists?" },
      placeholder: { id: "Pilih", en: "Select" },
      options: YES_NO,
    },
    {
      key: "budget",
      kind: "money",
      showFor: KONSER,
      optional: true,
      label: { id: "Estimasi total budget produksi", en: "Estimated production budget" },
      placeholder: { id: "mis. 2.000.000.000", en: "e.g. 2,000,000,000" },
    },
    // ── Motor Cross ──
    {
      key: "riders",
      kind: "number",
      showFor: MOTO,
      label: { id: "Pembalap terdaftar", en: "Registered riders" },
      placeholder: { id: "mis. 120", en: "e.g. 120" },
      suffix: { id: "orang", en: "riders" },
    },
    {
      key: "paBenefit",
      kind: "money",
      showFor: MOTO,
      optional: true,
      label: { id: "Santunan PA per pembalap yang diinginkan", en: "Desired PA benefit per rider" },
      placeholder: { id: "mis. 50.000.000", en: "e.g. 50,000,000" },
    },
    // ── Hole in One ──
    {
      key: "participants",
      kind: "number",
      showFor: HIO,
      label: { id: "Jumlah peserta (maks. 150)", en: "Participants (max. 150)" },
      placeholder: { id: "mis. 120", en: "e.g. 120" },
      suffix: { id: "orang", en: "players" },
    },
    {
      key: "holeDistance",
      kind: "number",
      showFor: HIO,
      label: { id: "Jarak hole par 3 (min. 120 m)", en: "Par 3 hole distance (min. 120 m)" },
      placeholder: { id: "mis. 135", en: "e.g. 135" },
      suffix: { id: "meter", en: "metres" },
    },
    {
      key: "amateur",
      kind: "select",
      showFor: HIO,
      optional: true,
      label: { id: "Semua peserta berstatus amatir?", en: "All participants amateur?" },
      placeholder: { id: "Pilih", en: "Select" },
      options: YES_NO,
    },
    {
      key: "prizeType",
      kind: "select",
      showFor: HIO,
      optional: true,
      label: { id: "Jenis hadiah", en: "Prize type" },
      placeholder: { id: "Pilih jenis hadiah", en: "Select prize type" },
      options: [
        { value: "vehicle", label: { id: "Mobil / motor", en: "Car / motorbike" } },
        { value: "cash", label: { id: "Uang tunai", en: "Cash" } },
        { value: "luxury", label: { id: "Perhiasan / barang mewah", en: "Jewellery / luxury item" } },
      ],
    },
    {
      key: "prize",
      kind: "money",
      showFor: HIO,
      label: { id: "Nilai hadiah (TSI)", en: "Prize value (TSI)" },
      placeholder: { id: "mis. 500.000.000", en: "e.g. 500,000,000" },
    },
  ],
  flags: [
    { key: "security", showFor: CROWD, label: { id: "Rencana pengamanan crowd sudah ada", en: "Crowd-safety plan is ready" } },
    { key: "medic", showFor: MOTO, label: { id: "Tim medis / ambulans disiapkan", en: "Medical team / ambulance arranged" } },
    { key: "supervisor", showFor: HIO, label: { id: "Bersedia ada petugas pengawas asuransi di hole", en: "Agree to an insurance supervisor at the hole" } },
    { key: "coi", label: { id: "Perlu Certificate of Insurance (izin keramaian / venue / sponsor)", en: "Need a Certificate of Insurance (permit / venue / sponsor)" } },
    { key: "recurring", label: { id: "Event rutin / berulang", en: "Recurring event" } },
    { key: "urgent", label: { id: "Event kurang dari 2 minggu lagi", en: "Event is less than 2 weeks away" } },
  ],
  general: [
    {
      doc: { id: "Identitas penyelenggara", en: "Organiser identity" },
      note: { id: "Akta/NIB (EO atau panitia) atau KTP penanggung jawab", en: "Deed/NIB (EO or committee) or ID of the person in charge" },
      must: true,
    },
    {
      doc: { id: "Nama, tanggal & lokasi event", en: "Event name, date & location" },
      note: { id: "Dasar penentuan periode dan risiko venue", en: "Basis for policy period and venue risk" },
      must: true,
    },
    {
      doc: { id: "Format COI dari venue / sponsor", en: "COI format from venue / sponsor" },
      note: { id: "Bila venue, sponsor, atau izin keramaian mensyaratkan", en: "If the venue, sponsor or crowd permit requires it" },
      must: false,
    },
  ],
  specific: {
    konser: [
      {
        doc: { id: "Rundown acara & susunan artis", en: "Event rundown & artist line-up" },
        note: { id: "Termasuk jadwal tampil dan durasi", en: "Including performance schedule and duration" },
        must: true,
      },
      {
        doc: { id: "Denah venue & estimasi kapasitas penonton", en: "Venue layout & estimated capacity" },
        note: { id: "Akses masuk-keluar dan zona penonton", en: "Entry/exit access and spectator zones" },
        must: true,
      },
      {
        doc: { id: "Estimasi total budget produksi", en: "Estimated total production budget" },
        note: { id: "Dasar nilai pertanggungan non-appearance / pembatalan", en: "Basis for non-appearance / cancellation sum insured" },
        must: true,
      },
      {
        doc: { id: "Rencana pengamanan crowd & keselamatan", en: "Crowd-control & safety plan" },
        note: { id: "Jumlah petugas, medis, dan jalur evakuasi", en: "Staff numbers, medical cover, and evacuation routes" },
        must: true,
      },
      {
        doc: { id: "Jadwal perjalanan artis mancanegara", en: "International artists' travel schedule" },
        note: { id: "Membantu assessment risiko keterlambatan / pembatalan", en: "Helps assess delay / cancellation risk" },
        must: false,
      },
    ],
    motocross: [
      {
        doc: { id: "Daftar pembalap terdaftar", en: "List of registered riders" },
        note: { id: "Nama dan kelas; PA hanya berlaku untuk pembalap terdaftar", en: "Name and class; PA only covers registered riders" },
        must: true,
      },
      {
        doc: { id: "Rundown lomba & kelas yang dipertandingkan", en: "Race rundown & classes" },
        note: { id: "Jumlah seri, heat, dan final", en: "Number of rounds, heats, and finals" },
        must: true,
      },
      {
        doc: { id: "Denah lintasan & estimasi penonton", en: "Track layout & estimated spectators" },
        note: { id: "Area penonton dan jarak aman dari lintasan", en: "Spectator areas and safe distance from the track" },
        must: true,
      },
      {
        doc: { id: "Rencana medis & keselamatan", en: "Medical & safety plan" },
        note: { id: "Tim medis, ambulans, dan marshal lintasan", en: "Medics, ambulance, and track marshals" },
        must: false,
      },
      {
        doc: { id: "Izin / rekomendasi penyelenggara", en: "Organiser permit / recommendation" },
        note: { id: "Mis. rekomendasi IMI, bila ada", en: "E.g. IMI recommendation, if any" },
        must: false,
      },
    ],
    holeinone: [
      {
        doc: { id: "Nama & lokasi lapangan golf", en: "Golf course name & location" },
        note: { id: "Beserta tanggal turnamen", en: "With the tournament date" },
        must: true,
      },
      {
        doc: { id: "Jumlah peserta & status amatir", en: "Participant count & amateur status" },
        note: { id: "Maksimal 150 peserta; pemain profesional tidak memenuhi syarat", en: "Max. 150 participants; professional players are not eligible" },
        must: true,
      },
      {
        doc: { id: "Hole par 3 yang diasuransikan", en: "Par 3 hole to be insured" },
        note: { id: "Jarak minimal 120 meter", en: "Minimum distance of 120 metres" },
        must: true,
      },
      {
        doc: { id: "Jenis & nilai hadiah (TSI)", en: "Prize type & value (TSI)" },
        note: { id: "Risiko sendiri 10% dari nilai hadiah", en: "Own risk of 10% of the prize value" },
        must: true,
      },
      {
        doc: { id: "Kesediaan petugas pengawas asuransi", en: "Agreement to an insurance supervisor" },
        note: { id: "Hadir mengawasi hole yang diasuransikan", en: "Present at the insured hole" },
        must: true,
      },
    ],
  },
  disclaimer: {
    id: "Daftar bersifat umum; setiap acara dinilai secara individual. Ajukan sedini mungkin sebelum hari pelaksanaan (untuk hole in one, minimal 1–2 minggu) agar verifikasi dan penjadwalan sempat dilakukan.",
    en: "This list is a general guide; every event is assessed individually. Apply as early as possible (for hole in one, at least 1–2 weeks ahead) so verification and scheduling can be done.",
  },
  copy: {
    modalTitle: { id: "Permintaan Penawaran Asuransi Event", en: "Event Insurance Quote Request" },
    modalSubtitle: {
      id: "Isi data singkat acara Anda — kami analisa awal dan balas lewat WhatsApp.",
      en: "Share a few details about your event — we'll assess and reply on WhatsApp.",
    },
    reqEyebrow: { id: "Persyaratan Penerbitan", en: "Issuance Requirements" },
    reqTitle: { id: "Dokumen yang Disiapkan untuk Asuransi Event", en: "Documents to Prepare for Event Insurance" },
    reqSubtitle: {
      id: "Pilih jenis event untuk melihat dokumen khususnya. Dokumen penyelenggara berlaku untuk semua jenis.",
      en: "Choose an event type to see its specific documents. Organiser documents apply to every type.",
    },
    dateLabel: { id: "Tanggal event", en: "Event date" },
    clientLabel: { id: "Nama event", en: "Event name" },
    clientPh: { id: "mis. Batam Music Festival 2026", en: "e.g. Batam Music Festival 2026" },
    notePh: {
      id: "mis. nama artis, kelas lomba, sponsor, atau persyaratan khusus dari venue.",
      en: "e.g. artist names, race classes, sponsors, or special venue requirements.",
    },
    msgIntro: {
      id: "Halo Rio, saya ingin *meminta penawaran Asuransi Event*.",
      en: "Hello Rio, I would like to *request an Event Insurance quotation*.",
    },
    msgOutro: {
      id: "Mohon dibantu analisa awal, estimasi premi, dan daftar dokumen yang dibutuhkan. Terima kasih.",
      en: "Please help with an initial assessment, premium estimate, and the list of required documents. Thank you.",
    },
    unsureNote: { id: "", en: "" },
    companyLabel: { id: "Nama panitia / EO / klub", en: "Organiser / EO / club name" },
  },
};

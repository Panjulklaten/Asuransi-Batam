"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, MessageCircle, ShieldCheck } from "lucide-react";
import { SITE, WHATSAPP_URL } from "@/lib/constants";

type Lang = "id" | "en";

const copy = {
  id: {
    eyebrow: "Tentang Kami",
    headline: "Praktisi Asuransi Profesional",
    body: "Rio Mardiansyah — praktisi asuransi kerugian dengan pengalaman 8+ tahun, melayani individu dan korporat di Batam. Spesialis properti, kendaraan, alat berat, marine, dan surety bond.",
    points: ["Konsultasi gratis", "Penawaran 1×24 jam kerja", "Pendampingan klaim"],
    profile: "Lihat Profil Lengkap",
    contact: "Hubungi Saya",
    role: "Praktisi Asuransi · Batam",
    wa: "WhatsApp",
    call: "Telepon",
    waMsg: "Halo Rio, saya ingin berkonsultasi tentang asuransi.",
    href: "/tentang-kami",
  },
  en: {
    eyebrow: "About Us",
    headline: "Professional Insurance Practitioner",
    body: "Rio Mardiansyah — a general insurance practitioner with 8+ years of experience, serving individuals and corporates in Batam. Specialising in property, vehicle, heavy equipment, marine, and surety bonds.",
    points: ["Free consultation", "Quote within 1 business day", "Claims assistance"],
    profile: "View Full Profile",
    contact: "Contact Me",
    role: "Insurance Practitioner · Batam",
    wa: "WhatsApp",
    call: "Call",
    waMsg: "Hello Rio, I would like to consult about insurance.",
    href: "/en/about-us",
  },
} as const;

/** Konten 2 kolom: kiri profil + CTA, kanan kartu gelap dengan foto & kontak cepat. */
function AboutContent({ lang, onNavigate }: { lang: Lang; onNavigate?: () => void }) {
  const t = copy[lang];
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.25fr_1fr] gap-4 md:gap-5 p-4 md:p-5">
      {/* Kolom kiri — profil */}
      <div className="flex flex-col justify-center px-1 md:px-2">
        <p className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#c9a84c]/70 mb-2">
          <ShieldCheck className="w-3.5 h-3.5" />
          {t.eyebrow}
        </p>
        <h3 className="font-display font-bold text-lg md:text-xl text-white leading-snug mb-2">
          {t.headline}
        </h3>
        <p className="text-sm text-white/65 leading-relaxed mb-3">{t.body}</p>
        <ul className="flex flex-wrap gap-1.5 mb-4">
          {t.points.map((p) => (
            <li
              key={p}
              className="px-2.5 py-1 rounded-full text-[11px] font-medium text-[#c9a84c] bg-[#c9a84c]/10 border border-[#c9a84c]/20"
            >
              {p}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={t.href}
            onClick={onNavigate}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#c9a84c] to-[#f0d080] text-[#0a1628] text-sm font-bold shadow-lg shadow-[#c9a84c]/20 hover:shadow-xl transition-all"
          >
            {t.profile}
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href={WHATSAPP_URL(t.waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onNavigate}
            className="inline-flex items-center px-3 py-2 text-sm font-semibold text-[#c9a84c] hover:text-[#f0d080] transition-colors"
          >
            {t.contact}
          </a>
        </div>
      </div>

      {/* Kolom kanan — featured card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0a1628] via-[#08111f] to-[#050b14] border border-[#c9a84c]/25 p-5 flex flex-col items-center text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#c9a84c]/10 blur-3xl"
        />
        <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full p-[3px] bg-gradient-to-br from-[#f0d080] to-[#c9a84c] shadow-lg shadow-[#c9a84c]/20">
          <Image
            src={SITE.agent.photo}
            alt="Rio Mardiansyah"
            width={112}
            height={112}
            sizes="112px"
            className="w-full h-full rounded-full object-cover border-2 border-[#0a1628]"
          />
        </div>
        <p className="relative mt-3 font-display font-bold text-white">Rio Mardiansyah</p>
        <p className="relative text-xs text-white/55 mb-4">{t.role}</p>
        <div className="relative flex w-full flex-col sm:flex-row md:flex-col lg:flex-row gap-2">
          <a
            href={WHATSAPP_URL(t.waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onNavigate}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#25D366]/15 border border-[#25D366]/40 text-[#4be28a] text-xs font-bold hover:bg-[#25D366]/25 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            {t.wa}
          </a>
          <a
            href={`tel:+${SITE.phoneWA}`}
            onClick={onNavigate}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/15 text-white/85 text-xs font-bold hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            {SITE.phone}
          </a>
        </div>
      </div>
    </div>
  );
}

/** Panel desktop — fade-in + slide-down halus (kelas mm-drop di globals.css). */
export function AboutMegaPanel({ lang, onNavigate }: { lang: Lang; onNavigate?: () => void }) {
  return (
    <div className="mm-drop bg-[#0d1f3c] border border-[#c9a84c]/20 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
      <AboutContent lang={lang} onNavigate={onNavigate} />
    </div>
  );
}

/** Kartu mobile — tampil di dalam accordion menu. */
export function AboutMobileCard({ lang, onNavigate }: { lang: Lang; onNavigate?: () => void }) {
  return (
    <div className="mm-drop ml-3 mb-2 mt-1 rounded-xl border border-[#c9a84c]/15 bg-[#0d1f3c]/60">
      <AboutContent lang={lang} onNavigate={onNavigate} />
    </div>
  );
}

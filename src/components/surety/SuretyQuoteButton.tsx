"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { FileText } from "lucide-react";
import { inferSuretyType, type Lang, type SuretyTypeKey } from "@/lib/surety";

// Modal baru dimuat saat tombol diklik, supaya tidak menambah beban halaman.
const SuretyQuoteModal = dynamic(() => import("./SuretyQuoteModal"), { ssr: false });

type Variant = "gold" | "onDark";

const VARIANTS: Record<Variant, string> = {
  // Emas penuh dengan kilau — untuk latar terang atau sebagai aksi utama
  gold: "btn-shimmer bg-gradient-to-r from-[#c9a84c] to-[#f0d080] text-[#0a1628] shadow-lg shadow-[#c9a84c]/20 hover:shadow-xl hover:shadow-[#c9a84c]/30",
  // Outline putih — selaras dengan tombol sekunder di hero/CTA berlatar navy
  onDark: "border-2 border-white/30 text-white hover:border-[#c9a84c] hover:bg-white/10",
};

export default function SuretyQuoteButton({
  lang: langProp,
  defaultType,
  variant = "onDark",
  label,
  className = "",
}: {
  lang?: Lang;
  defaultType?: SuretyTypeKey;
  variant?: Variant;
  label?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const lang: Lang = langProp ?? (pathname?.startsWith("/en") ? "en" : "id");
  const type = defaultType ?? inferSuretyType(pathname);
  const text = label ?? (lang === "id" ? "Minta Penawaran" : "Request a Quote");

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className={`inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-center font-bold transition-all active:scale-[0.98] ${VARIANTS[variant]} ${className}`}
      >
        <FileText size={18} className={variant === "onDark" ? "text-[#c9a84c]" : ""} />
        <span>{text}</span>
      </button>
      {open && <SuretyQuoteModal lang={lang} defaultType={type} onClose={() => setOpen(false)} />}
    </>
  );
}

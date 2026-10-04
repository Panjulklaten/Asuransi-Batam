"use client";

import Link from "next/link";
import { DECLARATION_ITEMS } from "@/lib/sppa/declaration";
import { errCls } from "./ui";

interface Props {
  accepted: string[];
  onToggle: (id: string) => void;
  error?: string;
}

export function DeclarationStep({ accepted, onToggle, error }: Props) {
  return (
    <div id="f-declaration" className="grid gap-3">
      <p className="text-sm text-[#475569]">Mohon baca dan setujui seluruh pernyataan berikut untuk mengirim SPPA.</p>
      {DECLARATION_ITEMS.map((item) => {
        const on = accepted.includes(item.id);
        return (
          <label key={item.id} className={`flex items-start gap-3 px-4 py-3.5 rounded-xl border-2 cursor-pointer transition-colors ${on ? "border-[#c9a84c] bg-[#c9a84c]/10" : error ? "border-red-300" : "border-[#e2e8f0] hover:border-[#c9a84c]/60"}`}>
            <input type="checkbox" checked={on} onChange={() => onToggle(item.id)} className="w-5 h-5 mt-0.5 accent-[#c9a84c] shrink-0" />
            <span className="text-[15px] leading-relaxed text-[#0a1628]">
              {item.text}
              {item.id === "privacy" && (
                <> (<Link href="/kebijakan-privasi" target="_blank" className="underline text-[#1a4fa0]">Kebijakan Privasi</Link> · <Link href="/syarat-ketentuan" target="_blank" className="underline text-[#1a4fa0]">Syarat &amp; Ketentuan</Link>)</>
              )}
            </span>
          </label>
        );
      })}
      {error && <p role="alert" className={errCls}>{error}</p>}
    </div>
  );
}

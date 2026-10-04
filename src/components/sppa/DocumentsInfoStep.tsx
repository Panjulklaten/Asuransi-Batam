import { WHATSAPP_URL } from "@/lib/constants";
import type { DocumentSpec } from "@/lib/sppa/types";
import { cardCls } from "./ui";

export function DocumentsInfoStep({ docs }: { docs: DocumentSpec[] }) {
  return (
    <div className="grid gap-4">
      <p className="text-sm text-[#475569]">
        Anda <strong>tidak perlu mengunggah dokumen</strong> di formulir ini. Setelah SPPA terkirim, kirimkan dokumen berikut lewat WhatsApp kami (foto atau PDF) dengan menyebutkan nomor referensi Anda.
      </p>
      <div className={`${cardCls} p-4`}>
        <h3 className="font-display font-bold text-[#0a1628]">Siapkan dokumen berikut</h3>
        <ul className="mt-3 grid gap-3">
          {docs.map((d) => (
            <li key={d.key} className="text-[15px] text-[#0a1628]">
              <span className="font-semibold">{d.label}</span>
              {d.required ? <span className="ml-2 text-xs font-semibold text-red-600">wajib</span> : <span className="ml-2 text-xs text-[#64748b]">jika ada</span>}
              {d.hint && <span className="block text-xs text-[#64748b]">{d.hint}</span>}
            </li>
          ))}
        </ul>
      </div>
      <p className="text-xs text-[#64748b]">
        Ada pertanyaan soal dokumen? <a className="underline" href={WHATSAPP_URL("Halo, saya ingin bertanya soal dokumen untuk SPPA.")} target="_blank" rel="noopener noreferrer">Tanya via WhatsApp</a>.
      </p>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";
import { btnPrimary, btnSecondary, cardCls } from "./ui";

export interface SubmitResult {
  referenceNo: string;
  product: string;
  applicantName: string;
  submittedAt: string;
  status: string;
  documents?: { label: string; required: boolean }[];
}

export function SuccessView({ result }: { result: SubmitResult }) {
  const [copied, setCopied] = useState(false);
  const when = new Intl.DateTimeFormat("id-ID", { dateStyle: "long", timeStyle: "short", timeZone: "Asia/Jakarta" }).format(new Date(result.submittedAt));
  const rows: [string, string][] = [
    ["Produk", result.product],
    ["Nama pemohon", result.applicantName],
    ["Tanggal pengajuan", `${when} WIB`],
    ["Status", result.status],
  ];
  return (
    <div className={`${cardCls} p-5 sm:p-8 text-center`} role="status">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700" aria-hidden="true">✓</div>
      <h2 className="font-display font-bold text-2xl text-[#0a1628]">SPPA berhasil dikirim</h2>
      <p className="mt-2 text-[#475569] text-sm">Simpan nomor referensi ini. Kami akan menghubungi Anda untuk langkah berikutnya.</p>

      <div className="mt-5 rounded-xl bg-[#0a1628] px-4 py-4">
        <p className="text-xs uppercase tracking-wide text-white/60">Nomor referensi</p>
        <p className="mt-1 font-display font-bold text-xl sm:text-2xl text-[#f0d080] break-all select-all">{result.referenceNo}</p>
        <button type="button" className="mt-2 min-h-[44px] text-sm font-semibold text-white/80 hover:text-white underline" onClick={() => navigator.clipboard?.writeText(result.referenceNo).then(() => setCopied(true)).catch(() => null)}>
          {copied ? "Tersalin ✓" : "Salin nomor"}
        </button>
      </div>

      <dl className="mt-5 text-left grid gap-3">
        {rows.map(([k, v]) => (
          <div key={k} className="flex flex-col sm:flex-row sm:justify-between gap-0.5 border-b border-[#e2e8f0] pb-3">
            <dt className="text-sm text-[#64748b]">{k}</dt>
            <dd className="font-semibold text-[#0a1628] sm:text-right">{v}</dd>
          </div>
        ))}
      </dl>

      {result.documents && result.documents.length > 0 && (
        <div className="mt-5 rounded-xl border border-[#c9a84c] bg-[#c9a84c]/10 p-4 text-left">
          <p className="font-display font-bold text-[#0a1628]">Langkah berikutnya: kirim dokumen via WhatsApp</p>
          <ul className="mt-2 grid gap-1 list-disc pl-5 text-sm text-[#0a1628]">
            {result.documents.map((d) => <li key={d.label}>{d.label}{d.required && <span className="font-semibold"> (wajib)</span>}</li>)}
          </ul>
        </div>
      )}

      <p className="mt-5 text-xs text-[#64748b] leading-relaxed">
        Pengajuan ini belum berarti risiko otomatis diterima atau ditutup oleh perusahaan asuransi, dan bukan merupakan polis.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <a href={WHATSAPP_URL(`Halo, saya sudah mengirim SPPA dengan nomor referensi ${result.referenceNo} (${result.product}). Saya ingin mengirim dokumen pendukung.`)} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
          Kirim Dokumen via WhatsApp
        </a>
        <Link href="/" className={btnSecondary}>Kembali ke Beranda</Link>
      </div>
    </div>
  );
}

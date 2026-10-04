// Gaya bersama form SPPA — mengikuti tema existing (navy #0a1628, gold #c9a84c).
// Input minimal 48px tinggi dan font 16px agar nyaman di HP (tidak memicu zoom iOS).
export const fieldBase =
  "w-full min-h-[48px] px-4 py-3 rounded-xl border-2 bg-white text-base text-[#0a1628] font-medium outline-none placeholder:text-[#94a3b8] transition-colors";
export const fieldOk = "border-[#e2e8f0] focus:border-[#1a4fa0]";
export const fieldErr = "border-red-500 focus:border-red-600";
export const labelCls = "block font-display font-semibold text-[#0a1628] mb-2 text-[15px] leading-snug";
export const hintCls = "block text-[#475569] text-xs mt-1.5";
export const errCls = "text-red-600 text-sm mt-1.5 font-medium";
export const btnPrimary =
  "inline-flex items-center justify-center gap-2 min-h-[52px] px-6 py-3.5 rounded-xl font-display font-bold text-[#0a1628] bg-gradient-to-r from-[#c9a84c] to-[#f0d080] hover:shadow-lg transition disabled:opacity-60 disabled:cursor-not-allowed";
export const btnSecondary =
  "inline-flex items-center justify-center gap-2 min-h-[52px] px-6 py-3.5 rounded-xl font-display font-semibold text-[#0a1628] bg-white border-2 border-[#e2e8f0] hover:border-[#c9a84c] transition disabled:opacity-60";
export const cardCls = "bg-white rounded-2xl border border-[#e2e8f0] shadow-sm";

interface Props {
  titles: string[];
  index: number;
}

export function StepProgress({ titles, index }: Props) {
  const total = titles.length;
  const pct = Math.round(((index + 1) / total) * 100);
  return (
    <div className="mb-6" aria-label="Progres pengisian">
      <div className="flex items-baseline justify-between gap-3 mb-2">
        <p className="text-xs font-semibold tracking-wide uppercase text-[#64748b]">Langkah {index + 1} dari {total}</p>
        <p className="text-xs font-semibold text-[#64748b]">{pct}%</p>
      </div>
      <div className="h-2 rounded-full bg-[#e2e8f0] overflow-hidden" role="progressbar" aria-valuemin={1} aria-valuemax={total} aria-valuenow={index + 1} aria-valuetext={`Langkah ${index + 1} dari ${total}: ${titles[index]}`}>
        <div className="h-full rounded-full bg-gradient-to-r from-[#c9a84c] to-[#f0d080] transition-all duration-300" style={{ width: `${pct}%` }} />
      </div>
      <h2 className="font-display font-bold text-xl sm:text-2xl text-[#0a1628] mt-4">{titles[index]}</h2>
    </div>
  );
}

"use client";
import { Loader2, Paperclip } from "lucide-react";
import type { ThreadSummary } from "@/lib/mail/types";
import { formatListDate } from "./utils";

export default function ThreadList({ threads, selectedId, loading, hasMore, onSelect, onMore, emptyText }: {
  threads: ThreadSummary[]; selectedId: string | null; loading: boolean; hasMore: boolean;
  onSelect: (id: string) => void; onMore: () => void; emptyText: string;
}) {
  if (!loading && threads.length === 0) return <p className="px-6 py-16 text-center text-sm text-slate-400">{emptyText}</p>;
  return (
    <ul className="divide-y divide-slate-100">
      {threads.map((t) => {
        const unread = t.unread_count > 0;
        return (
          <li key={t.id}>
            <button onClick={() => onSelect(t.id)} aria-current={t.id === selectedId} className={`block w-full px-4 py-3 text-left transition hover:bg-amber-50/60 ${t.id === selectedId ? "bg-amber-50" : unread ? "bg-white" : "bg-slate-50/60"}`}>
              <span className="flex items-baseline justify-between gap-2">
                <span className={`truncate text-sm ${unread ? "font-bold" : "font-medium text-slate-700"}`}>
                  {t.last_from ?? "—"}{t.message_count > 1 && <span className="ml-1 text-xs font-normal text-slate-400">({t.message_count})</span>}
                </span>
                <time className={`shrink-0 text-xs ${unread ? "font-semibold text-navy" : "text-slate-400"}`} dateTime={t.last_message_at}>{formatListDate(t.last_message_at)}</time>
              </span>
              <span className={`mt-0.5 flex items-center gap-1 truncate text-sm ${unread ? "font-semibold" : "text-slate-700"}`}>
                {unread && <span className="h-2 w-2 shrink-0 rounded-full bg-gold" aria-label="Belum dibaca" />}
                <span className="truncate">{t.subject || "(tanpa subjek)"}</span>
                {t.has_attachments && <Paperclip size={12} className="shrink-0 text-slate-400" aria-label="Ada lampiran" />}
              </span>
              <span className="block truncate text-xs text-slate-400">{t.snippet}</span>
            </button>
          </li>
        );
      })}
      {loading && <li className="flex justify-center py-6 text-slate-400"><Loader2 className="animate-spin" size={18} /></li>}
      {hasMore && !loading && <li><button onClick={onMore} className="w-full py-3 text-sm text-slate-500 hover:bg-slate-50">Muat lebih banyak</button></li>}
    </ul>
  );
}

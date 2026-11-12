"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Archive, Inbox, LogOut, Pencil, RefreshCw, Search, Send, Trash2, X } from "lucide-react";
import type { Folder } from "@/lib/mail/config";
import type { FolderCounts, ThreadDetail, ThreadSummary } from "@/lib/mail/types";
import Composer from "./Composer";
import ThreadList from "./ThreadList";
import ThreadView, { type ThreadAction } from "./ThreadView";
import { api } from "./utils";

const FOLDERS: { id: Folder; label: string; icon: typeof Inbox; empty: string }[] = [
  { id: "inbox", label: "Inbox", icon: Inbox, empty: "Inbox kosong." },
  { id: "sent", label: "Sent", icon: Send, empty: "Belum ada email terkirim." },
  { id: "archive", label: "Archive", icon: Archive, empty: "Tidak ada email di arsip." },
  { id: "trash", label: "Trash", icon: Trash2, empty: "Trash kosong." },
];
const isFolder = (v: string | null): v is Folder => FOLDERS.some((f) => f.id === v);

export default function MailApp({ adminEmail, selfAddress }: { adminEmail: string; selfAddress: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();
  const folder: Folder = isFolder(sp.get("folder")) ? (sp.get("folder") as Folder) : "inbox";
  const selectedId = sp.get("t");
  const urlQuery = sp.get("q") ?? "";

  const [threads, setThreads] = useState<ThreadSummary[]>([]);
  const [nextBefore, setNextBefore] = useState<string | null>(null);
  const [counts, setCounts] = useState<FolderCounts | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [detail, setDetail] = useState<ThreadDetail | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [composing, setComposing] = useState(false);
  const [toast, setToast] = useState("");
  const [search, setSearch] = useState(urlQuery);
  const listSeq = useRef(0);

  const go = useCallback((patch: Record<string, string | null>, replace = false) => {
    const p = new URLSearchParams(sp.toString());
    for (const [k, v] of Object.entries(patch)) { if (v) p.set(k, v); else p.delete(k); }
    const url = `${pathname}${p.size ? `?${p}` : ""}`;
    if (replace) router.replace(url, { scroll: false }); else router.push(url, { scroll: false });
  }, [sp, pathname, router]);

  const flash = (m: string) => { setToast(m); setTimeout(() => setToast(""), 4000); };

  // ── Daftar ────────────────────────────────────────────────────────────────
  const loadList = useCallback(async (opts: { more?: boolean; silent?: boolean } = {}) => {
    const seq = ++listSeq.current;
    if (!opts.silent) setLoading(true);
    const qs = new URLSearchParams({ folder });
    if (urlQuery) qs.set("q", urlQuery);
    if (opts.more && nextBefore) qs.set("before", nextBefore);
    const r = await api<{ threads: ThreadSummary[]; nextBefore: string | null; counts: FolderCounts | null }>(`/api/mail/threads?${qs}`);
    if (seq !== listSeq.current) return;
    if (r.status === 401) { router.replace("/mail"); return; }
    if (!r.ok) { setError(r.data.message ?? "Gagal memuat."); setLoading(false); return; }
    setError("");
    setThreads((prev) => (opts.more ? [...prev, ...r.data.threads] : r.data.threads));
    setNextBefore(r.data.nextBefore);
    if (r.data.counts) setCounts(r.data.counts);
    setLoading(false);
  }, [folder, urlQuery, nextBefore, router]);

  useEffect(() => { void loadList(); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, [folder, urlQuery]);

  // Cek email baru tiap 45 detik selama tab terlihat.
  useEffect(() => {
    const t = setInterval(() => { if (document.visibilityState === "visible") void loadList({ silent: true }); }, 45_000);
    return () => clearInterval(t);
  }, [loadList]);

  // Pencarian (debounce)
  useEffect(() => {
    if (search === urlQuery) return;
    const t = setTimeout(() => go({ q: search.trim() || null, t: null }, true), 400);
    return () => clearTimeout(t);
  }, [search, urlQuery, go]);

  // ── Detail ────────────────────────────────────────────────────────────────
  const openThread = useCallback(async (id: string, images = false) => {
    setDetailLoading(true);
    const r = await api<ThreadDetail>(`/api/mail/threads/${id}${images ? "?images=1" : ""}`);
    setDetailLoading(false);
    if (r.status === 401) { router.replace("/mail"); return; }
    if (!r.ok) { flash(r.data.message ?? "Gagal membuka percakapan."); go({ t: null }, true); return; }
    setDetail(r.data);
    if (r.data.thread.unread_count > 0 && !images) {
      void api(`/api/mail/threads/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "mark_read" }) }).then(() => {
        setThreads((p) => p.map((t) => (t.id === id ? { ...t, unread_count: 0 } : t)));
        setCounts((c) => (c ? { ...c, inbox_unread: Math.max(0, c.inbox_unread - r.data.thread.unread_count) } : c));
      });
    }
  }, [go, router]);

  useEffect(() => { if (selectedId) void openThread(selectedId); else setDetail(null); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, [selectedId]);

  async function act(a: ThreadAction) {
    if (!detail) return;
    const id = detail.thread.id;
    if (a === "delete" && !confirm("Hapus permanen percakapan ini? Tindakan ini tidak dapat dibatalkan.")) return;
    const r = a === "delete"
      ? await api(`/api/mail/threads/${id}`, { method: "DELETE" })
      : await api(`/api/mail/threads/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: a }) });
    if (!r.ok) return flash(r.data.message ?? "Aksi gagal.");
    flash({ archive: "Dipindahkan ke Archive", trash: "Dipindahkan ke Trash", inbox: "Dipindahkan ke Inbox", mark_unread: "Ditandai belum dibaca", delete: "Dihapus permanen" }[a]);
    go({ t: null });
    void loadList({ silent: true });
  }

  async function sent(threadId: string, warning: string | null) {
    setComposing(false);
    flash(warning ?? "Email terkirim");
    await loadList({ silent: true });
    if (threadId && selectedId === threadId) void openThread(threadId);
    else if (threadId) go({ t: threadId, folder: folder === "trash" ? "inbox" : folder });
  }

  async function logout() {
    await api("/api/mail/auth/logout", { method: "POST" });
    router.replace("/mail");
    router.refresh();
  }

  const current = FOLDERS.find((f) => f.id === folder)!;
  const showDetailOnMobile = !!selectedId;

  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center gap-3 bg-navy px-3 py-2.5 text-white sm:px-4">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg font-display text-sm font-bold text-navy" style={{ background: "linear-gradient(135deg,#c9a84c,#f0d080)" }}>AB</span>
        <span className="hidden font-display font-bold sm:block">Webmail</span>
        <div className="relative mx-auto w-full max-w-xl">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-100/60" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Cari pengirim atau subjek…" aria-label="Cari email" className="w-full rounded-lg bg-white/10 py-2 pl-9 pr-8 text-sm text-white outline-none placeholder:text-blue-100/50 focus:bg-white/20" />
          {search && <button onClick={() => setSearch("")} aria-label="Hapus pencarian" className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-100/70"><X size={14} /></button>}
        </div>
        <span className="hidden text-xs text-blue-100/70 lg:block">{adminEmail}</span>
        <button onClick={logout} className="rounded-lg p-2 hover:bg-white/10" aria-label="Keluar" title="Keluar"><LogOut size={18} /></button>
      </header>

      <div className="flex min-h-0 flex-1">
        {/* Sidebar */}
        <nav className={`w-16 shrink-0 border-r border-slate-200 bg-white p-2 md:w-56 md:p-3 ${showDetailOnMobile ? "hidden md:block" : ""}`} aria-label="Folder">
          <button onClick={() => setComposing(true)} className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold text-navy shadow-sm" style={{ background: "linear-gradient(135deg,#c9a84c,#f0d080)" }}>
            <Pencil size={16} /> <span className="hidden md:inline">Tulis</span>
          </button>
          {FOLDERS.map((f) => {
            const n = f.id === "inbox" ? counts?.inbox_unread : undefined;
            const active = f.id === folder;
            return (
              <button key={f.id} onClick={() => go({ folder: f.id === "inbox" ? null : f.id, t: null })} aria-current={active ? "page" : undefined} title={f.label}
                className={`mb-1 flex w-full items-center justify-center gap-3 rounded-lg px-3 py-2 text-sm md:justify-start ${active ? "bg-amber-50 font-semibold text-navy" : "text-slate-600 hover:bg-slate-100"}`}>
                <f.icon size={18} className={active ? "text-gold" : ""} />
                <span className="hidden flex-1 text-left md:inline">{f.label}</span>
                {!!n && <span className="hidden rounded-full bg-gold px-2 text-xs font-bold text-navy md:inline">{n}</span>}
              </button>
            );
          })}
        </nav>

        {/* Daftar */}
        <section className={`w-full min-w-0 flex-col border-r border-slate-200 bg-white md:flex md:w-[22rem] md:shrink-0 lg:w-[26rem] ${showDetailOnMobile ? "hidden" : "flex"}`}>
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-2.5">
            <h1 className="font-display text-sm font-bold">{current.label}{urlQuery && <span className="font-normal text-slate-400"> · “{urlQuery}”</span>}</h1>
            <button onClick={() => loadList()} aria-label="Muat ulang" className="rounded p-1.5 text-slate-500 hover:bg-slate-100"><RefreshCw size={15} className={loading ? "animate-spin" : ""} /></button>
          </div>
          {error && <p role="alert" className="m-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
          <div className="min-h-0 flex-1 overflow-y-auto">
            <ThreadList threads={threads} selectedId={selectedId} loading={loading} hasMore={!!nextBefore} onSelect={(id) => go({ t: id })} onMore={() => loadList({ more: true })} emptyText={urlQuery ? "Tidak ada hasil." : current.empty} />
          </div>
        </section>

        {/* Detail */}
        <section className={`min-w-0 flex-1 bg-slate-50 md:block ${showDetailOnMobile ? "block" : "hidden"}`}>
          {detail && detail.thread.id === selectedId ? (
            <ThreadView detail={detail} folder={folder} selfAddress={selfAddress} onBack={() => go({ t: null })} onAction={act} onSent={sent} onLoadImages={() => openThread(detail.thread.id, true)} />
          ) : detailLoading ? (
            <div className="grid h-full place-items-center text-sm text-slate-400">Memuat…</div>
          ) : (
            <div className="hidden h-full place-items-center text-sm text-slate-400 md:grid">Pilih percakapan untuk dibaca</div>
          )}
        </section>
      </div>

      {composing && <Composer variant="modal" target={{ threadId: null, subject: "", replyTo: null, replyAll: false }} selfAddress={selfAddress} onClose={() => setComposing(false)} onSent={sent} />}
      {toast && <div role="status" className="fixed bottom-4 left-1/2 z-[60] -translate-x-1/2 rounded-lg bg-navy px-4 py-2 text-sm text-white shadow-lg">{toast}</div>}
    </div>
  );
}

"use client";
import { useCallback, useEffect, useState, type RefObject } from "react";
import { AlignCenter, AlignLeft, AlignRight, Bold, Italic, Link2, List, ListOrdered, RemoveFormatting, Underline } from "lucide-react";

// Editor isi email berbasis contentEditable + document.execCommand (tanpa dependensi, jalan di Chrome HP).
// HTML-nya TIDAK dipercaya: server menyanitasi ulang (src/lib/mail/richtext.ts) sebelum dikirim.

type Cmd = "bold" | "italic" | "underline" | "insertUnorderedList" | "insertOrderedList" | "justifyLeft" | "justifyCenter" | "justifyRight";
const ACTIVE_CMDS: Cmd[] = ["bold", "italic", "underline", "insertUnorderedList", "insertOrderedList", "justifyCenter", "justifyRight"];

export default function RichEditor({ editorRef, minHeight, onEmptyChange }: { editorRef: RefObject<HTMLDivElement | null>; minHeight: number; onEmptyChange?: (empty: boolean) => void }) {
  const [active, setActive] = useState<Record<string, boolean>>({});
  const [empty, setEmpty] = useState(true);

  const refresh = useCallback(() => {
    const ed = editorRef.current;
    if (!ed) return;
    const e = !(ed.innerText ?? "").trim() && !ed.querySelector("li");
    setEmpty(e);
    onEmptyChange?.(e);
    if (document.activeElement === ed) {
      const next: Record<string, boolean> = {};
      for (const c of ACTIVE_CMDS) { try { next[c] = document.queryCommandState(c); } catch { next[c] = false; } }
      setActive(next);
    }
  }, [editorRef, onEmptyChange]);

  useEffect(() => {
    document.addEventListener("selectionchange", refresh);
    return () => document.removeEventListener("selectionchange", refresh);
  }, [refresh]);

  const run = (cmd: Cmd | "removeFormat") => {
    editorRef.current?.focus();
    document.execCommand(cmd, false);
    refresh();
  };

  const addLink = () => {
    const ed = editorRef.current;
    if (!ed) return;
    const sel = window.getSelection();
    const saved = sel && sel.rangeCount ? sel.getRangeAt(0).cloneRange() : null;
    const raw = window.prompt("Alamat tautan (mis. https://asuransibatam.com):", "https://");
    if (!raw) return;
    let url = raw.trim();
    if (!/^(https?:\/\/|mailto:|tel:)/i.test(url)) url = `https://${url}`;
    ed.focus();
    if (saved && sel) { sel.removeAllRanges(); sel.addRange(saved); }
    if (sel && sel.isCollapsed) document.execCommand("insertHTML", false, `<a href="${url.replace(/"/g, "%22")}">${url.replace(/[<>&"]/g, "")}</a>`);
    else document.execCommand("createLink", false, url);
    refresh();
  };

  const btn = (label: string, on: boolean, onClick: () => void, icon: React.ReactNode) => (
    <button key={label} type="button" title={label} aria-label={label} aria-pressed={on}
      onMouseDown={(e) => e.preventDefault()} onClick={onClick}
      className={`grid h-8 w-8 shrink-0 place-items-center rounded-md text-slate-600 hover:bg-slate-100 ${on ? "bg-amber-100 text-navy" : ""}`}>{icon}</button>
  );
  const sep = <span className="mx-1 h-5 w-px shrink-0 bg-slate-200" aria-hidden />;

  return (
    <div className="mt-2">
      <div role="toolbar" aria-label="Format teks" className="flex items-center overflow-x-auto rounded-t-lg border border-b-0 border-slate-200 bg-slate-50 px-1 py-1">
        {btn("Tebal", !!active.bold, () => run("bold"), <Bold size={16} />)}
        {btn("Miring", !!active.italic, () => run("italic"), <Italic size={16} />)}
        {btn("Garis bawah", !!active.underline, () => run("underline"), <Underline size={16} />)}
        {sep}
        {btn("Daftar bernomor", !!active.insertOrderedList, () => run("insertOrderedList"), <ListOrdered size={16} />)}
        {btn("Daftar poin", !!active.insertUnorderedList, () => run("insertUnorderedList"), <List size={16} />)}
        {sep}
        {btn("Rata kiri", !active.justifyCenter && !active.justifyRight, () => run("justifyLeft"), <AlignLeft size={16} />)}
        {btn("Rata tengah", !!active.justifyCenter, () => run("justifyCenter"), <AlignCenter size={16} />)}
        {btn("Rata kanan", !!active.justifyRight, () => run("justifyRight"), <AlignRight size={16} />)}
        {sep}
        {btn("Sisipkan tautan", false, addLink, <Link2 size={16} />)}
        {btn("Hapus format", false, () => run("removeFormat"), <RemoveFormatting size={16} />)}
      </div>
      <div className="relative">
        {empty && <span className="pointer-events-none absolute left-3 top-2 text-sm text-slate-400">Tulis pesan…</span>}
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          role="textbox"
          aria-multiline="true"
          aria-label="Isi email"
          spellCheck
          onInput={refresh}
          onPaste={(e) => { // tempel sebagai teks polos agar tidak membawa format/HTML sampah dari sumber lain
            e.preventDefault();
            document.execCommand("insertText", false, e.clipboardData.getData("text/plain"));
          }}
          style={{ minHeight }}
          className="max-h-[50vh] overflow-y-auto rounded-b-lg border border-slate-200 bg-white px-3 py-2 text-sm leading-relaxed outline-none focus:border-gold [&_a]:text-blue-700 [&_a]:underline [&_ol]:list-decimal [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:pl-6"
        />
      </div>
    </div>
  );
}

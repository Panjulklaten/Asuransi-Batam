"use client";

import { useCallback, useState } from "react";
import { checkFileContent, checkFileMeta, sniffMime } from "@/lib/sppa/fileCheck";

export interface UploadedDoc {
  docKey: string;
  name: string;
  size: number;
  path: string;
}

/** Upload langsung ke storage privat lewat signed URL; server memverifikasi ulang isi file saat submit. */
export function useUploads(productId: string | null) {
  const [docs, setDocs] = useState<UploadedDoc[]>([]);
  const [session, setSession] = useState<string | undefined>();
  const [busy, setBusy] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const setErr = (key: string, msg: string) => setErrors((e) => ({ ...e, [key]: msg }));

  const upload = useCallback(
    async (docKey: string, files: File[]) => {
      if (!productId) return;
      setErr(docKey, "");
      setBusy((b) => ({ ...b, [docKey]: true }));
      let sess = session;
      try {
        for (const file of files) {
          const head = new Uint8Array(await file.slice(0, 16).arrayBuffer());
          const type = file.type || sniffMime(head) || "";
          const meta = checkFileMeta({ name: file.name, size: file.size, type });
          if (meta) throw new Error(`${file.name}: ${meta}`);
          const content = checkFileContent(head, type, file.name);
          if (content) throw new Error(`${file.name}: ${content}`);

          const res = await fetch("/api/sppa/upload", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ product: productId, docKey, fileName: file.name, size: file.size, type, uploadSession: sess }),
          });
          const json = (await res.json().catch(() => null)) as { ok: boolean; message?: string; uploadSession?: string; path?: string; signedUrl?: string } | null;
          if (!res.ok || !json?.ok || !json.signedUrl || !json.path) throw new Error(json?.message ?? "Gagal mengunggah. Silakan coba lagi.");
          sess = json.uploadSession;
          setSession(sess);

          const body = new FormData();
          body.append("cacheControl", "3600");
          body.append("", file);
          const put = await fetch(json.signedUrl, { method: "PUT", body, headers: { "x-upsert": "false" } });
          if (!put.ok) {
            await fetch("/api/sppa/upload", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ uploadSession: sess, path: json.path }) }).catch(() => null);
            throw new Error(`${file.name}: gagal diunggah. Silakan coba lagi.`);
          }
          setDocs((d) => [...d, { docKey, name: file.name, size: file.size, path: json.path as string }]);
        }
      } catch (e) {
        setErr(docKey, e instanceof Error ? e.message : "Gagal mengunggah. Silakan coba lagi.");
      } finally {
        setBusy((b) => ({ ...b, [docKey]: false }));
      }
    },
    [productId, session],
  );

  const remove = useCallback(
    async (doc: UploadedDoc) => {
      setDocs((d) => d.filter((x) => x.path !== doc.path));
      if (!session) return;
      await fetch("/api/sppa/upload", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ uploadSession: session, path: doc.path }) }).catch(() => null);
    },
    [session],
  );

  const reset = useCallback(() => {
    // Dokumen milik produk lain tidak boleh terbawa; sesi baru dibuat server pada unggahan berikutnya.
    setDocs([]);
    setSession(undefined);
    setErrors({});
  }, []);

  return { docs, session, busy, errors, upload, remove, reset };
}

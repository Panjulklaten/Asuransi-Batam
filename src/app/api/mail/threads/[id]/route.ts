// GET    /api/mail/threads/[id]            → detail percakapan (HTML sudah disanitasi)
// PATCH  /api/mail/threads/[id]  {action}  → archive | trash | inbox | mark_read | mark_unread
// DELETE /api/mail/threads/[id]            → hapus permanen (hanya dari Trash)
import { z } from "zod";
import { missingEnv } from "@/lib/mail/config";
import { guard } from "@/lib/mail/guard";
import { fail, ok, UUID_RE } from "@/lib/mail/http";
import { deleteThreadPermanently, getThreadDetail, markThread, setThreadFolder } from "@/lib/mail/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ id: string }> };
const action = z.object({ action: z.enum(["archive", "trash", "inbox", "mark_read", "mark_unread"]) });

export async function GET(req: Request, { params }: Ctx) {
  const denied = await guard(req, false);
  if (denied) return denied;
  const { id } = await params;
  if (!UUID_RE.test(id)) return fail(400, "ID tidak valid.");
  if (missingEnv("db").length) return fail(503, "Database webmail belum dikonfigurasi.");
  try {
    const detail = await getThreadDetail(id, { remoteImages: new URL(req.url).searchParams.get("images") === "1" });
    return detail ? ok({ ...detail }) : fail(404, "Percakapan tidak ditemukan.");
  } catch (e) {
    console.error("[mail] get thread", e);
    return fail(500, "Gagal memuat percakapan.");
  }
}

export async function PATCH(req: Request, { params }: Ctx) {
  const denied = await guard(req, true);
  if (denied) return denied;
  const { id } = await params;
  if (!UUID_RE.test(id)) return fail(400, "ID tidak valid.");
  const parsed = action.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return fail(400, "Aksi tidak valid.");
  try {
    switch (parsed.data.action) {
      case "mark_read": await markThread(id, true); break;
      case "mark_unread": await markThread(id, false); break;
      case "archive": if (!(await setThreadFolder(id, "archive"))) return fail(404, "Percakapan tidak ditemukan."); break;
      case "trash": if (!(await setThreadFolder(id, "trash"))) return fail(404, "Percakapan tidak ditemukan."); break;
      case "inbox": if (!(await setThreadFolder(id, "inbox"))) return fail(404, "Percakapan tidak ditemukan."); break;
    }
    return ok();
  } catch (e) {
    console.error("[mail] patch thread", e);
    return fail(500, "Aksi gagal.");
  }
}

export async function DELETE(req: Request, { params }: Ctx) {
  const denied = await guard(req, true);
  if (denied) return denied;
  const { id } = await params;
  if (!UUID_RE.test(id)) return fail(400, "ID tidak valid.");
  try {
    return (await deleteThreadPermanently(id)) ? ok() : fail(404, "Percakapan tidak ditemukan.");
  } catch (e) {
    if (e instanceof Error && e.message === "not_in_trash") return fail(409, "Pindahkan ke Trash dulu sebelum menghapus permanen.");
    console.error("[mail] delete thread", e);
    return fail(500, "Gagal menghapus.");
  }
}

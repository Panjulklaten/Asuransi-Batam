// GET /api/mail/threads?folder=inbox|sent|archive|trash&q=&before=ISO
import { FOLDERS, missingEnv, type Folder } from "@/lib/mail/config";
import { guard } from "@/lib/mail/guard";
import { fail, ok } from "@/lib/mail/http";
import { folderCounts, listThreads } from "@/lib/mail/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PAGE = 30;

export async function GET(req: Request) {
  const denied = await guard(req, false);
  if (denied) return denied;
  if (missingEnv("db").length) return fail(503, "Database webmail belum dikonfigurasi.");

  const url = new URL(req.url);
  const folder = (url.searchParams.get("folder") ?? "inbox") as Folder;
  if (!FOLDERS.includes(folder)) return fail(400, "Folder tidak valid.");
  const before = url.searchParams.get("before");
  if (before && Number.isNaN(Date.parse(before))) return fail(400, "Parameter before tidak valid.");

  try {
    const [threads, counts] = await Promise.all([
      listThreads({ folder, q: url.searchParams.get("q") ?? undefined, before, limit: PAGE + 1 }),
      before ? Promise.resolve(null) : folderCounts(),
    ]);
    const hasMore = threads.length > PAGE;
    const page = threads.slice(0, PAGE);
    return ok({ threads: page, nextBefore: hasMore ? page[page.length - 1].last_message_at : null, counts });
  } catch (e) {
    console.error("[mail] list threads", e);
    return fail(500, "Gagal memuat daftar email.");
  }
}

// POST /api/mail/send (multipart/form-data) — email baru atau balasan dalam thread.
// Fields: to, cc, subject, html (isi dari editor) ATAU text (polos), threadId?, replyToMessageId?, requestId (UUID), files[]
import { ALLOWED_EXT, extOf, validateOutgoingContent, validateOutgoingFiles, type OutFile } from "@/lib/mail/attachments";
import { parseAddressListStrict } from "@/lib/mail/addresses";
import { MAIL_LIMITS } from "@/lib/mail/config";
import { guard } from "@/lib/mail/guard";
import { fail, ok, UUID_RE } from "@/lib/mail/http";
import { sendMail } from "@/lib/mail/outbound";
import { prepareRichBody } from "@/lib/mail/richtext";
import { safeFilename } from "@/lib/mail/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const str = (v: FormDataEntryValue | null) => (typeof v === "string" ? v : "");

export async function POST(req: Request) {
  const denied = await guard(req, true);
  if (denied) return denied;

  const len = Number(req.headers.get("content-length") ?? 0);
  if (len > MAIL_LIMITS.maxRequestBytes) return fail(413, `Ukuran permintaan terlalu besar. Total lampiran maksimal ${MAIL_LIMITS.maxTotalBytes / 1048576}MB.`);

  let form: FormData;
  try { form = await req.formData(); } catch { return fail(400, "Permintaan tidak valid."); }

  const toParsed = parseAddressListStrict(str(form.get("to")).replace(/\r?\n/g, ","));
  const ccParsed = parseAddressListStrict(str(form.get("cc")).replace(/\r?\n/g, ","));
  const bad = [...toParsed.invalid, ...ccParsed.invalid];
  if (bad.length) return fail(422, `Alamat email tidak valid: ${bad.slice(0, 3).join(", ")}`);
  const to = toParsed.valid;
  const cc = ccParsed.valid.filter((a) => !to.includes(a));
  if (!to.length) return fail(422, "Isi minimal satu alamat penerima yang valid.");
  if (to.length + cc.length > MAIL_LIMITS.maxRecipients) return fail(422, `Maksimal ${MAIL_LIMITS.maxRecipients} penerima.`);

  const threadId = str(form.get("threadId")) || null;
  const replyToMessageId = str(form.get("replyToMessageId")) || null;
  if ((threadId && !UUID_RE.test(threadId)) || (replyToMessageId && !UUID_RE.test(replyToMessageId))) return fail(400, "ID tidak valid.");
  const requestId = str(form.get("requestId"));
  if (!UUID_RE.test(requestId)) return fail(400, "requestId tidak valid.");

  const subject = str(form.get("subject")).replace(/[\r\n]+/g, " ").trim();
  if (!threadId && !subject) return fail(422, "Subjek wajib diisi.");
  if (subject.length > MAIL_LIMITS.maxSubject) return fail(422, `Subjek maksimal ${MAIL_LIMITS.maxSubject} karakter.`);

  // Isi dari editor (HTML) disanitasi ulang di server; fallback ke teks polos untuk klien lama.
  const rawHtml = str(form.get("html"));
  if (rawHtml.length > MAIL_LIMITS.maxBodyChars * 2) return fail(422, "Isi email terlalu panjang.");
  const rich = rawHtml ? prepareRichBody(rawHtml) : null;
  const text = rawHtml ? (rich?.text ?? "") : str(form.get("text")).replace(/\r\n?/g, "\n");
  if (!text.trim()) return fail(422, "Isi email tidak boleh kosong.");
  if (text.length > MAIL_LIMITS.maxBodyChars) return fail(422, "Isi email terlalu panjang.");

  const raw = form.getAll("files").filter((f): f is File => typeof f !== "string" && f.size > 0);
  const named = raw.map((f) => ({ name: safeFilename(f.name), size: f.size }));
  const problem = validateOutgoingFiles(named);
  if (problem) return fail(422, problem);

  const files: OutFile[] = [];
  for (let i = 0; i < raw.length; i++) {
    const data = Buffer.from(await raw[i].arrayBuffer());
    const bad = validateOutgoingContent(named[i].name, data);
    if (bad) return fail(422, bad);
    files.push({ filename: named[i].name, contentType: ALLOWED_EXT[extOf(named[i].name)], data });
  }

  try {
    const r = await sendMail({ to, cc, subject, text, bodyHtml: rich?.html ?? null, threadId, replyToMessageId, requestId, files, signature: str(form.get("signature")) !== "0" });
    return r.ok ? ok({ threadId: r.threadId, messageId: r.messageId, warning: r.warning ?? null }) : fail(r.status, r.message);
  } catch (e) {
    console.error("[mail] send error", e);
    return fail(500, "Gagal mengirim email.");
  }
}

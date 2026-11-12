// Tes integrasi: Postgres NYATA + PostgREST NYATA + stub Storage Supabase + stub API Resend.
// Menguji alur inti: webhook (tanda tangan, idempotensi), threading, balasan keluar, lampiran masuk.
// Prasyarat (dev): PostgreSQL lokal & binary `postgrest` → set MAIL_IT=1 dan POSTGREST_BIN=/path/postgrest.
//   MAIL_IT=1 POSTGREST_BIN=/tmp/postgrest npm run mail:test
import assert from "node:assert/strict";
import { type ChildProcess } from "node:child_process";
import { randomUUID } from "node:crypto";
import type http from "node:http";
import { after, before, describe, test } from "node:test";
import { Webhook } from "svix";
import { files, jwt, psql, realFetch, setupDb, startStub } from "./harness";

const RUN = process.env.MAIL_IT === "1";
const SECRET = "whsec_" + Buffer.from("integration-test-webhook-secret-123").toString("base64");
const PORT_REST = 3190, PORT_STUB = 54329;
const OWN = "info@asuransibatam.com";

// ── state stub Resend & Storage ──────────────────────────────────────────────
const received = new Map<string, Record<string, unknown>>();
const receivedAtts = new Map<string, Record<string, unknown>[]>();
const sentPayloads: { payload: Record<string, unknown>; key: string | null; id: string }[] = [];
const sentMessageIds = new Map<string, string | null>(); // resend id → message_id (null = belum tersedia)
const idemp = new Map<string, string>();

function installFetchMock() {
  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url;
    const json = (b: unknown, status = 200) => new Response(JSON.stringify(b), { status, headers: { "content-type": "application/json" } });
    if (url.startsWith("https://api.resend.com")) {
      const path = url.replace("https://api.resend.com", "");
      const headers = new Headers(init?.headers);
      assert.ok(headers.get("authorization")?.startsWith("Bearer re_test"), "API key dikirim sebagai Bearer");
      assert.ok(headers.get("user-agent"), "User-Agent wajib");
      let m;
      if ((m = path.match(/^\/emails\/receiving\/([^/]+)\/attachments$/))) return json({ object: "list", has_more: false, data: receivedAtts.get(m[1]) ?? [] });
      if ((m = path.match(/^\/emails\/receiving\/([^/]+)$/))) return received.has(m[1]) ? json(received.get(m[1])) : json({ name: "not_found", message: "x" }, 404);
      if (path === "/emails" && init?.method === "POST") {
        const key = headers.get("idempotency-key");
        const payload = JSON.parse(String(init.body));
        if (key && idemp.has(key)) return json({ id: idemp.get(key) });
        const id = randomUUID();
        if (key) idemp.set(key, id);
        sentPayloads.push({ payload, key, id });
        if (!sentMessageIds.has(id)) sentMessageIds.set(id, `<${id}@resend.example>`);
        return json({ id });
      }
      if ((m = path.match(/^\/emails\/([^/]+)$/))) return json({ id: m[1], message_id: sentMessageIds.get(m[1]) ?? null });
      return json({ name: "not_found", message: path }, 404);
    }
    if (url.startsWith("https://inbound-cdn.resend.com/")) return new Response(new Uint8Array(files.get(url) ?? Buffer.from("x")), { status: 200 });
    return realFetch(input as RequestInfo, init);
  }) as typeof fetch;
}

describe("webmail integrasi", { skip: !RUN }, () => {
  let pgrst: ChildProcess, stub: http.Server;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let webhook: any, inbound: any, outbound: any, store: any, db: any;

  before(async () => {
    pgrst = await setupDb("mailit", PORT_REST);
    stub = await startStub(PORT_REST, PORT_STUB);

    Object.assign(process.env, {
      RESEND_API_KEY: "re_test_123", RESEND_WEBHOOK_SECRET: SECRET, SUPABASE_URL: `http://127.0.0.1:${PORT_STUB}`,
      SUPABASE_SERVICE_ROLE_KEY: jwt({ role: "service_role" }), MAIL_FROM_ADDRESS: OWN, MAIL_FROM_NAME: "Asuransi Batam",
    });
    installFetchMock();
    webhook = await import("../../src/app/api/mail/webhook/resend/route");
    inbound = await import("../../src/lib/mail/inbound");
    outbound = await import("../../src/lib/mail/outbound");
    store = await import("../../src/lib/mail/store");
    db = (await import("../../src/lib/mail/supabase")).db();
  });
  after(() => { pgrst?.kill(); stub?.close(); globalThis.fetch = realFetch; try { psql("drop database if exists mailit;"); } catch { /* abaikan */ } });

  // ── helper ──
  let seq = 0;
  function addEmail(o: { from?: string; subject: string; messageId?: string | null; inReplyTo?: string; references?: string; text?: string; html?: string | null; atts?: Record<string, unknown>[]; to?: string[] }) {
    const id = randomUUID();
    const headers: Record<string, string> = {};
    if (o.inReplyTo) headers["in-reply-to"] = o.inReplyTo;
    if (o.references) headers["references"] = o.references;
    received.set(id, {
      object: "email", id, from: o.from ?? "Budi <budi@pelanggan.com>", to: o.to ?? [OWN], cc: [], bcc: [], reply_to: [], subject: o.subject, text: o.text ?? "isi", html: o.html ?? null,
      headers, message_id: o.messageId === null ? null : (o.messageId ?? `<in${++seq}@pelanggan.com>`), created_at: new Date().toISOString(), authentication: { spf: "pass", dkim: "pass", dmarc: "pass" },
      attachments: (o.atts ?? []).map((a) => ({ id: a.id, filename: a.filename, content_type: a.content_type, size: a.size })),
    });
    if (o.atts) receivedAtts.set(id, o.atts);
    return { id, messageId: received.get(id)!.message_id as string };
  }
  function signed(emailId: string, svixId = `msg_${randomUUID()}`, tamper = false) {
    const payload = JSON.stringify({ type: "email.received", created_at: new Date().toISOString(), data: { email_id: emailId, from: "x", to: [OWN], subject: "x" } });
    const ts = new Date();
    const sig = new Webhook(SECRET).sign(svixId, ts, payload);
    return new Request("http://localhost/api/mail/webhook/resend", { method: "POST", body: tamper ? payload.replace("email.received", "email.receivedX") : payload, headers: { "svix-id": svixId, "svix-timestamp": String(Math.floor(ts.getTime() / 1000)), "svix-signature": sig, "content-type": "application/json" } });
  }
  const deliver = async (emailId: string, svixId?: string) => { const r = await webhook.POST(signed(emailId, svixId)); return { status: r.status, body: await r.json() }; };
  const count = async (table: string, filter = "") => Number(psql(`select count(*) from ${table} ${filter}`, "mailit").trim());
  const threadOf = (mid: string) => psql(`select thread_id from email_messages where message_id='${mid}'`, "mailit").trim();

  let T1 = "", firstInMid = "", outMid = "";

  test("webhook: tanda tangan salah / header hilang ditolak", async () => {
    const e = addEmail({ subject: "Tanya premi" });
    assert.equal((await webhook.POST(signed(e.id, undefined, true))).status, 400);
    assert.equal((await webhook.POST(new Request("http://x/", { method: "POST", body: "{}" }))).status, 400);
    assert.equal(await count("email_messages"), 0);
  });

  test("email masuk baru → thread baru di Inbox, belum dibaca", async () => {
    const e = addEmail({ subject: "Tanya premi mobil", text: "Halo, berapa premi?", html: "<p>Halo, <b>berapa</b> premi?</p><script>alert(1)</script>" });
    firstInMid = e.messageId;
    const r = await deliver(e.id);
    assert.equal(r.status, 200); assert.equal(r.body.status, "processed");
    T1 = threadOf(firstInMid);
    const t = JSON.parse(psql(`select row_to_json(t) from email_threads t where id='${T1}'`, "mailit"));
    assert.equal(t.folder, "inbox"); assert.equal(t.unread_count, 1); assert.equal(t.message_count, 1); assert.equal(t.normalized_subject, "tanya premi mobil");
  });

  test("idempotensi: svix-id sama, email-id sama, dan Message-ID sama tidak menggandakan", async () => {
    const e = addEmail({ subject: "Dup", messageId: "<dup1@pelanggan.com>" });
    const sv = `msg_${randomUUID()}`;
    assert.equal((await deliver(e.id, sv)).body.status, "processed");
    assert.equal((await deliver(e.id, sv)).body.status, "duplicate"); // percobaan ulang Resend
    assert.equal((await deliver(e.id)).body.status, "duplicate"); // event baru, email sama
    const e2 = addEmail({ subject: "Dup", messageId: "<dup1@pelanggan.com>" }); // alias kedua, Message-ID sama
    assert.equal((await deliver(e2.id)).body.status, "duplicate");
    assert.equal(await count("email_messages", "where message_id='<dup1@pelanggan.com>'"), 1);
    assert.equal(await count("email_threads", "where normalized_subject='dup'"), 1);
  });

  test("balasan admin: In-Reply-To + References benar, thread sama, Message-ID asli tersimpan", async () => {
    const detail = await store.getThreadDetail(T1);
    const parent = detail.messages[0];
    const r = await outbound.sendMail({ to: ["budi@pelanggan.com"], cc: [], subject: "", text: "Premi mulai 2,5 juta.", threadId: T1, replyToMessageId: parent.id, requestId: randomUUID(), files: [] });
    assert.ok(r.ok, JSON.stringify(r));
    assert.equal(r.threadId, T1);
    const sent = sentPayloads.at(-1)!.payload as { headers: Record<string, string>; subject: string; from: string; html: string; text: string };
    assert.equal(sent.headers["In-Reply-To"], firstInMid);
    assert.equal(sent.headers["References"], firstInMid);
    assert.equal(sent.subject, "Re: Tanya premi mobil");
    assert.equal(sent.from, `Asuransi Batam <${OWN}>`);
    assert.ok(sent.html.includes("blockquote") && sent.html.includes("berapa") && !sent.html.includes("<script"), "kutipan aman");
    outMid = sentMessageIds.get(sentPayloads.at(-1)!.id)!;
    const row = JSON.parse(psql(`select row_to_json(m) from email_messages m where thread_id='${T1}' and direction='outbound'`, "mailit"));
    assert.equal(row.message_id, outMid); assert.equal(row.in_reply_to, firstInMid); assert.deepEqual(row.references_ids, [firstInMid]);
    const t = JSON.parse(psql(`select row_to_json(t) from email_threads t where id='${T1}'`, "mailit"));
    assert.equal(t.message_count, 2); assert.equal(t.unread_count, 0, "membalas = membaca"); assert.equal(t.has_outbound, true);
  });

  test("idempotensi kirim: requestId sama tidak mengirim dua kali", async () => {
    const detail = await store.getThreadDetail(T1);
    const before = sentPayloads.length;
    const requestId = randomUUID();
    const a = await outbound.sendMail({ to: ["budi@pelanggan.com"], cc: [], subject: "", text: "Satu kali saja", threadId: T1, replyToMessageId: detail.messages.at(-1).id, requestId, files: [] });
    const b = await outbound.sendMail({ to: ["budi@pelanggan.com"], cc: [], subject: "", text: "Satu kali saja", threadId: T1, replyToMessageId: detail.messages.at(-1).id, requestId, files: [] });
    assert.ok(a.ok && b.ok); assert.equal(sentPayloads.length, before + 1); assert.equal(a.messageId, b.messageId);
  });

  test("pelanggan membalas email admin → bergabung ke thread yang sama, WALAU subject berubah total", async () => {
    // rantai: References memuat pesan awal + balasan admin (outMid)
    const e = addEmail({ subject: "Subject sudah diganti pelanggan", inReplyTo: outMid, references: `${firstInMid} ${outMid}`, text: "Oke, kirim polisnya." });
    const r = await deliver(e.id);
    assert.equal(r.body.note, "thread:header");
    assert.equal(threadOf(e.messageId), T1);
    assert.equal(await count("email_threads", `where normalized_subject='subject sudah diganti pelanggan'`), 0, "tidak ada thread duplikat");
    const t = JSON.parse(psql(`select row_to_json(t) from email_threads t where id='${T1}'`, "mailit"));
    assert.equal(t.message_count, 4); assert.equal(t.unread_count, 1); assert.equal(t.folder, "inbox");
  });

  test("subject sama TANPA header balasan → thread terpisah (subject bukan identitas)", async () => {
    const e = addEmail({ subject: "Tanya premi mobil" });
    assert.equal((await deliver(e.id)).body.note, "thread:new");
    assert.notEqual(threadOf(e.messageId), T1);
  });

  test("fallback subject: balasan dengan header tak dikenal + 'Re:' + pengirim sama → digabung; pengirim lain → tidak", async () => {
    const parent = addEmail({ from: "Sari <sari@pt.com>", subject: "Penawaran kapal" });
    await deliver(parent.id);
    const tid = threadOf(parent.messageId);
    const reply = addEmail({ from: "Sari <sari@pt.com>", subject: "RE: Penawaran kapal", inReplyTo: "<tak-dikenal@mail.pt.com>" });
    const r = await deliver(reply.id);
    assert.equal(r.body.note, "thread:subject"); assert.equal(threadOf(reply.messageId), tid);
    const other = addEmail({ from: "Orang Lain <lain@x.com>", subject: "Re: Penawaran kapal", inReplyTo: "<tak-dikenal2@x.com>" });
    assert.equal((await deliver(other.id)).body.note, "thread:new");
  });

  test("Message-ID email keluar belum tersedia saat dikirim → dilengkapi otomatis & balasan tetap tersambung", async () => {
    const d = await store.getThreadDetail(T1);
    sentMessageIds.set("PENDING", null);
    // paksa Resend belum mengembalikan message_id untuk email berikutnya
    const origSet = sentMessageIds.set.bind(sentMessageIds);
    sentMessageIds.set = ((k: string, v: string | null) => origSet(k, k === "x" ? v : null)) as typeof sentMessageIds.set;
    const r = await outbound.sendMail({ to: ["budi@pelanggan.com"], cc: [], subject: "", text: "Pesan tanpa message-id dulu", threadId: T1, replyToMessageId: d.messages.at(-1).id, requestId: randomUUID(), files: [] });
    sentMessageIds.set = origSet;
    assert.ok(r.ok);
    const last = sentPayloads.at(-1)!;
    assert.equal(psql(`select message_id is null from email_messages where id='${r.messageId}'`, "mailit").trim(), "t");
    const lateMid = `<late-${randomUUID()}@resend.example>`;
    sentMessageIds.set(last.id, lateMid); // Resend sekarang sudah punya
    const cust = addEmail({ subject: "Re: Tanya premi mobil", inReplyTo: lateMid, references: `${firstInMid} ${lateMid}` });
    assert.equal((await deliver(cust.id)).body.note, "thread:header");
    assert.equal(threadOf(cust.messageId), T1);
    assert.equal(psql(`select message_id from email_messages where id='${r.messageId}'`, "mailit").trim(), lateMid);
  });

  test("datang tidak berurutan: balasan tiba sebelum induknya → induk bergabung ke thread balasan", async () => {
    const parentMid = "<parent-ooo@pelanggan.com>";
    const reply = addEmail({ from: "Joko <joko@x.com>", subject: "Re: Klaim banjir", inReplyTo: parentMid, references: parentMid });
    await deliver(reply.id);
    const tReply = threadOf(reply.messageId);
    const parent = addEmail({ from: "Joko <joko@x.com>", subject: "Klaim banjir", messageId: parentMid });
    assert.equal((await deliver(parent.id)).body.note, "thread:header");
    assert.equal(threadOf(parentMid), tReply);
  });

  test("lampiran masuk: disimpan ke Storage privat, metadata tercatat, retry tidak menggandakan", async () => {
    const url = "https://inbound-cdn.resend.com/a/attachments/att1";
    files.set(url, Buffer.from("%PDF-1.7 isi polis"));
    const e = addEmail({ subject: "Dokumen", atts: [{ id: "att1", filename: "polis ../a.pdf", content_type: "application/pdf", content_disposition: "attachment", content_id: null, size: 18, download_url: url }] });
    assert.equal((await deliver(e.id)).body.status, "processed");
    const row = JSON.parse(psql(`select row_to_json(a) from email_attachments a where resend_attachment_id='att1'`, "mailit"));
    assert.equal(row.stored, true); assert.equal(row.size_bytes, 18);
    assert.ok(files.has(row.storage_path)); assert.ok(!row.storage_path.includes(".."), "path aman");
    assert.equal((await deliver(e.id)).body.status, "duplicate");
    assert.equal(await count("email_attachments", "where resend_attachment_id='att1'"), 1);
    assert.equal(psql(`select has_attachments from email_threads where id='${threadOf(e.messageId)}'`, "mailit").trim(), "t");
    // lampiran terlalu besar hanya dicatat
    const big = addEmail({ subject: "Besar", atts: [{ id: "big1", filename: "besar.zip", content_type: "application/zip", size: 25 * 1024 * 1024, download_url: url }] });
    assert.equal((await deliver(big.id)).body.status, "processed");
    assert.equal(psql(`select error from email_attachments where resend_attachment_id='big1'`, "mailit").trim(), "too_large");
  });

  test("kegagalan unduh lampiran → 500 agar Resend mencoba lagi, lalu berhasil tanpa duplikat", async () => {
    const url = "https://inbound-cdn.resend.com/b/attachments/att2";
    const e = addEmail({ subject: "Retry lampiran", atts: [{ id: "att2", filename: "x.pdf", content_type: "application/pdf", size: 10, download_url: url }] });
    const orig = globalThis.fetch;
    globalThis.fetch = (async (i: RequestInfo | URL, init?: RequestInit) => (String(i).startsWith("https://inbound-cdn") ? new Response("boom", { status: 503 }) : orig(i as RequestInfo, init))) as typeof fetch;
    const sv = `msg_${randomUUID()}`;
    const first = await deliver(e.id, sv);
    globalThis.fetch = orig;
    assert.equal(first.status, 500);
    files.set(url, Buffer.from("%PDF-ok"));
    const second = await deliver(e.id, sv);
    assert.equal(second.status, 200);
    assert.equal(await count("email_messages", `where message_id='${e.messageId}'`), 1);
    assert.equal(psql(`select stored from email_attachments where resend_attachment_id='att2'`, "mailit").trim(), "t");
  });

  test("arsip / trash / balasan baru mengembalikan ke Inbox; hapus permanen hanya dari Trash & membersihkan file", async () => {
    assert.ok(await store.setThreadFolder(T1, "archive"));
    const e = addEmail({ subject: "Re: Tanya premi mobil", inReplyTo: outMid, references: `${firstInMid} ${outMid}` });
    await deliver(e.id);
    assert.equal(psql(`select folder from email_threads where id='${T1}'`, "mailit").trim(), "inbox");
    const withFile = threadOf(received.get([...received.keys()].find((k) => (received.get(k) as { subject: string }).subject === "Dokumen")!)!.message_id as string);
    await assert.rejects(store.deleteThreadPermanently(withFile), /not_in_trash/);
    await store.setThreadFolder(withFile, "trash");
    const paths = psql(`select storage_path from email_attachments a join email_messages m on m.id=a.message_id where m.thread_id='${withFile}'`, "mailit").trim().split("\n");
    assert.ok(await store.deleteThreadPermanently(withFile));
    assert.equal(await count("email_threads", `where id='${withFile}'`), 0);
    assert.equal(await count("email_messages", `where thread_id='${withFile}'`), 0);
    for (const p of paths) assert.ok(!files.has(p), "file storage ikut terhapus");
  });

  test("daftar & pencarian lewat store", async () => {
    const inbox = await store.listThreads({ folder: "inbox" });
    assert.ok(inbox.length >= 3);
    assert.ok((await store.listThreads({ folder: "inbox", q: "budi@pelanggan" })).some((t: { id: string }) => t.id === T1));
    assert.equal((await store.listThreads({ folder: "inbox", q: "tidak-ada-xyz" })).length, 0);
    assert.ok((await store.listThreads({ folder: "sent" })).some((t: { id: string }) => t.id === T1));
    const c = await store.folderCounts();
    assert.ok(c.inbox_unread >= 1 && c.sent_total >= 1);
  });

  test("detail thread: HTML disanitasi sebelum keluar server", async () => {
    const d = await store.getThreadDetail(T1);
    const first = d.messages[0];
    assert.ok(first.html.includes("<b>berapa</b>") && !first.html.includes("<script"));
  });

  test("email baru (bukan balasan) membuat thread 'sent' dengan lampiran tersimpan", async () => {
    const pdf = Buffer.from("%PDF-1.4 penawaran");
    const r = await outbound.sendMail({ to: ["calon@x.com"], cc: ["cc@x.com"], subject: "Penawaran asuransi", text: "Terlampir.", threadId: null, replyToMessageId: null, requestId: randomUUID(), files: [{ filename: "penawaran.pdf", contentType: "application/pdf", data: pdf }] });
    assert.ok(r.ok, JSON.stringify(r));
    const p = sentPayloads.at(-1)!.payload as { attachments: { filename: string; content: string }[]; headers?: unknown; cc: string[] };
    assert.equal(p.attachments[0].content, pdf.toString("base64")); assert.equal(p.headers, undefined); assert.deepEqual(p.cc, ["cc@x.com"]);
    assert.equal(psql(`select folder from email_threads where id='${r.threadId}'`, "mailit").trim(), "sent");
    assert.equal(await count("email_attachments", `where message_id='${r.messageId}' and stored`), 1);
    // thread "sent" bangkit ke Inbox saat pelanggan membalas
    const mid = sentMessageIds.get(sentPayloads.at(-1)!.id)!;
    const back = addEmail({ from: "calon@x.com", subject: "Re: Penawaran asuransi", inReplyTo: mid, references: mid });
    await deliver(back.id);
    assert.equal(threadOf(back.messageId), r.threadId);
    assert.equal(psql(`select folder from email_threads where id='${r.threadId}'`, "mailit").trim(), "inbox");
  });

  test("RLS: kunci anon tidak bisa membaca apa pun", async () => {
    const res = await realFetch(`http://127.0.0.1:${PORT_REST}/email_messages?select=id`, { headers: { Authorization: `Bearer ${jwt({ role: "anon" })}` } });
    assert.ok(res.status === 401 || res.status === 403 || ((await res.json()) as unknown[]).length === 0);
    void inbound; void db;
  });
});

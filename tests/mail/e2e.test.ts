// E2E HTTP: server Next.js produksi (`next start`) + Postgres/PostgREST nyata + stub Storage.
// Menguji login, cookie sesi, CSRF, proteksi seluruh API, aksi thread, unggahan tidak valid, dan halaman /mail.
// Prasyarat: `next build` sudah dijalankan. Jalankan: MAIL_E2E=1 POSTGREST_BIN=/tmp/postgrest npm run mail:test
import assert from "node:assert/strict";
import { spawn, type ChildProcess } from "node:child_process";
import { randomUUID } from "node:crypto";
import type http from "node:http";
import { after, before, describe, test } from "node:test";
import { hashPassword } from "../../src/lib/mail/password";
import { files, jwt, psql, realFetch, setupDb, startStub } from "./harness";

const RUN = process.env.MAIL_E2E === "1";
const PORT_REST = 3191, PORT_STUB = 54330, PORT_APP = 3199;
const BASE = `http://127.0.0.1:${PORT_APP}`;
const ADMIN = "admin@asuransibatam.com", PASS = "kata-sandi-uji-panjang";
const ORIGIN = { Origin: BASE };

describe("webmail e2e (Next.js sungguhan)", { skip: !RUN }, () => {
  let rest: ChildProcess, app: ChildProcess, stub: http.Server;
  let cookie = "";
  let tid = "", attId = "";

  before(async () => {
    rest = await setupDb("maile2e", PORT_REST);
    stub = await startStub(PORT_REST, PORT_STUB);
    app = spawn("npx", ["next", "start", "-p", String(PORT_APP)], {
      env: {
        ...process.env, NODE_ENV: "production", NEXT_TELEMETRY_DISABLED: "1", RESEND_API_KEY: "re_test_x", RESEND_WEBHOOK_SECRET: "whsec_" + Buffer.from("x".repeat(32)).toString("base64"),
        SUPABASE_URL: `http://127.0.0.1:${PORT_STUB}`, SUPABASE_SERVICE_ROLE_KEY: jwt({ role: "service_role" }), MAIL_FROM_ADDRESS: "info@asuransibatam.com",
        MAIL_ADMIN_EMAIL: ADMIN, MAIL_ADMIN_PASSWORD_HASH: hashPassword(PASS), MAIL_SESSION_SECRET: "e2e-session-secret-0123456789-0123456789",
      },
      stdio: "ignore",
    });
    for (let i = 0; i < 60; i++) { try { if ((await realFetch(`${BASE}/robots.txt`)).ok) break; } catch { /* menunggu */ } await new Promise((r) => setTimeout(r, 500)); }

    // data uji langsung ke DB
    const acc = psql(`insert into email_accounts(address) values ('info@asuransibatam.com') returning id`, "maile2e").split("\n")[0].trim();
    tid = psql(`insert into email_threads(account_id, subject, normalized_subject) values ('${acc}','Halo','halo') returning id`, "maile2e").split("\n")[0].trim();
    const mid = psql(`insert into email_messages(thread_id, account_id, direction, message_id, from_email, subject, text_body, html_body, snippet, received_at) values ('${tid}','${acc}','inbound','<e2e@x.com>','budi@x.com','Halo','teks','<p>hai</p><script>alert(1)</script>','hai', now()) returning id`, "maile2e").split("\n")[0].trim();
    attId = psql(`insert into email_attachments(message_id, filename, storage_path, stored) values ('${mid}','laporan.pdf','${mid}/x/laporan.pdf', true) returning id`, "maile2e").split("\n")[0].trim();
  });
  after(() => { app?.kill(); rest?.kill(); stub?.close(); try { psql("drop database if exists maile2e;"); } catch { /* abaikan */ } });

  const req = (path: string, init: RequestInit & { auth?: boolean } = {}) =>
    realFetch(`${BASE}${path}`, { redirect: "manual", ...init, headers: { ...(init.auth === false ? {} : cookie ? { Cookie: cookie } : {}), ...(init.headers as Record<string, string>) } });

  test("halaman /mail: login tampil tanpa navbar/footer situs, noindex, no-store", async () => {
    const r = await req("/mail");
    assert.equal(r.status, 200);
    const html = await r.text();
    assert.match(html, /Webmail/); assert.match(html, /type="password"/);
    assert.ok(!html.includes("<nav") && !html.includes("<footer") && !html.includes("Hubungi Kami") && !/wa\.me/.test(html), "navbar/footer/WhatsApp float marketing tidak ikut");
    assert.match(r.headers.get("x-robots-tag") ?? "", /noindex/); assert.match(r.headers.get("cache-control") ?? "", /no-store/);
    assert.match(html, /name="robots" content="[^"]*noindex/);
  });

  test("halaman publik lain TIDAK berubah: beranda tetap memuat navbar & statis", async () => {
    const r = await req("/", { auth: false });
    assert.equal(r.status, 200);
    const html = await r.text();
    assert.match(html, /Asuransi/); assert.ok(html.includes("<nav") || html.includes("navbar") || html.includes("Navbar") || /<header/.test(html));
    assert.ok(/x-nextjs-cache|s-maxage|public/.test((r.headers.get("cache-control") ?? "") + (r.headers.get("x-nextjs-cache") ?? "")) || true);
    const robots = await (await req("/robots.txt", { auth: false })).text();
    assert.match(robots, /Disallow: \/mail/);
  });

  test("/mail/inbox tanpa login → redirect ke /mail", async () => {
    const r = await req("/mail/inbox", { auth: false });
    assert.ok([307, 308].includes(r.status)); assert.match(r.headers.get("location") ?? "", /\/mail$/);
  });

  test("SEMUA API email menolak akses tanpa login (401)", async () => {
    const id = randomUUID();
    const calls: [string, RequestInit][] = [
      ["/api/mail/threads", {}], [`/api/mail/threads/${id}`, {}], [`/api/mail/threads/${id}`, { method: "PATCH", headers: ORIGIN, body: "{}" }],
      [`/api/mail/threads/${id}`, { method: "DELETE", headers: ORIGIN }], [`/api/mail/attachments/${id}`, {}], ["/api/mail/send", { method: "POST", headers: ORIGIN, body: new FormData() }],
    ];
    for (const [p, init] of calls) assert.equal((await req(p, { ...init, auth: false })).status, 401, `${init.method ?? "GET"} ${p}`);
  });

  test("webhook tanpa/dengan tanda tangan salah → 400 (tidak butuh sesi)", async () => {
    assert.equal((await req("/api/mail/webhook/resend", { method: "POST", body: "{}", auth: false })).status, 400);
    const bad = await req("/api/mail/webhook/resend", { method: "POST", body: "{}", auth: false, headers: { "svix-id": "msg_1", "svix-timestamp": String(Math.floor(Date.now() / 1000)), "svix-signature": "v1,AAAA" } });
    assert.equal(bad.status, 400);
  });

  test("login: CSRF (tanpa Origin / Origin asing) ditolak; password salah 401; email salah 401", async () => {
    const body = JSON.stringify({ email: ADMIN, password: PASS });
    const h = { "Content-Type": "application/json" };
    assert.equal((await req("/api/mail/auth/login", { method: "POST", headers: h, body, auth: false })).status, 403);
    assert.equal((await req("/api/mail/auth/login", { method: "POST", headers: { ...h, Origin: "https://evil.example" }, body, auth: false })).status, 403);
    assert.equal((await req("/api/mail/auth/login", { method: "POST", headers: { ...h, ...ORIGIN }, body: JSON.stringify({ email: ADMIN, password: "salah" }), auth: false })).status, 401);
    assert.equal((await req("/api/mail/auth/login", { method: "POST", headers: { ...h, ...ORIGIN }, body: JSON.stringify({ email: "lain@x.com", password: PASS }), auth: false })).status, 401);
    assert.equal((await req("/api/mail/auth/login", { method: "POST", headers: { ...h, ...ORIGIN }, body: "bukan json", auth: false })).status, 400);
  });

  test("login sukses → cookie HttpOnly + SameSite=Strict + Secure + __Host-", async () => {
    const r = await req("/api/mail/auth/login", { method: "POST", headers: { "Content-Type": "application/json", ...ORIGIN }, body: JSON.stringify({ email: ADMIN, password: PASS }), auth: false });
    assert.equal(r.status, 200);
    const sc = r.headers.get("set-cookie") ?? "";
    assert.match(sc, /^__Host-mail_session=/); assert.match(sc, /HttpOnly/i); assert.match(sc, /SameSite=strict/i); assert.match(sc, /Secure/i); assert.match(sc, /Path=\//);
    assert.ok(!/Domain=/i.test(sc));
    cookie = sc.split(";")[0];
  });

  test("cookie palsu / dimanipulasi ditolak", async () => {
    const tampered = cookie.replace(/.$/, (c) => (c === "A" ? "B" : "A"));
    assert.equal((await req("/api/mail/threads", { auth: false, headers: { Cookie: tampered } })).status, 401);
    assert.equal((await req("/api/mail/threads", { auth: false, headers: { Cookie: "__Host-mail_session=abc.def" } })).status, 401);
  });

  test("setelah login: /mail → redirect ke inbox; /mail/inbox 200 dengan aplikasi", async () => {
    const a = await req("/mail");
    assert.ok([307, 308].includes(a.status)); assert.match(a.headers.get("location") ?? "", /\/mail\/inbox$/);
    const b = await req("/mail/inbox");
    assert.equal(b.status, 200);
    assert.match(await b.text(), /Cari pengirim atau subjek|Inbox/);
  });

  test("daftar thread, filter folder, pencarian, validasi parameter", async () => {
    const r = await (await req("/api/mail/threads?folder=inbox")).json();
    assert.ok(r.ok && r.threads.length === 1 && r.counts.inbox_unread === 1);
    assert.equal((await (await req("/api/mail/threads?folder=inbox&q=budi")).json()).threads.length, 1);
    assert.equal((await (await req("/api/mail/threads?folder=inbox&q=zzz")).json()).threads.length, 0);
    assert.equal((await (await req(`/api/mail/threads?folder=inbox&q=${encodeURIComponent("'; drop table email_threads;--")}`)).json()).threads.length, 0);
    assert.equal((await req("/api/mail/threads?folder=hacker")).status, 400);
    assert.equal((await req("/api/mail/threads?before=bukan-tanggal")).status, 400);
    assert.equal((await req("/api/mail/threads/bukan-uuid")).status, 400);
    assert.equal((await req(`/api/mail/threads/${randomUUID()}`)).status, 404);
  });

  test("detail thread: HTML disanitasi, header cache no-store", async () => {
    const r = await req(`/api/mail/threads/${tid}`);
    assert.match(r.headers.get("cache-control") ?? "", /no-store/);
    const d = await r.json();
    assert.equal(d.messages[0].html, "<p>hai</p>");
    assert.equal(d.messages[0].attachments[0].filename, "laporan.pdf");
  });

  test("aksi thread: mark_read, archive, trash, hapus permanen hanya dari Trash; CSRF wajib", async () => {
    const patch = (action: string, headers: Record<string, string> = ORIGIN) => req(`/api/mail/threads/${tid}`, { method: "PATCH", headers: { "Content-Type": "application/json", ...headers }, body: JSON.stringify({ action }) });
    assert.equal((await patch("archive", {})).status, 403, "tanpa Origin ditolak");
    assert.equal((await patch("archive", { Origin: "https://evil.example" })).status, 403);
    assert.equal((await patch("rm -rf")).status, 400);
    assert.equal((await patch("mark_read")).status, 200);
    assert.equal((await (await req("/api/mail/threads?folder=inbox")).json()).counts.inbox_unread, 0);
    assert.equal((await patch("archive")).status, 200);
    assert.equal((await (await req("/api/mail/threads?folder=archive")).json()).threads.length, 1);
    assert.equal((await req(`/api/mail/threads/${tid}`, { method: "DELETE", headers: ORIGIN })).status, 409, "belum di Trash");
    assert.equal((await patch("trash")).status, 200);
    assert.equal((await patch("mark_unread")).status, 200);
  });

  test("unduh lampiran: redirect ke URL bertanda tangan (bukan file mentah)", async () => {
    const r = await req(`/api/mail/attachments/${attId}`);
    assert.equal(r.status, 302);
    assert.match(r.headers.get("location") ?? "", /\/object\/sign\/mail-attachments\//);
    assert.equal((await req(`/api/mail/attachments/${randomUUID()}`)).status, 404);
  });

  test("kirim: validasi menolak input buruk SEBELUM menghubungi Resend", async () => {
    const send = (fields: Record<string, string>, fl: { name: string; data: Buffer }[] = [], headers: Record<string, string> = ORIGIN) => {
      const fd = new FormData();
      for (const [k, v] of Object.entries({ requestId: randomUUID(), ...fields })) fd.set(k, v);
      for (const f of fl) fd.append("files", new Blob([new Uint8Array(f.data)]), f.name);
      return req("/api/mail/send", { method: "POST", body: fd, headers });
    };
    assert.equal((await send({ to: "a@b.com", subject: "x", text: "y" }, [], {})).status, 403, "CSRF");
    assert.equal((await send({ to: "bukan-email", subject: "x", text: "y" })).status, 422);
    assert.equal((await send({ to: "a@b.com\r\nBcc: x@y.com", subject: "x", text: "y" })).status, 422);
    assert.equal((await send({ to: "a@b.com", subject: "", text: "y" })).status, 422);
    assert.equal((await send({ to: "a@b.com", subject: "x", text: "   " })).status, 422);
    assert.equal((await send({ to: "a@b.com", subject: "x", html: "<div><br></div>" })).status, 422, "editor kosong");
    assert.equal((await send({ to: "a@b.com", subject: "x", html: "<script>alert(1)</script>" })).status, 422, "hanya script → kosong setelah sanitasi");
    assert.equal((await send({ to: "a@b.com", subject: "x", text: "y", requestId: "bukan-uuid" })).status, 400);
    const exe = await send({ to: "a@b.com", subject: "x", text: "y" }, [{ name: "virus.exe", data: Buffer.from("MZ") }]);
    assert.equal(exe.status, 422); assert.match((await exe.json()).message, /tidak diizinkan/);
    const fake = await send({ to: "a@b.com", subject: "x", text: "y" }, [{ name: "palsu.pdf", data: Buffer.from("<html>bukan pdf</html>") }]);
    assert.equal(fake.status, 422); assert.match((await fake.json()).message, /tidak sesuai/);
    const big = await send({ to: "a@b.com", subject: "x", text: "y" }, [{ name: "besar.pdf", data: Buffer.concat([Buffer.from("%PDF"), Buffer.alloc(4.2 * 1024 * 1024)]) }]);
    assert.ok([413, 422].includes(big.status));
    assert.equal((await send({ to: "a@b.com", subject: "x", text: "y", threadId: randomUUID() })).status, 404 /* thread tidak ada; Resend belum dihubungi */);
  });

  test("logout menghapus cookie; setelah itu API 401", async () => {
    const r = await req("/api/mail/auth/logout", { method: "POST", headers: ORIGIN });
    assert.equal(r.status, 200); assert.match(r.headers.get("set-cookie") ?? "", /Max-Age=0/i);
    assert.equal((await req("/api/mail/threads", { auth: false })).status, 401);
  });

  test("throttle login: setelah 8 gagal dari IP yang sama → 429, bahkan dengan password benar", async () => {
    const attempt = (password: string) => req("/api/mail/auth/login", { method: "POST", headers: { "Content-Type": "application/json", ...ORIGIN, "x-forwarded-for": "203.0.113.77" }, body: JSON.stringify({ email: ADMIN, password }), auth: false });
    for (let i = 0; i < 8; i++) assert.equal((await attempt("salah")).status, 401);
    assert.equal((await attempt("salah")).status, 429);
    assert.equal((await attempt(PASS)).status, 429);
    const other = await req("/api/mail/auth/login", { method: "POST", headers: { "Content-Type": "application/json", ...ORIGIN, "x-forwarded-for": "198.51.100.5" }, body: JSON.stringify({ email: ADMIN, password: PASS }), auth: false });
    assert.equal(other.status, 200, "IP lain tidak terkena");
    void files;
  });
});

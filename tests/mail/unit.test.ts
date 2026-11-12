import assert from "node:assert/strict";
import { test } from "node:test";
import { magicMatches, validateOutgoingFiles, safeDownloadType } from "../../src/lib/mail/attachments";
import { parseAddress, parseAddressList } from "../../src/lib/mail/addresses";
import { hashPassword, verifyPassword } from "../../src/lib/mail/password";
import { escapeHtml, htmlToText, sanitizeEmailHtml, textToHtml } from "../../src/lib/mail/sanitize";
import { passwordVersion, signSession, verifySession } from "../../src/lib/mail/session";
import { buildReplyHeaders, extractMessageIds, hasReplyPrefix, makeSnippet, normalizeMessageId, normalizeSubject, pickThreadByHeaders, replySubject } from "../../src/lib/mail/threading";

test("extractMessageIds: string, array, spasi/koma, duplikat", () => {
  assert.deepEqual(extractMessageIds("<a@x.com> <b@y.org>,<a@x.com>"), ["<a@x.com>", "<b@y.org>"]);
  assert.deepEqual(extractMessageIds(["<a@x.com>", "<b@y.org>"]), ["<a@x.com>", "<b@y.org>"]);
  assert.deepEqual(extractMessageIds(undefined), []);
  assert.equal(normalizeMessageId("abc@host.com"), "<abc@host.com>");
  assert.equal(normalizeMessageId("garbage"), null);
});

test("normalizeSubject: buang Re:/Fwd:/Balas:, tetap fallback saja", () => {
  assert.equal(normalizeSubject("RE: Re: Fwd:  Tanya   Premi Mobil "), "tanya premi mobil");
  assert.equal(normalizeSubject("Balas: tanya premi mobil"), "tanya premi mobil");
  assert.equal(normalizeSubject("Re[2]: x"), "x");
  assert.ok(hasReplyPrefix("Re: x") && hasReplyPrefix("Balas: x") && !hasReplyPrefix("Regarding premi"));
  assert.equal(replySubject("Re: x"), "Re: x");
  assert.equal(replySubject("x"), "Re: x");
});

test("buildReplyHeaders: In-Reply-To = induk; References = rantai + induk; dipangkas", () => {
  assert.deepEqual(buildReplyHeaders({ message_id: "<p@x>", references_ids: ["<a@x>", "<b@x>"] }), { inReplyTo: "<p@x>", references: ["<a@x>", "<b@x>", "<p@x>"] });
  // induk tanpa References → pakai In-Reply-To induk (RFC 5322 §3.6.4)
  assert.deepEqual(buildReplyHeaders({ message_id: "<p@x>", in_reply_to: "<root@x>" }).references, ["<root@x>", "<p@x>"]);
  assert.deepEqual(buildReplyHeaders({ message_id: "<p@x>" }).references, ["<p@x>"]);
  const long = Array.from({ length: 40 }, (_, i) => `<m${i}@x>`);
  const r = buildReplyHeaders({ message_id: "<p@x>", references_ids: long }, 20).references;
  assert.equal(r.length, 20);
  assert.equal(r[0], "<m0@x>");
  assert.equal(r[19], "<p@x>");
});

test("pickThreadByHeaders: prioritas In-Reply-To, lalu References terdekat, lalu pesan yang merujuk", () => {
  const known = new Map([["<a@x>", "T1"], ["<b@x>", "T2"]]);
  assert.equal(pickThreadByHeaders("<b@x>", ["<a@x>", "<b@x>"], known, []), "T2");
  assert.equal(pickThreadByHeaders("<zzz@x>", ["<a@x>", "<qqq@x>"], known, []), "T1");
  assert.equal(pickThreadByHeaders(null, [], known, ["T9"]), "T9");
  assert.equal(pickThreadByHeaders("<zzz@x>", [], known, []), null);
});

test("makeSnippet: tanpa kutipan balasan", () => {
  assert.equal(makeSnippet("Halo, terima kasih.\n\nOn Mon, Budi wrote:\n> lama"), "Halo, terima kasih.");
  assert.equal(makeSnippet("> kutipan\nbaru"), "baru");
});

test("alamat: parse nama, kutip, daftar, injeksi header ditolak", () => {
  assert.deepEqual(parseAddress('"Budi, S." <Budi@X.com>'), { email: "budi@x.com", name: "Budi, S." });
  assert.equal(parseAddress("bukan email"), null);
  assert.equal(parseAddress("a@b.com\r\nBcc: evil@x.com"), null);
  assert.deepEqual(parseAddressList('A <a@x.com>, "B, C" <b@x.com>; a@x.com, nope'), ["a@x.com", "b@x.com"]);
});

test("password: hash scrypt benar/salah, format aman untuk .env (tanpa $)", async () => {
  const h = hashPassword("kata-sandi-panjang-123");
  assert.ok(!h.includes("$"));
  assert.ok(await verifyPassword("kata-sandi-panjang-123", h));
  assert.ok(!(await verifyPassword("salah", h)));
  assert.ok(!(await verifyPassword("x", "")));
  assert.ok(!(await verifyPassword("x", "scrypt:1:2:3:aa:bb")));
  assert.notEqual(h, hashPassword("kata-sandi-panjang-123")); // salt acak
});

test("sesi: tanda tangan, kedaluwarsa, manipulasi, ganti password mencabut sesi", () => {
  const secret = "s".repeat(40), now = 1_800_000_000;
  const pv = passwordVersion("hash-a");
  const tok = signSession({ sub: "a@b.com", iat: now, exp: now + 100, pv }, secret);
  assert.equal(verifySession(tok, secret, pv, now + 10)?.sub, "a@b.com");
  assert.equal(verifySession(tok, secret, pv, now + 101), null, "kedaluwarsa");
  assert.equal(verifySession(tok, "t".repeat(40), pv, now + 10), null, "secret lain");
  assert.equal(verifySession(tok, secret, passwordVersion("hash-b"), now + 10), null, "password diganti");
  const [body, sig] = tok.split(".");
  const forged = Buffer.from(JSON.stringify({ sub: "evil@x.com", iat: now, exp: now + 9999, pv })).toString("base64url");
  assert.equal(verifySession(`${forged}.${sig}`, secret, pv, now + 10), null, "payload dipalsukan");
  assert.equal(verifySession(`${body}.`, secret, pv, now), null);
  assert.equal(verifySession("", secret, pv, now), null);
  assert.equal(verifySession(tok, "pendek", pv, now + 10), null, "secret terlalu pendek ditolak");
});

test("sanitasi HTML: payload XSS umum dinetralkan", () => {
  const payloads = [
    `<script>alert(1)</script><p>ok</p>`,
    `<img src=x onerror="alert(1)">`,
    `<a href="javascript:alert(1)">klik</a>`,
    `<a href="  JaVaScRiPt:alert(1)">klik</a>`,
    `<a href="data:text/html;base64,PHNjcmlwdD4=">x</a>`,
    `<iframe src="https://evil.com"></iframe>`,
    `<svg onload=alert(1)><circle/></svg>`,
    `<form action="https://evil.com"><input name=x></form>`,
    `<style>body{background:url(https://evil.com/x)}</style>hi`,
    `<div style="background:url(javascript:alert(1));position:fixed;top:0">x</div>`,
    `<meta http-equiv="refresh" content="0;url=https://evil.com">`,
    `<object data="x.swf"></object><embed src="x.swf">`,
    `<math><mi xlink:href="javascript:alert(1)">x</mi></math>`,
    `<img src="//evil.com/p.gif">`,
    `<body onload=alert(1)>x</body>`,
  ];
  for (const p of payloads) {
    const { html } = sanitizeEmailHtml(p, { allowRemoteImages: true });
    assert.ok(!/<script|onerror|onload|javascript:|<iframe|<svg|<form|<style|<object|<embed|<meta|position\s*:|url\(|evil\.com\/p\.gif/i.test(html), `lolos: ${p} → ${html}`);
  }
});

test("sanitasi HTML: tautan aman, gambar eksternal diblokir default, data:image diizinkan", () => {
  const a = sanitizeEmailHtml(`<a href="https://ok.com/x" onclick="x()">t</a>`).html;
  assert.match(a, /href="https:\/\/ok\.com\/x"/);
  assert.match(a, /rel="noopener noreferrer nofollow ugc"/);
  assert.match(a, /target="_blank"/);
  assert.ok(!/onclick/.test(a));
  const blocked = sanitizeEmailHtml(`<img src="https://track.example/p.gif" alt="logo">`);
  assert.ok(!blocked.html.includes("track.example") && blocked.hasRemoteImages);
  const allowed = sanitizeEmailHtml(`<img src="https://track.example/p.gif">`, { allowRemoteImages: true });
  assert.ok(allowed.html.includes("track.example") && /referrerpolicy="no-referrer"/.test(allowed.html));
  const data = sanitizeEmailHtml(`<img src="data:image/png;base64,iVBORw0KGgo=">`);
  assert.ok(data.html.includes("data:image/png") && data.hadDataImages);
  assert.ok(!sanitizeEmailHtml(`<img src="data:image/svg+xml;base64,PHN2Zz4=">`).html.includes("svg+xml"));
  assert.ok(!sanitizeEmailHtml(`<img src="data:image/png;base64,AAAA">`, { allowDataImages: false }).html.includes("data:"));
});

test("textToHtml & htmlToText", () => {
  const h = textToHtml(`<b>x</b> https://a.com/p?x=1&y=2\nbaris2`);
  assert.ok(!h.includes("<b>x</b>") && h.includes("&lt;b&gt;") && h.includes("<br>") && h.includes('<a href="https://a.com/p?x=1&amp;y=2">'));
  assert.equal(htmlToText("<p>Halo <b>dunia</b></p><style>x{}</style>"), "Halo dunia");
  assert.equal(escapeHtml(`<"'&>`), "&lt;&quot;&#39;&amp;&gt;");
});

test("lampiran: allowlist, ukuran, magic bytes", () => {
  assert.equal(validateOutgoingFiles([{ name: "a.pdf", size: 100 }]), null);
  assert.match(validateOutgoingFiles([{ name: "a.exe", size: 100 }])!, /tidak diizinkan/);
  assert.match(validateOutgoingFiles([{ name: "a.js", size: 100 }])!, /tidak diizinkan/);
  assert.match(validateOutgoingFiles([{ name: "tanpaekstensi", size: 100 }])!, /tidak diizinkan/);
  assert.match(validateOutgoingFiles([{ name: "a.pdf", size: 5 * 1024 * 1024 }])!, /melebihi/);
  assert.match(validateOutgoingFiles([{ name: "a.pdf", size: 0 }])!, /kosong/);
  assert.match(validateOutgoingFiles(Array.from({ length: 6 }, () => ({ name: "a.pdf", size: 1 })))!, /Maksimal/);
  assert.match(validateOutgoingFiles([{ name: "a.pdf", size: 3_000_000 }, { name: "b.pdf", size: 3_000_000 }])!, /Total/);
  assert.ok(magicMatches("pdf", Buffer.from("%PDF-1.7")));
  assert.ok(!magicMatches("pdf", Buffer.from("MZ\x90\x00")));
  assert.ok(magicMatches("docx", Buffer.from([0x50, 0x4b, 3, 4])));
  assert.ok(!magicMatches("png", Buffer.from("<html>")));
  assert.ok(!magicMatches("txt", Buffer.from([65, 0, 66])));
  assert.equal(safeDownloadType("text/html; charset=utf-8"), "application/octet-stream");
  assert.equal(safeDownloadType("image/svg+xml"), "application/octet-stream");
  assert.equal(safeDownloadType("application/pdf"), "application/pdf");
});

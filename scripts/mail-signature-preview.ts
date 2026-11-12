// Membuat docs/webmail/signature-preview.html — buka di browser, blok tanda tangan, salin, lalu tempel
// di Gmail (Setelan → Lihat semua setelan → Tanda tangan) bila ingin dipakai di luar webmail ini.
import fs from "node:fs";
import { signatureHtml } from "../src/lib/mail/signature";

const html = `<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Pratinjau tanda tangan email</title>
<style>body{font:14px Arial,sans-serif;max-width:640px;margin:32px auto;padding:0 16px;color:#0a1628}.box{border:1px dashed #cbd5e1;border-radius:8px;padding:16px;background:#fff}small{color:#5b6577}</style></head>
<body><h1 style="font-size:18px">Tanda tangan email Asuransi Batam</h1>
<p><small>Gambar dimuat dari asuransibatam.com/images/email — pastikan situs sudah ter-deploy. Untuk Gmail: blok isi kotak di bawah, salin, lalu tempel di Setelan → Tanda tangan.</small></p>
<div class="box"><p>Terima kasih atas kepercayaan Bapak/Ibu.</p><p>Salam hormat,</p>${signatureHtml()}</div></body></html>`;
fs.mkdirSync("docs/webmail", { recursive: true });
fs.writeFileSync("docs/webmail/signature-preview.html", html);
console.log("OK docs/webmail/signature-preview.html");

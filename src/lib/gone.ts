// src/lib/gone.ts
// Respons 410 Gone untuk URL lama yang sudah tidak ada pengganti 1:1.
export function goneResponse({ href, label }: { href: string; label: string }) {
  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex">
<title>Page removed | Batam Insurance</title></head>
<body style="font-family:system-ui,sans-serif;max-width:32rem;margin:4rem auto;padding:0 1rem">
<h1>This page has been removed</h1>
<p>The page you are looking for is no longer available. You may find this useful instead:</p>
<p><a href="${href}">${label}</a> &middot; <a href="/en">Home</a></p>
</body></html>`;
  return new Response(html, {
    status: 410,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "x-robots-tag": "noindex",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  });
}

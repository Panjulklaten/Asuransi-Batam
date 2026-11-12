"use client";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

// Navbar/Footer/WhatsApp float milik website marketing disembunyikan di aplikasi webmail (/mail/*).
// Dibuat sebagai pembungkus client agar seluruh halaman lain tetap statis (SSG) dan tidak berubah.
export default function SiteChrome({ header, footer, floating, children }: { header: ReactNode; footer: ReactNode; floating: ReactNode; children: ReactNode }) {
  const pathname = usePathname() ?? "";
  const isMail = pathname === "/mail" || pathname.startsWith("/mail/");
  return (
    <>
      {!isMail && header}
      <main>{children}</main>
      {!isMail && footer}
      {!isMail && floating}
    </>
  );
}

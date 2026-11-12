import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webmail",
  description: "Webmail privat.",
  keywords: [],
  robots: { index: false, follow: false, nocache: true },
};

export default function MailLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-slate-50 text-navy">{children}</div>;
}

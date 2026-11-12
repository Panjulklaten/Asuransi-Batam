// /mail/inbox — aplikasi email (wajib login; folder & percakapan dipilih lewat query ?folder=&t=).
import { Suspense } from "react";
import { redirect } from "next/navigation";
import MailApp from "@/components/mail/MailApp";
import { getSession } from "@/lib/mail/auth";
import { mailEnv } from "@/lib/mail/config";

export const dynamic = "force-dynamic";

export default async function MailInboxPage() {
  const session = await getSession();
  if (!session) redirect("/mail");
  return (
    <Suspense fallback={null}>
      <MailApp adminEmail={session.email} selfAddress={mailEnv.fromAddress()} />
    </Suspense>
  );
}

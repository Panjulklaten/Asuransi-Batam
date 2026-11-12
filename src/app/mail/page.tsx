// /mail — halaman login. Jika sudah login, langsung ke /mail/inbox.
import { redirect } from "next/navigation";
import LoginForm from "@/components/mail/LoginForm";
import { getSession } from "@/lib/mail/auth";

export const dynamic = "force-dynamic";

export default async function MailLoginPage() {
  if (await getSession()) redirect("/mail/inbox");
  return <LoginForm />;
}

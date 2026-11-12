"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Lock, Mail } from "lucide-react";
import { api } from "./utils";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError("");
    const r = await api("/api/mail/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
    if (r.ok) { router.replace("/mail/inbox"); router.refresh(); return; }
    setError(r.data.message ?? "Login gagal.");
    setPassword("");
    setBusy(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10" style={{ background: "linear-gradient(135deg, #0a1628 0%, #132040 55%, #1a4fa0 100%)" }}>
      <div className="w-full max-w-sm">
        <div className="text-center mb-6">
          <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-xl font-display text-lg font-bold text-navy" style={{ background: "linear-gradient(135deg,#c9a84c,#f0d080)" }}>AB</div>
          <h1 className="font-display text-2xl font-bold text-white">Webmail</h1>
          <p className="mt-1 text-sm text-blue-100/70">asuransibatam.com · khusus admin</p>
        </div>
        <form onSubmit={submit} className="rounded-2xl bg-white p-6 shadow-2xl" noValidate>
          <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="mail-email">Email</label>
          <div className="relative mb-4">
            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input id="mail-email" type="email" autoComplete="username" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border border-slate-300 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30" />
          </div>
          <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="mail-pass">Password</label>
          <div className="relative mb-4">
            <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input id="mail-pass" type="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-lg border border-slate-300 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30" />
          </div>
          {error && <p role="alert" className="mb-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
          <button type="submit" disabled={busy || !email || !password} className="flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold text-navy transition disabled:opacity-60" style={{ background: "linear-gradient(135deg,#c9a84c,#f0d080)" }}>
            {busy && <Loader2 size={16} className="animate-spin" />} Masuk
          </button>
        </form>
      </div>
    </div>
  );
}

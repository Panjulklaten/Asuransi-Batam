// Membuat hash password untuk MAIL_ADMIN_PASSWORD_HASH.   Pakai:  npm run mail:hash-password
// Password dibaca dari prompt (tidak ditampilkan) atau env MAIL_PASSWORD — bukan dari argumen (agar tak tersimpan di history shell).
import { createInterface } from "node:readline";
import { hashPassword } from "../src/lib/mail/password";

async function ask(prompt: string): Promise<string> {
  return new Promise((resolve) => {
    const rl = createInterface({ input: process.stdin, output: process.stdout, terminal: true });
    const w = rl as unknown as { _writeToOutput: (s: string) => void };
    let muted = false;
    const orig = w._writeToOutput.bind(rl);
    w._writeToOutput = (s: string) => { if (!muted) orig(s); else if (s.includes("\n")) orig("\n"); };
    rl.question(prompt, (a) => { rl.close(); resolve(a); });
    muted = true;
  });
}

async function main() {
  const pw = process.env.MAIL_PASSWORD ?? (await ask("Password admin webmail (tidak ditampilkan): "));
  if (pw.length < 12) { console.error("Password minimal 12 karakter."); process.exit(1); }
  if (!process.env.MAIL_PASSWORD) {
    const again = await ask("Ulangi password: ");
    if (again !== pw) { console.error("Password tidak sama."); process.exit(1); }
  }
  console.log("\nSalin ke MAIL_ADMIN_PASSWORD_HASH (env server / Vercel):\n");
  console.log(hashPassword(pw));
}
void main();

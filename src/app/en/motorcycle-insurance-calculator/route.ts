// 410 Gone — URL lama yang tidak punya halaman pengganti 1:1.
// Menggantikan redirect yang terus dilaporkan "Kesalahan pengalihan" di GSC.
import { goneResponse } from "@/lib/gone";

export const dynamic = "force-dynamic";

export function GET() {
  return goneResponse({ href: "/en/motorcycle-premium-calculator", label: "Motorcycle premium calculator" });
}

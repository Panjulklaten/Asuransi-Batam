// components/Footer.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin } from "lucide-react";

// ── ID product links ──────────────────────────────────────────────────────────
const productLinksID = [
  { label: "Asuransi Properti",    href: "/asuransi-properti" },
  { label: "Asuransi Hotel Batam", href: "/asuransi-properti/asuransi-hotel-batam" },
  { label: "Asuransi Rumah Batam", href: "/asuransi-properti/asuransi-rumah-batam" },
  { label: "Asuransi Kendaraan",   href: "/asuransi-kendaraan" },
  { label: "Asuransi Mobil Batam", href: "/asuransi-kendaraan/asuransi-mobil-batam" },
  { label: "Asuransi Dump Truck",  href: "/asuransi-kendaraan/asuransi-dumptruck" },
];
const productLinksID2 = [
  { label: "Asuransi Alat Berat",  href: "/asuransi-machinery/asuransi-alat-berat" },
  { label: "Asuransi Crane",       href: "/asuransi-machinery/asuransi-crane" },
  { label: "Asuransi Limbah B3",   href: "/asuransi-liability/asuransi-limbah-b3" },
  { label: "Public Liability",     href: "/asuransi-liability/public-liability" },
  { label: "Asuransi Engineering", href: "/asuransi-engineering" },
  { label: "Asuransi Surety Bond", href: "/asuransi-surety-bond" },
  { label: "Asuransi Event",       href: "/asuransi-event" },
  { label: "Kalkulator Premi Mobil", href: "/kalkulator-premi-mobil" },
  { label: "Kalkulator Premi Motor", href: "/kalkulator-premi-motor" },
];
const blogLinksID = [
  { label: "Cara Klaim Asuransi Mobil",     href: "/blog/cara-klaim-asuransi-mobil-batam" },
  { label: "Perbedaan All Risk dan TLO",    href: "/blog/perbedaan-all-risk-dan-tlo" },
  { label: "Asuransi Motor Batam",          href: "/blog/asuransi-motor-batam" },
  { label: "Pentingnya Asuransi Limbah B3", href: "/blog/pentingnya-asuransi-limbah-b3" },
];

// ── EN product links ──────────────────────────────────────────────────────────
const productLinksEN = [
  { label: "Property Insurance",     href: "/en/property-insurance" },
  { label: "Hotel Insurance Batam",  href: "/en/property-insurance/hotel-insurance-batam" },
  { label: "Home Insurance Batam",   href: "/en/property-insurance/home-insurance-batam" },
  { label: "Vehicle Insurance",      href: "/en/vehicle-insurance" },
  { label: "Car Insurance Batam",    href: "/en/vehicle-insurance/car-insurance-batam" },
  { label: "Dump Truck Insurance",   href: "/en/vehicle-insurance/dump-truck-insurance" },
];
const productLinksEN2 = [
  { label: "Heavy Equipment Insurance", href: "/en/machinery-insurance/heavy-equipment-insurance" },
  { label: "Crane Insurance",           href: "/en/machinery-insurance/crane-insurance" },
  { label: "B3 Waste Insurance",        href: "/en/liability-insurance/b3-waste-insurance" },
  { label: "Public Liability",          href: "/en/liability-insurance/public-liability" },
  { label: "Engineering Insurance",     href: "/en/engineering-insurance" },
  { label: "Surety Bond Insurance",     href: "/en/surety-bond-insurance" },
  { label: "Event Insurance",           href: "/en/event-insurance" },
  { label: "Car Premium Calculator",    href: "/en/car-premium-calculator" },
];
const blogLinksEN = [
  { label: "How to File a Car Insurance Claim",  href: "/en/blog/how-to-claim-car-insurance-batam" },
  { label: "All Risk vs TLO Insurance",          href: "/en/blog/all-risk-vs-tlo-car-insurance" },
  { label: "Marine Hull vs Cargo Insurance",     href: "/en/blog/marine-hull-vs-cargo-insurance" },
  { label: "Hazardous Waste (B3) Insurance",     href: "/en/hazardous-waste-insurance-batam" },
];

export default function Footer() {
  const pathname = usePathname();
  const isEN = pathname.startsWith("/en");

  const products1 = isEN ? productLinksEN : productLinksID;
  const products2 = isEN ? productLinksEN2 : productLinksID2;
  const blogLinks = isEN ? blogLinksEN : blogLinksID;

  const t = {
    brand: isEN ? "Batam Insurance" : "AsuransiBatam",
    tagline: isEN
      ? "Professional general insurance practitioner in Batam. Protecting your assets & business with trusted insurance solutions."
      : "Praktisi asuransi kerugian profesional di Batam. Melindungi aset & bisnis Anda dengan solusi asuransi terpercaya.",
    products: isEN ? "Insurance Products" : "Produk Asuransi",
    more: isEN ? "Other Products" : "Produk Lainnya",
    articles: isEN ? "Education Articles" : "Artikel Edukasi",
    info: isEN ? "Information" : "Informasi",
    about: isEN ? "About Us" : "Tentang Kami",
    aboutHref: isEN ? "/en/about-us" : "/tentang-kami",
    contact: isEN ? "Contact" : "Kontak",
    contactHref: isEN ? "/en/contact" : "/kontak",
    copyright: isEN
      ? `© ${new Date().getFullYear()} Batam Insurance – Rio. All rights reserved.`
      : `© ${new Date().getFullYear()} Asuransi Batam – Rio. Hak cipta dilindungi.`,
    tagline2: isEN
      ? "Insurance Practitioner | Batam, Kepulauan Riau"
      : "Praktisi Asuransi | Batam, Kepulauan Riau",
    homeHref: isEN ? "/en" : "/",
  };

  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={t.homeHref} className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#c9a84c] to-[#f0d080] rounded-lg flex items-center justify-center">
                <span className="text-[#0a1628] font-display font-bold text-sm">AB</span>
              </div>
              <span className="font-display font-bold text-xl">
                {isEN ? <>Batam<span className="text-[#c9a84c]">Insurance</span></> : <>Asuransi<span className="text-[#c9a84c]">Batam</span></>}
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">{t.tagline}</p>
            <div className="space-y-3">
              <a href="https://wa.me/6281373336728" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/70 hover:text-[#c9a84c] transition-colors">
                <Phone className="w-4 h-4 text-[#c9a84c]" />
                WhatsApp: 0813-7333-6728
              </a>
              <a href="mailto:rio@asuransibatam.com" className="flex items-center gap-2 text-sm text-white/70 hover:text-[#c9a84c] transition-colors">
                <Mail className="w-4 h-4 text-[#c9a84c]" />
                rio@asuransibatam.com
              </a>
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-[#c9a84c] mt-0.5 flex-shrink-0" />
                Batam Center, Kepulauan Riau
              </div>
            </div>
          </div>

          {/* Products col 1 */}
          <div>
            <h3 className="font-display font-bold text-[#c9a84c] mb-4">{t.products}</h3>
            <ul className="space-y-2">
              {products1.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-[#c9a84c] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products col 2 */}
          <div>
            <h3 className="font-display font-bold text-[#c9a84c] mb-4">{t.more}</h3>
            <ul className="space-y-2">
              {products2.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-[#c9a84c] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog & Info */}
          <div>
            <h3 className="font-display font-bold text-[#c9a84c] mb-4">{t.articles}</h3>
            <ul className="space-y-2 mb-6">
              {blogLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-[#c9a84c] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-display font-bold text-[#c9a84c] mb-4">{t.info}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={t.aboutHref} className="text-sm text-white/60 hover:text-[#c9a84c] transition-colors">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link href={t.contactHref} className="text-sm text-white/60 hover:text-[#c9a84c] transition-colors">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm">{t.copyright}</p>
          <p className="text-white/70 text-xs">{t.tagline2}</p>
        </div>
      </div>
    </footer>
  );
}

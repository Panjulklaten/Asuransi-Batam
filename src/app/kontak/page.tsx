import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { SITE } from "@/lib/constants";
export const metadata: Metadata = generateSEO({
  title: "Kontak & Lokasi – Hubungi Rio Praktisi Asuransi Batam, Batam Center",
  description: "Hubungi Rio untuk konsultasi asuransi gratis di Batam. WhatsApp 0813-7333-6728, email rio@asuransibatam.com. Kantor di Batam Center, melayani Batam dan Kepulauan Riau.",
  canonical: "https://asuransibatam.com/kontak",
  languages: {
      id: "https://asuransibatam.com/kontak",
      en: "https://asuransibatam.com/en/contact",
    },
});
const breadcrumbListSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://asuransibatam.com" },
    { "@type": "ListItem", position: 2, name: "Kontak", item: "https://asuransibatam.com/kontak" },
  ],
};

const AREAS_SERVED = ["Batam Center","Nagoya","Baloi","Sekupang","Batu Aji","Tanjung Uncang","Tanjung Pinang","Bintan","Karimun","Lingga","Kawasan Industri Batamindo","Kawasan Industri Kabil","Muka Kuning"];

const LOCAL_FAQS = [
  { q: "Di mana lokasi kantor Asuransi Batam?", a: "Kantor kami berlokasi di Batam Center, Kota Batam, Kepulauan Riau. Kami juga melayani kunjungan ke lokasi klien di seluruh wilayah Batam." },
  { q: "Apakah bisa konsultasi di luar jam kantor?", a: "Ya, untuk keperluan mendesak atau klien korporasi, kami bisa mengatur jadwal konsultasi di luar jam kantor reguler. Hubungi via WhatsApp untuk penjadwalan." },
  { q: "Apakah melayani wilayah di luar Batam?", a: "Ya, kami melayani seluruh Kepulauan Riau termasuk Tanjung Pinang, Bintan, Karimun, dan pulau-pulau lainnya. Konsultasi bisa dilakukan secara online." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": `${SITE.url}/#localbusiness`,
  name: "Asuransi Batam – Rio",
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Batam Center",
    addressLocality: "Batam",
    addressRegion: "Kepulauan Riau",
    postalCode: "29461",
    addressCountry: "ID",
  },
  geo: { "@type": "GeoCoordinates", latitude: 1.1277, longitude: 104.0196 },
  hasMap: "https://maps.google.com/?q=Batam+Center+Batam",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "13:00" },
  ],
  areaServed: AREAS_SERVED.map((a) => ({ "@type": "City", name: a })),
};

export default function KontakPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-white/50 mb-6 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-white/70">Kontak</span>
          </nav>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">Hubungi Kami</h1>
          <p className="text-white/70 text-xl">Konsultasi asuransi gratis. Rio siap membantu Anda.</p>
        </div>
      </section>
      <section className="section-padding bg-[#faf8f3]">
        <div className="max-w-2xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {[
              { icon: "💬", label: "WhatsApp", value: "0813-7333-6728", href: "https://wa.me/6281373336728", primary: true },
              { icon: "💬", label: "WhatsApp (EN)", value: "Chat in English", href: "https://wa.me/6281373336728?text=Hello%20Rio%2C%20I%20need%20insurance%20consultation", primary: false },
              { icon: "📧", label: "Email", value: "rio@asuransibatam.com", href: "mailto:rio@asuransibatam.com", primary: false },
              { icon: "📍", label: "Alamat", value: "Batam Center, Kota Batam, Kepulauan Riau", href: null, primary: false },
            ].map((c) => (
              <div key={c.label} className={`p-5 rounded-2xl border-2 ${c.primary ? "bg-[#0a1628] border-[#c9a84c]/30" : "bg-white border-[#e2e8f0]"}`}>
                <div className="text-2xl mb-2">{c.icon}</div>
                <div className={`text-xs font-semibold uppercase tracking-wide mb-1 ${c.primary ? "text-[#c9a84c]" : "text-[#475569]"}`}>{c.label}</div>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={`font-bold text-sm ${c.primary ? "text-white hover:text-[#f0d080]" : "text-[#0a1628] hover:text-[#1a4fa0]"} transition-colors`}>{c.value}</a>
                ) : (
                  <div className="font-bold text-sm text-[#0a1628]">{c.value}</div>
                )}
              </div>
            ))}
          </div>
          <a
            href="https://wa.me/6281373336728?text=Halo%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi"
            target="_blank" rel="noopener noreferrer"
            className="block w-full py-5 bg-gradient-to-r from-[#c9a84c] to-[#f0d080] text-[#0a1628] font-bold rounded-2xl text-center text-lg hover:shadow-xl transition-all"
          >
            💬 Mulai Konsultasi via WhatsApp Sekarang
          </a>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 font-display text-[#0a1628]">Jam Operasional & Peta</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#f8faff] border border-[#dbeafe]">
                <div className="font-semibold text-sm text-[#0a1628]">📍 Alamat</div>
                <div className="text-sm text-[#475569] mt-0.5">Batam Center, Batam, Kepulauan Riau 29461</div>
              </div>
              <div className="p-4 rounded-xl bg-[#f8faff] border border-[#dbeafe]">
                <div className="font-semibold text-sm text-[#0a1628]">🕗 Jam Operasional</div>
                <div className="text-sm text-[#475569] mt-0.5">
                  Senin – Jumat: 08.00 – 17.00 WIB<br />
                  Sabtu: 09.00 – 13.00 WIB<br />
                  WhatsApp: Fleksibel
                </div>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Batam+Center+Batam"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-6 px-6 py-3 rounded-xl font-semibold text-sm border-2 border-[#1a4fa0] text-[#1a4fa0] hover:bg-[#eff6ff] transition-all"
            >
              🧭 Buka di Google Maps
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm aspect-[4/3]">
            <iframe
              title="Lokasi Asuransi Batam – Rio"
              src="https://maps.google.com/maps?q=Batam+Center+Kota+Batam+Kepulauan+Riau&output=embed&z=13"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#faf8f3]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center font-display text-[#0a1628]">Area yang Dilayani</h2>
          <p className="text-center text-gray-500 text-sm mb-8">Kami melayani klien di seluruh Batam dan Kepulauan Riau — baik kunjungan langsung maupun konsultasi online.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {AREAS_SERVED.map((area) => (
              <span key={area} className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center font-display text-[#0a1628]">Pertanyaan Lokasi</h2>
          <div className="space-y-4">
            {LOCAL_FAQS.map((f) => (
              <div key={f.q} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-sm mb-2 text-[#0a1628]">{f.q}</h3>
                <p className="text-gray-600 text-sm">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

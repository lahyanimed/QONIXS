import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Qonixs by SettaTech | Settat, Maroc",
  description:
    "Contactez Qonixs by SettaTech pour tout conseil, devis gratuit ou support technique. Téléphone, WhatsApp, email ou visite en boutique à Settat. Réponse 7j/7.",
  keywords: [
    "contact Qonixs",
    "contact SettaTech",
    "support technique réseau Maroc",
    "devis WiFi Maroc",
    "installation réseau Settat",
    "boutique réseau Settat",
    "WhatsApp Qonixs",
  ],
  alternates: { canonical: "https://qonixs.com/contact" },
  openGraph: {
    title: "Contact — Qonixs by SettaTech",
    description: "Contactez notre équipe pour un devis gratuit ou du support technique. Disponible 7j/7 par téléphone, WhatsApp ou email.",
    url: "https://qonixs.com/contact",
  },
};

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Téléphone",
    value: "+212 660 248 290",
    href: "tel:+212660248290",
    color: "bg-primary/10 text-primary",
    desc: "Lun–Sam 8h–18h, Dim 10h–16h",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    label: "WhatsApp",
    value: "wa.me/212660248290",
    href: "https://wa.me/212660248290?text=Bonjour%2C%20je%20vous%20contacte%20depuis%20Qonixs.com",
    color: "bg-green-100 text-green-600",
    desc: "Réponse rapide — 7j/7",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "contact@qonixs.com",
    href: "mailto:contact@qonixs.com",
    color: "bg-orange-100 text-orange-600",
    desc: "Réponse sous 24h",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Boutique",
    value: "BD Qadi Ayad N°52, Smalaa, Settat",
    href: "https://maps.google.com/?q=Settat+BD+QADI+AYAD+52+SMALAA",
    color: "bg-purple-100 text-purple-600",
    desc: "Visite en personne bienvenue",
  },
];

const services = [
  { title: "Devis gratuit", desc: "Installation WiFi, réseau ou vidéosurveillance pour votre hôtel, résidence ou entreprise." },
  { title: "Support technique", desc: "Aide à la configuration, dépannage et maintenance de vos équipements réseau." },
  { title: "Commande & livraison", desc: "Questions sur votre commande, suivi de livraison et retours produits." },
  { title: "Partenariat", desc: "Vous êtes revendeur, intégrateur ou opérateur télécoms ? Discutons d'un partenariat." },
];

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact — Qonixs by SettaTech",
    url: "https://qonixs.com/contact",
    description: "Page de contact de Qonixs by SettaTech — Solutions WiFi et réseau au Maroc.",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Qonixs — SettaTech",
      telephone: "+212660248290",
      email: "contact@qonixs.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "BD QADI AYAD N° 52 SMALAA",
        addressLocality: "Settat",
        postalCode: "26000",
        addressCountry: "MA",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-dm text-gray-400 mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
          <span>/</span>
          <span className="text-dark font-medium">Contact</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="font-syne font-bold text-4xl text-dark mb-3">Contactez-nous</h1>
          <p className="text-gray-500 font-dm max-w-xl mx-auto">
            Notre équipe est disponible 7j/7 pour répondre à vos questions, vous aider à choisir
            le bon matériel ou préparer un devis pour votre projet réseau au Maroc.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${method.color}`}>
                {method.icon}
              </div>
              <p className="font-syne font-bold text-dark text-sm mb-1">{method.label}</p>
              <p className="font-dm text-primary text-sm font-medium mb-1 group-hover:underline">{method.value}</p>
              <p className="font-dm text-gray-400 text-xs">{method.desc}</p>
            </a>
          ))}
        </div>

        {/* Services */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="font-syne font-bold text-2xl text-dark mb-6 text-center">Comment pouvons-nous vous aider ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-syne font-bold text-dark mb-2">{s.title}</h3>
                <p className="font-dm text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Address & Hours */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="rounded-2xl border border-gray-100 p-6">
            <h2 className="font-syne font-bold text-xl text-dark mb-4">Notre boutique</h2>
            <address className="not-italic font-dm text-gray-600 text-sm space-y-1">
              <p className="font-semibold text-dark">Qonixs — SettaTech</p>
              <p>BD Qadi Ayad N°52, Smalaa</p>
              <p>26000 Settat, Maroc</p>
            </address>
            <a
              href="https://maps.google.com/?q=Settat+BD+QADI+AYAD+52+SMALAA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-primary font-dm font-medium hover:underline"
            >
              → Voir sur Google Maps
            </a>
          </div>
          <div className="rounded-2xl border border-gray-100 p-6">
            <h2 className="font-syne font-bold text-xl text-dark mb-4">Horaires d'ouverture</h2>
            <div className="font-dm text-sm text-gray-600 space-y-2">
              <div className="flex justify-between">
                <span>Lundi — Samedi</span>
                <span className="font-medium text-dark">08h00 — 18h00</span>
              </div>
              <div className="flex justify-between">
                <span>Dimanche</span>
                <span className="font-medium text-dark">10h00 — 16h00</span>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-2 text-green-600">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>Support WhatsApp disponible 7j/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-dark rounded-2xl p-10 text-white">
          <h2 className="font-syne font-bold text-2xl mb-3">Prêt à améliorer votre réseau ?</h2>
          <p className="font-dm text-gray-300 mb-6 max-w-md mx-auto">
            Obtenez un devis gratuit pour votre projet WiFi, satellite ou vidéosurveillance. Notre équipe vous répond rapidement.
          </p>
          <a
            href="https://wa.me/212660248290?text=Bonjour%2C%20je%20souhaite%20un%20devis%20gratuit%20pour%20mon%20projet%20r%C3%A9seau"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl font-dm font-medium hover:bg-green-400 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Demander un devis WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

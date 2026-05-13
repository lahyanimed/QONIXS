import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const BASE_URL = "https://qonixs.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Qonixs — Solutions Internet & Réseau au Maroc | SettaTech",
    template: "%s | Qonixs — SettaTech Maroc",
  },
  description:
    "Qonixs by SettaTech — Solutions internet par satellite, Wi-Fi collectif, vidéosurveillance IP et infrastructure réseau au Maroc. Routeurs WiFi 6, points d'accès Ruijie & TP-Link. Livraison à Settat, Casablanca, Rabat, Marrakech.",
  keywords: [
    "internet par satellite Maroc",
    "Wi-Fi collectif Maroc",
    "solutions connectivité Maroc",
    "Qonixs",
    "SettaTech",
    "routeur WiFi Maroc",
    "Wi-Fi hôtel Maroc",
    "Wi-Fi résidence Maroc",
    "Wi-Fi Airbnb Maroc",
    "internet complexe touristique Maroc",
    "sécurité IP Maroc",
    "caméra surveillance Maroc",
    "infrastructure réseau Maroc",
    "point d'accès WiFi",
    "switch réseau Maroc",
    "Wi-Fi résidentiel Settat",
    "internet satellite Maroc rural",
    "couverture WiFi hôtel",
    "TP-Link Maroc",
    "Ruijie Maroc",
    "Tapo Maroc",
    "équipements réseau Maroc",
    "boutique réseau Maroc",
    "IT Manager Maroc",
    "déploiement réseau Maroc",
  ],
  authors: [{ name: "SettaTech", url: BASE_URL }],
  creator: "SettaTech",
  publisher: "SettaTech",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
    languages: { "fr-MA": BASE_URL },
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: BASE_URL,
    siteName: "Qonixs — Solutions Internet & Réseau au Maroc",
    title: "Qonixs — Solutions Internet & Réseau au Maroc | SettaTech",
    description:
      "Qonixs by SettaTech : internet par satellite, Wi-Fi collectif, vidéosurveillance IP et infrastructure réseau pour hôtels, résidences et entreprises au Maroc.",
    images: [
      {
        url: "/assets/images/hero/hero-wifi.jpg",
        width: 1920,
        height: 700,
        alt: "Qonixs — Solutions Wi-Fi et Internet au Maroc par SettaTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qonixs — Solutions Internet & Réseau au Maroc",
    description:
      "Internet par satellite, Wi-Fi collectif, vidéosurveillance IP au Maroc. Qonixs by SettaTech.",
    images: ["/assets/images/hero/hero-wifi.jpg"],
    creator: "@qonixsma",
  },
  // NOTE: Remplacez VOTRE_CODE_GSC par le vrai code Google Search Console
  verification: { google: "b-Hp5NwGr9Rq4zDWelwnwJbHcWS1dXMpYe-ibH38zxY" },
};

// ─── JSON-LD : Organisation + LocalBusiness + WebSite ───────────────────────
const jsonLdMain = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "SettaTech",
      alternateName: "Qonixs",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/assets/images/hero/hero-wifi.jpg`,
        width: 1920,
        height: 700,
      },
      sameAs: [
        "https://www.facebook.com/profile.php?id=61586069708201",
        "https://www.instagram.com/qonixs.ma/",
        "https://wa.me/212660248290",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+212660248290",
        contactType: "customer service",
        areaServed: "MA",
        availableLanguage: ["French", "Arabic"],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#localbusiness`,
      name: "Qonixs — Solutions Réseau Maroc",
      alternateName: "SettaTech Qonixs",
      description:
        "Qonixs, service de SettaTech, spécialisé en équipements réseau, internet par satellite, Wi-Fi collectif et vidéosurveillance IP au Maroc. Support technique 7j/7, garantie 2 ans, livraison express 24-48h.",
      url: BASE_URL,
      telephone: "+212660248290",
      email: "contact@qonixs.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "BD QADI AYAD N° 52 SMALAA",
        addressLocality: "Settat",
        postalCode: "26000",
        addressCountry: "MA",
        addressRegion: "Chaouia-Ouardigha",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.0014,
        longitude: -7.6199,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "10:00",
          closes: "16:00",
        },
      ],
      priceRange: "$$",
      currenciesAccepted: "MAD",
      paymentAccepted: "Cash, CMI, Virement bancaire",
      areaServed: [
        { "@type": "City", name: "Settat" },
        { "@type": "City", name: "Casablanca" },
        { "@type": "City", name: "Rabat" },
        { "@type": "City", name: "Marrakech" },
        { "@type": "City", name: "Agadir" },
        { "@type": "City", name: "Fès" },
        { "@type": "Country", name: "Maroc" },
      ],
      sameAs: [
        "https://www.facebook.com/profile.php?id=61586069708201",
        "https://www.instagram.com/qonixs.ma/",
        "https://wa.me/212660248290",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Solutions Internet & Réseau",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Internet par Satellite au Maroc" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wi-Fi Collectif Hôtels & Résidences" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vidéosurveillance IP" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Infrastructure Réseau Entreprises" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Routeurs WiFi 6 TP-Link" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Points d'accès Ruijie Reyee" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Caméras IP Tapo" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Switches réseau TP-Link" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Qonixs",
      description: "Solutions Internet & Réseau au Maroc par SettaTech",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "fr-MA",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/recherche?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

// ─── JSON-LD : FAQPage ───────────────────────────────────────────────────────
const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quelle est la différence entre WiFi 5 et WiFi 6 ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le WiFi 6 (802.11ax) offre une vitesse jusqu'à 3 fois plus rapide que le WiFi 5, une meilleure efficacité énergétique, une capacité accrue pour gérer plusieurs appareils simultanément et une latence réduite. C'est idéal pour les hôtels, résidences et bureaux avec beaucoup d'utilisateurs connectés en même temps.",
      },
    },
    {
      "@type": "Question",
      name: "Livrez-vous à Casablanca, Rabat et Marrakech ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Qonixs by SettaTech livre partout au Maroc en 24-48h, y compris Casablanca, Rabat, Marrakech, Agadir, Fès, Settat et toutes les autres villes. La livraison est disponible via nos partenaires logistiques.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le meilleur routeur WiFi pour un hôtel au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour les hôtels, nous recommandons nos solutions WiFi Mesh (Deco X60) combinées avec des points d'accès Ruijie Reyee pour une couverture maximale. Pour les grandes structures, les points d'accès Ruijie RAP2266 offrent une couverture professionnelle avec portail captif intégré. Contactez-nous pour une consultation gratuite.",
      },
    },
    {
      "@type": "Question",
      name: "Proposez-vous un support technique après la vente ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Qonixs offre un support technique gratuit 7 jours sur 7. Nos techniciens certifiés vous accompagnent par téléphone (0660248290), WhatsApp ou email pour l'installation, la configuration et le dépannage de tous vos équipements réseau.",
      },
    },
    {
      "@type": "Question",
      name: "Avez-vous des solutions internet par satellite pour les zones rurales au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Qonixs by SettaTech distribue et installe des solutions d'internet par satellite pour les zones où la couverture ADSL ou fibre est limitée ou inexistante. C'est idéal pour les zones rurales, les camps de chantier et les zones montagneuses au Maroc. Consultez notre page tarifs-satellite pour plus de détails.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle garantie offrez-vous sur les produits TP-Link et Ruijie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tous nos produits TP-Link et Ruijie sont 100% authentiques et bénéficient de la garantie officielle constructeur de 2 ans. Vous pouvez également retourner ou échanger vos produits sous 14 jours si vous n'êtes pas satisfait.",
      },
    },
    {
      "@type": "Question",
      name: "Proposez-vous des services d'installation réseau pour les entreprises ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, SettaTech propose des services complets d'installation réseau pour les entreprises, hôtels, résidences et opérateurs télécoms : câblage structuré, installation d'armoires réseau, déploiement GPON, configuration de switches managés et points d'accès WiFi. Demandez un devis gratuit.",
      },
    },
    {
      "@type": "Question",
      name: "Comment contacter Qonixs pour un devis d'installation WiFi ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vous pouvez nous contacter par téléphone au +212 660 248 290, via WhatsApp (wa.me/212660248290), par email à contact@qonixs.com, ou en nous rendant visite à notre boutique : BD Qadi Ayad N°52, Smalaa, Settat, Maroc. Notre équipe vous répond 7j/7.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdMain) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

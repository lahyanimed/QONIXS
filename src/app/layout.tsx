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
    template: "%s | Qonixs Maroc",
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
  verification: {
    google: "VOTRE_CODE_GOOGLE_SEARCH_CONSOLE",
  },
};

// JSON-LD Structured Data — Organisation + LocalBusiness
const jsonLd = {
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
      },
      sameAs: [
        "https://www.facebook.com/profile.php?id=61586069708201",
        "https://www.instagram.com/qonixs.ma/",
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
      description:
        "Qonixs, service de SettaTech, spécialisé en équipements réseau, internet par satellite, Wi-Fi collectif et vidéosurveillance IP au Maroc.",
      url: BASE_URL,
      telephone: "+212660248290",
      email: "contact@qonixs.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "BD QADI AYAD N° 52 SMALAA",
        addressLocality: "Settat",
        addressCountry: "MA",
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
          opens: "09:00",
          closes: "18:00",
        },
      ],
      priceRange: "$$",
      currenciesAccepted: "MAD",
      paymentAccepted: "Cash, CMI, Virement",
      areaServed: {
        "@type": "Country",
        name: "Maroc",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Solutions Internet & Réseau",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Internet par Satellite au Maroc" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wi-Fi Collectif Hôtels & Résidences" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vidéosurveillance IP" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Infrastructure Réseau Entreprises" } },
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
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/recherche?q={search_term_string}` },
        "query-input": "required name=search_term_string",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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

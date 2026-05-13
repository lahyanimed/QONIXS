import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services IT — Wi-Fi, Satellite, Surveillance & Réseau au Maroc",
  description:
    "Services professionnels Qonixs by SettaTech : Wi-Fi Hospitality pour hôtels & résidences, Internet par satellite, vidéosurveillance IP, infrastructure réseau LAN/VLAN au Maroc. Devis gratuit.",
  keywords: [
    "services réseau Maroc", "Wi-Fi hôtel Maroc", "Wi-Fi hospitality Maroc",
    "internet satellite Maroc", "vidéosurveillance IP Maroc", "infrastructure réseau Maroc",
    "Wi-Fi collectif résidence Maroc", "IT Manager Maroc", "SettaTech services",
    "installation réseau Maroc", "Wi-Fi Airbnb Maroc", "Wi-Fi complexe touristique Maroc",
  ],
  alternates: { canonical: "https://qonixs.com/services" },
  openGraph: {
    title: "Services IT — Wi-Fi, Satellite & Réseau au Maroc | Qonixs",
    description: "Wi-Fi Hospitality, Internet Satellite, Vidéosurveillance IP, Infrastructure Réseau — SettaTech / Qonixs au Maroc.",
    url: "https://qonixs.com/services",
    images: [{ url: "/assets/images/services/service-wifi.jpg", width: 700, height: 440, alt: "Services Wi-Fi et réseau au Maroc Qonixs SettaTech" }],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

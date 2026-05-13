import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Internet par Satellite au Maroc — Tarifs & Forfaits | Qonixs",
  description:
    "Forfaits Internet par satellite au Maroc dès 299 Dhs HT/mois. GO 50, GO 100, GO 200 — couverture haut débit partout au Maroc, zones rurales et montagneuses incluses. Qonixs by SettaTech.",
  keywords: [
    "internet satellite Maroc", "forfait satellite Maroc", "internet zones rurales Maroc",
    "satellite haut débit Maroc", "couverture internet Maroc", "SettaTech satellite",
    "Qonixs satellite", "internet campagne Maroc", "internet montagne Maroc",
    "abonnement satellite Maroc", "prix satellite Maroc", "installation satellite Maroc",
  ],
  alternates: { canonical: "https://qonixs.com/tarifs-satellite" },
  openGraph: {
    title: "Internet par Satellite au Maroc — Forfaits dès 299 Dhs/mois",
    description: "Connectez-vous partout au Maroc avec nos forfaits Internet satellite. GO 50, GO 100, GO 200. Qonixs by SettaTech.",
    url: "https://qonixs.com/tarifs-satellite",
    images: [{ url: "/assets/images/services/service-satellite.jpg", width: 700, height: 440, alt: "Internet par satellite au Maroc Qonixs SettaTech" }],
  },
};

export default function TarifsSatelliteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

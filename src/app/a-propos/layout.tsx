import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Qonixs by SettaTech | Solutions Réseau au Maroc",
  description:
    "Qonixs est le service réseau de SettaTech, entreprise marocaine basée à Settat. Spécialiste en Wi-Fi, internet par satellite, vidéosurveillance IP et infrastructure réseau au Maroc depuis 2019.",
  keywords: [
    "SettaTech Maroc", "Qonixs SettaTech", "à propos Qonixs", "entreprise réseau Maroc",
    "IT Settat Maroc", "solutions internet Maroc", "Wi-Fi professionnel Maroc",
    "partenaire réseau Maroc", "technologie information Maroc",
  ],
  alternates: { canonical: "https://qonixs.com/a-propos" },
  openGraph: {
    title: "À propos — Qonixs by SettaTech | Solutions Réseau au Maroc",
    description: "SettaTech est l'entreprise marocaine derrière Qonixs, votre spécialiste en Wi-Fi, satellite et réseau au Maroc.",
    url: "https://qonixs.com/a-propos",
  },
};

export default function AProposLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

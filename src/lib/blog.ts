export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  dateISO: string;
  image: string;
  imageAlt: string;
  badge?: string;
  content: string;
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "guide-routeur-wifi6-maroc-2026",
    title: "Guide complet : Quel routeur WiFi 6 choisir au Maroc en 2026 ?",
    description: "Comparatif des meilleurs routeurs WiFi 6 disponibles au Maroc — critères de sélection, top 5 et FAQ.",
    category: "Guide d'achat",
    readTime: "8 min",
    date: "10 mai 2026",
    dateISO: "2026-05-10",
    image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Routeur WiFi 6 moderne sur un bureau",
    content: `<p>Le WiFi 6 (802.11ax) est devenu le standard incontournable en 2026 pour les foyers, bureaux et établissements hôteliers au Maroc.</p><h2>Pourquoi passer au WiFi 6 ?</h2><ul><li><strong>Débit théorique jusqu'à 9,6 Gbit/s</strong></li><li><strong>OFDMA</strong> — plusieurs appareils simultanément</li><li><strong>MU-MIMO 8×8</strong></li><li><strong>TWT</strong> — prolonge l'autonomie IoT</li></ul><h2>Notre top 3 pour le Maroc en 2026</h2><h3>🥇 TP-Link Archer AX73 — Meilleur global</h3><p>AX5400, 6 antennes, MU-MIMO 4×4. <strong>Prix : 899 MAD</strong></p><h3>🥈 TP-Link Archer AX55 — Meilleur rapport qualité/prix</h3><p>AX3000, port WAN 2,5 GbE. <strong>Prix : 649 MAD</strong></p><h3>🥉 TP-Link Archer BE220 — WiFi 7</h3><p>BE3600, futur-proof. <strong>Prix : 1 099 MAD</strong></p>`,
  },
  {
    slug: "wifi-mesh-vs-routeur-traditionnel",
    title: "WiFi Mesh vs Routeur Traditionnel : Lequel choisir ?",
    description: "Avantages et inconvénients des deux technologies. Quand opter pour un système Mesh ?",
    category: "Comparatif",
    readTime: "6 min",
    date: "8 mai 2026",
    dateISO: "2026-05-08",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Système WiFi Mesh multi-unités dans une maison moderne",
    content: `<p>La question revient souvent : vaut-il mieux acheter un bon routeur WiFi ou investir dans un système Mesh ?</p><h2>Tableau comparatif</h2><table><thead><tr><th>Critère</th><th>Routeur Seul</th><th>Système Mesh</th></tr></thead><tbody><tr><td>Budget</td><td>✅ Moins cher</td><td>❌ Plus onéreux</td></tr><tr><td>Surface ≤ 150 m²</td><td>✅ Parfait</td><td>⚠️ Surdimensionné</td></tr><tr><td>Surface ≥ 200 m²</td><td>❌ Angles morts</td><td>✅ Idéal</td></tr><tr><td>Itinérance transparente</td><td>❌ Non</td><td>✅ Oui</td></tr></tbody></table><h3>Notre recommandation Mesh : TP-Link Deco X60 (Pack 3)</h3><p>Couvre jusqu'à 650 m², HomeShield intégré. <strong>Prix : 1 799 MAD</strong></p>`,
  },
  {
    slug: "wifi-hotel-maroc-guide-complet",
    title: "WiFi pour hôtels au Maroc : Guide complet du gestionnaire",
    description: "Comment déployer un WiFi de qualité dans votre hôtel ou complexe touristique au Maroc.",
    category: "B2B",
    readTime: "10 min",
    date: "5 mai 2026",
    dateISO: "2026-05-05",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Hall d'hôtel moderne au Maroc avec connexion WiFi",
    content: `<p>Le WiFi est devenu la première attente des voyageurs dans les hôtels marocains.</p><h2>Les erreurs fréquentes des hôtels marocains</h2><ul><li><strong>Un seul routeur pour tout l'hôtel</strong></li><li><strong>Matériel grand public</strong> — limité à 30 connexions</li><li><strong>Pas de portail captif</strong></li></ul><h2>Points d'accès recommandés</h2><ul><li><strong>Ruijie RG-RAP2266 (AX3000)</strong> — 1 099 MAD</li><li><strong>TP-Link EAP613 (AX1800)</strong> — 1 050 MAD</li></ul><h2>Dimensionnement</h2><ul><li><strong>Riad 10–20 chambres</strong> : 4–6 AP, budget 8 000–15 000 MAD</li><li><strong>Hôtel 30–60 chambres</strong> : 15–25 AP, budget 30 000–55 000 MAD</li></ul>`,
  },
  {
    slug: "internet-satellite-maroc-zones-rurales",
    title: "Internet par satellite au Maroc : Solutions pour zones rurales",
    description: "Tout sur l'internet satellite au Maroc — couverture, tarifs, installation et alternatives.",
    category: "Satellite",
    readTime: "7 min",
    date: "2 mai 2026",
    dateISO: "2026-05-02",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Antenne satellite et ciel étoilé pour connectivité rurale",
    content: `<p>Des millions de Marocains en zones rurales n'ont pas accès à une connexion internet filaire fiable.</p><h2>Technologies disponibles</h2><h3>Satellite GEO</h3><ul><li>Débits : 10–50 Mbps, Latence : 600–800 ms</li><li>Tarif : 500–2 000 MAD/mois</li></ul><h3>Starlink (LEO)</h3><ul><li>Débits : 50–200 Mbps, Latence : 20–50 ms</li><li>Tarif : ~120 USD/mois résidentiel</li></ul><h2>Cas d'usage</h2><ul><li>Fermes et exploitations agricoles</li><li>Établissements scolaires ruraux</li><li>Stations touristiques de montagne</li><li>Chantiers isolés</li></ul>`,
  },
  {
    slug: "installer-camera-ip-tutoriel",
    title: "Installation caméras IP Tapo : Tutoriel étape par étape",
    description: "Guide pratique pour installer et configurer vos caméras IP Tapo à la maison ou au bureau.",
    category: "Tutoriel",
    readTime: "12 min",
    date: "28 avril 2026",
    dateISO: "2026-04-28",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Installation d'une caméra IP de surveillance à domicile",
    content: `<p>Les caméras IP Tapo sont parmi les plus vendues au Maroc pour leur simplicité d'installation.</p><h2>Étapes d'installation</h2><ol><li>Télécharger l'app Tapo (iOS/Android)</li><li>Choisir l'emplacement (2–3 m de hauteur)</li><li>Fixer le support mural</li><li>Brancher et configurer via l'app</li><li>Activer détection de mouvement et enregistrement</li></ol><h2>Enregistrement</h2><ul><li><strong>Carte microSD</strong> jusqu'à 512 Go — local, sans abonnement</li><li><strong>Tapo Care cloud</strong> — 30 jours, ~3 USD/mois</li></ul><h2>Problèmes courants</h2><ul><li>Ne se connecte pas : utiliser réseau 2,4 GHz</li><li>Image floue la nuit : nettoyer l'objectif</li></ul>`,
  },
  {
    slug: "tp-link-vs-ruijie-comparatif",
    title: "TP-Link vs Ruijie Reyee : Quel fabricant choisir au Maroc ?",
    description: "Comparatif complet entre les deux marques — qualité, prix, support et cas d'usage.",
    category: "Comparatif",
    readTime: "9 min",
    date: "25 avril 2026",
    dateISO: "2026-04-25",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Comparaison équipements réseau TP-Link et Ruijie Reyee",
    content: `<p>TP-Link et Ruijie Reyee sont les deux marques les plus distribuées par SettaTech au Maroc.</p><h2>Recommandations par usage</h2><h3>Usage domestique</h3><p>→ <strong>TP-Link</strong> : gamme plus large, app plus simple, prix accessibles.</p><h3>Petite et moyenne entreprise</h3><p>→ <strong>TP-Link Omada</strong> : écosystème complet avec contrôleur centralisé gratuit.</p><h3>Hôtels et résidences</h3><p>→ <strong>Ruijie Reyee pour les AP</strong> (modèles IP68) + <strong>TP-Link pour les switches</strong>.</p><h3>Opérateurs télécom</h3><p>→ <strong>Ruijie Networks</strong> — SettaTech est partenaire officiel pour IAM et Orange Maroc.</p>`,
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}

export const categoryColors: Record<string, string> = {
  "Guide d'achat": "bg-primary/10 text-primary",
  Comparatif: "bg-orange-100 text-orange-600",
  B2B: "bg-purple-100 text-purple-600",
  Satellite: "bg-sky-100 text-sky-600",
  Tutoriel: "bg-green-100 text-green-600",
};

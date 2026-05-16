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
    content: `
<p>Le WiFi 6 (802.11ax) est devenu le standard incontournable en 2026 pour les foyers, bureaux et établissements hôteliers au Maroc.</p>
<h2>Pourquoi passer au WiFi 6 ?</h2>
<ul>
  <li><strong>Débit théorique jusqu'à 9,6 Gbit/s</strong> — jusqu'à 3× plus rapide que le WiFi 5</li>
  <li><strong>OFDMA</strong> — permet de servir plusieurs appareils simultanément</li>
  <li><strong>MU-MIMO 8×8</strong> — jusqu'à 8 flux simultanés pour les réseaux denses</li>
  <li><strong>TWT (Target Wake Time)</strong> — prolonge l'autonomie des appareils IoT</li>
  <li><strong>BSS Coloring</strong> — réduit les interférences entre réseaux voisins</li>
</ul>
<h2>Notre top 3 pour le Maroc en 2026</h2>
<h3>🥇 TP-Link Archer AX73 — Meilleur global</h3>
<p>AX5400, 6 antennes haute performance, MU-MIMO 4×4. <strong>Prix : 899 MAD</strong></p>
<h3>🥈 TP-Link Archer AX55 — Meilleur rapport qualité/prix</h3>
<p>AX3000, port WAN 2,5 GbE, OneMesh compatible. <strong>Prix : 649 MAD</strong></p>
<h3>🥉 TP-Link Archer BE220 — Meilleur futur-proof</h3>
<p>WiFi 7 BE3600, latence ultra-faible. <strong>Prix : 1 099 MAD</strong></p>
`,
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
    content: `
<p>La question revient souvent chez nos clients : vaut-il mieux acheter un bon routeur WiFi ou investir dans un système Mesh ?</p>
<h2>Avantages du WiFi Mesh</h2>
<ul>
  <li><strong>Couverture sans angle mort</strong> — chaque unité renforce le signal</li>
  <li><strong>Itinérance transparente (roaming)</strong> — transition automatique</li>
  <li><strong>Un seul réseau</strong> — pas besoin de gérer plusieurs SSIDs</li>
  <li><strong>Évolutif</strong> — ajoutez des unités selon vos besoins</li>
</ul>
<h2>Notre recommandation Mesh : TP-Link Deco X60 (Pack 3)</h2>
<p>WiFi 6, couvre jusqu'à 650 m² avec 3 unités, application Deco simple. <strong>Prix : 1 799 MAD</strong></p>
`,
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
    content: `
<p>Le WiFi est devenu la première attente des voyageurs dans les hôtels marocains. Un WiFi défaillant détruit l'expérience client.</p>
<h2>Architecture recommandée pour un hôtel</h2>
<ul>
  <li><strong>Ruijie RG-RAP2266 (AX3000)</strong> — Excellent pour couloirs et chambres, 1 099 MAD</li>
  <li><strong>TP-Link EAP613 (AX1800)</strong> — Compatible Omada avec portail captif, 1 050 MAD</li>
  <li><strong>Ruijie RG-RAP6262(G) (IP68)</strong> — Zones extérieures (piscine, terrasse)</li>
</ul>
<h2>Dimensionnement</h2>
<p>Petit hôtel (10–20 chambres) : 4–6 AP, budget matériel 8 000–15 000 MAD. Grand complexe (100+ chambres) : sur devis SettaTech.</p>
`,
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
    content: `
<p>Des millions de Marocains en zones rurales n'ont pas accès à une connexion internet filaire fiable. L'internet par satellite est souvent la seule solution.</p>
<h2>Les technologies disponibles au Maroc</h2>
<h3>Satellite Géostationnaire (GEO)</h3>
<ul>
  <li>Débits : 10–50 Mbps, Latence : 600–800 ms</li>
  <li>Couverture : tout le Maroc, Sahara inclus</li>
  <li>Tarif : 500–2 000 MAD/mois</li>
</ul>
<h3>Satellite Basse Orbite (LEO) — Starlink</h3>
<ul>
  <li>Débits : 50–200 Mbps, Latence : 20–50 ms</li>
  <li>Disponibilité au Maroc : partielle en 2026, en expansion</li>
</ul>
<h2>Faire appel à SettaTech</h2>
<p>SettaTech, distributeur officiel d'internet par satellite pour le compte de Nortis Télécom, réalise des études de faisabilité gratuites.</p>
`,
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
    content: `
<p>Les caméras IP Tapo (TP-Link) sont parmi les plus vendues au Maroc pour leur simplicité et leur rapport qualité/prix.</p>
<h2>Étapes d'installation</h2>
<ol>
  <li>Téléchargez l'application <strong>Tapo</strong> sur iOS ou Android</li>
  <li>Choisissez l'emplacement optimal (entrée, salon, parking)</li>
  <li>Fixez la caméra avec le gabarit inclus</li>
  <li>Configurez via l'app : appuyez sur + → Ajouter un appareil</li>
  <li>Connectez au réseau WiFi 2,4 GHz</li>
</ol>
<h2>Enregistrement</h2>
<p>Carte microSD 128 Go (~80–120 MAD) pour 7–15 jours d'enregistrement, ou Tapo Care cloud (~3 USD/mois).</p>
<p>SettaTech propose des services d'installation clé en main partout au Maroc.</p>
`,
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
    content: `
<p>TP-Link et Ruijie Reyee sont les deux marques les plus distribuées par SettaTech au Maroc.</p>
<h2>Nos recommandations par usage</h2>
<p><strong>Usage domestique</strong> → TP-Link sans hésitation : gamme plus large, application plus simple.</p>
<p><strong>PME</strong> → TP-Link Omada : écosystème complet avec contrôleur centralisé gratuit.</p>
<p><strong>Hôtels et résidences</strong> → Ruijie Reyee pour les AP (robustesse, IP68) + TP-Link pour les switches.</p>
<p><strong>Opérateurs télécom</strong> → Ruijie Networks (GPON, OLT) — SettaTech est distributeur officiel d'internet par satellite pour le compte de Nortis Télécom.</p>
<h2>Conclusion</h2>
<p>Les deux marques sont de qualité. TP-Link pour 80% des besoins, Ruijie pour les projets hôteliers et télécom.</p>
`,
  },
  {
    slug: "internet-collectif-residence-maroc",
    title: "Internet collectif pour résidences au Maroc : La solution intelligente",
    description: "Découvrez comment l'internet collectif transforme la connectivité dans les résidences au Maroc — débit jusqu'à 1 Gbit/s, WiFi unifié partout et collecte simplifiée des charges.",
    category: "B2B",
    readTime: "6 min",
    date: "16 mai 2026",
    dateISO: "2026-05-16",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Résidence moderne au Maroc avec connexion WiFi collectif",
    content: `
<p>Dans les résidences et immeubles au Maroc, chaque résident paie son propre abonnement internet — souvent pour un débit médiocre et un tarif élevé. L'internet collectif change complètement la donne.</p>
<h2>Avantage n°1 : Un débit exceptionnel pour un prix imbattable</h2>
<p>Grâce à la mutualisation, l'internet collectif offre des débits allant <strong>jusqu'à 1 Gbit/s à partir de seulement 100 dirhams par mois</strong>.</p>
<ul>
  <li><strong>Streaming 4K</strong> sans interruption pour toute la famille</li>
  <li><strong>Télétravail</strong> fluide avec visioconférences en HD</li>
  <li><strong>Gaming en ligne</strong> avec une latence minimale</li>
</ul>
<h2>Avantage n°2 : Un outil puissant pour le syndic</h2>
<p>L'internet collectif est un levier financier pour le syndic :</p>
<ul>
  <li><strong>Collecte simplifiée des charges</strong> — les résidents paient en même temps que leurs charges de syndic.</li>
  <li><strong>Meilleure adhésion</strong> — un résident préfère payer 200 dirhams de charges de syndic incluant internet haut débit plutôt que 100 dirhams pour un opérateur médiocre (+ 100 dirhams de syndic séparément).</li>
  <li><strong>Valeur ajoutée</strong> — renforce l'image de la résidence et facilite la commercialisation.</li>
</ul>
<h2>Avantage n°3 : Un WiFi unifié dans toute la résidence</h2>
<p>Les résidents <strong>se connectent avec le même code WiFi partout dans la résidence</strong> :</p>
<ul>
  <li>Dans leur appartement, à tous les étages</li>
  <li>Dans les parties communes et le hall d'entrée</li>
  <li>Au parking et dans les espaces extérieurs</li>
  <li>Chez le voisin avec le même code — idéal pour les visites</li>
</ul>
<h2>Tarification indicative</h2>
<table>
  <thead><tr><th>Nombre d'appartements</th><th>Tarif mensuel / appt</th><th>Débit garanti</th></tr></thead>
  <tbody>
    <tr><td>10–20 appartements</td><td>150–200 MAD</td><td>100–200 Mbps/appt</td></tr>
    <tr><td>20–50 appartements</td><td>100–150 MAD</td><td>200–500 Mbps/appt</td></tr>
    <tr><td>50–100 appartements</td><td>80–120 MAD</td><td>500 Mbps–1 Gbps/appt</td></tr>
    <tr><td>100+ appartements</td><td>Sur devis</td><td>Jusqu'à 1 Gbps/appt</td></tr>
  </tbody>
</table>
<h2>Contactez SettaTech pour votre résidence</h2>
<p>SettaTech, distributeur officiel d'internet par satellite pour le compte de Nortis Télécom, intervient dans toutes les villes du Maroc. Étude gratuite sur demande.</p>
`,
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

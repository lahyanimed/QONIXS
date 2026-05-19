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
  content: string; // HTML string
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "guide-routeur-wifi6-maroc-2026",
    title: "Guide complet : Quel routeur WiFi 6 choisir au Maroc en 2026 ?",
    description:
      "Comparatif des meilleurs routeurs WiFi 6 disponibles au Maroc — critères de sélection, top 5 et FAQ.",
    category: "Guide d'achat",
    readTime: "8 min",
    date: "10 mai 2026",
    dateISO: "2026-05-10",
    image:
      "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Routeur WiFi 6 moderne sur un bureau",
    content: `
<p>Le WiFi 6 (802.11ax) est devenu le standard incontournable en 2026 pour les foyers, bureaux et établissements hôteliers au Maroc. Mais face à la multitude de modèles disponibles, comment choisir ?</p>

<h2>Pourquoi passer au WiFi 6 ?</h2>
<p>Le WiFi 6 apporte plusieurs améliorations majeures par rapport au WiFi 5 :</p>
<ul>
  <li><strong>Débit théorique jusqu'à 9,6 Gbit/s</strong> — jusqu'à 3× plus rapide que le WiFi 5</li>
  <li><strong>OFDMA</strong> — permet de servir plusieurs appareils simultanément sans perte de performances</li>
  <li><strong>MU-MIMO 8×8</strong> — jusqu'à 8 flux simultanés pour les réseaux denses</li>
  <li><strong>TWT (Target Wake Time)</strong> — prolonge l'autonomie des appareils IoT jusqu'à 3×</li>
  <li><strong>BSS Coloring</strong> — réduit les interférences entre réseaux voisins</li>
</ul>

<h2>Les 5 critères pour bien choisir</h2>

<h3>1. La surface à couvrir</h3>
<p>Pour un appartement &lt; 100 m² : un routeur simple suffit (Archer AX23). Pour une villa ou un bureau de 200–400 m² : optez pour l'Archer AX73 ou un système Mesh. Au-delà, pensez aux points d'accès professionnels Omada ou Ruijie Reyee.</p>

<h3>2. Le nombre d'appareils connectés</h3>
<p>Comptez tous vos appareils : smartphones, PC, TV, tablettes, caméras, imprimantes, IoT. Si vous dépassez 20 appareils, choisissez un modèle AX3000 ou plus avec MU-MIMO 4×4 minimum.</p>

<h3>3. Le type de connexion Internet</h3>
<p>Si vous avez une fibre optique &gt; 500 Mbps, assurez-vous que le routeur dispose d'un port WAN 2,5 GbE (ex : Archer AX55 Pro, BE220) pour ne pas brider votre débit.</p>

<h3>4. Tri-band ou Dual-band ?</h3>
<p>Pour un usage domestique standard : le Dual-band suffit. Pour un usage intensif (streaming 4K, gaming, télétravail simultané) ou un réseau Mesh, le Tri-band (Deco XE75) est recommandé car la 3ème bande dédiée au backhaul évite la congestion.</p>

<h3>5. Budget</h3>
<p>Notre recommandation par budget :</p>
<ul>
  <li><strong>≤ 500 MAD</strong> : TP-Link Archer AX23 (WiFi 6 AX1800) — excellent rapport qualité/prix</li>
  <li><strong>500–900 MAD</strong> : TP-Link Archer AX55 (WiFi 6 AX3000) — le meilleur milieu de gamme</li>
  <li><strong>900–1 200 MAD</strong> : TP-Link Archer AX73 (WiFi 6 AX5400) — pour les grandes surfaces</li>
  <li><strong>&gt; 1 000 MAD</strong> : TP-Link Archer BE220 (WiFi 7 BE3600) — la technologie de demain</li>
</ul>

<h2>Notre top 3 pour le Maroc en 2026</h2>

<h3>🥇 TP-Link Archer AX73 — Meilleur global</h3>
<p>AX5400, 6 antennes haute performance, MU-MIMO 4×4, port USB 3.0 pour partage NAS. Idéal pour les familles nombreuses et les petites entreprises. <strong>Prix : 899 MAD</strong></p>

<h3>🥈 TP-Link Archer AX55 — Meilleur rapport qualité/prix</h3>
<p>AX3000, port WAN 2,5 GbE, OneMesh compatible. Le choix parfait pour la fibre très haut débit. <strong>Prix : 649 MAD</strong></p>

<h3>🥉 TP-Link Archer BE220 — Meilleur futur-proof</h3>
<p>WiFi 7 BE3600, compatible EasyMesh, latence ultra-faible. Investissez pour les 5 prochaines années. <strong>Prix : 1 099 MAD</strong></p>

<h2>Questions fréquentes</h2>

<h3>Mon opérateur Maroc Telecom/Orange supporte-t-il le WiFi 6 ?</h3>
<p>Oui — le WiFi 6 est une technologie côté équipement (routeur) et non côté opérateur. Vous pouvez utiliser n'importe quel routeur WiFi 6 avec votre box opérateur en mode bridge ou en remplacement directe si votre box supporte le mode modem.</p>

<h3>WiFi 6 vs WiFi 6E — quelle différence ?</h3>
<p>Le WiFi 6E ajoute la bande 6 GHz (disponible au Maroc). Elle offre des débits encore plus élevés et moins d'interférences, mais peu d'appareils la supportent encore en 2026. Sauf si vous avez des besoins très spécifiques, restez sur WiFi 6 standard.</p>

<h3>Dois-je garder ma box opérateur ?</h3>
<p>Si votre connexion passe par ADSL ou VDSL, vous devez garder la box opérateur en mode modem et brancher votre routeur WiFi 6 dessus. Pour la fibre, certains opérateurs permettent de passer en mode bridge pour n'utiliser que votre routeur.</p>
    `,
  },
  {
    slug: "wifi-mesh-vs-routeur-traditionnel",
    title: "WiFi Mesh vs Routeur Traditionnel : Lequel choisir ?",
    description:
      "Avantages et inconvénients des deux technologies. Quand opter pour un système Mesh ?",
    category: "Comparatif",
    readTime: "6 min",
    date: "8 mai 2026",
    dateISO: "2026-05-08",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Système WiFi Mesh multi-unités dans une maison moderne",
    content: `
<p>La question revient souvent chez nos clients : vaut-il mieux acheter un bon routeur WiFi ou investir dans un système Mesh ? La réponse dépend de votre situation. Voici un guide clair pour trancher.</p>

<h2>Qu'est-ce qu'un système WiFi Mesh ?</h2>
<p>Un système Mesh (ou réseau maillé) est composé de plusieurs unités qui communiquent entre elles pour former un seul réseau WiFi unifié. Contrairement à l'extendeur (répéteur), les unités Mesh utilisent le même SSID (nom de réseau) et assurent une transition automatique entre les unités sans déconnexion.</p>

<h2>Avantages du WiFi Mesh</h2>
<ul>
  <li><strong>Couverture sans angle mort</strong> — chaque unité renforce le signal là où il est le plus faible</li>
  <li><strong>Itinérance transparente (roaming)</strong> — votre téléphone bascule automatiquement vers l'unité la plus proche</li>
  <li><strong>Un seul réseau</strong> — pas besoin de gérer "WiFi_salon" et "WiFi_chambre"</li>
  <li><strong>Évolutif</strong> — ajoutez des unités au fur et à mesure de vos besoins</li>
  <li><strong>Gestion simplifiée</strong> — application mobile intuitive (Deco App pour TP-Link)</li>
</ul>

<h2>Inconvénients du WiFi Mesh</h2>
<ul>
  <li><strong>Prix plus élevé</strong> — un pack 2 unités Deco X60 coûte 1 799 MAD vs 649 MAD pour un routeur AX55</li>
  <li><strong>Dépendance à l'app</strong> — configuration moins fine que les routeurs traditionnels</li>
  <li><strong>Perte de débit en mode sans fil</strong> — si les unités communiquent en WiFi (pas en câble), une bande est utilisée pour le backhaul</li>
</ul>

<h2>Avantages du routeur traditionnel</h2>
<ul>
  <li><strong>Rapport qualité/prix imbattable</strong> — meilleures performances par euro investi pour une surface &lt; 150 m²</li>
  <li><strong>Configuration avancée</strong> — VPN, QoS, pare-feu, VLAN accessibles depuis l'interface web</li>
  <li><strong>Puissance concentrée</strong> — signal maximal dans un rayon de 80–120 m²</li>
</ul>

<h2>Inconvénients du routeur traditionnel</h2>
<ul>
  <li><strong>Zones d'ombre</strong> — murs épais, étages multiples, grandes superficies créent des angles morts</li>
  <li><strong>Signal décroissant avec la distance</strong> — au-delà de 15–20 mètres, les performances chutent</li>
  <li><strong>Extendeurs nécessaires</strong> — les répéteurs créent un 2ème réseau et réduisent le débit de 50 %</li>
</ul>

<h2>Notre tableau comparatif</h2>
<table>
  <thead>
    <tr><th>Critère</th><th>Routeur Seul</th><th>Système Mesh</th></tr>
  </thead>
  <tbody>
    <tr><td>Budget</td><td>✅ Moins cher</td><td>❌ Plus onéreux</td></tr>
    <tr><td>Surface ≤ 150 m²</td><td>✅ Parfait</td><td>⚠️ Surdimensionné</td></tr>
    <tr><td>Surface ≥ 200 m²</td><td>❌ Angles morts</td><td>✅ Idéal</td></tr>
    <tr><td>Configuration avancée</td><td>✅ Complète</td><td>⚠️ Limitée</td></tr>
    <tr><td>Itinérance transparente</td><td>❌ Non</td><td>✅ Oui</td></tr>
    <tr><td>Évolutivité</td><td>❌ Limitée</td><td>✅ Modulaire</td></tr>
  </tbody>
</table>

<h2>Nos recommandations</h2>

<h3>Choisissez un routeur si…</h3>
<ul>
  <li>Votre logement fait moins de 150 m² sur un seul niveau</li>
  <li>Vous avez besoin de fonctions avancées (VPN, QoS par appareil, VLAN)</li>
  <li>Votre budget est &lt; 800 MAD</li>
</ul>

<h3>Choisissez un système Mesh si…</h3>
<ul>
  <li>Votre maison fait plus de 200 m² ou sur 2 étages</li>
  <li>Vous vous déplacez souvent (smartphones, tablettes) dans toute la maison</li>
  <li>Vous gérez un hôtel, une résidence ou un bureau avec plusieurs zones</li>
  <li>Vous voulez une gestion simple via application mobile</li>
</ul>

<h3>Notre recommandation Mesh : TP-Link Deco X60 (Pack 3)</h3>
<p>Le système Mesh WiFi 6 le plus populaire au Maroc. Couvre jusqu'à 650 m² avec 3 unités, HomeShield intégré, application Deco simple. <strong>Prix : 1 799 MAD</strong></p>
    `,
  },
  {
    slug: "wifi-hotel-maroc-guide-complet",
    title: "WiFi pour hôtels au Maroc : Guide complet du gestionnaire",
    description:
      "Comment déployer un WiFi de qualité dans votre hôtel ou complexe touristique au Maroc.",
    category: "B2B",
    readTime: "10 min",
    date: "5 mai 2026",
    dateISO: "2026-05-05",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Hall d'hôtel moderne au Maroc avec connexion WiFi",
    content: `
<p>Le WiFi est devenu la première attente des voyageurs dans les hôtels marocains, avant la piscine et le petit-déjeuner selon les dernières études. Un WiFi défaillant détruit l'expérience client et génère des avis négatifs. Ce guide vous explique comment concevoir une infrastructure WiFi professionnelle pour votre établissement.</p>

<h2>Les erreurs fréquentes des hôtels marocains</h2>
<ul>
  <li><strong>Un seul routeur pour tout l'hôtel</strong> — impossible de couvrir plusieurs étages et 30+ chambres</li>
  <li><strong>Matériel grand public</strong> — les routeurs TP-Link grand public ne supportent pas plus de 30–40 connexions simultanées</li>
  <li><strong>Pas de portail captif</strong> — les clients partagent le mot de passe, la sécurité est nulle</li>
  <li><strong>Bande passante non gérée</strong> — un client qui télécharge monopolise toute la connexion</li>
</ul>

<h2>Architecture recommandée pour un hôtel</h2>

<h3>Étape 1 : Calculez vos besoins</h3>
<p>Comptez 3–5 appareils par chambre (smartphone, tablette, laptop). Pour un hôtel de 30 chambres, prévoyez 90–150 connexions simultanées. Ajoutez les zones communes : lobby, restaurant, piscine, salles de conférence.</p>

<h3>Étape 2 : Choisissez les bons points d'accès</h3>
<p>Les points d'accès professionnels (AP) sont conçus pour gérer 50–100 clients simultanés chacun, contrairement aux routeurs grand public limités à 30 :</p>
<ul>
  <li><strong>Ruijie RG-RAP2266 (AX3000)</strong> — Excellent pour couloirs et chambres d'hôtel. Montage au plafond, 1 099 MAD</li>
  <li><strong>Ruijie RG-RAP2200(E) (AC1300)</strong> — Solution économique pour les petits hôtels, 700 MAD</li>
  <li><strong>TP-Link EAP613 (AX1800)</strong> — Compatible Omada avec portail captif intégré, 1 050 MAD</li>
  <li><strong>Ruijie RG-RAP6262(G) (IP68)</strong> — Pour les zones extérieures (piscine, terrasse), résistant aux intempéries</li>
</ul>

<h3>Étape 3 : Planifiez le câblage</h3>
<p>Chaque point d'accès doit être raccordé en câble Ethernet Cat6 à un switch central. Le PoE (Power over Ethernet) élimine le besoin d'alimentation électrique séparée — simplifiez l'installation.</p>

<h3>Étape 4 : Switch PoE central</h3>
<p>Pour alimenter et connecter vos AP :</p>
<ul>
  <li><strong>Ruijie RG-ES220GS-P</strong> — 16 ports PoE+, budget 250W, parfait pour 16 AP. 2 500 MAD</li>
  <li><strong>TP-Link TL-SG2428P</strong> — 24 ports PoE+, 4 SFP, gestion cloud Omada. 3 199 MAD</li>
</ul>

<h3>Étape 5 : Portail captif et gestion des invités</h3>
<p>Le portail captif est indispensable pour :</p>
<ul>
  <li>Authentifier les clients (code chambre, voucher, durée limitée)</li>
  <li>Limiter le débit par chambre (ex : 20 Mbps max par client)</li>
  <li>Respecter la réglementation marocaine sur les accès WiFi publics</li>
  <li>Afficher votre marque et proposer des offres</li>
</ul>
<p>Les solutions Omada (TP-Link) et Ruijie Cloud intègrent cette fonctionnalité nativement.</p>

<h2>Dimensionnement par type d'hôtel</h2>

<h3>Petit hôtel / Riad (10–20 chambres)</h3>
<ul>
  <li>4–6 AP plafonniers (RG-RAP2200E ou EAP613)</li>
  <li>1 switch PoE 8–16 ports</li>
  <li>Connexion internet : 100–200 Mbps dédiée</li>
  <li>Budget matériel : 8 000–15 000 MAD</li>
</ul>

<h3>Hôtel moyen (30–60 chambres)</h3>
<ul>
  <li>15–25 AP (RG-RAP2266 ou EAP613)</li>
  <li>2 switches PoE 24 ports</li>
  <li>Connexion internet : 500 Mbps–1 Gbps</li>
  <li>Budget matériel : 30 000–55 000 MAD</li>
</ul>

<h3>Grand complexe touristique (100+ chambres)</h3>
<ul>
  <li>50+ AP dont des modèles extérieurs IP68 pour piscine et jardins</li>
  <li>Infrastructure Ethernet structurée avec armoires de brassage par étage</li>
  <li>Connexion internet : fibre dédiée 1–10 Gbps</li>
  <li>Budget : sur devis — contactez SettaTech</li>
</ul>

<h2>Contactez nos experts</h2>
<p>SettaTech réalise des audits WiFi et des déploiements complets pour les hôtels et complexes touristiques au Maroc. Nous prenons en charge la conception, l'installation, la configuration du portail captif et la maintenance.</p>
    `,
  },
  {
    slug: "internet-satellite-maroc-zones-rurales",
    title: "Internet par satellite au Maroc : Solutions pour zones rurales",
    description:
      "Tout sur l'internet satellite au Maroc — couverture, tarifs, installation et alternatives.",
    category: "Satellite",
    readTime: "7 min",
    date: "2 mai 2026",
    dateISO: "2026-05-02",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Antenne satellite et ciel étoilé pour connectivité rurale",
    content: `
<p>Des millions de Marocains en zones rurales et montagneuses n'ont toujours pas accès à une connexion internet filaire fiable. L'internet par satellite est souvent la seule solution viable. Voici ce que vous devez savoir en 2026.</p>

<h2>Pourquoi l'internet satellite ?</h2>
<p>L'internet satellite s'impose quand :</p>
<ul>
  <li>Vous êtes dans une zone non couverte par l'ADSL, la fibre ou la 4G</li>
  <li>Votre connexion mobile est trop instable pour le travail ou l'éducation</li>
  <li>Vous gérez un site isolé : ferme, station touristique, chantier, école en zone rurale</li>
</ul>

<h2>Les technologies disponibles au Maroc</h2>

<h3>Satellite Géostationnaire (GEO) — Altitude 36 000 km</h3>
<p>Opérateurs : Yahsat, Viasat, Inmarsat</p>
<ul>
  <li>Débits : 10–50 Mbps download / 3–10 Mbps upload</li>
  <li>Latence : 600–800 ms (élevée, peu adapté aux appels vidéo et jeux)</li>
  <li>Couverture : tout le Maroc, Sahara inclus</li>
  <li>Tarif : 500–2 000 MAD/mois selon le forfait</li>
  <li>Matériel : antenne parabolique de 75–90 cm</li>
</ul>

<h3>Satellite Basse Orbite (LEO) — Altitude 550 km</h3>
<p>Opérateur principal : Starlink (SpaceX)</p>
<ul>
  <li>Débits : 50–200 Mbps download / 10–20 Mbps upload</li>
  <li>Latence : 20–50 ms (proche de la fibre !)</li>
  <li>Disponibilité au Maroc : partielle en 2026, en expansion</li>
  <li>Matériel : terminal Starlink plat auto-orientable</li>
  <li>Tarif : ~500 USD/mois (usage professionnel) ou ~120 USD/mois (résidentiel)</li>
</ul>

<h2>Installation et contraintes techniques</h2>

<h3>Exposition du ciel</h3>
<p>C'est la contrainte principale. La parabole doit avoir une vue dégagée vers le sud (pour les satellites GEO) sans arbres, montagnes ou bâtiments obstruants. L'outil d'analyse de couverture est indispensable avant toute installation.</p>

<h3>Alimentation électrique</h3>
<p>Le modem satellite consomme 20–80W selon le modèle. En zone sans électricité, un système solaire + batterie peut alimenter l'équipement satellite et un petit réseau WiFi.</p>

<h3>Distribution WiFi sur site</h3>
<p>Une fois la connexion satellite établie, SettaTech déploie un réseau WiFi local avec des points d'accès directionnels ou omnidirectionnels pour couvrir bâtiments, cours et espaces extérieurs.</p>

<h2>Cas d'usage courants au Maroc</h2>

<h3>Fermes et exploitations agricoles</h3>
<p>Connexion pour la gestion agricole connectée, la vidéosurveillance des cultures et du bétail, et la communication de l'équipe.</p>

<h3>Établissements scolaires ruraux</h3>
<p>Le Ministère de l'Éducation marocain subventionne certaines installations satellite pour les écoles en zones blanches.</p>

<h3>Stations touristiques de montagne</h3>
<p>Hôtels, gîtes et auberges dans le Haut Atlas, le Rif ou le présaharien ont souvent recours au satellite pour offrir le WiFi à leurs clients.</p>

<h3>Chantiers de construction isolés</h3>
<p>Connexion temporaire pour la coordination, la vidéosurveillance et les communications pendant la durée du chantier.</p>

<h2>Alternatives à envisager</h2>
<p>Avant de choisir le satellite, vérifiez ces alternatives :</p>
<ul>
  <li><strong>4G avec routeur LTE</strong> — si vous avez du signal 4G (même faible), un routeur 4G externe avec antenne directionnelle peut surprendre. Coût : 300–800 MAD pour le matériel</li>
  <li><strong>WiMAX local</strong> — certains opérateurs locaux proposent des connexions radio dans les zones péri-urbaines</li>
  <li><strong>Fibre FTTH Maroc Telecom</strong> — vérifiez si votre commune est dans le plan d'extension</li>
</ul>

<h2>Faire appel à SettaTech</h2>
<p>Nous réalisons des études de faisabilité gratuites pour les projets de connectivité satellite au Maroc. Contactez-nous avec votre localisation et vos besoins en débit pour recevoir une proposition personnalisée.</p>
    `,
  },
  {
    slug: "installer-camera-ip-tutoriel",
    title: "Installation caméras IP Tapo : Tutoriel étape par étape",
    description:
      "Guide pratique pour installer et configurer vos caméras IP Tapo à la maison ou au bureau.",
    category: "Tutoriel",
    readTime: "12 min",
    date: "28 avril 2026",
    dateISO: "2026-04-28",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Installation d'une caméra IP de surveillance à domicile",
    content: `
<p>Les caméras IP Tapo (TP-Link) sont parmi les plus vendues au Maroc pour leur simplicité d'installation et leur excellent rapport qualité/prix. Ce guide vous accompagne pas à pas dans l'installation de votre système de vidéosurveillance.</p>

<h2>Matériel nécessaire</h2>
<ul>
  <li>Caméra IP Tapo (Tapo C110 intérieur ou Tapo C320WS extérieur)</li>
  <li>Application Tapo (iOS / Android)</li>
  <li>Smartphone avec Bluetooth activé</li>
  <li>Connexion WiFi 2,4 GHz ou câble Ethernet (pour caméras filaires)</li>
  <li>Perceuse, chevilles et vis (pour montage mural)</li>
  <li>Adaptateur secteur inclus dans la boîte</li>
</ul>

<h2>Étape 1 : Télécharger l'application Tapo</h2>
<p>Téléchargez l'application <strong>Tapo</strong> sur l'App Store (iOS) ou Google Play (Android). Créez un compte TP-Link si vous n'en avez pas. Ce compte vous permettra d'accéder à vos caméras depuis n'importe où.</p>

<h2>Étape 2 : Choisir l'emplacement</h2>

<h3>Pour une caméra intérieure (Tapo C110)</h3>
<ul>
  <li>Pointez vers l'entrée principale, le salon ou la caisse si c'est pour un commerce</li>
  <li>Placez-la en hauteur (2–2,5 m) pour une vue panoramique</li>
  <li>Vérifiez la portée WiFi : pas plus de 15 m du routeur à travers 1–2 murs</li>
</ul>

<h3>Pour une caméra extérieure (Tapo C320WS)</h3>
<ul>
  <li>Sous un avant-toit de préférence (protection pluie supplémentaire)</li>
  <li>Orientée vers l'entrée, le parking ou le portail</li>
  <li>À 3–4 m de hauteur pour éviter les vandalismes</li>
  <li>Vérifiez qu'une prise secteur est proche ou planifiez un câblage</li>
</ul>

<h2>Étape 3 : Installation physique</h2>
<p>Utilisez le gabarit inclus dans la boîte pour marquer les trous de fixation. Percez (cheville 6mm pour mur béton), vissez le support, puis enclenchez la caméra sur le support. Pour les caméras extérieures, passez le câble d'alimentation à travers le mur ou utilisez un presse-étoupe étanche.</p>

<h2>Étape 4 : Configuration via l'app Tapo</h2>
<ol>
  <li>Ouvrez Tapo → appuyez sur <strong>"+"</strong> → "Ajouter un appareil"</li>
  <li>Sélectionnez votre modèle (ex : C320WS)</li>
  <li>Branchez la caméra et attendez la LED bleue clignotante</li>
  <li>L'app détecte la caméra via Bluetooth</li>
  <li>Entrez votre mot de passe WiFi 2,4 GHz</li>
  <li>Attendez 30–60 secondes pour la connexion</li>
  <li>Nommez la caméra (ex : "Entrée principale")</li>
</ol>

<h2>Étape 5 : Configuration avancée</h2>

<h3>Détection de mouvement</h3>
<p>Dans Tapo → votre caméra → Détection de mouvement : activez les alertes push. Définissez des zones d'intérêt (masquez les zones non pertinentes comme la rue passante) pour réduire les fausses alertes.</p>

<h3>Enregistrement</h3>
<p>Deux options :</p>
<ul>
  <li><strong>Carte microSD</strong> (jusqu'à 512 Go) — enregistrement local, pas d'abonnement</li>
  <li><strong>Tapo Care</strong> — cloud TP-Link, 30 jours d'historique, ~3 USD/mois par caméra</li>
</ul>
<p>Recommandation : commencez avec une carte microSD 128 Go (environ 80–120 MAD) pour 7–15 jours d'enregistrement continu selon la résolution.</p>

<h3>Vision nocturne</h3>
<p>La Tapo C110 utilise des LED infrarouges invisibles (noir et blanc la nuit). La Tapo C320WS dispose d'un capteur couleur starlight qui donne des images en couleur même la nuit. Activez le "Mode couleur nocturne" dans les paramètres.</p>

<h3>Accès à distance</h3>
<p>Depuis l'app Tapo, vous pouvez voir le flux en direct et les enregistrements depuis n'importe où dans le monde, à condition que votre caméra soit connectée à internet. Activez la notification en temps réel pour recevoir une alerte dès qu'un mouvement est détecté.</p>

<h2>Problèmes courants et solutions</h2>

<h3>La caméra ne se connecte pas au WiFi</h3>
<ul>
  <li>Vérifiez que vous utilisez le réseau 2,4 GHz (pas 5 GHz)</li>
  <li>Rapprochez temporairement la caméra du routeur pour la configuration initiale</li>
  <li>Évitez les caractères spéciaux dans le mot de passe WiFi</li>
</ul>

<h3>Image floue ou granuleuse la nuit</h3>
<ul>
  <li>Nettoyez l'objectif (poussière, toiles d'araignée)</li>
  <li>Désactivez le mode nuit si vous avez un éclairage extérieur</li>
  <li>Augmentez la résolution dans les paramètres (si le débit internet le permet)</li>
</ul>

<h3>Alertes trop fréquentes</h3>
<ul>
  <li>Réduisez la sensibilité de détection de mouvement</li>
  <li>Définissez des zones d'exclusion (arbres, routes passantes)</li>
  <li>Activez le filtre "Personne uniquement" (disponible sur les modèles récents)</li>
</ul>

<h2>Besoin d'aide pour l'installation ?</h2>
<p>SettaTech propose des services d'installation de caméras IP à domicile et en entreprise partout au Maroc. Contactez-nous pour un devis gratuit incluant matériel et pose.</p>
    `,
  },
  {
    slug: "tp-link-vs-ruijie-comparatif",
    title: "TP-Link vs Ruijie Reyee : Quel fabricant choisir au Maroc ?",
    description:
      "Comparatif complet entre les deux marques — qualité, prix, support et cas d'usage.",
    category: "Comparatif",
    readTime: "9 min",
    date: "25 avril 2026",
    dateISO: "2026-04-25",
    image:
      "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Comparaison équipements réseau TP-Link et Ruijie Reyee",
    content: `
<p>TP-Link et Ruijie Reyee sont les deux marques les plus distribuées par SettaTech au Maroc. Si TP-Link est mondialement connue, Ruijie monte en puissance dans le segment professionnel. Ce comparatif vous aide à choisir selon votre usage.</p>

<h2>Présentation des marques</h2>

<h3>TP-Link</h3>
<p>Fondée en 1996 à Shenzhen, TP-Link est aujourd'hui le numéro 1 mondial des équipements réseau WiFi. Ses gammes couvrent du grand public (routeurs Archer) au professionnel (points d'accès Omada, switches TL-SG). Présente au Maroc depuis de nombreuses années, avec un réseau de distribution solide et un SAV reconnu.</p>

<h3>Ruijie Reyee</h3>
<p>Filiale de Ruijie Networks (ex-Fujian Reyee), marque orientée réseaux d'entreprise, opérateurs et hospitality. Moins connue du grand public, Ruijie s'impose dans les hôtels, résidences et projets télécom grâce à ses performances en environnements denses et sa robustesse.</p>

<h2>Comparatif par segment</h2>

<h3>Routeurs grand public</h3>
<table>
  <thead>
    <tr><th>Critère</th><th>TP-Link</th><th>Ruijie Reyee</th></tr>
  </thead>
  <tbody>
    <tr><td>Gamme disponible</td><td>✅ Très large (WiFi 5 à WiFi 7)</td><td>⚠️ Plus limitée</td></tr>
    <tr><td>Rapport qualité/prix</td><td>✅ Excellent</td><td>✅ Bon</td></tr>
    <tr><td>Interface utilisateur</td><td>✅ Très intuitive (Tether App)</td><td>⚠️ Plus technique</td></tr>
    <tr><td>Support Maroc</td><td>✅ Solide</td><td>⚠️ En développement</td></tr>
  </tbody>
</table>
<p><strong>Verdict</strong> : TP-Link gagne haut la main pour le grand public.</p>

<h3>Points d'accès professionnels</h3>
<table>
  <thead>
    <tr><th>Critère</th><th>TP-Link Omada</th><th>Ruijie Reyee</th></tr>
  </thead>
  <tbody>
    <tr><td>Capacité simultanée</td><td>✅ 100+ clients/AP</td><td>✅ 100+ clients/AP</td></tr>
    <tr><td>Stabilité longue durée</td><td>✅ Très bonne</td><td>✅ Excellente</td></tr>
    <tr><td>Gestion centralisée</td><td>✅ Omada Controller</td><td>✅ Ruijie Cloud</td></tr>
    <tr><td>Portail captif</td><td>✅ Complet</td><td>✅ Très complet</td></tr>
    <tr><td>Prix moyen</td><td>700–1 400 MAD</td><td>700–1 150 MAD</td></tr>
    <tr><td>Solidité boîtier</td><td>✅ Bonne</td><td>✅ Très bonne (IP68 disponible)</td></tr>
  </tbody>
</table>
<p><strong>Verdict</strong> : Match nul — Ruijie légèrement favori en hospitality grâce aux modèles IP68 extérieurs.</p>

<h3>Switches réseau</h3>
<table>
  <thead>
    <tr><th>Critère</th><th>TP-Link</th><th>Ruijie</th></tr>
  </thead>
  <tbody>
    <tr><td>Gamme PoE</td><td>✅ Très complète</td><td>✅ Complète</td></tr>
    <tr><td>Switches manageable</td><td>✅ TL-SG2xxx/SG3xxx</td><td>✅ RG-ES/RG-NBS</td></tr>
    <tr><td>Prix</td><td>✅ Souvent moins cher</td><td>⚠️ Légèrement plus élevé</td></tr>
    <tr><td>Fiabilité entreprise</td><td>✅ Bonne</td><td>✅ Très bonne</td></tr>
  </tbody>
</table>
<p><strong>Verdict</strong> : TP-Link pour les petits budgets, Ruijie pour les infrastructures critiques.</p>

<h2>Nos recommandations par usage</h2>

<h3>Usage domestique</h3>
<p>→ <strong>TP-Link sans hésitation</strong> : gamme plus large, application plus simple, prix plus accessibles.</p>

<h3>Petite et moyenne entreprise</h3>
<p>→ <strong>TP-Link Omada</strong> : écosystème complet (routeur + AP + switch manageable) avec contrôleur centralisé gratuit.</p>

<h3>Hôtels et résidences</h3>
<p>→ <strong>Ruijie Reyee pour les AP</strong> (robustesse, modèles extérieurs IP68, itinérance seamless) + <strong>TP-Link pour les switches</strong>.</p>

<h3>Opérateurs télécom</h3>
<p>→ <strong>Ruijie Networks</strong> (gamme enterprise, GPON, OLT) — SettaTech est distributeur officiel d'internet par satellite pour le compte de Nortis Télécom.</p>

<h2>Conclusion</h2>
<p>Les deux marques sont de qualité. TP-Link reste le choix par défaut pour 80% des besoins. Ruijie s'impose dans les projets hôteliers, les réseaux denses et les infrastructures télécom. En tant que distributeur officiel des deux marques, SettaTech peut vous orienter vers la solution la plus adaptée à votre situation et votre budget.</p>
    `,
  },
  {
    slug: "internet-collectif-residence-maroc",
    title: "Internet collectif pour résidences au Maroc : La solution intelligente",
    description:
      "Découvrez comment l'internet collectif transforme la connectivité dans les résidences et immeubles au Maroc — débit jusqu'à 1 Gbit/s, WiFi unifié partout et collecte simplifiée des charges.",
    category: "B2B",
    readTime: "6 min",
    date: "16 mai 2026",
    dateISO: "2026-05-16",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Résidence moderne au Maroc avec connexion WiFi collectif",
    content: `
<p>Dans les résidences et immeubles au Maroc, chaque résident paie son propre abonnement internet à un opérateur — souvent pour un débit médiocre et un tarif élevé. L'internet collectif change complètement la donne : une seule infrastructure partagée, un débit exceptionnel, et des avantages insoupçonnés pour le syndic comme pour les résidents.</p>

<h2>Qu'est-ce que l'internet collectif ?</h2>
<p>L'internet collectif consiste à déployer une connexion internet unique à très haut débit pour l'ensemble d'une résidence ou d'un immeuble. Cette connexion est distribuée via un réseau WiFi professionnel couvrant tous les appartements, les parties communes, le parking et les espaces extérieurs. Chaque résident accède à internet avec un identifiant ou un code WiFi personnel.</p>

<h2>Avantage n°1 : Un débit exceptionnel pour un prix imbattable</h2>
<p>Grâce à la mutualisation de la bande passante, l'internet collectif permet d'offrir à chaque résident des débits allant <strong>jusqu'à 1 Gbit/s à partir de seulement 100 dirhams par mois</strong>. C'est jusqu'à 5 à 10 fois plus rapide que ce que propose un opérateur classique au même prix.</p>
<ul>
  <li><strong>Streaming 4K</strong> sans interruption pour toute la famille</li>
  <li><strong>Télétravail</strong> fluide avec visioconférences en HD</li>
  <li><strong>Gaming en ligne</strong> avec une latence minimale</li>
  <li><strong>Téléchargements instantanés</strong> — une série complète en quelques minutes</li>
</ul>
<p>Comparez : pour 100 à 200 dirhams par mois chez un opérateur traditionnel, vous obtenez 20 à 50 Mbps avec des coupures fréquentes. Avec l'internet collectif Qonixs, vous accédez à une fibre mutualisée à 1 Gbps.</p>

<h2>Avantage n°2 : Un outil puissant pour le syndic</h2>
<p>L'internet collectif est bien plus qu'une solution de connectivité — c'est un levier financier pour le syndic. Voici pourquoi :</p>
<ul>
  <li><strong>Collecte simplifiée et rapide des charges</strong> — Les résidents paient leur quote-part internet en même temps que leurs charges de syndic, sans friction.</li>
  <li><strong>Meilleure adhésion des résidents</strong> — Un résident préfère naturellement payer 200 dirhams de charges de syndic incluant internet haut débit plutôt que 150 dirhams pour un abonnement opérateur de qualité médiocre. Résultat : moins de retards de paiement, moins de litiges.</li>
  <li><strong>Valeur ajoutée perçue</strong> — L'internet collectif renforce l'image de la résidence et facilite la commercialisation des appartements.</li>
  <li><strong>Revenu complémentaire potentiel</strong> — Le syndic peut inclure une marge dans le tarif mensuel pour financer d'autres équipements ou services communs.</li>
</ul>

<h2>Avantage n°3 : Un WiFi unifié dans toute la résidence</h2>
<p>Fini les zones sans signal dans le couloir, l'ascenseur ou au parking. Avec la solution internet collectif Qonixs, les résidents <strong>se connectent avec le même code WiFi partout dans la résidence</strong> :</p>
<ul>
  <li>Dans leur appartement, à tous les étages</li>
  <li>Dans les parties communes et le hall d'entrée</li>
  <li>Au parking, au sous-sol et dans les locaux techniques</li>
  <li>Dans les espaces extérieurs et jardins</li>
  <li>Chez le voisin avec le même code — idéal pour les visites ou les réunions</li>
</ul>
<p>Cette continuité de connexion est assurée par un réseau de points d'accès WiFi professionnels avec <strong>itinérance transparente</strong> (roaming) : votre téléphone bascule automatiquement vers l'AP le plus proche sans déconnexion ni perte de qualité.</p>

<h2>Comment fonctionne l'installation ?</h2>
<h3>Étape 1 : Audit et conception</h3>
<p>SettaTech réalise une étude gratuite de votre résidence : nombre d'appartements, superficie, configuration des bâtiments, emplacement du local technique. Nous concevons un plan de couverture WiFi sur mesure.</p>

<h3>Étape 2 : Connexion internet à haut débit</h3>
<p>Nous raccordons la résidence à une connexion fibre optique dédiée ou à une connexion internet par satellite (pour les zones non couvertes par la fibre). La bande passante est dimensionnée selon le nombre de résidents.</p>

<h3>Étape 3 : Déploiement du réseau WiFi</h3>
<p>Installation de points d'accès WiFi 6 professionnels dans les parties communes, les couloirs et au besoin dans les appartements. Câblage structuré, switch PoE et contrôleur centralisé pour une gestion simplifiée.</p>

<h3>Étape 4 : Portail de gestion</h3>
<p>Le syndic dispose d'un portail de gestion pour activer ou suspendre les accès, monitorer la consommation et générer des rapports mensuels. Chaque résident reçoit ses identifiants de connexion personnels.</p>

<h2>Pour quel type de résidence ?</h2>
<ul>
  <li><strong>Immeubles résidentiels</strong> de 10 à 200 appartements</li>
  <li><strong>Résidences fermées</strong> (gated communities) et villas groupées</li>
  <li><strong>Résidences étudiantes</strong> et cités universitaires privées</li>
  <li><strong>Résidences touristiques</strong> et appartements de vacances</li>
  <li><strong>Lotissements</strong> et ensembles immobiliers neufs</li>
</ul>

<h2>Contactez SettaTech pour votre résidence</h2>
<p>SettaTech, distributeur officiel d'internet par satellite pour le compte de Nortis Télécom, prend en charge l'intégralité du projet : étude, installation, configuration et support. Nous intervenons dans toutes les villes du Maroc.</p>
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

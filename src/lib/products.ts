export interface ProductSpecs {
  wifi?: string;
  speed?: string;
  antennas?: number;
  usb?: string | null;
  ports?: number;
  sim?: string;
  coverage?: string;
  units?: number;
  backhaul?: string;
  managed?: boolean;
  poe?: string | boolean;
  form?: string;
  budget?: string;
  sfp?: number;
  l2?: boolean;
  resolution?: string;
  night?: string;
  outdoor?: boolean;
  motion?: boolean;
  audio?: string;
  storage?: string;
  alexa?: boolean;
  pan?: string;
  tilt?: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  subcategory: string | null;
  brand: string;
  price: number;
  oldPrice: number | null;
  badge: string | null;
  rating: number;
  reviews: number;
  inStock: boolean;
  image: string;
  imageUrl: string;
  specs: ProductSpecs;
  description: string;
}

export const products: Product[] = [
  // ROUTEURS WiFi 6
  { id: 1, slug: "archer-ax73", name: "Archer AX73", category: "routeurs", subcategory: "wifi6", brand: "TP-Link", price: 899, oldPrice: 1099, badge: "Bestseller", rating: 4.9, reviews: 247, inStock: true, image: "router", imageUrl: "/assets/images/products/archer-ax73.jpg", specs: { wifi: "WiFi 6", speed: "AX5400", antennas: 6, usb: "USB 3.0", ports: 4 }, description: "Routeur WiFi 6 AX5400 avec 6 antennes haute performance, MU-MIMO et Beamforming. Idéal pour les grandes maisons et les familles nombreuses." },
  { id: 2, slug: "archer-ax55", name: "Archer AX55", category: "routeurs", subcategory: "wifi6", brand: "TP-Link", price: 649, oldPrice: null, badge: "Nouveau", rating: 4.7, reviews: 134, inStock: true, image: "router", imageUrl: "/assets/images/products/archer-ax55.jpg", specs: { wifi: "WiFi 6", speed: "AX3000", antennas: 4, usb: "USB 3.0", ports: 4 }, description: "Routeur WiFi 6 AX3000 dual-band avec OFDMA et MU-MIMO pour des connexions plus fluides." },
  { id: 3, slug: "archer-ax23", name: "Archer AX23", category: "routeurs", subcategory: "wifi6", brand: "TP-Link", price: 449, oldPrice: 529, badge: null, rating: 4.6, reviews: 89, inStock: true, image: "router", imageUrl: "/assets/images/products/archer-ax23.jpg", specs: { wifi: "WiFi 6", speed: "AX1800", antennas: 4, usb: null, ports: 4 }, description: "Routeur WiFi 6 entrée de gamme idéal pour les petits appartements." },
  { id: 4, slug: "archer-c80", name: "Archer C80", category: "routeurs", subcategory: "wifi5", brand: "TP-Link", price: 549, oldPrice: 649, badge: "-15%", rating: 4.4, reviews: 198, inStock: true, image: "router", imageUrl: "/assets/images/products/archer-c80.jpg", specs: { wifi: "WiFi 5", speed: "AC1900", antennas: 4, usb: "USB 2.0", ports: 4 }, description: "Routeur WiFi 5 AC1900 avec MU-MIMO et Beamforming pour une expérience réseau fluide." },
  { id: 5, slug: "archer-c6", name: "Archer C6", category: "routeurs", subcategory: "wifi5", brand: "TP-Link", price: 349, oldPrice: null, badge: "Top vente", rating: 4.5, reviews: 423, inStock: true, image: "router", imageUrl: "/assets/images/products/archer-c6.jpg", specs: { wifi: "WiFi 5", speed: "AC1200", antennas: 5, usb: null, ports: 4 }, description: "Le routeur WiFi 5 le plus vendu au Maroc. Excellent rapport qualité-prix." },

  // ROUTEURS 4G/5G
  { id: 6, slug: "tl-mr6400", name: "TL-MR6400", category: "4g-lte", subcategory: null, brand: "TP-Link", price: 799, oldPrice: 899, badge: "Top vente", rating: 4.3, reviews: 156, inStock: true, image: "4g", imageUrl: "", specs: { wifi: "WiFi 4", speed: "N300", sim: "4G LTE", antennas: 2, ports: 4 }, description: "Routeur 4G LTE 300Mbps avec slot SIM intégré. Parfait pour les zones sans fibre." },
  { id: 7, slug: "mr600", name: "Archer MR600", category: "4g-lte", subcategory: null, brand: "TP-Link", price: 1099, oldPrice: 1299, badge: "-15%", rating: 4.4, reviews: 78, inStock: true, image: "4g", imageUrl: "", specs: { wifi: "WiFi 5", speed: "AC1200", sim: "4G+ Cat6", antennas: 4, ports: 4 }, description: "Routeur 4G+ Cat6 double SIM avec WiFi AC1200 pour des connexions ultra-rapides." },

  // MESH WIFI
  { id: 8, slug: "deco-xe75", name: "Deco XE75 (Pack 2)", category: "mesh", subcategory: null, brand: "TP-Link", price: 2499, oldPrice: 2899, badge: "WiFi 6E", rating: 4.8, reviews: 121, inStock: true, image: "mesh", imageUrl: "/assets/images/products/deco-xe75.jpg", specs: { wifi: "WiFi 6E", speed: "AX5400", coverage: "550m²", units: 2, backhaul: "Tri-Band" }, description: "Système Mesh WiFi 6E Tri-Band pour une couverture parfaite de 550m². Avec HomeShield intégré." },
  { id: 9, slug: "deco-x60", name: "Deco X60 (Pack 3)", category: "mesh", subcategory: null, brand: "TP-Link", price: 1799, oldPrice: null, badge: "Bestseller", rating: 4.7, reviews: 203, inStock: true, image: "mesh", imageUrl: "/assets/images/products/deco-x60.jpg", specs: { wifi: "WiFi 6", speed: "AX3000", coverage: "650m²", units: 3, backhaul: "Dual-Band" }, description: "Le système Mesh WiFi 6 le plus populaire. Couvre jusqu'à 650m² avec 3 unités." },
  { id: 10, slug: "deco-m4", name: "Deco M4 (Pack 2)", category: "mesh", subcategory: null, brand: "TP-Link", price: 799, oldPrice: 999, badge: "-20%", rating: 4.5, reviews: 167, inStock: true, image: "mesh", imageUrl: "/assets/images/products/deco-m4.jpg", specs: { wifi: "WiFi 5", speed: "AC1200", coverage: "260m²", units: 2, backhaul: "Dual-Band" }, description: "Système Mesh WiFi 5 entrée de gamme. Idéal pour les appartements et maisons moyennes." },

  // SWITCHES — Ruijie en premier
  { id: 27, slug: "rg-es124g-l", name: "RG-ES124G-L", category: "switches", subcategory: "unmanaged", brand: "Ruijie", price: 1100, oldPrice: null, badge: null, rating: 4.5, reviews: 45, inStock: true, image: "switch", imageUrl: "/products/RG-ES124G-L.png", specs: { ports: 24, speed: "Gigabit", managed: false, poe: false, form: "Desktop" }, description: "Switch 24 ports 10/100/1000 Mbps Desktop Ruijie. Solution fiable et économique pour les réseaux d'entreprise." },
  { id: 28, slug: "rg-es220gs-p", name: "RG-ES220GS-P", category: "switches", subcategory: "managed", brand: "Ruijie", price: 2500, oldPrice: null, badge: "PoE+", rating: 4.7, reviews: 38, inStock: true, image: "switch", imageUrl: "/products/RG-ES220GS-P.png", specs: { ports: 20, speed: "Gigabit", managed: true, poe: "PoE+", budget: "250W" }, description: "Switch manageable 20 ports Gigabit dont 16 PoE+, budget PoE 250W. Idéal pour caméras IP et téléphones VoIP." },
  // SWITCHES — TP-Link
  { id: 11, slug: "tl-sg1024d", name: "TL-SG1024D", category: "switches", subcategory: "unmanaged", brand: "TP-Link", price: 549, oldPrice: null, badge: "Nouveau", rating: 4.9, reviews: 87, inStock: true, image: "switch", imageUrl: "/assets/images/products/tl-sg1024d.jpg", specs: { ports: 24, speed: "Gigabit", managed: false, poe: false, form: "Rack 19\"" }, description: "Switch 24 ports Gigabit non-manageable en boîtier métal rack 19\". Plug & Play." },
  { id: 12, slug: "tl-sg1008d", name: "TL-SG1008D", category: "switches", subcategory: "unmanaged", brand: "TP-Link", price: 249, oldPrice: null, badge: null, rating: 4.8, reviews: 312, inStock: true, image: "switch", imageUrl: "/assets/images/products/tl-sg1008d.jpg", specs: { ports: 8, speed: "Gigabit", managed: false, poe: false, form: "Desktop" }, description: "Switch 8 ports Gigabit compact pour bureau. Simple et fiable." },
  { id: 13, slug: "tl-sg2428p", name: "TL-SG2428P", category: "switches", subcategory: "managed", brand: "TP-Link", price: 3199, oldPrice: 3999, badge: "-20%", rating: 4.6, reviews: 64, inStock: true, image: "switch", imageUrl: "/assets/images/products/tl-sg2428p.jpg", specs: { ports: 24, speed: "Gigabit", managed: true, poe: "PoE+", budget: "250W", sfp: 4 }, description: "Switch manageable 24 ports Gigabit PoE+ avec 4 SFP. Budget PoE 250W pour caméras et téléphones IP." },
  { id: 14, slug: "tl-sg3452", name: "TL-SG3452", category: "switches", subcategory: "managed", brand: "TP-Link", price: 4299, oldPrice: null, badge: null, rating: 4.7, reviews: 41, inStock: true, image: "switch", imageUrl: "/assets/images/products/tl-sg3452.jpg", specs: { ports: 48, speed: "Gigabit", managed: true, poe: false, sfp: 4, l2: true }, description: "Switch manageable L2 48 ports Gigabit avec 4 SFP. Pour les entreprises et data centers." },

  // CAMÉRAS TAPO
  { id: 15, slug: "tapo-c320ws", name: "Tapo C320WS", category: "cameras", subcategory: "outdoor", brand: "Tapo", price: 449, oldPrice: null, badge: "Nouveau", rating: 4.9, reviews: 183, inStock: true, image: "camera", imageUrl: "/assets/images/products/tapo-c320ws.png", specs: { resolution: "4MP", night: "Couleur", outdoor: true, motion: true, audio: "2 voies", storage: "MicroSD + Cloud" }, description: "Caméra IP extérieure 4MP avec vision nocturne couleur et détection intelligente de mouvement." },
  { id: 16, slug: "tapo-c110", name: "Tapo C110", category: "cameras", subcategory: "indoor", brand: "Tapo", price: 249, oldPrice: null, badge: "Top vente", rating: 4.5, reviews: 312, inStock: true, image: "camera", imageUrl: "/assets/images/products/tapo-c110.jpg", specs: { resolution: "3MP", night: "IR", outdoor: false, motion: true, audio: "1 voie", alexa: true }, description: "Caméra IP intérieure 3MP avec détection humaine et compatibilité Alexa/Google Home." },
  { id: 17, slug: "tapo-c500", name: "Tapo C500", category: "cameras", subcategory: "outdoor", brand: "Tapo", price: 349, oldPrice: 399, badge: "-12%", rating: 4.6, reviews: 94, inStock: true, image: "camera", imageUrl: "/assets/images/products/tapo-c500.jpg", specs: { resolution: "2MP", night: "Couleur", outdoor: true, pan: "360°", motion: true, audio: "2 voies" }, description: "Caméra extérieure panoramique 360° avec vision nocturne couleur et suivi automatique." },
  { id: 18, slug: "tapo-c210", name: "Tapo C210", category: "cameras", subcategory: "indoor", brand: "Tapo", price: 299, oldPrice: null, badge: null, rating: 4.7, reviews: 178, inStock: true, image: "camera", imageUrl: "/assets/images/products/tapo-c210.png", specs: { resolution: "3MP", night: "IR", outdoor: false, pan: "360°", tilt: "114°", audio: "2 voies" }, description: "Caméra intérieure PTZ 3MP avec rotation 360°. Suivez chaque mouvement dans votre maison." },

  // ROUTEUR WiFi 7
  { id: 19, slug: "archer-be220", name: "Archer BE220", category: "routeurs", subcategory: "wifi7", brand: "TP-Link", price: 1099, oldPrice: null, badge: "WiFi 7", rating: 4.8, reviews: 42, inStock: true, image: "router", imageUrl: "/assets/images/products/archer-be220.jpg", specs: { wifi: "WiFi 7", speed: "BE3600", antennas: 4, ports: 4, usb: null }, description: "Routeur WiFi 7 BE3600 bi-bande, 3,6 Gbit/s, 1 port WAN Gigabit, 4 ports LAN Gigabit, 4 antennes, compatible EasyMesh." },

  // POINTS D'ACCÈS WiFi — Ruijie en premier
  { id: 23, slug: "rg-rap6262g", name: "RG-RAP6262(G)", category: "access-points", subcategory: "outdoor", brand: "Ruijie", price: 1925, oldPrice: null, badge: "Extérieur", rating: 4.5, reviews: 31, inStock: true, image: "ap", imageUrl: "/products/RG-RAP6262(G).png", specs: { wifi: "WiFi 6", speed: "AX1800", outdoor: true, poe: "802.3at", form: "IP68" }, description: "Point d'accès extérieur AX1800 Dual Band WiFi 6, IP68 étanche. 1201 Mbps à 5 GHz + 574 Mbps à 2,4 GHz. Idéal pour les espaces extérieurs." },
  { id: 24, slug: "rg-rap2266", name: "RG-RAP2266", category: "access-points", subcategory: "indoor", brand: "Ruijie", price: 1150, oldPrice: null, badge: "Bestseller", rating: 4.7, reviews: 89, inStock: true, image: "ap", imageUrl: "/products/RG-RAP2266.png", specs: { wifi: "WiFi 6", speed: "AX3000", ports: 1, poe: "802.3at", form: "Plafond" }, description: "Point d'accès plafonnier AX3000 Wi-Fi 6 Dual-Band Gigabit. Performance professionnelle pour entreprises et hôtels." },
  { id: 25, slug: "rg-rap2200e", name: "RG-RAP2200(E)", category: "access-points", subcategory: "indoor", brand: "Ruijie", price: 700, oldPrice: null, badge: "Top vente", rating: 4.4, reviews: 156, inStock: true, image: "ap", imageUrl: "/products/RG-RAP2200(E).png", specs: { wifi: "WiFi 5", speed: "AC1300", ports: 2, poe: "802.3af", form: "Plafond" }, description: "Point d'accès plafonnier AC1300 Dual Band, 867 Mbps à 5 GHz + 400 Mbps à 2,4 GHz. 2 ports Ethernet Gigabit. Support 802.11a/b/g/n/ac Wave1/Wave2." },
  { id: 26, slug: "rg-rap2260g", name: "RG-RAP2260(G)", category: "access-points", subcategory: "indoor", brand: "Ruijie", price: 1100, oldPrice: null, badge: null, rating: 4.6, reviews: 72, inStock: true, image: "ap", imageUrl: "/products/RG-RAP2260(G).png", specs: { wifi: "WiFi 6", speed: "AX1800", ports: 2, poe: "802.3at", form: "Plafond" }, description: "Point d'accès plafonnier AX1800 Wi-Fi 6 Dual-Band Gigabit. Double ports LAN Gigabit, antennes intégrées. Jusqu'à 1775 Mbps." },
  // POINTS D'ACCÈS WiFi — TP-Link Omada
  { id: 20, slug: "eap613", name: "EAP613", category: "access-points", subcategory: "indoor", brand: "TP-Link", price: 1050, oldPrice: null, badge: "Nouveau", rating: 4.7, reviews: 63, inStock: true, image: "ap", imageUrl: "/assets/images/products/eap613.jpg", specs: { wifi: "WiFi 6", speed: "AX1800", ports: 1, poe: "802.3at", form: "Plafond" }, description: "Point d'accès Wi-Fi 6 double bande AX1800 pour montage au plafond. 1 port RJ45 Gigabit, 574 Mbit/s à 2,4 GHz + 1201 Mbit/s à 5 GHz. PoE 802.3at et alimentation 12V DC." },
  { id: 21, slug: "eap653", name: "EAP653", category: "access-points", subcategory: "indoor", brand: "TP-Link", price: 999, oldPrice: null, badge: null, rating: 4.6, reviews: 48, inStock: true, image: "ap", imageUrl: "/assets/images/products/eap653.jpg", specs: { wifi: "WiFi 6", speed: "AX3000", ports: 1, poe: "802.3at", form: "Plafond" }, description: "Point d'accès plafonnier Wi-Fi 6 double bande AX3000. Haute performance pour bureaux et espaces professionnels." },
  { id: 22, slug: "eap723", name: "EAP723", category: "access-points", subcategory: "indoor", brand: "TP-Link", price: 1600, oldPrice: null, badge: "WiFi 7", rating: 4.9, reviews: 27, inStock: true, image: "ap", imageUrl: "/assets/images/products/eap723.jpg", specs: { wifi: "WiFi 7", speed: "BE3600", ports: 1, poe: "802.3at", form: "Plafond" }, description: "Point d'accès Wi-Fi 7 double bande Omada BE3600 pour montage au plafond. 1 port RJ45 2,5 GHz, 688 Mbit/s à 2,4 GHz + 2880 Mbit/s à 5 GHz. PoE+ 802.3at et 12V DC." },

];

export const categories = [
  { slug: "routeurs", name: "Routeurs WiFi", icon: "router", count: 6 },
  { slug: "access-points", name: "Points d'accès", icon: "ap", count: 7 },
  { slug: "mesh", name: "WiFi Mesh", icon: "mesh", count: 3 },
  { slug: "switches", name: "Switches", icon: "switch", count: 6 },
  { slug: "cameras", name: "Caméras IP", icon: "camera", count: 4 },
  { slug: "4g-lte", name: "3G/4G LTE", icon: "4g", count: 2 },
];

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q)
  );
}

export function formatPrice(price: number): string {
  return price.toLocaleString("fr-MA") + " MAD";
}

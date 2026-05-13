# 📋 Historique des modifications — Qonixs (SettaTech)

> Projet : **qonixs.com** — E-commerce réseau & Wi-Fi au Maroc  
> Entreprise : **SettaTech**, Settat, Maroc  
> Stack : Next.js 14, Tailwind CSS, Framer Motion, Zustand  
> Date : Mai 2025

---

## 1. Correction des images (CDN → Local)

**Problème :** Les images des produits TP-Link (hébergées sur `static.tp-link.com`) et les photos hero (Pexels/Unsplash) ne s'affichaient pas en production.

**Solution :** Téléchargement de toutes les images en local dans `public/assets/images/`.

### Images hero téléchargées
- `hero/hero-maroc-hotel.jpg`
- `hero/hero-maroc-residence.jpg`
- `hero/hero-satellite.jpg`
- `hero/hero-maroc-resort.jpg`
- `hero/hero-maroc-tower.jpg`

### Images produits TP-Link téléchargées
- `products/archer-be220.jpg`
- `products/archer-ax73.jpg`
- `products/archer-ax55.jpg`
- `products/archer-ax23.jpg`
- `products/archer-c80.jpg`
- `products/archer-c6.jpg`
- `products/deco-xe75.jpg`
- `products/deco-x60.jpg`
- `products/deco-m4.jpg`
- `products/tl-sg1024d.jpg`
- `products/tl-sg1008d.jpg`
- `products/tl-sg2428p.jpg`
- `products/tl-sg3452.jpg`
- `products/tapo-c320ws.png`
- `products/tapo-c110.jpg`
- `products/tapo-c500.jpg`
- `products/tapo-c210.jpg`
- `products/eap613.jpg`
- `products/eap653.jpg`
- `products/eap723.jpg`

### Fichiers modifiés
- `src/lib/products.ts` — Tous les `imageUrl` TP-Link mis à jour vers `/assets/images/products/`

---

## 2. Intégration des carrousels produits (Homepage)

**Nouveau composant :** `src/components/home/ProductCarousel.tsx`

Carrousel horizontal avec flèches prev/next, scroll fluide, badges, bouton "Ajouter au panier".

**4 carrousels ajoutés sur la homepage :**
1. 🔵 Routeurs TP-Link — `href="/categorie/routeurs"`
2. 📡 Points d'accès Ruijie — `href="/categorie/access-points"`
3. 📷 Caméras Tapo — `href="/categorie/cameras"`
4. 🔀 Switches réseau — `href="/categorie/switches"`

---

## 3. SEO complet — Maroc

### `src/app/layout.tsx`
- `metadataBase` : `https://qonixs.com`
- `title.template` : `%s | Qonixs — SettaTech Maroc`
- 25 keywords cibles (Wi-Fi, Ruijie, TP-Link, Settat, hôtels, satellite...)
- Open Graph : `locale: "fr_MA"`, og:image, og:type
- Twitter Card : `summary_large_image`
- JSON-LD `@graph` avec 3 entités :
  - `Organization` (SettaTech)
  - `LocalBusiness` (adresse Settat, téléphone, horaires)
  - `WebSite` (avec `SearchAction` pour moteurs)

### Nouveaux fichiers layout SEO
- `src/app/services/layout.tsx`
- `src/app/tarifs-satellite/layout.tsx`
- `src/app/a-propos/layout.tsx`

### Sitemap
- `src/app/sitemap.ts` — 33 URLs générées dynamiquement
  - 5 pages statiques
  - 6 pages catégories
  - 22 pages produits

### Robots
- `public/robots.txt` — Allow `/`, Disallow `/panier` et `/commander`

---

## 4. Page À propos SettaTech

**Nouveau fichier :** `src/app/a-propos/page.tsx`

Contenu :
- Présentation SettaTech (société mère) → Qonixs (marque de service)
- **Statistiques :** 500+ installations, 50+ hôtels, support 7j/7, fondée en 2019
- **4 valeurs :** Expertise locale, Solutions complètes, Matériel certifié, Support 7j/7
- **6 services** avec liens vers `/services` et `/tarifs-satellite`
- **Couverture 14 villes** marocaines (Settat, Casablanca, Rabat, Marrakech, Agadir, Fès, etc.)
- CTA WhatsApp + lien vers services

---

## 5. Hero Carousel — Contexte Marocain

**Fichier modifié :** `src/components/home/HeroCarousel.tsx`

### 5 slides mis à jour
| Slide | Badge | Image |
|-------|-------|-------|
| 1 | Hôtels & Résidences | hero-maroc-hotel.jpg |
| 2 | Wi-Fi Résidentiel | hero-maroc-residence.jpg |
| 3 | Couverture Nationale | hero-satellite.jpg |
| 4 | Hospitality Tech | hero-maroc-resort.jpg |
| 5 | Réseaux Professionnels | hero-maroc-tower.jpg |

### Ajouts
- Watermark **SettaTech • Qonixs** sur chaque slide
- Alt SEO avec "Maroc", "Qonixs", "SettaTech" dans chaque attribut `alt`
- Barre de progression animée (Framer Motion)
- Auto-avance 5 secondes, pause au survol

---

## 6. Section Marques Partenaires (BrandSection)

**Nouveau fichier :** `src/components/home/BrandSection.tsx`

Inspiré des flyers fournis : Ruijie Reyee (dark blue) + TP-Link (blanc épuré).

### Carte Ruijie Reyee
- Fond solide `#0d2244`
- Logo R stylisé (sky-500)
- 5 produits phares listés
- 4 miniatures produits
- CTA : "Points d'accès Ruijie" + "Switches Ruijie"

### Carte TP-Link
- Fond blanc, ombre légère
- Logo teal
- 5 produits phares listés
- Badges : WiFi 7, WiFi 6E, WiFi 6, Mesh, Tapo 4K, Omada
- 4 miniatures produits
- CTA : "Routeurs TP-Link" + "Caméras Tapo"

### Corrections demandées
- ❌ Supprimé : badge "Partenaire Officiel" (Ruijie)
- ❌ Supprimé : badge "Distributeur Maroc" (TP-Link)
- ✅ Fond bleu uniforme (couleur solide, sans dégradé)
- ✅ `mix-blend-mode: multiply` sur image routeur (supprime le fond blanc)

---

## 7. Navigation et Footer

### `src/components/layout/Header.tsx`
- Ajout lien : `{ href: "/a-propos", label: "À propos" }`

### `src/components/layout/Footer.tsx`
- Ajout : `Un service de SettaTech` (en-tête colonne services)
- Services mis à jour : Wi-Fi Hospitality, Internet Satellite, Vidéosurveillance IP, Infrastructure Réseau, À propos — SettaTech
- Copyright : `© 2025 SettaTech — Qonixs. Tous droits réservés. Settat, Maroc.`

---

## 8. Tarifs Satellite — GO 100

**Fichier modifié :** `src/app/tarifs-satellite/page.tsx`

| Avant | Après |
|-------|-------|
| `price: "Sur devis"` | `price: "399"` |
| — | `priceLabel: "Dhs HT / mois"` |

---

## 9. Erreurs rencontrées et corrections

### Erreur 1 — Framer Motion cache corrompu
```
Cannot find module './vendor-chunks/framer-motion.js'
```
**Fix :** Suppression du cache `.next` + rebuild
```bash
rmdir /s /q .next
npm run build
```

### Erreur 2 — Page sans CSS (giant blue Q)
**Cause :** `page.tsx` converti de Client en Server Component ; cache dev corrompu  
**Fix :**
```bash
rmdir /s /q .next
npm run dev
# Puis Ctrl+Shift+R dans le navigateur
```

### Erreur 3 — Heredoc bash avec apostrophes
```
unexpected EOF while looking for matching `''
```
**Cause :** Le contenu du heredoc contenait des apostrophes françaises conflictuelles  
**Fix :** Utilisation du Write tool (Claude) au lieu du bash

---

## 10. Structure finale du projet

```
src/
├── app/
│   ├── layout.tsx              ← SEO global + JSON-LD
│   ├── page.tsx                ← Homepage (Server Component)
│   ├── sitemap.ts              ← 33 URLs dynamiques
│   ├── a-propos/
│   │   ├── layout.tsx          ← SEO page About
│   │   └── page.tsx            ← Page SettaTech / Qonixs
│   ├── services/
│   │   └── layout.tsx          ← SEO page Services
│   └── tarifs-satellite/
│       ├── layout.tsx          ← SEO page Satellite
│       └── page.tsx            ← Tarifs (GO 100 = 399 DH)
├── components/
│   ├── home/
│   │   ├── HeroCarousel.tsx    ← 5 slides Maroc
│   │   ├── BrandSection.tsx    ← Ruijie + TP-Link cards
│   │   └── ProductCarousel.tsx ← Carrousel horizontal
│   └── layout/
│       ├── Header.tsx          ← Nav + À propos
│       └── Footer.tsx          ← SettaTech branding
└── lib/
    └── products.ts             ← imageUrl → /assets/images/

public/
├── robots.txt
└── assets/images/
    ├── hero/                   ← 5 images contexte marocain
    ├── services/               ← 6 images services
    └── products/               ← 20 images produits TP-Link
```

---

## 11. Informations SettaTech / Qonixs

| Champ | Valeur |
|-------|--------|
| Société | SettaTech |
| Marque | Qonixs |
| Site | qonixs.com |
| Adresse | BD QADI AYAD N°52 SMALAA, Settat, Maroc |
| Téléphone | +212 660 248 290 |
| Instagram | @qonixs.ma |
| Facebook | /profile.php?id=61586069708201 |
| Fondée | 2019 |

---

*Document généré automatiquement — Qonixs / SettaTech — Mai 2025*

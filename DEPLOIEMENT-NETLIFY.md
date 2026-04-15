# 🚀 Guide de déploiement Qonixs sur Netlify

## Méthode recommandée : GitHub + Netlify (déploiement automatique)

---

## ÉTAPE 1 — Créer un dépôt GitHub

1. Aller sur https://github.com → **New repository**
2. Nom : `qonixs`
3. Visibilité : **Private**
4. Cliquer **Create repository**

---

## ÉTAPE 2 — Envoyer le code sur GitHub

Ouvrir un terminal dans le dossier `qonixs/` et exécuter :

```bash
git init
git add .
git commit -m "Initial commit — Site Qonixs"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/qonixs.git
git push -u origin main
```

---

## ÉTAPE 3 — Connecter Netlify à GitHub

1. Aller sur https://app.netlify.com → **Add new site** → **Import an existing project**
2. Choisir **GitHub**
3. Autoriser Netlify à accéder à vos dépôts
4. Sélectionner le dépôt `qonixs`

---

## ÉTAPE 4 — Configurer le build sur Netlify

| Paramètre | Valeur |
|-----------|--------|
| **Base directory** | *(laisser vide)* |
| **Build command** | `npm run build` |
| **Publish directory** | `.next` |

> ⚠️ Ces valeurs sont déjà dans `netlify.toml` — Netlify les détecte automatiquement.

Cliquer **Deploy site**.

---

## ÉTAPE 5 — Configurer le domaine (optionnel)

1. Dans Netlify → **Domain settings** → **Add custom domain**
2. Entrer votre domaine (ex: `qonixs.ma`)
3. Configurer les DNS chez votre registrar :
   - **Type A** → IP Netlify (fournie dans l'interface)
   - **Type CNAME** `www` → `qonixs.netlify.app`
4. Activer **HTTPS** (certificat SSL gratuit Let's Encrypt automatique)

---

## Structure des fichiers clés

```
qonixs/
├── netlify.toml          ← Configuration Netlify
├── next.config.mjs       ← Configuration Next.js
├── package.json          ← Dépendances (inclut @netlify/plugin-nextjs)
├── src/
│   ├── app/              ← Pages du site
│   ├── components/       ← Composants réutilisables
│   └── lib/products.ts   ← Catalogue produits
└── public/
    └── products/         ← Photos produits Ruijie (à uploader)
```

---

## Mises à jour après déploiement

Pour mettre à jour le site après modification :

```bash
git add .
git commit -m "Description de la modification"
git push
```

→ Netlify redéploie automatiquement en 1-2 minutes.

---

## Informations importantes

- **URL temporaire Netlify** : `https://[nom-aléatoire].netlify.app`
- **Build time** : ~1-2 minutes
- **CDN mondial** : Le site est servi depuis 100+ points de présence
- **HTTPS gratuit** : Certificat SSL automatique
- **Plan gratuit** : 100 GB/mois de bande passante (largement suffisant)

---

*Site Qonixs — Équipements Réseau au Maroc*

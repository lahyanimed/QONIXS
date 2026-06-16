"use client";

import { useState } from "react";
import Link from "next/link";
import { formatPrice, type Product } from "@/lib/products";
import { useCartStore } from "@/store/cartStore";
import ProductCard from "@/components/products/ProductCard";

// ── Labels lisibles pour chaque clé de specs ────────────────────────────────
const SPEC_LABELS: Record<string, string> = {
  wifi:       "Norme Wi-Fi",
  speed:      "Débit Wi-Fi",
  antennas:   "Antennes",
  usb:        "Port USB",
  ports:      "Ports LAN",
  sim:        "SIM / 4G",
  coverage:   "Couverture",
  units:      "Unités incluses",
  backhaul:   "Backhaul",
  managed:    "Manageable",
  poe:        "PoE",
  form:       "Format",
  budget:     "Budget PoE",
  sfp:        "Ports SFP",
  l2:         "Layer 2",
  resolution: "Résolution",
  night:      "Vision nocturne",
  outdoor:    "Extérieur / IP68",
  motion:     "Détection mouvement",
  audio:      "Audio",
  storage:    "Stockage",
  alexa:      "Alexa / Google Home",
  pan:        "Panoramique",
  tilt:       "Inclinaison",
};

// ── Regroupement des specs par catégorie produit ─────────────────────────────
function getSpecGroups(category: string): { title: string; keys: string[] }[] {
  switch (category) {
    case "routeurs":
    case "4g-lte":
      return [
        { title: "Sans-fil",      keys: ["wifi", "speed", "antennas"] },
        { title: "Connectivité",  keys: ["ports", "usb", "sim"] },
      ];
    case "mesh":
      return [
        { title: "Sans-fil",   keys: ["wifi", "speed", "backhaul"] },
        { title: "Couverture", keys: ["coverage", "units"] },
      ];
    case "switches":
      return [
        { title: "Réseau",         keys: ["ports", "sfp"] },
        { title: "Administration", keys: ["managed", "poe", "budget", "form", "l2"] },
      ];
    case "cameras":
      return [
        { title: "Vidéo",          keys: ["resolution", "night", "outdoor"] },
        { title: "Fonctionnalités",keys: ["motion", "audio", "pan", "tilt", "alexa"] },
        { title: "Stockage",       keys: ["storage"] },
      ];
    case "access-points":
      return [
        { title: "Sans-fil",     keys: ["wifi", "speed", "antennas"] },
        { title: "Installation", keys: ["ports", "poe", "form", "outdoor"] },
      ];
    default:
      return [{ title: "Caractéristiques", keys: Object.keys(SPEC_LABELS) }];
  }
}

// ── Étoiles ──────────────────────────────────────────────────────────────────
function Stars({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= Math.round(rating) ? "text-amber-400" : "text-gray-200"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-xs text-gray-500 font-dm">
        {rating}/5 · {reviews} avis
      </span>
    </div>
  );
}

// ── Icône chevron pour breadcrumb ────────────────────────────────────────────
function ChevronIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

// ── Types ─────────────────────────────────────────────────────────────────────
interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
  categoryName: string;
}

// ═══════════════════════════════════════════════════════════════════════════════
export default function ProductDetail({
  product,
  relatedProducts,
  categoryName,
}: ProductDetailProps) {
  const [activeTab, setActiveTab] = useState<"description" | "specs">("description");
  const [added, setAdded]         = useState(false);
  const [imgError, setImgError]   = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const hasRealImage = Boolean(product.imageUrl) && !imgError;
  const discount     = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;
  const specGroups = getSpecGroups(product.category);

  const handleAdd = () => {
    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  // Spec pills (5 premières valeurs non-null)
  const specPills = Object.entries(product.specs)
    .filter(([, v]) => v !== null && v !== undefined && v !== false)
    .slice(0, 5)
    .map(([key, value]) => {
      const label = SPEC_LABELS[key] || key;
      const display =
        typeof value === "boolean" ? label : `${label} : ${value}`;
      return { key, display };
    });

  return (
    <div className="min-h-screen bg-white">
      {/* ── BREADCRUMB ───────────────────────────────────────────────────── */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-1.5 text-xs font-dm text-gray-400 flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">
              Accueil
            </Link>
            <ChevronIcon />
            <Link
              href={`/categorie/${product.category}`}
              className="hover:text-primary transition-colors"
            >
              {categoryName}
            </Link>
            <ChevronIcon />
            <span className="text-dark font-medium truncate max-w-[200px]">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* ── HERO : Image + Infos ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ── Colonne image ─────────────────────────────────── */}
          <div className="space-y-3">
            {/* Image principale */}
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center min-h-[380px] border border-gray-100 overflow-hidden">
              {/* Badge */}
              {product.badge && (
                <span className="absolute top-4 left-4 z-10 px-3 py-1 text-xs font-dm font-bold bg-primary text-white rounded-full shadow-sm">
                  {product.badge}
                </span>
              )}
              {/* Réduction */}
              {discount > 0 && (
                <span className="absolute top-4 right-4 z-10 px-3 py-1 text-xs font-dm font-bold bg-red-500 text-white rounded-full shadow-sm">
                  -{discount}%
                </span>
              )}

              {hasRealImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={product.imageUrl}
                  alt={`${product.name} — ${product.brand} — Qonixs Maroc`}
                  className="max-h-[340px] max-w-full object-contain p-6 drop-shadow-lg"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex flex-col items-center gap-4 text-gray-300 p-12">
                  <svg className="w-28 h-28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={0.6}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm font-dm text-gray-400 text-center">
                    Photo disponible sur demande
                  </p>
                </div>
              )}
            </div>

            {/* Vignette (thumbnail) */}
            {hasRealImage && (
              <div className="flex gap-2">
                <div className="w-20 h-20 rounded-xl border-2 border-primary bg-gray-50 flex items-center justify-center cursor-pointer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-14 h-14 object-contain"
                    onError={() => setImgError(true)}
                  />
                </div>
              </div>
            )}
          </div>

          {/* ── Colonne infos ─────────────────────────────────── */}
          <div>
            {/* Badges catégorie + stock */}
            <div className="flex items-center gap-2 flex-wrap mb-3">
              <Link
                href={`/categorie/${product.category}`}
                className="text-xs font-dm font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full hover:bg-primary/20 transition-colors"
              >
                {categoryName}
              </Link>
              {product.inStock ? (
                <span className="flex items-center gap-1.5 text-xs font-dm font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                  En stock
                </span>
              ) : (
                <span className="text-xs font-dm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                  Disponible sur commande
                </span>
              )}
            </div>

            {/* Marque */}
            <p className="text-xs font-dm font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">
              {product.brand}
            </p>

            {/* Nom produit */}
            <h1 className="font-syne font-bold text-3xl lg:text-4xl text-dark leading-tight mb-3">
              {product.name}
            </h1>

            {/* Étoiles */}
            <Stars rating={product.rating} reviews={product.reviews} />

            {/* Description courte */}
            <p className="font-dm text-gray-500 text-sm leading-relaxed mt-4 mb-5 pl-4 border-l-4 border-primary/25">
              {product.description}
            </p>

            {/* Pills specs */}
            {specPills.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {specPills.map(({ key, display }) => (
                  <span
                    key={key}
                    className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-xs font-dm text-gray-600 font-medium"
                  >
                    {display}
                  </span>
                ))}
              </div>
            )}

            {/* ── Prix + CTA ────────────────────────────────── */}
            <div className="border-t border-gray-100 pt-5">
              {/* Prix */}
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-4xl font-syne font-bold text-dark">
                  {formatPrice(product.price)}
                </span>
                {product.oldPrice && (
                  <span className="text-lg text-gray-300 line-through font-dm">
                    {formatPrice(product.oldPrice)}
                  </span>
                )}
                {discount > 0 && (
                  <span className="text-sm font-dm font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-lg">
                    -{discount}%
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-400 font-dm mb-5">
                Prix TTC · Livraison express 24–48h partout au Maroc
              </p>

              {/* Boutons CTA */}
              <div className="space-y-3">
                {product.inStock ? (
                  <div className="flex gap-3">
                    <button
                      onClick={handleAdd}
                      className={`flex-1 py-3.5 rounded-xl font-dm font-semibold text-sm transition-all duration-200 ${
                        added
                          ? "bg-green-500 text-white"
                          : "bg-dark text-white hover:bg-gray-800"
                      }`}
                    >
                      {added ? "✓ Ajouté au panier" : "Ajouter au panier"}
                    </button>
                    <Link
                      href="/panier"
                      onClick={handleAdd}
                      className="flex-1 py-3.5 rounded-xl border-2 border-primary text-primary font-dm font-semibold text-sm text-center hover:bg-primary hover:text-white transition-all"
                    >
                      Acheter maintenant
                    </Link>
                  </div>
                ) : (
                  <div className="w-full py-3.5 rounded-xl bg-gray-100 text-gray-400 font-dm font-semibold text-sm text-center">
                    Indisponible en stock — Commander via WhatsApp
                  </div>
                )}

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/212660248290?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20${encodeURIComponent(
                    product.name
                  )}%20sur%20Qonixs.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-green-500 text-white font-dm font-semibold text-sm hover:bg-green-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Commander via WhatsApp
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5 pt-5 border-t border-gray-50">
                {[
                  { icon: "🚚", text: "Livraison 24–48h" },
                  { icon: "🛡️", text: "Garantie 2 ans" },
                  { icon: "↩️", text: "Retour facile" },
                  { icon: "📞", text: "Support 7j/7" },
                ].map((b) => (
                  <span key={b.text} className="flex items-center gap-1.5 text-xs font-dm text-gray-400">
                    <span>{b.icon}</span>
                    {b.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ONGLETS ──────────────────────────────────────────────────────── */}
      <div className="sticky top-0 z-20 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex">
            {(
              [
                { key: "description", label: "Description" },
                { key: "specs",       label: "Spécifications techniques" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-4 text-sm font-dm font-semibold border-b-2 transition-colors ${
                  activeTab === tab.key
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── CONTENU DES ONGLETS ──────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 py-10">

        {/* Description */}
        {activeTab === "description" && (
          <div className="max-w-3xl">
            <h2 className="font-syne font-bold text-2xl text-dark mb-4">
              {product.name}
            </h2>
            <p className="font-dm text-gray-600 text-base leading-relaxed mb-5">
              {product.description}
            </p>
            <p className="font-dm text-gray-500 text-sm leading-relaxed mb-5">
              Le {product.name} de {product.brand} est un équipement réseau conçu pour offrir des
              performances optimales dans les environnements professionnels et résidentiels.
              {product.specs.wifi &&
                ` Compatible avec la norme ${product.specs.wifi}, il garantit une connectivité fiable
                et rapide pour votre domicile, hôtel ou entreprise au Maroc.`}
            </p>
            <p className="font-dm text-gray-400 text-sm leading-relaxed">
              {product.inStock
                ? "Disponible en stock chez Qonixs by SettaTech — Settat, Maroc. Livraison express 24–48h partout au Maroc. Support technique 7j/7 inclus."
                : "Ce produit est disponible sur commande. Contactez-nous sur WhatsApp pour le délai de livraison et la disponibilité."}
            </p>
          </div>
        )}

        {/* Spécifications techniques */}
        {activeTab === "specs" && (
          <div className="max-w-3xl">
            <h2 className="font-syne font-bold text-2xl text-dark mb-8">
              Spécifications techniques
            </h2>

            {/* ── Général (toujours affiché) ── */}
            <SpecGroup
              title="Général"
              rows={[
                { label: "Marque",      value: product.brand },
                { label: "Modèle",      value: product.name },
                { label: "Catégorie",   value: categoryName },
                ...(product.badge ? [{ label: "Badge", value: product.badge }] : []),
                {
                  label: "Disponibilité",
                  value: product.inStock ? "En stock" : "Sur commande",
                },
              ]}
            />

            {/* ── Groupes dynamiques par catégorie ── */}
            {specGroups.map((group) => {
              const rows = group.keys
                .map((key) => {
                  const v = product.specs[key as keyof typeof product.specs];
                  if (v === null || v === undefined) return null;
                  const display =
                    typeof v === "boolean" ? (v ? "Oui" : "Non") : String(v);
                  return { label: SPEC_LABELS[key] || key, value: display };
                })
                .filter((r): r is { label: string; value: string } => r !== null);

              if (rows.length === 0) return null;
              return <SpecGroup key={group.title} title={group.title} rows={rows} />;
            })}

            {/* Note */}
            <p className="text-xs font-dm text-gray-300 mt-6">
              * Spécifications susceptibles d&apos;évoluer sans préavis. Contactez-nous pour confirmation.
            </p>
          </div>
        )}
      </section>

      {/* ── PRODUITS SIMILAIRES ──────────────────────────────────────────── */}
      {relatedProducts.length > 0 && (
        <section className="bg-gray-50/60 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-syne font-bold text-2xl text-dark">
                Produits similaires
              </h2>
              <Link
                href={`/categorie/${product.category}`}
                className="text-sm font-dm font-medium text-primary hover:underline"
              >
                Voir toute la gamme →
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

// ── Composant tableau de specs ────────────────────────────────────────────────
function SpecGroup({
  title,
  rows,
}: {
  title: string;
  rows: { label: string; value: string }[];
}) {
  return (
    <div className="mb-8">
      <h3 className="font-dm font-bold text-xs text-gray-400 uppercase tracking-[0.15em] mb-3">
        {title}
      </h3>
      <div className="overflow-hidden rounded-xl border border-gray-100 divide-y divide-gray-50">
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`flex items-start ${i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}`}
          >
            <div className="w-48 shrink-0 px-5 py-3.5 text-sm font-dm text-gray-400 border-r border-gray-100">
              {row.label}
            </div>
            <div className="flex-1 px-5 py-3.5 text-sm font-dm font-semibold text-dark">
              {row.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

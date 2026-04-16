"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { products, getProductBySlug, formatPrice, type Product } from "@/lib/products";
import { useCartStore } from "@/store/cartStore";
import { getProductSVG } from "@/components/svg/ProductSVGs";
import ProductCard from "@/components/products/ProductCard";

const specLabels: Record<string, string> = {
  wifi: "WiFi", speed: "Débit", antennas: "Antennes", usb: "USB", ports: "Ports",
  sim: "SIM", coverage: "Couverture", units: "Unités", backhaul: "Backhaul",
  managed: "Manageable", poe: "PoE", form: "Format", budget: "Budget PoE",
  sfp: "Ports SFP", l2: "Layer 2", resolution: "Résolution", night: "Vision nocturne",
  outdoor: "Extérieur", motion: "Détection mouvement", audio: "Audio",
  storage: "Stockage", alexa: "Alexa/Google", pan: "Panoramique", tilt: "Inclinaison",
};

function Stars({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg key={star} className={`w-5 h-5 ${star <= Math.round(rating) ? "text-amber-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-sm text-gray-500 font-dm">{rating}/5 ({reviews} avis)</span>
    </div>
  );
}

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const [activeTab, setActiveTab] = useState<"description" | "specs" | "reviews">("description");
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const product = getProductBySlug(slug);
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="font-syne font-bold text-2xl text-dark mb-2">Produit introuvable</h1>
        <p className="text-gray-400 font-dm mb-4">Ce produit n&apos;existe pas ou a été retiré.</p>
        <Link href="/" className="text-primary hover:underline font-dm text-sm">Retour à l&apos;accueil</Link>
      </div>
    );
  }

  const SVGComponent = getProductSVG(product.image);
  const [imgError, setImgError] = useState(false);
  const hasRealImage = product.imageUrl && !imgError;

  const handleAdd = () => {
    addItem({ id: product.id, slug: product.slug, name: product.name, price: product.price, image: product.image });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;

  const categoryName = product.category === "routeurs" ? "Routeurs WiFi" :
    product.category === "mesh" ? "WiFi Mesh" :
    product.category === "switches" ? "Switches" :
    product.category === "cameras" ? "Caméras IP" :
    product.category === "4g-lte" ? "3G/4G LTE" : product.category;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm font-dm text-gray-400 mb-6">
        <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
        <span>/</span>
        <Link href={`/categorie/${product.category}`} className="hover:text-primary transition-colors">{categoryName}</Link>
        <span>/</span>
        <span className="text-dark font-medium">{product.name}</span>
      </nav>

      {/* Product Section */}
      <div className="flex flex-col lg:flex-row gap-10 mb-12">
        {/* Image Gallery */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center min-h-[350px]"
          >
            {hasRealImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={product.imageUrl}
                alt={product.name}
                className="object-contain max-h-[260px] w-auto"
                onError={() => setImgError(true)}
              />
            ) : (
              <SVGComponent className="w-64 h-52" />
            )}
          </motion.div>
          {/* Thumbnails */}
          <div className="flex gap-2 mt-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-20 h-20 rounded-xl border-2 flex items-center justify-center cursor-pointer transition-colors ${
                  i === 0 ? "border-primary bg-gray-50" : "border-gray-100 bg-gray-50/50 opacity-60"
                }`}
              >
                {hasRealImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={product.imageUrl} alt={product.name} className="w-12 h-10 object-contain" />
                ) : (
                  <SVGComponent className="w-12 h-10" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 lg:max-w-md">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-dm uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">
              {categoryName}
            </span>
            {product.badge && (
              <span className="text-xs font-dm px-2 py-0.5 rounded bg-orange-100 text-orange-600">
                {product.badge}
              </span>
            )}
          </div>

          <h1 className="font-syne font-bold text-3xl text-dark mb-2">{product.name}</h1>
          <p className="text-sm text-gray-400 font-dm mb-3">{product.brand}</p>
          <Stars rating={product.rating} reviews={product.reviews} />

          {/* Price */}
          <div className="flex items-baseline gap-3 mt-4 mb-4">
            <span className="text-3xl font-syne font-bold text-dark">{formatPrice(product.price)}</span>
            {product.oldPrice && (
              <>
                <span className="text-lg text-gray-400 line-through font-dm">{formatPrice(product.oldPrice)}</span>
                <span className="text-sm font-dm font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">
                  -{discount}%
                </span>
              </>
            )}
          </div>

          {/* Key specs badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.entries(product.specs).slice(0, 4).map(([key, value]) => {
              if (value === null || value === false || value === undefined) return null;
              const display = typeof value === "boolean" ? "Oui" : String(value);
              return (
                <span key={key} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-lg text-xs font-dm text-gray-600">
                  <span className="text-gray-400">{specLabels[key] || key}:</span>
                  <span className="font-medium text-dark">{display}</span>
                </span>
              );
            })}
          </div>

          {/* Stock */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-sm font-dm text-green-600">En stock — Livraison sous 24-48h</span>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={handleAdd}
              className={`flex-1 py-3 rounded-xl font-dm font-medium text-sm transition-all duration-300 ${
                added
                  ? "bg-green-500 text-white"
                  : "bg-primary text-white hover:bg-primary-dark"
              }`}
            >
              {added ? "✓ Ajouté au panier" : "Ajouter au panier"}
            </button>
            <Link
              href="/panier"
              onClick={handleAdd}
              className="flex-1 py-3 rounded-xl border-2 border-dark text-dark font-dm font-medium text-sm text-center hover:bg-dark hover:text-white transition-colors"
            >
              Acheter maintenant
            </Link>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-100 mb-6">
        <div className="flex gap-6">
          {([
            { key: "description", label: "Description" },
            { key: "specs", label: "Spécifications" },
            { key: "reviews", label: `Avis (${product.reviews})` },
          ] as const).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`py-3 text-sm font-dm font-medium border-b-2 transition-colors ${
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

      <div className="mb-12">
        {activeTab === "description" && (
          <div className="prose prose-sm max-w-none font-dm text-gray-600 leading-relaxed">
            <p>{product.description}</p>
            <p className="mt-4">
              Le {product.name} de {product.brand} est un équipement réseau professionnel
              conçu pour offrir des performances optimales. Compatible avec les dernières
              normes {product.specs.wifi || "réseau"}, il garantit une connectivité fiable et rapide.
            </p>
          </div>
        )}

        {activeTab === "specs" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {Object.entries(product.specs).map(([key, value]) => {
              if (value === null || value === undefined) return null;
              const display = typeof value === "boolean" ? (value ? "Oui" : "Non") : String(value);
              return (
                <div key={key} className="flex justify-between py-2.5 px-4 bg-gray-50 rounded-lg">
                  <span className="text-sm font-dm text-gray-500">{specLabels[key] || key}</span>
                  <span className="text-sm font-dm font-medium text-dark">{display}</span>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="text-center py-8">
            <p className="text-gray-400 font-dm text-sm">
              {product.reviews} avis clients — Note moyenne: {product.rating}/5
            </p>
            <p className="text-gray-300 font-dm text-xs mt-2">Les avis détaillés seront bientôt disponibles.</p>
          </div>
        )}
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="font-syne font-bold text-2xl text-dark mb-6">Produits similaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

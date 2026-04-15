"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { products, categories, formatPrice } from "@/lib/products";
import ProductGrid from "@/components/products/ProductGrid";
import CategoryCard from "@/components/ui/CategoryCard";
import PromoBanner from "@/components/ui/PromoBanner";

const trustItems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Livraison Express",
    desc: "24-48h partout au Maroc",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Garantie Officielle",
    desc: "2 ans constructeur",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Qualité Certifiée",
    desc: "Produits 100% authentiques",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Support Technique",
    desc: "Assistance 7j/7",
  },
];

const brands = ["TP-Link", "Tapo", "Deco", "Omada", "Ruijie", "Archer"];

const featuredProducts = products.filter((p) => p.badge === "Bestseller" || p.badge === "Top vente").slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <span className="inline-block px-3 py-1 text-xs font-dm text-primary bg-primary/10 rounded-full mb-4">
              Bienvenue chez Qonixs
            </span>
            <h1 className="font-syne font-bold text-4xl lg:text-5xl mb-4 leading-tight">
              Connectez votre monde
              <br />
              avec <span className="text-primary">Qonixs</span>
            </h1>
            <p className="text-gray-400 font-dm text-base lg:text-lg mb-6 max-w-lg leading-relaxed">
              Routeurs WiFi 6, systèmes Mesh, switches et caméras IP.
              Tout l&apos;équipement réseau dont vous avez besoin, livré partout au Maroc.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/categorie/routeurs"
                className="px-6 py-3 bg-primary text-white font-dm font-medium rounded-lg hover:bg-primary-dark transition-colors text-sm"
              >
                Découvrir les produits
              </Link>
              <Link
                href="/categorie/mesh"
                className="px-6 py-3 bg-white/10 text-white font-dm font-medium rounded-lg hover:bg-white/20 transition-colors text-sm"
              >
                WiFi Mesh
              </Link>
            </div>
          </motion.div>

          {/* Featured products card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0 w-full lg:w-96 bg-white/5 backdrop-blur rounded-2xl border border-white/10 p-6"
          >
            <h3 className="font-syne font-bold text-sm mb-4 text-white/80">Produits populaires</h3>
            <div className="space-y-3">
              {featuredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/produit/${product.slug}`}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-syne font-bold text-white truncate">{product.name}</p>
                    <p className="text-xs text-gray-400 font-dm">{product.specs.wifi} • {product.specs.speed}</p>
                  </div>
                  <span className="text-sm font-syne font-bold text-primary whitespace-nowrap">
                    {formatPrice(product.price)}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {trustItems.map((item) => (
              <div key={item.title} className="flex items-center gap-3 px-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-syne font-bold text-sm text-dark">{item.title}</p>
                  <p className="text-xs text-gray-400 font-dm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="font-syne font-bold text-2xl text-dark mb-6">Nos catégories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.slug} {...cat} />
          ))}
        </div>
      </section>

      {/* Bandeau Services IT — photos */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Wi-Fi & Connectivité", sub: "Hotels, résidences, entreprises", img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=700&fit=crop&q=80", href: "/services" },
            { label: "Infrastructure Réseau", sub: "Déploiement & maintenance", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&fit=crop&q=80", href: "/services" },
            { label: "Internet par Satellite", sub: "Couverture partout au Maroc", img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=700&fit=crop&q=80", href: "/tarifs-satellite" },
          ].map((item) => (
            <a key={item.label} href={item.href} className="group relative h-48 rounded-2xl overflow-hidden block">
              <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="font-syne font-bold text-white text-lg leading-tight">{item.label}</div>
                <div className="font-dm text-xs text-gray-300 mt-0.5">{item.sub}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="font-syne font-bold text-2xl text-dark mb-6">Meilleures ventes</h2>
          <ProductGrid
            products={[
              ...products.filter((p) => [1, 5, 19, 24, 25, 20, 8, 9, 13, 28, 15, 16].includes(p.id)),
            ]}
            showTabs
          />
        </div>
      </section>

      {/* Promo Banners */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PromoBanner
            variant="dark"
            eyebrow="Offre Spéciale"
            title="WiFi 6 à prix imbattable -30%"
            subtitle="Profitez de nos routeurs WiFi 6 à des prix exceptionnels"
            cta="Voir les offres"
            href="/categorie/routeurs"
          />
          <PromoBanner
            variant="red"
            eyebrow="Nouveauté"
            title="Caméras Tapo 4K"
            subtitle="Sécurisez votre maison avec la nouvelle gamme Tapo"
            cta="Découvrir"
            href="/categorie/cameras"
          />
        </div>
      </section>

      {/* Brands Strip */}
      <section className="border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {brands.map((brand) => (
              <span
                key={brand}
                className="text-lg font-syne font-bold text-gray-300 hover:text-primary transition-colors cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

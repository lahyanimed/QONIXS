import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Qonixs — Solutions Internet & Réseau au Maroc | SettaTech",
  description:
    "Qonixs by SettaTech : routeurs WiFi 6, internet par satellite, Wi-Fi hôtels & résidences, vidéosurveillance IP et infrastructure réseau au Maroc. Livraison express Settat, Casablanca, Rabat, Marrakech.",
  keywords: [
    "internet par satellite Maroc", "Wi-Fi hôtel Maroc", "Wi-Fi résidence Maroc",
    "Qonixs", "SettaTech", "routeur WiFi 6 Maroc", "caméra IP Maroc",
    "Wi-Fi collectif Maroc", "équipements réseau Maroc",
  ],
  alternates: { canonical: "https://qonixs.com" },
  openGraph: {
    title: "Qonixs — Solutions Internet & Réseau au Maroc",
    description: "Qonixs by SettaTech : Wi-Fi, satellite, surveillance et réseau pour hôtels, résidences et entreprises au Maroc.",
    url: "https://qonixs.com",
    images: [{ url: "/assets/images/hero/hero-wifi.jpg", width: 1920, height: 700, alt: "Qonixs Solutions Internet Maroc" }],
  },
};
import { products, categories } from "@/lib/products";
import ProductGrid from "@/components/products/ProductGrid";
import CategoryCard from "@/components/ui/CategoryCard";
import PromoBanner from "@/components/ui/PromoBanner";
import HeroCarousel from "@/components/home/HeroCarousel";
import BrandSection from "@/components/home/BrandSection";
import ProductCarousel from "@/components/home/ProductCarousel";

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

// Carousels
const routeurs = products.filter((p) => p.category === "routeurs").slice(0, 10);
const cameras = products.filter((p) => p.category === "cameras").slice(0, 10);
const accessPoints = products.filter((p) => p.category === "points-acces").slice(0, 10);
const switches = products.filter((p) => p.category === "switches").slice(0, 10);

export default function HomePage() {
  return (
    <>
      {/* ===== HERO CARROUSEL ===== */}
      <HeroCarousel />

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
            { label: "Wi-Fi & Connectivité", sub: "Hotels, résidences, entreprises", img: "/assets/images/services/service-wifi.jpg", href: "/services" },
            { label: "Infrastructure Réseau", sub: "Déploiement & maintenance", img: "/assets/images/services/service-network.jpg", href: "/services" },
            { label: "Internet par Satellite", sub: "Couverture partout au Maroc", img: "/assets/images/services/service-satellite.jpg", href: "/tarifs-satellite" },
          ].map((item) => (
            <a key={item.label} href={item.href} className="group relative h-48 rounded-2xl overflow-hidden block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
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

      {/* Carousel — Routeurs */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <ProductCarousel
          title="Routeurs WiFi"
          subtitle="WiFi 6 & WiFi 7 — performances ultra-rapides"
          products={routeurs}
          viewAllHref="/categorie/routeurs"
        />
      </section>

      {/* Carousel — Points d'accès */}
      <section className="bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <ProductCarousel
            title="Points d'accès WiFi"
            subtitle="Ruijie & TP-Link — couverture professionnelle"
            products={accessPoints}
            viewAllHref="/categorie/points-acces"
          />
        </div>
      </section>

      {/* Carousel — Caméras */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <ProductCarousel
          title="Caméras de surveillance"
          subtitle="IP HD, vision nocturne & accès à distance"
          products={cameras}
          viewAllHref="/categorie/cameras"
        />
      </section>

      {/* Carousel — Switches */}
      <section className="bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <ProductCarousel
            title="Switches réseau"
            subtitle="Manageable & non-manageable — tous budgets"
            products={switches}
            viewAllHref="/categorie/switches"
          />
        </div>
      </section>

      {/* ===== SECTION MARQUES PARTENAIRES ===== */}
      <BrandSection />

      {/* Bannière produit — WiFi 7 Archer BE220 */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ background: "#0d1f35" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center min-h-[220px]">
            {/* Texte */}
            <div className="p-8 lg:p-10 relative z-10">
              <span className="inline-block px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-primary text-xs font-dm font-bold uppercase tracking-wider mb-4">
                Nouvelle génération
              </span>
              <h3 className="font-syne font-bold text-white mb-2" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
                À la découverte du <span className="text-primary">WiFi 7</span>
              </h3>
              <p className="font-dm text-gray-300 text-sm mb-2">Archer BE220 — Routeur WiFi 7 BE3600 bi-bande</p>
              <p className="font-dm text-gray-400 text-xs mb-6 max-w-sm">
                Jusqu'à 3,6 Gbit/s, latence ultra-faible, compatible EasyMesh. La nouvelle ère du Wi-Fi pour votre maison ou bureau au Maroc.
              </p>
              <div className="flex gap-3">
                <a
                  href="/produit/archer-be220"
                  className="px-5 py-2.5 bg-primary text-white rounded-xl font-dm font-medium text-sm hover:bg-sky-400 transition-colors"
                >
                  Découvrir l'Archer BE220
                </a>
              </div>
            </div>
            {/* Image produit — mix-blend-mode:multiply supprime le fond blanc */}
            <div className="flex items-center justify-center p-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/products/archer-be220.jpg"
                alt="TP-Link Archer BE220 WiFi 7 BE3600 — Maroc Qonixs"
                className="max-h-44 object-contain"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
          </div>
          {/* Cercles décoratifs */}
          <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full border border-primary/10 pointer-events-none" />
          <div className="absolute -top-10 right-1/3 w-32 h-32 rounded-full border border-primary/5 pointer-events-none" />
        </div>
      </section>

      {/* Bannière produit — Ruijie extérieur tout-terrain */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ background: "#0d2244" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center min-h-[220px]">
            {/* Image produit */}
            <div className="flex items-center justify-center p-8 order-2 md:order-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/products/RG-RAP6262(G).png"
                alt="Ruijie RG-RAP6262G point d'accès extérieur IP68 WiFi 6 Maroc — résiste aux environnements difficiles"
                className="max-h-44 object-contain drop-shadow-2xl"
              />
            </div>
            {/* Texte */}
            <div className="p-8 lg:p-10 relative z-10 order-1 md:order-2">
              <span className="inline-block px-3 py-1 bg-sky-500/20 border border-sky-400/30 rounded-full text-sky-300 text-xs font-dm font-bold uppercase tracking-wider mb-4">
                Ruijie Reyee — IP68
              </span>
              <h3 className="font-syne font-bold text-white mb-2" style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)" }}>
                <span className="text-sky-400">Toujours stable</span> — même en extérieur
              </h3>
              <p className="font-dm text-sky-200/70 text-sm mb-2">RG-RAP6262(G) — WiFi 6 AX1800 Extérieur IP68</p>
              <p className="font-dm text-sky-200/50 text-xs mb-6 max-w-sm">
                Ne craint pas les environnements difficiles. Résistant à la pluie, la poussière et la chaleur. Idéal pour hôtels, résidences et espaces extérieurs au Maroc.
              </p>
              <a
                href="/produit/rg-rap6262g"
                className="inline-block px-5 py-2.5 bg-sky-500 text-white rounded-xl font-dm font-medium text-sm hover:bg-sky-400 transition-colors"
              >
                Voir le RG-RAP6262(G)
              </a>
            </div>
          </div>
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

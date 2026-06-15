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
import FaqSection from "@/components/home/FaqSection";

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

// Produits disponibles en stock
const inStockProducts = products.filter((p) => p.inStock);

// Carousels
const routeurs = products.filter((p) => p.category === "routeurs").slice(0, 10);
const cameras = products.filter((p) => p.category === "cameras").slice(0, 10);
const accessPoints = products.filter((p) => p.category === "access-points").slice(0, 10);
const switches = products.filter((p) => p.category === "switches").slice(0, 10);
const lteProducts = products.filter((p) => p.category === "4g-lte").slice(0, 10);

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
              ...products.filter((p) => [1, 5, 32, 19, 24, 25, 20, 8, 9, 13, 28, 15, 16].includes(p.id)),
            ]}
            showTabs
          />
        </div>
      </section>

      {/* ===== PRODUITS DISPONIBLES EN STOCK ===== */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-xs font-dm font-semibold text-green-600 uppercase tracking-wider">Disponible immédiatement</span>
            </div>
            <h2 className="font-syne font-bold text-2xl text-dark">Produits en stock</h2>
            <p className="text-sm text-gray-400 font-dm mt-0.5">Livraison express 24-48h — {inStockProducts.length} produits disponibles</p>
          </div>
        </div>
        <ProductGrid products={inStockProducts} showTabs />
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
            viewAllHref="/categorie/access-points"
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

      {/* Carousel — 4G LTE */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <ProductCarousel
          title="Routeurs 4G LTE"
          subtitle="Cat.18 — WiFi 6 — Connexion stable partout au Maroc"
          products={lteProducts}
          viewAllHref="/categorie/4g-lte"
        />
      </section>

      {/* ===== SECTION MARQUES PARTENAIRES ===== */}
      <BrandSection />

      {/* ===== BANNIÈRE PRODUIT — Cudy LT18 4G LTE ===== */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0a1628 0%, #0f2744 50%, #0d1f35 100%)" }}
        >
          {/* Fond décoratif */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full" style={{ background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)" }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full" style={{ background: "radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)" }} />
            <div className="absolute top-1/2 right-1/4 w-1 h-24 bg-emerald-500/10 rotate-45" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center min-h-[260px]">
            {/* Texte */}
            <div className="p-8 lg:p-12 relative z-10">
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-dm font-bold uppercase tracking-wider"
                  style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", color: "#34d399" }}>
                  🆕 Nouveau
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-dm font-bold uppercase tracking-wider"
                  style={{ background: "rgba(14,165,233,0.15)", border: "1px solid rgba(14,165,233,0.3)", color: "#38bdf8" }}>
                  4G Cat.18
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-dm font-bold uppercase tracking-wider"
                  style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", color: "#a5b4fc" }}>
                  WiFi 6 AX1800
                </span>
              </div>

              {/* Titre */}
              <h3 className="font-syne font-bold text-white mb-2" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", lineHeight: 1.2 }}>
                Cudy LT18 — <span style={{ color: "#34d399" }}>4G partout</span><br />sans fibre ni ADSL
              </h3>

              {/* Sous-titre */}
              <p className="font-dm text-gray-300 text-sm mb-1">Routeur WiFi 6 4G LTE Advanced Cat.18</p>
              <p className="font-dm text-gray-400 text-xs mb-5 max-w-sm">
                Double slot Nano SIM, 6 antennes externes, jusqu'à 1,2 Gbps en download. Idéal pour zones sans câble, hôtels, résidences et chantiers au Maroc.
              </p>

              {/* Prix + CTA */}
              <div className="flex items-center gap-4">
                <div>
                  <span className="font-syne font-bold text-white text-2xl">2 040</span>
                  <span className="font-dm text-gray-300 text-sm ml-1">DH TTC</span>
                </div>
                <a
                  href="/produit/cudy-lt18"
                  className="px-5 py-2.5 font-dm font-semibold text-sm rounded-xl transition-all bg-emerald-500 hover:bg-emerald-600 text-white"
                >
                  Voir le Cudy LT18 →
                </a>
              </div>
            </div>

            {/* Image produit */}
            <div className="flex items-center justify-center p-6 md:p-10 relative z-10">
              {/* Halo lumineux derrière l'image */}
              <div className="absolute w-56 h-56 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)" }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.cudy.com/cdn/shop/files/LT18.png?v=1710493746"
                alt="Cudy LT18 Routeur 4G LTE Cat.18 WiFi 6 AX1800 — Qonixs Maroc"
                className="max-h-52 object-contain relative z-10 drop-shadow-2xl"
                style={{ filter: "drop-shadow(0 0 24px rgba(16,185,129,0.25))" }}
              />
            </div>
          </div>
        </div>
      </section>

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

      {/* Section FAQ */}
      <section className="bg-gray-50/50 border-t border-gray-100">
        <FaqSection />
      </section>

      {/* Bouton WhatsApp flottant */}
      <a
        href="https://wa.me/212660248290?text=Bonjour%2C%20je%20vous%20contacte%20depuis%20Qonixs.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter Qonixs sur WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}

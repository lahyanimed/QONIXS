"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { products, categories, formatPrice } from "@/lib/products";
import ProductCard from "@/components/products/ProductCard";

const sortOptions = [
  { value: "popular", label: "Popularité" },
  { value: "price-asc", label: "Prix croissant" },
  { value: "price-desc", label: "Prix décroissant" },
  { value: "rating", label: "Meilleures notes" },
  { value: "newest", label: "Nouveautés" },
];

interface CategoryClientProps {
  slug: string;
  categoryName: string;
}

export default function CategoryClient({ slug, categoryName }: CategoryClientProps) {
  const [sort, setSort] = useState("popular");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const categoryProducts = useMemo(() => {
    let filtered = products.filter((p) => p.category === slug);

    // Price filter
    filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((p) => selectedBrands.includes(p.brand));
    }

    // Sort
    switch (sort) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort((a, b) => (b.badge === "Nouveau" ? 1 : 0) - (a.badge === "Nouveau" ? 1 : 0));
        break;
      default:
        filtered.sort((a, b) => b.reviews - a.reviews);
    }

    return filtered;
  }, [slug, sort, priceRange, selectedBrands]);

  const availableBrands = Array.from(new Set(products.filter((p) => p.category === slug).map((p) => p.brand)));

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-dm text-gray-400 mb-6">
        <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
        <span aria-hidden="true">/</span>
        <span className="text-dark font-medium">{categoryName}</span>
      </nav>

      <h1 className="font-syne font-bold text-3xl text-dark mb-2">{categoryName}</h1>
      <p className="text-sm text-gray-400 font-dm mb-6">
        {categoryProducts.length} produit{categoryProducts.length !== 1 ? "s" : ""} disponible{categoryProducts.length !== 1 ? "s" : ""} — Livraison 24-48h au Maroc
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 shrink-0 space-y-6">
          {/* Price Range */}
          <div className="bg-white rounded-xl border border-gray-100 p-4">
            <h3 className="font-syne font-bold text-sm mb-3">Prix (MAD)</h3>
            <div className="space-y-2">
              <input
                type="range"
                min={0}
                max={5000}
                step={50}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-xs text-gray-400 font-dm">
                <span>{formatPrice(priceRange[0])}</span>
                <span>{formatPrice(priceRange[1])}</span>
              </div>
            </div>
          </div>

          {/* Brand */}
          {availableBrands.length > 1 && (
            <div className="bg-white rounded-xl border border-gray-100 p-4">
              <h3 className="font-syne font-bold text-sm mb-3">Marque</h3>
              <div className="space-y-2">
                {availableBrands.map((brand) => (
                  <label key={brand} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary"
                    />
                    <span className="text-sm font-dm text-gray-600">{brand}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/212660248290?text=Bonjour%2C%20j%27ai%20besoin%20d%27aide%20pour%20choisir%20un%20produit%20sur%20Qonixs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-full py-3 px-4 rounded-xl bg-green-500 text-white font-dm font-medium text-sm hover:bg-green-600 transition-colors"
          >
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Conseil d'achat gratuit
          </a>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Sort bar */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-400 font-dm">
              {categoryProducts.length} résultat{categoryProducts.length !== 1 ? "s" : ""}
            </p>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-sm font-dm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {categoryProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 font-dm mb-4">Aucun produit ne correspond à vos critères.</p>
              <button
                onClick={() => { setPriceRange([0, 5000]); setSelectedBrands([]); }}
                className="text-sm text-primary hover:underline font-dm"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

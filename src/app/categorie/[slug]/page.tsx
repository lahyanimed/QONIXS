"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { products, categories, formatPrice, type Product } from "@/lib/products";
import ProductCard from "@/components/products/ProductCard";

const sortOptions = [
  { value: "popular", label: "Popularité" },
  { value: "price-asc", label: "Prix croissant" },
  { value: "price-desc", label: "Prix décroissant" },
  { value: "rating", label: "Meilleures notes" },
  { value: "newest", label: "Nouveautés" },
];

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [sort, setSort] = useState("popular");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const category = categories.find((c) => c.slug === slug);
  const categoryName = category?.name || slug;

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

  const availableBrands = [...new Set(products.filter((p) => p.category === slug).map((p) => p.brand))];

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm font-dm text-gray-400 mb-6">
        <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
        <span>/</span>
        <span className="text-dark font-medium">{categoryName}</span>
      </nav>

      <h1 className="font-syne font-bold text-3xl text-dark mb-6">{categoryName}</h1>

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
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Sort bar */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-400 font-dm">
              {categoryProducts.length} produit{categoryProducts.length !== 1 ? "s" : ""}
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

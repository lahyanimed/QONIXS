"use client";

import { Suspense, useState, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { searchProducts, formatPrice } from "@/lib/products";
import ProductCard from "@/components/products/ProductCard";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const allResults = useMemo(() => searchProducts(query), [query]);

  const filteredResults = useMemo(() => {
    let results = allResults;
    results = results.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    if (selectedBrands.length > 0) {
      results = results.filter((p) => selectedBrands.includes(p.brand));
    }
    return results;
  }, [allResults, priceRange, selectedBrands]);

  const availableBrands = [...new Set(allResults.map((p) => p.brand))];

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <nav className="flex items-center gap-2 text-sm font-dm text-gray-400 mb-6">
        <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
        <span>/</span>
        <span className="text-dark font-medium">Recherche</span>
      </nav>

      <h1 className="font-syne font-bold text-3xl text-dark mb-2">
        Résultats pour &quot;{query}&quot;
      </h1>
      <p className="text-sm text-gray-400 font-dm mb-6">
        {filteredResults.length} produit{filteredResults.length !== 1 ? "s" : ""} trouvé{filteredResults.length !== 1 ? "s" : ""}
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 shrink-0 space-y-6">
          <div className="bg-white rounded-xl border border-gray-100 p-4">
            <h3 className="font-syne font-bold text-sm mb-3">Prix (MAD)</h3>
            <input
              type="range"
              min={0}
              max={5000}
              step={50}
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-xs text-gray-400 font-dm mt-1">
              <span>{formatPrice(priceRange[0])}</span>
              <span>{formatPrice(priceRange[1])}</span>
            </div>
          </div>

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

        {/* Results */}
        <div className="flex-1">
          {filteredResults.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredResults.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 font-dm mb-2">Aucun résultat pour &quot;{query}&quot;</p>
              <p className="text-xs text-gray-300 font-dm">Essayez avec d&apos;autres termes de recherche.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-gray-400 font-dm">Chargement...</p>
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}

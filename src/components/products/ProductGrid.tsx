"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/lib/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  showTabs?: boolean;
}

const tabs = [
  { key: "all", label: "Tous" },
  { key: "routeurs", label: "Routeurs" },
  { key: "access-points", label: "Points d'accès" },
  { key: "mesh", label: "WiFi Mesh" },
  { key: "switches", label: "Switches" },
  { key: "cameras", label: "Caméras" },
  { key: "promo", label: "Promotions" },
];

export default function ProductGrid({ products, showTabs = false }: ProductGridProps) {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = showTabs
    ? activeTab === "all"
      ? products
      : activeTab === "promo"
        ? products.filter((p) => p.oldPrice !== null)
        : products.filter((p) => p.category === activeTab)
    : products;

  return (
    <div>
      {showTabs && (
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 text-sm font-dm rounded-lg transition-colors ${
                activeTab === tab.key
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-12 font-dm">
          Aucun produit trouvé dans cette catégorie.
        </p>
      )}
    </div>
  );
}

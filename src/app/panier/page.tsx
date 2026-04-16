"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/products";
import { getProductSVG } from "@/components/svg/ProductSVGs";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="font-syne font-bold text-3xl text-dark mb-8">Mon panier</h1>
        <p className="text-gray-400 font-dm">Chargement...</p>
      </div>
    );
  }

  const total = getTotal();
  const shipping = total >= 500 ? 0 : 49;
  const grandTotal = total + shipping;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm font-dm text-gray-400 mb-6">
        <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
        <span>/</span>
        <span className="text-dark font-medium">Panier</span>
      </nav>

      <h1 className="font-syne font-bold text-3xl text-dark mb-8">Mon panier</h1>

      {items.length === 0 ? (
        <div className="text-center py-20">
          <svg className="w-16 h-16 mx-auto text-gray-200 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
          </svg>
          <p className="text-gray-400 font-dm mb-4">Votre panier est vide</p>
          <Link href="/" className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-dm text-sm hover:bg-primary-dark transition-colors">
            Continuer les achats
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1 space-y-3">
            <AnimatePresence>
              {items.map((item) => {
                const SVGComponent = getProductSVG(item.image);
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="flex items-center gap-4 bg-white rounded-xl border border-gray-100 p-4"
                  >
                    <Link href={`/produit/${item.slug}`} className="w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center shrink-0">
                      <SVGComponent className="w-14 h-12" />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <Link href={`/produit/${item.slug}`}>
                        <h3 className="font-syne font-bold text-sm text-dark truncate hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-sm font-dm text-gray-500 mt-0.5">{formatPrice(item.price)}</p>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center border border-gray-200 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-dark transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 h-8 flex items-center justify-center text-sm font-dm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-dark transition-colors"
                      >
                        +
                      </button>
                    </div>

                    {/* Item total */}
                    <span className="text-sm font-syne font-bold text-dark w-24 text-right">
                      {formatPrice(item.price * item.quantity)}
                    </span>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1.5 text-gray-300 hover:text-red-500 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            <Link href="/" className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-dm mt-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Continuer les achats
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:w-80 shrink-0">
            <div className="bg-white rounded-xl border border-gray-100 p-6 sticky top-24">
              <h2 className="font-syne font-bold text-lg text-dark mb-4">Récapitulatif</h2>

              <div className="space-y-3 mb-4 pb-4 border-b border-gray-100">
                <div className="flex justify-between text-sm font-dm">
                  <span className="text-gray-500">Sous-total</span>
                  <span className="text-dark">{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-sm font-dm">
                  <span className="text-gray-500">Livraison</span>
                  <span className={shipping === 0 ? "text-green-600" : "text-dark"}>
                    {shipping === 0 ? "Gratuite" : formatPrice(shipping)}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-gray-400 font-dm">
                    Livraison gratuite à partir de 500 MAD
                  </p>
                )}
              </div>

              <div className="flex justify-between mb-6">
                <span className="font-syne font-bold text-dark">Total</span>
                <span className="font-syne font-bold text-xl text-dark">{formatPrice(grandTotal)}</span>
              </div>

              <Link href="/commander" className="block w-full py-3 bg-primary text-white rounded-xl font-dm font-medium text-sm hover:bg-primary-dark transition-colors text-center">
                Commander
              </Link>

              <div className="flex items-center justify-center gap-3 mt-4">
                {["CMI", "Visa", "MC", "Cash"].map((m) => (
                  <span key={m} className="text-[9px] font-bold text-gray-300 uppercase tracking-wider">{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

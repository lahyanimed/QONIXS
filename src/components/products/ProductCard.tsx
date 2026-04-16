"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Product, formatPrice } from "@/lib/products";
import { useCartStore } from "@/store/cartStore";
import { getProductSVG } from "@/components/svg/ProductSVGs";

function Badge({ text }: { text: string }) {
  let color = "bg-primary text-white";
  if (text === "Bestseller" || text === "Top vente") color = "bg-orange-500 text-white";
  if (text === "Nouveau" || text === "WiFi 6E") color = "bg-blue-500 text-white";
  if (text === "En stock") color = "bg-green-500 text-white";

  return (
    <span className={`absolute top-3 left-3 px-2 py-0.5 text-[10px] font-bold rounded-md ${color} z-10`}>
      {text}
    </span>
  );
}

function Stars({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? "text-amber-400" : "text-gray-200"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-xs text-gray-400 font-dm">({reviews})</span>
    </div>
  );
}

function ProductImage({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false);
  const SVGComponent = getProductSVG(product.image);

  if (imgError || !product.imageUrl) {
    return <SVGComponent className="w-32 h-28" />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={product.imageUrl}
      alt={product.name}
      className="object-contain max-h-[140px] w-auto"
      onError={() => setImgError(true)}
      loading="lazy"
    />
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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

  return (
    <motion.div
      whileHover={{ y: -4 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
    >
      <Link href={`/produit/${product.slug}`} className="block">
        {product.badge && <Badge text={product.badge} />}

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-sky-50 transition-colors"
          onClick={(e) => e.preventDefault()}
        >
          <svg className="w-4 h-4 text-gray-400 hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
        </motion.button>

        {/* Image */}
        <div className="p-4 pb-0 flex items-center justify-center h-44 bg-gray-50/50">
          <motion.div
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <ProductImage product={product} />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-[10px] font-dm uppercase tracking-wider text-gray-400 mb-1">
            {product.brand} — {product.category}
          </p>
          <h3 className="font-syne font-bold text-sm text-dark mb-1 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500 font-dm line-clamp-2 mb-2 leading-relaxed">
            {product.description}
          </p>
          <Stars rating={product.rating} reviews={product.reviews} />

          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
            <div>
              <span className="text-base font-syne font-bold text-dark">
                {formatPrice(product.price)}
              </span>
              {product.oldPrice && (
                <span className="ml-1.5 text-xs text-gray-400 line-through font-dm">
                  {formatPrice(product.oldPrice)}
                </span>
              )}
            </div>
            <button
              onClick={handleAdd}
              className={`px-3 py-1.5 text-xs font-dm font-medium rounded-lg transition-all duration-300 ${
                added
                  ? "bg-green-500 text-white"
                  : "bg-primary/10 text-primary hover:bg-primary hover:text-white"
              }`}
            >
              {added ? "✓ Ajouté" : "Ajouter"}
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

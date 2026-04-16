"use client";

/**
 * ProductCarousel — Carrousel horizontal de produits/services
 * Style inspiré de TP-Link.com et secunet.ma
 * Défilement avec flèches + scroll tactile (mobile)
 */

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product, formatPrice } from "@/lib/products";
import { useCartStore } from "@/store/cartStore";
import { getProductSVG } from "@/components/svg/ProductSVGs";

// Image produit avec fallback SVG
function CardImage({ product }: { product: Product }) {
  const [err, setErr] = useState(false);
  const SVG = getProductSVG(product.image);
  if (err || !product.imageUrl) return <SVG className="w-28 h-24" />;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={product.imageUrl}
      alt={product.name}
      className="object-contain max-h-[120px] w-auto max-w-[160px]"
      onError={() => setErr(true)}
      loading="lazy"
    />
  );
}

function ProductSlide({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ id: product.id, slug: product.slug, name: product.name, price: product.price, image: product.image });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="flex-none w-52 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden group"
    >
      <Link href={`/produit/${product.slug}`} className="block">
        {/* Badge */}
        {product.badge && (
          <span className={`absolute top-2.5 left-2.5 px-2 py-0.5 text-[9px] font-bold rounded z-10 ${
            product.badge === "Bestseller" || product.badge === "Top vente" ? "bg-orange-500 text-white" :
            product.badge === "WiFi 7" || product.badge === "WiFi 6E" ? "bg-blue-500 text-white" :
            "bg-primary text-white"
          }`}>{product.badge}</span>
        )}
        {/* Image */}
        <div className="relative h-36 flex items-center justify-center bg-gray-50 p-3">
          <CardImage product={product} />
        </div>
        {/* Infos */}
        <div className="p-3">
          <p className="text-[9px] uppercase tracking-wider text-gray-400 font-dm">{product.brand}</p>
          <h3 className="font-syne font-bold text-sm text-dark mt-0.5 line-clamp-1">{product.name}</h3>
          {product.specs.wifi && (
            <p className="text-[10px] text-primary font-dm mt-0.5">{product.specs.wifi} · {product.specs.speed}</p>
          )}
          <div className="flex items-center justify-between mt-2.5 pt-2.5 border-t border-gray-50">
            <div>
              <span className="font-syne font-bold text-sm text-dark">{formatPrice(product.price)}</span>
              {product.oldPrice && (
                <span className="ml-1 text-[10px] text-gray-400 line-through">{formatPrice(product.oldPrice)}</span>
              )}
            </div>
            <button
              onClick={handleAdd}
              className={`px-2.5 py-1 text-[10px] font-dm font-medium rounded-lg transition-all ${
                added ? "bg-green-500 text-white" : "bg-primary/10 text-primary hover:bg-primary hover:text-white"
              }`}
            >
              {added ? "✓" : "Ajouter"}
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

interface ProductCarouselProps {
  title: string;
  subtitle?: string;
  products: Product[];
  viewAllHref?: string;
}

export default function ProductCarousel({ title, subtitle, products, viewAllHref }: ProductCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 10);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateButtons, { passive: true });
    updateButtons();
    return () => el.removeEventListener("scroll", updateButtons);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -440 : 440, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* En-tête */}
      <div className="flex items-end justify-between mb-5">
        <div>
          <h2 className="font-syne font-bold text-2xl text-dark">{title}</h2>
          {subtitle && <p className="text-sm text-gray-500 font-dm mt-0.5">{subtitle}</p>}
        </div>
        {viewAllHref && (
          <Link href={viewAllHref} className="text-sm text-primary font-dm hover:underline flex items-center gap-1">
            Voir tout
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Link>
        )}
      </div>

      {/* Flèche gauche */}
      {canPrev && (
        <button
          onClick={() => scroll("left")}
          className="absolute -left-4 top-1/2 translate-y-4 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}

      {/* Track scrollable */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto pb-2 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((p) => (
          <ProductSlide key={p.id} product={p} />
        ))}
      </div>

      {/* Flèche droite */}
      {canNext && (
        <button
          onClick={() => scroll("right")}
          className="absolute -right-4 top-1/2 translate-y-4 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}
    </div>
  );
}

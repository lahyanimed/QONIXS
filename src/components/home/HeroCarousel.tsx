"use client";

/**
 * HeroCarousel — Carrousel plein écran dans la section Hero
 * 5 slides : Wi-Fi, Satellite, Surveillance, Infrastructure, Internet Collectif
 * Images Pexels (libres, fiables en production)
 */

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    label: "Wi-Fi Hospitality",
    title: "Wi-Fi professionnel\npour hôtels & résidences",
    desc: "Couverture totale, portail captif et gestion des invités.",
    cta: "Découvrir",
    href: "/services",
    img: "/assets/images/hero/hero-wifi.jpg",
    accent: "#0ea5e9",
  },
  {
    id: 2,
    label: "Internet par Satellite",
    title: "Haut débit partout\nau Maroc",
    desc: "Couverture satellite même dans les zones les plus reculées.",
    cta: "Voir les tarifs",
    href: "/tarifs-satellite",
    img: "/assets/images/hero/hero-satellite.jpg",
    accent: "#0ea5e9",
  },
  {
    id: 3,
    label: "Vidéosurveillance IP",
    title: "Sécurisez vos\nlocaux 24h/7j",
    desc: "Caméras HD, vision nocturne et accès à distance.",
    cta: "Nos services",
    href: "/services",
    img: "/assets/images/hero/hero-camera.jpg",
    accent: "#0ea5e9",
  },
  {
    id: 4,
    label: "Infrastructure Réseau",
    title: "Conception &\ndéploiement réseau",
    desc: "LAN, VLAN, fibre optique et switches manageables.",
    cta: "En savoir plus",
    href: "/services",
    img: "/assets/images/hero/hero-network.jpg",
    accent: "#0ea5e9",
  },
  {
    id: 5,
    label: "Internet Collectif",
    title: "Connectivité pour\nrésidences & campus",
    desc: "Solutions stables pour résidences Deluxe et cités étudiantes.",
    cta: "Nos solutions",
    href: "/services",
    img: "/assets/images/hero/hero-campus.jpg",
    accent: "#0ea5e9",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  // Auto-avance toutes les 5 secondes
  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [paused, next]);

  const slide = slides[current];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(400px, 60vh, 650px)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Fond photo avec transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.img}
            alt={slide.label}
            className="w-full h-full object-cover"
          />
          {/* Dégradé sombre */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-dark/20" />
        </motion.div>
      </AnimatePresence>

      {/* Contenu du slide */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${slide.id}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Badge service */}
            <span className="inline-block px-3 py-1 text-xs font-dm text-primary bg-primary/20 rounded-full mb-4 border border-primary/30">
              {slide.label}
            </span>

            {/* Titre */}
            <h1 className="font-syne font-bold text-white mb-4 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}
            >
              {slide.title.split("\n").map((line, i) => (
                <span key={i}>
                  {i === 1 ? <span className="text-primary">{line}</span> : line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h1>

            {/* Description */}
            <p className="text-gray-300 font-dm text-base lg:text-lg mb-8 max-w-xl">
              {slide.desc}
            </p>

            {/* Boutons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href={slide.href}
                className="px-6 py-3 bg-primary text-white font-dm font-medium rounded-xl hover:bg-primary-dark transition-colors text-sm"
              >
                {slide.cta}
              </Link>
              <Link
                href="/categorie/routeurs"
                className="px-6 py-3 bg-white/10 border border-white/20 text-white font-dm font-medium rounded-xl hover:bg-white/20 transition-colors text-sm"
              >
                Voir les produits
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Flèches navigation */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-colors"
        aria-label="Précédent"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-colors"
        aria-label="Suivant"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Indicateurs (points) */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? "w-8 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Barre de progression */}
      {!paused && (
        <motion.div
          key={`progress-${current}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 5, ease: "linear" }}
          className="absolute bottom-0 left-0 h-0.5 bg-primary origin-left z-20 w-full"
        />
      )}
    </div>
  );
}

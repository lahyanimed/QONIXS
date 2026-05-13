"use client";

/**
 * HeroCarousel — Carrousel plein écran dans la section Hero
 * 5 slides contexte marocain : hôtels, résidences, complexes touristiques
 * Images locales optimisées (public/assets/images/hero/)
 */

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    label: "Wi-Fi Hospitality — Maroc",
    badge: "Hôtels & Résidences",
    title: "Wi-Fi haut débit\npour hôtels & résidences",
    desc: "Portail captif, gestion des invités et couverture totale pour complexes touristiques marocains.",
    cta: "Nos solutions Wi-Fi",
    href: "/services",
    img: "/assets/images/hero/hero-maroc-hotel.jpg",
    alt: "Wi-Fi professionnel pour hôtels et résidences au Maroc — Qonixs SettaTech Settat",
  },
  {
    id: 2,
    label: "Résidences Modernes",
    badge: "Wi-Fi Résidentiel",
    title: "Connectivité pour\nrésidences marocaines",
    desc: "Solutions Wi-Fi fiables pour résidences Deluxe, cités étudiantes et complexes résidentiels au Maroc.",
    cta: "Voir les services",
    href: "/services",
    img: "/assets/images/hero/hero-maroc-residence.jpg",
    alt: "Wi-Fi collectif résidences modernes au Maroc — solutions connectivité Qonixs SettaTech",
  },
  {
    id: 3,
    label: "Internet par Satellite",
    badge: "Couverture Nationale",
    title: "Haut débit partout\nau Maroc",
    desc: "Internet satellite pour zones rurales, montagneuses et isolées. Couverture partout au Maroc.",
    cta: "Voir les tarifs",
    href: "/tarifs-satellite",
    img: "/assets/images/hero/hero-satellite.jpg",
    alt: "Internet par satellite au Maroc — couverture zones rurales — Qonixs SettaTech",
  },
  {
    id: 4,
    label: "Complexes Touristiques",
    badge: "Hospitality Tech",
    title: "Solutions réseau\npour complexes & resorts",
    desc: "Infrastructure Wi-Fi, vidéosurveillance et connectivité clé en main pour complexes touristiques marocains.",
    cta: "Demander un devis",
    href: "/services",
    img: "/assets/images/hero/hero-maroc-resort.jpg",
    alt: "Solutions réseau pour complexes touristiques et resorts au Maroc — Qonixs SettaTech",
  },
  {
    id: 5,
    label: "Infrastructure Entreprise",
    badge: "Réseaux Professionnels",
    title: "Déploiement réseau\npour entreprises marocaines",
    desc: "LAN, VLAN, fibre optique, switches manageables et Wi-Fi 6 pour bureaux et immeubles d'affaires.",
    cta: "En savoir plus",
    href: "/services",
    img: "/assets/images/hero/hero-maroc-tower.jpg",
    alt: "Infrastructure réseau entreprises immeubles d'affaires au Maroc — Qonixs SettaTech",
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
            alt={slide.alt}
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
            {/* Branding SettaTech */}
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-dm font-bold text-white/60 uppercase tracking-widest">
                SettaTech
                <span className="text-white/30">•</span>
                Qonixs
              </span>
            </div>

            {/* Badge service */}
            <span className="inline-block px-3 py-1 text-xs font-dm text-primary bg-primary/20 rounded-full mb-4 border border-primary/30">
              {slide.badge}
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
                className="px-6 py-3 bg-primary text-white font-dm font-medium rounded-xl hover:bg-sky-600 transition-colors text-sm"
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

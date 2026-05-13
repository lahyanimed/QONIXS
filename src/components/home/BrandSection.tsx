"use client";

/**
 * BrandSection — Section Partenaires Officiels (style flyer)
 * Inspiré des visuels Ruijie Reyee (dark blue) et TP-Link (blanc épuré)
 * Présente les deux marques partenaires avec leurs produits phares
 */

import Link from "next/link";
import { motion } from "framer-motion";

// Produits Ruijie mis en avant
const ruijieProducts = [
  { name: "RG-RAP6262(G)", type: "Point d'accès WiFi 6 Extérieur IP68" },
  { name: "RG-RAP2266", type: "Point d'accès WiFi 6 Plafonnier AX3000" },
  { name: "RG-RAP2200(E)", type: "Point d'accès WiFi 5 Plafonnier" },
  { name: "RG-ES124G-L", type: "Switch 24 ports Gigabit Desktop" },
  { name: "RG-ES220GS-P", type: "Switch manageable PoE+ 250W" },
];

// Produits TP-Link mis en avant
const tplinkProducts = [
  { name: "Archer BE220", type: "Routeur WiFi 7 BE3600 — nouvelle génération" },
  { name: "Archer AX73", type: "Routeur WiFi 6 AX5400 Haut débit" },
  { name: "EAP613 / EAP723", type: "Points d'accès Omada WiFi 6 & 7" },
  { name: "Tapo C320WS", type: "Caméra IP 4MP Vision nocturne couleur" },
  { name: "Deco XE75", type: "Système Mesh WiFi 6E Tri-Band" },
];

export default function BrandSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="font-syne font-bold text-2xl text-dark mb-2">
          Nos marques <span className="text-primary">partenaires</span>
        </h2>
        <p className="font-dm text-sm text-gray-500">
          Distributeur officiel au Maroc — Garantie constructeur 2 ans
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ========= RUIJIE REYEE ========= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative rounded-2xl overflow-hidden group"
          style={{ background: "#0d2244" }}
        >
          {/* Cercles décoratifs (style Ruijie) */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-sky-400/10 pointer-events-none" />
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full border border-sky-400/15 pointer-events-none" />
          <div className="absolute top-1/2 right-4 w-24 h-24 rounded-full bg-sky-500/5 pointer-events-none" />

          <div className="relative z-10 p-7">
            {/* En-tête Ruijie */}
            <div className="flex items-start justify-between mb-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {/* Logo Ruijie simplifié — R stylisé */}
                  <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center">
                    <span className="font-syne font-black text-white text-sm">R</span>
                  </div>
                  <span className="font-syne font-bold text-white text-xl tracking-wide">Ruijie</span>
                  <span className="font-syne font-light text-sky-400 text-xl">Reyee</span>
                </div>
                <p className="text-sky-300/70 text-xs font-dm">Solutions réseau entreprise & hospitality</p>
              </div>
            </div>

            {/* Description */}
            <p className="font-dm text-sm text-sky-100/80 leading-relaxed mb-5 max-w-sm">
              Équipements réseau professionnels de qualité entreprise. <strong className="text-white">Toujours stable</strong> — conçus pour les environnements difficiles. Idéal pour hôtels, résidences et entreprises au Maroc.
            </p>

            {/* Produits phares */}
            <div className="space-y-2 mb-6">
              {ruijieProducts.map((p) => (
                <div key={p.name} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                  <span className="font-syne font-bold text-white text-xs">{p.name}</span>
                  <span className="text-sky-300/60 text-[10px] font-dm hidden sm:block">— {p.type}</span>
                </div>
              ))}
            </div>

            {/* Images produits Ruijie (miniatures) */}
            <div className="flex gap-2 mb-6">
              {[
                { src: "/products/RG-RAP2266.png", alt: "Ruijie RAP2266 point d'accès WiFi 6 Maroc" },
                { src: "/products/RG-RAP6262(G).png", alt: "Ruijie RAP6262 extérieur IP68 Maroc" },
                { src: "/products/RG-ES220GS-P.png", alt: "Ruijie switch PoE+ manageable Maroc" },
                { src: "/products/RG-RAP2200(E).png", alt: "Ruijie RAP2200 point d'accès WiFi 5 Maroc" },
              ].map((img) => (
                <div key={img.src} className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={img.alt} className="w-12 h-12 object-contain" />
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-3">
              <Link
                href="/categorie/access-points"
                className="px-5 py-2.5 bg-sky-500 text-white rounded-xl font-dm font-medium text-sm hover:bg-sky-400 transition-colors"
              >
                Points d'accès Ruijie
              </Link>
              <Link
                href="/categorie/switches"
                className="px-5 py-2.5 bg-white/10 border border-white/20 text-white rounded-xl font-dm font-medium text-sm hover:bg-white/15 transition-colors"
              >
                Switches Ruijie
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ========= TP-LINK ========= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="relative rounded-2xl overflow-hidden group bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
        >
          {/* Fond dégradé subtil */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-sky-50/30 pointer-events-none" />

          <div className="relative z-10 p-7">
            {/* En-tête TP-Link */}
            <div className="flex items-start justify-between mb-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {/* Logo TP-Link simplifié */}
                  <div className="w-8 h-8 rounded-lg bg-[#4ABFBF] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                    </svg>
                  </div>
                  <span className="font-syne font-bold text-dark text-xl">tp-link</span>
                </div>
                <p className="text-gray-400 text-xs font-dm">Routeurs, Caméras, Points d'accès & Mesh</p>
              </div>
            </div>

            {/* Description */}
            <p className="font-dm text-sm text-gray-600 leading-relaxed mb-5 max-w-sm">
              La marque réseau <strong className="text-dark">#1 mondiale</strong>. WiFi 6 & WiFi 7, caméras Tapo 4K, systèmes Mesh Deco et points d'accès Omada pour professionnels et particuliers au Maroc.
            </p>

            {/* Produits phares */}
            <div className="space-y-2 mb-6">
              {tplinkProducts.map((p) => (
                <div key={p.name} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="font-syne font-bold text-dark text-xs">{p.name}</span>
                  <span className="text-gray-400 text-[10px] font-dm hidden sm:block">— {p.type}</span>
                </div>
              ))}
            </div>

            {/* Images produits TP-Link */}
            <div className="flex gap-2 mb-6">
              {[
                { src: "/assets/images/products/archer-be220.jpg", alt: "TP-Link Archer BE220 WiFi 7 Maroc" },
                { src: "/assets/images/products/eap613.jpg", alt: "TP-Link EAP613 point d'accès WiFi 6 Maroc" },
                { src: "/assets/images/products/tapo-c320ws.png", alt: "Tapo C320WS caméra 4MP Maroc" },
                { src: "/assets/images/products/deco-x60.jpg", alt: "TP-Link Deco X60 WiFi Mesh Maroc" },
              ].map((img) => (
                <div key={img.src} className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={img.alt} className="w-12 h-12 object-contain" />
                </div>
              ))}
            </div>

            {/* Badges WiFi */}
            <div className="flex flex-wrap gap-2 mb-5">
              {["WiFi 7", "WiFi 6E", "WiFi 6", "Mesh", "Tapo 4K", "Omada"].map((b) => (
                <span key={b} className="px-2.5 py-0.5 bg-sky-50 border border-sky-100 rounded-full text-primary text-[10px] font-dm font-medium">
                  {b}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-3">
              <Link
                href="/categorie/routeurs"
                className="px-5 py-2.5 bg-primary text-white rounded-xl font-dm font-medium text-sm hover:bg-sky-600 transition-colors"
              >
                Routeurs TP-Link
              </Link>
              <Link
                href="/categorie/cameras"
                className="px-5 py-2.5 bg-gray-50 border border-gray-200 text-dark rounded-xl font-dm font-medium text-sm hover:border-primary hover:text-primary transition-colors"
              >
                Caméras Tapo
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

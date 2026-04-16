"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/store/cartStore";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/categorie/routeurs", label: "Routeurs" },
  { href: "/categorie/access-points", label: "Points d'accès" },
  { href: "/categorie/mesh", label: "WiFi Mesh" },
  { href: "/categorie/switches", label: "Switches" },
  { href: "/categorie/cameras", label: "Caméras IP" },
  { href: "/services", label: "Services" },
  { href: "/tarifs-satellite", label: "Satellite" },
  { href: "/a-propos", label: "À propos" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      {/* Logo Q — connectivité & réseau */}
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="group-hover:scale-105 transition-transform shrink-0">
        <rect width="36" height="36" rx="9" fill="#0ea5e9"/>
        {/* Cercle = corps du Q */}
        <circle cx="17" cy="17" r="9" stroke="white" strokeWidth="2.8" fill="none"/>
        {/* Queue du Q */}
        <line x1="23.4" y1="23.4" x2="29" y2="29" stroke="white" strokeWidth="2.8" strokeLinecap="round"/>
        {/* Point central WiFi */}
        <circle cx="17" cy="17" r="2.2" fill="white"/>
        {/* Arc WiFi intérieur */}
        <path d="M13.5 17c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        {/* Arc WiFi extérieur */}
        <path d="M11 17c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
      </svg>
      <span className="text-xl font-syne font-bold text-dark">
        qoni<span className="text-primary">xs</span>
      </span>
    </Link>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const count = useCartStore((s) => s.getCount());

  useEffect(() => setMounted(true), []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/recherche?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-dark text-white text-xs py-2 font-dm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>Livraison gratuite à partir de 500 MAD</span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="hidden sm:inline">Livraison Express: Casablanca, Rabat, Marrakech</span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline">0660248290</span>
          </div>
          {/* Réseaux sociaux */}
          <div className="flex items-center gap-2 shrink-0">
            <a href="https://www.instagram.com/qonixs.ma/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm4.5-7.5a1 1 0 110-2 1 1 0 010 2z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61586069708201" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-dm text-gray-700 hover:text-primary rounded-lg hover:bg-sky-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Search - Desktop */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher..."
                  className="w-48 lg:w-56 pl-9 pr-4 py-2 text-sm rounded-full border border-gray-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 font-dm"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" strokeWidth="2" />
                  <path d="m21 21-4.35-4.35" strokeWidth="2" />
                </svg>
              </div>
            </form>

            {/* Search - Mobile */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-primary"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <path d="m21 21-4.35-4.35" strokeWidth="2" />
              </svg>
            </button>

            {/* Cart */}
            <Link href="/panier" className="relative p-2 text-gray-600 hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
              </svg>
              {mounted && count > 0 && (
                <motion.span
                  key={count}
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center"
                >
                  {count}
                </motion.span>
              )}
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-primary"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                {mobileOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-gray-100 overflow-hidden"
            >
              <form onSubmit={handleSearch} className="p-3">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher un produit..."
                  autoFocus
                  className="w-full pl-4 pr-4 py-2.5 text-sm rounded-full border border-gray-200 focus:border-primary focus:outline-none font-dm"
                />
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Nav Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-gray-100 bg-white overflow-hidden"
            >
              <nav className="py-2 px-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 text-sm font-dm text-gray-700 hover:text-primary hover:bg-sky-50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

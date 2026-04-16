"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface PromoBannerProps {
  variant: "dark" | "red";
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
}

export default function PromoBanner({ variant, eyebrow, title, subtitle, cta, href }: PromoBannerProps) {
  const isDark = variant === "dark";

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className={`rounded-2xl p-8 ${
        isDark
          ? "bg-dark text-white"
          : "bg-gradient-to-br from-primary to-cyan-600 text-white"
      }`}
    >
      <span className={`text-xs font-dm uppercase tracking-widest ${isDark ? "text-primary" : "text-white/70"}`}>
        {eyebrow}
      </span>
      <h3 className="font-syne font-bold text-2xl mt-2 mb-1">{title}</h3>
      <p className={`text-sm font-dm mb-5 ${isDark ? "text-gray-400" : "text-white/80"}`}>
        {subtitle}
      </p>
      <Link
        href={href}
        className={`inline-block px-5 py-2.5 text-sm font-dm font-medium rounded-lg transition-colors ${
          isDark
            ? "bg-primary text-white hover:bg-primary-dark"
            : "bg-white text-primary hover:bg-gray-100"
        }`}
      >
        {cta}
      </Link>
    </motion.div>
  );
}

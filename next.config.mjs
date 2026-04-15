/** @type {import('next').NextConfig} */
const nextConfig = {
  // Images externes autorisées (CDN fabricants + Unsplash)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.tp-link.com",
        pathname: "/upload/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Désactive l'optimisation pour les img tags natifs
    unoptimized: true,
  },
  // Compression activée en production
  compress: true,
  // ESLint : ne bloque pas le build pour les avertissements
  eslint: { ignoreDuringBuilds: true },
  // TypeScript : ne bloque pas le build pour les erreurs de type mineures
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;

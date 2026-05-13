import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Guides WiFi & Réseau au Maroc | Qonixs SettaTech",
  description:
    "Guides d'achat, comparatifs, tutoriels et conseils sur les équipements WiFi, réseau, caméras IP et internet par satellite au Maroc. Blog technique Qonixs by SettaTech.",
  keywords: [
    "blog WiFi Maroc",
    "guide routeur WiFi 6 Maroc",
    "comparatif équipements réseau Maroc",
    "tutoriel WiFi hôtel",
    "internet satellite Maroc",
    "installation caméra IP Maroc",
    "guide achat réseau Maroc",
  ],
  alternates: { canonical: "https://qonixs.com/blog" },
  openGraph: {
    title: "Blog — Guides WiFi & Réseau au Maroc | Qonixs",
    description: "Guides techniques, comparatifs et tutoriels sur les équipements réseau et internet au Maroc.",
    url: "https://qonixs.com/blog",
  },
};

// ─── Articles à venir (placeholders SEO) ──────────────────────────────────────
const upcomingArticles = [
  {
    slug: "guide-routeur-wifi6-maroc-2026",
    title: "Guide complet : Quel routeur WiFi 6 choisir au Maroc en 2026 ?",
    description: "Comparatif des meilleurs routeurs WiFi 6 disponibles au Maroc — critères de sélection, top 5 et FAQ.",
    category: "Guide d'achat",
    readTime: "8 min",
    date: "Prochainement",
    badge: "À venir",
  },
  {
    slug: "wifi-mesh-vs-routeur-traditionnel",
    title: "WiFi Mesh vs Routeur Traditionnel : Lequel choisir ?",
    description: "Avantages et inconvénients des deux technologies. Quand opter pour un système Mesh ?",
    category: "Comparatif",
    readTime: "6 min",
    date: "Prochainement",
    badge: "À venir",
  },
  {
    slug: "wifi-hotel-maroc-guide-complet",
    title: "WiFi pour les hôtels au Maroc : Guide complet du gestionnaire",
    description: "Comment déployer un WiFi de qualité dans votre hôtel ou complexe touristique au Maroc.",
    category: "B2B",
    readTime: "10 min",
    date: "Prochainement",
    badge: "À venir",
  },
  {
    slug: "internet-satellite-maroc-zones-rurales",
    title: "Internet par satellite au Maroc : Solutions pour les zones rurales",
    description: "Tout sur l'internet satellite au Maroc — couverture, tarifs, installation et alternatives.",
    category: "Satellite",
    readTime: "7 min",
    date: "Prochainement",
    badge: "À venir",
  },
  {
    slug: "installer-camera-ip-tutoriel",
    title: "Installation caméras IP Tapo : Tutoriel étape par étape",
    description: "Guide pratique pour installer et configurer vos caméras IP Tapo à la maison ou au bureau.",
    category: "Tutoriel",
    readTime: "12 min",
    date: "Prochainement",
    badge: "À venir",
  },
  {
    slug: "tp-link-vs-ruijie-comparatif",
    title: "TP-Link vs Ruijie Reyee : Quel fabricant choisir au Maroc ?",
    description: "Comparatif complet entre les deux marques — qualité, prix, support et cas d'usage.",
    category: "Comparatif",
    readTime: "9 min",
    date: "Prochainement",
    badge: "À venir",
  },
];

const categoryColors: Record<string, string> = {
  "Guide d'achat": "bg-primary/10 text-primary",
  "Comparatif": "bg-orange-100 text-orange-600",
  "B2B": "bg-purple-100 text-purple-600",
  "Satellite": "bg-sky-100 text-sky-600",
  "Tutoriel": "bg-green-100 text-green-600",
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Qonixs — Guides WiFi & Réseau au Maroc",
    url: "https://qonixs.com/blog",
    description: "Guides, comparatifs et tutoriels sur les équipements réseau et internet au Maroc par SettaTech.",
    publisher: {
      "@type": "Organization",
      name: "SettaTech",
      url: "https://qonixs.com",
    },
    inLanguage: "fr-MA",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-dm text-gray-400 mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
          <span>/</span>
          <span className="text-dark font-medium">Blog</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <h1 className="font-syne font-bold text-4xl text-dark mb-3">Blog Qonixs</h1>
          <p className="font-dm text-gray-500 max-w-2xl">
            Guides d'achat, comparatifs, tutoriels et actualités sur les équipements WiFi, réseau,
            caméras IP et internet par satellite au Maroc. Expertise SettaTech à votre service.
          </p>
        </div>

        {/* Coming soon notice */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="font-syne font-bold text-dark mb-1">Articles en cours de rédaction</p>
            <p className="font-dm text-gray-500 text-sm">
              Notre équipe prépare des guides détaillés et des comparatifs pour vous aider à faire
              les meilleurs choix réseau au Maroc. Revenez bientôt ou contactez-nous directement pour un conseil personnalisé.
            </p>
            <a
              href="https://wa.me/212660248290"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 text-sm text-primary font-dm font-medium hover:underline"
            >
              Obtenir un conseil gratuit →
            </a>
          </div>
        </div>

        {/* Upcoming Articles Grid */}
        <h2 className="font-syne font-bold text-2xl text-dark mb-6">Prochains articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {upcomingArticles.map((article) => (
            <article
              key={article.slug}
              className="rounded-2xl border border-gray-100 overflow-hidden hover:border-primary/30 hover:shadow-md transition-all"
            >
              {/* Placeholder image area */}
              <div className="h-40 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <span className="font-dm text-xs text-gray-300 uppercase tracking-wider">Image à venir</span>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-dm font-medium px-2 py-0.5 rounded ${categoryColors[article.category] || "bg-gray-100 text-gray-500"}`}>
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400 font-dm">{article.readTime}</span>
                </div>

                <h3 className="font-syne font-bold text-dark text-base mb-2 leading-snug">
                  {article.title}
                </h3>
                <p className="font-dm text-gray-500 text-sm mb-4 leading-relaxed">
                  {article.description}
                </p>

                <span className="inline-block text-xs font-dm text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                  {article.badge}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-dark rounded-2xl p-10 text-white text-center">
          <h2 className="font-syne font-bold text-2xl mb-2">Besoin d'un conseil maintenant ?</h2>
          <p className="font-dm text-gray-300 mb-6 max-w-md mx-auto">
            Nos experts sont disponibles par WhatsApp pour répondre à toutes vos questions techniques
            sur les équipements WiFi, réseau et satellite au Maroc.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/212660248290"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl font-dm font-medium hover:bg-green-400 transition-colors"
            >
              Contacter sur WhatsApp
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white rounded-xl font-dm font-medium hover:bg-white/10 transition-colors"
            >
              Voir nos services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogArticles, categoryColors } from "@/lib/blog";

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
  ],
  alternates: { canonical: "https://qonixs.com/blog" },
  openGraph: {
    title: "Blog — Guides WiFi & Réseau au Maroc | Qonixs",
    description:
      "Guides techniques, comparatifs et tutoriels sur les équipements réseau et internet au Maroc.",
    url: "https://qonixs.com/blog",
  },
};

const categories = ["Tous", "Guide d'achat", "Comparatif", "B2B", "Satellite", "Tutoriel"];

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Qonixs — Guides WiFi & Réseau au Maroc",
    url: "https://qonixs.com/blog",
    description:
      "Guides, comparatifs et tutoriels sur les équipements réseau et internet au Maroc par SettaTech.",
    publisher: {
      "@type": "Organization",
      name: "SettaTech",
      url: "https://qonixs.com",
    },
    inLanguage: "fr-MA",
    blogPost: blogArticles.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      url: `https://qonixs.com/blog/${a.slug}`,
      datePublished: a.dateISO,
      image: a.image,
    })),
  };

  const featured = blogArticles[0];
  const rest = blogArticles.slice(1);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-sm font-dm text-gray-400 mb-8"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            Accueil
          </Link>
          <span>/</span>
          <span className="text-dark font-medium">Blog</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <h1 className="font-syne font-bold text-4xl text-dark mb-3">Blog Qonixs</h1>
          <p className="font-dm text-gray-500 max-w-2xl">
            Guides d&apos;achat, comparatifs et tutoriels sur les équipements WiFi, réseau, caméras IP
            et internet par satellite au Maroc. Expertise SettaTech à votre service.
          </p>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`text-sm font-dm px-4 py-1.5 rounded-full cursor-default ${
                cat === "Tous"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Featured article */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group block rounded-3xl overflow-hidden border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto min-h-[260px]">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`text-xs font-dm font-semibold px-3 py-1 rounded-full ${
                    categoryColors[featured.category] ?? "bg-gray-100 text-gray-500"
                  }`}
                >
                  {featured.category}
                </span>
                <span className="text-xs text-gray-400 font-dm">{featured.readTime} de lecture</span>
              </div>
              <h2 className="font-syne font-bold text-2xl md:text-3xl text-dark mb-3 leading-snug group-hover:text-primary transition-colors">
                {featured.title}
              </h2>
              <p className="font-dm text-gray-500 text-sm leading-relaxed mb-6">
                {featured.description}
              </p>
              <div className="flex items-center justify-between">
                <time className="text-xs text-gray-400 font-dm" dateTime={featured.dateISO}>
                  {featured.date}
                </time>
                <span className="text-sm font-dm font-medium text-primary">
                  Lire l&apos;article →
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Articles grid */}
        <h2 className="font-syne font-bold text-2xl text-dark mb-6">Tous les articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {rest.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group rounded-2xl border border-gray-100 overflow-hidden hover:border-primary/30 hover:shadow-md transition-all flex flex-col"
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`text-xs font-dm font-medium px-2 py-0.5 rounded ${
                      categoryColors[article.category] ?? "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400 font-dm">{article.readTime}</span>
                </div>

                <h3 className="font-syne font-bold text-dark text-base mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="font-dm text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">
                  {article.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <time className="text-xs text-gray-400 font-dm" dateTime={article.dateISO}>
                    {article.date}
                  </time>
                  <span className="text-xs font-dm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Lire →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-dark rounded-3xl p-10 text-white text-center">
          <h2 className="font-syne font-bold text-2xl mb-2">
            Besoin d&apos;un conseil maintenant ?
          </h2>
          <p className="font-dm text-gray-300 mb-6 max-w-md mx-auto">
            Nos experts sont disponibles par WhatsApp pour répondre à toutes vos questions
            techniques sur les équipements WiFi, réseau et satellite au Maroc.
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
              className="inline-flex items-center justify-center px-6 py-3 border border
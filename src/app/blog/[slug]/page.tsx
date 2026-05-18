import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogArticles, getArticleBySlug, categoryColors } from "@/lib/blog";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: `${article.title} | Blog Qonixs`,
    description: article.description,
    alternates: { canonical: `https://qonixs.com/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://qonixs.com/blog/${article.slug}`,
      images: [{ url: article.image, alt: article.imageAlt }],
      type: "article",
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const others = blogArticles.filter((a) => a.slug !== article.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.dateISO,
    author: { "@type": "Organization", name: "SettaTech", url: "https://qonixs.com" },
    publisher: {
      "@type": "Organization",
      name: "SettaTech",
      logo: { "@type": "ImageObject", url: "https://qonixs.com/assets/images/logo.svg" },
    },
    mainEntityOfPage: `https://qonixs.com/blog/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-dm text-gray-400 mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-dark font-medium line-clamp-1">{article.title}</span>
        </nav>

        {/* Category & Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className={`text-xs font-dm font-semibold px-3 py-1 rounded-full ${categoryColors[article.category] ?? "bg-gray-100 text-gray-500"}`}>
            {article.category}
          </span>
          <span className="text-sm text-gray-400 font-dm">{article.readTime} de lecture</span>
          <time className="text-sm text-gray-400 font-dm" dateTime={article.dateISO}>
            {article.date}
          </time>
        </div>

        {/* Title */}
        <h1 className="font-syne font-bold text-3xl md:text-4xl text-dark leading-tight mb-6">
          {article.title}
        </h1>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden mb-10 shadow-md">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <article
          className="prose prose-lg max-w-none
            prose-headings:font-syne prose-headings:font-bold prose-headings:text-dark
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2
            prose-p:font-dm prose-p:text-gray-600 prose-p:leading-relaxed
            prose-li:font-dm prose-li:text-gray-600
            prose-strong:text-dark prose-strong:font-semibold
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-table:text-sm prose-th:bg-gray-50 prose-th:font-syne prose-th:p-3
            prose-td:p-3 prose-td:border prose-td:border-gray-100"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* CTA WhatsApp */}
        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex-1">
            <p className="font-syne font-bold text-dark text-lg mb-1">
              Besoin d&apos;un conseil personnalisé ?
            </p>
            <p className="font-dm text-gray-500 text-sm">
              Nos experts SettaTech sont disponibles par WhatsApp pour répondre à vos questions techniques.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://wa.me/212660248290"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white rounded-xl font-dm font-medium text-sm hover:bg-green-400 transition-colors whitespace-nowrap"
            >
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary/30 text-primary rounded-xl font-dm font-medium text-sm hover:bg-primary/5 transition-colors whitespace-nowrap"
            >
              Formulaire contact
            </Link>
          </div>
        </div>

        {/* Other articles */}
        {others.length > 0 && (
          <div className="mt-14">
            <h2 className="font-syne font-bold text-2xl text-dark mb-6">Autres articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/blog/${other.slug}`}
                  className="group rounded-2xl border border-gray-100 overflow-hidden hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                      src={other.image}
                      alt={other.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 280px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <span className={`text-xs font-dm font-medium px-2 py-0.5 rounded ${categoryColors[other.category] ?? "bg-gray-100 text-gray-500"}`}>
                      {other.category}
                    </span>
                    <h3 className="font-syne font-bold text-dark text-sm mt-2 leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                      {other.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-dm text-gray-400 hover:text-primary transition-colors">
            ← Retour au blog
          </Link>
        </div>
      </div>
    </>
  );
}

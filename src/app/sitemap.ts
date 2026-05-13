import { MetadataRoute } from "next";
import { products, categories } from "@/lib/products";

const BASE_URL = "https://qonixs.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ─── Pages statiques principales ────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tarifs-satellite`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/a-propos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/recherche`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // ─── Pages catégories ────────────────────────────────────────────────────────
  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${BASE_URL}/categorie/${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // ─── Pages produits ──────────────────────────────────────────────────────────
  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE_URL}/produit/${product.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: product.badge === "Bestseller" || product.badge === "Top vente" ? 0.8 : 0.65,
  }));

  return [...staticPages, ...categoryPages, ...productPages];
}

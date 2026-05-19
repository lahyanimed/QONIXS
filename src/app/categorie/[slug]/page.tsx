import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, categories, getProductsForPage } from "@/lib/products";
import CategoryClient from "@/components/products/CategoryClient";

const BASE_URL = "https://qonixs.com";

// ─── Noms lisibles des catégories ────────────────────────────────────────────
const categoryMeta: Record<string, { name: string; description: string; keywords: string[] }> = {
  routeurs: {
    name: "Routeurs WiFi",
    description: "Routeurs WiFi 6 et WiFi 7 TP-Link au Maroc — Archer AX73, AX55, BE220 et plus. Livraison express 24-48h à Settat, Casablanca, Rabat, Marrakech. Support technique 7j/7.",
    keywords: ["routeur WiFi Maroc", "TP-Link Maroc", "WiFi 6 Maroc", "WiFi 7 Maroc", "acheter routeur Maroc", "meilleur routeur Maroc", "routeur TP-Link prix Maroc"],
  },
  mesh: {
    name: "WiFi Mesh",
    description: "Systèmes WiFi Mesh TP-Link Deco au Maroc — couverture totale jusqu'à 650m². Idéal pour les grandes maisons, hôtels et résidences. Deco X60, XE75, M4.",
    keywords: ["WiFi Mesh Maroc", "système mesh Maroc", "TP-Link Deco Maroc", "WiFi sans zones mortes Maroc", "couverture WiFi totale Maroc"],
  },
  switches: {
    name: "Switches Réseau",
    description: "Switches réseau Gigabit TP-Link et Ruijie au Maroc — switches managés et non-managés, PoE+, 8 à 48 ports. Solution réseau pour entreprises, hôtels et data centers.",
    keywords: ["switch réseau Maroc", "switch Gigabit Maroc", "switch PoE Maroc", "TP-Link switch Maroc", "Ruijie switch Maroc", "switch manageable Maroc"],
  },
  cameras: {
    name: "Caméras IP Tapo",
    description: "Caméras de surveillance IP Tapo au Maroc — intérieur et extérieur, 2MP à 4MP, vision nocturne couleur, détection de mouvement. Sécurisez votre maison ou bureau.",
    keywords: ["caméra IP Maroc", "caméra surveillance Maroc", "Tapo Maroc", "caméra WiFi Maroc", "vidéosurveillance Maroc", "caméra extérieur Maroc"],
  },
  "4g-lte": {
    name: "Routeurs 4G/LTE",
    description: "Routeurs 4G LTE TP-Link au Maroc — internet mobile haut débit avec slot SIM. Parfait pour les zones sans fibre ou ADSL. MR6400, MR600 disponibles.",
    keywords: ["routeur 4G Maroc", "internet 4G Maroc", "routeur SIM Maroc", "internet mobile Maroc", "4G LTE Maroc", "routeur 4G LTE prix Maroc"],
  },
  "access-points": {
    name: "Points d'accès WiFi",
    description: "Points d'accès WiFi professionnels Ruijie Reyee et TP-Link Omada au Maroc — pour hôtels, résidences, entreprises. Coverage intérieure et extérieure IP68.",
    keywords: ["point d'accès WiFi Maroc", "access point Maroc", "Ruijie Reyee Maroc", "TP-Link Omada Maroc", "WiFi hôtel Maroc", "WiFi professionnel Maroc"],
  },
};

// ─── Génération des routes statiques ────────────────────────────────────────
export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

// ─── Métadonnées dynamiques ──────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const meta = categoryMeta[params.slug];
  if (!meta) return { title: "Catégorie — Qonixs" };

  return {
    title: `${meta.name} au Maroc — Prix & Livraison Express`,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${BASE_URL}/categorie/${params.slug}`,
    },
    openGraph: {
      title: `${meta.name} au Maroc | Qonixs — SettaTech`,
      description: meta.description,
      url: `${BASE_URL}/categorie/${params.slug}`,
    },
  };
}

// ─── Page (Server Component) ─────────────────────────────────────────────────
export default function CategoryPage({ params }: { params: { slug: string } }) {
  const meta = categoryMeta[params.slug];
  const categoryProducts = getProductsForPage(params.slug);

  if (!meta && categoryProducts.length === 0) notFound();

  const categoryName = meta?.name || params.slug;

  // ─── JSON-LD Breadcrumb ────────────────────────────────────────────────────
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: categoryName,
        item: `${BASE_URL}/categorie/${params.slug}`,
      },
    ],
  };

  // ─── JSON-LD ItemList ──────────────────────────────────────────────────────
  const jsonLdItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${categoryName} — Qonixs Maroc`,
    description: meta?.description,
    url: `${BASE_URL}/categorie/${params.slug}`,
    numberOfItems: categoryProducts.length,
    itemListElement: categoryProducts.slice(0, 10).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `${BASE_URL}/produit/${p.slug}`,
      image: p.imageUrl ? `${BASE_URL}${p.imageUrl}` : undefined,
      item: {
        "@type": "Product",
        name: p.name,
        brand: { "@type": "Brand", name: p.brand },
        offers: {
          "@type": "Offer",
          price: p.price.toString(),
          priceCurrency: "MAD",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }}
      />
      <CategoryClient slug={params.slug} categoryName={categoryName} />
    </>
  );
}

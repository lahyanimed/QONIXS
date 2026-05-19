import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/lib/products";
import ProductDetail from "@/components/products/ProductDetail";

const BASE_URL = "https://qonixs.com";

// ─── Génération des routes statiques ────────────────────────────────────────
export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

// ─── Nom de catégorie lisible ────────────────────────────────────────────────
function getCategoryName(category: string): string {
  const map: Record<string, string> = {
    routeurs: "Routeurs WiFi",
    mesh: "WiFi Mesh",
    switches: "Switches Réseau",
    cameras: "Caméras IP",
    "4g-lte": "Routeurs 4G/LTE",
    "access-points": "Points d'accès WiFi",
  };
  return map[category] || category;
}

// ─── Métadonnées dynamiques ──────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Produit introuvable" };

  const categoryName = getCategoryName(product.category);
  const title = `${product.name} — ${product.brand} ${categoryName} au Maroc`;
  const description = `${product.name} de ${product.brand} — ${product.description} Disponible chez Qonixs by SettaTech, livraison express 24-48h partout au Maroc. Prix: ${product.price} MAD.`;

  return {
    title,
    description,
    keywords: [
      product.name,
      product.brand,
      categoryName,
      "Maroc",
      "Qonixs",
      "SettaTech",
      `${product.brand} Maroc`,
      `acheter ${product.name}`,
      `prix ${product.name} Maroc`,
      product.specs.wifi || "",
    ].filter(Boolean),
    alternates: {
      canonical: `${BASE_URL}/produit/${product.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/produit/${product.slug}`,
      images: product.imageUrl
        ? [{ url: product.imageUrl, alt: `${product.name} — Qonixs Maroc` }]
        : [{ url: "/assets/images/hero/hero-wifi.jpg", alt: "Qonixs — Solutions Réseau Maroc" }],
    },
  };
}

// ─── Page (Server Component) ─────────────────────────────────────────────────
export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const categoryName = getCategoryName(product.category);
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  // ─── JSON-LD Product Schema ────────────────────────────────────────────────
  const jsonLdProduct = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${BASE_URL}/produit/${product.slug}#product`,
    sku: product.slug.toUpperCase(),
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    image: product.imageUrl
      ? `${BASE_URL}${product.imageUrl}`
      : `${BASE_URL}/assets/images/hero/hero-wifi.jpg`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating.toString(),
      reviewCount: product.reviews.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    offers: {
      "@type": "Offer",
      url: `${BASE_URL}/produit/${product.slug}`,
      priceCurrency: "MAD",
      price: product.price.toString(),
      ...(product.oldPrice && { priceValidUntil: "2026-12-31" }),
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: "Qonixs by SettaTech",
        url: BASE_URL,
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          currency: "MAD",
          value: "0",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: "1",
            maxValue: "2",
            unitCode: "DAY",
          },
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "MA",
        },
      },
    },
    ...(discount > 0 && {
      review: {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: product.rating.toString(),
          bestRating: "5",
        },
        author: {
          "@type": "Organization",
          name: "Qonixs",
        },
      },
    }),
  };

  // ─── JSON-LD Breadcrumb Schema ─────────────────────────────────────────────
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
        item: `${BASE_URL}/categorie/${product.category}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `${BASE_URL}/produit/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <ProductDetail
        product={product}
        relatedProducts={relatedProducts}
        categoryName={categoryName}
      />
    </>
  );
}

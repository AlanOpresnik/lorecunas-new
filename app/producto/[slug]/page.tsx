import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/lib/data";

import type { Metadata } from "next";
import { ProductDetail } from "@/components/productDetail/product-detail";
import { RelatedProducts } from "@/components/productDetail/related-products";
import TutorialVideoPlayer from "@/components/productDetail/VideoPlayer/TutorialVideoPlayer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Producto no encontrado" };
  return {
    title: `${product.name} | Cunita Bebe`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <ProductDetail product={product} />
      <TutorialVideoPlayer />
      <RelatedProducts
        currentProductId={product.id}
        categorySlug={product.categorySlug}
      />
    </>
  );
}

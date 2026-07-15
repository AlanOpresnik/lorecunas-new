import { notFound } from "next/navigation";

import type { Metadata } from "next";
import { ProductDetail } from "@/components/productDetail/product-detail";
import { RelatedProducts } from "@/components/productDetail/related-products";
import TutorialVideoPlayer from "@/components/productDetail/VideoPlayer/TutorialVideoPlayer";
import { getProductById } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string; id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) return { title: "Producto no encontrado" };
  return {
    title: `${product.name} | Cunita Bebe`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) notFound();

  return (
    <>
      <ProductDetail product={product} />
      <TutorialVideoPlayer />
      <RelatedProducts
        currentProductId={product._id}
        categorySlug={product.categorySlug}
      />
    </>
  );
}

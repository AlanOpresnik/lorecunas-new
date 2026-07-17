
import type { Metadata } from "next";
import { ProductDetail } from "@/components/productDetail/product-detail";
import { api } from "@/lib/api";
import { Suspense } from "react";
import ProductDetailSkeleton from "@/components/productDetail/ProductDetailSkeleton/ProductDetailSkeleton";

interface Props {
  params: Promise<{ slug: string; id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = await api.getProductById(id);
  if (!product) return { title: "Producto no encontrado" };
  return {
    title: `${product.name} | Cunita Bebe`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: Props) {
  return (
    <>
      <Suspense fallback={<ProductDetailSkeleton />}>
        <ProductDetail params={params} />
      </Suspense>
    </>
  );
}

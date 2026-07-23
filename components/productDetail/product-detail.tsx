import Link from "next/link";
import { ChevronRight, Ruler, ArrowLeft } from "lucide-react";
import { formatPrice } from "@/lib/data";
import { type Product } from "@/lib/types";
import ProductDetailsImageSelect from "./product-details-image-select";
import ProductDetailActionsButton from "./Product-detail-actions-button";
import ProductDetailCaracteristics from "./Product-detail-caracteristics";
import { notFound } from "next/navigation";
import { api } from "@/lib/api";
import ProductVideoPlayer from "./VideoPlayer/TutorialVideoPlayer";
import { RelatedProducts } from "./related-products";

interface ProductDetailProps {
  product: Product;
}

interface Props {
  params: Promise<{ slug: string; id: string }>;
}

export async function ProductDetail({ params }: Props) {
  const { id } = await params;
  const product = await api.getProductById(id);
  if (!product) notFound();
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Inicio
        </Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/catalogo" className="hover:text-foreground">
          Catalogo
        </Link>
        <ChevronRight className="h-3 w-3" />
        <Link
          href={`/catalogo?categoria=${product.categorySlug}`}
          className="hover:text-foreground"
        >
          {product.category}
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Images */}
        <ProductDetailsImageSelect product={product} />

        {/* Info */}
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            {product.category}
          </span>
          <h1 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            {product.name}
          </h1>

          <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold tracking-tight text-foreground">
                {formatPrice(product.price)}
              </span>
              <span className="pb-1 text-sm text-muted-foreground">
                Contado
              </span>
            </div>

            {product.originalPrice && (
              <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-muted bg-muted/40 px-3 py-2">
                <span className="text-sm text-muted-foreground">
                  Precio con tarjeta
                </span>
                <span className="font-semibold text-foreground">
                  {product.originalPrice}
                </span>
              </div>
            )}
          </div>

          <p className="mt-6 leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          {/* Dimensions */}
          <div className="grid grid-cols-2 gap-2">
            {product.caracteristics.map((caracteristic) => (
              <div key={caracteristic.title}>
                <ProductDetailCaracteristics caracteristic={caracteristic} />
              </div>
            ))}
          </div>

          {/* Stock */}
          <p className="mt-4 text-sm text-muted-foreground">Stock disponible</p>

          {/* Actions */}
          <ProductDetailActionsButton product={product} />

          <Link
            href="/catalogo"
            className="mt-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al catalogo
          </Link>
        </div>
      </div>

      {product.videoUrl ? (
        <ProductVideoPlayer videoUrl={product.videoUrl} />
      ) : null}

      <div>
        <RelatedProducts categorySlug={product.category} />
      </div>
    </div>
  );
}

import Link from "next/link";
import { ChevronRight, Ruler, ArrowLeft } from "lucide-react";
import { formatPrice } from "@/lib/data";
import { type Product } from "@/lib/types";
import ProductDetailsImageSelect from "./product-details-image-select";
import ProductDetailActionsButton from "./Product-detail-actions-button";
import ProductDetailCaracteristics from "./Product-detail-caracteristics";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
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

          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-3xl font-bold text-foreground">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <p className="mt-6 leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          {/* Dimensions */}
          <div className="grid grid-cols-2 gap-2">
            {product.caracteristics.map((caracteristic) => (
              <ProductDetailCaracteristics caracteristic={caracteristic} />
            ))}
          </div>

          {/* Colors */}

          {/* Stock */}
          <p className="mt-4 text-sm text-muted-foreground">
            {product.stock > 0
              ? `Stock disponible: ${product.stock} unidades`
              : "Sin stock temporalmente"}
          </p>

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
    </div>
  );
}

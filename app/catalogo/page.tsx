import { Suspense } from "react";
import { CatalogContent } from "@/components/Catalog/catalog-content";
import type { Metadata } from "next";
import { api } from "@/lib/api";
import CatalogSkeleton from "@/components/Catalog/CatalogSkeleton";

export const metadata: Metadata = {
  title: "Catalogo | LoreCunas",
  description:
    "Explora nuestro catalogo completo de muebles infantiles premium. Cunas, roperos, comodas y mas.",
};

export default async function CatalogoPage({
  searchParams,
}: {
  searchParams?: Promise<{ categoria?: string }>;
}) {
  const params = await searchParams;
  const selectedCategory = params?.categoria ?? "";

  const [products, categories] = await Promise.all([
    api.getProducts(),
    api.getCategorys(),
  ]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
      <div className="mb-10 text-center">
        <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
          Nuestro Catalogo
        </h1>
        <p className="mt-3 text-muted-foreground">
          Encuentra los muebles perfectos para la habitacion de tu bebe.
        </p>
      </div>

      <Suspense fallback={<CatalogSkeleton />}>
        <CatalogContent
          products={products}
          categories={categories}
          selectedCategory={selectedCategory}
        />
      </Suspense>
    </div>
  );
}

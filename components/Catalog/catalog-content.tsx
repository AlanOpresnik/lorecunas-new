import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import type { Category, Product } from "@/lib/types";
import Link from "next/link";

export function CatalogContent({
  products,
  categories,
  selectedCategory,
}: {
  products: Product[];
  categories: Category[];
  selectedCategory: string;
}) {
  const filtered = selectedCategory
    ? products.filter((product) => product.categorySlug === selectedCategory)
    : products;

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="lg:hidden">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filtros
          </Button>
          <p className="text-sm text-muted-foreground">
            {filtered.length} producto{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="flex gap-8">
        <aside className="hidden w-full shrink-0 lg:block lg:w-56">
          <div className="sticky top-24 rounded-xl border border-border bg-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-serif text-sm font-bold text-card-foreground">
                Categorias
              </h3>
            </div>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/catalogo"
                  className={`block w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                    selectedCategory === ""
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-muted-foreground hover:bg-accent"
                  }`}
                >
                  Todos
                </Link>
              </li>
              {categories.map((cat) => (
                <li key={cat._id}>
                  <Link
                    href={`/catalogo?categoria=${cat.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`block w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                      selectedCategory === cat.name.toLowerCase().replace(/\s+/g, "-")
                        ? "bg-primary/10 font-medium text-primary"
                        : "text-muted-foreground hover:bg-accent"
                    }`}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-lg font-medium text-foreground">
                No se encontraron productos
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Prueba seleccionando otra categoria.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

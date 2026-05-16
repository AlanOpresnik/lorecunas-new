"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { ProductCard } from "@/components/product-card"
import { products, categories } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal, X } from "lucide-react"

export function CatalogContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("categoria") || ""

  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc">("default")
  const [showFilters, setShowFilters] = useState(false)

  const filtered = useMemo(() => {
    let result = [...products]
    if (selectedCategory) {
      result = result.filter((p) => p.categorySlug === selectedCategory)
    }
    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price)
    }
    return result
  }, [selectedCategory, sortBy])

  return (
    <div>
      {/* Filters Bar */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="lg:hidden"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filtros
          </Button>
          <p className="text-sm text-muted-foreground">
            {filtered.length} producto{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
          className="rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground"
        >
          <option value="default">Ordenar por</option>
          <option value="price-asc">Menor precio</option>
          <option value="price-desc">Mayor precio</option>
        </select>
      </div>

      <div className="flex gap-8">
        {/* Sidebar */}
        <aside
          className={`${
            showFilters ? "block" : "hidden"
          } w-full shrink-0 lg:block lg:w-56`}
        >
          <div className="sticky top-24 rounded-xl border border-border bg-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-serif text-sm font-bold text-card-foreground">Categorias</h3>
              {selectedCategory && (
                <button
                  onClick={() => setSelectedCategory("")}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>
            <ul className="flex flex-col gap-2">
              <li>
                <button
                  onClick={() => setSelectedCategory("")}
                  className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                    selectedCategory === ""
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-muted-foreground hover:bg-accent"
                  }`}
                >
                  Todos
                </button>
              </li>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                      selectedCategory === cat.slug
                        ? "bg-primary/10 font-medium text-primary"
                        : "text-muted-foreground hover:bg-accent"
                    }`}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Products grid */}
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
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

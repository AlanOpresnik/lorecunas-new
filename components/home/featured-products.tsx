import { ProductCard } from "@/components/product-card"
import { getFeaturedProducts } from "@/lib/data"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function FeaturedProducts() {
  const featured = getFeaturedProducts()

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
      <div className="mb-10 flex flex-col items-center gap-2 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          Lo mas elegido
        </span>
        <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
          Productos Destacados
        </h2>
        <p className="mt-2 max-w-lg text-muted-foreground">
          Descubri los favoritos de nuestras clientas, muebles que combinan diseño, calidad y funcionalidad.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {featured.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/catalogo"
          className="group flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
        >
          Ver todo el catalogo
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}

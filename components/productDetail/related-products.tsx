import { ProductCard } from "@/components/product-card"
import { api } from "@/lib/api"

export async function RelatedProducts({
  categorySlug,
}: {
  categorySlug: string
}) {
  const relatedProducts = await api.getProductsByCategory(categorySlug)


  if (relatedProducts.length === 0) {
    return null
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-12 border-t border-border mt-12">
      <h2 className="mb-8 font-serif text-4xl font-bold text-foreground">
        Productos relacionados
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
        {relatedProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  )
}

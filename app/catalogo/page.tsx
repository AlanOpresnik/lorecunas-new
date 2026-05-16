import { Suspense } from "react"
import { CatalogContent } from "@/components/catalog-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Catalogo | Cunita Bebe",
  description:
    "Explora nuestro catalogo completo de muebles infantiles premium. Cunas, roperos, comodas y mas.",
}

export default function CatalogoPage() {
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

      <Suspense fallback={<div className="py-20 text-center text-muted-foreground">Cargando catalogo...</div>}>
        <CatalogContent />
      </Suspense>
    </div>
  )
}

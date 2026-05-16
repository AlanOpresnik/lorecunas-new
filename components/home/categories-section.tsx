import Image from "next/image"
import Link from "next/link"
import { categories } from "@/lib/data"
import { ArrowRight } from "lucide-react"

export function CategoriesSection() {
  const highlighted = categories.slice(0, 4)

  return (
    <section className="bg-secondary/40 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 flex flex-col items-center gap-2 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Explora
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Categorias Destacadas
          </h2>
          <p className="mt-2 max-w-lg text-muted-foreground">
            Encuentra exactamente lo que necesitas para crear la habitacion soñada de tu bebe.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlighted.map((cat) => (
            <Link
              key={cat.id}
              href={`/catalogo?categoria=${cat.slug}`}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-serif text-lg font-bold text-white">
                  {cat.name}
                </h3>
                <p className="mt-1 text-xs text-white/80">
                  {cat.productCount} productos
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-white/90 transition-colors group-hover:text-white">
                  Explorar
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/categorias"
            className="group flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Ver todas las categorias
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

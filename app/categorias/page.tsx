import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categorias | Cunita Bebe",
  description:
    "Explora nuestras categorias de muebles infantiles: cunas funcionales, cunas estandar, roperos, comodas, decoracion y mas.",
};

export default function CategoriasPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
      <div className="mb-10 text-center">
        <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
          Categorias
        </h1>
        <p className="mt-3 text-muted-foreground">
          Explorá cada categoria y encontra lo ideal para tu bebe.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/catalogo?categoria=${cat.slug}`}
            className="group overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="p-5">
              <h2 className="font-serif text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">
                {cat.name}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                {cat.description}
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs font-medium text-primary">
                {cat.productCount} productos
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

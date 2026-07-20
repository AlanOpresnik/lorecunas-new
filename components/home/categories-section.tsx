import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { api } from "@/lib/api";
import { CategoryCard } from "./CategoryCard";
import { slugify } from "@/lib/validations";

export async function CategoriesSection() {
  const categories = await api.getCategorys();
  const highlighted = categories.slice(0, 4);

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
            Encuentra exactamente lo que necesitas para crear la habitacion
            soñada de tu bebe.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
          {highlighted.map((cat) => (
            <CategoryCard
              description={cat.description}
              href={`/catalogo?categoria=${slugify(cat.name)}`}
              title={cat.name}
              key={cat._id}
            />
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
  );
}

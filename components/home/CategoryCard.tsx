import Link from "next/link";
import { ArrowRight, Baby } from "lucide-react";
import { slugify } from "@/lib/validations";

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
}

export function CategoryCard({ title, description, href }: CategoryCardProps) {
  return (
    <Link
      href={`/catalogo?categoria=${slugify(title)}`}
      className="group relative flex  flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_20px_60px_rgba(0,0,0,.08)]"
    >
      {/* Glow */}
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:scale-150" />

      <div className="relative flex h-full flex-col">
        {/* Icono */}
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-stone-200 bg-stone-50 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
          <Baby className="h-8 w-8" />
        </div>

        {/* Contenido */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold tracking-tight text-stone-900">
            {title}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-7 text-stone-600">
            {description}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center gap-2 font-medium text-primary">
          <span>Explorar</span>

          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

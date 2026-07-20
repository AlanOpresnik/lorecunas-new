import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { api } from "@/lib/api";
import CategorySwiper from "./SwiperCategorys";

export async function CarrouselServerCategory() {
  const categorys = await api.getCategorys();

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
      <div className="mb-10 flex flex-col items-center gap-2 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary"></span>
        <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
          Categorias destacadas
        </h2>
        <p className="mt-2 max-w-lg text-muted-foreground">
          Descubri las categorias mas buscadas.
        </p>
      </div>
      <CategorySwiper categorys={categorys} />
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
  );
}

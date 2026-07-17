import { Skeleton } from "@/components/ui/skeleton";

export default function CarrouselSkeleton() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="mb-14 flex flex-col items-center">
          <Skeleton className="h-10 w-80 rounded-lg" />
          <Skeleton className="mt-4 h-5 w-[520px] rounded-lg" />
          <Skeleton className="mt-2 h-5 w-[420px] rounded-lg" />
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border bg-white"
            >
              {/* Imagen */}
              <Skeleton className="h-[250px] w-full rounded-none" />

              <div className="space-y-4 p-5">
                {/* Categoría */}
                <Skeleton className="h-4 w-20 rounded-full" />

                {/* Nombre */}
                <Skeleton className="h-7 w-3/4" />
                <Skeleton className="h-7 w-1/2" />

                {/* Descripción */}
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />

                {/* Precio */}
                <div className="flex items-center gap-3 pt-2">
                  <Skeleton className="h-8 w-28" />
                  <Skeleton className="h-5 w-20" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicador del carrusel */}
        <div className="mt-10 flex justify-center">
          <Skeleton className="h-3 w-8 rounded-full" />
        </div>
      </div>
    </section>
  );
}
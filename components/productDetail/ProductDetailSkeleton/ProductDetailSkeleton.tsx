import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetailSkeleton() {
  return (
    <section className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2">
        <Skeleton className="h-4 w-14" />
        <Skeleton className="h-4 w-2 rounded-full" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-2 rounded-full" />
        <Skeleton className="h-4 w-14" />
        <Skeleton className="h-4 w-2 rounded-full" />
        <Skeleton className="h-4 w-44" />
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Imagen */}
        <div>
          <div className="relative overflow-hidden rounded-3xl border">
            <Skeleton className="aspect-square w-[800px] h-[600px]" />

            {/* Flechas */}
            <Skeleton className="absolute left-4 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full" />
            <Skeleton className="absolute right-4 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full" />
          </div>

          {/* Miniaturas */}
          <div className="mt-5 flex gap-3">
            {[...Array(4)].map((_, i) => (
              <Skeleton
                key={i}
                className="h-20 w-20 rounded-2xl"
              />
            ))}
          </div>
        </div>

        {/* Información */}
        <div className="flex flex-col">
          {/* Categoría */}
          <Skeleton className="mb-5 h-4 w-20" />

          {/* Título */}
          <Skeleton className="h-12 w-4/5" />

          {/* Precio */}
          <div className="mt-6 flex items-end gap-4">
            <Skeleton className="h-10 w-36" />
            <Skeleton className="h-6 w-24" />
          </div>

          {/* Descripción */}
          <div className="mt-8 space-y-3">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-3/4" />
          </div>

          {/* Características */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="rounded-2xl border p-5"
              >
                <div className="flex items-center gap-3">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-5 w-40" />
                </div>
              </div>
            ))}
          </div>

          {/* Stock */}
          <Skeleton className="mt-8 h-5 w-32" />

          {/* Botones */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Skeleton className="h-14 rounded-xl" />
            <Skeleton className="h-14 rounded-xl" />
          </div>

          {/* Volver */}
          <Skeleton className="mt-8 h-5 w-36" />
        </div>
      </div>
    </section>
  );
}
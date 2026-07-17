import { Skeleton } from "@/components/ui/skeleton";

export default function CatalogSkeleton() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* --- Barra superior (Contador de productos y Ordenar por) --- */}
      <div className="mb-6 flex items-center justify-between">
        <Skeleton className="h-5 w-24" /> {/* "5 productos" */}
        <Skeleton className="h-10 w-40 rounded-md" /> {/* Dropdown "Ordenar por" */}
      </div>

      {/* --- Contenedor Principal (Sidebar + Grilla) --- */}
      <div className="flex flex-col gap-6 md:flex-row">
        
        {/* === SIDEBAR DE CATEGORÍAS === */}
        <aside className="w-full md:w-64 md:shrink-0">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            {/* Título "Categorías" */}
            <Skeleton className="mb-6 h-6 w-28 font-bold" />

            {/* Lista de Categorías (9 ítems aprox.) */}
            <div className="space-y-4">
              {/* Ítem activo ("Todos") con fondo un poco más prominente */}
              <Skeleton className="h-10 w-full rounded-xl bg-red-50/50" />
              
              {/* Resto de categorías */}
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="flex items-center px-2 py-1">
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* === GRILLA DE PRODUCTOS === */}
        <main className="flex-1">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Generamos 6 tarjetas de producto como esqueleto */}
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
              >
                {/* Imagen del producto */}
                <Skeleton className="h-64 w-full rounded-t-2xl rounded-b-none" />

                {/* Contenido de la tarjeta */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div className="space-y-2">
                    {/* Categoría (ej. "PASEO") */}
                    <Skeleton className="h-3 w-16" />
                    
                    {/* Título del producto */}
                    <Skeleton className="h-5 w-11/12" />
                    <Skeleton className="h-5 w-3/4" />
                    
                    {/* Descripción corta */}
                    <Skeleton className="mt-2 h-3 w-4/5 pt-2" />
                  </div>

                  {/* Precios (Actual y Tachado) */}
                  <div className="mt-6 flex items-baseline gap-2 pt-4">
                    <Skeleton className="h-6 w-20 font-bold" /> {/* $ 89.900 */}
                    <Skeleton className="h-4 w-14" /> {/* $ 95.000 */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

      </div>
    </div>
  );
}
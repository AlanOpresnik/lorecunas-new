import type { Category } from "@/lib/types";
import { CategoriesList } from "./CategoriesList";
import { CreateCategoryDialog } from "./CreateCategoryDialog";

export function CategoriesManager({
  initialCategories,
}: {
  initialCategories: Category[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">Categorías del catálogo</h2>
          <p className="text-sm text-muted-foreground">
            Organizá tus productos con categorías claras y fáciles de encontrar.
          </p>
        </div>

        <CreateCategoryDialog />
      </div>

      <CategoriesList categories={initialCategories} />
    </div>
  );
}

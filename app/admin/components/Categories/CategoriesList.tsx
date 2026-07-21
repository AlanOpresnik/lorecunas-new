import { Trash2, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Category } from "@/lib/types";
import { deleteCategoryAction } from "./actions";

export function CategoriesList({ categories }: { categories: Category[] }) {
  if (!categories.length) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center gap-2 py-10 text-center">
          <Tag className="h-8 w-8 text-muted-foreground" />
          <p className="font-medium">Todavía no hay categorías</p>
          <p className="text-sm text-muted-foreground">
            Creá la primera para empezar a organizar el catálogo.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {categories.map((category) => (
        <div
          key={category._id}
          className="flex items-start justify-between gap-4 rounded-xl border border-border/60 bg-white/80 p-3 shadow-sm"
        >
          <div>
            <h3 className="font-semibold">{category.name}</h3>
            <p className="text-sm text-muted-foreground">
              {category.description || "Sin descripción"}
            </p>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="text-destructive hover:bg-destructive/10"
                aria-label={`Eliminar ${category.name}`}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>¿Eliminar categoría?</DialogTitle>
                <DialogDescription>
                  Esta acción no se puede deshacer. ¿Querés eliminar “{category.name}”?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button type="button" variant="outline">
                  Cancelar
                </Button>
                <form action={deleteCategoryAction} className="contents">
                  <input type="hidden" name="categoryId" value={category._id} />
                  <Button type="submit" variant="destructive">
                    Eliminar
                  </Button>
                </form>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </div>
  );
}

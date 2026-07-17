"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import { MoreHorizontal, Pencil, Trash2, PackageOpen } from "lucide-react";
import { toast } from "sonner";
import type { Product } from "@/lib/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { formatCurrency, formatDate } from "@/lib/format";
import { ProductFormDialog } from "./ProductFormDialog";
import { deleteProductAction } from "../../action/product";

export function ProductsTable({ products }: { products: Product[] }) {
  const [editing, setEditing] = useState<Product | null>(null);
  const [deleting, setDeleting] = useState<Product | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (!deleting) return;

    const target = deleting;
    startTransition(async () => {
      const formData = new FormData();
      formData.append("productId", target._id);

      try {
        await deleteProductAction(formData);
        toast.success("Producto eliminado.");
      } catch {
        toast.error("No se pudo eliminar.");
      } finally {
        setDeleting(null);
      }
    });
  }

  return (
    <>
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Producto</TableHead>
              <TableHead>Categoría</TableHead>
              <TableHead className="text-right">Precio</TableHead>
              <TableHead className="text-center">Stock</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="hidden md:table-cell">Alta</TableHead>
              <TableHead className="w-10" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product._id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="relative size-24 shrink-0 overflow-hidden rounded-xl bg-muted">
                      <Image
                        src={product.images[0] || "/products/placeholder.png"}
                        alt={product.name}
                        fill
                        className="object-cover "
                      />
                    </div>
                    <div className="flex min-w-0 flex-col">
                      <span className="truncate font-medium text-foreground">
                        {product.name}
                      </span>
                      <span className="truncate text-xs text-muted-foreground">
                        {product._id}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm text-muted-foreground">
                    {product.category}
                  </span>
                </TableCell>
                <TableCell className="text-right font-medium text-foreground">
                  {formatCurrency(product.price)}
                </TableCell>
                <TableCell className="text-center">
                  <span
                    className={
                      product.stock === 0
                        ? "font-medium text-destructive"
                        : product.stock <= 10
                          ? "font-medium text-amber-600"
                          : "text-foreground"
                    }
                  >
                    {product.stock}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      product.status === "active" ? "default" : "secondary"
                    }
                  >
                    {product.status === "active" ? "Activo" : "Inactivo"}
                  </Badge>
                </TableCell>
                <TableCell className="hidden text-sm text-muted-foreground md:table-cell">
                  {formatDate(product.createdAt)}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button variant="ghost" size="icon" aria-label="Acciones">
                        <MoreHorizontal />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuGroup>
                        <DropdownMenuItem onClick={() => setEditing(product)}>
                          <Pencil data-icon="inline-start" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          variant="destructive"
                          onClick={() => setDeleting(product)}
                        >
                          <Trash2 data-icon="inline-start" />
                          Eliminar
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
            {products.length === 0 ? (
              <TableRow className="hover:bg-transparent">
                <TableCell colSpan={7}>
                  <div className="flex flex-col items-center gap-2 py-10 text-center">
                    <PackageOpen className="size-8 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Todavía no hay productos en el catálogo.
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            ) : null}
          </TableBody>
        </Table>
      </div>

      {editing ? (
        <ProductFormDialog
          product={editing}
          open={Boolean(editing)}
          onOpenChange={(o) => !o && setEditing(null)}
        />
      ) : null}

      <AlertDialog
        open={Boolean(deleting)}
        onOpenChange={(o) => !o && setDeleting(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar producto?</AlertDialogTitle>
            <AlertDialogDescription>
              Se eliminará <strong>{deleting?.name}</strong> del catálogo. Esta
              acción no se puede deshacer.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isPending}>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                e.preventDefault();
                handleDelete();
              }}
              disabled={isPending}
              className="bg-destructive text-white hover:bg-destructive/90"
            >
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

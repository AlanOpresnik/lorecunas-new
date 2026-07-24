"use client";

import { useState } from "react";
import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";

import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import type { Category, Product } from "@/lib/types";

export function CatalogContent({
  products,
  categories,
  selectedCategory,
}: {
  products: Product[];
  categories: Category[];
  selectedCategory: string;
}) {
  const [open, setOpen] = useState(false);

  const filtered = selectedCategory
    ? products.filter(
        (product) => product.categorySlug === selectedCategory
      )
    : products;

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {/* Mobile */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="lg:hidden">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filtros
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-72">
              <SheetHeader>
                <SheetTitle>Categorías</SheetTitle>
              </SheetHeader>

              <ul className="mt-6 flex flex-col gap-2">
                <li>
                  <Link
                    href="/catalogo"
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                      selectedCategory === ""
                        ? "bg-primary/10 font-medium text-primary"
                        : "text-muted-foreground hover:bg-accent"
                    }`}
                  >
                    Todos
                  </Link>
                </li>

                {categories.map((cat) => {
                  const slug = cat.name
                    .toLowerCase()
                    .replace(/\s+/g, "-");

                  return (
                    <li key={cat._id}>
                      <Link
                        href={`/catalogo?categoria=${slug}`}
                        onClick={() => setOpen(false)}
                        className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                          selectedCategory === slug
                            ? "bg-primary/10 font-medium text-primary"
                            : "text-muted-foreground hover:bg-accent"
                        }`}
                      >
                        {cat.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </SheetContent>
          </Sheet>

          <p className="text-sm text-muted-foreground">
            {filtered.length} producto{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Sidebar Desktop */}
        <aside className="hidden w-56 shrink-0 lg:block">
          <div className="sticky top-24 rounded-xl border border-border bg-card p-5">
            <div className="mb-4">
              <h3 className="font-serif text-sm font-bold">
                Categorías
              </h3>
            </div>

            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/catalogo"
                  className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                    selectedCategory === ""
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-muted-foreground hover:bg-accent"
                  }`}
                >
                  Todos
                </Link>
              </li>

              {categories.map((cat) => {
                const slug = cat.name
                  .toLowerCase()
                  .replace(/\s+/g, "-");

                return (
                  <li key={cat._id}>
                    <Link
                      href={`/catalogo?categoria=${slug}`}
                      className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                        selectedCategory === slug
                          ? "bg-primary/10 font-medium text-primary"
                          : "text-muted-foreground hover:bg-accent"
                      }`}
                    >
                      {cat.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Productos */}
        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-lg font-medium">
                No se encontraron productos
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                Prueba seleccionando otra categoría.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
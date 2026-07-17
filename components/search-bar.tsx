"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { formatPrice } from "@/lib/data";
import { Product } from "@/lib/types";
import { api } from "@/lib/api";


export function SearchBar() {
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await api.getProducts();
        setProducts(response);
      } catch (error) {
        console.error("Error cargando productos:", error);
      }
    };

    loadProducts();
  }, []);

  const searchTerms = query
    .toLowerCase()
    .split(" ")
    .filter((term) => term.trim() !== "");

  const results =
    query.length >= 2
      ? products
          .filter((product) => {
            const textToSearch = `
              ${product.name}
              ${product.category}
              ${product.description ?? ""}
            `.toLowerCase();

            return searchTerms.every((term) =>
              textToSearch.includes(term)
            );
          })
          .slice(0, 10)
      : [];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = () => {
    if (!query.trim()) return;

    setIsOpen(false);

    // Ejemplo
    // router.push(`/productos?search=${encodeURIComponent(query)}`);
  };

  return (
    <div ref={wrapperRef} className="relative w-full group">
      <div className="relative transition-all duration-300 md:w-56 lg:w-72 md:focus-within:w-64 lg:focus-within:w-80">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          type="search"
          placeholder="Buscar productos..."
          className="h-10 rounded-full pl-10"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
      </div>

      {isOpen && query.length >= 2 && (
        <div className="absolute top-full left-0 right-0 z-50 mt-2 overflow-hidden rounded-xl border bg-background shadow-lg">
          {results.length > 0 ? (
            <>
              {results.map((product) => (
                <Link
                  key={product._id}
                  href={`/producto/${product.slug}/${product._id}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 hover:bg-muted"
                >
                  <div className="relative h-12 w-12 overflow-hidden rounded-md">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex w-full flex-col overflow-hidden">
                    <span className="truncate font-medium">
                      {product.name}
                    </span>

                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {product.category}
                      </span>

                      <span className="text-xs font-semibold text-primary">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}

              <div className="border-t p-2">
                <button
                  onClick={handleSearch}
                  className="w-full rounded-md py-2 text-sm hover:bg-muted"
                >
                  Ver todos los resultados
                </button>
              </div>
            </>
          ) : (
            <div className="p-6 text-center">
              <Search className="mx-auto mb-2 h-6 w-6 text-muted-foreground" />
              <p className="font-medium">
                No encontramos productos
              </p>
              <p className="text-sm text-muted-foreground">
                Probá con otra búsqueda.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
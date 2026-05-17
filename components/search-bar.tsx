"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { products, formatPrice } from "@/lib/data"
import Link from "next/link"
import Image from "next/image"

export function SearchBar() {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const searchTerms = query.toLowerCase().split(" ").filter((term) => term.trim() !== "")

  const results = query.length >= 2 
    ? products
        .filter((p) => {
          const textToSearch = `${p.name} ${p.category}`.toLowerCase()
          return searchTerms.every((term) => textToSearch.includes(term))
        })
        .slice(0, 10)
    : []

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (query.trim()) {
      setIsOpen(false)
    }
  }

  return (
    <div ref={wrapperRef} className="relative w-full group">
      <div>
        <div className="relative transition-all duration-300 ease-in-out md:w-56 lg:w-72 md:focus-within:w-64 lg:focus-within:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            type="search"
            placeholder="Buscar productos..."
            className="h-10 w-full rounded-full border border-border/50 bg-secondary/40 pl-10 pr-4 text-sm shadow-sm transition-all focus-visible:bg-background focus-visible:ring-1 focus-visible:ring-primary hover:bg-secondary/60"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setIsOpen(true)
            }}
            onFocus={() => setIsOpen(true)}
          />
        </div>
      </div>

      {/* Auto-complete Dropdown */}
      {isOpen && query.length >= 2 && (
        <div className="absolute top-full left-0 right-0 z-50 mt-2 overflow-hidden rounded-xl border border-border bg-background shadow-lg glassmorphism-effect animate-in fade-in slide-in-from-top-2 duration-200">
          {results.length > 0 ? (
            <div className="flex flex-col">
              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/producto/${product.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 transition-colors hover:bg-muted"
                >
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md bg-secondary">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div className="flex flex-col overflow-hidden w-full">
                    <span className="truncate text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </span>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-muted-foreground uppercase tracking-wide">
                        {product.category}
                      </span>
                      <span className="text-xs font-semibold text-primary">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
              <div className="border-t border-border p-2 bg-secondary/30">
                <button
                  onClick={() => handleSearch()}
                  className="w-full rounded-md py-2 text-center text-xs font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Ver todos los resultados
                </button>
              </div>
            </div>
          ) : (
            <div className="p-6 text-center">
              <Search className="mx-auto h-6 w-6 text-muted-foreground/50 mb-2" />
              <p className="text-sm font-medium text-foreground">No encontramos nada</p>
              <p className="text-xs text-muted-foreground mt-1">Intenta con otros terminos de busqueda</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

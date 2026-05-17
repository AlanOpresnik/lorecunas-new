"use client"

import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react"
import { useCart } from "@/components/cart-context"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/data"

export function CartDrawer() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart, setIsCartOpen } = useCart()

  if (items.length === 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 py-12">
        <p className="text-muted-foreground">Tu carrito esta vacio</p>
        <Button asChild variant="outline" onClick={() => setIsCartOpen(false)}>
          <Link href="/catalogo">Ver catalogo</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-1 flex-col px-4">
      <div className="flex-1  space-y-4 overflow-y-auto py-4">
        {items.map((item) => (
          <div
            key={`${item.product.id}-${item.selectedColor}`}
            className="flex gap-3 rounded-lg border border-border p-3"
          >
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
              <Image
                src={item.product.images[0]}
                alt={item.product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <p className="text-sm font-medium">{item.product.name}</p>
              <p className="text-xs text-muted-foreground">{item.selectedColor}</p>
              <p className="mt-1 text-sm font-semibold text-primary">
                {formatPrice(item.product.price)}
              </p>
              <div className="mt-2 flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  className="flex h-6 w-6 items-center justify-center rounded border border-border text-foreground hover:bg-accent"
                  aria-label="Disminuir cantidad"
                >
                  <Minus className="h-3 w-3" />
                </button>
                <span className="text-sm font-medium">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  className="flex h-6 w-6 items-center justify-center rounded border border-border text-foreground hover:bg-accent"
                  aria-label="Aumentar cantidad"
                >
                  <Plus className="h-3 w-3" />
                </button>
                <button
                  onClick={() => removeItem(item.product.id)}
                  className="ml-auto text-muted-foreground hover:text-destructive"
                  aria-label="Eliminar producto"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-4">
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-muted-foreground">Subtotal</span>
          <span className="text-lg font-bold">{formatPrice(totalPrice)}</span>
        </div>
        <Button asChild className="mt-3 w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg" onClick={() => setIsCartOpen(false)}>
          <Link href="/checkout" className="flex items-center gap-2">
            Finalizar compra
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="mt-2 w-full text-muted-foreground"
          onClick={clearCart}
        >
          Vaciar carrito
        </Button>
      </div>
    </div>
  )
}

"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ArrowLeft, ArrowRight, ShoppingBag } from "lucide-react"
import { useCart } from "@/components/cart-context"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/data"

export default function CheckoutPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 px-4 py-24 text-center lg:px-8">
        <ShoppingBag className="h-16 w-16 text-muted-foreground/50" />
        <h1 className="font-serif text-2xl font-bold text-foreground">
          Tu carrito esta vacio
        </h1>
        <p className="text-muted-foreground">
          Agrega productos a tu carrito para continuar con la compra.
        </p>
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href="/catalogo">Ver catalogo</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
      <h1 className="mb-8 font-serif text-3xl font-bold text-foreground">Checkout</h1>

      <div className="grid gap-10 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedColor}`}
                className="flex gap-4 rounded-xl border border-border bg-card p-4"
              >
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif font-semibold text-card-foreground">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Color: {item.selectedColor}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-muted-foreground hover:text-destructive"
                      aria-label="Eliminar producto"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-foreground hover:bg-accent"
                        aria-label="Disminuir cantidad"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-foreground hover:bg-accent"
                        aria-label="Aumentar cantidad"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <p className="text-lg font-bold text-foreground">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-between">
            <Link
              href="/catalogo"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Seguir comprando
            </Link>
            <Button variant="ghost" size="sm" onClick={clearCart} className="text-muted-foreground">
              Vaciar carrito
            </Button>
          </div>
        </div>

        {/* Order summary */}
        <div>
          <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
            <h2 className="font-serif text-lg font-bold text-card-foreground">
              Resumen del pedido
            </h2>

            <div className="mt-4 space-y-3 border-b border-border pb-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-muted-foreground">
                    {item.product.name} x{item.quantity}
                  </span>
                  <span className="font-medium text-foreground">
                    {formatPrice(item.product.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Subtotal</span>
              <span className="text-lg font-bold text-foreground">{formatPrice(totalPrice)}</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Envio a calcular al momento de la entrega.
            </p>

            <Button
              className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90"
              size="lg"
              onClick={() => {
                const msg = encodeURIComponent(
                  `Hola! Quiero realizar mi pedido:\n${items
                    .map(
                      (i) =>
                        `- ${i.product.name} (${i.selectedColor}) x${i.quantity} = ${formatPrice(i.product.price * i.quantity)}`
                    )
                    .join("\n")}\n\nTotal: ${formatPrice(totalPrice)}`
                )
                window.open(`https://wa.me/5491112345678?text=${msg}`, "_blank")
              }}
            >
              Finalizar pedido por WhatsApp
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              Al continuar, enviaremos tu pedido por WhatsApp para confirmar tu compra.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

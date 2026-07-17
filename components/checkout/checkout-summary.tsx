import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/data"
import type { CartItem } from "@/lib/types"

type CheckoutSummaryProps = {
  items: CartItem[]
  totalPrice: number
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
}

export function CheckoutSummary({ items, totalPrice, removeItem, updateQuantity, clearCart }: CheckoutSummaryProps) {
  return (
    <div className="lg:col-span-2">
      <div className="space-y-4">
        {items.map((item) => (
          <div key={`${item.product._id}-${item.selectedColor}`} className="flex gap-4 rounded-xl border border-border bg-card p-4">
            <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
              <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" sizes="96px" />
            </div>
            <div className="flex flex-1 flex-col">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif font-semibold text-card-foreground">{item.product.name}</h3>
                  <p className="text-sm text-muted-foreground">Color: {item.selectedColor}</p>
                </div>
                <button onClick={() => removeItem(item.product._id)} className="text-muted-foreground hover:text-destructive" aria-label="Eliminar producto">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-auto flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQuantity(item.product._id, item.quantity - 1)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-foreground hover:bg-accent" aria-label="Disminuir cantidad">
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.product._id, item.quantity + 1)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-foreground hover:bg-accent" aria-label="Aumentar cantidad">
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
                <p className="text-lg font-bold text-foreground">{formatPrice(item.product.price * item.quantity)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-between">
        <Link href="/catalogo" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Seguir comprando
        </Link>
        <Button variant="ghost" size="sm" onClick={clearCart} className="text-muted-foreground">
          Vaciar carrito
        </Button>
      </div>
    </div>
  )
}

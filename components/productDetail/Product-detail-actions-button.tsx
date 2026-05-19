'use client'
import { Button } from "@/components/ui/button";
import { ShoppingBag, MessageCircle } from "lucide-react";
import { Product } from "@/lib/types";
import { useCart } from "@/components/cart-context";
import { formatPrice } from "@/lib/data";
 
export default function ProductDetailActionsButton({product}: {product: Product}) {
    const { addItem } = useCart()
    const whatsappMessage = encodeURIComponent(
    `Hola! Me interesa el producto: ${product.name} (${formatPrice(product.price)}). Me gustaria recibir mas informacion.`
  )
  const whatsappUrl = `https://wa.me/5491112345678?text=${whatsappMessage}`
    return (
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => addItem(product, product.colors[0])} //modificar los colores por el color que se cargue en la admin del producto ya que solamente tienen 1 color las cunas
              
              disabled={product.stock <= 0}
            >
              <ShoppingBag className="mr-2 py-6 h-5 w-5" />
              Agregar al carrito
            </Button>
            <Button asChild size="lg" variant="outline" className="flex-1">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5 py-6" />
                Consultar por WhatsApp
              </a>
            </Button>
          </div>
    )
}
'use client'

import { Button } from "@/components/ui/button";
import { ShoppingBag, MessageCircle } from "lucide-react";
import { Product } from "@/lib/types";
import { useCart } from "@/components/cart-context";
import { formatPrice } from "@/lib/data";

export default function ProductDetailActionsButton({
  product,
}: {
  product: Product;
}) {
  const { addItem, items, setIsCartOpen } = useCart();

  const isInCart = items.some((item) => item.product._id === product._id);

  const whatsappMessage = encodeURIComponent(
    `Hola! Me interesa el producto: ${product.name} (${formatPrice(
      product.price
    )}). Me gustaría recibir más información.`
  );

  const whatsappUrl = `https://wa.me/5491112345678?text=${whatsappMessage}`;

  const handleCartClick = () => {
    if (isInCart) {
      setIsCartOpen(true);
      return;
    }

    addItem(product, product.colors[0]);
  };

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Button
        size="lg"
        className="flex-1 p-3"
        onClick={handleCartClick}
        disabled={product.stock <= 0}
      >
        <ShoppingBag className="mr-2 h-5 w-5" />

        {product.stock <= 0
          ? "Sin stock"
          : isInCart
          ? "Ya tenés este producto en el carrito"
          : "Agregar al carrito"}
      </Button>

      <Button asChild size="lg" variant="outline" className="flex-1 p-3">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="mr-2 h-5 w-5" />
          Consultar por WhatsApp
        </a>
      </Button>
    </div>
  );
}
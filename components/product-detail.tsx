"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, MessageCircle, ChevronRight, Ruler, Palette, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-context"
import { formatPrice } from "@/lib/data"
import { type Product } from "@/lib/types"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const { addItem } = useCart()

  const whatsappMessage = encodeURIComponent(
    `Hola! Me interesa el producto: ${product.name} (${formatPrice(product.price)}). Me gustaria recibir mas informacion.`
  )
  const whatsappUrl = `https://wa.me/5491112345678?text=${whatsappMessage}`

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Inicio</Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/catalogo" className="hover:text-foreground">Catalogo</Link>
        <ChevronRight className="h-3 w-3" />
        <Link
          href={`/catalogo?categoria=${product.categorySlug}`}
          className="hover:text-foreground"
        >
          {product.category}
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Images */}
        <div className="flex flex-col gap-4">
          <div className="relative aspect-square overflow-hidden rounded-xl bg-secondary">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {product.isNew && (
              <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                Nuevo
              </span>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative h-20 w-20 overflow-hidden rounded-lg border-2 transition-colors ${
                    i === selectedImage ? "border-primary" : "border-border"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} imagen ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            {product.category}
          </span>
          <h1 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            {product.name}
          </h1>

          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-3xl font-bold text-foreground">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <p className="mt-6 leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          {/* Dimensions */}
          <div className="mt-6 flex items-center gap-3 rounded-lg bg-secondary p-4">
            <Ruler className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs font-medium text-muted-foreground">Medidas</p>
              <p className="text-sm font-medium text-foreground">{product.dimensions}</p>
            </div>
          </div>

          {/* Colors */}
          <div className="mt-6">
            <div className="flex items-center gap-2">
              <Palette className="h-4 w-4 text-primary" />
              <p className="text-sm font-medium text-foreground">
                Color: <span className="font-normal text-muted-foreground">{selectedColor}</span>
              </p>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`rounded-full border-2 px-4 py-1.5 text-sm transition-colors ${
                    selectedColor === color
                      ? "border-primary bg-primary/10 font-medium text-primary"
                      : "border-border text-muted-foreground hover:border-foreground/30"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Stock */}
          <p className="mt-4 text-sm text-muted-foreground">
            {product.stock > 0
              ? `Stock disponible: ${product.stock} unidades`
              : "Sin stock temporalmente"}
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => addItem(product, selectedColor)}
              disabled={product.stock <= 0}
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Agregar al carrito
            </Button>
            <Button asChild size="lg" variant="outline" className="flex-1">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Consultar por WhatsApp
              </a>
            </Button>
          </div>

          <Link
            href="/catalogo"
            className="mt-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al catalogo
          </Link>
        </div>
      </div>
    </div>
  )
}

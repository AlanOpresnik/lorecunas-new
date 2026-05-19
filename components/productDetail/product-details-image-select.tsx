"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Product } from '@/lib/types'

interface Props {
    product: Product
}

const ProductDetailsImageSelect = ({product}: Props) => {
    const [selectedImage, setSelectedImage] = useState(0)
  return (
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
  )
}

export default ProductDetailsImageSelect
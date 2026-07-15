"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { ProductCard } from "@/components/product-card";
import { Product } from "@/lib/types";

export default function Carousel({ products }: { products: Product[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
    slidesToScroll: 1,
  });

  const onInit = useCallback(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;

      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    onInit();
    onSelect();

    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {products.map((product) => (
            <div
              key={product._id}
              className="
                min-w-0
                p-2
                flex-[0_0_80%]
                sm:flex-[0_0_40%]
                md:flex-[0_0_30%]
                lg:flex-[0_0_25%]
              "
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {scrollSnaps
          .slice(
            Math.max(0, selectedIndex - 1),
            Math.min(scrollSnaps.length, selectedIndex + 2),
          )
          .map((_, i) => {
            const realIndex = Math.max(0, selectedIndex - 1) + i;

            return (
              <button
                key={realIndex}
                onClick={() => scrollTo(realIndex)}
                className={`
            h-2.5 rounded-full transition-all duration-300
            ${
              realIndex === selectedIndex
                ? "bg-primary w-6"
                : "bg-gray-300 w-2.5"
            }
          `}
              />
            );
          })}
      </div>
    </div>
  );
}

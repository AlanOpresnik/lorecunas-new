"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { ProductCard } from "@/components/product-card";
import { Category, Product } from "@/lib/types";
import { CategoryCard } from "../CategoryCard";

export default function CategorySwiper({
  categorys,
}: {
  categorys: Category[];
}) {
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
      <div ref={emblaRef} className="overflow-hidden">
  <div className="flex gap-6">
    {categorys.map((category) => (
      <div
        key={category._id}
        className="
          flex-[0_0_85%]
          sm:flex-[0_0_45%]
          md:flex-[0_0_35%]
          lg:flex-[0_0_28%]
          min-w-0
        "
      >
        <CategoryCard
          title={category.name}
          description={category.description}
          href={category.name}
        />
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

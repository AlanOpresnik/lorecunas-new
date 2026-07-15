"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Product } from "@/lib/types";

interface Props {
  product: Product;
}

export default function ProductDetailsImageSelect({ product }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // MAIN
  const [mainRef, mainApi] = useEmblaCarousel({
    loop: false,
  });

  // THUMBS
  const [thumbsRef, thumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onSelect = useCallback(() => {
    if (!mainApi) return;

    const index = mainApi.selectedScrollSnap();

    setSelectedIndex(index);
    setCanScrollPrev(mainApi.canScrollPrev());
    setCanScrollNext(mainApi.canScrollNext());

    thumbsApi?.scrollTo(index);
  }, [mainApi, thumbsApi]);

  useEffect(() => {
    if (!mainApi) return;

    onSelect();

    mainApi.on("select", onSelect);
    mainApi.on("reInit", onSelect);

    return () => {
      mainApi.off("select", onSelect);
      mainApi.off("reInit", onSelect);
    };
  }, [mainApi, onSelect]);

  const scrollPrev = () => {
    mainApi?.scrollPrev();
  };

  const scrollNext = () => {
    mainApi?.scrollNext();
  };

  const handleThumbClick = (index: number) => {
    mainApi?.scrollTo(index);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* MAIN SLIDER */}
      <div className="relative">
        {/* LEFT BUTTON */}
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 shadow-md backdrop-blur transition hover:bg-background disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 shadow-md backdrop-blur transition hover:bg-background disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="overflow-hidden rounded-xl" ref={mainRef}>
          <div className="flex">
            {product.images.map((img, index) => (
              <div key={index} className="relative min-w-0 flex-[0_0_100%]">
                <div className="relative aspect-square overflow-hidden bg-secondary">
                  <Image
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    priority={index === 0}
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  {product.isNew && index === 0 && (
                    <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      Nuevo
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* THUMBNAILS */}
      {product.images.length > 1 && (
        <div className="overflow-hidden" ref={thumbsRef}>
          <div className="flex gap-3">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => handleThumbClick(index)}
                className={`relative h-20 w-20 flex-[0_0_auto] overflow-hidden rounded-lg border-2 transition-all ${
                  index === selectedIndex ? "border-primary" : "border-border"
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.name} miniatura ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

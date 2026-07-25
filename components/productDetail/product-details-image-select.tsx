"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { Product } from "@/lib/types";

interface Props {
  product: Product;
}

export default function ProductDetailsImageSelect({ product }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // MAIN
  const [mainRef, mainApi] = useEmblaCarousel({
    loop: false,
  });

  // THUMBS
  const [thumbsRef, thumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  // LIGHTBOX (its own embla instance, synced with main)
  const [lightboxRef, lightboxApi] = useEmblaCarousel({
    loop: false,
    startIndex: selectedIndex,
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

  // Keep lightbox in sync with the main carousel index when it opens
  useEffect(() => {
    if (isLightboxOpen) {
      lightboxApi?.scrollTo(selectedIndex, true);
    }
  }, [isLightboxOpen, lightboxApi, selectedIndex]);

  // When navigating inside the lightbox, reflect that back on the main carousel
  const onLightboxSelect = useCallback(() => {
    if (!lightboxApi) return;
    const index = lightboxApi.selectedScrollSnap();
    setSelectedIndex(index);
    mainApi?.scrollTo(index);
  }, [lightboxApi, mainApi]);

  useEffect(() => {
    if (!lightboxApi) return;

    lightboxApi.on("select", onLightboxSelect);

    return () => {
      lightboxApi.off("select", onLightboxSelect);
    };
  }, [lightboxApi, onLightboxSelect]);

  // Close lightbox on Escape key
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen]);

  // Lock body scroll while lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isLightboxOpen]);

  const scrollPrev = () => {
    mainApi?.scrollPrev();
  };

  const scrollNext = () => {
    mainApi?.scrollNext();
  };

  const handleThumbClick = (index: number) => {
    mainApi?.scrollTo(index);
  };

  const lightboxScrollPrev = () => lightboxApi?.scrollPrev();
  const lightboxScrollNext = () => lightboxApi?.scrollNext();

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
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="relative block aspect-square w-full cursor-zoom-in overflow-hidden bg-secondary"
                  aria-label="Ampliar imagen"
                >
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
                </button>
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

      {/* LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/20 text-white backdrop-blur transition hover:bg-background/40"
            aria-label="Cerrar"
          >
            <X className="h-6 w-6" />
          </button>

          {/* LEFT BUTTON */}
          {product.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                lightboxScrollPrev();
              }}
              className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-background/20 text-white backdrop-blur transition hover:bg-background/40"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* RIGHT BUTTON */}
          {product.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                lightboxScrollNext();
              }}
              className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-background/20 text-white backdrop-blur transition hover:bg-background/40"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          {/* CAROUSEL */}
          <div
            className="h-full max-h-[90vh] w-full max-w-5xl overflow-hidden"
            ref={lightboxRef}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex h-full">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className="relative h-full min-w-0 flex-[0_0_100%]"
                >
                  <Image
                    src={img}
                    alt={`${product.name} ${index + 1} ampliada`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
import React, { Suspense } from "react";
import { CarrouselServer } from "./CarruselServer";
import CarrouselSkeleton from "./CarrouselSkeleton";

export default function CarrouselWrapper() {
  return (
    <Suspense fallback={<CarrouselSkeleton />}>
      <CarrouselServer />
    </Suspense>
  );
}

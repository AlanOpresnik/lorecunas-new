import { Caracteristics, Product } from "@/lib/types";
import { InfoIcon, Ruler } from "lucide-react";
import React from "react";

interface Props {
  caracteristic: Caracteristics;
}

export default function ProductDetailCaracteristics({ caracteristic }: Props) {
  return (
    <div className="mt-6 flex w-full items-center gap-3 rounded-lg bg-secondary p-4">
      <InfoIcon className="h-5 w-5 text-primary" />
      <div>
        <p className="text-sm font-medium text-foreground">
          {caracteristic.title} <span>{caracteristic.value}</span>
        </p>
      </div>
    </div>
  );
}

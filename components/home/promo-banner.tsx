import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PromoBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl">
        <div className="relative aspect-[21/9] w-full md:aspect-[3/1]">
          <Image
            src="/images/promo-banner.jpg"
            alt="Habitacion de bebe moderna decorada con estilo"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
            Oferta especial
          </span>
          <h2 className="font-serif mt-8 text-xl font-bold text-white md:text-4xl lg:text-5xl text-balance">
            Arma la habitacion completa con descuento
          </h2>
          <p className="max-w-md text-sm text-white/90 md:text-base">
            Combina cuna + comoda + ropero y obtiene un precio especial.
            Consulta por WhatsApp.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-2 bg-white text-foreground hover:bg-white/90"
          >
            <Link href="/contacto" className="flex items-center gap-2">
              Consultar ahora
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

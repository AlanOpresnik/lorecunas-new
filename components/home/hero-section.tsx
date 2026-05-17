import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-8 px-4 py-16 lg:flex-row lg:gap-12 lg:px-8 lg:py-24">
        {/* Text */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Muebles infantiles premium
          </span>
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            <span className="text-balance">
              {"Creamos el lugar perfecto para tu bebe"}
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground text-lg lg:text-xl">
            {"Diseñamos cada mueble con amor y dedicacion, para que los primeros años de tu bebe esten llenos de confort, seguridad y ternura."}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 ">
              <Link className="text-lg" href="/catalogo">
                Ver catalogo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link className="text-lg" href="/nosotros">
                Nuestra historia
              </Link>
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl lg:aspect-square">
            <Image
              src="/images/hero-nursery.jpg"
              alt="Habitacion infantil moderna con cuna y decoracion en tonos pastel"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 rounded-xl bg-card p-4 shadow-lg lg:-bottom-6 lg:-left-6 hidden md-block">
            <p className="text-2xl font-bold text-foreground">+500</p>
            <p className="text-xs text-muted-foreground">Familias felices</p>
          </div>
        </div>
      </div>
    </section>
  )
}

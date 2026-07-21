import Image from "next/image";
import { Heart, Award, Users, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | LoreCunas",
  description:
    "Conoce nuestra historia, pasion y compromiso con la calidad en muebles infantiles.",
};

const stats = [
  { icon: Heart, label: "Familias felices", value: "+5000" },
  { icon: Award, label: "Años de experiencia", value: "20" },
  { icon: Clock, value: "Atencion", label: "Personalizada" },
];

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
      {/* Hero */}
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Nuestra historia
          </span>
          <h1 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {"Creamos muebles con amor para los mas pequeños"}
          </h1>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            {
              "En LoreCunas creemos que los primeros años de vida merecen un entorno lleno de belleza, seguridad y calidez. Desde hace mas de dos decadas, nos dedicamos a diseñar y fabricar muebles infantiles que combinan estetica moderna con la mas alta calidad."
            }
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {
              "Cada pieza es pensada con dedicacion, utilizando materiales premium y terminaciones cuidadas. Nuestro equipo de artesanos trabaja con pasion para que cada familia encuentre el mueble perfecto para la habitacion de su bebe."
            }
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/images/about-workshop.jpg"
            alt="Taller de fabricacion de muebles infantiles"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <stat.icon className="h-6 w-6" />
            </div>
            <p className="text-3xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Values */}
      <div className="mt-16 text-center">
        <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
          Nuestros Valores
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Calidad premium",
              description:
                "Cada mueble esta fabricado con los mejores materiales, asegurando durabilidad y seguridad.",
            },
            {
              title: "Diseño con amor",
              description:
                "Nuestros diseños combinan tendencia y funcionalidad, pensados para embellecer cada espacio.",
            },
            {
              title: "Compromiso familiar",
              description:
                "Acompañamos a cada familia en el proceso de crear la habitacion ideal para su bebe.",
            },
          ].map((value) => (
            <div
              key={value.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="font-serif text-lg font-bold text-card-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

'use client'
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"



export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
      <div className="mb-10 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          Hablemos
        </span>
        <h1 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
          Contactanos
        </h1>
        <p className="mt-3 mx-auto max-w-lg text-muted-foreground">
          Estamos para ayudarte a elegir los mejores muebles para la habitacion de tu bebe.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-card-foreground">Direccion</h3>
              <p className="mt-1 text-sm text-muted-foreground">
               Puente Marquez 980, Paso del Rey, Moreno
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-card-foreground">Telefono</h3>
              <p className="mt-1 text-sm text-muted-foreground">+54 9 11 6939 3427</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-card-foreground">Horarios</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Miercoles a Viernes: 14:30 - 18:00
              </p>
              <p className="text-sm text-muted-foreground">
                Sabados: 09:00 - 13:00
              </p>
            </div>
          </div>

          <Button asChild size="lg" className="w-full bg-[#25D366] text-white hover:bg-[#25D366]/90">
            <a
              href="https://wa.me/5491169393427?text=Hola!%20Me%20gustaria%20consultar%20sobre%20sus%20muebles."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Escribinos por WhatsApp
            </a>
          </Button>
        </div>

        {/* Contact Form */}
        <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
          <h2 className="font-serif text-xl font-bold text-card-foreground">
            Envianos un mensaje
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Completa el formulario y te responderemos a la brevedad.
          </p>

          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Nombre completo
              </label>
              <input
                id="name"
                type="text"
                placeholder="Tu nombre"
                className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="tu@email.com"
                className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium text-foreground">
                Telefono
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+54 11 1234-5678"
                className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Contanos en que podemos ayudarte..."
                className="mt-1 w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              size="lg"
            >
              Enviar mensaje
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

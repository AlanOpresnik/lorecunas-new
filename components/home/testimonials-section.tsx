"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { testimonials } from "@/lib/data"

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const testimonial = testimonials[current]

  return (
    <section className="bg-secondary/40 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          Testimonios
        </span>
        <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
          {"Lo que dicen nuestras clientas"}
        </h2>

        <div className="mt-10">
          <div className="flex justify-center gap-1">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 text-primary"
                fill="currentColor"
              />
            ))}
          </div>
          <blockquote className="mt-6 text-lg leading-relaxed text-foreground italic">
            {`"${testimonial.text}"`}
          </blockquote>
          <p className="mt-4 text-sm font-semibold text-foreground">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted-foreground">{testimonial.date}</p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-border"
                  }`}
                  aria-label={`Ver testimonio ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

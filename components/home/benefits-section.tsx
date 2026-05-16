import { Truck, Shield, Heart, BadgeCheck } from "lucide-react"
import { benefits } from "@/lib/data"

const iconMap: Record<string, React.ReactNode> = {
  truck: <Truck className="h-6 w-6" />,
  shield: <Shield className="h-6 w-6" />,
  heart: <Heart className="h-6 w-6" />,
  badge: <BadgeCheck className="h-6 w-6" />,
}

export function BenefitsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              {iconMap[benefit.icon]}
            </div>
            <h3 className="font-serif text-base font-bold text-card-foreground">
              {benefit.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

"use client"

import { type FormEvent } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { CheckoutFormValues } from "@/lib/checkout"

type CheckoutFormProps = {
  form: CheckoutFormValues
  isSubmitting: boolean
  error: string | null
  onChange: (field: keyof CheckoutFormValues, value: string) => void
  onSubmit: (event?: FormEvent<HTMLFormElement>) => Promise<void> | void
}

export function CheckoutForm({ form, isSubmitting, error, onChange, onSubmit }: CheckoutFormProps) {
  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Producto</label>
        <input
          value={form.producto}
          onChange={(event) => onChange("producto", event.target.value)}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
          placeholder="Nombre del producto"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Tu nombre</label>
        <input
          value={form.usuario}
          onChange={(event) => onChange("usuario", event.target.value)}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
          placeholder="Ej: María Pérez"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Correo</label>
        <input
          type="email"
          value={form.correo}
          onChange={(event) => onChange("correo", event.target.value)}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
          placeholder="correo@ejemplo.com"
          required
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Teléfono</label>
          <input
            value={form.telefono}
            onChange={(event) => onChange("telefono", event.target.value)}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
            placeholder="11 2345 6789"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Teléfono secundario</label>
          <input
            value={form.telefonoSecundario}
            onChange={(event) => onChange("telefonoSecundario", event.target.value)}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
            placeholder="Opcional"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Monto a pagar</label>
        <input
          type="number"
          value={form.montoPago}
          onChange={(event) => onChange("montoPago", event.target.value)}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
          placeholder="0"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Notas del pedido</label>
        <textarea
          value={form.notas}
          onChange={(event) => onChange("notas", event.target.value)}
          className="min-h-24 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
          placeholder="Información adicional para el pedido"
        />
      </div>

      {error ? <p className="text-sm text-destructive">{error}</p> : null}

      <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Creando pago..." : "Pagar con Mercado Pago"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
}

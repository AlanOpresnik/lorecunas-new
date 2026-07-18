'use client'
import { useEffect, useState, type FormEvent } from "react"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/components/cart-context"
import { Button } from "@/components/ui/button"
import { CheckoutForm } from "@/components/checkout/checkout-form"
import { CheckoutSummary } from "@/components/checkout/checkout-summary"
import { api } from "@/lib/api"
import { buildCheckoutPayload, type CheckoutFormValues } from "@/lib/checkout"
import Link from "next/link"

export const ORDER_STORAGE_KEY = "last-order-id"

export default function CheckoutPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState<CheckoutFormValues>({
    producto: "",
    usuario: "",
    correo: "",
    telefono: "",
    telefonoSecundario: "",
    montoPago: 0,
    notas: "",
  })

  const selectedProduct = items[0]?.product

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      producto: selectedProduct?.name ?? prev.producto,
      montoPago: prev.montoPago || String(totalPrice || 0),
    }))
  }, [selectedProduct, totalPrice])

  function updateField(field: keyof CheckoutFormValues, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handlePay(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault()
    if (!items.length) return

    if (!form.usuario.trim() || !form.correo.trim() || !form.telefono.trim()) {
      setError("Completá tu nombre, correo y teléfono para continuar.")
      return
    }

    setIsSubmitting(true)
    setError(null)

    const payload = buildCheckoutPayload({
      form,
      items,
      totalPrice,
      selectedProduct,
    })

    try {
      const response = await api.createPreference(payload)
      const paymentUrl = response?.init_point || response?.sandbox_init_point
      const orderIdentifier = response.preferenceId;

      window.localStorage.setItem(ORDER_STORAGE_KEY, String(orderIdentifier))

      if (paymentUrl) {
        window.location.href = paymentUrl
        return
      }

    } catch (error) {
      console.error(error)
      setError("No pudimos crear la preferencia de pago. Inténtalo nuevamente.")
      setIsSubmitting(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 px-4 py-24 text-center lg:px-8">
        <ShoppingBag className="h-16 w-16 text-muted-foreground/50" />
        <h1 className="font-serif text-2xl font-bold text-foreground">Tu carrito esta vacio</h1>
        <p className="text-muted-foreground">Agrega productos a tu carrito para continuar con la compra.</p>
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href="/catalogo">Ver catalogo</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
      <h1 className="mb-8 font-serif text-3xl font-bold text-foreground">Checkout</h1>

      <div className="grid gap-10 lg:grid-cols-3">
        <CheckoutSummary items={items} totalPrice={totalPrice} removeItem={removeItem} updateQuantity={updateQuantity} clearCart={clearCart} />

        <div>
          <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
            <h2 className="font-serif text-lg font-bold text-card-foreground">Resumen del pedido</h2>

            <div className="mt-4 space-y-3 border-b border-border pb-4">
              {items.map((item) => (
                <div key={item.product._id} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{item.product.name} x{item.quantity}</span>
                  <span className="font-medium text-foreground">{item.product.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Subtotal</span>
              <span className="text-lg font-bold text-foreground">{totalPrice}</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">Envio a calcular al momento de la entrega.</p>

            <CheckoutForm form={form} isSubmitting={isSubmitting} error={error} onChange={updateField} onSubmit={handlePay} />

            <p className="mt-3 text-center text-xs text-muted-foreground">Serás redirigido a Mercado Pago para completar tu compra de forma segura.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

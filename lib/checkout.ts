import type { CartItem, Product } from "@/lib/types"

export type CheckoutFormValues = {
  producto: string
  usuario: string
  correo: string
  telefono: string
  telefonoSecundario: string
  montoPago: Number;
  direction: string
}

export type CheckoutProduct = {
  _id?: string
  name: string
  price: number
  slug?: string
  images?: string[]
  [key: string]: unknown
}

export type CheckoutPayload = {
  producto: CheckoutProduct
  usuario: string
  correo: string
  telefono: string
  telefonoSecundario: string
  montoPago: number
  orderData: {
    direction: string
    items: Array<{
      name: string
      quantity: number
      price: number
      color: string
    }>
  }
}

export function buildCheckoutPayload(args: {
  form: CheckoutFormValues
  items: CartItem[]
  totalPrice: number
  selectedProduct?: Product
}): CheckoutPayload {
  const productPrice = Number(args.form.montoPago || args.selectedProduct?.price || args.totalPrice || 0)

  const producto: CheckoutProduct = args.selectedProduct
    ? {
        ...args.selectedProduct,
        price: productPrice,
        name: args.form.producto || args.selectedProduct.name || "Producto",
      }
    : {
        name: args.form.producto || "Producto",
        price: productPrice,
      }

  return {
    producto,
    usuario: args.form.usuario.trim(),
    correo: args.form.correo.trim(),
    telefono: args.form.telefono.trim(),
    telefonoSecundario: args.form.telefonoSecundario.trim(),
    montoPago: productPrice,
    orderData: {
      direction: args.form.direction.trim(),
      items: args.items.map((item) => ({
        name: item.product.name,
        quantity: item.quantity,
        price: item.product.price,
        color: item.selectedColor,
      })),
    },
  }
}

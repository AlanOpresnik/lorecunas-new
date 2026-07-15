'use server'

import { revalidatePath } from 'next/cache'
import {
  createProduct,
  deleteProduct,
  updateProduct,
  type ProductInput,
} from '@/lib/products'
import { PRODUCT_CATEGORIES, type ProductCategory, type ProductStatus } from '@/lib/types'

export type ActionState = {
  ok: boolean
  message?: string
  errors?: Record<string, string>
}

function parseProductForm(formData: FormData): {
  data?: ProductInput
  errors?: Record<string, string>
} {
  const name = String(formData.get('name') ?? '').trim()
  const category = String(formData.get('category') ?? '') as ProductCategory
  const description = String(formData.get('description') ?? '').trim()
  const price = Number(formData.get('price'))
  const stock = Number(formData.get('stock'))
  const status = (String(formData.get('status') ?? 'active') as ProductStatus) || 'active'
  const image = String(formData.get('image') ?? '').trim()

  const errors: Record<string, string> = {}
  if (!name) errors.name = 'Ingresá un nombre para el producto.'
  if (!PRODUCT_CATEGORIES.includes(category)) errors.category = 'Elegí una categoría.'
  if (!Number.isFinite(price) || price < 0) errors.price = 'El precio debe ser un número válido.'
  if (!Number.isInteger(stock) || stock < 0) errors.stock = 'El stock debe ser un número entero.'

  if (Object.keys(errors).length > 0) return { errors }

  return {
    data: { name, category, description, price, stock, status, image },
  }
}

export async function createProductAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const { data, errors } = parseProductForm(formData)
  if (errors) return { ok: false, errors }
  await createProduct(data!)
  revalidatePath('/productos')
  revalidatePath('/')
  return { ok: true, message: 'Producto creado correctamente.' }
}

export async function updateProductAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const id = String(formData.get('id') ?? '')
  const { data, errors } = parseProductForm(formData)
  if (errors) return { ok: false, errors }
  const updated = await updateProduct(id, data!)
  if (!updated) return { ok: false, message: 'No se encontró el producto.' }
  revalidatePath('/productos')
  revalidatePath('/')
  return { ok: true, message: 'Producto actualizado.' }
}

export async function deleteProductAction(id: string): Promise<ActionState> {
  await deleteProduct(id)
  revalidatePath('/productos')
  revalidatePath('/')
  return { ok: true, message: 'Producto eliminado.' }
}

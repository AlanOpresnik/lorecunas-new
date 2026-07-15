'use client'

import { useActionState, useEffect, useState } from 'react'
import { toast } from 'sonner'

import { PRODUCT_CATEGORIES, type Product } from '@/lib/types'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Field, FieldGroup, FieldLabel, FieldError } from '@/components/ui/field'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Spinner } from '@/components/ui/spinner'
import { ActionState, createProductAction, updateProductAction } from '../../action/product'

const initialState: ActionState = { ok: false }

export function ProductFormDialog({
  product,
  open,
  onOpenChange,
}: {
  product?: Product
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const isEdit = Boolean(product)
  const action = isEdit ? updateProductAction : createProductAction
  const [state, formAction, pending] = useActionState(action, initialState)

  const [category, setCategory] = useState<string>(product?.category ?? '')
  const [status, setStatus] = useState<string>(product?.status ?? 'active')

  useEffect(() => {
    if (open) {
      setCategory(product?.category ?? '')
      setStatus(product?.status ?? 'active')
    }
  }, [open, product])

  useEffect(() => {
    if (state.ok) {
      toast.success(state.message ?? 'Guardado')
      onOpenChange(false)
    }
  }, [state, onOpenChange])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-serif">
            {isEdit ? 'Editar producto' : 'Nuevo producto'}
          </DialogTitle>
          <DialogDescription>
            {isEdit
              ? 'Actualizá la información del producto.'
              : 'Completá los datos para agregarlo al catálogo.'}
          </DialogDescription>
        </DialogHeader>

        <form action={formAction} className="flex flex-col gap-4">
          {isEdit ? <input type="hidden" name="id" value={product!.id} /> : null}
          <input type="hidden" name="category" value={category} />
          <input type="hidden" name="status" value={status} />

          <FieldGroup>
            <Field data-invalid={state.errors?.name ? true : undefined}>
              <FieldLabel htmlFor="name">Nombre</FieldLabel>
              <Input
                id="name"
                name="name"
                defaultValue={product?.name}
                placeholder="Ej. Cuna Convertible Luna"
                aria-invalid={state.errors?.name ? true : undefined}
              />
              {state.errors?.name ? <FieldError>{state.errors.name}</FieldError> : null}
            </Field>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field data-invalid={state.errors?.category ? true : undefined}>
                <FieldLabel>Categoría</FieldLabel>
                <Select value={category} onValueChange={(v) => setCategory(v ?? '')}>
                  <SelectTrigger aria-invalid={state.errors?.category ? true : undefined}>
                    <SelectValue placeholder="Elegí una" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {PRODUCT_CATEGORIES.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {state.errors?.category ? (
                  <FieldError>{state.errors.category}</FieldError>
                ) : null}
              </Field>

              <Field>
                <FieldLabel>Estado</FieldLabel>
                <Select value={status} onValueChange={(v) => setStatus(v ?? 'active')}>
                  <SelectTrigger>
                    <SelectValue>{(v) => (v === 'draft' ? 'Borrador' : 'Activo')}</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="active">Activo</SelectItem>
                      <SelectItem value="draft">Borrador</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field data-invalid={state.errors?.price ? true : undefined}>
                <FieldLabel htmlFor="price">Precio (ARS)</FieldLabel>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  min={0}
                  step={100}
                  defaultValue={product?.price}
                  placeholder="0"
                  aria-invalid={state.errors?.price ? true : undefined}
                />
                {state.errors?.price ? <FieldError>{state.errors.price}</FieldError> : null}
              </Field>

              <Field data-invalid={state.errors?.stock ? true : undefined}>
                <FieldLabel htmlFor="stock">Stock</FieldLabel>
                <Input
                  id="stock"
                  name="stock"
                  type="number"
                  min={0}
                  step={1}
                  defaultValue={product?.stock}
                  placeholder="0"
                  aria-invalid={state.errors?.stock ? true : undefined}
                />
                {state.errors?.stock ? <FieldError>{state.errors.stock}</FieldError> : null}
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor="description">Descripción</FieldLabel>
              <Textarea
                id="description"
                name="description"
                rows={3}
                defaultValue={product?.description}
                placeholder="Detalles, materiales, medidas…"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="image">URL de imagen (opcional)</FieldLabel>
              <Input
                id="image"
                name="image"
                defaultValue={product?.images?.[0]}
                placeholder="/products/mi-producto.png"
              />
            </Field>
          </FieldGroup>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={pending}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={pending}>
              {pending ? <Spinner data-icon="inline-start" /> : null}
              {isEdit ? 'Guardar cambios' : 'Crear producto'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

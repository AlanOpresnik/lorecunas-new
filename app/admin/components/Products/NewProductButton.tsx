'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductFormDialog } from './ProductFormDialog'

export function NewProductButton() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <Plus data-icon="inline-start" />
        Nuevo producto
      </Button>
      <ProductFormDialog open={open} onOpenChange={setOpen} />
    </>
  )
}

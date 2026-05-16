"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus, Pencil, Trash2, Package, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { products as mockProducts, categories, formatPrice } from "@/lib/data"
import { type Product } from "@/lib/types"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function AdminPage() {
  const [productList, setProductList] = useState<Product[]>(mockProducts)
  const [searchTerm, setSearchTerm] = useState("")
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const filtered = productList.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDelete = (id: string) => {
    setProductList((prev) => prev.filter((p) => p.id !== id))
  }

  const handleSave = (product: Product) => {
    if (editingProduct) {
      setProductList((prev) =>
        prev.map((p) => (p.id === product.id ? product : p))
      )
    } else {
      setProductList((prev) => [...prev, { ...product, id: String(Date.now()) }])
    }
    setEditingProduct(null)
    setIsDialogOpen(false)
  }

  const openNew = () => {
    setEditingProduct(null)
    setIsDialogOpen(true)
  }

  const openEdit = (product: Product) => {
    setEditingProduct(product)
    setIsDialogOpen(true)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">Panel de Admin</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {productList.length} productos en el catalogo
          </p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openNew} className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" />
              Agregar producto
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle className="font-serif">
                {editingProduct ? "Editar producto" : "Nuevo producto"}
              </DialogTitle>
            </DialogHeader>
            <ProductForm
              product={editingProduct}
              onSave={handleSave}
              onCancel={() => setIsDialogOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar producto..."
          className="w-full rounded-lg border border-input bg-background py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring sm:max-w-sm"
        />
      </div>

      {/* Products table */}
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary/50">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Producto
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Categoria
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Precio
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Stock
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map((product) => (
                <tr key={product.id} className="transition-colors hover:bg-secondary/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-card-foreground">
                          {product.name}
                        </p>
                        <p className="text-xs text-muted-foreground">{product.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm font-medium text-card-foreground">
                    {formatPrice(product.price)}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-sm font-medium ${
                        product.stock > 0 ? "text-green-600" : "text-destructive"
                      }`}
                    >
                      {product.stock}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => openEdit(product)}
                        className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                        aria-label="Editar producto"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                        aria-label="Eliminar producto"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-12 text-center">
                    <Package className="mx-auto h-10 w-10 text-muted-foreground/50" />
                    <p className="mt-2 text-sm text-muted-foreground">
                      No se encontraron productos
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

/* ---- Product Form ---- */

interface ProductFormProps {
  product: Product | null
  onSave: (product: Product) => void
  onCancel: () => void
}

function ProductForm({ product, onSave, onCancel }: ProductFormProps) {
  const [form, setForm] = useState<Partial<Product>>(
    product || {
      name: "",
      slug: "",
      price: 0,
      originalPrice: undefined,
      description: "",
      shortDescription: "",
      images: ["/images/crib-functional.jpg"],
      category: categories[0].name,
      categorySlug: categories[0].slug,
      dimensions: "",
      colors: ["Blanco"],
      featured: false,
      isNew: false,
      stock: 0,
    }
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({
      id: product?.id || "",
      name: form.name || "",
      slug: form.slug || form.name?.toLowerCase().replace(/\s+/g, "-") || "",
      price: form.price || 0,
      originalPrice: form.originalPrice,
      description: form.description || "",
      shortDescription: form.shortDescription || "",
      images: form.images || ["/images/crib-functional.jpg"],
      category: form.category || categories[0].name,
      categorySlug: form.categorySlug || categories[0].slug,
      dimensions: form.dimensions || "",
      colors: form.colors || ["Blanco"],
      featured: form.featured || false,
      isNew: form.isNew || false,
      stock: form.stock || 0,
    })
  }

  const inputClass =
    "mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-foreground">Nombre</label>
          <input
            className={inputClass}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Nombre del producto"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Slug</label>
          <input
            className={inputClass}
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
            placeholder="slug-del-producto"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="text-sm font-medium text-foreground">Precio</label>
          <input
            className={inputClass}
            type="number"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Precio original</label>
          <input
            className={inputClass}
            type="number"
            value={form.originalPrice || ""}
            onChange={(e) =>
              setForm({
                ...form,
                originalPrice: e.target.value ? Number(e.target.value) : undefined,
              })
            }
            placeholder="Opcional"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Stock</label>
          <input
            className={inputClass}
            type="number"
            value={form.stock}
            onChange={(e) => setForm({ ...form, stock: Number(e.target.value) })}
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-foreground">Categoria</label>
        <select
          className={inputClass}
          value={form.categorySlug}
          onChange={(e) => {
            const cat = categories.find((c) => c.slug === e.target.value)
            setForm({
              ...form,
              categorySlug: e.target.value,
              category: cat?.name || "",
            })
          }}
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.slug}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm font-medium text-foreground">Descripcion corta</label>
        <input
          className={inputClass}
          value={form.shortDescription}
          onChange={(e) => setForm({ ...form, shortDescription: e.target.value })}
          placeholder="Descripcion breve del producto"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-foreground">Descripcion completa</label>
        <textarea
          className={`${inputClass} resize-none`}
          rows={3}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder="Descripcion detallada"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-foreground">Medidas</label>
        <input
          className={inputClass}
          value={form.dimensions}
          onChange={(e) => setForm({ ...form, dimensions: e.target.value })}
          placeholder="Ej: 140 x 80 x 100 cm"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-foreground">
          Colores (separados por coma)
        </label>
        <input
          className={inputClass}
          value={form.colors?.join(", ")}
          onChange={(e) =>
            setForm({
              ...form,
              colors: e.target.value.split(",").map((s) => s.trim()),
            })
          }
          placeholder="Blanco, Rosa Pastel, Gris Claro"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-foreground">
          URLs de imagenes (separadas por coma)
        </label>
        <input
          className={inputClass}
          value={form.images?.join(", ")}
          onChange={(e) =>
            setForm({
              ...form,
              images: e.target.value.split(",").map((s) => s.trim()),
            })
          }
          placeholder="/images/product.jpg"
        />
      </div>

      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2 text-sm text-foreground">
          <input
            type="checkbox"
            checked={form.featured}
            onChange={(e) => setForm({ ...form, featured: e.target.checked })}
            className="rounded border-border"
          />
          Destacado
        </label>
        <label className="flex items-center gap-2 text-sm text-foreground">
          <input
            type="checkbox"
            checked={form.isNew}
            onChange={(e) => setForm({ ...form, isNew: e.target.checked })}
            className="rounded border-border"
          />
          Nuevo
        </label>
      </div>

      <div className="flex items-center justify-end gap-3 pt-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
          {product ? "Guardar cambios" : "Crear producto"}
        </Button>
      </div>
    </form>
  )
}

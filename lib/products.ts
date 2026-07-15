import type { Product, ProductCategory, ProductStatus } from '@/lib/types'

/**
 * In-memory product store used to power the admin UI.
 * Swap these functions for your database / Mercado Pago catalog calls when
 * you are ready to persist data. The public API (async functions) is designed
 * so the pages consuming it do not need to change.
 */
let products: Product[] = [
  {
    id: 'p_001',
    name: 'Cuna Convertible Luna',
    category: 'Cunas',
    description:
      'Cuna de madera de haya convertible en cama para primeros años. Barrotes de seguridad y base regulable en 3 alturas.',
    price: 189900,
    stock: 12,
    status: 'active',
    image: '/products/cuna-luna.png',
    createdAt: '2026-05-02T10:00:00.000Z',
  },
  {
    id: 'p_002',
    name: 'Colchón Ergonómico Nube',
    category: 'Colchones',
    description:
      'Colchón de espuma de alta densidad con funda desenfundable y lavable. Transpirable e hipoalergénico.',
    price: 64900,
    stock: 34,
    status: 'active',
    image: '/products/colchon-nube.png',
    createdAt: '2026-05-06T10:00:00.000Z',
  },
  {
    id: 'p_003',
    name: 'Cómoda Cambiador Roble',
    category: 'Cómodas',
    description:
      'Cómoda con cambiador extraíble y tres cajones amplios con cierre suave. Acabado en roble natural.',
    price: 142500,
    stock: 8,
    status: 'active',
    image: '/products/comoda-roble.png',
    createdAt: '2026-05-11T10:00:00.000Z',
  },
  {
    id: 'p_004',
    name: 'Set de Sábanas Algodón Orgánico',
    category: 'Textiles',
    description:
      'Juego de tres piezas en algodón 100% orgánico certificado. Suave al tacto y libre de químicos.',
    price: 28900,
    stock: 52,
    status: 'active',
    image: '/products/sabanas-algodon.png',
    createdAt: '2026-05-18T10:00:00.000Z',
  },
  {
    id: 'p_005',
    name: 'Móvil Colgante Estrellas',
    category: 'Decoración',
    description:
      'Móvil de fieltro artesanal con estrellas y nubes en tonos pastel. Ideal para estimular al bebé.',
    price: 15900,
    stock: 0,
    status: 'draft',
    image: '/products/movil-estrellas.png',
    createdAt: '2026-06-01T10:00:00.000Z',
  },
  {
    id: 'p_006',
    name: 'Estantería Nórdica Mini',
    category: 'Muebles',
    description:
      'Estantería de pino con tres niveles y bordes redondeados. Perfecta para libros y juguetes.',
    price: 54900,
    stock: 17,
    status: 'active',
    image: '/products/estanteria-nordica.png',
    createdAt: '2026-06-09T10:00:00.000Z',
  },
]

export type ProductInput = {
  name: string
  category: ProductCategory
  description: string
  price: number
  stock: number
  status: ProductStatus
  image?: string
}

function delay() {
  // Simulates async data access; remove when wiring a real database.
  return Promise.resolve()
}

export async function getProducts(): Promise<Product[]> {
  await delay()
  return [...products].sort((a, b) => b.createdAt.localeCompare(a.createdAt))
}

export async function getProduct(id: string): Promise<Product | undefined> {
  await delay()
  return products.find((p) => p.id === id)
}

export async function createProduct(input: ProductInput): Promise<Product> {
  await delay()
  const product: Product = {
    id: `p_${Math.random().toString(36).slice(2, 8)}`,
    name: input.name,
    category: input.category,
    description: input.description,
    price: input.price,
    stock: input.stock,
    status: input.status,
    image: input.image?.trim() ? input.image : '/products/placeholder.png',
    createdAt: new Date().toISOString(),
  }
  products = [product, ...products]
  return product
}

export async function updateProduct(
  id: string,
  input: ProductInput,
): Promise<Product | undefined> {
  await delay()
  const index = products.findIndex((p) => p.id === id)
  if (index === -1) return undefined
  products[index] = {
    ...products[index],
    name: input.name,
    category: input.category,
    description: input.description,
    price: input.price,
    stock: input.stock,
    status: input.status,
    image: input.image?.trim() ? input.image : products[index].image,
  }
  return products[index]
}

export async function deleteProduct(id: string): Promise<void> {
  await delay()
  products = products.filter((p) => p.id !== id)
}

export async function getProductStats() {
  await delay()
  const total = products.length
  const active = products.filter((p) => p.status === 'active').length
  const outOfStock = products.filter((p) => p.stock === 0).length
  const inventoryValue = products.reduce((sum, p) => sum + p.price * p.stock, 0)
  return { total, active, outOfStock, inventoryValue }
}

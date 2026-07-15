export interface Product {
  _id: string;
  name: string;
  slug: string;
  status: ProductStatus;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  images: string[];
  category: string;
  categorySlug: string;
  caracteristics: Caracteristics[];
  colors: string[];
  featured: boolean;
  isNew: boolean;
  createdAt: string;
  updatedAt: string;
  stock: number;
}

export interface Caracteristics {
  title: string;
  value: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  date: string;
}


export type ProductStatus = 'active' | 'inactive' | 'draft'

export type ProductCategory =
  | 'Cunas'
  | 'Colchones'
  | 'Cómodas'
  | 'Textiles'
  | 'Decoración'
  | 'Muebles'

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  'Cunas',
  'Colchones',
  'Cómodas',
  'Textiles',
  'Decoración',
  'Muebles',
]



/**
 * Payment statuses mirror the Mercado Pago payment API `status` field.
 * See: https://www.mercadopago.com.ar/developers -> payment.status
 */
export type PaymentStatus = 'approved' | 'pending' | 'rejected'

export type Order = {
  id: string
  reference: string
  customerName: string
  customerEmail: string
  items: number
  total: number
  status: PaymentStatus
  /** Mercado Pago payment id (payment.id) */
  mpPaymentId: string
  paymentMethod: string
  createdAt: string
}

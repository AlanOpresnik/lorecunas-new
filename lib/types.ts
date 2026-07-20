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
  videoUrl?: string;
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
  _id: string;
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

export type ProductCategory = {
  _id:string;
  name:string;
  description:string;
  image:string;
  active:boolean;
}





/**
 * Payment statuses mirror the Mercado Pago payment API `status` field.
 * See: https://www.mercadopago.com.ar/developers -> payment.status
 */
export type PaymentStatus = 'approved' | 'pending' | 'rejected'

export interface Order {
  _id: string;
  usuario: string;
  correo: string;
  telefono: string;
  telefonoSecundario: string;
  producto: Product;
  montoPago: number;
  statusPago: "approved" | "pending" | "rejected" | "in_process" | string;
  mercadoPagoId: string;
  direction: string;
  createdAt: string; // ISO date string, ej. "2026-07-17T01:01:38.561+00:00"
  updatedAt: string;
}

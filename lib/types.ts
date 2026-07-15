export interface Product {
  _id: string;
  name: string;
  slug: string;
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

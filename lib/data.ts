import { Product, Category, Testimonial } from "./types";

export const categories: Category[] = [
  {
    id: "1",
    name: "Cunas Funcionales",
    slug: "cunas-funcionales",
    description:
      "Cunas que se transforman y crecen con tu bebe, combinando versatilidad y diseno premium.",
    image: "/images/crib-functional.jpg",
    productCount: 6,
  },
  {
    id: "2",
    name: "Cunas Estandar",
    slug: "cunas-estandar",
    description:
      "Cunas clasicas con diseno elegante y la maxima seguridad para el descanso de tu bebe.",
    image: "/images/crib-standard.jpg",
    productCount: 5,
  },
  {
    id: "3",
    name: "Roperos",
    slug: "roperos",
    description:
      "Roperos amplios y funcionales para organizar toda la ropita de tu bebe.",
    image: "/images/wardrobe.jpg",
    productCount: 4,
  },
  {
    id: "4",
    name: "Chifonieres",
    slug: "chifonieres",
    description:
      "Chifonieres con cajones espaciosos para mantener todo en orden.",
    image: "/images/chiffonier.jpg",
    productCount: 3,
  },
  {
    id: "5",
    name: "Comodas",
    slug: "comodas",
    description:
      "Comodas con cambiador integrado, perfectas para la rutina diaria con tu bebe.",
    image: "/images/dresser.jpg",
    productCount: 4,
  },
  {
    id: "6",
    name: "Mesas de Luz",
    slug: "mesas-de-luz",
    description:
      "Mesas de luz que complementan perfectamente la habitacion del bebe.",
    image: "/images/nightstand.jpg",
    productCount: 3,
  },
  {
    id: "7",
    name: "Decoracion Infantil",
    slug: "decoracion-infantil",
    description:
      "Accesorios decorativos para crear un espacio magico y acogedor.",
    image: "/images/decoration.jpg",
    productCount: 8,
  },
  {
    id: "8",
    name: "Accesorios para Bebes",
    slug: "accesorios-bebes",
    description:
      "Complementos esenciales para el bienestar y la comodidad de tu bebe.",
    image: "/images/accessories.jpg",
    productCount: 6,
  },
];

export const products: Product[] = [
  {
    _id: "1",
    name: "Cuna Funcional Valentina",
    slug: "cuna-funcional-valentina",
    price: 289000,
    originalPrice: 320000,
    description:
      "La Cuna Funcional Valentina es la solucion perfecta para acompanar el crecimiento de tu bebe. Se convierte de cuna a cama infantil, incluyendo cajonera lateral y estantes organizadores. Fabricada en MDF de alta calidad con terminacion laqueada premium. Cumple con todas las normas de seguridad vigentes.",
    shortDescription:
      "Cuna funcional convertible con cajonera y estantes. Crece con tu bebe.",
    images: ["/images/crib-functional.jpg", "/images/crib-standard.jpg"],
    category: "Cunas Funcionales",
    categorySlug: "cunas-funcionales",
    caracteristics: [
      { id: "1", text: "Dimensiones: 140 x 80 x 100 cm" },
      { id: "2", text: "Convertible a cama infantil" },
      { id: "3", text: "Incluye cajonera lateral" },
      { id: "4", text: "Fabricada en MDF premium" },
    ],
    colors: ["Blanco", "Rosa Pastel", "Gris Claro"],
    featured: true,
    isNew: true,
    stock: 12,
  },

  {
    _id: "2",
    name: "Cuna Funcional Aurora",
    slug: "cuna-funcional-aurora",
    price: 310000,
    description:
      "La Cuna Funcional Aurora combina elegancia y practicidad. Con sistema de conversion a cama junior, cajones de almacenamiento y cambiador integrado. Madera maciza de alta resistencia con acabado ecologico.",
    shortDescription:
      "Cuna funcional premium con cambiador integrado y cajones amplios.",
    images: ["/images/crib-functional.jpg", "/images/crib-standard.jpg"],
    category: "Cunas Funcionales",
    categorySlug: "cunas-funcionales",
    caracteristics: [
      { id: "1", text: "Dimensiones: 150 x 85 x 105 cm" },
      { id: "2", text: "Sistema convertible a cama junior" },
      { id: "3", text: "Cambiador integrado" },
      { id: "4", text: "Madera maciza ecologica" },
    ],
    colors: ["Blanco", "Natural", "Rosa Pastel"],
    featured: true,
    isNew: false,
    stock: 8,
  },

  {
    _id: "3",
    name: "Cuna Estandar Lucia",
    slug: "cuna-estandar-lucia",
    price: 175000,
    originalPrice: 199000,
    description:
      "La Cuna Estandar Lucia ofrece un diseno clasico y atemporal con la maxima seguridad. Barrotes con separacion reglamentaria, base regulable en 3 alturas y laterales abatibles. Fabricada en madera de pino macizo.",
    shortDescription: "Cuna clasica con base regulable y diseno atemporal.",
    images: ["/images/crib-standard.jpg", "/images/crib-functional.jpg"],
    category: "Cunas Estandar",
    categorySlug: "cunas-estandar",
    caracteristics: [
      { id: "1", text: "Dimensiones: 120 x 60 x 95 cm" },
      { id: "2", text: "Base regulable en 3 alturas" },
      { id: "3", text: "Laterales abatibles" },
      { id: "4", text: "Pino macizo" },
    ],
    colors: ["Blanco", "Natural"],
    featured: true,
    isNew: false,
    stock: 15,
  },

  {
    _id: "4",
    name: "Ropero Infantil Emma",
    slug: "ropero-infantil-emma",
    price: 245000,
    description:
      "El Ropero Infantil Emma es amplio y funcional, con barra para colgar, estantes regulables y cajones inferiores. Diseno moderno con tiradores redondeados seguros para los mas pequenos. Terminacion laqueada premium.",
    shortDescription:
      "Ropero amplio con organizacion inteligente y diseno seguro.",
    images: ["/images/wardrobe.jpg"],
    category: "Roperos",
    categorySlug: "roperos",
    caracteristics: [
      { id: "1", text: "Dimensiones: 120 x 50 x 180 cm" },
      { id: "2", text: "Barra para colgar" },
      { id: "3", text: "Estantes regulables" },
      { id: "4", text: "Cajones inferiores" },
    ],
    colors: ["Blanco", "Rosa Pastel", "Gris Claro"],
    featured: true,
    isNew: true,
    stock: 6,
  },

  {
    _id: "5",
    name: "Chifonier Sofi",
    slug: "chifonier-sofi",
    price: 198000,
    description:
      "El Chifonier Sofi cuenta con 5 cajones de gran capacidad con correderias metalicas de alta calidad. Diseno esbelto que maximiza el almacenamiento en espacios reducidos. Terminacion suave al tacto.",
    shortDescription:
      "Chifonier de 5 cajones con correderias metalicas premium.",
    images: ["/images/chiffonier.jpg"],
    category: "Chifonieres",
    categorySlug: "chifonieres",
    caracteristics: [
      { id: "1", text: "Dimensiones: 60 x 45 x 120 cm" },
      { id: "2", text: "5 cajones amplios" },
      { id: "3", text: "Correderias metalicas premium" },
      { id: "4", text: "Acabado suave al tacto" },
    ],
    colors: ["Blanco", "Natural", "Rosa Pastel"],
    featured: false,
    isNew: true,
    stock: 10,
  },

  {
    _id: "6",
    name: "Comoda con Cambiador Mia",
    slug: "comoda-cambiador-mia",
    price: 215000,
    originalPrice: 240000,
    description:
      "La Comoda Mia integra un cambiador removible y 4 cajones amplios. Bordes redondeados para mayor seguridad. El cambiador se retira facilmente cuando tu bebe crezca, convirtiendose en una elegante comoda.",
    shortDescription:
      "Comoda con cambiador removible y bordes redondeados seguros.",
    images: ["/images/dresser.jpg"],
    category: "Comodas",
    categorySlug: "comodas",
    caracteristics: [
      { id: "1", text: "Dimensiones: 100 x 55 x 95 cm" },
      { id: "2", text: "Cambiador removible" },
      { id: "3", text: "4 cajones amplios" },
      { id: "4", text: "Bordes redondeados" },
    ],
    colors: ["Blanco", "Gris Claro"],
    featured: true,
    isNew: false,
    stock: 9,
  },
];
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Carolina M.",
    text: "Armamos toda la habitacion de nuestra beba con sus muebles y quedo soñada. La calidad es increible y la atencion personalizada fue clave para elegir todo. Super recomendable.",
    rating: 5,
    date: "Marzo 2026",
  },
  {
    id: "2",
    name: "Valentina R.",
    text: "La cuna funcional es lo mejor que compramos. Ahora que mi hijo crecio, se convirtio en camita sin problema. Excelente inversion a largo plazo.",
    rating: 5,
    date: "Enero 2026",
  },
  {
    id: "3",
    name: "Luciana P.",
    text: "Me encanto la atencion por WhatsApp. Me ayudaron a elegir la combinacion perfecta para el cuarto. Entrega rapida y todo llego impecable.",
    rating: 5,
    date: "Febrero 2026",
  },
  {
    id: "4",
    name: "Mariana G.",
    text: "Los muebles son hermosos y muy bien terminados. Se nota que son de calidad premium. Mi hija va a disfrutar su habitacion por muchos años.",
    rating: 4,
    date: "Abril 2026",
  },
];

export const benefits = [
  {
    title: "Envio Seguro",
    description: "Entregamos tus muebles con el mayor cuidado a todo el pais.",
    icon: "truck",
  },
  {
    title: "Calidad Premium",
    description: "Materiales de primera calidad y terminaciones impecables.",
    icon: "shield",
  },
  {
    title: "Atencion Personalizada",
    description:
      "Te asesoramos por WhatsApp para elegir lo mejor para tu bebe.",
    icon: "heart",
  },
  {
    title: "Garantia",
    description: "Todos nuestros muebles cuentan con garantia de fabrica.",
    icon: "badge",
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const res = await fetch("http://localhost:8080/api/products/featured", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return [];
  }
}

export async function getProductById(id: string): Promise<Product | undefined> {
  try {
    const res = await fetch(`http://localhost:8080/api/products/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching product by id:", error);
    return undefined;
  }
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(price);
}

import { Product, Category, Testimonial } from "./types"

export const categories: Category[] = [
  {
    id: "1",
    name: "Cunas Funcionales",
    slug: "cunas-funcionales",
    description: "Cunas que se transforman y crecen con tu bebe, combinando versatilidad y diseno premium.",
    image: "/images/crib-functional.jpg",
    productCount: 6,
  },
  {
    id: "2",
    name: "Cunas Estandar",
    slug: "cunas-estandar",
    description: "Cunas clasicas con diseno elegante y la maxima seguridad para el descanso de tu bebe.",
    image: "/images/crib-standard.jpg",
    productCount: 5,
  },
  {
    id: "3",
    name: "Roperos",
    slug: "roperos",
    description: "Roperos amplios y funcionales para organizar toda la ropita de tu bebe.",
    image: "/images/wardrobe.jpg",
    productCount: 4,
  },
  {
    id: "4",
    name: "Chifonieres",
    slug: "chifonieres",
    description: "Chifonieres con cajones espaciosos para mantener todo en orden.",
    image: "/images/chiffonier.jpg",
    productCount: 3,
  },
  {
    id: "5",
    name: "Comodas",
    slug: "comodas",
    description: "Comodas con cambiador integrado, perfectas para la rutina diaria con tu bebe.",
    image: "/images/dresser.jpg",
    productCount: 4,
  },
  {
    id: "6",
    name: "Mesas de Luz",
    slug: "mesas-de-luz",
    description: "Mesas de luz que complementan perfectamente la habitacion del bebe.",
    image: "/images/nightstand.jpg",
    productCount: 3,
  },
  {
    id: "7",
    name: "Decoracion Infantil",
    slug: "decoracion-infantil",
    description: "Accesorios decorativos para crear un espacio magico y acogedor.",
    image: "/images/decoration.jpg",
    productCount: 8,
  },
  {
    id: "8",
    name: "Accesorios para Bebes",
    slug: "accesorios-bebes",
    description: "Complementos esenciales para el bienestar y la comodidad de tu bebe.",
    image: "/images/accessories.jpg",
    productCount: 6,
  },
]

export const products: Product[] = [
  {
    id: "1",
    name: "Cuna Funcional Valentina",
    slug: "cuna-funcional-valentina",
    price: 289000,
    originalPrice: 320000,
    description:
      "La Cuna Funcional Valentina es la solucion perfecta para acompanar el crecimiento de tu bebe. Se convierte de cuna a cama infantil, incluyendo cajonera lateral y estantes organizadores. Fabricada en MDF de alta calidad con terminacion laqueada premium. Cumple con todas las normas de seguridad vigentes.",
    shortDescription: "Cuna funcional convertible con cajonera y estantes. Crece con tu bebe.",
    images: ["/images/crib-functional.jpg", "/images/crib-standard.jpg"],
    category: "Cunas Funcionales",
    categorySlug: "cunas-funcionales",
    dimensions: "140 x 80 x 100 cm",
    colors: ["Blanco", "Rosa Pastel", "Gris Claro"],
    featured: true,
    isNew: true,
    stock: 12,
  },
  {
    id: "2",
    name: "Cuna Funcional Aurora",
    slug: "cuna-funcional-aurora",
    price: 310000,
    description:
      "La Cuna Funcional Aurora combina elegancia y practicidad. Con sistema de conversion a cama junior, cajones de almacenamiento y cambiador integrado. Madera maciza de alta resistencia con acabado ecologico.",
    shortDescription: "Cuna funcional premium con cambiador integrado y cajones amplios.",
    images: ["/images/crib-functional.jpg", "/images/crib-standard.jpg"],
    category: "Cunas Funcionales",
    categorySlug: "cunas-funcionales",
    dimensions: "150 x 85 x 105 cm",
    colors: ["Blanco", "Natural", "Rosa Pastel"],
    featured: true,
    isNew: false,
    stock: 8,
  },
  {
    id: "3",
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
    dimensions: "120 x 60 x 95 cm",
    colors: ["Blanco", "Natural"],
    featured: true,
    isNew: false,
    stock: 15,
  },
  {
    id: "4",
    name: "Ropero Infantil Emma",
    slug: "ropero-infantil-emma",
    price: 245000,
    description:
      "El Ropero Infantil Emma es amplio y funcional, con barra para colgar, estantes regulables y cajones inferiores. Diseno moderno con tiradores redondeados seguros para los mas pequenos. Terminacion laqueada premium.",
    shortDescription: "Ropero amplio con organizacion inteligente y diseno seguro.",
    images: ["/images/wardrobe.jpg"],
    category: "Roperos",
    categorySlug: "roperos",
    dimensions: "120 x 50 x 180 cm",
    colors: ["Blanco", "Rosa Pastel", "Gris Claro"],
    featured: true,
    isNew: true,
    stock: 6,
  },
  {
    id: "5",
    name: "Chifonier Sofi",
    slug: "chifonier-sofi",
    price: 198000,
    description:
      "El Chifonier Sofi cuenta con 5 cajones de gran capacidad con correderias metalicas de alta calidad. Diseno esbelto que maximiza el almacenamiento en espacios reducidos. Terminacion suave al tacto.",
    shortDescription: "Chifonier de 5 cajones con correderias metalicas premium.",
    images: ["/images/chiffonier.jpg"],
    category: "Chifonieres",
    categorySlug: "chifonieres",
    dimensions: "60 x 45 x 120 cm",
    colors: ["Blanco", "Natural", "Rosa Pastel"],
    featured: false,
    isNew: true,
    stock: 10,
  },
  {
    id: "6",
    name: "Comoda con Cambiador Mia",
    slug: "comoda-cambiador-mia",
    price: 215000,
    originalPrice: 240000,
    description:
      "La Comoda Mia integra un cambiador removible y 4 cajones amplios. Bordes redondeados para mayor seguridad. El cambiador se retira facilmente cuando tu bebe crezca, convirtiendose en una elegante comoda.",
    shortDescription: "Comoda con cambiador removible y bordes redondeados seguros.",
    images: ["/images/dresser.jpg"],
    category: "Comodas",
    categorySlug: "comodas",
    dimensions: "100 x 55 x 95 cm",
    colors: ["Blanco", "Gris Claro"],
    featured: true,
    isNew: false,
    stock: 9,
  },
  {
    id: "7",
    name: "Mesa de Luz Estrella",
    slug: "mesa-de-luz-estrella",
    price: 68000,
    description:
      "La Mesa de Luz Estrella es el complemento perfecto para la habitacion del bebe. Con un cajon y estante inferior, combina funcionalidad y ternura. Diseno que armoniza con toda nuestra linea de muebles.",
    shortDescription: "Mesa de luz con cajon y estante, diseno armonioso.",
    images: ["/images/nightstand.jpg"],
    category: "Mesas de Luz",
    categorySlug: "mesas-de-luz",
    dimensions: "45 x 35 x 55 cm",
    colors: ["Blanco", "Rosa Pastel", "Natural"],
    featured: false,
    isNew: false,
    stock: 20,
  },
  {
    id: "8",
    name: "Movil Musical Nube",
    slug: "movil-musical-nube",
    price: 35000,
    description:
      "Hermoso movil musical con figuras de nubes y estrellas en tonos pastel. Melodia suave para ayudar a dormir a tu bebe. Facil de instalar en cualquier cuna. Materiales seguros y no toxicos.",
    shortDescription: "Movil musical con melodia suave y figuras tiernas.",
    images: ["/images/decoration.jpg"],
    category: "Decoracion Infantil",
    categorySlug: "decoracion-infantil",
    dimensions: "30 x 30 x 45 cm",
    colors: ["Rosa Pastel", "Celeste", "Blanco"],
    featured: false,
    isNew: true,
    stock: 25,
  },
  {
    id: "9",
    name: "Set Sabanas Cuna Algodon",
    slug: "set-sabanas-cuna-algodon",
    price: 28000,
    description:
      "Set de sabanas para cuna de algodon 100% organico. Incluye sabana bajera ajustable, sabana encimera y funda de almohada. Suave al tacto, hipoalergenico y seguro para la piel del bebe.",
    shortDescription: "Set de sabanas de algodon organico, suave e hipoalergenico.",
    images: ["/images/accessories.jpg"],
    category: "Accesorios para Bebes",
    categorySlug: "accesorios-bebes",
    dimensions: "120 x 60 cm (cuna estandar)",
    colors: ["Rosa", "Blanco", "Gris"],
    featured: false,
    isNew: false,
    stock: 30,
  },
  {
    id: "10",
    name: "Cuna Funcional Cielo",
    slug: "cuna-funcional-cielo",
    price: 335000,
    description:
      "La Cuna Funcional Cielo es nuestra linea premium. Incluye cuna convertible, cajonera doble, estanteria lateral y cambiador. Fabricada con materiales ecologicos certificados. Un mueble que acompaña a tu hijo por anos.",
    shortDescription: "Linea premium con cuna convertible, cajonera doble y estanteria.",
    images: ["/images/crib-functional.jpg", "/images/crib-standard.jpg"],
    category: "Cunas Funcionales",
    categorySlug: "cunas-funcionales",
    dimensions: "160 x 90 x 110 cm",
    colors: ["Blanco", "Natural", "Gris Claro"],
    featured: true,
    isNew: true,
    stock: 5,
  },
  {
    id: "11",
    name: "Ropero Infantil Luna",
    slug: "ropero-infantil-luna",
    price: 275000,
    description:
      "El Ropero Luna es un mueble de dos puertas con espejo interior, barras a doble altura y cajones inferiores. Ideal para organizar toda la ropa del bebe de manera accesible y ordenada.",
    shortDescription: "Ropero de dos puertas con espejo y organizacion doble.",
    images: ["/images/wardrobe.jpg"],
    category: "Roperos",
    categorySlug: "roperos",
    dimensions: "130 x 55 x 185 cm",
    colors: ["Blanco", "Rosa Pastel"],
    featured: false,
    isNew: false,
    stock: 7,
  },
  {
    id: "12",
    name: "Guirnalda Luminosa Corazones",
    slug: "guirnalda-luminosa-corazones",
    price: 18000,
    description:
      "Encantadora guirnalda con luces LED en forma de corazones. Luz calida y suave, perfecta para crear un ambiente acogedor en la habitacion del bebe. Funciona con pilas, segura y de bajo consumo.",
    shortDescription: "Guirnalda LED con forma de corazones, luz calida y segura.",
    images: ["/images/decoration.jpg"],
    category: "Decoracion Infantil",
    categorySlug: "decoracion-infantil",
    dimensions: "200 cm de largo",
    colors: ["Rosa", "Blanco Calido"],
    featured: false,
    isNew: false,
    stock: 40,
  },
]

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
]

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
    description: "Te asesoramos por WhatsApp para elegir lo mejor para tu bebe.",
    icon: "heart",
  },
  {
    title: "Garantia",
    description: "Todos nuestros muebles cuentan con garantia de fabrica.",
    icon: "badge",
  },
]

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(price)
}

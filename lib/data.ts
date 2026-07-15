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


import type { Order, PaymentStatus } from '@/lib/types'

/**
 * In-memory orders store.
 *
 * In production these records come from your checkout combined with the
 * Mercado Pago payment webhook / SDK. The `status` field maps directly to the
 * Mercado Pago `payment.status` value:
 *   - "approved"  -> pago acreditado
 *   - "pending"   -> pago pendiente / en proceso
 *   - "rejected"  -> pago rechazado
 *
 * Wiring example (server):
 *   import { MercadoPagoConfig, Payment } from 'mercadopago'
 *   const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN! })
 *   const payment = await new Payment(client).get({ id: mpPaymentId })
 *   order.status = payment.status // 'approved' | 'pending' | 'rejected'
 */
const orders: Order[] = [
  {
    id: 'o_1042',
    reference: '#1042',
    customerName: 'María Fernández',
    customerEmail: 'maria.f@gmail.com',
    items: 2,
    total: 254800,
    status: 'approved',
    mpPaymentId: '73829104521',
    paymentMethod: 'Visa •••• 4021',
    createdAt: '2026-07-13T14:32:00.000Z',
  },
  {
    id: 'o_1041',
    reference: '#1041',
    customerName: 'Julián Torres',
    customerEmail: 'julian.torres@hotmail.com',
    items: 1,
    total: 64900,
    status: 'pending',
    mpPaymentId: '73829104388',
    paymentMethod: 'Pago Fácil',
    createdAt: '2026-07-13T11:05:00.000Z',
  },
  {
    id: 'o_1040',
    reference: '#1040',
    customerName: 'Carla Giménez',
    customerEmail: 'carla.gimenez@gmail.com',
    items: 3,
    total: 187700,
    status: 'approved',
    mpPaymentId: '73829104102',
    paymentMethod: 'Mastercard •••• 8890',
    createdAt: '2026-07-12T18:47:00.000Z',
  },
  {
    id: 'o_1039',
    reference: '#1039',
    customerName: 'Diego Rossi',
    customerEmail: 'drossi@outlook.com',
    items: 1,
    total: 142500,
    status: 'rejected',
    mpPaymentId: '73829103984',
    paymentMethod: 'Visa •••• 1188',
    createdAt: '2026-07-12T09:21:00.000Z',
  },
  {
    id: 'o_1038',
    reference: '#1038',
    customerName: 'Sofía Álvarez',
    customerEmail: 'sofi.alvarez@gmail.com',
    items: 4,
    total: 321600,
    status: 'approved',
    mpPaymentId: '73829103771',
    paymentMethod: 'Mercado Pago (dinero en cuenta)',
    createdAt: '2026-07-11T16:10:00.000Z',
  },
  {
    id: 'o_1037',
    reference: '#1037',
    customerName: 'Nicolás Medina',
    customerEmail: 'nico.medina@gmail.com',
    items: 2,
    total: 93800,
    status: 'pending',
    mpPaymentId: '73829103540',
    paymentMethod: 'Rapipago',
    createdAt: '2026-07-11T10:02:00.000Z',
  },
  {
    id: 'o_1036',
    reference: '#1036',
    customerName: 'Valentina Ruiz',
    customerEmail: 'valen.ruiz@hotmail.com',
    items: 1,
    total: 28900,
    status: 'approved',
    mpPaymentId: '73829103301',
    paymentMethod: 'Visa Débito •••• 5567',
    createdAt: '2026-07-10T20:44:00.000Z',
  },
  {
    id: 'o_1035',
    reference: '#1035',
    customerName: 'Martín Castro',
    customerEmail: 'martincastro@gmail.com',
    items: 5,
    total: 412300,
    status: 'rejected',
    mpPaymentId: '73829103099',
    paymentMethod: 'Mastercard •••• 2234',
    createdAt: '2026-07-10T13:15:00.000Z',
  },
]

export async function getOrders(): Promise<Order[]> {
  return [...orders].sort((a, b) => b.createdAt.localeCompare(a.createdAt))
}

export async function getOrderStats() {
  const totalRevenue = orders
    .filter((o) => o.status === 'approved')
    .reduce((sum, o) => sum + o.total, 0)
  const counts = orders.reduce(
    (acc, o) => {
      acc[o.status] += 1
      return acc
    },
    { approved: 0, pending: 0, rejected: 0 } as Record<PaymentStatus, number>,
  )
  return {
    totalRevenue,
    totalOrders: orders.length,
    approved: counts.approved,
    pending: counts.pending,
    rejected: counts.rejected,
  }
}

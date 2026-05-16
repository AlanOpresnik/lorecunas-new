import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Cunita Bebe",
  description: "Encuentra respuestas a las preguntas mas frecuentes sobre nuestros muebles infantiles.",
}

const faqs = [
  {
    question: "Que materiales utilizan para fabricar los muebles?",
    answer:
      "Utilizamos MDF de alta densidad, madera de pino macizo y materiales ecologicos certificados. Todas nuestras terminaciones son laqueadas con pinturas no toxicas, seguras para bebes.",
  },
  {
    question: "Cuanto tiempo tarda el envio?",
    answer:
      "Los envios dentro de Buenos Aires demoran entre 3 a 5 dias habiles. Para el interior del pais, el plazo es de 7 a 15 dias habiles dependiendo de la zona. Todos los muebles se envian con embalaje reforzado.",
  },
  {
    question: "Las cunas funcionales realmente se convierten en cama?",
    answer:
      "Si! Nuestras cunas funcionales estan diseñadas para transformarse en camas infantiles a medida que tu hijo crece. Incluyen todas las piezas y mecanismos necesarios para la conversion sin costo adicional.",
  },
  {
    question: "Tienen garantia los muebles?",
    answer:
      "Todos nuestros muebles cuentan con garantia de fabrica de 12 meses que cubre defectos de fabricacion y materiales. Ademas, ofrecemos soporte post-venta para cualquier consulta.",
  },
  {
    question: "Puedo ver los muebles antes de comprar?",
    answer:
      "Contamos con un showroom donde podes ver y tocar nuestros productos. Coordina tu visita por WhatsApp y te atendemos de manera personalizada.",
  },
  {
    question: "Ofrecen descuento por compra de habitacion completa?",
    answer:
      "Si! Tenemos precios especiales cuando armas la habitacion completa (cuna + comoda + ropero). Consultanos por WhatsApp para recibir un presupuesto personalizado con descuento.",
  },
  {
    question: "Como se realiza el pago?",
    answer:
      "Aceptamos transferencia bancaria, tarjetas de credito y debito (hasta 12 cuotas sin interes en tarjetas seleccionadas), y efectivo. El pago se coordina al confirmar tu pedido por WhatsApp.",
  },
  {
    question: "Realizan envios al interior del pais?",
    answer:
      "Si, realizamos envios a todo el pais a traves de transporte de cargas. El costo del envio varia segun la zona y se calcula al momento de la compra.",
  },
  {
    question: "Los muebles vienen armados?",
    answer:
      "Los muebles se envian desarmados para asegurar un transporte seguro. Incluyen instrucciones claras de armado y toda la ferreteria necesaria. Tambien ofrecemos servicio de armado a domicilio con costo adicional.",
  },
  {
    question: "Puedo personalizar los colores de los muebles?",
    answer:
      "Nuestros muebles estan disponibles en los colores indicados en cada producto. Para pedidos especiales de colores personalizados, consultanos por WhatsApp ya que podemos evaluar la posibilidad segun el modelo.",
  },
]

export default function PreguntasFrecuentesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8 lg:py-16">
      <div className="mb-10 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          Ayuda
        </span>
        <h1 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
          Preguntas Frecuentes
        </h1>
        <p className="mt-3 text-muted-foreground">
          Encontra respuestas a las consultas mas comunes sobre nuestros productos y servicios.
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="rounded-xl border border-border bg-card px-5"
          >
            <AccordionTrigger className="text-left font-serif text-base font-semibold text-card-foreground hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-12 rounded-xl border border-border bg-secondary/50 p-6 text-center">
        <p className="text-sm text-muted-foreground">
          {"No encontraste lo que buscabas?"}
        </p>
        <a
          href="https://wa.me/5491112345678?text=Hola!%20Tengo%20una%20consulta."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
        >
          Escribinos por WhatsApp y te ayudamos
        </a>
      </div>
    </div>
  )
}

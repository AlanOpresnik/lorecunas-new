"use client";

import { useEffect, useState } from "react";
import { ORDER_STORAGE_KEY } from "../../page";
import { Order } from "@/lib/types";

const PAYMENT_METHOD = "Tarjeta ····4242";
const WHATSAPP_PHONE = "5491112345678";

interface Props {
  order: Order | null;
}

export default function PaymentSuccessCard({ order }: Props) {
  const [secondsLeft, setSecondsLeft] = useState(10);

  if(!order) {
    return <p>Cargando orden...</p>
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(timer);
          window.location.href = whatsappUrl;
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const whatsappMessage = `Hola, confirmo mi compra. Orden: ${order.mercadoPagoId} · Total: ${order.montoPago} · Método de pago: Mercado pago. Quiero coordinar la entrega.`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16 bg-gradient-to-br from-[#fdf6f0] via-[#fbe8e8] to-[#f4d4d4]">
      {/* Confetti */}

      <section className="relative z-10 w-full max-w-lg rounded-3xl bg-white p-10 text-center shadow-[0_20px_60px_-20px_rgba(212,165,165,0.5)]">
        {/* Success icon */}
        <div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center">
          <span className="absolute inset-0 rounded-full bg-[#d4a5a5]/40 animate-[ringPulse_2s_ease-out_infinite]" />
          <span
            className="absolute inset-0 rounded-full bg-[#d4a5a5]/25 animate-[ringPulse_2s_ease-out_infinite]"
            style={{ animationDelay: "0.6s" }}
          />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#d4a5a5] shadow-lg animate-[pop_0.7s_cubic-bezier(0.34,1.56,0.64,1)_both]">
            <svg viewBox="0 0 52 52" className="h-12 w-12">
              <path
                fill="none"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="60"
                strokeDashoffset="60"
                d="M14 27 l8 8 l16 -18"
                className="animate-[drawCheck_0.5s_0.5s_ease-out_forwards]"
              />
            </svg>
          </div>
        </div>

        <p
          className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c48b8b] opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]"
          style={{ animationDelay: "0.3s" }}
        >
          Pago confirmado
        </p>
        <h1
          className="mt-3 text-4xl font-bold tracking-tight text-neutral-900 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]"
          style={{ animationDelay: "0.45s" }}
        >
          ¡Gracias por tu compra!
        </h1>
        <p
          className="mt-4 text-base leading-relaxed text-neutral-500 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]"
          style={{ animationDelay: "0.6s" }}
        >
          Tu pedido se ha procesado con éxito. Estamos preparando cada detalle
          con amor para que llegue pronto al espacio de tu bebé.
        </p>

        <div
          className="mt-6 rounded-2xl bg-[#fdf6f0] p-4 text-left opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]"
          style={{ animationDelay: "0.75s" }}
        >
          <Row label="N° de orden" value={order._id} />
          <Row label="Nombre" value={order.usuario} />
          <Row label="Correo electronico" value={order.correo} />
          <Row label="Notas de la orden" value={order.notas} />
          <Row label="Telefono de contacto" value={order.telefono} />
          <Row
            label="Estado del pago"
            value={
              order.statusPago === "approved"
                ? "Pago recibido con exito"
                : order.statusPago === "pending"
                  ? "El pago esta pendiente de confirmacion"
                  : "El pago fue rechazado comunicarse por telefono."
            }
          />
          <Row label="Total" value={String(order.montoPago)} />
          <Row label="Método de pago" value={"Mercado pago"} />
        </div>

        <div
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]"
          style={{ animationDelay: "0.9s" }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#d4a5a5] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]"
          >
            Ir a WhatsApp ahora
          </a>
        </div>

        <p
          className="mt-6 text-sm text-neutral-500 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]"
          style={{ animationDelay: "1.05s" }}
        >
          Serás redirigido a WhatsApp en {secondsLeft} segundo
          {secondsLeft === 1 ? "" : "s"}.
        </p>

        <p
          className="mt-3 text-xs text-neutral-400 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]"
          style={{ animationDelay: "1.05s" }}
        >
          Enviamos la confirmación a tu correo electrónico.
        </p>
      </section>

      {/* Keyframes */}
      <style>{`
        @keyframes pop {
          0% { transform: scale(0); opacity: 0; }
          60% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes drawCheck { to { stroke-dashoffset: 0; } }
        @keyframes ringPulse {
          0% { transform: scale(0.8); opacity: 0.7; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes floatUp {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(-20vh) rotate(360deg); opacity: 0; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm py-1">
      <span className="text-neutral-500">{label}</span>
      <span className="font-semibold text-neutral-900">{value}</span>
    </div>
  );
}

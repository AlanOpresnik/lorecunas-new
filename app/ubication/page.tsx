import React from "react";
import {
  Search,
  ShoppingBag,
  MapPin,
  Clock,
  Phone,
  Mail,
  Instagram,
  Facebook,
} from "lucide-react";

export default function UbicationPage() {
  const mapSrc =
    "https://www.google.com/maps?q=Av.+Santa+Fe+3456,+Palermo,+CABA,+Argentina&output=embed";

  return (
    <div className="min-h-screen w-full bg-[#F7F3EC] font-[Poppins,sans-serif] text-[#2B2622]">
      {/* HERO */}
      <section className="px-6 md:px-12 pt-16 pb-10 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
          Donde nos <span className="text-[#F2A9BE]">ubicamos</span>
        </h1>
        <p className="text-[#7A7268] text-base md:text-lg">
          Visitanos y conocé de cerca la calidad de nuestros muebles. Te
          esperamos con un espacio pensado para vos y tu bebé.
        </p>
      </section>

      {/* CONTENIDO: INFO + MAPA */}
      <section className="px-6 md:px-12 pb-20 max-w-6xl mx-auto grid md:grid-cols-5 gap-8 items-start">
        {/* Tarjeta de información */}
        <div className="md:col-span-2 bg-white rounded-3xl border border-[#EAE3D8] p-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-[#F9E2E9] flex items-center justify-center shrink-0">
              <MapPin size={18} className="text-[#D9698A]" />
            </div>
            <div>
              <p className="font-bold text-sm">Dirección</p>
              <p className="text-[#7A7268] text-sm mt-1">
                Puente Marquez 980
                <br /> Paso del rey Moreno.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-[#F9E2E9] flex items-center justify-center shrink-0">
              <Clock size={18} className="text-[#D9698A]" />
            </div>
            <div>
              <p className="font-bold text-sm">Horarios</p>
              <p className="text-[#7A7268] text-sm mt-1">
                Mie a viernes: 14:30 a 18:00 hs
                <br />
                Sábados: 09:00 a 13:00 hs
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-[#F9E2E9] flex items-center justify-center shrink-0">
              <Phone size={18} className="text-[#D9698A]" />
            </div>
            <div>
              <p className="font-bold text-sm">Teléfono</p>
              <p className="text-[#7A7268] text-sm mt-1">+54 11 6939-3427</p>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/WBDZHVHyQgpfy5Mw5"
            target="_blank"
            rel="noreferrer"
            className="block text-center bg-[#F2A9BE] hover:bg-[#EE93AC] text-white font-bold text-sm rounded-full py-3 mt-2 transition-colors"
          >
            Cómo llegar
          </a>
        </div>

        {/* Mapa */}
        <div className="md:col-span-3 rounded-3xl overflow-hidden border border-[#EAE3D8] h-[420px] md:h-[520px] shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.1943169570677!2d-58.73057232353014!3d-34.62452945859878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbe250320443d%3A0xf133d4e47ac97fe8!2sLore%20Cunas!5e0!3m2!1ses-419!2sar!4v1784669829417!5m2!1ses-419!2sar"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { CartProvider } from "@/components/cart-context";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper/LayoutWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lorecunas.com.ar"),
  title: "LoreCunas | Muebles Infantiles",
  description:
    "FABRICACION ARGENTINA · ENVIOS 100% SEGUROS · LOS MEJORES PRECIOS. Precios mayoristas para vos. Imagen de fondo. Accesorios. para dormitorios.",
  openGraph: {
    title: "LoreCunas | Muebles Infantiles",
    description:
      "FABRICACION ARGENTINA · ENVIOS 100% SEGUROS · LOS MEJORES PRECIOS. Precios mayoristas para vos. Imagen de fondo. Accesorios. para dormitorios.",
    url: "https://www.lorecunas.com.ar",
    siteName: "LoreCunas",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoreCunas | Muebles Infantiles",
    description: "Mueblería especializada en muebles infantiles para bebés.",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="bg-background">
      <body className="font-sans antialiased">
        <CartProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </CartProvider>

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}

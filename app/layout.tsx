import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { CartProvider } from "@/components/cart-context";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper/LayoutWrapper";

export const metadata: Metadata = {
  title: "Cunita Bebe | Muebles Infantiles Premium",
  description:
    "Muebleria especializada en muebles infantiles para bebes. Cunas funcionales, roperos, comodas y decoracion para la habitacion de tu bebe.",
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

import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lorecunas · Panel de administración",
  description:
    "Panel de administración de Lorecunas para gestionar productos y pedidos del ecommerce de muebles infantiles.",
  generator: "v0.app",
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f6f1ea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <Toaster />
      {process.env.NODE_ENV === "production" && <Analytics />}
    </div>
  );
}

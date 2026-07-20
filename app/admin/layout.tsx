import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";
import { requireAdmin } from "@/lib/auth";

import { Geist, Geist_Mono } from "next/font/google";



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

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAdmin();

  return (
    <>
      {children} <Toaster />
    </>
  );
}

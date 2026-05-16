import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin | Cunita Bebe",
  description: "Panel de administracion de productos.",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

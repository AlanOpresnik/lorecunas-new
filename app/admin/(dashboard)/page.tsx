export const dynamic = "force-dynamic";
import Link from "next/link";
import {
  DollarSign,
  Package,
  ShoppingBag,
  AlertTriangle,
  ArrowUpRight,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DashboardHeader } from "../components/Dashboard/DashboardHeader";
import { StatCard } from "../components/StatCard/StatCard";
import { formatCurrency, formatDateTime } from "@/lib/format";
import { PaymentStatusBadge } from "../components/PaymentsBadge/PaymentsBadge";
import { WeeklySales } from "../components/WeeklySales/WeeklySales";
import { api } from "@/lib/api";

export default async function OverviewPage() {
  const [orderStats, productStats, orders, products] = await Promise.all([
    api.getOrderStats(),
    api.getStats(),
    api.getOrders(),
    api.getProducts(),
    
  ]);

  const recentOrders = orders.slice(0, 5);
  const lowStock = products
    .filter((p) => p.stock <= 10)
    .sort((a, b) => a.stock - b.stock)
    .slice(0, 4);



  return (
    <>
      <DashboardHeader
        title="Buen día, Lore"
        description="Este es el estado de tu tienda hoy."
      />
      <div className="flex flex-col gap-6 p-4 md:p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            label="Ingresos acreditados"
            value={formatCurrency(orderStats.totalRevenue)}
            hint="Pagos aprobados por Mercado Pago"
            icon={DollarSign}
            tone="positive"
          />
          <StatCard
            label="Pedidos totales"
            value={String(orderStats.totalOrders)}
            hint={`${orderStats.pending} pendientes de pago`}
            icon={ShoppingBag}
          />
          <StatCard
            label="Productos activos"
            value={String(productStats.activeProducts)}
            hint={`${productStats.totalProducts} en el catálogo`}
            icon={Package}
          />
          <StatCard
            label="Sin stock"
            value={String(productStats.productsOutOfStock)}
            hint="Productos agotados"
            icon={AlertTriangle}
            tone={productStats.productsOutOfStock > 0 ? "warning" : "default"}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader className="flex-row items-center justify-between">
              <div className="flex flex-col gap-1">
                <CardTitle>Pedidos recientes</CardTitle>
                <CardDescription>
                  Últimas ventas realizadas en la web
                </CardDescription>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link
                  href="/ordenes"
                  className="inline-flex items-center gap-2"
                >
                  Ver todos
                  <ArrowUpRight data-icon="inline-end" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
              {recentOrders.map((order) => (
                <div
                  key={order._id}
                  className="flex items-center gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-muted/60"
                >
                  <Avatar className="size-9">
                    <AvatarFallback className="bg-primary/12 text-xs font-semibold text-primary">
                      {order.usuario
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex min-w-0 flex-col">
                    <span className="truncate text-sm font-medium text-foreground">
                      {order.usuario}
                    </span>
                    <span className="truncate text-xs text-muted-foreground">
                      {order.mercadoPagoId} · {formatDateTime(order.createdAt)}
                    </span>
                  </div>
                  <div className="ml-auto flex items-center gap-3">
                    <span className="hidden text-sm font-semibold text-foreground sm:block">
                      {formatCurrency(order.montoPago)}
                    </span>
                    <PaymentStatusBadge status={order.statusPago as any} />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="flex flex-col gap-6">
            <WeeklySales />
            <Card>
              <CardHeader>
                <CardTitle>Stock bajo</CardTitle>
                <CardDescription>Productos por reponer pronto</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                {lowStock.map((product) => (
                  <div
                    key={product._id}
                    className="flex items-center justify-between gap-3"
                  >
                    <span className="truncate text-sm text-foreground">
                      {product.name}
                    </span>
                    <span
                      className={
                        product.stock === 0
                          ? "shrink-0 rounded-full bg-destructive/12 px-2 py-0.5 text-xs font-medium text-destructive"
                          : "shrink-0 rounded-full bg-amber-500/15 px-2 py-0.5 text-xs font-medium text-amber-700"
                      }
                    >
                      {product.stock} u.
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import type { Order } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency, formatDateTime } from "@/lib/format";
import { PaymentStatusBadge } from "../PaymentsBadge/PaymentsBadge";
import OrderUserData from "./OrderUserData";
import OrderDetails from "./OrderDetails";

export function OrdersTable({ orders }: { orders: Order[] }) {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  return (
    <>
      <Dialog
        open={Boolean(selectedOrder)}
        onOpenChange={(open) => {
          if (!open) setSelectedOrder(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pedido {selectedOrder?.mercadoPagoId}</DialogTitle>
            <DialogDescription>
              Datos de contacto y resumen de la orden seleccionada.
            </DialogDescription>
          </DialogHeader>

          {selectedOrder ? (
            <div className="grid gap-4 pt-2">
              <OrderUserData selectedOrder={selectedOrder} />

              <div className="grid gap-2 rounded-xl border border-border bg-muted p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Detalles de la orden
                </p>
                <div className="grid gap-1 text-sm text-muted-foreground">
                  <OrderDetails selectedOrder={selectedOrder}/>
                  <div className="rounded-xl border border-border bg-muted/30 p-4">
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      Información del producto
                    </h3>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          Producto
                        </span>
                        <span className="font-medium text-foreground">
                          {selectedOrder.producto.name}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          Precio
                        </span>
                        <span className="font-medium text-foreground">
                          ${selectedOrder.producto.price}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          Stock
                        </span>
                        <span className="font-medium text-foreground">
                          {selectedOrder.producto.stock}
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-6">
                        <span className="text-sm text-muted-foreground">
                          Colores
                        </span>

                        <div className="flex flex-wrap justify-end gap-2">
                          {selectedOrder.producto.colors.map((color) => (
                            <span
                              key={color}
                              className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                            >
                              {color}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-start justify-between gap-6">
                        <span className="text-sm text-muted-foreground">
                          Características
                        </span>

                        <div className="flex flex-wrap justify-end gap-2">
                          {selectedOrder.producto.caracteristics.map((c) => (
                            <>
                              <span
                                key={c.title}
                                className="rounded-full bg-secondary px-2.5 py-1 text-xs"
                              >
                                {c.title + " " + c.value}
                              </span>
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="font-medium text-foreground">
                      Total PAGADO{" "}
                    </span>
                    <span>{formatCurrency(selectedOrder.montoPago)}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          <DialogFooter>
            <Button variant="secondary" onClick={() => setSelectedOrder(null)}>
              Cerrar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Pedido</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead className="hidden lg:table-cell">
                Método de pago
              </TableHead>
              <TableHead className="hidden md:table-cell">Fecha</TableHead>
              <TableHead className="text-center">Ítems</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead>Estado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order._id}>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium text-foreground">
                      {order._id}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      MP {order.mercadoPagoId}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <button
                    type="button"
                    className="flex w-full flex-col text-left"
                    onClick={() => setSelectedOrder(order)}
                  >
                    <span className="text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline">
                      {order.usuario}
                    </span>
                    <span className="truncate text-xs text-muted-foreground">
                      {order.correo}
                    </span>
                  </button>
                </TableCell>
                <TableCell className="hidden text-sm text-muted-foreground lg:table-cell">
                  Mercado Pago
                </TableCell>
                <TableCell className="hidden text-sm text-muted-foreground md:table-cell">
                  {formatDateTime(order.createdAt)}
                </TableCell>
                <TableCell className="text-center text-sm text-foreground">
                  {order.producto.name}
                </TableCell>
                <TableCell className="text-right font-medium text-foreground">
                  {formatCurrency(order.montoPago)}
                </TableCell>
                <TableCell>
                  <PaymentStatusBadge status={order.statusPago as any} />
                </TableCell>
              </TableRow>
            ))}
            {orders.length === 0 ? (
              <TableRow className="hover:bg-transparent">
                <TableCell colSpan={7}>
                  <div className="flex flex-col items-center gap-2 py-10 text-center">
                    <ShoppingBag className="size-8 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      No hay pedidos con este estado.
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            ) : null}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

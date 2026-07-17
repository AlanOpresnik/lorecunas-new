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
            <DialogTitle>Pedido {selectedOrder?.reference}</DialogTitle>
            <DialogDescription>
              Datos de contacto y resumen de la orden seleccionada.
            </DialogDescription>
          </DialogHeader>

          {selectedOrder ? (
            <div className="grid gap-4 pt-2">
              <div className="grid gap-2 rounded-xl border border-border bg-muted p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Cliente
                </p>
                <p className="text-sm font-medium text-foreground">
                  {selectedOrder.customerName}
                </p>
                <p className="text-sm text-muted-foreground">
                  {selectedOrder.customerEmail}
                </p>
                <p className="text-sm text-muted-foreground">
                  {selectedOrder.customerPhone}
                </p>
                <p className="text-sm text-muted-foreground">
                  {selectedOrder.customerAddress}
                </p>
              </div>

              <div className="grid gap-2 rounded-xl border border-border bg-muted p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Detalles de la orden
                </p>
                <div className="grid gap-1 text-sm text-muted-foreground">
                  <div className="flex justify-between gap-2">
                    <span className="font-medium text-foreground">
                      Referencia
                    </span>
                    <span>{selectedOrder.reference}</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="font-medium text-foreground">Estado</span>
                    <span className="capitalize">{selectedOrder.status}</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="font-medium text-foreground">Pago</span>
                    <span>{selectedOrder.paymentMethod}</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="font-medium text-foreground">Fecha</span>
                    <span>{formatDateTime(selectedOrder.createdAt)}</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="font-medium text-foreground">Ítems</span>
                    <span>{selectedOrder.items}</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="font-medium text-foreground">Total</span>
                    <span>{formatCurrency(selectedOrder.total)}</span>
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
              <TableRow key={order.id}>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium text-foreground">
                      {order.reference}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      MP {order.mpPaymentId}
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
                      {order.customerName}
                    </span>
                    <span className="truncate text-xs text-muted-foreground">
                      {order.customerEmail}
                    </span>
                  </button>
                </TableCell>
                <TableCell className="hidden text-sm text-muted-foreground lg:table-cell">
                  {order.paymentMethod}
                </TableCell>
                <TableCell className="hidden text-sm text-muted-foreground md:table-cell">
                  {formatDateTime(order.createdAt)}
                </TableCell>
                <TableCell className="text-center text-sm text-foreground">
                  {order.items}
                </TableCell>
                <TableCell className="text-right font-medium text-foreground">
                  {formatCurrency(order.total)}
                </TableCell>
                <TableCell>
                  <PaymentStatusBadge status={order.status} />
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

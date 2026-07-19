import { formatDateTime } from "@/lib/format";
import { Order } from "@/lib/types";
import React from "react";

interface Props {
    selectedOrder: Order
}

export default function OrderDetails({selectedOrder}: Props) {
  return (
    <div className="grid gap-1 text-sm text-muted-foreground">
      <div className="flex justify-between gap-2">
        <span className="font-medium text-foreground">Referencia</span>
        <span>{selectedOrder.mercadoPagoId}</span>
      </div>
      <div className="flex justify-between gap-2">
        <span className="font-medium text-foreground">Estado</span>
        <span className="capitalize">{selectedOrder.statusPago}</span>
      </div>
      <div className="flex justify-between gap-2">
        <span className="font-medium text-foreground">Pago</span>
        <span>Mercado pago</span>
      </div>
      <div className="flex justify-between gap-2">
        <span className="font-medium text-foreground">Fecha</span>
        <span>{formatDateTime(selectedOrder.createdAt)}</span>
      </div>
    </div>
  );
}

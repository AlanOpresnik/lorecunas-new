import { Order } from "@/lib/types";
import React from "react";

interface Props {
  selectedOrder: Order;
}

export default function OrderUserData({ selectedOrder }: Props) {
  return (
    <>
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Cliente
      </p>
      <div className="flex justify-between gap-2">
        <span className="font-medium text-foreground">Nombre</span>
        <span className="capitalize">{selectedOrder.usuario}</span>
      </div>
      <div className="flex justify-between gap-2">
        <span className="font-medium text-foreground">Correo electronico</span>
        <span className="capitalize">{selectedOrder.correo}</span>
      </div>
      <div className="flex justify-between gap-2">
        <span className="font-medium text-foreground">Telefono</span>
        <span className="capitalize">{selectedOrder.telefono}</span>
      </div>
      <div className="flex justify-between gap-2">
        <span className="font-medium text-foreground">Direccion:</span>
        <span className="capitalize">
          {selectedOrder.direction === "" ? "Sin direccion" : selectedOrder.direction}
        </span>
      </div>
    </>
  );
}

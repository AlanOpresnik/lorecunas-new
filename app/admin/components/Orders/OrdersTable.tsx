import { ShoppingBag } from 'lucide-react'
import type { Order } from '@/lib/types'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { formatCurrency, formatDateTime } from '@/lib/format'
import { PaymentStatusBadge } from '../PaymentsBadge/PaymentsBadge'

export function OrdersTable({ orders }: { orders: Order[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Pedido</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead className="hidden lg:table-cell">Método de pago</TableHead>
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
                  <span className="font-medium text-foreground">{order.reference}</span>
                  <span className="text-xs text-muted-foreground">MP {order.mpPaymentId}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">{order.customerName}</span>
                  <span className="truncate text-xs text-muted-foreground">
                    {order.customerEmail}
                  </span>
                </div>
              </TableCell>
              <TableCell className="hidden text-sm text-muted-foreground lg:table-cell">
                {order.paymentMethod}
              </TableCell>
              <TableCell className="hidden text-sm text-muted-foreground md:table-cell">
                {formatDateTime(order.createdAt)}
              </TableCell>
              <TableCell className="text-center text-sm text-foreground">{order.items}</TableCell>
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
  )
}

import { DollarSign, ShoppingBag, Clock, XCircle } from 'lucide-react'
import { OrderFilter, OrderFilters } from '../../components/Orders/OrderFilters'
import { getOrders, getOrderStats } from '@/lib/data'
import { DashboardHeader } from '../../components/Dashboard/DashboardHeader'
import { StatCard } from '../../components/StatCard/StatCard'
import { formatCurrency } from '@/lib/format'
import { OrdersTable } from '../../components/Orders/OrdersTable'


const validFilters: OrderFilter[] = ['all', 'approved', 'pending', 'rejected']

export default async function OrdersPage({
  searchParams,
}: {
  searchParams: Promise<{ estado?: string }>
}) {
  const { estado } = await searchParams
  const active: OrderFilter = validFilters.includes(estado as OrderFilter)
    ? (estado as OrderFilter)
    : 'all'

  const [orders, stats] = await Promise.all([getOrders(), getOrderStats()])
  const filtered = active === 'all' ? orders : orders.filter((o) => o.status === active)

  return (
    <>
      <DashboardHeader
        title="Pedidos"
        description="Seguimiento de ventas y estado de pago con Mercado Pago."
      />
      <div className="flex flex-col gap-6 p-4 md:p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            label="Ingresos acreditados"
            value={formatCurrency(stats.totalRevenue)}
            icon={DollarSign}
            tone="positive"
          />
          <StatCard
            label="Pedidos totales"
            value={String(stats.totalOrders)}
            icon={ShoppingBag}
          />
          <StatCard
            label="Pagos pendientes"
            value={String(stats.pending)}
            icon={Clock}
            tone="warning"
          />
          <StatCard
            label="Pagos rechazados"
            value={String(stats.rejected)}
            icon={XCircle}
            tone={stats.rejected > 0 ? 'negative' : 'default'}
          />
        </div>

        <OrderFilters active={active} />
        <OrdersTable orders={filtered} />
      </div>
    </>
  )
}

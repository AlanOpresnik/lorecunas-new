import Link from 'next/link'
import { cn } from '@/lib/utils'

export type OrderFilter = 'all' | 'approved' | 'pending' | 'rejected'

const filters: { value: OrderFilter; label: string }[] = [
  { value: 'all', label: 'Todos' },
  { value: 'approved', label: 'Pagados' },
  { value: 'pending', label: 'Pendientes' },
  { value: 'rejected', label: 'Rechazados' },
]

export function OrderFilters({ active }: { active: OrderFilter }) {
  return (
    <div className="flex flex-wrap items-center gap-1 rounded-xl border border-border bg-card p-1">
      {filters.map((f) => (
        <Link
          key={f.value}
          href={f.value === 'all' ? '/ordenes' : `/ordenes?estado=${f.value}`}
          className={cn(
            'rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors',
            active === f.value
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:bg-muted hover:text-foreground',
          )}
        >
          {f.label}
        </Link>
      ))}
    </div>
  )
}

import { CheckCircle2, Clock, XCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { PaymentStatus } from '@/lib/types'

const config: Record<
  PaymentStatus,
  { label: string; icon: typeof CheckCircle2; className: string }
> = {
  approved: {
    label: 'Pagado',
    icon: CheckCircle2,
    className: 'bg-emerald-500/12 text-emerald-700 border-emerald-600/20',
  },
  pending: {
    label: 'Pendiente',
    icon: Clock,
    className: 'bg-amber-500/15 text-amber-700 border-amber-600/25',
  },
  rejected: {
    label: 'Rechazado',
    icon: XCircle,
    className: 'bg-destructive/12 text-destructive border-destructive/25',
  },
}

export function PaymentStatusBadge({ status }: { status: PaymentStatus }) {
  const { label, icon: Icon, className } = config[status]
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium',
        className,
      )}
    >
      <Icon className="size-3.5" />
      {label}
    </span>
  )
}

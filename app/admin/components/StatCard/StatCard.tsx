import type { LucideIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function StatCard({
  label,
  value,
  hint,
  icon: Icon,
  tone = 'default',
}: {
  label: string
  value: string
  hint?: string
  icon: LucideIcon
  tone?: 'default' | 'positive' | 'warning' | 'negative'
}) {
  const toneClasses = {
    default: 'bg-primary/10 text-primary',
    positive: 'bg-emerald-500/12 text-emerald-600',
    warning: 'bg-amber-500/15 text-amber-600',
    negative: 'bg-destructive/12 text-destructive',
  }

  return (
    <Card>
      <CardContent className="flex items-start justify-between gap-4 py-5">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-muted-foreground">{label}</span>
          <span className="font-serif text-2xl font-semibold text-foreground">{value}</span>
          {hint ? <span className="text-xs text-muted-foreground">{hint}</span> : null}
        </div>
        <span
          className={cn(
            'flex size-11 shrink-0 items-center justify-center rounded-xl',
            toneClasses[tone],
          )}
        >
          <Icon className="size-5" />
        </span>
      </CardContent>
    </Card>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { formatCurrency } from '@/lib/format'

const data = [
  { day: 'Lun', amount: 84000 },
  { day: 'Mar', amount: 132000 },
  { day: 'Mié', amount: 98000 },
  { day: 'Jue', amount: 176000 },
  { day: 'Vie', amount: 254800 },
  { day: 'Sáb', amount: 209000 },
  { day: 'Dom', amount: 121000 },
]

export function WeeklySales() {
  const max = Math.max(...data.map((d) => d.amount))
  const total = data.reduce((sum, d) => sum + d.amount, 0)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ventas de la semana</CardTitle>
        <CardDescription>Total {formatCurrency(total)}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between gap-2">
          {data.map((d) => (
            <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex h-36 w-full items-end">
                <div
                  className="w-full rounded-t-md bg-primary/80 transition-colors hover:bg-primary"
                  style={{ height: `${Math.max((d.amount / max) * 100, 6)}%` }}
                  title={formatCurrency(d.amount)}
                />
              </div>
              <span className="text-xs text-muted-foreground">{d.day}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

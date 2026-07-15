import type { ReactNode } from 'react'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'

export function DashboardHeader({
  title,
  description,
  actions,
}: {
  title: string
  description?: string
  actions?: ReactNode
}) {
  return (
    <header className="sticky top-0 z-10 flex flex-col gap-3 border-b border-border/70 bg-background/80 px-4 py-3 backdrop-blur md:flex-row md:items-center md:justify-between md:px-6">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="hidden h-6 md:block" />
        <div>
          <h1 className="font-serif text-xl font-semibold text-foreground text-balance">
            {title}
          </h1>
          {description ? (
            <p className="text-sm text-muted-foreground text-pretty">{description}</p>
          ) : null}
        </div>
      </div>
      {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
    </header>
  )
}

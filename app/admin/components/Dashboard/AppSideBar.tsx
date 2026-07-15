'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Package, ShoppingBag, Settings, LifeBuoy } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

const navItems = [
  { title: 'Resumen', href: '/admin', icon: LayoutDashboard },
  { title: 'Productos', href: '/admin/products', icon: Package },
  { title: 'Pedidos', href: '/admin/ordenes', icon: ShoppingBag },
]

const secondaryItems = [
  { title: 'Configuración', href: '/configuracion', icon: Settings },
  { title: 'Ayuda', href: '/ayuda', icon: LifeBuoy },
]

export function AppSidebar() {
  const pathname = usePathname()

  function isActive(href: string) {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2.5 px-2 py-3">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-serif text-lg font-semibold">
            L
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-base font-semibold text-sidebar-foreground">
              Lorecunas
            </span>
            <span className="text-xs text-muted-foreground">Panel de administración</span>
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Tienda</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    isActive={isActive(item.href)}
                    tooltip={item.title}
                    asChild
                  >
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>General</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    isActive={isActive(item.href)}
                    tooltip={item.title}
                    asChild
                  >
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-3 rounded-xl bg-sidebar-accent/60 p-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 font-serif text-sm font-semibold text-primary">
            LC
          </div>
          <div className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-sm font-medium text-sidebar-foreground">
              Lore Cunas
            </span>
            <span className="truncate text-xs text-muted-foreground">admin@lorecunas.com</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

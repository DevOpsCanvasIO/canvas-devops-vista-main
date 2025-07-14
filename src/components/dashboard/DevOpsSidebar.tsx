"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as Icons from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { NAVIGATION_ITEMS, DASHBOARD_CONFIG } from "@/constants/dashboard"

export function DevOpsSidebar() {
  const { state } = useSidebar()
  const collapsed = state === "collapsed"
  const pathname = usePathname()

  return (
    <Sidebar
      className={`bg-sidebar ${collapsed ? "w-14" : "w-64"}`}
      collapsible="icon"
    >
      <SidebarContent>
        {/* Logo */}
        <div className="flex items-center gap-3 p-6 border-b border-sidebar-border">
          <div className="w-10 h-10 flex items-center justify-center">
            <img 
              src="/DevOpsCanvasLogo.png" 
              alt="DevOps Canvas Logo" 
              className="w-8 h-8"
            />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-lg font-bold text-sidebar-foreground">
                DevOpsCanvas-dashboard
              </span>
              <span className="text-xs text-sidebar-foreground/60">
                {DASHBOARD_CONFIG.VERSION}
              </span>
            </div>
          )}
        </div>

        <SidebarGroup className="mt-4">
          <SidebarGroupContent>
            <SidebarMenu>
              {NAVIGATION_ITEMS.map((item) => {
                const Icon = Icons[item.icon]
                const isActive = pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link 
                        href={item.url}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive 
                            ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
                            : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        {!collapsed && <span>{item.title}</span>}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

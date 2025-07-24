"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import * as Icons from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import Image from "next/image"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { NAVIGATION_ITEMS } from "@/constants/dashboard"

export function DevOpsSidebar() {
  const { state } = useSidebar()
  const collapsed = state === "collapsed"
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <Sidebar
      className={`bg-sidebar ${collapsed ? "w-14" : "w-64"}`}
      collapsible="icon"
    >
      <SidebarContent>
        {/* Logo */}
        <div className="flex items-center justify-center p-6 border-b border-sidebar-border">
          <div className="flex flex-col items-center">
            <Image 
              alt="DevOps Canvas Logo" 
              width={40} 
              height={40} 
              className="w-10 h-auto mb-1" 
              src="/DevOpsCanvasLogo.png" 
            />
            <span className="text-lg font-bold text-foreground">DevOpsCanvas</span>
          </div>
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
        
        {/* User Info and Logout */}
        <div className="mt-auto border-t border-sidebar-border p-4">
          {user && (
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-sidebar-accent rounded-full flex items-center justify-center">
                <Icons.User className="w-4 h-4 text-sidebar-accent-foreground" />
              </div>
              {!collapsed && (
                <div className="flex flex-col overflow-hidden">
                  <span className="text-sm font-medium text-sidebar-foreground truncate">
                    {user.name}
                  </span>
                  <span className="text-xs text-sidebar-foreground/60 truncate">
                    {user.email}
                  </span>
                </div>
              )}
            </div>
          )}
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sidebar-foreground hover:bg-destructive/10 hover:text-destructive transition-colors cursor-pointer"
              >
                <Icons.LogOut className="w-5 h-5" />
                {!collapsed && <span>Sign Out</span>}
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          
          {/* Sidebar Toggle Button */}
          <div className="flex justify-center mt-4 pt-3 border-t border-sidebar-border">
            <SidebarTrigger className="h-8 w-8 text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/50 transition-all" />
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}

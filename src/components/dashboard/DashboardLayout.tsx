"use client"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { DevOpsSidebar } from "./DevOpsSidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DevOpsSidebar />
        
        {/* Main content area with backdrop and glassmorphism effect */}
        <main className="flex-1 flex flex-col relative">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80 pointer-events-none" />
          
          {/* Content with proper z-index */}
          <div className="relative z-10 flex-1 flex flex-col">
            {/* Toggle button */}
            <div className="p-4 pb-0">
              <SidebarTrigger />
            </div>
            <div className="flex-1 p-6">
              {children}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

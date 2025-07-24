"use client"

import { AuthProvider } from '@/contexts/AuthContext'
import { DashboardLayout } from '@/components/dashboard/DashboardLayout'

export default function DashboardLayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </AuthProvider>
  )
}

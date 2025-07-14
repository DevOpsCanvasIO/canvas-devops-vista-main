import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Incident Management - DevOpsCanvas-dashboard',
  description: 'Track and manage system incidents',
}

export default function IncidentsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Incident Management
          </h1>
          <p className="text-muted-foreground">
            Track and manage system incidents
          </p>
        </div>

        <Card className="bg-metric-bg border-border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Incident Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Incident management functionality coming soon...
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

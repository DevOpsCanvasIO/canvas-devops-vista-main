import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package } from "lucide-react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Catalog - DevOpsCanvas-dashboard',
  description: 'Manage and discover services and components',
}

export default function CatalogPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Service Catalog
          </h1>
          <p className="text-muted-foreground">
            Manage and discover services and components
          </p>
        </div>

        <Card className="bg-metric-bg border-border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Package className="w-5 h-5" />
              Service Catalog
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Service catalog functionality coming soon...
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

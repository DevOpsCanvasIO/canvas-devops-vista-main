'use client'

import { MetricCard } from './MetricCard'
import { useMetrics } from '@/hooks/useMetrics'

export function DashboardOverview() {
  const { data: metrics, isLoading } = useMetrics()

  if (isLoading) {
    return (
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-text">Dashboard Overview</h2>
        <div className="grid grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-card p-4 rounded-lg animate-pulse">
              <div className="h-4 bg-border rounded mb-2"></div>
              <div className="h-8 bg-border rounded"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-text">Dashboard Overview</h2>
      <div className="grid grid-cols-3 gap-4">
        <MetricCard
          title="CPU Usage"
          value={metrics?.cpuUsage || 0}
          unit="%"
          trend={5}
          className="hover:bg-card transition-all"
        />
        <MetricCard
          title="Memory"
          value={metrics?.memoryUsage || 0}
          unit="%"
          trend={-2}
          className="hover:bg-card transition-all"
        />
        <MetricCard
          title="Storage"
          value={metrics?.storageUsage || 0}
          unit="%"
          trend={1}
          className="hover:bg-card transition-all"
        />
      </div>
    </div>
  )
}

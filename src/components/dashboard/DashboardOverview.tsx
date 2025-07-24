'use client'

import { MetricCard } from './MetricCard'
import { useMetrics } from '@/hooks/useMetrics'
import { MetricServiceImpl } from '@/services/metric.service'
import { MockMetricRepository } from '@/services/mockData.service'

// Create service instance
const metricService = new MetricServiceImpl(new MockMetricRepository())

export function DashboardOverview() {
  const { data: metrics, isLoading } = useMetrics(metricService)

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
        {metrics?.slice(0, 3).map((metric, index) => (
          <MetricCard
            key={metric.id}
            title={metric.title}
            value={metric.value}
            unit={metric.unit}
            trend={metric.trend}
            subtitle={metric.subtitle}
            className="hover:bg-card transition-all"
          />
        )) || (
          <div className="col-span-3 text-center text-muted-foreground">No metrics available</div>
        )}
      </div>
    </div>
  )
}

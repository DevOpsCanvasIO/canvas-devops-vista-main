"use client";

import { useMetrics } from "@/hooks/useMetrics";
import { getMetricService } from "@/lib/serviceContainer";
import { MetricCard } from "./MetricCard";
import { MetricData } from "@/interfaces/metric.interface";

// Single responsibility: Container component only handles metric dashboard orchestration
export function MetricDashboard() {
  const metricService = getMetricService();
  const { data: metrics, isLoading, error } = useMetrics(metricService);

  // Debug logging
  console.log('MetricDashboard render:', { isLoading, error, metrics });

  if (isLoading) {
    console.log('Showing loading state');
    return <MetricDashboardSkeleton />;
  }

  if (error) {
    console.log('Showing error state:', error);
    return <MetricDashboardError error={error} />;
  }

  if (!metrics || metrics.length === 0) {
    console.log('Showing empty state');
    return <EmptyMetricDashboard />;
  }

  console.log('Showing metrics:', metrics.length);
  return (
    <div className="space-y-3">
      {metrics.map((metric) => (
        <MetricCard
          key={metric.id}
          title={metric.title}
          value={metric.value}
          unit={metric.unit}
          trend={metric.trend}
          subtitle={metric.subtitle}
        />
      ))}
    </div>
  );
}

// Single responsibility: Component only handles loading state
function MetricDashboardSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="bg-card border-border rounded-xl p-6 animate-pulse"
        >
          <div className="space-y-3">
            <div className="h-4 bg-muted rounded w-24"></div>
            <div className="h-8 bg-muted rounded w-16"></div>
            <div className="h-3 bg-muted rounded w-32"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Single responsibility: Component only handles error state
function MetricDashboardError({ error }: { error: Error }) {
  return (
    <div className="bg-card border-border rounded-xl p-6 text-center">
      <p className="text-destructive text-sm">Failed to load metrics</p>
      <p className="text-muted-foreground text-xs mt-2">{error.message}</p>
    </div>
  );
}

// Single responsibility: Component only handles empty state
function EmptyMetricDashboard() {
  return (
    <div className="bg-card border-border rounded-xl p-6 text-center">
      <p className="text-muted-foreground text-sm">No metrics available</p>
    </div>
  );
}

// Higher-order component that can be extended to filter metrics
export function withMetricFilter(
  Component: React.ComponentType<{ metrics: MetricData[] }>,
  filterFn: (metric: MetricData) => boolean
) {
  return function FilteredMetricComponent() {
    const metricService = getMetricService();
    const { data: metrics, isLoading, error } = useMetrics(metricService);

    if (isLoading || error || !metrics) {
      return <Component metrics={[]} />;
    }

    const filteredMetrics = metrics.filter(filterFn);
    return <Component metrics={filteredMetrics} />;
  };
}

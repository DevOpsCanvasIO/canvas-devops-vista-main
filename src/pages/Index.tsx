import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { MetricCard } from "@/components/dashboard/MetricCard"
import { PipelineOrchestration } from "@/components/dashboard/PipelineOrchestration"
import { ObservabilityChart } from "@/components/dashboard/ObservabilityChart"
import { RecentRuns } from "@/components/dashboard/RecentRuns"
import { ServiceCatalog } from "@/components/dashboard/ServiceCatalog"
import { AlertsWidget } from "@/components/dashboard/AlertsWidget"

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Dashboard Overview
          </h1>
          <p className="text-muted-foreground">
            Monitor your DevOps pipeline and infrastructure metrics
          </p>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard
            title="Deployment Infrequency"
            value={24}
            unit="per day"
            trend="up"
          />
          <MetricCard
            title="Lead Time for Changes"
            value={45}
            unit="min"
          />
          <MetricCard
            title="Change Failure Rate"
            value={5}
            unit="%"
            trend="up"
          />
        </div>

        {/* Second row - Pipeline Orchestration and Observability */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PipelineOrchestration />
          <ObservabilityChart />
        </div>

        {/* Third row - Recent Runs, Alerts, and Service Catalog */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <RecentRuns />
          <AlertsWidget />
          <ServiceCatalog />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;

import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Server, Zap, AlertCircle } from "lucide-react"

const Observability = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Observability
          </h1>
          <p className="text-muted-foreground">
            Monitor system health and performance metrics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-metric-bg border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Activity className="w-4 h-4" />
                CPU Usage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-3xl font-bold text-foreground">68%</span>
            </CardContent>
          </Card>

          <Card className="bg-metric-bg border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Server className="w-4 h-4" />
                Memory
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-3xl font-bold text-warning">82%</span>
            </CardContent>
          </Card>

          <Card className="bg-metric-bg border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Response Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-3xl font-bold text-success">142ms</span>
            </CardContent>
          </Card>

          <Card className="bg-metric-bg border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Active Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-3xl font-bold text-destructive">2</span>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-metric-bg border-border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">
              System Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Advanced monitoring dashboard coming soon...
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Observability;
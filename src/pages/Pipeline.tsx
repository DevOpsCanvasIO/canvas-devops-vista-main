import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GitBranch, Play, Clock, CheckCircle } from "lucide-react"

const Pipeline = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Pipeline Management
          </h1>
          <p className="text-muted-foreground">
            Monitor and manage your CI/CD pipelines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-metric-bg border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <GitBranch className="w-4 h-4" />
                Active Pipelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-3xl font-bold text-foreground">12</span>
            </CardContent>
          </Card>

          <Card className="bg-metric-bg border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Play className="w-4 h-4" />
                Running
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-3xl font-bold text-primary">3</span>
            </CardContent>
          </Card>

          <Card className="bg-metric-bg border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Queued
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-3xl font-bold text-warning">5</span>
            </CardContent>
          </Card>

          <Card className="bg-metric-bg border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Success Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-3xl font-bold text-success">94%</span>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-metric-bg border-border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">
              Pipeline Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Pipeline management interface coming soon...
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Pipeline;
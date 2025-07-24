import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GitBranch, Play, Clock, CheckCircle } from "lucide-react"

const Pipeline = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
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
              Recent Pipeline Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="font-medium">Payments API</div>
                    <div className="text-sm text-muted-foreground">Build → Test → Deploy</div>
                  </div>
                </div>
                <div className="text-sm text-green-600">✓ Success (2m 15s)</div>
              </div>
              
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="font-medium">User Auth Service</div>
                    <div className="text-sm text-muted-foreground">Build → Test</div>
                  </div>
                </div>
                <div className="text-sm text-yellow-600">⚡ Running (1m 42s)</div>
              </div>
              
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div>
                    <div className="font-medium">Notification Service</div>
                    <div className="text-sm text-muted-foreground">Build → Test</div>
                  </div>
                </div>
                <div className="text-sm text-red-600">✗ Failed (45s)</div>
              </div>
              
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div>
                    <div className="font-medium">Analytics API</div>
                    <div className="text-sm text-muted-foreground">Queued</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">⏳ Pending</div>
              </div>
              
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <div className="font-medium">Gateway Service</div>
                    <div className="text-sm text-muted-foreground">Build</div>
                  </div>
                </div>
                <div className="text-sm text-blue-600">🔄 Starting</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Pipeline;
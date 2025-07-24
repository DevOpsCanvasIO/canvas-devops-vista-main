import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Server, Zap, AlertCircle } from "lucide-react"

const Observability = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
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
              System Health Monitoring
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="font-medium">API Gateway</div>
                    <div className="text-sm text-muted-foreground">Response time: 125ms</div>
                  </div>
                </div>
                <div className="text-sm text-green-600">Healthy</div>
              </div>
              
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div>
                    <div className="font-medium">Database Cluster</div>
                    <div className="text-sm text-muted-foreground">CPU: 78% | Memory: 65%</div>
                  </div>
                </div>
                <div className="text-sm text-yellow-600">Warning</div>
              </div>
              
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="font-medium">Message Queue</div>
                    <div className="text-sm text-muted-foreground">Queue depth: 12 messages</div>
                  </div>
                </div>
                <div className="text-sm text-green-600">Healthy</div>
              </div>
              
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div>
                    <div className="font-medium">Cache Layer</div>
                    <div className="text-sm text-muted-foreground">Hit ratio: 45% (Low)</div>
                  </div>
                </div>
                <div className="text-sm text-red-600">Critical</div>
              </div>
              
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div>
                    <div className="font-medium">CDN Network</div>
                    <div className="text-sm text-muted-foreground">Global latency: 89ms avg</div>
                  </div>
                </div>
                <div className="text-sm text-blue-600">Optimal</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Observability;
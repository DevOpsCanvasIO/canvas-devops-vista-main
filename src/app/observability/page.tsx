"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Activity, Server, Database, Zap, AlertTriangle } from 'lucide-react'

export default function ObservabilityPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold mb-6">
          Observability & Monitoring
        </h1>
        <p className="text-muted-foreground">
          Monitor your system metrics, logs, and application performance
        </p>
      </div>

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">CPU Usage</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <Progress value={68} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Memory Usage</CardTitle>
            <Server className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">84%</div>
            <Progress value={84} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Time</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">125ms</div>
            <p className="text-xs text-green-600">Good performance</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">3</div>
            <p className="text-xs text-red-600">Needs attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Service Health */}
      <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
        <CardHeader>
          <CardTitle>Service Health Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <div className="font-medium">API Gateway</div>
                  <div className="text-sm text-muted-foreground">99.9% uptime</div>
                </div>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">Healthy</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div>
                  <div className="font-medium">Database Cluster</div>
                  <div className="text-sm text-muted-foreground">High CPU usage detected</div>
                </div>
              </div>
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Warning</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div>
                  <div className="font-medium">Cache Layer</div>
                  <div className="text-sm text-muted-foreground">Connection timeout issues</div>
                </div>
              </div>
              <Badge variant="destructive">Critical</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <div className="font-medium">Message Queue</div>
                  <div className="text-sm text-muted-foreground">Processing normally</div>
                </div>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">Healthy</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Alerts */}
      <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
        <CardHeader>
          <CardTitle>Recent Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <div className="flex-1">
                <div className="font-medium">High Memory Usage - Database Server</div>
                <div className="text-sm text-muted-foreground">Memory usage exceeded 90% threshold</div>
              </div>
              <div className="text-xs text-muted-foreground">2 min ago</div>
            </div>
            
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <div className="flex-1">
                <div className="font-medium">Slow Response Time - API Endpoint</div>
                <div className="text-sm text-muted-foreground">/api/users endpoint responding slowly</div>
              </div>
              <div className="text-xs text-muted-foreground">5 min ago</div>
            </div>
            
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <div className="flex-1">
                <div className="font-medium">Cache Connection Failed</div>
                <div className="text-sm text-muted-foreground">Redis connection pool exhausted</div>
              </div>
              <div className="text-xs text-muted-foreground">12 min ago</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { PipelineTable } from '@/components/pipeline/PipelineTable'
import { FilterBar, type PipelineFilters } from '@/components/pipeline/FilterBar'
import { 
  PlayCircle, 
  PauseCircle, 
  RefreshCw, 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertCircle,
  GitBranch,
  Users,
  Calendar
} from 'lucide-react'

export default function PipelinePage() {
  const [filters, setFilters] = useState<PipelineFilters>({
    service: '',
    provider: '',
    status: ''
  })

  // Pipeline statistics
  const stats = {
    total: 147,
    running: 3,
    successful: 89,
    failed: 12,
    pending: 43,
    avgDuration: '4:32',
    successRate: 88.2
  }

  // Recent pipeline metrics
  const recentMetrics = {
    deploymentsToday: 24,
    avgLeadTime: '2.3h',
    failureRate: 5.2,
    recoveryTime: '12m'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-2">
            Pipeline Management
          </h1>
          <p className="text-muted-foreground">
            Monitor and manage your CI/CD pipelines across all services
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button size="sm">
            <PlayCircle className="h-4 w-4 mr-2" />
            Run Pipeline
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Pipelines</CardTitle>
            <GitBranch className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-xs text-muted-foreground">
              +12 from last week
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.successRate}%</div>
            <Progress value={stats.successRate} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Duration</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.avgDuration}</div>
            <p className="text-xs text-muted-foreground">
              -30s from yesterday
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Running Now</CardTitle>
            <div className="h-2 w-2 bg-yellow-500 rounded-full animate-pulse" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.running}</div>
            <p className="text-xs text-muted-foreground">
              Active pipelines
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Pipeline Status Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              Successful Runs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600 mb-2">{stats.successful}</div>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Payments API</span>
                <span className="text-green-600">✓ 2h ago</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>User Auth</span>
                <span className="text-green-600">✓ 4h ago</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Analytics API</span>
                <span className="text-green-600">✓ 6h ago</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <XCircle className="h-5 w-5 text-red-600" />
              Failed Runs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600 mb-2">{stats.failed}</div>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Email Service</span>
                <span className="text-red-600">✗ 1h ago</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Notification Service</span>
                <span className="text-red-600">✗ 3h ago</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Gateway API</span>
                <span className="text-red-600">✗ 5h ago</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              Pending/Running
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-600 mb-2">{stats.pending + stats.running}</div>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Notification Service</span>
                <span className="text-yellow-600 animate-pulse">⚡ Running</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Reports API</span>
                <span className="text-gray-500">⏳ Pending</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Data Pipeline</span>
                <span className="text-gray-500">⏳ Queued</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for different views */}
      <Tabs defaultValue="activity" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="activity">Pipeline Activity</TabsTrigger>
          <TabsTrigger value="metrics">Metrics & Analytics</TabsTrigger>
          <TabsTrigger value="schedule">Scheduled Runs</TabsTrigger>
        </TabsList>

        <TabsContent value="activity" className="space-y-4">
          <FilterBar onFiltersChange={setFilters} />
          <PipelineTable filters={filters} />
        </TabsContent>

        <TabsContent value="metrics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Deployments Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{recentMetrics.deploymentsToday}</div>
                <p className="text-xs text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +15% from yesterday
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Avg Lead Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{recentMetrics.avgLeadTime}</div>
                <p className="text-xs text-green-600 flex items-center">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  -20% improvement
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Failure Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{recentMetrics.failureRate}%</div>
                <p className="text-xs text-red-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +2% from last week
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Recovery Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{recentMetrics.recoveryTime}</div>
                <p className="text-xs text-green-600 flex items-center">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  -5m improvement
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Metrics Charts Placeholder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
              <CardHeader>
                <CardTitle>Pipeline Success Rate Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  📈 Chart visualization would go here
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
              <CardHeader>
                <CardTitle>Build Duration Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  📊 Duration chart would go here
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-4">
          <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Scheduled Pipeline Runs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium">Nightly Data Backup</div>
                    <div className="text-sm text-muted-foreground">Every day at 02:00 UTC</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">Scheduled</Badge>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium">Weekly Security Scan</div>
                    <div className="text-sm text-muted-foreground">Every Sunday at 01:00 UTC</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium">Monthly Report Generation</div>
                    <div className="text-sm text-muted-foreground">First Monday of each month at 09:00 UTC</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-gray-100 text-gray-800">Paused</Badge>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  + Add New Scheduled Pipeline
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

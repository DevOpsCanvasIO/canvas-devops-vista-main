"use client"

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TrendingUp, TrendingDown, Activity, GitBranch, AlertTriangle, Package } from 'lucide-react'

export default function DashboardPage() {
  return (
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
        <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Deployment Frequency</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">per day</p>
          </CardContent>
        </Card>
        
        <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lead Time for Changes</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">minutes</p>
          </CardContent>
        </Card>
        
        <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Change Failure Rate</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">%</p>
          </CardContent>
        </Card>
      </div>

      {/* Second row - Pipeline and Observability */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitBranch className="h-5 w-5" />
              Pipeline Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Recent Deployments</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800">5 Success</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Failed Builds</span>
                <Badge variant="secondary" className="bg-red-100 text-red-800">1 Failed</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Running Jobs</span>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 animate-pulse">2 Running</Badge>
              </div>
              <Link href="/pipeline">
                <Button variant="outline" size="sm" className="w-full">
                  View All Pipelines
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
        
        <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              System Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">CPU Usage</span>
                <span className="text-sm font-medium">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '45%'}}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Memory Usage</span>
                <span className="text-sm font-medium">68%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '68%'}}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Third row - Recent Activity, Alerts, and Services */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
          <CardHeader>
            <CardTitle className="text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="text-sm">
                  <span className="font-medium">Payments API</span> deployed successfully
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="text-sm">
                  <span className="font-medium">User Auth</span> build failed
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                <div className="text-sm">
                  <span className="font-medium">Notification Service</span> running tests
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="destructive" className="text-xs">HIGH</Badge>
                <span className="text-sm">Database connection timeout</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 text-xs">WARN</Badge>
                <span className="text-sm">High memory usage on server-01</span>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                View All Alerts
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">🚀 Payments API</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">🔐 User Auth</span>
                <Badge variant="secondary" className="bg-red-100 text-red-800">Error</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">🔔 Notifications</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                View Service Catalog
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

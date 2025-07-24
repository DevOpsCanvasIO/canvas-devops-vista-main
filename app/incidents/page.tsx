import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Clock, User, MessageSquare, CheckCircle, XCircle, AlertCircle, Zap, Database, Globe, Server, Shield } from "lucide-react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Incident Management - DevOpsCanvas-dashboard',
  description: 'Track and manage system incidents',
}

export default function IncidentsPage() {
  const incidents = [
    {
      id: "INC-2024-001",
      title: "Payment API High Latency",
      description: "Payment processing experiencing elevated response times affecting checkout flow",
      severity: "high",
      status: "investigating",
      assignee: "Sarah Chen",
      reporter: "Monitoring System",
      createdAt: "2024-01-15T14:30:00Z",
      updatedAt: "2024-01-15T15:45:00Z",
      service: "Payments API",
      impact: "Customer transactions delayed",
      duration: "1h 15m",
      comments: 8
    },
    {
      id: "INC-2024-002",
      title: "Database Connection Pool Exhausted",
      description: "Primary database reaching connection limits causing service timeouts",
      severity: "critical",
      status: "in-progress",
      assignee: "Mike Johnson",
      reporter: "Alex Rodriguez",
      createdAt: "2024-01-15T09:15:00Z",
      updatedAt: "2024-01-15T12:30:00Z",
      service: "Database Cluster",
      impact: "Multiple services affected",
      duration: "3h 15m",
      comments: 15
    },
    {
      id: "INC-2024-003",
      title: "Authentication Service Intermittent Failures",
      description: "Users experiencing login issues with 5% failure rate",
      severity: "medium",
      status: "monitoring",
      assignee: "Emma Wilson",
      reporter: "Customer Support",
      createdAt: "2024-01-14T16:20:00Z",
      updatedAt: "2024-01-15T08:00:00Z",
      service: "User Authentication",
      impact: "Limited user access issues",
      duration: "16h 40m",
      comments: 12
    },
    {
      id: "INC-2024-004",
      title: "CDN Cache Invalidation Failure",
      description: "Static assets not updating due to CDN cache invalidation issues",
      severity: "low",
      status: "resolved",
      assignee: "David Park",
      reporter: "Development Team",
      createdAt: "2024-01-13T11:45:00Z",
      updatedAt: "2024-01-13T14:20:00Z",
      service: "File Storage Service",
      impact: "Outdated UI assets served",
      duration: "2h 35m",
      comments: 6
    },
    {
      id: "INC-2024-005",
      title: "Search Index Corruption",
      description: "Search results returning incomplete or incorrect data",
      severity: "medium",
      status: "resolved",
      assignee: "Lisa Zhang",
      reporter: "QA Team",
      createdAt: "2024-01-12T13:10:00Z",
      updatedAt: "2024-01-12T18:45:00Z",
      service: "Search Service",
      impact: "Degraded search functionality",
      duration: "5h 35m",
      comments: 9
    },
    {
      id: "INC-2024-006",
      title: "API Gateway Rate Limiting Malfunction",
      description: "Rate limiting incorrectly blocking legitimate requests",
      severity: "high",
      status: "resolved",
      assignee: "Tom Martinez",
      reporter: "API Monitoring",
      createdAt: "2024-01-11T08:30:00Z",
      updatedAt: "2024-01-11T10:15:00Z",
      service: "API Gateway",
      impact: "API requests blocked",
      duration: "1h 45m",
      comments: 4
    }
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
      case 'high': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
      case 'low': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'investigating': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
      case 'in-progress': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
      case 'monitoring': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
      case 'resolved': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical': return <XCircle className="h-4 w-4 text-red-600" />
      case 'high': return <AlertTriangle className="h-4 w-4 text-orange-600" />
      case 'medium': return <AlertCircle className="h-4 w-4 text-yellow-600" />
      case 'low': return <CheckCircle className="h-4 w-4 text-blue-600" />
      default: return <AlertTriangle className="h-4 w-4 text-gray-600" />
    }
  }

  const getServiceIcon = (service: string) => {
    if (service.includes('API') || service.includes('Gateway')) return <Globe className="h-4 w-4" />
    if (service.includes('Database')) return <Database className="h-4 w-4" />
    if (service.includes('Authentication')) return <Shield className="h-4 w-4" />
    return <Server className="h-4 w-4" />
  }

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffHours < 1) return 'Less than 1h ago'
    if (diffHours < 24) return `${diffHours}h ago`
    const diffDays = Math.floor(diffHours / 24)
    return `${diffDays}d ago`
  }

  const activeIncidents = incidents.filter(inc => inc.status !== 'resolved')
  const resolvedIncidents = incidents.filter(inc => inc.status === 'resolved')

  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Incident Management
          </h1>
          <p className="text-muted-foreground">
            Track, manage, and resolve system incidents and outages
          </p>
        </div>

        {/* Incident Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-metric-bg border-border">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Total Incidents</span>
              </div>
              <div className="text-2xl font-bold mt-2 text-foreground">{incidents.length}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-metric-bg border-border">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="text-sm font-medium text-foreground">Active</span>
              </div>
              <div className="text-2xl font-bold mt-2 text-red-600 dark:text-red-400">
                {activeIncidents.length}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-metric-bg border-border">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm font-medium text-foreground">Resolved</span>
              </div>
              <div className="text-2xl font-bold mt-2 text-green-600 dark:text-green-400">
                {resolvedIncidents.length}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-metric-bg border-border">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Avg Resolution</span>
              </div>
              <div className="text-2xl font-bold mt-2 text-foreground">2.8h</div>
            </CardContent>
          </Card>
        </div>

        {/* Active Incidents */}
        {activeIncidents.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Zap className="h-5 w-5 text-red-500" />
              Active Incidents ({activeIncidents.length})
            </h2>
            <div className="space-y-4">
              {activeIncidents.map((incident) => (
                <Card key={incident.id} className="bg-metric-bg border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        {getSeverityIcon(incident.severity)}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <CardTitle className="text-lg text-foreground">{incident.title}</CardTitle>
                            <Badge variant="secondary" className={getSeverityColor(incident.severity)}>
                              {incident.severity}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{incident.description}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              {getServiceIcon(incident.service)}
                              {incident.service}
                            </span>
                            <span>#{incident.id}</span>
                            <span>Duration: {incident.duration}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className={getStatusColor(incident.status)}>
                        {incident.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-foreground">Assignee:</span>
                        <p className="text-muted-foreground flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {incident.assignee}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Reporter:</span>
                        <p className="text-muted-foreground">{incident.reporter}</p>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Impact:</span>
                        <p className="text-muted-foreground">{incident.impact}</p>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Last Updated:</span>
                        <p className="text-muted-foreground">{formatTimeAgo(incident.updatedAt)}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MessageSquare className="h-3 w-3" />
                        <span>{incident.comments} comments</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          Add Comment
                        </Button>
                        <Button size="sm">
                          Take Action
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Recent Resolved Incidents */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            Recently Resolved ({resolvedIncidents.length})
          </h2>
          <div className="space-y-4">
            {resolvedIncidents.map((incident) => (
              <Card key={incident.id} className="bg-metric-bg border-border opacity-75">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      {getSeverityIcon(incident.severity)}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <CardTitle className="text-lg text-foreground">{incident.title}</CardTitle>
                          <Badge variant="secondary" className={getSeverityColor(incident.severity)}>
                            {incident.severity}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{incident.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            {getServiceIcon(incident.service)}
                            {incident.service}
                          </span>
                          <span>#{incident.id}</span>
                          <span>Resolved in: {incident.duration}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className={getStatusColor(incident.status)}>
                      {incident.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        Resolved by {incident.assignee}
                      </span>
                      <span>{formatTimeAgo(incident.updatedAt)}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      View Post-Mortem
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

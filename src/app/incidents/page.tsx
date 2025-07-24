"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { AlertTriangle, Clock, CheckCircle, XCircle, Users, MessageCircle } from 'lucide-react'

export default function IncidentsPage() {
  const incidents = [
    {
      id: "INC-001",
      title: "Database Connection Timeout",
      description: "Multiple services experiencing database connectivity issues",
      severity: "critical",
      status: "investigating",
      assignedTo: "Database Team",
      createdAt: "2025-07-24T21:30:00Z",
      affectedServices: ["Payments API", "User Auth", "Analytics"]
    },
    {
      id: "INC-002",
      title: "High Memory Usage - Cache Layer",
      description: "Redis cache cluster showing elevated memory consumption",
      severity: "high",
      status: "monitoring",
      assignedTo: "Platform Team",
      createdAt: "2025-07-24T20:15:00Z",
      affectedServices: ["Cache Layer"]
    },
    {
      id: "INC-003",
      title: "API Rate Limiting Issues",
      description: "Some API endpoints returning 429 errors unexpectedly",
      severity: "medium",
      status: "resolved",
      assignedTo: "API Team",
      createdAt: "2025-07-24T18:45:00Z",
      affectedServices: ["Gateway API"]
    },
    {
      id: "INC-004",
      title: "Slow Response Times",
      description: "Increased latency observed across multiple endpoints",
      severity: "low",
      status: "open",
      assignedTo: "Performance Team",
      createdAt: "2025-07-24T16:20:00Z",
      affectedServices: ["All APIs"]
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
      case 'resolved': return 'bg-green-100 text-green-800'
      case 'investigating': return 'bg-red-100 text-red-800'
      case 'monitoring': return 'bg-yellow-100 text-yellow-800'
      case 'open': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved': return <CheckCircle className="h-4 w-4" />
      case 'investigating': return <AlertTriangle className="h-4 w-4" />
      case 'monitoring': return <Clock className="h-4 w-4" />
      case 'open': return <XCircle className="h-4 w-4" />
      default: return <Clock className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold mb-6">
          Incident Management
        </h1>
        <p className="text-muted-foreground">
          Track and manage system incidents, outages, and service disruptions
        </p>
      </div>

      {/* Incident Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <span className="text-sm font-medium">Open Incidents</span>
            </div>
            <div className="text-2xl font-bold mt-2 text-red-600">
              {incidents.filter(i => i.status !== 'resolved').length}
            </div>
          </CardContent>
        </Card>
        
        <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium">Resolved Today</span>
            </div>
            <div className="text-2xl font-bold mt-2 text-green-600">
              {incidents.filter(i => i.status === 'resolved').length}
            </div>
          </CardContent>
        </Card>
        
        <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-yellow-600" />
              <span className="text-sm font-medium">Avg Resolution</span>
            </div>
            <div className="text-2xl font-bold mt-2">2.4h</div>
          </CardContent>
        </Card>
        
        <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium">Active Responders</span>
            </div>
            <div className="text-2xl font-bold mt-2">8</div>
          </CardContent>
        </Card>
      </div>

      {/* Incidents List */}
      <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
        <CardHeader>
          <CardTitle>Recent Incidents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {incidents.map((incident) => (
              <div key={incident.id} className="flex items-start justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="secondary" className={getSeverityColor(incident.severity)}>
                      {incident.severity.toUpperCase()}
                    </Badge>
                    <Badge variant="secondary" className={getStatusColor(incident.status)}>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(incident.status)}
                        {incident.status}
                      </div>
                    </Badge>
                    <span className="text-sm font-mono text-muted-foreground">{incident.id}</span>
                  </div>
                  
                  <h3 className="font-medium text-lg mb-1">{incident.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{incident.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Assigned to: <span className="font-medium">{incident.assignedTo}</span></span>
                    <span>Services: {incident.affectedServices.join(', ')}</span>
                    <span>Created: {new Date(incident.createdAt).toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <MessageCircle className="h-3 w-3 mr-1" />
                    Comments
                  </Button>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

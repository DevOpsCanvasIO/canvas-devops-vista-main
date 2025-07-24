import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Package, ExternalLink, Github, Database, Globe, Zap, Shield, Bell, BarChart3, FileText, Cloud } from "lucide-react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Catalog - DevOpsCanvas-dashboard',
  description: 'Manage and discover services and components',
}

export default function CatalogPage() {
  const services = [
    {
      name: "Payments API",
      description: "Handles payment processing, transactions, and financial operations",
      version: "v2.1.3",
      status: "active",
      icon: "💳",
      owner: "Payments Team",
      language: "Node.js",
      type: "API",
      health: "healthy",
      uptime: "99.8%",
      dependencies: 3,
      endpoints: 12
    },
    {
      name: "User Authentication", 
      description: "Manages user login, registration, sessions, and access control",
      version: "v1.8.2",
      status: "active",
      icon: "🔐",
      owner: "Security Team",
      language: "Python",
      type: "Service",
      health: "healthy",
      uptime: "99.9%",
      dependencies: 2,
      endpoints: 8
    },
    {
      name: "Notification Service",
      description: "Sends emails, SMS, push notifications, and alerts",
      version: "v3.0.1",
      status: "maintenance",
      icon: "🔔",
      owner: "Platform Team",
      language: "Go",
      type: "Service",
      health: "degraded",
      uptime: "98.5%",
      dependencies: 4,
      endpoints: 6
    },
    {
      name: "Analytics Engine",
      description: "Processes and analyzes user behavior and business metrics",
      version: "v1.4.0",
      status: "active",
      icon: "📊",
      owner: "Data Team",
      language: "Java",
      type: "Engine",
      health: "healthy",
      uptime: "99.6%",
      dependencies: 5,
      endpoints: 15
    },
    {
      name: "API Gateway",
      description: "Central gateway for routing, authentication, and rate limiting",
      version: "v2.0.5",
      status: "deprecated",
      icon: "🌐",
      owner: "Infrastructure Team",
      language: "Node.js",
      type: "Gateway",
      health: "warning",
      uptime: "97.2%",
      dependencies: 1,
      endpoints: 50
    },
    {
      name: "File Storage Service",
      description: "Manages file uploads, downloads, storage, and CDN distribution",
      version: "v1.2.8",
      status: "active",
      icon: "📁",
      owner: "Storage Team",
      language: "Rust",
      type: "Service",
      health: "healthy",
      uptime: "99.7%",
      dependencies: 2,
      endpoints: 10
    },
    {
      name: "Database Cluster",
      description: "Primary PostgreSQL cluster with read replicas",
      version: "v13.8",
      status: "active",
      icon: "🗄️",
      owner: "Database Team",
      language: "SQL",
      type: "Database",
      health: "healthy",
      uptime: "99.9%",
      dependencies: 0,
      endpoints: 4
    },
    {
      name: "Monitoring Stack",
      description: "Prometheus, Grafana, and alerting infrastructure",
      version: "v2.3.1",
      status: "active",
      icon: "📈",
      owner: "SRE Team",
      language: "Go",
      type: "Infrastructure",
      health: "healthy",
      uptime: "99.5%",
      dependencies: 1,
      endpoints: 20
    },
    {
      name: "Search Service",
      description: "Elasticsearch-based search and indexing service",
      version: "v7.15.2",
      status: "active",
      icon: "🔍",
      owner: "Search Team",
      language: "Java",
      type: "Service",
      health: "healthy",
      uptime: "99.4%",
      dependencies: 3,
      endpoints: 7
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'maintenance': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
      case 'deprecated': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
    }
  }

  const getHealthColor = (health: string) => {
    switch (health) {
      case 'healthy': return 'text-green-600 dark:text-green-400'
      case 'degraded': return 'text-yellow-600 dark:text-yellow-400'
      case 'warning': return 'text-orange-600 dark:text-orange-400'
      case 'critical': return 'text-red-600 dark:text-red-400'
      default: return 'text-gray-600 dark:text-gray-400'
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Service Catalog
          </h1>
          <p className="text-muted-foreground">
            Browse and manage your microservices, APIs, and infrastructure components
          </p>
        </div>

        {/* Service Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-metric-bg border-border">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Total Services</span>
              </div>
              <div className="text-2xl font-bold mt-2 text-foreground">{services.length}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-metric-bg border-border">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm font-medium text-foreground">Active</span>
              </div>
              <div className="text-2xl font-bold mt-2 text-green-600 dark:text-green-400">
                {services.filter(s => s.status === 'active').length}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-metric-bg border-border">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <span className="text-sm font-medium text-foreground">Maintenance</span>
              </div>
              <div className="text-2xl font-bold mt-2 text-yellow-600 dark:text-yellow-400">
                {services.filter(s => s.status === 'maintenance').length}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-metric-bg border-border">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="text-sm font-medium text-foreground">Deprecated</span>
              </div>
              <div className="text-2xl font-bold mt-2 text-red-600 dark:text-red-400">
                {services.filter(s => s.status === 'deprecated').length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-metric-bg border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{service.icon}</span>
                    <div>
                      <CardTitle className="text-lg text-foreground">{service.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{service.version}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className={getStatusColor(service.status)}>
                    {service.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-foreground">Owner:</span>
                    <p className="text-muted-foreground">{service.owner}</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Language:</span>
                    <p className="text-muted-foreground">{service.language}</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Type:</span>
                    <p className="text-muted-foreground">{service.type}</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Health:</span>
                    <p className={getHealthColor(service.health)}>{service.health}</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Uptime:</span>
                    <p className="text-muted-foreground">{service.uptime}</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Dependencies:</span>
                    <p className="text-muted-foreground">{service.dependencies}</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="h-3 w-3" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <BarChart3 className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

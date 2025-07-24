"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Package, ExternalLink, Github, Database, Globe, Zap } from 'lucide-react'

export default function CatalogPage() {
  const services = [
    {
      name: "Payments API",
      description: "Handles payment processing and transactions",
      version: "v2.1.3",
      status: "active",
      icon: "💳",
      owner: "Payment Team",
      language: "Node.js",
      type: "API"
    },
    {
      name: "User Authentication", 
      description: "Manages user login, registration, and sessions",
      version: "v1.8.2",
      status: "active",
      icon: "🔐",
      owner: "Security Team",
      language: "Python",
      type: "Service"
    },
    {
      name: "Notification Service",
      description: "Sends emails, SMS, and push notifications",
      version: "v3.0.1",
      status: "maintenance",
      icon: "🔔",
      owner: "Platform Team",
      language: "Go",
      type: "Service"
    },
    {
      name: "Analytics Engine",
      description: "Processes and analyzes user behavior data",
      version: "v1.4.0",
      status: "active",
      icon: "📊",
      owner: "Data Team",
      language: "Java",
      type: "Engine"
    },
    {
      name: "Gateway API",
      description: "Central API gateway for all external requests",
      version: "v2.0.5",
      status: "deprecated",
      icon: "🌐",
      owner: "Infrastructure Team",
      language: "Node.js",
      type: "Gateway"
    },
    {
      name: "File Storage Service",
      description: "Manages file uploads, downloads, and storage",
      version: "v1.2.8",
      status: "active",
      icon: "📁",
      owner: "Storage Team",
      language: "Rust",
      type: "Service"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'maintenance': return 'bg-yellow-100 text-yellow-800'
      case 'deprecated': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold mb-6">
          Service Catalog
        </h1>
        <p className="text-muted-foreground">
          Browse and manage your microservices, APIs, and infrastructure components
        </p>
      </div>

      {/* Service Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Package className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Total Services</span>
            </div>
            <div className="text-2xl font-bold mt-2">{services.length}</div>
          </CardContent>
        </Card>
        
        <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-sm font-medium">Active</span>
            </div>
            <div className="text-2xl font-bold mt-2 text-green-600">
              {services.filter(s => s.status === 'active').length}
            </div>
          </CardContent>
        </Card>
        
        <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <span className="text-sm font-medium">Maintenance</span>
            </div>
            <div className="text-2xl font-bold mt-2 text-yellow-600">
              {services.filter(s => s.status === 'maintenance').length}
            </div>
          </CardContent>
        </Card>
        
        <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="text-sm font-medium">Deprecated</span>
            </div>
            <div className="text-2xl font-bold mt-2 text-red-600">
              {services.filter(s => s.status === 'deprecated').length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="rounded-2xl shadow bg-white dark:bg-gray-950">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{service.icon}</span>
                  <div>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
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
                  <span className="font-medium">Owner:</span>
                  <p className="text-muted-foreground">{service.owner}</p>
                </div>
                <div>
                  <span className="font-medium">Language:</span>
                  <p className="text-muted-foreground">{service.language}</p>
                </div>
                <div>
                  <span className="font-medium">Type:</span>
                  <p className="text-muted-foreground">{service.type}</p>
                </div>
                <div>
                  <span className="font-medium">Health:</span>
                  <p className="text-green-600">Healthy</p>
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
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

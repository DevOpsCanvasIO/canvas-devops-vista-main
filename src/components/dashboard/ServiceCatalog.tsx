import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Github, 
  Server, 
  Box, 
  Settings, 
  Activity, 
  BarChart3, 
  ArrowRight 
} from "lucide-react"

const services = [
  { 
    name: "GitHub", 
    icon: Github, 
    owner: "Jake M.", 
    lastUpdate: "3h ago",
    color: "text-white bg-gray-800"
  },
  { 
    name: "Jenkins", 
    icon: Server, 
    owner: "Sarah L.", 
    lastUpdate: "1d ago",
    color: "text-white bg-blue-600"
  },
  { 
    name: "Terraform", 
    icon: Box, 
    owner: "Emily R.", 
    lastUpdate: "2d ago",
    color: "text-white bg-purple-600"
  },
  { 
    name: "Kubernetes", 
    icon: Settings, 
    owner: "David W.", 
    lastUpdate: "4h ago",
    color: "text-white bg-blue-500"
  },
  { 
    name: "Prometheus", 
    icon: Activity, 
    owner: "Alex G.", 
    lastUpdate: "1d ago",
    color: "text-white bg-red-600"
  },
  { 
    name: "Datadog", 
    icon: BarChart3, 
    owner: "Maria S.", 
    lastUpdate: "1d ago",
    color: "text-white bg-purple-500"
  }
]

export function ServiceCatalog() {
  return (
    <Card className="bg-card border-border rounded-xl transition-all duration-200 ease-in-out hover:shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-foreground">
          Service Catalog
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-4 rounded-xl bg-accent/5 hover:bg-accent/10 transition-all duration-200 ease-in-out cursor-pointer border border-transparent hover:border-accent/20"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${service.color}`}>
                <service.icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-foreground text-center">
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

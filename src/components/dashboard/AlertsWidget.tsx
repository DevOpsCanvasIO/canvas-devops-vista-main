import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

const alerts = [
  {
    type: "Incident",
    message: "Error rate increased",
    severity: "high"
  },
  {
    type: "Checkout",
    message: "High latency",
    severity: "medium"
  }
]

export function AlertsWidget() {
  return (
    <Card className="bg-card border-border rounded-xl transition-all duration-200 ease-in-out hover:shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-foreground">
          Alerts
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-2">
          {alerts.map((alert, index) => (
            <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-all duration-200 ease-in-out cursor-pointer">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                alert.severity === "high" ? "bg-destructive/10 text-destructive" : "bg-warning/10 text-warning"
              }`}>
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-foreground truncate">
                  {alert.type}
                </div>
                <div className="text-xs text-muted-foreground truncate">
                  {alert.message}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

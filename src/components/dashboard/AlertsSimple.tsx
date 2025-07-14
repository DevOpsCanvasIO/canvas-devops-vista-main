"use client";

import { AlertTriangle, AlertCircle, Info, Shield } from "lucide-react";

const alerts = [
  { id: 1, message: "High CPU usage detected on prod-server-01", severity: "warning", time: "5 min ago", source: "Monitoring" },
  { id: 2, message: "Database connection lost", severity: "critical", time: "10 min ago", source: "Database" },
  { id: 3, message: "SSL certificate expires in 7 days", severity: "warning", time: "1 hour ago", source: "Security" },
  { id: 4, message: "Backup completed successfully", severity: "info", time: "2 hours ago", source: "Backup" },
];

export function AlertsSimple() {
  const getAlertIcon = (severity: string) => {
    switch (severity) {
      case "critical":
        return <AlertCircle className="w-4 h-4 text-error" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case "info":
        return <Info className="w-4 h-4 text-accent" />;
      default:
        return null;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "text-error";
      case "warning":
        return "text-yellow-500";
      case "info":
        return "text-accent";
      default:
        return "text-gray";
    }
  };

  return (
    <div className="space-y-3">
      {alerts.map((alert) => (
        <AlertCard
          key={alert.id}
          alert={alert}
          icon={getAlertIcon(alert.severity)}
          severityColor={getSeverityColor(alert.severity)}
        />
      ))}
    </div>
  );
}

function AlertCard({ 
  alert, 
  icon, 
  severityColor 
}: { 
  alert: any;
  icon: React.ReactNode;
  severityColor: string;
}) {
  return (
    <div className="alert-card">
      {icon}
      <div className="flex-1">
        <p className="text-sm font-medium text-text">{alert.message}</p>
        <div className="flex justify-between items-center mt-1">
          <p className="text-xs text-secondary">{alert.source}</p>
          <p className="text-xs text-gray">{alert.time}</p>
        </div>
      </div>
      <span className={`text-xs font-medium uppercase ${severityColor}`}>
        {alert.severity}
      </span>
    </div>
  );
}

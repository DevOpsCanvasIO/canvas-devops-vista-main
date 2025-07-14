"use client";

import { Server, Database, Globe, Shield, Cloud, Cpu } from "lucide-react";

const services = [
  { id: 1, name: "Auth Service", status: "healthy", icon: Shield, version: "v2.1.0", uptime: "99.9%" },
  { id: 2, name: "API Gateway", status: "healthy", icon: Globe, version: "v1.8.2", uptime: "99.8%" },
  { id: 3, name: "Database", status: "warning", icon: Database, version: "v5.7.34", uptime: "97.2%" },
  { id: 4, name: "Cache Server", status: "healthy", icon: Server, version: "v6.2.7", uptime: "99.9%" },
  { id: 5, name: "Monitoring", status: "healthy", icon: Cpu, version: "v3.1.1", uptime: "100%" },
  { id: 6, name: "CDN", status: "healthy", icon: Cloud, version: "v2.5.0", uptime: "99.7%" },
];

export function ServiceCatalogSimple() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy":
        return "bg-success";
      case "warning":
        return "bg-yellow-500";
      case "error":
        return "bg-error";
      default:
        return "bg-gray";
    }
  };

  return (
    <div className="grid grid-cols-1 gap-3">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          statusColor={getStatusColor(service.status)}
        />
      ))}
    </div>
  );
}

function ServiceCard({ 
  service, 
  statusColor 
}: { 
  service: any;
  statusColor: string;
}) {
  return (
    <div className="service-card group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <service.icon className="w-5 h-5 text-text icon-hover" />
          <span className="text-sm font-medium text-text">{service.name}</span>
        </div>
        <div className={`w-2 h-2 rounded-full ${statusColor}`}></div>
      </div>
      <div className="flex justify-between items-center text-xs">
        <span className="text-secondary">{service.version}</span>
        <span className="text-gray">{service.uptime}</span>
      </div>
    </div>
  );
}

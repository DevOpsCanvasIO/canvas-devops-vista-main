import { PipelineStatus } from "@/types/pipeline.types";

// Single responsibility: Format duration values
export function formatDuration(seconds: number): string {
  if (seconds < 60) {
    return `${seconds}s`;
  }
  
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  
  if (minutes < 60) {
    return remainingSeconds > 0 ? `${minutes}m ${remainingSeconds}s` : `${minutes}m`;
  }
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
}

// Single responsibility: Format metric values
export function formatMetricValue(value: string | number): string {
  if (typeof value === "string") {
    return value;
  }
  
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  }
  
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`;
  }
  
  return value.toString();
}

// Single responsibility: Format percentage values
export function formatPercentage(value: number): string {
  return `${(value * 100).toFixed(1)}%`;
}

// Single responsibility: Format dates
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

// Single responsibility: Format relative time
export function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  
  if (diffInMinutes < 1) {
    return "just now";
  }
  
  if (diffInMinutes < 60) {
    return `${diffInMinutes}m ago`;
  }
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours}h ago`;
  }
  
  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays}d ago`;
}

// Single responsibility: Get status color
export function getStatusColor(status: PipelineStatus): string {
  switch (status) {
    case "completed":
      return "text-success";
    case "failed":
      return "text-error";
    case "running":
      return "text-accent";
    case "pending":
      return "text-secondary";
    case "cancelled":
      return "text-gray";
    default:
      return "text-secondary";
  }
}

// Single responsibility: Get status background color
export function getStatusBackgroundColor(status: PipelineStatus): string {
  switch (status) {
    case "completed":
      return "bg-success/10";
    case "failed":
      return "bg-error/10";
    case "running":
      return "bg-accent/10";
    case "pending":
      return "bg-secondary/10";
    case "cancelled":
      return "bg-gray/10";
    default:
      return "bg-secondary/10";
  }
}

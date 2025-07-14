import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { MetricDisplayProps } from "@/interfaces/metric.interface";

// Single responsibility: Component only handles displaying metric data
export function MetricCard({ title, value, unit, trend, subtitle, className }: MetricDisplayProps) {
  return (
    <div className={cn(
      "bg-surface text-text p-4 rounded-xl hover:bg-card transition-all duration-200 ease-in-out hover:shadow-md", 
      className
    )}>
      <div className="space-y-2">
        <MetricTitle title={title} />
        <MetricValue value={value} unit={unit} trend={trend} />
        {subtitle && <MetricSubtitle subtitle={subtitle} />}
      </div>
    </div>
  );
}

// Single responsibility: Component only handles title display
function MetricTitle({ title }: { title: string }) {
  return (
    <p className="text-sm font-medium text-secondary">{title}</p>
  );
}

// Single responsibility: Component only handles value and trend display
function MetricValue({ value, unit, trend }: { value: string | number; unit?: string; trend?: "up" | "down" }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-baseline space-x-2">
        <span className="text-2xl font-semibold text-text">
          {value}
        </span>
        {unit && (
          <span className="text-sm font-medium text-secondary">{unit}</span>
        )}
      </div>
      {trend && <TrendIndicator trend={trend} />}
    </div>
  );
}

// Single responsibility: Component only handles trend indicator
function TrendIndicator({ trend }: { trend: "up" | "down" }) {
  return (
    <div className="flex items-center icon-hover">
      {trend === "up" ? (
        <TrendingUp className="w-4 h-4 text-success" />
      ) : (
        <TrendingDown className="w-4 h-4 text-error" />
      )}
    </div>
  );
}

// Single responsibility: Component only handles subtitle display
function MetricSubtitle({ subtitle }: { subtitle: string }) {
  return (
    <p className="text-xs text-gray">
      {subtitle}
    </p>
  );
}

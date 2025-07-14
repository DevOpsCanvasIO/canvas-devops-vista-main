// Interface segregation principle - specific interfaces for different concerns
export interface MetricData {
  id: string;
  title: string;
  value: string | number;
  unit?: string;
  trend?: "up" | "down";
  subtitle?: string;
  category: string;
  timestamp: Date;
}

export interface MetricDisplayProps {
  title: string;
  value: string | number;
  unit?: string;
  trend?: "up" | "down";
  subtitle?: string;
  className?: string;
}

export interface MetricService {
  getMetrics(): Promise<MetricData[]>;
  getMetricById(id: string): Promise<MetricData | null>;
  updateMetric(id: string, data: Partial<MetricData>): Promise<MetricData>;
}

export interface MetricRepository {
  fetchMetrics(): Promise<MetricData[]>;
  fetchMetricById(id: string): Promise<MetricData | null>;
  saveMetric(metric: MetricData): Promise<MetricData>;
}

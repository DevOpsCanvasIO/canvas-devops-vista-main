import { MetricData, MetricRepository } from "@/interfaces/metric.interface";

// Mock data for development
const mockMetrics: MetricData[] = [
  {
    id: "1",
    title: "Lead Time for Changes",
    value: "45",
    unit: "min",
    trend: "down",
    subtitle: "15% improvement this week",
    category: "deployment",
    timestamp: new Date(),
  },
  {
    id: "2",
    title: "Deployment Frequency",
    value: "24",
    unit: "per day",
    trend: "up",
    subtitle: "8% increase from last week",
    category: "deployment",
    timestamp: new Date(),
  },
  {
    id: "3",
    title: "Mean Time to Recovery",
    value: "12",
    unit: "min",
    trend: "down",
    subtitle: "25% faster than last month",
    category: "recovery",
    timestamp: new Date(),
  },
  {
    id: "4",
    title: "Change Failure Rate",
    value: "2.1",
    unit: "%",
    trend: "down",
    subtitle: "Below industry average",
    category: "quality",
    timestamp: new Date(),
  },
];

// Mock repository implementation for development
export class MockMetricRepository implements MetricRepository {
  async fetchMetrics(): Promise<MetricData[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockMetrics;
  }

  async fetchMetricById(id: string): Promise<MetricData | null> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockMetrics.find(metric => metric.id === id) || null;
  }

  async saveMetric(metric: MetricData): Promise<MetricData> {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = mockMetrics.findIndex(m => m.id === metric.id);
    if (index >= 0) {
      mockMetrics[index] = metric;
    } else {
      mockMetrics.push(metric);
    }
    return metric;
  }
}

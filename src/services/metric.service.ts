import { MetricData, MetricService, MetricRepository } from "@/interfaces/metric.interface";

// Dependency inversion: High-level module depends on abstraction, not concretions
export class MetricServiceImpl implements MetricService {
  constructor(private readonly metricRepository: MetricRepository) {}

  async getMetrics(): Promise<MetricData[]> {
    try {
      return await this.metricRepository.fetchMetrics();
    } catch (error) {
      console.error("Error fetching metrics:", error);
      throw new Error("Failed to fetch metrics");
    }
  }

  async getMetricById(id: string): Promise<MetricData | null> {
    try {
      return await this.metricRepository.fetchMetricById(id);
    } catch (error) {
      console.error(`Error fetching metric with id ${id}:`, error);
      throw new Error(`Failed to fetch metric with id ${id}`);
    }
  }

  async updateMetric(id: string, data: Partial<MetricData>): Promise<MetricData> {
    try {
      const existingMetric = await this.metricRepository.fetchMetricById(id);
      if (!existingMetric) {
        throw new Error(`Metric with id ${id} not found`);
      }

      const updatedMetric = { ...existingMetric, ...data };
      return await this.metricRepository.saveMetric(updatedMetric);
    } catch (error) {
      console.error(`Error updating metric with id ${id}:`, error);
      throw new Error(`Failed to update metric with id ${id}`);
    }
  }
}

// Repository implementation - can be easily swapped for different data sources
export class ApiMetricRepository implements MetricRepository {
  private readonly baseUrl: string;

  constructor(baseUrl: string = "/api") {
    this.baseUrl = baseUrl;
  }

  async fetchMetrics(): Promise<MetricData[]> {
    const response = await fetch(`${this.baseUrl}/metrics`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  async fetchMetricById(id: string): Promise<MetricData | null> {
    const response = await fetch(`${this.baseUrl}/metrics/${id}`);
    if (response.status === 404) {
      return null;
    }
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  async saveMetric(metric: MetricData): Promise<MetricData> {
    const response = await fetch(`${this.baseUrl}/metrics/${metric.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(metric),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }
}

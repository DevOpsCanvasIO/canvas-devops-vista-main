import { MetricService, MetricRepository } from "@/interfaces/metric.interface";
import { MetricServiceImpl, ApiMetricRepository } from "@/services/metric.service";
import { MockMetricRepository } from "@/services/mockData.service";

// Dependency inversion: Container manages dependencies
class ServiceContainer {
  private services = new Map<string, any>();

  register<T>(name: string, service: T): void {
    this.services.set(name, service);
  }

  get<T>(name: string): T {
    const service = this.services.get(name);
    if (!service) {
      throw new Error(`Service ${name} not found`);
    }
    return service as T;
  }

  // Factory method to create configured services
  createMetricService(baseUrl?: string): MetricService {
    // Use mock repository for development
    const repository: MetricRepository = process.env.NODE_ENV === 'development' 
      ? new MockMetricRepository() 
      : new ApiMetricRepository(baseUrl);
    return new MetricServiceImpl(repository);
  }
}

// Singleton container instance
export const serviceContainer = new ServiceContainer();

// Pre-register common services
serviceContainer.register("metricService", serviceContainer.createMetricService());

// Export convenience functions
export const getMetricService = (): MetricService => 
  serviceContainer.get<MetricService>("metricService");

export const registerMetricService = (service: MetricService): void => 
  serviceContainer.register("metricService", service);

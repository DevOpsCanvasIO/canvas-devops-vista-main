import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { MetricData, MetricService } from "@/interfaces/metric.interface";

// Single responsibility: This hook only handles metrics data fetching
export function useMetrics(metricService: MetricService) {
  return useQuery({
    queryKey: ["metrics"],
    queryFn: () => metricService.getMetrics(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 30 * 1000, // 30 seconds
  });
}

// Single responsibility: This hook only handles individual metric fetching
export function useMetric(id: string, metricService: MetricService) {
  return useQuery({
    queryKey: ["metric", id],
    queryFn: () => metricService.getMetricById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
}

// Single responsibility: This hook only handles metric updates
export function useUpdateMetric(metricService: MetricService) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<MetricData> }) =>
      metricService.updateMetric(id, data),
    onSuccess: (updatedMetric) => {
      // Update the cache
      queryClient.setQueryData(["metric", updatedMetric.id], updatedMetric);
      
      // Invalidate and refetch related queries
      queryClient.invalidateQueries({ queryKey: ["metrics"] });
    },
    onError: (error) => {
      console.error("Error updating metric:", error);
    },
  });
}

// Single responsibility: This hook only handles metric filtering
export function useFilteredMetrics(
  metricService: MetricService,
  filterFn: (metric: MetricData) => boolean
) {
  const { data: metrics, ...queryResult } = useMetrics(metricService);

  const filteredMetrics = metrics?.filter(filterFn) || [];

  return {
    data: filteredMetrics,
    ...queryResult,
  };
}

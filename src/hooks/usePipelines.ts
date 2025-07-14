import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { PipelineService, PipelineRunService } from "@/interfaces/pipeline.interface";
import { Pipeline, PipelineStatus } from "@/types/pipeline.types";

// Single responsibility: Hook for fetching pipelines
export function usePipelines(pipelineService: PipelineService) {
  return useQuery({
    queryKey: ["pipelines"],
    queryFn: () => pipelineService.getPipelines(),
    staleTime: 2 * 60 * 1000, // 2 minutes
    refetchInterval: 15 * 1000, // 15 seconds
  });
}

// Single responsibility: Hook for fetching a single pipeline
export function usePipeline(id: string, pipelineService: PipelineService) {
  return useQuery({
    queryKey: ["pipeline", id],
    queryFn: () => pipelineService.getPipelineById(id),
    enabled: !!id,
    staleTime: 2 * 60 * 1000,
  });
}

// Single responsibility: Hook for creating pipelines
export function useCreatePipeline(pipelineService: PipelineService) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (pipeline: Omit<Pipeline, "id" | "createdAt" | "updatedAt">) =>
      pipelineService.createPipeline(pipeline),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pipelines"] });
    },
  });
}

// Single responsibility: Hook for updating pipeline status
export function useUpdatePipelineStatus(pipelineService: PipelineService) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: PipelineStatus }) =>
      pipelineService.updatePipelineStatus(id, status),
    onSuccess: (updatedPipeline) => {
      queryClient.setQueryData(["pipeline", updatedPipeline.id], updatedPipeline);
      queryClient.invalidateQueries({ queryKey: ["pipelines"] });
    },
  });
}

// Single responsibility: Hook for pipeline runs
export function usePipelineRuns(pipelineId: string, pipelineRunService: PipelineRunService) {
  return useQuery({
    queryKey: ["pipelineRuns", pipelineId],
    queryFn: () => pipelineRunService.getPipelineRuns(pipelineId),
    enabled: !!pipelineId,
    staleTime: 1 * 60 * 1000, // 1 minute
    refetchInterval: 10 * 1000, // 10 seconds
  });
}

// Single responsibility: Hook for latest pipeline run
export function useLatestPipelineRun(pipelineId: string, pipelineRunService: PipelineRunService) {
  return useQuery({
    queryKey: ["latestPipelineRun", pipelineId],
    queryFn: () => pipelineRunService.getLatestRun(pipelineId),
    enabled: !!pipelineId,
    staleTime: 30 * 1000, // 30 seconds
    refetchInterval: 5 * 1000, // 5 seconds
  });
}

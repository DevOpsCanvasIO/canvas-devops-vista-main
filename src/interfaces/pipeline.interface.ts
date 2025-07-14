import { Pipeline, PipelineRun, PipelineStep, PipelineStatus } from "@/types/pipeline.types";

// Interface segregation: Specific interfaces for different pipeline concerns
export interface PipelineService {
  getPipelines(): Promise<Pipeline[]>;
  getPipelineById(id: string): Promise<Pipeline | null>;
  createPipeline(pipeline: Omit<Pipeline, "id" | "createdAt" | "updatedAt">): Promise<Pipeline>;
  updatePipelineStatus(id: string, status: PipelineStatus): Promise<Pipeline>;
  deletePipeline(id: string): Promise<void>;
}

export interface PipelineRunService {
  getPipelineRuns(pipelineId: string): Promise<PipelineRun[]>;
  getLatestRun(pipelineId: string): Promise<PipelineRun | null>;
  createPipelineRun(run: Omit<PipelineRun, "id">): Promise<PipelineRun>;
  updateRunStatus(runId: string, status: PipelineStatus): Promise<PipelineRun>;
}

export interface PipelineStepService {
  updateStepStatus(stepId: string, status: PipelineStatus): Promise<PipelineStep>;
  getStepLogs(stepId: string): Promise<string[]>;
  addStepLog(stepId: string, log: string): Promise<void>;
}

export interface PipelineRepository {
  fetchPipelines(): Promise<Pipeline[]>;
  fetchPipelineById(id: string): Promise<Pipeline | null>;
  savePipeline(pipeline: Pipeline): Promise<Pipeline>;
  deletePipeline(id: string): Promise<void>;
}

export interface PipelineRunRepository {
  fetchPipelineRuns(pipelineId: string): Promise<PipelineRun[]>;
  fetchLatestRun(pipelineId: string): Promise<PipelineRun | null>;
  savePipelineRun(run: PipelineRun): Promise<PipelineRun>;
}

export interface PipelineDisplayProps {
  pipeline: Pipeline;
  onStatusChange?: (status: PipelineStatus) => void;
  onStepClick?: (step: PipelineStep) => void;
  className?: string;
}

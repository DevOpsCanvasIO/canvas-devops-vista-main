// Type definitions for pipeline orchestration
export type PipelineStatus = "pending" | "running" | "completed" | "failed" | "cancelled";

export interface PipelineStep {
  id: string;
  name: string;
  status: PipelineStatus;
  duration?: number;
  startTime?: Date;
  endTime?: Date;
  logs?: string[];
}

export interface Pipeline {
  id: string;
  name: string;
  status: PipelineStatus;
  steps: PipelineStep[];
  createdAt: Date;
  updatedAt: Date;
  branch?: string;
  repository?: string;
}

export interface PipelineRun {
  id: string;
  pipelineId: string;
  status: PipelineStatus;
  startTime: Date;
  endTime?: Date;
  duration?: number;
  triggeredBy: string;
  commitHash?: string;
  buildNumber: number;
}

export interface PipelineMetrics {
  totalRuns: number;
  successRate: number;
  averageDuration: number;
  failureRate: number;
}

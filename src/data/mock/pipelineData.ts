export interface PipelineStage {
  name: string
  status: 'success' | 'failed' | 'running' | 'skipped'
  duration: number // in seconds
}

export interface PipelineRun {
  id: string
  service: string
  provider: 'GitHub Actions' | 'Jenkins'
  status: 'success' | 'failed' | 'running'
  triggeredBy: string
  timestamp: string
  duration: number // in seconds
  stages: PipelineStage[]
}

export const pipelineData: PipelineRun[] = [
  {
    id: "pipeline-001",
    service: "Payments API",
    provider: "GitHub Actions",
    status: "success",
    triggeredBy: "luiggi.lamela",
    timestamp: "2025-07-24T20:10:00Z",
    duration: 105,
    stages: [
      { name: "Build", status: "success", duration: 40 },
      { name: "Test", status: "success", duration: 45 },
      { name: "Deploy", status: "success", duration: 20 }
    ]
  },
  {
    id: "pipeline-002",
    service: "User Auth",
    provider: "Jenkins",
    status: "failed",
    triggeredBy: "devops.bot",
    timestamp: "2025-07-24T19:30:00Z",
    duration: 120,
    stages: [
      { name: "Build", status: "success", duration: 50 },
      { name: "Test", status: "failed", duration: 70 },
      { name: "Deploy", status: "skipped", duration: 0 }
    ]
  },
  {
    id: "pipeline-003",
    service: "Notification Service",
    provider: "GitHub Actions",
    status: "running",
    triggeredBy: "jane.doe",
    timestamp: "2025-07-24T20:45:00Z",
    duration: 85,
    stages: [
      { name: "Build", status: "success", duration: 35 },
      { name: "Test", status: "running", duration: 50 },
      { name: "Deploy", status: "skipped", duration: 0 }
    ]
  },
  {
    id: "pipeline-004",
    service: "Analytics API",
    provider: "Jenkins",
    status: "success",
    triggeredBy: "mike.wilson",
    timestamp: "2025-07-24T18:15:00Z",
    duration: 95,
    stages: [
      { name: "Build", status: "success", duration: 30 },
      { name: "Test", status: "success", duration: 40 },
      { name: "Deploy", status: "success", duration: 25 }
    ]
  },
  {
    id: "pipeline-005",
    service: "Email Service",
    provider: "GitHub Actions",
    status: "failed",
    triggeredBy: "sarah.brown",
    timestamp: "2025-07-24T17:20:00Z",
    duration: 45,
    stages: [
      { name: "Build", status: "failed", duration: 45 },
      { name: "Test", status: "skipped", duration: 0 },
      { name: "Deploy", status: "skipped", duration: 0 }
    ]
  },
  {
    id: "pipeline-006",
    service: "Gateway API",
    provider: "Jenkins",
    status: "success",
    triggeredBy: "alex.garcia",
    timestamp: "2025-07-24T16:45:00Z",
    duration: 155,
    stages: [
      { name: "Build", status: "success", duration: 60 },
      { name: "Test", status: "success", duration: 65 },
      { name: "Deploy", status: "success", duration: 30 }
    ]
  },
  {
    id: "pipeline-007",
    service: "Reports API",
    provider: "GitHub Actions",
    status: "running",
    triggeredBy: "maria.rodriguez",
    timestamp: "2025-07-24T21:00:00Z",
    duration: 75,
    stages: [
      { name: "Build", status: "success", duration: 35 },
      { name: "Test", status: "success", duration: 40 },
      { name: "Deploy", status: "running", duration: 0 }
    ]
  },
  {
    id: "pipeline-008",
    service: "Data Pipeline",
    provider: "Jenkins",
    status: "success",
    triggeredBy: "tom.johnson",
    timestamp: "2025-07-24T15:30:00Z",
    duration: 320,
    stages: [
      { name: "Build", status: "success", duration: 90 },
      { name: "Test", status: "success", duration: 180 },
      { name: "Deploy", status: "success", duration: 50 }
    ]
  },
  {
    id: "pipeline-009",
    service: "Mobile API",
    provider: "GitHub Actions",
    status: "failed",
    triggeredBy: "lisa.wang",
    timestamp: "2025-07-24T14:20:00Z",
    duration: 65,
    stages: [
      { name: "Build", status: "success", duration: 25 },
      { name: "Test", status: "failed", duration: 40 },
      { name: "Deploy", status: "skipped", duration: 0 }
    ]
  },
  {
    id: "pipeline-010",
    service: "Search Service",
    provider: "Jenkins",
    status: "running",
    triggeredBy: "david.chen",
    timestamp: "2025-07-24T21:15:00Z",
    duration: 45,
    stages: [
      { name: "Build", status: "success", duration: 30 },
      { name: "Test", status: "running", duration: 15 },
      { name: "Deploy", status: "skipped", duration: 0 }
    ]
  }
]

// For backward compatibility
export const mockPipelineData = pipelineData

export const providerIcons = {
  'GitHub Actions': '🐙',
  'Jenkins': '🔧'
}

export const statusColors = {
  success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  failed: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  running: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  skipped: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
}

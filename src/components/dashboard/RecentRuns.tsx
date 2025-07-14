'use client'

import { Badge } from '@/components/ui/badge'
import { Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react'

interface PipelineRun {
  id: string
  name: string
  status: 'success' | 'failed' | 'running' | 'pending'
  duration: string
  timestamp: string
  branch: string
}

const mockRuns: PipelineRun[] = [
  {
    id: '1',
    name: 'Deploy to Production',
    status: 'success',
    duration: '2m 34s',
    timestamp: '2 minutes ago',
    branch: 'main'
  },
  {
    id: '2',
    name: 'Run Tests',
    status: 'running',
    duration: '1m 12s',
    timestamp: '5 minutes ago',
    branch: 'feature/auth'
  },
  {
    id: '3',
    name: 'Build Docker Image',
    status: 'failed',
    duration: '45s',
    timestamp: '10 minutes ago',
    branch: 'develop'
  }
]

const getStatusIcon = (status: PipelineRun['status']) => {
  switch (status) {
    case 'success':
      return <CheckCircle className="h-4 w-4 text-success" />
    case 'failed':
      return <XCircle className="h-4 w-4 text-error" />
    case 'running':
      return <AlertCircle className="h-4 w-4 text-warning animate-pulse" />
    case 'pending':
      return <Clock className="h-4 w-4 text-gray" />
  }
}

const getStatusColor = (status: PipelineRun['status']) => {
  switch (status) {
    case 'success':
      return 'bg-success/10 text-success'
    case 'failed':
      return 'bg-error/10 text-error'
    case 'running':
      return 'bg-warning/10 text-warning'
    case 'pending':
      return 'bg-gray/10 text-gray'
  }
}

export function RecentRuns() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-text flex items-center gap-2">
        <div className="h-2 w-2 bg-accent rounded-full"></div>
        Recent Runs
      </h2>
      <div className="space-y-3">
        {mockRuns.map((run) => (
          <div key={run.id} className="flex items-center justify-between p-3 bg-card rounded-lg hover:bg-card/80 transition-all">
            <div className="flex items-center gap-3">
              {getStatusIcon(run.status)}
              <div>
                <div className="font-medium text-text text-sm">{run.name}</div>
                <div className="text-xs text-secondary">{run.branch} • {run.timestamp}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge className={getStatusColor(run.status)}>
                {run.status.charAt(0).toUpperCase() + run.status.slice(1)}
              </Badge>
              <span className="text-xs text-secondary min-w-[50px] text-right">
                {run.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

"use client"

import { CheckCircle, XCircle, Clock, Loader2, ArrowRight, Minus } from 'lucide-react'
import { PipelineStage } from '@/data/mock/pipelineData'
import { cn } from '@/lib/utils'

interface StageViewProps {
  stages: PipelineStage[]
  className?: string
}

export function StageView({ stages, className }: StageViewProps) {
  const getStageIcon = (status: PipelineStage['status']) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'failed':
        return <XCircle className="h-4 w-4 text-red-600" />
      case 'running':
        return <Loader2 className="h-4 w-4 text-yellow-600 animate-spin" />
      case 'skipped':
        return <Minus className="h-4 w-4 text-gray-400" />
      default:
        return <Clock className="h-4 w-4 text-gray-400" />
    }
  }

  const getStageColor = (status: PipelineStage['status']) => {
    switch (status) {
      case 'success':
        return 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950'
      case 'failed':
        return 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950'
      case 'running':
        return 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950'
      case 'skipped':
        return 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800'
      default:
        return 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800'
    }
  }

  const formatDuration = (seconds: number) => {
    if (seconds === 0) return '-'
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    if (minutes > 0) {
      return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
    }
    return `0:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {stages.map((stage, index) => (
        <div key={stage.name} className="flex items-center">
          <div className={cn(
            "flex flex-col items-center p-3 rounded-lg border min-w-[120px]",
            getStageColor(stage.status)
          )}>
            <div className="flex items-center gap-2 mb-2">
              {getStageIcon(stage.status)}
              <span className="text-sm font-medium">{stage.name}</span>
            </div>
            
            <div className="text-xs text-center">
              <div className="font-mono text-xs">
                {formatDuration(stage.duration)}
              </div>
            </div>
          </div>
          
          {index < stages.length - 1 && (
            <ArrowRight className="h-4 w-4 text-muted-foreground mx-2" />
          )}
        </div>
      ))}
    </div>
  )
}

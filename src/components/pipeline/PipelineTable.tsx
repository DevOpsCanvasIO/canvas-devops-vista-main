"use client"

import { useState, useMemo } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { StageView } from './StageView'
import { PipelineFilters } from './FilterBar'
import { 
  pipelineData, 
  providerIcons, 
  statusColors, 
  PipelineRun 
} from '@/data/mock/pipelineData'

interface PipelineTableProps {
  filters?: PipelineFilters
}

export function PipelineTable({ filters }: PipelineTableProps) {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set())

  // Filter the data based on active filters
  const filteredData = useMemo(() => {
    if (!filters) return pipelineData

    return pipelineData.filter(pipeline => {
      const matchesService = !filters.service || pipeline.service === filters.service
      const matchesProvider = !filters.provider || pipeline.provider === filters.provider
      const matchesStatus = !filters.status || pipeline.status === filters.status
      
      return matchesService && matchesProvider && matchesStatus
    })
  }, [filters])

  const toggleRow = (id: string) => {
    const newExpanded = new Set(expandedRows)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedRows(newExpanded)
  }

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    if (minutes > 0) {
      return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
    }
    return `0:${seconds.toString().padStart(2, '0')}`
  }

  const formatTimestamp = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
  }

  if (filteredData.length === 0) {
    return (
      <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
        <CardContent className="p-8 text-center">
          <div className="text-muted-foreground">
            No pipelines found matching the current filters.
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]"></TableHead>
              <TableHead>Service Name</TableHead>
              <TableHead>Provider</TableHead>
              <TableHead>Triggered By</TableHead>
              <TableHead>Status Badge</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Timestamp</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((pipeline) => (
              <>
                <TableRow key={pipeline.id} className="hover:bg-muted/50">
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleRow(pipeline.id)}
                      className="h-6 w-6 p-0"
                    >
                      {expandedRows.has(pipeline.id) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </Button>
                  </TableCell>
                  
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <span className="text-lg">🚀</span>
                      <div>
                        <div className="font-medium">{pipeline.service}</div>
                      </div>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{providerIcons[pipeline.provider]}</span>
                      <span className="text-sm">{pipeline.provider}</span>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">👨‍💻</span>
                      <span className="text-sm font-medium">{pipeline.triggeredBy}</span>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <Badge 
                      variant="secondary" 
                      className={`${statusColors[pipeline.status]} ${pipeline.status === 'running' ? 'animate-pulse' : ''}`}
                    >
                      {pipeline.status}
                    </Badge>
                  </TableCell>
                  
                  <TableCell>
                    <span className="font-mono text-sm">
                      {formatDuration(pipeline.duration)}
                    </span>
                  </TableCell>
                  
                  <TableCell>
                    <span className="text-sm text-muted-foreground">
                      {formatTimestamp(pipeline.timestamp)}
                    </span>
                  </TableCell>
                </TableRow>
                
                {expandedRows.has(pipeline.id) && (
                  <TableRow>
                    <TableCell colSpan={7} className="bg-muted/30 p-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-sm">Pipeline Stages</h4>
                        <StageView stages={pipeline.stages} />
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

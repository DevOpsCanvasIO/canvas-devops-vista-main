"use client"

import { useState } from 'react'
import { Filter, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ServiceSelector } from '@/components/common/ServiceSelector'
import { pipelineData } from '@/data/mock/pipelineData'

interface FilterBarProps {
  onFiltersChange?: (filters: PipelineFilters) => void
}

export interface PipelineFilters {
  service: string
  provider: string
  status: string
}

export function FilterBar({ onFiltersChange }: FilterBarProps) {
  const [filters, setFilters] = useState<PipelineFilters>({
    service: '',
    provider: '',
    status: ''
  })

  // Extract unique services from mock data
  const services = Array.from(
    new Set(pipelineData.map(pipeline => pipeline.service))
  ).map(serviceName => {
    return {
      value: serviceName,
      label: serviceName,
      avatar: '🚀'
    }
  })

  // Extract unique providers from mock data
  const providers = Array.from(
    new Set(pipelineData.map(pipeline => pipeline.provider))
  )

  const handleFilterChange = (key: keyof PipelineFilters, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFiltersChange?.(newFilters)
  }

  const resetFilters = () => {
    const resetFilters = { service: '', provider: '', status: '' }
    setFilters(resetFilters)
    onFiltersChange?.(resetFilters)
  }

  const hasActiveFilters = Object.values(filters).some(value => value !== '')

  return (
    <Card className="rounded-2xl shadow bg-white dark:bg-gray-950">
      <CardContent className="p-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Filter className="h-4 w-4" />
            <span>Filters:</span>
          </div>

          <ServiceSelector
            services={services}
            value={filters.service}
            onValueChange={(value) => handleFilterChange('service', value)}
            placeholder="All Services"
            className="w-[180px]"
          />

          <Select 
            value={filters.provider} 
            onValueChange={(value) => handleFilterChange('provider', value)}
          >
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Provider" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Providers</SelectItem>
              {providers.map((provider) => (
                <SelectItem key={provider} value={provider}>
                  {provider}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select 
            value={filters.status} 
            onValueChange={(value) => handleFilterChange('status', value)}
          >
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Statuses</SelectItem>
              <SelectItem value="success">Success</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
              <SelectItem value="running">Running</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>

          {hasActiveFilters && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={resetFilters}
              className="gap-2"
            >
              <RotateCcw className="h-3 w-3" />
              Reset
            </Button>
          )}

          <div className="ml-auto text-xs text-muted-foreground">
            {pipelineData.length} pipeline runs
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

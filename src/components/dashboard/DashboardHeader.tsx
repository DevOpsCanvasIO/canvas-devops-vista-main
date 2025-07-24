"use client"

import React from 'react'
import { DASHBOARD_CONFIG } from '@/constants/dashboard'
import { useDashboard } from '@/hooks/useDashboard'
import { getStatusConfig, formatTime, StatusType } from '@/utils/dashboard'

export function DashboardHeader() {
  const { dashboardState } = useDashboard()
  
  const statusType: StatusType = dashboardState.isLive ? 'success' : 'warning'
  const statusConfig = getStatusConfig(statusType)
  
  return (
    <div className="border-b border-border bg-surface">
      <div className="flex h-20 items-center justify-end px-6">
        {/* Status indicator - positioned to the right */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className={`h-2 w-2 rounded-full ${statusConfig.color} ${statusConfig.animationClass}`}></div>
            <span className="text-sm text-muted-foreground">{statusConfig.text}</span>
          </div>
          <div className="text-xs text-muted-foreground">
            Last updated: {formatTime(dashboardState.lastRefresh)}
          </div>
        </div>
      </div>
    </div>
  )
}

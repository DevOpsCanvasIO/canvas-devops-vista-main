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
      <div className="flex h-16 items-center px-6">
        <h1 className="text-2xl font-bold text-text">
          {DASHBOARD_CONFIG.TITLE}
        </h1>
        <div className="ml-auto flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className={`h-2 w-2 rounded-full ${statusConfig.color} ${statusConfig.animationClass}`}></div>
            <span className="text-sm text-secondary">{statusConfig.text}</span>
          </div>
          <div className="text-xs text-secondary">
            Last updated: {formatTime(dashboardState.lastRefresh)}
          </div>
        </div>
      </div>
    </div>
  )
}

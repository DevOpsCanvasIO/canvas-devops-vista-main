"use client"

import { useState, useEffect } from 'react'
import { DASHBOARD_CONFIG } from '@/constants/dashboard'

export interface DashboardState {
  isLive: boolean
  lastRefresh: Date
  autoRefresh: boolean
  refreshInterval: number
}

export function useDashboard() {
  const [dashboardState, setDashboardState] = useState<DashboardState>({
    isLive: true,
    lastRefresh: new Date(),
    autoRefresh: true,
    refreshInterval: DASHBOARD_CONFIG.REFRESH_INTERVAL
  })

  const updateLastRefresh = () => {
    setDashboardState(prev => ({
      ...prev,
      lastRefresh: new Date()
    }))
  }

  const toggleAutoRefresh = () => {
    setDashboardState(prev => ({
      ...prev,
      autoRefresh: !prev.autoRefresh
    }))
  }

  const setRefreshInterval = (interval: number) => {
    setDashboardState(prev => ({
      ...prev,
      refreshInterval: interval
    }))
  }

  const toggleLiveStatus = () => {
    setDashboardState(prev => ({
      ...prev,
      isLive: !prev.isLive
    }))
  }

  // Auto-refresh effect
  useEffect(() => {
    if (!dashboardState.autoRefresh) return

    const interval = setInterval(() => {
      updateLastRefresh()
    }, dashboardState.refreshInterval)

    return () => clearInterval(interval)
  }, [dashboardState.autoRefresh, dashboardState.refreshInterval])

  return {
    dashboardState,
    updateLastRefresh,
    toggleAutoRefresh,
    setRefreshInterval,
    toggleLiveStatus
  }
}

import { DASHBOARD_CONFIG } from '@/constants/dashboard'

export type StatusType = 'success' | 'warning' | 'error' | 'info'

export interface StatusConfig {
  color: string
  text: string
  animationClass?: string
}

export const getStatusConfig = (status: StatusType): StatusConfig => {
  const statusMap: Record<StatusType, StatusConfig> = {
    success: {
      color: 'bg-success',
      text: DASHBOARD_CONFIG.STATUS_INDICATORS.LIVE,
      animationClass: 'animate-pulse'
    },
    warning: {
      color: 'bg-warning',
      text: DASHBOARD_CONFIG.STATUS_INDICATORS.MAINTENANCE,
      animationClass: 'animate-pulse'
    },
    error: {
      color: 'bg-error',
      text: DASHBOARD_CONFIG.STATUS_INDICATORS.OFFLINE,
      animationClass: 'animate-pulse'
    },
    info: {
      color: 'bg-accent',
      text: 'Info',
      animationClass: 'animate-pulse'
    }
  }
  
  return statusMap[status] || statusMap.info
}

export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export const formatDateTime = (date: Date): string => {
  return `${formatDate(date)} ${formatTime(date)}`
}

export const getTimeAgo = (date: Date): string => {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  
  if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`
  if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`
  if (minutes > 0) return `${minutes} min${minutes > 1 ? 's' : ''} ago`
  return 'Just now'
}

export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9)
}

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

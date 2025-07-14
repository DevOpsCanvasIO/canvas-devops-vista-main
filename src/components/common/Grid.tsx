"use client"

import React from 'react'
import { cn } from '@/lib/utils'

interface GridProps {
  children: React.ReactNode
  columns?: number
  gap?: string
  className?: string
}

export function Grid({ 
  children, 
  columns = 3, 
  gap = "gap-6",
  className 
}: GridProps) {
  const gridClass = `grid grid-cols-${columns} ${gap}`
  
  return (
    <div className={cn(gridClass, className)}>
      {children}
    </div>
  )
}

interface GridItemProps {
  children: React.ReactNode
  className?: string
  colSpan?: number
}

export function GridItem({ 
  children, 
  className,
  colSpan = 1
}: GridItemProps) {
  const colSpanClass = colSpan > 1 ? `col-span-${colSpan}` : ''
  
  return (
    <div className={cn("bg-surface p-4 rounded-xl", colSpanClass, className)}>
      {children}
    </div>
  )
}

interface FlexColumnProps {
  children: React.ReactNode
  gap?: string
  className?: string
}

export function FlexColumn({ 
  children, 
  gap = "space-y-6",
  className 
}: FlexColumnProps) {
  return (
    <div className={cn("flex flex-col", gap, className)}>
      {children}
    </div>
  )
}

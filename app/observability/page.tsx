import Observability from '@/pages/Observability'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Observability - DevOpsCanvas-dashboard',
  description: 'Monitor system health and performance metrics',
}

export default function ObservabilityPage() {
  return <Observability />
}

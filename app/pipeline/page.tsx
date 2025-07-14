import Pipeline from '@/pages/Pipeline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pipeline Management - DevOpsCanvas-dashboard',
  description: 'Monitor and manage your CI/CD pipelines',
}

export default function PipelinePage() {
  return <Pipeline />
}

'use client'

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { useMetrics } from '@/hooks/useMetrics'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export function Observability() {
  const { data: metrics, isLoading } = useMetrics()

  const chartData = {
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
    datasets: [
      {
        label: 'CPU Usage',
        data: [45, 52, 38, 67, 73, 65],
        borderColor: '#5056c9',
        backgroundColor: 'rgba(80, 86, 201, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Memory Usage',
        data: [35, 42, 28, 57, 63, 55],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#424764',
        },
        ticks: {
          color: '#7e9cb6',
        },
      },
      x: {
        grid: {
          color: '#424764',
        },
        ticks: {
          color: '#7e9cb6',
        },
      },
    },
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-text">Observability</h2>
        <div className="h-48 bg-card rounded-lg animate-pulse"></div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-text">Observability</h2>
      <div className="h-48 relative">
        <Line data={chartData} options={options} />
      </div>
      <div className="flex justify-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-accent rounded-full"></div>
          <span className="text-secondary">CPU Usage</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-success rounded-full"></div>
          <span className="text-secondary">Memory Usage</span>
        </div>
      </div>
    </div>
  )
}

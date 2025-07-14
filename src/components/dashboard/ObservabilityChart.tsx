import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ObservabilityChart() {
  // Simulated data points for the chart
  const dataPoints = [
    { time: "10:00", value: 45 },
    { time: "10:20", value: 78 },
    { time: "10:40", value: 65 },
    { time: "11:00", value: 88 },
    { time: "11:20", value: 72 },
    { time: "11:40", value: 92 },
    { time: "12:00", value: 85 }
  ]

  // Create SVG path for the line chart
  const maxValue = Math.max(...dataPoints.map(d => d.value))
  const minValue = Math.min(...dataPoints.map(d => d.value))
  const range = maxValue - minValue
  
  const width = 300
  const height = 120
  const padding = 20
  
  const points = dataPoints.map((point, index) => {
    const x = (index / (dataPoints.length - 1)) * (width - 2 * padding) + padding
    const y = height - padding - ((point.value - minValue) / range) * (height - 2 * padding)
    return `${x},${y}`
  }).join(' ')

  return (
    <Card className="bg-metric-bg border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Osservability
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <svg width={width} height={height} className="w-full">
            {/* Grid lines */}
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Chart line */}
            <polyline
              points={points}
              fill="none"
              stroke="hsl(var(--chart-line))"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Data points */}
            {dataPoints.map((point, index) => {
              const x = (index / (dataPoints.length - 1)) * (width - 2 * padding) + padding
              const y = height - padding - ((point.value - minValue) / range) * (height - 2 * padding)
              return (
                <circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="3"
                  fill="hsl(var(--chart-line))"
                />
              )
            })}
          </svg>
          
          {/* Time labels */}
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            {dataPoints.map((point, index) => (
              <span key={index}>{point.time}</span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
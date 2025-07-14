import { ArrowRight, GitBranch, Hammer, TestTube, CheckCircle, Play } from "lucide-react"

const stages = [
  { name: "Source", status: "completed", icon: GitBranch },
  { name: "Build", status: "completed", icon: Hammer },
  { name: "Test", status: "running", icon: TestTube },
  { name: "Deploy", status: "pending", icon: Play }
]

export function PipelineOrchestration() {
  return (
    <div className="space-y-4">
      {/* Pipeline Steps as Horizontal Flow */}
      <div className="flex items-center justify-between">
        {stages.map((stage, index) => (
          <div key={stage.name} className="flex items-center">
            <PipelineStep stage={stage} />
            {index < stages.length - 1 && (
              <ArrowRight className="w-4 h-4 text-gray mx-2" />
            )}
          </div>
        ))}
      </div>
      
      {/* Pipeline Status Summary */}
      <div className="flex justify-between text-sm">
        <span className="text-secondary">Progress: 75%</span>
        <span className="text-secondary">Est. time: 5 min</span>
      </div>
    </div>
  )
}

function PipelineStep({ stage }: { stage: { name: string; status: string; icon: any } }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success text-white"
      case "running":
        return "bg-accent text-white animate-pulse"
      case "pending":
        return "bg-border text-gray"
      default:
        return "bg-border text-gray"
    }
  }

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className={`pipeline-step w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
        getStatusColor(stage.status)
      }`}>
        {stage.status === "completed" ? (
          <CheckCircle className="w-5 h-5" />
        ) : (
          <stage.icon className="w-5 h-5" />
        )}
      </div>
      <div className="text-center">
        <p className="text-xs font-medium text-text">{stage.name}</p>
        <p className="text-xs text-secondary capitalize">{stage.status}</p>
      </div>
    </div>
  )
}

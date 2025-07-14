"use client";

import { CheckCircle, XCircle, Clock, GitCommit } from "lucide-react";

const recentRuns = [
  { id: 1, name: "Deploy API v2.1", status: "success", time: "2 min ago", duration: "3m 42s" },
  { id: 2, name: "Update Frontend", status: "running", time: "5 min ago", duration: "1m 15s" },
  { id: 3, name: "Hotfix Auth", status: "failed", time: "1 hour ago", duration: "2m 05s" },
  { id: 4, name: "Database Migration", status: "success", time: "3 hours ago", duration: "8m 12s" },
];

export function RecentRunsSimple() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="w-4 h-4 text-success" />;
      case "running":
        return <Clock className="w-4 h-4 text-accent animate-pulse" />;
      case "failed":
        return <XCircle className="w-4 h-4 text-error" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "success":
        return "text-success";
      case "running":
        return "text-accent";
      case "failed":
        return "text-error";
      default:
        return "text-gray";
    }
  };

  return (
    <div className="space-y-3">
      {recentRuns.map((run) => (
        <RecentRunRow
          key={run.id}
          run={run}
          icon={getStatusIcon(run.status)}
          statusClass={getStatusText(run.status)}
        />
      ))}
    </div>
  );
}

function RecentRunRow({ 
  run, 
  icon, 
  statusClass 
}: { 
  run: any;
  icon: React.ReactNode;
  statusClass: string;
}) {
  return (
    <div className="recent-run-row">
      <div className="flex items-center space-x-3">
        <GitCommit className="w-4 h-4 text-gray" />
        <div className="flex-1">
          <p className="text-sm font-medium text-text">{run.name}</p>
          <p className="text-xs text-secondary">{run.time} • {run.duration}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        {icon}
        <span className={`text-xs font-medium capitalize ${statusClass}`}>
          {run.status}
        </span>
      </div>
    </div>
  );
}

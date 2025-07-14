"use client";

export function ObservabilitySimple() {
  return (
    <div className="space-y-2 p-1">
      <div className="bg-component-bg rounded-lg p-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-foreground">CPU Usage</span>
          <span className="text-sm font-semibold text-success">65%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 mt-2">
          <div className="bg-success h-2 rounded-full" style={{ width: '65%' }}></div>
        </div>
      </div>
      
      <div className="bg-component-bg rounded-lg p-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-foreground">Memory</span>
          <span className="text-sm font-semibold text-warning">78%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 mt-2">
          <div className="bg-warning h-2 rounded-full" style={{ width: '78%' }}></div>
        </div>
      </div>
      
      <div className="bg-component-bg rounded-lg p-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-foreground">Network</span>
          <span className="text-sm font-semibold text-success">32%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 mt-2">
          <div className="bg-success h-2 rounded-full" style={{ width: '32%' }}></div>
        </div>
      </div>
    </div>
  );
}

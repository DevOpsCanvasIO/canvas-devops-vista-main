export const DASHBOARD_CONFIG = {
  TITLE: 'DevOpsCanvas-dashboard',
  VERSION: 'v2.1.0',
  REFRESH_INTERVAL: 30000, // 30 seconds
  GRID_COLUMNS: 3,
  STATUS_INDICATORS: {
    LIVE: 'Live',
    OFFLINE: 'Offline',
    MAINTENANCE: 'Maintenance'
  }
} as const;

export const NAVIGATION_ITEMS = [
  { title: "Dashboard", url: "/dashboard", icon: "LayoutDashboard" as const },
  { title: "Pipeline", url: "/pipeline", icon: "GitBranch" as const },
  { title: "Observability", url: "/observability", icon: "Activity" as const },
  { title: "Catalog", url: "/catalog", icon: "Package" as const },
  { title: "Incidents", url: "/incidents", icon: "AlertTriangle" as const },
] as const;

export const COMPONENT_GRID_CONFIG = {
  TOP_ROW: {
    COLUMNS: 3,
    COMPONENTS: ['DashboardOverview', 'PipelineOrchestration', 'Observability']
  },
  BOTTOM_ROW: {
    LEFT_COLUMN: ['RecentRuns', 'Alerts'],
    RIGHT_COLUMN: ['ServiceCatalog']
  }
} as const;

# Changelog

## [2.1.0] - 2024-07-14

### Changed
- Updated project name from "OpsCanvas Dashboard" to "DevOpsCanvas-dashboard"
- Updated package.json name from "canvas-devops-vista-nextjs" to "devopscanvas-dashboard"
- Updated all metadata titles across pages to use new project name
- Updated README.md with new project name and correct build instructions
- Updated sidebar branding to display "DevOpsCanvas-dashboard"
- Updated dashboard header title to display "DevOpsCanvas-dashboard"

### Technical Improvements
- Implemented SOLID principles across the codebase
- Created centralized constants for configuration
- Added utility functions for common operations
- Improved component structure with better separation of concerns
- Added proper TypeScript interfaces for better type safety
- Introduced reusable Grid components for consistent layouts
- Added dashboard state management with custom hooks

### New Features
- Added sidebar toggle functionality with keyboard shortcut (Ctrl+B)
- Implemented proper spacing between dashboard rows
- Added content padding to all module pages
- Enhanced dashboard header with live status indicator and last refresh time
- Added responsive design improvements

### Files Modified
- package.json
- README.md
- app/layout.tsx
- app/page.tsx
- app/pipeline/page.tsx
- app/observability/page.tsx
- app/catalog/page.tsx
- app/incidents/page.tsx
- src/constants/dashboard.ts
- src/components/dashboard/DevOpsSidebar.tsx
- src/components/dashboard/DashboardHeader.tsx
- src/components/dashboard/DashboardLayout.tsx
- src/components/common/Grid.tsx
- src/hooks/useDashboard.ts
- src/utils/dashboard.ts

### Dependencies
- All existing dependencies maintained
- Project structure optimized for better maintainability
- Clean architecture patterns implemented

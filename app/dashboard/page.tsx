import { DashboardLayout } from '@/components/dashboard/DashboardLayout'
import { DashboardHeader } from '@/components/dashboard/DashboardHeader'
import { DashboardOverview } from '@/components/dashboard/DashboardOverview'
import { PipelineOrchestration } from '@/components/dashboard/PipelineOrchestration'
import { Observability } from '@/components/dashboard/Observability'
import { RecentRuns } from '@/components/dashboard/RecentRuns'
import { Alerts } from '@/components/dashboard/Alerts'
import { ServiceCatalog } from '@/components/dashboard/ServiceCatalog'
import { Grid, GridItem, FlexColumn } from '@/components/common/Grid'
import { COMPONENT_GRID_CONFIG } from '@/constants/dashboard'

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        <DashboardHeader />
        
        <div className="flex-1">
          {/* Top Row */}
          <Grid columns={COMPONENT_GRID_CONFIG.TOP_ROW.COLUMNS}>
            <GridItem>
              <DashboardOverview />
            </GridItem>
            <GridItem>
              <PipelineOrchestration />
            </GridItem>
            <GridItem>
              <Observability />
            </GridItem>
          </Grid>
          
          {/* Spacer */}
          <div className="py-4"></div>
          
          {/* Bottom Row */}
          <Grid columns={3}>
            <GridItem className="p-0">
              <FlexColumn>
                <GridItem>
                  <RecentRuns />
                </GridItem>
                <GridItem>
                  <Alerts />
                </GridItem>
              </FlexColumn>
            </GridItem>
            <GridItem colSpan={2}>
              <ServiceCatalog />
            </GridItem>
          </Grid>
        </div>
      </div>
    </DashboardLayout>
  )
}

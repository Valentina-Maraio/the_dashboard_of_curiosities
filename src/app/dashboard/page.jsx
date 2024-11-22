import { AppSidebar } from "@/components/app-sidebar"
import { DetailedRoundChart } from "@/components/detailed-round-chart";
import { LabelChart } from "@/components/label-chart";
import { RadarChart, SimpleRadarChart } from "@/components/simple-radar-chart";
import { RoundChart } from "@/components/round-chart";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { SegmentChart } from "@/components/segment-chart";
import { SemiChart } from "@/components/semi-chart";
import { RateChart } from "@/components/rate-chart";
import { ProgressDemo } from "@/components/progress-demo";

import { useSelector } from "react-redux";
import TweetsComponent from "@/components/tweets-component";

export default function Page() {
  const selectedContent = useSelector((state) => state.content.selectedContent);

  return (
    (<SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            {/* Conditional rendering based on selectedContent */}
            {selectedContent === "Twitter" ? (
              <div>
                <TweetsComponent/>
              </div>
            ) : (
              <>
                <div className="aspect-video rounded-l bg-gray-100/50 dark:bg-gray-800/50">
                  <SegmentChart />
                </div>
                <div className="aspect-video rounded-l bg-gray-100/50 dark:bg-gray-800/50">
                  <SemiChart />
                </div>
                <div className="aspect-video rounded-l bg-gray-100/50 dark:bg-gray-800/50">
                  <SegmentChart />
                </div>
              </>
            )}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>)
  );
}

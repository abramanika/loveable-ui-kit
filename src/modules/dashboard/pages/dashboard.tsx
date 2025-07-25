import { PulseCard } from "../components/pulse-card"
import { ArrivalsTimeline } from "../components/arrivals-timeline"
import { AIInsights } from "../components/ai-insights"
import { GuestRequestInbox } from "@/components/ui/guest-request-inbox"
import { RoutingVisualizer } from "@/components/ui/routing-visualizer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DashboardPage() {
  return (
    <div className="space-y-6 bg-background min-h-full">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-display font-bold text-foreground">
          Symphonia Operations Center
        </h1>
        <p className="text-muted-foreground">
          Real-time guest request management, system routing, and operational intelligence
        </p>
      </div>

      {/* Tabbed Interface */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
          <TabsTrigger value="overview">Live Overview</TabsTrigger>
          <TabsTrigger value="inbox">Guest Inbox</TabsTrigger>
          <TabsTrigger value="routing">System Routing</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
            {/* Pulse Card - Full Width */}
            <div className="xl:col-span-3">
              <PulseCard />
            </div>

            {/* Left Column - Arrivals Timeline */}
            <div className="lg:col-span-2">
              <ArrivalsTimeline />
            </div>

            {/* Right Column - AI Insights */}
            <div className="xl:col-span-1">
              <AIInsights />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="inbox" className="space-y-4 sm:space-y-6">
          <GuestRequestInbox />
        </TabsContent>
        
        <TabsContent value="routing" className="space-y-4 sm:space-y-6">
          <RoutingVisualizer />
        </TabsContent>
        
        <TabsContent value="analytics" className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <PulseCard />
            <AIInsights />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
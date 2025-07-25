import { PulseCard } from "../components/pulse-card"
import { ArrivalsTimeline } from "../components/arrivals-timeline"
import { AIInsights } from "../components/ai-insights"

export function DashboardPage() {
  return (
    <div className="p-6 space-y-6 bg-background min-h-full">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-display font-bold text-foreground">
          Dashboard
        </h1>
        <p className="text-muted-foreground">
          Welcome back, Sarah. Here's what's happening at your hotel today.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pulse Card - Full Width */}
        <div className="lg:col-span-3">
          <PulseCard />
        </div>

        {/* Left Column - Arrivals Timeline */}
        <div className="lg:col-span-2">
          <ArrivalsTimeline />
        </div>

        {/* Right Column - AI Insights */}
        <div className="lg:col-span-1">
          <AIInsights />
        </div>
      </div>
    </div>
  )
}
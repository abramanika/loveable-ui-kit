import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CardMetric } from "@/components/ui/card-metric"
import { Users, Calendar, DollarSign, TrendingUp } from "lucide-react"

export function PulseCard() {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle className="text-xl font-display flex items-center gap-2">
          <div className="h-2 w-2 bg-success rounded-full animate-pulse" />
          Hotel Pulse - Live Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <CardMetric
            title="Occupancy Today"
            value="87%"
            change={{ value: "+5% vs yesterday", trend: "up" }}
            icon={Users}
          />
          <CardMetric
            title="Arrivals Remaining"
            value="23"
            change={{ value: "12 checked in", trend: "flat" }}
            icon={Calendar}
          />
          <CardMetric
            title="Revenue Today"
            value="$12,847"
            change={{ value: "+12% vs last week", trend: "up" }}
            icon={DollarSign}
          />
          <CardMetric
            title="ADR"
            value="$148"
            change={{ value: "+$8 vs last month", trend: "up" }}
            icon={TrendingUp}
          />
        </div>
      </CardContent>
    </Card>
  )
}
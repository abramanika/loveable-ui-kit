import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  BarChart3, 
  TrendingUp, 
  Users,
  DollarSign,
  Calendar,
  PieChart,
  Target,
  Clock
} from "lucide-react"

export default function AnalyticsPage() {
  return (
    <AppShell>
      <div className="space-y-6 bg-background min-h-full">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-display font-bold text-foreground">
            Analytics & Business Intelligence
          </h1>
          <p className="text-muted-foreground">
            Comprehensive data visualization and insights to drive data-driven decisions for hotel operations
          </p>
        </div>

        {/* Key Performance Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$284,650</div>
              <p className="text-xs text-muted-foreground">+15.2% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Occupancy Rate</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">76.8%</div>
              <p className="text-xs text-muted-foreground">+3.4% vs last year</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">RevPAR</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$142.50</div>
              <p className="text-xs text-muted-foreground">Industry leading</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Guest Satisfaction</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.7/5</div>
              <p className="text-xs text-muted-foreground">+0.2 improvement</p>
            </CardContent>
          </Card>
        </div>

        {/* Revenue Analytics & Guest Demographics */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Revenue Breakdown */}
          <Card className="xl:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Revenue Analytics & Trends
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center p-3 border rounded-lg">
                  <div className="text-lg font-bold text-blue-600">$185.40</div>
                  <div className="text-sm text-muted-foreground">ADR</div>
                </div>
                <div className="text-center p-3 border rounded-lg">
                  <div className="text-lg font-bold text-green-600">$142.50</div>
                  <div className="text-sm text-muted-foreground">RevPAR</div>
                </div>
                <div className="text-center p-3 border rounded-lg">
                  <div className="text-lg font-bold text-purple-600">76.8%</div>
                  <div className="text-sm text-muted-foreground">Occupancy</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-medium">Revenue by Department</div>
                {[
                  { dept: "Room Revenue", amount: "$168,450", percentage: 59, growth: "+12%" },
                  { dept: "Food & Beverage", amount: "$78,240", percentage: 27, growth: "+18%" },
                  { dept: "Spa & Wellness", amount: "$24,680", percentage: 9, growth: "+25%" },
                  { dept: "Events & Meetings", amount: "$13,280", percentage: 5, growth: "+8%" }
                ].map((item) => (
                  <div key={item.dept} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{item.dept}</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{item.amount}</span>
                        <Badge variant="secondary" className="text-xs">
                          {item.growth}
                        </Badge>
                      </div>
                    </div>
                    <Progress value={item.percentage} className="h-2" />
                    <div className="text-xs text-muted-foreground">
                      {item.percentage}% of total revenue
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Guest Demographics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Guest Demographics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="text-sm font-medium">Guest Segments</div>
                {[
                  { segment: "Business Travelers", percentage: 45, count: "1,250 guests" },
                  { segment: "Leisure Travelers", percentage: 35, count: "945 guests" },
                  { segment: "Groups & Events", percentage: 15, count: "420 guests" },
                  { segment: "Extended Stay", percentage: 5, count: "135 guests" }
                ].map((guest) => (
                  <div key={guest.segment} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{guest.segment}</span>
                      <span className="text-muted-foreground">{guest.percentage}%</span>
                    </div>
                    <Progress value={guest.percentage} className="h-2" />
                    <div className="text-xs text-muted-foreground">{guest.count}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-3">
                <div className="text-sm font-medium">Geographic Distribution</div>
                {[
                  { region: "Domestic", percentage: 68 },
                  { region: "International", percentage: 32 }
                ].map((geo) => (
                  <div key={geo.region} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{geo.region}</span>
                      <span>{geo.percentage}%</span>
                    </div>
                    <Progress value={geo.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Operational Metrics & Booking Patterns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Operational Efficiency */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Operational Efficiency Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Check-in Time</span>
                    <span className="text-sm font-bold">2.3 min</span>
                  </div>
                  <Progress value={85} className="h-2 mb-1" />
                  <div className="text-sm text-muted-foreground">15% faster than target</div>
                </div>

                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Room Turnover</span>
                    <span className="text-sm font-bold">28 min</span>
                  </div>
                  <Progress value={92} className="h-2 mb-1" />
                  <div className="text-sm text-muted-foreground">Exceeding industry standard</div>
                </div>

                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Staff Productivity</span>
                    <span className="text-sm font-bold">94%</span>
                  </div>
                  <Progress value={94} className="h-2 mb-1" />
                  <div className="text-sm text-muted-foreground">Optimal efficiency range</div>
                </div>

                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Guest Request Response</span>
                    <span className="text-sm font-bold">3.2 min</span>
                  </div>
                  <Progress value={88} className="h-2 mb-1" />
                  <div className="text-sm text-muted-foreground">Within service standards</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Booking Patterns */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Booking Patterns & Forecasting
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="text-sm font-medium">Advance Booking Window</div>
                {[
                  { period: "Same Day", bookings: 8, percentage: 8 },
                  { period: "1-7 Days", bookings: 25, percentage: 25 },
                  { period: "8-30 Days", bookings: 35, percentage: 35 },
                  { period: "31-60 Days", bookings: 20, percentage: 20 },
                  { period: "60+ Days", bookings: 12, percentage: 12 }
                ].map((booking) => (
                  <div key={booking.period} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{booking.period}</span>
                      <span>{booking.percentage}%</span>
                    </div>
                    <Progress value={booking.percentage} className="h-1.5" />
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-3">
                <div className="text-sm font-medium">Channel Performance</div>
                {[
                  { channel: "Direct Bookings", share: 42, trend: "+5%" },
                  { channel: "Booking.com", share: 28, trend: "+2%" },
                  { channel: "Expedia", share: 18, trend: "-1%" },
                  { channel: "Other OTAs", share: 12, trend: "+3%" }
                ].map((channel) => (
                  <div key={channel.channel} className="flex items-center justify-between p-2 border rounded">
                    <span className="text-sm">{channel.channel}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">{channel.share}%</span>
                      <Badge 
                        variant={channel.trend.startsWith('+') ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {channel.trend}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="w-full">
                Generate Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  )
}
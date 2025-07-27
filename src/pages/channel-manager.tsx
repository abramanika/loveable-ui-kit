import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  Globe, 
  Wifi, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  Calendar
} from "lucide-react"

export default function ChannelManagerPage() {
  return (
    <AppShell>
      <div className="space-y-6 bg-background min-h-full">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-display font-bold text-foreground">
            Channel Manager
          </h1>
          <p className="text-muted-foreground">
            Sync room availability and rates across all OTA channels to prevent overbooking and maximize revenue
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Connected Channels</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sync Status</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98.5%</div>
              <p className="text-xs text-muted-foreground">Successful sync rate</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rate Updates</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">247</div>
              <p className="text-xs text-muted-foreground">Today</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Channel Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$28,450</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>

        {/* Channel Management Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Channel Status & Performance */}
          <Card className="xl:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wifi className="h-5 w-5" />
                Channel Status & Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  { name: "Booking.com", status: "active", revenue: "$12,450", bookings: 28, sync: 100 },
                  { name: "Expedia", status: "active", revenue: "$8,920", bookings: 19, sync: 98 },
                  { name: "Airbnb", status: "active", revenue: "$4,850", bookings: 12, sync: 95 },
                  { name: "Hotels.com", status: "warning", revenue: "$2,230", bookings: 8, sync: 87 },
                  { name: "Agoda", status: "active", revenue: "$1,680", bookings: 6, sync: 100 }
                ].map((channel) => (
                  <div key={channel.name} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <div>
                        <div className="font-medium">{channel.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {channel.bookings} bookings • {channel.revenue}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <div className="text-sm font-medium">{channel.sync}%</div>
                        <div className="text-xs text-muted-foreground">Sync rate</div>
                      </div>
                      <Badge variant={channel.status === "active" ? "default" : "destructive"}>
                        {channel.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Rate & Availability Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Rate & Availability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Standard Room</span>
                    <Badge variant="outline">56 available</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    Rate: $159/night
                  </div>
                  <Progress value={75} className="h-2" />
                  <div className="text-xs text-muted-foreground mt-1">75% occupancy</div>
                </div>

                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Deluxe Suite</span>
                    <Badge variant="outline">12 available</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    Rate: $289/night
                  </div>
                  <Progress value={85} className="h-2" />
                  <div className="text-xs text-muted-foreground mt-1">85% occupancy</div>
                </div>

                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Executive Room</span>
                    <Badge variant="destructive">3 available</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    Rate: $219/night
                  </div>
                  <Progress value={92} className="h-2" />
                  <div className="text-xs text-muted-foreground mt-1">92% occupancy</div>
                </div>
              </div>

              <Button className="w-full">
                Update All Rates
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sync Alerts & Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Sync Alerts & Required Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                {
                  type: "warning",
                  message: "Hotels.com sync failed for room rates - requires manual update",
                  time: "2 hours ago",
                  action: "Retry Sync"
                },
                {
                  type: "info",
                  message: "New booking from Expedia requires inventory adjustment",
                  time: "30 minutes ago",
                  action: "Update Inventory"
                },
                {
                  type: "success",
                  message: "All channels successfully synced with latest availability",
                  time: "15 minutes ago",
                  action: "View Details"
                }
              ].map((alert, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      alert.type === "warning" ? "bg-yellow-500" :
                      alert.type === "info" ? "bg-blue-500" : "bg-green-500"
                    }`} />
                    <div>
                      <div className="font-medium">{alert.message}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {alert.time}
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    {alert.action}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  )
}
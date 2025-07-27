import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  MessageSquare, 
  Smartphone, 
  QrCode,
  Star,
  Users,
  Bell,
  Zap,
  Clock
} from "lucide-react"

export default function GuestExperiencePage() {
  return (
    <AppShell>
      <div className="space-y-6 bg-background min-h-full">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-display font-bold text-foreground">
            Guest Experience & Communication
          </h1>
          <p className="text-muted-foreground">
            Enhance guest satisfaction through digital communication tools, mobile services, and personalized experiences
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Guest Satisfaction</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.7/5</div>
              <p className="text-xs text-muted-foreground">+0.2 this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Chats</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">6 pending response</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Mobile Check-ins</CardTitle>
              <Smartphone className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <p className="text-xs text-muted-foreground">+12% adoption</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Response Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.2m</div>
              <p className="text-xs text-muted-foreground">Average response</p>
            </CardContent>
          </Card>
        </div>

        {/* Communication Channels & Mobile Services */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Communication Channels */}
          <Card className="xl:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Communication Channels & Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 border rounded-lg text-center">
                  <div className="text-lg font-bold">89</div>
                  <div className="text-sm text-muted-foreground">Messages Today</div>
                </div>
                <div className="p-3 border rounded-lg text-center">
                  <div className="text-lg font-bold">96%</div>
                  <div className="text-sm text-muted-foreground">Response Rate</div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { channel: "WhatsApp", messages: 42, percentage: 47, response: "2.1m" },
                  { channel: "In-App Chat", messages: 28, percentage: 31, response: "1.8m" },
                  { channel: "SMS", messages: 12, percentage: 13, response: "4.2m" },
                  { channel: "Email", messages: 5, percentage: 6, response: "45m" },
                  { channel: "Voice Calls", messages: 2, percentage: 3, response: "12s" }
                ].map((channel) => (
                  <div key={channel.channel} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{channel.channel}</span>
                      <span className="text-muted-foreground">
                        {channel.messages} messages • {channel.response} avg response
                      </span>
                    </div>
                    <Progress value={channel.percentage} className="h-2" />
                  </div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <Button variant="outline" size="sm">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Chat Center
                </Button>
                <Button variant="outline" size="sm">
                  <Bell className="h-4 w-4 mr-1" />
                  Notifications
                </Button>
                <Button variant="outline" size="sm">
                  <Users className="h-4 w-4 mr-1" />
                  Broadcasts
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Mobile & Digital Services */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                Mobile Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Mobile Check-in</span>
                    <Badge variant="default">78% adoption</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    156 guests used mobile check-in today
                  </div>
                </div>

                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Digital Room Keys</span>
                    <Badge variant="default">Active</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    142 active mobile keys
                  </div>
                </div>

                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">QR Menus</span>
                    <Badge variant="default">Live</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    89 menu scans today
                  </div>
                </div>

                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Guest App</span>
                    <Badge variant="outline">4.6★ rated</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    67% of guests downloaded
                  </div>
                </div>
              </div>

              <Button className="w-full">
                <QrCode className="h-4 w-4 mr-2" />
                Generate QR Codes
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Guest Requests & Feedback */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Active Guest Requests */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Active Guest Requests
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  {
                    room: "301",
                    guest: "Sarah Johnson",
                    request: "Extra towels and pillows",
                    time: "5 min ago",
                    priority: "normal",
                    status: "assigned"
                  },
                  {
                    room: "458",
                    guest: "Michael Chen",
                    request: "Room temperature too cold",
                    time: "12 min ago",
                    priority: "high",
                    status: "in-progress"
                  },
                  {
                    room: "522",
                    guest: "Emma Wilson",
                    request: "Late checkout until 2 PM",
                    time: "18 min ago",
                    priority: "normal",
                    status: "pending"
                  },
                  {
                    room: "234",
                    guest: "David Kumar",
                    request: "Restaurant reservation for 2",
                    time: "25 min ago",
                    priority: "normal",
                    status: "completed"
                  },
                  {
                    room: "687",
                    guest: "Lisa Anderson",
                    request: "WiFi connection issues",
                    time: "32 min ago",
                    priority: "high",
                    status: "assigned"
                  }
                ].map((request, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        request.status === "completed" ? "bg-green-500" :
                        request.status === "in-progress" ? "bg-blue-500" :
                        request.status === "assigned" ? "bg-yellow-500" : "bg-gray-500"
                      }`} />
                      <div>
                        <div className="font-medium text-sm">
                          Room {request.room} - {request.guest}
                        </div>
                        <div className="text-sm text-muted-foreground">{request.request}</div>
                        <div className="text-xs text-muted-foreground">{request.time}</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                      <Badge 
                        variant={request.priority === "high" ? "destructive" : "secondary"}
                        className="text-xs"
                      >
                        {request.priority}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {request.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Guest Feedback & Reviews */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Recent Feedback & Reviews
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  {
                    guest: "Sarah Johnson",
                    rating: 5,
                    comment: "Exceptional service! The staff went above and beyond.",
                    time: "2 hours ago",
                    source: "Google"
                  },
                  {
                    guest: "Michael Chen",
                    rating: 4,
                    comment: "Great location and clean rooms. Minor noise from hallway.",
                    time: "6 hours ago",
                    source: "Booking.com"
                  },
                  {
                    guest: "Emma Wilson",
                    rating: 5,
                    comment: "Love the mobile check-in feature! Very convenient.",
                    time: "1 day ago",
                    source: "TripAdvisor"
                  },
                  {
                    guest: "David Kumar",
                    rating: 3,
                    comment: "Good stay but WiFi was slow in my room.",
                    time: "2 days ago",
                    source: "Expedia"
                  }
                ].map((feedback, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-medium text-sm">{feedback.guest}</div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-3 w-3 ${
                                i < feedback.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`} 
                            />
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-xs">
                          {feedback.source}
                        </Badge>
                        <div className="text-xs text-muted-foreground mt-1">
                          {feedback.time}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      "{feedback.comment}"
                    </div>
                  </div>
                ))}
              </div>

              <Button className="w-full">
                <Star className="h-4 w-4 mr-2" />
                Review Management
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  )
}
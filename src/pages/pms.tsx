import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, MapPin } from "lucide-react"

const PMSPage = () => {
  return (
    <AppShell>
      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-display font-bold">Property Management System</h1>
          <p className="text-muted-foreground">Manage reservations, room assignments, and guest services</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Reservations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Manage bookings and availability</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Room Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Room assignments and status</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Guest Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Guest profiles and preferences</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  )
}

export default PMSPage
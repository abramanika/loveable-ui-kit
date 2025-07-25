import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, CheckCircle, AlertTriangle } from "lucide-react"

const HousekeepingPage = () => {
  return (
    <AppShell>
      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-display font-bold">Housekeeping Management</h1>
          <p className="text-muted-foreground">Room status, task management, and staff coordination</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-pink-400" />
                Task Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Room cleaning schedules and checklists</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-pink-400" />
                Room Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Real-time room condition tracking</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-pink-400" />
                Maintenance Requests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Issue reporting and repair tracking</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  )
}

export default HousekeepingPage
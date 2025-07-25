import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wifi, Globe, BarChart3 } from "lucide-react"

const OTAPage = () => {
  return (
    <AppShell>
      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-display font-bold">Online Travel Agency</h1>
          <p className="text-muted-foreground">Channel management and distribution</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-cyan-400" />
                Channel Manager
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Sync rates across booking platforms</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-cyan-400" />
                Rate Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Dynamic pricing and availability</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wifi className="h-5 w-5 text-cyan-400" />
                Booking Engine
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Direct booking website integration</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  )
}

export default OTAPage
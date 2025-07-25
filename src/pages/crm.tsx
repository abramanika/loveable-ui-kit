import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageCircle, TrendingUp } from "lucide-react"

const CRMPage = () => {
  return (
    <AppShell>
      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-display font-bold">Customer Relationship Management</h1>
          <p className="text-muted-foreground">Manage guest relationships and marketing campaigns</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-400" />
                Guest Profiles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Comprehensive guest history and preferences</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-purple-400" />
                Communication Hub
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Email campaigns and guest messaging</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-400" />
                Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Guest behavior and revenue insights</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  )
}

export default CRMPage
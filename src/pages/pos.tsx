import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Receipt, CreditCard } from "lucide-react"

const POSPage = () => {
  return (
    <AppShell>
      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-display font-bold">Point of Sale</h1>
          <p className="text-muted-foreground">Restaurant, bar, and retail sales management</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-orange-400" />
                Menu Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Digital menus and inventory tracking</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Receipt className="h-5 w-5 text-orange-400" />
                Order Processing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Kitchen display and order management</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-orange-400" />
                Payment Processing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Integrated payment and billing</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  )
}

export default POSPage
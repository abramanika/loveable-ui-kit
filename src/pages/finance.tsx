import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, PieChart, FileText } from "lucide-react"

const FinancePage = () => {
  return (
    <AppShell>
      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-display font-bold">Financial Management</h1>
          <p className="text-muted-foreground">Accounting, reporting, and financial analytics</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-emerald-400" />
                Accounting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">General ledger and expense tracking</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-emerald-400" />
                Revenue Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Performance metrics and forecasting</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-emerald-400" />
                Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Financial statements and tax reports</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  )
}

export default FinancePage
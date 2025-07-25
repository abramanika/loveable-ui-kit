import { useState } from "react"
import { Outlet } from "react-router-dom"
import { LeftRail } from "./left-rail"
import { TopBar } from "./top-bar"
import { cn } from "@/lib/utils"

interface AppShellProps {
  children?: React.ReactNode
}

export function AppShell({ children }: AppShellProps) {
  const [isRailCollapsed, setIsRailCollapsed] = useState(false)

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Left Navigation Rail */}
      <LeftRail 
        isCollapsed={isRailCollapsed}
        onToggleCollapse={() => setIsRailCollapsed(!isRailCollapsed)}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <TopBar />
        
        {/* Page Content */}
        <main className="flex-1 overflow-hidden">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  )
}
import { useState } from "react"
import { Search, Bell, User, Command } from "lucide-react"
import { IconButton } from "@/components/ui/icon-button"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CommandPalette } from "@/components/ui/command-palette"
import { NotificationsPanel } from "@/components/ui/notifications-panel"

export function TopBar() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false)
  return (
    <header className="h-16 bg-background border-b border-border flex items-center justify-between px-6">
      {/* Search & Command Palette */}
      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          className="w-80 justify-start text-muted-foreground hover:bg-accent"
          onClick={() => setCommandPaletteOpen(true)}
        >
          <Search className="h-4 w-4 mr-2" />
          <span className="flex-1 text-left">Search hotels, guests, reservations...</span>
          <div className="flex items-center space-x-1 ml-auto">
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              <Command className="h-3 w-3" />
              K
            </kbd>
          </div>
        </Button>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <NotificationsPanel />

        {/* User Menu */}
        <div className="flex items-center space-x-3">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-medium">Sarah Chen</div>
            <div className="text-xs text-muted-foreground">Front Desk Manager</div>
          </div>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatars/sarah-chen.jpg" alt="Sarah Chen" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </div>
      </div>
      
      {/* Command Palette */}
      <CommandPalette 
        open={commandPaletteOpen}
        onOpenChange={setCommandPaletteOpen}
      />
    </header>
  )
}
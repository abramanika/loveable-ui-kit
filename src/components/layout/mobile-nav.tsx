import { useLocation, Link } from "react-router-dom"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Calendar, 
  Globe, 
  Users, 
  UtensilsCrossed, 
  Wifi, 
  Sparkles, 
  TrendingUp, 
  CreditCard,
  MessageSquare,
  BarChart3,
  KeyRound,
  Brain,
  X
} from "lucide-react"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const location = useLocation()
  
  const navigationItems = [
    {
      name: "PMS",
      href: "/pms",
      icon: Calendar,
      color: "text-blue-400",
      description: "Property management system"
    },
    {
      name: "Channel Manager",
      href: "/channel-manager",
      icon: Globe,
      color: "text-green-400",
      description: "OTA sync & distribution"
    },
    {
      name: "Booking Engine",
      href: "/booking-engine",
      icon: Wifi,
      color: "text-purple-400",
      description: "Direct bookings"
    },
    {
      name: "Revenue Management",
      href: "/revenue-management",
      icon: TrendingUp,
      color: "text-orange-400",
      description: "Dynamic pricing"
    },
    {
      name: "CRM",
      href: "/crm",
      icon: Users,
      color: "text-cyan-400",
      description: "Guest relations"
    },
    {
      name: "Guest Intelligence",
      href: "/guest-intelligence",
      icon: Brain,
      color: "text-violet-400",
      description: "AI-powered guest insights"
    },
    {
      name: "POS System",
      href: "/pos",
      icon: UtensilsCrossed,
      color: "text-pink-400",
      description: "Point of sale"
    },
    {
      name: "Housekeeping",
      href: "/housekeeping",
      icon: Sparkles,
      color: "text-emerald-400",
      description: "Room operations"
    },
    {
      name: "Payment Gateway",
      href: "/payment-gateway",
      icon: CreditCard,
      color: "text-yellow-400",
      description: "Secure payments"
    },
    {
      name: "Guest Experience",
      href: "/guest-experience",
      icon: MessageSquare,
      color: "text-indigo-400",
      description: "Communication tools"
    },
    {
      name: "Analytics",
      href: "/analytics",
      icon: BarChart3,
      color: "text-red-400",
      description: "Business intelligence"
    },
    {
      name: "Access Control",
      href: "/access-control",
      icon: KeyRound,
      color: "text-gray-400",
      description: "Mobile key systems"
    }
  ]

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-80 p-0">
        <SheetHeader className="p-6 pb-3 border-b border-border">
          <div className="flex items-center justify-between">
            <div>
              <SheetTitle className="text-xl font-display font-bold">
                Symphonia
              </SheetTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Hospitality Platform
              </p>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </SheetHeader>
        
        <ScrollArea className="flex-1 px-3">
          <div className="space-y-1 py-4">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname.startsWith(item.href)
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={onClose}
                  className={`
                    flex items-center gap-3 px-3 py-3 rounded-lg transition-all
                    ${isActive 
                      ? 'bg-primary/10 text-primary border border-primary/20' 
                      : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
                    }
                  `}
                >
                  <div className={`p-2 rounded-md ${isActive ? 'bg-primary/20' : 'bg-muted'}`}>
                    <Icon className={`h-4 w-4 ${isActive ? 'text-primary' : item.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{item.name}</div>
                    <div className="text-xs text-muted-foreground">{item.description}</div>
                  </div>
                  {isActive && (
                    <Badge variant="default" className="text-xs">
                      Active
                    </Badge>
                  )}
                </Link>
              )
            })}
          </div>
        </ScrollArea>
        
        <div className="border-t border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium text-primary">SC</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm">Sarah Chen</div>
              <div className="text-xs text-muted-foreground">Hotel Manager</div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
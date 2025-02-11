import { Bell, MessageSquare, LayoutDashboard, FileWarning } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import { ActiveDeliveriesList } from "./components/active-deliveries-list"
import { TruckStatus } from "./components/truck-status"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mockDriver, mockOrders, mockTruckStatus } from "./mockData"
import { ComplaintsManagement } from "./components/complaints-management"

export default function DriverDashboard() {
  const [currentView, setCurrentView] = useState<"dashboard" | "complaints">("dashboard")

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">Driver Portal</h2>
        </div>
        <nav className="mt-6">
          <Button
            variant={currentView === "dashboard" ? "default" : "ghost"}
            className="w-full justify-start px-4 py-2 text-left"
            onClick={() => setCurrentView("dashboard")}
          >
            <LayoutDashboard className="mr-2 h-5 w-5" />
            Dashboard
          </Button>
          <Button
            variant={currentView === "complaints" ? "default" : "ghost"}
            className="w-full justify-start px-4 py-2 text-left"
            onClick={() => setCurrentView("complaints")}
          >
            <FileWarning className="mr-2 h-5 w-5" />
            Complaints
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {currentView === "dashboard" ? "Driver Dashboard" : "Complaints Management"}
            </h1>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-5 w-5" />
              </Button>
              <div className="flex items-center space-x-2">
                <Image
                  src={mockDriver.profilePicture || "/placeholder.svg"}
                  alt="Driver profile"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">{mockDriver.name}</p>
                  <p className="text-xs text-gray-500">{mockDriver.status}</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            {currentView === "dashboard" ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="col-span-2">
                  <CardHeader>
                    <CardTitle>Active Deliveries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ActiveDeliveriesList orders={mockOrders} />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Truck Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <TruckStatus truck={mockTruckStatus} />
                  </CardContent>
                </Card>
              </div>
            ) : (
              <ComplaintsManagement />
            )}
          </div>
        </main>
      </div>
    </div>
  )
}


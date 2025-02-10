import { Bell, MessageSquare } from "lucide-react"
import Image from "next/image"

import { ActiveDeliveriesList } from "./components/active-deliveries-list"
import { TruckStatus } from "./components/truck-status"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mockDriver, mockOrders, mockTruckStatus } from "./mockData"

export default function DriverDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Driver Dashboard</h1>
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
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
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
          </div>
        </div>
      </main>
    </div>
  )
}


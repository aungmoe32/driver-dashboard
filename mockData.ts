export const mockOrders = [
  {
    id: "O001",
    customerName: "ABC Corp",
    deliveryAddress: "123 Main St, City A",
    status: "In Transit",
    truckAssigned: "T001",
    eta: "12:30 PM",
  },
  {
    id: "O002",
    customerName: "XYZ Ltd.",
    deliveryAddress: "456 Oak Rd, City B",
    status: "Pending",
    truckAssigned: "T003",
    eta: "2:00 PM",
  },
  {
    id: "O003",
    customerName: "LMN Inc.",
    deliveryAddress: "789 Pine Ave, City C",
    status: "Delivered",
    truckAssigned: "T002",
    eta: "11:45 AM",
  },
]

export const mockTruckStatus = {
  id: "T001",
  type: "Small Van",
  status: "In Use",
  capacity: "1000 kg",
}

export const mockDriver = {
  name: "John Doe",
  status: "In Transit",
  profilePicture: "/placeholder.svg?height=40&width=40",
}


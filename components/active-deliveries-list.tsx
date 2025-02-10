import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface Order {
  id: string
  customerName: string
  deliveryAddress: string
  status: string
  truckAssigned: string
  eta: string
}

interface ActiveDeliveriesListProps {
  orders: Order[]
}

export function ActiveDeliveriesList({ orders }: ActiveDeliveriesListProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Truck</TableHead>
          <TableHead>ETA</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.customerName}</TableCell>
            <TableCell>{order.deliveryAddress}</TableCell>
            <TableCell>
              <Badge
                variant={
                  order.status === "Delivered" ? "success" : order.status === "In Transit" ? "warning" : "default"
                }
              >
                {order.status}
              </Badge>
            </TableCell>
            <TableCell>{order.truckAssigned}</TableCell>
            <TableCell>{order.eta}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}


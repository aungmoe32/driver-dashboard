import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, X, AlertTriangle, Package } from "lucide-react"
import { mockComplaints } from "../mockData"

interface Complaint {
  id: string
  type: "Wrong Item" | "Faulty" | "Damaged"
  status: "Pending" | "In Progress" | "Resolved"
  orderNumber: string
  customerName: string
  description: string
  pickupLocation?: string
}

export function ComplaintsManagement() {
  const [complaints, setComplaints] = useState<Complaint[]>(mockComplaints)
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(null)

  const handleStatusUpdate = (id: string, newStatus: Complaint["status"]) => {
    setComplaints(
      complaints.map((complaint) => (complaint.id === id ? { ...complaint, status: newStatus } : complaint)),
    )
  }

  const getStatusBadge = (status: Complaint["status"]) => {
    switch (status) {
      case "Pending":
        return <Badge variant="secondary">Pending</Badge>
      case "In Progress":
        return <Badge variant="warning">In Progress</Badge>
      case "Resolved":
        return <Badge variant="success">Resolved</Badge>
    }
  }

  const getTypeIcon = (type: Complaint["type"]) => {
    switch (type) {
      case "Wrong Item":
        return <X className="h-5 w-5 text-red-500" />
      case "Faulty":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      case "Damaged":
        return <Package className="h-5 w-5 text-blue-500" />
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Complaints</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Order</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {complaints.map((complaint) => (
              <TableRow key={complaint.id}>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    {getTypeIcon(complaint.type)}
                    <span>{complaint.type}</span>
                  </div>
                </TableCell>
                <TableCell>{complaint.orderNumber}</TableCell>
                <TableCell>{complaint.customerName}</TableCell>
                <TableCell>{getStatusBadge(complaint.status)}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => setSelectedComplaint(complaint)}>
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Complaint Details</DialogTitle>
                      </DialogHeader>
                      {selectedComplaint && (
                        <div className="space-y-4">
                          <p>
                            <strong>Order:</strong> {selectedComplaint.orderNumber}
                          </p>
                          <p>
                            <strong>Customer:</strong> {selectedComplaint.customerName}
                          </p>
                          <p>
                            <strong>Type:</strong> {selectedComplaint.type}
                          </p>
                          <p>
                            <strong>Description:</strong> {selectedComplaint.description}
                          </p>
                          {selectedComplaint.pickupLocation && (
                            <p>
                              <strong>Pickup Location:</strong> {selectedComplaint.pickupLocation}
                            </p>
                          )}
                          <div className="flex space-x-2">
                            <Button onClick={() => handleStatusUpdate(selectedComplaint.id, "In Progress")}>
                              Accept
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => handleStatusUpdate(selectedComplaint.id, "Resolved")}
                            >
                              Mark as Resolved
                            </Button>
                          </div>
                          <div className="border-t pt-4">
                            <h4 className="font-semibold mb-2">Communication</h4>
                            <div className="flex items-center space-x-2 mb-2">
                              <MessageSquare className="h-5 w-5" />
                              <span>Chat with Sales/Warehouse</span>
                            </div>
                            <Textarea placeholder="Type your message here..." />
                            <Button className="mt-2">Send Message</Button>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}


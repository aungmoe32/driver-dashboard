interface TruckStatusProps {
  truck: {
    id: string
    type: string
    status: string
    capacity: string
  }
}

export function TruckStatus({ truck }: TruckStatusProps) {
  return (
    <div className="space-y-2">
      <p>
        <strong>Truck ID:</strong> {truck.id}
      </p>
      <p>
        <strong>Type:</strong> {truck.type}
      </p>
      <p>
        <strong>Status:</strong> {truck.status}
      </p>
      <p>
        <strong>Capacity:</strong> {truck.capacity}
      </p>
    </div>
  )
}


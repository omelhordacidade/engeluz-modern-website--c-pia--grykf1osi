import pb from '@/lib/pocketbase/client'

export const createMaintenanceSubmission = (data: {
  municipality: string
  request_type: string
  location_link?: string
  details?: string
  requester_name: string
  cpf: string
  email: string
  phone: string
  address: string
  reference_point?: string
  pole_id?: string
}) => {
  return pb.collection('maintenance_submissions').create(data)
}

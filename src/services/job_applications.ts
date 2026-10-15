import pb from '@/lib/pocketbase/client'

export type JobApplicationInput = {
  full_name: string
  birth_date: string
  marital_status: string
  gender: string
  phone: string
  email: string
  city_state: string
  education_level: string
  additional_courses?: string
  drivers_license: string
  area_interest: string
  salary_expectation: number
  professional_experience: string
  status?: string
  internal_notes?: string
}

export const updateJobApplication = async (
  id: string,
  data: Partial<JobApplicationInput>,
  userId?: string,
) => {
  if (userId && (data.status || data.internal_notes !== undefined)) {
    const original = await pb.collection('job_applications').getOne(id)
    const actions = []

    if (data.status && data.status !== original.status) {
      actions.push(`Alterou o status para '${data.status}'`)
    }

    if (data.internal_notes !== undefined && data.internal_notes !== original.internal_notes) {
      actions.push(`Atualizou as notas internas`)
    }

    if (actions.length > 0) {
      try {
        await pb.collection('application_logs').create({
          user: userId,
          application: id,
          action: actions.join(' e '),
        })
      } catch (err) {
        console.warn('Falha ao salvar log de auditoria', err)
      }
    }
  }

  return pb.collection('job_applications').update(id, data)
}

export const getApplicationLogs = (applicationId: string) => {
  return pb
    .collection('application_logs')
    .getFullList({ filter: `application="${applicationId}"`, sort: '-created', expand: 'user' })
}

export const createJobApplication = async (data: JobApplicationInput) => {
  const payload = { ...data, status: data.status || 'Recebido' }
  const record = await pb.collection('job_applications').create(payload)
  try {
    await pb.send('/backend/v1/send-application-email', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.warn('Failed to trigger email hook, but application saved.', err)
  }
  return record
}

export const getJobApplications = () => {
  return pb.collection('job_applications').getFullList({ sort: '-created' })
}

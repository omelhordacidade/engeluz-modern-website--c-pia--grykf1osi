routerAdd('POST', '/backend/v1/send-application-email', (e) => {
  const body = e.requestInfo().body || {}

  const collection = $app.findCollectionByNameOrId('job_applications')
  const record = new Record(collection)

  const fields = [
    'full_name',
    'birth_date',
    'marital_status',
    'gender',
    'phone',
    'email',
    'city_state',
    'education_level',
    'additional_courses',
    'drivers_license',
    'area_interest',
    'salary_expectation',
    'professional_experience',
  ]

  for (const field of fields) {
    if (body[field] !== undefined) {
      record.set(field, body[field])
    }
  }

  try {
    $app.save(record)
  } catch (err) {
    $app.logger().error('Error saving job application', 'error', err.message)
    throw new BadRequestError('Dados inválidos. Verifique as informações enviadas.')
  }

  const notificationEmail = 'sac.iluminacao@engeluz.com.br'

  $app
    .logger()
    .info(
      'Sending application notification',
      'recipient',
      notificationEmail,
      'applicant',
      body.email,
    )

  // Future integration point for actual email delivery
  // e.g., $http.send({ url: '...', method: 'POST', body: { to: notificationEmail, ... } })

  return e.json(200, { success: true, message: 'Application received successfully' })
})

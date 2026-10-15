migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('job_applications')

    // Truncate existing records to avoid failing validation on the new required fields
    app.truncateCollection(col)

    // Update email field to be required
    const emailField = col.fields.getByName('email')
    if (emailField) {
      emailField.required = true
    }

    // Remove fields that will be replaced
    const fieldsToRemove = ['area_of_interest', 'salary_expectation', 'work_experience']
    for (const name of fieldsToRemove) {
      const f = col.fields.getByName(name)
      if (f) col.fields.removeById(f.id)
    }

    // Add the new fields
    if (!col.fields.getByName('area_interest')) {
      col.fields.add(new TextField({ name: 'area_interest', required: true }))
    }
    if (!col.fields.getByName('salary_expectation')) {
      col.fields.add(new NumberField({ name: 'salary_expectation', required: true }))
    }
    if (!col.fields.getByName('professional_experience')) {
      col.fields.add(new TextField({ name: 'professional_experience', required: true }))
    }

    // Create indexes
    col.addIndex('idx_job_applications_email', false, 'email', '')
    col.addIndex('idx_job_applications_area_interest', false, 'area_interest', '')

    app.save(col)
  },
  (app) => {
    // Down migration left empty for simplicity
  },
)

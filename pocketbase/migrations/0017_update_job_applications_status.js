migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('job_applications')

    col.fields.add(
      new SelectField({
        name: 'status',
        values: ['Recebido', 'Em Análise', 'Entrevista Agendada'],
        maxSelect: 1,
        required: false,
      }),
    )

    col.updateRule = "@request.auth.id != ''"
    app.save(col)

    // Set default value for existing records
    app
      .db()
      .newQuery(
        "UPDATE job_applications SET status = 'Recebido' WHERE status IS NULL OR status = ''",
      )
      .execute()

    // Make the field required after updating existing records
    const updatedCol = app.findCollectionByNameOrId('job_applications')
    const statusField = updatedCol.fields.getByName('status')
    statusField.required = true
    app.save(updatedCol)
  },
  (app) => {
    const col = app.findCollectionByNameOrId('job_applications')
    col.fields.removeByName('status')
    col.updateRule = null
    app.save(col)
  },
)

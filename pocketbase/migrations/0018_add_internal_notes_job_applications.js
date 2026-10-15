migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('job_applications')
    col.fields.add(new TextField({ name: 'internal_notes' }))
    app.save(col)
  },
  (app) => {
    const col = app.findCollectionByNameOrId('job_applications')
    col.fields.removeByName('internal_notes')
    app.save(col)
  },
)

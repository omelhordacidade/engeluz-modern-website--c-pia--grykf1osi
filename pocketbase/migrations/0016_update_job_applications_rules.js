migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('job_applications')
    col.listRule = "@request.auth.id != ''"
    col.viewRule = "@request.auth.id != ''"
    app.save(col)
  },
  (app) => {
    const col = app.findCollectionByNameOrId('job_applications')
    col.listRule = null
    col.viewRule = null
    app.save(col)
  },
)

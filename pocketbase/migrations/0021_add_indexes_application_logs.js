migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('application_logs')
    col.addIndex('idx_app_logs_app', false, 'application', '')
    col.addIndex('idx_app_logs_user', false, 'user', '')
    app.save(col)
  },
  (app) => {
    const col = app.findCollectionByNameOrId('application_logs')
    col.removeIndex('idx_app_logs_app')
    col.removeIndex('idx_app_logs_user')
    app.save(col)
  },
)

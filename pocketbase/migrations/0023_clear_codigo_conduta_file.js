migrate(
  (app) => {
    try {
      const record = app.findFirstRecordByData('integrity_documents', 'slug', 'codigo-conduta')
      record.set('file', null)
      app.save(record)
    } catch (_) {}
  },
  (app) => {
    // Irreversible without the old file content
  },
)

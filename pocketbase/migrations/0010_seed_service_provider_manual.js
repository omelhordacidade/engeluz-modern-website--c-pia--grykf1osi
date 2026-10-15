migrate(
  (app) => {
    const collection = app.findCollectionByNameOrId('integrity_documents')

    try {
      app.findFirstRecordByData('integrity_documents', 'slug', 'manual-prestadores-servico')
      return
    } catch (_) {}

    const record = new Record(collection)
    record.set('name', 'Manual de Prestadores de Serviço')
    record.set('slug', 'manual-prestadores-servico')
    app.save(record)
  },
  (app) => {
    try {
      const record = app.findFirstRecordByData(
        'integrity_documents',
        'slug',
        'manual-prestadores-servico',
      )
      app.delete(record)
    } catch (_) {}
  },
)

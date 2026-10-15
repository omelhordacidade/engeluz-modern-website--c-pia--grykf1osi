migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('integrity_documents')

    const docs = [
      { name: 'Código de Conduta', slug: 'codigo-de-conduta' },
      { name: 'Organograma', slug: 'organograma' },
      { name: 'Igualdade Salarial', slug: 'igualdade-salarial' },
    ]

    for (const data of docs) {
      try {
        const record = app.findFirstRecordByData('integrity_documents', 'slug', data.slug)
        record.set('name', data.name)
        app.save(record)
      } catch (_) {
        const record = new Record(col)
        record.set('name', data.name)
        record.set('slug', data.slug)
        app.save(record)
      }
    }
  },
  (app) => {
    // no-op down
  },
)

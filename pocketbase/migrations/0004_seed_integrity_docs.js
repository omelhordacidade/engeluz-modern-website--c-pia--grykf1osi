migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('integrity_documents')

    const docs = [
      { name: 'Código de Conduta', slug: 'codigo-de-conduta' },
      { name: 'Organograma', slug: 'organograma' },
      { name: 'Igualdade Salarial', slug: 'igualdade-salarial' },
    ]

    for (const doc of docs) {
      try {
        app.findFirstRecordByData('integrity_documents', 'slug', doc.slug)
        // already exists, skip
      } catch (_) {
        const record = new Record(col)
        record.set('name', doc.name)
        record.set('slug', doc.slug)
        app.save(record)
      }
    }
  },
  (app) => {
    const slugs = ['codigo-de-conduta', 'organograma', 'igualdade-salarial']
    for (const slug of slugs) {
      try {
        const record = app.findFirstRecordByData('integrity_documents', 'slug', slug)
        app.delete(record)
      } catch (_) {}
    }
  },
)

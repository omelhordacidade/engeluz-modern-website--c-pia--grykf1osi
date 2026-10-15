migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('integrity_documents')

    // Remove the old 'codigo-conduta' if it exists to prevent duplication or confusion
    try {
      const old = app.findFirstRecordByData('integrity_documents', 'slug', 'codigo-conduta')
      app.delete(old)
    } catch (_) {}

    const docs = [
      { name: 'Código de Conduta', slug: 'codigo-de-conduta' },
      { name: 'Organograma', slug: 'organograma' },
      { name: 'Igualdade Salarial', slug: 'igualdade-salarial' },
    ]

    for (const doc of docs) {
      try {
        app.findFirstRecordByData('integrity_documents', 'slug', doc.slug)
      } catch (_) {
        const record = new Record(col)
        record.set('name', doc.name)
        record.set('slug', doc.slug)
        app.save(record)
      }
    }
  },
  (app) => {
    try {
      const r1 = app.findFirstRecordByData('integrity_documents', 'slug', 'codigo-de-conduta')
      app.delete(r1)
    } catch (_) {}
    try {
      const r2 = app.findFirstRecordByData('integrity_documents', 'slug', 'organograma')
      app.delete(r2)
    } catch (_) {}
    try {
      const r3 = app.findFirstRecordByData('integrity_documents', 'slug', 'igualdade-salarial')
      app.delete(r3)
    } catch (_) {}
  },
)

migrate(
  (app) => {
    const docs = [
      { name: 'Código de Conduta', slug: 'codigo-conduta' },
      { name: 'Organograma', slug: 'organograma' },
      { name: 'Igualdade Salarial', slug: 'igualdade-salarial' },
      { name: 'Manual de Prestadores de Serviço', slug: 'manual-prestadores' },
    ]

    const col = app.findCollectionByNameOrId('integrity_documents')

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
    const slugs = ['codigo-conduta', 'organograma', 'igualdade-salarial', 'manual-prestadores']
    for (const slug of slugs) {
      try {
        const record = app.findFirstRecordByData('integrity_documents', 'slug', slug)
        app.delete(record)
      } catch (_) {}
    }
  },
)

migrate((app) => {
  const col = app.findCollectionByNameOrId('integrity_documents')
  // Ensure public access is enabled so files can be fetched securely by users
  col.listRule = ''
  col.viewRule = ''
  app.save(col)

  const docs = [
    { name: 'Código de Conduta', slug: 'codigo-de-conduta' },
    { name: 'Organograma', slug: 'organograma' },
    { name: 'Igualdade Salarial', slug: 'igualdade-salarial' },
  ]

  for (const doc of docs) {
    let record
    try {
      record = app.findFirstRecordByData('integrity_documents', 'slug', doc.slug)
    } catch (_) {
      record = new Record(col)
      record.set('name', doc.name)
      record.set('slug', doc.slug)
      // We rely on the frontend fallback to serve the imported PDF assets
      // when no file is present since migrations cannot read the local Vite dev assets.
      app.save(record)
    }
  }
})

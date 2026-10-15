migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('integrity_documents')

    // Ensure public access for fetching documents without auth
    col.listRule = ''
    col.viewRule = ''

    // Enforce PDF files in the schema and allow up to 10MB
    col.fields.add(
      new FileField({
        name: 'file',
        maxSelect: 1,
        maxSize: 10485760,
        mimeTypes: ['application/pdf'],
      }),
    )

    app.save(col)

    // Seed the predefined integrity records mapping to the expected slugs
    const docs = [
      { name: 'Código de Conduta', slug: 'codigo-conduta' },
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
    const col = app.findCollectionByNameOrId('integrity_documents')

    // Revert mime types strictly
    col.fields.add(
      new FileField({
        name: 'file',
        maxSelect: 1,
        maxSize: 10485760,
        mimeTypes: [],
      }),
    )

    app.save(col)
  },
)

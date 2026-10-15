migrate(
  (app) => {
    const collection = app.findCollectionByNameOrId('integrity_documents')

    const docs = [
      {
        name: 'Código de Conduta e Ética',
        slug: 'codigo-de-etica',
        file: '02-codigo-de-etica-e7968.pdf',
      },
      { name: 'Organograma', slug: 'organograma', file: '01-organograma-interno-9347b.pdf' },
      {
        name: 'Relatório de Igualdade Salarial',
        slug: 'igualdade-salarial',
        file: '04-igualdade-salarial-fe5f9.pdf',
      },
    ]

    for (const doc of docs) {
      try {
        const record = app.findFirstRecordByData('integrity_documents', 'slug', doc.slug)
        record.set('name', doc.name)
        record.set('file', doc.file)
        app.save(record)
      } catch (_) {
        const record = new Record(collection)
        record.set('name', doc.name)
        record.set('slug', doc.slug)
        record.set('file', doc.file)
        app.save(record)
      }
    }
  },
  (app) => {
    const slugs = ['codigo-de-etica', 'organograma', 'igualdade-salarial']
    for (const slug of slugs) {
      try {
        const record = app.findFirstRecordByData('integrity_documents', 'slug', slug)
        app.delete(record)
      } catch (_) {}
    }
  },
)

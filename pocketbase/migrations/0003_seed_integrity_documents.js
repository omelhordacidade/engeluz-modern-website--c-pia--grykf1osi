migrate(
  (app) => {
    const users = app.findCollectionByNameOrId('_pb_users_auth_')

    // Idempotent: skip if admin user already exists
    try {
      app.findAuthRecordByEmail('_pb_users_auth_', 'portalomelhordacidade@gmail.com')
    } catch (_) {
      const record = new Record(users)
      record.setEmail('portalomelhordacidade@gmail.com')
      record.setPassword('Skip@Pass')
      record.setVerified(true)
      record.set('name', 'Admin')
      app.save(record)
    }

    const docs = [
      { name: 'Código de Conduta e Ética', slug: 'codigo-etica' },
      { name: 'Organograma', slug: 'organograma' },
      { name: 'Igualdade Salarial', slug: 'igualdade-salarial' },
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
    try {
      const record = app.findAuthRecordByEmail('_pb_users_auth_', 'portalomelhordacidade@gmail.com')
      app.delete(record)
    } catch (_) {}

    const slugs = ['codigo-etica', 'organograma', 'igualdade-salarial']
    for (const slug of slugs) {
      try {
        const record = app.findFirstRecordByData('integrity_documents', 'slug', slug)
        app.delete(record)
      } catch (_) {}
    }
  },
)

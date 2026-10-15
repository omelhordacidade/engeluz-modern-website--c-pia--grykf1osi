migrate(
  (app) => {
    const jobAppsCol = app.findCollectionByNameOrId('job_applications')

    const collection = new Collection({
      name: 'application_logs',
      type: 'base',
      listRule: "@request.auth.id != ''",
      viewRule: "@request.auth.id != ''",
      createRule: "@request.auth.id != ''",
      updateRule: null,
      deleteRule: null,
      fields: [
        {
          name: 'user',
          type: 'relation',
          required: true,
          collectionId: '_pb_users_auth_',
          cascadeDelete: true,
          maxSelect: 1,
        },
        {
          name: 'application',
          type: 'relation',
          required: true,
          collectionId: jobAppsCol.id,
          cascadeDelete: true,
          maxSelect: 1,
        },
        { name: 'action', type: 'text', required: true },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(collection)
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('application_logs')
    app.delete(collection)
  },
)

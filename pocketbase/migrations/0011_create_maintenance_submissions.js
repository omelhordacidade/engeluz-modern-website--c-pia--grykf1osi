migrate(
  (app) => {
    const collection = new Collection({
      name: 'maintenance_submissions',
      type: 'base',
      listRule: null,
      viewRule: null,
      createRule: '',
      updateRule: null,
      deleteRule: null,
      fields: [
        { name: 'municipality', type: 'text', required: true },
        { name: 'request_type', type: 'text', required: true },
        { name: 'location_link', type: 'text' },
        { name: 'details', type: 'text' },
        { name: 'requester_name', type: 'text', required: true },
        { name: 'cpf', type: 'text', required: true },
        { name: 'email', type: 'email', required: true },
        { name: 'phone', type: 'text', required: true },
        { name: 'address', type: 'text', required: true },
        { name: 'reference_point', type: 'text' },
        { name: 'pole_id', type: 'text' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(collection)
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('maintenance_submissions')
    app.delete(collection)
  },
)

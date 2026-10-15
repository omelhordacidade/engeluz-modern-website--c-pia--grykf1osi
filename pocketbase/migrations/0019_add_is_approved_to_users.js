migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('users')
    if (!col.fields.getByName('is_approved')) {
      col.fields.add(new BoolField({ name: 'is_approved' }))
      app.save(col)
    }
  },
  (app) => {
    const col = app.findCollectionByNameOrId('users')
    if (col.fields.getByName('is_approved')) {
      col.fields.removeByName('is_approved')
      app.save(col)
    }
  },
)

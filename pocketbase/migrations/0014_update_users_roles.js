migrate(
  (app) => {
    const users = app.findCollectionByNameOrId('users')

    if (!users.fields.getByName('role')) {
      users.fields.add(
        new SelectField({
          name: 'role',
          values: ['admin', 'assistant'],
          maxSelect: 1,
        }),
      )
      app.save(users)
    }

    app
      .db()
      .newQuery("UPDATE users SET role = 'assistant' WHERE role IS NULL OR role = ''")
      .execute()

    const updatedUsers = app.findCollectionByNameOrId('users')
    const roleField = updatedUsers.fields.getByName('role')
    if (roleField) {
      roleField.required = true
    }

    updatedUsers.listRule = "@request.auth.id != ''"
    updatedUsers.viewRule = "@request.auth.id != ''"
    updatedUsers.createRule = "@request.auth.role = 'admin'"
    updatedUsers.updateRule = "@request.auth.id = id || @request.auth.role = 'admin'"
    updatedUsers.deleteRule = "@request.auth.role = 'admin'"

    app.save(updatedUsers)
  },
  (app) => {
    const users = app.findCollectionByNameOrId('users')
    if (users.fields.getByName('role')) {
      users.fields.removeByName('role')
    }

    users.listRule = 'id = @request.auth.id'
    users.viewRule = 'id = @request.auth.id'
    users.createRule = ''
    users.updateRule = 'id = @request.auth.id'
    users.deleteRule = 'id = @request.auth.id'

    app.save(users)
  },
)

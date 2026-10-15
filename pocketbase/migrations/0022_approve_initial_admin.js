migrate(
  (app) => {
    try {
      const record = app.findAuthRecordByEmail('users', 'portalomelhordacidade@gmail.com')
      record.set('is_approved', true)
      app.save(record)
    } catch (e) {
      console.log('Initial admin not found, skipping approval.')
    }
  },
  (app) => {
    try {
      const record = app.findAuthRecordByEmail('users', 'portalomelhordacidade@gmail.com')
      record.set('is_approved', false)
      app.save(record)
    } catch (e) {}
  },
)

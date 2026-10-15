migrate(
  (app) => {
    try {
      const admin = app.findAuthRecordByEmail('users', 'portalomelhordacidade@gmail.com')
      admin.set('role', 'admin')
      app.save(admin)
    } catch (_) {}
  },
  (app) => {
    try {
      const admin = app.findAuthRecordByEmail('users', 'portalomelhordacidade@gmail.com')
      admin.set('role', 'assistant')
      app.save(admin)
    } catch (_) {}
  },
)

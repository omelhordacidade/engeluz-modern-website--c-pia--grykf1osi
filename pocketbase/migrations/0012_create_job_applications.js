migrate(
  (app) => {
    const collection = new Collection({
      name: 'job_applications',
      type: 'base',
      listRule: null,
      viewRule: null,
      createRule: '',
      updateRule: null,
      deleteRule: null,
      fields: [
        { name: 'full_name', type: 'text', required: true },
        { name: 'birth_date', type: 'text', required: true },
        { name: 'marital_status', type: 'text', required: true },
        { name: 'gender', type: 'text', required: true },
        { name: 'phone', type: 'text', required: true },
        { name: 'email', type: 'email', required: false },
        { name: 'city_state', type: 'text', required: true },
        { name: 'education_level', type: 'text', required: true },
        { name: 'additional_courses', type: 'text', required: false },
        { name: 'drivers_license', type: 'text', required: true },
        { name: 'area_of_interest', type: 'text', required: true },
        { name: 'salary_expectation', type: 'text', required: true },
        { name: 'work_experience', type: 'text', required: true },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(collection)
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('job_applications')
    app.delete(collection)
  },
)

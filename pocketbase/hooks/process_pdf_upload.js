routerAdd('POST', '/backend/v1/process-pdf-upload', (e) => {
  const slug = e.request.formValue('slug')
  if (!slug) {
    throw new BadRequestError('Slug is required')
  }

  let record
  try {
    record = $app.findFirstRecordByData('integrity_documents', 'slug', slug)
  } catch (_) {
    throw new NotFoundError('Integrity document not found')
  }

  const files = e.findUploadedFiles('file')
  if (!files || files.length === 0) {
    throw new BadRequestError("No file uploaded. Use multipart/form-data with 'file' field.")
  }

  record.set('file', files[0])
  $app.save(record)

  const url = `/api/files/integrity_documents/${record.id}/${record.getString('file')}?download=1`

  return e.json(200, {
    message: 'PDF successfully stored and processed.',
    url: url,
  })
})

onRecordAfterCreateSuccess((e) => {
  const apiKey = $secrets.get('RESEND_API_KEY') || 're_dummy_123456'
  const record = e.record

  const html = `
    <h2>Nova Candidatura Recebida</h2>
    <p><strong>Nome Completo:</strong> ${record.getString('full_name')}</p>
    <p><strong>E-mail:</strong> ${record.getString('email')}</p>
    <p><strong>Telefone:</strong> ${record.getString('phone')}</p>
    <p><strong>Área de Interesse:</strong> ${record.getString('area_interest')}</p>
    <p><strong>Data de Nascimento:</strong> ${record.getString('birth_date')}</p>
    <p><strong>Estado Civil:</strong> ${record.getString('marital_status')}</p>
    <p><strong>Sexo:</strong> ${record.getString('gender')}</p>
    <p><strong>Cidade/Estado:</strong> ${record.getString('city_state')}</p>
    <p><strong>Nível de Escolaridade:</strong> ${record.getString('education_level')}</p>
    <p><strong>Carteira de Habilitação:</strong> ${record.getString('drivers_license')}</p>
    <p><strong>Pretensão Salarial:</strong> R$ ${record.getFloat('salary_expectation')}</p>
    <p><strong>Experiência Profissional:</strong><br/>${record.getString('professional_experience')}</p>
    <p><strong>Cursos Adicionais:</strong><br/>${record.getString('additional_courses')}</p>
  `

  try {
    const res = $http.send({
      url: 'https://api.resend.com/emails',
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'sac.iluminacao@engeluz.com.br',
        subject: record.getString('full_name') + ' - candidatura',
        html: html,
      }),
    })

    if (res.statusCode >= 400) {
      $app.logger().error('Failed to send job application email', 'status', res.statusCode)
    }
  } catch (err) {
    $app.logger().error('Error sending job application email', 'error', String(err))
  }

  e.next()
}, 'job_applications')

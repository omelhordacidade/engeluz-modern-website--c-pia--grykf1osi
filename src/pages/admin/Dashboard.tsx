import { useState, useEffect } from 'react'
import {
  getJobApplications,
  updateJobApplication,
  getApplicationLogs,
} from '@/services/job_applications'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Download,
  Search,
  Eye,
  FileText,
  CheckCircle,
  Clock,
  CalendarDays,
  Users as UsersIcon,
} from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useRealtime } from '@/hooks/use-realtime'
import { toast } from 'sonner'
import { useAuth } from '@/hooks/use-auth'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const StatusSelect = ({
  currentStatus,
  onChange,
}: {
  currentStatus: string
  onChange: (val: string) => void
}) => {
  return (
    <Select value={currentStatus || 'Recebido'} onValueChange={onChange}>
      <SelectTrigger className="w-[180px] h-8 text-xs font-medium">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Recebido">Recebido</SelectItem>
        <SelectItem value="Em Análise">Em Análise</SelectItem>
        <SelectItem value="Entrevista Agendada">Entrevista Agendada</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default function AdminDashboard() {
  const [applications, setApplications] = useState<any[]>([])
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('Todos')
  const [areaFilter, setAreaFilter] = useState('Todas')
  const [selectedApp, setSelectedApp] = useState<any | null>(null)
  const [internalNotes, setInternalNotes] = useState('')
  const [isSavingNotes, setIsSavingNotes] = useState(false)
  const [logs, setLogs] = useState<any[]>([])
  const { user } = useAuth()

  useEffect(() => {
    if (selectedApp) {
      setInternalNotes(selectedApp.internal_notes || '')
      loadLogs(selectedApp.id)
    } else {
      setLogs([])
    }
  }, [selectedApp])

  const loadLogs = async (appId: string) => {
    try {
      const data = await getApplicationLogs(appId)
      setLogs(data)
    } catch (err) {
      console.error('Failed to load logs', err)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const data = await getJobApplications()
      setApplications(data)
    } catch (err) {
      console.error(err)
    }
  }

  useRealtime('job_applications', (e) => {
    if (e.action === 'create') {
      toast.success(`Nova candidatura recebida: ${e.record.full_name}`)
    }
    loadData()
  })

  const filteredApps = applications.filter((app) => {
    const matchSearch =
      app.full_name.toLowerCase().includes(search.toLowerCase()) ||
      app.email.toLowerCase().includes(search.toLowerCase())

    const appStatus = app.status || 'Recebido'
    const matchStatus = statusFilter === 'Todos' || appStatus === statusFilter
    const matchArea = areaFilter === 'Todas' || app.area_interest === areaFilter

    return matchSearch && matchStatus && matchArea
  })

  const uniqueAreas = Array.from(new Set(applications.map((a) => a.area_interest))).filter(
    Boolean,
  ) as string[]

  const handleSaveNotes = async (id: string) => {
    try {
      setIsSavingNotes(true)
      await updateJobApplication(id, { internal_notes: internalNotes }, user?.id)
      setSelectedApp((prev: any) => ({ ...prev, internal_notes: internalNotes }))
      toast.success('Notas salvas com sucesso.')
      loadLogs(id)
    } catch (err) {
      toast.error('Erro ao salvar notas.')
      console.error(err)
    } finally {
      setIsSavingNotes(false)
    }
  }

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      await updateJobApplication(id, { status: newStatus }, user?.id)
      toast.success('Status atualizado com sucesso.')
      if (selectedApp?.id === id) {
        loadLogs(id)
      }
    } catch (err) {
      toast.error('Erro ao atualizar status.')
      console.error(err)
    }
  }

  const handleDownloadPDF = (app: any) => {
    const printWindow = window.open('', '_blank')
    if (!printWindow) {
      toast.error('Não foi possível gerar o PDF. Verifique se o bloqueador de pop-ups está ativo.')
      return
    }

    const html = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <title>Candidatura - ${app.full_name}</title>
        <style>
          body { font-family: system-ui, -apple-system, sans-serif; padding: 40px; color: #1f2937; line-height: 1.5; }
          h1 { color: #111827; border-bottom: 2px solid #e5e7eb; padding-bottom: 12px; margin-bottom: 32px; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 32px; }
          .field { margin-bottom: 8px; }
          .label { font-weight: 600; color: #6b7280; font-size: 12px; text-transform: uppercase; margin-bottom: 4px; letter-spacing: 0.05em; }
          .value { font-size: 16px; color: #111827; }
          .full-width { grid-column: 1 / -1; }
          .bg-gray { background: #f9fafb; padding: 16px; border-radius: 8px; border: 1px solid #f3f4f6; margin-top: 8px; }
          @media print {
            body { padding: 0; }
            @page { margin: 2cm; }
          }
        </style>
      </head>
      <body>
        <h1>Detalhes do Candidato</h1>
        <div class="grid">
          <div class="field"><div class="label">Nome Completo</div><div class="value">${app.full_name}</div></div>
          <div class="field"><div class="label">Área de Interesse</div><div class="value">${app.area_interest}</div></div>
          <div class="field"><div class="label">E-mail</div><div class="value">${app.email}</div></div>
          <div class="field"><div class="label">Telefone</div><div class="value">${app.phone}</div></div>
          <div class="field"><div class="label">Cidade e Estado</div><div class="value">${app.city_state}</div></div>
          <div class="field"><div class="label">Data de Nascimento</div><div class="value">${app.birth_date}</div></div>
          <div class="field"><div class="label">Estado Civil</div><div class="value">${app.marital_status}</div></div>
          <div class="field"><div class="label">Sexo</div><div class="value">${app.gender}</div></div>
          <div class="field"><div class="label">Nível de Escolaridade</div><div class="value">${app.education_level}</div></div>
          <div class="field"><div class="label">Carteira de Habilitação</div><div class="value">${app.drivers_license}</div></div>
          <div class="field"><div class="label">Pretensão Salarial</div><div class="value">R$ ${app.salary_expectation}</div></div>
          <div class="field"><div class="label">Status da Candidatura</div><div class="value">${app.status || 'Recebido'}</div></div>
          
          <div class="field full-width">
            <div class="label">Experiência Profissional</div>
            <div class="value bg-gray">${(app.professional_experience || 'Nenhuma experiência informada.').replace(/\n/g, '<br>')}</div>
          </div>
          
          ${
            app.additional_courses
              ? `
          <div class="field full-width">
            <div class="label">Cursos Adicionais</div>
            <div class="value bg-gray">${app.additional_courses.replace(/\n/g, '<br>')}</div>
          </div>`
              : ''
          }
        </div>
        <script>
          window.onload = () => {
            window.print();
            setTimeout(() => window.close(), 500);
          }
        </script>
      </body>
      </html>
    `
    printWindow.document.open()
    printWindow.document.write(html)
    printWindow.document.close()
  }

  const exportCSV = () => {
    const headers = [
      'Nome',
      'Email',
      'Telefone',
      'Área de Interesse',
      'Status',
      'Data de Nascimento',
      'Estado Civil',
      'Sexo',
      'Cidade/Estado',
      'Escolaridade',
      'Cursos',
      'CNH',
      'Pretensão Salarial',
      'Experiência',
      'Data de Envio',
    ]
    const csv = [
      headers.join(','),
      ...filteredApps.map((app) =>
        [
          `"${app.full_name}"`,
          `"${app.email}"`,
          `"${app.phone}"`,
          `"${app.area_interest}"`,
          `"${app.status || 'Recebido'}"`,
          `"${app.birth_date}"`,
          `"${app.marital_status}"`,
          `"${app.gender}"`,
          `"${app.city_state}"`,
          `"${app.education_level}"`,
          `"${(app.additional_courses || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`,
          `"${app.drivers_license}"`,
          `"${app.salary_expectation}"`,
          `"${(app.professional_experience || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`,
          `"${new Date(app.created).toLocaleDateString('pt-BR')}"`,
        ].join(','),
      ),
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'candidaturas.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const totalApps = applications.length
  const receivedApps = applications.filter((a) => !a.status || a.status === 'Recebido').length
  const inAnalysisApps = applications.filter((a) => a.status === 'Em Análise').length
  const scheduledApps = applications.filter((a) => a.status === 'Entrevista Agendada').length

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Candidaturas</h1>
        <Button onClick={exportCSV} className="bg-green-600 hover:bg-green-700">
          <Download className="w-4 h-4 mr-2" />
          Exportar CSV
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
            <UsersIcon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total de Candidaturas</p>
            <p className="text-2xl font-bold text-gray-900">{totalApps}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-3 bg-gray-50 text-gray-600 rounded-lg">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Recebidos</p>
            <p className="text-2xl font-bold text-gray-900">{receivedApps}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-3 bg-orange-50 text-orange-600 rounded-lg">
            <Search className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Em Análise</p>
            <p className="text-2xl font-bold text-gray-900">{inAnalysisApps}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-3 bg-green-50 text-green-600 rounded-lg">
            <CalendarDays className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Entrevistas Agendadas</p>
            <p className="text-2xl font-bold text-gray-900">{scheduledApps}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Buscar por nome, email ou área..."
                className="pl-9"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Filtrar por Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Todos">Todos os Status</SelectItem>
                <SelectItem value="Recebido">Recebido</SelectItem>
                <SelectItem value="Em Análise">Em Análise</SelectItem>
                <SelectItem value="Entrevista Agendada">Entrevista Agendada</SelectItem>
              </SelectContent>
            </Select>
            <Select value={areaFilter} onValueChange={setAreaFilter}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Área de Interesse" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Todas">Todas as Áreas</SelectItem>
                {uniqueAreas.map((area) => (
                  <SelectItem key={area} value={area}>
                    {area}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Área de Interesse</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Data de Envio</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredApps.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                    Nenhuma candidatura encontrada.
                  </TableCell>
                </TableRow>
              ) : (
                filteredApps.map((app) => (
                  <TableRow key={app.id}>
                    <TableCell className="font-medium">{app.full_name}</TableCell>
                    <TableCell>{app.area_interest}</TableCell>
                    <TableCell>
                      <StatusSelect
                        currentStatus={app.status || 'Recebido'}
                        onChange={(val) => handleStatusChange(app.id, val)}
                      />
                    </TableCell>
                    <TableCell>{new Date(app.created).toLocaleDateString('pt-BR')}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2 items-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          title="Baixar PDF"
                          onClick={() => handleDownloadPDF(app)}
                        >
                          <FileText className="w-4 h-4 text-gray-500" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => setSelectedApp(app)}>
                          <Eye className="w-4 h-4 mr-2" />
                          Detalhes
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <Dialog open={!!selectedApp} onOpenChange={(open) => !open && setSelectedApp(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh]">
          <DialogHeader className="flex flex-row items-start sm:items-center justify-between pr-6 border-b pb-4">
            <DialogTitle className="text-2xl">Detalhes do Candidato</DialogTitle>
            {selectedApp && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDownloadPDF(selectedApp)}
                className="mt-0"
              >
                <FileText className="w-4 h-4 mr-2" />
                Baixar PDF
              </Button>
            )}
          </DialogHeader>

          {selectedApp && (
            <Tabs defaultValue="details" className="w-full mt-2">
              <TabsList className="mb-4 w-full grid grid-cols-2">
                <TabsTrigger value="details">Detalhes</TabsTrigger>
                <TabsTrigger value="history">Histórico ({logs.length})</TabsTrigger>
              </TabsList>

              <TabsContent value="details">
                <ScrollArea className="h-[calc(90vh-200px)] pr-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                    <div className="space-y-1">
                      <span className="text-sm font-semibold text-gray-500">Nome Completo</span>
                      <p className="font-medium text-gray-900">{selectedApp.full_name}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-sm font-semibold text-gray-500">Área de Interesse</span>
                      <p className="font-medium text-gray-900">{selectedApp.area_interest}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-sm font-semibold text-gray-500">Email</span>
                      <p className="text-gray-900">{selectedApp.email}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-sm font-semibold text-gray-500">Telefone</span>
                      <p className="text-gray-900">{selectedApp.phone}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-sm font-semibold text-gray-500">Cidade e Estado</span>
                      <p className="text-gray-900">{selectedApp.city_state}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-sm font-semibold text-gray-500">
                        Data de Nascimento
                      </span>
                      <p className="text-gray-900">{selectedApp.birth_date}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-sm font-semibold text-gray-500">Estado Civil</span>
                      <p className="text-gray-900">{selectedApp.marital_status}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-sm font-semibold text-gray-500">Sexo</span>
                      <p className="text-gray-900">{selectedApp.gender}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-sm font-semibold text-gray-500">
                        Nível de Escolaridade
                      </span>
                      <p className="text-gray-900">{selectedApp.education_level}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-sm font-semibold text-gray-500">
                        Carteira de Habilitação
                      </span>
                      <p className="text-gray-900">{selectedApp.drivers_license}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-sm font-semibold text-gray-500">
                        Pretensão Salarial
                      </span>
                      <p className="text-gray-900">R$ {selectedApp.salary_expectation}</p>
                    </div>
                    <div className="space-y-2 bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <span className="text-sm font-semibold text-gray-500">
                        Status da Candidatura
                      </span>
                      <StatusSelect
                        currentStatus={selectedApp.status || 'Recebido'}
                        onChange={(val) => {
                          handleStatusChange(selectedApp.id, val)
                          setSelectedApp({ ...selectedApp, status: val })
                        }}
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2 mt-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700">Notas Internas</span>
                        <Button
                          size="sm"
                          onClick={() => handleSaveNotes(selectedApp.id)}
                          disabled={isSavingNotes}
                        >
                          {isSavingNotes ? 'Salvando...' : 'Salvar Notas'}
                        </Button>
                      </div>
                      <textarea
                        value={internalNotes}
                        onChange={(e) => setInternalNotes(e.target.value)}
                        placeholder="Adicione observações sobre o candidato..."
                        className="flex min-h-[100px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      />
                    </div>

                    <div className="space-y-1 md:col-span-2 mt-2">
                      <span className="text-sm font-semibold text-gray-500">
                        Experiência Profissional
                      </span>
                      <p className="text-gray-900 whitespace-pre-wrap mt-1 p-4 bg-gray-50 rounded-lg border border-gray-100">
                        {selectedApp.professional_experience}
                      </p>
                    </div>
                    {selectedApp.additional_courses && (
                      <div className="space-y-1 md:col-span-2">
                        <span className="text-sm font-semibold text-gray-500">
                          Cursos Adicionais
                        </span>
                        <p className="text-gray-900 whitespace-pre-wrap mt-1 p-4 bg-gray-50 rounded-lg border border-gray-100">
                          {selectedApp.additional_courses}
                        </p>
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </TabsContent>

              <TabsContent value="history">
                <ScrollArea className="h-[calc(90vh-200px)] pr-4">
                  <div className="space-y-4 py-4">
                    {logs.length === 0 ? (
                      <div className="text-center text-gray-500 py-8">
                        Nenhum histórico registrado.
                      </div>
                    ) : (
                      logs.map((log) => (
                        <div
                          key={log.id}
                          className="flex gap-4 items-start p-4 bg-gray-50 rounded-lg border border-gray-100"
                        >
                          <div className="mt-1">
                            <CheckCircle className="w-5 h-5 text-[#0a488a]" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-900">
                              <span className="font-semibold">
                                {log.expand?.user?.name || log.expand?.user?.email || 'Usuário'}
                              </span>{' '}
                              {log.action}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date(log.created).toLocaleString('pt-BR')}
                            </p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

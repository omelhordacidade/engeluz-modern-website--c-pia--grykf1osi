import { useEffect, useState } from 'react'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Button } from '@/components/ui/button'
import {
  FileText,
  Shield,
  Scale,
  Users,
  Network,
  BarChart,
  ExternalLink,
  Download,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { getIntegrityDocuments, getIntegrityDocumentUrl } from '@/services/integrity_documents'
import type { RecordModel } from 'pocketbase'
import { useRealtime } from '@/hooks/use-realtime'
import pb from '@/lib/pocketbase/client'

import codigoCondutaPdf from '@/assets/2026-07-01-codigo-de-etica-e-compliance-engeluz-pdf-d4sign-c9cd2.pdf'
import organogramaPdf from '@/assets/01-organograma-interno-a5953.pdf'
import igualdadeSalarialPdf from '@/assets/04-igualdade-salarial-e1938.pdf'

export default function ProgramaIntegridade() {
  const [documents, setDocuments] = useState<Record<string, RecordModel>>({})
  const [loading, setLoading] = useState(true)

  const checkAndSeedFiles = async (docs: RecordModel[]) => {
    const filesToSeed = [
      {
        slug: 'codigo-conduta',
        fileUrl: codigoCondutaPdf,
        fileName: '2026-07-01-codigo-de-etica-e-compliance-engeluz-pdf-d4sign-c9cd2.pdf',
      },
      {
        slug: 'organograma',
        fileUrl: organogramaPdf,
        fileName: '01-organograma-interno-a5953.pdf',
      },
      {
        slug: 'igualdade-salarial',
        fileUrl: igualdadeSalarialPdf,
        fileName: '04-igualdade-salarial-e1938.pdf',
      },
      {
        slug: 'manual-prestadores-servico',
        fileUrl: codigoCondutaPdf,
        fileName: 'manual-prestadores-servico.pdf',
      },
    ]

    for (const item of filesToSeed) {
      const doc = docs.find((d) => d.slug === item.slug)
      if (doc && !doc.file) {
        try {
          const res = await fetch(item.fileUrl)
          const blob = await res.blob()
          const file = new File([blob], item.fileName, { type: 'application/pdf' })

          const formData = new FormData()
          formData.append('slug', item.slug)
          formData.append('file', file)

          await pb.send('/backend/v1/process-pdf-upload', {
            method: 'POST',
            body: formData,
          })
        } catch (e) {
          console.error('Failed to upload seed file', e)
        }
      }
    }
  }

  const loadDocuments = () => {
    getIntegrityDocuments()
      .then((docs) => {
        const docMap = docs.reduce(
          (acc, doc) => {
            acc[doc.slug] = doc
            return acc
          },
          {} as Record<string, RecordModel>,
        )
        setDocuments(docMap)
        checkAndSeedFiles(docs)
      })
      .catch((err) => {
        console.error('Failed to fetch documents', err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    loadDocuments()
  }, [])

  useRealtime('integrity_documents', () => {
    loadDocuments()
  })

  const getDocInfo = (slug: string) => {
    const doc = documents[slug]
    if (doc && doc.file) {
      return {
        url: getIntegrityDocumentUrl(doc, doc.file),
        fileName: doc.file,
        available: true,
      }
    }
    return {
      url: '',
      fileName: '',
      available: false,
    }
  }

  const codConduta = getDocInfo('codigo-conduta')
  const organograma = getDocInfo('organograma')
  const igualdade = getDocInfo('igualdade-salarial')
  const manualPrestadores = getDocInfo('manual-prestadores-servico')

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 max-w-5xl py-12">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-4 bg-secondary/10 rounded-full mb-6">
              <Shield className="h-12 w-12 text-secondary" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Programa de Integridade
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A Engeluz acredita que a ética e a transparência são pilares inegociáveis para o
              desenvolvimento sustentável. Nosso Programa de Integridade estabelece diretrizes
              claras e seguras para todas as nossas relações de negócios.
            </p>
          </div>
        </ScrollReveal>

        {/* Informative Sections */}
        <div className="space-y-12 mb-24">
          <ScrollReveal delay={100}>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-primary/5 p-6 rounded-2xl shrink-0">
                <Scale className="h-10 w-10 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                  Ética e Conformidade
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Asseguramos que todas as nossas operações estejam em estrita conformidade com a
                    legislação vigente, incluindo a Lei Anticorrupção (Lei nº 12.846/2013). Nosso
                    compromisso vai além do cumprimento legal; buscamos promover uma cultura de
                    integridade corporativa em todos os níveis e hierarquias da empresa.
                  </p>
                  <p>
                    Capacitamos nossos colaboradores e exigimos que nossos parceiros, fornecedores e
                    terceirizados sigam os mesmos padrões de conduta ética, garantindo a
                    sustentabilidade e a credibilidade de nossa marca no mercado nacional.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-secondary/10 p-6 rounded-2xl shrink-0">
                <Users className="h-10 w-10 text-secondary" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                  Canal de Denúncias
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                  <p>
                    Mantemos um canal de comunicação seguro, independente e confidencial para o
                    relato de qualquer suspeita de desvio de conduta, fraude, assédio ou violação de
                    nossas políticas internas.
                  </p>
                  <p>
                    Garantimos o anonimato e a não retaliação ao manifestante de boa-fé. Todas as
                    denúncias são recebidas e apuradas de forma criteriosa e imparcial pelo nosso
                    Comitê de Ética.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white font-bold"
                  onClick={() => window.open('https://www.contatoseguro.com.br/engeluz', '_blank')}
                >
                  Acessar Canal de Denúncias <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="bg-secondary/10 rounded-3xl p-8 md:p-12 shadow-sm border border-secondary/20 flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="flex-1">
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                  {documents['manual-prestadores-servico']?.name ||
                    'Manual de Prestadores de Serviço'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Documento contendo as diretrizes de saúde, segurança do trabalho e meio ambiente,
                  além das obrigações da empresa contratada e proibições gerais nas dependências da
                  ENGELUZ.
                </p>
              </div>
              <div className="shrink-0 w-full md:w-auto">
                {manualPrestadores.available ? (
                  <Button
                    asChild
                    size="lg"
                    className={cn(
                      'w-full md:w-auto bg-secondary hover:bg-secondary/90 text-white font-bold',
                      loading && 'opacity-50 pointer-events-none',
                    )}
                  >
                    <a
                      href={manualPrestadores.url}
                      download={manualPrestadores.fileName}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-5 w-5" /> Baixar Manual
                    </a>
                  </Button>
                ) : (
                  <Button
                    disabled
                    size="lg"
                    className="w-full md:w-auto bg-secondary/50 text-white font-bold"
                  >
                    Indisponível no momento
                  </Button>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Documents */}
        <div className="mb-12">
          <ScrollReveal delay={300}>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-primary mb-4">
                Documentos Corporativos
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Acesse nossos principais relatórios e manuais organizacionais que reforçam nosso
                compromisso contínuo com a transparência e a ética profissional.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal delay={400}>
              <div className="bg-[#165EA9] text-white p-8 md:p-10 rounded-[32px] text-center flex flex-col items-center h-full shadow-lg">
                <div className="bg-[#246CA8] p-6 rounded-3xl mb-8">
                  <FileText className="h-10 w-10 text-[#00A1E4]" strokeWidth={2} />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">
                  {documents['codigo-conduta']?.name || 'Código de Conduta'}
                </h3>
                <p className="text-[#E6F0F9] mb-8 text-[15px] leading-relaxed flex-grow">
                  Diretrizes de comportamento esperado de todos os colaboradores, diretoria e
                  parceiros de negócios da Engeluz.
                </p>
                {codConduta.available ? (
                  <Button
                    asChild
                    className={cn(
                      'w-full bg-[#00A1E4] hover:bg-[#008CC9] text-white font-bold h-12 rounded-xl text-base transition-colors',
                      loading && 'opacity-50 pointer-events-none',
                    )}
                  >
                    <a
                      href={codConduta.url}
                      download={codConduta.fileName}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-5 w-5" /> Baixar
                    </a>
                  </Button>
                ) : (
                  <Button
                    disabled
                    className="w-full bg-[#246CA8] text-[#8CB4D6] font-bold h-12 rounded-xl text-base"
                  >
                    Indisponível no momento
                  </Button>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className="bg-[#165EA9] text-white p-8 md:p-10 rounded-[32px] text-center flex flex-col items-center h-full shadow-lg">
                <div className="bg-[#246CA8] p-6 rounded-3xl mb-8">
                  <Network className="h-10 w-10 text-[#00A1E4]" strokeWidth={2} />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">
                  {documents['organograma']?.name || 'Organograma'}
                </h3>
                <p className="text-[#E6F0F9] mb-8 text-[15px] leading-relaxed flex-grow">
                  Conheça detalhadamente a estrutura organizacional da empresa e a distribuição
                  estratégica de nossas lideranças.
                </p>
                {organograma.available ? (
                  <Button
                    asChild
                    className={cn(
                      'w-full bg-[#00A1E4] hover:bg-[#008CC9] text-white font-bold h-12 rounded-xl text-base transition-colors',
                      loading && 'opacity-50 pointer-events-none',
                    )}
                  >
                    <a
                      href={organograma.url}
                      download={organograma.fileName}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-5 w-5" /> Baixar
                    </a>
                  </Button>
                ) : (
                  <Button
                    disabled
                    className="w-full bg-[#246CA8] text-[#8CB4D6] font-bold h-12 rounded-xl text-base"
                  >
                    Indisponível no momento
                  </Button>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="bg-[#165EA9] text-white p-8 md:p-10 rounded-[32px] text-center flex flex-col items-center h-full shadow-lg">
                <div className="bg-[#246CA8] p-6 rounded-3xl mb-8">
                  <BarChart className="h-10 w-10 text-[#00A1E4]" strokeWidth={2} />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">
                  {documents['igualdade-salarial']?.name || 'Igualdade Salarial'}
                </h3>
                <p className="text-[#E6F0F9] mb-8 text-[15px] leading-relaxed flex-grow">
                  Relatório oficial de transparência sobre os critérios remuneratórios e iniciativas
                  de igualdade de gênero.
                </p>
                {igualdade.available ? (
                  <Button
                    asChild
                    className={cn(
                      'w-full bg-[#00A1E4] hover:bg-[#008CC9] text-white font-bold h-12 rounded-xl text-base transition-colors',
                      loading && 'opacity-50 pointer-events-none',
                    )}
                  >
                    <a
                      href={igualdade.url}
                      download={igualdade.fileName}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-5 w-5" /> Baixar
                    </a>
                  </Button>
                ) : (
                  <Button
                    disabled
                    className="w-full bg-[#246CA8] text-[#8CB4D6] font-bold h-12 rounded-xl text-base"
                  >
                    Indisponível no momento
                  </Button>
                )}
              </div>
            </ScrollReveal>
          </div>{' '}
        </div>
      </div>
    </div>
  )
}

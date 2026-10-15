import React, { useEffect, useState, useRef } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { FOLDER_PAGES, FolderPageInfo } from '@/data/folder-pages-data'
import { renderPdfPageToDataUrl } from '@/services/folderPdfService'
import {
  FileDown,
  Eye,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Loader2,
  Maximize2,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import folderPdfUrl from '@/assets/folder-inst.02-02.08-compactado-12bd7.pdf'

interface FolderCardProps {
  page: FolderPageInfo
  index: number
  renderedImg?: string
  onOpenModal: (page: FolderPageInfo, img?: string) => void
}

const FolderSlideCard: React.FC<FolderCardProps> = ({ page, index, renderedImg, onOpenModal }) => {
  return (
    <div className="h-full flex flex-col bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-border group hover:-translate-y-1.5">
      {/* Top Media: Canvas/Imagem renderizada do PDF ou Fallback com alta fidelidade */}
      <div className="relative aspect-[3/4] bg-slate-900 overflow-hidden flex items-center justify-center">
        {renderedImg ? (
          <img
            src={renderedImg}
            alt={`Folder Institucional Engeluz - Página ${page.pageNumber}: ${page.title}`}
            className="w-full h-full object-contain bg-slate-950 transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full p-6 flex flex-col justify-between text-white relative bg-gradient-to-br from-[#165EA9] via-[#0D447E] to-[#082950]">
            {/* Top Bar */}
            <div className="flex justify-between items-start z-10">
              <span className="text-xs font-bold tracking-widest text-[#00A1E4] uppercase bg-black/30 px-3 py-1 rounded-full border border-white/10">
                Pág. {page.pageNumber} / 30
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-white/90 bg-[#165EA9] px-2.5 py-1 rounded-full">
                {page.category}
              </span>
            </div>

            {/* Content summary */}
            <div className="z-10 space-y-3 my-auto">
              <h4 className="font-heading text-lg font-black tracking-tight leading-snug text-white">
                {page.title}
              </h4>
              {page.subtitle && (
                <p className="text-xs text-[#00A1E4] font-semibold line-clamp-2">{page.subtitle}</p>
              )}
              {page.description && (
                <p className="text-xs text-white/80 line-clamp-4 leading-relaxed font-light">
                  {page.description}
                </p>
              )}
            </div>

            {/* Bottom info */}
            <div className="z-10 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-white/70">
              <span className="flex items-center gap-1">
                <Loader2 className="w-3 h-3 animate-spin text-[#00A1E4]" />
                Carregando alta resolução...
              </span>
              <span className="font-semibold text-[#00A1E4]">ENGELUZ</span>
            </div>

            {/* Background design accents */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00A1E4]/20 rounded-full blur-2xl" />
          </div>
        )}

        {/* Hover overlay with action button */}
        <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 backdrop-blur-[2px]">
          <Button
            size="sm"
            onClick={() => onOpenModal(page, renderedImg)}
            className="bg-white text-primary hover:bg-[#00A1E4] hover:text-white font-bold shadow-xl rounded-full gap-2 transition-all transform scale-90 group-hover:scale-100"
          >
            <Maximize2 className="w-4 h-4" />
            Ampliar Página {page.pageNumber}
          </Button>
        </div>

        {/* Floating Page Number Tag */}
        <div className="absolute top-3 left-3 bg-[#165EA9]/90 text-white font-extrabold text-[11px] px-2.5 py-1 rounded-full backdrop-blur-md shadow-sm border border-white/20">
          {page.pageNumber} / 30
        </div>
      </div>

      {/* Card Content - Metadados do Folder */}
      <div className="p-5 flex flex-col flex-grow bg-white">
        <div className="flex items-center justify-between gap-2 mb-2">
          <Badge
            variant="secondary"
            className="text-[10px] uppercase font-bold tracking-wider bg-secondary/15 text-primary border-none"
          >
            {page.category}
          </Badge>
          <span className="text-xs text-muted-foreground font-medium">Pág. {page.pageNumber}</span>
        </div>

        <h4 className="font-heading text-base font-bold text-primary leading-tight line-clamp-1 mb-1.5 group-hover:text-secondary transition-colors">
          {page.title}
        </h4>

        {page.subtitle && (
          <p className="text-xs font-semibold text-secondary line-clamp-1 mb-2">{page.subtitle}</p>
        )}

        {page.description && (
          <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed mb-3 flex-grow">
            {page.description}
          </p>
        )}

        {page.highlights && page.highlights.length > 0 && (
          <div className="space-y-1 pt-2 border-t border-border/60">
            <p className="text-[11px] font-bold text-gray-700 flex items-center gap-1.5 line-clamp-1">
              <CheckCircle2 className="w-3 h-3 text-[#00A1E4] shrink-0" />
              {page.highlights[0]}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export function FolderInstitutionalCarousel() {
  const [renderedImages, setRenderedImages] = useState<Record<number, string>>({})
  const [activeDialogPage, setActiveDialogPage] = useState<{
    page: FolderPageInfo
    img?: string
  } | null>(null)
  const [api, setApi] = useState<CarouselApi>()
  const [currentSlide, setCurrentSlide] = useState(0)

  // Autoplay suave e contínuo no mesmo padrão do carrossel da home / portfolio (4 a 5s)
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 4500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  )

  // Monitorar slide ativo
  useEffect(() => {
    if (!api) return
    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap())
    }
    api.on('select', onSelect)
    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  // Carregar progressivamente as páginas do PDF para a tela
  useEffect(() => {
    let isCancelled = false

    const loadPagesBatch = async () => {
      // Começa pelas primeiras páginas visíveis
      const initialBatch = [1, 2, 3, 4, 5, 6, 7, 8]
      for (const p of initialBatch) {
        if (isCancelled) break
        try {
          const imgUrl = await renderPdfPageToDataUrl(p, 1.5)
          if (!isCancelled) {
            setRenderedImages((prev) => ({ ...prev, [p]: imgUrl }))
          }
        } catch (err) {
          console.warn(`Página ${p} render fallback:`, err)
        }
      }

      // Restante das páginas sob demanda em segundo plano
      for (let p = 9; p <= 30; p++) {
        if (isCancelled) break
        try {
          const imgUrl = await renderPdfPageToDataUrl(p, 1.4)
          if (!isCancelled) {
            setRenderedImages((prev) => ({ ...prev, [p]: imgUrl }))
          }
        } catch {
          // Fallback silencioso
        }
      }
    }

    loadPagesBatch()

    return () => {
      isCancelled = true
    }
  }, [])

  const handleOpenModal = (page: FolderPageInfo, img?: string) => {
    setActiveDialogPage({ page, img: img || renderedImages[page.pageNumber] })
  }

  return (
    <section className="mb-24 py-16 px-4 md:px-8 bg-gradient-to-b from-blue-50/50 via-white to-blue-50/30 rounded-[2.5rem] border border-blue-100 relative overflow-hidden shadow-sm">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#165EA9]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00A1E4]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Header Institucional da Seção */}
      <div className="text-center max-w-4xl mx-auto mb-14 relative z-10">
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#165EA9]/10 text-[#165EA9] font-bold text-xs uppercase tracking-wider mb-4 border border-[#165EA9]/20">
          <Sparkles className="w-3.5 h-3.5 text-[#00A1E4]" />
          Documento Oficial
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-[#165EA9] mb-5 tracking-tight">
          Nosso Folder Institucional
        </h2>
        <div className="w-24 h-1.5 bg-[#00A1E4] mx-auto rounded-full mb-6" />
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Explore a versão completa e digitalizada do <strong>Folder Institucional Engeluz</strong>{' '}
          (30 páginas). Uma imersão detalhada em nossas quatro décadas de liderança, infraestrutura,
          telegestão inteligente, concessões públicas e obras emblemáticas em todo o Brasil.
        </p>

        {/* Botão de download do PDF Original */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            variant="outline"
            className="border-[#165EA9] text-[#165EA9] hover:bg-[#165EA9] hover:text-white font-semibold rounded-full gap-2 shadow-sm transition-all"
          >
            <a
              href={folderPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="FOLDER-INSTITUCIONAL-ENGELUZ.pdf"
            >
              <FileDown className="w-4 h-4 text-[#00A1E4]" />
              Baixar Folder Completo em PDF (30 págs)
            </a>
          </Button>

          <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            30 páginas navegáveis em alta resolução
          </span>
        </div>
      </div>

      {/* Carrossel Principal de Slides */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-14">
        <Carousel
          setApi={setApi}
          plugins={[autoplayPlugin.current]}
          opts={{
            align: 'start',
            loop: true,
            duration: 35,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {FOLDER_PAGES.map((page, idx) => (
              <CarouselItem
                key={page.pageNumber}
                className="pl-3 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <FolderSlideCard
                  page={page}
                  index={idx}
                  renderedImg={renderedImages[page.pageNumber]}
                  onOpenModal={handleOpenModal}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Setas de navegação com design corporativo Engeluz */}
          <CarouselPrevious className="-left-3 md:-left-6 lg:-left-9 h-11 w-11 rounded-full border-2 border-[#165EA9] bg-white text-[#165EA9] hover:bg-[#165EA9] hover:text-white shadow-md transition-all" />
          <CarouselNext className="-right-3 md:-right-6 lg:-right-9 h-11 w-11 rounded-full border-2 border-[#165EA9] bg-white text-[#165EA9] hover:bg-[#165EA9] hover:text-white shadow-md transition-all" />
        </Carousel>

        {/* Indicador de progresso e navegação rápida */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/60 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#165EA9]">Slide atual:</span>
            <span className="font-mono bg-blue-100 text-[#165EA9] px-2.5 py-0.5 rounded-full font-bold">
              {currentSlide + 1} de 30
            </span>
          </div>

          <div className="flex items-center gap-1 text-[11px] text-gray-500">
            <span>
              Dica: passe o mouse sobre qualquer página para pausar o carrossel ou ampliar.
            </span>
          </div>
        </div>
      </div>

      {/* Modal / Dialog para Visualização em Tela Cheia da Página */}
      <Dialog open={!!activeDialogPage} onOpenChange={(open) => !open && setActiveDialogPage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-slate-950 border border-slate-800 text-white rounded-3xl">
          <DialogTitle className="sr-only">
            {activeDialogPage ? `Página ${activeDialogPage.page.pageNumber}` : 'Visualizador'}
          </DialogTitle>
          {activeDialogPage && (
            <div className="flex flex-col md:flex-row max-h-[85vh]">
              {/* Imagem em alta resolução */}
              <div className="flex-1 bg-black flex items-center justify-center p-4 min-h-[350px] md:min-h-[500px]">
                {activeDialogPage.img ? (
                  <img
                    src={activeDialogPage.img}
                    alt={activeDialogPage.page.title}
                    className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                  />
                ) : (
                  <div className="text-center p-8 space-y-3">
                    <Loader2 className="w-8 h-8 animate-spin mx-auto text-[#00A1E4]" />
                    <p className="text-sm text-gray-400">Carregando imagem em alta resolução...</p>
                  </div>
                )}
              </div>

              {/* Painel lateral de detalhes */}
              <div className="w-full md:w-80 p-6 bg-slate-900 flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-800 overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-[#165EA9] text-white">
                      Página {activeDialogPage.page.pageNumber} / 30
                    </Badge>
                    <span className="text-xs text-[#00A1E4] font-semibold">
                      {activeDialogPage.page.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-bold text-white mb-1">
                      {activeDialogPage.page.title}
                    </h3>
                    {activeDialogPage.page.subtitle && (
                      <p className="text-xs font-semibold text-[#00A1E4]">
                        {activeDialogPage.page.subtitle}
                      </p>
                    )}
                  </div>

                  {activeDialogPage.page.description && (
                    <p className="text-xs text-gray-300 leading-relaxed font-light whitespace-pre-line">
                      {activeDialogPage.page.description}
                    </p>
                  )}

                  {activeDialogPage.page.highlights && (
                    <div className="space-y-1.5 pt-3 border-t border-slate-800">
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        Destaques da Página:
                      </p>
                      <ul className="space-y-1">
                        {activeDialogPage.page.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="text-xs text-gray-300 flex items-start gap-1.5 leading-snug"
                          >
                            <ChevronRight className="w-3.5 h-3.5 text-[#00A1E4] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex flex-col gap-2">
                  <Button
                    asChild
                    size="sm"
                    className="w-full bg-[#165EA9] hover:bg-[#00A1E4] text-white font-bold rounded-xl gap-2"
                  >
                    <a
                      href={folderPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download="FOLDER-INSTITUCIONAL-ENGELUZ.pdf"
                    >
                      <FileDown className="w-4 h-4" />
                      Baixar PDF Oficial
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

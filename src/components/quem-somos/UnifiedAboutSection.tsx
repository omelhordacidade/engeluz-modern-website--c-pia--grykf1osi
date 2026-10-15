import { useState, useRef } from 'react'
import { ScrollReveal } from '@/components/ScrollReveal'
import {
  Calendar,
  CheckCircle2,
  Building,
  Globe2,
  Lightbulb,
  Cpu,
  Layers,
  ArrowUpRight,
  Shield,
  FileCheck,
  TrendingUp,
  MapPin,
  Sparkles,
  Zap,
} from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

import imgFront from '@/assets/img-front-b80a3.jpg'
import imgItapevi3 from '@/assets/itapevi-3-a0427.jpg'
import imgItapevi5 from '@/assets/itapevi-5-06a55.jpg'
import imgNew1 from '@/assets/01-92379.png'
import imgNew2 from '@/assets/02-2cccc.png'
import imgNew4 from '@/assets/04-8fc15.png'
import imgToledo1 from '@/assets/toledo1-755f1.jpeg'

const GALLERY_IMAGES = [
  {
    src: imgFront,
    title: 'Infraestrutura Urbana Integrada',
    desc: 'Obras de iluminação pública e civil com conformidade técnica rigorosa.',
  },
  {
    src: imgToledo1,
    title: 'Concessões de Grande Porte',
    desc: 'Gestão luminotécnica com mais de 600 mil pontos sob administração.',
  },
  {
    src: imgItapevi3,
    title: 'Modernização com Tecnologia LED',
    desc: 'Eficiência energética e redução de até 60% no consumo de energia pública.',
  },
  {
    src: imgItapevi5,
    title: 'Obras Subterrâneas e Requalificação',
    desc: 'Enterramento de redes e despoluição visual em centros urbanos.',
  },
  {
    src: imgNew1,
    title: 'Subestações e Alta Tensão',
    desc: 'Capacidade técnica comprovada em projetos e montagens de até 138kV.',
  },
  {
    src: imgNew2,
    title: 'Telegestão e Redes LoRaWAN',
    desc: 'Mais de 180 mil controladores em rede privada para monitoramento inteligente.',
  },
]

// Dados oficiais da Linha do Tempo (Página 9 do Folder Institucional)
const TIMELINE_EVENTS = [
  {
    date: '24/08/1980',
    year: '1980',
    title: 'Fundação da Engeluz',
    subtitle: 'Início da atuação em engenharia elétrica',
    desc: 'Fundação da empresa no Paraná com capital 100% nacional, iniciando uma trajetória dedicada a soluções de engenharia elétrica e infraestrutura.',
    badge: 'Marco Inicial',
    icon: Calendar,
  },
  {
    date: '28/08/1996',
    year: '1996',
    title: 'Tecnoluz Eletricidade',
    subtitle: 'Expansão em infraestrutura',
    desc: 'A Tecnoluz Eletricidade começa a executar obras de grande porte em infraestrutura nos mais diversos segmentos da engenharia elétrica.',
    badge: 'Expansão Técnica',
    icon: Building,
  },
  {
    date: '29/04/2022',
    year: '2022',
    title: 'Aquisição da Estar Digital',
    subtitle: 'Liderança em Mobilidade Urbana',
    desc: 'Aquisição da empresa Estar Digital, agregando plataforma de estacionamento rotativo com aplicativo, fiscalização com câmeras LPR e OCR inteligente em várias cidades brasileiras.',
    badge: 'Mobilidade Urbana',
    icon: Globe2,
  },
  {
    date: '12/05/2023',
    year: '2023',
    title: 'Criação da Nexum',
    subtitle: 'Joint Venture com grupo Constanta',
    desc: 'Com a alta demanda de IoT e cidades inteligentes, foi criada a Nexum em parceria com o conceituado grupo Constanta, acelerando o desenvolvimento de hardware e telemetria.',
    badge: 'Inovação & IoT',
    icon: Cpu,
  },
]

// 4 Grandes Fatos Numéricos extraídos do Folder Oficial
const HIGHLIGHT_FACTS = [
  {
    value: '1980',
    prefix: 'Desde',
    suffix: '',
    label: 'Ano de Fundação',
    detail: 'Mais de 4 décadas contínuas de excelência e solidez técnica.',
  },
  {
    value: '100%',
    prefix: '',
    suffix: 'Nacional',
    label: 'Capital 100% Brasileiro',
    detail: 'Governança ética, integridade corporativa e compromisso com o Brasil.',
  },
  {
    value: '+1.500',
    prefix: '',
    suffix: '',
    label: 'Projetos Executados',
    detail: 'Obras concluídas com excelência em diferentes regiões do país.',
  },
  {
    value: '+600 mil',
    prefix: '',
    suffix: 'Pontos',
    label: 'Iluminação Pública sob Gestão',
    detail: '14 concessões ativas e uma das maiores redes de telegestão da América Latina.',
  },
]

export function UnifiedAboutSection() {
  const [selectedTimelineIdx, setSelectedTimelineIdx] = useState(0)
  const carouselPlugin = useRef(Autoplay({ delay: 4500, stopOnInteraction: true }))

  return (
    <section id="unificado-quem-somos" className="mb-24 scroll-mt-24">
      {/* 1. Grade de Indicadores Oficiais em Destaque */}
      <ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {HIGHLIGHT_FACTS.map((fact, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-3xl bg-white border border-border shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#165EA9] via-[#00A1E4] to-[#00d0ff] opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-baseline gap-1.5 mb-2">
                {fact.prefix && (
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {fact.prefix}
                  </span>
                )}
                <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#165EA9] group-hover:text-[#00A1E4] transition-colors">
                  {fact.value}
                </span>
                {fact.suffix && (
                  <span className="text-xs sm:text-sm font-bold text-[#00A1E4]">{fact.suffix}</span>
                )}
              </div>

              <h4 className="font-heading text-base font-bold text-gray-900 mb-1.5">
                {fact.label}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{fact.detail}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* 2. Bloco Unificado: "Quem Somos" + "Nossa Especialidade" */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
        {/* Lado Esquerdo: Quem Somos (Narrativa Enriquecida) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 border border-border shadow-sm flex flex-col justify-between">
          <ScrollReveal>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-[#165EA9]/10 text-[#165EA9] font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#00A1E4]" />
                Tradição & Liderança
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#165EA9] tracking-tight leading-tight uppercase">
                Quem Somos
              </h2>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                <strong>O Grupo Engeluz</strong> é referência nacional em soluções de infraestrutura
                elétrica e urbana. Fundada em <strong>1980</strong>, a empresa é detentora de{' '}
                <strong>capital 100% nacional</strong> e já participou de mais de{' '}
                <strong>1.500 projetos executados</strong> em diferentes regiões do país.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                Nossa atuação abrange desde a modernização e requalificação viária até obras
                subterrâneas de alta complexidade, geração solar fotovoltaica, montagem de
                subestações e redes elétricas em média e baixa tensão. Unimos tecnologia de ponta,
                planejamento rigoroso e excelência operacional para que cidades e grandes indústrias
                operem com máxima segurança e sustentabilidade.
              </p>

              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start gap-3">
                <Globe2 className="w-5 h-5 text-[#00A1E4] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Com sede estratégica na Região Sul do Brasil (matriz em Wenceslau Braz - PR, com
                  escritórios comerciais em Curitiba, São Paulo e central em Brasília), garantimos
                  atendimento ágil em <strong>todo o território nacional e MERCOSUL</strong>.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-border/70 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-semibold text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A1E4]" />
                <span>Normas ABNT & Concessionárias</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A1E4]" />
                <span>Gestão Turn-Key Completa</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A1E4]" />
                <span>Programa de Integridade Ativo</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Lado Direito: Nossa Especialidade (Card Institucional Premium) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#165EA9] via-[#104e8d] to-[#0a3560] text-white p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden flex flex-col justify-between">
          {/* Efeito decorativo sutil de luz */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00d0ff]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00A1E4]/20 rounded-full blur-2xl pointer-events-none" />

          <ScrollReveal delay={150}>
            <div className="relative z-10 space-y-5">
              <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-white/10 backdrop-blur-md text-[#00d0ff] font-bold text-xs uppercase tracking-wider border border-white/20">
                <Zap className="w-3.5 h-3.5" />
                Soluções Integradas
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                Nossa Especialidade
              </h3>

              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Atuamos na área de <strong>Engenharia Elétrica desde 1980</strong>, transformando
                regiões comerciais, rodovias e centros urbanos em espaços modernos, seguros e
                energeticamente eficientes.
              </p>

              {/* Lista dos 4 Pilares de Especialidade do Folder */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 bg-white/10 p-3 rounded-xl border border-white/10">
                  <Lightbulb className="w-5 h-5 text-[#00d0ff] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wide text-white">
                      Iluminação Pública & Telegestão
                    </h5>
                    <p className="text-xs text-white/80">
                      Mais de 600 mil pontos geridos e 180 mil controladores inteligentes em rede
                      privada.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/10 p-3 rounded-xl border border-white/10">
                  <Layers className="w-5 h-5 text-[#00d0ff] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wide text-white">
                      Projetos Turn-Key & Subestações
                    </h5>
                    <p className="text-xs text-white/80">
                      Engenharia completa da concepção, montagem eletromecânica até a entrega
                      pronta.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/10 p-3 rounded-xl border border-white/10">
                  <TrendingUp className="w-5 h-5 text-[#00d0ff] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wide text-white">
                      Cidades Inteligentes & Mobilidade
                    </h5>
                    <p className="text-xs text-white/80">
                      Plataforma Estar Digital com OCR/LPR e soluções de telemetria com a Nexum.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote em destaque */}
              <div className="pt-4 border-t border-white/20">
                <div className="pl-4 border-l-4 border-[#00d0ff]">
                  <p className="text-xs sm:text-sm italic font-medium text-white/95 leading-relaxed">
                    "Sempre dentro das normas técnicas mais rigorosas, dos prazos contratuais e da
                    realidade de cada município e parceiro."
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* 3. Bloco: "Nossa Trajetória" com Carrossel de Obras Reais + Linha do Tempo Interativa */}
      <div id="nossa-trajetoria" className="space-y-12">
        {/* Seção Superior de Trajetória: Visão Geral + Carrossel de Fotos */}
        <ScrollReveal>
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-border shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Coluna Texto de Trajetória */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-[#165EA9]/10 text-[#165EA9] font-bold text-xs uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5 text-[#00A1E4]" />
                  Evolução Constante
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#165EA9] tracking-tight uppercase">
                  Nossa Trajetória
                </h3>

                <p className="text-base text-gray-700 leading-relaxed">
                  Desde a fundação em <strong>1980</strong>, a Engeluz dedica-se a construir não
                  apenas obras de infraestrutura, mas um legado de confiança, perenidade e inovação.
                  Nossa história se constrói projeto a projeto, transformando a maneira como as
                  cidades funcionam e acolhem a população.
                </p>

                <p className="text-base text-muted-foreground leading-relaxed">
                  Com uma equipe técnica altamente qualificada e amplo acervo de certidões técnicas,
                  superamos os maiores desafios de engenharia no Brasil. Aliamos rigor técnico à
                  sustentabilidade ambiental, expandindo nossa atuação para concessões públicas
                  (PPPs), saneamento inteligente e geração fotovoltaica.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100">
                    <span className="text-xs font-semibold text-muted-foreground block">
                      Abrangência Geográfica
                    </span>
                    <span className="font-heading text-lg font-extrabold text-[#165EA9]">
                      Brasil & MERCOSUL
                    </span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100">
                    <span className="text-xs font-semibold text-muted-foreground block">
                      Concessões Ativas (PPP)
                    </span>
                    <span className="font-heading text-lg font-extrabold text-[#165EA9]">
                      14 Cidades
                    </span>
                  </div>
                </div>
              </div>

              {/* Coluna Carrossel Fotográfico de Obras */}
              <div className="lg:col-span-6">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-border relative bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
                  <Carousel
                    opts={{ loop: true }}
                    plugins={[carouselPlugin.current]}
                    className="w-full h-full"
                  >
                    <CarouselContent className="-ml-0 h-full">
                      {GALLERY_IMAGES.map((item, index) => (
                        <CarouselItem key={index} className="pl-0 h-full relative">
                          <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 md:p-8 text-white">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#00d0ff] mb-1">
                              Registro Operacional
                            </span>
                            <h5 className="font-heading text-lg md:text-xl font-bold mb-1">
                              {item.title}
                            </h5>
                            <p className="text-xs sm:text-sm text-gray-200 line-clamp-2">
                              {item.desc}
                            </p>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-primary border-none shadow-md h-10 w-10" />
                    <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-primary border-none shadow-md h-10 w-10" />
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 4. Linha do Tempo Oficial com os 4 Grandes Marcos do Folder (Pág. 9) */}
        <div id="linha-do-tempo" className="pt-6 scroll-mt-24">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-1.5 py-1 px-4 rounded-full bg-secondary/15 text-primary font-bold text-xs uppercase tracking-wider mb-3">
                <Calendar className="w-3.5 h-3.5 text-secondary" />
                Folder Institucional Oficial (Pág. 9)
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#165EA9] mb-4">
                Linha do Tempo: Os Grandes Marcos
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Quatro momentos fundamentais que consolidaram a Engeluz como uma potência nacional
                em infraestrutura urbana e tecnologia.
              </p>
            </div>
          </ScrollReveal>

          {/* Versão Desktop da Linha do Tempo com Cards Interativos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMELINE_EVENTS.map((evt, idx) => {
              const Icon = evt.icon
              const isSelected = selectedTimelineIdx === idx
              return (
                <ScrollReveal key={evt.year} delay={idx * 100}>
                  <div
                    onClick={() => setSelectedTimelineIdx(idx)}
                    className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 h-full flex flex-col justify-between border relative overflow-hidden ${
                      isSelected
                        ? 'bg-gradient-to-b from-[#165EA9] to-[#0d447e] text-white shadow-xl scale-[1.02] border-[#00d0ff]'
                        : 'bg-white hover:bg-blue-50/50 text-gray-800 shadow-sm hover:shadow-md border-border'
                    }`}
                  >
                    {/* Top Bar com Data Oficial */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                            isSelected
                              ? 'bg-white/15 text-[#00d0ff] border border-[#00d0ff]/30'
                              : 'bg-blue-100 text-[#165EA9]'
                          }`}
                        >
                          {evt.date}
                        </span>

                        <div
                          className={`p-2 rounded-xl ${
                            isSelected ? 'bg-white/20 text-[#00d0ff]' : 'bg-blue-50 text-[#165EA9]'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Ano em tamanho gigante */}
                      <div
                        className={`font-heading text-4xl font-black mb-2 tracking-tight ${
                          isSelected ? 'text-white' : 'text-[#165EA9]'
                        }`}
                      >
                        {evt.year}
                      </div>

                      <h4
                        className={`font-heading text-lg font-bold mb-1 leading-snug ${
                          isSelected ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {evt.title}
                      </h4>

                      <p
                        className={`text-xs font-semibold mb-3 ${
                          isSelected ? 'text-[#00d0ff]' : 'text-[#00A1E4]'
                        }`}
                      >
                        {evt.subtitle}
                      </p>

                      <p
                        className={`text-xs leading-relaxed ${
                          isSelected ? 'text-white/90' : 'text-muted-foreground'
                        }`}
                      >
                        {evt.desc}
                      </p>
                    </div>

                    {/* Tag de Categoria no rodapé do card */}
                    <div className="pt-4 mt-4 border-t border-current/10 flex items-center justify-between">
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider ${
                          isSelected ? 'text-[#00d0ff]' : 'text-[#165EA9]'
                        }`}
                      >
                        {evt.badge}
                      </span>
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform ${
                          isSelected ? 'rotate-45 text-[#00d0ff]' : 'text-gray-400'
                        }`}
                      />
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Destaque do marco selecionado */}
          <ScrollReveal delay={200}>
            <div className="mt-8 p-6 md:p-8 rounded-3xl bg-blue-50/70 border border-blue-200/60 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A1E4]">
                  Foco Histórico: {TIMELINE_EVENTS[selectedTimelineIdx].year}
                </span>
                <h5 className="font-heading text-lg md:text-xl font-bold text-[#165EA9]">
                  {TIMELINE_EVENTS[selectedTimelineIdx].title} —{' '}
                  {TIMELINE_EVENTS[selectedTimelineIdx].subtitle}
                </h5>
                <p className="text-sm text-gray-600 max-w-2xl">
                  {TIMELINE_EVENTS[selectedTimelineIdx].desc}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="text-right hidden sm:block">
                  <span className="text-xs text-muted-foreground block">Fonte Documental:</span>
                  <span className="text-xs font-bold text-gray-800">
                    Folder Institucional Engeluz
                  </span>
                </div>
                <div className="h-10 w-10 rounded-2xl bg-[#165EA9] text-white flex items-center justify-center font-bold text-xs shadow-md">
                  Pág 9
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

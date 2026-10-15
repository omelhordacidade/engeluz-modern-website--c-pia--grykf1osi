import {
  Lightbulb,
  Map,
  Wrench,
  KeyRound,
  Zap,
  Sun,
  Sparkles,
  Building2,
  Construction,
  Landmark,
  TreePine,
  Pipette,
  Hammer,
  ClipboardCheck,
  Compass,
} from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { ScrollReveal } from '@/components/ScrollReveal'
import { renderPdfProjectImage, CropRegion } from '@/services/folderPdfService'

// Imagem existente para o Paço Municipal de Hortolândia (corresponde fielmente ao projeto da pág 18-20)
import imgHor1 from '@/assets/hor1-f5ad4.jpg'
// Imagens de fallback estáticas
import imgToledo1 from '@/assets/toledo1-755f1.jpeg'
import imgCuiaba from '@/assets/cuiaba-e4bd8.jpeg'
import imgFront from '@/assets/img-front-b80a3.jpg'
import imgUploadBra from '@/assets/bra2-cf8f7.jpeg'
import imgFunpar from '@/assets/funpar4-f90a5.jpeg'

export interface ServiceArea {
  title: string
  desc: string
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  tag?: string
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    title: 'Gestão de Iluminação Pública',
    desc: 'Administração inteligente do parque luminotécnico, focada em eficiência energética, telegestão e redução de custos operacionais para municípios.',
    icon: Lightbulb,
    tag: 'Gestão & Eficiência',
  },
  {
    title: 'Cadastramento Georreferenciado',
    desc: 'Mapeamento geográfico digital de alta precisão de postes, luminárias e ativos municipais com tecnologia SIG para gestão em tempo real.',
    icon: Map,
    tag: 'Tecnologia & SIG',
  },
  {
    title: 'Manutenção de Iluminação Pública',
    desc: 'Serviços preventivos e corretivos ágeis com equipes especializadas, garantindo vias iluminadas, seguras e em conformidade contínua.',
    icon: Wrench,
    tag: 'Operação Contínua',
  },
  {
    title: 'Projetos Turn-Key',
    desc: 'Soluções integradas do projeto executivo à entrega final pronta para operar, assumindo responsabilidade total por engenharia e montagem.',
    icon: KeyRound,
    tag: 'Engenharia Global',
  },
  {
    title: 'Montagens de Subestação e Redes (média e baixa tensão)',
    desc: 'Construção, montagem eletromecânica e comissionamento de subestações transformadoras e redes de distribuição aéreas e subterrâneas.',
    icon: Zap,
    tag: 'Alta & Média Tensão',
  },
  {
    title: 'Energia Solar',
    desc: 'Desenvolvimento e implantação de usinas fotovoltaicas para geração distribuída, unindo sustentabilidade ambiental e economia financeira.',
    icon: Sun,
    tag: 'Sustentabilidade',
  },
  {
    title: 'Iluminação Cênica',
    desc: 'Valorização estética de monumentos, prédios históricos e praças por meio de projetos luminotécnicos artísticos e iluminação dinâmica.',
    icon: Sparkles,
    tag: 'Patrimônio & Arte',
  },
  {
    title: 'Construção de Edificações',
    desc: 'Execução de prédios públicos e comerciais com engenharia moderna, cumprimento rigoroso de prazos e excelência no acabamento.',
    icon: Building2,
    tag: 'Construção Civil',
  },
  {
    title: 'Pavimentação e Calçamento',
    desc: 'Implantação e recuperação de pavimentos asfálticos, pisos intertravados e passeios com foco em acessibilidade e durabilidade viária.',
    icon: Construction,
    tag: 'Vias Urbanas',
  },
  {
    title: 'Urbanização de Espaços',
    desc: 'Requalificação completa de centros urbanos, parques e calçadões, priorizando a convivência social segura e o bem-estar dos cidadãos.',
    icon: Landmark,
    tag: 'Espaços Públicos',
  },
  {
    title: 'Paisagismo e Mobiliário Urbano',
    desc: 'Instalação de bancos, lixeiras, abrigos de ônibus e projetos paisagísticos integrados que harmonizam a estética visual das cidades.',
    icon: TreePine,
    tag: 'Conforto Urbano',
  },
  {
    title: 'Drenagem e Redes de Infraestrutura',
    desc: 'Obras de galerias pluviais, canalizações, redes de telecomunicações e tubulações técnicas para escoamento eficiente e proteção contra enchentes.',
    icon: Pipette,
    tag: 'Infraestrutura Oculta',
  },
  {
    title: 'Reformas e Revitalizações',
    desc: 'Recuperação estrutural, modernização de instalações e restauro de edifícios e equipamentos públicos para novos ciclos de uso.',
    icon: Hammer,
    tag: 'Modernização',
  },
  {
    title: 'Gerenciamento e Execução de Obras',
    desc: 'Coordenação técnica integral com cronogramas precisos, controle de custos, segurança do trabalho e garantia de conformidade.',
    icon: ClipboardCheck,
    tag: 'Gestão Técnica',
  },
  {
    title: 'Projetos e Compatibilização de Engenharia',
    desc: 'Elaboração de projetos multidisciplinares (BIM) e compatibilização estrutural, elétrica e hidráulica para mitigar retrabalhos.',
    icon: Compass,
    tag: 'BIM & Projetos',
  },
]

export interface FeaturedProject {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  badge: string
  // Parâmetros de extração da imagem real do PDF oficial (quando aplicável)
  pdfSource?: {
    pageNumber: number
    crop: CropRegion
  }
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'contorno-sul',
    title: 'Contorno Sul Curitiba',
    subtitle: 'Iluminação rodoviária, 10,7km na BR-376',
    description:
      'Modernização luminotécnica completa ao longo de 10,7 km na BR-376 em Curitiba, ampliando a visibilidade noturna e a segurança no tráfego rodoviário de alta densidade.',
    image: imgToledo1,
    badge: 'Rodovias & LED',
    pdfSource: {
      pageNumber: 6,
      crop: {
        topPercent: 8,
        leftPercent: 0,
        widthPercent: 100,
        heightPercent: 64,
      },
    },
  },
  {
    id: 'paco-hortolandia',
    title: 'Paço Municipal de Hortolândia',
    subtitle: 'Obra completa com iluminação cênica e energia solar',
    description:
      'Construção e infraestrutura integral da sede do executivo municipal, integrando iluminação cênica arquitetural e geração fotovoltaica sustentável.',
    image: imgHor1,
    badge: 'Obra Completa',
    pdfSource: {
      pageNumber: 18,
      crop: {
        topPercent: 33,
        leftPercent: 0,
        widthPercent: 100,
        heightPercent: 50,
      },
    },
  },
  {
    id: 'ute-figueira',
    title: 'Usina Termelétrica de Figueira',
    subtitle: '20MW, sistemas elétricos completos',
    description:
      'Engenharia eletromecânica especializada para usina com capacidade de 20MW, incluindo sistemas elétricos completos de média e alta potência.',
    image: imgCuiaba,
    badge: 'Geração & Energia',
    pdfSource: {
      pageNumber: 21,
      crop: {
        topPercent: 28,
        leftPercent: 0,
        widthPercent: 100,
        heightPercent: 72,
      },
    },
  },
  {
    id: 'cais-leste-moegao',
    title: 'Projeto Cais Leste "Moegão"',
    subtitle: 'Porto de Paranaguá, sistemas de automação',
    description:
      'Desenvolvimento e montagem de infraestrutura elétrica e automação industrial de grande porte para operação de descarga ferroviária no Porto de Paranaguá.',
    image: imgFunpar,
    badge: 'Portuário & Automação',
    pdfSource: {
      pageNumber: 23,
      crop: {
        topPercent: 40,
        leftPercent: 0,
        widthPercent: 100,
        heightPercent: 44,
      },
    },
  },
  {
    id: 'subestacao-fazenda-canada',
    title: 'Subestação Fazenda Canadá',
    subtitle: 'Equatorial Goiás, 138kV',
    description:
      'Construção e montagem eletromecânica de subestação de alta tensão em 138kV para a concessionária Equatorial Goiás, reforçando a confiabilidade energética regional.',
    image: imgUploadBra,
    badge: 'Subestação 138kV',
    pdfSource: {
      pageNumber: 25,
      crop: {
        topPercent: 25,
        leftPercent: 0,
        widthPercent: 100,
        heightPercent: 51,
      },
    },
  },
  {
    id: 'subestacao-gurupi-serra-mesa',
    title: 'Subestação Gurupi e Serra da Mesa',
    subtitle: 'Modernização de proteção e controle',
    description:
      'Modernização e retrofit de sistemas de proteção, controle, automação e supervisão em subestações estratégicas interligadas ao Sistema Interligado Nacional (SIN).',
    image: imgFront,
    badge: 'Proteção & Controle',
    pdfSource: {
      pageNumber: 27,
      crop: {
        topPercent: 45,
        leftPercent: 0,
        widthPercent: 100,
        heightPercent: 41,
      },
    },
  },
]

interface AreasAtuacaoProps {}

export function AreasAtuacaoSection(_props?: AreasAtuacaoProps) {
  // Estado para armazenar as imagens reais extraídas com precisão do PDF do folder institucional
  const [projectImages, setProjectImages] = useState<Record<string, string>>({
    'paco-hortolandia': imgHor1,
  })

  useEffect(() => {
    let isCancelled = false

    const loadRealImages = async () => {
      for (const proj of FEATURED_PROJECTS) {
        if (!proj.pdfSource) continue
        try {
          const realImg = await renderPdfProjectImage(
            proj.id,
            proj.pdfSource.pageNumber,
            proj.pdfSource.crop,
            2.0,
          )
          if (!isCancelled && realImg) {
            setProjectImages((prev) => ({ ...prev, [proj.id]: realImg }))
          }
        } catch (err) {
          console.warn(`Erro ao carregar imagem real do PDF para o projeto ${proj.title}:`, err)
        }
      }
    }

    loadRealImages()

    return () => {
      isCancelled = true
    }
  }, [])

  return (
    <section className="mb-24">
      {/* Cabeçalho da Seção */}
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-4 uppercase tracking-wider">
            Portfólio de Serviços
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
            Nossas Áreas de Atuação
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Com mais de quatro décadas de experiência e corpo técnico multidisciplinar, a Engeluz
            oferece soluções completas em infraestrutura urbana, engenharia elétrica, iluminação
            pública e obras civis em todo o território nacional.
          </p>
        </div>
      </ScrollReveal>

      {/* Grid de 15 Cards - Padrão Azul consistente com Código de Conduta */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {SERVICE_AREAS.map((item, idx) => {
          const Icon = item.icon
          return (
            <ScrollReveal key={idx} delay={(idx % 6) * 70}>
              <div className="bg-[#165EA9] hover:bg-[#135396] text-white p-8 md:p-9 rounded-[32px] text-center flex flex-col items-center h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group border border-white/10 relative overflow-hidden">
                {/* Efeito sutil de brilho superior */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00A1E4] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Ícone em container quadrado arredondado azul escuro com ícone cyan */}
                <div className="bg-[#246CA8] p-5 rounded-3xl mb-6 shadow-inner group-hover:bg-[#206096] transition-colors">
                  <Icon
                    className="h-10 w-10 text-[#00A1E4] group-hover:scale-110 transition-transform duration-300"
                    strokeWidth={2}
                  />
                </div>

                {/* Tag de categoria em cyan */}
                {item.tag && (
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#00d0ff] bg-[#0f447a]/80 px-3 py-1 rounded-full mb-3 border border-[#00A1E4]/30">
                    {item.tag}
                  </span>
                )}

                {/* Título do Card */}
                <h3 className="font-heading text-xl md:text-[22px] font-bold leading-snug mb-3 text-white group-hover:text-[#00d0ff] transition-colors">
                  {item.title}
                </h3>

                {/* Descrição */}
                <p className="text-[#E6F0F9] text-[15px] leading-relaxed flex-grow">{item.desc}</p>
              </div>
            </ScrollReveal>
          )
        })}
      </div>

      {/* Subseção Projetos em Destaque */}
      <div className="pt-8 border-t border-border/60">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-4 uppercase tracking-wider">
              Casos Reais de Sucesso
            </span>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
              Projetos em Destaque
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Obras emblemáticas e intervenções estratégicas que demonstram a robustez operacional e
              o pioneirismo técnico da Engeluz.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid de 6 cards de Projetos em Destaque */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((proj, idx) => (
            <ScrollReveal key={idx} delay={idx * 90}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border flex flex-col h-full group hover:-translate-y-1">
                {/* Imagem do Projeto */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={projectImages[proj.id] || proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute top-4 right-4 bg-[#165EA9]/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                    {proj.badge}
                  </span>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 md:p-7 flex flex-col flex-grow">
                  <h4 className="font-heading text-xl font-bold text-primary mb-1.5 group-hover:text-secondary transition-colors">
                    {proj.title}
                  </h4>
                  <p className="text-sm font-semibold text-secondary mb-3">({proj.subtitle})</p>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {proj.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

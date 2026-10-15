import { CheckCircle2, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AnimatedSection } from '@/components/ui/animated-section'
import { ENTREGAS, VANTAGENS } from '@/data/obras-content'
import imgItapevi5 from '@/assets/itapevi-5-06a55.jpg'

export function UndergroundSection() {
  return (
    <>
      {/* Hero from Obras Subterraneas */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-primary mt-12">
        <div className="absolute inset-0">
          <img
            src={imgItapevi5}
            alt="Obras"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary" />
        </div>
        <div className="relative z-10 container text-center text-white space-y-6">
          <Badge
            variant="secondary"
            className="px-6 py-2 text-sm font-bold uppercase tracking-widest border-none bg-secondary text-primary hover:bg-white"
          >
            Engeluz
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight max-w-5xl mx-auto leading-[1.1]">
            OBRAS SUBTERRÂNEAS E REQUALIFICAÇÃO URBANA
          </h2>
        </div>
      </section>

      {/* Quem Somos & Nossa Especialidade */}
      <section className="py-24 bg-white relative">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-black text-primary mb-8 tracking-tight">QUEM SOMOS</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  <strong>O Grupo Engeluz</strong> é referência nacional em soluções de
                  infraestrutura urbana e nossa história se constrói projeto a projeto,
                  transformando a forma como as cidades funcionam e se apresentam.
                </p>
                <p>
                  Atuamos em modernização, requalificação viária e obras subterrâneas de alta
                  complexidade, unindo tecnologia de ponta, planejamento rigoroso e excelência
                  operacional em cada entrega.
                </p>
                <p>
                  Mais do que executar obras, transformamos espaços públicos: garantindo segurança,
                  eficiência e um impacto visual que as pessoas percebem e aprovam.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-primary text-white p-10 md:p-14 rounded-[2rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h2 className="text-3xl font-black mb-8 text-secondary tracking-tight">
                  NOSSA ESPECIALIDADE
                </h2>
                <div className="space-y-6 text-white/90 text-xl leading-relaxed relative z-10">
                  <p>
                    Atuamos na área de <strong>Engenharia Elétrica desde 1980</strong>,
                    transformando regiões comerciais e centros urbanos em espaços modernos, seguros
                    e visualmente agradáveis.
                  </p>
                  <p className="border-l-4 border-secondary pl-6 font-medium italic text-lg opacity-80">
                    Sempre dentro das normas técnicas, dos prazos e da realidade de cada cidade.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* O Que Entregamos */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent opacity-50" />
        <div className="container relative z-10">
          <AnimatedSection className="mb-16">
            <h2 className="text-4xl font-black text-primary mb-6 tracking-tight">
              O QUE ENTREGAMOS
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Do projeto à entrega final, assumimos cada etapa com{' '}
              <strong>responsabilidade e excelência</strong>.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENTREGAS.map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-300 h-full group hover:-translate-y-1 bg-white">
                  <CardContent className="p-8 flex items-start gap-5">
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                      <ChevronRight className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                    </div>
                    <span className="font-medium text-gray-800 leading-relaxed text-lg pt-1">
                      {item}
                    </span>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-24 bg-primary text-white">
        <div className="container">
          <AnimatedSection className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
              Vantagens do Sistema Subterrâneo
            </h2>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-12">
            {VANTAGENS.map((item, i) => (
              <AnimatedSection key={i} delay={i * 100} className="relative">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center shrink-0 shadow-lg shadow-secondary/20">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{item.title}</h3>
                <p className="text-white/80 leading-relaxed text-lg">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

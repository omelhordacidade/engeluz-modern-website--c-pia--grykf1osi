import { ScrollReveal } from '@/components/ScrollReveal'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, Shield, Leaf, Users, Building, HardHat } from 'lucide-react'
import imgItapevi5 from '@/assets/itapevi-5-06a55.jpg'

const entregas = [
  'Projetos executivos completos',
  'Execução de obras subterrâneas com equipe especializada',
  'Gerenciamento e fiscalização técnica',
  'Implantação de redes elétricas e de telecom subterrâneas',
  'Requalificação de calçadões, paisagismo e mobiliário urbano',
  'Testes, certificações e padronização municipal',
]

const vantagens = [
  {
    icon: Shield,
    title: 'Redução de manutenção',
    desc: 'Redes protegidas contra intempéries, quedas de energia e danos externos, garantindo maior continuidade operacional e menos intervenções ao longo do tempo.',
  },
  {
    icon: Leaf,
    title: 'Valorização estética',
    desc: 'Eliminação da poluição visual causada por fios e postes, resultando em ambientes mais organizados, modernos e atrativos para moradores, turistas e comércio local.',
  },
  {
    icon: Users,
    title: 'Acessibilidade e mobilidade',
    desc: 'Liberação do espaço aéreo e físico, permitindo calçadas mais amplas, seguras e adaptadas para circulação de pedestres, incluindo pessoas com mobilidade reduzida.',
  },
]

export function ExecutiveSummary() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-6 uppercase tracking-wider">
              Obras Subterrâneas e Requalificação Urbana
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-8">
              Transformando cidades com tecnologia e qualidade
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                O <strong>Grupo Engeluz</strong> é referência nacional em soluções de infraestrutura
                urbana e nossa história se constrói projeto a projeto, transformando a forma como as
                cidades funcionam e se apresentam.
              </p>
              <p>
                Atuamos em modernização, requalificação viária e obras subterrâneas de alta
                complexidade, unindo tecnologia de ponta, planejamento rigoroso e excelência
                operacional em cada entrega. Mais do que executar obras, transformamos espaços
                públicos: garantindo segurança, eficiência e um impacto visual que as pessoas
                percebem e aprovam.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Deliverables & Expertise Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24 items-center">
          <ScrollReveal delay={100}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={imgItapevi5}
                alt="Infraestrutura"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-white font-heading font-bold text-2xl mb-3 flex items-center gap-3">
                    <Building className="text-secondary h-8 w-8" /> Nossa Especialidade
                  </h3>
                  <p className="text-gray-200">
                    Atuamos na área de Engenharia Elétrica desde 1980, transformando regiões
                    comerciais e centros urbanos em espaços modernos, seguros e visualmente
                    agradáveis. Sempre dentro das normas técnicas, dos prazos e da realidade de cada
                    cidade.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-muted/50 p-8 md:p-10 rounded-2xl border border-border">
              <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <HardHat className="text-secondary h-7 w-7" /> O Que Entregamos
              </h3>
              <p className="text-muted-foreground mb-8">
                Do projeto à entrega final, assumimos cada etapa com responsabilidade e excelência.
              </p>
              <ul className="space-y-5">
                {entregas.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Advantages */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl font-bold text-primary mb-4">
              Vantagens do Sistema Subterrâneo
            </h3>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {vantagens.map((vantagem, idx) => (
            <ScrollReveal key={idx} delay={idx * 150}>
              <Card className="h-full border-border hover:border-secondary/50 transition-colors shadow-sm hover:shadow-md">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                    <vantagem.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-primary mb-4">
                    {vantagem.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{vantagem.desc}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

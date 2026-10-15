import { ScrollReveal } from '@/components/ScrollReveal'
import { HardHat, Lightbulb, Zap, Network, ShieldCheck, TreePine } from 'lucide-react'
import imgFront from '@/assets/img-front-b80a3.jpg'
import imgItapevi3 from '@/assets/itapevi-3-a0427.jpg'

const solutions = [
  {
    icon: <Network className="h-8 w-8" />,
    title: 'Redes Subterrâneas',
    desc: 'Conversão de redes aéreas para subterrâneas, englobando energia elétrica e telecomunicações, reduzindo poluição visual e aumentando a confiabilidade.',
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: 'Iluminação Pública e Monumental',
    desc: 'Projetos e instalações de iluminação viária, praças, parques e monumentos históricos com tecnologia LED e telegestão.',
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Infraestrutura Elétrica',
    desc: 'Construção e manutenção de subestações, linhas de distribuição e transmissão em média e alta tensão.',
  },
  {
    icon: <TreePine className="h-8 w-8" />,
    title: 'Requalificação Urbana',
    desc: 'Revitalização completa de calçadões, passeios públicos e praças, com foco em acessibilidade, paisagismo e mobiliário urbano.',
  },
  {
    icon: <HardHat className="h-8 w-8" />,
    title: 'Obras Industriais',
    desc: 'Instalações eletromecânicas completas para o setor industrial, automação e instrumentação de processos.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: 'Manutenção e Operação',
    desc: 'Gestão de ativos, manutenção preventiva e corretiva de sistemas elétricos para garantir operação ininterrupta.',
  },
]

export default function Solucoes() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={imgFront} alt="Infraestrutura" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">Nossas Soluções</h1>
          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Excelência em engenharia e infraestrutura urbana. Desenvolvemos projetos inovadores e
            executamos obras complexas que transformam cidades, aumentam a eficiência energética e
            melhoram a qualidade de vida.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-4 uppercase tracking-wider">
              Expertise
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
              O que fazemos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Da concepção do projeto executivo à entrega final, atuamos com rigor técnico,
              segurança e compromisso ambiental.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {solutions.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-lg hover:border-secondary/50 transition-all group h-full flex flex-col">
                <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="bg-muted/50 rounded-3xl p-8 md:p-12 border border-border flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="font-heading text-3xl font-bold text-primary mb-4">
                Diferenciais da Engeluz
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-secondary shrink-0" />
                  <span>
                    <strong>Qualidade e Certificações:</strong> Operamos seguindo as normas mais
                    rigorosas do setor, com certificações que atestam a qualidade dos nossos
                    processos.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-secondary shrink-0" />
                  <span>
                    <strong>Inovação Tecnológica:</strong> Utilização de equipamentos modernos e
                    métodos construtivos que otimizam prazos e reduzem impactos.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Network className="w-6 h-6 text-secondary shrink-0" />
                  <span>
                    <strong>Equipe Multidisciplinar:</strong> Corpo técnico altamente capacitado
                    para gerenciar projetos de alta complexidade em todo o território nacional.
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-lg">
              <img src={imgItapevi3} alt="Equipe Engeluz" className="w-full h-full object-cover" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}

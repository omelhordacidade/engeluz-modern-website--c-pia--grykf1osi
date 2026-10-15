import {
  Cpu,
  Lightbulb,
  Radio,
  ShieldCheck,
  Zap,
  Map as MapIcon,
  Wrench,
  Settings,
  Sun,
  MonitorSmartphone,
  Layers,
} from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal'
import imgItapevi3 from '@/assets/itapevi-3-a0427.jpg'

const solutions = [
  { name: 'Gestão de Iluminação Pública', icon: Lightbulb },
  { name: 'Manutenção de Iluminação Pública', icon: Wrench },
  { name: 'Telegestão', icon: Radio },
  { name: 'Cadastramento Georreferenciado', icon: MapIcon },
  { name: 'Projetos Turn-Key', icon: Settings },
  { name: 'Soluções em Energia Solar', icon: Sun },
  { name: 'Montagens de subestação e redes (MT/BT)', icon: Zap },
  { name: 'Software de controle e gerenciamento', icon: MonitorSmartphone },
  { name: 'Projetos de Iluminação Cênica', icon: Layers },
]

const products = [
  { name: 'Braços', icon: Zap },
  { name: 'Postes', icon: ShieldCheck },
  { name: 'Núcleos', icon: Cpu },
  { name: 'Luminárias', icon: Lightbulb },
  { name: 'Telegestão', icon: Radio },
]

export function Products() {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 mix-blend-luminosity">
        <img src={imgItapevi3} alt="Background Texture" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Áreas de Atuação
            </h2>
            <p className="max-w-3xl mx-auto text-primary-foreground/80 text-base md:text-lg leading-relaxed">
              Toda linha de produtos Engeluz segue critérios rigorosos da ABNT e cumpre as
              exigências aprovativas de concessionárias.
            </p>
          </ScrollReveal>
        </div>

        <div className="mb-20">
          <ScrollReveal>
            <h3 className="text-2xl font-bold mb-8 text-center text-secondary">Nossas Soluções</h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {solutions.map((sol, idx) => (
              <ScrollReveal key={idx} delay={50 * idx}>
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors h-full flex flex-col items-center text-center group">
                  <sol.icon className="h-10 w-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-sm text-white/90">{sol.name}</h4>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div>
          <ScrollReveal>
            <h3 className="text-2xl font-bold mb-8 text-center text-secondary">Nossos Produtos</h3>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {products.map((product, idx) => (
              <ScrollReveal key={idx} delay={50 * idx}>
                <div className="group flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 hover:bg-white/10 cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                    <product.icon className="h-8 w-8 text-secondary group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-heading font-semibold text-base text-white/90 group-hover:text-white">
                    {product.name}
                  </h4>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

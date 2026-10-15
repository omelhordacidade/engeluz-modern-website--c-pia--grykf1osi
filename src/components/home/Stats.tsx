import { ScrollReveal } from '@/components/ScrollReveal'
import { Lightbulb, Building2, CalendarDays } from 'lucide-react'

const stats = [
  { icon: CalendarDays, value: '40+', label: 'Anos de Experiência', desc: 'Atuando desde 1980' },
  {
    icon: Building2,
    value: '1.500+',
    label: 'Projetos Executados',
    desc: 'Em todo o território nacional',
  },
  { icon: Lightbulb, value: '600 mil+', label: 'Pontos de Iluminação', desc: 'Sob nossa gestão' },
]

export function Stats() {
  return (
    <section className="py-20 bg-muted/50 border-y border-border">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Números que nos Movem
            </h2>
            <p className="text-lg text-muted-foreground">
              A Engeluz é uma empresa de capital nacional atuante na área de Engenharia Elétrica,
              conectando o Brasil e o Mercosul com soluções seguras e eficientes em infraestrutura.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="bg-background p-8 rounded-2xl shadow-subtle border border-border text-center group hover:border-secondary/50 transition-colors">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-primary mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.desc}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

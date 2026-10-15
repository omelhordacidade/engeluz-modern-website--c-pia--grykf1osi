import { MapPin, Phone } from 'lucide-react'
import { Logo } from '@/components/Logo'
import { AnimatedSection } from '@/components/ui/animated-section'

export function FooterContactSection() {
  return (
    <section className="py-24 bg-primary text-white border-t-8 border-secondary">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="bg-white p-6 rounded-2xl mb-8">
            <Logo variant="default" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
            Transformando cidades com tecnologia e qualidade.
          </h2>
          <p className="text-secondary font-bold text-xl tracking-wide">www.engeluz.com.br</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <AnimatedSection
            delay={100}
            className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors"
          >
            <h4 className="font-black text-secondary flex items-center gap-3 mb-6 uppercase tracking-wider text-sm">
              <MapPin className="w-5 h-5" /> Engenharia e Fábrica
            </h4>
            <p className="text-3xl font-black mb-4 flex items-center gap-3 text-white">
              <Phone className="w-6 h-6 text-white/50" /> 43 3513.1200
            </p>
            <div className="text-white/70 space-y-1 text-sm leading-relaxed">
              <p>Rodovia Parigot de Souza, KM 254,</p>
              <p>Bloco A, Wenceslau Braz – PR</p>
            </div>
          </AnimatedSection>

          <AnimatedSection
            delay={200}
            className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors"
          >
            <h4 className="font-black text-secondary flex items-center gap-3 mb-6 uppercase tracking-wider text-sm">
              <MapPin className="w-5 h-5" /> Escritório Comercial Curitiba
            </h4>
            <p className="text-3xl font-black mb-4 flex items-center gap-3 text-white">
              <Phone className="w-6 h-6 text-white/50" /> 41 3352.1428
            </p>
            <div className="text-white/70 space-y-1 text-sm leading-relaxed">
              <p>Rua Eduardo Sprada, 344,</p>
              <p>Campo Comprido, Curitiba – PR</p>
            </div>
          </AnimatedSection>

          <AnimatedSection
            delay={300}
            className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors"
          >
            <h4 className="font-black text-secondary flex items-center gap-3 mb-6 uppercase tracking-wider text-sm">
              <MapPin className="w-5 h-5" /> Escritório Comercial SP
            </h4>
            <p className="text-3xl font-black mb-4 flex items-center gap-3 text-white">
              <Phone className="w-6 h-6 text-white/50" /> 11 3864.2759
            </p>
            <div className="text-white/70 space-y-1 text-sm leading-relaxed">
              <p>Avenida Antartica, 675, CJ 2101,</p>
              <p>Barra Funda, São Paulo – SP</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

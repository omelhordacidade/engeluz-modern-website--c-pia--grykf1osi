import { SolutionsSection } from '@/components/portfolio/SolutionsSection'
import { UndergroundSection } from '@/components/portfolio/UndergroundSection'
import { SuccessCasesSection } from '@/components/portfolio/SuccessCasesSection'
import { FooterContactSection } from '@/components/portfolio/FooterContactSection'
import imgFront from '@/assets/img-front-b80a3.jpg'

export default function Portfolio() {
  return (
    <main className="min-h-screen pt-20 overflow-hidden bg-background">
      {/* Hero Section from Nossas Solucoes */}
      <div className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={imgFront} alt="Infraestrutura" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">Nosso Portfólio</h1>
          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Excelência em engenharia e infraestrutura urbana. Desenvolvemos projetos inovadores e
            executamos obras complexas que transformam cidades, aumentam a eficiência energética e
            melhoram a qualidade de vida.
          </p>
        </div>
      </div>

      <SolutionsSection />
      <UndergroundSection />
      <SuccessCasesSection />
      <FooterContactSection />
    </main>
  )
}

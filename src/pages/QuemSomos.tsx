import { ScrollReveal } from '@/components/ScrollReveal'
import { MapPin } from 'lucide-react'
import { AreasAtuacaoSection } from '@/components/quem-somos/AreasAtuacaoSection'
import { FolderInstitutionalCarousel } from '@/components/quem-somos/FolderInstitutionalCarousel'
import { QuemSomosHero } from '@/components/quem-somos/QuemSomosHero'
import { UnifiedAboutSection } from '@/components/quem-somos/UnifiedAboutSection'

export default function QuemSomos() {
  return (
    <main className="min-h-screen pt-20 overflow-hidden bg-background">
      {/* 1. Hero Section moderno com destaque para o título do Folder */}
      <QuemSomosHero />

      <div className="container mx-auto px-4 py-16 md:py-20 max-w-6xl">
        {/* 2. Layout Unificado: Quem Somos + Nossa Especialidade + Nossa Trajetória & Linha do Tempo */}
        <UnifiedAboutSection />

        {/* Portfólio de Serviços: Nossas Áreas de Atuação & Projetos em Destaque (INTACTO) */}
        <AreasAtuacaoSection />

        {/* Novo Slide/Carrossel do Folder Institucional Completo (30 páginas) */}
        <ScrollReveal>
          <FolderInstitutionalCarousel />
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
              <MapPin className="text-secondary w-8 h-8" />
              Nossa Localização
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sediada em Wenceslau Braz - PR, atuamos com alcance nacional e no Mercosul.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative group w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-lg border border-border bg-muted">
          <iframe
            src="https://maps.google.com/maps?q=Rodovia%20Parigot%20de%20Souza,%20KM%20254,%20Bloco%20A%20-%20Distrito%20Industrial,%20Wenceslau%20Braz%20-%20PR&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            title="Localização Engeluz Matriz - Wenceslau Braz - PR"
            aria-label="Mapa de localização da Matriz Engeluz em Wenceslau Braz - PR"
          />
          <div className="absolute top-3 right-3 pointer-events-auto z-10">
            <a
              href="https://maps.google.com/?q=Rodovia%20Parigot%20de%20Souza,%20KM%20254,%20Bloco%20A%20-%20Distrito%20Industrial,%20Wenceslau%20Braz%20-%20PR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-background/95 hover:bg-background text-foreground shadow-md backdrop-blur-sm transition-colors border border-border"
            >
              <span>Abrir no Google Maps</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

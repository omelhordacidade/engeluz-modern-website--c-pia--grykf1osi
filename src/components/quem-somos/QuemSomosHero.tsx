import { ArrowRight, ShieldCheck, Award, Zap, Building2, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

// Fotos reais de obras e infraestrutura já presentes no projeto
import imgFront from '@/assets/img-front-b80a3.jpg'
import imgToledo1 from '@/assets/toledo1-755f1.jpeg'
import imgItapevi3 from '@/assets/itapevi-3-a0427.jpg'
import imgItapevi5 from '@/assets/itapevi-5-06a55.jpg'
import imgDji2 from '@/assets/djifly20260504180742251777928923017photooptimized-d2e03.jpg'
import imgNew1 from '@/assets/01-92379.png'

const HERO_SLIDES = [
  {
    image: imgFront,
    caption: 'Iluminação Pública e Engenharia Urbana',
    location: 'Atuação Nacional',
  },
  {
    image: imgToledo1,
    caption: 'Grandes Obras Rodoviárias e Concessões',
    location: 'Toledo & Contorno Sul',
  },
  {
    image: imgDji2,
    caption: 'Telegestão e Redes Inteligentes LoRaWAN',
    location: 'Infraestrutura Urbana',
  },
  {
    image: imgItapevi5,
    caption: 'Requalificação Urbana e Obras Subterrâneas',
    location: 'São Paulo & Sul',
  },
  {
    image: imgItapevi3,
    caption: 'Eficiência Energética e Iluminação LED',
    location: '+600 mil pontos geridos',
  },
  {
    image: imgNew1,
    caption: 'Engenharia Elétrica de Alta Complexidade',
    location: 'Brasil & Mercosul',
  },
]

export function QuemSomosHero() {
  return (
    <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center bg-[#0d3b6f] text-white overflow-hidden">
      {/* Background Slideshow com transição suave */}
      <div className="absolute inset-0 z-0">
        <Carousel
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
          opts={{ loop: true, watchDrag: false, duration: 35 }}
          className="w-full h-full"
        >
          <CarouselContent className="h-full ml-0">
            {HERO_SLIDES.map((slide, idx) => (
              <CarouselItem key={idx} className="pl-0 h-full relative">
                <img
                  src={slide.image}
                  alt={slide.caption}
                  className="w-full h-full min-h-[580px] lg:min-h-[660px] object-cover scale-105 animate-fade-in-up"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Gradientes e cortes geométricos inspirados no folder oficial Engeluz */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2b52]/95 via-[#165EA9]/85 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#092242] via-transparent to-black/30 pointer-events-none" />

        {/* Faixa diagonal sutil ciano/azul no rodapé do hero */}
        <div className="absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-24 relative z-10 max-w-6xl">
        <div className="max-w-3xl">
          {/* Badge de cabeçalho */}
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00d0ff] font-semibold text-xs md:text-sm uppercase tracking-wider mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#00d0ff] animate-ping" />
              <span>Engenharia Elétrica & Cidades Inteligentes desde 1980</span>
            </div>
          </ScrollReveal>

          {/* Título principal solicitado no requisito 1 */}
          <ScrollReveal delay={100}>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6 drop-shadow-sm">
              Conheça a trajetória de quem ajuda a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d0ff] via-[#4DA6FF] to-white underline decoration-[#00d0ff]/50 decoration-wavy decoration-2">
                transformar cidades
              </span>
            </h1>
          </ScrollReveal>

          {/* Subtítulo institucional rico baseado no folder */}
          <ScrollReveal delay={200}>
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-light mb-8 max-w-2xl drop-shadow-sm">
              Há mais de quatro décadas, a <strong>Engeluz</strong> desenvolve soluções integradas
              que unem <strong>tecnologia, eficiência e inovação</strong>. Uma história de liderança
              que ilumina e moderniza o presente e o futuro dos espaços urbanos.
            </p>
          </ScrollReveal>

          {/* Badges de credibilidade rápida */}
          <ScrollReveal delay={250}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 max-w-xl text-xs sm:text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-white/15">
                <ShieldCheck className="w-4 h-4 text-[#00d0ff] shrink-0" />
                <span className="font-medium text-white/95">Capital 100% Nacional</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-white/15">
                <Award className="w-4 h-4 text-[#00d0ff] shrink-0" />
                <span className="font-medium text-white/95">+1.500 Projetos</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-white/15 col-span-2 sm:col-span-1">
                <Zap className="w-4 h-4 text-[#00d0ff] shrink-0" />
                <span className="font-medium text-white/95">+600k Pontos Geridos</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Ações principais */}
          <ScrollReveal delay={300}>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#00A1E4] hover:bg-[#0090ce] text-white font-bold h-12 px-7 rounded-xl shadow-lg shadow-[#00A1E4]/30 border-none transition-all group"
              >
                <a href="#unificado-quem-somos">
                  Explorar Nossa História
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 px-7 rounded-xl font-semibold border-white/40 text-white bg-white/5 hover:bg-white hover:text-[#165EA9] backdrop-blur-sm transition-all"
              >
                <a href="#linha-do-tempo">Linha do Tempo (1980 - Hoje)</a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Ticker inferior elegante com indicadores rápidos */}
      <div className="hidden md:block absolute bottom-4 right-8 z-10 text-xs text-white/80 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
        <span className="inline-flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-[#00d0ff]" />
          <span>Matriz em Wenceslau Braz - PR | Presença Nacional e MERCOSUL</span>
        </span>
      </div>
    </section>
  )
}

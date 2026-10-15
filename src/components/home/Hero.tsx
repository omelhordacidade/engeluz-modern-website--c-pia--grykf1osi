import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

import imgFront from '@/assets/img-front-b80a3.jpg'
import imgItapevi3 from '@/assets/itapevi-3-a0427.jpg'
import imgItapevi5 from '@/assets/itapevi-5-06a55.jpg'
import imgNew1 from '@/assets/01-92379.png'
import imgNew2 from '@/assets/02-2cccc.png'
import imgNew4 from '@/assets/04-8fc15.png'
import imgDji1 from '@/assets/djifly20260504174432141777928684881photooptimized-30fce.jpg'
import imgDji2 from '@/assets/djifly20260504180742251777928923017photooptimized-d2e03.jpg'
import imgDji3 from '@/assets/djifly20260504182216531777929770928photooptimized-dd52c.jpg'
import imgPiraquara3 from '@/assets/piraquara3-b5e87.jpeg'
import imgRenova4 from '@/assets/renova4-955c4.jpg'
import imgToledo1 from '@/assets/toledo1-755f1.jpeg'

const HERO_IMAGES = [
  imgFront,
  imgItapevi3,
  imgItapevi5,
  imgNew1,
  imgNew2,
  imgNew4,
  imgDji1,
  imgDji2,
  imgDji3,
  imgPiraquara3,
  imgRenova4,
  imgToledo1,
]

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Carousel
          plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
          opts={{ loop: true, watchDrag: false, duration: 30 }}
          className="w-full h-full"
        >
          <CarouselContent className="h-full ml-0">
            {HERO_IMAGES.map((src, index) => (
              <CarouselItem key={index} className="pl-0 h-full relative">
                <img
                  src={src}
                  alt={`Hero ${index + 1}`}
                  className="w-full h-screen min-h-[600px] object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <ScrollReveal>
            <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/10 border border-secondary/50 text-secondary font-medium text-sm mb-6 backdrop-blur-md tracking-wider uppercase">
              ENGENHARIA ELÉTRICA DESDE 1980
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Liderança e <span className="text-secondary">Inovação</span> em Engenharia
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Com profissionais especializados e mais de 1.500 projetos em todo o território
              nacional, a Engeluz desenvolve e implanta seus projetos em diferentes áreas,
              conectando o Brasil e o Mercosul.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white h-12 px-8 text-base"
              >
                <Link to="/solucoes-subterraneas#quem-somos">
                  Conheça Nossa História <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <Link to="/contato">Fale com um Especialista</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

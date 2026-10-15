import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/ScrollReveal'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import imgFront from '@/assets/img-front-b80a3.jpg'
import imgItapevi3 from '@/assets/itapevi-3-a0427.jpg'
import imgItapevi5 from '@/assets/itapevi-5-06a55.jpg'
import imgNew1 from '@/assets/01-92379.png'
import imgNew2 from '@/assets/02-2cccc.png'
import imgNew4 from '@/assets/04-8fc15.png'
import imgUpload4 from '@/assets/04-52b58.png'
import imgUpload5 from '@/assets/05-bcf89.png'
import imgUploadBra from '@/assets/bra2-cf8f7.jpeg'
import imgCarapicuiba2 from '@/assets/carapicuiba2-759ee.jpeg'
import imgCarapicuiba5 from '@/assets/carapicuiba5-4c01f.jpeg'
import imgCotiasolar2 from '@/assets/cotiasolar2-2b664.jpeg'
import imgCuiaba from '@/assets/cuiaba-e4bd8.jpeg'
import imgEmbu1 from '@/assets/embu1-40fd3.jpeg'
import imgEmbu4 from '@/assets/embu4-b2fd2.png'
import imgFunpar from '@/assets/funpar4-f90a5.jpeg'
import imgGma from '@/assets/gma3-b727a.jpeg'
import imgGua from '@/assets/gua3-8ea59.jpg'
import imgHor1 from '@/assets/hor1-f5ad4.jpg'
import imgLar1 from '@/assets/lar1-35d40.jpg'
import imgPiraquara2 from '@/assets/piraquara2-95616.jpeg'
import imgPiraquara3 from '@/assets/piraquara3-b5e87.jpeg'
import imgRenova4 from '@/assets/renova4-955c4.jpg'
import imgToledo1 from '@/assets/toledo1-755f1.jpeg'

const PROJECTS_IMAGES = [
  imgFunpar,
  imgGma,
  imgGua,
  imgFront,
  imgItapevi3,
  imgItapevi5,
  imgNew1,
  imgNew2,
  imgNew4,
  imgUpload4,
  imgUpload5,
  imgUploadBra,
  imgCarapicuiba2,
  imgCarapicuiba5,
  imgCotiasolar2,
  imgCuiaba,
  imgEmbu1,
  imgEmbu4,
  imgHor1,
  imgLar1,
  imgPiraquara2,
  imgPiraquara3,
  imgRenova4,
  imgToledo1,
]

export function Projects() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-6">
              Soluções e Infraestrutura Urbana
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Engeluz possui expertise consolidada na execução de projetos de infraestrutura
              urbana, redes elétricas e de telecomunicações subterrâneas, requalificação de vias e
              iluminação pública. Combinamos engenharia de ponta e inovação para entregar soluções
              duradouras que modernizam as cidades.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="relative max-w-6xl mx-auto mb-16 px-12 md:px-16">
            <Carousel
              plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
              opts={{ align: 'start', loop: true, duration: 30 }}
              className="w-full"
            >
              <CarouselContent>
                {PROJECTS_IMAGES.map((img, idx) => (
                  <CarouselItem key={idx} className="basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="p-2 h-full">
                      <div className="overflow-hidden rounded-2xl aspect-[4/3] shadow-sm hover:shadow-md transition-shadow">
                        <img
                          src={img}
                          alt={`Solução ${idx + 1}`}
                          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 md:-left-8 lg:-left-12 h-12 w-12 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white" />
              <CarouselNext className="-right-4 md:-right-8 lg:-right-12 h-12 w-12 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white" />
            </Carousel>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-primary hover:bg-primary/90 text-white"
            >
              <Link to="/nossas-solucoes">Conheça nossas soluções</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

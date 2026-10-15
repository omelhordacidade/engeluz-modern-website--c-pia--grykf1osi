import { Button } from '@/components/ui/button'
import { MessageCircle, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ScrollReveal } from '@/components/ScrollReveal'
import imgFront from '@/assets/img-front-b80a3.jpg'

export function Maintenance() {
  return (
    <section className="bg-[#1a1f26] py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-0 max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          {/* Left Side - Web Form CTA */}
          <div className="flex-1 bg-primary p-10 lg:p-14 flex flex-col justify-center items-start text-white">
            <ScrollReveal>
              <Wrench className="h-10 w-10 text-secondary mb-6 opacity-80" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                A lâmpada do poste
                <br />
                está apagada?
              </h2>
              <p className="text-secondary font-bold text-2xl md:text-3xl mb-8">
                Solicite Manutenção!
              </p>
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white border-none text-base w-full sm:w-auto"
              >
                <Link to="/manutencao">SOLICITAR AQUI NO SITE!</Link>
              </Button>
            </ScrollReveal>
          </div>

          {/* Right Side - WhatsApp CTA */}
          <div className="flex-1 bg-accent p-10 lg:p-14 flex flex-col justify-center items-start text-primary relative overflow-hidden">
            <ScrollReveal delay={150}>
              <h3 className="font-heading text-2xl md:text-3xl font-extrabold mb-4 max-w-[250px] uppercase leading-tight">
                Existe a opção de realizar via Whatsapp:
              </h3>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="mt-4 border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent font-bold tracking-wide cursor-pointer"
              >
                <Link to="/solicitacao-whatsapp">
                  <MessageCircle className="mr-2 h-5 w-5" /> SOLICITAR AGORA!
                </Link>
              </Button>
            </ScrollReveal>

            {/* Decorative Graphic */}
            <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-1/4 translate-y-1/4 pointer-events-none rounded-full overflow-hidden shadow-inner">
              <img
                src={imgFront}
                alt="Manutenção"
                className="w-64 h-64 object-cover mix-blend-luminosity"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { MessageCircle, MapPin, AlertCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const message = encodeURIComponent('Solicitação de Manutenção (Site Engeluz)')

const states = [
  {
    name: 'Paraná',
    phone: '554192258579',
    displayPhone: '+55 41 9225-8579',
  },
  {
    name: 'São Paulo',
    phone: '5511996942431',
    displayPhone: '+55 11 99694-2431',
  },
  {
    name: 'Santa Catarina',
    phone: '554192258579',
    displayPhone: '+55 41 9225-8579',
  },
]

export default function SolicitacaoWhatsapp() {
  return (
    <div className="w-full bg-[#f4f4f5] min-h-screen pt-20 pb-20">
      <div className="bg-[#052b5e] w-full text-white pt-16 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-white text-lg md:text-xl font-medium mb-1 opacity-90">
            Atendimento Rápido
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight tracking-tight">
            Selecione o seu Estado para solicitação da manutenção
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl -mt-10">
        <Card className="border-none shadow-lg mb-8">
          <CardContent className="p-6 md:p-8 flex gap-4 items-start">
            <AlertCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Para realizar o pedido de manuntenção, é preciso ter instalado em seu celular o
              aplicativo WhatsApp e ter acesso à internet para enviar as mensagens de solicitações.
              Nosso canal considera somente mensagens escritas. Áudios não serão atendidos!
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {states.map((state) => (
            <a
              key={state.name}
              href={`https://wa.me/${state.phone}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
            >
              <Card className="h-full border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-md bg-white">
                <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{state.name}</h3>
                    <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      {state.displayPhone}
                    </p>
                  </div>
                  <div className="mt-4 text-primary font-medium text-sm group-hover:underline underline-offset-4">
                    Iniciar atendimento
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

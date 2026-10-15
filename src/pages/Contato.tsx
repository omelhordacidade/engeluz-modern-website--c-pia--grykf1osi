import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock, Shield } from 'lucide-react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const formSchema = z.object({
  name: z.string().min(2, { message: 'Nome é obrigatório.' }),
  email: z.string().email({ message: 'E-mail inválido.' }),
  subject: z.string().min(2, { message: 'Assunto é obrigatório.' }),
  message: z.string().min(10, { message: 'A mensagem deve ter no mínimo 10 caracteres.' }),
})

export default function Contato() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success('Mensagem enviada com sucesso!', {
      description: 'Retornaremos o seu contato em até 24 horas úteis.',
    })
    form.reset()
  }

  return (
    <div className="pt-24 pb-0 min-h-screen flex flex-col bg-background">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Fale Conosco
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dúvidas comerciais, orçamentos ou parcerias? Estamos à disposição para atendê-lo.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 mb-20 max-w-6xl mx-auto">
          {/* Form */}
          <ScrollReveal delay={100}>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-border">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-mail</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="seu@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Assunto</FormLabel>
                          <FormControl>
                            <Input placeholder="Motivo do contato" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem</FormLabel>
                        <FormControl>
                          <Textarea
                            className="resize-none"
                            rows={6}
                            placeholder="Como podemos ajudar?"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </Form>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={200}>
            <div className="flex flex-col justify-center space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-secondary/10 rounded-full text-secondary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-primary">Matriz</h3>
                  <p className="text-muted-foreground mt-1 leading-relaxed">
                    Rodovia Parigot de Souza, KM 254, Bloco A
                    <br />
                    Distrito Industrial, Wenceslau Braz - PR
                    <br />
                    CEP: 84950-000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-secondary/10 rounded-full text-secondary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-primary">Telefones</h3>
                  <p className="text-muted-foreground mt-1">
                    Geral:{' '}
                    <a href="tel:+554130000000" className="text-secondary hover:underline">
                      +55 (41) 3000-0000
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    Comercial:{' '}
                    <a href="tel:+554130000001" className="text-secondary hover:underline">
                      +55 (41) 3000-0001
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-secondary/10 rounded-full text-secondary">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-primary">
                    Segurança do Trabalho
                  </h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Érick Biscaia:{' '}
                    <a
                      href="https://wa.me/5541991263859"
                      target="_blank"
                      rel="noreferrer"
                      className="text-secondary hover:underline"
                    >
                      (41) 9.9126-3859
                    </a>
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Rodrigo Pereira:{' '}
                    <a
                      href="https://wa.me/5561996150533"
                      target="_blank"
                      rel="noreferrer"
                      className="text-secondary hover:underline"
                    >
                      (61) 9.9615-0533
                    </a>
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Larissa Reis Heredia:{' '}
                    <a
                      href="https://wa.me/5561992477575"
                      target="_blank"
                      rel="noreferrer"
                      className="text-secondary hover:underline"
                    >
                      (61) 99247-7575
                    </a>
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Sergio Pinto Ferreira:{' '}
                    <a
                      href="https://wa.me/5511912475769"
                      target="_blank"
                      rel="noreferrer"
                      className="text-secondary hover:underline"
                    >
                      (11) 9.1247-5769
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-secondary/10 rounded-full text-secondary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-primary">E-mails</h3>
                  <p className="text-muted-foreground mt-1">
                    Comercial:{' '}
                    <a
                      href="mailto:comercial@engeluz.com.br"
                      className="text-secondary hover:underline"
                    >
                      comercial@engeluz.com.br
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    RH:{' '}
                    <a href="mailto:rh@engeluz.com.br" className="text-secondary hover:underline">
                      rh@engeluz.com.br
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-secondary/10 rounded-full text-secondary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-primary">Atendimento</h3>
                  <p className="text-muted-foreground mt-1">Segunda a Sexta: 08:00 às 18:00</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-96 bg-muted relative">
        <iframe
          src="https://maps.google.com/maps?q=Rodovia%20Parigot%20de%20Souza,%20KM%20254,%20Bloco%20A%20-%20Distrito%20Industrial,%20Wenceslau%20Braz%20-%20PR&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Engeluz Location"
        />
      </div>
    </div>
  )
}

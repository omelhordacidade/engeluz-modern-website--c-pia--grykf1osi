import { z } from 'zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormDescription,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { createMaintenanceSubmission } from '@/services/maintenance'
import { extractFieldErrors } from '@/lib/pocketbase/errors'
import { Loader2 } from 'lucide-react'

const formSchema = z.object({
  municipality: z.string().min(1, 'Selecione um município'),
  request_type: z.string().min(1, 'Selecione o tipo de solicitação'),
  location_link: z.string().optional(),
  details: z.string().optional(),
  requester_name: z.string().min(1, 'Nome é obrigatório'),
  cpf: z.string().min(11, 'CPF inválido'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
  address: z.string().min(1, 'Endereço é obrigatório'),
  reference_point: z.string().optional(),
  pole_id: z.string().optional(),
})

interface TextInputField {
  name:
    | 'location_link'
    | 'details'
    | 'requester_name'
    | 'cpf'
    | 'email'
    | 'phone'
    | 'address'
    | 'reference_point'
    | 'pole_id'
  placeholder: string
  hint?: string
  isTextarea?: boolean
}

const textInputs: TextInputField[] = [
  {
    name: 'location_link',
    placeholder: 'Link Google Maps da Localização do Ponto',
    hint: '*Cole aqui o link do Google Maps da Localização',
  },
  {
    name: 'details',
    placeholder: 'Detalhes da Solicitação',
    hint: '*Se necessário descreva detalhes da solicitação no campo acima.',
    isTextarea: true,
  },
  { name: 'requester_name', placeholder: 'Nome do Solicitante' },
  { name: 'cpf', placeholder: 'Seu CPF' },
  { name: 'email', placeholder: 'Seu E-mail (Para Retorno da Solicitação)' },
  { name: 'phone', placeholder: 'Telefone com DDD' },
  { name: 'address', placeholder: 'Seu Endereço Completo' },
  { name: 'reference_point', placeholder: 'Ponto de Referência' },
  { name: 'pole_id', placeholder: 'Placa de Identificação do Poste (Se houver))' },
]

export default function Manutencao() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      municipality: '',
      request_type: '',
      location_link: '',
      details: '',
      requester_name: '',
      cpf: '',
      email: '',
      phone: '',
      address: '',
      reference_point: '',
      pole_id: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      await createMaintenanceSubmission(values)
      toast({
        title: 'Solicitação enviada com sucesso!',
        description: 'Sua solicitação foi registrada em nosso sistema.',
      })
      form.reset()
    } catch (error) {
      const fieldErrors = extractFieldErrors(error)
      if (Object.keys(fieldErrors).length > 0) {
        Object.entries(fieldErrors).forEach(([field, msg]) =>
          form.setError(field as any, { message: msg }),
        )
      } else {
        toast({
          title: 'Erro ao enviar solicitação',
          description: 'Ocorreu um erro inesperado. Tente novamente.',
          variant: 'destructive',
        })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full bg-[#f4f4f5] min-h-screen pt-20">
      <div className="bg-[#052b5e] w-full text-white pt-16 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-white text-lg md:text-xl font-medium mb-1 opacity-90">
            Solicite agora mesmo
          </p>
          <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight tracking-tight">
            Manutenção Para
            <br />
            Iluminação Pública
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-12">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="municipality"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white border-none shadow-sm rounded-sm h-14 text-base px-4 text-muted-foreground focus:ring-1 focus:ring-primary">
                        <SelectValue placeholder="Antonina - PR" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Antonina - PR">Antonina - PR</SelectItem>
                      <SelectItem value="Curitiba - PR">Curitiba - PR</SelectItem>
                      <SelectItem value="Maringá - PR">Maringá - PR</SelectItem>
                      <SelectItem value="São Paulo - SP">São Paulo - SP</SelectItem>
                      <SelectItem value="Florianópolis - SC">Florianópolis - SC</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription className="text-xs text-muted-foreground mt-1 ml-1">
                    *Selecione seu município acima.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="request_type"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white border-none shadow-sm rounded-sm h-14 text-base px-4 text-muted-foreground focus:ring-1 focus:ring-primary">
                        <SelectValue placeholder="Lâmpada Apagada" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Lâmpada Apagada">Lâmpada Apagada</SelectItem>
                      <SelectItem value="Lâmpada Piscando">Lâmpada Piscando</SelectItem>
                      <SelectItem value="Luminária Quebrada">Luminária Quebrada</SelectItem>
                      <SelectItem value="Poste Caído">Poste Caído</SelectItem>
                      <SelectItem value="Fios Soltos">Fios Soltos</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription className="text-xs text-muted-foreground mt-1 ml-1">
                    *Selecione o tipo de solicitação acima.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {textInputs.map((input) => (
              <FormField
                key={input.name}
                control={form.control}
                name={input.name}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      {input.isTextarea ? (
                        <Textarea
                          placeholder={input.placeholder}
                          className="bg-white border-none shadow-sm rounded-sm min-h-[120px] resize-none text-base p-4 focus-visible:ring-1 focus-visible:ring-primary"
                          {...field}
                        />
                      ) : (
                        <Input
                          placeholder={input.placeholder}
                          type={input.name === 'email' ? 'email' : 'text'}
                          className="bg-white border-none shadow-sm rounded-sm h-14 text-base px-4 focus-visible:ring-1 focus-visible:ring-primary"
                          {...field}
                        />
                      )}
                    </FormControl>
                    {input.hint && (
                      <FormDescription className="text-xs text-muted-foreground mt-1 ml-1">
                        {input.hint}
                      </FormDescription>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <div className="pt-4 flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto h-14 px-10 bg-[#052b5e] hover:bg-[#052b5e]/90 text-white font-bold text-lg rounded shadow-md transition-all"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Enviando...
                  </>
                ) : (
                  'ENVIAR SOLICITAÇÃO'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

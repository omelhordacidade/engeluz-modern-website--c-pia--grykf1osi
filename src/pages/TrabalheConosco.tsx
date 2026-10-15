import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, UseFormReturn } from 'react-hook-form'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { createJobApplication } from '@/services/job_applications'
import { getErrorMessage } from '@/lib/pocketbase/errors'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Briefcase } from 'lucide-react'
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'

const formSchema = z.object({
  full_name: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres.'),
  birth_date: z.string().min(8, 'Data de nascimento inválida.'),
  marital_status: z.string().min(1, 'Selecione o estado civil.'),
  gender: z.string().min(1, 'Selecione o sexo.'),
  phone: z.string().min(10, 'Telefone inválido.'),
  email: z.string().email('E-mail inválido.'),
  city_state: z.string().min(2, 'Informe cidade e estado.'),
  education_level: z.string().min(1, 'Selecione a escolaridade.'),
  additional_courses: z.string().optional(),
  drivers_license: z.string().min(1, 'Selecione a categoria.'),
  area_interest: z.string().min(2, 'Informe a área de interesse.'),
  salary_expectation: z.coerce.number().positive('O valor deve ser positivo.'),
  professional_experience: z.string().min(10, 'Descreva suas experiências.'),
})

type FormValues = z.infer<typeof formSchema>

const InputField = ({
  form,
  name,
  label,
  placeholder,
  type = 'text',
  as = 'input',
  options = [],
  rows = 3,
  ...props
}: any) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-sm font-medium text-gray-700">{label}</FormLabel>
        {as === 'input' && (
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              className="bg-white border-gray-200 h-11 shadow-sm placeholder:text-gray-400"
              {...props}
              {...field}
            />
          </FormControl>
        )}
        {as === 'textarea' && (
          <FormControl>
            <Textarea
              placeholder={placeholder}
              className="bg-white border-gray-200 shadow-sm resize-none placeholder:text-gray-400"
              rows={rows}
              {...field}
            />
          </FormControl>
        )}
        {as === 'select' && (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger
                className={`bg-white border-gray-200 h-11 shadow-sm ${!field.value ? 'text-gray-400' : 'text-gray-900'}`}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((opt: string) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
        <FormMessage />
      </FormItem>
    )}
  />
)

export default function TrabalheConosco() {
  const [successOpen, setSuccessOpen] = useState(false)
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      full_name: '',
      birth_date: '',
      marital_status: '',
      gender: '',
      phone: '',
      email: '',
      city_state: '',
      education_level: '',
      additional_courses: '',
      drivers_license: '',
      area_interest: '',
      salary_expectation: '' as unknown as number,
      professional_experience: '',
    },
  })

  async function onSubmit(values: FormValues) {
    try {
      await createJobApplication(values)
      setSuccessOpen(true)
      form.reset()
    } catch (error) {
      toast.error('Erro ao enviar currículo', {
        description: getErrorMessage(error),
      })
    }
  }

  return (
    <>
      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-[#0a488a]">Sucesso!</DialogTitle>
            <DialogDescription className="text-base text-gray-600 mt-2">
              Candidatura enviada com sucesso! Agradecemos seu interesse em fazer parte da equipe
              Engeluz.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-6">
            <Button
              onClick={() => setSuccessOpen(false)}
              className="bg-[#00aeef] hover:bg-[#009bda]"
            >
              Fechar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="min-h-screen bg-[#f8f9fc] pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-[#0a488a] mb-4">
                Trabalhe Conosco
              </h1>
              <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
                Junte-se à equipe que constrói e ilumina o futuro. Buscamos talentos apaixonados por
                engenharia e inovação.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <ScrollReveal delay={100}>
                <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-100 p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-[#0a488a] mb-6">Envie seu Currículo</h2>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit as any)}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <InputField
                          form={form}
                          name="full_name"
                          label="Nome Completo"
                          placeholder="João da Silva"
                        />
                        <InputField
                          form={form}
                          name="email"
                          label="E-mail"
                          placeholder="joao@exemplo.com"
                          type="email"
                        />
                        <InputField
                          form={form}
                          name="phone"
                          label="Telefone / WhatsApp"
                          placeholder="(00) 00000-0000"
                        />
                        <InputField
                          form={form}
                          name="area_interest"
                          label="Área de Interesse"
                          placeholder="Ex: Engenheiro Eletricista"
                        />
                        <InputField
                          form={form}
                          name="birth_date"
                          label="Data de Nascimento"
                          placeholder="DD/MM/AAAA"
                        />
                        <InputField
                          form={form}
                          name="marital_status"
                          label="Estado Civil"
                          placeholder="Selecione..."
                          as="select"
                          options={[
                            'Solteiro(a)',
                            'Casado(a)',
                            'Divorciado(a)',
                            'Viúvo(a)',
                            'Separado(a)',
                          ]}
                        />
                        <InputField
                          form={form}
                          name="gender"
                          label="Sexo"
                          placeholder="Selecione..."
                          as="select"
                          options={['Masculino', 'Feminino', 'Outro']}
                        />
                        <InputField
                          form={form}
                          name="city_state"
                          label="Cidade e Estado"
                          placeholder="Ex: São Paulo / SP"
                        />
                        <InputField
                          form={form}
                          name="education_level"
                          label="Nível de Escolaridade"
                          placeholder="Selecione..."
                          as="select"
                          options={[
                            'Ensino Fundamental',
                            'Ensino Médio',
                            'Ensino Superior',
                            'Pós-graduação',
                          ]}
                        />
                        <InputField
                          form={form}
                          name="drivers_license"
                          label="Carteira de Habilitação"
                          placeholder="Selecione..."
                          as="select"
                          options={[
                            'Não Possui',
                            'Categoria A',
                            'Categoria B',
                            'Categoria AB',
                            'Categoria C',
                            'Categoria D',
                            'Categoria E',
                          ]}
                        />
                      </div>

                      <div className="mt-5">
                        <InputField
                          form={form}
                          name="salary_expectation"
                          label="Pretensão Salarial"
                          placeholder="Ex: 5000"
                          type="number"
                          step="any"
                        />
                      </div>
                      <div className="mt-5">
                        <InputField
                          form={form}
                          name="professional_experience"
                          label="Experiência Profissional"
                          placeholder="Conte-nos um pouco sobre suas experiências..."
                          as="textarea"
                          rows={4}
                        />
                      </div>
                      <div className="mt-5">
                        <InputField
                          form={form}
                          name="additional_courses"
                          label="Cursos Adicionais (Opcional)"
                          placeholder="Informe cursos extras que possuir..."
                          as="textarea"
                          rows={2}
                        />
                      </div>

                      <div className="bg-[#f0f4f8] border border-[#e2e8f0] text-gray-500 text-sm p-4 rounded-lg mt-6">
                        Por motivos de segurança, o upload de PDFs está desativado no momento. Nossa
                        equipe entrará em contato para solicitar o currículo completo.
                      </div>

                      <Button
                        type="submit"
                        className="w-full mt-6 bg-[#00aeef] hover:bg-[#009bda] text-white font-medium h-12 text-base rounded-md transition-colors"
                      >
                        Enviar Candidatura
                      </Button>
                    </form>
                  </Form>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-1 h-full relative">
              <div className="sticky top-28">
                <ScrollReveal delay={200}>
                  <div className="bg-[#1560a1] rounded-xl p-6 md:p-8 text-white shadow-lg">
                    <div className="mb-6">
                      <Briefcase
                        className="w-10 h-10 text-[#00aeef] opacity-90"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-6">Por que a Engeluz?</h3>
                    <ul className="space-y-4 mb-8">
                      {[
                        'Oportunidade de atuar em grandes obras nacionais.',
                        'Ambiente de inovação tecnológica constante.',
                        'Pacote de benefícios atrativo e competitivo.',
                        'Plano de carreira estruturado.',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#00aeef] mr-3 mt-0.5 text-xl leading-none">•</span>
                          <span className="text-sm md:text-base leading-relaxed text-blue-50">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-6 border-t border-blue-400/30">
                      <p className="text-sm text-blue-100">
                        Siga nosso{' '}
                        <a
                          href="https://linkedin.com/company/engeluz"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#00aeef] hover:underline font-medium"
                        >
                          LinkedIn
                        </a>{' '}
                        para ficar sabendo das últimas vagas publicadas.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

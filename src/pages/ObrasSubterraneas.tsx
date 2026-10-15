import { CheckCircle2, ChevronRight, MapPin, Phone } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { AnimatedSection } from '@/components/ui/animated-section'
import { ENTREGAS, VANTAGENS, CASES } from '@/data/obras-content'
import { Logo } from '@/components/Logo'
import imgFront from '@/assets/img-front-b80a3.jpg'
import imgItapevi3 from '@/assets/itapevi-3-a0427.jpg'
import imgItapevi5 from '@/assets/itapevi-5-06a55.jpg'

const CAROUSEL_IMAGES_LOCAL = [imgFront, imgItapevi3, imgItapevi5]

export default function ObrasSubterraneas() {
  return (
    <main className="min-h-screen pt-20 overflow-hidden">
      <style>{`
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
      `}</style>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <img
            src={imgItapevi5}
            alt="Obras"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary" />
        </div>
        <div className="relative z-10 container text-center text-white space-y-6">
          <Badge
            variant="secondary"
            className="px-6 py-2 text-sm font-bold uppercase tracking-widest border-none bg-secondary text-primary hover:bg-white"
          >
            Engeluz
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight max-w-5xl mx-auto leading-[1.1]">
            OBRAS SUBTERRÂNEAS E REQUALIFICAÇÃO URBANA
          </h1>
        </div>
      </section>

      {/* Quem Somos & Nossa Especialidade */}
      <section className="py-24 bg-white relative">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-black text-primary mb-8 tracking-tight">QUEM SOMOS</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  <strong>O Grupo Engeluz</strong> é referência nacional em soluções de
                  infraestrutura urbana e nossa história se constrói projeto a projeto,
                  transformando a forma como as cidades funcionam e se apresentam.
                </p>
                <p>
                  Atuamos em modernização, requalificação viária e obras subterrâneas de alta
                  complexidade, unindo tecnologia de ponta, planejamento rigoroso e excelência
                  operacional em cada entrega.
                </p>
                <p>
                  Mais do que executar obras, transformamos espaços públicos: garantindo segurança,
                  eficiência e um impacto visual que as pessoas percebem e aprovam.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-primary text-white p-10 md:p-14 rounded-[2rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h2 className="text-3xl font-black mb-8 text-secondary tracking-tight">
                  NOSSA ESPECIALIDADE
                </h2>
                <div className="space-y-6 text-white/90 text-xl leading-relaxed relative z-10">
                  <p>
                    Atuamos na área de <strong>Engenharia Elétrica desde 1980</strong>,
                    transformando regiões comerciais e centros urbanos em espaços modernos, seguros
                    e visualmente agradáveis.
                  </p>
                  <p className="border-l-4 border-secondary pl-6 font-medium italic text-lg opacity-80">
                    Sempre dentro das normas técnicas, dos prazos e da realidade de cada cidade.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* O Que Entregamos */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent opacity-50" />
        <div className="container relative z-10">
          <AnimatedSection className="mb-16">
            <h2 className="text-4xl font-black text-primary mb-6 tracking-tight">
              O QUE ENTREGAMOS
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Do projeto à entrega final, assumimos cada etapa com{' '}
              <strong>responsabilidade e excelência</strong>.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENTREGAS.map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-300 h-full group hover:-translate-y-1 bg-white">
                  <CardContent className="p-8 flex items-start gap-5">
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                      <ChevronRight className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                    </div>
                    <span className="font-medium text-gray-800 leading-relaxed text-lg pt-1">
                      {item}
                    </span>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-24 bg-primary text-white">
        <div className="container">
          <AnimatedSection className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
              Vantagens do Sistema Subterrâneo
            </h2>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-12">
            {VANTAGENS.map((item, i) => (
              <AnimatedSection key={i} delay={i * 100} className="relative">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center shrink-0 shadow-lg shadow-secondary/20">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{item.title}</h3>
                <p className="text-white/80 leading-relaxed text-lg">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Sucesso */}
      <section className="py-24 bg-white">
        <div className="container">
          <AnimatedSection className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black text-primary tracking-tighter uppercase">
              Casos de Sucesso
            </h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto mt-8 rounded-full" />
          </AnimatedSection>

          <div className="space-y-40">
            {CASES.map((caso, i) => {
              const patchedMain = CAROUSEL_IMAGES_LOCAL[i % CAROUSEL_IMAGES_LOCAL.length]
              const patchedGallery = caso.gallery?.map(
                (_, idx) => CAROUSEL_IMAGES_LOCAL[(idx + 1) % CAROUSEL_IMAGES_LOCAL.length],
              )
              const patchedAntes = CAROUSEL_IMAGES_LOCAL[0]
              const patchedDepois = CAROUSEL_IMAGES_LOCAL[1]

              return (
                <div key={i} className="relative">
                  <AnimatedSection className="mb-12">
                    <h3 className="text-3xl md:text-4xl font-black text-primary mb-8 tracking-tight">
                      {caso.title}
                    </h3>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl group">
                        <img
                          src={patchedMain}
                          alt={caso.title}
                          className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                      </div>
                      <div className="order-1 lg:order-2">{caso.content}</div>
                    </div>
                  </AnimatedSection>

                  {caso.type === 'gallery' ? (
                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                      {patchedGallery?.map((img, idx) => (
                        <AnimatedSection
                          key={idx}
                          delay={200 + idx * 200}
                          className="relative group rounded-3xl overflow-hidden shadow-lg border border-gray-100"
                        >
                          <img
                            src={img}
                            alt={`${caso.title} Vista ${idx + 1}`}
                            className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </AnimatedSection>
                      ))}
                    </div>
                  ) : (
                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                      <AnimatedSection
                        delay={200}
                        className="relative group rounded-3xl overflow-hidden shadow-lg border border-gray-100"
                      >
                        <img
                          src={patchedAntes}
                          alt={`${caso.title} Vista 1`}
                          className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </AnimatedSection>
                      <AnimatedSection
                        delay={400}
                        className="relative group rounded-3xl overflow-hidden shadow-lg border border-gray-100"
                      >
                        <img
                          src={patchedDepois}
                          alt={`${caso.title} Vista 2`}
                          className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </AnimatedSection>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Vídeo em Destaque */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent opacity-50" />
        <div className="container relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight uppercase">
              Projeto em Destaque
            </h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto mt-8 rounded-full" />
            <p className="text-xl text-gray-600 mt-8 max-w-2xl mx-auto leading-relaxed">
              Assista ao vídeo e veja de perto a transformação e os detalhes técnicos da obra{' '}
              <strong className="text-primary font-bold">Renova Itapevi</strong>.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200} className="max-w-5xl mx-auto">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200 bg-white p-2 md:p-4">
              <AspectRatio ratio={16 / 9} className="bg-gray-100 rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-full border-0"
                  src="https://www.youtube.com/embed/LnnVFxkXcRI?rel=0&modestbranding=1"
                  title="Renova Itapevi - Obras Subterrâneas"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </AspectRatio>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Galeria Final (Carousel) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mb-16">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight uppercase">
              Nosso Portfólio em Foco
            </h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto mt-8 rounded-full" />
            <p className="text-xl text-gray-600 mt-8 max-w-2xl mx-auto leading-relaxed">
              Confira os detalhes e a excelência que entregamos em cada um dos nossos projetos
              através de nossas obras concluídas.
            </p>
          </AnimatedSection>
        </div>

        <div className="relative w-full flex overflow-hidden">
          <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused]">
            {[...CAROUSEL_IMAGES_LOCAL, ...CAROUSEL_IMAGES_LOCAL, ...CAROUSEL_IMAGES_LOCAL].map(
              (img, idx) => (
                <div
                  key={idx}
                  className="w-[280px] md:w-[400px] lg:w-[500px] shrink-0 px-3 group/card"
                >
                  <div className="relative h-[200px] md:h-[300px] lg:h-[350px] rounded-3xl overflow-hidden shadow-lg border border-gray-200 group-hover/card:shadow-2xl transition-all duration-500">
                    <img
                      src={img}
                      alt={`Projeto ${idx}`}
                      className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover/card:bg-primary/10 transition-colors duration-500" />
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Footer Contact Details */}
      <section className="py-24 bg-primary text-white border-t-8 border-secondary">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="bg-white p-6 rounded-2xl mb-8">
              <Logo variant="default" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
              Transformando cidades com tecnologia e qualidade.
            </h2>
            <p className="text-secondary font-bold text-xl tracking-wide">www.engeluz.com.br</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedSection
              delay={100}
              className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors"
            >
              <h4 className="font-black text-secondary flex items-center gap-3 mb-6 uppercase tracking-wider text-sm">
                <MapPin className="w-5 h-5" /> Engenharia e Fábrica
              </h4>
              <p className="text-3xl font-black mb-4 flex items-center gap-3 text-white">
                <Phone className="w-6 h-6 text-white/50" /> 43 3513.1200
              </p>
              <div className="text-white/70 space-y-1 text-sm leading-relaxed">
                <p>Rodovia Parigot de Souza, KM 254,</p>
                <p>Bloco A, Wenceslau Braz – PR</p>
              </div>
            </AnimatedSection>

            <AnimatedSection
              delay={200}
              className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors"
            >
              <h4 className="font-black text-secondary flex items-center gap-3 mb-6 uppercase tracking-wider text-sm">
                <MapPin className="w-5 h-5" /> Escritório Comercial Curitiba
              </h4>
              <p className="text-3xl font-black mb-4 flex items-center gap-3 text-white">
                <Phone className="w-6 h-6 text-white/50" /> 41 3352.1428
              </p>
              <div className="text-white/70 space-y-1 text-sm leading-relaxed">
                <p>Rua Eduardo Sprada, 344,</p>
                <p>Campo Comprido, Curitiba – PR</p>
              </div>
            </AnimatedSection>

            <AnimatedSection
              delay={300}
              className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors"
            >
              <h4 className="font-black text-secondary flex items-center gap-3 mb-6 uppercase tracking-wider text-sm">
                <MapPin className="w-5 h-5" /> Escritório Comercial SP
              </h4>
              <p className="text-3xl font-black mb-4 flex items-center gap-3 text-white">
                <Phone className="w-6 h-6 text-white/50" /> 11 3864.2759
              </p>
              <div className="text-white/70 space-y-1 text-sm leading-relaxed">
                <p>Avenida Antartica, 675, CJ 2101,</p>
                <p>Barra Funda, São Paulo – SP</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  )
}

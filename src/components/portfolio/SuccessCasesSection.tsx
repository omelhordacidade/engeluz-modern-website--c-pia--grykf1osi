import { AspectRatio } from '@/components/ui/aspect-ratio'
import { AnimatedSection } from '@/components/ui/animated-section'
import { CASES } from '@/data/obras-content'
import imgFront from '@/assets/img-front-b80a3.jpg'
import imgItapevi3 from '@/assets/itapevi-3-a0427.jpg'
import imgItapevi5 from '@/assets/itapevi-5-06a55.jpg'

const CAROUSEL_IMAGES_LOCAL = [imgFront, imgItapevi3, imgItapevi5]

export function SuccessCasesSection() {
  return (
    <>
      <style>{`
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
      `}</style>

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
    </>
  )
}

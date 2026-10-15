import { ReactNode } from 'react'
import barbosa1 from '@/assets/barbosa-depois-5-d8c83.jpg'
import barbosa2 from '@/assets/barbosa-depois-6-b18f6.jpg'
import itapevi1 from '@/assets/itapevi-3-0c630.jpg'
import itapevi2 from '@/assets/itapevi-5-25497.jpg'
import itapevi3 from '@/assets/itapevi-7-d656f.jpg'

import itapevi6 from '@/assets/itapevi-6-f0f7e.jpg'
import img3733 from '@/assets/img3733-d720c.jpg'
import img3 from '@/assets/img-3-47168.jpg'

export const ENTREGAS = [
  'Projetos executivos completos',
  'Execução de obras subterrâneas com equipe especializada',
  'Gerenciamento e fiscalização técnica',
  'Implantação de redes elétricas e de telecom subterrâneas',
  'Requalificação de calçadões, paisagismo e mobiliário urbano',
  'Testes, certificações e padronização municipal',
]

export const VANTAGENS = [
  {
    title: 'Redução significativa de manutenção:',
    desc: 'redes protegidas contra intempéries, quedas de energia e danos externos, garantindo maior continuidade operacional e menos intervenções ao longo do tempo.',
  },
  {
    title: 'Valorização estética do espaço urbano:',
    desc: 'eliminação da poluição visual causada por fios e postes, resultando em ambientes mais organizados, modernos e atrativos para moradores, turistas e comércio local.',
  },
  {
    title: 'Ampliação da acessibilidade e mobilidade:',
    desc: 'liberação do espaço aéreo e físico, permitindo calçadas mais amplas, seguras e adaptadas para circulação de pedestres, incluindo pessoas com mobilidade reduzida.',
  },
]

export const CASES: Array<{
  title: string
  content: ReactNode
  type?: 'comparison' | 'gallery'
  mainImage: string
  antes?: string
  depois?: string
  gallery?: string[]
}> = [
  {
    title: 'RENOVA RUI BARBOSA',
    type: 'gallery',
    content: (
      <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
        <p>
          O projeto Renova Rui Barbosa é um dos exemplos mais completos da nossa capacidade de{' '}
          <strong>transformar a infraestrutura urbana de ponta a ponta.</strong>
        </p>
        <p>
          Toda a rede aérea existente foi removida e substituída por um sistema subterrâneo moderno,
          com dutos e galerias para energia e telecom, devolvendo à paisagem urbana{' '}
          <strong>a leveza e a organização que uma cidade merece.</strong>
        </p>
        <p>
          Mas a transformação foi além do que está embaixo do chão. O calçadão ganhou novos pisos,
          acessibilidade real e iluminação moderna, criando um ambiente mais seguro, mais bonito e
          mais vivo, com impacto direto na <strong>valorização do comércio local.</strong>
        </p>
        <p className="font-bold text-primary mt-6 text-xl border-l-4 border-secondary pl-4">
          Do planejamento à entrega: infraestrutura que some da vista e aparece nos resultados.
        </p>
      </div>
    ),
    mainImage: barbosa1,
    gallery: [
      barbosa2,
      'https://img.usecurling.com/p/1000/800?q=night%20pedestrian%20street&dpr=2',
    ],
  },
  {
    title: 'RENOVA ITAPEVI',
    type: 'gallery',
    content: (
      <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
        <p>
          O Renova Itapevi representa <strong>uma das maiores intervenções urbanas</strong> já
          realizadas na região e os números ficam ainda mais expressivos quando se vê a
          transformação na prática.
        </p>
        <p className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
          Toda a alimentação elétrica das lojas migrou para infraestrutura subterrânea, e a paisagem
          que antes era dominada por postes, fiações e cruzetas deu lugar a um{' '}
          <strong className="text-primary font-bold">
            sistema organizado, seguro e invisível,
          </strong>{' '}
          do jeito que a modernidade pede.
        </p>
        <p>
          A requalificação completa do passeio público trouxe de volta{' '}
          <strong className="text-primary font-bold text-xl">
            o protagonismo de quem realmente importa: o pedestre.
          </strong>
        </p>
        <p className="border-l-4 border-secondary pl-4 italic text-gray-500">
          Com padronização visual, melhor circulação e integração urbana, o espaço passou a
          funcionar com a fluidez e a identidade que uma região de peso merece.
        </p>
      </div>
    ),
    mainImage: itapevi1,
    gallery: [itapevi2, itapevi3],
  },
]

export const CAROUSEL_IMAGES = [
  barbosa1,
  barbosa2,
  'https://img.usecurling.com/p/1000/800?q=night%20pedestrian%20street&dpr=2',
  itapevi1,
  itapevi2,
  itapevi3,
  itapevi6,
  img3733,
  img3,
]

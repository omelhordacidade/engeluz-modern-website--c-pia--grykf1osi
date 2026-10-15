// Definição dos dados das 30 páginas do folder institucional Engeluz
// OCR e estrutura extraídos com fidelidade de "FOLDER INST. 02 - 02.08 - compactado-12bd7.pdf"

export interface FolderPageInfo {
  pageNumber: number
  title: string
  subtitle?: string
  description?: string
  highlights?: string[]
  stats?: { label: string; value: string }[]
  accentColor?: string
  bgPattern?: 'hero' | 'blue' | 'light' | 'dark-blue' | 'technical'
  category:
    | 'Capa'
    | 'Institucional'
    | 'Presença'
    | 'Áreas de Atuação'
    | 'Produtos'
    | 'Projetos'
    | 'Parcerias PPP'
    | 'Linha do Tempo'
    | 'Tecnologia & IoT'
    | 'Mobilidade Urbana'
    | 'Saneamento'
    | 'Energia & Subestações'
    | 'Portos & Logística'
    | 'Diferenciais'
    | 'Contato'
}

export const FOLDER_PAGES: FolderPageInfo[] = [
  {
    pageNumber: 1,
    title: 'ENGELUZ',
    subtitle: 'Conheça a trajetória de quem ajuda a transformar cidades',
    category: 'Capa',
    bgPattern: 'hero',
    description:
      'Liderança, pioneirismo e excelência em infraestrutura elétrica e urbana desde 1980.',
  },
  {
    pageNumber: 2,
    title: 'ENGELUZ ILUMINAÇÃO E ELETRICIDADE',
    subtitle: 'Mais de quatro décadas de excelência',
    category: 'Institucional',
    bgPattern: 'blue',
    description:
      'Há mais de quatro décadas, a Engeluz atua no mercado de Engenharia Elétrica desenvolvendo soluções que unem tecnologia, eficiência e inovação. Fundada em 1980, a empresa possui capital 100% nacional e já participou de mais de 1.500 projetos em diferentes regiões do país, consolidando-se como referência em infraestrutura elétrica e urbana.',
    highlights: [
      'Capital 100% nacional',
      'Mais de 1.500 projetos executados',
      'Sede no Sul do Brasil com atuação nacional e Mercosul',
    ],
  },
  {
    pageNumber: 3,
    title: 'PRESENÇA NACIONAL',
    subtitle: 'Estrutura para atender grandes desafios',
    category: 'Presença',
    bgPattern: 'light',
    description:
      'Com mais de 600 mil pontos sob sua gestão, a Engeluz mantém uma ampla rede operacional distribuída estrategicamente pelo país, garantindo agilidade, eficiência e suporte contínuo aos seus clientes públicos e privados.',
    highlights: [
      'Matriz: Wenceslau Braz - PR',
      'Escritório São Paulo - SP',
      'Escritório Curitiba - PR',
      'Central Brasília - DF',
      'Operações ativas: PR, SP, RJ, MG, GO, DF, MT, RO, TO, SE, RS, SC',
    ],
  },
  {
    pageNumber: 4,
    title: 'ÁREAS DE ATUAÇÃO',
    subtitle: 'Soluções completas para infraestrutura e cidades inteligentes',
    category: 'Áreas de Atuação',
    bgPattern: 'blue',
    description:
      'A Engeluz oferece soluções integradas que atendem desde a implantação até a gestão de sistemas urbanos, sempre com foco em eficiência operacional, inovação tecnológica e sustentabilidade.',
    highlights: [
      'Gestão & Manutenção de Iluminação Pública',
      'Cadastramento Georreferenciado & Software de Gestão',
      'Projetos e Obras Turn-Key (chave na mão)',
      'Subestações e Redes em Média e Baixa Tensão',
      'Soluções em Energia Solar Fotovoltaica',
      'Iluminação Cênica / Destaque',
      'Construção de Edificações, Pavimentação e Urbanização',
      'Paisagismo, Drenagem e Gerenciamento de Obras',
    ],
  },
  {
    pageNumber: 5,
    title: 'PRODUTOS',
    subtitle: 'Qualidade e conformidade técnica',
    category: 'Produtos',
    bgPattern: 'light',
    description:
      'Todos os produtos Engeluz seguem rigorosamente as normas técnicas da ABNT e atendem às exigências das concessionárias de energia.',
    highlights: [
      'Braços para iluminação pública',
      'Sistemas e módulos de Telegestão',
      'Postes metálicos e estruturais homologados',
      'Núcleos e componentes de fixação',
      'Luminárias LED de alta performance e durabilidade',
    ],
  },
  {
    pageNumber: 6,
    title: 'CONTORNO SUL CURITIBA | PR',
    subtitle: 'Projetos Rodoviários de Grande Porte',
    category: 'Projetos',
    bgPattern: 'dark-blue',
    description:
      'A Engeluz foi responsável pelo projeto de engenharia, execução das obras e implantação completa do sistema de iluminação pública e dispositivos de segurança rodoviária no trecho da BR-376/PR conhecido como Contorno Sul de Curitiba.',
    highlights: [
      'BR-376/PR - Trecho estratégico',
      'Iluminação pública completa',
      'Dispositivos de segurança rodoviária',
    ],
  },
  {
    pageNumber: 7,
    title: 'OBRAS DE ILUMINAÇÃO RODOVIÁRIA',
    subtitle: 'Segurança, conforto visual e eficiência',
    category: 'Projetos',
    bgPattern: 'dark-blue',
    description:
      'A intervenção contemplou aproximadamente 10,7km de extensão, contribuindo para aumentar a segurança viária, a visibilidade e a eficiência operacional da rodovia. Projetos desenvolvidos para proporcionar maior conforto visual e desempenho operacional em importantes corredores logísticos do país.',
    stats: [
      { label: 'Extensão contínua', value: '10,7 km' },
      { label: 'Padrão luminotécnico', value: 'Classe A ABNT' },
    ],
  },
  {
    pageNumber: 8,
    title: 'PARCERIA PÚBLICO-PRIVADA (PPP)',
    subtitle: 'Gestão e operação em larga escala',
    category: 'Parcerias PPP',
    bgPattern: 'blue',
    description:
      'A experiência da Engeluz em concessões e parcerias público-privadas reforça sua capacidade de gestão e operação em larga escala. Com quatorze concessões em operação, diversos projetos executados e parques sob gestão, o grupo ultrapassa atualmente a marca de 600 mil pontos de iluminação pública administrados.',
    highlights: [
      '14 Concessões em operação contínua',
      '+600 mil pontos administrados',
      'Concessões em: Ilumina Conder, Sumaré, Toledo, Hortolândia, Itatiba, Guarapuava, Cotia, Socorro, Francisco Beltrão e outras',
    ],
  },
  {
    pageNumber: 9,
    title: 'LINHA DO TEMPO',
    subtitle: 'Evolução contínua em engenharia e tecnologia',
    category: 'Linha do Tempo',
    bgPattern: 'light',
    description:
      'Uma trajetória sólida marcada por inovação, parcerias de alto impacto e expansão estratégica de portfólio.',
    highlights: [
      '24/08/1980 - Início da atuação na área de engenharia elétrica',
      '28/08/1996 - Tecnoluz Eletricidade: início de obras de infraestrutura em segmentos da engenharia elétrica',
      '29/04/2022 - Criação da Nexum (Joint Venture com grupo Constanta) para atender à alta demanda de IoT',
      '12/05/2023 - Aquisição da empresa Estar Digital, expandindo para mobilidade urbana',
    ],
  },
  {
    pageNumber: 10,
    title: 'CONECTIVIDADE E INTELIGÊNCIA',
    subtitle: 'Para cidades mais eficientes',
    category: 'Tecnologia & IoT',
    bgPattern: 'blue',
    description:
      'Desenvolvemos soluções inovadoras que integram Internet das Coisas (IoT), Inteligência Artificial (IA) e automação, transformando tecnologia em aplicações práticas, eficientes e escaláveis para diversos segmentos.',
    highlights: [
      'Internet das Coisas (IoT) urbana',
      'Inteligência Artificial aplicada à gestão',
      'Telemetria e controle em tempo real',
    ],
  },
  {
    pageNumber: 11,
    title: 'SOLUÇÕES EM IOT & SISTEMA DE GESTÃO',
    subtitle: 'Tecnologia de ponta em telegestão',
    category: 'Tecnologia & IoT',
    bgPattern: 'blue',
    description:
      'A Engeluz opera uma das maiores estruturas de telegestão do país, com presença consolidada em diversas cidades brasileiras.',
    highlights: [
      'Utilities e Facilities',
      'Monitoramento de ativos em tempo real',
      'Gestão e Eficiência Energética',
      'Telegestão da iluminação pública',
      'Redes privadas LoRaWAN de longo alcance',
    ],
  },
  {
    pageNumber: 12,
    title: 'SISTEMA DE GESTÃO - CASOS EM NÚMEROS',
    subtitle: '+180 mil controladores de rede privada',
    category: 'Tecnologia & IoT',
    bgPattern: 'light',
    description:
      'Atualmente são mais de 180 mil controladores de rede privada, distribuídos em nove municípios, proporcionando monitoramento, controle e gestão inteligente da infraestrutura urbana.',
    highlights: [
      'Cotia: 30.335 controladores',
      'Toledo: 25.629 controladores',
      'Sumaré: 25.053 controladores',
      'Hortolândia: 20.955 controladores',
      'Itapecerica da Serra: 17.239 controladores',
      'Itatiba: 16.438 controladores',
      'Embu das Artes: 14.866 controladores',
      'Carapicuíba: 10.899 controladores',
      'Palotina, Conder, Francisco Beltrão, Nova Odessa, Guararema, Socorro, Arapoti e mais',
    ],
  },
  {
    pageNumber: 13,
    title: 'ESTAR DIGITAL - MOBILIDADE URBANA',
    subtitle: 'Mais simples, segura e eficiente',
    category: 'Mobilidade Urbana',
    bgPattern: 'dark-blue',
    description:
      'A Estar Digital oferece uma plataforma completa para gestão de estacionamento rotativo, proporcionando praticidade para usuários e eficiência para gestores públicos. Por meio de aplicativo e sistemas integrados, é possível adquirir créditos, gerenciar vagas, consultar históricos e acompanhar informações do veículo em poucos cliques.',
    highlights: [
      'Aplicativo completo para motoristas',
      'Plataforma web para gestão pública municipal',
      'Integração e agilidade na mobilidade',
    ],
  },
  {
    pageNumber: 14,
    title: 'ESTAR DIGITAL - SOLUÇÕES OFERECIDAS',
    subtitle: 'Tecnologia de fiscalização e operações ativas',
    category: 'Mobilidade Urbana',
    bgPattern: 'light',
    description:
      'Soluções completas com fiscalização móvel com OCR e câmeras LPR (leitura de placas), cobrindo diversas cidades em múltiplos estados.',
    highlights: [
      'Aplicativo para usuários iOS e Android',
      'Plataforma de gestão para órgãos públicos',
      'Sistema de vendas para estabelecimentos credenciados',
      'Fiscalização móvel com OCR inteligente',
      'Fiscalização por câmeras LPR em veículos dedicados',
      'Estudos e projetos de engenharia para estacionamento rotativo',
      'Cidades: Araucária/PR, Campo Largo/PR, Castro/PR, Congonhas/MG, Francisco Beltrão/PR, Guarapuava/PR, Linhares/ES, Ponta Grossa/PR, Toledo/PR, Videira/SC',
    ],
  },
  {
    pageNumber: 15,
    title: 'G-TEC SANEAMENTO & ÁGUA',
    subtitle: 'Capivari - SP e região',
    category: 'Saneamento',
    bgPattern: 'light',
    description:
      'A GETEC SAEMA e a GETEC SAAE são empresas especializadas em soluções tecnológicas para gestão, monitoramento e controle de sistemas de abastecimento de água.',
    highlights: [
      'Mapeamento completo da rede',
      'Modelos hidráulicos avançados',
      'Diagnósticos preventivos contra perdas',
    ],
  },
  {
    pageNumber: 16,
    title: 'CICLO COMPLETO DO SANEAMENTO',
    subtitle: 'Da captação ao consumidor final',
    category: 'Saneamento',
    bgPattern: 'light',
    description:
      'Nossa atuação abrange todas as etapas do ciclo de distribuição, desde a captação até a entrega da água ao consumidor final. Com tecnologias avançadas, realizamos o mapeamento completo da rede de abastecimento, desenvolvendo modelos hidráulicos e diagnósticos que permitem visualizar o comportamento da água em toda a cidade, identificando perdas, vazamentos, desvios e oportunidades de melhoria.',
    highlights: [
      'Captação e tratamento controlado',
      'Rede de distribuição monitorada em tempo real',
      'Identificação rápida de anomalias e vazamentos',
    ],
  },
  {
    pageNumber: 17,
    title: 'DIFERENCIAIS EM SANEAMENTO',
    subtitle: 'Tecnologia, inteligência e precisão',
    category: 'Saneamento',
    bgPattern: 'blue',
    description:
      'Tecnologia, inteligência e precisão para garantir que cada gota de água chegue ao seu destino com eficiência e segurança.',
    highlights: [
      'Monitoramento completo do sistema de abastecimento',
      'Mapeamento e modelagem hidráulica da rede',
      'Implantação de hidrômetros inteligentes',
      'Identificação de perdas aparentes e reais',
      'Monitoramento e análise de consumo em tempo real',
      'Apoio à tomada de decisões estratégicas',
      'Maior eficiência operacional e redução de custos',
      'Soluções personalizadas para cada município',
    ],
  },
  {
    pageNumber: 18,
    title: 'PROJETOS EM DESTAQUE - PAÇO DE HORTOLÂNDIA',
    subtitle: 'Grande porte e integração multidisciplinar',
    category: 'Projetos',
    bgPattern: 'blue',
    description:
      'Um projeto de grande porte, desenvolvido de forma integrada para atender às necessidades da administração pública com eficiência, modernidade e sustentabilidade.',
    highlights: [
      'Edificação pública de alta complexidade',
      'Geração solar fotovoltaica instalada na cobertura e solo',
      'Iluminação cênica noturna de destaque',
    ],
  },
  {
    pageNumber: 19,
    title: 'PAÇO DE HORTOLÂNDIA - ESCOPO COMPLETO',
    subtitle: 'Engenharia civil e elétrica de ponta',
    category: 'Projetos',
    bgPattern: 'blue',
    description:
      'Nossa atuação contemplou a realização completa da obra, desde os serviços de infraestrutura e construção civil até a entrega dos sistemas e acabamentos. No escopo civil: fundações, estruturas, alvenarias, revestimentos, acabamentos e urbanização. Na área elétrica: sistemas de distribuição, iluminação interna/externa, quadros e iluminação cênica.',
    highlights: [
      'Construção civil completa do zero ao acabamento',
      'Sistemas de distribuição e quadros elétricos integrados',
      'Iluminação cênica valorizando a arquitetura moderna',
    ],
  },
  {
    pageNumber: 20,
    title: 'PAÇO DE HORTOLÂNDIA - SUSTENTABILIDADE',
    subtitle: 'Estacionamento e usina solar fotovoltaica',
    category: 'Projetos',
    bgPattern: 'blue',
    description:
      'As áreas de estacionamento foram projetadas e executadas para garantir organização, acessibilidade, conforto e segurança aos usuários, integrando-se harmoniosamente ao conjunto arquitetônico. Foi instalado um sistema de geração de energia solar fotovoltaica capaz de reduzir o consumo de energia da rede convencional e diminuir os custos operacionais da administração municipal.',
    highlights: [
      'Energia Solar Fotovoltaica com grande redução de custos',
      'Estacionamento amplo, seguro e acessível',
      'Harmonia paisagística e arquitetônica',
    ],
  },
  {
    pageNumber: 21,
    title: 'USINA TERMELÉTRICA DE FIGUEIRA',
    subtitle: 'UTE-FRA DA COPEL',
    category: 'Energia & Subestações',
    bgPattern: 'dark-blue',
    description:
      'Engenharia eletromecânica especializada para usina com capacidade de 20MW em parceria com a COPEL no Paraná.',
    highlights: [
      'Usina Termelétrica UTE-FRA Copel',
      'Potência instalada de 20 MW',
      'Painéis elétricos e automação industrial',
    ],
  },
  {
    pageNumber: 22,
    title: 'UTE FIGUEIRA - SISTEMAS ELÉTRICOS',
    subtitle: 'Geração, transmissão e alta complexidade',
    category: 'Energia & Subestações',
    bgPattern: 'blue',
    description:
      'Implantação completa dos sistemas elétricos associados à geração, transmissão e distribuição de energia de uma usina com potência instalada de 20 MW. O escopo contemplou obras civis, montagens eletromecânicas, sistemas de automação, proteção, supervisão e infraestrutura elétrica de alta complexidade. Projeto concluído e em plena operação.',
    highlights: [
      'Geração, transmissão e distribuição em 20MW',
      'Automação, proteção e supervisão digital',
      'Projeto 100% concluído e em operação comercial',
    ],
  },
  {
    pageNumber: 23,
    title: 'PROJETO CAIS LESTE - "MOEGÃO"',
    subtitle: 'Porto de Paranaguá - PR',
    category: 'Portos & Logística',
    bgPattern: 'light',
    description:
      'Empreendimento estratégico para ampliação da capacidade logística do Porto de Paranaguá, um dos mais importantes complexos portuários da América Latina.',
    highlights: [
      'Porto de Paranaguá (PR)',
      'Ampliação logística multimodal ferroviária e portuária',
      'Infraestrutura de grande escala',
    ],
  },
  {
    pageNumber: 24,
    title: 'MOEGÃO - PACOTE ELÉTRICO COMPLETO',
    subtitle: 'Subestações, LDAT 138kV e Eletrocentros',
    category: 'Portos & Logística',
    bgPattern: 'blue',
    description:
      'A Engeluz é responsável por todo o pacote elétrico do projeto, incluindo linha de alta tensão, subestações, redes elétricas e sistemas de automação industrial.',
    highlights: [
      'Ampliação (1 vão de LDAT 138kV) SE Paranaguá - COPEL',
      'Linha de Alta Tensão - LDAT 138kV',
      'Implantação da SE Medição 138kV - 30 MVA',
      'Implantação de 7 Subestações Unitárias - Eletrocentros',
      'Redes Elétricas - Média Tensão (MT) e Baixa Tensão (BT)',
      'Automação completa - Processo de Transporte por Esteiras',
    ],
  },
  {
    pageNumber: 25,
    title: 'SUBESTAÇÃO FAZENDA CANADÁ',
    subtitle: 'Equatorial Goiás - 138 kV',
    category: 'Energia & Subestações',
    bgPattern: 'light',
    description:
      'Implantação do setor de 138 kV, instalação de transformador de potência e modernização da infraestrutura existente. Projeto concluído e entregue para operação comercial plena.',
    highlights: [
      'Implantação de setor de alta tensão em 138 kV',
      'Instalação de transformador de potência',
      'Modernização de infraestrutura eletromecânica existente',
      'Concluído e operando para Equatorial Goiás',
    ],
  },
  {
    pageNumber: 26,
    title: 'FAIXA PORTUÁRIA DO PORTO DE PARANAGUÁ',
    subtitle: 'Subestação GIS de alta capacidade',
    category: 'Portos & Logística',
    bgPattern: 'light',
    description:
      'Modernização e ampliação do sistema de distribuição elétrica da área portuária, contemplando subestação GIS (blindada a gás SF6) de alta capacidade e novas unidades de distribuição.',
    highlights: [
      'Subestação GIS (Gas-Insulated Switchgear) de alta capacidade',
      'Modernização da malha elétrica portuária',
      'Novas unidades compactas de distribuição técnica',
    ],
  },
  {
    pageNumber: 27,
    title: 'SUBESTAÇÃO GURUPI E SERRA DA MESA',
    subtitle: 'Proteção, controle e teleproteção',
    category: 'Energia & Subestações',
    bgPattern: 'light',
    description:
      'Projeto de modernização dos sistemas de proteção, controle, supervisão e teleproteção das linhas de transmissão e equipamentos associados em importantes elos do Sistema Interligado Nacional. Empreendimento em fase de execução.',
    highlights: [
      'Modernização dos sistemas de controle digital',
      'Teleproteção de linhas de transmissão estratégicas',
      'Equipamentos homologados no SIN',
    ],
  },
  {
    pageNumber: 28,
    title: 'CAPACITAÇÃO E OBJETIVOS',
    subtitle: 'Investimento contínuo em pessoas e tecnologia',
    category: 'Institucional',
    bgPattern: 'dark-blue',
    description:
      'A Engeluz investe continuamente em pessoas, tecnologia e inovação para atender aos desafios do setor elétrico com excelência.',
    highlights: [
      'Treinamento e capacitação contínua de colaboradores',
      'Equipes de campo certificadas em NR-10 e NR-35',
      'Cultura focada em segurança, qualidade e sustentabilidade',
    ],
  },
  {
    pageNumber: 29,
    title: 'NOSSOS DIFERENCIAIS',
    subtitle: 'Pilares de liderança Engeluz',
    category: 'Diferenciais',
    bgPattern: 'blue',
    description:
      'Os seis pilares que sustentam a credibilidade e a liderança do Grupo Engeluz no mercado.',
    highlights: [
      '1. Consolidação da divisão Turn-Key (chave na mão)',
      '2. Equipes altamente especializadas e capacitadas',
      '3. Profissionais com amplo acervo técnico comprovado',
      '4. Soluções completas em média e alta tensão',
      '5. Forte alinhamento com concessionárias de transmissão e distribuição',
      '6. Compromisso com qualidade, segurança e desempenho operacional',
    ],
  },
  {
    pageNumber: 30,
    title: 'CONTATO & UNIDADES',
    subtitle: 'Transformando cidades com tecnologia e qualidade',
    category: 'Contato',
    bgPattern: 'blue',
    description:
      'engeluz@engeluz.com.br | www.engeluz.com.br\n\n• ENGENHARIA E FÁBRICA: 43 3513.1200 - Rodovia Parigot de Souza, KM 254, Bloco A, Distrito Industrial, Wenceslau Braz - PR | CEP: 84950-000\n• ESCRITÓRIO COMERCIAL CURITIBA: 41 3352.1428 - Rua Eduardo Sprada, 344, Campo Comprido, Curitiba - PR | CEP: 81220-000\n• ESCRITÓRIO COMERCIAL SP: 11 3864.2759 - Avenida Antartica, 675, CJ 2101, Barra Funda, São Paulo - SP | CEP: 05003-020',
    highlights: [
      'Matriz & Fábrica: Wenceslau Braz - PR',
      'Escritório Curitiba: Campo Comprido',
      'Escritório SP: Barra Funda',
    ],
  },
]

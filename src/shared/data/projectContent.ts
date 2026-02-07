import { Factory, ShoppingBag, Stethoscope } from 'lucide-react'

export interface IProject {
  icon: React.ElementType
  category: string
  title: string
  problem: string
  solution: string
  result: string
  testimonial?: string
}

export const projects: IProject[] = [
  {
    icon: Factory,
    category: 'Indústria Alimentícia - Torrefação e Moagem de Café',
    title: 'Regularização Sanitária',
    problem:
      'Indústria de torrefação e moagem de café em fase inicial de operação.',
    solution:
      'Elaboração de LTA - Laudo Técnico de Avaliação para regularização junto à Vigilância Sanitária Municipal, incluindo diagnóstico de instalações, avaliação do processo produtivo,  atendimento às exigências sanitárias.',
    result:
      'LTA aprovado para obtenção da licença sanitária em 90 dias, permitindo a regularização da atividade.',
    testimonial: `Confesso que a parte burocrária da abertura da torrefação me deixou bem perdido. A Kethilyn nos guiou com clareza.`,
  },
  {
    icon: Stethoscope,
    category: 'Farmácia de Manipulação',
    title: 'Regularização Sanitária',
    problem:
      'Farmácia de manipulação em fase de instalação, sem licença sanitária, necessidade de aprovação prévia junto à Vigilância Sanitária Municipal para início das atividades.',
    solution:
      'Elaboração de LTA - Laudo Técnico de Avaliação para regularização.',
    result:
      'Aprovação do LTA e obtenção da licença sanitária, viabilizando o início das operações da farmácia em conformidade com os requisitos sanitários.',
    testimonial: '',
  },
  {
    icon: ShoppingBag,
    category: 'Rede de Supermercados',
    title: 'Gestão de Resíduos',
    problem:
      'Supermercado sem Plano de Gerenciamento de Resíduos, solicitação em condicionante do alvará da prefeitura.',
    solution: 'Elaboração do PGRS específico para supermercados.',
    result:
      'Atendimento ao requisito obrigatório do alvará de funcionamento, prevenindo multas ou embargo do supermercado.',
  },
  {
    icon: Factory,
    category: 'Indústria de Plásticos',
    title: 'Regularização Ambiental Federal - IBAMA',
    problem:
      'Necessidade de RAPP para emissão do Certificado de Regularidade - CR IBAMA.',
    solution:
      'Elaboração e envio do Relatório de Anual de Atividades Potencialmente Poluidoras - RAPP para regularização federal.',
    result:
      'Regularização completa junto ao IBAMA, permitindo operação nacional.',
    testimonial:
      'Para nossa indústria de plásticos, o IBAMA era bicho de sete cabeças, aqui na empresa ninguém conseguia resolver. Com ajuda da Kethilyn, conseguimos regularizar em pouco tempo.',
  },
]

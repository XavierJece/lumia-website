import {
  Building2,
  Factory,
  HardHat,
  ShoppingBag,
  Stethoscope,
} from 'lucide-react'

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
    category: 'Indústria Alimentícia',
    title: 'Regularização Ambiental Completa',
    problem:
      'Empresa atuando sem licença de operação, com risco de embargo pela fiscalização.',
    solution:
      'Elaboração de estudos ambientais, PGRS e acompanhamento do processo de licenciamento junto ao órgão estadual.',
    result:
      'Licença de Operação obtida em 90 dias, permitindo a continuidade das atividades com total segurança jurídica.',
    testimonial:
      'A LUMIA resolveu em meses o que tentávamos há anos. Profissionais extremamente competentes.',
  },
  {
    icon: Stethoscope,
    category: 'Clínica Veterinária',
    title: 'PGRS e Adequação Sanitária',
    problem:
      'Clínica sem Plano de Gerenciamento de Resíduos, gerando descarte inadequado de resíduos de saúde.',
    solution:
      'Elaboração do PGRS específico para clínicas veterinárias, treinamento de equipe e contratação de empresa coletora certificada.',
    result:
      '100% de conformidade nas fiscalizações seguintes, além de redução de custos com destinação de resíduos.',
    testimonial:
      'Agora temos tranquilidade para trabalhar, sabendo que está tudo certo.',
  },
  {
    icon: ShoppingBag,
    category: 'Rede de Supermercados',
    title: 'Licenciamento de Nova Unidade',
    problem:
      'Necessidade de obtenção de todas as licenças ambientais para abertura de nova loja em área urbana.',
    solution:
      'Estudo de Impacto de Vizinhança, laudos técnicos e acompanhamento do processo junto à prefeitura.',
    result:
      'Inauguração dentro do prazo planejado, sem atrasos causados por pendências ambientais.',
  },
  {
    icon: Building2,
    category: 'Construtora',
    title: 'Habite-se Ambiental',
    problem:
      'Empreendimento residencial com pendências ambientais impedindo a emissão do Habite-se.',
    solution:
      'Regularização de áreas verdes, recuperação de área degradada e emissão de laudos técnicos necessários.',
    result:
      'Habite-se emitido e unidades entregues aos compradores dentro do prazo contratual.',
    testimonial: 'Parceria que se repetirá em todos os nossos empreendimentos.',
  },
  {
    icon: HardHat,
    category: 'Marmoraria',
    title: 'Adequação para Fiscalização',
    problem:
      'Empresa notificada por irregularidades no tratamento de efluentes e descarte de resíduos.',
    solution:
      'Projeto de sistema de tratamento de efluentes, adequação do processo produtivo e obtenção de licença.',
    result:
      'Todas as notificações arquivadas e empresa operando em total conformidade.',
  },
  {
    icon: Factory,
    category: 'Indústria de Plásticos',
    title: 'Licenciamento IBAMA',
    problem:
      'Necessidade de Cadastro Técnico Federal e licenciamento junto ao IBAMA para atividade potencialmente poluidora.',
    solution:
      'Elaboração de documentação técnica, cadastro CTF e acompanhamento do processo de licenciamento federal.',
    result:
      'Regularização completa junto ao IBAMA, permitindo operação nacional.',
  },
]

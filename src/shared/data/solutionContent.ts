import { Building, FileCheck, FileText, Handshake, Recycle } from 'lucide-react'

export interface ISolutionContent {
  title: string
  forWhom: string
  href: string
  icon: React.ElementType
  quickLinks: string
  services: string[]
}

export const solutionContent: ISolutionContent[] = [
  {
    title: 'Licenças e Regularização Ambiental',
    forWhom:
      'Para quem precisa abrir, regularizar ou expandir o negócio atendendo à legislação',
    href: 'licencas-regularizacao-ambiental',
    icon: FileCheck,
    quickLinks: 'Licenças Ambientais',
    services: [
      'Licença Ambiental (LP, LI, LO)',
      'Licença e Alvará Sanitária',
      'Cadastro Técnico Federal do IBAMA (CTF)',
      'Certificado de Regularidade do IBAMA',
      'Relatório de Atividades Potencialmente Poluidoras (RAPP)',
    ],
  },
  {
    title: 'Gestão de Resíduos Sólidos',
    forWhom:
      'Para quem gera resíduos e precisa descartar corretamente, evitando multas',
    href: 'gestao-residuos-solidos',
    icon: Recycle,
    quickLinks: 'Gestão de Resíduos',
    services: [
      'Plano de Gerenciamento de Resíduos Sólidos (PGRS)',
      'PGRS para Serviços de Saúde (PGRSS) - Focado em clínicas, farmácias, veterinárias',
      'PGRS para Construção Civil (PGRSCC) - Focado em construtoras, marmorarias,serralherias ',
      'Serviços no SIGOR (Sistema integrado de resíduos)',
      'Consultoria para implantação e treinamento',
    ],
  },
  {
    title: 'Laudos e Estudos Técnicos',
    forWhom: 'Para quem precisa atender requisitos legais e exigências',
    href: 'laudos-estudos-tecnicos',
    icon: FileText,
    quickLinks: 'Laudos Técnicos',
    services: [
      'Laudo Técnico de Avaliação (LTA)',
      'Estudo de Impacto de Vizinhança (EIV)',
      'Estudos e Relatórios Ambientais (EIA/RIMA)',
      'Relatório Ambiental Simplificado (RAS)',
    ],
  },
  {
    title: 'Regularização de Imóveis e Bombeiros',
    forWhom:
      'Para quem precisa da documentação para liberação e funcionamento seguro do seu estabelecimento',
    href: 'regularizacao-bombeiros',
    icon: Building,
    quickLinks: 'Regularização & Bombeiros',
    services: [
      'Alvará de Funcionamento (Prefeitura)',
      'Habite-se',
      'Auto de Vistoria do Corpo de Bombeiros (AVCB)',
      'Certificado de Licença do Corpo de Bombeiros (CLCB)',
      'Plano de Prevenção e Proteção Contra Incêndio (PPCI)',
    ],
  },
  {
    title: 'Assessoria Contínua e Capacitação',
    forWhom:
      'Para quem precisa de suporte técnico permanente e treinamentos para sua equipe, assegurando conformidade e eficiência.',
    href: 'assessoria-treinamentos',
    icon: Handshake,
    quickLinks: 'Assessoria & Treinamentos',
    services: [
      'Assessoria Ambiental (Suporte mensal ou consultivo)',
      'Treinamentos e Capacitação em Gestão de Resíduos',
      'Palestras de Conscientização Ambiental',
      'Cursos de Boas Práticas Operacionais',
      'Desenvolvimento de Projetos de redução de custos e mitigação de impactos (Economia Circular e Logistica Reversa)',
    ],
  },
]

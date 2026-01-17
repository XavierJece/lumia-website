import {
  Award,
  BookOpen,
  Brain,
  Building,
  ClipboardList,
  Cpu,
  Factory,
  File,
  FileCheck,
  FileDigit,
  FileText,
  FileWarning,
  FireExtinguisher,
  Flame,
  GraduationCap,
  Headphones,
  Heart,
  Home,
  Leaf,
  Map,
  Megaphone,
  Recycle,
  Scan,
  Shield,
  ShieldCheck,
  Users,
} from 'lucide-react'

export interface ISolutionServiceContent {
  title: string
  description: string
  businessAdvantages: string[]
  icon?: React.ElementType
}

export interface ISolutionContent {
  title: string
  forWhom: string
  href: string
  icon: React.ElementType
  quickLinks: string
  services: ISolutionServiceContent[]
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
      {
        title: 'Licença Ambiental (LP, LI, LO)',
        description:
          'Garantimos a obtenção de todas as licenças ambientais necessárias para sua operação, desde o planejamento até a operação do empreendimento.',
        icon: Leaf,
        businessAdvantages: [
          'Evita multas e embargos por irregularidades',
          'Agilidade no processo junto aos órgãos competentes',
          'Segurança jurídica para seu negócio',
          'Redução de riscos operacionais',
        ],
      },
      {
        title: 'Licença e Alvará Sanitária',
        description:
          'Regularizamos seu estabelecimento junto à vigilância sanitária, garantindo condições adequadas de funcionamento.',
        icon: Shield,
        businessAdvantages: [
          'Conformidade com normas de saúde pública',
          'Prevenção de interdições e autuações',
          'Credibilidade junto aos clientes',
          'Ambiente seguro para funcionários',
        ],
      },
      {
        title: 'Cadastro Técnico Federal do IBAMA (CTF)',
        description:
          'Realizamos o cadastro obrigatório para atividades que utilizam recursos ambientais.',
        icon: FileDigit,
        businessAdvantages: [
          'Regularidade perante o órgão federal',
          'Permissão para atividades controladas',
          'Transparência na gestão ambiental',
          'Base para outras licenças',
        ],
      },
      {
        title: 'Certificado de Regularidade do IBAMA',
        description:
          'Obtenção e manutenção do certificado que comprova sua conformidade ambiental.',
        icon: Award,
        businessAdvantages: [
          'Comprovação de regularidade ambiental',
          'Requisito para contratos e financiamentos',
          'Fortalecimento da imagem institucional',
          'Facilita auditorias e inspeções',
        ],
      },
      {
        title: 'Relatório de Atividades Potencialmente Poluidoras (RAPP)',
        description:
          'Elaboração e envio do relatório anual obrigatório para atividades poluidoras.',
        icon: FileWarning,
        businessAdvantages: [
          'Cumprimento de obrigação legal anual',
          'Mapeamento completo dos aspectos ambientais',
          'Base para planejamento de melhorias',
          'Evita multas por falta de envio',
        ],
      },
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
      {
        title: 'Plano de Gerenciamento de Resíduos Sólidos (PGRS)',
        description:
          'Desenvolvemos um plano completo para gestão adequada dos resíduos gerados em sua empresa.',
        icon: Recycle,
        businessAdvantages: [
          'Redução de custos com destinação de resíduos',
          'Cumprimento da Política Nacional de Resíduos',
          'Otimização de processos internos',
          'Preparação para auditorias ambientais',
        ],
      },
      {
        title:
          'PGRS para Serviços de Saúde (PGRSS) - Focado em clínicas, farmácias, veterinárias',
        description:
          'Plano específico para o gerenciamento seguro de resíduos de saúde.',
        icon: Heart,
        businessAdvantages: [
          'Proteção da saúde pública e do meio ambiente',
          'Conformidade com RDC/ANVISA',
          'Redução de riscos biológicos',
          'Documentação para fiscalização',
        ],
      },
      {
        title:
          'PGRS para Construção Civil (PGRSCC) - Focado em construtoras, marmorarias, serralherias',
        description:
          'Gestão especializada para resíduos da construção civil, desde a geração até a destinação final.',
        icon: Building,
        businessAdvantages: [
          'Cumprimento da Resolução CONAMA 307',
          'Redução de custos com transporte e destinação',
          'Possibilidade de reaproveitamento de materiais',
          'Evita penalidades em obras',
        ],
      },
      {
        title: 'Serviços no SIGOR (Sistema integrado de resíduos)',
        description:
          'Cadastro, acompanhamento e emissão de documentos no sistema estadual de resíduos.',
        icon: Cpu,
        businessAdvantages: [
          'Digitalização e organização da documentação',
          'Controle em tempo real dos resíduos gerados',
          'Facilidade na emissão de MTRs',
          'Transparência na cadeia de destinação',
        ],
      },
      {
        title: 'Consultoria para implantação e treinamento',
        description:
          'Implementação prática do PGRS com capacitação da equipe envolvida.',
        icon: Users,
        businessAdvantages: [
          'Implementação eficiente dos processos',
          'Capacitação de colaboradores',
          'Garantia de execução adequada',
          'Suporte na resolução de problemas',
        ],
      },
    ],
  },
  {
    title: 'Laudos e Estudos Técnicos',
    forWhom: 'Para quem precisa atender requisitos legais e exigências',
    href: 'laudos-estudos-tecnicos',
    icon: FileText,
    quickLinks: 'Laudos Técnicos',
    services: [
      {
        title: 'Laudo Técnico de Avaliação (LTA)',
        description:
          'Avaliação técnica detalhada das condições ambientais do empreendimento.',
        icon: ClipboardList,
        businessAdvantages: [
          'Diagnóstico preciso da situação ambiental',
          'Base técnica para tomada de decisões',
          'Atendimento a exigências legais específicas',
          'Prevenção de passivos ambientais',
        ],
      },
      {
        title: 'Estudo de Impacto de Vizinhança (EIV)',
        description:
          'Análise dos impactos do empreendimento no entorno urbano e social.',
        icon: Map,
        businessAdvantages: [
          'Atendimento a exigências municipais',
          'Identificação e mitigação de conflitos',
          'Melhor relacionamento com a comunidade',
          'Facilita obtenção de alvarás',
        ],
      },
      {
        title: 'Estudos e Relatórios Ambientais (EIA/RIMA)',
        description:
          'Elaboração dos estudos ambientais completos para empreendimentos de maior porte.',
        icon: FileText,
        businessAdvantages: [
          'Atendimento a licenciamentos complexos',
          'Análise profunda dos impactos ambientais',
          'Base para decisões de órgãos ambientais',
          'Transparência no processo de licenciamento',
        ],
      },
      {
        title: 'Relatório Ambiental Simplificado (RAS)',
        description:
          'Documentação simplificada para empreendimentos de menor potencial impactante.',
        icon: File,
        businessAdvantages: [
          'Agilidade no processo de licenciamento',
          'Custo reduzido em relação ao EIA/RIMA',
          'Adequado para pequenos e médios empreendimentos',
          'Atendimento legal com praticidade',
        ],
      },
    ],
  },
  {
    title: 'Regularização de Imóveis e Bombeiros',
    forWhom:
      'Para quem precisa da documentação para liberação e funcionamento seguro do seu estabelecimento',
    href: 'regularizacao-bombeiros',
    icon: Factory,
    quickLinks: 'Regularização & Bombeiros',
    services: [
      {
        title: 'Alvará de Funcionamento (Prefeitura)',
        description:
          'Regularização municipal para funcionamento legal do estabelecimento.',
        icon: FileCheck,
        businessAdvantages: [
          'Legalidade para operação comercial',
          'Evita multas e interdições',
          'Requisito para contratos e financiamentos',
          'Credibilidade perante clientes',
        ],
      },
      {
        title: 'Habite-se',
        description:
          'Certificado que atesta a conclusão da obra conforme projeto aprovado.',
        icon: Home,
        businessAdvantages: [
          'Regularização da edificação',
          'Possibilita registro na matrícula do imóvel',
          'Necessário para financiamento e venda',
          'Comprova qualidade construtiva',
        ],
      },
      {
        title: 'Auto de Vistoria do Corpo de Bombeiros (AVCB)',
        description:
          'Certificado que comprova condições de segurança contra incêndio.',
        icon: Flame,
        businessAdvantages: [
          'Conformidade com normas de segurança',
          'Proteção de vidas e patrimônio',
          'Evita multas e interdições',
          'Seguro para colaboradores e clientes',
        ],
      },
      {
        title: 'Certificado de Licença do Corpo de Bombeiros (CLCB)',
        description:
          'Licença definitiva após aprovação das instalações e equipamentos.',
        icon: ShieldCheck,
        businessAdvantages: [
          'Regularidade definitiva com bombeiros',
          'Validade prolongada (geralmente 3 anos)',
          'Redução de burocracias anuais',
          'Maior segurança jurídica',
        ],
      },
      {
        title: 'Plano de Prevenção e Proteção Contra Incêndio (PPCI)',
        description:
          'Desenvolvimento do plano completo de segurança contra incêndios.',
        icon: FireExtinguisher,
        businessAdvantages: [
          'Documentação técnica para aprovação',
          'Direciona investimentos em segurança',
          'Treinamento adequado da brigada',
          'Prevenção de acidentes graves',
        ],
      },
    ],
  },
  {
    title: 'Assessoria Contínua e Capacitação',
    forWhom:
      'Para quem precisa de suporte técnico permanente e treinamentos para sua equipe, assegurando conformidade e eficiência.',
    href: 'assessoria-treinamentos',
    icon: Headphones,
    quickLinks: 'Assessoria & Treinamentos',
    services: [
      {
        title: 'Assessoria Ambiental (Suporte mensal ou consultivo)',
        description:
          'Acompanhamento contínuo para manutenção da conformidade ambiental.',
        icon: Scan,
        businessAdvantages: [
          'Atualização constante sobre mudanças legislativas',
          'Resposta rápida a dúvidas técnicas',
          'Prevenção de não conformidades',
          'Otimização de custos ambientais',
        ],
      },
      {
        title: 'Treinamentos e Capacitação em Gestão de Resíduos',
        description:
          'Capacitação da equipe para gestão adequada e segura dos resíduos.',
        icon: GraduationCap,
        businessAdvantages: [
          'Equipe qualificada e consciente',
          'Redução de erros operacionais',
          'Cumprimento de normas internas',
          'Cultura organizacional sustentável',
        ],
      },
      {
        title: 'Palestras de Conscientização Ambiental',
        description:
          'Sensibilização de colaboradores sobre importância das práticas ambientais.',
        icon: Megaphone,
        businessAdvantages: [
          'Engajamento da equipe',
          'Redução do consumo de recursos',
          'Melhoria da imagem interna',
          'Prevenção de desperdícios',
        ],
      },
      {
        title: 'Cursos de Boas Práticas Operacionais',
        description:
          'Capacitação técnica para otimização de processos com menor impacto ambiental.',
        icon: BookOpen,
        businessAdvantages: [
          'Aumento da eficiência operacional',
          'Redução de custos com insumos',
          'Melhoria na qualidade dos produtos/serviços',
          'Diferencial competitivo no mercado',
        ],
      },
      {
        title:
          'Desenvolvimento de Projetos de redução de custos e mitigação de impactos (Economia Circular e Logística Reversa)',
        description:
          'Implementação de modelos de negócio sustentáveis e economicamente vantajosos.',
        icon: Brain,
        businessAdvantages: [
          'Redução de custos com matéria-prima',
          'Novas fontes de receita',
          'Fortalecimento da marca sustentável',
          'Adequação a tendências de mercado',
        ],
      },
    ],
  },
]

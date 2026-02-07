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
  categorySlug: string
  coverURL?: string
}

export interface ISolutionCategoryContent {
  title: string
  forWhom: string
  slug: string
  icon: React.ElementType
  quickLinks: string
}
export const solutionsContent: ISolutionServiceContent[] = [
  {
    title: 'Licença Ambiental (LP, LI, LO)',
    description:
      'Garantimos a obtenção de todas as licenças ambientais necessárias para sua operação, desde o planejamento até a operação do empreendimento.',
    icon: Leaf,
    coverURL:
      'https://images.unsplash.com/photo-1768796372063-4da660e034b8?w=600&h=400&fit=crop',
    categorySlug: 'licencas-regularizacao-ambiental',
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
    coverURL:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
    categorySlug: 'licencas-regularizacao-ambiental',
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
    coverURL:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
    categorySlug: 'licencas-regularizacao-ambiental',
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
    coverURL:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
    categorySlug: 'licencas-regularizacao-ambiental',
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
    coverURL:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
    categorySlug: 'licencas-regularizacao-ambiental',
    businessAdvantages: [
      'Cumprimento de obrigação legal anual',
      'Mapeamento completo dos aspectos ambientais',
      'Base para planejamento de melhorias',
      'Evita multas por falta de envio',
    ],
  },
  {
    title: 'Plano de Gerenciamento de Resíduos Sólidos (PGRS)',
    description:
      'Desenvolvemos um plano completo para gestão adequada dos resíduos gerados em sua empresa.',
    icon: Recycle,
    coverURL:
      'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop',
    categorySlug: 'gestao-residuos',
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
    coverURL:
      'https://images.unsplash.com/photo-1763310225071-af00bef26d1c?w=600&h=400&fit=crop',
    categorySlug: 'gestao-residuos',
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
    coverURL:
      'https://images.unsplash.com/photo-1653202143301-7fb80a90010c?w=600&h=400&fit=crop',
    categorySlug: 'gestao-residuos',
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
    coverURL:
      'https://images.unsplash.com/photo-1763315156830-07870b159121?w=600&h=400&fit=crop',
    categorySlug: 'gestao-residuos',
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
    coverURL:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    categorySlug: 'gestao-residuos',
    businessAdvantages: [
      'Implementação eficiente dos processos',
      'Capacitação de colaboradores',
      'Garantia de execução adequada',
      'Suporte na resolução de problemas',
    ],
  },
  {
    title: 'Laudo Técnico de Avaliação (LTA)',
    description:
      'Avaliação técnica detalhada das condições ambientais do empreendimento.',
    icon: ClipboardList,
    coverURL:
      'https://images.unsplash.com/photo-1575282384538-b7ae877e0505?w=600&h=400&fit=crop',
    categorySlug: 'laudos-estudos-tecnicos',
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
    coverURL:
      'https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?w=600&h=400&fit=crop',
    categorySlug: 'laudos-estudos-tecnicos',
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
    coverURL:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    categorySlug: 'laudos-estudos-tecnicos',
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
    coverURL:
      'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&h=400&fit=crop',
    categorySlug: 'laudos-estudos-tecnicos',
    businessAdvantages: [
      'Agilidade no processo de licenciamento',
      'Custo reduzido em relação ao EIA/RIMA',
      'Adequado para pequenos e médios empreendimentos',
      'Atendimento legal com praticidade',
    ],
  },
  {
    title: 'Alvará de Funcionamento (Prefeitura)',
    description:
      'Regularização municipal para funcionamento legal do estabelecimento.',
    icon: FileCheck,
    coverURL:
      'https://images.unsplash.com/photo-1585219820390-a34a8d4760ed?w=600&h=400&fit=crop',
    categorySlug: 'regularizacao-bombeiros',
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
    coverURL:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    categorySlug: 'regularizacao-bombeiros',
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
    coverURL:
      'https://images.unsplash.com/photo-1707307316651-25b6a1bef122?w=600&h=400&fit=crop',
    categorySlug: 'regularizacao-bombeiros',
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
    coverURL:
      'https://images.unsplash.com/photo-1581094480465-4e6c25fb4a52?w=600&h=400&fit=crop',
    categorySlug: 'regularizacao-bombeiros',
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
    coverURL:
      'https://images.unsplash.com/photo-1743422854997-b6a4aa993aea?w=600&h=400&fit=crop',
    categorySlug: 'regularizacao-bombeiros',
    businessAdvantages: [
      'Documentação técnica para aprovação',
      'Direciona investimentos em segurança',
      'Treinamento adequado da brigada',
      'Prevenção de acidentes graves',
    ],
  },
  {
    title: 'Assessoria Ambiental (Suporte mensal ou consultivo)',
    description:
      'Acompanhamento contínuo para manutenção da conformidade ambiental.',
    icon: Scan,
    coverURL:
      'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=600&h=400&fit=crop',
    categorySlug: 'assessoria-treinamentos',
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
    coverURL:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
    categorySlug: 'assessoria-treinamentos',
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
    coverURL:
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop',
    categorySlug: 'assessoria-treinamentos',
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
    coverURL:
      'https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65?w=600&h=400&fit=crop',
    categorySlug: 'assessoria-treinamentos',
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
    coverURL:
      'https://images.unsplash.com/photo-1573868396123-ef72a7f7b94f?w=600&h=400&fit=crop',
    categorySlug: 'assessoria-treinamentos',
    businessAdvantages: [
      'Redução de custos com matéria-prima',
      'Novas fontes de receita',
      'Fortalecimento da marca sustentável',
      'Adequação a tendências de mercado',
    ],
  },
]

export const solutionsCategoryContent: ISolutionCategoryContent[] = [
  {
    title: 'Licenças e Regularização Ambiental',
    forWhom:
      'Para quem precisa abrir, regularizar ou expandir o negócio atendendo à legislação',
    slug: 'licencas-regularizacao-ambiental',
    icon: FileCheck,
    quickLinks: 'Licenças Ambientais',
  },
  {
    title: 'Gestão de Resíduos',
    forWhom:
      'Para quem gera resíduos e precisa descartar corretamente, evitando multas',
    slug: 'gestao-residuos',
    icon: Recycle,
    quickLinks: 'Gestão de Resíduos',
  },
  {
    title: 'Laudos e Estudos Técnicos',
    forWhom: 'Para quem precisa atender requisitos legais e exigências',
    slug: 'laudos-estudos-tecnicos',
    icon: FileText,
    quickLinks: 'Laudos Técnicos',
  },
  {
    title: 'Regularização de Imóveis e Bombeiros',
    forWhom:
      'Para quem precisa da documentação para liberação e funcionamento seguro do seu estabelecimento',
    slug: 'regularizacao-bombeiros',
    icon: Factory,
    quickLinks: 'Regularização & Bombeiros',
  },
  {
    title: 'Assessoria Contínua e Capacitação',
    forWhom:
      'Para quem precisa de suporte técnico permanente e treinamentos para sua equipe, assegurando conformidade e eficiência.',
    slug: 'assessoria-treinamentos',
    icon: Headphones,
    quickLinks: 'Assessoria & Treinamentos',
  },
]

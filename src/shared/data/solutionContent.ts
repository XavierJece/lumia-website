import {
  Award,
  Brain,
  Building,
  Building2,
  Calendar,
  ClipboardList,
  Database,
  File,
  FileCheck,
  FileDigit,
  FileText,
  FileWarning,
  Flame,
  GraduationCap,
  Headphones,
  Heart,
  Home,
  Leaf,
  Map,
  Megaphone,
  Recycle,
  RefreshCw,
  Shield,
  ShieldCheck,
  Truck,
  Volume,
} from 'lucide-react'

export interface ISolutionServiceContent {
  title: string
  description: string
  businessAdvantages: string[]
  icon?: React.ElementType
  categorySlug: string
  coverURL?: string
  subtitle?: string
  process?: Array<{
    title: string
    description: string
  }>
}

export interface ISolutionCategoryContent {
  title: string
  description: string
  slug: string
  icon: React.ElementType
  quickLinks: string
}

// ============================================================================
// CATEGORIAS DE SOLUÇÕES
// ============================================================================

export const solutionsCategoryContent: ISolutionCategoryContent[] = [
  {
    title: 'Gestão de Resíduos',
    description: `Para quem gera resíduos e precisa descartar corretamente, sem risco de multa, embargo ou problema com fiscalização.

A gestão de resíduos não é só separar lixo. Envolve norma, documento, destino correto e responsabilidade legal. A Lumia cuida de todo esse processo de forma técnica, prática e alinhada com a realidade da operação.`,
    slug: 'gestao-de-residuos',
    icon: Recycle,
    quickLinks: 'Gestão de Resíduos',
  },
  {
    title: 'Licença Ambiental',
    description: `Apoio completo no licenciamento ambiental, do enquadramento inicial à obtenção e acompanhamento das licenças, garantindo que o empreendimento opere dentro da legislação, com segurança jurídica e sem risco de multas, embargos ou paralisações.

A Lumia atua de forma estratégica junto aos órgãos ambientais, entendendo o tipo de atividade, o porte do empreendimento e as exigências reais de cada processo em promessas irreais e sem atalhos que geram problema depois.`,
    slug: 'licenca-ambiental',
    icon: FileCheck,
    quickLinks: 'Licença Ambiental',
  },
  {
    title: 'Licença Sanitária',
    description: `Apoio completo na regularização junto à Vigilância Sanitária, garantindo que o estabelecimento atenda às normas de saúde pública e opere sem risco de autuações, interdições ou atrasos na liberação.

A Lumia atua desde o enquadramento da atividade até o acompanhamento do processo junto aos órgãos sanitários, sempre alinhando exigência legal com a realidade do negócio.`,
    slug: 'licenca-sanitaria',
    icon: Shield,
    quickLinks: 'Licença Sanitária',
  },
  {
    title: 'Regularização Ambiental Federal – IBAMA',
    description: `Atuação completa no processo de regularização ambiental federal junto ao IBAMA, garantindo conformidade legal, prevenção de multas e segurança para a operação da empresa.

A Lumia acompanha todas as etapas do enquadramento ambiental federal, cuidando da documentação obrigatória e do cumprimento das obrigações periódicas exigidas pelo órgão.`,
    slug: 'regularizacao-ambiental-federal-ibama',
    icon: Award,
    quickLinks: 'Regularização IBAMA',
  },
  {
    title: 'Estudos e Laudos Técnicos',
    description: `Elaboração de **estudos e laudos técnicos** para apoiar a implantação, regularização e operação de empreendimentos, atendendo às exigências legais e oferecendo base técnica segura para a tomada de decisão.

A Lumia atua com foco na viabilidade do projeto, no atendimento às normas e na redução de riscos ambientais, urbanísticos e operacionais.`,
    slug: 'estudos-e-laudos-tecnicos',
    icon: FileText,
    quickLinks: 'Estudos e Laudos',
  },
  {
    title: 'Licença do Corpo de Bombeiros',
    description: `Atuação completa na **regularização junto ao Corpo de Bombeiros**, garantindo que o imóvel atenda às normas de segurança contra incêndio e pânico e esteja legalmente liberado para funcionamento.

A Lumia cuida de todo o processo, desde o enquadramento da edificação até a obtenção e manutenção da licença, sempre considerando a atividade exercida e a realidade do imóvel.
      `,
    slug: 'licenca-do-corpo-de-bombeiros',
    icon: Flame,
    quickLinks: 'Licença Bombeiros',
  },
  {
    title: 'Regularização de Imóveis e Comércios',
    description: `Atuação completa na **regularização de imóveis e estabelecimentos comerciais junto à Prefeitura**, garantindo que o imóvel esteja legalizado e apto a funcionar sem risco de multas, embargos ou interdições.

A Lumia conduz o processo desde a análise da situação do imóvel até a liberação final, sempre alinhando exigências legais com a realidade construtiva e operacional.`,
    slug: 'regularizacao-de-imoveis-e-comercios',
    icon: Building2,
    quickLinks: 'Regularização de Imóveis',
  },
  {
    title: 'Assessoria Técnica',
    description: `Acompanhamento técnico contínuo para orientar empresas no **cumprimento das obrigações ambientais**, no atendimento a fiscalizações e no suporte à tomada de decisões estratégicas.

A assessoria da Lumia atua de forma preventiva, ajudando a empresa a se manter regular, organizada e preparada, reduzindo riscos legais, operacionais e financeiros.`,
    slug: 'assessoria-tecnica',
    icon: Headphones,
    quickLinks: 'Assessoria Técnica',
  },
  {
    title: 'Desenvolvimento de Projetos Ambientais',
    description: `Desenvolvimento de **projetos técnicos voltados à redução de custos operacionais e à mitigação de impactos ambientais**, com base nos princípios da economia circular e da logística reversa.

A atuação da Lumia foca em transformar resíduos e ineficiências em oportunidades de melhoria, reduzindo desperdícios, otimizando processos e atendendo às exigências legais sem comprometer a operação.`,
    slug: 'desenvolvimento-de-projetos-ambientais',
    icon: Brain,
    quickLinks: 'Desenvolvimento de Projetos',
  },
]

// ============================================================================
// SERVIÇOS (SOLUÇÕES)
// ============================================================================

export const solutionsServiceContent: ISolutionServiceContent[] = [
  // --------------------------------------------------------------------------
  // Gestão de Resíduos
  // --------------------------------------------------------------------------
  {
    title: 'Plano de Gerenciamento de Resíduos Sólidos (PGRS)',
    description:
      'Elaboração do **PGRS completo**, atendendo às exigências legais e à rotina da sua empresa. O plano define como os resíduos são gerados, armazenados, transportados e destinados, garantindo conformidade e organização.',
    businessAdvantages: [
      'Redução de custos com destinação e coleta',
      'Atendimento à Política Nacional de Resíduos Sólidos',
      'Melhoria e padronização dos processos internos',
      'Preparação para auditorias e fiscalizações ambientais',
    ],
    icon: Recycle,
    categorySlug: 'gestao-de-residuos',
  },
  {
    title: 'PGRSS – Resíduos de Serviços de Saúde',
    description:
      'Plano específico para o **gerenciamento seguro de resíduos de saúde**, com foco na redução de riscos e no cumprimento das normas sanitárias.',
    businessAdvantages: [
      'Proteção da saúde pública e do meio ambiente',
      'Conformidade com RDCs da ANVISA e legislação vigente',
      'Redução de riscos biológicos e acidentes',
      'Documentação adequada para fiscalização sanitária',
    ],
    icon: Heart,
    categorySlug: 'gestao-de-residuos',
  },
  {
    title: 'PGRSCC – Construção Civil',
    description:
      'Gestão técnica dos resíduos da construção civil, desde a geração até a destinação final, evitando passivos ambientais e problemas em obras.',
    businessAdvantages: [
      'Atendimento à Resolução CONAMA nº 307',
      'Redução de custos com transporte e destinação',
      'Possibilidade de reaproveitamento de materiais',
      'Evita autuações e embargos durante a obra',
    ],
    icon: Building,
    categorySlug: 'gestao-de-residuos',
  },
  {
    title: 'Serviços no SIGOR / SINIR',
    description:
      'Cadastro, acompanhamento e gestão da documentação nos sistemas oficiais de resíduos, garantindo rastreabilidade e organização.',
    businessAdvantages: [
      'Documentação digital organizada e atualizada',
      'Controle dos resíduos gerados e destinados',
      'Facilidade na emissão de MTRs',
      'Transparência na cadeia de destinação',
    ],
    icon: Database,
    categorySlug: 'gestao-de-residuos',
  },
  {
    title: 'Logística Reversa',
    description:
      'Estruturação e acompanhamento de sistemas de **logística reversa**, atendendo às exigências legais para retorno e destinação adequada de produtos e embalagens.',
    businessAdvantages: [
      'Atendimento às exigências legais de logística reversa',
      'Redução de riscos de autuação',
      'Organização dos fluxos de retorno',
      'Comprovação documental junto aos órgãos fiscalizadores',
    ],
    icon: RefreshCw,
    categorySlug: 'gestao-de-residuos',
  },

  // --------------------------------------------------------------------------
  // Licença Ambiental
  // --------------------------------------------------------------------------
  {
    title: 'Licença Ambiental – Prefeitura, CETESB e IBAMA (LP, LI e LO)',
    description: `Atuação completa no processo de licenciamento ambiental municipal, estadual e federal, desde a fase de planejamento até a operação do empreendimento.

Acompanhamos todas as etapas: análise de viabilidade, enquadramento legal, elaboração de estudos, protocolo, atendimento a exigências e acompanhamento do processo junto aos órgãos ambientais competentes.`,
    businessAdvantages: [
      'Evita multas, embargos e paralisações por irregularidades',
      'Mais agilidade e clareza no processo junto aos órgãos ambientais',
      'Segurança jurídica para operar e expandir',
      'Redução de riscos ambientais e operacionais',
    ],
    icon: Leaf,
    categorySlug: 'licenca-ambiental',
  },

  // --------------------------------------------------------------------------
  // Licença Sanitária
  // --------------------------------------------------------------------------
  {
    title: 'CMVS – Cadastro Municipal de Vigilância Sanitária',
    description: `Regularização obrigatória para estabelecimentos sujeitos à Vigilância Sanitária, como **restaurantes, clínicas, farmácias, salões de beleza, estética e meios de hospedagem**.

O CMVS garante que o negócio esteja devidamente cadastrado e autorizado a funcionar, evitando multas, interdições e problemas na abertura ou renovação da licença.`,
    businessAdvantages: [
      'Conformidade com as normas de saúde pública',
      'Prevenção de autuações e interdições',
      'Agilidade na liberação do funcionamento',
      'Segurança para operar dentro da legalidade',
    ],
    icon: ClipboardList,
    categorySlug: 'licenca-sanitaria',
  },
  {
    title: 'LTA – Laudo Técnico de Avaliação',
    description: `Elaboração de **Laudo Técnico de Avaliação**, documento essencial para a abertura e regularização do estabelecimento junto à Vigilância Sanitária.

O laudo comprova que o imóvel, os processos e as condições operacionais atendem às exigências sanitárias, permitindo que o empreendimento funcione com segurança e tranquilidade.`,
    businessAdvantages: [
      'Atendimento às exigências da Vigilância Sanitária',
      'Redução de riscos de indeferimento do processo',
      'Documento técnico válido para fiscalização',
      'Mais segurança jurídica na operação',
    ],
    icon: FileText,
    categorySlug: 'licenca-sanitaria',
  },

  // --------------------------------------------------------------------------
  // Regularização Ambiental Federal – IBAMA
  // --------------------------------------------------------------------------
  {
    title: 'CTF – Cadastro Técnico Federal do IBAMA',
    description: `Realização e acompanhamento do **Cadastro Técnico Federal**, obrigatório para empresas que exercem atividades potencialmente poluidoras ou utilizam recursos ambientais.

O CTF é a base da regularização ambiental federal e viabiliza a emissão do Certificado de Regularidade.`,
    businessAdvantages: [
      'Regularidade perante o órgão ambiental federal',
      'Permissão para exercer atividades controladas',
      'Transparência na gestão ambiental',
      'Base para licenciamentos e outras exigências legais',
    ],
    icon: FileDigit,
    categorySlug: 'regularizacao-ambiental-federal-ibama',
  },
  {
    title: 'CR – Certificado de Regularidade do IBAMA',
    description: `Obtenção e manutenção do **Certificado de Regularidade**, documento que comprova que a empresa está em dia com suas obrigações ambientais federais.

O CR é exigido em processos de licenciamento, licitações, contratos e operações com instituições financeiras.`,
    businessAdvantages: [
      'Comprovação de regularidade ambiental',
      'Atendimento a exigências contratuais e financeiras',
      'Fortalecimento da imagem institucional',
      'Facilidade em auditorias e inspeções',
    ],
    icon: Award,
    categorySlug: 'regularizacao-ambiental-federal-ibama',
  },
  {
    title: 'RAPP – Relatório Anual de Atividades Potencialmente Poluidoras',
    description: `Elaboração e envio do **RAPP**, relatório anual obrigatório para empresas enquadradas no IBAMA, com informações sobre atividades, resíduos gerados e uso de recursos ambientais.

A entrega correta do RAPP garante a manutenção do CR ativo e evita penalidades.`,
    businessAdvantages: [
      'Cumprimento da obrigação legal anual',
      'Mapeamento dos aspectos ambientais da empresa',
      'Base para planejamento de melhorias ambientais',
      'Prevenção de multas por atraso ou não envio',
    ],
    icon: FileWarning,
    categorySlug: 'regularizacao-ambiental-federal-ibama',
  },

  // --------------------------------------------------------------------------
  // Estudos e Laudos Técnicos
  // --------------------------------------------------------------------------
  {
    title: 'EIV – Estudo de Impacto de Vizinhança',
    description: `Elaboração do **Estudo de Impacto de Vizinhança**, avaliando os impactos do empreendimento sobre a área do entorno, como trânsito, ruído, uso e ocupação do solo, infraestrutura urbana e serviços públicos.

O EIV é fundamental para a aprovação de projetos e para a prevenção de conflitos com órgãos públicos, moradores e usuários da região.`,
    businessAdvantages: [
      'Atendimento às exigências do licenciamento urbanístico',
      'Redução de riscos de indeferimento de projetos',
      'Prevenção de conflitos com a vizinhança',
      'Base técnica para medidas mitigadoras',
    ],
    icon: Map,
    categorySlug: 'estudos-e-laudos-tecnicos',
  },
  {
    title: 'EIA/RIMA – Estudo e Relatório de Impacto Ambiental',
    description: `Elaboração de **EIA/RIMA** para empreendimentos de maior porte ou impacto ambiental, com análise detalhada dos impactos, riscos e definição de medidas de controle, mitigação e compensação ambiental.

Esses estudos são essenciais para viabilizar o licenciamento ambiental de atividades com significativo potencial de impacto.`,
    businessAdvantages: [
      'Atendimento às exigências legais do licenciamento ambiental',
      'Avaliação completa dos impactos e riscos ambientais',
      'Definição de medidas mitigadoras e compensatórias',
      'Maior segurança técnica na implantação do projeto',
    ],
    icon: FileText,
    categorySlug: 'estudos-e-laudos-tecnicos',
  },
  {
    title: 'RAS – Relatório Ambiental Simplificado',
    description: `Elaboração do **Relatório Ambiental Simplificado (RAS)** para empreendimentos de impacto ambiental moderado, conforme exigência dos órgãos ambientais.

O RAS apresenta a caracterização do empreendimento, os aspectos ambientais envolvidos e as medidas de controle necessárias, servindo como base para o processo de licenciamento ambiental.`,
    businessAdvantages: [
      'Alternativa técnica ao EIA/RIMA, quando aplicável',
      'Agilidade no processo de licenciamento',
      'Atendimento às exigências do órgão ambiental',
      'Redução de riscos de indeferimento do processo',
    ],
    icon: File,
    categorySlug: 'estudos-e-laudos-tecnicos',
  },
  {
    title: 'Laudo de Ruído Ambiental',
    description: `Elaboração de **Laudo de Ruído Ambiental**, com medições e análises técnicas para avaliação dos níveis de ruído gerados pelas atividades do empreendimento.

O laudo verifica a conformidade com a legislação vigente e auxilia na prevenção de multas, reclamações e sanções por poluição sonora.`,
    businessAdvantages: [
      'Comprovação de atendimento aos limites legais de ruído',
      'Prevenção de autuações e reclamações da vizinhança',
      'Base técnica para ajustes operacionais',
      'Documento válido para fiscalização',
    ],
    icon: Volume,
    categorySlug: 'estudos-e-laudos-tecnicos',
  },

  // --------------------------------------------------------------------------
  // Licença do Corpo de Bombeiros
  // --------------------------------------------------------------------------
  {
    title: 'AVCB – Auto de Vistoria do Corpo de Bombeiros',
    description: `Regularização do **AVCB**, exigido para edificações e áreas de risco que necessitam de vistoria técnica do Corpo de Bombeiros para comprovar o atendimento às medidas de segurança contra incêndio.

A atuação envolve análise do imóvel, adequações técnicas, acompanhamento do processo e suporte até a liberação final.`,
    businessAdvantages: [
      'Liberação legal para funcionamento',
      'Atendimento às normas de segurança contra incêndio',
      'Prevenção de multas, interdições e embargos',
      'Segurança para funcionários, clientes e usuários',
    ],
    icon: Flame,
    categorySlug: 'licenca-do-corpo-de-bombeiros',
  },
  {
    title: 'CLCB – Certificado de Licença do Corpo de Bombeiros',
    description: `Regularização do **CLCB**, aplicável a edificações de menor risco, com processo simplificado, conforme critérios do Corpo de Bombeiros.

A Lumia realiza o enquadramento correto da atividade e acompanha o processo para garantir que o certificado seja emitido sem inconsistências.`,
    businessAdvantages: [
      'Regularização simplificada quando aplicável',
      'Agilidade na obtenção da licença',
      'Redução de riscos de indeferimento',
      'Conformidade legal para operação',
    ],
    icon: ShieldCheck,
    categorySlug: 'licenca-do-corpo-de-bombeiros',
  },

  // --------------------------------------------------------------------------
  // Regularização de Imóveis e Comércios
  // --------------------------------------------------------------------------
  {
    title: 'Habite-se',
    description: `Regularização e obtenção do **Habite-se**, documento que comprova que a edificação foi executada conforme o projeto aprovado e está apta para uso e ocupação.

O Habite-se é exigido para funcionamento de atividades comerciais, obtenção de alvarás, financiamentos e regularização patrimonial do imóvel.`,
    businessAdvantages: [
      'Comprovação legal da edificação',
      'Liberação para uso e ocupação do imóvel',
      'Atendimento às exigências da Prefeitura',
      'Segurança jurídica para proprietários e usuários',
    ],
    icon: Home,
    categorySlug: 'regularizacao-de-imoveis-e-comercios',
  },
  {
    title: 'Alvará de Funcionamento',
    description: `Atuação completa para obtenção e renovação do **Alvará de Funcionamento**, documento que autoriza legalmente o exercício da atividade no local.

A Lumia realiza o enquadramento correto da atividade, organiza a documentação e acompanha o processo junto à Prefeitura, evitando atrasos e indeferimentos.`,
    businessAdvantages: [
      'Autorização legal para funcionamento',
      'Prevenção de multas e interdições',
      'Regularidade junto aos órgãos municipais',
      'Mais segurança para operar e expandir',
    ],
    icon: FileCheck,
    categorySlug: 'regularizacao-de-imoveis-e-comercios',
  },

  // --------------------------------------------------------------------------
  // Assessoria Técnica
  // --------------------------------------------------------------------------
  {
    title: 'Suporte Anual',
    description: `Prestação de **suporte técnico ambiental por contrato anual**, com atendimento contínuo conforme escopo previamente definido e pagamentos mensais.

Esse modelo garante previsibilidade, organização e continuidade no atendimento das demandas ambientais da empresa, evitando soluções emergências e retrabalho.`,
    businessAdvantages: [
      'Acompanhamento técnico contínuo',
      'Previsibilidade de custos',
      'Organização das obrigações ambientais',
      'Redução de riscos de autuações e multas',
    ],
    icon: Calendar,
    categorySlug: 'assessoria-tecnica',
  },
  {
    title: 'Treinamentos',
    description: `Realização de **treinamentos técnicos e práticos** voltados às equipes, com foco em legislação ambiental, gestão de resíduos, boas práticas operacionais e conformidade legal.

Os treinamentos são adaptados à realidade da empresa e às atividades desenvolvidas, fortalecendo a atuação interna e a prevenção de não conformidades.`,
    businessAdvantages: [
      'Equipes mais preparadas e conscientes',
      'Redução de erros operacionais',
      'Melhoria da conformidade legal',
      'Fortalecimento da gestão ambiental interna',
    ],
    icon: GraduationCap,
    categorySlug: 'assessoria-tecnica',
  },
  {
    title: 'Palestras',
    description: `Palestras **educativas e corporativas** sobre temas ambientais e sustentabilidade, voltadas à conscientização, engajamento e fortalecimento da cultura ambiental dentro das organizações.

As palestras unem conteúdo técnico e linguagem acessível, promovendo entendimento e responsabilidade ambiental na prática.`,
    businessAdvantages: [
      'Engajamento das equipes',
      'Disseminação da cultura ambiental',
      'Alinhamento com práticas sustentáveis',
      'Valorização institucional',
    ],
    icon: Megaphone,
    categorySlug: 'assessoria-tecnica',
  },

  // --------------------------------------------------------------------------
  // Desenvolvimento de Projetos (Economia Circular e Logística Reversa)
  // --------------------------------------------------------------------------
  {
    title: 'Economia Circular',
    description: `Estruturação de soluções que priorizam o **reaproveitamento de materiais, a redução na geração de resíduos e a reinserção de recursos no ciclo produtivo**, sempre de acordo com a viabilidade técnica e econômica do empreendimento.`,
    businessAdvantages: [
      'Redução de custos com destinação de resíduos',
      'Otimização do uso de insumos e matérias-primas',
      'Diminuição de passivos ambientais',
      'Alinhamento com práticas sustentáveis exigidas pelo mercado',
    ],
    icon: Recycle,
    categorySlug: 'desenvolvimento-de-projetos-ambientais',
  },
  {
    title: 'Logística Reversa',
    description: `Desenvolvimento e implementação de **sistemas de logística reversa**, atendendo às exigências legais para retorno, reaproveitamento ou destinação adequada de produtos e embalagens pós-consumo.

Os projetos são adaptados à realidade de cada empresa, garantindo rastreabilidade, controle documental e conformidade com a legislação vigente.`,
    businessAdvantages: [
      'Atendimento às exigências legais de logística reversa',
      'Redução de riscos de autuações e penalidades',
      'Organização dos fluxos de retorno e destinação',
      'Comprovação documental junto aos órgãos fiscalizadores',
    ],
    icon: Truck,
    categorySlug: 'desenvolvimento-de-projetos-ambientais',
  },
]

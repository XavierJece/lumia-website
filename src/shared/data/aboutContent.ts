export interface ITeamMember {
  name: string
  role: string
  bio: string
  avatar?: string
}

export interface ICertification {
  name: string
  logo: string
  alt: string
  caption: string
}

export interface ITimelineItem {
  year: string
  title: string
  description: string
}

export const aboutHero = {
  eyebrow: 'Sobre a Lumia',
  title:
    'Sobre a Lumia: consultoria ambiental guiada por confiança e precisão técnica',
  subtitle:
    'Desde 2015, a Lumia conecta expertise regulatória, engenharia e ESG para resolver desafios ambientais com rapidez e rigor.',
  missionHighlights: [
    'Atuação nacional com foco em licenciamento, regularização e ESG',
    'Diagnósticos ágeis para cenários urgentes e planos estruturados para novos projetos',
    'Equipe sênior multidisciplinar com processos certificados',
  ],
}

export const teamMembers: ITeamMember[] = [
  {
    name: 'Larissa Almeida',
    role: 'CEO & Engenheira Ambiental',
    bio: 'Lidera estratégia e governança ESG, com 12+ anos em licenciamento complexo e diálogo com órgãos ambientais.',
    avatar: '/images/woman_presents_ESG.webp',
  },
  {
    name: 'João Batista',
    role: 'Diretor Técnico',
    bio: 'Especialista em regularização de passivos e perícias ambientais, conduzindo planos de ação e mitigação.',
    avatar: '/images/woman_in_meeting.webp',
  },
  {
    name: 'Marina Costa',
    role: 'Coordenadora de Projetos ESG',
    bio: 'Orquestra projetos de certificação e compliance, garantindo entregas com indicadores claros de desempenho.',
  },
  {
    name: 'Pedro Nogueira',
    role: 'Especialista em Licenciamento',
    bio: 'Responsável por estudos técnicos, PGRS e interlocução com órgãos fiscalizadores para reduzir prazos e riscos.',
  },
]

export const certifications: ICertification[] = [
  {
    name: 'CREA-SP',
    logo: '/logos/horizontal_line_color_logo.svg',
    alt: 'Certificação CREA-SP da Lumia',
    caption: 'Registro ativo no Conselho Regional de Engenharia e Agronomia',
  },
  {
    name: 'ABNT NBR ISO',
    logo: '/logos/color-logo.svg',
    alt: 'Aderência à ABNT NBR ISO',
    caption: 'Projetos alinhados às melhores práticas de gestão da qualidade',
  },
  {
    name: 'ABES',
    logo: '/logos/dark-logo.svg',
    alt: 'Associação Brasileira de Engenharia Sanitária',
    caption: 'Associação com rede técnica e atualização contínua',
  },
  {
    name: 'PNUMA',
    logo: '/logos/light_logo.svg',
    alt: 'Programa das Nações Unidas para o Meio Ambiente',
    caption: 'Compromisso com diretrizes globais de sustentabilidade',
  },
]

export const timeline: ITimelineItem[] = [
  {
    year: '2015',
    title: 'Fundação da Lumia',
    description:
      'Início com foco em licenciamento para PMEs e resposta rápida a autos de infração.',
  },
  {
    year: '2018',
    title: 'Expansão regulatória',
    description:
      'Portfólio ampliado para gestão de resíduos, PGRS e due diligence ambiental.',
  },
  {
    year: '2021',
    title: 'Linha ESG',
    description:
      'Estruturação de projetos de descarbonização, indicadores e relatórios de sustentabilidade.',
  },
  {
    year: '2024',
    title: 'Operação nacional',
    description:
      'Times dedicados para cenários urgentes e planejamento de novos empreendimentos em múltiplos estados.',
  },
]

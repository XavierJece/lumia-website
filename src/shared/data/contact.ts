import { Clock, Instagram, Linkedin, Mail, Phone } from 'lucide-react'

export interface ISocialNetworkContactItem {
  platform: 'instagram' | 'linkedin' | 'tiktok'
  icon: React.ElementType
  href: string
  label: string
}

export interface IContactInfoItem {
  type: 'phone' | 'mail' | 'address' | 'hours'
  icon: React.ElementType
  href: string
  label: string
  title: string
}

export interface IFAQItem {
  id: string
  question: string
  answer: string
}

export const socialNetworksContent: ISocialNetworkContactItem[] = [
  {
    platform: 'instagram',
    icon: Instagram,
    href: 'https://instagram.com/lumia.eng',
    label: 'Instagram',
  },
  {
    icon: Linkedin,
    platform: 'linkedin',
    href: 'https://linkedin.com/company/lumiaeng',
    label: 'LinkedIn',
  },
]

export const contactInfo: IContactInfoItem[] = [
  {
    type: 'phone',
    title: 'Telefone / WhatsApp',
    icon: Phone,
    label: `(11) 94226-5492`,
    href: `tel:11942265492`,
  },
  {
    icon: Mail,
    title: 'E-mail',
    type: 'mail',
    label: 'contato@lumia.eng.br',
    href: `mailto:contato@lumia.eng.br`,
  },
  {
    icon: Clock,
    title: 'Horário de Atendimento',
    type: 'hours',
    label: 'Segunda a Sexta: 8h às 18h',
    href: '#',
  },
]

export const FAQQuestionsContent: IFAQItem[] = [
  {
    id: '1',
    question: 'Quanto tempo leva para obter uma licença ambiental?',
    answer:
      'O prazo varia conforme o tipo de licença e complexidade do empreendimento. Trabalhamos com agilidade e eficiência, acompanhando todo o processo junto aos órgãos competentes para garantir os melhores prazos possíveis, sempre mantendo você informado em cada etapa.',
  },
  {
    id: '2',
    question: 'A LUMIA atende em todo o território nacional?',
    answer:
      'Sim! Atuamos em todo o Brasil, com conhecimento específico das legislações federal, estaduais e municipais. Nossa equipe possui experiência em diversos estados e mantemos contato direto com os órgãos ambientais de cada região para garantir uma atuação eficiente em qualquer localidade.',
  },
  {
    id: '3',
    question: 'Qual a diferença entre PGRS, PGRSS e PGRSCC?',
    answer:
      'O PGRS (Plano de Gerenciamento de Resíduos Sólidos) é geral para qualquer empresa. O PGRSS é específico para serviços de saúde (clínicas, hospitais, farmácias) e segue normas da ANVISA. Já o PGRSCC é para construção civil, atendendo à Resolução CONAMA 307. Desenvolvemos cada plano conforme as exigências do seu segmento.',
  },
  {
    id: '4',
    question: 'Preciso renovar minhas licenças periodicamente?',
    answer:
      'Sim, muitas licenças ambientais têm validade determinada e exigem renovação. Oferecemos serviço de monitoramento e gestão de prazos, notificando você com antecedência e cuidando de todo o processo de renovação para evitar qualquer irregularidade ou multa por atraso.',
  },
  {
    id: '5',
    question: 'Como funciona a assessoria ambiental mensal?',
    answer:
      'É um serviço contínuo onde nossa equipe fica à disposição para suporte técnico, atualizações legislativas, resolução de dúvidas e acompanhamento da conformidade ambiental da sua empresa. Ideal para quem busca tranquilidade e prevenção, com um custo fixo mensal que otimiza seus investimentos em compliance ambiental.',
  },
]

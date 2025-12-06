import type { FooterContent } from '~/shared/@types/navigation'

export const footerContent: FooterContent = {
  columns: [
    {
      title: 'Links Rápidos',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Orçamento Rápido', href: '/orcamento' },
        { label: 'Blog', href: '/blog' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Contato', href: '/contato' },
      ],
    },
    {
      title: 'Serviços Populares',
      links: [
        { label: 'Licença Sanitária', href: '/servicos/licencas-sanitarias' },
        {
          label: 'Plano de Gestão de Resíduos (PGRS)',
          href: '/servicos/planos-gestao',
        },
        { label: 'Regularizações', href: '/servicos/regularizacoes' },
        { label: 'Licença Ambiental', href: '/servicos/licencas-ambientais' },
      ],
    },
    {
      title: 'Segmentos',
      links: [
        { label: 'Farmácias', href: '/segmentos/farmacias' },
        { label: 'Clínicas', href: '/segmentos/clinicas' },
        { label: 'Indústrias', href: '/segmentos/industrias' },
        { label: 'Ver todos →', href: '/segmentos' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre Lumia', href: '/sobre' },
        { label: 'Depoimentos', href: '/depoimentos' },
        { label: 'Cases', href: '/casos-de-sucesso' },
        { label: 'Contato', href: '/contato' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Política de Privacidade', href: '/politica-privacidade' },
        { label: 'Termos de Uso', href: '/termos-uso' },
        { label: 'LGPD', href: '/lgpd' },
        { label: 'Cookies', href: '/cookies' },
      ],
    },
  ],
  social: {
    title: 'Siga-nos para dicas ambientais',
    items: [
      {
        platform: 'instagram',
        href: 'https://instagram.com/lumia',
        label: 'Instagram',
      },
      {
        platform: 'linkedin',
        href: 'https://linkedin.com/company/lumia',
        label: 'LinkedIn',
      },
      {
        platform: 'tiktok',
        href: 'https://tiktok.com/@lumia',
        label: 'TikTok',
      },
    ],
  },
  newsletter: {
    title: 'Receba dicas semanais sobre conformidade',
    placeholder: 'Seu e-mail',
    button: 'Inscrever',
    disclaimer: 'Sem spam, cancele a qualquer momento',
  },
  finalCta: {
    text: 'Ainda não pediu um orçamento?',
    buttonText: 'Clique Aqui → Orçamento Rápido',
    href: '/orcamento',
  },
  trustSignals: {
    rating: '4.8⭐',
    clients: 'Avaliação de 250+ clientes',
  },
  legal: {
    copyright: '© 2025 Lumia Consultoria. Todos os direitos reservados.',
    cnpj: 'CNPJ: 00.000.000/0001-00',
    stateRegistration: 'Inscrição Estadual: 000.000.000.000',
  },
}

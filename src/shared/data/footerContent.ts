import type { FooterContent } from '~/shared/@types/navigation'

export const footerContent: FooterContent = {
  columns: [
    {
      title: 'Explorar',
      links: [
        { label: 'Início', href: '/' },
        { label: 'Sobre Nós', href: '/sobre' },
        { label: 'Blog & Artigos', href: '/blog' },
        { label: 'Cases de Sucesso', href: '/casos-de-sucesso' },
      ],
    },
    {
      title: 'Soluções',
      links: [
        {
          label: 'Licenciamento Ambiental',
          href: '/servicos/licencas-ambientais',
        },
        { label: 'Gestão de Resíduos', href: '/servicos/planos-gestao' },
        {
          label: 'Regularização Sanitária',
          href: '/servicos/licencas-sanitarias',
        },
        { label: 'Ver todos os serviços', href: '/servicos' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacidade', href: '/politica-privacidade' },
        { label: 'Termos', href: '/termos-uso' },
      ],
    },
  ],
  social: {
    title: 'Conecte-se',
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
    ],
  },
  newsletter: {
    title: 'Receba insights ambientais exclusivos',
    placeholder: 'Seu melhor e-mail',
    button: 'Assinar Newsletter',
    disclaimer: 'Conteúdo relevante, zero spam.',
  },
  finalCta: {
    text: 'Precisa de agilidade no seu licenciamento?',
    buttonText: 'Falar com Especialista',
    href: 'https://wa.me/5511947305880',
  },
  trustSignals: {
    rating: '4.9/5',
    clients: 'Mais de 300 projetos aprovados',
  },
  legal: {
    copyright: '© 2025 Lumia Engenharia e Consultoria Ambiental.',
    cnpj: 'CNPJ: 00.000.000/0001-00',
  },
}

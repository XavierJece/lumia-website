import type { HeaderContent } from '~/shared/@types/navigation'

export const headerContent: HeaderContent = {
  logo: {
    text: 'LUMIA',
    href: '/',
  },
  navItems: [
    {
      label: 'Serviços',
      dropdown: [
        { label: 'Licenças Ambientais', href: '/servicos/licencas-ambientais' },
        { label: 'Licenças Sanitárias', href: '/servicos/licencas-sanitarias' },
        { label: 'Planos de Gestão', href: '/servicos/planos-gestao' },
        { label: 'Laudos Técnicos', href: '/servicos/laudos-tecnicos' },
        { label: 'Regularizações', href: '/servicos/regularizacoes' },
        { label: 'IBAMA', href: '/servicos/ibama' },
        { label: 'Segurança Civil', href: '/servicos/seguranca-civil' },
      ],
    },
    {
      label: 'Para Seu Negócio',
      dropdown: [
        { label: 'Farmácias & Retail', href: '/segmentos/farmacias' },
        { label: 'Clínicas & Healthcare', href: '/segmentos/clinicas' },
        { label: 'Indústrias', href: '/segmentos/industrias' },
        { label: 'Construção', href: '/segmentos/construcao' },
        { label: 'Ver todos', href: '/segmentos' },
      ],
    },
    {
      label: 'Aprenda',
      dropdown: [
        { label: 'Blog', href: '/blog' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Casos de Sucesso', href: '/casos-de-sucesso' },
        { label: 'Glossário', href: '/glossario' },
      ],
    },
    {
      label: 'Sobre',
      dropdown: [
        { label: 'Quem Somos', href: '/sobre' },
        { label: 'Garantias', href: '/garantias' },
        { label: 'Equipe', href: '/equipe' },
        { label: 'Contato', href: '/contato' },
      ],
    },
  ],
  searchPlaceholder: 'Buscar...',
  ctaPrimary: {
    text: 'Orçamento Rápido',
    href: '/orcamento',
  },
  ctaSecondary: {
    text: 'WhatsApp',
    href: 'https://wa.me/5511999999999',
  },
}

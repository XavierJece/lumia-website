import type { HeaderContent } from '~/shared/@types/navigation'

export const headerContent: HeaderContent = {
  logo: {
    text: 'LUMIA',
    href: '/',
  },
  navItems: [
    { label: 'Home', href: '/' },
    {
      label: 'Serviços',
      dropdown: [
        { label: 'Solve Now (Urgente)', href: '/servicos/urgente' },
        { label: 'Start Here (Planejamento)', href: '/servicos/planejamento' },
        { label: 'Tabela de Serviços', href: '/servicos' },
      ],
    },
    { label: 'Blog', href: '/blog' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
  ],
  searchPlaceholder: 'Buscar conteúdos e serviços',
  ctaPrimary: {
    text: 'Falar no WhatsApp',
    href: 'https://wa.me/5511947305880',
  },
  ctaSecondary: {
    text: 'Orçamento Rápido',
    href: '/orcamento',
  },
}

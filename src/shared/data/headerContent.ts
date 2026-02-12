import type { HeaderContent } from '~/shared/@types/navigation'

export const headerContent: HeaderContent = {
  logo: {
    text: 'LUMIA Consultoria Engenharia Integrada',
    href: '/',
  },
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'Soluções', href: '/solutions' },
    { label: 'Projetos', href: '/projects' },
    { label: 'Quem Somos', href: '/about' },
    { label: 'Contato', href: '/contact' },
  ],
  ctaPrimary: {
    text: 'Falar no WhatsApp',
    href: `https://api.whatsapp.com/send/?phone=${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20LUMIA.`,
  },
}

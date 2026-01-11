import { FooterContent } from '../@types/navigation'
import { CONTACT_INFO } from '../config/constants'
import { headerContent } from './headerContent'
import { solutionContent } from './solutionContent'

export const footerContent: FooterContent = {
  columns: [
    {
      title: 'Explorar',
      links: headerContent.navItems,
    },
    {
      title: 'Soluções',
      links: solutionContent.map(({ quickLinks, href }) => ({
        label: quickLinks,
        href: `/solucoes#${href}`,
      })),
    },
  ],
  social: {
    title: 'Contato',
    contactItems: [
      {
        type: 'phone',
        label: `${process.env.NEXT_PUBLIC_PHONE_NUMBER}`,
        href: `tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER?.replace(/\D/g, '')}`,
      },
      {
        type: 'mail',
        label: `${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`,
        href: `mailto:${CONTACT_INFO.email}`,
      },
    ],
    socialNetworks: [
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
}

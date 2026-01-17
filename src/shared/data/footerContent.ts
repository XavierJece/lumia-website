import {
  contactInfo,
  IContactInfoItem,
  ISocialNetworkContactItem,
  socialNetworksContent,
} from './contact'
import { headerContent } from './headerContent'
import { solutionContent } from './solutionContent'

export interface FooterColumn {
  title: string
  links: Array<{
    label: string
    href: string
  }>
}

export interface FooterContent {
  columns: FooterColumn[]
  social: {
    title?: string
    socialNetworks: ISocialNetworkContactItem[]
    contactItems: IContactInfoItem[]
  }
}

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
    contactItems: contactInfo,
    socialNetworks: socialNetworksContent,
  },
}

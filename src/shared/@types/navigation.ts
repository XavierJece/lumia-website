export interface NavDropdownItem {
  label: string
  href: string
}

export interface NavItem {
  label: string
  href?: string
  dropdown?: NavDropdownItem[]
}

export interface HeaderContent {
  logo: {
    text: string
    href: string
  }
  navItems: NavItem[]
  searchPlaceholder?: string
  ctaPrimary: {
    text: string
    href: string
  }
  ctaSecondary: {
    text: string
    href: string
  }
}

export interface FooterColumn {
  title: string
  links: Array<{
    label: string
    href: string
  }>
}

export interface FooterSocial {
  platform: 'instagram' | 'linkedin' | 'tiktok'
  href: string
  label: string
}

export interface FooterNewsletter {
  title: string
  placeholder: string
  button: string
  disclaimer?: string
}

export interface FooterContent {
  columns: FooterColumn[]
  social: {
    title?: string
    items: FooterSocial[]
  }
  newsletter: FooterNewsletter
  finalCta: {
    text: string
    buttonText: string
    href: string
  }
  trustSignals?: {
    rating?: string
    clients?: string
  }
  legal: {
    copyright: string
    cnpj?: string
    stateRegistration?: string
  }
}


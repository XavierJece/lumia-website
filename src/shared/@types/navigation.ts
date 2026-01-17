// *** HEADER ***

export interface NavDropdownItem {
  label: string
  href: string
}

export interface NavItem {
  label: string
  href: string
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
}

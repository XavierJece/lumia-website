'use client'

import Link from 'next/link'
import { List, MagnifyingGlass, X } from 'phosphor-react'
import * as React from 'react'
import type { HeaderContent } from '~/shared/@types/navigation'
import { cn } from '~/shared/components/shadcn'
import { Logo } from '../Logo/Logo'
import { Button } from '../atoms/ui/button'
import { Input } from '../atoms/ui/input'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu'

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  content?: HeaderContent
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ content, className, ...props }, ref) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [isSearchOpen, setIsSearchOpen] = React.useState(false)
    const [activeDropdown, setActiveDropdown] = React.useState<string | null>(
      null,
    )

    const defaultContent: HeaderContent = {
      logo: { text: 'LUMIA', href: '/' },
      navItems: [
        { label: 'Home', href: '/' },
        {
          label: 'Serviços',
          dropdown: [
            { label: 'Solve Now', href: '/servicos/urgente' },
            { label: 'Start Here', href: '/servicos/planejamento' },
            { label: 'Tabela completa', href: '/servicos' },
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
      ctaSecondary: { text: 'Orçamento Rápido', href: '/orcamento' },
    }

    const headerContent = content || defaultContent

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = React.useCallback(() => {
      setIsMobileMenuOpen(false)
    }, [])

    // Close mobile menu when clicking outside or pressing Escape
    React.useEffect(() => {
      if (isMobileMenuOpen) {
        document.body.style.overflow = 'hidden'
        const handleEscape = (e: KeyboardEvent) => {
          if (e.key === 'Escape') {
            closeMobileMenu()
          }
        }
        document.addEventListener('keydown', handleEscape)
        return () => {
          document.body.style.overflow = 'unset'
          document.removeEventListener('keydown', handleEscape)
        }
      } else {
        document.body.style.overflow = 'unset'
      }
    }, [isMobileMenuOpen, closeMobileMenu])

    const handleDropdownToggle = (label: string) => {
      setActiveDropdown(activeDropdown === label ? null : label)
    }

    const NavItem = ({
      item,
      isMobile = false,
    }: {
      item: HeaderContent['navItems'][0]
      isMobile?: boolean
    }) => {
      if (item.dropdown && item.dropdown.length > 0) {
        return (
          <div className="relative group">
            {isMobile ? (
              <div>
                <button
                  type="button"
                  onClick={() => handleDropdownToggle(item.label)}
                  className="flex items-center justify-between w-full px-4 py-2 text-base font-medium text-neutral-800 hover:text-primary-green transition-colors"
                  aria-expanded={activeDropdown === item.label}
                  aria-haspopup="true"
                >
                  <span>{item.label}</span>
                  <span
                    className={cn(
                      'transition-transform',
                      activeDropdown === item.label && 'rotate-180',
                    )}
                  >
                    ▼
                  </span>
                </button>
                {activeDropdown === item.label && (
                  <div className="pl-4 space-y-1">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        onClick={closeMobileMenu}
                        className="block px-4 py-2 text-sm text-neutral-600 hover:text-primary-green transition-colors"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <>
                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-800 hover:text-primary-green transition-colors"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  onFocus={() => setActiveDropdown(item.label)}
                  onBlur={() => setActiveDropdown(null)}
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === item.label}
                >
                  {item.label}
                  <span className="text-xs">▼</span>
                </button>
                {activeDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-neutral-200 py-2 z-50"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-primary-green transition-colors"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        )
      }

      if (item.href) {
        return (
          <Link
            href={item.href}
            className={cn(
              'px-3 py-2 text-sm font-medium text-neutral-800 hover:text-primary-green transition-colors',
              isMobile && 'block px-4',
            )}
            onClick={isMobile ? closeMobileMenu : undefined}
          >
            {item.label}
          </Link>
        )
      }

      return null
    }

    return (
      <header
        ref={ref}
        className={cn(
          'sticky top-0 z-50 w-full border-b border-white/40 bg-white/80 backdrop-blur-lg',
          'shadow-glass supports-[backdrop-filter]:bg-white/70',
          className,
        )}
        {...props}
      >
        <nav
          className="container mx-auto px-4 lg:px-6"
          aria-label="Navegação principal"
        >
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href={headerContent.logo.href}
              className="flex items-center flex-shrink-0"
              aria-label="Lumia - Página inicial"
            >
              <Logo variant="horizontal" colorScheme="color" className="h-10" />
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu
              aria-label="Navegação principal desktop"
              className="hidden flex-1 justify-center lg:flex"
            >
              <NavigationMenuList>
                {headerContent.navItems.map((item) =>
                  item.dropdown && item.dropdown.length > 0 ? (
                    <NavigationMenuItem key={item.label}>
                      <NavigationMenuTrigger>
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-2 p-1 sm:w-[280px]">
                          {item.dropdown.map((dropdownItem) => (
                            <li key={dropdownItem.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={dropdownItem.href}
                                  className="block rounded-lg px-3 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-primary-green"
                                >
                                  {dropdownItem.label}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.label}>
                      <NavigationMenuLink
                        asChild
                        className={cn(
                          navigationMenuTriggerStyle,
                          'bg-transparent hover:bg-neutral-100',
                        )}
                      >
                        <Link href={item.href || '#'}>{item.label}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ),
                )}
              </NavigationMenuList>
              <NavigationMenuIndicator className="hidden sm:flex" />
            </NavigationMenu>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 lg:gap-4">
              {/* Search - Desktop */}
              <div className="hidden md:flex items-center">
                <div
                  className={cn(
                    'flex items-center gap-2 overflow-hidden transition-all duration-300 ease-in-out',
                    isSearchOpen ? 'w-64 opacity-100' : 'w-0 opacity-0',
                  )}
                >
                  <Input
                    type="search"
                    placeholder={headerContent.searchPlaceholder || 'Buscar...'}
                    className="h-9 bg-white/50 backdrop-blur-sm"
                    autoFocus={isSearchOpen}
                    onBlur={(e) => {
                      if (!e.relatedTarget) {
                        setIsSearchOpen(false)
                      }
                    }}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-neutral-600 hover:text-primary-green transition-colors"
                  aria-label={isSearchOpen ? 'Fechar busca' : 'Abrir busca'}
                >
                  {isSearchOpen ? (
                    <X size={20} weight="bold" />
                  ) : (
                    <MagnifyingGlass size={20} weight="bold" />
                  )}
                </button>
              </div>

              {/* CTAs - Desktop */}
              <div className="hidden md:flex items-center gap-3">
                <Button
                  asChild
                  className="bg-primary-green hover:bg-green-600 text-white shadow-glass rounded-full px-6"
                >
                  <Link href={headerContent.ctaPrimary.href}>
                    {headerContent.ctaPrimary.text}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-horizon-green text-horizon-green hover:bg-neutral-50 rounded-full px-6"
                >
                  <Link
                    href={headerContent.ctaSecondary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {headerContent.ctaSecondary.text}
                  </Link>
                </Button>
              </div>

              {/* Mobile Search Icon */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="md:hidden p-2 text-neutral-600 hover:text-primary-green transition-colors"
                aria-label="Buscar"
              >
                <MagnifyingGlass size={20} weight="bold" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 text-neutral-600 hover:text-primary-green transition-colors"
                aria-label="Menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <X size={24} weight="bold" />
                ) : (
                  <List size={24} weight="bold" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {isSearchOpen && (
            <div className="md:hidden pb-4">
              <Input
                type="search"
                placeholder={headerContent.searchPlaceholder || 'Buscar...'}
                className="w-full"
                autoFocus
              />
            </div>
          )}
        </nav>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />
            {/* Drawer */}
            <div
              id="mobile-menu"
              data-testid="mobile-menu"
              className={cn(
                'fixed top-16 left-0 right-0 bottom-0 bg-white z-50 overflow-y-auto lg:hidden',
                'transform transition-transform duration-300 ease-in-out',
                isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full',
              )}
            >
              <div className="container mx-auto px-4 py-6">
                {/* Mobile Navigation */}
                <nav className="space-y-2" aria-label="Navegação principal">
                  {headerContent.navItems.map((item) => (
                    <NavItem key={item.label} item={item} isMobile />
                  ))}
                </nav>

                {/* Mobile CTAs */}
                <div className="mt-8 space-y-3">
                  <Button
                    asChild
                    className="w-full bg-primary-green hover:bg-green-600 text-white shadow-glass"
                  >
                    <Link href={headerContent.ctaPrimary.href}>
                      {headerContent.ctaPrimary.text}
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-horizon-green text-horizon-green hover:bg-neutral-50"
                  >
                    <Link
                      href={headerContent.ctaSecondary.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {headerContent.ctaSecondary.text}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    )
  },
)
Header.displayName = 'Header'

export { Header }

'use client'

import Link from 'next/link'
import { List, MagnifyingGlass, X } from 'phosphor-react'
import * as React from 'react'
import type { HeaderContent } from '~/shared/@types/navigation'
import { cn } from '~/shared/components/shadcn'
import { Logo } from '../Logo/Logo'
import { Button } from '../atoms/ui/button'
import { Input } from '../atoms/ui/input'

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
      navItems: [],
      ctaPrimary: { text: 'Orçamento Rápido', href: '/orcamento' },
      ctaSecondary: { text: 'WhatsApp', href: 'https://wa.me/' },
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
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-800 hover:text-primary-green transition-colors"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
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
          'sticky top-0 z-50 w-full border-b border-neutral-200 bg-white',
          className,
        )}
        {...props}
      >
        <nav className="container mx-auto px-4 lg:px-6">
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
            <div className="hidden lg:flex items-center gap-1">
              {headerContent.navItems.map((item) => (
                <NavItem key={item.label} item={item} />
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 lg:gap-4">
              {/* Search - Desktop */}
              <div className="hidden md:flex items-center">
                {isSearchOpen ? (
                  <div className="flex items-center gap-2">
                    <Input
                      type="search"
                      placeholder={
                        headerContent.searchPlaceholder || 'Buscar...'
                      }
                      className="w-64 h-9"
                      autoFocus
                      onBlur={() => setIsSearchOpen(false)}
                    />
                    <button
                      onClick={() => setIsSearchOpen(false)}
                      className="p-1 text-neutral-600 hover:text-primary-green"
                      aria-label="Fechar busca"
                    >
                      <X size={20} />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className="p-2 text-neutral-600 hover:text-primary-green transition-colors"
                    aria-label="Abrir busca"
                  >
                    <MagnifyingGlass size={20} weight="bold" />
                  </button>
                )}
              </div>

              {/* CTAs - Desktop */}
              <div className="hidden md:flex items-center gap-3">
                <Button
                  asChild
                  className="bg-[#10B981] hover:bg-[#0ea572] text-white"
                >
                  <Link href={headerContent.ctaPrimary.href}>
                    {headerContent.ctaPrimary.text}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#3B82F6] text-[#3B82F6] hover:bg-blue-50"
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
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="md:hidden p-2 text-neutral-600 hover:text-primary-green transition-colors"
                aria-label="Buscar"
              >
                <MagnifyingGlass size={20} weight="bold" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 text-neutral-600 hover:text-primary-green transition-colors"
                aria-label="Menu"
                aria-expanded={isMobileMenuOpen}
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
                    className="w-full bg-[#10B981] hover:bg-[#0ea572] text-white"
                  >
                    <Link href={headerContent.ctaPrimary.href}>
                      {headerContent.ctaPrimary.text}
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[#3B82F6] text-[#3B82F6] hover:bg-blue-50"
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

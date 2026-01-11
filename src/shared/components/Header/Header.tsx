'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { headerContent } from '~/shared/data/headerContent'
import { Logo } from '../Logo/Logo'
import { Button } from '../atoms/ui/button'

const CTAButton = () => {
  return (
    <div className="hidden lg:block">
      <Button
        asChild
        size="lg"
        className="font-semibold shadow-soft hover:shadow-card transition-all"
      >
        <a
          href={headerContent.ctaPrimary.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {headerContent.ctaPrimary.text}
        </a>
      </Button>
    </div>
  )
}

const NavItems = () => {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <div className="hidden lg:flex items-center gap-8">
      {headerContent.navItems.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          data-active={isActive(link.href)}
          className="relative font-medium text-sm transition-colors text-muted-foreground text-secondary-green hover:text-primary-green data-[active=true]:text-primary-green"
        >
          {link.label}
          {isActive(link.href) && (
            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-green rounded-full" />
          )}
        </Link>
      ))}
    </div>
  )
}

const MobileMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) => {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  if (!isOpen) return null

  return (
    <div className="lg:hidden fixed inset-0 top-16 z-50 bg-white-essential">
      <div className="flex flex-col p-4 space-y-4">
        {/* Navigation Items */}
        <nav className="flex flex-col space-y-4">
          {headerContent.navItems.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              data-active={isActive(link.href)}
              className="relative font-medium text-lg transition-colors hover:text-primary py-2 text-secondary-green hover:text-primary-green data-[active=true]:text-primary-green"
            >
              {link.label}{' '}
              {isActive(link.href) && (
                <span className="absolute w-4 -bottom-1 left-0 right-0 h-0.5 bg-primary-green rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button Mobile */}
        <div className="pt-4 border-t border-border/50">
          <Button
            asChild
            size="lg"
            className="w-full font-semibold shadow-soft hover:shadow-card transition-all"
          >
            <a
              href={headerContent.ctaPrimary.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
            >
              {headerContent.ctaPrimary.text}
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="fixed  top-0 left-0 right-0 h-16 z-50 bg-white-essential border-b border-border/50 py-2 px-4">
      <nav className="flex items-center justify-between w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Logo />
        </Link>

        <NavItems />

        <CTAButton />

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  )
}

export default Header

import * as React from 'react'
import { Logo } from '../Logo/Logo'
import { Button } from '../Button/Button'
import { cn } from '~/shared/components/shadcn'

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  navigationItems?: Array<{ label: string; href: string }>
  ctaLabel?: string
  ctaHref?: string
  onCtaClick?: () => void
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  (
    {
      navigationItems = [],
      ctaLabel = 'Contato',
      ctaHref = '#contato',
      onCtaClick,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <header
        ref={ref}
        className={cn(
          'bg-secondary-green text-white-essential border-b-2 border-primary-green',
          className,
        )}
        {...props}
      >
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Logo variant="horizontal" colorScheme="light" className="h-12" />
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white-essential hover:text-green-300 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            {onCtaClick ? (
              <Button variant="primary" onClick={onCtaClick}>
                {ctaLabel}
              </Button>
            ) : (
              <Button variant="primary" asChild>
                <a href={ctaHref}>{ctaLabel}</a>
              </Button>
            )}
          </div>
        </nav>
      </header>
    )
  },
)
Header.displayName = 'Header'

export { Header }


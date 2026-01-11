import Image from 'next/image'
import * as React from 'react'
import { cn } from '~/shared/components/shadcn'

export type LogoVariant = 'horizontal' | 'vertical' | 'symbol' | 'simple'
export type LogoColorScheme = 'light' | 'dark' | 'color'

export interface LogoProps {
  variant?: LogoVariant
  colorScheme?: LogoColorScheme
  className?: string
  width?: number
  height?: number
}

const DEFAULT_LOGO_PATH = '/logos/simple-color-logo.svg'

const logoVariantsPaths: Record<
  LogoVariant,
  Record<LogoColorScheme, string | undefined>
> = {
  simple: {
    color: '/logos/simple-color-logo.svg',
    dark: '/logos/simple-dark-logo.svg',
    light: '/logos/simple-light-logo.svg',
  },
  horizontal: {
    color: '/logos/horizontal_line_color_logo.svg',
    dark: '/logos/horizontal_line_dark_logo.svg',
    light: '/logos/horizontal_line_light_logo.svg',
  },
  vertical: {
    color: '/logos/vertical_line_color_logo.svg',
    dark: '/logos/vertical_line_dark_logo.svg',
    light: '/logos/vertical_line_light_logo.svg',
  },
  symbol: {
    color: '/logos/a_icon-color.svg',
    dark: undefined,
    light: '/logos/a_icon-light.svg',
  },
}

const getLogoPath = (
  variant: LogoVariant,
  colorScheme: LogoColorScheme,
): string => {
  return logoVariantsPaths[variant][colorScheme] || DEFAULT_LOGO_PATH
}

const Logo = React.forwardRef<HTMLImageElement, LogoProps>(
  (
    {
      variant = 'horizontal',
      colorScheme = 'color',
      className,
      width,
      height,
      ...props
    },
    ref,
  ) => {
    const logoPath = getLogoPath(variant, colorScheme)
    const altText = `Lumia Consultoria Engenharia Integrada Logo - ${variant} ${colorScheme}`

    const defaultWidth = variant === 'symbol' ? 40 : 200
    const defaultHeight = variant === 'symbol' ? 40 : 60

    return (
      <Image
        ref={ref}
        src={logoPath}
        alt={altText}
        width={width || defaultWidth}
        height={height || defaultHeight}
        className={cn('object-contain', className)}
        unoptimized
        {...props}
      />
    )
  },
)
Logo.displayName = 'Logo'

export { Logo }

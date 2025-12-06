import Image from 'next/image'
import * as React from 'react'
import { cn } from '~/shared/components/shadcn'

export type LogoVariant = 'horizontal' | 'vertical' | 'symbol'
export type LogoColorScheme = 'light' | 'dark' | 'color'

export interface LogoProps {
  variant?: LogoVariant
  colorScheme?: LogoColorScheme
  className?: string
  width?: number
  height?: number
}

const getLogoPath = (
  variant: LogoVariant,
  colorScheme: LogoColorScheme,
): string => {
  if (variant === 'symbol') {
    return '/logos/a.png'
  }

  if (variant === 'horizontal') {
    if (colorScheme === 'color') return '/logos/horizontal_line_color_logo.svg'
    if (colorScheme === 'dark') return '/logos/horizontal_line_dark_logo.svg'
    if (colorScheme === 'light') return '/logos/horizontal_line_light_logo.svg'
  }

  if (variant === 'vertical') {
    if (colorScheme === 'color') return '/logos/vertical_line_color_logo.svg'
    if (colorScheme === 'dark') return '/logos/vertical_line_dark_logo.svg.svg'
    if (colorScheme === 'light') return '/logos/vertical_line_light_logo.svg'
  }

  // Fallback
  return '/logos/color-logo.svg'
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
    const altText = `Lumia Consultoria Logo - ${variant} ${colorScheme}`

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

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
  const variantMap = {
    horizontal: 'Line Horizontal',
    vertical: 'Line Vertical',
    symbol: '',
  }

  const colorMap = {
    light: 'Claro',
    dark: 'Escuro',
    color: 'Cor',
  }

  const variantName = variantMap[variant]
  const colorName = colorMap[colorScheme]

  if (variant === 'symbol') {
    return `/logos/Logo ${colorName}PNG.png`
  }

  return `/logos/Logo ${variantName} ${colorName}PNG.png`
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

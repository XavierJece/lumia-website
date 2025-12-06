import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '~/shared/components/shadcn'
import {
  blurTokens,
  focusRingToken,
  glassTokens,
  radiusTokens,
  spacingTokens,
} from '~/shared/styles/tokens'

const glassContainerStyles = tv({
  slots: {
    base: [
      'relative isolate flex flex-col',
      glassTokens.surface,
      glassTokens.border,
      glassTokens.shadow,
      radiusTokens.glass,
      blurTokens.lg,
      'transition-all duration-200',
    ],
    content: 'flex flex-col gap-4',
  },
  variants: {
    padding: {
      none: 'p-0',
      sm: spacingTokens.sm,
      md: spacingTokens.md,
      lg: spacingTokens.lg,
    },
    interactive: {
      true: [
        'hover:-translate-y-0.5 hover:shadow-glass',
        'focus-visible:-translate-y-0.5',
        focusRingToken,
      ],
      false: '',
    },
    tone: {
      light: 'text-neutral-900',
      dark: 'text-white-essential bg-secondary-green/60 border-white/20',
    },
    blur: {
      sm: blurTokens.sm,
      md: blurTokens.md,
      lg: blurTokens.lg,
    },
  },
  compoundVariants: [
    {
      tone: 'light',
      interactive: true,
      class: { base: 'hover:bg-white-essential/75' },
    },
    {
      tone: 'dark',
      interactive: true,
      class: { base: 'hover:bg-secondary-green/70' },
    },
  ],
  defaultVariants: {
    padding: 'md',
    interactive: true,
    tone: 'light',
    blur: 'lg',
  },
})

export interface GlassContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassContainerStyles> {
  as?: keyof JSX.IntrinsicElements
  overlay?: boolean
}

const GlassContainer = React.forwardRef<HTMLDivElement, GlassContainerProps>(
  (
    {
      as: Component = 'div',
      className,
      children,
      padding,
      interactive,
      tone,
      blur,
      overlay = false,
      ...props
    },
    ref,
  ) => {
    const { base, content } = glassContainerStyles({
      padding,
      interactive,
      tone,
      blur,
      class: className,
    })

    return (
      <Component ref={ref} className={base()} {...props}>
        {overlay && (
          <span
            aria-hidden
            className={cn(
              'pointer-events-none absolute inset-0 -z-10',
              glassTokens.overlay,
            )}
          />
        )}
        <div className={content()}>{children}</div>
      </Component>
    )
  },
)

GlassContainer.displayName = 'GlassContainer'

export default GlassContainer

import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import {
  blurTokens,
  focusRingToken,
  glassTokens,
  radiusTokens,
  spacingTokens,
} from '~/shared/styles/tokens'

const glassCardStyles = tv({
  slots: {
    base: [
      'relative isolate flex flex-col overflow-hidden',
      glassTokens.surface,
      glassTokens.border,
      glassTokens.shadow,
      radiusTokens.glass,
      blurTokens.lg,
      'transition-all duration-200',
    ],
    header: 'flex items-start gap-3 border-b border-white/15 text-neutral-900',
    body: 'flex flex-col gap-3 text-neutral-700 flex-1',
    footer: 'flex items-center justify-between gap-3 border-t border-white/15',
    eyebrow:
      'text-caption font-semibold uppercase tracking-wide text-green-700',
    title: 'font-maven text-h5 text-neutral-900',
    subtitle: 'text-body-base text-neutral-700',
  },
  variants: {
    padding: {
      sm: {
        header: spacingTokens.sm,
        body: spacingTokens.sm,
        footer: spacingTokens.sm,
      },
      md: {
        header: spacingTokens.md,
        body: spacingTokens.md,
        footer: spacingTokens.md,
      },
      lg: {
        header: spacingTokens.lg,
        body: spacingTokens.lg,
        footer: spacingTokens.lg,
      },
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
      light: '',
      dark: 'bg-secondary-green/60 text-white-essential',
    },
    blur: {
      sm: blurTokens.sm,
      md: blurTokens.md,
      lg: blurTokens.lg,
    },
    divider: {
      none: {
        header: 'border-transparent',
        footer: 'border-transparent',
      },
      subtle: {},
    },
  },
  compoundVariants: [
    {
      tone: 'light',
      interactive: true,
      class: {
        base: 'hover:bg-white-essential/75',
      },
    },
    {
      tone: 'dark',
      interactive: true,
      class: {
        base: 'hover:bg-secondary-green/70',
      },
    },
    {
      tone: 'dark',
      class: {
        header: 'text-white',
        title: 'text-white',
        subtitle: 'text-neutral-100',
        body: 'text-neutral-100',
        footer: 'text-neutral-50',
        eyebrow: 'text-green-200',
      },
    },
  ],
  defaultVariants: {
    padding: 'md',
    interactive: true,
    tone: 'light',
    blur: 'lg',
    divider: 'subtle',
  },
})

export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardStyles> {
  title?: React.ReactNode
  subtitle?: React.ReactNode
  eyebrow?: React.ReactNode
  footer?: React.ReactNode
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      className,
      children,
      title,
      subtitle,
      eyebrow,
      footer,
      padding,
      interactive,
      tone,
      blur,
      divider,
      ...props
    },
    ref,
  ) => {
    const {
      base,
      header,
      body,
      footer: footerSlot,
      eyebrow: eyebrowSlot,
      title: titleSlot,
      subtitle: subtitleSlot,
    } = glassCardStyles({
      padding,
      interactive,
      tone,
      blur,
      divider,
    })

    return (
      <div ref={ref} className={base({ class: className })} {...props}>
        {(eyebrow || title || subtitle) && (
          <div className={header()}>
            <div className="flex flex-col gap-1">
              {eyebrow ? (
                <span className={eyebrowSlot()}>{eyebrow}</span>
              ) : null}
              {title ? <div className={titleSlot()}>{title}</div> : null}
              {subtitle ? (
                <div className={subtitleSlot()}>{subtitle}</div>
              ) : null}
            </div>
          </div>
        )}

        <div className={body()}>{children}</div>

        {footer ? <div className={footerSlot()}>{footer}</div> : null}
      </div>
    )
  },
)

GlassCard.displayName = 'GlassCard'

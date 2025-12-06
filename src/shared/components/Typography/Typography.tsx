import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '~/shared/components/shadcn'

const headingStyles = tv({
  base: 'font-maven tracking-tight text-neutral-900',
  variants: {
    level: {
      1: 'text-h1',
      2: 'text-h2',
      3: 'text-h3',
      4: 'text-h4',
      5: 'text-h5',
      6: 'text-h6',
    },
    align: {
      start: 'text-left',
      center: 'text-center',
      end: 'text-right',
    },
    tone: {
      default: 'text-neutral-900',
      muted: 'text-neutral-800',
      onDark: 'text-white',
    },
  },
  defaultVariants: {
    level: 2,
    align: 'start',
    tone: 'default',
  },
})

const textStyles = tv({
  base: 'font-montserrat text-neutral-700',
  variants: {
    variant: {
      lead: 'text-lead text-neutral-700',
      body: 'text-body-base',
      'body-large': 'text-body-large',
      'body-small': 'text-body-small',
      caption: 'text-caption',
    },
    weight: {
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
    },
    tone: {
      default: 'text-neutral-700',
      muted: 'text-neutral-600',
      strong: 'text-neutral-900',
      onDark: 'text-white',
    },
    align: {
      start: 'text-left',
      center: 'text-center',
      end: 'text-right',
    },
  },
  defaultVariants: {
    variant: 'body',
    weight: 'regular',
    tone: 'default',
    align: 'start',
  },
})

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingStyles> {
  as?: keyof JSX.IntrinsicElements
}

export const Heading = React.forwardRef<HTMLElement, HeadingProps>(
  ({ as, level, align, tone, className, children, ...props }, ref) => {
    const Component = as ?? (`h${level ?? 2}` as keyof JSX.IntrinsicElements)
    return (
      <Component
        ref={ref}
        className={headingStyles({ level, align, tone, class: className })}
        {...props}
      >
        {children}
      </Component>
    )
  },
)
Heading.displayName = 'Heading'

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textStyles> {
  as?: keyof JSX.IntrinsicElements
}

export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    { as, variant, weight, tone, align, className, children, ...props },
    ref,
  ) => {
    const Component = as ?? 'p'
    return (
      <Component
        ref={ref}
        className={cn(
          textStyles({ variant, weight, tone, align, class: className }),
        )}
        {...props}
      >
        {children}
      </Component>
    )
  },
)
Text.displayName = 'Text'

const typography = { Heading, Text }

export default typography

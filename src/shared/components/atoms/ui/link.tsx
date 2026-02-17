'use client'

import NextLink from 'next/link'
import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '~/shared/components/shadcn'
import { event } from '~/shared/lib/gtag'
import { buttonVariants } from './button'

const linkVariants = tv({
  base: 'text-primary-green hover:text-green-600 transition-all hover:no-underline',
  variants: {
    visual: {
      button: buttonVariants({ variant: 'default' }), // Base button styles
      text: 'hover:no-underline',
      underline: 'underline underline-offset-4',
      subtle: 'text-neutral-600 hover:text-neutral-900',
    },
    hoverEffect: {
      scale: 'hover:scale-[1.02] active:scale-95',
      underline: 'hover:underline hover:underline-offset-4',
      none: '',
    },
    size: {
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
    },
  },
  compoundVariants: [
    {
      visual: 'button',
      hoverEffect: 'scale',
      class: 'transform-gpu', // Enable GPU acceleration for smooth scaling
    },
  ],
  defaultVariants: {
    visual: 'text',
    hoverEffect: 'underline',
    size: 'base',
  },
})

export interface ILinkProps
  extends React.ComponentPropsWithoutRef<typeof NextLink>,
    VariantProps<typeof linkVariants> {
  // Only show button-related props when visual is 'button'
  buttonVariant?: VariantProps<typeof buttonVariants>['variant']
  buttonSize?: VariantProps<typeof buttonVariants>['size']
  trackParams: Record<string, unknown>
}

export const Link = React.forwardRef<
  React.ElementRef<typeof NextLink>,
  ILinkProps
>(
  (
    {
      className,
      visual = 'text',
      hoverEffect,
      size,
      // Button-specific props
      buttonVariant,
      buttonSize,
      trackParams,
      ...props
    },
    ref,
  ) => {
    const isButtonStyle = visual === 'button'

    const handleClick = () => {
      event('click', {
        ...trackParams,
        event_category: trackParams.category,
        event_label: trackParams.label,
        link_url: props.href,
      })
    }

    return (
      <NextLink
        ref={ref}
        className={cn(
          isButtonStyle
            ? buttonVariants({
                variant: buttonVariant,
                size: buttonSize,
              })
            : linkVariants({ visual, hoverEffect, size }),
          isButtonStyle &&
            hoverEffect === 'scale' &&
            'transform-gpu hover:scale-[1.02] active:scale-95',
          isButtonStyle &&
            hoverEffect === 'underline' &&
            'hover:underline hover:underline-offset-4',
          className,
        )}
        role={isButtonStyle ? 'button' : undefined}
        onClick={handleClick}
        {...props}
      />
    )
  },
)

Link.displayName = 'Link'

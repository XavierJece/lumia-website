import NextLink from 'next/link'
import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '~/shared/components/shadcn'
import { buttonVariants } from './button'

const linkVariants = tv({
  base: 'text-primary-green hover:text-green-600 transition-all focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2',
  variants: {
    visual: {
      button: buttonVariants({ variant: 'default' }), // Base button styles
      text: '',
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
  buttonColor?: VariantProps<typeof buttonVariants>['color']
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
      buttonColor,
      ...props
    },
    ref,
  ) => {
    const isButtonStyle = visual === 'button'

    return (
      <NextLink
        ref={ref}
        className={cn(
          isButtonStyle
            ? buttonVariants({
                variant: buttonVariant,
                size: buttonSize,
                color: buttonColor,
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
        {...props}
      />
    )
  },
)

Link.displayName = 'Link'

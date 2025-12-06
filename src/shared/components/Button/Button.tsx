import { tv, type VariantProps } from 'tailwind-variants'
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '~/shared/components/shadcn'

const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-body-base font-semibold',
    'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed',
  ],
  variants: {
    variant: {
      primary: [
        'bg-primary-green text-white-essential',
        'hover:bg-green-600 active:bg-green-700',
      ],
      secondary: [
        'bg-green-200 text-green-800',
        'hover:bg-green-300 active:bg-green-300',
      ],
      ghost: [
        'bg-transparent text-primary-green',
        'hover:bg-neutral-100 active:bg-neutral-100',
      ],
    },
    size: {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3 text-body-small',
      lg: 'h-11 rounded-md px-8',
      icon: 'h-10 w-10',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '~/shared/components/shadcn'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white-essential transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-green focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 hover:scale-[1.02] gap-1',
  {
    variants: {
      variant: {
        default:
          'bg-primary-green text-white-essential hover:bg-green-600 hover:text-white-essential shadow-sm',
        destructive:
          'bg-error text-white-essential hover:bg-red-700 hover:text-white-essential shadow-sm',
        outline:
          'border border-neutral-300 bg-white-essential hover:bg-neutral-100 hover:text-neutral-900',
        secondary:
          'bg-green-200 text-green-800 hover:bg-green-300 hover:text-green-900',
        ghost: 'hover:bg-neutral-100 hover:text-neutral-900',
        link: 'text-primary-green underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

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

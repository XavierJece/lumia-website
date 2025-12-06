import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const buttonStyles = tv({
  slots: {
    base: [
      'inline-flex items-center justify-center gap-2 whitespace-nowrap',
      'rounded-pill text-body-base font-semibold',
      'transition-all duration-150',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed',
    ],
    icon: 'flex h-5 w-5 shrink-0 items-center justify-center',
    spinner:
      'h-4 w-4 animate-spin rounded-full border-2 border-white/70 border-t-white',
    label: '',
  },
  variants: {
    variant: {
      primary: {
        base: 'bg-primary-green text-white-essential hover:bg-green-600 active:bg-green-700 shadow-soft',
        spinner: 'border-white/70 border-t-white',
      },
      secondary: {
        base: 'bg-green-200 text-green-900 hover:bg-green-300 active:bg-green-300 shadow-outline',
        spinner: 'border-green-800/60 border-t-green-800',
      },
      ghost: {
        base: 'bg-transparent text-primary-green hover:bg-neutral-100 active:bg-neutral-200',
        spinner: 'border-primary-green/70 border-t-primary-green',
      },
    },
    size: {
      sm: {
        base: 'h-9 px-3 text-body-small',
      },
      md: {
        base: 'h-10 px-4',
      },
      lg: {
        base: 'h-11 px-6 text-body-large',
      },
      icon: {
        base: 'h-10 w-10 p-0',
      },
    },
    fullWidth: {
      true: {
        base: 'w-full',
      },
    },
    loading: {
      true: {
        base: 'cursor-wait opacity-80',
      },
    },
  },
  compoundVariants: [
    {
      size: 'icon',
      class: {
        icon: 'h-5 w-5',
      },
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    loading: false,
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  asChild?: boolean
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      fullWidth,
      loading,
      isLoading,
      leadingIcon,
      trailingIcon,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    const isButtonLoading = loading ?? isLoading
    const { base, icon, spinner, label } = buttonStyles({
      variant,
      size,
      fullWidth,
      loading: isButtonLoading,
      class: className,
    })

    return (
      <Comp
        className={base()}
        ref={ref}
        disabled={disabled || isButtonLoading}
        aria-busy={isButtonLoading}
        {...props}
      >
        {isButtonLoading ? (
          <span className={spinner()} aria-hidden />
        ) : leadingIcon ? (
          <span className={icon()} aria-hidden>
            {leadingIcon}
          </span>
        ) : null}

        <span className={label()}>{children}</span>

        {!isButtonLoading && trailingIcon ? (
          <span className={icon()} aria-hidden>
            {trailingIcon}
          </span>
        ) : null}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonStyles as buttonVariants }

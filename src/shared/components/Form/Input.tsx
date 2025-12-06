import * as React from 'react'
import { cn } from '~/shared/components/shadcn'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border bg-white-essential px-3 py-2 text-body-base',
          'text-neutral-900 placeholder:text-neutral-400',
          'ring-offset-white-essential file:border-0 file:bg-transparent file:text-sm file:font-medium',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-70',
          error
            ? 'border-error focus-visible:ring-error'
            : 'border-neutral-300',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }

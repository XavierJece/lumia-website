import * as React from 'react'
import { Input, type InputProps } from './Input'
import { Label, type LabelProps } from './Label'
import { cn } from '~/shared/components/shadcn'

export interface FormFieldProps {
  label?: string
  labelProps?: LabelProps
  inputProps?: InputProps
  error?: string
  className?: string
}

const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, labelProps, inputProps, error, className, ...props }, ref) => {
    return (
      <div className={cn('space-y-2', className)}>
        {label && (
          <Label htmlFor={inputProps?.id} {...labelProps}>
            {label}
          </Label>
        )}
        <Input
          ref={ref}
          error={!!error}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputProps?.id}-error` : undefined}
          {...inputProps}
          {...props}
        />
        {error && (
          <p
            id={error ? `${inputProps?.id}-error` : undefined}
            className="text-body-small text-error"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    )
  },
)
FormField.displayName = 'FormField'

export { FormField }

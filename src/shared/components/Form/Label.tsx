import * as React from 'react'
import { cn } from '~/shared/components/shadcn'

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          'text-body-small font-medium text-neutral-800',
          className,
        )}
        {...props}
      />
    )
  },
)
Label.displayName = 'Label'

export { Label }


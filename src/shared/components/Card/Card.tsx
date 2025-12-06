import * as React from 'react'
import { cn } from '~/shared/components/shadcn'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode
  footer?: React.ReactNode
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, header, footer, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-white-essential border border-neutral-200 rounded shadow-sm',
          'hover:bg-neutral-100 transition-colors',
          className,
        )}
        {...props}
      >
        {header && (
          <div className="px-6 py-4 border-b border-neutral-200">{header}</div>
        )}
        <div className={cn('px-6 py-4', header && 'pt-4', footer && 'pb-4')}>
          {children}
        </div>
        {footer && (
          <div className="px-6 py-4 border-t border-neutral-200">{footer}</div>
        )}
      </div>
    )
  },
)
Card.displayName = 'Card'

export { Card }

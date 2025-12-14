import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '~/shared/components/shadcn'

// Section Root
const sectionStyles = tv({
  base: 'section-alternating py-16 md:py-24',
})

interface ISectionProps extends React.HTMLAttributes<HTMLElement> {}

const SectionRoot = React.forwardRef<HTMLElement, ISectionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section ref={ref} className={cn(sectionStyles(), className)} {...props}>
        <div className="container">{children}</div>
      </section>
    )
  },
)
SectionRoot.displayName = 'Section'

// Section Header
const headerStyles = tv({
  base: 'flex flex-col gap-4 mb-12',
  variants: {
    align: {
      responsive: 'text-center md:text-left',
      center: 'text-center',
      left: 'text-left',
    },
  },
  defaultVariants: {
    align: 'responsive',
  },
})

interface ISectionHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof headerStyles> {}

const SectionHeader = React.forwardRef<HTMLDivElement, ISectionHeaderProps>(
  ({ className, align, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(headerStyles({ align }), className)}
        {...props}
      >
        {children}
      </div>
    )
  },
)
SectionHeader.displayName = 'Section.Header'

// Section Title
const titleStyles = tv({
  base: 'font-maven text-[1.5rem] font-bold text-secondary-green sm:text-h3 md:text-h2',
})

interface ISectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const SectionTitle = React.forwardRef<HTMLHeadingElement, ISectionTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h2 ref={ref} className={cn(titleStyles(), className)} {...props}>
        {children}
      </h2>
    )
  },
)
SectionTitle.displayName = 'Section.Title'

// Section Subtitle
const subtitleStyles = tv({
  base: 'max-w-2xl text-body-base text-neutral-600',
})

interface ISectionSubtitleProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const SectionSubtitle = React.forwardRef<
  HTMLParagraphElement,
  ISectionSubtitleProps
>(({ className, children, ...props }, ref) => {
  return (
    <p ref={ref} className={cn(subtitleStyles(), className)} {...props}>
      {children}
    </p>
  )
})
SectionSubtitle.displayName = 'Section.Subtitle'

// Section Content
interface ISectionContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const SectionContent = React.forwardRef<HTMLDivElement, ISectionContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    )
  },
)
SectionContent.displayName = 'Section.Content'

// Compose the Section component
export const Section = Object.assign(SectionRoot, {
  Header: SectionHeader,
  Title: SectionTitle,
  Subtitle: SectionSubtitle,
  Content: SectionContent,
})

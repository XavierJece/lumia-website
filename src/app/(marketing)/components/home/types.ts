import type { LucideIcon } from 'lucide-react'

/**
 * Interface for impact metrics cards displayed in the ImpactMetrics section.
 * Each card shows a numeric value with an icon and label.
 */
export interface IMetricCard {
  id: number
  value: string
  label: string
  icon: LucideIcon
}

/**
 * Interface for solution cards displayed in the SolutionsGrid section.
 * Each card links to a solution page with icon, title, and description.
 */
export interface ISolutionCard {
  title: string
  description: string
  href: string
  icon: LucideIcon
}

/**
 * Interface for methodology steps displayed in the animated timeline.
 * Each step has a numbered circle, title, description, and a "diferencial" highlight.
 */
export interface IMethodologyStep {
  id: number
  title: string
  description: string
  diferencial: string
  icon: LucideIcon
}

/**
 * Interface for case study cards in the SuccessCases section.
 * Each card shows client logo, result badge, and Challenge/Action/Result content.
 */
export interface ICaseStudy {
  id: number
  clientName: string
  logoAlt: string
  badge: string
  challenge: string
  action: string
  result: string
  href?: string
}

/**
 * Interface for testimonial cards displayed in the Testimonials section.
 * Each testimonial includes a quote, highlighted phrase, and author information.
 */
export interface ITestimonial {
  id: number
  quote: string
  highlight: string
  authorName: string
  authorRole: string
  authorCompany: string
  authorImage: string
}

/**
 * Interface for value proposition cards in the "Por que a Lumia?" section.
 * Each card shows a large yellow icon with title and description.
 */
export interface IValueCard {
  id: number
  title: string
  description: string
  icon: LucideIcon
}

/**
 * Interface for blog preview cards in the "Insights e Novidades" section.
 * Each card shows image, category tag, title, date, and link.
 */
export interface IBlogPreview {
  id: string
  title: string
  category: string
  date: string
  image?: string
  href: string
}

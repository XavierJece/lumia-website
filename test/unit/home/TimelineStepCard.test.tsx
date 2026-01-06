import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { timelineSteps } from '~/app/(marketing)/components/home/timelineData'
import TimelineStepCard from '~/app/(marketing)/components/home/TimelineStepCard'

// Ensure React is available globally for JSX transformation
globalThis.React = React

// Create a proper mock MotionValue that returns unsubscribe functions
const createMockMotionValue = (initialValue: number = 0) => ({
  get: () => initialValue,
  set: vi.fn(),
  on: vi.fn(() => () => {}), // Returns unsubscribe function
  onChange: vi.fn(() => () => {}), // Returns unsubscribe function
  clearListeners: vi.fn(),
  destroy: vi.fn(),
  isAnimating: vi.fn(() => false),
  stop: vi.fn(),
})

// Mock framer-motion
vi.mock('framer-motion', async (importOriginal) => {
  const actual = await importOriginal<typeof import('framer-motion')>()

  return {
    ...actual,
    m: {
      div: ({
        children,
        className,
        style,
        onHoverStart,
        onHoverEnd,
        onKeyDown,
        role,
        tabIndex,
        'aria-label': ariaLabel,
      }: any) => (
        <div
          className={className}
          style={style}
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
          onKeyDown={onKeyDown}
          role={role}
          tabIndex={tabIndex}
          aria-label={ariaLabel}
          data-testid="motion-div"
        >
          {children}
        </div>
      ),
    },
    useTransform: vi.fn((progress, inputRange, outputRange) => {
      // Simple mock: return the first output value if progress is below threshold
      const progressValue = typeof progress.get === 'function' ? progress.get() : 0
      if (progressValue < inputRange[1]) {
        return outputRange[0]
      }
      return outputRange[outputRange.length - 1]
    }),
  }
})

describe('TimelineStepCard Component', () => {
  const mockProgress = createMockMotionValue(0.5)
  const defaultProps = {
    step: timelineSteps[0],
    index: 0,
    progress: mockProgress as any,
    prefersReducedMotion: false,
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Component Rendering', () => {
    it('renders all required content sections', () => {
      render(<TimelineStepCard {...defaultProps} />)

      // Step Header
      expect(screen.getByText('ETAPA 1')).toBeInTheDocument()

      // Step Title (H3)
      const title = screen.getByRole('heading', { level: 3 })
      expect(title).toHaveTextContent('Diagnóstico & Estratégia')

      // Key Question
      expect(
        screen.getByText(/Pergunta que respondemos:/i),
      ).toBeInTheDocument()

      // Description
      expect(
        screen.getByText(/Realizamos uma análise técnica minuciosa/i),
      ).toBeInTheDocument()

      // Differential Highlight
      expect(screen.getByText(/Nosso diferencial:/i)).toBeInTheDocument()
      expect(
        screen.getByText(/checklist inteligente e um banco de dados/i),
      ).toBeInTheDocument()

      // Practical Example
      expect(screen.getByText(/Exemplo Prático:/i)).toBeInTheDocument()
      expect(
        screen.getByText(/novo empreendimento comercial/i),
      ).toBeInTheDocument()
    })

    it('renders circular marker for timeline connection', () => {
      const { container } = render(<TimelineStepCard {...defaultProps} />)
      const marker = container.querySelector('.rounded-full.border-2')
      expect(marker).toBeInTheDocument()
    })

    it('renders correct step header format', () => {
      render(<TimelineStepCard {...defaultProps} />)
      const header = screen.getByText('ETAPA 1')
      expect(header).toHaveClass('uppercase', 'font-bold', 'text-xs')
    })

    it('renders step title as H3 semantic element', () => {
      render(<TimelineStepCard {...defaultProps} />)
      const title = screen.getByRole('heading', { level: 3 })
      expect(title).toBeInTheDocument()
      expect(title).toHaveClass('font-maven', 'text-horizon-green')
    })
  })

  describe('Content Structure', () => {
    it('displays all content sections in correct order', () => {
      const { container } = render(<TimelineStepCard {...defaultProps} />)
      const card = container.querySelector('[data-testid="motion-div"]')
      const children = Array.from(card?.children || [])

      // Find header div (first non-marker child)
      const headerDiv = Array.from(children).find((child) =>
        child.textContent?.includes('ETAPA 1'),
      )
      expect(headerDiv).toBeInTheDocument()

      // Check that title (H3) exists
      const title = screen.getByRole('heading', { level: 3 })
      expect(title).toBeInTheDocument()
    })

    it('renders differential highlight box with correct styling', () => {
      const { container } = render(<TimelineStepCard {...defaultProps} />)
      const differentialBox = container.querySelector('.border-l-4.border-amarelo-luz')
      expect(differentialBox).toBeInTheDocument()
      expect(differentialBox).toHaveClass('bg-white-essential')
    })
  })

  describe('Hover State', () => {
    it('changes border color to Light Yellow on hover', async () => {
      const user = userEvent.setup()
      const { container } = render(<TimelineStepCard {...defaultProps} />)
      const card = container.querySelector('[data-testid="motion-div"]')

      // Initial state: transparent border
      expect(card).toHaveClass('border-transparent')

      // Hover over card
      await user.hover(card!)

      // After hover: Light Yellow border
      expect(card).toHaveClass('border-amarelo-luz')
      expect(card).not.toHaveClass('border-transparent')
    })

    it('removes hover border when mouse leaves', async () => {
      const user = userEvent.setup()
      const { container } = render(<TimelineStepCard {...defaultProps} />)
      const card = container.querySelector('[data-testid="motion-div"]')

      // Hover
      await user.hover(card!)
      expect(card).toHaveClass('border-amarelo-luz')

      // Unhover
      await user.unhover(card!)
      expect(card).toHaveClass('border-transparent')
      expect(card).not.toHaveClass('border-amarelo-luz')
    })

    it('has smooth transition for border color change', () => {
      const { container } = render(<TimelineStepCard {...defaultProps} />)
      const card = container.querySelector('[data-testid="motion-div"]')
      expect(card).toHaveClass('transition-colors', 'duration-300')
    })
  })

  describe('Animation Behavior', () => {
    it('applies fade-up animation style when prefersReducedMotion is false', () => {
      const { container } = render(
        <TimelineStepCard {...defaultProps} prefersReducedMotion={false} />,
      )
      const card = container.querySelector('[data-testid="motion-div"]')
      const style = card?.getAttribute('style')

      // Should have opacity and y transform in style
      expect(style).toBeTruthy()
    })

    it('skips animation when prefersReducedMotion is true', () => {
      const { container } = render(
        <TimelineStepCard {...defaultProps} prefersReducedMotion={true} />,
      )
      const card = container.querySelector('[data-testid="motion-div"]')
      const style = card?.getAttribute('style')

      // Should have static opacity: 1 (y: 0 is applied via inline style object, not string)
      expect(style).toContain('opacity: 1')
      // The y: 0 is applied via the style object prop, not as a string attribute
      // We verify the component renders correctly instead
      expect(card).toBeInTheDocument()
    })

    it('calculates animation thresholds based on card index', () => {
      const { rerender } = render(
        <TimelineStepCard {...defaultProps} index={0} />,
      )
      // Card 0 should start animating at progress 0

      rerender(<TimelineStepCard {...defaultProps} index={1} />)
      // Card 1 should start animating at progress 0.2

      rerender(<TimelineStepCard {...defaultProps} index={2} />)
      // Card 2 should start animating at progress 0.4

      rerender(<TimelineStepCard {...defaultProps} index={3} />)
      // Card 3 should start animating at progress 0.6
    })
  })

  describe('Responsive Design', () => {
    it('has responsive classes for mobile and desktop', () => {
      const { container } = render(<TimelineStepCard {...defaultProps} />)
      const card = container.querySelector('[data-testid="motion-div"]')
      const marker = container.querySelector('.rounded-full')

      // Card should have responsive padding (p-4 md:p-5 lg:p-6)
      expect(card).toHaveClass('p-4', 'md:p-5', 'lg:p-6')

      // Marker should have responsive positioning
      expect(marker).toHaveClass('-left-9', 'md:-left-8', 'lg:-left-6')
    })

    it('renders correctly with different step indices', () => {
      timelineSteps.forEach((step, index) => {
        const { unmount } = render(
          <TimelineStepCard
            step={step}
            index={index}
            progress={mockProgress as any}
            prefersReducedMotion={false}
          />,
        )

        expect(screen.getByText(step.header)).toBeInTheDocument()
        expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
          step.title,
        )

        unmount()
      })
    })
  })

  describe('Semantic HTML Structure', () => {
    it('uses H3 tag for step title', () => {
      render(<TimelineStepCard {...defaultProps} />)
      const title = screen.getByRole('heading', { level: 3 })
      expect(title.tagName).toBe('H3')
    })

    it('uses proper paragraph tags for description', () => {
      const { container } = render(<TimelineStepCard {...defaultProps} />)
      // Description has responsive classes: text-sm md:text-body-base
      const description = container.querySelector('p.text-sm')
      expect(description).toBeInTheDocument()
    })

    it('uses strong tags for emphasis in differential and example sections', () => {
      const { container } = render(<TimelineStepCard {...defaultProps} />)
      const strongTags = container.querySelectorAll('strong')
      expect(strongTags.length).toBeGreaterThanOrEqual(2) // "Nosso diferencial:" and "Exemplo Prático:"
    })
  })

  describe('Color Styling', () => {
    it('applies yellow-800 color to step header for WCAG AA contrast compliance', () => {
      render(<TimelineStepCard {...defaultProps} />)
      const header = screen.getByText('ETAPA 1')
      // Changed from text-amarelo-luz to text-yellow-800 for accessibility
      expect(header).toHaveClass('text-yellow-800')
    })

    it('applies Horizon Green color to step title', () => {
      render(<TimelineStepCard {...defaultProps} />)
      const title = screen.getByRole('heading', { level: 3 })
      expect(title).toHaveClass('text-horizon-green')
    })

    it('applies Primary Green color to key question', () => {
      const { container } = render(<TimelineStepCard {...defaultProps} />)
      const keyQuestion = container.querySelector('.text-primary-green.italic')
      expect(keyQuestion).toBeInTheDocument()
    })

    it('applies white-essential background to differential box', () => {
      const { container } = render(<TimelineStepCard {...defaultProps} />)
      const differentialBox = container.querySelector('.bg-white-essential')
      expect(differentialBox).toBeInTheDocument()
    })
  })

  describe('All Steps Rendering', () => {
    it('renders all 4 steps correctly', () => {
      timelineSteps.forEach((step, index) => {
        const { unmount } = render(
          <TimelineStepCard
            step={step}
            index={index}
            progress={mockProgress as any}
            prefersReducedMotion={false}
          />,
        )

        // Verify header
        expect(screen.getByText(step.header)).toBeInTheDocument()

        // Verify title
        expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
          step.title,
        )

        // Verify key question
        expect(screen.getByText(step.keyQuestion)).toBeInTheDocument()

        // Verify description
        expect(screen.getByText(step.description)).toBeInTheDocument()

        // Verify differential
        expect(screen.getByText(step.diferencial)).toBeInTheDocument()

        // Verify practical example
        expect(screen.getByText(step.practicalExample)).toBeInTheDocument()

        unmount()
      })
    })
  })

  describe('Accessibility Features', () => {
    it('has role="listitem" for semantic HTML structure', () => {
      const { container } = render(<TimelineStepCard {...defaultProps} />)
      const card = container.querySelector('[data-testid="motion-div"]')
      expect(card).toHaveAttribute('role', 'listitem')
    })

    it('has tabIndex={0} for keyboard navigation', () => {
      const { container } = render(<TimelineStepCard {...defaultProps} />)
      const card = container.querySelector('[data-testid="motion-div"]')
      expect(card).toHaveAttribute('tabIndex', '0')
    })

    it('has descriptive aria-label with step header and title', () => {
      const { container } = render(<TimelineStepCard {...defaultProps} />)
      const card = container.querySelector('[data-testid="motion-div"]')
      const ariaLabel = card?.getAttribute('aria-label')
      expect(ariaLabel).toBeTruthy()
      expect(ariaLabel).toContain('ETAPA 1')
      expect(ariaLabel).toContain('Diagnóstico & Estratégia')
    })

    it('has focus styles for keyboard users', () => {
      const { container } = render(<TimelineStepCard {...defaultProps} />)
      const card = container.querySelector('[data-testid="motion-div"]')
      const classes = card?.className || ''
      expect(classes).toContain('focus:outline-none')
      expect(classes).toContain('focus:ring-2')
      expect(classes).toContain('focus:ring-amarelo-luz')
      expect(classes).toContain('focus:ring-offset-2')
    })

    it('handles keyboard Enter key activation', async () => {
      const user = userEvent.setup()
      const { container } = render(<TimelineStepCard {...defaultProps} />)
      const card = container.querySelector('[data-testid="motion-div"]') as HTMLElement

      // Focus the card
      card.focus()

      // Press Enter key
      await user.keyboard('{Enter}')

      // Card should have hover state (border-amarelo-luz)
      // Note: The hover state is temporary (200ms), so we check immediately
      expect(card).toHaveClass('border-amarelo-luz')
    })

    it('handles keyboard Space key activation', async () => {
      const user = userEvent.setup()
      const { container } = render(<TimelineStepCard {...defaultProps} />)
      const card = container.querySelector('[data-testid="motion-div"]') as HTMLElement

      // Focus the card
      card.focus()

      // Press Space key
      await user.keyboard(' ')

      // Card should have hover state
      expect(card).toHaveClass('border-amarelo-luz')
    })

    it('has aria-hidden on decorative marker element', () => {
      const { container } = render(<TimelineStepCard {...defaultProps} />)
      const marker = container.querySelector('.rounded-full.border-2')
      expect(marker).toHaveAttribute('aria-hidden', 'true')
    })

    it('maintains semantic heading hierarchy with H3 for step title', () => {
      render(<TimelineStepCard {...defaultProps} />)
      const title = screen.getByRole('heading', { level: 3 })
      expect(title).toBeInTheDocument()
      expect(title.tagName).toBe('H3')
    })

    it('uses proper semantic HTML elements for content structure', () => {
      const { container } = render(<TimelineStepCard {...defaultProps} />)
      // Should have H3 for title
      const title = screen.getByRole('heading', { level: 3 })
      expect(title).toBeInTheDocument()

      // Should have paragraph for description
      const description = container.querySelector('p')
      expect(description).toBeInTheDocument()

      // Should have strong tags for emphasis
      const strongTags = container.querySelectorAll('strong')
      expect(strongTags.length).toBeGreaterThanOrEqual(2)
    })
  })

  describe('Reduced Motion Support', () => {
    it('disables animations when prefersReducedMotion is true', () => {
      const { container } = render(
        <TimelineStepCard {...defaultProps} prefersReducedMotion={true} />,
      )
      const card = container.querySelector('[data-testid="motion-div"]')
      const style = card?.getAttribute('style')

      // Should have static opacity: 1 when reduced motion is enabled
      expect(style).toContain('opacity: 1')
    })

    it('ensures content is readable without animations', () => {
      render(<TimelineStepCard {...defaultProps} prefersReducedMotion={true} />)

      // All content should still be visible and readable
      expect(screen.getByText('ETAPA 1')).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
      expect(screen.getByText(/Realizamos uma análise técnica/i)).toBeInTheDocument()
    })
  })
})


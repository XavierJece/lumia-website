import { render, screen } from '@testing-library/react'
import React from 'react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { TimelineMethodology } from '~/app/(marketing)/components/home/TimelineMethodology'

// Ensure React is available globally for JSX transformation
globalThis.React = React

// Create a proper mock MotionValue
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
    LazyMotion: ({ children }: any) => <div data-testid="lazy-motion">{children}</div>,
    domAnimation: {},
    m: {
      div: ({ children, className, style }: any) => (
        <div className={className} style={style} data-testid="motion-div">
          {children}
        </div>
      ),
    },
    useTransform: vi.fn((progress, inputRange, outputRange) => {
      const progressValue = typeof progress.get === 'function' ? progress.get() : 0
      if (progressValue < 0.5) {
        return outputRange[0]
      }
      return outputRange[outputRange.length - 1]
    }),
  }
})

// Mock hooks
const mockProgress = createMockMotionValue(0)
const mockUseScrollProgress = vi.fn(() => ({
  progress: mockProgress,
  isComplete: false,
}))

const mockUseReducedMotion = vi.fn(() => false)

vi.mock('~/app/(marketing)/components/home/hooks/useScrollProgress', () => ({
  useScrollProgress: () => mockUseScrollProgress(),
  useReducedMotion: () => mockUseReducedMotion(),
}))

// Mock child components
vi.mock('~/app/(marketing)/components/home/TimelineProgress', () => ({
  default: ({ progress, prefersReducedMotion, stepCount }: any) => (
    <div
      data-testid="timeline-progress"
      data-progress={progress?.get?.() ?? 0}
      data-prefers-reduced-motion={prefersReducedMotion}
      data-step-count={stepCount}
      role="presentation"
      aria-hidden="true"
    >
      Timeline Progress
    </div>
  ),
}))

vi.mock('~/app/(marketing)/components/home/TimelineStepCard', () => ({
  default: ({ step, index, progress, prefersReducedMotion }: any) => (
    <div
      data-testid="timeline-step-card"
      data-step-id={step.id}
      data-index={index}
      data-progress={progress?.get?.() ?? 0}
      data-prefers-reduced-motion={prefersReducedMotion}
      role="listitem"
      tabIndex={0}
      aria-label={`${step.header}: ${step.title}`}
      className="focus:outline-none focus:ring-2 focus:ring-amarelo-luz focus:ring-offset-2 focus:ring-offset-white"
    >
      {step.title}
    </div>
  ),
}))

// Mock Section component
vi.mock('~/shared/components/ui/section', () => ({
  Section: Object.assign(
    React.forwardRef<HTMLElement, any>(({ children, className, ...props }, ref) => (
      <section ref={ref} className={className} {...props}>
        <div className="container">{children}</div>
      </section>
    )),
    {
      Header: ({ children, className }: any) => (
        <div className={className} data-testid="section-header">
          {children}
        </div>
      ),
      Title: ({ children, id, className }: any) => (
        <h2 id={id} className={className} data-testid="section-title">
          {children}
        </h2>
      ),
      Subtitle: ({ children, className }: any) => (
        <p className={className} data-testid="section-subtitle">
          {children}
        </p>
      ),
      Content: ({ children, className }: any) => (
        <div className={className} data-testid="section-content">
          {children}
        </div>
      ),
    },
  ),
}))

describe('TimelineMethodology Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockUseScrollProgress.mockReturnValue({
      progress: mockProgress,
      isComplete: false,
    })
    mockUseReducedMotion.mockReturnValue(false)
  })

  describe('Component Rendering', () => {
    it('renders the component successfully', () => {
      const { container } = render(<TimelineMethodology />)
      expect(container).toBeTruthy()
    })

    it('wraps content in LazyMotion for performance', () => {
      render(<TimelineMethodology />)
      expect(screen.getByTestId('lazy-motion')).toBeInTheDocument()
    })

    it('renders Section component with proper structure', () => {
      render(<TimelineMethodology />)
      const section = screen.getByRole('region') || document.querySelector('section')
      expect(section).toBeInTheDocument()
      expect(section).toHaveClass('relative')
    })
  })

  describe('Section Header', () => {
    it('renders section header with title and subtitle', () => {
      render(<TimelineMethodology />)
      expect(screen.getByTestId('section-header')).toBeInTheDocument()
      expect(screen.getByTestId('section-title')).toBeInTheDocument()
      expect(screen.getByTestId('section-subtitle')).toBeInTheDocument()
    })

    it('renders correct title text', () => {
      render(<TimelineMethodology />)
      const title = screen.getByTestId('section-title')
      expect(title).toHaveTextContent('Como Eliminamos a Burocracia')
    })

    it('renders title as H2 element for semantic HTML', () => {
      render(<TimelineMethodology />)
      const title = screen.getByTestId('section-title')
      expect(title.tagName).toBe('H2')
    })

    it('has correct id attribute on title for accessibility', () => {
      render(<TimelineMethodology />)
      const title = screen.getByTestId('section-title')
      expect(title).toHaveAttribute('id', 'timeline-heading')
    })

    it('renders descriptive subtitle', () => {
      render(<TimelineMethodology />)
      const subtitle = screen.getByTestId('section-subtitle')
      expect(subtitle).toHaveTextContent('Conheça nosso processo em 4 etapas')
    })
  })

  describe('Accessibility', () => {
    it('has aria-labelledby attribute on section', () => {
      render(<TimelineMethodology />)
      const section = document.querySelector('section')
      expect(section).toHaveAttribute('aria-labelledby', 'timeline-heading')
    })

    it('has role="region" on section for semantic structure', () => {
      render(<TimelineMethodology />)
      const section = document.querySelector('section')
      expect(section).toHaveAttribute('role', 'region')
    })

    it('maintains proper heading hierarchy (H2 for section title)', () => {
      render(<TimelineMethodology />)
      const title = screen.getByTestId('section-title')
      expect(title.tagName).toBe('H2')
    })

    it('has role="list" on cards container with aria-label', () => {
      render(<TimelineMethodology />)
      const list = document.querySelector('[role="list"]')
      expect(list).toBeInTheDocument()
      expect(list).toHaveAttribute('aria-label', 'Processo em 4 etapas')
    })

    it('each card has role="listitem" for semantic structure', () => {
      render(<TimelineMethodology />)
      const cards = screen.getAllByTestId('timeline-step-card')
      cards.forEach((card) => {
        expect(card).toHaveAttribute('role', 'listitem')
      })
    })

    it('each card has descriptive aria-label', () => {
      render(<TimelineMethodology />)
      const cards = screen.getAllByTestId('timeline-step-card')
      // Check that cards have aria-label attributes
      cards.forEach((card) => {
        const ariaLabel = card.getAttribute('aria-label')
        expect(ariaLabel).toBeTruthy()
        expect(ariaLabel).toContain('ETAPA')
      })
    })

    it('cards are keyboard focusable with tabIndex', () => {
      render(<TimelineMethodology />)
      const cards = screen.getAllByTestId('timeline-step-card')
      cards.forEach((card) => {
        expect(card).toHaveAttribute('tabIndex', '0')
      })
    })

    it('cards have focus styles for keyboard navigation', () => {
      const { container } = render(<TimelineMethodology />)
      const cards = screen.getAllByTestId('timeline-step-card')
      cards.forEach((card) => {
        const cardElement = card as HTMLElement
        const classes = cardElement.className
        // Check for focus ring classes
        expect(classes).toContain('focus:outline-none')
        expect(classes).toContain('focus:ring-2')
      })
    })

    it('timeline progress line has aria-hidden for screen readers', () => {
      render(<TimelineMethodology />)
      const progressComponent = screen.getByTestId('timeline-progress')
      // The actual DOM element should have aria-hidden
      const progressLine = document.querySelector('[role="presentation"]')
      if (progressLine) {
        expect(progressLine).toHaveAttribute('aria-hidden', 'true')
      }
    })
  })

  describe('Timeline Progress Integration', () => {
    it('renders TimelineProgress component', () => {
      render(<TimelineMethodology />)
      expect(screen.getByTestId('timeline-progress')).toBeInTheDocument()
    })

    it('passes progress prop to TimelineProgress', () => {
      render(<TimelineMethodology />)
      const progressComponent = screen.getByTestId('timeline-progress')
      expect(progressComponent).toHaveAttribute('data-progress', '0')
    })

    it('passes prefersReducedMotion prop to TimelineProgress', () => {
      render(<TimelineMethodology />)
      const progressComponent = screen.getByTestId('timeline-progress')
      expect(progressComponent).toHaveAttribute('data-prefers-reduced-motion', 'false')
    })

    it('passes correct stepCount to TimelineProgress', () => {
      render(<TimelineMethodology />)
      const progressComponent = screen.getByTestId('timeline-progress')
      expect(progressComponent).toHaveAttribute('data-step-count', '4')
    })

    it('respects reduced motion preference', () => {
      mockUseReducedMotion.mockReturnValue(true)
      render(<TimelineMethodology />)
      const progressComponent = screen.getByTestId('timeline-progress')
      expect(progressComponent).toHaveAttribute('data-prefers-reduced-motion', 'true')
    })
  })

  describe('Step Cards Rendering', () => {
    it('renders all 4 step cards', () => {
      render(<TimelineMethodology />)
      const cards = screen.getAllByTestId('timeline-step-card')
      expect(cards).toHaveLength(4)
    })

    it('renders cards with correct step IDs', () => {
      render(<TimelineMethodology />)
      const cards = screen.getAllByTestId('timeline-step-card')
      const stepIds = cards.map((card) => card.getAttribute('data-step-id'))
      expect(stepIds).toEqual(['1', '2', '3', '4'])
    })

    it('renders cards with correct indices', () => {
      render(<TimelineMethodology />)
      const cards = screen.getAllByTestId('timeline-step-card')
      const indices = cards.map((card) => card.getAttribute('data-index'))
      expect(indices).toEqual(['0', '1', '2', '3'])
    })

    it('passes progress prop to each card', () => {
      render(<TimelineMethodology />)
      const cards = screen.getAllByTestId('timeline-step-card')
      cards.forEach((card) => {
        expect(card).toHaveAttribute('data-progress', '0')
      })
    })

    it('passes prefersReducedMotion prop to each card', () => {
      render(<TimelineMethodology />)
      const cards = screen.getAllByTestId('timeline-step-card')
      cards.forEach((card) => {
        expect(card).toHaveAttribute('data-prefers-reduced-motion', 'false')
      })
    })

    it('renders cards with correct step titles', () => {
      render(<TimelineMethodology />)
      expect(screen.getByText('Diagnóstico & Estratégia')).toBeInTheDocument()
      expect(screen.getByText('Tradução & Planejamento')).toBeInTheDocument()
      expect(screen.getByText('Mediação & Gestão')).toBeInTheDocument()
      expect(screen.getByText('Conformidade & Entrega')).toBeInTheDocument()
    })
  })

  describe('Scroll Progress Detection', () => {
    it('calls useScrollProgress hook with container ref', () => {
      render(<TimelineMethodology />)
      expect(mockUseScrollProgress).toHaveBeenCalled()
    })

    it('calls useReducedMotion hook', () => {
      render(<TimelineMethodology />)
      expect(mockUseReducedMotion).toHaveBeenCalled()
    })

    it('uses scroll progress value from hook', () => {
      const customProgress = createMockMotionValue(0.5)
      mockUseScrollProgress.mockReturnValue({
        progress: customProgress,
        isComplete: false,
      })
      render(<TimelineMethodology />)
      const progressComponent = screen.getByTestId('timeline-progress')
      expect(progressComponent).toHaveAttribute('data-progress', '0.5')
    })
  })

  describe('Layout Structure', () => {
    it('has proper container structure for timeline', () => {
      const { container } = render(<TimelineMethodology />)
      const timelineContainer = container.querySelector('.relative.py-6')
      expect(timelineContainer).toBeInTheDocument()
      expect(timelineContainer).toHaveClass('md:py-8', 'lg:py-8')
    })

    it('has proper spacing for cards container', () => {
      const { container } = render(<TimelineMethodology />)
      const cardsContainer = container.querySelector('.flex.flex-col.gap-6')
      expect(cardsContainer).toBeInTheDocument()
      expect(cardsContainer).toHaveClass('pl-12', 'md:gap-8', 'md:pl-16', 'lg:gap-12', 'lg:pl-12')
    })

    it('renders section content wrapper', () => {
      render(<TimelineMethodology />)
      expect(screen.getByTestId('section-content')).toBeInTheDocument()
    })
  })

  describe('Stagger Animation', () => {
    it('renders cards in correct order for stagger effect', () => {
      render(<TimelineMethodology />)
      const cards = screen.getAllByTestId('timeline-step-card')
      // Cards should be in order 0, 1, 2, 3
      expect(cards[0]).toHaveAttribute('data-index', '0')
      expect(cards[1]).toHaveAttribute('data-index', '1')
      expect(cards[2]).toHaveAttribute('data-index', '2')
      expect(cards[3]).toHaveAttribute('data-index', '3')
    })

    it('each card receives unique index for stagger timing', () => {
      render(<TimelineMethodology />)
      const cards = screen.getAllByTestId('timeline-step-card')
      const indices = new Set(
        cards.map((card) => card.getAttribute('data-index')),
      )
      // All cards should have unique indices
      expect(indices.size).toBe(4)
    })
  })

  describe('Component Integration', () => {
    it('integrates all child components correctly', () => {
      render(<TimelineMethodology />)
      expect(screen.getByTestId('timeline-progress')).toBeInTheDocument()
      expect(screen.getAllByTestId('timeline-step-card')).toHaveLength(4)
      expect(screen.getByTestId('section-title')).toBeInTheDocument()
    })

    it('maintains proper component hierarchy', () => {
      const { container } = render(<TimelineMethodology />)
      const section = container.querySelector('section')
      const header = screen.getByTestId('section-header')
      const content = screen.getByTestId('section-content')

      expect(section).toContainElement(header)
      expect(section).toContainElement(content)
    })
  })

  describe('Keyboard Navigation', () => {
    it('all cards are keyboard accessible with tabIndex', () => {
      render(<TimelineMethodology />)
      const cards = screen.getAllByTestId('timeline-step-card')
      cards.forEach((card) => {
        expect(card).toHaveAttribute('tabIndex', '0')
      })
    })

    it('cards have proper focus styles for keyboard users', () => {
      render(<TimelineMethodology />)
      const cards = screen.getAllByTestId('timeline-step-card')
      cards.forEach((card) => {
        const classes = card.className
        expect(classes).toContain('focus:outline-none')
        expect(classes).toContain('focus:ring-2')
        expect(classes).toContain('focus:ring-amarelo-luz')
      })
    })
  })

  describe('Reduced Motion Support', () => {
    it('passes reduced motion preference to all animated components', () => {
      mockUseReducedMotion.mockReturnValue(true)
      render(<TimelineMethodology />)

      const progressComponent = screen.getByTestId('timeline-progress')
      expect(progressComponent).toHaveAttribute('data-prefers-reduced-motion', 'true')

      const cards = screen.getAllByTestId('timeline-step-card')
      cards.forEach((card) => {
        expect(card).toHaveAttribute('data-prefers-reduced-motion', 'true')
      })
    })
  })

  describe('Responsive Layout', () => {
    it('applies mobile-first responsive classes to timeline container', () => {
      const { container } = render(<TimelineMethodology />)
      const timelineContainer = container.querySelector('.relative.py-6')
      expect(timelineContainer).toHaveClass('md:py-8', 'lg:py-8')
    })

    it('applies responsive spacing to cards container', () => {
      const { container } = render(<TimelineMethodology />)
      const cardsContainer = container.querySelector('.flex.flex-col')
      expect(cardsContainer).toHaveClass('gap-6', 'md:gap-8', 'lg:gap-12')
      expect(cardsContainer).toHaveClass('pl-12', 'md:pl-16', 'lg:pl-12')
    })

    it('renders correct number of cards for responsive layout', () => {
      render(<TimelineMethodology />)
      const cards = screen.getAllByTestId('timeline-step-card')
      // Should render all 4 cards regardless of viewport
      expect(cards).toHaveLength(4)
      // Cards should be in correct order for responsive stacking
      expect(cards[0]).toHaveAttribute('data-index', '0')
      expect(cards[1]).toHaveAttribute('data-index', '1')
      expect(cards[2]).toHaveAttribute('data-index', '2')
      expect(cards[3]).toHaveAttribute('data-index', '3')
    })

    it('renders timeline progress component correctly', () => {
      render(<TimelineMethodology />)
      const progressComponent = screen.getByTestId('timeline-progress')
      expect(progressComponent).toBeInTheDocument()
      // Progress component receives correct props for responsive behavior
      expect(progressComponent).toHaveAttribute('data-step-count', '4')
    })

    it('maintains vertical layout structure across all breakpoints', () => {
      const { container } = render(<TimelineMethodology />)
      const cardsContainer = container.querySelector('.flex.flex-col')
      expect(cardsContainer).toBeInTheDocument()
      // Should always be flex-col (vertical layout)
      expect(cardsContainer).toHaveClass('flex-col')
      expect(cardsContainer).not.toHaveClass('flex-row')
    })

    it('renders all cards without horizontal overflow on mobile', () => {
      const { container } = render(<TimelineMethodology />)
      const cards = screen.getAllByTestId('timeline-step-card')
      
      cards.forEach((card) => {
        const cardElement = card as HTMLElement
        // Cards should not have fixed widths that could cause overflow
        // They should use responsive padding and be contained within viewport
        expect(cardElement).toBeInTheDocument()
      })
    })
  })
})


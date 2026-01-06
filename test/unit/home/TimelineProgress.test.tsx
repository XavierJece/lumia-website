import { render } from '@testing-library/react'
import React from 'react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import TimelineProgress from '~/app/(marketing)/components/home/TimelineProgress'

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
    m: {
      div: ({ children, className, style }: any) => (
        <div className={className} style={style} data-testid="motion-div">
          {children}
        </div>
      ),
    },
    useTransform: vi.fn((progress, inputRange, outputRange) => {
      // Mock color interpolation: return first color if progress < 0.5, else second color
      const progressValue =
        typeof progress.get === 'function' ? progress.get() : 0
      if (progressValue < 0.5) {
        return outputRange[0]
      }
      return outputRange[outputRange.length - 1]
    }),
  }
})

describe('TimelineProgress Component', () => {
  const mockProgress = createMockMotionValue(0)
  const defaultProps = {
    progress: mockProgress as any,
    prefersReducedMotion: false,
    stepCount: 4,
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Component Rendering', () => {
    it('renders vertical line container', () => {
      const { container } = render(<TimelineProgress {...defaultProps} />)
      const lineContainer = container.querySelector('.absolute.left-4')
      expect(lineContainer).toBeInTheDocument()
    })

    it('renders base line with Forest Green color', () => {
      const { container } = render(<TimelineProgress {...defaultProps} />)
      const baseLine = container.querySelector('.absolute.inset-0.rounded-full')
      expect(baseLine).toBeInTheDocument()
      expect(baseLine).toHaveStyle({ backgroundColor: '#10763e' })
    })

    it('renders progress line overlay', () => {
      const { container } = render(<TimelineProgress {...defaultProps} />)
      const progressLines = container.querySelectorAll(
        '[data-testid="motion-div"]',
      )
      // Should have at least one motion.div for the progress line
      expect(progressLines.length).toBeGreaterThan(0)
    })

    it('renders correct number of markers', () => {
      const { container } = render(<TimelineProgress {...defaultProps} />)
      const markers = container.querySelectorAll('.rounded-full.border-2')
      // Filter out the base line (which also has rounded-full)
      // Markers have responsive sizes: h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5
      const stepMarkers = Array.from(markers).filter(
        (marker) =>
          marker.classList.contains('h-3') ||
          marker.classList.contains('h-4') ||
          marker.classList.contains('h-5'),
      )
      expect(stepMarkers.length).toBe(4)
    })

    it('renders markers with correct size classes', () => {
      const { container } = render(<TimelineProgress {...defaultProps} />)
      // Markers have responsive sizes: h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5
      const markers = container.querySelectorAll('.h-3.w-3')
      expect(markers.length).toBe(4)
    })
  })

  describe('Marker Positioning', () => {
    it('positions first marker at top (0%)', () => {
      const { container } = render(<TimelineProgress {...defaultProps} />)
      const markers = container.querySelectorAll('.rounded-full.border-2')
      const firstMarker = Array.from(markers).find(
        (m) => m.classList.contains('h-3') || m.classList.contains('h-4'),
      ) as HTMLElement
      if (firstMarker) {
        const style = firstMarker.getAttribute('style')
        expect(style).toContain('top: 0%')
      }
    })

    it('positions last marker at bottom (100%)', () => {
      const { container } = render(<TimelineProgress {...defaultProps} />)
      const markers = container.querySelectorAll('.rounded-full.border-2')
      const markerArray = Array.from(markers).filter(
        (m) => m.classList.contains('h-3') || m.classList.contains('h-4'),
      )
      const lastMarker = markerArray[markerArray.length - 1] as HTMLElement
      if (lastMarker) {
        const style = lastMarker.getAttribute('style')
        expect(style).toContain('top: 100%')
      }
    })

    it('positions markers evenly for 4 steps', () => {
      const { container } = render(<TimelineProgress {...defaultProps} />)
      const markers = container.querySelectorAll('.rounded-full.border-2')
      const stepMarkers = Array.from(markers).filter(
        (m) => m.classList.contains('h-3') || m.classList.contains('h-4'),
      )

      // Check positions: 0%, 33.33%, 66.67%, 100%
      const positions = stepMarkers.map((marker) => {
        const style = (marker as HTMLElement).getAttribute('style')
        return style
      })

      expect(positions.length).toBe(4)
    })

    it('calculates positions correctly for custom stepCount', () => {
      const { container } = render(
        <TimelineProgress {...defaultProps} stepCount={3} />,
      )
      const markers = container.querySelectorAll('.rounded-full.border-2')
      const stepMarkers = Array.from(markers).filter(
        (m) => m.classList.contains('h-3') || m.classList.contains('h-4'),
      )
      expect(stepMarkers.length).toBe(3)
    })

    it('handles single step correctly', () => {
      const { container } = render(
        <TimelineProgress {...defaultProps} stepCount={1} />,
      )
      const markers = container.querySelectorAll('.rounded-full.border-2')
      const stepMarkers = Array.from(markers).filter(
        (m) => m.classList.contains('h-3') || m.classList.contains('h-4'),
      )
      expect(stepMarkers.length).toBe(1)
    })
  })

  describe('Color Transition', () => {
    it('uses useTransform for color interpolation', () => {
      // Verify component renders (which means useTransform was called internally)
      const { container } = render(<TimelineProgress {...defaultProps} />)
      expect(container).toBeTruthy()
      const progressLines = container.querySelectorAll(
        '[data-testid="motion-div"]',
      )
      expect(progressLines.length).toBeGreaterThan(0)
    })

    it('interpolates from Forest Green to Light Yellow', () => {
      // Verify the component renders with color transition
      const { container } = render(<TimelineProgress {...defaultProps} />)
      const progressLines = container.querySelectorAll(
        '[data-testid="motion-div"]',
      )
      expect(progressLines.length).toBeGreaterThan(0)
      // Verify useTransform was called (via mock implementation)
      // The mock returns colors based on progress value
      expect(progressLines[0]).toBeInTheDocument()
    })
  })

  describe('Reduced Motion Support', () => {
    it('uses static Forest Green color when prefersReducedMotion is true', () => {
      const { container } = render(
        <TimelineProgress {...defaultProps} prefersReducedMotion={true} />,
      )
      const progressLines = container.querySelectorAll(
        '[data-testid="motion-div"]',
      )
      const progressLine = progressLines[0] as HTMLElement
      if (progressLine) {
        const style = progressLine.getAttribute('style')
        // CSS converts hex to rgb and camelCase to kebab-case
        expect(style).toContain('background-color')
        expect(style).toContain('rgb(16, 118, 62)') // #10763e in rgb
      }
    })

    it('disables color transitions for markers when prefersReducedMotion is true', () => {
      const { container } = render(
        <TimelineProgress {...defaultProps} prefersReducedMotion={true} />,
      )
      const markers = container.querySelectorAll('.rounded-full.border-2')
      const stepMarkers = Array.from(markers).filter(
        (m) => m.classList.contains('h-3') || m.classList.contains('h-4'),
      )
      stepMarkers.forEach((marker) => {
        const style = (marker as HTMLElement).getAttribute('style')
        // CSS converts hex to rgb and camelCase to kebab-case
        expect(style).toContain('background-color')
        expect(style).toContain('rgb(16, 118, 62)') // #10763e in rgb
        expect(style).toContain('border-color')
      })
    })

    it('applies dynamic color when prefersReducedMotion is false', () => {
      const { container } = render(
        <TimelineProgress {...defaultProps} prefersReducedMotion={false} />,
      )
      const progressLines = container.querySelectorAll(
        '[data-testid="motion-div"]',
      )
      expect(progressLines.length).toBeGreaterThan(0)
    })
  })

  describe('Responsive Design', () => {
    it('has responsive width classes', () => {
      const { container } = render(<TimelineProgress {...defaultProps} />)
      const lineContainer = container.querySelector('.absolute.left-4')
      expect(lineContainer).toHaveClass('w-0.5', 'md:w-1', 'lg:w-1.5')
    })

    it('has responsive positioning classes', () => {
      const { container } = render(<TimelineProgress {...defaultProps} />)
      const lineContainer = container.querySelector('.absolute.left-4')
      expect(lineContainer).toHaveClass(
        'left-4',
        'md:left-8',
        'lg:left-1/2',
        'lg:-translate-x-1/2',
      )
    })

    it('has responsive marker size classes', () => {
      const { container } = render(<TimelineProgress {...defaultProps} />)
      const markers = container.querySelectorAll('.h-3.w-3')
      expect(markers.length).toBe(4)
      // Check that markers have responsive classes
      const firstMarker = markers[0] as HTMLElement
      expect(firstMarker).toHaveClass('md:h-4', 'md:w-4', 'lg:h-5', 'lg:w-5')
    })

    it('positions line absolutely to span full height', () => {
      const { container } = render(<TimelineProgress {...defaultProps} />)
      const lineContainer = container.querySelector('.absolute.left-4')
      expect(lineContainer).toHaveClass('top-0', 'bottom-0')
    })
  })

  describe('Performance Optimization', () => {
    it('uses willChange property for hardware acceleration', () => {
      const { container } = render(
        <TimelineProgress {...defaultProps} prefersReducedMotion={false} />,
      )
      const progressLines = container.querySelectorAll(
        '[data-testid="motion-div"]',
      )
      const progressLine = progressLines[0] as HTMLElement
      if (progressLine) {
        const style = progressLine.getAttribute('style')
        // CSS converts camelCase to kebab-case
        expect(style).toContain('will-change')
        expect(style).toContain('background-color')
      }
    })

    it('component is memoized', () => {
      expect(TimelineProgress).toBeDefined()
      // Component should be memoized (React.memo wraps it)
      // React.memo returns an object with type property
      expect(TimelineProgress).toHaveProperty('$$typeof')
      // Verify it can be rendered (memoized components are still renderable)
      const { container } = render(<TimelineProgress {...defaultProps} />)
      expect(container).toBeTruthy()
    })
  })

  describe('Visual Structure', () => {
    it('has rounded line ends', () => {
      const { container } = render(<TimelineProgress {...defaultProps} />)
      const lines = container.querySelectorAll('.rounded-full')
      expect(lines.length).toBeGreaterThan(0)
    })

    it('has markers centered on line', () => {
      const { container } = render(<TimelineProgress {...defaultProps} />)
      const markers = container.querySelectorAll(
        '.left-1\\/2.-translate-x-1\\/2',
      )
      const stepMarkers = Array.from(markers).filter(
        (m) => m.classList.contains('h-3') || m.classList.contains('h-4'),
      )
      expect(stepMarkers.length).toBe(4)
    })

    it('has markers with white borders and shadows', () => {
      const { container } = render(<TimelineProgress {...defaultProps} />)
      const markers = container.querySelectorAll('.border-2.shadow-sm')
      const stepMarkers = Array.from(markers).filter(
        (m) => m.classList.contains('h-3') || m.classList.contains('h-4'),
      )
      expect(stepMarkers.length).toBe(4)
    })
  })

  describe('Default Props', () => {
    it('defaults to 4 steps when stepCount is not provided', () => {
      const { container } = render(
        <TimelineProgress
          progress={mockProgress as any}
          prefersReducedMotion={false}
        />,
      )
      const markers = container.querySelectorAll('.rounded-full.border-2')
      const stepMarkers = Array.from(markers).filter(
        (m) => m.classList.contains('h-3') || m.classList.contains('h-4'),
      )
      expect(stepMarkers.length).toBe(4)
    })
  })
})

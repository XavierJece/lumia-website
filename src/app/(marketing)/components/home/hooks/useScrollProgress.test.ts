import { act, renderHook } from '@testing-library/react'
import { useRef } from 'react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  prefersReducedMotion,
  useReducedMotion,
  useScrollProgress,
} from './useScrollProgress'

// Mock framer-motion
vi.mock('framer-motion', () => {
  const mockScrollYProgress = {
    get: vi.fn(() => 0),
    set: vi.fn(),
    on: vi.fn(),
  }

  return {
    useScroll: vi.fn(() => ({
      scrollYProgress: mockScrollYProgress,
      scrollXProgress: mockScrollYProgress,
      scrollY: mockScrollYProgress,
      scrollX: mockScrollYProgress,
    })),
    useMotionValueEvent: vi.fn(
      (_value: unknown, _event: string, callback: (latest: number) => void) => {
        // Store callback for testing
        ;(
          globalThis as unknown as { __motionCallback: typeof callback }
        ).__motionCallback = callback
      },
    ),
  }
})

describe('useScrollProgress', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns progress MotionValue and isComplete boolean', () => {
    const { result } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(null)
      return useScrollProgress(ref)
    })

    expect(result.current).toHaveProperty('progress')
    expect(result.current).toHaveProperty('isComplete')
    expect(typeof result.current.isComplete).toBe('boolean')
  })

  it('initializes with isComplete as false', () => {
    const { result } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(null)
      return useScrollProgress(ref)
    })

    expect(result.current.isComplete).toBe(false)
  })

  it('sets isComplete to true when progress reaches 1', () => {
    const { result } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(null)
      return useScrollProgress(ref)
    })

    // Simulate scroll progress reaching 1
    act(() => {
      const callback = (
        globalThis as unknown as { __motionCallback: (v: number) => void }
      ).__motionCallback
      if (callback) {
        // eslint-disable-next-line n/no-callback-literal
        callback(1)
      }
    })

    expect(result.current.isComplete).toBe(true)
  })

  it('sets isComplete back to false when scrolling back up', () => {
    const { result } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(null)
      return useScrollProgress(ref)
    })

    // Simulate scroll progress reaching 1
    act(() => {
      const callback = (
        globalThis as unknown as { __motionCallback: (v: number) => void }
      ).__motionCallback
      if (callback) {
        // eslint-disable-next-line n/no-callback-literal
        callback(1)
      }
    })

    expect(result.current.isComplete).toBe(true)

    // Simulate scrolling back up
    act(() => {
      const callback = (
        globalThis as unknown as { __motionCallback: (v: number) => void }
      ).__motionCallback
      if (callback) {
        // eslint-disable-next-line n/no-callback-literal
        callback(0.5)
      }
    })

    expect(result.current.isComplete).toBe(false)
  })
})

describe('prefersReducedMotion', () => {
  const originalMatchMedia = window.matchMedia

  afterEach(() => {
    window.matchMedia = originalMatchMedia
  })

  it('returns false when prefers-reduced-motion is not set', () => {
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: query !== '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))

    expect(prefersReducedMotion()).toBe(false)
  })

  it('returns true when prefers-reduced-motion is set to reduce', () => {
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))

    expect(prefersReducedMotion()).toBe(true)
  })
})

describe('useReducedMotion', () => {
  const originalMatchMedia = window.matchMedia
  let mockAddEventListener: ReturnType<typeof vi.fn>
  let mockRemoveEventListener: ReturnType<typeof vi.fn>
  let changeHandler: ((e: MediaQueryListEvent) => void) | null = null

  beforeEach(() => {
    mockAddEventListener = vi.fn(
      (event: string, handler: (e: MediaQueryListEvent) => void) => {
        if (event === 'change') {
          changeHandler = handler
        }
      },
    )
    mockRemoveEventListener = vi.fn()
  })

  afterEach(() => {
    window.matchMedia = originalMatchMedia
    changeHandler = null
  })

  it('returns false when prefers-reduced-motion is not set', () => {
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: mockAddEventListener,
      removeEventListener: mockRemoveEventListener,
      dispatchEvent: vi.fn(),
    }))

    const { result } = renderHook(() => useReducedMotion())
    expect(result.current).toBe(false)
  })

  it('returns true when prefers-reduced-motion is set to reduce', () => {
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: mockAddEventListener,
      removeEventListener: mockRemoveEventListener,
      dispatchEvent: vi.fn(),
    }))

    const { result } = renderHook(() => useReducedMotion())
    expect(result.current).toBe(true)
  })

  it('updates when media query changes', () => {
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: mockAddEventListener,
      removeEventListener: mockRemoveEventListener,
      dispatchEvent: vi.fn(),
    }))

    const { result } = renderHook(() => useReducedMotion())
    expect(result.current).toBe(false)

    // Simulate media query change
    act(() => {
      if (changeHandler) {
        changeHandler({ matches: true } as MediaQueryListEvent)
      }
    })

    expect(result.current).toBe(true)
  })

  it('cleans up event listener on unmount', () => {
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: mockAddEventListener,
      removeEventListener: mockRemoveEventListener,
      dispatchEvent: vi.fn(),
    }))

    const { unmount } = renderHook(() => useReducedMotion())
    unmount()

    expect(mockRemoveEventListener).toHaveBeenCalledWith(
      'change',
      expect.any(Function),
    )
  })
})

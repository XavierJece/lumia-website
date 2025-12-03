import { useState, useEffect } from 'react'

/**
 * Hook to check if a media query matches
 * @param query - Media query string (e.g., '(min-width: 768px)')
 * @returns Boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window === 'undefined') {
      return
    }

    const mediaQuery = window.matchMedia(query)
    setMatches(mediaQuery.matches)

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler)
      return () => mediaQuery.removeEventListener('change', handler)
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handler)
      return () => mediaQuery.removeListener(handler)
    }
  }, [query])

  return matches
}

/**
 * Predefined breakpoint hooks for common screen sizes
 */
export function useIsSmall() {
  return useMediaQuery('(min-width: 640px)')
}

export function useIsMedium() {
  return useMediaQuery('(min-width: 768px)')
}

export function useIsLarge() {
  return useMediaQuery('(min-width: 1024px)')
}

export function useIsXLarge() {
  return useMediaQuery('(min-width: 1280px)')
}


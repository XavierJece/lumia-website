// Design tokens to keep glassmorphism and spacing consistent across components.
// Values mirror Tailwind extensions in tailwind.config.ts to enable reuse.
export const radiusTokens = {
  glass: 'rounded-glass',
  card: 'rounded-card',
  pill: 'rounded-pill',
} as const

export const blurTokens = {
  xs: 'backdrop-blur-xs',
  sm: 'backdrop-blur-sm',
  md: 'backdrop-blur-md',
  lg: 'backdrop-blur-lg',
  xl: 'backdrop-blur-xl',
} as const

export const shadowTokens = {
  glass: 'shadow-glass',
  soft: 'shadow-soft',
  outline: 'shadow-outline',
} as const

export const spacingTokens = {
  xs: 'px-3 py-2',
  sm: 'px-4 py-3',
  md: 'px-6 py-4',
  lg: 'px-8 py-6',
} as const

export const glassTokens = {
  // Increased opacity for better legibility (was /65)
  surface: 'bg-white-essential/80 dark:bg-secondary-green/70',
  // Increased border opacity for better definition (was /25)
  border: 'border border-white/40 dark:border-white/20',
  shadow: shadowTokens.glass,
  overlay: 'bg-glass-overlay bg-[length:200%_200%] animate-gradient-move',
} as const

export const focusRingToken =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300'

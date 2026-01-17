// Export color values for use in components
// These values match the colors defined in tailwind.config.ts
export const colors = {
  // Primary brand colors
  'primary-green': '#10763e',
  'secondary-green': '#003a33',
  'horizon-green': '#003a33',
  'light-yellow': '#d2d658',
  'white-essential': '#fffbf7',
  // Green scale
  green: {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#5dbb7a',
    500: '#10763e',
    600: '#0e5e32',
    700: '#0c4726',
    800: '#092f19',
    900: '#06180d',
  },
  // Yellow scale
  yellow: {
    50: '#fbfde8',
    100: '#f5f7c8',
    200: '#eef2a5',
    300: '#e8ec81',
    400: '#e1e65d',
    500: '#d2d658',
    600: '#bdc150',
    700: '#a8ab47',
    800: '#93963f',
    900: '#7e8036',
  },
  // Neutral scale
  neutral: {
    50: '#fdfaf7',
    100: '#f8f5f2',
    200: '#eeeae6',
    300: '#e0dcd8',
    400: '#bdb9b5',
    500: '#9e9a96',
    600: '#75716d',
    700: '#61615d',
    800: '#42423e',
    900: '#21211d',
  },
  black: '#000000',
  // Semantic colors
  success: '#2e7d32',
  error: '#d32f2f',
  warning: '#ff9800',
  info: '#1976d2',
} as const

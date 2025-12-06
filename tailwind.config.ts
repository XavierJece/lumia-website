import type { Config } from 'tailwindcss'
import { colors } from './src/shared/styles/colors'

const config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors,
      backdropBlur: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      borderRadius: {
        glass: '24px',
        card: '18px',
        pill: '999px',
      },
      boxShadow: {
        glass: '0 10px 40px rgba(0, 58, 51, 0.18)',
        soft: '0 6px 24px rgba(0, 0, 0, 0.08)',
        outline: '0 0 0 1px rgba(33, 33, 29, 0.08)',
      },
      backgroundImage: {
        'glass-overlay':
          'linear-gradient(135deg, rgba(255, 251, 247, 0.9) 0%, rgba(255, 251, 247, 0.7) 45%, rgba(16, 118, 62, 0.08) 100%)',
      },
      fontFamily: {
        maven: ['var(--font-maven)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      fontSize: {
        // Desktop typography scale
        h1: [
          '3rem',
          { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' },
        ],
        h2: [
          '2.25rem',
          { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' },
        ],
        h3: [
          '1.875rem',
          { lineHeight: '1.3', letterSpacing: '0', fontWeight: '600' },
        ],
        h4: [
          '1.5rem',
          { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '600' },
        ],
        h5: [
          '1.25rem',
          { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '600' },
        ],
        h6: [
          '1.125rem',
          { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '600' },
        ],
        lead: [
          '1.25rem',
          { lineHeight: '1.6', letterSpacing: '0.02em', fontWeight: '400' },
        ],
        'body-large': [
          '1.125rem',
          { lineHeight: '1.6', letterSpacing: '0.02em', fontWeight: '400' },
        ],
        'body-base': [
          '1rem',
          { lineHeight: '1.7', letterSpacing: '0.03em', fontWeight: '400' },
        ],
        'body-small': [
          '0.875rem',
          { lineHeight: '1.6', letterSpacing: '0.03em', fontWeight: '400' },
        ],
        caption: [
          '0.75rem',
          { lineHeight: '1.4', letterSpacing: '0.04em', fontWeight: '400' },
        ],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
